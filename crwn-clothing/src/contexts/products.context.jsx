import { createContext, useState, useMemo } from 'react';

import PRODUCTS from '../shop-data.json';

// actual value you want to access
export const ProductsContext = createContext({
  products: [],
});

// eslint-disable-next-line react/prop-types
export function ProductProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(PRODUCTS);
  const value = useMemo(() => ({ products }), [products]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
