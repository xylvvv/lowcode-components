module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  root: true,
  files: ['.tsx', '.jsx', '.jsx', '.js'],
  ignores: ['node_modules', 'dist', 'es', 'lib', 'typings', 'storybook-static'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // 'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'multiline' }],
    'react/no-unknown-property': ['error', { ignore: ['styleName'] }],
  },
};
