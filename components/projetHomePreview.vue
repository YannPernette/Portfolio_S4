<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";

type Projet = Tables<'Projet'>;

const props = defineProps<{
    data?: Projet;
    id?: string;
}>();

const prevprojetshome = ref<Projet>(props.data as Projet || {});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Projet").select("*").eq("id", props.id).single();
    if (error) console.error("error", error);
    else prevprojetshome.value = data;
}
</script>



<template>
    <div class="relative">
        <h4
            class="uppercase font-electrolize text-[2rem] font-medium border-b-2 border-b-bleu-medium border-solid ml-20 pl-5 py-4 bgProjetFavori hover:text-noir transition-colors duration-100">
            {{ prevprojetshome.nom }}</h4>
        <!-- <img class="w-20" :src="image ?? ''" :alt="imageAlt"> -->
        <!-- <img src="../assets/img/preview_projets/preview_lfadc.png" alt=""> -->
    </div>
</template>