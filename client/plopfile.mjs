const plopConfiguration = (/** @type {import('plop').NodePlopAPI} */ plop) => {
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
        path: 'app/_views/{{pascalCase name}}View.tsx',
        templateFile: 'templates/dashboard/view.template.hbs',
      },
      {
        type: 'add',
        path: 'app/(dashboard)/dashboard/{{camelCase name}}/_components/{{pascalCase name}}.tsx',
        templateFile: 'templates/dashboard/component.template.hbs',
      },
      {
        type: 'add',
        path: 'app/(dashboard)/dashboard/{{camelCase name}}/page.tsx',
        templateFile: 'templates/dashboard/page.template.hbs',
      },
      {
        type: 'add',
        path: 'app/(dashboard)/dashboard/{{camelCase name}}/loading.tsx',
        templateFile: 'templates/dashboard/loading.template.hbs',
      },
      {
        type: 'append',
        path: 'config/dashboard.ts',
        pattern: /\/\/append_dashboard_nav/i,
        templateFile: 'templates/dashboard/config.template.hbs',
      },
    ],
  });

  plop.setGenerator('test', {});
};

export default plopConfiguration;
