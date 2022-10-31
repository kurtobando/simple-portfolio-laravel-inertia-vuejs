// reference
// https://inertiajs.com/server-side-rendering
// https://laravel.com/docs/9.x/vite#ssr

import '../css/app.css';
import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import createServer from '@inertiajs/server';
import route from 'ziggy';

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
        setup({ app, props, plugin }) {
            const ssr = createSSRApp({ render: () => h(app, props) });

            ssr.config.globalProperties.$route = route;
            ssr.use(plugin);

            return ssr;
        },
    })
);
