<template>
    <div class="grid place-items-center h-[88vh] w-full overflow-hidden">
        <Head>
            <title>Personal Projects</title>
        </Head>
        <Flicking
            :options="options"
            :plugins="plugins">
            <div
                v-for="project in props.projects"
                :key="project.id">
                <div class="flex flex-col justify-center align-center gap-4 w-[80vw] h-[80vh] text-center">
                    <Link :href="`/projects/${project.slug}`">
                        <span
                            class="font-bold text-5xl hover:text-blue-500 transition-colors duration-200 leading-tight">
                            {{ project.title }}
                        </span>
                        <p
                            class="text-slate-500 leading-relaxed mt-2"
                            v-html="project.excerpt"></p>
                    </Link>
                    <ul class="flex flex-row gap-3 justify-center">
                        <li
                            v-for="svg in convertToolsToArray(project.tools)"
                            :key="svg">
                            <Svg :name="svg" />
                        </li>
                    </ul>
                </div>
            </div>
            <template #viewport>
                <div class="flicking-pagination flicking-pagination-bullets"></div>
            </template>
        </Flicking>
    </div>
</template>

<script lang="ts" setup>
import { Project } from '@type/project';
import { computed } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import { Perspective, Pagination, Fade } from '@egjs/flicking-plugins';
import Flicking from '@egjs/vue3-flicking';
import Svg from '@/Components/Svg.vue';
import FullWidth from '@/Layout/FullWidth.vue';

const convertToolsToArray = computed(() => (icons: string) => icons.split(',').map((icon) => icon.trim()));
const plugins = [new Perspective({ rotate: 0.2, scale: 4 }), new Pagination({ type: 'bullet' }), new Fade()];
const options = { autoResize: true };
const props = defineProps<Props>();

interface Props {
    projects: Project[];
}

defineOptions({
    layout: FullWidth,
});
</script>

<style>
.flicking-pagination-bullets {
    margin-top: 1rem;
}
.flicking-pagination-bullets span {
    width: 10px !important;
    height: 10px !important;
}
.flicking-pagination-bullet-active {
    background-color: #1e293b !important;
}
</style>
