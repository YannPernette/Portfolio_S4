<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";

type Projet = Tables<'Projet'>;

const props = defineProps<{
    data?: Projet;
    id?: string;
}>();

const projet = ref<Projet & { Competence: any[] }>({
    created_at: "",
    favori: null,
    genre: null,
    id: 0,
    image: null,
    imageAlt: null,
    nom: null,
    resume: null,
    type: null,
    Competence: []
});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Projet").select(`*, Competence ( * )`).eq("id", props.id).single();
    if (error) console.error("error", error);
    else projet.value = data;
}
</script>



<template>
    <div class="mx-[10%]">


        <div class="flex items-center justify-between mb-20">
            <div>
                <h1 class="uppercase font-semibold font-electrolize text-[3rem] tracking-widest leading-tight mb-3">{{
                    projet.nom }}</h1>
                <p class="mb-10 text-xl"><span class="font-medium">Genre :</span> {{ projet.genre }}</p>
                <p>{{ projet.resume }}</p>
            </div>
            <img class="max-w-[50%] border-solid border-2 border-bleu-medium" :src="projet.image ?? ''"
                :alt="projet.imageAlt ?? ''">
        </div>

        <div>
            <h3 class="uppercase font-urbanist font-bold text-[2rem] text-center mb-6">Outils utilisés</h3>

            <ul class="flex flex-wrap-reverse justify-center gap-10">
                <li v-for="competence in projet.Competence" :key="competence.id">
                    <div class="flex flex-col items-center competenceHover transition-all duration-500">
                        <img class="h-28 grayscale" :src="competence.image ?? ''"
                            :alt="competence.imageAlt ?? ''">
                        <h5 class="text-[1.5rem]">{{ competence.nom }}</h5>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>