/**
 * @description 自动引入符合格式的路由文件
 */
const modules = import.meta.globEager('/src/views/**/routes.js')

let asyncRoutes = []
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(...modules[key].default)
})
asyncRoutes.push({
  path: '/:pathMatch(.*)*',
  redirect: '/not-found',
})
export default asyncRoutes
