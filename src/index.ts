import type { Linter } from 'eslint';
import { IGNORE_PATHS } from './global';
import { getBaseConfig, getReactConfig } from './configs';

export type LinterSettings = {
  disableHeavyRules: boolean;
  enableReact: boolean;
  enableTypescript: boolean;
  ignorePaths?: string[];
  projectPathAliasRegex: string;
};

export const initializeConfig = (settings: LinterSettings) => {
  const config = [
    ...getBaseConfig(settings),
    ...(settings.enableReact ? getReactConfig() : []),

    {
      ignores: [...(settings?.ignorePaths ?? []), ...IGNORE_PATHS],
    },
  ] satisfies Linter.Config[];

  return config;
};
