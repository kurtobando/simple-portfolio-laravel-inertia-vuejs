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

<script setup>
import { Head, usePage } from '@inertiajs/inertia-vue3';
import { computed } from 'vue';
import Navigation from '@/Components/Navigation.vue';

const name = computed(() => usePage().props.value.app.name);
const description = computed(() => usePage().props.value.app.description);
</script>

<style scoped></style>
