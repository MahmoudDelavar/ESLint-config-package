import { initializeConfig } from './dist/index.mjs';

const baseConfig = initializeConfig({
  disableHeavyRules: false,
  enableNextJs: false,
  enablePrettier: false,
  enableReact: false,
  enableTailwind: false,
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
