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
        '@pics': resolve(__dirname, 'src/assets/images'),
        '~store': resolve(__dirname, 'src/store'),
      },
    },
    server: {
      port: 9999,
      open: true,
      host: '0.0.0.0',
      https: false,
      // proxy: {
      //   '/supervise': {
      //     target: 'http://supervise.bmsoft.com:9080/',
      //     changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      //     ws: true, // 是否启用websockets
      //     logLevel: 'debug',
      //   },
      // },
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
