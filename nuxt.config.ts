import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '@/plugins/vuetify/index.ts',
  ],
   // ℹ️ Disable source maps until this is resolved: https://github.com/vuetifyjs/vuetify-loader/issues/290
  sourcemap: {
    server: false,
    client: false,
  },
  vite: {
    define: { 'process.env': {} },
     
    optimizeDeps: {
      exclude: ['vuetify'],
      entries: [
        './**/*.vue',
      ],
    },
    plugins: [
      vuetify(),
    ],
  },
  build: {
    transpile: ['vuetify'],
  },
})
