import type { Linter } from 'eslint';
import unusedImports from 'eslint-plugin-unused-imports';
import unicornPlugin from 'eslint-plugin-unicorn';
import importXPlugin from 'eslint-plugin-import-x';
const flatConfig = () => {
  return 'flat/all';
};

export const basicRules = [
  {
    plugins: {
      'unused-imports': unusedImports,
      unicorn: unicornPlugin.configs[flatConfig()],
      import: importXPlugin,
    },
    rules: {
      'no-console': 'error',

      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'all',
          ignoreRestSiblings: false,
          reportUsedIgnorePattern: false,
        },
      ],

      'unused-imports/no-unused-imports': 'warn',

      'unicorn/better-regex': 'error',
      'unicorn/filename-case': 'off',
      'unicorn/no-abusive-eslint-disable': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/throw-new-error': 'off',

      'import/default': 'error',
      'import/export': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/no-cycle': ['error', { maxDepth: Infinity }],
      'import/no-deprecated': 'error',
      'import/no-named-as-default-member': 'error',
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/dynamic-import-chunkname': 'off',
      'import/exports-last': 'off',
      'import/first': 'error',
      'import/group-exports': 'off',
      'import/max-dependencies': 'off',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-amd': 'error',
      'import/no-anonymous-default-export': 'off',
      'import/no-commonjs': 'off',
      'import/no-default-export': 'off',
      'import/no-duplicates': 'error',
      'import/no-dynamic-require': 'off',
      'import/no-empty-named-blocks': 'error',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/no-import-module-exports': 'off',
      'import/no-internal-modules': 'off',
      'import/no-mutable-exports': 'error',
      'import/no-named-as-default': 'error',
      'import/no-named-default': 'error',
      'import/no-named-export': 'off',
      'import/no-namespace': 'off',
      'import/no-nodejs-modules': 'off',
      'import/no-relative-packages': 'error',
      'import/no-relative-parent-imports': 'off',
      'import/no-restricted-paths': 'off',
      'import/no-self-import': 'error',
      'import/no-unassigned-import': 'off',
      'import/no-unresolved': ['error', { caseSensitiveStrict: true }],
      'import/no-unused-modules': 'off',
      'import/no-useless-path-segments': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/order': 'error',
      'import/prefer-default-export': 'off',
      'import/unambiguous': 'off',
    },
  },
] as unknown as Linter.Config[];
