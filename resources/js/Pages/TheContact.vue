<template>
    <div class="flex flex-col justify-center items-center text-center gap-4 p-8 h-[88vh]">
        <Head>
            <title>Contact</title>
        </Head>
        <h1 class="font-bold text-5xl wider leading-tight">Want to work together ?</h1>
        <p class="text-lg text-slate-500">
            If you are excited about something you are making. I want to work with you.
        </p>
        <button
            class="p-5 px-8 bg-gray-800 text-white rounded mt-8 hover:bg-blue-500 transition-colors duration-200"
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
                    class="flex flex-col gap-3 w-full md:w-1/2"
                    @submit.prevent="onSubmit">
                    <p class="text-red-600 text-center">{{ error }}</p>
                    <input
                        v-model="form.name"
                        class="rounded form-input border border-slate-100 placeholder-slate-400 p-4"
                        type="text"
                        placeholder="name" />
                    <p
                        v-if="form.errors.name"
                        class="self-start text-sm text-red-600">
                        {{ form.errors.name }}
                    </p>
                    <input
                        v-model="form.email"
                        class="rounded form-input border border-slate-100 placeholder-slate-400 p-4"
                        type="text"
                        placeholder="email" />
                    <p
                        v-if="form.errors.email"
                        class="self-start text-sm text-red-600">
                        {{ form.errors.email }}
                    </p>
                    <textarea
                        v-model="form.message"
                        class="rounded form-textarea border border-slate-100 placeholder-slate-400 p-4"
                        cols="30"
                        rows="10"
                        placeholder="message"></textarea>
                    <p
                        v-if="form.errors.message"
                        class="self-start text-sm text-red-600">
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

<script lang="ts" setup>
import { SharedProps } from '@type/inertia';
import { computed, ref } from 'vue';
import { Head, useForm, usePage } from '@inertiajs/vue3';
import Toastify from 'toastify-js';
import Modal from '@/Components/Modal.vue';
import SocialMediaLinks from '@/Components/SocialMediaLinks.vue';
import route from 'ziggy-js';
import { defineOptions } from 'unplugin-vue-define-options/macros';
import FullWidth from '@/Layout/FullWidth.vue';

const modalIsOpen = ref(false);
const success = computed(() => usePage<SharedProps>().props.flash.success);
const error = computed(() => usePage<SharedProps>().props.flash.error);
const form = useForm({ name: '', email: '', message: '' });

function onSubmit() {
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
}

const modalToggle = () => (modalIsOpen.value = !modalIsOpen.value);

defineOptions({
    layout: FullWidth,
});
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
