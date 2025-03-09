import { type AddToCartButtonProps } from './types';
import './styles.scss';
import AddToCartIcon from '../../assets/icon-add-to-cart.svg?react';


export const AddToCartButton = ({
  title,
}: AddToCartButtonProps) => {

  return (
    <div className="add-to-cart-button">
      <button className="add-to-cart-button__button text--bold">
        <AddToCartIcon />
        {title}
      </button>
    </div>
  );
};

export default AddToCartButton;
