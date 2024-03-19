/* eslint-disable react/prop-types */
import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title}</Title>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
