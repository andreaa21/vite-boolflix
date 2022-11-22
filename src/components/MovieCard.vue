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
                console.log(lang);
            return `fi fi-`+lang
            }
    }
}
</script>

<template>
    <div class="x-card">
        <div>{{card.title}}</div>
        <div>{{card.original_title}}</div>
        <div>{{card.vote_average}}</div>
        <div class="flag">
            <span :class="getFlags(card.original_language)"></span>
        </div>    
    </div>
</template>



<style>

</style>