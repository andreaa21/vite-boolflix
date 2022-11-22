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
            <div
            v-if="!store.isPopular"
            class="row d-flex flex-column">
                <div class="col">
                    <div
                    v-if="store.movieData.length > 0"
                    class="title">
                        <h2>Movies</h2>
                    </div>
                </div>
                <div
                class="col d-flex flex-wrap">
                    <MovieCard 
                    :card="card"
                    v-for="card in store.movieData"
                    :key="card.id"/>
                </div>
            </div>
            <div
            v-if="!store.isPopular"
            class="row d-flex flex-column">
            <div class="col">
                    <div
                    v-if="store.tvShowData.length > 0"
                    class="title">
                        <h2>Tv Shows</h2>
                    </div>
                </div>
                <div
                class="col d-flex flex-wrap">
                    <MovieCard 
                    :card="card"
                    v-for="card in store.tvShowData"
                    :key="card.id"/>
                </div>
            </div>
            <div 
            v-else
            class="row d-flex flex-column">
                <div class="col">
                    <div class="title">
                        <h2>Most Popular</h2>
                    </div>
                </div>
                <div
                class="col d-flex flex-wrap card-wrapper">
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

<style lang="scss" scoped>
    main{
        margin-top: 70px;

    }
    h2{
        margin: 1rem .5rem;
    }
</style>