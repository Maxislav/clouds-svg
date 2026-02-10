import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [dts({
        //insertTypesEntry: true,
        rollupTypes: true,
    })],
    build: {
        minify: 'esbuild',
        lib: {
            // The entry file that contains your exports
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'Cloud', // The global variable name for UMD/IIFE bundles
            //fileName: 'my-library',
            fileName: (format) => `clouds.${format}.js`,
            formats: ['umd', 'es']
        },
        rollupOptions: {
            // Убедитесь, что внешние зависимости не попадают в билд,
            // если вы не хотите их там видеть.
            external: [],
            output: {
                globals: {

                    // Здесь указываются глобальные имена для внешних зависимостей
                },
            },
        },
        // Optional: If you want one single file and no CSS splitting
        cssCodeSplit: false,
    },
})