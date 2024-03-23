<script setup lang="ts">
import { supabase } from "@/supabase";
const { data: Projet, error } = await supabase
    .from('Projet')
    .select('*')
    .eq('favori', true)

const imagesProjet = Projet ? Projet.map(projet => projet.image) : []
const currentProjet = ref(0)
</script>


<script lang="ts">
import TagCloud from 'tagcloud';

export default {
    mounted() {
        if (process.client) {
            const texts = [
                'HTML', 'CSS', 'Javascript',
                'Vue', 'Nuxt', 'NodeJS', 'Figma', 'Photoshop', 'Illustrator', 'After Effects', 'InDesign',
                'Wordpress', 'PHP', 'Alpine', 'Pocketbase', 'Supabase', 'TailwindCSS', 'Github', 'Filmora', 'Davinci Resolve',
            ];

            TagCloud('.tagcloud', texts, {
                radius: 250,
                maxSpeed: 'normal',
                initSpeed: 'fast',
                direction: 135,
                keep: true
            });
        }
    },
};
</script>



<template>
    <div class="">



        <!-- <div id='hero'>
            <div class='layer-bg layer' data-depth='0.00' data-type='parallax'>
                <ParallaxComposant class="flex z-50" />
            </div>
            <div class='layer-3 layer' data-depth='0.80' data-type='parallax'></div>
        </div> -->





        <!-- <div class="overflow-hidden h-[120vh] w-[125%] relative">

            <div>
                <ParallaxComposant />
            </div>
            <div data-speedx="0.16" data-speedy="0.25"
                class="parallax texte absolute z-10 text-center transform -translate-x-1/2 -translate-y-1/2 uppercase leading-none">
                <h2 class="font-urbanist font-thin text-[5rem]">Yann</h2>
                <h1 class="font-orbitron font-bold text-[5.5rem]">Pernette</h1>
            </div>
            <img data-speedx="0.14" data-speedy="0.16" class="parallax absolute z-[12] montagne1"
                src="../assets/img/mountain 1.png" alt="Montagne layer 1">
            <img data-speedx="0.12" data-speedy="0.12" class="parallax absolute z-[13] montagne2"
                src="../assets/img/mountain 2.png" alt="Montagne layer 2">
            <img data-speedx="0.1" data-speedy="0.1" class="parallax absolute z-[14] montagne3"
                src="../assets/img/mountain 3.png" alt="Montagne layer 3">
            <img data-speedx="0.08" data-speedy="0.08" class="parallax absolute z-[15] montagne4"
                src="../assets/img/mountain 4.png" alt="Montagne layer 4">
            <div class="some-more-space z-[16]">
                <a class="boutonParallax" href="https://codepen.io/dominickolbe">Découvrir mon travail</a>
            </div>
            <img data-speedx="0.06" data-speedy="0.06" class="parallax absolute z-[17] montagne5"
                src="../assets/img/mountain 5.png" alt="Montagne layer 5">
            <img data-speedx="0.04" data-speedy="0.04" class="parallax absolute z-[18] montagne6"
                src="../assets/img/mountain 6.png" alt="Montagne layer 6">
        </div> -->



        <!-- <div class="h-screen bg-blanc text-noir relative overflow-hidden parallaxTest">
            <div class="flex justify-evenly items-center h-screen">
                <div class="uppercase">
                    <h1 class="font-orbitron font-medium text-[5rem] leading-tight">Yann</h1>
                    <h1 class="font-orbitron font-medium text-[5rem]">Pernette</h1>
                    <h2 class="normal-case font-electrolize text-[4rem]">Développeur Front-End</h2>
                    <div class="font-bold">Découvrir mon travail</div>
                </div>
            </div>

            <div class="absolute z-0 top-0">
                <ParallaxComposant />
            </div>

            <img class="absolute z-[0] w-screen h-fit bottom-0 opacity-90" src="../assets/img/cache_back.svg" alt="">
            <img class="absolute w-screen h-fit bottom-0" src="../assets/img/cache_front.svg" alt="">

            <div class="bg-bleu size-80"></div>
        </div> -->


        <div class="h-screen bg-blanc text-noir relative overflow-hidden parallaxTest pointer-events-none">
            <div class="flex items-center justify-center gap-20 hero">
                <div class="flex justify-evenly items-center h-screen">
                    <div class="uppercase">
                        <h1 class="font-orbitron font-medium text-[4rem] leading-[2.5rem]">Yann</h1>
                        <h1 class="font-orbitron font-medium text-[4rem]">Pernette</h1>
                        <h2 class="normal-case font-electrolize text-[3rem] mb-10">Développeur Front-End</h2>
                        <NuxtLink to="/projets">
                            <BoutonLien class="w-fit" text="Découvrir mon travail" textColor="#000000" bgColor="#FFFFFF" />
                        </NuxtLink>
                    </div>
                </div>

                <div class="z-[5] bg-[red] size-80"></div>
            </div>

            <div class="z-[2] composantPa">
                <ParallaxComposant />
            </div>

            <img class="z-[3] opacity-90 absolute bottom-0 right-[-1px]" src="../assets/img/cache_back.svg" alt="">
            <img class="z-[4] absolute bottom-0 right-[-1px]" src="../assets/img/cache_front.svg" alt="">
        </div>





        <div class="scrollContainerAccueil text-center mt-20 mb-10">
            <div class="scrollTextAccueil uppercase font-urbanist font-bold text-[3rem]">
                <div v-for="item in 10">
                    <h3 class="titleRollAccueil">Mes projets</h3>
                </div>
            </div>
        </div>


        <div class="relative overflow-hidden">
            <NuxtLink v-for="(projet, index) in Projet" :key="index" :to="{
                    name: 'projets-id',
                    params: { id: projet.id },
                }">
                <ProjetHomePreview v-bind="{ ...projet, id: projet.id.toString() }"
                    @mouseover="currentProjet = index" />
                <div v-if="currentProjet === index"
                    class="items-center absolute z-10 top-1/2 transform -translate-y-1/2 right-[10%] w-[35%]">
                    <img :src="projet.image || ''" :alt="projet.imageAlt || ''" class="rounded-lg">
                </div>
                <div v-if="error">{{ error.message }}</div>
            </NuxtLink>
        </div>




        <!-- <div class="mt-10 w-full relative uppercase font-electrolize font-medium text-5xl text-blanc">
        <h4 @mouseover="currentProjet = 1" class="py-7 flex items-center border-solid border-b-4 border-b-noir"
            :class="{ 'selProjet justify-between px-[5%] text-noir': currentProjet === 1 }">Le futur a déjà commencé
        </h4>
        <h4 @mouseover="currentProjet = 2"
            class="py-7 flex items-center justify-center border-solid border-b-4 border-b-noir"
            :class="{ 'selProjet justify-between px-[5%] text-noir': currentProjet === 2 }">Continuous Evolution
        </h4>
        <h4 @mouseover="currentProjet = 3"
            class="py-7 flex items-center justify-center border-solid border-b-4 border-b-noir"
            :class="{ 'selProjet justify-between px-[5%] text-noir': currentProjet === 3 }">TaVue</h4>
        <h4 @mouseover="currentProjet = 4" class="py-7 flex items-center justify-center"
            :class="{ 'selProjet justify-between px-[5%] text-noir': currentProjet === 4 }">Tournoi Excellence</h4>

        <div class="absolute z-[-1] size-full top-0">
            <div class="absolute size-full top-0 bg-bleu opacity-[90%]"></div>
            <transition name="fade">
                <img v-if="currentProjet === 1" class="absolute size-full top-0 object-cover z-[-2]"
                    src="../assets/img/preview_projets/preview_lfadc.png" alt="">
            </transition>
            <transition name="fade">
                <img v-if="currentProjet === 2" class="absolute size-full top-0 object-contain z-[-2]"
                    src="../assets/img/preview_projets/preview_continuous-evolution.png" alt="">
            </transition>
            <transition name="fade">
                <img v-if="currentProjet === 3" class="absolute size-full top-0 object-cover z-[-2]"
                    src="../assets/img/preview_projets/preview_tavue.png" alt="">
            </transition>
            <transition name="fade">
                <img v-if="currentProjet === 4" class="absolute size-full top-0 object-cover z-[-2]"
                    src="../assets/img/preview_projets/preview_tournoi-excellence.png" alt="">
            </transition>
        </div>
    </div> -->

        <div class="text-center flex flex-col items-center mt-10">
            <h4 class="text-[2rem] mb-4">Vous en voulez encore ?</h4>
            <NuxtLink to="/projets">
                <BoutonLien text="Découvrez tous mes projets" textColor="#FFFFFF" bgColor="#000000" />
            </NuxtLink>
        </div>


        <div class="flex justify-between items-center mb-60 mx-[10%]">
            <div class="tagcloud max-w-[0%] ml-[-20px]"></div>

            <div class="flex flex-col items-center max-w-[50%] mt-40">
                <h3 class="uppercase font-urbanist font-bold text-[2rem] leading-tight mb-5">Développeur Front-End...
                    mais pas que !</h3>
                <p class="mb-10">Durant ma formation, j'ai pu apprendre toutes sortes de compétences afin de devenir le
                    plus
                    polyvalent possible et comprendre directement les problématiques du web.</p>
                <NuxtLink to="/projets">
                    <BoutonLien text="En savoir plus sur moi" textColor="#FFFFFF" bgColor="#000000" />
                </NuxtLink>
            </div>
        </div>


    </div>
</template>
