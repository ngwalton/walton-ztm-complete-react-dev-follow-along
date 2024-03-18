// import { useContext } from 'react';

// import { CategoriesContext } from '../../contexts/categories.context';
// import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

function Shop() {
  // const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="products-container">
      {/* {categoriesMap.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })} */}
    </div>
  );
}

export default Shop;
