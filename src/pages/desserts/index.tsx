import './styles.scss';
import ProductsList from '../../components/products-list';
import Invoice from '../../components/invoice';

function Desserts() {
  return (
    <div className="desserts">
      <ProductsList />
      <Invoice />
    </div>
  )
}

export default Desserts
