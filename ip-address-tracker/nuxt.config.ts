// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    'nuxt3-leaflet',
    // '@pinia-plugin-persistedstate/nuxt'
  ],
  css: [
    '@/assets/main.css',
  ],
  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Ip address trackers',
    }
  }
})