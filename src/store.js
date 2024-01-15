import { reactive } from 'vue';

export const store = reactive({
    // ENDPOINT MOVIEDB
    endpoint: 'https://api.themoviedb.org/3',

    // CHIAVE API PER I FILM
    apiSearchFilms: '/search/movie',

    // CHIAVE APIPER AVER ACCESSO ALL'ENDPOINT
    apiKey: '?api_key=f54dacff7580dd4c715828a9902a15d2',

    // Array delle informazioni dei film
    filmsArray: [],

    // Search textbox variable
    search: '',

    // Variabile che indica se la ricerca sia stata effettuata o no
    researched: false,

    // Variabile per l'indirizzo relativo delle immagini
    imgUrl: 'https://image.tmdb.org/t/p/w500'
})