// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint'
  ],
  typescript: { 
    typeCheck: true
  },
  eslint: {
    checker: true,
    config: {
      stylistic: true
    }
  },
})
