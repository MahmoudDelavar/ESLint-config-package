import type { Linter } from 'eslint';

import tailwind from 'eslint-plugin-tailwindcss';

export const getTailwindConfig = () =>
  [
    ...tailwind.configs['flat/recommended'],
    {
      settings: {
        tailwindcss: {
          callees: ['cva', 'clsx', 'cn'],
        },
      },
    },
  ] as Linter.Config[];
