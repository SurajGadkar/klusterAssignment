import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById, getBooks } from "../api/api";
import styles from "./BooksDetail.module.css";

function BooksDetail() {
  const [bookData, setBookData] = useState([]);

  const params = useParams();
  const bookId = params.bookId;

  useEffect(() => {
    const data = getBooks();
    data.then((res) => {
      const book = getBookById(res, bookId);
      setBookData(book[0]);
    });
  }, []);

  return (
    <div>
      {bookData.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.main__container}>
          <img className={styles.image} src={bookData.image} />
          <h1>{bookData.title}</h1>
          <p>{bookData.author}</p>
          <h3> $ {bookData.price?.value}</h3>
          <p>{bookData.summary}</p>
        </div>
      )}
    </div>
  );
}

export default BooksDetail;
