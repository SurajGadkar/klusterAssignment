import React, { useEffect, useState } from "react";
import { getBooks } from "../api/api.js";

import BookSection from "../components/BookSection.jsx";

function Home() {
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
    <div>
      <BookSection list={books} />
      <BookSection list={books} />
      <BookSection list={books} />
    </div>
  );
}

export default Home;
