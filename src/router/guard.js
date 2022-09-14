/**
 * @description 路由守卫入口函数
 */
import { autoInjectTitle } from '@/middleware/router/auto-inject-title.js' // 自动注入标题
import { createRouteLoadingGuard } from '@/middleware/router/route-loading-guard.js' // 路由加载守卫
// import { createPermissionGuard } from '@/middleware/router/permission-guard.js' // 登录拦截
export function setupRouterGuard(router) {
  autoInjectTitle(router)
  createRouteLoadingGuard(router)
  // createPermissionGuard(router)
}
