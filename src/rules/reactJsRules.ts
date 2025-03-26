import type { Linter } from 'eslint';

import a11yPlugin from 'eslint-plugin-jsx-a11y';
export const reactRules = [
  {
    rules: {
      '@eslint-react/avoid-shorthand-boolean': 'off',
      '@eslint-react/avoid-shorthand-fragment': 'off',
      '@eslint-react/naming-convention/filename': 'off',
      '@eslint-react/naming-convention/filename-extension': 'off',
      '@eslint-react/prefer-shorthand-fragment': 'off',
    },
  },
  {
    plugins: {
      'jsx-a11y': a11yPlugin,
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
  },
] as Linter.Config[];
