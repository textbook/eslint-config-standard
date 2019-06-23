"use strict";

module.exports = {
  extends: ["eslint:recommended"],
  rules: {
    "arrow-parens": "error",
    "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
    "comma-dangle": ["error", "always-multiline"],
    "curly": "error",
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-unused-vars": ["error", { "ignoreRestSiblings": true }],
    "object-curly-spacing": ["error", "always"],
    "operator-linebreak": ["error", "before"],
    "quotes": ["error", "double"],
    "semi": "error",
  },
};
