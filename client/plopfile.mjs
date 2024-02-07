export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
  plop.setGenerator('dashboard', {
    description: 'generate a new dashboard component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'please insert the component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/(dashboard)/dashboard/{{pascalCase name}}/page.tsx',
        templateFile: 'templates/dashboardNav.template.hbs',
      },
    ],
  });
}
