<template>
    <div class="flex flex-wrap">
        <div v-for="(area, index) in areas" :key="index">
            <a :href="area.link">
                <card-area :assuntos="area.assuntos" :isNew="area.isNew" :cardType="index % 2">
                    {{ area.title }}
                </card-area>
            </a>
        </div>
    </div>
</template>

<script>
import { conteudoStore } from '@/stores/conteudo';

export default {
    mounted() {
        this.getAreas();
    },
    methods: {
        getAreas() {
            this.conteudo.getAreas();
        },
    },
    data() {
        return {
            conteudo: conteudoStore(),
        };
    },
    computed: {
        areas() {
            return this.conteudo.areas;
        },
    },
};
</script>
