<script setup lang="ts">
import { ref } from 'vue'

const currentProjet = ref(1)
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


        <div class="h-screen bg-blanc text-noir relative overflow-hidden parallaxTest">
            <div class="flex items-center justify-center gap-20 hero">
                <div class="flex justify-evenly items-center h-screen">
                    <div class="uppercase">
                        <h1 class="font-orbitron font-medium text-[5rem] leading-tight">Yann</h1>
                        <h1 class="font-orbitron font-medium text-[5rem]">Pernette</h1>
                        <h2 class="normal-case font-electrolize text-[4rem]">Développeur Front-End</h2>
                        <div class="font-bold">Découvrir mon travail</div>
                    </div>
                </div>

                <div class="z-[5] bg-[red] size-80"></div>
            </div>

            <div class="z-[2] composantPa">
                <ParallaxComposant />
            </div>

            <img class="z-[3] opacity-90 absolute bottom-0" src="../assets/img/cache_back.svg" alt="">
            <img class="z-[4] absolute bottom-0" src="../assets/img/cache_front.svg" alt="">
        </div>





        <div class="scrollContainerAccueil text-center mt-20">
            <div class="scrollTextAccueil uppercase font-urbanist font-bold text-[4rem]">
                <div v-for="item in 10"><h3 class="titleRollAccueil">Mes projets</h3></div>
            </div>
        </div>

        <div class="mt-10 w-full relative uppercase font-electrolize font-medium text-5xl text-blanc">
            <h4 @mouseover="currentProjet = 1"
                class="py-7 flex items-center justify-center border-solid border-b-4 border-b-noir"
                :class="{ 'selProjet justify-between px-[5%] text-noir': currentProjet === 1 }">Le futur a déjà commencé</h4>
            <h4 @mouseover="currentProjet = 2"
                class="py-7 flex items-center justify-center border-solid border-b-4 border-b-noir"
                :class="{ 'selProjet justify-between px-[5%] text-noir': currentProjet === 2 }">Continuous Evolution</h4>
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
        </div>




        <div class="mt-10 mx-44 mb-20 bg-sombre">
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
            <p class="text-lg">Mon objectif est de devenir un développeur Front-End créatif et innovant, mettant
                en œuvre
                des solutions les
                plus
                adaptées aux besoins de ceux pour qui je travaille. Dans ce but je suis actuellement à la recherche d’un
                stage
                et plus tard, d’une alternance. </p>


            <div class="mt-28">
                <h3>Compétences</h3>

                <div class="flex flex-col items-center">
                    <div class="flex uppercase text-xl font-semibold font-urbanist">
                        <div
                            class="flex items-center justify-center gap-3 bg-bleu px-6 py-4 border-solid border-2 border-bleu w-64">
                            <SettingsIcon class="w-10" />
                            <p>Développement</p>
                        </div>
                        <div
                            class="flex items-center justify-center gap-3 px-6 py-4 border-solid border-2 border-bleu w-64">
                            <SettingsIcon class="w-10" />
                            <p>Design</p>
                        </div>
                        <div
                            class="flex items-center justify-center gap-3 px-6 py-4 border-solid border-2 border-bleu w-64">
                            <SettingsIcon class="w-10" />
                            <p>Outils</p>
                        </div>
                    </div>

                    <div class="border-solid border-2 border-bleu w-full">
                        test
                    </div>
                </div>
            </div>

        </div>



    </div>
</template>



<style scoped>
/* .fade-enter-active,
.fade-leave-active {
    transition: slideIn 2s;
}

.fade-enter,
.fade-leave-to {
    transition: slideIn 2s;
}

@keyframes slideIn {

    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
} */
</style>