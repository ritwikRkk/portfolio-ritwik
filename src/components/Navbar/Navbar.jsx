import React, { useState, useEffect, useRef } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const Navbar = (props) => {

    const location = useLocation();
    // console.log(props);

    const [mobileMenu, setMobileMenu] = useState(false);
    let menuRef = useRef();
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    useEffect(() => {
        // block scrolling when mobile menu is active
        if (mobileMenu) {
            document.body.style.overflowY = "hidden";
        }
        return () => {
            document.body.style.overflowY = "";
        }
    }, [mobileMenu])

    const hideMobileMenu = () => {
        setMobileMenu(false);
    }

    useEffect(() => {
        // close mobile menu when clicked outside of it
        let closeMobileMenu = (event) => {
            if (!menuRef.current.contains(event.target) && event.target.id !== "bar") {
                hideMobileMenu();
            }
        }
        document.addEventListener("click", closeMobileMenu);
    }, [])

    useEffect(() => {
    //   console.log(location.pathname);
      window.scrollTo(0, 0);
    }, [location])

    const handleHome = () => {
        props.click();
        hideMobileMenu();
    }
    const handleProject = () => {
        props.handleClickProject();
        hideMobileMenu();
    }
    const handleContact = () => {
        props.handleClickContact();
        hideMobileMenu();
    }
    const handleServices = () => {
        props.handleClickServices();
        hideMobileMenu();
    }

    return (
        <>
            <div className="navbar_container">
                <div className="navbar">
                    <div className="nav_logo">
                        <Link className="site_logo" to="/">Ritwik's Portfolio</Link>
                    </div>
                    <div className={`nav_wrapper ${mobileMenu ? "active" : ""}`} ref={menuRef}>
                        <div className="nav_right">
                            <div className="nav_items">
                                <Link className="nav_links links" to="/" onClick={() => hideMobileMenu()}> Home </Link>
                            </div>
                            <div className="nav_items">
                                {/* <Link className="nav_links links" to="" onClick={handleHome} >Know Me</Link> */}
                                <span className="nav_links links" to="" onClick={handleHome} >Know Me</span>
                            </div>
                            <div className="nav_items">
                                {/* <Link className="nav_links links" to="" onClick={handleServices}> Services </Link> */}
                                <span className="nav_links links" to="" onClick={handleServices}> Services </span>
                            </div>
                            <div className="nav_items">
                                {/* <Link className="nav_links links" to="" onClick={handleProject}> Projects </Link> */}
                                <span className="nav_links links" to="" onClick={handleProject}> Projects </span>
                            </div>
                            <div className="nav_items">
                                {/* <Link className="nav_links links" to="#" onClick={handleContact}> Contact Me </Link> */}
                                <span className="nav_links links" to="#" onClick={handleContact}> Contact Me </span>
                            </div>
                        </div>

                    </div>
                    <div className={`navbar__toggle ${mobileMenu ? "active" : ""}`} id="bar" onClick={() => toggleMobileMenu()}>
                        <span className="bar" id="bar"></span>
                        <span className="bar" id="bar"></span>
                        <span className="bar" id="bar"></span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar