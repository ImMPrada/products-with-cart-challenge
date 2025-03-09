import React from 'react';

import { type ProductImageProps } from './types';
import './styles.scss';

export const ProductImage = ({
  thumbnail,
  mobile,
  tablet,
  desktop,
  name,
  isThumbnail,
}: ProductImageProps) => {

  return (
    <div className="product-image">
      <img 
        src={thumbnail} 
        alt={name}
      />
    </div>
  );
};

export default ProductImage;
