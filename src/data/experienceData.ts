import { Experience } from '../types';

const experienceData: Experience[] = [
  {
    id: 1,
    title: 'Full-Stack Developer',
    company: 'ConvergePoint',
    period: 'Jul 2022 – Present',
    description: 'Incident Management & Compliance · React.js · ASP.NET Core · SharePoint Online · Azure',
    achievements: [
      'Built enterprise compliance modules with ASP.NET Core Web API and SQL Server for Fortune 500.',
      'Custom SPFx web parts with React/TypeScript, Fluent UI, and PnPjs for SharePoint Online.',
      'State management with React Hooks/Context API, lazy loading, code-splitting, and Jest unit tests.',
      'Azure WebJobs (sequential/parallel), Functions (Storage Queue triggers), Logic Apps, Key Vault, Application Insights.',
      'Agile sprints, code reviews, Azure DevOps CI/CD and pull request workflows.',
    ],
  },
  {
    id: 2,
    title: 'Web Programmer',
    company: 'Dotcom Infotech',
    period: 'Feb 2020 – Jun 2022',
    description: 'Buyautoparts E-Commerce · ASP.NET Core MVC · JavaScript · SQL Server',
    achievements: [
      'Full-featured e-commerce with product catalogue, shopping cart, order processing.',
      'Responsive UI with HTML5, CSS3, jQuery, and JavaScript; cross-browser compatibility.',
      'WordPress corporate sites with custom plugins and theme modifications.',
      'Optimized SQL Server queries and schemas for e-commerce workloads.',
    ],
  },
];

export default experienceData;