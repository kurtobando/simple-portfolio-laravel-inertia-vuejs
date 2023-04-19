<template>
    <Head>
        <title>Contact</title>
    </Head>
    <div class="flex flex-col justify-center items-center text-center gap-4 p-8 h-[88vh]">
        <h1 class="font-bold text-5xl wider leading-tight">Want to work together ?</h1>
        <p class="text-lg text-slate-500">
            If you are excited about something you are making. I want to work with you.
        </p>
        <button
            class="p-5 px-8 bg-gray-800 hover:bg-gray-700 text-white rounded mt-8 hover:bg-blue-500 transition-colors duration-200"
            @click="modalToggle">
            Send Message
        </button>

        <Modal
            :is-open="modalIsOpen"
            @onToggle="modalToggle">
            <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div class="flex flex-col justify-center items-center text-center gap-4 md:w-1/2">
                    <h2 class="font-bold text-5xl leading-tight mt-8 md:mt-0">Hi There!</h2>
                    <p class="text-lg text-slate-500">
                        I’m interested in freelance opportunities, however, if you have other request or question, don’t
                        hesitate to use the form.
                    </p>
                    <SocialMediaLinks class="md:mt-6" />
                </div>
                <form
                    @submit.prevent="submit"
                    class="flex flex-col gap-3 w-full md:w-1/2">
                    <p class="text-red-600 text-center">{{ error }}</p>
                    <input
                        class="rounded form-input border border-slate-100 placeholder-slate-400 p-4"
                        v-model="form.name"
                        type="text"
                        placeholder="name" />
                    <p
                        class="self-start text-sm text-red-600"
                        v-if="form.errors.name">
                        {{ form.errors.name }}
                    </p>
                    <input
                        class="rounded form-input border border-slate-100 placeholder-slate-400 p-4"
                        v-model="form.email"
                        type="text"
                        placeholder="email" />
                    <p
                        class="self-start text-sm text-red-600"
                        v-if="form.errors.email">
                        {{ form.errors.email }}
                    </p>
                    <textarea
                        class="rounded form-textarea border border-slate-100 placeholder-slate-400 p-4"
                        v-model="form.message"
                        cols="30"
                        rows="10"
                        placeholder="message"></textarea>
                    <p
                        class="self-start text-sm text-red-600"
                        v-if="form.errors.message">
                        {{ form.errors.message }}
                    </p>
                    <button
                        class="bg-gray-800 text-white p-6 rounded hover:bg-blue-500 transition-colors duration-200"
                        type="submit"
                        :disabled="form.processing">
                        Send Message
                    </button>
                </form>
            </div>
        </Modal>
    </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue';
import { Head } from '@inertiajs/inertia-vue3';
import { useForm, usePage } from '@inertiajs/inertia-vue3';
import Modal from '@/Components/Modal.vue';
import SocialMediaLinks from '@/Components/SocialMediaLinks.vue';
import Toastify from 'toastify-js';

const route = inject('route');
const modalIsOpen = ref(false);
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
            Toastify({
                text: success.value,
                duration: 10000,
                gravity: 'top',
                position: 'center',
                stopOnFocus: true,
            }).showToast();
            modalToggle();
        },
    });
};

const modalToggle = () => (modalIsOpen.value = !modalIsOpen.value);
</script>

<script>
import FullWidth from '@/Layout/FullWidth.vue';
export default {
    layout: FullWidth,
};
</script>

<style scoped>
input,
textarea {
    @apply text-sm text-slate-600;
}
input::placeholder {
    @apply text-xs;
}
textarea::placeholder {
    @apply text-xs;
}
</style>
