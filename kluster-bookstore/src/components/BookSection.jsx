import React from "react";
import BookCard from "./BookCard";
import styles from "./BookSection.module.css";

function BookSection({ section, list }) {
  return (
    <div className={styles.container}>
      <h1>{section}</h1>
      <div className={styles.main__container}>
        {list.map((book) => {
          return (
            <BookCard
              key={book.ISBN}
              id={book.ISBN}
              title={book.title}
              author={book.author}
              summary={book.summary}
              image={book.image}
              price={book.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BookSection;
