<template>
    <div class="min-h-screen bg-slate-100 grid place-items-center">
        <div class="p-6 bg-white shadow flex flex-col gap-4">
            <a
                class="hover:text-blue-500 transition-colors duration-200"
                target="_blank"
                :href="$route('horizon.index')">
                Horizon
            </a>
            <a
                class="hover:text-blue-500 transition-colors duration-200"
                target="_blank"
                :href="$route('telescope')">
                Telescope
            </a>
            <Link
                class="hover:text-blue-500 transition-colors duration-200"
                :href="$route('sign-out')"
                method="post">
                Sign-out
            </Link>
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Link,
    },
};
</script>

<style scoped></style>
