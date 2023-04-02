import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";
import { ItemsContext } from "../../ItemContext";


function ModalItem(props) {
  const { id, img, artista, precio, album, cantidad } = props;
  const { cartItems, setCartItems, setTotalPrice } = useContext(ItemsContext);

  function eliminarProducto(id) {
    // Get the item that will be removed
    const itemToRemove = cartItems.find(item => item.id === id);
  
    // Remove the item from the cart
    setCartItems([...cartItems.filter((item) => item.id !== id)]);
  
    // Update the total price
    setTotalPrice(prevTotal => prevTotal - itemToRemove.precio);
  }
  
  

  return (
    <div className="modal-contenedor">
      <img className="img-carrito" src={img} alt={album} />
      <div>
        <p>Artista: {artista}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad:{cantidad}</p>
        <p>Subtotal: ${cantidad * precio}</p>
        <button
          onClick={() => eliminarProducto(id)}
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}


const CardWidget = () => {
  const { cartItems } = useContext(ItemsContext);
  const [totalPrice] = useState(0);

  function calcularTotal() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].precio * cartItems[i].cantidad;
    }
    total += totalPrice;
    return total;
  }
  function items() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].cantidad;
    }
    return total;
  }
  
  

  return (
    <div className="container-modal">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <span className="cart-count">{items()}</span>
        <FontAwesomeIcon className="icon" icon={faCartShopping}></FontAwesomeIcon>
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Carrito de compras
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {cartItems.map((item) => (
                <ModalItem key={item.id} {...item} />
              ))}
            </div>

            <div className="modal-footer">
              <p className="total-price">Total: ${calcularTotal()}</p>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Salir
              </button>
              <button type="button" className="btn btn-primary">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWidget;
