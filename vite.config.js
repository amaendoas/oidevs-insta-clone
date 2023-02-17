import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/oidevs-insta-clone/dist",
  plugins: [react()],
})
