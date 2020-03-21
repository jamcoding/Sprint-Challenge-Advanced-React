import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleColor = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className="navbar">
            <div className="toggle-mode">
                <button 
                    onClick={toggleColor}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                >
                Light/Dark Mode
                </button>
            </div>
        </nav>
    )
}

export default Navbar;
