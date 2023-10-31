import React, { useState, useEffect } from "react";
import BookCard from "../BookCard";
import { getBooks } from "../../api/api";
import styles from "./Books.module.css";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const data = getBooks();
    data
      .then((res) => {
        setBooks(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.main__container}>
      {books.map((book) => {
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
  );
}

export default Books;
