import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from './images/logo.png'
import ModalSignin from './ModalSignin';
import Register from './Register';

function Navbar() {
    // setting mobile new
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    // setting Modal
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenLogin, setModalOpenLogin] = useState(false);
    console.log(click);


    // change nav color when scrolling
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 80) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);

  return (
    <>
      <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt='logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/category'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Category
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li className='nav-item'>
                <Link className='nav-links'
                    onClick={() => {
                        setModalOpenLogin(true);
                    }}>
                    Sign in
                </Link> 
            </li>

            <li className='nav-item'>

                <Link className='nav-links'
                    onClick={() => {
                        setModalOpen(true);
                    }}>
                    Sign up
                </Link>

            </li>
    
        </ul>

        {modalOpen && <Register setOpenModal={setModalOpen} />}
        {modalOpenLogin && <ModalSignin  setOpenModalLogin={setModalOpenLogin} />}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
