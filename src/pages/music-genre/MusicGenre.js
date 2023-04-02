import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { ItemsContext } from "../../ItemContext";
import { Link } from "react-router-dom";
import "./Style.css"

const MusicGenre = ({dataAlbum}) => {
  const { albumsData } = useContext(ItemsContext);
  const { genero } = useParams();
  const filteredAlbums = albumsData.filter(album => album.genero === genero);
  const { cartItems, setCartItems, totalPrice, setTotalPrice } = useContext(ItemsContext);

  const itemExists = cartItems.find(item => item.id === dataAlbum.id);

  const actualizarCantidad = (item) => {
    console.log(`Actualizando cantidad del producto ${dataAlbum.album}`);
    const updatedItem = { ...item, cantidad: item.cantidad + 1 };
    setTotalPrice(totalPrice + item.precio);
    return updatedItem;
  };
  const agregarNuevoProducto = () => {
    console.log(`Agregando nuevo producto ${dataAlbum.album} al carrito`);
    const newItem = { id: dataAlbum.id, artista: dataAlbum.artista, album: dataAlbum.album, precio: dataAlbum.precio, img: dataAlbum.img, cantidad: 1 };
    setCartItems([...cartItems, newItem]);
    setTotalPrice(totalPrice + dataAlbum.precio);
  };
  const agregarProducto = () => {
    if (itemExists) {
      console.log(`El producto ${dataAlbum.album} ya está en el carrito`);
      const updatedItems = cartItems.map(item => (item.id === dataAlbum.id) ? actualizarCantidad(item) : item);
      setCartItems(updatedItems);
    } else {
      agregarNuevoProducto();
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
          <button
          onClick={() => {
            agregarProducto(album);
          }}
        >
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

