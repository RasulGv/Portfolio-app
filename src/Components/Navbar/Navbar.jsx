import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/R.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MdOutlineMenuOpen } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    setMenuVisible(true);
  }

  const closeMenu = () => {
    setMenuVisible(false);
  }

  return (
    <div className='navbar'>
      <AnchorLink className='anchor-link' href='#home'>
        <img src={logo} alt="logo" />
      </AnchorLink>
      <MdOutlineMenuOpen onClick={openMenu} className='nav-mob-open' />
      <ul 
        className={`nav-menu ${menuVisible ? 'open' : 'closed'}`}  
      >
        <FaWindowClose onClick={closeMenu} className='nav-mob-close' />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p className={menu === 'home' ? 'active' : ''} 
              onClick={() => setMenu('home')}
            >Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p className={menu === 'about' ? 'active' : ''} 
              onClick={() => setMenu('about')}
            >About me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p className={menu === 'services' ? 'active' : ''} 
              onClick={() => setMenu('services')}
            >Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p className={menu === 'portfolio' ? 'active' : ''} 
              onClick={() => setMenu('portfolio')}
            >Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p className={menu === 'contact' ? 'active' : ''} 
              onClick={() => setMenu('contact')}
            >Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <button className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Contact with me
        </AnchorLink>
      </button>
    </div>
  );
}

export default Navbar;
