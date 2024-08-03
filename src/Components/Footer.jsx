import React from 'react'

const Footer = () => {
  return (
    <footer class="footer">
        <article class="footer__container-link">
            <a class="footer__link" href="#">iniciar sesion</a>
            <a class="footer__link" href="#">registrate</a>
        </article>
        <article class="container-social-red">
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
        </article>
        <article class="footer__link-contact">
            <a class="footer__contact" href="#">contactanos aquí</a>
        </article>
    </footer>
  )
}

export default Footer