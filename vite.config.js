import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const base = process.env.GITHUB_ACTIONS ? '/My-Portfolio-Website/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
