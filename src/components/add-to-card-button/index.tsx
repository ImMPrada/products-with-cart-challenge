import './styles.scss';
import AddToCartIcon from '../../assets/icon-add-to-cart.svg?react';


export const AddToCartButton = () => {

  return (
    <div className="add-to-cart-button">
      <button className="add-to-cart-button__button text--bold">
        <AddToCartIcon />
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
