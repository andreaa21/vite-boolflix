<script>

import { store } from '../data/store'

export default {
    name: 'AppMain',
    data(){
        return{
            store
        }
    }
}
</script>


<template>
  <div class="container">
    <div class="row my-4">
            <div class="col">
                <ul
                v-for="item in store.movieData"
                :key="item.id"
                >   
                    <li>{{item.title}}</li>
                    <li>{{item.original_title}}</li>
                    <li>{{item.original_language}}</li>
                    <li>{{item.vote_average}}</li>
                </ul>
            </div>
        </div>
  </div>
</template>



<style>

</style>