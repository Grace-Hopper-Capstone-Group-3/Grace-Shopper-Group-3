import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  setCart,
  handleClick,
  handleDecClick,
  handleClickRemove,
}) => {
  let subTotal = 0;
  cart.map((item) => {
    subTotal += item.price * item.quantity;
  });

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div className="cart-box" key={item.id}>
          <h4 className="item-name-cart">{item.name}</h4>
          <img className="cart-image" src={item.photo} />
          <h5>${Math.round(item.price * item.quantity * 100) / 100}</h5>
          <button className="cart-button" onClick={() => handleClick(item)}>
            +
          </button>
          <h5>{item.quantity}</h5>
          <button className="cart-button" onClick={() => handleDecClick(item)}>
            -
          </button>
          <button
            className="cart-button"
            onClick={() => handleClickRemove(item)}
          >
            Remove Item
          </button>
        </div>
      ))}
      {subTotal ? (
        <h5 className="subtotal">Subtotal ${subTotal.toFixed(2)}</h5>
      ) : null}
      {subTotal ? (
        <Link className="checkout-button-container" to="/checkout">
          <button className="checkout-button">Proceed to Checkout</button>
        </Link>
      ) : (
        <h1 className="add-items-to-cart-text">Your cart is empty.</h1>
      )}
    </div>
  );
};

export default Cart;
