import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '~store'
import { setupEcharts } from '@/plugins/echarts.js'
import { setupUtils } from '@/plugins/utils.js'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '@/styles/index.scss'
function setupProject() {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  setupEcharts(app)
  setupUtils()
  app.mount('#app')
}
setupProject()
