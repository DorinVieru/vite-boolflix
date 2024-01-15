<!-- SEZIONE JS SCRIPT -->
<script>
import MediaCard from './MediaCard.vue';
import SerieCard from './SerieCard.vue';

import { store } from '../../store';

export default {
   name: "CardContainer",
   components: {
    MediaCard,
    SerieCard,
   },

    data() {
        return {
            store,
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
 <!-- Card container -->
    <div class="row pt-5">
        <!-- TITLE & CARD FILMS -->
        <h2 class="mt-1" v-if="store.filmsrray != 0 ? true : false">Film</h2>
        <MediaCard v-for="film, index in store.filmsArray" :key="index" :film="film" />
        
        <!-- TITLE & CARDS TV SERIES -->
        <h2 class="mt-3" v-if="store.seriesTvArray != 0 ? true : false">Serie Tv</h2>
        <SerieCard v-for="tv, index in store.seriesTvArray" :key="index" :serieTv="tv" />
    </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/generals.scss' as *;

h2 {
    color: #fff;
    font-weight: bold;
    font-size: 40px;
}
</style>