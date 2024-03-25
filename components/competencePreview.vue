<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";

type Competence = Tables<'Competence'>;

const props = defineProps<{
    data?: Competence;
    id?: string;
}>();

const prevcompetences = ref<Competence>(props.data as Competence || {});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Competence").select("*").eq("id", props.id).single();
    if (error) console.error("error", error);
    else prevcompetences.value = data;
}
</script>



<template>
    <a :href="prevcompetences.lien ?? ''" target="_blank">
        <div class="flex flex-col items-center competenceHover transition-all duration-500">
            <img class="h-28 grayscale md:grayscale-0" :src="prevcompetences.image ?? ''" :alt="prevcompetences.imageAlt ?? ''">
            <h5 class="text-[1.5rem]">{{ prevcompetences.nom }}</h5>
        </div>
    </a>
</template>