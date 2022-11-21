import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=e4a05594f63089f70f93bd86f2788f16&query=inception',
    movieData: [],
    apiInfo: {},
    searchValue: ''
});