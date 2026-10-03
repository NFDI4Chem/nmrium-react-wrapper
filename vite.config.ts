import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import { VitePWA, type Options } from 'vite-plugin-pwa';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const nmriumHighlightPath = path.resolve(
  rootDir,
  'node_modules/nmrium/lib/component/highlight/index.js',
);
const highlightBridgePath = path.resolve(
  rootDir,
  'src/highlight/highlightBridge.tsx',
);

function nmriumHighlightBridgePlugin(): Plugin {
  return {
    name: 'nmrium-highlight-bridge',
    enforce: 'pre',
    resolveId(source, importer) {
      if (source === 'nmrium-highlight-original') {
        return `${nmriumHighlightPath}?original`;
      }

      const isHighlightImport =
        source === '../highlight/index.js' ||
        source === '../../highlight/index.js' ||
        source.endsWith('/highlight/index.js') ||
        source === nmriumHighlightPath;

      if (!isHighlightImport) {
        return null;
      }

      if (importer?.includes('highlightBridge')) {
        return null;
      }

      return highlightBridgePath;
    },
  };
}

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
    maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
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
    build: {
      outDir: process.env.VITE_BUILD_OUT_DIR || 'dist',
      sourcemap: true,
      minify: process.env.NO_MINIFY ? false : 'oxc',
      rolldownOptions: {
        output: {
          strictExecutionOrder: true,
          codeSplitting: {

            groups: [
              {
                name: 'openchemlib', test: 'node_modules/openchemlib/',
                entriesAware: true,
              },
              {
                name: 'd3',
                test: /node_modules\/d3[-/]/,
                entriesAware: true,
              },
              {
                name: 'blueprint',
                test: 'node_modules/@blueprintjs/',
                entriesAware: true,
              },
              { name: 'vendor', test: 'node_modules/', entriesAware: true, maxSize: 500_000 },
            ],

          }
        },
      }
    },
    plugins: [nmriumHighlightBridgePlugin(), react(), VitePWA(pwaSettings)],
    resolve: {
      alias: {
        'nmrium-highlight-original': `${nmriumHighlightPath}?original`,
      },
    },
  });
};
