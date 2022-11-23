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
    <div
    v-if="card.backdrop_path"
    class="x-card">
        <div class="card-image">
            <img :src="`${store.imgUrl}${store.imgSize}${card.backdrop_path}`" :alt="card.title || card.name">
        </div>
        <div class="card-text">
            <div>
                <span class="me-1 fw-bold">Titolo:</span>
                {{card.title || card.name}}
            </div>
            <div
              v-if="card.original_title"
              >
                <span class="me-1 fw-bold">Titolo Originale:</span>
                {{card.original_title}}
            </div>
            <div class="star">
                <span class="me-1 fw-bold">Voto:</span>
                <span
                v-for="(index) in getStarRating(card.vote_average)"
                :key="index"
                >
                    <i class="fa-solid fa-star"></i>
                </span>
            </div>
            <div class="flag">
                <span class="me-2 fw-bold">Lingua:</span>
                <span :class="getFlags(card.original_language)"></span>
            </div>
            <div class="overview">
                <span class="me-2 fw-bold">Overview: </span>
                <p>{{card.overview}}</p>
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
            transform: scale(1.25);
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