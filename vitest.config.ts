import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['*/**/*.spec.ts'],
    exclude: ['**/node_modules/**'],
    globals: true,
    coverage: {
      reporter: ['lcov'],
    },
  },
  plugins: [tsconfigPaths()],
});
