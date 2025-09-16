import { defineConfig } from 'vite';
import { glob } from 'glob';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: {
          timer: resolve(__dirname, 'src/1-timer.html'),
          snackbar: resolve(__dirname, 'src/2-snackbar.html'),
         
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/*.html']),
      SortCss({
        sort: 'mobile-first',
      }),
    ],
  };
});
