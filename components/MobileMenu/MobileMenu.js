import React, { Fragment, useState, useEffect, useRef } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";


const MobileMenu = ({ menu, depth = 0 }) => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);
    const mobileMenuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event) => {
        // Check if the menu is active and the click is outside both the menu and toggle button
        if (
            menuActive && 
            mobileMenuRef.current && 
            !mobileMenuRef.current.contains(event.target) &&
            toggleButtonRef.current && 
            !toggleButtonRef.current.contains(event.target)
        ) {
            setMenuState(false);
        }
        };

        // Add event listener when menu is active
        if (menuActive) {
        document.addEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = 'hidden';
        document.body.classList.add('menu-open');
        } else {
        document.body.style.overflow = 'unset';
        document.body.classList.remove('menu-open');
        }

        // Cleanup function
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = 'unset';
        document.body.classList.remove('menu-open');
        };
    }, [menuActive]);

    const ClickHandler = () => {
        setMenuState(false);
    }

    return (
        <div>
        {/* Overlay for background blur and click outside */}
        {menuActive && <div className="menu-overlay"></div>}
        
        <div 
          ref={mobileMenuRef}
          className={`mobileMenu ${menuActive ? "show" : ""}`}
        >
          <div className="menu-close">
            <div className="clox" onClick={() => setMenuState(!menuActive)}>
              <i className="icon-icon_close"></i>
            </div>
          </div>
          <div className="menu-scroll-container">
          <ul className="responsivemenu">
                    {menu.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.subMenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'ti-angle-up' : 'ti-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.subMenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.href}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.href}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>
                </div>
            </div>

            <div 
        ref={toggleButtonRef}
        className="showmenu mobail-menu" 
        onClick={() => setMenuState(!menuActive)}
      >
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
    )
}

export default MobileMenu;