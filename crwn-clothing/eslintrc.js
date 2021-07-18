module.exports = {
  env: {
    browser: true,
    // node: true,
    // es2020: true,
  },
  // extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  extends: ['react-app', 'react-app/jest', 'airbnb', 'prettier'],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 'off',
    // "func-names": 'off',
    // 'import/no-unresolved': 'off',
    // 'import/extensions': 'off',
    // 'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // 'no-underscore-dangle': ['error', { allowAfterThis: true }],
    /* eslint-disable import/extensions */
  },
};
