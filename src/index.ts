import type { Linter } from 'eslint';
import { testRule } from './rules/testRule';

export const initialConfig = () => {
  const config = [...testRule] satisfies Linter.Config[];
  return config;
};
