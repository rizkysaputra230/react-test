import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { DiCodeBadge } from 'react-icons/di';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  /**
   * find out what is it, useEffect with empty array ? 
   */
  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <DiCodeBadge className='navbar-icon' />
              Rizky
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Users
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Jobs'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Jobs
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Salary'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Salary
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Login'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Register'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;