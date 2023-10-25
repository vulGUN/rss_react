import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPath from 'vite-tsconfig-paths';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPath()],
  resolve: {
    alias: {
      // src: '/src',
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
