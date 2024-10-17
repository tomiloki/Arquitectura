import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from '@/components/ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]); // El estado ahora espera un array de productos tipado.

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(`${process.env.NEXT_PUBLIC_API_URL}/productos`); // Aquí tipamos la respuesta como un array de productos.
        setProducts(response.data); // Ahora la asignación es válida, ya que el tipo de data coincide con el estado.
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Llamamos a la función de manera correcta.
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;