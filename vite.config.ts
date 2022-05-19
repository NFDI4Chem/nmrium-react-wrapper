import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

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
    plugins: [react()],
  });
};
