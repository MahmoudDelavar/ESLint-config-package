import { initializeConfig } from './dist/index.mjs';

const baseConfig = initializeConfig({
  disableHeavyRules: false,
  enableReact: false,
  enableTypescript: true,
  projectPathAliasRegex: '',
  typescriptOptions: {
    tsconfigRootDir: import.meta.dirname,
  },
});

export default [
  {
    files: ['src/**/*.{ts,tsx}'],
  },
  ...baseConfig,
];
