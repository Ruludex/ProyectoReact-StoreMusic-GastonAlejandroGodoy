import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { ItemsContext } from "../../ItemContext";
import { Link } from "react-router-dom";
import "./Style.css"

const MusicGenre = (album) => {
  const { albumsData } = useContext(ItemsContext);
  const { genero } = useParams();
  const filteredAlbums = albumsData.filter(album => album.genero === genero);
  const { cartItems, setCartItems, totalPrice, setTotalPrice } = useContext(ItemsContext);

  const actualizarCantidad = (item) => {
    console.log(`Actualizando cantidad del producto ${item.album}`);
    const updatedItem = { ...item, cantidad: item.cantidad + 1 };
    setTotalPrice(totalPrice + item.precio);
    return updatedItem;
  };
  
  const agregarNuevoProducto = (album) => {
    console.log(`Agregando nuevo producto ${album.album} al carrito`);
    const newItem = { id: album.id, artista: album.artista, album: album.album, precio: album.precio, img: album.img, cantidad: 1 };
    setCartItems([...cartItems, newItem]);
    setTotalPrice(totalPrice + album.precio);
  };
  const agregarProducto = (album) => {
    const itemExists = cartItems.find(item => item.id === album.id);
  
    if (itemExists) {
      console.log(`El producto ${album.album} ya está en el carrito`);
      const updatedItems = cartItems.map(item => (item.id === album.id) ? actualizarCantidad(item, album) : item);
      setCartItems(updatedItems);
    } else {
      agregarNuevoProducto(album);
    }
  };
  
  return (
    <div>
      <h1>Detalles de los álbums</h1>
      <ul className="contenedor-padre">
        {filteredAlbums.map((album) => (
        <div key={album.id} className="caja">
          <div className="card">
          <Link className="link" to={`/detalles/${album.id}`}>
            <div className="contenedor-img">
              <img className="img" src={album.img} alt={album.album} />
            </div>
            <div>
              <h2>{album.artista}</h2>
              <h3>Album: {album.album}</h3>
              <h3>Precio: {album.precio}</h3>
            </div>
          </Link>
          <button onClick={() => agregarProducto(album)}>
            Comprar
          </button>
        </div>
      </div>
        ))}
      </ul>
    </div>
  );
};

export default MusicGenre;


