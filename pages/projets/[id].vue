<script setup lang="ts">
const route = useRoute();
</script>


<template>
    <div class="py-80">
        <ProjetPageTemplate :id="route.params.id.toString()" />
    </div>
</template>