import { defineStore } from 'pinia'

export const comunidadeStore = defineStore('comunidade', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      comunidades: [],
    }
  },
  actions: {
    getComunidades() {
      const data = [
        {
          image: 'https://github.com/he4rt.png',
          title: 'He4rt Developer’s',
          description:
            'Aqui é o lugar aonde mentes extraordinárias se encontram com o objetivo de alcançar milhares de pessoas com o poder da tecnologia',
          link: 'https://heartdevs.com/',
        },
        {
          image: 'https://github.com/CollabCodeTech.png',
          title: 'Collabcode',
          description: 'Nosso objetivo é mudar a vida das pessoas de forma feliz e positiva usando a educação e tecnologia como meio.',
          link: 'https://discord.com/invite/FP5UaAG',
        },
        {
          image: 'https://github.com/forjadev.png',
          title: 'Forja Dev',
          description: 'A Comunidade da Forja Dev',
          link: 'https://discord.gg/forja',
        }
      ]

      this.comunidades = data;
    }
  }
})