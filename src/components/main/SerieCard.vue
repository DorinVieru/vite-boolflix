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
            if (this.serieTv.original_language.toUpperCase() == 'JA') {
                return `https://flagsapi.com/JP/flat/24.png`;
            }
            else if (this.serieTv.original_language.toUpperCase() == 'KO') {
                return `https://flagsapi.com/KR/flat/24.png`;
            }
            else if (this.serieTv.original_language.toUpperCase() == 'EN') {
                return `https://flagsapi.com/GB/flat/24.png`;
            }
            else if (this.serieTv.original_language.toUpperCase() == 'ES') {
                return `https://flagsapi.com/ES/flat/24.png`;
            }
            else if (this.serieTv.original_language.toUpperCase() == 'ZH') {
                return `https://flagsapi.com/CN/flat/24.png`;
            }
            else {
                return `https://flagsapi.com/${this.serieTv.original_language.toUpperCase()}/flat/24.png`
            }

        },

        // FUNZIONE PER IMG
        imgUrl() {
            return `${this.store.imgUrl}${this.serieTv.poster_path}`
        },

        // FUNZIONE PER LE STELLE PER LA VALUTAZIONE
        getVote() {
            let voteRate = Math.ceil(this.serieTv.vote_average / 2)
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
                <!-- TV SERIES TITLE -->
                <div>
                    <h4> Titolo originale: {{ serieTv.original_name }}</h4>
                </div>

                <!-- ORIGINAL TILTLE TV SERIES -->
                <div>
                    <h5> Titolo: {{ serieTv.name }}</h5>
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
@use '../../styles/partials/mixins' as *;

// STILE DELLE CARDS
.media-container{
    @include istruction_cards;
}

</style>