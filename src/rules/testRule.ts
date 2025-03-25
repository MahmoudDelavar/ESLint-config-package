import type { Linter } from 'eslint';

export const testRule = [
  {
    rules: {
      'no-console': 'error',
    },
  },
] satisfies Linter.Config[];
