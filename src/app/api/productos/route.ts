// src/app/api/productos/route.ts
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// Simulamos algunos productos
let products = [
  { id: uuidv4(), name: "Producto 1", price: 10 },
  { id: uuidv4(), name: "Producto 2", price: 20 },
  { id: uuidv4(), name: "Producto 3", price: 30 },
];

// Manejo de la solicitud GET: devuelve la lista de productos
export async function GET() {
  return NextResponse.json(products);
}

// Manejo de la solicitud POST: recibe un nuevo producto
export async function POST(request: Request) {
    const body = await request.json();
    const newProduct = { id: uuidv4(), ...body };  // Asignamos un ID único
    products.push(newProduct);  // Agregamos el producto recibido a la lista
    return NextResponse.json({ message: "Producto agregado con éxito", product: newProduct });
  }
