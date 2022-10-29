<template>
    <Head>
        <title>{{ name }}</title>
        <meta
            name="description"
            :content="description" />
    </Head>
    <main class="min-h-screen">
        <Navigation />
        <slot />
    </main>
</template>

<script>
import Navigation from '@/Components/Navigation.vue';
import { Head, usePage } from '@inertiajs/inertia-vue3';
import { computed } from 'vue';

export default {
    components: {
        Navigation,
        Head,
    },
    setup() {
        const name = computed(() => usePage().props.value.app.name);
        const description = computed(() => usePage().props.value.app.description);

        return {
            name,
            description,
        };
    },
};
</script>

<style scoped></style>
