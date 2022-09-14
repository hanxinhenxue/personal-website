import { defineStore } from 'pinia'
export const usePageLayoutStore = defineStore('pageLayout', {
  state: () => ({
    collapseStatus: true, // true是展开，  false是收起到容器外面
  }),
  getters: {
    // 获取pageLayout组件的展开收起状态
    isCollapsed: (state) => state.collapseStatus,
  },
  actions: {
    // 设置两侧看板展开收起状态
    togglePanelStatus() {
      this.collapseStatus = !this.collapseStatus
    },
  },
})
