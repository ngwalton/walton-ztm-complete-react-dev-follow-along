import { createContext, useState, useMemo, useEffect } from 'react';

// import { addCollectionAndDocument } from '../utils/firebase/firebase.utils';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// import SHOP_DATA from '../shop-data';

// actual value you want to access
export const CategoriesContext = createContext({
  categoriesMap: {},
});

// eslint-disable-next-line react/prop-types
export function CategoriesProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [categoriesMap, setCategoriesMap] = useState({});

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

  const value = useMemo(() => ({ categoriesMap }), [categoriesMap]);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
