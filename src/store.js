import {reactive} from 'vue';
export const store = reactive({
    links: [
        {
            ref: "Home",
            status: "d-none"
        },
        {
            ref: "Chi siamo",
            status: "d-none"
        },
        {
            ref: "Cosa Facciamo",
            status: "d-none"
        },
        {
            ref: "Dove Siamo",
            status: "d-none"
        },
        {
            ref: "Lavoro",
            but: "Candidati",
            status: "listed-btn"
        },
        {
            ref: "Novità",
            status: "d-none"
        },
        {
            but: "Addentrati",
            status: "ul-btn fw-bold"
        }
    ],
    carosImgs: [
        {
            img: "src/assets/testimonials-2.jpg",
            text: "Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.",
            name: "Luis Desalvo",
            company: "CREO TECH",
            active: true
        },
        {
            img: "src/assets/testimonials-1.jpg",
            text: "Esperienza molto bella, personale altamente cordiale, qualificato e preciso, consiglio a tutti.",
            name: "Rebecca Curtis",
            company: "UMBRELLA INC",
            active: false
        }
    ]
});