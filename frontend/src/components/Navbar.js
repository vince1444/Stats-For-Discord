import './NavBar.css';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';

function NavBar() {
    const [toggleNav, setToggleNav] = useState(false); // true/false only to set state
    
    const [FaBarStyle, setFaBarStyle] = useState({ color: 'white', size: 35, className: "icon" });
    
    let menu;
    if (toggleNav) {
        menu = <div className="menu menu-open">Menu</div>
    }
    
    return (
        // https://github.com/react-icons/react-icons
        <IconContext.Provider value={FaBarStyle}>
            <nav>
                <FaBars onClick={() => {
                    if (toggleNav) {
                        setToggleNav(false);
                        setFaBarStyle({ color: 'white', size: 35, className: "icon close" });
                    }
                    else {
                        setToggleNav(true);
                        setFaBarStyle({ color: 'white', size: 35, className: "icon open" });
                    }
                }} />
                { menu }
            </nav>
        </IconContext.Provider>
    )
}

// cool article about this:
// https://stackoverflow.com/questions/36426521/what-does-export-default-do-in-jsx/36426988
export default NavBar