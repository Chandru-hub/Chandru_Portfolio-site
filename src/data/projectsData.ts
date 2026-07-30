import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Lung Cancer Prediction Using Data Mining (KNN)',
    category: 'academic · research',
    description:
      'Final-year research project applying the KNN algorithm for early prediction through medical symptoms — focused on practical classification and clear evaluation.',
    stack: ['Python', 'KNN', 'Data Mining'],
  },
  {
    id: 2,
    title: 'Enterprise Compliance & Incident Modules',
    category: 'enterprise · ASP.NET Core',
    description:
      'Compliance and incident-management modules for Fortune 500 workflows — secure APIs, SQL Server, and React front ends delivered in Agile sprints.',
    stack: ['ASP.NET Core', 'React', 'SQL Server', 'Azure'],
  },
  {
    id: 3,
    title: 'SharePoint SPFx Experience Layer',
    category: 'SharePoint · SPFx',
    description:
      'Custom SPFx web parts with React/TypeScript, Fluent UI, and PnPjs for SharePoint Online — focused on maintainable UX inside the Microsoft 365 shell.',
    stack: ['SPFx', 'TypeScript', 'Fluent UI', 'PnPjs'],
  },
];

export default projectsData;
