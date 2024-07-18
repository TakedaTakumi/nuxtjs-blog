// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import stylistic from '@stylistic/eslint-plugin';

export default withNuxt(
  stylistic.configs['recommended-flat'],
  {
    plugins: {
      '@stylistic': stylistic,
    },
    files: ['**/*.{ts,vue,mjs}'],
    rules: {
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
        },
      ],
      '@stylistic/operator-linebreak': ['error', 'before',
        {
          overrides: {
            '=': 'after',
            '??': 'none',
          },
        },
      ],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/quote-props': ['error', 'as-needed'],
    },
    ignores: ['.idea', '.vscode', '.nuxt', 'public'],
  },
)
