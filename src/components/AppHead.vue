<script>
    import {store} from '../store.js'
    export default {
        name: "AppHead",
        data() {
            return {
                store
            }
        },
    }
</script>

<template>
    <header>
        <section class="head-secs" id="nav-superiore">
            <nav class="pt-2 d-flex justify-content-between">
                <div id="logo-up">
                    <img src="../assets/logo_seo_w_1x.png" alt="logo">
                </div>
                <ul class="d-flex align-items-center pt-2">
                    <li v-for="(link, indice) in store.links">
                        <a href="#">{{ link.ref }}</a>
                        <button v-if="link.but" :id="link.status" :class="link.status">{{ link.but }}</button>
                    </li>
                    <!-- <li><a href="#">Chi Siamo</a></li>
                    <li><a href="#">Cosa facciamo</a></li>
                    <li><a href="#">Dove Siamo</a></li>
                    <li><a href="#">Lavoro</a> <button id="listed-btn">candidati</button></li>
                    <li><a href="#">Novità</a></li>
                    <button class="ul-btn fw-bold">ADDENTRATI</button> -->
                </ul>
            </nav>
        </section>
        <section class="head-secs" id="corpo-head">
            <div class="" id="head-text">
                <h1 class="fw-bold">SEM Campaigns Made Simple With Avada</h1>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, iusto dicta rem ducimus incidunt commodi optio ratione.</p>
                <div class="d-flex gap-3" id="bottoni">
                    <button>BUY AVADA NOW</button>
                    <button>CONTATTACI</button>
                </div>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
    header {
        background-image: url('../assets/1-hero-image.png');
        background-size: cover;
        // background-repeat: no-repeat;
        color: white;
        .head-secs {
            width: 75%;
            // background-color: blue;
            margin: auto;
            nav {
                ul {
                    list-style-type: none;
                    gap: 2.5em;
                    li {
                        white-space: nowrap;
                        a {
                            text-decoration: none;
                            color: white;
                        }
                        a:hover {
                            color: rgb(255, 167, 55);
                        }
                        #listed-btn {
                            margin-left: 5px;
                            background-color: unset;
                            color: rgb(255, 167, 55);
                            border: solid 1px rgb(255, 167, 55);
                            border-radius: 25px;
                        }
                    }
                    button.ul-btn {
                        background-color: rgb(255, 167, 55);
                        color: white;
                        border: none;
                        width: 110%;
                        height: 30px;
                        border-radius: 25px;
                        text-transform: uppercase;
                    }
                }
            }
            #head-text {
                width: 40%;
                padding: 10% 0 15% 0;
                #bottoni {
                    button:first-child {
                        width: 40%;
                        background-color: rgb(255, 167, 55);
                        font-weight: bold;
                        border: none;
                        border-radius: 25px;
                        color: white;
                        padding: 1.5%;
                    }
                    button {
                        width: 30%;
                        background-color: rgb(85, 110, 237);
                        font-weight: bold;
                        border: none;
                        border-radius: 25px;
                        color: white;
                        padding: 1.5%;
                    }
                }
            }
        }
    }
</style>