import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { ItemsContext } from "../../ItemContext";

const CardAlbum = ({ dataAlbum }) => {
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
  
  console.log("Renderizando CardAlbum");
  
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
        <button onClick={agregarProducto}>Comprar</button>
      </div>
    </div>
  );
};

export default CardAlbum;


