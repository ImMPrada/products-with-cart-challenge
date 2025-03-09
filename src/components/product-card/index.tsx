import React from 'react';
import { type ProductCardProps } from './types';
import './styles.scss';

export const ProductCard = ({ image, name, category, price }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img 
          src={image.thumbnail} 
          alt={name}
          className="product-card__thumbnail"
        />
      </div>
      <div className="product-card__content">
        <p className="product-card__content__category">{category}</p>
        <p className="product-card__content__name text--bold">{name}</p>
        <p className="product-card__content__price text--bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
