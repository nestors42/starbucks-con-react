import React from 'react'
import IMG_MAIN from '../images/logo.png'

const Main = () => {
  return (
    <section className="section-1">
        <article className="section-1__container-text">
            <h1 className="section-1__title"> No solo es Cafe es <span>Starbucks</span></h1>
            <p className="section-1__parrafo"> Cada día, acudimos a trabajar con la esperanza de conseguir dos cosas: compartir el mejor café con nuestros amigos y contribuir a que el mundo sea un poco mejor. Así era cuando abrió la primera tienda Starbucks en 1971, y así continúa siendo hoy.</p>
        </article>
        <article className="section-1__container-img">
            <img className="section-1__img" src={IMG_MAIN} alt="logo-starbucks-section"/>
        </article>
    </section>
  )
}

export default Main