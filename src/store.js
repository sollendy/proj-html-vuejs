import {reactive} from 'vue';
export const store = reactive({
    links: [
        {
            ref: "Home"
        },
        {
            ref: "Chi siamo"
        },
        {
            ref: "Cosa Facciamo"
        },
        {
            ref: "Dove Siamo"
        },
        {
            ref: "Lavoro",
            but: "Candidati"
        },
        {
            ref: "Novità"
        },
        {
            but: "addentrati"
        }
    ]
});