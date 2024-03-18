import { createContext, useState, useMemo, useEffect } from 'react';

// import { addCollectionAndDocument } from '../utils/firebase/firebase.utils';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// import SHOP_DATA from '../shop-data';

// actual value you want to access
export const ProductsContext = createContext({
  products: [],
});

// eslint-disable-next-line react/prop-types
export function ProductProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);

  // this isn't the place to be uploading data, but we did it anyway
  // useEffect(
  //   () => async () => addCollectionAndDocument('categories', SHOP_DATA),
  //   []
  // );

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = useMemo(() => ({ products }), [products]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
