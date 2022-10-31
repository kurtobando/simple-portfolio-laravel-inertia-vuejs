import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    build: {
        chunkSizeWarningLimit: 5000,
    },
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            ssr: ['resources/js/ssr.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    ssr: {
        noExternal: ['@inertiajs/server'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            ziggy: path.resolve('vendor/tightenco/ziggy/dist/index.es.js'),
        },
    },
});
