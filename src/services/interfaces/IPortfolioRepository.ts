import {
  ProfileData,
  Experience,
  SkillGroup,
  Education,
  Project,
  Certification,
} from '../../types';

/** Aggregated portfolio payload (Interface Segregation — focused contract). */
export interface PortfolioBundle {
  profile: ProfileData;
  experience: Experience[];
  skills: SkillGroup[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
}

/**
 * Dependency Inversion: UI/store depends on this abstraction,
 * not on concrete data sources.
 */
export interface IPortfolioRepository {
  getAll(): Promise<PortfolioBundle>;
  revalidate(): Promise<PortfolioBundle>;
}
