import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set `base` to your repo name when deploying to GitHub Pages:
//   https://<username>.github.io/michelangelo-field-notes/
// If you serve from a custom domain root, change `base` to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/michelangelo-field-notes/',
});
