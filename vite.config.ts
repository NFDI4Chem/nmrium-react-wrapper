import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

export default () => {
  return defineConfig({
    base: './',
    esbuild: {
      sourcemap: false,
    },
    build: {
      sourcemap: true,
      minify: process.env.NO_MINIFY ? false : 'esbuild',
    },
    plugins: [react(), splitVendorChunkPlugin()],
  });
};
