<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const cursorDot = ref(null);
const cursorOutline = ref(null);
const cursorText = ref(null);

onMounted(() => {
    const moveCursor = (e) => {
        cursorDot.value.style.left = `${e.clientX}px`;
        cursorDot.value.style.top = `${e.clientY}px`;
        cursorOutline.value.style.left = `${e.clientX}px`;
        cursorOutline.value.style.top = `${e.clientY}px`;
        cursorText.value.style.left = `${e.clientX}px`;
        cursorText.value.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    const cursorProjetElements = document.querySelectorAll('.cursorProjet');
    cursorProjetElements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            cursorDot.value.classList.add('cursor2');
            cursorDot.value.classList.add('cursor2');
            cursorText.value.style.display = 'block';
            cursorOutline.value.style.display = 'none';
        });
        element.addEventListener('mouseout', () => {
            cursorDot.value.classList.remove('cursor2');
            cursorText.value.style.display = 'none';
            cursorOutline.value.style.display = 'block';
        });
    });

    onUnmounted(() => {
        window.removeEventListener('mousemove', moveCursor);
        cursorProjetElements.forEach((element) => {
            element.removeEventListener('mouseover', () => { });
            element.removeEventListener('mouseout', () => { });
        });
    });
});
</script>

<template>
    <div>
        <div ref="cursorDot" class="cursor-dot"></div>
        <div ref="cursorOutline" class="cursor-outline"></div>
        <div ref="cursorText" class="cursor-text">VOIR</div>

        <!-- The rest of your page content here -->
    </div>
</template>