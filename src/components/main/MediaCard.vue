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
        imgUrl() {
            return `${this.store.imgUrl}${this.film.poster_path}`
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
                <img :src="imgUrl" alt="">
            </div>

            <div>
                <!-- FILM TITLE -->
                <div>
                    <h4> {{ film.title }}</h4>
                </div>

                <!-- ORIGINAL TILTLE FILM -->
                <div>
                    <h5> {{ film.original_title }}</h5>
                </div>

                <!-- OVERWIEV FILM -->
                <div>
                    <p>{{ film.overview }}</p>
                </div>

                <!-- LENGUAGE FILM -->
                <div>
                    <p>{{ film.original_language }}</p>
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

    h4,
    h5,
    p{
        color: white;
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