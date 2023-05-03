import React, {useContext, useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {GenreBadge, Header} from "../components";
import {genreActions} from "../redux";
import css from './MainLayout.module.css';
import { ThemeContext } from "../contexts/ThemeContext";

const MainLayout = () => {
    const {genres, errors, loading} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        dispatch(genreActions.getAllGenres())
    }, [dispatch])

    return (
        <div className={`${css.MainLayout} ${isDarkMode ? css.light : css.dark}`}>
            {errors && JSON.stringify(errors)}
            {loading&& <h1>Loading..............................</h1>}
            <Header/>
            <div className={`${css.Genres} ${isDarkMode ? css.light : css.dark}`}>
                {genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
            </div>
            <div className={`${css.Info} ${isDarkMode ? css.light : css.dark}`}>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayout
};