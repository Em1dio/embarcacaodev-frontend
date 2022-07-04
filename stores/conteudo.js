import { defineStore } from 'pinia'

export const useStore = defineStore('conteudo', {
  state: () => {
    return { info: {oi: "tchau"} }
  },
  actions: {
    getResultBy(area = "frontend") {
      const data = [
        {
          area: 'frontend',
          title: 'Frontend - As terras do desenvolvimento Web.',
          description:
            'O Front-end está muito relacionado com a interface gráfica do projeto. Ou seja, é onde se desenvolve a aplicação com a qual o usuário irá interagir diretamente, seja em softwares, sites, aplicativos, etc. - "Totvs"',
          categorias: [
            {
              title: 'Preparação para embarcar',
              subCategorias: [
                {
                  title: 'Como a Internet Funciona',
                  link: '#',
                },
                {
                  title: 'HTML/CSS',
                  link: '#',
                },
                {
                  title: 'Javascript',
                  link: '#',
                },
                {
                  title: 'Versionamento/Git',
                  link: '#',
                },
              ],
            },
            {
              title: 'Frameworks',
              subCategorias: [
                {
                  title: 'React/Next',
                  link: '#',
                },
                {
                  title: 'VueJs/Nuxt',
                  link: '#',
                },
                {
                  title: 'Angular',
                  link: '#',
                },
                {
                  title: 'Svelte',
                  link: '#',
                },
              ],
            },
          ],
        },
        {
          area: 'backend',
          title: 'Backend - Como funciona por debaixo dos cascos?!?!',
          description:
            'O Front-end está muito relacionado com a interface gráfica do projeto. Ou seja, é onde se desenvolve a aplicação com a qual o usuário irá interagir diretamente, seja em softwares, sites, aplicativos, etc. - "Totvs"',
          categorias: [
            {
              title: 'Preparação para embarcar',
              subCategorias: [
                {
                  title: 'Como a Internet Funciona',
                  link: '#',
                },
                {
                  title: 'HTML/CSS',
                  link: '#',
                },
                {
                  title: 'Javascript',
                  link: '#',
                },
                {
                  title: 'Versionamento/Git',
                  link: '#',
                },
              ],
            },
            {
              title: 'Frameworks',
              subCategorias: [
                {
                  title: 'React/Next',
                  link: '#',
                },
                {
                  title: 'VueJs/Nuxt',
                  link: '#',
                },
                {
                  title: 'Angular',
                  link: '#',
                },
                {
                  title: 'Svelte',
                  link: '#',
                },
              ],
            },
          ],
        }
      ];

      this.info = data.find(item => item.area === area);

    },
  }
})