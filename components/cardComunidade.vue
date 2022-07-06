<template>
    <div class="w-72 p-5 h-[28rem] bg-white rounded-md flex flex-col justify-between">
        <div class="flex flex-col">
            <div class="flex justify-center">
                <img class="border-solid border-4 border-sky-900 w-32 rounded-full" :src="comunidade.image" />
            </div>
            <div class="mt-2">
                <div class="mt-2 font-bold text-2xl text-sky-600">{{ comunidade.title }}</div>
                <div class="indent-2 mt-3 font-medium text-black">{{ comunidade.description }}</div>
            </div>
        </div>

        <a :href="comunidade.link" target="_blank" rel="noopener noreferrer">
            <div class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
                ACESSE AQUI
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        comunidade: {
            type: Object,
            default: {
                image: 'https://fakeimg.pl/250x250/',
                title: '[TITULO]',
                description: '[DESCRIÇÃO]',
                link: '#',
            },
        },
    },
};
</script>
