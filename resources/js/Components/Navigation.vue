<template>
    <menu>
        <Link :href="$route('about')">About</Link>
        <Link :href="$route('projects')">Projects</Link>
        <Link :href="$route('contact')">Contact</Link>
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
