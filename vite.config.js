import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import DefineOptions from 'unplugin-vue-define-options/vite';

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
        DefineOptions(),
    ],
    ssr: {
        noExternal: ['@inertiajs/server'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            '@svg': path.resolve(__dirname, './resources/svg'),
            '@type': path.resolve(__dirname, './resources/type'),
        },
    },
});
