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
        <h2 class="text-4xl">Who am I?</h2>
        <div class="flex flex-row py-4">
            <p class="basis-1/2 mx-4">
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
            <div class="lg:columns-3 md:columns-2 sm:columns-1">
                <div v-for="skill in skills" class="basis-1/4 p-2">
                    <div class="border border-solid rounded-lg shadow-md min-w-2 max-w-2 p-2">
                        <img class="w-24 h-24" :src=skill.image />
                        <h3 class="my-auto px-5 text-center">{{ skill.name }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>
