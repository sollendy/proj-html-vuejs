<script>
    import {store} from '../store.js'
    export default {
        name: "AppHead",
        data() {
            return {
                store,
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
                <ul class="d-flex align-items-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Chi Siamo</a></li>
                    <li><a href="#">Cosa facciamo</a></li>
                    <li><a href="#">Dove Siamo</a></li>
                    <li><a href="#">Lavoro</a> <button>applai</button></li>
                    <li><a href="#">Novità</a></li>
                    <button>premi qua</button>
                </ul>
            </nav>
        </section>
        <section class="head-secs" id="corpo-head">
            <div class="" id="head-text">
                <h1 class="fw-bold">SEM Campaigns Made Simple With Avada</h1>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, iusto dicta rem ducimus incidunt commodi optio ratione.</p>
                <div class="d-flex gap-3" id="bottoni">
                    <button>cip</button>
                    <button>ciop</button>
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
                        a {
                            text-decoration: none;
                            color: white;
                        }
                    }
                }
            }
            #head-text {
                width: 40%;
                padding: 10% 0 15% 0;
            }
        }
    }
</style>