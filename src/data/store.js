import { reactive } from "vue";

export const store = reactive({
    searchValue: '',
    movieData: [],
    tvShowData: [],
    popularApiUrl: 'https://api.themoviedb.org/3/movie/popular?api_key=e4a05594f63089f70f93bd86f2788f16',
    popularData: [],
    isPopular: true,
    imgUrl: 'https://image.tmdb.org/t/p/',
    imgSize: 'w342'
});