<template>
    <Head>
        <title>Personal Projects</title>
    </Head>
    <div class="grid place-items-center h-[88vh]">
        <ul class="grid lg:grid-cols-2 gap-4 p-6 w-full md:w-2/3">
            <li
                class="bg-white rounded shadow-sm hover:shadow transition-shadow duration-100"
                v-for="project in projects"
                :key="project.id">
                <Link
                    :href="route('projects.show', { slug: project.slug })"
                    class="block p-8">
                    <span class="font-bold text-xl hover:text-blue-500 transition-colors duration-200">
                        {{ project.title }}
                    </span>
                    <p
                        class="text-slate-500 mt-2"
                        v-html="project.excerpt"></p>
                </Link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
const props = defineProps({
    projects: Array,
});
</script>

<script>
import FullWidth from '@/Layout/FullWidth.vue';
export default {
    layout: FullWidth,
};
</script>
