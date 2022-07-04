import { defineNuxtConfig } from 'nuxt';
import useEmitter from './plugin/useEmitter';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    theme: {
        extend: {
            backgroundImage: {
                boat: "url('/img/boat.png')",
            },
        },
        fontFamily: {
            sans: ['roboto'],
            serif: ['roboto'],
            mono: ['roboto'],
            display: ['roboto'],
            body: ['roboto'],
            oswald: ['oswald'],
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
