// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-particles'],

  css: [
    '~/assets/css/main.css'],

  app: {
    head: {
      title: "Portfolio Yann PERNETTE",
      meta: [
        { charset: "utf-8" },
        { name: "description", content: "Le site de Porfolio réalisé pour MMI" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [
        {
          src: "https://media.yann-pernette.fr/parallax-delta.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js",
        },
      ],
    }
  }

})