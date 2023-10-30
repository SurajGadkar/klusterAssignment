import React, { useState } from "react";

function Cart({ cart }) {
  const CartItem = ({ name }) => {
    return (
      <div>
        <h1>{name}</h1>
        <button>Add</button>
        <button>Remove</button>
      </div>
    );
  };

  console.log(cart);
  return (
    <div>
      {cart.length > 0 ? (
        cart.map((item) => {
          return <CartItem name="some item" />;
        })
      ) : (
        <h3>Cart is empty</h3>
      )}
    </div>
  );
}

export default Cart;
