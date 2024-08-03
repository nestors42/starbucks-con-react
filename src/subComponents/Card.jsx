import React from 'react'

const Card = (props) => {
  return (
    <article className="cards__container-card">
            
            <img className="cards__img-1" src= {props.image} alt="card-1.png" />
            <div className="cards__container-text">
                <h2 className="cards__title-1"> {props.text} <span> {props.greenText} </span></h2>
                <p className="cards__parrafo-1">{props.description}</p>
                <button className="cards__btn-pruebalo"> {props.boton} </button>
            </div>
            {props.estado ? <div className="cards__porcentaje-5"> {props.porcentaje} </div> : null}
            {props.secondBtn ? <button className="cards__btn-pedidosya">Entrega por PedidosYa</button> : null}
        </article>
  )
}

export default Card