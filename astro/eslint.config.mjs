// @ts-check

// eslint plugins
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";

// typescript/flatconfig compatibility patch
import url from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

// eslint config
export default [
  ...compat.config(jsxA11yPlugin.configs.recommended),
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
