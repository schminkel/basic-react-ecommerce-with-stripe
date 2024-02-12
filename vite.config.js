import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// load env vars from .env file or from the environment
dotenv.config();

export default ({ mode }) => {
  console.log("### (vite.config.js) process.env: ", process.env);

  return defineConfig({
    // Use the VITE_BASE_PATH environment variable, fallback to '/' if not defined
    base: JSON.stringify(process.env.VITE_BASE_PATH) || '/',

    // Include plugins needed by the application, for example, react
    plugins: [react()],

    // Define global constants which can be replaced at build time, see main.jsx
    define: {
      __VITE_BASE_PATH__: JSON.stringify(process.env.VITE_BASE_PATH) || '-',
      __VITE_STRIPE_PUBLIC_KEY__: JSON.stringify(process.env.VITE_STRIPE_PUBLIC_KEY) || '-',
      __VITE_STRIPE_SUCCESS_URL__: JSON.stringify(process.env.VITE_STRIPE_SUCCESS_URL) || '-',
      __VITE_STRIPE_CANCEL_URL__: JSON.stringify(process.env.VITE_STRIPE_CANCEL_URL) || '-',
    },
  });
};
