<template>
    <div class="flex flex-col justify-center items-center text-center gap-4 p-8 h-[88vh]">
        <h1 class="font-bold text-5xl wider leading-tight">Hi there! I am Kurt</h1>
        <p class="text-slate-500 text-lg w-full lg:w-1/2 xl:w-1/2 2xl:w-1/3">
            A frontend developer who enjoy the experience working with JavaScript, and travel during spare time.
        </p>
        <SocialMediaLinks class="mt-8" />
    </div>
</template>

<script lang="ts" setup>
import SocialMediaLinks from '@/Components/SocialMediaLinks.vue';
import FullWidth from '@/Layout/FullWidth.vue';

defineOptions({
    layout: FullWidth,
});
</script>
