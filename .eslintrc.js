/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': ['error', 'windows'],
    'react/prop-types': 0,
    'linebreak-style': 0,
    'no-dupe-keys': 0,
    'no-unused-vars': 0,
    'react/no-array-index-key': 0,
    'no-shadow': 0,
    'react/jsx-props-no-spreading': 0,
    'import/extensions': 0,
  },
};
