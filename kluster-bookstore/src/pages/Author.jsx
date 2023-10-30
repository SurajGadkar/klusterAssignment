import { useEffect, useState } from "react";
import { getAuthors } from "../api/api";
import AuthorCard from "../components/authorCard";

function Author() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const data = getAuthors();
    data
      .then((res) => {
        setAuthors(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {authors.map((author) => {
        return (
          <AuthorCard
            key={author.id}
            id={author.id}
            name={author.name}
            biography={author.biography}
            image={author.image}
          />
        );
      })}
    </div>
  );
}

export default Author;
