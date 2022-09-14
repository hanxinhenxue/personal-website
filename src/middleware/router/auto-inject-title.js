/**
 * @description 在路由里面自动注入标题、关键字、描述等
 */
import PROJECT_SETTING from '@/configs/project.setting.js'
const { globalTitle } = PROJECT_SETTING.page

export function autoInjectTitle(router) {
  router.afterEach((to) => {
    const pageTitle = to.meta?.pageTitle
    if (pageTitle) {
      document.title = `${globalTitle} | ${pageTitle}`
    } else {
      document.title = globalTitle
    }
  })
}
