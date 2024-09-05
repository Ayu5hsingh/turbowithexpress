"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define interfaces for our data structures
interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}

// Mock product data
const products: Product[] = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
];

// Cart context
const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('ProductCard must be used within a CartProvider');
  }
  const { addToCart } = context;

  return (
    <div className="border p-4 m-2 rounded">
      <h3 className="font-bold">{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

const Cart: React.FC = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('Cart must be used within a CartProvider');
  }
  const { cart } = context;

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="border-t mt-4 pt-4">
      <h2 className="font-bold text-xl">Cart</h2>
      {cart.map((item, index) => (
        <p key={index}>{item.name} - ${item.price.toFixed(2)}</p>
      ))}
      <p className="font-bold mt-2">Total: ${total.toFixed(2)}</p>
    </div>
  );
};

const ProductCatalog: React.FC = () => {
  return (
    <CartProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    </CartProvider>
  );
};

export default ProductCatalog;