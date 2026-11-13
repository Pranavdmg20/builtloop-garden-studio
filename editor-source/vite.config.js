import { defineConfig } from 'vite';

// The published assets live at the repository root beside this source folder.
export default defineConfig({
  base: '/builtloop-garden-studio/',
  publicDir: '..',
  server: { fs: { allow: ['..'] } },
  build: { copyPublicDir: false },
});
