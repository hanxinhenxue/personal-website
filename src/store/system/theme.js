import { defineStore } from 'pinia'
import themeSettings from '@/configs/theme.setting.js'
export const useThemeStore = defineStore('theme', {
  state: () => ({
    themeSettings, // 主题覆盖
  }),
})
