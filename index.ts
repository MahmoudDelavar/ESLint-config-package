import type { Linter } from 'eslint';
import { testRule } from './src/rules/testRule';

export const initialConfig = () => {
  const config = [...testRule] satisfies Linter.Config[];
  return config;
};
