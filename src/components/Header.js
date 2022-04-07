import React, { useState } from 'react'
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import '../css/Header.css'
// import {Button, BottonToolBar} from 'react-bootstrap';
// import {addModal} from './components/addModal';



function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="#">Univ E-learning</a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                    <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#Home" className='menu-header'>Home</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#Category" className='menu-header'>Category</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#About" className='menu-header'>About us</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#Signin" className='Signin-header'>Sign in</a>
                        </li>

                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header