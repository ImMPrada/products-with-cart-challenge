import { Product } from "../../contexts/products-context/types";

export interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductCardProps {
  product: Product;
} 