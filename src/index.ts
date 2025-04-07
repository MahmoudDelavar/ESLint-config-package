import type { Linter } from 'eslint';
import { IGNORE_PATHS } from './global';
import {
  getBaseConfig,
  getNextJsConfig,
  getReactConfig,
  getTypescriptConfig,
} from './configs';

export type LinterSettings = {
  disableHeavyRules: boolean;
  enableNextJs: boolean;
  enableReact: boolean;
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

    {
      ignores: [...(settings?.ignorePaths ?? []), ...IGNORE_PATHS],
    },
  ] satisfies Linter.Config[];

  return config;
};
