import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getBooks } from "../api/api";

const CartItem = ({ itemId, name, quantity }) => {
  const { removeItem } = useCart();
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    const data = getBooks();
    data.then((res) => {
      const item = res.find((item) => item.ISBN === itemId);
      setItemData(item);
    });
  }, []);
  
  return (
    <div>
      <h1>{itemData.name}</h1>
      <img src={itemData.image} />
      <p>{quantity}</p>
      <button onClick={() => removeItem(itemId)}>Remove</button>
    </div>
  );
};
function Cart({ cart }) {
  const { cartItem } = useCart();

  return (
    <div>
      {cartItem.length > 0 ? (
        cartItem.map((item) => {
          return (
            <CartItem key={item.id} itemId={item.id} quantity={item.quantity} />
          );
        })
      ) : (
        <h3>Cart is empty</h3>
      )}
    </div>
  );
}

export default Cart;
