import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the same dist works under any /pr-preview/pr-N/ path.
export default defineConfig({
  base: './',
  plugins: [react()],
});
