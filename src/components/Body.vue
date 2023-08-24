<script setup lang="ts">
    import WhoAmI from "./WhoAmI.vue";
    import Timeline from "./Timeline.vue";
    import Project from "./Project.vue";

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
            <p class="text-center text-2xl dark:text-teal-400 text-teal-600 italic">Software engineering student at EPITA</p>
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
        <section class="p-4">
            <h2 class="text-4xl text-cyan-500 my-4">Projects</h2>
            <Project title="Raptor" link="https://github.com/Volham22/raptor">
                <div class="flex flex-row flex-wrap lg:flex-nowrap px-4">
                    <figure class="w-full h-full lg:basis-1/4 py-4">
                        <img class="lg:w-64 lg:h-64 w-48 h-48 mx-auto" src="raptor_transparent.png" alt="Raptor logo"/>
                        <figcaption class="text-center">Raptor's logo</figcaption>
                    </figure>
                    <div class="lg:p-4 container mx-auto lg:basis-3/4">
                        <p class="text-start lg:text-xl">
                        In my quest to enhance my
                        network programming skills and gain a comprehensive
                        understanding of HTTP/2, I embarked on a
                        personal project that would ultimately redefine
                        my perspective on web servers. Major web servers
                        such as nginx or apache are complex to configure
                        for non initiated person with simple needs. This
                        project not
                        only serves as a platform for my learning but also
                        addresses the challenges that motivated its
                        creation. With a strong foundation built upon the
                        <a href="https://tokio.rs/">tokio</a> asynchronous
                        runtime, Raptor is capable to handle an extensive
                        influx of concurrent requests, exceeding several
                        hundred, all while ensuring a good average latency
                        of approximately 30 milliseconds. This website
                        attests to Raptor's capabilities.
                        </p>
                    </div>
                </div>
            </Project>
            <Project title="Bubble" link="https://github.com/Volham22/raptor">
            <p class="px-4 lg:text-xl">
            Bubble is a work in progress
            compiler frontend for my own programming language
            targetting LLVM.  Bubble is a minimal, low level and
            simple programming language, much like C. Its goal is
            to bring modern features like namespace and and ES like
            modules to a minimal language. The compiler is written in Rust and
            use a LR(1) parser generator to parse its grammar.
            </p>
            </Project>
        </section>
    </div>
</template>
