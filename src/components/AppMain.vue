<script>

import { store } from '../data/store'

import MovieCard from './MovieCard.vue'

export default {
    name: 'AppMain',
    components:{
        MovieCard
    },
    data(){
        return{
            store
        }
    },

}
</script>


<template>
    <main>
        <div class="container">
            <div class="row my-4">
                <div
                v-if="!store.isPopular"
                class="col d-flex flex-wrap">
                    <MovieCard 
                    :card="card"
                    v-for="card in store.movieData"
                    :key="card.id"/>
                </div>
                <div
                v-if="!store.isPopular"
                class="col d-flex flex-wrap">
                    <MovieCard 
                    :card="card"
                    v-for="card in store.tvShowData"
                    :key="card.id"/>
                </div>
                <div
                v-else
                class="col d-flex flex-wrap">
                    <MovieCard 
                    :card="card"
                    v-for="card in store.popularData"
                    :key="card.id"/>
                </div>
            </div>
        </div>
    </main>
</template>

// 

<style>

</style>