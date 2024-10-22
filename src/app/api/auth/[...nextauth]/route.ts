// src/app/api/auth/[...nextauth]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '../register';
import prisma from '@/src/lib/prismaClient';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs'; // Para comparar contraseñas encriptadas

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user.id, email: user.email };  // Retornamos el usuario autenticado
        }

        return null;  // Si no coinciden, retornamos null
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',  // Ruta del login
  },
  callbacks: {

    // Tipo para "session"
    async session({ session, token }: { session: any, token: any }) {
      // Incluir el ID del usuario en la sesión para ser usado en el frontend
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    
    // Tipo para "jwt"
    async jwt({ token, user }: { token: any, user: any }) {
      // Incluir el ID del usuario en el token JWT
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Secreto para la seguridad del JWT
};

export default NextAuth(authOptions);

// Ruta para registrar un nuevo usuario
export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const user = await createUser(email, password);

  if (user) {
    return NextResponse.json({ message: 'Usuario creado con éxito', user });
  }

  return NextResponse.json({ message: 'Error creando el usuario' }, { status: 400 });
}

// Ruta para autenticar un usuario (login)
export async function GET(request: NextRequest) {
  // Obtener los parámetros de la URL
  const email = request.nextUrl.searchParams.get('email');
  const password = request.nextUrl.searchParams.get('password');
  
  // Verificar si faltan parámetros
  if (!email || !password) {
    return new Response('Faltan parámetros', { status: 400 });
  }

  try {
    // Buscar al usuario en la base de datos por email
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      return new Response('Usuario no encontrado', { status: 404 });
    }

    // Aquí podrías verificar la contraseña, pero eso depende de cómo la almacenes (bcrypt, etc.)
    // Por ejemplo: 
    // const isValid = bcrypt.compareSync(password, user.password);
    // if (!isValid) return new Response('Contraseña incorrecta', { status: 401 });

    // Si todo está bien, devolver el usuario encontrado
    return new Response(JSON.stringify({ id: user.id, email: user.email }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // Manejar errores
    return new Response('Error del servidor', { status: 500 });
  }
}
