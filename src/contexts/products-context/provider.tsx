import { useState, useEffect } from 'react';
import {
  Product,
  CartProduct,
  ProductsContextType,
  ProductsProviderProps,
} from './types';
import { ProductsContext } from './context';
import productsData from '../../data/data.json';

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const contextVal: ProductsContextType = {
    products,
    cartProducts,
  };

  return (
    <ProductsContext.Provider value={contextVal}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
