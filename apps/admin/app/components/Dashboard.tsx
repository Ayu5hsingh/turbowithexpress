"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface NewProduct {
  name: string;
  price: string; // Using string for input value
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<NewProduct>({ name: '', price: '' });

  useEffect(() => {
    // In a real app, you'd fetch this from your API
    setProducts([
      { id: 1, name: 'Product 1', price: 19.99 },
      { id: 2, name: 'Product 2', price: 29.99 },
      { id: 3, name: 'Product 3', price: 39.99 },
    ]);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };    

  const handleAddProduct = () => {
    // In a real app, you'd send this to your API
    const productToAdd: Product = {
      ...newProduct,
      id: Date.now(),
      price: parseFloat(newProduct.price) // Convert string to number
    };
    setProducts(prev => [...prev, productToAdd]);
    setNewProduct({ name: '', price: '' });
  };

  const handleDeleteProduct = (id: number) => {
    // In a real app, you'd send a delete request to your API
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Add New Product</h2>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddProduct}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>
      
      <h2 className="text-xl font-bold mb-2">Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="flex justify-between items-center border-b py-2">
            <span>{product.name} - ${product.price.toFixed(2)}</span>
            <button
              onClick={() => handleDeleteProduct(product.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;