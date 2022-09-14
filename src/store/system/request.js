import { defineStore } from 'pinia'

export const requestPoolStore = defineStore({
  id: 'poolStore',
  state: () => ({
    requestPool: [], // ajax请求池
  }),
  actions: {
    // 取消请求池里面单个ajax请求并删除
    cancelRequest(index) {
      this.requestPool[index].cancel()
      this.requestPool.splice(index, 1)
    },
    // 新增请求到资源池
    addRequestToPool(requestConfig) {
      this.requestPool.push(requestConfig)
    },
    // 请求成功/失败删除该请求
    removeResponse(index) {
      this.requestPool.splice(index, 1)
    },
    // 清空请求池
    clearRequestPool() {
      this.requestPool.forEach((item) => {
        item.cancel('路由跳转取消请求')
      })
      this.requestPool = []
    },
  },
})
