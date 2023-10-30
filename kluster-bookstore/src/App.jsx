import "./App.css";
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Author from "./pages/Author";
import BooksDetail from "./components/BooksDetail";
import AuthorDetail from "./components/AuthorDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BooksDetail />} />
          <Route path="/authors" element={<Author />} />
          <Route path="/authors/:id" element={<AuthorDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
