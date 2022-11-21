<script>

import {store} from './data/store'
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components:{
    AppHeader
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getMovies(){
      axios.get(store.apiUrl)
        .then( result => {
          store.apiInfo = result.data;
          store.movieData = store.apiInfo.results
          console.log(store.movieData);
        })
        .catch( error =>{
          console.log(error);
        })
    }
  }
  

}
</script>

<template>
  <AppHeader @startSearch="getMovies()"/>
</template>


<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/vars';

</style>