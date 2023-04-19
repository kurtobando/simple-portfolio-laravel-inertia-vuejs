// reference
// https://inertiajs.com/server-side-rendering
// https://laravel.com/docs/9.x/vite#ssr
// https://github.com/tighten/ziggy#vue

import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { ZiggyVue } from 'ziggyVue';
import { Ziggy } from './ziggy';

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
        setup({ app, props, plugin }) {
            const ssr = createSSRApp({ render: () => h(app, props) });

            ssr.use(ZiggyVue, Ziggy);
            ssr.use(plugin);

            return ssr;
        },
    })
);
