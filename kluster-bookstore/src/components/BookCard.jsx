import React from "react";
import styles from "./BookCard.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function BookCard({ id, title, image, author, price, summary }) {
  const { getItem, increaseCartItems, decreaseCartItems, removeItem, test } =
    useCart();
  const quantity = getItem(id) || 0;

  return (
    <div className={styles.main__container}>
      <Link className={styles.link} to={`/books/${id}`}>
        <img className={styles.image} src={image} />
        <h1 className={styles.title}>{title}</h1>
      </Link>
      <p onClick={test}>{author}</p>
      <h3> $ {price.displayValue}</h3>
      <p>{summary.length > 70 ? summary.slice(0, 70) + "..." : summary}</p>

      <div>
        {quantity === 0 ? (
          <button className={styles.btn} onClick={() => increaseCartItems(id)}>
            Add
          </button>
        ) : (
          <>
            <p>{quantity}</p>
            <button
              className={styles.btn}
              onClick={() => increaseCartItems(id)}
            >
              {" "}
              +{" "}
            </button>
            <button
              className={styles.btn}
              onClick={() => decreaseCartItems(id)}
            >
              {" "}
              -
            </button>
            <button className={styles.btn} onClick={() => removeItem(id)}>
              {" "}
              Remove{" "}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BookCard;
