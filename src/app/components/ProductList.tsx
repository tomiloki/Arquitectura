// src/app/components/ProductList.tsx

"use client";

import { useEffect, useState } from 'react';
import { Product } from '../utils/api';  // Asegúrate de importar Product si lo necesitas en este archivo
import ProductItem from './ProductItem';  // Componente para cada producto

interface ProductListProps {
  products: Product[];  // Definimos las props que el componente espera recibir
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />  // Usamos ProductItem para cada producto
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default ProductList;
