import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA, Options } from 'vite-plugin-pwa';

const pwaSettings: Partial<Options> = {
  // cache all the imports
  // workbox: {
  //   globPatterns: ["**/*"],
  // },
  // cache all static assets in the public folder
  includeAssets: [
    "**/icon-*",
  ],
  workbox: {
    maximumFileSizeToCacheInBytes: 10 * 1024 * 1024
  },
  manifest: {
    theme_color: "#ea580c",
    background_color: "#ea580c",
    display: "standalone",
    scope: "/",
    start_url: "/",
    short_name: "NMRium",
    description: "Wrapper for NMRium which is a powerful tool for displaying and processing nuclear magnetic resonance (NMR) spectra",
    name: "NMRium wrapper",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
};

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
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/openchemlib/')) {
              return 'openchemlib';
            }

            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      }
    },
    plugins: [react(), VitePWA(pwaSettings)],
  });
};
