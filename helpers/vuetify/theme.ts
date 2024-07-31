import type { ThemeDefinition } from 'vuetify';

// #689F38
export const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#fdfdf5',
    surface: '#fdfdf5',
    primary: '#386b01',
    secondary: '#57624a',
    success: '#386664',
    warning: '#ffdad6',
    error: '#ba1a1a',
    info: '#bbece9',
    'on-background': '#1a1c18',
    'on-surface': '#1a1c18',
    'on-primary': '#ffffff',
    'on-secondary': '#ffffff',
    'on-success': '#ffffff',
    'on-warning': '#410002',
    'on-error': '#ffffff',
    'on-info': '#00201f',
  },
};

export const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#1a1c18',
    surface: '#1a1c18',
    primary: '#9cd769',
    secondary: '#becbae',
    success: '#a0cfcd',
    warning: '#93000a',
    error: '#ffb4ab',
    info: '#1e4e4d',
    'on-background': '#e3e3dc',
    'on-surface': '#e3e3dc',
    'on-primary': '#1a3700',
    'on-secondary': '#29341f',
    'on-success': '#003736',
    'on-warning': '#ffdad6',
    'on-error': '#690005',
    'on-info': '#bbece9',
  },
};
