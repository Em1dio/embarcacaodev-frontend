<template>
    <div v-if="conteudo">
        <div class="text-4xl text-bold text-white">{{ conteudo.title }}</div>
        <div class="text-normal my-4 italic text-white">{{ conteudo.description }}</div>
        <div class="" v-for="(categoria, index) in conteudo.categorias" :key="index">
            <div class="text-2xl my-4 text-blue-900">
                <e-span :color="index % 2 == 0 ? 'blue' : 'white'">{{ categoria.title }}</e-span>
            </div>
            <div class="flex flex-wrap m-2">
                <category-subarea :subCategorias="categoria.subCategorias" :indexCategoria="index" />
            </div>
        </div>
    </div>
    <modal-materiais></modal-materiais>
</template>

<script>
import { useStore } from '@/stores/conteudo';

export default {
    mounted() {
        this.getConteudo(this.route);
    },
    data() {
        return {
            store: useStore(),
        };
    },
    methods: {
        getConteudo(area) {
            this.store.getResultBy(area);
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
