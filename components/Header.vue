<template>
    <header>

        <div class="fixed w-full bg-sombre flex items-center justify-between z-[100]">
            <div
                class="border-solid border-[3px] p-2 m-8 rounded-lg border-bleu-medium shadowLogo transition-shadow duration-300">
                <LogoIcon class="fill-blanc size-12" />
            </div>
            <div>
                Je suis un menu
            </div>
        </div>

        <div class="fixed z-[1000] w-screen h-screen bg-sombre">
            <LogoIcon
                class="fixed fill-blanc opacity-20 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 size-[70%]" />

            <nav>
                <div class="h-screen ml-10 py-10 flex justify-between flex-col">
                    <ul class="uppercase font-electrolize text-[3rem] gap-6">
                        <li>
                            <NuxtLink to="/">À Propos</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Compétences</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Projets</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Mon CV</NuxtLink>
                        </li>
                    </ul>

                    <div class="flex gap-10">
                        <div
                            class="border-solid border-[3px] p-2 rounded-lg border-bleu-medium shadowLogo transition-shadow duration-300">
                            <LogoIcon class="fill-blanc size-14" />
                        </div>
                        <h5>Yann Pernette - Développeur Front</h5>
                    </div>
                </div>
            </nav>

            <NuxtLink to="/contact">
                <div
                    class="z-40 boutonSend fixed items-center flex bottom-0 right-0 bg-blanc text-noir m-10 px-10 py-5 font-electrolize uppercase text-2xl rounded-full">
                    <h5>Me Contacter</h5>
                    <SendIcon class="visibleSend size-0 transition-all duration-300" />
                </div>
            </NuxtLink>
        </div>

        <!-- <nav class="fixed z-50 py-10 flex gap-24 font-urbanist font-light uppercase text-lg">

        </nav> -->

    </header>
</template>