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
            }
    }
}
</script>

<template>
    <div class="x-card debug d-flex flex-column justify-content-around">
        <div>{{card.title}}</div>
        <div>{{card.original_title}}</div>
        <div>{{card.vote_average}}</div>
        <div class="flag">
            <span :class="getFlags(card.original_language)"></span>
        </div>    
    </div>
</template>



<style lang="scss" scoped>
    .x-card{
        width:200px;
        height: 200px;;
        margin: 1rem;
    }
</style>