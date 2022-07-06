<template>
    <div
        v-if="store.showConteudoModal"
        class="flex w-full h-screen justify-center items-center bg-black/50 fixed top-0 left-0 z-99"
    >
        <div class="w-1/2 h-2/3 bg-white p-10 rounded-6px">
            <div class="flex justify-between mb-4">
                <div class="font-bold text-2xl">{{ store.conteudo.title }}</div>
                <button @click="store.closeModal">Fechar</button>
            </div>
            <div class="flex m-2 p-1 bg-blue-100 rounded-full item-center mx-auto">
                <div
                    class="border-solid border-2 border-white w-14 h-14 bg-red-900/50 p-3 rounded-full flex justify-center"
                >
                    <!-- <icon-text></icon-text> -->
                    <icon-video></icon-video>
                </div>
                <div class="ml-4">
                    <div class="font-bold">Como a Internet Funciona?</div>
                    <div>Curso em Video</div>
                </div>
            </div>
            <div class="flex m-2 p-1 bg-blue-100 rounded-full justify-between">
                <div class="flex item-center">
                    <div
                        class="border-solid border-2 border-white w-14 h-14 bg-red-900/50 p-3 rounded-full flex justify-center"
                    >
                        <icon-text></icon-text>
                        <!-- <icon-video></icon-video> -->
                    </div>
                    <div class="ml-4">
                        <div class="font-bold">Como a Internet Funciona?</div>
                        <div>Curso em Video</div>
                    </div>
                </div>
                <div class="flex flex-row-reverse w-14 h-14">
                    <img
                        class="rounded-full border-solid border-2 border-white avatar"
                        src="https://github.com/daviprm.png"
                    />
                    <img
                        class="rounded-full border-solid border-2 border-white avatar"
                        src="https://github.com/Willian91.png"
                    />
                    <img
                        class="rounded-full border-solid border-2 border-white avatar"
                        src="https://github.com/caio-emidio.png"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modals';
const store = useModalStore();

const conteudo = store.conteudo;
</script>

<style scoped>
.avatar:first-child {
    margin-right: 0px;
}

.avatar {
    margin-right: -40px;
}
</style>
