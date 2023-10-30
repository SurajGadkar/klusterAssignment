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

export const getAuthorById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/authors/${id}`);
    const author = await response.data.author;
    return author;
  } catch (err) {
    console.log(err);
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/books/${id}`);
    const book = await response.data.book;
    console.log(book);
  } catch (err) {
    console.log(err);
  }
};
