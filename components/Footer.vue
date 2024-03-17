<template>
    <footer>

        <div class="bg-blanc relative isolate">

            <h5 class="absolute font-orbitron top-[-130px] left-1/2 transform -translate-x-1/2  text-[10rem] text-center uppercase font-extrabold tracking-[5rem] mix-blend-difference">Contact</h5>

            <div class="text-noir flex justify-center items-center gap-20 pt-32 pb-20">
                <p class="text-[1.1rem] max-w-[30%]">Vous souhaitez discuter, collaborer sur des projets passionnants ou
                    simplement échanger des idées ?
                </p>

                <NuxtLink to="/contact">
                    <div
                        class="boutonSendNav items-center flex bg-blanc text-noir px-4 py-3 rounded-full border-solid border-noir border-2">
                        <h5 class="uppercase tracking-wider font-electrolize font-medium text-xl">Me Contacter</h5>
                        <SendIcon class="visibleSendNav size-0 transition-all duration-300" />
                    </div>
                </NuxtLink>
            </div>

            <div class="w-full h-fit relative bg-bleu-fonce pt-20 rounded-t-xl">

                <div>
                    <div class="flex flex-col uppercase tracking-wider font-electrolize font-medium">
                        <ul class="flex flex-row">
                            <NuxtLink to="/about">
                                <li class="">À propos</li>
                            </NuxtLink>
                            <NuxtLink to="/projets">
                                <li class="">Projets</li>
                            </NuxtLink>
                        </ul>
                        <ul class="flex flex-row">
                            <NuxtLink to="/about">
                                <li class="">Mention légales</li>
                            </NuxtLink>
                        </ul>
                    </div>
                </div>

                <div class="text-center pb-3">
                    <p>© Yann Pernette | 2024</p>
                </div>

            </div>
        </div>

    </footer>
</template>