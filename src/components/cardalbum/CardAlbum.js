import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { ItemsContext } from "../../ItemContext";

const CardAlbum = ({ dataAlbum }) => {
  const { cartItems, setCartItems, totalPrice, setTotalPrice } = useContext(ItemsContext);

  function agregarProducto(dataAlbum) {
    console.log("Ejecutando agregarProducto con el siguiente objeto dataAlbum: ", dataAlbum);
  
    const itemExists = cartItems.find(item => item.id === dataAlbum.id);
    if (itemExists) {
      console.log(`El producto ${dataAlbum.album} ya está en el carrito`);
  
      const updatedItems = cartItems.map(item => {
        if (item.id === dataAlbum.id) {
          console.log(`Actualizando cantidad del producto ${dataAlbum.album}`);
          const updatedItem = { ...item, cantidad: item.cantidad + 1 };
          if (updatedItem.cantidad === 0) { // si la cantidad se reduce a 0, restar el precio del producto existente al precio total
            setTotalPrice(totalPrice - itemExists.precio);
          } else {
            setTotalPrice(totalPrice + itemExists.precio);
          }
          return updatedItem;
        } else {
          return item;
        }
      });
      setCartItems(updatedItems);
    } else {
      console.log(`Agregando nuevo producto ${dataAlbum.album} al carrito`);
  
      const newItem = { id: dataAlbum.id, artista: dataAlbum.artista, album: dataAlbum.album, precio: dataAlbum.precio, img: dataAlbum.img, cantidad: 1 };
      setCartItems([...cartItems, newItem]);
      setTotalPrice(totalPrice + dataAlbum.precio);
    }
    // Si no hay elementos en el carrito, setear el precio total a 0
    if (cartItems.length === 0) {
      console.log("No hay elementos en el carrito, el precio total se setea a 0");
      setTotalPrice(0);
    }
    console.log("Resultado final de cartItems: ", cartItems);
    console.log("Precio total actual: ", totalPrice);
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

