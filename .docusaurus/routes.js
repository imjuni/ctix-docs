import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ctix/',
    component: ComponentCreator('/ctix/', '504'),
    routes: [
      {
        path: '/ctix/',
        component: ComponentCreator('/ctix/', '249'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ctix/api',
        component: ComponentCreator('/ctix/api', 'ac0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ctix/api/modules',
        component: ComponentCreator('/ctix/api/modules', '570'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ctix/extra/migration-guilde',
        component: ComponentCreator('/ctix/extra/migration-guilde', '733'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ctix/extra/use-root-dir',
        component: ComponentCreator('/ctix/extra/use-root-dir', 'a93'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ctix/usage/create-command',
        component: ComponentCreator('/ctix/usage/create-command', '150'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ctix/usage/remove-command',
        component: ComponentCreator('/ctix/usage/remove-command', '5ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ctix/usage/single-command',
        component: ComponentCreator('/ctix/usage/single-command', '0e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
