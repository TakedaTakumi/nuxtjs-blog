// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    'vuetify-nuxt-module',
  ],
  typescript: {
    typeCheck: true,
  },
  content: {
    contentHead: true,
    highlight: {
      langs: [
        'rust',
      ],
    },
  },
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {},
  },
});
