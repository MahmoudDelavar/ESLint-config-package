import type { Linter } from 'eslint';
import { IGNORE_PATHS } from './global';
import {
  getBaseConfig,
  getNextJsConfig,
  getPrettierConfig,
  getReactConfig,
  getStorybookConfig,
  getStylisticConfig,
  getTailwindConfig,
  getTypescriptConfig,
} from './configs';

export type LinterSettings = {
  disableHeavyRules: boolean;
  enableNextJs: boolean;
  enablePrettier: boolean;
  enableReact: boolean;
  enableStorybook: boolean;
  enableStylistic: boolean;
  enableTailwind: boolean;
  enableTypescript: boolean;
  ignorePaths?: string[];
  projectPathAliasRegex: string;
  typescriptOptions: {
    tsconfigRootDir: string;
  };
};

export const initializeConfig = (settings: LinterSettings) => {
  const config = [
    ...getBaseConfig(settings),
    ...(settings.enableReact ? getReactConfig() : []),
    ...(settings.enableTypescript ? getTypescriptConfig(settings) : []),
    ...(settings.enableNextJs ? getNextJsConfig() : []),
    ...(settings.enablePrettier ? getPrettierConfig() : []),
    ...(settings.enableTailwind ? getTailwindConfig() : []),
    ...(settings.enableStylistic ? getStylisticConfig(settings) : []),
    ...(settings.enableStorybook ? getStorybookConfig() : []),
    {
      ignores: [...(settings?.ignorePaths ?? []), ...IGNORE_PATHS],
    },
  ] satisfies Linter.Config[];

  return config;
};
