<script>

import {store} from './data/store';
import axios from 'axios';

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
    getEverything(){
    store.isPopular = false;
    axios.all([
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e4a05594f63089f70f93bd86f2788f16&query=${store.searchValue}`),
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=e4a05594f63089f70f93bd86f2788f16&query=${store.searchValue}`)
    ])    
      .then(axios.spread((result1, result2) => {
          // risultato prima chiamata (film)
          store.movieData = result1.data.results;
          // risultato seconda chiamata (tv)
          store.tvShowData = result2.data.results;
        }));
    },
    getPopularMovies(){
      axios.get(store.popularMovieApiUrl)
        .then( result => {
          store.popularMovieData = result.data.results
          console.log(store.popularMovieData);
        })
    },
    getPopularTvshows(){
      axios.get(store.popularTvApiUrl)
        .then( result => {
          store.popularTvData = result.data.results
        })
    }
  },
  mounted(){
    this.getPopularMovies()
    this.getPopularTvshows()
  }
}
</script>

<template>
  <AppHeader @getHome="this.getPopularMovies()" @startSearch="this.getEverything()" />
  <AppMain />
</template>


<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/vars';



</style>