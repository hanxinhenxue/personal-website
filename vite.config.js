import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/personal-website/',
    plugins: [
      vue(),
      WindiCSS(),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
      AutoImport({
        imports: ['vue', 'vue-router', 'vue-i18n'],
        dts: false,
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        views: resolve(__dirname, 'src/views'),
        '~pics': resolve(__dirname, 'src/assets/images'),
        bmPages: resolve(__dirname, 'src/views/bm-pages'),
        '~store': resolve(__dirname, 'src/store'),
      },
    },
    server: {
      port: 9999,
      open: true,
      host: '0.0.0.0',
      https: false,
      proxy: {},
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
        ],
      },
    },
  }
})
