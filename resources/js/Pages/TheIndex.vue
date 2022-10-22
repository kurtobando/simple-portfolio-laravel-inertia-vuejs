<template>
    <Head>
        <title>Hi there! Im Kurt</title>
    </Head>
    <Navigation />
    <div>
        <h1>Hey! I’m Kurt</h1>
        <p>
            A frontend developer who enjoy the experience working with
            JavaScript, and travel during spare time.
        </p>
        <SocialMediaLinks />
    </div>
</template>

<script>
import Navigation from '@/Components/Navigation.vue';
import SocialMediaLinks from '@/Components/SocialMediaLinks.vue';
import { Head } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Head,
        Navigation,
        SocialMediaLinks,
    },
};
</script>
