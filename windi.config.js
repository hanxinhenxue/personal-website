import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  preflight: false,
  shortcuts: {
    box: 'w-full h-full',
    layer: 'relative z-0',
  },
})
