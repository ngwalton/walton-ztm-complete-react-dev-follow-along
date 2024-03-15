import { createContext, useState, useMemo } from 'react';

// actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = useMemo(() => ({ isCartOpen, setIsCartOpen }), [isCartOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
