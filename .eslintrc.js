module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double', { allowTemlateLiterals: true }],
    indent: ['error', 4],
    'eol-last': ['error', 'never'],
    'Linebreak-style': 0,
  },
};
