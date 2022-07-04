<template>
    <div>
        <button @click="abrirModal">Test</button>
        <modal />
    </div>
</template>
<script setup>
const { $bus } = useNuxtApp();

const abrirModal = () => {
    $bus.$emit('modal-open', 'ola');
};
</script>
