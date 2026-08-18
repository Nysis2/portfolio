import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Nommage deterministe : le build client et le build SSR doivent produire
      // exactement les memes classes, sinon l'hydratation echoue.
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
})
