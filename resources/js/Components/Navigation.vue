<template>
    <menu
        class="flex justify-center md:justify-end items-center gap-8 p-8 px-12 text-lg">
        <Link
            class="hover:underline"
            :class="{ 'font-bold': $page.url === '/' }"
            :href="$route('about')">
            About
        </Link>
        <Link
            class="hover:underline"
            :class="{ 'font-bold': $page.url === '/projects' }"
            :href="$route('projects')">
            Projects
        </Link>
        <Link
            :class="{ 'font-bold': $page.url === '/contact' }"
            :href="$route('contact')">
            Contact
        </Link>
    </menu>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Link,
    },
};
</script>
