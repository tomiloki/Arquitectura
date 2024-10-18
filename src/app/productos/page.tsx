// productos/page.tsx
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const ProductPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Productos</h1>
      <ProductForm />
      <h2 className="text-xl font-semibold mt-8">Lista de Productos</h2>
      <ProductList />
    </div>
  );
};

export default ProductPage;
