import type { Linter } from 'eslint';
import { nextJsRules } from './rules';
import { reactRules } from './rules/reactJsRules';

export const initialConfig = () => {
  const config = [...nextJsRules, ...reactRules] satisfies Linter.Config[];
  return config;
};
