const plopConfiguration = (/** @type {import('plop').NodePlopAPI} */ plop) => {
  plop.setGenerator('dashboard', {
    description: 'generate a new dashboard component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'please enter the component name: ',
      },
      {
        type: 'input',
        name: 'tableName',
        message: 'please enter the table name: ',
      },
      {
        type: 'list',
      },
    ],
    actions: [
      {
        type: 'append',
        path: 'config/dashboard.ts',
        pattern: /\/\/append_dashboard_nav/i,
        templateFile: 'templates/dashboard/config.template.hbs',
      },
      {
        type: 'append',
        path: 'config/routes.ts',
        pattern: /\/\/append_dashboard_routes/i,
        templateFile: 'templates/dashboard/routes.template.hbs',
      },
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
        type: 'add',
        path: 'apis/{{lowerCase tableName}}/queries.ts',
        templateFile: 'templates/dashboard/apis/queries.template.hbs',
      },
      {
        type: 'add',
        path: 'apis/{{lowerCase tableName}}/mutations.ts',
        templateFile: 'templates/dashboard/apis/mutations.template.hbs',
      },
      {
        type: 'add',
        path: 'apis/{{lowerCase tableName}}/index.ts',
        templateFile: 'templates/dashboard/apis/index.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{lowerCase tableName}}/data-table.tsx',
        templateFile: 'templates/dashboard/table/data-table.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{lowerCase tableName}}/data-table-view-options.tsx',
        templateFile:
          'templates/dashboard/table/data-table-view-options.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{lowerCase tableName}}/data-table-toolbar.tsx',
        templateFile:
          'templates/dashboard/table/data-table-toolbar.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{lowerCase tableName}}/data-table-row-actions.tsx',
        templateFile:
          'templates/dashboard/table/data-table-row-actions.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{lowerCase tableName}}/data-table-pagination.tsx',
        templateFile:
          'templates/dashboard/table/data-table-pagination.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{lowerCase tableName}}/data-table-faceted-filter.tsx',
        templateFile:
          'templates/dashboard/table/data-table-faceted-filter.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{lowerCase tableName}}/data-table-column-header.tsx',
        templateFile:
          'templates/dashboard/table/data-table-column-header.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{lowerCase tableName}}/columns.tsx',
        templateFile: 'templates/dashboard/table/columns.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{lowerCase tableName}}/columns-list.tsx',
        templateFile: 'templates/dashboard/table/columns-list.template.hbs',
      },
    ],
  })

  plop.setGenerator('test', {})
}

export default plopConfiguration
