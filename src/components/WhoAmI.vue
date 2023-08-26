<script setup lang="ts">
    const skills = [
        { name: "Rust", image: "rust.png" },
        { name: "C", image: "c.png" },
        { name: "C++", image: "cpp.png" },
        { name: "Javascript", image: "javascript.png" },
        { name: "Python", image: "python.png" },
    ];
</script>

<template>
    <article class="m-4">
        <h2 class="text-4xl text-cyan-500">Who am I?</h2>
        <div class="flex lg:flex-row md:flex-row lg:py-4 py-4 flex-wrap lg:flex-nowrap md:flex-nowrap">
            <p class="lg:basis-1/2 basis-3/4 mx-4 dark:text-gray-300 lg:text-xl">
            Hello, I'm Corentin, a 22-year-old computer science student at
            EPITA. I'm fueled by curiosity and ambition, spending my spare time
            crafting projects to bring my ideas to life. My focus within EPITA's
            Embedded System Safety and Security major revolves around low-level
            programming, where I've cultivated strong technical skills. I'm also
            engaged as a teaching assistant, supporting first-year students in computer science with
            their <em>C/C++/Java</em> and <em>JavaScript</em> projects. This experience developed
            my communication and technical abilities. Seeking
            an end-of-studies internship in software engineering, I'm eager to
            use my skills and passion into practical applications.
            </p>
            <div class="flex flex-wrap lg:basis-1/2 basis-1/4 lg:flex-nowrap mx-auto">
                <div v-for="skill in skills" class="container mx-auto p-2">
                    <div class="border border-solid dark:border-slate-800 rounded-lg shadow-md p-2">
                        <img class="w-16 h-16 lg:w-32 lg:h-32 mx-auto" :src=skill.image />
                        <h3 class="my-auto px-5 text-center text-gray-500 italic">{{ skill.name }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>
