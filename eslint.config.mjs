const tsPlugin = await import('@typescript-eslint/eslint-plugin');
const parser = await import('@typescript-eslint/parser');
import { initializeConfig } from './dist/index.mjs';

const baseConfig = initializeConfig({
  enableReact: false,
});

export default [
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
  ...baseConfig,
];
