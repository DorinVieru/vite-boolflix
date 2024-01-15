import { reactive } from 'vue';

export const store = reactive({
    // ENDPOINT MOVIEDB
    endpoint: 'https://api.themoviedb.org/3',

    // CHIAVE API PER I FILM E SERIE TV
    apiSearchFilms: '/search/movie',
    apiSearchSeriesTv: '/search/tv',

    // CHIAVE APIPER AVER ACCESSO ALL'ENDPOINT
    apiKey: '?api_key=f54dacff7580dd4c715828a9902a15d2',

    // VARIABILE PER LA LINGUA DELL'API
    language: '&language=it_IT',

    // ARRAY FILMS & TV SERIS
    filmsArray: [],
    seriesTvArray: [],

    // VARIABILE SEARCH & VARIABILE CHE INDICA SE LA RICERCA E' STATA EFFETTUATA OPPURE NO
    search: '',
    researched: false,

    // VARIABILE PER L'INDIRIZZO DELL'IMMAGINE
    imgUrl: 'https://image.tmdb.org/t/p/w500'
})