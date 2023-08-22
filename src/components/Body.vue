<script setup lang="ts">
    import WhoAmI from "./WhoAmI.vue";
    import Timeline from "./Timeline.vue";

    const exp_items = [
        {
            "date": new Date(),
            "title": "Assistant professeur YAKA/ACU",
            "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
        },
        {
            "date": new Date(),
            "title": "Parsec (Scille)",
            "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
        },
        {
            "date": new Date(),
            "title": "Sogecap",
            "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
        }
    ];

    const school_items = [
        {
            "date": new Date(),
            "title": "EPITA",
            "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
        },
        {
            "date": new Date(),
            "title": "DUT Informatique",
            "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
        },
    ];
</script>

<template>
    <div class="divide divide-solid divide-y px-12">
        <section class="px-6 py-6 w-full">
            <h1 class="text-9xl text-center px-2">Corentin Machu</h1>
            <p class="text-center text-2xl italic">Lorem ipsum</p>
        </section>
        <section class="p-4">
            <WhoAmI />
        </section>
        <section class="p-4">
            <Timeline title="Expériences" :items=exp_items />
        </section>
        <section class="p-4">
            <Timeline title="Formation" :items=exp_items />
        </section>
    </div>
</template>
