import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { ItemsContext } from "../../ItemContext";

const CardAlbum = ({ dataAlbum }) => {
  const { cartItems, setCartItems, totalPrice, setTotalPrice } = useContext(ItemsContext);

  function agregarProducto(dataAlbum) {
    const itemExists = cartItems.find(item => item.id === dataAlbum.id);
    if (itemExists) {
      // Si el producto ya está en el carrito, aumenta su cantidad en 1 y actualiza el precio total
      const updatedItems = cartItems.map(item => {
        if (item.id === dataAlbum.id) {
          console.log(item.cantidad );
          const updatedItem = { ...item, cantidad: item.cantidad + 2 };
          setTotalPrice(totalPrice + dataAlbum.precio);
          return updatedItem;
        } else {
          return item;
        }
      });
      setCartItems(updatedItems);
    } else {
      // Si el producto no está en el carrito, agrega un nuevo objeto Item con cantidad 1 y actualiza el precio total
      const newItem = { id: dataAlbum.id, artista: dataAlbum.artista, album: dataAlbum.album, precio: dataAlbum.precio, img: dataAlbum.img, cantidad: 1 };
      setCartItems([...cartItems, newItem]);
      setTotalPrice(totalPrice + dataAlbum.precio);
    }
      console.log("🚀 ~ file: CardAlbum.js:30 ~ agregarProducto ~ totalPrice:", totalPrice)
  
    // Si no hay elementos en el carrito, setear el precio total a 0
    if (cartItems.length === 0) {
      setTotalPrice(0);
    }
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
        <button onClick={() => agregarProducto(dataAlbum)}>Comprar</button>
      </div>
    </div>
  );
};

export default CardAlbum;

