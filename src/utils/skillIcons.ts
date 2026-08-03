/** Devicon CDN — reliable for Microsoft/.NET/Azure icons. */
const DEVICON = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

export const SKILL_ICON_MAP: Record<string, string> = {
  'C#': DEVICON('csharp/csharp-original.svg'),
  'ASP.NET Core MVC': DEVICON('dotnetcore/dotnetcore-original.svg'),
  'ASP.NET Core Web API': DEVICON('dotnetcore/dotnetcore-original.svg'),
  'Entity Framework Core': DEVICON('dotnetcore/dotnetcore-original.svg'),
  'ADO.NET': DEVICON('dotnetcore/dotnetcore-original.svg'),
  'Azure App Service': DEVICON('azure/azure-original.svg'),
  'Azure WebJobs': DEVICON('azure/azure-original.svg'),
  'Azure Functions': DEVICON('azure/azure-original.svg'),
  'Logic Apps': DEVICON('azure/azure-original.svg'),
  'Storage Account': DEVICON('azure/azure-original.svg'),
  'Log Analytics': DEVICON('azure/azure-original.svg'),
  'Application Insights': DEVICON('azure/azure-original.svg'),
  'Key Vault': DEVICON('azure/azure-original.svg'),
  'SharePoint Online': DEVICON('windows8/windows8-original.svg'),
  CSOM: DEVICON('windows8/windows8-original.svg'),
  'Site Provisioning': DEVICON('windows8/windows8-original.svg'),
  'List & Library Management': DEVICON('windows8/windows8-original.svg'),
  'SQL Server 2017/2019': DEVICON('microsoftsqlserver/microsoftsqlserver-plain.svg'),
  'Stored Procedures': DEVICON('microsoftsqlserver/microsoftsqlserver-plain.svg'),
  'React.js': DEVICON('react/react-original.svg'),
  Redux: DEVICON('redux/redux-original.svg'),
  Jest: DEVICON('jest/jest-plain.svg'),
  JavaScript: DEVICON('javascript/javascript-original.svg'),
  jQuery: DEVICON('jquery/jquery-original.svg'),
  HTML5: DEVICON('html5/html5-original.svg'),
  CSS3: DEVICON('css3/css3-original.svg'),
  'Clean Architecture': DEVICON('dotnetcore/dotnetcore-original.svg'),
  CQRS: DEVICON('dotnetcore/dotnetcore-original.svg'),
  MediatR: DEVICON('dotnetcore/dotnetcore-original.svg'),
  'Repository Pattern': DEVICON('dotnetcore/dotnetcore-original.svg'),
  DDD: DEVICON('dotnetcore/dotnetcore-original.svg'),
  'JWT Authentication': DEVICON('json/json-original.svg'),
  'Azure Entra ID (AAD)': DEVICON('azure/azure-original.svg'),
  'OAuth 2.0': DEVICON('oauth/oauth-original.svg'),
  'Azure DevOps': DEVICON('azuredevops/azuredevops-original.svg'),
  Git: DEVICON('git/git-original.svg'),
  GitHub: DEVICON('github/github-original.svg'),
  Postman: DEVICON('postman/postman-original.svg'),
  'Swagger/OpenAPI': DEVICON('swagger/swagger-original.svg'),
  'Visual Studio': DEVICON('visualstudio/visualstudio-plain.svg'),
  'VS Code': DEVICON('vscode/vscode-original.svg'),
  WordPress: DEVICON('wordpress/wordpress-original.svg'),
  'Docker (basic)': DEVICON('docker/docker-original.svg'),
};

/** Featured tech logos shown as a visual strip. */
export const FEATURED_SKILL_ICONS = [
  { label: 'React', src: DEVICON('react/react-original.svg') },
  { label: 'Redux', src: DEVICON('redux/redux-original.svg') },
  { label: 'JavaScript', src: DEVICON('javascript/javascript-original.svg') },
  { label: 'HTML5', src: DEVICON('html5/html5-original.svg') },
  { label: 'CSS3', src: DEVICON('css3/css3-original.svg') },
  { label: '.NET', src: DEVICON('dotnetcore/dotnetcore-original.svg') },
  { label: 'C#', src: DEVICON('csharp/csharp-original.svg') },
  { label: 'Azure', src: DEVICON('azure/azure-original.svg') },
  { label: 'SQL Server', src: DEVICON('microsoftsqlserver/microsoftsqlserver-plain.svg') },
  { label: 'SharePoint', src: DEVICON('windows8/windows8-original.svg') },
  { label: 'Git', src: DEVICON('git/git-original.svg') },
  { label: 'GitHub', src: DEVICON('github/github-original.svg') },
  { label: 'Docker', src: DEVICON('docker/docker-original.svg') },
  { label: 'Jest', src: DEVICON('jest/jest-plain.svg') },
  { label: 'Postman', src: DEVICON('postman/postman-original.svg') },
  { label: 'VS Code', src: DEVICON('vscode/vscode-original.svg') },
] as const;

export function getSkillIcon(skill: string): string | undefined {
  return SKILL_ICON_MAP[skill];
}
