<template>
    <Teleport to="body">
        <div
            class="relative z-10"
            v-if="isOpen">
            <div class="fixed inset-0 bg-black bg-opacity-60 transition-opacity"></div>
            <div class="fixed inset-0 z-10">
                <div class="flex min-h-full items-center justify-center p-4">
                    <div class="relative rounded bg-white shadow p-4">
                        <slot />
                        <a
                            class="text-slate-400 text-sm block hover:underline mt-8"
                            href="#"
                            @click="onToggle">
                            Close Window
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
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
        const onToggle = () => {
            emit('onToggle');
        };

        return {
            onToggle,
        };
    },
};
</script>
