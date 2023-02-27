const baseURL = 'https://api.themoviedb.org/3';

const page = 'page=';
const movie = '/movie';
const discover = '/discover'
const api_key = '48c104c87134c2859ffc41d677fa9575'

const urls = {
    getAllMovie: `${discover}${movie}?${page}`,
    searchMovie: `/search${movie}?query=`,
    genresList: `/genre${movie}/list`,
    filterGenre: `${discover}/${movie}?with_genres=`
}

export {
    baseURL,
    page,
    movie,
    urls,
    api_key
}