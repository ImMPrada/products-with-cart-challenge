import { ProductsProvider } from './contexts/products-context';
import ProductsList from './components/products-list';

function App() {

  return (
    <div className="app">
      <ProductsProvider>
        <ProductsList />
      </ProductsProvider>
    </div>
  )
}

export default App
