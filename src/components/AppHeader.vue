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
    <div class="container p-5">
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
        <div class="row my-4">
            <div class="col">
                <ul
                v-for="item in store.movieData"
                :key="item.id"
                >   
                    <li>{{item.title}}</li>
                    <li>{{item.original_title}}</li>
                    <li>{{item.original_language}}</li>
                    <li>{{item.vote_average}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    input{
        text-indent: 4px;
    }
</style>