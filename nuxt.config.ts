import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config?.plugins?.push(vuetify({ autoImport: true }));
      });
    },
  ],
  typescript: {
  },
  content: {
    contentHead: true,
    highlight: {
      langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml'],
      theme: 'github-light',
    },
  },
  components: [
    {
      path: '~/components/content',
      pathPrefix: false,
    },
    {
      path: '~/components/controller',
      pathPrefix: true,
    },
    {
      path: '~/components/view',
      pathPrefix: true,
    },
    '~/components',
  ],
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
