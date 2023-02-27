import React from 'react';
import {NavLink} from "react-router-dom";

import css from './GenreBadge.module.css'

const GenreBadge = ({genre}) => {
    const {id, name} = genre;

    return (
        <div className={css.Badge}>
            <NavLink to={`movies/filter_genre/${id}`} state={genre}>{name}</NavLink>
        </div>
    );
};

export {
    GenreBadge
};