// utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Asegúrate de configurar esta variable en tu .env
});

export const getProducts = async () => {
  return await api.get('/productos');
};

export const createProduct = async (data: { name: string; price: number }) => {
  return await api.post('/productos', data);
};
