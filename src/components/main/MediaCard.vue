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
                
            </div>

            <div>
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
                    <p>Voto: {{ film.vote_average }} </p>
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

    .flag-img,
    h4,
    h5,
    p,
    span{
        color: white;
        margin-top: 7px;
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