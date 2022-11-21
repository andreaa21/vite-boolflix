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
    <div class="container debug p-5">
        <input
        v-model="store.searchValue"
        type="text" 
        placeholder="Search">
        <button 
        @click="$emit('startSearch')"
        class="btn btn-primary ms-3">Search</button>

        <!-- 
        Titolo
        Titolo Originale
        Lingua
        Voto
        -->

    </div>
</template>



<style lang="scss" scoped>
    input{
        text-indent: 4px;
    }
</style>