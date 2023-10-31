import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getBooks, getTotalCartValue } from "../api/api";
import styles from "./Cart.module.css";

const CartItem = ({ itemId, quantity }) => {
  const { removeItem } = useCart();
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const data = getBooks();
    data.then((res) => {
      const item = res.find((item) => item.ISBN === itemId);
      setItemData(item);
    });
  }, []);

  const { price } = itemData;
  const itemValue = price?.value * quantity;

  return (
    <div className={styles.cart__item__container}>
      <img className={styles.image} src={itemData.image} />
      <div className={styles.title__container}>
        <h1 className={styles.title}>{itemData.title}</h1>
        <p className={styles.quantity}>{quantity}</p>
      </div>
      <div>
        <p>${itemValue}</p>
      </div>
      <button className={styles.btn} onClick={() => removeItem(itemId)}>
        Remove
      </button>
    </div>
  );
};
function Cart() {
  const { cartItem } = useCart();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const data = getBooks();
    data.then((res) => {
      setBooks(res);
    });
  }, []);

  const total = Math.floor(getTotalCartValue(books, cartItem) * 100) / 100 || 0;

  return (
    <div className={styles.main__container}>
      <h3>My Cart</h3>
      <div>
        {cartItem.length > 0 ? (
          cartItem.map((item) => {
            return (
              <CartItem
                key={item.id}
                itemId={item.id}
                quantity={item.quantity}
              />
            );
          })
        ) : (
          <h3>Cart is empty</h3>
        )}
      </div>
      <p>Total Cart Value : ${total}</p>
    </div>
  );
}

export default Cart;
