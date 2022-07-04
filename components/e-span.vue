<template>
    <span
        :class="`before:block before:absolute before:-inset-1 before:-skew-y-3 ${getBgColor} relative inline-block`"
    >
        <span :class="`relative ${getColor} italic`">
            <slot></slot>
        </span>
    </span>
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
                    return 'before:bg-white';
                case 'blue':
                default:
                    return 'before:bg-blue-900';
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
