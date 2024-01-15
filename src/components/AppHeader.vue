<!-- SEZIONE JS SCRIPT -->
<script>

import { store } from '../store.js';

export default {
    name: "Header",

    data() {
        return {
            store
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <header class="container-fluid">
        <div class="row py-3">
            <!-- HEADER SX -->
            <div class="col-6">
                <h1 class="title-header ps-4">BOOLFLIX</h1>
            </div>
            <!-- HEADER DX -->
            <div class="col-6">
                <div class="header-dx pe-4 d-flex align-items-center justify-content-end">
                    <input type="text" class="src-header" placeholder="Effettua una ricerca" v-model="store.search">
                    <button type="button" @click="$emit('perform_search')" class="btn-header mx-4 ">Cerca</button>
                </div>
            </div>
        </div>
    </header>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;


header {
    background-color: $header_bg;

    .title-header{
        color: $red_button;
    }

    .header-dx {
        height: 100%;

        .btn-header {
            background-color: $red_button;
            padding: 5px 15px;
            border: none;
            color: white;
            font-weight: bold;
            border-radius: 15px;
            
            &:hover {
            background-color: white;
            color: $red_button;
            }
        }

        .src-header {
            height: 30px;
            width: 250px;
            padding: 20px 15px;
            margin-right: 5px;
            border: none;
            color: white;
            border-radius: 15px;
            background-color: #564d4d;

            &:focus {
                outline: none;
            }

            &::placeholder {
                color: rgb(216, 216, 216);
            }
        }

    }
}
</style>