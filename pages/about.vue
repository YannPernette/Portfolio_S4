<script setup lang="ts">
import { supabase } from "@/supabase";
import competenceTemplate from "~/components/competenceTemplate.vue";
// console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data: Competences, error } = await supabase
    .from('Competences')
    .select('*')

const currentComp = ref('Developpement')
</script>




<template>
    <div class="pt-40 mb-20">
        <animationAbout />
    </div>

    <div class="mx-[10%] md:mx-[6%] flex md:flex-col justify-between items-end md:items-center md:gap-10 mb-28">
        <div class="w-[25%] md:w-[30%] relative">
            <img class="px-1 pb-1" src="../assets/img/bitmap_portfolio.webp" alt="">
            <div class="w-full h-[70%] absolute z-[-1] bottom-0 border-solid border-bleu-medium border-[1px]"></div>
        </div>

        <div class="max-w-[55%] md:max-w-full">
            <h3 class="text-3xl font-urbanist font-bold mb-2">Bonjour, je suis Yann.</h3>
            <h4 class="text-xl font-semibold">Quelqu’un qui pense qu’un bon design ne peut pas exister sans un bon code.
            </h4>
            <div class="bg-bleu-medium h-[0.5px] w-44 my-8"></div>
            <p class="text-lg mb-5">Je suis un étudiant en deuxième année du BUT Métiers du Multimédia et de l’Internet
                “MMI” passionné par le
                développement web. Je travaille au quotidien avec différents langages et frameworks dans le but
                d’adapter au
                mieux mon travail aux normes du web. J’adore travailler sur des projets challengeants qui me donnent à
                la
                fin
                l’impression du travail bien fait, ce qui fait de moi quelqu’un de très minutieux et perfectionniste.
            </p>
            <p class="">Mon objectif est de devenir un développeur Front-End créatif et innovant, mettant
                en œuvre
                des solutions les
                plus
                adaptées aux besoins de ceux pour qui je travaille. Dans ce but je suis actuellement à la recherche d’un
                stage
                et plus tard, d’une alternance. </p>
        </div>
    </div>

    <div class="scrollContainerAccueil text-center mt-20 mb-10">
        <div class="scrollTextAccueil uppercase font-urbanist font-bold text-[4rem]">
            <div v-for="item in 10">
                <h3 class="titleRollAccueil">Mes compétences</h3>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center mx-[10%] mb-40">
        <div class="grid grid-cols-3 w-full uppercase text-xl font-semibold font-urbanist">
            <div @click="currentComp = 'Developpement'"
                class="flex items-center justify-center gap-3 px-0 py-4 border-solid border-2 border-bleu" :class="{ 'bg-bleu transition-colors duration-200': currentComp === 'Developpement' }">
                <SettingsIcon class="w-10" />
                <p>Développement</p>
            </div>
            <div @click="currentComp = 'Design'"
            class="flex items-center justify-center gap-3 px-6 py-4 border-solid border-2 border-bleu" :class="{ 'bg-bleu transition-colors duration-200': currentComp === 'Design' }">
                <SettingsIcon class="w-10" />
                <p>Design</p>
            </div>
            <div @click="currentComp = 'Outils'"
            class="flex items-center justify-center gap-3 px-6 py-4 border-solid border-2 border-bleu" :class="{ 'bg-bleu transition-colors duration-200': currentComp === 'Outils' }">
                <SettingsIcon class="w-10" />
                <p>Outils</p>
            </div>
        </div>

        <div class="border-solid border-2 border-t-0 border-bleu w-full p-4">
            <div class="flex gap-10">
                <div v-for="competence in Competences" :key="competence.id">
                    <div v-if="currentComp === competence.type">
                        <competenceTemplate :nom="competence.nom || ''" :lien="competence.lien || ''"
                            :image="competence.image || ''" :image-alt="competence.imageAlt || ''" />
                    </div>
                </div>
                <div v-if="error">{{ error.message }}</div>
            </div>
        </div>
    </div>

</template>