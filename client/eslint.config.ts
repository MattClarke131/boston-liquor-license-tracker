import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import css from "@eslint/css";

export default [
  { ignores: ["node_modules/**", "dist/**", "**/*.js" ] },
  { settings: { react: { version: "detect", }, }, },


  // Recommended configs
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat["jsx-runtime"],
    ]
  },

  // Typescript
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,

    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "block-scoped-var": "error",
      // "camelcase": "error",
      // "no-console": "error",
      "no-inner-declarations": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
        }
      ],
      "no-var": "error",
      // "func-style": ["error", "expression", { "allowArrowFunctions": true }],


      "prefer-const": "error",

      // React
      "react/self-closing-comp": "error",
      "react/no-unescaped-entities": "off",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/immutability": "error",
      "react-hooks/set-state-in-effect": "error",
      "react-hooks/set-state-in-render": "error",
      "react-hooks/static-components": "error",
      "react-hooks/unsupported-syntax": "error",
    }
  },

  // CSS
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    ...css.configs.recommended,
    rules: {
      ...css.configs.recommended.rules,
      "css/no-invalid-at-rules": "off",
      "css/no-invalid-properties": "off",
      "css/no-empty-blocks": "off",
      "css/no-important": "off",
      "css/use-baseline": "off",
    }
  },
];
