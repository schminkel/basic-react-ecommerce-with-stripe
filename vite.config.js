import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

const env = loadEnv('', process.cwd(), '')
console.log("### (vite.config.js) all env: ", env);
console.log("### (vite.config.js) VITE_BASE_PATH: ", env.VITE_BASE_PATH);

export default defineConfig({
  base: env.VITE_BASE_PATH,
  plugins: [react()],
  define: {
    __VITE_BASE_PATH__: JSON.stringify(env.VITE_BASE_PATH),

  }
})

// https://vitejs.dev/config/
// export default defineConfig(({ command, mode }) => {
//
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '')
//
//   console.log("### (vite.config.js) mode: ", mode);
//   console.log("### (vite.config.js) env: ", env);
//   console.log("### (vite.config.js) VITE_BASE_PATH: ", env.VITE_BASE_PATH);
//
//   return {
//     // vite config
//     define: {
//       base: JSON.stringify(env.APP_ENV),
//       plugins: [react()],
//     },
//
//   }
// })
