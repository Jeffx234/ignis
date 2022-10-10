module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@rocketseat/eslint-config/react'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
  },
}
