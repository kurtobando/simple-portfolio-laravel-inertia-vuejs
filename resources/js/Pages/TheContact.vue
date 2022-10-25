<template>
    <Head>
        <title>Contact</title>
    </Head>
    <div class="flex flex-col justify-center items-center text-center gap-4 p-8 min-h-screen">
        <h1 class="font-bold text-5xl wider tracking-tight">Want to work together ?</h1>
        <p class="text-lg">If you are excited about something you are making. I want to work with you.</p>
        <button
            class="p-5 px-8 bg-gray-800 hover:bg-gray-700 text-white rounded mt-8"
            @click="modalToggle">
            Send Message
        </button>
        <!--        <form-->
        <!--            @submit.prevent="submit"-->
        <!--            class="flex flex-col gap-4 w-full md:w-auto">-->
        <!--            <p class="text-green-600">{{ success }}</p>-->
        <!--            <p class="text-red-600">{{ error }}</p>-->
        <!--            <input-->
        <!--                class="p-2 border rounded"-->
        <!--                v-model="form.name"-->
        <!--                type="text"-->
        <!--                placeholder="name" />-->
        <!--            <p-->
        <!--                class="self-start text-sm text-red-600"-->
        <!--                v-if="form.errors.name">-->
        <!--                {{ form.errors.name }}-->
        <!--            </p>-->
        <!--            <input-->
        <!--                class="p-2 border rounded"-->
        <!--                v-model="form.email"-->
        <!--                type="text"-->
        <!--                placeholder="email" />-->
        <!--            <p-->
        <!--                class="self-start text-sm text-red-600"-->
        <!--                v-if="form.errors.email">-->
        <!--                {{ form.errors.email }}-->
        <!--            </p>-->
        <!--            <textarea-->
        <!--                class="p-2 border rounded"-->
        <!--                v-model="form.message"-->
        <!--                cols="30"-->
        <!--                rows="10"-->
        <!--                placeholder="message"></textarea>-->
        <!--            <p-->
        <!--                class="self-start text-sm text-red-600"-->
        <!--                v-if="form.errors.message">-->
        <!--                {{ form.errors.message }}-->
        <!--            </p>-->
        <!--            <button-->
        <!--                class="bg-gray-800 text-white p-5 rounded"-->
        <!--                type="submit"-->
        <!--                :disabled="form.processing">-->
        <!--                Send-->
        <!--            </button>-->
        <!--        </form>-->
        <Modal
            :is-open="modalIsOpen"
            @onToggle="modalToggle">
            Hello World
        </Modal>
    </div>
</template>

<script>
import Modal from '@/Components/Modal.vue';
import FullWidth from '@/Layout/FullWidth.vue';
import { computed, ref } from 'vue';
import { Head } from '@inertiajs/inertia-vue3';
import { useForm, usePage } from '@inertiajs/inertia-vue3';

export default {
    layout: FullWidth,
    components: {
        Head,
        Modal,
    },
    setup() {
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
                },
            });
        };

        const modalToggle = () => {
            modalIsOpen.value = !modalIsOpen.value;
        };

        return {
            form,
            submit,
            success,
            error,
            modalIsOpen,
            modalToggle,
        };
    },
};
</script>
