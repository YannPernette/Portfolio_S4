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
        <div class="flex flex-col items-center">
            <img class="w-28 grayscale hover:grayscale-0" :src="image ?? ''" :alt="imageAlt">
            <h5 class="text-[1.5rem] hover:font-semibold">{{ nom }}</h5>
        </div>
    </a>
</template>