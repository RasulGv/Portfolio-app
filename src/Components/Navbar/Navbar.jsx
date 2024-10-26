import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/R.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MdOutlineMenuOpen } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { useTranslation } from 'react-i18next'; 

const Navbar = () => {
  const { i18n } = useTranslation(); 
  const [menu, setMenu] = useState("home");
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev); 
  };

  const handleLinkClick = (item) => {
    setMenu(item);  
    setMenuVisible(false);  
  };


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <div className='navbar'>
      <AnchorLink className='anchor-link' href='#home'>
        <img src={logo} alt="logo" />
      </AnchorLink>
      {!menuVisible ? (
        <MdOutlineMenuOpen onClick={toggleMenu} className='nav-mob-open' />
      ) : (
        <FaWindowClose onClick={toggleMenu} className='nav-mob-close' />
      )}

      <ul className={`nav-menu ${menuVisible ? 'open' : 'closed'}`}>
        {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
          <li key={item}>
            <AnchorLink
              className='anchor-link'
              offset={50}
              href={`#${item}`}
              onClick={() => handleLinkClick(item)}
            >
              <p className={menu === item ? 'active' : ''}>
                {i18n.t(item.charAt(0).toUpperCase() + item.slice(1))}
              </p>
            </AnchorLink>
          </li>
        ))}
      </ul>

      <select onChange={(e) => changeLanguage(e.target.value)} className="language-select">
        <option value="en">Eng</option>
        <option value="az">Az</option>
      </select>

      <button className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          {i18n.t('Contact with me')}
        </AnchorLink>
      </button>
    </div>
  );
};

export default Navbar;
