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
    <header class="d-flex justify-content-between align-items-center px-5">
            <div 
            @click="$emit('getHome')"
            class="logo d-none d-sm-block">
                <img src="/logo-boolflix.png" alt="logo">
            </div>
        <div class="input-area d-flex">
            <input
            v-model="store.searchValue"
            type="text" 
            placeholder="Search">
            <button 
            @click="$emit('startSearch')"
            class="btn btn-outline-danger ms-3">Search</button>
        </div>
    </header>
</template>



<style lang="scss" scoped>
    header{
        height: 70px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 997;
        background-color: black;
        .logo{
            width: 100px;
        }
    }
    input{
        text-indent: 4px;
        border: none;
    }
    .logo{
        cursor: pointer;
    }

</style>