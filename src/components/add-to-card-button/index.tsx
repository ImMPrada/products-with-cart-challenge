import './styles.scss';
import AddToCartIcon from '../../assets/icon-add-to-cart.svg?react';
import { AddToCartButtonProps } from './types';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products-context';

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { handleCartProductModification } = useContext(ProductsContext);

  return (
    <div className="add-to-cart-button">
      <button
        className="add-to-cart-button__button text--bold"
        onClick={() => handleCartProductModification({ product, action: '+' })}
      >
        <AddToCartIcon />
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
