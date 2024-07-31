import React from "react";

const Header = () => {
  return (
    <header className="header">
       
        <div className="header__container-logo">
            <img className="header__img" src="/images/logo.png" alt="logo-starbucks"/>
        </div>
        
        <nav className="header__navbar">
            <a className="header__link" href="#">INICIO</a>
            <a className="header__link" href="#">CAFE</a>
            <a className="header__link" href="#">SOBRE NOSOTROS</a>
            <a className="header__link" href="#">DELIBERY</a>
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
