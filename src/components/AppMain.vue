<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store';

import CardContainer from './main/CardContainer.vue';

export default {
    components: {
        CardContainer,
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
  <main class="container-fluid">
        <CardContainer />
    </main>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;

main{
    background-color: $main_bg;
    padding-bottom: 70px;
}
</style>