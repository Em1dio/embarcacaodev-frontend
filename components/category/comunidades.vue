<template>
    <div class="flex flex-wrap gap-4">
        <card-comunidade v-for="(comunidade, index) in comunidades" :key="index" :comunidade="comunidade" />
    </div>
</template>

<script>
import { comunidadeStore } from '@/stores/comunidade';

export default {
    mounted() {
        this.storeComunidade.getComunidades();
    },
    data() {
        return {
            storeComunidade: comunidadeStore(),
        };
    },
    computed: {
        comunidades() {
            return this.storeComunidade.comunidades;
        },
    },
};
</script>
