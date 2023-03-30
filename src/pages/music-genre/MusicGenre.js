import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { ItemsContext } from "../../ItemContext";
import { Link } from "react-router-dom";
import "./Style.css"

const MusicGenre = () => {
  const { albumsData } = useContext(ItemsContext);
  const { genero } = useParams();
  const filteredAlbums = albumsData.filter(album => album.genero === genero);
  const { cartItems, setCartItems } = useContext(ItemsContext);
  function agregarProducto(dataAlbum) {
    console.log(dataAlbum.id)
    const itemExists = cartItems.find(item => item.id === dataAlbum.id);
    if (itemExists) {
      // El producto ya está en el carrito, realiza la acción que desees
      return;
    }
    setCartItems([...cartItems, dataAlbum]);
  }
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

