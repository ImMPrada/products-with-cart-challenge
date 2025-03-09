import { MediaQueryProvider } from './contexts/media-query-context';
import ProductsList from './components/products-list';
import { ProductsProvider } from './contexts/products-context';

function App() {

  return (
    <div className="app">
      <MediaQueryProvider>
        <ProductsProvider>
          <ProductsList />
        </ProductsProvider>
      </MediaQueryProvider>
    </div>
  )
}

export default App
