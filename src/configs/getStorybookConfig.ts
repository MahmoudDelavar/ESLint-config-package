import type { Linter } from 'eslint';

// @ts-ignore
import storybook from 'eslint-plugin-storybook';

export const getStorybookConfig = () =>
  [...storybook.configs['flat/recommended']] satisfies Linter.Config[];
