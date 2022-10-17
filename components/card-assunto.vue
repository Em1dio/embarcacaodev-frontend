<template>
    <nuxt-link class="flex bg-blue-100 w-56 rounded-xl p-2 m-2 group" :to="assunto.link" target="_blank">
        <div class="flex flex-col">
            <div v-if="assunto.format === 'video'" class="flex items-center gap-2">
                <div
                    class="border-solid border-2 border-white w-14 h-14 bg-red-900/50 p-3 rounded-full flex justify-center group-hover:bg-red-900"
                >
                    <icon-video></icon-video>
                </div>
                <div class="text-xl font-bold text-red-900">Video</div>
            </div>
            <div v-if="assunto.format === 'text'" class="flex items-center gap-2">
                <div
                    class="border-solid border-2 border-white w-14 h-14 bg-blue-900/50 p-3 rounded-full flex justify-center group-hover:bg-blue-900"
                >
                    <icon-text></icon-text>
                </div>
                <div class="text-xl font-bold text-blue-900">Blog</div>
            </div>
            <div class="ml-1">
                <div class="font-bold text-base">{{ assunto.titulo }}</div>
                <div>{{ assunto.autor }}</div>
            </div>
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
