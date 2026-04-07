import { defineConfig } from 'vitest/config' // add the config vitest to allownext test block
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {                          
    environment: 'jsdom',//emulate a fake browser
    setupFiles:  './src/tests/setup.ts',
    globals:     true,
  },
})
