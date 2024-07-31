import React from "react";
import LOGO from '../images/logo.png'
import ButtonHeader from "../subComponents/ButtonHeader";

const Header = () => {
  return (
    <header className="header">
       
        <div className="header__container-logo">
            <img className="header__img" src={LOGO} alt="logo.png"/>
        </div>
        
        <nav className="header__navbar">
            <ButtonHeader boton= {'INICIO'} />
            <ButtonHeader boton= {'CAFE'} />
            <ButtonHeader boton= {'SOBRE NOSOTROS'} />
            <ButtonHeader boton= {'DELIVERY'} />
        </nav>
        <div className="header__container-login">
            <i className="bi bi-person-circle"></i>
        </div>
        <div className="header__icon-mobile">
            <i className="bi bi-list"></i>
        </div>
    </header>
  );
};

export default Header;
