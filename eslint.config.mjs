import parser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import { initializeConfig } from './dist/index.mjs';

const baseConfig = initializeConfig({
  enableReact: false,
  enableTypescript: true,
  typescriptOptions: {
    tsconfigRootDir: import.meta.dirname,
  },
});

export default [
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
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
