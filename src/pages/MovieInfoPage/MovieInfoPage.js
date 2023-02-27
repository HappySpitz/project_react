import React from 'react';
import {useParams} from "react-router-dom";

import {MovieInfo} from "../../components";

const MovieInfoPage = () => {
    const {id} = useParams();

    return (
        <div>
            <MovieInfo id={id}/>
        </div>
    );
}

export {
    MovieInfoPage
};