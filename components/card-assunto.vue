<template>
    <nuxt-link class="flex m-2 p-1 bg-blue-100 rounded-full justify-between" :to="assunto.link" target="_blank">
        <div class="flex item-center">
            <div
                v-if="assunto.format === 'video'"
                class="border-solid border-2 border-white w-14 h-14 bg-red-900/50 p-3 rounded-full flex justify-center hover:bg-red-900"
            >
                <icon-video></icon-video>
            </div>
            <div
                v-if="assunto.format === 'text'"
                class="border-solid border-2 border-white w-14 h-14 bg-blue-900/50 p-3 rounded-full flex justify-center hover:bg-blue-900"
            >
                <icon-text></icon-text>
            </div>
            <div class="ml-4">
                <div class="font-bold">{{ assunto.titulo }}</div>
                <div>{{ assunto.autor }}</div>
            </div>
        </div>
        <div class="flex items-center">
            <div>Marujo(s):</div>
            <img
                v-for="(marujo, index) in assunto.marujos"
                :key="index"
                class="w-14 rounded-full border-solid border-2 border-white -mr-4"
                :src="`https://github.com/${marujo}.png`"
            />
        </div>
    </nuxt-link>
</template>

<script setup>
const props = defineProps({
    assunto: {
        type: Object,
        required: true,
    },
});
</script>
