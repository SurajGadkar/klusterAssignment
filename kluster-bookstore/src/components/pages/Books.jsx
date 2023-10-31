import React, { useState, useEffect } from "react";
import BookCard from "../BookCard";
import { getBooks } from "../../api/api";
import styles from "./Books.module.css";
import Cart from "../Cart";

function Books() {
  const [books, setBooks] = useState([]);
  const [sortedBooks, setSortedBooks] = useState([]);
  const [toggleSort, setToggleSort] = useState(false);

  useEffect(() => {
    const data = getBooks();
    data
      .then((res) => {
        setBooks(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const SortByAuthorName = () => {
    const sortedByAuthorName = books.sort((a, b) => {
      const titleA = a.author.toLowerCase();
      const titleB = b.author.toLowerCase();

      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });

    setSortedBooks(sortedByAuthorName);
  };

  const handleSortToggle = () => {
    setToggleSort(!toggleSort);
    SortByAuthorName();
  };

  console.log(toggleSort);

  return (
    <>
      <button onClick={handleSortToggle} className={styles.sort__button}>
        Sort By Author
      </button>
      <div className={styles.main__container}>
        <div className={styles.left}>
          {!toggleSort
            ? books.map((book) => {
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
              })
            : sortedBooks.map((book) => {
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
        <div className={styles.right}>
          <Cart />
        </div>
      </div>
    </>
  );
}

export default Books;
