import { createContext } from 'react';
import { ProductsContextType } from './types';

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  cartProducts: [],
});

export default ProductsContext;
