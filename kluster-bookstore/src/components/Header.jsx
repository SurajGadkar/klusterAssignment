import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./Header.module.css";

function Header() {
  const { openCart, cartQuantity } = useCart();
  return (
    <div className={styles.main__container}>
      <ul className={styles.nav}>
        <li>
          <Link className={styles.list} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.list} to="/books">
            Books
          </Link>
        </li>
        <li>
          <Link className={styles.list} to="/authors">
            Author
          </Link>
        </li>
      </ul>

      <div>
        <button className={styles.btn} onClick={openCart}>
          {" "}
          Cart{" "}
        </button>
      </div>
    </div>
  );
}

export default Header;
