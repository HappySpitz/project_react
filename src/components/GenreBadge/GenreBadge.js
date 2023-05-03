import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

import css from './GenreBadge.module.css'
import { ThemeContext } from "../../contexts/ThemeContext";

const GenreBadge = ({genre}) => {
    const {id, name} = genre;
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className={`${css.Badge} ${isDarkMode ? css.light : css.dark}`}>
            <NavLink to={`movies/filter_genre/${id}`} state={genre}>{name}</NavLink>
        </div>
    );
};

export {
    GenreBadge
};