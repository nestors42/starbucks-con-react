import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <article className="footer__container-link">
            <a className="footer__link" href="#">iniciar sesion</a>
            <a className="footer__link" href="#">registrate</a>
        </article>
        <article className="container-social-red">
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
        </article>
        <article className="footer__link-contact">
            <a className="footer__contact" href="#">contactanos aquí</a>
        </article>
    </footer>
  )
}

export default Footer