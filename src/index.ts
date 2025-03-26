import type { Linter } from 'eslint';
import { nextJsRules, fpRules, reactRules, basicRules } from './rules';

export const initialConfig = () => {
  const config = [
    ...nextJsRules,
    ...reactRules,
    ...fpRules,
    ...basicRules,
  ] satisfies Linter.Config[];
  return config;
};
