<script setup lang="ts">
const isMenuOpen = ref(false);
</script>


<template>
    <header>

        <div
            class="navbarHeader navbarStyle hidden fixed w-full items-center justify-between z-[100] py-3 px-10 text-[20px] uppercase tracking-wider font-electrolize font-medium">
            <NuxtLink to="/">
                <div v-if="isMenuOpen === false"
                    class="border-solid border-[3px] p-2 rounded-lg bg-sombre border-bleu-medium shadowLogo transition-shadow duration-300">
                    <LogoIcon class="fill-blanc size-12" />
                </div>
            </NuxtLink>

            <div class="uppercase md:hidden">
                <ul class="flex gap-20">
                    <NuxtLink to="/about"><li class="underlineAnimation">À propos</li></NuxtLink>
                    <NuxtLink to="/projets"><li class="underlineAnimation">Projets</li></NuxtLink>
                    <a href="https://media.yann-pernette.fr/CV_Yann_Pernette_Online.pdf" target="_blank"><li class="borderAnimation">Mon CV</li></a>
                </ul>
            </div>

            <NuxtLink to="/contact">
                <div
                    class="boutonSendNav md:hidden items-center flex bg-blanc text-noir px-4 py-3 rounded-full">
                    <h5 class="">Me Contacter</h5>
                    <SendIcon class="visibleSendNav size-0 transition-all duration-300" />
                </div>
            </NuxtLink>


            <div class="hidden md:block" @click="isMenuOpen = !isMenuOpen">
                <BoutonMenu />
            </div>
        </div>

        <div v-if="isMenuOpen" class="fixed z-[1000] w-screen h-screen bg-sombre">
            <!-- <LogoIcon
                class="fixed fill-blanc opacity-10 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 size-[70%]" /> -->

            <nav>
                <div id="menu" class="h-screen flex items-center text-[3rem] font-electrolize uppercase pl-20">
                    <ul id="menuItems" class="">
                        <li class="menuItem py-5">
                            <NuxtLink to="/">
                                <h4 class="">À Propos</h4>
                            </NuxtLink>
                        </li>
                        <li class="menuItem py-5">
                            <NuxtLink to="/">
                                <h4 class="">Compétences</h4>
                            </NuxtLink>
                        </li>
                        <li class="menuItem py-5">
                            <NuxtLink to="/projets" @click="isMenuOpen = !isMenuOpen">
                                <h4 class="">Projets</h4>
                            </NuxtLink>
                        </li>
                        <li class="menuItem py-5">
                            <NuxtLink to="/">
                                <h4 class="">Mon CV</h4>
                            </NuxtLink>
                        </li>
                    </ul>
                    <div id="menuBackgroundPattern"></div>
                </div>
            </nav>

            <NuxtLink to="/contact">
                <div
                    class="z-40 boutonSend fixed items-center flex bottom-0 right-0 bg-blanc text-noir m-10 px-10 py-5 font-electrolize uppercase text-2xl rounded-full">
                    <h5 class="">Me Contacter</h5>
                    <SendIcon class="visibleSend size-0 transition-all duration-300" />
                </div>
            </NuxtLink>
        </div>

        <!-- <nav class="fixed z-50 py-10 flex gap-24 font-urbanist font-light uppercase text-lg">

        </nav> -->

    </header>
</template>
