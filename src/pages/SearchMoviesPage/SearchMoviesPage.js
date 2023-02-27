import React from 'react';
import {useLocation} from "react-router-dom";

import {SearchMovies} from "../../components";

const SearchMoviesPage = () => {
    const {state} = useLocation();

    return (
        <div>
            <SearchMovies state={state}/>
        </div>
    );
};

export {
    SearchMoviesPage
}