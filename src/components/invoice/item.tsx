import './styles.scss';
import { ItemProps } from './types';
import IconRemoveItem from '../../assets/icon-remove-item.svg?react';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products-context';

const Item = ({ uuid, item }: ItemProps) => {
  const { removeCartProduct } = useContext(ProductsContext);

  return (
    <div className="item">
      <div className="item__details">
        <p className="item__details__name text--bold">
          {item.name}
        </p>
        <p className="item__details__price">
          <span className="text--bold">${item.quantity}x</span>
          <span className="text--regular">@ ${(item.unitPrice).toFixed(2)}</span>
          <span className="text--bold">${(item.quantity * item.unitPrice).toFixed(2)}</span>
        </p>
      </div>
      <button
        className="item__button"
        onClick={() => removeCartProduct({ productUuid: uuid })}
      >
        <IconRemoveItem />
      </button>
    </div>
  );
};

export default Item;
