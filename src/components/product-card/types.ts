export interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductCardProps {
  image: Image;
  name: string;
  category: string;
  price: number;
} 