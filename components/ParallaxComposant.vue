<script setup lang="ts">
import type { Container } from 'tsparticles-engine'

const options = {
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    background: {
        color: {
            value: '#06041C'
        }
    },
    particles: {
        color: {
            value: "#fff"
        },
        links: {
            color: "#fff",
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
    // Do something with the container
    container.pause()
    setTimeout(() => container.play(), 2000)
}
</script>





<template>
    <div data-speedx="0.25" data-speedy="0.05" class="parallax absolute z-[9] fond-particles w-[125%] h-screen">
        <NuxtParticles id="tsparticles" :options="options" @load="onLoad"></NuxtParticles>
    </div>
</template>