<template>
    <Teleport to="body">
        <div
            v-if="props.isOpen"
            class="relative z-10">
            <div class="fixed inset-0 bg-black bg-opacity-60"></div>
            <div class="fixed inset-0 z-10 overflow-y-scroll md:overflow-y-hidden">
                <div class="flex min-h-full items-center justify-center p-4">
                    <div
                        ref="modalRef"
                        class="relative rounded bg-white shadow p-6 md:p-10 w-full md:w-2/3 xl:w-2/3 2xl:w-1/2">
                        <slot />
                        <a
                            class="block text-sm text-center text-slate-400 my-8 mb-4 md:hidden cursor-pointer"
                            @click="onToggle">
                            Close Window
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const emits = defineEmits(['onToggle']);
const props = withDefaults(defineProps<Props>(), { isOpen: false });

const modalRef = ref(null);
const onToggle = () => emits('onToggle');

onClickOutside(modalRef, onToggle);

interface Props {
    isOpen?: boolean;
}
</script>
