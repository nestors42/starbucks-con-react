import React from 'react'

const Contact = () => {
  return (
    <section className="section-contact">
         <h2 className="section-contact__title">CONTACTANOS</h2>
         <form className="section-contct__form">
            <div className="section-contact__container-input">
                <label>correo electronico</label>
                <input placeholder="coloque su correo electronico" type="email" required/>
            </div>
            <div className="section-contact__textarea">
                <label>comentario</label>
                <textarea placeholder="coloque su comentario" required></textarea>
            </div>
            <button className="section-contact__btn">Enviar</button>
        </form>
    </section>
  )
}

export default Contact