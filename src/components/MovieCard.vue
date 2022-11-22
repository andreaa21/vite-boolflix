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
    <div class="x-card">
        <div class="card-image">
            <img v-if="card.backdrop_path" :src="`${store.imgUrl}${store.imgSize}${card.backdrop_path}`" alt="">
            <span v-else>no image available</span>
        </div>
        <div class="card-text">
            <div>{{card.title || card.name}}</div>
            <div
              v-if="card.original_title"
              >{{card.original_title}}</div>
            <div class="star">
                <span
                v-for="(index) in getStarRating(card.vote_average)"
                :key="index"
                >
                    <i class="fa-solid fa-star"></i>
                </span>
            </div>
            <div class="flag">
                <span :class="getFlags(card.original_language)"></span>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .x-card{
        // width:  300px;

        flex-basis: 20%;
        display: inline-block;
        padding: 2rem .3rem;
        transition: all .3s;
        &:hover{
            transform: scale(1.2);
            z-index: 998;
            margin-bottom: -300px;
            max-height: 200px;
           
        }
        &:hover .card-text{
            display: block;
            padding: 1rem;
            background-color: black;
        }
        .card-text{
            display: none;
        }
        .fa-star{
            color: rgb(233, 200, 12);
        }
    }
</style>