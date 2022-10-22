<template>
    <Head>
        <title>Hi there! Im Kurt</title>
    </Head>
    <menu>
        <Link>About</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
    </menu>
    <div>
        <h1>Hey! I’m Kurt</h1>
        <p>
            a frontend developer who enjoy the experience working with
            JavaScript, and travel during spare time.
        </p>
    </div>
</template>

<script>
import { Head, Link } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Head,
        Link,
    },
};
</script>
