import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import {UserInfo} from "../UserInfo/UserInfo";
import css from './Header.module.css';

const Header = () => {
    const searchRef = useRef();
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark');
    };

    return (
        <div className={css.Header}>
            <NavLink to={'movies'}>Movies</NavLink>
            <div className={css.Search}>
                <input
                    type='text'
                    className={css.SearchInput}
                    placeholder={'search'}
                    ref={searchRef}
                />
                <button
                    className={css.ButtonSearch}
                    onClick={() =>
                        navigate('movies/search', {
                            state: searchRef.current.value,
                        })
                    }
                >
                    search
                </button>
            </div>
            <div className={css.User}>
                <UserInfo/>
            </div>
            <label className='switch'>
                <input type='checkbox' onChange={toggleDarkMode} />
                <span className='slider round'></span>
            </label>
        </div>
    );
};

export { Header };
