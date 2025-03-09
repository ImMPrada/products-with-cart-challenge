import { useContext } from 'react';
import './styles.scss';
import { ProductsContext } from '../../contexts/products-context';
import { CartProduct } from '../../contexts/products-context/types';
import EmptyInvoice from './empty-invoice';
import Item from './item';

const countProducts = (products: CartProduct) => {
  return Object.values(products).reduce((total, product) => total + product.quantity, 0);
};

const totalPrice = (products: CartProduct) => {
  return Object.values(products).reduce((total, product) => total + product.quantity * product.unitPrice, 0);
};

const Body = () => {
  const { cartProducts } = useContext(ProductsContext);
  const amount = countProducts(cartProducts);

  if (amount === 0) {
    return <EmptyInvoice />;
  }

  return (
    <>
      {Object.keys(cartProducts).map((uuid) => (
        <Item key={uuid} item={cartProducts[uuid]} />
      ))}

      <div className="invoice__total">
        <p>Order Total</p>
        <p className="text--bold">${totalPrice(cartProducts).toFixed(2)}</p>
      </div>
    </>
  );
};

export default Body;
