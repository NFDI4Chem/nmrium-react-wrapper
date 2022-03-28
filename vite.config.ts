import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default () => {
  return defineConfig({
    base: './',
    esbuild: {
      sourcemap: true,
    },
    build: {
      sourcemap: true,
    },
    plugins: [react()],
  });
};
