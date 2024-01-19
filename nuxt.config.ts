// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-particles'],

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: "Portfolio Yann PERNETTE",
      meta: [
        { charset: "utf-8" },
        { name: "description", content: "Le site de Porfolio réalisé pour MMI" },
      ],
      link: [
        { rel: "stylesheet", type: "text/javascript", href: 'https://code.jquery.com/jquery-2.1.3.min.js' },
        { rel: "stylesheet", type: "text/javascript", href: 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js' },
        { rel: "stylesheet", type: "text/javascript", href: 'https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js' }
      ],
    }
  }

})