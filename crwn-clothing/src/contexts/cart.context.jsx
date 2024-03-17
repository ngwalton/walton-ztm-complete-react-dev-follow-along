import { createContext, useState, useMemo, useCallback } from 'react';

// actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
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

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItemToRemove.id === cartItem.id
  );

  if (existingCartItem.quantity === 1) {
    return clearCartItem(cartItems, cartItemToRemove);
  }

  return cartItems.map((cartItem) =>
    cartItemToRemove.id === cartItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
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

  const removeItemFromCart = useCallback(
    (cartItemToRemove) => {
      setCartItems(removeCartItem(cartItems, cartItemToRemove));
    },
    [cartItems]
  );

  const clearItemFromCart = useCallback(
    (cartItemToClear) => {
      setCartItems(clearCartItem(cartItems, cartItemToClear));
    },
    [cartItems]
  );

  const value = useMemo(
    () => ({
      isCartOpen,
      setIsCartOpen,
      addItemToCart,
      cartItems,
      removeItemFromCart,
      clearItemFromCart,
    }),
    [
      isCartOpen,
      addItemToCart,
      cartItems,
      clearItemFromCart,
      removeItemFromCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
