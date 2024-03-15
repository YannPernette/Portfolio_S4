<script lang="ts">
export default {
    props: {
        nom: {
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
    <div class="relative">
        <h4 class="uppercase font-electrolize text-[2rem] font-medium border-b-2 border-b-bleu-medium border-solid ml-20 pl-5 py-4 bgProjetFavori hover:text-noir transition-colors duration-100">{{ nom }}</h4>
        <!-- <img class="w-20" :src="image ?? ''" :alt="imageAlt"> -->
        <img src="../assets/img/preview_projets/preview_lfadc.png" alt="">
    </div>
</template>