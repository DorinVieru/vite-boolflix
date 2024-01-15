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
    <div class="col-2 my-3 media-container">

        <div class="media">

            <!-- IMG SECTION CARD -->
            <div class="img-container">
                <img :src="imgUrl" alt="">
            </div>

            <div class="px-2">
                <!-- FILM TITLE -->
                <div>
                    <h4> Titolo originale: {{ film.title }}</h4>
                </div>

                <!-- ORIGINAL TILTLE FILM -->
                <div>
                    <h5> Titolo: {{ film.original_title }}</h5>
                </div>

                <!-- OVERWIEV FILM -->
                <div>
                    <p>{{ film.overview }}</p>
                </div>

                <!-- LENGUAGE FILM -->
                <div>
                    <span> Lingua: <img class="flag-img" :src="Flaglanguage" :alt="film.original_language" /></span>
                </div>

                <!-- VOTE FILM -->
                <div>
                    <p>Voto:
                        <!-- Stelle piene -->
                        <span v-for="index in getVote" :key="index">
                            <i class="fas fa-star starGold"></i>
                        </span>
                        <!-- Stelle vuote -->
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

// STILE DELLE CARDS
.media-container {
    height: 100%;
    width: 280px;

    h4,
    h5,
    p,
    span{
        color: white;
        margin-top: 7px;
    }

    .starGold {
            color: gold;
        }

    .media {
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: $header_bg;

        .img-container {
            height: 100%;
            width: 100%;
            color: black;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

}


</style>