import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from "../MoviesList/MovieList.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const SearchMovies = ({state}) => {
    const {movies, prev, next} = useSelector(state => state.movies);
    const [searchParams, setSearchParams] = useSearchParams({page: '1', query: `${state}`});
    const dispatch = useDispatch();
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        dispatch(movieActions.searchMovies({query: searchParams.get('query'), page: searchParams.get('page')}));
    }, [dispatch, searchParams])

    return (
        <div className={`${css.Main} ${isDarkMode ? css.light : css.dark}`}>
                <h1 className={isDarkMode ? css.light : css.dark}>Movies by search "{searchParams.get('query')}"</h1>
            <div>
                <button className={`${css.Button} ${isDarkMode ? css.light : css.dark}`} disabled={!prev} onClick={() => setSearchParams(searchParams => ({query: searchParams.get('query'), page:+searchParams.get('page')-1}))}>prev</button>
                <button className={`${css.Button} ${isDarkMode ? css.light : css.dark}`} disabled={!next} onClick={() => setSearchParams(searchParams => ({query: searchParams.get('query'), page:+searchParams.get('page')+1}))}>next</button>
            </div>
            <div className={`${css.MovieList} ${isDarkMode ? css.light : css.dark}`}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {
    SearchMovies
}