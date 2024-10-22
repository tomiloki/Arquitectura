import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();  // Instanciamos Prisma

// Obtener todos los productos
export async function GET() {
  const products = await prisma.product.findMany();  // Usamos Prisma para obtener los productos
  return NextResponse.json(products);
}

// Crear un nuevo producto
export async function POST(request: Request) {
  const body = await request.json();
  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(newProduct);
}
