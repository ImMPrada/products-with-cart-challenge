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
  uuid: string;
}

export interface CartProduct {
  uuid: string;
  quantity: number;
  unitPrice: number;
}

export interface ProductsContextType {
  products: Product[];
  cartProducts: CartProduct[];
}

export interface ProductsProviderProps {
  children: ReactNode;
} 