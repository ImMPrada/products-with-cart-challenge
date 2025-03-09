import './styles.scss';
import PlusIcon from '../../assets/icon-increment-quantity.svg?react';
import MinusIcon from '../../assets/icon-decrement-quantity.svg?react';
import { ModifyQuantityButtonProps } from './types';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products-context';

export const ModifyQuantityButton = ({ product }: ModifyQuantityButtonProps) => {
  const { handleCartProductModification, cartProducts } = useContext(ProductsContext);
  const quantity = cartProducts[product.uuid]?.quantity || 0;

  return (
    <div className="modify-quantity-button">
      <div className="modify-quantity-button__container">
        <button
          className="modify-quantity-button__container__button action-decrement"
          onClick={() => handleCartProductModification({product, action: '-'})}
        >
          <MinusIcon />
        </button>
        <span className="modify-quantity-button__container__quantity text--bold">
          {quantity}
        </span>
        <button
          className="modify-quantity-button__container__button action-increment"
          onClick={() => handleCartProductModification({product, action: '+'})}
        >
          <PlusIcon />
        </button>
      </div>

    </div>
  );
};

export default ModifyQuantityButton ;
