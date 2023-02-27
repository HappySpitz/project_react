import {apiService} from "./apiService";
import {movie, page, urls} from "../configs";

const movieService = {
    getMovies: (page) => apiService.get(`${urls.getAllMovie}${page}`),
    getMovieById: (id) => apiService.get(`${movie}/${id}`),
    search: (query, pageSearch) => apiService.get(`${urls.searchMovie}${query}&${page}${pageSearch}`),
}

export {
    movieService
}