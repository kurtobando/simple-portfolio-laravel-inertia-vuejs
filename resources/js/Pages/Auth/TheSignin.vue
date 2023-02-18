<template>
    <Head>
        <title>Sign-in</title>
    </Head>
    <div class="min-h-screen grid place-items-center bg-slate-100">
        <div class="flex flex-col gap-8 p-4">
            <form
                @submit.prevent="onSubmit"
                autocomplete="off"
                class="flex flex-col gap-4 p-6 md:p-10 py-20 bg-white shadow rounded placeholder-slate-400 text-sm">
                <input
                    class="form-text rounded border-slate-200 placeholder-slate-400 w-full p-4"
                    type="text"
                    placeholder="email address"
                    v-model="form.email"
                    autocomplete="off" />
                <p
                    v-if="form.errors.email"
                    class="text-sm text-red-600">
                    {{ form.errors.email }}
                </p>
                <input
                    class="form-text rounded border-slate-200 placeholder-slate-400 w-full p-4"
                    type="password"
                    placeholder="password"
                    v-model="form.password"
                    autocomplete="off" />
                <p
                    v-if="form.errors.password"
                    class="text-sm text-red-600">
                    {{ form.errors.password }}
                </p>
                <button
                    :disabled="form.processing"
                    class="p-6 px-8 bg-gray-800 hover:bg-gray-700 text-white rounded hover:bg-blue-500 transition-colors duration-200"
                    type="submit">
                    Sign-in
                </button>
            </form>
            <Link
                class="text-sm text-slate-400 text-center hover:text-blue-500"
                :href="route('about')">
                Go to Home
            </Link>
        </div>
    </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useForm, usePage, Head, Link } from '@inertiajs/inertia-vue3';
import Toastify from 'toastify-js';

const route = inject('route');
const success = computed(() => usePage().props.value.flash.success);
const error = computed(() => usePage().props.value.flash.error);

const form = useForm({
    email: '',
    password: '',
});

const onSubmit = () => {
    form.post(route('sign-in.store'), {
        preserveScroll: true,
        onSuccess: () => {
            if (error.value) {
                Toastify({
                    text: error.value,
                    duration: 3000,
                    close: true,
                    gravity: 'top',
                    position: 'center',
                    backgroundColor: 'linear-gradient(90deg, rgba(255,0,0,1) 44%, rgba(255,113,0,1) 100%)',
                }).showToast();
            }
        },
    });
};
</script>

<style scoped>
input {
    @apply text-sm;
}
input::placeholder {
    @apply text-xs;
}
</style>
