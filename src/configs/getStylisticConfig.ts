import type { Linter } from 'eslint';

import stylistic from '@stylistic/eslint-plugin';
import type { LinterSettings } from '..';

const EXCLUSIVE_STATEMENTS = [
  'class',
  'export',
  'function',
  'multiline-const',
  'multiline-let',
];
const EXCLUSIVE_STATEMENTS_TS = ['enum', 'interface'];

export const getStylisticConfig = (settings: LinterSettings) =>
  [
    stylistic.configs.customize({
      arrowParens: true,
      commaDangle: 'always-multiline',
      indent: 2,
      jsx: true,
      quotes: 'single',
      semi: true,
    }),
    {
      rules: {
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', next: EXCLUSIVE_STATEMENTS, prev: '*' },
          { blankLine: 'always', next: '*', prev: EXCLUSIVE_STATEMENTS },

          { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
          {
            blankLine: 'any',
            next: ['const', 'let', 'var'],
            prev: ['const', 'let', 'var'],
          },

          { blankLine: 'always', next: '*', prev: 'directive' },
          { blankLine: 'any', next: 'directive', prev: 'directive' },

          { blankLine: 'always', next: '*', prev: ['case', 'default'] },
        ],
        ...(settings.enableTypescript
          ? {
              '@stylistic/padding-line-between-statements': [
                'error',
                {
                  blankLine: 'always',
                  next: EXCLUSIVE_STATEMENTS_TS,
                  prev: '*',
                },
                {
                  blankLine: 'always',
                  next: '*',
                  prev: EXCLUSIVE_STATEMENTS_TS,
                },

                { blankLine: 'always', next: 'type', prev: '*' },
                { blankLine: 'always', next: '*', prev: 'type' },
                { blankLine: 'any', next: 'type', prev: 'type' },
              ],
            }
          : {}),
      },
    },
  ] as Linter.Config[];
