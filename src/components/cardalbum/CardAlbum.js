import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { ItemsContext } from "../../ItemContext";

const CardAlbum = ({ dataAlbum }) => {
  const { cartItems, setCartItems } = useContext(ItemsContext);

  function agregarProducto(dataAlbum) {
    setCartItems([...cartItems, dataAlbum]);
  }

  return (
    <div className="caja">
      <div className="card">
        <Link className="link" to={`/detalles/${dataAlbum.id}`}>
          <div className="contenedor-img">
            <img className="img" src={dataAlbum.img} alt={dataAlbum.album} />
          </div>
          <div>
            <h2>{dataAlbum.artista}</h2>
            <h3>Album: {dataAlbum.album}</h3>
            <h3>Precio: {dataAlbum.precio}</h3>
          </div>
        </Link>
        <button
          onClick={() => {
            agregarProducto(dataAlbum);
          }}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default CardAlbum;
