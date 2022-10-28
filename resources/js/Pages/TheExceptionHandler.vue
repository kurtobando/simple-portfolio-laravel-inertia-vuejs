<template>
    <Head>
        <title>{{ title }}</title>
    </Head>
    <div
        class="min-h-screen flex flex-col items-center justify-center text-center uppercase text-slate-400 text-lg tracking-wider">
        <p>Oops, {{ title }}!</p>
        <p class="text-slate-300">{{ message ?? description }}</p>
    </div>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3';

export default {
    components: { Head },
    props: {
        status: Number,
        message: String,
    },
    computed: {
        title() {
            return {
                503: 'Service Unavailable',
                500: 'Server Error',
                400: 'Bad Request',
                401: 'Unauthorized',
                404: 'Page Not Found',
                403: 'Forbidden',
            }[this.status];
        },
        description() {
            return {
                503: 'Sorry, we are doing some maintenance. Please check back soon.',
                500: 'Whoops, something went wrong on our servers.',
                400: 'Whoops, you have a bad request.',
                401: 'Sorry, you are not authorized.',
                404: 'Sorry, the page you are looking for could not be found.',
                403: 'Sorry, you are forbidden from accessing this page.',
            }[this.status];
        },
    },
};
</script>
