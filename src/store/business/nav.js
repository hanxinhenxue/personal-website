import { defineStore } from 'pinia'
export const useNavRouteStore = defineStore('navRouteManager', {
  state: () => ({
    popupStatus: false, // 弹窗状态
    popupUrl: '', // 弹窗链接
  }),
  getters: {
    // 获取弹窗状态
    popupShow: (state) => state.popupStatus,
    // 获取弹窗链接
    popupOuterChain: (state) => state.popupUrl,
  },
  actions: {
    // 打开弹窗
    openGlobalChain(url) {
      this.popupUrl = url
      this.popupStatus = true
    },
    // 关闭弹窗
    closeGlobalChain() {
      this.popupUrl = ''
      this.popupStatus = false
    },
  },
  persist: {
    enabled: true,
  },
})
