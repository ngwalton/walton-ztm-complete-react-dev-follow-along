import { createContext, useState, useMemo, useCallback } from 'react';

// actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => productToAdd.id === cartItem.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      productToAdd.id === cartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = useCallback(
    (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd));
    },
    [cartItems]
  );

  const deleteItemFromCart = useCallback(
    (productToDelete) => {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.id !== productToDelete.id)
      );
    },
    [cartItems]
  );

  const removeItemFromCart = useCallback(
    (productToRemove) => {
      if (productToRemove.quantity === 1) {
        deleteItemFromCart(productToRemove);
        return;
      }

      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    },
    [cartItems, deleteItemFromCart]
  );

  const value = useMemo(
    () => ({
      isCartOpen,
      setIsCartOpen,
      addItemToCart,
      cartItems,
      removeItemFromCart,
      deleteItemFromCart,
    }),
    [
      isCartOpen,
      addItemToCart,
      cartItems,
      deleteItemFromCart,
      removeItemFromCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
