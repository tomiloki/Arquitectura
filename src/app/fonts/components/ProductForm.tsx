import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/productos`, {
        nombre,
        descripcion,
        precio: parseFloat(precio),
      });
      console.log('Producto agregado:', response.data);
      // Resetear el formulario
      setNombre('');
      setDescripcion('');
      setPrecio('');
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700">Descripción</label>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700">Precio</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Agregar Producto
      </button>
    </form>
  );
};

export default ProductForm;
