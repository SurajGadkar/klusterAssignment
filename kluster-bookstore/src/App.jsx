import "./App.css";
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Books from "./components/pages/Books";
import Author from "./components/pages/Author";
import BooksDetail from "./components/BooksDetail";
import AuthorDetail from "./components/AuthorDetail";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<BooksDetail />} />
          <Route path="/authors" element={<Author />} />
          <Route path="/authors/:authorId" element={<AuthorDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
