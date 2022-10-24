<template>
    <Head>
        <title>Hi there! I'm Kurt</title>
    </Head>
    <div
        class="flex flex-col justify-center items-center text-center gap-4 p-8 min-h-screen">
        <h1 class="font-bold text-5xl wider tracking-tight">
            Hi there! I am Kurt
        </h1>
        <p class="text-lg w-full xl:w-1/2">
            A frontend developer who enjoy the experience working with
            JavaScript, and travel during spare time.
        </p>
        <SocialMediaLinks class="mt-8" />
    </div>
</template>

<script>
import FullWidth from '@/Layout/FullWidth.vue';
import SocialMediaLinks from '@/Components/SocialMediaLinks.vue';
import { Head } from '@inertiajs/inertia-vue3';

export default {
    layout: FullWidth,
    components: {
        Head,
        SocialMediaLinks,
    },
};
</script>
