// src/app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '../auth/register';  // Asegúrate de que el archivo ./register existe

export async function POST(request: NextRequest) {
  try {
    // Parseamos el cuerpo de la solicitud
    const body = await request.json();
    const { email, password } = body;

    // Verificamos que `email` y `password` estén presentes
    if (!email || !password) {
      return NextResponse.json({ message: 'Email y contraseña son requeridos' }, { status: 400 });
    }

    // Creamos el usuario
    const user = await createUser(email, password);

    if (user) {
      return NextResponse.json({ message: 'Usuario creado con éxito', user }, { status: 201 });
    }

    return NextResponse.json({ message: 'Error creando el usuario' }, { status: 500 });
  } catch (error) {
    console.error('Error en el registro de usuario:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}
