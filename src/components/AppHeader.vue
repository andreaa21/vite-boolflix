<script>

import {store} from '../data/store'

export default {
    name: 'AppHeader',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <header class="d-flex">
        <div class="container d-flex justify-content-between align-items-center p-2">
        <div class="logo">
            <img src="/logo-boolflix.png" alt="logo">
        </div>
        <div class="input-area d-flex justify-content-end">
            <input
            v-model="store.searchValue"
            type="text" 
            placeholder="Search">
            <button 
            @click="$emit('startSearch')"
            class="btn btn-outline-danger ms-3">Search</button>
        </div>


    </div>
    </header>
</template>



<style lang="scss" scoped>
    header{
        background-color: grey; // da cambiare
        height: 70px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
        .logo{
            width: 100px;
        }
    }
    input{
        text-indent: 4px;
        border: none;
    }

</style>