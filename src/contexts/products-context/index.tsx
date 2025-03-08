import { useState, useEffect } from 'react';
import { Product, ProductsContextType, ProductsProviderProps } from './types';
import { ProductsContext } from './context';
import productsData from '../../data/data.json';

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const contextVal: ProductsContextType = {
    products,
    setProducts,
  };

  return (
    <ProductsContext.Provider value={contextVal}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
