import Layout from '@/layout/index.vue'
export default [
  {
    path: '/platform-entry',
    name: 'platformEntry',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('views/main-client/platform-entrance/index.vue'),
        meta: {
          pageTitle: '主站',
        },
      },
    ],
  },
]
