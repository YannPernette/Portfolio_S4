import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
    theme: {

        colors: {
            "sombre": "#06041C",
            "noir": "#000000",
            "blanc": "#FFFFFF",
            "bleu-medium": "#9ED0FF",
            // "presque-blanc": "#f7f8f8"
        },
        boxShadow: {
            "style-bouton-1": "5px 7px 4px 0px rgba(150,195,217,0.25)"
        },
        borderRadius: {
            "none": "0",
            "xs": "0.1875rem",
            "sm": "0.3125rem",
            "default": "0.4375rem",
            "lg": "0.5729166269302368rem",
            "xl": "2.5625rem",
            "2xl": "4.41341495513916rem",
            "3xl": "4.5rem",
            "full": "9999px"
        },
        fontFamily: {
            electrolize: ['Electrolize', 'sans-serif'],
            openSans: ['Open Sans', 'sans-serif'],
            orbitron: ['Orbitron', 'sans-serif'],
            urbanist: ['Urbanist', 'sans-serif'],
        },
        fontSize: {
            // sm: '0.8rem',
            // base: '1rem',
            // xl: '1.25rem',
            '2xl': '1.65vw',
            '3xl': '1.953rem',
            // '4xl': '2.441rem',
            '5xl': '3.25vw',
        },
        extend: {
            gridTemplateColumns: {
                principal: 'repeat(12, minmax(0, 64px))'
            }
        }

    },
    plugins: [],
    content: []
}