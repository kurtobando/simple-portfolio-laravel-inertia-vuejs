<template>
    <div class="project">
        <Head>
            <title>{{ props.project.title }}</title>
        </Head>
        <div>
            <h1 class="font-bold text-5xl leading-tight">{{ props.project.title }}</h1>
            <div v-html="props.project.content"></div>
            <ul class="flex flex-row justify-center gap-2 mt-8 items-center">
                <li
                    v-for="svg in convertToolsToArray(props.project.tools)"
                    :key="svg">
                    <Svg :name="svg" />
                </li>
            </ul>
            <div class="flex flex-row items-center justify-center gap-4 mt-8">
                <a
                    :href="props.project.demo"
                    target="_blank">
                    <button class="button button-primary">Demo</button>
                </a>
                <a
                    :href="props.project.source"
                    target="_blank">
                    <button class="button button-primary-outline">Source Code</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Project } from '@type/project';
import { computed } from 'vue';
import { Head } from '@inertiajs/vue3';
import Svg from '@/Components/Svg.vue';
import FullWidth from '@/Layout/FullWidth.vue';

const convertToolsToArray = computed(() => (icons: string) => icons.split(',').map((icon) => icon.trim()));
const props = defineProps<Props>();

interface Props {
    project: Project;
}

defineOptions({
    layout: FullWidth,
});
</script>

<style scoped>
.project {
    @apply grid place-content-center min-h-[88vh] text-center p-10 max-w-4xl mx-auto my-10;
}
.project:deep(h2),
.project:deep(h3),
.project:deep(h4),
.project:deep(h5),
.project:deep(h6) {
    @apply text-xl font-bold mt-8;
}
.project:deep(p) {
    @apply text-slate-500 leading-relaxed mt-4;
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
