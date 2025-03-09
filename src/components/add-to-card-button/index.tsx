import { type AddToCartButtonProps } from './types';
import './styles.scss';

export const AddToCartButton = ({
  title,
}: AddToCartButtonProps) => {

  return (
    <div className="add-to-cart-button">
      <button className="add-to-cart-button__button text--bold">
        {title}
      </button>
    </div>
  );
};

export default AddToCartButton;
