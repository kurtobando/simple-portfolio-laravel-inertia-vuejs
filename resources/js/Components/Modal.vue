<template>
    <Teleport to="body">
        <div
            class="relative z-10"
            v-if="isOpen">
            <div class="fixed inset-0 bg-black bg-opacity-60"></div>
            <div class="fixed inset-0 z-10 overflow-y-scroll">
                <div class="flex min-h-full items-center justify-center p-4">
                    <div
                        ref="modalRef"
                        class="relative rounded bg-white shadow p-6 md:p-10 w-full md:w-2/3 xl:w-2/3 2xl:w-1/2">
                        <slot />
                        <a
                            @click="onToggle"
                            class="block underline text-sm text-center text-slate-600 my-8 mb-4 md:hidden">
                            Close Window
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

export default {
    emits: ['onToggle'],
    props: {
        isOpen: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    setup(props, { emit }) {
        const modalRef = ref(null);
        const onToggle = () => {
            emit('onToggle');
        };

        onClickOutside(modalRef, onToggle);

        return {
            onToggle,
            modalRef,
        };
    },
};
</script>
