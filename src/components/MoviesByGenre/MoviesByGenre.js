import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {genreActions} from "../../redux";
import css from "../MoviesList/MovieList.module.css";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesByGenre = ({state}) => {
    const {movies, prev, next} = useSelector(state => state.genres);
    const [searchParams, setSearchParams] = useSearchParams({genre_key: `${state.id}`, page: "1"});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.filterMovieGenres({genre_key: searchParams.get('genre_key'), page: searchParams.get('page')}))
    }, [dispatch, searchParams])

    return (
        <div className={css.Main}>
            <h1>Movies {state.name}</h1>
            <div>
                <button className={css.Button} disabled={!prev} onClick={() => setSearchParams(searchParams => ({genre_key: +searchParams.get('genre_key'), page:+searchParams.get('page')-1}))}>prev</button>
                <button className={css.Button} disabled={!next} onClick={() => setSearchParams(searchParams => ({genre_key: +searchParams.get('genre_key'), page:+searchParams.get('page')+1}))}>next</button>
            </div>
            <div className={css.MovieList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {
    MoviesByGenre
}