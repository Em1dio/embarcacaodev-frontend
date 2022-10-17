<template>
    <div
        v-if="storeModal.showConteudoModal"
        class="flex w-full h-screen justify-center items-center bg-black/50 fixed top-0 left-0 z-99"
    >
        <div class="w-3/4 h-2/3 bg-white p-10 rounded-6px">
            <div class="flex justify-between mb-8">
                <div class="font-bold text-2xl">{{ storeModal.conteudo.title }}</div>
                <button @click="storeModal.closeModal">Fechar</button>
            </div>
            <div class="flex flex-wrap gap-2">
                <div v-for="(assunto, index) in assuntos" :key="index">
                    <card-assunto :assunto="assunto" />
                </div>
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
    mounted() {
        this.storeConteudo.getAssuntos();
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
