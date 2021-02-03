module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'google',
  rules: {
    // Additional, per-project rules...
    'require-jsdoc': 0,
    'max-len': {
      code: 100,
    },
  },
  parserOptions: {
    sourceType: 'module',
  },
};
