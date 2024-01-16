<!-- SEZIONE JS SCRIPT -->
<script>

// IMPORTO LE COMPONTENTI
import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  created() {
    
  },
  methods: {
    getFilmsAndTvInfo() {
      // VARIABILE API CHE RICHIAMA I FILM
      let apiFilms = `${store.endpoint}${store.apiSearchFilms}${store.apiKey}${store.language}&query=${store.search}`;

      axios.get(apiFilms).then((response) => {
        store.filmsArray = response.data.results;
      });

      // VARIABILE API CHE RICHIAMA LE SERIE TV
      let apiSeriesTv = `${store.endpoint}${store.apiSearchSeriesTv}${store.apiKey}${store.language}&query=${store.search}`;

      axios.get(apiSeriesTv).then((response) => {
        store.seriesTvArray = response.data.results;
        console.log(store.seriesTvArray)
      });

    },
  },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <div>
      <!-- HEADER -->
      <AppHeader @media_search="getFilmsAndTvInfo" />
      <div>
        <!-- MAIN -->
        <AppMain />
      </div>
  </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use './styles/partials/variables' as *;
@use './styles/generals.scss' as *;
</style>