import { defineStore } from 'pinia'

export const useModalStore = defineStore('showModal', {
  state: () => {
    return {
      showConteudoModal: false,
      conteudo: {},
    }
  },
  actions:{
    showModal(conteudo){
      this.showConteudoModal = true;
      this.conteudo = conteudo;
    },
    closeModal(){
      this.showConteudoModal = false;
    }
  }
})