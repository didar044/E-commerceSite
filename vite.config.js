import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Projects/dist/', // Important for hosted sub-path
  // base:'/',
  plugins: [react()],
});
