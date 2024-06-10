// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo"],
  overrides: [
    {
      files: ["**/*.{jsx,tsx}"],
    },
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["import", "typescript-sort-keys", "sort-keys-fix"],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: { caseInsensitive: true, order: "asc" },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "external",
            pattern: "+(react|react-native)",
            position: "before",
          },
          { group: "parent", pattern: "@/**", position: "before" },
        ],
        pathGroupsExcludedImportTypes: ["+(react|react-native)", "internal"],
      },
    ],
    "no-undef": "error",
    "no-unused-vars": "error",
    "sort-keys": [
      "error",
      "asc",
      {
        caseSensitive: true,
        minKeys: 2,
        natural: false,
      },
    ],
    "sort-keys-fix/sort-keys-fix": "error",
  },
};
