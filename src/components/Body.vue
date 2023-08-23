<script setup lang="ts">
    import WhoAmI from "./WhoAmI.vue";
    import Timeline from "./Timeline.vue";

    const exp_items = [
        {
            "date": new Date(),
            "title": "Teaching assistant YAKA/ACU",
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
            "title": "DUT Informatique Orléans",
            "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
        },
        {
            "date": new Date(),
            "title": "BAC S-SI",
            "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
        },
    ];
</script>

<template>
    <div class="divide divide-solid divide-y px-12">
        <section class="container mx-auto py-6 w-full">
            <h1 class="lg:text-9xl md:text-9xl text-6xl text-center dark:text-gray-50 px-2">Corentin Machu</h1>
            <p class="text-center text-2xl dark:text-teal-400 italic">This Website is served by my own HTTP/2 server implemented from scratch</p>
        </section>
        <section class="p-4">
            <WhoAmI />
        </section>
        <section class="md:flex p-4 mx-auto flex-wrap md:flex-nowrap lg: flex-nowrap">
            <div class="m-4 basis-1/2">
                <Timeline title="Expériences" :items=exp_items />
            </div>
            <div class="m-4 basis-1/2">
                <Timeline title="Formation" :items=school_items />
            </div>
        </section>
    </div>
</template>
