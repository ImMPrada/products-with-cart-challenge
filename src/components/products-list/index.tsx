import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../contexts/products-context';
import { ProductCard } from '../product-card';
import './styles.scss';

function ProductsList() {
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="products-list">
      <h1 className="products-list__title text--bold">Desserts</h1>
      <div className="products-list__container">
        {products.map((product) => (
          <ProductCard key={product.uuid} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsList
