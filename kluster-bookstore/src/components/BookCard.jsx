import React from "react";
import styles from "./BookCard.module.css";
import { Link } from "react-router-dom";

function BookCard({ id, title, image, author, price, summary }) {
  return (
    <div className={styles.main__container}>
      <Link className={styles.link} to={`/books/${id}`}>
        <img className={styles.image} src={image} />
        <h1>{title}</h1>
      </Link>
      <p>{author}</p>
      <h3> $ {price.displayValue}</h3>
      <p>{summary}</p>
    </div>
  );
}

export default BookCard;
