import React from 'react'

const Card = (props) => {
  return (
    <article class="cards__container-card">
            
            <img class="cards__img-1" src= {props.image} alt="card-1.png" />
            <div class="cards__container-text">
                <h2 class="cards__title-1"> {props.text} <span> {props.greenText} </span></h2>
                <p class="cards__parrafo-1">{props.description}</p>
                <button class="cards__btn-pruebalo"> {props.boton} </button>
            </div>
            {props.estado ? <div class="cards__porcentaje-5"> {props.porcentaje} </div> : null}
            {props.secondBtn ? <button class="cards__btn-pedidosya">Entrega por PedidosYa</button> : null}
        </article>
  )
}

export default Card