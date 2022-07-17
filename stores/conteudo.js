import { defineStore } from 'pinia'

export const conteudoStore = defineStore('conteudo', {
    state: () => {
        return {
            info: {},
            areas: [],
            assuntos: [],
            selectedAssuntos: [],
            id: 0,
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
                                    active: true,
                                    id: '2',
                                },
                                {
                                    title: 'Javascript',
                                    active: false,
                                    id: '3',
                                },
                                {
                                    title: 'Versionamento/Git',
                                    active: true,
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
                    assuntos: 3,
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
        },
        getAssuntos(id) {
            if (!id) {
                this.selectedAssuntos = [];
                this.assuntos = [];
            }
            const assuntos = [
                {
                    id: 1,
                    assuntos: [
                        {
                            format: 'video',
                            titulo: 'Como a Internet Funciona?',
                            autor: 'Curso em Video',
                            usuarios: ['daviprm', 'Willian91', 'caio-emidio'],
                            link: "https://www.youtube.com/watch?v=nlO5hySqJFA"
                        },
                        {
                            format: 'text',
                            titulo: 'Entenda a Internet?',
                            autor: 'Curso em Video',
                            usuarios: ['caio-emidio'],
                        },
                    ]
                },
                {
                    id: 2,
                    assuntos: [
                        {
                            format: 'video',
                            titulo: 'Projeto do curso de HTML e CSS feliz',
                            autor: 'Marco Bruno',
                            usuarios: ['daviprm', 'Willian91', 'caio-emidio'],
                            link: "https://www.youtube.com/watch?v=CZPa3-1BKnY&list=PLirko8T4cEmzrH3jIJi7R7ufeqcpXYaLa"
                        },
                    ]
                },
                {
                    id: 4,
                    assuntos: [
                        {
                            format: 'video',
                            titulo: 'Git & GitHub Para Iniciantes',
                            autor: 'Willian Justen',
                            usuarios: ['caio-emidio'],
                            link: "https://www.youtube.com/watch?v=CZPa3-1BKnY&list=PLirko8T4cEmzrH3jIJi7R7ufeqcpXYaLa"
                        },
                    ]
                }
            ];

            this.assuntos = assuntos;
            const assunto = assuntos.find(item => item.id == id)?.assuntos;
            console.log(id, assunto);
            this.selectedAssuntos = assunto;
        }
    },
})