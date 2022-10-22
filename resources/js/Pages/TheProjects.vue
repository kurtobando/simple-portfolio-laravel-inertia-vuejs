<template>
    <Head>
        <title>Personal Projects</title>
    </Head>
    <Navigation />
    <div>List projects here</div>
</template>

<script>
import Navigation from '@/Components/Navigation.vue';
import { Head } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Head,
        Navigation,
    },
};
</script>
