"use client";  // Es un Client Component ya que usa hooks como useState

import { useState } from 'react';
import { createProduct } from '../utils/api';

const ProductForm = ({ onProductAdded }: { onProductAdded: () => void }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newProduct = { name, price: Number(price) };
      const response = await createProduct(newProduct);
      console.log(response);
      onProductAdded();  // Llamamos a la función que actualiza la lista de productos
    } catch (error) {
      console.error('Error creando producto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-md mx-auto">
      <div>
      <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
          Nombre del producto
        </label>
        <input
          id="productName"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          required
          autoComplete="name"
        />
      </div>
      <div>
      <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
          Precio
        </label>
        <input
          id="productPrice"
          name="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          required
          autoComplete="off"
        />
      </div>
      <button type="submit" className="w-full bg-sky-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-sky-600 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
      >
        Agregar Producto
      </button>
    </form>
  );
};

export default ProductForm;
