import { useState, useEffect } from 'react';
import {
  Product,
  CartProduct,
  ProductsContextType,
  ProductsProviderProps,
  ModifyCartProductParams,
  DecraseCartProductQuantityParams,
  IncreaseCartProductQuantityParams,
} from './types';
import { ProductsContext } from './context';
import productsData from '../../data/data.json';

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<CartProduct>({});

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleCartProductModification = ({ product, action }: ModifyCartProductParams) => {
    const productUuid = product.uuid;
    const cartItem = cartProducts[productUuid];

    if (action === '-') {
      decraseCartProductQuantity({ productUuid, cartItem });
      return;
    }

    increaseCartProductQuantity({ product, cartItem });
  };

  const decraseCartProductQuantity = ({ productUuid, cartItem }: DecraseCartProductQuantityParams) => {
    if (!cartItem) return;
  
    const amount = cartItem.quantity - 1;
    const tempCartProducts = { ...cartProducts };

    if (amount >0) {
      tempCartProducts[productUuid] = { ...cartItem, quantity: amount };
    } else {
      delete tempCartProducts[productUuid];
    }

    setCartProducts(tempCartProducts);
  };

  const increaseCartProductQuantity = ({ product, cartItem }: IncreaseCartProductQuantityParams) => {
    const productUuid = product.uuid;
    const tempCartProducts = { ...cartProducts };
   
    if (cartItem) {
      tempCartProducts[productUuid] = { ...cartItem, quantity: cartItem.quantity + 1 };
    } else {
      tempCartProducts[productUuid] = { name: product.name, quantity: 1, unitPrice: product.price };
    }

    setCartProducts(tempCartProducts);
  };

  const contextVal: ProductsContextType = {
    products,
    cartProducts,
    handleCartProductModification,
  };

  return (
    <ProductsContext.Provider value={contextVal}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
