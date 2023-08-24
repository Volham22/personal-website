<script setup lang="ts">
    const properties = defineProps({
        title: String,
        link: String,
    });
</script>

<template>
    <article class="px-6">
        <h3 class="text-2xl py-4 text-cyan-700">{{ properties.title }}</h3>
        <section class="lg:flex lg:divide-x max-[1000px]:divide-y divide-dashed">
            <div class="dark:text-gray-300 px-3 basis-4/5">
                <slot></slot>
            </div>
            <a class="basis-1/5 px-3 grid place-content-center" :href=properties.link>
                <font-awesome-icon icon="fa-brands fa-github" class="w-32 h-32 dark:text-white mx-auto py-2" />
                <caption class="text-sky-800 my-auto">Discover more on github!</caption>
            </a>
        </section>
    </article>
</template>
