import type { Linter } from 'eslint';
import { IGNORE_PATHS } from './global';
import { getReactConfig } from './configs';

export type LinterSetting = {
  enableReact: boolean;
  ignorePaths?: string[];
};

export const initializeConfig = (settings: LinterSetting) => {
  const config = [
    ...(settings.enableReact ? getReactConfig() : []),
    {
      ignores: [...(settings?.ignorePaths ?? []), ...IGNORE_PATHS],
    },
  ] satisfies Linter.Config[];

  return config;
};
