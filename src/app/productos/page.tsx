
"use client";

import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import { useState, useEffect } from 'react';
import { getProducts, Product } from '../utils/api'; // Si la interfaz Product está en api.ts


export default function Page() {  // El archivo es Page porque es el nombre que Next.js usa para rutas
  const [products, setProducts] = useState<Product[]>([]);

  // Función para obtener los productos desde la API
  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();  // Obtenemos los productos al cargar la página
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Productos</h1>
      <ProductForm onProductAdded={fetchProducts} />  {/* Pasamos la función de actualización */}
      <h2 className="text-xl font-semibold mt-8">Lista de Productos</h2>
      <ProductList products={products} />
    </div>
  );
}
