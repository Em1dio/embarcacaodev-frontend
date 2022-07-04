<template>
    <div :class="`flex rounded-md items-center justify-center w-52 h-28 ${getBgColor}`">
        <div class="absolute">
            <div :class="getColor">
                <slot></slot>
            </div>
            <treasure-map class="treasure_map" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'blue',
        },
    },
    computed: {
        getBgColor() {
            switch(this.color) {
                case 'white':
                    return 'bg-white';
                case 'blue':
                default:
                    return 'bg-blue-800';
            }
        },
        getColor() {
            switch(this.color) {
                case 'white':
                    return 'text-blue-900';
                case 'blue':
                default:
                    return 'text-white';
            }
        },
    },
};
</script>

<style scoped>
.treasure_map {
    position: absolute;
    left: 45px;
    top: -30px;
}

</style>