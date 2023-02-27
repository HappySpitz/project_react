import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({vote_average}) => {
    return (
        <div>
            <StarRatings rating={vote_average} starRatedColor={"yellow"} numberOfStars={10} name={'rating'} starDimension={'20px'} starSpacing={'5px'}/>
        </div>
    );
}

export {
    StarsRating
};