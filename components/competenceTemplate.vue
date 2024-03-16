<script lang="ts">
export default {
    props: {
        nom: {
            type: String,
            required: true
        },
        lien: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            required: false
        }
    }
}
</script>



<template>
    <a :href="lien" target="_blank">
        <div class="flex flex-col items-center competenceHover transition-all duration-500">
            <img class="h-28 grayscale" :src="image ?? ''" :alt="imageAlt">
            <h5 class="text-[1.5rem]">{{ nom }}</h5>
        </div>
    </a>
</template>