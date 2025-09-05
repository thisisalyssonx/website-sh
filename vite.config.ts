import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ✅ CORRETO: assetsInclude fica aqui, no nível principal
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.svg'],

  // optimizeDeps é uma configuração separada
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});