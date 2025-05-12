import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import globals from "globals";
import path from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

// ESM 환경에서 __dirname 얻기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 레거시 설정을 변환하기 위한 호환성 도구
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // 레거시 설정을 Flat Config로 변환
  ...compat.extends("plugin:react/recommended", "plugin:prettier/recommended"),

  // 직접 설정
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "prettier/prettier": "error",
    },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ["dist/"],
  },
];
