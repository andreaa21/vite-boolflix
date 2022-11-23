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
                }else if(lang === 'ja'){
                    return `fi fi-`+ 'jp'
                }else if(lang === 'uk'){
                    return `fi fi-`+ 'gb'
                }
            return `fi fi-`+lang
            },
        getStarRating(num){
            const rating = Math.round(num) / 2;
            return Math.round(rating);
        },
        getActive(){
            store.isActive = !store.isActive;
            console.log('----isActive--- ' + store.isActive);
        },
        removeActive(){
            store.isActive = false;
            console.log('----isActive--- ' + store.isActive);
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
            <ul>
                <li>
                    <span class="me-1 fw-bold">Title:</span>
                    {{card.title || card.name}}
                </li>
                <li
                v-if="card.original_title"
                >
                    <span class="me-1 fw-bold">Original Title:</span>
                    {{card.original_title}}
                </li>
                <li>    
                    <span class="me-1 fw-bold">Rating:</span>
                    <span
                    v-for="(index) in getStarRating(card.vote_average)"
                    :key="index"
                    >
                        <i class="fa-solid fa-star"></i>
                    </span>
                </li>
                <li>
                    <span class="me-2 fw-bold">Language:</span>
                    <i :class="getFlags(card.original_language)"></i>
                </li>
                <li class="overview">
                    <span class="me-2 fw-bold">Overview: </span>
                    <p>{{card.overview}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .x-card{
        min-width:  200px;
        flex-basis: 20%;
        padding: 2rem .3rem;
        transition: all .3s;
        cursor: pointer;
        &:hover{
            transform: scale(1.2);
            z-index: 998;
            max-height: 200px;
        }
        &:hover .card-image{
            width: 250px;
            img{
                width: 100%;
            }
        }
        &:hover .card-text{
            display: flex;
            align-items: center;
            justify-content: start;
            padding: 1rem;
            background-color: black;
            width: 250px;
        }
        .card-text{
            display: none;
            ul{
                list-style: none;
                margin-left: -20px;
                li{
                    margin: .5rem 0;
                }
            }
        }
        .fa-star{
            color: rgb(233, 200, 12);
        }
    }
    .overview p{
        max-height: 100px;
        overflow-y: scroll;
        font-size: .7rem;
    }
</style>