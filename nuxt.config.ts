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
      ],
      script: [
        {
          src: "https://media.yann-pernette.fr/parallax-delta.js",
        },
      ],
    }
  }

})