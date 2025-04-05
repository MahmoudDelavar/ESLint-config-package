import type { Linter } from 'eslint';
import globals from 'globals';

import type { LinterSettings } from '../..';
import {
  getFpConfig,
  getPerfectionistConfig,
  getUnusedImportConfig,
} from './_internals';

export const getBaseConfig = (settings: LinterSettings) =>
  [
    ...getPerfectionistConfig(),
    ...getUnusedImportConfig(),
    ...getFpConfig(settings),
    {
      languageOptions: {
        ecmaVersion: 'latest',
        globals: {
          ...globals.browser,
          ...globals.node,
          ...globals.es2024,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
        },
        sourceType: 'module',
      },
      rules: {
        'no-console': 'error',
        'no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            vars: 'all',
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
  ] satisfies Linter.Config[];
