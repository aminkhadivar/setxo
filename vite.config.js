import { resolve } from 'node:path'
import macrosPlugin from 'vite-plugin-babel-macros'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import * as packageJson from './package.json'
// https://vitejs.dev/config/

export default defineConfig(() => ({
  plugins: [
    react(),
    libInjectCss(),
    macrosPlugin(),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.js'),
      name: 'SetxoComponent',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    manifest: true,
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  }
}))