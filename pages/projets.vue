<script setup lang="ts">
import { supabase } from "@/supabase";
import projetTemplate from "~/components/projetTemplate.vue";
// console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data: Projets, error } = await supabase
    .from('Projets')
    .select('*')
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
                <img class="brightness-50 blur-[1.5px] w-full hover:w-[120%] object-cover h-[35rem]"
                    src="../assets/img/fond_code.webp" alt="Fond code">
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
                <img class="brightness-50 blur-[1.5px] w-full hover:w-[120%] object-cover h-[35rem]"
                    src="../assets/img/fond_design.webp" alt="Fond design">
            </div>
        </div>
    </div>


    <div class="mt-20 mx-24 mb-40">

        <div class="grid grid-cols-2 grid-rows-2 gap-10">
            <div v-for="projet in Projets" :key="projet.id">
                <projetTemplate :nom="projet.nom || ''" :image="projet.image || ''"
                    :image-alt="projet.imageAlt || ''" />
                <div v-if="error">{{ error.message }}</div>
            </div>
        </div>

    </div>
</template>