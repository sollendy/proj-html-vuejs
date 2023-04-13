<script>
    import {store} from "../store.js";
    export default {
        name: "AppMain",
        data() {
            return {
                store,
            }
        },
    }
</script>

<template>
    <main>
        <section class="main-secs d-flex flex-column align-items-center">
            <div id="up-sec">
                <h3 class="fw-bold">Meet The New Agency SEO Template From The Avada Team</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolore nostrum magni eos facilis error.</p>
            </div>
            <div id="card-cont">
                <div class="cards-up">
                    <div><i class="fa-solid fa-road fs-4 icone-top-main"></i></div>
                    <h4 class="fw-bold">Establish Goals</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                </div>
                <div class="cards-up">
                    <div><i class="fa-solid fa-video fs-4 icone-top-main"></i></div>
                    <h4 class="fw-bold">Work With a Team</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                </div>
                <div class="cards-up">
                    <div><i class="fa-solid fa-droplet fs-4 icone-top-main"></i></div>
                    <h4 class="fw-bold">Get Results</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                </div>
            </div>
            <div id="sfondo-sec-1">
                <img src="../assets/agency-seo-desk-front-800x380.jpg" alt="">
            </div>
        </section>
        
    </main>
</template>

<style scoped lang="scss">
    .main-secs {
        display: flex;
        justify-content: center;
        background-color: rgb(247, 248, 250);
        #up-sec {
            width: 35%;
            padding: 4%;
            text-align: center;
        }
        #card-cont {
            display: flex;
            justify-content: center;
            gap: 1.5%;
            .cards-up {
                padding: 3%;
                text-align: center;
                width: 25%;
                background-color: rgb(255, 255, 255);
                display: flex;
                flex-flow: column;
                gap: .7em;
                div {
                    .icone-top-main {
                        color: rgb(255, 167, 55);
                    }
                }
            }
        }
    }
</style>