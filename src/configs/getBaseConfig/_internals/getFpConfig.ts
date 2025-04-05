import type { Linter } from 'eslint';

import functional from 'eslint-plugin-functional';

import type { LinterSettings } from '../../..';

export const getFpConfig = (settings: LinterSettings) =>
  [
    functional.configs.all,
    settings.disableHeavyRules ? functional.configs.disableTypeChecked : {},
    {
      rules: {
        'functional/functional-parameters': 'off',
        'functional/no-conditional-statements': 'off',
        'functional/no-expression-statements': 'off',
        'functional/no-mixed-types': 'off',
        'functional/no-return-void': 'off',
        'functional/no-try-statements': 'off',
        'functional/prefer-immutable-types': 'off',
        'functional/prefer-tacit': 'off',
        'functional/type-declaration-immutability': 'off',
      },
    },
  ] as unknown as Linter.Config[];
