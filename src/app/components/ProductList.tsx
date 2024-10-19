// src/app/components/ProductList.tsx

"use client";  

import { useEffect, useState } from 'react';
import { getProducts } from '../utils/api';
import ProductItem from './ProductItem'; // No olvidamos este componente

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]); // Tipamos el estado como un array de productos

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await getProducts(); // Tipamos la respuesta como un array de productos
        setProducts(data); // Ahora TypeScript sabe que data es Product[]
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} /> // Usamos ProductItem para cada producto
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default ProductList;
