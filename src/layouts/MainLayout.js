import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {GenreBadge, Header} from "../components";
import {genreActions} from "../redux";
import css from './MainLayout.module.css'

const MainLayout = () => {
    const {genres, errors, loading} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAllGenres())
    }, [dispatch])

    return (
        <div className={css.MainLayout}>
            {errors && JSON.stringify(errors)}
            {loading&& <h1>Loading..............................</h1>}
            <Header/>
            <div className={css.Genres}>
                {genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
            </div>
            <div className={css.Info}>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayout
};