<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../../store.js';

export default {
    name: 'MediaCard',
    props: {
        film: Object,
    },
    data() {
        return {
            store
        }
    },
    created() {

    },
    computed: {
        // FUNZIONE PER LE FLAG
        Flaglanguage() {
            if (this.film.original_language.toUpperCase() == 'JA') {
                return `https://flagsapi.com/JP/flat/24.png`;
            }
            else if (this.film.original_language.toUpperCase() == 'KO') {
                return `https://flagsapi.com/KR/flat/24.png`;
            }
            else if (this.film.original_language.toUpperCase() == 'EN') {
                return `https://flagsapi.com/GB/flat/24.png`;
            }
            else if (this.film.original_language.toUpperCase() == 'ES') {
                return `https://flagsapi.com/ES/flat/24.png`;
            }
            else if (this.film.original_language.toUpperCase() == 'ZH') {
                return `https://flagsapi.com/CN/flat/24.png`;
            }
            else {
                return `https://flagsapi.com/${this.film.original_language.toUpperCase()}/flat/24.png`
            }

        },

        // FUNZIONE PER IMG
        imgUrl() {
            return `${this.store.imgUrl}${this.film.poster_path}`
        },

        // FUNZIONE PER LE STELLE PER LA VALUTAZIONE
        getVote() {
            let voteRate = Math.ceil(this.film.vote_average / 2)
            return voteRate
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
   <!-- CARD CONTAINER -->
    <div class="col-3 my-3 media-container">

        <div class="media">

            <!-- FRONT CARD -->
            <!-- IMG SECTION CARD -->
            <div class="img-container">
                <img :src="imgUrl" alt="">
            </div>

            <!-- CARD RETRO -->
            <div class="px-2 media-retro-container">
                <!-- FILM TITLE -->
                <div>
                    <h4> Titolo originale: {{ film.original_title }}</h4>
                </div>

                <!-- ORIGINAL TILTLE FILM -->
                <div>
                    <h5> Titolo: {{ film.title }}</h5>
                </div>

                <!-- OVERWIEV FILM -->
                <div>
                    <p>{{ film.overview }}</p>
                </div>

                <!-- LENGUAGE FILM -->
                <div>
                    <span> Lingua: <img :src="Flaglanguage" :alt="film.original_language" /></span>
                </div>

                <!-- VOTE FILM -->
                <div>
                    <p>Voto:
                        <!-- STELLLE PIENE -->
                        <span v-for="index in getVote" :key="index">
                            <i class="fas fa-star starGold"></i>
                        </span>
                        <!-- STELLE VUOTE -->
                        <span v-for="index in 5 - getVote" :key="index">
                            <i class="far fa-star"></i>
                        </span> 
                    </p>
                </div>

            </div>

        </div>

    </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/generals.scss' as *;
@use '../../styles/partials/mixins' as *;

// STILE DELLE CARDS
.media-container{
    @include istruction_cards;
}

.media-container:hover .media{
    transform: rotateY(180deg);
}

</style>