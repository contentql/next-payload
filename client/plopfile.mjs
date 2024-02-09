const plopConfiguration = (/** @type {import('plop').NodePlopAPI} */ plop) => {
  plop.setGenerator('dashboard', {
    description: 'generate a new dashboard component',
    prompts: [
      {
        type: 'input',
        name: 'tableName',
        message: 'please enter the table name: ',
      },
      {
        type: 'input',
        name: 'arrayData',
        message: 'example: [{accessorKey: "orders", title: "Orders"}] ',
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
        path: 'app/_views/{{pascalCase tableName}}View.tsx',
        templateFile: 'templates/dashboard/view.template.hbs',
      },
      {
        type: 'add',
        path: 'app/(dashboard)/dashboard/{{dashCase tableName}}/page.tsx',
        templateFile: 'templates/dashboard/page.template.hbs',
      },
      {
        type: 'add',
        path: 'app/(dashboard)/dashboard/{{dashCase tableName}}/loading.tsx',
        templateFile: 'templates/dashboard/loading.template.hbs',
      },
      {
        type: 'add',
        path: 'apis/{{dashCase tableName}}/queries.ts',
        templateFile: 'templates/dashboard/apis/queries.template.hbs',
      },
      {
        type: 'add',
        path: 'apis/{{dashCase tableName}}/mutations.ts',
        templateFile: 'templates/dashboard/apis/mutations.template.hbs',
      },
      {
        type: 'add',
        path: 'apis/{{dashCase tableName}}/index.ts',
        templateFile: 'templates/dashboard/apis/index.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase tableName}}/{{dashCase tableName}}.tsx',
        templateFile: 'templates/dashboard/table/component.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase tableName}}/data-table.tsx',
        templateFile: 'templates/dashboard/table/data-table.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase tableName}}/data-table-view-options.tsx',
        templateFile:
          'templates/dashboard/table/data-table-view-options.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase tableName}}/{{dashCase tableName}}-create-button.tsx',
        templateFile: 'templates/dashboard/table/create-button.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase tableName}}/data-table-toolbar.tsx',
        templateFile:
          'templates/dashboard/table/data-table-toolbar.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase tableName}}/data-table-row-actions.tsx',
        templateFile:
          'templates/dashboard/table/data-table-row-actions.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase tableName}}/data-table-pagination.tsx',
        templateFile:
          'templates/dashboard/table/data-table-pagination.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase tableName}}/data-table-faceted-filter.tsx',
        templateFile:
          'templates/dashboard/table/data-table-faceted-filter.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase tableName}}/data-table-column-header.tsx',
        templateFile:
          'templates/dashboard/table/data-table-column-header.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase tableName}}/columns.tsx',
        templateFile: 'templates/dashboard/table/columns.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{dashCase tableName}}/columns-list.tsx',
        templateFile: 'templates/dashboard/table/columns-list.template.hbs',
      },
    ],
  })

  plop.setGenerator('test', {})
}

export default plopConfiguration
