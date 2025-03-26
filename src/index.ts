import type { Linter } from 'eslint';
import { nextJsRules, fpRules, reactRules } from './rules';

export const initialConfig = () => {
  const config = [
    ...nextJsRules,
    ...reactRules,
    ...fpRules,
  ] satisfies Linter.Config[];
  return config;
};
