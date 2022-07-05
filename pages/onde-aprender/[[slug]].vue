<template>
    <div v-if="conteudo">
        <div class="text-4xl text-bold text-white">{{ conteudo.title }}</div>
        <div class="text-normal my-4 italic text-white">{{ conteudo.description }}</div>
        <div class="" v-for="(categoria, index) in conteudo.categorias" :key="index">
            <div class="text-2xl my-4 text-blue-900">
                <e-span :color="index % 2 == 0 ? 'blue' : 'white'">{{ categoria.title }}</e-span>
            </div>
            <div class="flex flex-wrap m-2">
                <button-treasure
                    :color="index % 2 == 0 ? 'blue' : 'white'"
                    class="mx-auto"
                    v-for="(subcategoria, subIndex) in categoria.subCategorias"
                    :key="subIndex"
                    @click="abrirModal(subcategoria.title)"
                >
                    {{ subcategoria.title }}
                </button-treasure>
            </div>
        </div>
    </div>
    <modal></modal>
</template>

<script>
import { useStore } from '@/stores/conteudo';
import { useModalStore } from '@/stores/modals';

export default {
    mounted() {
        this.getConteudo(this.route);
    },
    data() {
        return {
            store: useStore(),
            modal: useModalStore(),
        };
    },
    methods: {
        getConteudo(area) {
            this.store.getResultBy(area);
        },
        abrirModal(title) {
            this.modal.showModal(title);
        },
    },
    computed: {
        conteudo() {
            return this.store.info;
        },
        route() {
            const route = useRoute();
            return route.params.slug;
        },
    },
};
</script>
