<template>
    <footer>

        <div class="bg-blanc relative isolate z-50">

            <h5
                class="absolute opacity-80 font-orbitron top-[-65px] md:top-[-40px] sm:top-[-26px] left-1/2 transform -translate-x-1/2 text-[5rem] md:text-[3rem] sm:text-[2rem] uppercase font-extrabold tracking-[5vw] mix-blend-difference">
                Contact</h5>

            <div class="text-noir flex md:flex-col justify-center items-center gap-20 md:gap-10 sm:gap-6 pt-20 md:pt-14 sm:pt-10 pb-10 sm:pb-8">
                <p class="text-lg sm:text-base max-w-[30%] md:max-w-[60%] sm:max-w-[80%]">Vous souhaitez discuter, collaborer sur des projets passionnants ou
                    simplement échanger des idées ?
                </p>

                <NuxtLink to="/contact">
                    <div
                        class="boutonSendNav items-center flex bg-blanc text-noir px-4 py-3 rounded-full border-solid border-noir border-2">
                        <h5 class="uppercase tracking-wider font-electrolize font-medium text-xl sm:text-lg">Me Contacter</h5>
                        <SendIcon class="visibleSendNav size-0 md:size-6 ml-4 transition-all duration-300" />
                    </div>
                </NuxtLink>
            </div>

            <div class="w-full h-fit relative bg-bleu-fonce rounded-t-xl">

                <div class="flex md:flex-col items-end md:items-center justify-between mx-[6%] md:mx-0 gap-4 md:gap-10 sm:gap-6 pt-10 mb-10 sm:mb-6">
                    <div class="uppercase tracking-wider font-electrolize font-medium">
                        <ul class="flex flex-row sm:flex-col items-center sm:items-start gap-10 md:gap-6 sm:gap-3 text-xl md:text-lg">
                            <NuxtLink to="/about">
                                <li class="underlineAnimation">À propos</li>
                            </NuxtLink>
                            <NuxtLink to="/projets">
                                <li class="underlineAnimation">Projets</li>
                            </NuxtLink>
                            <NuxtLink to="/">
                                <li class="underlineAnimation">Mentions légales</li>
                            </NuxtLink>
                        </ul>
                    </div>

                    <div class="flex sm:grid sm:grid-cols-2 items-center gap-10 sm:gap-6">
                        <div class="flip-container">
                            <IconInstagram class="w-12 sm:w-10 flip" />
                        </div>
                        <div class="flip-container">
                            <IconTwitter class="w-12 sm:w-10 flip" />
                        </div>
                        <div class="flip-container">
                            <IconGithub class="w-12 sm:w-10 flip" />
                        </div>
                        <div class="flip-container">
                            <IconLinkedin class="w-12 sm:w-10 flip" />
                        </div>
                    </div>
                </div>

                <div class="text-center pb-3 font-orbitron text-lg sm:text-base tracking-widest">
                    <p>© Yann Pernette | 2024</p>
                </div>

            </div>
        </div>

    </footer>
</template>