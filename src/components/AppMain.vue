<script>
    import {store} from "../store.js";
    export default {
        name: "AppMain",
        data() {
            return {
                store,
            }
        },
        methods: {
            testimonials(activeTestimonial) {
                store.carosImgs = store.carosImgs.map((c) => ({...c, active: false}));
                store.carosImgs[activeTestimonial].active = true;
            }
        }
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
                        <a href="#">Scopri di Più ></a>
                    </div>
                    <div class="cards d-flex flex-column gap-3">
                        <div><i class="fa-solid fa-gear fs-4 icone-main-2"></i></div>
                        <h4 class="fw-bold">Brand Strategy</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                        <a href="#">Scopri di Più ></a>
                    </div>
                    <div class="cards d-flex flex-column gap-3">
                        <div><i class="fa-solid fa-building fs-4 icone-main-2"></i></div>
                        <h4 class="fw-bold">Local SEO</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                        <a href="#">Scopri di Più ></a>
                    </div>
                    <div class="cards d-flex flex-column gap-3">
                        <div><i class="fa-solid fa-chart-column fs-4 icone-main-2"></i></div>
                        <h4 class="fw-bold">SEO Analysis</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                        <a href="#">Scopri di Più ></a>
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
                    <div class="foto">
                        <img src="../assets/case-study-gallery-3-1-800x600.jpg" alt="">
                        <i class="fa-solid fa-link link-icone fs-3"></i>
                    </div>
                    <div class="foto">
                        <img src="../assets/case-study-gallery-2-800x600.jpg" alt="">
                        <i class="fa-solid fa-link link-icone fs-3"></i>
                    </div>
                    <div class="foto">
                        <img src="../assets/case-study-gallery-1-1-800x600.jpg" alt="">
                        <i class="fa-solid fa-link link-icone fs-3"></i>
                    </div>
                    <div class="foto">
                        <img src="../assets/case-study-gallery-4-1-800x600.jpg" alt="">
                        <i class="fa-solid fa-link link-icone fs-3"></i>
                    </div>
                    <div class="foto">
                        <img src="../assets/case-study-gallery-5-1-800x600.jpg" alt="">
                        <i class="fa-solid fa-link link-icone fs-3"></i>
                    </div>
                    <div class="foto">
                        <img src="../assets/case-study-gallery-6-1-800x600.jpg" alt="">
                        <i class="fa-solid fa-link link-icone fs-3"></i>
                    </div>
                </div>
                <div class="end-btn">
                    <button class="p-2">VIEW OUR WORK</button>
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
                        <p class="prezzi fs-2 fw-bold"><sup class="non-blu ">$</sup>19<sup class="fs-5">99</sup><sub class="non-blu ">mensili</sub></p>
                        <p class="text-center">5 Projects</p>
                        <p class="text-center">5 GB Storage</p>
                        <p class="text-center">Unlimited Users</p>
                        <button>START TODAY</button>
                    </div>
                    <div class="cards d-flex flex-column align-items-center gap-3">
                        <h4 class="fw-bold">Premium</h4>
                        <p class="prezzi fs-2 fw-bold"><sup class="non-blu ">$</sup>29<sup class="fs-5">99</sup><sub class="non-blu ">mensili</sub></p>
                        <p class="text-center">10 Projects</p>
                        <p class="text-center">15 GB Storage</p>
                        <p class="text-center">Unlimited Users</p>
                        <button>START TODAY</button>
                    </div>
                    <div class="cards d-flex flex-column align-items-center gap-3">
                        <h4 class="fw-bold">Professional</h4>
                        <p class="prezzi fs-2 fw-bold"><sup class="non-blu ">$</sup>39<sup class="fs-5">99</sup><sub class="non-blu ">mensili</sub></p>
                        <p class="text-center">15 Projects</p>
                        <p class="text-center">30 GB Storage</p>
                        <p class="text-center">Unlimited Users</p>
                        <button>START TODAY</button>
                    </div>
                    <div class="cards d-flex flex-column align-items-center gap-3">
                        <h4 class="fw-bold">Extreme</h4>
                        <p class="prezzi fs-2 fw-bold"><sup class="non-blu ">$</sup>59<sup class="fs-5">99</sup><sub class="non-blu ">mensili</sub></p>
                        <p class="text-center">Unlimited Projects</p>
                        <p class="text-center">Unlimited Storage</p>
                        <p class="text-center">Unlimited Users</p>
                        <button>START TODAY</button>
                    </div>
                </div>
            </div>
        </section>
        <section id="quinta-sec">
            <div class="sec-cnt d-flex flex-column align-items-center">
                <div class="up-sec text-center">
                    <h3 class="fw-bold">Our News</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolore nostrum</p>
                </div>
                <div class="card-sec">
                    <div class="card-cont d-flex justify-content-between text-center">
                        <div class="cards d-flex flex-column gap-3">
                            <div><img src="../assets/related-service-2-320x202.jpg" alt=""></div>
                            <h5 class="fw-bold">Why You Need a SEO Agency Now</h5>
                            <small>1 novembre 2017</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                        </div>
                        <div class="cards d-flex flex-column gap-3 text-center">
                            <div><img src="../assets/related-service-4-320x202.jpg" alt=""></div>
                            <h5 class="fw-bold">SEO Tips For Your Startup</h5>
                            <small>1 novembre 2017</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                        </div>
                        <div class="cards d-flex flex-column gap-3">
                            <div><img src="../assets/blog-post-6-320x202.jpg" alt=""></div>
                            <h5 class="fw-bold">Image Optimization For Your Site</h5>
                            <small>1 novembre 2017</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                        </div>
                    </div>
                    <div class="end-btn text-center">
                        <button>GO TO NEWS</button>
                    </div>
                </div>
            </div>
        </section>
        <section id="sesta-sec">
            <div class="sec-cnt w-75 m-auto">
                <div class="fascia-testimonial">
                    <div v-for="(img, i) in store.carosImgs" class="cliente flex-column align-items-center text-center gap-4" :class="img.active ? 'd-flex' : 'd-none'">
                            <h3 class="fw-bold">What Our Clients Say</h3>
                            <div>
                                <img :src="img.img" alt="">
                            </div>
                            <div>
                                <i>{{ img.text }}</i>
                            </div>
                            <div>
                                <small>
                                    <b>{{ img.name }},</b> <span>{{ img.company }}</span>
                                </small>
                            </div>
                            <div class="puntini d-flex gap-1">
                                <i class="fa-circle cursor-pointer" v-for="(bullet, index) in store.carosImgs" :class="bullet.active ? 'fa-solid' : 'fa-regular'" @click="testimonials(index)"></i>
                            </div>
                        </div>
                </div>
                <div class="fascia-partner d-flex justify-content-around">
                    <img src="../assets/clients_partner_5-200x202.png" alt="">
                    <img src="../assets/clients_partner_6-200x202.png" alt="">
                    <img src="../assets/clients_partner_1-200x202.png" alt="">
                    <img src="../assets/clients_partner_2-200x202.png" alt="">
                </div>
            </div>
        </section>
        <section id="ultima-sec">
            <div class="sec-cnt w-75 m-auto d-flex justify-content-center">
                <div class="text-cont w-50 d-flex flex-column align-items-center text-center gap-3">
                    <h3>Start Your Free Consultation</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum quis dolor suscipit ad et voluptas facere voluptate.</p>
                    <button>CONTACT US NOW</button>
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
                .cards:hover {
                    h4 {
                        color: rgb(255, 167, 55);
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
                    a {
                        text-decoration: none;
                        color: rgb(255, 167, 55);
                    }
                }
                .cards:hover {
                    h4 {
                        color: rgb(255, 167, 55);
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
                    position: relative;
                    img{
                        width: 100%;
                    }
                    .link-icone {
                        display: none;
                    }
                }
                .foto:hover {
                    background: aqua;
                    img {
                        display: none;
                    }
                    .link-icone {
                        display: inline-block;
                        position: absolute;
                        right: 50%;
                        top: 50%;
                        color: white;
                        z-index: 2;
                    }
                }
            }
            .end-btn {
                padding: 5% 0 4.5% 0;
                button {
                    width: 120%;
                    background-color: rgb(255, 167, 55);
                    font-weight: bold;
                    border: none;
                    border-radius: 25px;
                    color: white;
                }
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
                    .prezzi {
                        color: rgb(96, 122, 254);
                        .non-blu {
                            color: rgb(50, 50, 50);
                            font-size: 15px;
                        }
                    }
                    button {
                        width: 60%;
                        border-radius: 25px;
                        background-color: unset;
                        padding: 3%;
                        font-weight: bold;
                    }
                }
                .cards:hover {
                    h4 {
                        color: rgb(96, 122, 254);
                    }
                    button {
                        border: 2px solid rgb(96, 122, 254);
                        color: rgb(96, 122, 254);
                    }
                    button:hover {
                        background-color: rgb(255, 167, 55);
                        color: white;
                        border: 1px solid grey;
                    }
                }
            }
        }
    }
    #quinta-sec {
        background-color: rgb(247, 248, 250);
        .sec-cnt {
            width: 75%;
            margin: auto;
            .up-sec {
            width: 35%;
            padding: 5% 0 4% 0;
            text-align: center;
            }
            .card-sec {
                .card-cont {
                    .cards{
                        h5{
                            color: rgb(255, 167, 55);
                        }
                    }
                }
                .end-btn {
                    padding: 5% 0 4% 0;
                    button {
                        width: 14%;
                        background-color: rgb(255, 167, 55);
                        font-weight: bold;
                        border: none;
                        border-radius: 25px;
                        color: white;
                        padding: .7%;
                    }
                }
            }
        }
    }
    #sesta-sec {
        .sec-cnt {
            .fascia-testimonial {
                display: flex;
                justify-content: center;
                .cliente {
                    width: 35%;
                    padding-top: 4%;
                    padding-bottom: 3%;
                    div {
                        img {
                            border-radius: 50%;
                            width: 60%;
                        }
                    }
                }
            }
            .fascia-partner {
                width: 90%;
                margin: auto;
                border-top: .5px solid rgb(225, 225, 225);
                padding: 4% 0 4% 0;
                img {
                    width: 10%;
                }
            }
        }
    }
    #ultima-sec {
        // background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2), rgba(0,0,0,0.2));
        background: linear-gradient(  rgba(0,0,0,0.7), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('../assets/CTA-seo-1.jpg');
        background-size: cover;
        .sec-cnt {
            .text-cont{
                color: white;
                padding: 5% 0 5% 0;
                button {
                    background-color: rgb(255, 167, 55);
                    font-weight: bold;
                    border: none;
                    border-radius: 25px;
                    color: white;
                    padding: 1%;
                    width: 35%;
                }
            }
        }
    }
</style>