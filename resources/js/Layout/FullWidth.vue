<template>
    <main>
        <Navigation />
        <slot />
    </main>
</template>

<script>
import Navigation from '@/Components/Navigation.vue';

export default {
    components: {
        Navigation,
    },
};
</script>

<style scoped></style>
