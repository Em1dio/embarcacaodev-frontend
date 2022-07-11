import { defineStore } from 'pinia'

export const useModalStore = defineStore('showModal', {
  state: () => {
    return {
      showConteudoModal: false,
      conteudo: { "title": "TITLE", "active": true, "id": "0" },
    }
  },
  actions:{
    showModal(conteudo){
      this.conteudo = conteudo;
      this.showConteudoModal = true;
    },
    closeModal(){
      this.showConteudoModal = false;
    }
  }
})