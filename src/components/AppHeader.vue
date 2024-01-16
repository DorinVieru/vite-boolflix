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
                    <input type="text" class="input-header" placeholder="Effettua una ricerca" @keyup.enter="$emit('media_search')" v-model="store.search">
                    <button type="button" @click="$emit('media_search')" class="btn-header mx-1">Cerca</button>
                    <i class="fa-solid fa-bell ms-4"></i>
                    <span class="badge my-bdg">99+</span>
                    <i class="fa-solid fa-user mx-3"></i>
                    <span class="position-absolute translate-middle border border-light rounded-circle profile-badge">
                        <span class="visually-hidden">New alerts</span>
                    </span>
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
    background-color: $my_black;

    .fa-solid{
        color: white;
        font-size: 25px;
        cursor: pointer;
    }

    .my-bdg{
        background-color: $red_button;
        border-radius: 50%;
        position: relative;
        top: -10px;
        right: 2px;
        padding: 5px;
        font-size: 11px;
        cursor: pointer;
    }

    .profile-badge{
        background-color: $red_button;
        top: 33px;
        right: 37px;
        padding: 5px;
    }

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

        .input-header {
            height: 30px;
            width: 250px;
            padding: 18px 15px;
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