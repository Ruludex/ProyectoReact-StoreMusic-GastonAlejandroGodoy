import React from 'react'

const CartBuy = ({Album}) => {

  return (
  <div className='caja'>
    <div className='card'>
      <div className='contenedor-img'>
        <img className="img" src={Album.img} alt={Album.album}/>
      </div>
      <div>
        <h2>{Album.artista}</h2>
        <h3>Album: {Album.album}</h3>
        <h5>Canciones:</h5>
        <p>1: {Album.canciones[0]}</p>
        <p>2: {Album.canciones[1]}</p>
        <p>3: {Album.canciones[2]}</p>
        <p>4: {Album.canciones[3]}</p>
        <p>5: {Album.canciones[4]}</p>
        <h4>Precio: {Album.precio}$</h4>
      </div>
    </div>
  </div>    
    )
}

export default CartBuy