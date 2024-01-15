import { reactive } from 'vue';

export const store = reactive({
    // ENDPOINT MOVIEDB
    endpoint: 'https://api.themoviedb.org/3',

    // CHIAVE API PER I FILM
    apiSearchFilms: '/search/movie',

    // CHIAVE APIPER AVER ACCESSO ALL'ENDPOINT
    apiKey: '?api_key=f54dacff7580dd4c715828a9902a15d2',

    // ARRAY FILMS & TV SERIS
    filmsArray: [],
    seriesTvArray: [],

    // VARIABILE SEARCH & VARIABILE CHE INDICA SE LA RICERCA E' STATA EFFETTUATA OPPURE NO
    search: '',
    researched: false,
})