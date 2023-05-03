import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {ProductionCompany} from "../ProductionCompany/ProductionCompany";
import {ProductionCountry} from "../ProductionCountry/ProductionCountry";
import {StarsRating} from "../StarsRating/StarsRating";
import css from './MovieInfo.module.css';
import { ThemeContext } from "../../contexts/ThemeContext";

const MovieInfo = ({id}) => {
    const {movieById} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        dispatch(movieActions.getMovieById({id: id}))
    }, [dispatch, id])

    return (
        <div className={`${css.MovieInfo} ${isDarkMode ? css.light : css.dark}`}>
            {movieById &&
                <>
                    <div className={css.Poster}>{<PosterPreview poster_path={movieById.poster_path}/>}</div>
                    <div className={css.Text}>
                        <div>Budget: {movieById.budget}</div>
                        <div className={css.Genres}>Genres:
                            <span className={css.Genres}>{movieById.genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}</span>
                        </div>
                        <div>Original language: {movieById.original_language}</div>
                        <div>Original title: {movieById.original_title}</div>
                        <div>Overview: {movieById.overview}</div>
                        <div>Popularity: {movieById.popularity}</div>
                        <div>Release date: {movieById.release_date}</div>
                        <div>Title: {movieById.title}</div>
                        <div>Tagline: {movieById.tagline}</div>
                        <div>Production Companies:
                            <div className={css.Company}>{movieById.production_companies.map(company => <ProductionCompany key={company.id} company={company}/>)}</div>
                        </div>
                        <div>Production Countries:
                            <div>{movieById.production_countries.map(country => <ProductionCountry key={country.iso_3166_1} country={country}/>)}</div>
                        </div>
                        <div>Vote Average: {<StarsRating vote_average={movieById.vote_average}/>}</div>
                        <div>Vote Count: {movieById.vote_count}</div>
                    </div>
                </>
            }
        </div>
    );
};

export {
    MovieInfo
};