<template>
    <ul class="flex gap-6">
        <li>
            <a
                href="https://github.com/kurtobando/"
                target="_blank">
                <Github
                    class="hover:text-blue-500 transition-colors duration-200"
                    :size="30" />
            </a>
        </li>
        <li>
            <a
                href="https://www.linkedin.com/in/kurt-obando/"
                target="_blank">
                <Linkedin
                    class="hover:text-blue-500 transition-colors duration-200"
                    :size="30" />
            </a>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { Linkedin, Github } from 'lucide-vue-next';
</script>
