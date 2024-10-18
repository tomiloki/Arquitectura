// components/ProductItem.tsx
interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductItem;
