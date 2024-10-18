// components/ProductList.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('/api/productos'); // Aquí especificamos que la respuesta será de tipo Product[]
        setProducts(response.data); // Ya no tendrás problemas con el tipo de 'response.data'
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
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default ProductList;
