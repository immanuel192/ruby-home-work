const routes = [
  {
    path: '/today/',
    asyncComponent: () => import(/* webpackChunkName: "app-today" *//* webpackPreload: true */ '@/views/Today.vue'),
  },
  {
    path: '/subject/',
    asyncComponent: () => import(/* webpackChunkName: "app-today" *//* webpackPreload: true */ '@/views/Subject.vue'),
  },
  {
    path: '/games/',
    asyncComponent: () => import(/* webpackChunkName: "app-games" *//* webpackPreload: true */ '@/views/Games.vue'),
  },
  {
    path: '/apps/',
    asyncComponent: () => import(/* webpackChunkName: "app-apps" *//* webpackPreload: true */ '@/views/Apps.vue'),
  },
  {
    path: '/app/:id',
    asyncComponent: () => import(/* webpackChunkName: "app-details" *//* webpackPreload: true */ '@/views/AppDetails.vue'),
  },
  {
    path: '/account/',
    popup: {
      asyncComponent: () => import(/* webpackChunkName: "account" *//* webpackPreload: true */ '@/views/Account.vue'),
    },
  },
  {
    path: '(.*)',
    asyncComponent: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
  },
];

export default routes;
