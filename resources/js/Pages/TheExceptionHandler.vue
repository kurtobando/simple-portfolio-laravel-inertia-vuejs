<template>
    <div
        class="min-h-screen flex flex-col items-center justify-center text-center uppercase text-slate-600 text-lg tracking-wider p-4">
        <Head>
            <title>{{ title }}</title>
        </Head>
        <p>Oops, {{ title }}!</p>
        <p class="text-slate-400 text-xs leading-relaxed">{{ message ?? description }}</p>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Head } from '@inertiajs/vue3';

const title = computed(() => {
    return {
        503: 'Service Unavailable',
        500: 'Server Error',
        400: 'Bad Request',
        401: 'Unauthorized',
        404: 'Page Not Found',
        403: 'Forbidden',
    }[props.status];
});
const description = computed(() => {
    return {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        400: 'Whoops, you have a bad request.',
        401: 'Sorry, you are not authorized.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
    }[props.status];
});

const props = defineProps<Props>();

interface Props {
    status: number;
    message: string;
}
</script>
