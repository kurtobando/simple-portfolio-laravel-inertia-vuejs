<template>
    <ul class="flex gap-6">
        <li>
            <a
                href="https://github.com/kurtobando/"
                target="_blank">
                <Github size="30" />
            </a>
        </li>
        <li>
            <a
                href="https://www.linkedin.com/in/kurt-obando/"
                target="_blank">
                <Linkedin size="30" />
            </a>
        </li>
    </ul>
</template>

<script>
import { Linkedin, Github } from 'lucide-vue-next';

export default {
    components: {
        Linkedin,
        Github,
    },
};
</script>
