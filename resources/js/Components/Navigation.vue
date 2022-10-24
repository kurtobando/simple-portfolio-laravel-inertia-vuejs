<template>
    <menu class="flex gap-4">
        <Link
            class="hover:underline"
            :href="$route('about')">
            About
        </Link>
        <Link
            class="hover:underline"
            :href="$route('projects')">
            Projects
        </Link>
        <Link
            class="hover:underline"
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
