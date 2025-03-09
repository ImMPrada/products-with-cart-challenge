export interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductImageProps extends Image {
  name: string;
  isThumbnail: boolean;
  isInCart: boolean;
}
