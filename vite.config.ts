import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        minify: 'esbuild',
        lib: {
            // The entry file that contains your exports
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'MyLibrary', // The global variable name for UMD/IIFE bundles
            //fileName: 'my-library',
            fileName: (format) => `clouds.${format}.js`,
            formats: ['umd', 'es']
        },
        // Optional: If you want one single file and no CSS splitting
        cssCodeSplit: false,
    },
})