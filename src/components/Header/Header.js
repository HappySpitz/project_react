import React, { useRef, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import {UserInfo} from "../UserInfo/UserInfo";
import css from './Header.module.css';
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
    const searchRef = useRef();
    const navigate = useNavigate();
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <div className={`${css.Header} ${isDarkMode ? css.light : css.dark}`}>
            <NavLink to={'movies'}>Movies</NavLink>
            <div className={`${css.Search} ${isDarkMode ? css.light : css.dark}`}>
                <input
                    type='text'
                    className={`${css.SearchInput} ${isDarkMode ? css.light : css.dark}`}
                    placeholder={'search'}
                    ref={searchRef}
                />
                <button
                    className={`${css.ButtonSearch} ${isDarkMode ? css.light : css.dark}`}
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
            <DarkModeSwitch
                style={{ marginTop: '5px' }}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={70}
            />
        </div>
    );
};

export { Header };
