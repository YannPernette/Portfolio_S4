<script setup lang="ts">
import type { Container } from 'tsparticles-engine'

const options = {
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    background: {
        color: {
            value: 'transparent'
        }
    },
    particles: {
        color: {
            value: "#000"
        },
        links: {
            color: "#000",
            enable: true
        },
        move: {
            enable: true,
            speed : 0.7
        },
        number: {
            value: 100
        }
    }
}
const onLoad = (container: Container) => {
    setTimeout(() => container.play())
}
</script>





<template>
    <div class="">
        <NuxtParticles class="" id="tsparticles" :options="options" @load="onLoad" style="width: 500px; height: 500px;"></NuxtParticles>
    </div>
</template>