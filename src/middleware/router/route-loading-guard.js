/**
 * @description 在路由加载时顶部加载动画、未完成的请求处理
 */
import { requestPoolStore } from '@/store/system/request.js'
export function createRouteLoadingGuard(router) {
  router.beforeEach(() => {
    // 进入新路由取消上一个路由的所有未完成的请求
    const poolStore = requestPoolStore()
    poolStore.clearRequestPool()
    window.$loadingBar?.start()
  })
  router.afterEach(() => {
    setTimeout(() => {
      window.$loadingBar?.finish()
    }, 200)
  })

  router.onError(() => {
    window.$loadingBar?.error()
  })
}
