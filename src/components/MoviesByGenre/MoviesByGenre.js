import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {genreActions} from "../../redux";
import css from "../MoviesList/MovieList.module.css";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import { ThemeContext } from "../../contexts/ThemeContext";

const MoviesByGenre = ({state}) => {
    localStorage.setItem('id', `${state.id}`)

    const {movies, prev, next} = useSelector(state => state.genres);
    const [searchParams, setSearchParams] = useSearchParams({genre_key: `${localStorage.getItem('id')}`, page: "1"});
    const dispatch = useDispatch();
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        dispatch(genreActions.filterMovieGenres({genre_key: searchParams.get('genre_key'), page: searchParams.get('page')}))
    }, [dispatch, searchParams])

    return (
        <div className={`${css.Main} ${isDarkMode ? css.light : css.dark}`}>
            <h1 className={isDarkMode ? css.light : css.dark}>Movies {state.name}</h1>
            <div>
                <button className={`${css.Button} ${isDarkMode ? css.light : css.dark}`} disabled={!prev} onClick={() => setSearchParams(searchParams => ({genre_key: +searchParams.get('genre_key'), page:+searchParams.get('page')-1}))}>prev</button>
                <button className={`${css.Button} ${isDarkMode ? css.light : css.dark}`} disabled={!next} onClick={() => setSearchParams(searchParams => ({genre_key: +searchParams.get('genre_key'), page:+searchParams.get('page')+1}))}>next</button>
            </div>
            <div className={`${css.MovieList} ${isDarkMode ? css.light : css.dark}`}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {
    MoviesByGenre
}