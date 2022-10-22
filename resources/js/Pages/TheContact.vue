<template>
    <Head>
        <title>Contact</title>
    </Head>
    <Navigation />
    <div>
        <h1>Want to work together ?</h1>
        <p>
            If you are excited about something you are making. I want to work
            with you.
        </p>
        <SocialMediaLinks />
        <form action="">
            <input
                type="text"
                placeholder="name" />
            <input
                type="text"
                placeholder="email" />
            <textarea
                cols="30"
                rows="10"
                placeholder="message"></textarea>
        </form>
    </div>
</template>

<script>
import SocialMediaLinks from '@/Components/SocialMediaLinks.vue';
import Navigation from '@/Components/Navigation.vue';
import { Head } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Head,
        Navigation,
        SocialMediaLinks,
    },
};
</script>
