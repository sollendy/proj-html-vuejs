<script>
    import {store} from '../store.js'
    export default {
        name: "AppFoot",
        data() {
            return {
                store,
            }
        },
        methods: {
            arrayLink(links) {
                return links.map(l => l.but ==='Addentrati' ? ({...l, ref: 'Addentrati', but:null}) : ({...l}))
            }
        },
    }
</script>

<template>
    <section id="foot-cont">
        <div class="sec-cont d-flex flex-column align-items-center gap-5 text-center pt-5">
            <div class="logo-links d-flex flex-column gap-5">
                <div class="logo">
                    <img src="../assets/logo_seo_1x.png" alt="logo sotto">
                </div>
                <ul class="links d-flex gap-5 list-unstyled">
                    <li v-for="(link, indice) in arrayLink(store.links)">
                        <a class="text-decoration-none" href="#">{{ link.ref }}</a>
                    </li>
                    <!-- <li><a class="text-decoration-none" href="#">Chi Siamo</a></li>
                    <li><a class="text-decoration-none" href="#">Cosa facciamo</a></li>
                    <li><a class="text-decoration-none" href="#">Dove Siamo</a></li>
                    <li><a class="text-decoration-none" href="#">Lavoro</a></li>
                    <li><a class="text-decoration-none" href="#">Novità</a></li>
                    <li><a class="text-decoration-none" href="#">Addentrati</a></li> -->
                </ul>
            </div>
            <div class="last-items pb-5 d-flex flex-column gap-4">
                <p><small>© Copyright 2012 - 2020 | Avada Theme by <b>ThemeFusion</b> | All Rights Reserved | Powered by <b>WordPress</b></small></p>
                <div class="socials d-flex justify-content-center gap-3 fs-5">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #foot-cont {
        .sec-cont {
            .logo-links {
                .links {
                    a {
                        color: black;
                    }
                    a:hover {
                        color: rgb(255, 167, 55);
                    }
                }
            }
        }
    }
</style>