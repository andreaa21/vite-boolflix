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
    <header>
        <div class="container d-flex justify-content-between align-items-center p-2">
        <div class="logo">
            <h1>
                boolflix
            </h1>
        </div>
        <div class="input-area d-flex justify-content-end">
            <input
            v-model="store.searchValue"
            type="text" 
            placeholder="Search">
            <button 
            @click="$emit('startSearch')"
            class="btn btn-primary ms-3">Search</button>
        </div>


    </div>
    </header>
</template>



<style lang="scss" scoped>
    input{
        text-indent: 4px;
    }
    h1{
        text-transform: uppercase;
        color: rgb(173, 5, 5);
        font-size: 1.5rem;
    }
</style>