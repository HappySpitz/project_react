import {apiService} from "./apiService";
import {page, urls} from "../configs";

const genreService = {
    getAllGenresList: () => apiService.get(urls.genresList),
    filterGenres: (genre_key, pageFilter) => apiService.get(`${urls.filterGenre}${genre_key}&${page}${pageFilter}`)
}

export {
    genreService
}