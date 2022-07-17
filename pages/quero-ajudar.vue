<template>
    <div class="mt-1 mb-7 font-bold text-7xl text-white">Então você quer <e-span> Ajudar? </e-span></div>
    <div class="my-10 font-normal text-4xl text-white">
        Caso queira indicar novos conteudos basta enviar no box abaixo.
    </div>
    <div class="w-6/12 bg-white p-5 rounded-xl">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Nome Curso</label
            >
            <input
                type="text"
                class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Curso de Embarque"
                v-model="material.name"
                required
            />
        </div>
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Area do Curso</label
            >
            <input
                type="text"
                class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Embarques Gerais"
                required
                v-model="material.area"
            />
        </div>
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Link do Curso</label
            >
            <input
                type="text"
                class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://embarcacao.dev"
                required
                v-model="material.link"
            />
        </div>
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Seu Github</label
            >
            <input
                type="text"
                class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://github.com/em1dio"
                required
                v-model="material.github"
            />
        </div>
         <button class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
    </div>
</template>

<script setup>
const material = ref({
    name: '',
    area: '',
    link: '',
    github: '',
})
</script>