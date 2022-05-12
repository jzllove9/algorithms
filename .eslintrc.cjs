module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    node: true,
    mocha: true,
  },
  rules: {
    strict: 'off',
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-param-reassign': 0,
    'no-bitwise': 0,
    'import/extensions': 0,
    'no-unused-expressions': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    eqeqeq: 0,
    'import/prefer-default-export': 0,
  },
};
