import type { Linter } from 'eslint';
import unusedImports from 'eslint-plugin-unused-imports';

export const getUnusedImportConfig = () =>
  [
    {
      plugins: {
        'unused-imports': unusedImports,
      },
      rules: {
        'unused-imports/no-unused-imports': 'warn',
      },
    },
  ] as unknown as Linter.Config[];
