import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

console.log("### (vite.config.js) VITE_BASE_PATH: ", process.env.VITE_BASE_PATH);

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH,
  plugins: [react()],
})
