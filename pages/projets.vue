<script setup lang="ts">

</script>


<template>
    <div class="h-[35rem]">
        <h1
            class="absolute z-30 top-20 left-1/2 transform -translate-x-1/2 font-urbanist font-thin text-3xl pointer-events-none">
            Envie de
            découvrir un peu de...</h1>

        <div class="grid grid-cols-2 ">
            <div class="splitGen transition-all duration-300 ease-in-out relative w-full hover:w-[120%] hover:z-10 z-0">
                <h2
                    class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-urbanist font-black text-[3rem] uppercase leading-tight text-center">
                    Développement Web Front</h2>
                <a href="">
                    <div class="boutonSplit z-40">Voir mes projets de code</div>
                </a>
                <div
                    class="absolute top-0 left-0 w-full h-full opacity-0 opacitySplit transition-opacity duration-300 bg-bleu z-10">
                </div>
                <img class="brightness-50 blur-[1.5px] w-full hover:w-[120%] object-cover h-[35rem]" src="../assets/img/fond_code.webp"
                    alt="Fond code">
            </div>

            <div
                class="splitGen transition-all duration-300 ease-in-out relative w-full hover:w-[120%] hover:-translate-x-[16%] hover:z-10 z-0">
                <h2
                    class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-urbanist font-black text-[3rem] uppercase leading-tight text-center">
                    Design Graphique</h2>
                <a href="">
                    <div class="boutonSplit z-40">Voir mes projets de design</div>
                </a>
                <div
                    class="absolute top-0 left-0 w-full h-full opacity-0 opacitySplit transition-opacity duration-300 bg-bleu z-10">
                </div>
                <img class="brightness-50 blur-[1.5px] w-full hover:w-[120%] object-cover h-[35rem]" src="../assets/img/fond_design.webp"
                    alt="Fond design">
            </div>
        </div>
    </div>


    <div class="mt-20 mx-24 mb-96">

        <div class="grid grid-cols-2 grid-rows-2 gap-10">
            <div class="p-4 border-solid border-2 border-bleu-medium rounded-sm hover-effect cursorProjet onReveal">
                <img class="border-solid border-2 border-bleu-medium mb-4"
                    src="../assets/img/preview_projets/preview_lfadc.png" alt="preview LFADC">
                <div class="scroll-container text-center border-solid border-2 border-bleu-medium bg-sombre py-2">
                    <div class="scroll-text uppercase font-medium text-2xl tracking-widest">
                        <h3>Le futur a déjà commencé</h3>
                    </div>
                </div>
            </div>

            <div class="p-4 border-solid border-2 border-bleu-medium rounded-sm hover-effect cursorProjet onReveal">
                <img class="border-solid border-2 border-bleu-medium mb-4"
                    src="../assets/img/preview_projets/preview_lfadc.png" alt="preview LFADC">
                <div class="scroll-container text-center border-solid border-2 border-bleu-medium bg-sombre py-2">
                    <div class="scroll-text uppercase font-medium text-2xl tracking-widest">
                        <h3>Le futur a déjà commencé</h3>
                    </div>
                </div>
            </div>

            <div class="p-4 border-solid border-2 border-bleu-medium rounded-sm hover-effect cursorProjet onReveal">
                <img class="border-solid border-2 border-bleu-medium mb-4"
                    src="../assets/img/preview_projets/preview_lfadc.png" alt="preview LFADC">
                <div class="scroll-container text-center border-solid border-2 border-bleu-medium bg-sombre py-2">
                    <div class="scroll-text uppercase font-medium text-2xl tracking-widest">
                        <h3>Le futur a déjà commencé</h3>
                    </div>
                </div>
            </div>

            <div class="p-4 border-solid border-2 border-bleu-medium rounded-sm hover-effect cursorProjet onReveal">
                <img class="border-solid border-2 border-bleu-medium mb-4"
                    src="../assets/img/preview_projets/preview_lfadc.png" alt="preview LFADC">
                <div class="scroll-container text-center border-solid border-2 border-bleu-medium bg-sombre py-2">
                    <div class="scroll-text uppercase font-medium text-2xl tracking-widest">
                        <h3>Le futur a déjà commencé</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>