<script setup lang="ts">
import { supabase } from "@/supabase";
const { data: Projet, error } = await supabase
    .from('Projet')
    .select('*')

const quelType = ref('site')
</script>



<template>
    <div class="bg-sombre">
        <div class="h-[25rem] md:h-fit pt-10">

            <div class="grid grid-cols-2 md:flex md:flex-col overflow-hidden">
                <div
                    class="splitGen transition-all duration-300 ease-in-out relative w-full hover:w-[120%] hover:z-10 z-0">
                    <h2
                        class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-urbanist font-black text-[3rem] uppercase leading-tight text-center">
                        Développement Web Front</h2>
                    <button @click="quelType = 'site'">
                        <div class="boutonSplit z-40">Voir mes projets de code</div>
                    </button>
                    <div
                        class="absolute top-0 left-0 w-full h-full opacity-0 opacitySplit transition-opacity duration-300 bg-bleu z-10">
                    </div>
                    <img class="brightness-50 blur-[1.5px] w-full hover:w-[120%] object-cover h-[25rem]"
                        src="../../assets/img/fond_code.webp" alt="Fond code">
                </div>

                <div
                    class="splitGen transition-all duration-300 ease-in-out relative w-full hover:w-[120%] hover:-translate-x-[16%] hover:z-10 z-0">
                    <h2
                        class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-urbanist font-black text-[3rem] uppercase leading-tight text-center">
                        Design Graphique</h2>
                    <button @click="quelType = 'design'">
                        <div class="boutonSplit z-40">Voir mes projets de design</div>
                    </button>
                    <div
                        class="absolute top-0 left-0 w-full h-full opacity-0 opacitySplit transition-opacity duration-300 bg-bleu z-10">
                    </div>
                    <img class="brightness-50 blur-[1.5px] w-full hover:w-[120%] object-cover h-[25rem]"
                        src="../../assets/img/fond_design.webp" alt="Fond design">
                </div>
            </div>
        </div>


        <div class="mt-28 mx-24 mb-40">

            <div class="grid grid-cols-2 md:flex md:flex-col gap-10 reverseGrid">
                <div v-for="projet in Projet" :key="projet.id">
                    <NuxtLink :to="{
                        name: 'projets-id',
                        params: { id: projet.id },
                    }">
                        <div v-if="projet.type === quelType">
                            <ProjetPreview v-bind="{ ...projet, id: projet.id.toString() }" />
                        </div>
                        <div v-if="error">{{ error.message }}</div>
                    </NuxtLink>
                </div>
            </div>

        </div>
    </div>
</template>


<style scoped>
.reverseGrid {
    direction: rtl;
}

.reverseGrid>* {
    direction: ltr;
}
</style>