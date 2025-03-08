import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../contexts/products-context';

function ProductsList() {
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="">
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.uuid}>
          <h2>{product.name}</h2>
          <img src={product.image.thumbnail} alt={product.name} />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
