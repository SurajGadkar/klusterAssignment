import React, { useEffect, useState } from "react";
import { getBooks } from "../../api/api.js";

import BookSection from "../BookSection.jsx";

function Home() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

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
      <BookSection section={"Popular books"} list={books} cart={cart} />
      <BookSection section={"Recently added"} list={books} cart={cart} />
    </div>
  );
}

export default Home;
