import './styles.scss';
import IllustrationEmptyCart from '../../assets/illustration-empty-cart.svg?react';

const EmptyInvoice = () => {

  return (
    <div className="invoice">
      <h2 className="text--bold">
        Total Cart (0)
      </h2>

      <div className="invoice__empty-cart">
        <IllustrationEmptyCart />
        <p className="text--bold">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
};

export default EmptyInvoice;
