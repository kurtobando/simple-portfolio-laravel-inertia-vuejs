<template>
    <menu class="flex justify-end items-center gap-6 p-6 text-lg">
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
