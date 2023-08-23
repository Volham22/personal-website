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
            <p class="lg:basis-1/2 md:basis-1/2 basis-3/4 mx-4 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            convallis ac tortor quis consectetur. Vivamus tristique elit at
            nulla scelerisque tincidunt. Morbi pulvinar, orci ac varius pulvinar,
            odio quam gravida nisl, a vulputate nunc nisl sed justo. Curabitur
            nec hendrerit augue. Aenean id ipsum eget libero fringilla
            dignissim. Aliquam erat volutpat. Nullam consequat sollicitudin
            mollis. Nullam malesuada vel orci eu mattis. Integer id justo ac tortor
            pretium convallis. Sed pulvinar auctor metus et hendrerit. Phasellus
            cursus dapibus purus, et fringilla est consectetur in. Vivamus
            euismod neque magna, eget tristique augue gravida nec. Sed odio nisi,
            vulputate ac quam id, iaculis mollis orci. Nulla porta tincidunt nisi,
            in pulvinar nibh accumsan et.
            </p>
            <div class="lg:columns-4 columns-1 lg:basis-1/2 md:basis-1/2">
                <div v-for="skill in skills" class="container mx-auto p-2">
                    <div class="border border-solid dark:border-slate-800 rounded-lg shadow-md min-w-2 max-w-2 p-2">
                        <img class="w-32 h-32 sm:mx-auto" :src=skill.image />
                        <h3 class="my-auto px-5 text-center text-gray-500 italic">{{ skill.name }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>
