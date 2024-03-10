<script lang="ts">
export default {
  data() {
    return {
      textData: '',
    };
  },
  mounted() {
    this.textData = this.$refs.animationContainer.getAttribute('aria-label');
    this.splitWords();
  },
  methods: {
    splitWords() {
      let splitedText = this.textData.split(' ');

      splitedText.join('& &').split('&').forEach((e) => {
        let span = document.createElement('span');
        span.classList.add('animated-word');
        span.setAttribute('data-text', e);
        this.$refs.animationContainer.appendChild(span);
      });
      this.splitLetters();
    },
    splitLetters() {
      let animatedWords = this.$refs.animationContainer.querySelectorAll('.animated-word');
      animatedWords.forEach((e, i) => {
        e.getAttribute('data-text').split('').forEach((f) => {
          f = f == ' ' ? '&#32;' : f;
          let span = document.createElement('span');
          span.classList.add('animated-element');
          span.setAttribute('aria-hidden', 'true');
          span.innerHTML = f;
          e.appendChild(span);
        });
        this.animate(e, i);
      });
    },
    animate(e, i) {
      let wordCount = e.getAttribute('data-text').length;
      e.style.opacity = 1;
      e.classList.add('animate');
    },
    replay() {
      let animatedWords = this.$refs.animationContainer.querySelectorAll('.animated-word');
      animatedWords.forEach((e, i) => {
        e.classList.remove('animate');
        e.style.opacity = 0;
        setTimeout(() => {
          this.animate(e, i);
        }, 500);
      });
    },
  },
};
</script>




<template>
    <p class="animated-title" ref="animationContainer" aria-label="Qui suis-je ?"></p>
</template>