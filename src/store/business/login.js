import { defineStore } from 'pinia'
export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    role: '', // 用户角色
    permissionRoutes: {}, // 该账号权限下拥有的所有权限的路由
    allMainNav: [], // 全部六大导航
    visitWhiteList: [], // 访问白名单
  }),
  getters: {
    // 获取用户角色
    userRole: (state) => state.role,
    // 获取用户权限路由表
    canVisitRoutes: (state) => state.permissionRoutes,
    // 获取六大导航
    pageMainNav: (state) => state.allMainNav,
    // 获取访问白名单
    whiteList: (state) => state.visitWhiteList,
  },
  actions: {
    // 设置用户角色
    setUserRole(role) {
      this.role = role
    },
    // 设置用户可以访问的路由
    setUserVisitRoutes(routeConfig) {
      this.permissionRoutes = routeConfig
    },
    // 设置导航栏
    setMainNav(navArray) {
      this.allMainNav = navArray
    },
    // 设置访问白名单
    setWhiteList(list) {
      this.visitWhiteList = list
    },
    // 登出
    loginOut() {
      return new Promise((resolve) => {
        this.role = ''
        this.permissionRoutes = {}
        this.allMainNav = []
        this.visitWhiteList = []
        resolve()
      })
    },
  },
  persist: {
    enabled: true,
  },
})
