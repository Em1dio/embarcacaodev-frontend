<template>
    <div
        v-if="storeModal.showConteudoModal"
        class="flex w-full h-screen justify-center items-center bg-black/50 fixed top-0 left-0 z-99"
    >
        <div class="w-1/2 h-2/3 bg-white p-10 rounded-6px">
            <div class="flex justify-between mb-8">
                <div class="font-bold text-2xl">{{ storeModal.conteudo.title }} - {{ storeModal.conteudo }}</div>
                {{ assuntos }}
                <button @click="storeModal.closeModal">Fechar</button>
            </div>
            <div v-for="(assunto, index) in assuntos" :key="index">
                <nuxt-link
                    class="flex m-2 p-1 bg-blue-100 rounded-full justify-between"
                    :to="assunto.link"
                    target="_blank"
                >
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
                    <div class="flex flex-row-reverse w-14 h-14">
                        <img
                            v-for="(usuario, index) in assunto.usuarios"
                            :key="index"
                            class="rounded-full border-solid border-2 border-white avatar"
                            :src="`https://github.com/${usuario}.png`"
                        />
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import { useModalStore } from '@/stores/modals';
import { conteudoStore } from '@/stores/conteudo';

export default {
    data() {
        return {
            storeModal: useModalStore(),
            storeConteudo: conteudoStore(),
        };
    },
    created() {
        this.setAssuntos(this.storeModal.conteudo.id);
    },
    methods: {
        setAssuntos(id) {
            this.storeConteudo.getAssuntos(id);
        },
    },
    computed: {
        assuntos() {
            return this.storeConteudo.selectedAssuntos;
        },
    },
};
</script>

<style scoped>
.avatar:first-child {
    margin-right: 0px;
}

.avatar {
    margin-right: -40px;
}
</style>
