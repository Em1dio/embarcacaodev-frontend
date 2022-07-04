<template>
    <div :class="`flex flex-col w-72 h-72 justify-between hover:w-78 hover:h-78 ${getBgColor}`">
        <div class="flex flex-col px-4 py-4">
            <div :class="`${getColor} text-base font-normal font-oswald`">QUANDO QUISER!</div>
            <div class="mt-4">
                <div :class="`${getColor} text-4xl font-bold`"><slot></slot></div>
            </div>
        </div>
        <div :class="`${getColor} px-4 py-4 text-sm font-medium`">{{ assuntos }} ASSUNTOS DISPONIVEIS</div>
    </div>
</template>

<script>
export default {
    props: {
        assuntos: {
            type: Number,
            default: 0 ,
        },
        cardType: {
            type: Number,
            default: 1,
        },
    },
    computed: {
        getBgColor() {
            return this.cardType == 1 ? 'bg-blue-800' : 'bg-white';
        },
        getColor() {
            return this.cardType == 1 ? 'text-white' : 'text-blue-800';
        },
    },
};
</script>
