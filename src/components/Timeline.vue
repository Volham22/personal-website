<script setup lang="ts">
    import TimelineItem from './TimelineItem.vue';

    const properties = defineProps({
        title: String,
        items: { "date": Date, title: String, description: String }
    });
</script>

<template>
    <h2 class="text-4xl py-4 dark:text-gray-200 text-cyan-500">{{ properties.title }}</h2>
    <section class="container mx-auto">
        <ol  class="relative border-l border-gray-200 dark:border-gray-700">
            <li v-for="item in properties.items" class="mb-10 ml-4">
                <TimelineItem :date=item.date :title=item.title :description=item.description />
            </li>
        </ol>
    </section>
</template>
