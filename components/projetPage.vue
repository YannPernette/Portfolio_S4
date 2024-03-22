<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";

type Projet = Tables<'Projet'>;

const props = defineProps<{
    data?: Projet;
    id?: string;
}>();

const projet = ref<Projet>(props.data as Projet || {});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Projet").select("*").eq("id", props.id).single();
    if (error) console.error("error", error);
    else projet.value = data;
}
</script>



<template>
    <p>nom du projet</p>
    <h1 class="text-2xl">{{ projet.nom }}</h1>
</template>