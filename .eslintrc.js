// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 13,
    sourceType: "module"
  },
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard",
    "eslint:recommended",
    "prettier"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    "space-before-function-paren": "off",
    "arrow-spacing": "off",
    "no-useless-escape": "off",
    "no-tabs": "off",
    indent: "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-mixed-operators": "off",
    "no-trailing-spaces": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "import/extensions": [
      "error",
      {
        js: "ignorePackages",
        json: "never",
        vue: "ignorePackages"
      }
    ],
    // Disabled
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-extraneous-dependencies": "off",
    "dot-notation": "off",
    "class-methods-use-this": "off",
    "lines-between-class-members": 0,
    "no-plusplus": 0,
    "array-callback-return": 0,
    "no-param-reassign": 0,
    "object-shorthand": "off",
    // Warnings
    "prefer-destructuring": "warn",
    "import/no-cycle": "warn",
    "no-shadow": "warn",
    "consistent-return": "warn",
    "no-return-assign": "warn"
  }
};
