import { defineStore } from 'pinia'

export const useModalStore = defineStore('showModal', {
  state: () => {
    return {
      showConteudoModal: false,
      title: "",
    }
  },
  actions:{
    showModal(title){
      this.showConteudoModal = true;
      this.title = title;
    },
    closeModal(){
      this.showConteudoModal = false;
    }
  }
})