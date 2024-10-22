// src/app/api/auth/auth.ts
import prisma from '@/src/lib/prismaClient';
import bcrypt from 'bcryptjs';

export async function authenticateUser(email: string, password: string) {
  try {
    // Buscamos al usuario por email
    const user = await prisma.user.findUnique({
      where: { email },  // Usamos el campo `email`
    });

    if (!user) {
      console.log('Usuario no encontrado');
      return null;
    }

    // Verificamos si la contraseña es correcta
    const passwordValid = bcrypt.compareSync(password, user.password);
    if (!passwordValid) {
      console.log('Contraseña incorrecta');
      return null;
    }

    console.log('Autenticación exitosa:', user);
    return user;
  } catch (error) {
    console.error('Error autenticando usuario:', error);
    return null;
  }
}
