const routes = [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      {
        path: '/',
        component: '@/pages/index',
      },
      {
        path: '/example',
        component: '@/pages/example',
      },
    ],
  },
];

export { routes };
