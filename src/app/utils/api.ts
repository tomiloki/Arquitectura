// src/utils/api.ts
import axios from 'axios';

// Definimos el tipo Product para utilizar en las solicitudes
interface Product {
  id: number;
  name: string;
  price: number;
}

// Creamos una instancia de Axios con la baseURL de la API de Next.js
const api = axios.create({
  baseURL: '/api',  // Next.js automáticamente maneja las rutas de API bajo /api
});

// Función para obtener los productos con el tipo explícito Product[]
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>('/productos');  // Aquí le decimos a Axios que esperamos Product[]
  return response.data;  // Devuelve los datos de los productos
};

// Función para crear un producto
export const createProduct = async (data: { name: string; price: number }) => {
  const response = await api.post('/productos', data);  // POST a '/api/productos'
  return response.data;
};
