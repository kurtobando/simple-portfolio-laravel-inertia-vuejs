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
        <form @submit.prevent="submit">
            <p class="">{{ success }}</p>
            <p>{{ error }}</p>
            <input
                v-model="form.name"
                type="text"
                placeholder="name" />
            <p v-if="form.errors.name">{{ form.errors.name }}</p>
            <input
                v-model="form.email"
                type="text"
                placeholder="email" />
            <p v-if="form.errors.email">{{ form.errors.email }}</p>
            <textarea
                v-model="form.message"
                cols="30"
                rows="10"
                placeholder="message"></textarea>
            <p v-if="form.errors.message">{{ form.errors.message }}</p>
            <button
                type="submit"
                :disabled="form.processing">
                Send
            </button>
        </form>
    </div>
</template>

<script>
import SocialMediaLinks from '@/Components/SocialMediaLinks.vue';
import Navigation from '@/Components/Navigation.vue';
import { computed } from 'vue';
import { Head } from '@inertiajs/inertia-vue3';
import { useForm, usePage } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Head,
        Navigation,
        SocialMediaLinks,
    },
    setup() {
        const success = computed(() => usePage().props.value.flash.success);
        const error = computed(() => usePage().props.value.flash.error);

        const form = useForm({
            name: '',
            email: '',
            message: '',
        });

        const submit = () => {
            form.post(route('contact.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    form.reset('name', 'email', 'message');
                },
            });
        };

        return {
            form,
            submit,
            success,
            error,
        };
    },
};
</script>
