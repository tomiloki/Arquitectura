"use client";  // Esto es necesario porque usas hooks como useState

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
      onProductAdded();  // Llamamos a la función que refresca la lista
    } catch (error) {
      console.error('Error creando producto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="productName" className="block text-sm font-medium">
          Nombre del producto
        </label>
        <input
          id="productName"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded w-full p-2"
          required
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="productPrice" className="block text-sm font-medium">
          Precio
        </label>
        <input
          id="productPrice"
          name="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border rounded w-full p-2"
          required
          autoComplete="off"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Agregar Producto
      </button>
    </form>
  );
};

export default ProductForm;
