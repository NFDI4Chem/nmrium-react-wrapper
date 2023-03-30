import react from '@vitejs/plugin-react-swc';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

export default () => {
  return defineConfig({
    base: './',
    esbuild: {
      jsx: 'automatic',
      sourcemap: true,
    },
    build: {
      sourcemap: true,
      minify: process.env.NO_MINIFY ? false : 'esbuild',
    },
    plugins: [react(), splitVendorChunkPlugin()],
  });
};
