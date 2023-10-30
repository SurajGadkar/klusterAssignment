import React from "react";
import BookCard from "./BookCard";

function BookSection({ list }) {
  return (
    <div>
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
  );
}

export default BookSection;
