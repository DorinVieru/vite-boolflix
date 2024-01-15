<!-- SEZIONE JS SCRIPT -->
<script>
import MediaCard from './MediaCard.vue';

import { store } from '../../store';

export default {
   name: "CardContainer",
   components: {
    MediaCard,
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
        <h2 class="mt-1 ">Film</h2>
        <MediaCard v-for="film, index in store.filmsArray" :key="index" :film="film" />
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