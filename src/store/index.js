/**
 * @description pinia入口函数
 */
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist' // 数据持久化，默认会存在sessionStorage里面

export function setupStore(app) {
  const store = createPinia()
  store.use(piniaPluginPersist)
  app.use(store)
}
