import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Typescript
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser
    }
  },

  // Recommended configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // CSS
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    ...css.configs.recommended,
  },
]);
