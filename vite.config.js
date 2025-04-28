// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



// vite.config.js

export default {
  build: {
    target: 'esnext', // or you can specify chrome92, firefox92, etc.
    minify: 'esbuild',
    // other build options
  }
}
