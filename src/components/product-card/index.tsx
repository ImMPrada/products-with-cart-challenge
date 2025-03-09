import { useContext } from 'react';
import { type ProductCardProps } from './types';
import './styles.scss';
import ProductImage from '../product-image';
import { ModifyQuantityButton } from '../modify-quantity-button';
import { AddToCartButton } from '../add-to-card-button';
import { ProductsContext } from '../../contexts/products-context';
import { CartProduct } from '../../contexts/products-context/types';

const isProductInCart = (productUuid: string, cartProducts: CartProduct) => {
  return cartProducts[productUuid] !== undefined;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { cartProducts } = useContext(ProductsContext);
  const { image, name, category, price } = product;
  const isInCart = isProductInCart(product.uuid, cartProducts);

  return (
    <div className="product-card">
      <div className="product-card__header">
        <ProductImage
          {...image}
          name={name}
          isInCart={isInCart}
          isThumbnail={false}
        />

        {isInCart ? (
          <ModifyQuantityButton product={product} />
        ) : (
          <AddToCartButton product={product} />
        )}
      </div>

      <div className="product-card__content">
        <p className="product-card__content__category text--bold">{category}</p>
        <p className="product-card__content__name text--bold">{name}</p>
        <p className="product-card__content__price text--bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
