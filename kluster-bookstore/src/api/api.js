import axios from "axios";

const BASE_URL = "https://private-anon-d708965310-bookstore.apiary-mock.com";

export const getBooks = async () => {
  // Fetches all books and returns a promise
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    const books = await response.data.books;
    return books;
  } catch (err) {
    console.log(err);
  }
};

export const getAuthors = async () => {
  // Fetches all authors and returns a promise
  try {
    const response = await axios.get(`${BASE_URL}/authors`);
    const authors = await response.data.authors;
    return authors;
  } catch (err) {
    console.log(err);
  }
};

export const getAuthorById = (authors, id) => {
  // Filters the authors list based on id and returns an author
  return authors.filter((author) => Number(author.id) === Number(id));
};

export const getBookById = (books, id) => {
  // Filters the books list based on id and returns a book
  return books.filter((book) => Number(book.ISBN) === Number(id));
};

export const getBooksByAuthorName = (books, author) => {
  // Filters the books based on the auhtor name
  return books.filter((book) => book.author === author);
};

export const getTotalCartValue = (books, cartItems) => {
  // Gets the total value of the cart Items
  let total = 0;
  books.forEach((book) => {
    cartItems.forEach((item) => {
      if (book.ISBN === item.id) {
        const currSum = item.quantity * book.price.value;
        total += currSum;
      }
    });
  });
  return total;
};
