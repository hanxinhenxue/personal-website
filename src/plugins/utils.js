/**
 * @description 全局方法安装
 */
import globalUtils from '@/utils/global.js'
export function setupUtils() {
  for (let key in globalUtils) {
    window[key] = globalUtils[key]
  }
}
