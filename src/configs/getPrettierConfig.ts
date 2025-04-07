import type { Linter } from 'eslint';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export const getPrettierConfig = () =>
  [prettierPlugin] satisfies Linter.Config[];
