<script setup lang="ts">
    import TimelineItem from './TimelineItem.vue';

    export type Item = { date: Date, title: string, description: string }
    export interface Props {
        title: string,
        items: Item[],
    };

    const properties = defineProps<Props>();
</script>

<template>
    <h2 class="text-4xl py-4 text-cyan-500">{{ properties.title }}</h2>
    <section class="container mx-auto">
        <ol  class="relative border-l border-gray-200 dark:border-gray-700">
            <li v-for="item in properties.items" class="mb-10 ml-4">
                <TimelineItem :date=item.date :title=item.title :description=item.description />
            </li>
        </ol>
    </section>
</template>
