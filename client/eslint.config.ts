import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["node_modules/**", "dist/**", "**/*.js" ] },
  // Recommended configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    settings: {
      react: {
        version: "detect",
      },
    },
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
      // "block-scoped-var": "error",
      // "camelcase": "error",
      // "no-console": "error",
      // "no-inner-declarations": "error",
      // "no-unused-vars": "error",
      // "no-var": "error",
      // "func-style": ["error", "expression", { "allowArrowFunctions": true }],


      // "prefer-const": "error",

      // React
      // "react/self-closing-comp": "error",

      // React Hooks
      // "react-hooks/rules-of-hooks": "error",
      // "react-hooks/exhaustive-deps": "warn",
    }
  },

  // CSS
  // {
  //   files: ["**/*.css"],
  //   plugins: { css },
  //   language: "css/css",
  //   ...css.configs.recommended,
  // },
]);
