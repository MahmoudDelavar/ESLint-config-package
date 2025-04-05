import type { Linter } from 'eslint';

import perfectionist from 'eslint-plugin-perfectionist';

export const getPerfectionistConfig = () =>
  [
    {
      plugins: { perfectionist },
      rules: {
        'perfectionist/sort-array-includes': 'error',
        'perfectionist/sort-classes': 'error',
        'perfectionist/sort-enums': 'error',
        'perfectionist/sort-exports': 'error',
        'perfectionist/sort-imports': 'off',
        'perfectionist/sort-interfaces': 'error',
        'perfectionist/sort-intersection-types': [
          'error',
          {
            groups: [
              'conditional',
              'function',
              'import',
              'intersection',
              'keyword',
              'literal',
              'named',
              'object',
              'operator',
              'tuple',
              'union',
              'nullish',
            ],
          },
        ],
        'perfectionist/sort-jsx-props': [
          'error',
          {
            customGroups: {
              attr: ['dir', 'lang'],
              callback: 'on*',
              size: ['width', 'size', 'height'],
            },
            groups: [
              'attr',
              'shorthand',
              'size',
              'unknown',
              'callback',
              'multiline',
            ],
          },
        ],
        'perfectionist/sort-maps': 'off',
        'perfectionist/sort-named-exports': 'error',
        'perfectionist/sort-named-imports': 'error',
        'perfectionist/sort-object-types': 'error',
        'perfectionist/sort-objects': 'error',
        'perfectionist/sort-sets': 'error',
        'perfectionist/sort-svelte-attributes': 'error',
        'perfectionist/sort-switch-case': 'error',
        'perfectionist/sort-union-types': [
          'error',
          {
            groups: [
              'conditional',
              'function',
              'import',
              'intersection',
              'keyword',
              'literal',
              'named',
              'object',
              'operator',
              'tuple',
              'union',
              'nullish',
            ],
          },
        ],
        'perfectionist/sort-variable-declarations': 'error',
      },
    },
  ] as unknown as Linter.Config[];
