import './styles.scss';
import PlusIcon from '../../assets/icon-increment-quantity.svg?react';
import MinusIcon from '../../assets/icon-decrement-quantity.svg?react';


export const ModifyQuantityButton = () => {

  return (
    <div className="modify-quantity-button">
      <div className="modify-quantity-button__container">
        <button className="modify-quantity-button__container__button action-decrement">
          <MinusIcon />
        </button>
        <span className="modify-quantity-button__container__quantity text--bold">4</span>
        <button className="modify-quantity-button__container__button action-increment">
          <PlusIcon />
        </button>
      </div>

    </div>
  );
};

export default ModifyQuantityButton ;
