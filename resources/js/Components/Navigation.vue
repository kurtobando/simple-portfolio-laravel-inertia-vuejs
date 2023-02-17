<template>
    <menu class="flex justify-center md:justify-end items-center gap-8 p-8 px-12 text-lg">
        <Link
            class="hover:text-blue-500 transition-colors duration-200"
            :class="{ 'font-bold': $page.url === '/' }"
            :href="route('about')">
            About
        </Link>
        <Link
            class="hover:text-blue-500 transition-colors duration-200"
            :class="{ 'font-bold': $page.url.startsWith('/projects') }"
            :href="route('projects')">
            Projects
        </Link>
        <Link
            class="hover:text-blue-500 transition-colors duration-200"
            :class="{ 'font-bold': $page.url.startsWith('/contact') }"
            :href="route('contact')">
            Contact
        </Link>
    </menu>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3';
</script>
