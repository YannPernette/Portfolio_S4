<script setup lang="ts">
const route = useRoute();
</script>


<template>
    <div class="py-40">
        <ProjetPage :id="route.params.id.toString()" />
    </div>
</template>