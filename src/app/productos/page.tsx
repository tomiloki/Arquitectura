"use client";

import { useEffect, useState } from 'react';
import { getProducts, Product } from '../utils/api';  // Importamos la API y el tipo Product
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);  // Estado para los productos

  // Función para obtener los productos desde la API
  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);  // Actualizamos el estado con los productos obtenidos
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();  // Obtenemos los productos al montar el componente
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Productos</h1>
      {/* Pasamos la función fetchProducts a ProductForm para actualizar la lista de productos */}
      <ProductForm onProductAdded={fetchProducts} />
      <h2 className="text-xl font-semibold mt-8">Lista de Productos</h2>
      <ProductList products={products} />  {/* Pasamos los productos a ProductList */}
    </div>
  );
}
