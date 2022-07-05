<template>
    <div v-if="store.showConteudoModal" class="test_modal_bg">
        <div class="test_modal">
            <div class="flex">
                <h2>oi {{ store.title }} CARA </h2>
                <button @click="store.closeModal">Fechar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modals';
const store = useModalStore();
</script>

<style>
.test_modal_bg {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}

.test_modal {
    width: 500px;
    height: 500px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
}
</style>
