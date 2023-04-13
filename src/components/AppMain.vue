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
        <section id="prima-sec" class="main-secs">
            <div class="sec-cnt d-flex flex-column align-items-center">
                <div class="up-sec">
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
            </div>
        </section>
        <section id="seconda-sec">
            <div class="sec-cnt d-flex flex-column align-items-center">
                <div id="up-sec" class="text-center">
                    <h3 class="fw-bold">See Our Top Notch Services</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolore nostrum</p>
                </div>
                <div id="card-cont" class="d-flex gap-3 text-center">
                    <div class="cards-up d-flex flex-column gap-3">
                        <div><i class="fa-brands fa-google fs-4 icone-main-2"></i></div>
                        <h4 class="fw-bold">Google SEO</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                    </div>
                    <div class="cards-up d-flex flex-column gap-3">
                        <div><i class="fa-solid fa-gear fs-4 icone-main-2"></i></div>
                        <h4 class="fw-bold">Brand Strategy</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                    </div>
                    <div class="cards-up d-flex flex-column gap-3">
                        <div><i class="fa-solid fa-building fs-4 icone-main-2"></i></div>
                        <h4 class="fw-bold">Local SEO</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                    </div>
                    <div class="cards-up d-flex flex-column gap-3">
                        <div><i class="fa-solid fa-chart-column fs-4 icone-main-2"></i></div>
                        <h4 class="fw-bold">SEO Analysis</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    #prima-sec {
        display: flex;
        justify-content: center;
        background-color: rgb(247, 248, 250);
        .sec-cnt {
            width: 75%;
            margin: auto;
            .up-sec {
            width: 45%;
            padding: 5% 0 4% 0;
            text-align: center;
            }
            #card-cont {
            display: flex;
            justify-content: space-between;
            // gap: 1.5%;
            .cards-up {
                padding: 3%;
                text-align: center;
                width: 30%;
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
        
    }
    #seconda-sec {
        background-color: rgb(5, 22, 66);
        background-image: url('../assets/pattern_background.png');
        background-size: cover;
        .sec-cnt {
            width: 75%;
            margin: auto;
            // background-color: blue;
            color: white;
            #up-sec {
                width: 40%;
                padding: 5% 0 4% 0;
                text-align: center;
            }
            #card-cont {
                .cards-up {
                    background-color: rgb(7, 27, 80);
                    padding: 3%;
                    div {
                        .icone-main-2 {
                            color: rgb(255, 167, 55);
                        }
                    }
                }
            }
        }
    }
</style>