// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    },
  },
  runtimeConfig: {
    apiSecretKey: '123',
    public: {
        apiBaseUrl: process.env.API_BASE_URL,
    },
  },

  site: {
      url: 'https://gurmenu.com',
      name: 'Gurmenü'
  },

  css: [
    /*'~/assets/css/reset.css',
    '~/assets/css/restaurant.css',  
    '~/assets/css/light.css',*/
    '~/assets/css/custom.css',
    '~/assets/css/style.css',
  ],

  modules: [
    "@nuxt/image",
    'nuxt-icons',
    'nuxt-swiper',
  ]
})