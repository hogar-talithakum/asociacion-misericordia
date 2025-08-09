import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esta línea le dice a Vite que la ruta base es la raíz del dominio
  base: '/'
});
