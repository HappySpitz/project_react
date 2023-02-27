import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MovieList.module.css'

const MoviesList = () => {
    const {movies, prev, next} = useSelector(state => state.movies);
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll({page: searchParams.get('page')}))
    }, [dispatch, searchParams])

    return (
        <div className={css.Main}>
            <h1>All Movies</h1>
            <div>
                <button className={css.Button} disabled={!prev} onClick={() => setSearchParams(searchParams => ({page:+searchParams.get('page')-1}))}>prev</button>
                <button className={css.Button} disabled={!next} onClick={() => setSearchParams(searchParams => ({page:+searchParams.get('page')+1}))}>next</button>
            </div>
            <div className={css.MovieList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};


export {
    MoviesList
};