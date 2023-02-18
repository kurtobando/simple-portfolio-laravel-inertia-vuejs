<template>
    <Head>
        <title>Dashboard</title>
    </Head>
    <div class="min-h-screen bg-slate-100 grid place-items-center p-6">
        <div class="p-8 bg-white shadow flex flex-col gap-4 w-full md:w-2/3">
            <h1 class="font-bold text-5xl mb-8">Hello there!</h1>
            <a
                class="hover:text-blue-500 transition-colors duration-200"
                target="_blank"
                href="/horizon">
                Horizon
                <p class="text-xs text-slate-400">
                    Laravel Horizon provides a beautiful dashboard and code-driven configuration for your Laravel
                    powered Redis queues. Horizon allows you to easily monitor key metrics of your queue system such as
                    job throughput, runtime, and job failures.
                </p>
            </a>
            <a
                class="hover:text-blue-500 transition-colors duration-200"
                target="_blank"
                href="/telescope">
                Telescope
                <p class="text-xs text-slate-400">
                    Laravel Telescope makes a wonderful companion to your local Laravel development environment.
                    Telescope provides insight into the requests coming into your application, exceptions, log entries,
                    database queries, queued jobs, mail, notifications, cache operations, scheduled tasks, variable
                    dumps, and more.
                </p>
            </a>
            <Link
                class="hover:text-blue-500 transition-colors duration-200 text-left"
                :href="route('sign-out')"
                as="button"
                method="post">
                Sign-out
                <p class="text-xs text-slate-400">Sign-out your current session.</p>
            </Link>
        </div>
    </div>
</template>

<script setup>
import { Link, Head } from '@inertiajs/inertia-vue3';
</script>

<style scoped></style>
