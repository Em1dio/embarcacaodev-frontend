<template>
    <div v-if="!slug">
        <div class="my-10 font-bold text-4xl text-white">
            <e-span> Explore </e-span>
            o desconhecido!
        </div>
        <div class="my-10 font-normal text-4xl text-white">Conheça as carreiras Tech abaixo:</div>
        <category-areas />
    </div>
    <div>
        <NuxtPage />
    </div>
</template>

<script setup>
const route = useRoute();
const { slug } = route.params;
definePageMeta({
    key: route => route.fullPath,
});
</script>
