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

<script lang="ts" setup>
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import Navigation from '@/Components/Navigation.vue';

const name = computed(() => usePage().props.app.name);
const description = computed(() => usePage().props.app.description);
</script>

<style scoped></style>
