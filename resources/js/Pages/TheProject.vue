<template>
    <Head>
        <title>{{ project.title }}</title>
    </Head>
    <div class="p-6 w-full md:w-2/3 xl:w-1/2 mx-auto project">
        <h1 class="font-bold text-5xl">{{ project.title }}</h1>
        <div v-html="project.content"></div>
    </div>
</template>

<script>
import FullWidth from '@/Layout/FullWidth.vue';
import { Head } from '@inertiajs/inertia-vue3';

export default {
    layout: FullWidth,
    components: {
        Head,
    },
    props: {
        project: Object,
    },
};
</script>

<style scoped>
.project {
    @apply my-10;
}
.project:deep(h2),
.project:deep(h3),
.project:deep(h4),
.project:deep(h5),
.project:deep(h6) {
    @apply text-xl font-bold mt-8;
}
.project:deep(p) {
    @apply text-slate-600 leading-relaxed mt-4;
}
.project:deep(a) {
    @apply border-b-2 border-dashed hover:text-blue-500;
}
.project:deep(.wp-block-code) {
    @apply bg-slate-700 text-white p-6 rounded shadow overflow-auto my-4;
}
</style>
