import React from 'react';
import IMG_CARD1 from '../images/card-1.png';
import IMG_CARD2 from '../images/card-2.png';
import IMG_CARD3 from '../images/card-3.png';
import IMG_CARD4 from '../images/card-4.png';

const Cards = () => {
  return (
    <section class="cards">
        <article class="cards__container-card">
            <div class="cards__porcentaje-5">5%</div>
            <img class="cards__img-1" src= {IMG_CARD1} alt="card-1.png" />
            <div class="cards__container-text">
                <h2 class="cards__title-1">Aplicacion de <span>Starbucks</span></h2>
                <p class="cards__parrafo-1">Ahorre tiempo con click & collect y recolecte sus estrellas. Hacer pedido nunca ha sido tan facil</p>
                <button class="cards__btn-pruebalo">Pruebelo</button>
            </div>
        </article>
        <article class="cards__container-card">
            <div class="cards__porcentaje-10">10%</div>
            <img class="cards__img-2" src= {IMG_CARD2} alt="card-2.png" />
            <div class="cards__container-text">
                <h2 class="cards__title-2">Starbucks <span>Delivery</span></h2>
                <p class="cards__parrafo-2">Starbuks entrega su comida y bebida favorita en la puerta de su casa.</p>
                <button class="cards__btn-uber">Entrega por UberEat</button>
                <button class="cards__btn-pedidosya">Entrega por PedidosYa</button>
            </div>
        </article>
        <article class="cards__container-card">
            <img class="cards__img-3" src= {IMG_CARD3} alt="card-3.png" />
            <div class="cards__container-text">
                <h2 class="cards__title-3">Novedades <span>Starbucks</span></h2>
                <p class="cards__parrafo-3">Mantengase informado de nuestras ultimas novedades y actualizaciones.</p>
                <button class="cards__btn-3">Mas Informacion</button>
            </div>
        </article>
        <article class="cards__container-card">
            <img class="cards__img-4" src= {IMG_CARD4} alt="card-4.png" />
            <div class="cards__container-text">
                <h2 class="cards__title-4">Historias de <span>Starbucks</span></h2>
                <p class="cards__parrafo-4">Descrubra nuestra empresa y nuestra historia.</p>
                <button class="cards__btn-4">Mas Informacion</button>
            </div>
        </article>
    </section>
  )
}

export default Cards