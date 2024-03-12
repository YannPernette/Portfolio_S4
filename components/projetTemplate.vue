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
    <div class="p-4 border-solid border-2 border-bleu-medium rounded-sm hover-effect cursorProjet onReveal">
        <img class="border-solid border-2 border-bleu-medium mb-4 h-80 w-full" :src="image ?? ''" :alt="imageAlt">
        <div class="scroll-container text-center border-solid border-2 border-bleu-medium bg-sombre py-2">
            <div class="scroll-text uppercase font-medium text-2xl tracking-widest">
                <h3>{{ nom }}</h3>
            </div>
        </div>
    </div>
</template>