export const IGNORE_PATHS = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/pnpm-lock.yaml',
  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/.vitepress/cache',
  '**/.next',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',
  '**/*.min.*',
  '**/__snapshots__',
  '!.storybook',
];
export const TS_GLOBS = '**/*.?([cm])ts';

export const TSX_GLOBS = '**/*.?([cm])tsx';
