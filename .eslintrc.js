module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    "@vue/airbnb",
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 0,
    'space-before-function-paren': 0,
    'import/no-extraneous-dependencies': 1,
    'import/extensions': 0,
  },
  overrides: [
    {
      files: [
        '**/*.spec.ts',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
