<script>

import {store} from './data/store'
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'App',
  components:{
    AppHeader,
    AppMain
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getMovies(){
      axios.get(`${store.apiUrl}${store.searchValue}`)
        .then( result => {
          store.apiInfo = result.data;
          store.movieData = store.apiInfo.results
        })
        .catch( error => {
          console.log(error);
        })
    }
  }
  

}
</script>

<template>
  <AppHeader @startSearch="getMovies()"/>
  <AppMain />
</template>


<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/vars';

</style>