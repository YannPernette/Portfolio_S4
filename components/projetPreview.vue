<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";

type Projet = Tables<'Projet'>;

const props = defineProps<{
    data?: Projet;
    id?: string;
}>();

const prevprojets = ref<Projet>(props.data as Projet || {});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Projet").select("*").eq("id", props.id).single();
    if (error) console.error("error", error);
    else prevprojets.value = data;
}
</script>



<template>
    <div class="p-4 border-solid border-2 border-bleu-medium rounded-sm hover-effect cursorProjet onReveal">
        <img class="border-solid border-2 border-bleu-medium mb-4 h-80 w-full" :src="prevprojets.image ?? ''" :alt="prevprojets.imageAlt ?? ''">
        <div class="scroll-container text-center border-solid border-2 border-bleu-medium bg-sombre py-2">
            <div class="scroll-text uppercase font-medium text-2xl tracking-widest">
                <h3>{{ prevprojets.nom }}</h3>
            </div>
        </div>
    </div>
</template>