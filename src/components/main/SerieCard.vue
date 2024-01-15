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
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <div>
    
  </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/generals.scss' as *;
</style>