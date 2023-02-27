import React from 'react';
import {useLocation} from "react-router-dom";

import {MoviesByGenre} from "../../components";

const FilterGenreMoviesPage = () => {
    const {state} = useLocation();

    return (
        <div>
            <MoviesByGenre state={state}/>
        </div>
    );
};

export {
    FilterGenreMoviesPage
};