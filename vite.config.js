// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

// vite.config.js
//import { defineConfig } from 'vite';
//import react from '@vitejs/plugin-react';
//
//export default defineConfig({
//  base: '/Sunny_Portfolio/',  // <-- Add this line
//  plugins: [react()],
//});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 root base, because you're on a custom domain
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});