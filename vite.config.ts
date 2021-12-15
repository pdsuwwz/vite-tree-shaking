import { defineConfig } from 'vite'

import path from 'path'

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development'
  console.log('isDevelopment', isDevelopment)

  return {

    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    },
    server: {
      port: 3600,
      host: true
    },
    define: {
      'process.env': process.env
    },
    build: {
      minify: false
    }
  }

})

