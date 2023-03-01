import React, {useRef} from 'react';
import {UserInfo} from "../UserInfo/UserInfo";
import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    const searchRef = useRef();
    const navigate = useNavigate();

    const changeTheme = (isChecked) => {
        if (isChecked) {
            document.body.setAttribute('dark', '');
        } else {
            document.body.removeAttribute('dark');
        }
    }

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
            <label>
                <input type="checkbox" onChange={changeTheme}/>
            </label>
        </div>
    );
};

export {
    Header
};