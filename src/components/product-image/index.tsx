import { useContext } from 'react';

import { type ProductImageProps } from './types';
import './styles.scss';
import { MediaQueryContext } from '../../contexts/media-query-context';

const getImage = (isMobile: boolean, isTablet: boolean, mobile: string, tablet: string, desktop: string) => {
  if (isMobile) return mobile;
  if (isTablet) return tablet;

  return desktop;
}

export const ProductImage = ({
  thumbnail,
  mobile,
  tablet,
  desktop,
  name,
  isThumbnail,
  isInCart,
}: ProductImageProps) => {
  const { isMobile, isTablet } = useContext(MediaQueryContext);

  if (isThumbnail) {
    return (
      <div className="product-image">
        <img src={thumbnail} alt={name} />
      </div>
    );
  }

  return (
    <div className={`product-image ${isInCart ? 'product-image--in-cart' : ''}`}>
      <img 
        src={getImage(isMobile, isTablet, mobile, tablet, desktop)} 
        alt={name}
      />
    </div>
  );
};

export default ProductImage;
