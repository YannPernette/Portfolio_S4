<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$el.style.setProperty('--text-color', this.textColor);
    this.$el.style.setProperty('--bg-color', this.bgColor);
  }
}
</script>



<template>
    <div class="relative">
        <div class="boutonLien z-40" >{{ text }}</div>
    </div>
</template>



<style scoped>
.boutonLien {
    border: 1px solid var(--text-color);
    color: var(--text-color);
    letter-spacing: 0.05em;
    /* position: absolute; */
    /* left: 50%; */
    /* transform: translate3d(-50%, 0%, 0); */
    text-decoration: none;
    transition: color 400ms;
    padding: 12px 60px;
    text-transform: uppercase;
    pointer-events: auto;
}

.boutonLien::before {
    content: '';
    position: absolute;
    inset: 0;
    display: inline-block;
    background-color: var(--text-color);
    transform: scaleX(0);
    transform-origin: right;
    z-index: -1;
    transition: transform 400ms;
}

.boutonLien:hover {
    color: var(--bg-color);
}

.boutonLien:hover::before {
    transform: scaleX(1);
    transform-origin: left;
}
</style>