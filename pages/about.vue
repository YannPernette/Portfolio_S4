<script setup lang="ts">
import { supabase } from "@/supabase";
const { data: Competence, error } = await supabase
    .from('Competence')
    .select('*')

const currentComp = ref('Developpement')
</script>




<template>
    <div class="bg-sombre">
        <div class="pt-40 mb-20">
            <animationAbout class="sm:text-[3rem]" />
        </div>

        <div class="mx-[10%] md:mx-[6%]">
            <h3 class="text-3xl font-urbanist font-bold mb-2">Bonjour, je suis Yann.</h3>
                <h4 class="text-xl font-semibold">Quelqu’un qui pense qu’un bon design ne peut pas exister sans un bon
                    code.
                </h4>
                <div class="bg-bleu-medium h-[0.5px] w-60 my-8"></div>
        </div>

        <div class="mx-[10%] md:mx-[6%] sm:mx-[4%] flex md:flex-col justify-between items-center md:gap-10 mb-28">
            <div class="w-[25%] md:w-[50%] sm:w-[70%] relative">
                <img class="px-1 pb-1 z-[2]" src="../assets/img/bitmap_portfolio.webp" alt="">
                <div class="w-full h-[70%] absolute z-[1] bottom-0 border-solid border-t-0 border-bleu-medium border-[1px]"></div>
            </div>

            <div class="max-w-[55%] md:max-w-full">
                <p class="text-lg sm:text-base mb-5">Je suis un étudiant en deuxième année du BUT Métiers du Multimédia
                    et de
                    l’Internet
                    “MMI” passionné par le
                    développement web. Je travaille au quotidien avec différents langages et frameworks dans le but
                    d’adapter au
                    mieux mon travail aux normes du web. J’adore travailler sur des projets challengeants qui me donnent
                    à
                    la
                    fin
                    l’impression du travail bien fait, ce qui fait de moi quelqu’un de très minutieux et
                    perfectionniste.
                </p>
                <p class="text-lg sm:text-base">Mon objectif est de devenir un développeur Front-End créatif et
                    innovant, mettant
                    en œuvre
                    des solutions les
                    plus
                    adaptées aux besoins de ceux pour qui je travaille. Dans ce but je suis actuellement à la recherche
                    d’un
                    stage
                    et plus tard, d’une alternance. </p>
            </div>
        </div>

        <div class="scrollContainerAccueil text-center mt-20 mb-10">
            <div class="scrollTextAccueil uppercase font-urbanist font-bold text-[4rem] md:text-[3rem] sm:text-[2rem]">
                <div v-for="item in 10">
                    <h3 class="titleRollAccueil">Mes compétences</h3>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center mx-[10%] mb-40">
            <div class="grid grid-cols-3 w-full uppercase text-xl font-semibold font-urbanist">
                <div @click="currentComp = 'Developpement'"
                    class="flex items-center justify-center gap-3 px-0 py-4 border-solid border-2 border-bleu"
                    :class="{ 'bg-bleu transition-colors duration-200': currentComp === 'Developpement' }">
                    <IconDeveloppement class="w-10" />
                    <p>Développement</p>
                </div>
                <div @click="currentComp = 'Design'"
                    class="flex items-center justify-center gap-3 px-6 py-4 border-solid border-2 border-bleu"
                    :class="{ 'bg-bleu transition-colors duration-200': currentComp === 'Design' }">
                    <IconDesign class="w-10" />
                    <p>Design</p>
                </div>
                <div @click="currentComp = 'Outils'"
                    class="flex items-center justify-center gap-3 px-6 py-4 border-solid border-2 border-bleu"
                    :class="{ 'bg-bleu transition-colors duration-200': currentComp === 'Outils' }">
                    <IconOutils class="w-10" />
                    <p>Outils</p>
                </div>
            </div>

            <div class="border-solid border-2 border-t-0 border-bleu w-full p-4">
                <div class="flex gap-10">
                    <div v-for="competence in Competence" :key="competence.id">
                        <div v-if="currentComp === competence.type">
                            <CompetencePreview v-bind="{ ...competence, id: competence.id.toString() }" />
                        </div>
                    </div>
                    <div v-if="error">{{ error.message }}</div>
                </div>
            </div>
        </div>
    </div>

</template>