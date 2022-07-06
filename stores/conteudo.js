import { defineStore } from 'pinia'

export const useStore = defineStore('conteudo', {
    state: () => {
        return { 
            info: {}, 
            areas: [],
        }
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
                                    active: true,
                                    id: '1',
                                },
                                {
                                    title: 'HTML/CSS',
                                    active: false,
                                    id: '2',
                                },
                                {
                                    title: 'Javascript',
                                    active: false,
                                    id: '3',
                                },
                                {
                                    title: 'Versionamento/Git',
                                    active: false,
                                    id: '4',
                                },
                            ],
                        },
                        {
                            title: 'Frameworks',
                            subCategorias: [
                                {
                                    title: 'React/Next',
                                    active: false,
                                    id: '5',
                                },
                                {
                                    title: 'VueJs/Nuxt',
                                    active: false,
                                    id: '6',
                                },
                                {
                                    title: 'Angular',
                                    active: false,
                                    id: '7',
                                },
                                {
                                    title: 'Svelte',
                                    active: false,
                                    id: '8',
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
                                    active: false,
                                    link: '#',
                                },
                                {
                                    title: 'HTML/CSS',
                                    active: false,
                                    link: '#',
                                },
                                {
                                    title: 'Javascript',
                                    active: false,
                                    link: '#',
                                },
                                {
                                    title: 'Versionamento/Git',
                                    active: false,
                                    link: '#',
                                },
                            ],
                        },
                        {
                            title: 'Frameworks',
                            subCategorias: [
                                {
                                    title: 'React/Next',
                                    active: false,
                                    link: '#',
                                },
                                {
                                    title: 'VueJs/Nuxt',
                                    active: false,
                                    link: '#',
                                },
                                {
                                    title: 'Angular',
                                    active: false,
                                    link: '#',
                                },
                                {
                                    title: 'Svelte',
                                    active: false,
                                    link: '#',
                                },
                            ],
                        },
                    ],
                }
            ];

            this.info = data.find(item => item.area === area);

        },
        getAreas() {
            const areas = [
                {
                    title: 'DEV. FRONTEND',
                    assuntos: 1,
                    link: '/onde-aprender/frontend',
                    isNew: false
                },
                {
                    title: 'DEV. BACKEND',
                    assuntos: 1,
                    link: '/onde-aprender/backend',
                    isNew: true
                },
                {
                    title: 'DEV. MOBILE',
                    assuntos: 0,
                    link: '/onde-aprender/mobile',
                },
                {
                    title: 'GESTAO PROJETOS',
                    assuntos: 0,
                    link: '/onde-aprender/gestao-projetos',
                },
            ];

            this.areas = areas.filter(area => area.assuntos > 0);
        }
    }
})