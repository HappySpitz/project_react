import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MovieListCard.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
import { ThemeContext } from "../../contexts/ThemeContext";

const MoviesListCard = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie;
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className={`${css.MovieListCard} ${isDarkMode ? css.light : css.dark}`}>
            <div>
                {<PosterPreview poster_path={poster_path}/>}
            </div>
            <div className={css.TitleMovie}>{title}</div>
            <StarsRating vote_average={vote_average}/>
            <NavLink to={id.toString()}>Movie Info</NavLink>
        </div>
    );
};

export {
    MoviesListCard
};