<template>
    <header class="flex justify-center">

        <nav class="fixed py-10 flex gap-24 font-urbanist font-light uppercase text-lg bg-sombre">

            <div>
                <ul class="flex gap-12">
                    <li class="underlineAnimation">
                        <nuxt-link>À propos</nuxt-link>
                    </li>
                    <li class="underlineAnimation">
                        <nuxt-link to="/">Compétences</nuxt-link>
                    </li>
                    <li class="underlineAnimation">
                        <nuxt-link to="/">Projets</nuxt-link>
                    </li>
                    <li class="underlineAnimation">
                        <nuxt-link to="/">Me contacter</nuxt-link>
                    </li>
                </ul>
            </div>

            <div>
                <ul class="flex">
                    <li class="borderAnimation">
                        <nuxt-link to="/">Mon CV</nuxt-link>
                    </li>
                </ul>
            </div>

        </nav>

    </header>
</template>