import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, NotFoundPage, MovieInfoPage, SearchMoviesPage, FilterGenreMoviesPage} from "./pages";
import {ThemeProvider} from './contexts';

const App = () => {
    return (
        <ThemeProvider>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/:id'} element={<MovieInfoPage/>}/>
                    <Route path={'movies/search/:id'} element={<MovieInfoPage/>}/>
                    <Route path={'movies/filter_genre/:id/:id'} element={<MovieInfoPage/>}/>
                    <Route path={'movies/search/:id/filter_genre/:id'} element={<FilterGenreMoviesPage/>}/>
                    <Route path={'movies/:id/filter_genre/:id/:id'} element={<MovieInfoPage/>}/>
                    <Route path={'movies/search/:id/filter_genre/:id/:id'} element={<MovieInfoPage/>}/>
                    <Route path={'movies/search'} element={<SearchMoviesPage/>}/>
                    <Route path={'movies/filter_genre/:id'} element={<FilterGenreMoviesPage/>}/>
                    <Route path={'movies/:id/movies/filter_genre/:id'} element={<FilterGenreMoviesPage/>}/>
                    <Route path={'search/:id/movies/filter_genre/:id'} element={<FilterGenreMoviesPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </ThemeProvider>
    );
};

export {
    App
}