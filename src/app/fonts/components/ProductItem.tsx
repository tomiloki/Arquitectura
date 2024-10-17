import React from 'react';

interface ProductItemProps {
  product: {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
  };
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <li className="p-4 border rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold">{product.nombre}</h3>
      <p className="text-sm text-gray-600">{product.descripcion}</p>
      <p className="text-lg font-bold">Precio: ${product.precio}</p>
    </li>
  );
};

export default ProductItem;
