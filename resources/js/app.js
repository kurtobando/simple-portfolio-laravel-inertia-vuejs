import '../css/app.css';
import 'toastify-js/src/toastify.css';
import '@egjs/vue3-flicking/dist/flicking.css';
import '@egjs/flicking-plugins/dist/pagination.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from 'ziggyVue';

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });

        app.use(ZiggyVue);
        app.use(plugin);
        app.mount(el);
    },
}).then(() => {
    console.info('Inertia app mounted');
});
