import { SkillGroup } from '../types';

const skillsData: SkillGroup[] = [
  {
    category: 'Languages & Frameworks',
    items: ['C#', 'ASP.NET Core MVC', 'ASP.NET Core Web API', 'Entity Framework Core', 'ADO.NET'],
  },
  {
    category: 'Cloud & Azure',
    items: ['Azure App Service', 'Azure WebJobs', 'Azure Functions', 'Logic Apps', 'Storage Account', 'Log Analytics', 'Application Insights', 'Key Vault'],
  },
  {
    category: 'SharePoint',
    items: ['SharePoint Online', 'CSOM', 'Site Provisioning', 'List & Library Management'],
  },
  {
    category: 'Databases',
    items: ['SQL Server 2017/2019', 'Stored Procedures'],
  },
  {
    category: 'Front-End',
    items: ['React.js', 'Redux', 'Jest', 'JavaScript', 'jQuery', 'HTML5', 'CSS3'],
  },
  {
    category: 'Architecture & Patterns',
    items: ['Clean Architecture', 'CQRS', 'MediatR', 'Repository Pattern', 'DDD'],
  },
  {
    category: 'Auth & Security',
    items: ['JWT Authentication', 'Azure Entra ID (AAD)', 'OAuth 2.0'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Azure DevOps', 'Git', 'GitHub', 'Postman', 'Swagger/OpenAPI', 'Visual Studio', 'VS Code'],
  },
  {
    category: 'Other',
    items: ['WordPress', 'Docker (basic)'],
  },
];

export default skillsData;