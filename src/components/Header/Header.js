import React, {useRef} from 'react';
import {UserInfo} from "../UserInfo/UserInfo";
import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    const searchRef = useRef();
    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <NavLink to={'movies'}>Movies</NavLink>
            <div className={css.Search}>
                <input type="text" className={css.SearchInput} placeholder={'search'} ref={searchRef}/>
                <button className={css.ButtonSearch} onClick={() => navigate('movies/search', {state: searchRef.current.value}, searchRef.current.value = "")}>search</button>
            </div>
            <div className={css.User}>
                <UserInfo/>
            </div>
                <div>
                    <input type="button" value="Toggle" id="toggle-theme" />
                </div>
        </div>
    );
};

export {
    Header
};