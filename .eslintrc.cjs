module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:jsdoc/recommended-typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:markdown/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:testing-library/react",
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    project: "./.config/tsc/eslint/tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-unused-vars": "warn",
    "jsdoc/tag-lines": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "testing-library/no-manual-cleanup": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
