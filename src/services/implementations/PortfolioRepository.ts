import { IPortfolioRepository, PortfolioBundle } from '../interfaces/IPortfolioRepository';
import { ICacheService } from '../interfaces/ICacheService';
import { isrCache } from './IsrCacheService';
import {
  profileData,
  experienceData,
  skillsData,
  educationData,
  projectsData,
  certificationsData,
} from '../../data';
import { ISR_REVALIDATE_SECONDS } from '../../utils/constants';

const CACHE_KEY = 'portfolio-bundle';

/**
 * Single Responsibility: fetch + ISR revalidation only.
 * Dependency Inversion: depends on ICacheService abstraction.
 */
export class PortfolioRepository implements IPortfolioRepository {
  constructor(private readonly cache: ICacheService = isrCache) {}

  private async loadFresh(): Promise<PortfolioBundle> {
    // Simulate network latency for skeleton / concurrent UX demos
    await new Promise((resolve) => setTimeout(resolve, 600));

    return {
      profile: profileData,
      experience: experienceData,
      skills: skillsData,
      education: educationData,
      projects: projectsData,
      certifications: certificationsData,
    };
  }

  async getAll(): Promise<PortfolioBundle> {
    const cached = this.cache.get<PortfolioBundle>(CACHE_KEY);

    if (cached && !this.cache.isStale(CACHE_KEY)) {
      return cached.data;
    }

    // Stale-while-revalidate: return stale immediately if present
    if (cached) {
      void this.revalidate();
      return cached.data;
    }

    const fresh = await this.loadFresh();
    this.cache.set(CACHE_KEY, fresh, ISR_REVALIDATE_SECONDS);
    return fresh;
  }

  async revalidate(): Promise<PortfolioBundle> {
    const fresh = await this.loadFresh();
    this.cache.set(CACHE_KEY, fresh, ISR_REVALIDATE_SECONDS);
    return fresh;
  }
}
