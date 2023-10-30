import React from "react";
import styles from "./BookCard.module.css";
import { Link } from "react-router-dom";

function AuthorCard({ id, name, image, biography }) {
  return (
    <div className={styles.main__container}>
      <Link className={styles.link} to={`/authors/${id}`}>
        <img className={styles.image} src={image} />
        <h1>{name}</h1>
      </Link>
      <p>{biography}</p>
    </div>
  );
}

export default AuthorCard;
