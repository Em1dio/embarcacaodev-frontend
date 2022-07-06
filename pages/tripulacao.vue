<template>
    
    <main>
        <div class="cover_container">
            <div class="cover_text">
                <h2>BEM <br> VINDOS</h2>
                <h2 class="last">À BORDO</h2>
                <p>Preparados para entrar mar a dentro? Junte-se a tripulação Dev e venha explorar conosco.</p>
                <button>SUBIR À BORDO</button>
            </div>
            <img src="/assets/images/cover.svg" alt="">
        </div>
    </main>


</template>

<style scoped>

    body {
        background: white;
    }

    * {
        font-family: 'Roboto', sans-serif;
    }

    /* cover */

    main {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cover_container {
        width: 1300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cover_text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .cover_text h2 {
        font-size: 100px;
        font-weight: 900;
        color: #2c2aad;
        line-height: 110px;
    }

    .cover_text p {
        width: 700px;
        margin-top: 20px;
        font-size: 40px;
        font-weight: 400;
        color: rgb(179, 179, 179);
        line-height: 40px;
    }

    .cover_text button {
        padding: 15px 60px;
        margin-top: 30px;
        font-size: 16px;
        border-radius: 5px;
        background: #2c2aad;
        color: white;
        font-weight: 900;
        cursor: pointer;
        transition: .3s;
    }

    .cover_text button:hover {
        background: #2c2aad;
    }

    .cover_container img {
        width: 500px;
    }

</style>