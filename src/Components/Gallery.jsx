import React from 'react';
import IMG_GALLERY1 from '../images/gallery-1.png'
import IMG_GALLERY2 from '../images/gallery-2.png'
import IMG_GALLERY3 from '../images/gallery-3.png'

const Gallery = () => {
  return (
    <section className="galery">
        <article className="galery__container-img">
            <img className="galery__img" src= {IMG_GALLERY1} alt="gallery-1.png"/>
            <img className="galery__img" src= {IMG_GALLERY2} alt="gallery-2.png"/>
            <img className="galery__img" src= {IMG_GALLERY3} alt="gallery-3.png"/>
        </article>
    </section>
  )
}

export default Gallery