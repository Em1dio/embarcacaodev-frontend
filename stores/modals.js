import { defineStore } from 'pinia'
import { conteudoStore } from './conteudo.js'
export const useModalStore = defineStore('showModal', {
  state: () => {
    return {
      showConteudoModal: false,
      conteudo: {},
    }
  },
  actions:{
    showModal(conteudo){
      this.conteudo = conteudo;
      const useConteudoStore = conteudoStore();
      useConteudoStore.getAssuntos(conteudo.id);
      this.showConteudoModal = true;
    },
    closeModal(){
      this.showConteudoModal = false;
    }
  },
  getters:{
    getConteudo(){
      return this.conteudo;
    }
  }
})