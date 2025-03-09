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

export interface CartItem {
  name: string;
  quantity: number;
  unitPrice: number;
}

export type CartProduct = Record<string, CartItem>;

export interface ProductsContextType {
  products: Product[];
  cartProducts: CartProduct;
  handleCartProductModification: (params: ModifyCartProductParams) => void;
}

export interface ProductsProviderProps {
  children: ReactNode;
} 

export interface ModifyCartProductParams {
  product: Product;
  action: '+' | '-';
}

export interface DecraseCartProductQuantityParams {
  productUuid: string;
  cartItem?: CartItem | undefined;
}

export interface IncreaseCartProductQuantityParams {
  product: Product;
  cartItem?: CartItem | undefined;
}
