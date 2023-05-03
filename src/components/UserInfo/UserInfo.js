import React, {useContext} from 'react';

import css from './UserInfo.module.css';
import { ThemeContext } from "../../contexts/ThemeContext";

const UserInfo = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className={css.UserInfo}>
           <div className={`${css.UserInfoText} ${isDarkMode ? css.light : css.dark}`}>U</div>
        </div>
    );
};

export {
    UserInfo
};