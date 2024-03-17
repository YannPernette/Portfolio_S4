<script setup lang="ts">
import type { Projets } from "@/types";
import { ref } from "vue";
import { supabase } from "@/supabase";

const props = defineProps<{
    data?: Projets;
    id?: string;
}>();

const projets = ref<Projets>(props.data ?? {});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Projets").select("*").eq("id", props.id).single();
    if (error) console.error("error", error);
    else projets.value = {
        image: data?.image ?? undefined,
        imageAlt: data?.imageAlt ?? undefined,
        nom: data?.nom ?? undefined,
    };
}
</script>

<template>
    <p>nom du projet</p>
    <h1 class="text-2xl">{{ projets.nom }}</h1>
</template>