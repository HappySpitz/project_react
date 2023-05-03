import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({
    isDarkMode: false,
    toggleDarkMode: () => {}
});

const ThemeProvider = ({children}) => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        setDarkMode(true);
    }
}, [])

const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setDarkMode(newMode);
    localStorage.setItem('mode', newMode ? 'dark' : 'light');
};

return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
);
};

export {
    ThemeContext,
    ThemeProvider
}