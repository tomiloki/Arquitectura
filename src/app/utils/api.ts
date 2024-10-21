import axios from 'axios';

// Definimos el tipo Product para utilizar en las solicitudes
export interface Product {
  id: number;
  name: string;
  price: number;
}

// Creamos una instancia de Axios con la baseURL de la API de Next.js
const api = axios.create({
  baseURL: '/api',  // Next.js maneja automáticamente las rutas de API bajo /api
});

// Función para obtener los productos con el tipo explícito Product[]
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<Product[]>('/productos');  // Petición GET a /api/productos
    return response.data;  // Devuelve los datos de los productos
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('No se pudieron obtener los productos');
  }
};

// Función para crear un producto
export const createProduct = async (data: { name: string; price: number }): Promise<Product> => {
  try {
    const response = await api.post<Product>('/productos', data);  // POST a /api/productos con el nuevo producto
    return response.data;  // Devuelve el producto recién creado
  } catch (error) {
    console.error('Error creating product:', error);
    throw new Error('No se pudo crear el producto');
  }
};

