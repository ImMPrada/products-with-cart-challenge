import { type ProductCardProps } from './types';
import './styles.scss';
import ProductImage from '../product-image';
import { AddToCartButton } from '../add-to-card-button';

export const ProductCard = ({ image, name, category, price }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product-card__header">
        <ProductImage
          {...image}
          name={name}
          isThumbnail={false}
        />

        <AddToCartButton
          title="Add to Cart"
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
