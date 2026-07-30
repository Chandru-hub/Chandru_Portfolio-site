import { CacheEntry, ICacheService } from '../interfaces/ICacheService';

/**
 * In-memory + localStorage ISR-style cache.
 * Serves stale content immediately, marks entries for background revalidation.
 */
export class IsrCacheService implements ICacheService {
  private memory = new Map<string, CacheEntry<unknown>>();
  private readonly storagePrefix = 'isr-cache:';

  get<T>(key: string): CacheEntry<T> | null {
    const mem = this.memory.get(key) as CacheEntry<T> | undefined;
    if (mem) return mem;

    if (typeof window === 'undefined') return null;

    try {
      const raw = localStorage.getItem(this.storagePrefix + key);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as CacheEntry<T>;
      this.memory.set(key, parsed);
      return parsed;
    } catch {
      return null;
    }
  }

  set<T>(key: string, data: T, revalidateSeconds: number): void {
    const now = Date.now();
    const entry: CacheEntry<T> = {
      data,
      cachedAt: now,
      revalidateAt: now + revalidateSeconds * 1000,
    };
    this.memory.set(key, entry);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(this.storagePrefix + key, JSON.stringify(entry));
      } catch {
        // Quota exceeded — memory cache still works
      }
    }
  }

  isStale(key: string): boolean {
    const entry = this.get(key);
    if (!entry) return true;
    return Date.now() >= entry.revalidateAt;
  }

  clear(key?: string): void {
    if (key) {
      this.memory.delete(key);
      if (typeof window !== 'undefined') {
        localStorage.removeItem(this.storagePrefix + key);
      }
      return;
    }
    this.memory.clear();
    if (typeof window !== 'undefined') {
      Object.keys(localStorage)
        .filter((k) => k.startsWith(this.storagePrefix))
        .forEach((k) => localStorage.removeItem(k));
    }
  }
}

export const isrCache = new IsrCacheService();
