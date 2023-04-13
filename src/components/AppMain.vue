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
                <div class="card-cont">
                    <div class="cards">
                        <div><i class="fa-solid fa-road fs-4 icone-top-main"></i></div>
                        <h4 class="fw-bold">Establish Goals</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                    </div>
                    <div class="cards">
                        <div><i class="fa-solid fa-video fs-4 icone-top-main"></i></div>
                        <h4 class="fw-bold">Work With a Team</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                    </div>
                    <div class="cards">
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
                <div class="up-sec text-center">
                    <h3 class="fw-bold">See Our Top Notch Services</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolore nostrum</p>
                </div>
                <div class="card-cont d-flex gap-3 text-center">
                    <div class="cards d-flex flex-column gap-3">
                        <div><i class="fa-brands fa-google fs-4 icone-main-2"></i></div>
                        <h4 class="fw-bold">Google SEO</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                    </div>
                    <div class="cards d-flex flex-column gap-3">
                        <div><i class="fa-solid fa-gear fs-4 icone-main-2"></i></div>
                        <h4 class="fw-bold">Brand Strategy</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                    </div>
                    <div class="cards d-flex flex-column gap-3">
                        <div><i class="fa-solid fa-building fs-4 icone-main-2"></i></div>
                        <h4 class="fw-bold">Local SEO</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                    </div>
                    <div class="cards d-flex flex-column gap-3">
                        <div><i class="fa-solid fa-chart-column fs-4 icone-main-2"></i></div>
                        <h4 class="fw-bold">SEO Analysis</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="terza-sec">
            <div class="sec-cnt d-flex flex-column align-items-center">
                <div class="up-sec text-center">
                    <h3 class="fw-bold">Our Work</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolore nostrum</p>
                </div>
                <div class="foto-cnt d-flex">
                    <div class="foto"><img src="../assets/case-study-gallery-3-1-800x600.jpg" alt=""></div>
                    <div class="foto"><img src="../assets/case-study-gallery-2-800x600.jpg" alt=""></div>
                    <div class="foto"><img src="../assets/case-study-gallery-1-1-800x600.jpg" alt=""></div>
                    <div class="foto"><img src="../assets/case-study-gallery-4-1-800x600.jpg" alt=""></div>
                    <div class="foto"><img src="../assets/case-study-gallery-5-1-800x600.jpg" alt=""></div>
                    <div class="foto"><img src="../assets/case-study-gallery-6-1-800x600.jpg" alt=""></div>
                </div>
                <div class="end-btn">
                    <button>View Our Work</button>
                </div>
            </div>
        </section>
        <section id="quarta-sec">
            <div class="sec-cnt d-flex flex-column align-items-center">
                <div class="up-sec text-center">
                    <h3 class="fw-bold">Our Plans</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolore nostrum</p>
                </div>
                <div class="card-cont d-flex justify-content-between">
                    <div class="cards d-flex flex-column align-items-center gap-3">
                        <h4 class="fw-bold">Standard</h4>
                        <p class="text-center">5 Projects</p>
                        <p class="text-center">5 GB Storage</p>
                        <p class="text-center">Unlimited users</p>
                        <button>START TODAY</button>
                    </div>
                    <div class="cards d-flex flex-column align-items-center gap-3">
                        <h4 class="fw-bold">Premium</h4>
                        <p class="text-center">10 Projects</p>
                        <p class="text-center">15 GB Storage</p>
                        <p class="text-center">Unlimited users</p>
                        <button>START TODAY</button>
                    </div>
                    <div class="cards d-flex flex-column align-items-center gap-3">
                        <h4 class="fw-bold">Professional</h4>
                        <p class="text-center">15 Projects</p>
                        <p class="text-center">30 GB Storage</p>
                        <p class="text-center">Unlimited users</p>
                        <button>START TODAY</button>
                    </div>
                    <div class="cards d-flex flex-column align-items-center gap-3">
                        <h4 class="fw-bold">Extreme</h4>
                        <p class="text-center">Unlimited Projects</p>
                        <p class="text-center">Unlimited Storage</p>
                        <p class="text-center">Unlimited users</p>
                        <button>START TODAY</button>
                    </div>
                </div>
            </div>
        </section>
        <section id="quinta-sec">
            <div class="sec-cont">
                
            </div>
            <h1>salve a tutti dalla quinta sezione</h1>
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
            .card-cont {
                display: flex;
                justify-content: space-between;
            // gap: 1.5%;
                .cards {
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
            padding-bottom: 7%;
            // background-color: blue;
            color: white;
            .up-sec {
                width: 40%;
                padding: 5% 0 4% 0;
                text-align: center;
            }
            .card-cont {
                .cards {
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
    #terza-sec {
        .sec-cnt {
            width: 75%;
            margin: auto;
            .up-sec {
            width: 45%;
            padding: 5% 0 4% 0;
            text-align: center;
            }
            .foto-cnt {
                flex-flow: row wrap;
                justify-content: space-between;
                gap: 0.5%;
                .foto {
                    width: 33%;
                    padding-bottom: 1%;
                    img{
                        width: 100%;
                    }
                }
            }
            .end-btn {
                padding: 5% 0 4.5% 0;
            }
        }
    }
    #quarta-sec {
        background-image: url('../assets/background1.jpg');
        .sec-cnt {
            width: 75%;
            margin: auto;
            .up-sec {
                width: 45%;
                padding: 5% 0 4% 0;
                text-align: center;
                color: white;
            }
            .card-cont {
                width: 100%;
                padding-bottom: 7%;
                // display: flex;
                // justify-content: space-between;
                // gap: 2%;
                .cards {
                    width: 24%;
                    padding: 2%;
                    background-color: rgb(255, 255, 255);
                }
            }
        }
    }
</style>