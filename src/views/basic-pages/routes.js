import Layout from '@/layout/index.vue'
export default [
  {
    path: '/',
    redirect: '/platform-entry',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/basic-pages/login/index.vue'),
    meta: {
      pageTitle: '登录',
    },
  },
  {
    path: '/not-found',
    name: 'notFound',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('views/basic-pages/not-found/index.vue'),
        meta: {
          pageTitle: '页面找不到',
        },
      },
    ],
  },
]
