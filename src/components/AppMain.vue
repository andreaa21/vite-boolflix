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
                <div class="col-3 debug">
                    <MovieCard 
                    :card="card"
                    v-for="card in store.movieData"
                    :key="card.id"/>
                </div>
                <!-- <div class="col">
                    <div class="py-3">Movies</div>
                    <ul
                    v-for="item in store.movieData"
                    :key="item.id"
                    >   
                        <li>{{item.title}}</li>
                        <li>{{item.original_title}}</li>
                        <li>
                            <span :class="getFlags(item.original_language)"></span>
                        </li>
                        <li>{{item.vote_average}}</li>
                    </ul>
                </div>
                <div class="col">
                    <div class="py-3">Tv shows</div>
                    <ul
                    v-for="item in store.tvShowData"
                    :key="item.id"
                    >   
                        <li>{{item.name}}</li>
                        <li>
                            <span :class="getFlags(item.original_language)"></span>
                        </li>
                        <li>{{item.vote_average}}</li>
                    </ul>
                </div> -->
            </div>
        </div>
    </main>
</template>

// 

<style>

</style>