import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// This function is exported for Vite to use as configuration
export default ({ mode }) => {
  // Load app-level env vars specific to the current mode
  const env = loadEnv(mode, process.cwd());

  console.log("### (vite.config.js) mode: ", mode);
  console.log("### (vite.config.js) Loaded env vars: ", env);

  return defineConfig({
    // Use the VITE_BASE_PATH environment variable, fallback to '/' if not defined
    base: env.VITE_BASE_PATH || '/',

    // Include plugins needed by the application, for example, react
    plugins: [react()],

    // Define global constants which can be replaced at build time, see main.jsx
    define: {
      __VITE_BASE_PATH__: JSON.stringify(env.VITE_BASE_PATH),
      __VITE_STRIPE_PUBLIC_KEY__: JSON.stringify(env.VITE_STRIPE_PUBLIC_KEY),
      __VITE_STRIPE_SUCCESS_URL__: JSON.stringify(env.VITE_STRIPE_SUCCESS_URL),
      __VITE_STRIPE_CANCEL_URL__: JSON.stringify(env.VITE_STRIPE_CANCEL_URL),
    },
  });
};
