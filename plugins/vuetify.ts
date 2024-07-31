import { createVuetify } from 'vuetify';
import { md3 } from 'vuetify/blueprints';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { lightTheme, darkTheme } from '../helpers/vuetify/theme';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
    theme: {
      defaultTheme: 'light',
      themes: { light: lightTheme, dark: darkTheme },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
