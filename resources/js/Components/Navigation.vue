<template>
    <menu class="flex justify-center md:justify-end items-center gap-8 p-8 px-12 text-lg">
        <Link
            class="hover:text-blue-500 transition-colors duration-200"
            :class="{ 'font-bold': $page.url === '/' }"
            href="/">
            About
        </Link>
        <Link
            class="hover:text-blue-500 transition-colors duration-200"
            :class="{ 'font-bold': $page.url.startsWith('/projects') }"
            href="/projects">
            Projects
        </Link>
        <Link
            class="hover:text-blue-500 transition-colors duration-200"
            :class="{ 'font-bold': $page.url.startsWith('/contact') }"
            href="/contact">
            Contact
        </Link>
    </menu>
</template>

<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';
</script>
