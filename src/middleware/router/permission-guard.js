/**
 * @description 登录信息验证
 */
import { useLoginStore } from '@/store/business/login.js'
const WHITE_LIST = ['/login', '/redirect']
export function createPermissionGuard(router) {
  router.beforeEach(async (to, from, next) => {
    // 进入新路由取消上一个路由的所有未完成的请求
    const useLogin = useLoginStore()
    if (useLogin.userRole) {
      if (to.path === '/login') {
        next({ path: '/platform-entry' })
      } else {
        next()
      }
    } else {
      if (WHITE_LIST.includes(to.path)) {
        next()
      } else {
        $message.info('请先登录！')
        next({ path: '/login', query: { ...to.query, redirect: to.path } })
      }
    }
  })
}
