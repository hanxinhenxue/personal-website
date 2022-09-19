import Layout from '@/layout/index.vue'
export default [
  {
    path: '/request-pages/health-code',
    name: 'healthCode',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('views/request-pages/health-code/index.vue'),
        meta: {
          pageTitle: '防疫健康码概览',
        },
      },
    ],
  },
]
