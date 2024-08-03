import React from "react";
import IMG_CARD1 from "../images/card-1.png";
import IMG_CARD2 from "../images/card-2.png";
import IMG_CARD3 from "../images/card-3.png";
import IMG_CARD4 from "../images/card-4.png";
import Card from "../subComponents/Card";

const Cards = () => {
  return (
    <section class="cards">
      <Card
        image={IMG_CARD1}
        text={"Aplicacion de"}
        greenText={"Starbucks"}
        description={
          "Ahorre tiempo con click & collect y recolecte sus estrellas. Hacer pedido nunca ha sido tan facil"
        } boton = {'Pruebelo'} estado = {true} porcentaje = {'5%'} secondBtn = {false}
      />
      <Card
        image={IMG_CARD2}
        text={"Starbucks"}
        greenText={"Delivery"}
        description={
          "Starbuks entrega su comida y bebida favorita en la puerta de su casa."
        } boton = {'Entrega por UberEat'} estado = {true} porcentaje = {'10%'} secondBtn = {true}
      />
      <Card
        image={IMG_CARD3}
        text={"Novedades"}
        greenText={"Starbucks"}
        description={
          "Mantengase informado de nuestras ultimas novedades y actualizaciones."
        } boton = {'Mas Información'} estado = {false} secondBtn = {false}
      />
      <Card
        image={IMG_CARD4}
        text={"Historias de"}
        greenText={"Starbucks"}
        description={"Descrubra nuestra empresa y nuestra historia."} boton = {'Mas Información'} estado = {false} secondBtn = {false}
      />
    </section>
  );
};

export default Cards;
