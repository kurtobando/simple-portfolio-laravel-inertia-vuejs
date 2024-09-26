<template>
    <Head>
        <title>Sign-in</title>
    </Head>
    <div class="min-h-screen grid place-items-center bg-slate-100">
        <div class="w-full md:w-1/3 flex flex-col gap-8 p-4">
            <form
                autocomplete="off"
                class="flex flex-col gap-4 p-6 md:p-10 py-20 bg-white shadow rounded placeholder-slate-400 text-sm"
                @submit.prevent="onSubmit">
                <input
                    v-model="form.email"
                    class="form-text rounded border-slate-200 placeholder-slate-400 w-full p-4"
                    type="text"
                    placeholder="email address"
                    autocomplete="off" />
                <p
                    v-if="form.errors.email"
                    class="text-sm text-red-600">
                    {{ form.errors.email }}
                </p>
                <input
                    v-model="form.password"
                    class="form-text rounded border-slate-200 placeholder-slate-400 w-full p-4"
                    type="password"
                    placeholder="password"
                    autocomplete="off" />
                <p
                    v-if="form.errors.password"
                    class="text-sm text-red-600">
                    {{ form.errors.password }}
                </p>
                <button
                    :disabled="form.processing"
                    class="p-5 px-8 bg-gray-800 text-white rounded hover:bg-blue-500 transition-colors duration-200"
                    type="submit">
                    Sign-in
                </button>
            </form>
            <Link
                class="text-sm text-slate-400 text-center hover:text-blue-500"
                href="/">
                Go to Home
            </Link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { SharedProps } from '@type/inertia';
import { computed } from 'vue';
import { useForm, usePage, Head, Link } from '@inertiajs/vue3';
import Toastify from 'toastify-js';

const error = computed(() => usePage<SharedProps>().props.flash.error);
const form = useForm({ email: '', password: '' });

function onSubmit() {
    form.post('/sign-in', {
        preserveScroll: true,
        onSuccess: () => {
            if (error.value) {
                Toastify({
                    text: error.value,
                    duration: 3000,
                    close: true,
                    gravity: 'top',
                    position: 'center',
                    style: {
                        background: 'linear-gradient(90deg, rgba(255,0,0,1) 44%, rgba(255,113,0,1) 100%)',
                    },
                }).showToast();
            }
        },
    });
}
</script>

<style scoped>
input {
    @apply text-sm;
}
input::placeholder {
    @apply text-xs;
}
</style>
