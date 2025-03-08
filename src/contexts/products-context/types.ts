import { ReactNode } from 'react';

interface ProductImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Product {
  image: ProductImage;
  name: string;
  category: string;
  price: number;
}

export interface ProductsContextType {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export interface ProductsProviderProps {
  children: ReactNode;
} 