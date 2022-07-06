<template>
    <div class="mx-auto" v-for="(subCategoria, index) in subCategorias" :key="index">
        <button-treasure
            v-if="subCategoria.active"
            class="mouse-pointer"
            :color="indexCategoria % 2 == 0 ? 'blue' : 'white'"
            @click="this.modal.showModal(subCategoria)"
        >
            {{ subCategoria.title }}
        </button-treasure>

        <button-treasure v-else :color="indexCategoria % 2 == 0 ? 'blue' : 'white'">
            {{ subCategoria.title }} <br />
            (Em Breve)
        </button-treasure>
    </div>
</template>

<script>
import { useModalStore } from '@/stores/modals';

export default {
    props: {
        subCategorias: {
            type: Array,
            required: true,
        },
        indexCategoria: {
            type: Number,
            required: false,
        },
    },
    data() {
        return {
            modal: useModalStore(),
        };
    },
    methods: {},
};
</script>

<style scoped>
.mouse-pointer {
    cursor: pointer;
}
</style>
