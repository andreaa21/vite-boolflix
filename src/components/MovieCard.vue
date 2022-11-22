<script>

import {store} from '../data/store'

export default {
    name: 'MovieCard',
    props:{
        card: Object
    },
    data(){
        return{
            store
        }
    },
    methods:{
        getFlags(lang){
            if(lang === 'en'){
                return `fi fi-`+ 'us'
                }
            return `fi fi-`+lang
            },
        getStarRating(num){
            const rating = Math.round(num) / 2;
            return Math.round(rating);
        }
    }
}
</script>

<template>
    <div class="x-card debug">
        <div class="card-image">
            <img :src="`${store.imgUrl}${store.imgSize}${card.backdrop_path}`" alt="">
        </div>
        <div>{{card.title || card.name}}</div>
        <div
        v-if="card.original_title"
        >{{card.original_title}}</div>
        <div>{{getStarRating(card.vote_average)}}</div>
        <div class="flag">
            <span :class="getFlags(card.original_language)"></span>
        </div>    
    </div>
</template>



<style lang="scss" scoped>
    .x-card{
        width:  300px;
        height: 300px;;
        margin: 1rem;
    }
</style>