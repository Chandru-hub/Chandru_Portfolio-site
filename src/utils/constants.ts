export const CONTACT_INFO = {
  email: 'schandrubtech@gmail.com',
  phone: '+91 6382777327',
  location: 'Chennai, India',
  linkedin: '',
};

export const BRAND_NAME = 'CS.dev';
export const FOOTER_TEXT =
  'built with React Fiber · Redux · Context · Motion · SW · ISR';

/** ISR revalidate window (seconds) — stale-while-revalidate */
export const ISR_REVALIDATE_SECONDS = 60;

export const NAV_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certs' },
] as const;
