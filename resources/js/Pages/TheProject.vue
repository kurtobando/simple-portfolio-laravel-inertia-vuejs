<template>
    <Head>
        <title>{{ project.title }}</title>
    </Head>
    <div class="p-6 w-full md:w-2/3 xl:w-1/2 mx-auto project">
        <h1 class="font-bold text-5xl">{{ project.title }}</h1>
        <div v-html="project.content"></div>
        <div class="flex flex-row items-center gap-4 justify-center md:justify-start mt-8">
            <a
                :href="project.demo"
                target="_blank">
                <button class="button button-primary">Demo</button>
            </a>
            <a
                :href="project.source"
                target="_blank">
                <button class="button button-primary-outline">Source Code</button>
            </a>
        </div>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/inertia-vue3';
const props = defineProps({
    project: Object,
});
</script>

<script>
import FullWidth from '@/Layout/FullWidth.vue';
export default {
    layout: FullWidth,
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
.project:deep(.wp-block-code) {
    @apply bg-slate-700 text-white p-6 rounded shadow overflow-auto my-4;
}
.button {
    @apply p-4 px-8 rounded text-sm;
}
.button-primary {
    @apply bg-slate-900 border-2 border-slate-900 text-white hover:bg-blue-500 hover:border-blue-500 transition-colors duration-200;
}
.button-primary-outline {
    @apply text-slate-900 border-2 border-slate-900 hover:border-blue-500 hover:text-blue-500 transition-colors duration-200;
}
</style>
