<template>
    <img
        v-if="svgSource(props.name) !== null"
        :src="svgSource(props.name)"
        :alt="props.name"
        class="h-6 w-6 opacity-60" />
    <span v-else>
        {{ props.name }}
    </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import html from '@svg/html.svg';
import css from '@svg/css.svg';
import inertiajs from '@svg/inertiajs.svg';
import js from '@svg/js.svg';
import laravel from '@svg/laravel.svg';
import node from '@svg/node.svg';
import php from '@svg/php.svg';
import scss from '@svg/scss.svg';
import reactjs from '@svg/reactjs.svg';
import vuejs from '@svg/vuejs.svg';
import tailwind from '@svg/tailwind.svg';

const svgSource = computed(() => {
    return (name: string) => {
        let _name;
        switch (name.toLowerCase()) {
            case 'html':
                _name = html;
                break;
            case 'css':
                _name = css;
                break;
            case 'scss':
                _name = scss;
                break;
            case 'js':
                _name = js;
                break;
            case 'php':
                _name = php;
                break;
            case 'laravel':
                _name = laravel;
                break;
            case 'node':
                _name = node;
                break;
            case 'reactjs':
                _name = reactjs;
                break;
            case 'vuejs':
                _name = vuejs;
                break;
            case 'inertiajs':
                _name = inertiajs;
                break;
            case 'tailwind':
                _name = tailwind;
                break;
            default:
                _name = null;
        }
        return _name;
    };
});

const props = withDefaults(defineProps<Props>(), { name: '' });

interface Props {
    name: string;
}
</script>

<style scoped></style>
