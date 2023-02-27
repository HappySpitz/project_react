import React from 'react';

const PosterPreview = ({poster_path}) => {
    return (
        <div>
            {
              poster_path && <img src={"https://image.tmdb.org/t/p/w500/"+poster_path} alt="poster"/>
            }
        </div>
    );
};

export {
    PosterPreview
};