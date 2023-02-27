import React from 'react';
import {NavLink} from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MovieListCard.module.css'
import {StarsRating} from "../StarsRating/StarsRating";

const MoviesListCard = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie;

    return (
        <div className={css.MovieListCard}>
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