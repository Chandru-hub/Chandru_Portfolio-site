/** Cache contract for ISR-style stale-while-revalidate (Open/Closed). */
export interface CacheEntry<T> {
  data: T;
  cachedAt: number;
  revalidateAt: number;
}

export interface ICacheService {
  get<T>(key: string): CacheEntry<T> | null;
  set<T>(key: string, data: T, revalidateSeconds: number): void;
  isStale(key: string): boolean;
  clear(key?: string): void;
}
