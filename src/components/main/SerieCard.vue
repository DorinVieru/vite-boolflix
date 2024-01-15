<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../../store';

export default {
    name: "SerieCard",

    props: {
        serieTv: Object
    },

    data() {
        return {
            store
        }
    },
    computed: {
        // FUNZIONE PER LE FLAG
        Flaglanguage() {
            if (this.seriesTvArray.original_language.toUpperCase() == 'JA') {
                return `https://flagsapi.com/JP/flat/24.png`;
            }
            else if (this.seriesTvArray.original_language.toUpperCase() == 'KO') {
                return `https://flagsapi.com/KR/flat/24.png`;
            }
            else if (this.seriesTvArray.original_language.toUpperCase() == 'EN') {
                return `https://flagsapi.com/GB/flat/24.png`;
            }
            else if (this.seriesTvArray.original_language.toUpperCase() == 'ES') {
                return `https://flagsapi.com/ES/flat/24.png`;
            }
            else if (this.seriesTvArray.original_language.toUpperCase() == 'ZH') {
                return `https://flagsapi.com/CN/flat/24.png`;
            }
            else {
                return `https://flagsapi.com/${this.seriesTvArray.original_language.toUpperCase()}/flat/24.png`
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
                <!-- TV SERIES TITLE -->
                <div>
                    <h4> Titolo originale: {{ serieTv.title }}</h4>
                </div>

                <!-- ORIGINAL TILTLE TV SERIES -->
                <div>
                    <h5> Titolo: {{ serieTv.original_title }}</h5>
                </div>

                <!-- OVERWIEV TV SERIES -->
                <div>
                    <p>{{ serieTv.overview }}</p>
                </div>

                <!-- LENGUAGE TV SERIES -->
                <div>
                    <span> Lingua: <img class="flag-img" :src="Flaglanguage" :alt="serieTv.original_language" /></span>
                </div>

                <!-- VOTE TV SERIES -->
                <div>
                    <p>Voto: {{ serieTv.vote_average }} </p>
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