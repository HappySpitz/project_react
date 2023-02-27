import React from 'react';

import css from './Company.module.css'

const ProductionCompany = ({company}) => {
    const {name, logo_path} = company;
    
    return (
        <div className={css.ProductionCompany}>
            <div>{name}</div>
            <div>
                {logo_path && <img src={"https://image.tmdb.org/t/p/w500/"+logo_path} alt="logo"/>}
            </div>
        </div>
    );
};

export {
    ProductionCompany
};