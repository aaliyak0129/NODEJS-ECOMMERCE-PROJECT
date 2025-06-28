import React from 'react';
import '../Css/Header.css';
import { CgProfile } from "react-icons/cg";
import { IoBag } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="logo">GLITZ & GLAM</span>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">HOME</li>
                   <li className="nav-item">SHOP</li>
          <li className="nav-item">PRODUCT</li>
          <li className="nav-item">CATEGORIES</li>

          <li className="nav-item">PAGES</li>
          <li className="nav-item">BLOG</li>
          <li className="nav-item">CONTACT</li>
        </ul>
      </nav>
      <div className="header-icons">
      <CiSearch />
      <IoBag />
<FaRegHeart />
      <CgProfile />
      </div>
    </header>
  );
};

export default Header;