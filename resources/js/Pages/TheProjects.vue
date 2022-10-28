<template>
    <Head>
        <title>Personal Projects</title>
    </Head>
    <div class="grid place-items-center min-h-screen">
        <ul class="grid md:grid-cols-2 gap-8 p-6 w-full lg:w-3/4">
            <li
                class="rounded shadow hover:shadow-lg transition-shadow duration-100"
                v-for="project in projects"
                :key="project.id">
                <a
                    :href="$route('projects.show', { slug: project.slug })"
                    class="block p-8">
                    <span class="font-bold text-xl hover:text-blue-500 transition-colors duration-200">
                        {{ project.title }}
                    </span>
                    <p
                        class="text-lg text-slate-600"
                        v-html="project.excerpt"></p>
                </a>
            </li>
        </ul>
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
        projects: Array,
    },
};
</script>
