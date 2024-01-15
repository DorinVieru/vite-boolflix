<!-- SEZIONE JS SCRIPT -->
<script>

// IMPORTO LE COMPONTENTI
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    
  },
  created() {
    
  },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <div>
      <!-- HEADER -->
      <AppHeader />
      
      <!-- MAIN -->
      <AppMain />
  </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/generals.scss' as *;
</style>