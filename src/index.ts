import type { Linter } from 'eslint';
import { nextJsRules } from './rules';

export const initialConfig = () => {
  const config = [...nextJsRules] satisfies Linter.Config[];
  return config;
};
