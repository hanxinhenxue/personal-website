import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import PROJECT_SETTING from '@/configs/project.setting' // 导入路由默认配置
const { isHash } = PROJECT_SETTING.router
import { setupRouterGuard } from './guard'
import routes from './auto-import'

export const router = createRouter({
  history: isHash ? createWebHashHistory() : createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 安装路由入口函数
export function setupRouter(app) {
  app.use(router)
  setupRouterGuard(router)
}
