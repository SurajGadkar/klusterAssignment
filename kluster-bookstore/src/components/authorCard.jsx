import React from "react";
import styles from "./authorCard.module.css";
import { Link } from "react-router-dom";

function AuthorCard({ id, name, image, biography }) {
  return (
    <div className={styles.main__container}>
      <Link className={styles.link} to={`/authors/${id}`}>
        <img className={styles.image} src={image} />
        <h1 className={styles.title}>{name}</h1>
      </Link>
      <p className={styles.bio}>
        {biography.length > 60 ? biography.slice(0, 60) + "..." : biography}
      </p>
    </div>
  );
}

export default AuthorCard;
