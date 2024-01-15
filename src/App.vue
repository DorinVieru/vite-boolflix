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
      let apiFilms = `${store.endpoint}${store.apiSearchFilms}${store.apiKey}&query=${store.search}`;

      axios.get(apiFilms).then((response) => {
        store.filmsArray = response.data.results;
      });

    },
  },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <div>
      <!-- HEADER -->
      <AppHeader @perform_search="getFilmsAndTvInfo" />
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