import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  external: ['./worker'],
  format: ['esm', 'cjs'],
  minify: true,
  outDir: 'dist',
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.cjs',
    };
  },
  sourcemap: false,
  splitting: false,
  target: ['es2022', 'node18'],
});
