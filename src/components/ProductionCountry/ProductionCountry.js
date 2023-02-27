import React from 'react';

const ProductionCountry = ({country}) => {
    const {iso_3166_1, name} = country;
    
    return (
        <div>
            <div>iso_3166_1: {iso_3166_1}</div>
            <div>Country name: {name}</div>
        </div>
    );
};

export {
    ProductionCountry
};