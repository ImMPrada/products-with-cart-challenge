export interface ProductImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductCardProps {
  image: ProductImage;
  name: string;
  category: string;
  price: number;
} 