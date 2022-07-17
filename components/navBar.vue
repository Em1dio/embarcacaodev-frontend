<template>
    <div class="bg-white bg-opacity-90">
        <nav class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center" fixed>
            <div class="flex items-center justify-between">
                <a
                    href="/"
                    class="flex items-center text-xl font-bold text-black md:text-2xl hover:text-white-400"
                >
                    <logo class="mr-2" />
                    Embarcação<span class="text-sky-500">Dev</span>
                </a>
                <!-- Mobile menu button -->
                <div @click="showMenu = !showMenu" class="flex md:hidden">
                    <button
                        type="button"
                        class="text-black-100 hover:text-black-400 focus:outline-none focus:text-black-400"
                    >
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path
                                fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul
                :class="showMenu ? 'flex' : 'hidden'"
                class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
            >
                <li class="text-black hover:text-sky-800" v-for="(item, index) in items" :key="index">
                    <a :href="item.link">
                        <div class="text-lg font-medium">
                            {{ item.name }}
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            toggleNav: false,
            showMenu: false,
            items: [
                {
                    name: 'Home',
                    link: '/',
                },
                {
                    name: 'Explorar',
                    link: '/onde-aprender',
                },
                {
                    name: 'Quero Ajudar',
                    link: '/quero-ajudar',
                },
                {
                    name: 'Comunidades',
                    link: '/comunidades',
                },
            ],
        };
    },
};
</script>
