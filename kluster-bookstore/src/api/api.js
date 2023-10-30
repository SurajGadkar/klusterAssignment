import axios from "axios";

const BASE_URL = "http://private-anon-d708965310-bookstore.apiary-mock.com";

export const getBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    const books = await response.data.books;
    return books;
  } catch (err) {
    console.log(err);
  }
};

export const getAuthors = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/authors`);
    const authors = await response.data.authors;
    return authors;
  } catch (err) {
    console.log(err);
  }
};

export const getAuthorById = (authors, id) => {
  return authors.filter((author) => Number(author.id) === Number(id));
};

export const getBookById = (books, id) => {
  return books.filter((book) => Number(book.ISBN) === Number(id));
};

export const getBooksByAuthorName = (books, author) => {
  return books.filter((book) => book.author === author);
};
