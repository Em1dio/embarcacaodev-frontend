import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    nitro: {
        output: {
            dir: 'output',
            serverDir: 'output/server',
            publicDir: 'output/public',
        },
    },
    theme: {
        extend: {
            backgroundImage: {
                boat: "url('/img/boat.png')",
            },
        },
    },
    buildModules: ['@pinia/nuxt'],
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap',
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        },
    ],
});
