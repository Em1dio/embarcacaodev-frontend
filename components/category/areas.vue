<template>
    <div class="flex flex-wrap">
        <div v-for="(area, index) in areas" :key="index">
            <a :href="area.link">
                <card-area v-if="area.assuntos > 0" :assuntos="area.assuntos" :cardType="index % 2">
                    {{ area.title }}
                </card-area>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            areas: [
                {
                    title: 'DEV. FRONTEND',
                    assuntos: 1,
                    link: '/onde-aprender/frontend',
                },
                {
                    title: 'DEV. BACKEND',
                    assuntos: 2,
                    link: '/onde-aprender/backend',
                },
                {
                    title: 'DEV. MOBILE',
                    assuntos: 0,
                    link: '/onde-aprender/mobile',
                },
                {
                    title: 'GESTAO PROJETOS',
                    assuntos: 0,
                    link: '/onde-aprender/gestao-projetos',
                },
            ],
        };
    },
};
</script>
