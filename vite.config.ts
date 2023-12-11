import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import svgLoader from 'vite-svg-loader'
import eslintPlugin from 'vite-plugin-eslint'
import { loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    base: mode === 'gh' ? '/city-generator/' : '/',
    plugins: [
      vue(),
      svgLoader(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      eslintPlugin(),
    ],
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "@/assets/styles/main";` },
      },
    },
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    preview: {
      port: 3000,
    },
    server: {
      port: 8080,
      hmr: {
        host: 'localhost',
      },
      proxy: {
        '/ai/': {
          target: 'https://namegenerator.com',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    test: {
      // silent: true,
      globals: true,
      environment: 'jsdom',
      setupFiles: '/tests/setup-vitest.ts',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        exclude: ['node_modules/', '/tests/setup-vitest.ts'],
      },
    },
  })
}
