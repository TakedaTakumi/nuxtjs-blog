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
    'vuetify-nuxt-module',
  ],
  typescript: {
    typeCheck: true,
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
