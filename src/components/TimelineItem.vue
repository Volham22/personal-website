<script setup lang="ts">
    import { Item } from './Timeline.vue';
    const properties = defineProps<Item>();
</script>

<template>
    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ properties.date.toLocaleDateString() }}</time>
    <h3 class="text-lg font-semibold text-gray-700 text-teal-700 dark:text-teal-600">{{ properties.title }}</h3>
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ properties.description }}</p>
</template>
