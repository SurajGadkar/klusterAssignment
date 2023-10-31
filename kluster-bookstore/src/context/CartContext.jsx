import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen((prev) => !prev);
  };

  const cartQuantity =
    cartItem.length > 0
      ? cartItem.reduce((item, quantity) => item.quantity + quantity)
      : 0;

  const getItem = (id) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartItems = (id) => {
    setCartItem((prev) => {
      if (prev.find((item) => item.id === id) == null) {
        return [...prev, { id, quantity: 1 }];
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id) => {
    setCartItem((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const decreaseCartItems = (id) => {
    setCartItem((prev) => {
      if (prev.find((item) => item.id === id)?.quantity == 1) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  console.log(isOpen);

  return (
    <CartContext.Provider
      value={{
        getItem,
        increaseCartItems,
        decreaseCartItems,
        removeItem,
        cartItem,
        cartQuantity,
        openCart,
        isOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
