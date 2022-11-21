<script>

import { store } from '../data/store'

export default {
    name: 'AppMain',
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
    <main>
        <div class="container">
            <div class="row my-4">
                <div class="col">
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
                        <li>{{item.original_name}}</li>
                        <li>
                            <span :class="getFlags(item.original_language)"></span>
                        </li>
                        <li>{{item.vote_average}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

// 

<style>

</style>