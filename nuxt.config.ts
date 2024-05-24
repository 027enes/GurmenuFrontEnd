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
  i18n: {
    detectBrowserLanguage: {
        useCookie: true,
        fallbackLocale: 'tr',
    },
    defaultLocale: 'tr',
    strategy: 'prefix',
    lazy: true,
    langDir: 'internationalization',
    locales: [
        {"code": "tr", "iso": "tr-TR", "file": "tr.json", "dir": "ltr"},
        {"code": "en", "iso": "en-US", "file": "en.json", "dir": "ltr"},
        {"code": "ru", "iso": "ru-RU", "file": "ru.json", "dir": "ltr"},
        {"code": "de", "iso": "de-DE", "file": "de.json", "dir": "ltr"}
    ],
  },
  css: [
    '~/assets/css/custom.css',
    '~/assets/css/style.css',
    'flag-icons/css/flag-icons.min.css',
  ],

    modules: ["@nuxt/image", 'nuxt-icons', 'nuxt-swiper', "@nuxtjs/i18n", "@nuxt/ui",],
})