module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base/legacy'],
  // 다른 config를 사용하더라도 prettier를 맨 마지막에 넣어야 모든 중복 규칙을 비활성화 시킬 수 있다.
  rules: {
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'function-paren-newline': 'off',
    'no-undef': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'no-trailing-spaces': 'off',
    'no-template-curly-in-string': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'no-return-assign': 'off'
  },
};
