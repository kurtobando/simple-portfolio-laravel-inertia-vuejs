<template>
    <Head>
        <title>Personal Projects</title>
    </Head>
    <div class="grid place-items-center min-h-screen">
        <ul class="grid lg:grid-cols-2 gap-8 p-6 w-full md:w-2/3 xl:w-1/2">
            <li
                class="rounded shadow hover:shadow-lg transition-shadow duration-100"
                v-for="project in projects"
                :key="project.id">
                <Link
                    :href="route('projects.show', { slug: project.slug })"
                    class="block p-8">
                    <span class="font-bold text-xl hover:text-blue-500 transition-colors duration-200">
                        {{ project.title }}
                    </span>
                    <p
                        class="text-slate-600 mt-2"
                        v-html="project.excerpt"></p>
                </Link>
            </li>
        </ul>
    </div>
</template>

<script>
import FullWidth from '@/Layout/FullWidth.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

export default {
    layout: FullWidth,
    components: {
        Head,
        Link,
    },
    props: {
        projects: Array,
    },
};
</script>
