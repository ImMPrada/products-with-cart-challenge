import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../contexts/products-context';
import { ProductCard } from '../product-card';

function ProductsList() {
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="">
      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard key={product.uuid} {...product} />
      ))}
    </div>
  )
}

export default ProductsList
