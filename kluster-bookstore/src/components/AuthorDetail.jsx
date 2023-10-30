import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getAuthorById,
  getAuthors,
  getBooks,
  getBooksByAuthorName,
} from "../api/api";
import styles from "./AuthorDetail.module.css";
import BookCard from "./BookCard";

function AuthorDetail() {
  const [authorData, setAuthorData] = useState([]);
  const [books, setBooks] = useState([]);

  const params = useParams();
  const authorId = params.authorId;

  useEffect(() => {
    const data = getAuthors();
    data
      .then((res) => {
        const author = getAuthorById(res, authorId);
        setAuthorData(author[0]);
        return author[0].name;
      })
      .then((name) => {
        const data = getBooks();
        data.then((res) => {
          const booksByAuthor = getBooksByAuthorName(res, name);
          setBooks(booksByAuthor);
        });
      });
  }, []);

  return (
    <div>
      {authorData.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.main__container}>
          <img className={styles.image} src={authorData.image} />
          <h1>{authorData.name}</h1>
          <p>{authorData.biography}</p>
          {books.length === 0 ? (
            <h3>Loading...</h3>
          ) : (
            books.map((book) => {
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
          )}
        </div>
      )}
    </div>
  );
}

export default AuthorDetail;
