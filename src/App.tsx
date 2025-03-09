import { MediaQueryProvider } from './contexts/media-query-context';
import { ProductsProvider } from './contexts/products-context';
import Desserts from './pages/desserts';

function App() {

  return (
    <div className="app">
      <MediaQueryProvider>
        <ProductsProvider>
          <Desserts />
        </ProductsProvider>
      </MediaQueryProvider>
    </div>
  )
}

export default App
