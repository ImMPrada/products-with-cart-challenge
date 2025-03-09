import { useContext } from 'react';
import './styles.scss';
import { ProductsContext } from '../../contexts/products-context';
import { CartProduct } from '../../contexts/products-context/types';
import EmptyInvoice from './empty-invoice';

const countProducts = (products: CartProduct) => {
  return Object.values(products).reduce((total, product) => total + product.quantity, 0);
};

const Invoice = () => {
  const { cartProducts } = useContext(ProductsContext);
  const amount = countProducts(cartProducts);

  if (amount === 0) {
    return <EmptyInvoice />;
  }

  return (
    <div className="invoice">
      <h2 className="text--bold">
        Total Cart ({amount})
      </h2>
    </div>
  );
};

export default Invoice;
