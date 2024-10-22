// src/app/api/auth/register.ts
import prisma from '@/src/lib/prismaClient';  // Prisma Client debe estar bien configurado
import bcrypt from 'bcryptjs';

export async function createUser(email: string, password: string) {
  try {
    // Encriptamos la contraseña antes de guardarla
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Creamos el nuevo usuario en la base de datos
    const newUser = await prisma.user.create({
      data: {
        email,  // El campo email debe existir en la base de datos
        password: hashedPassword,  // Contraseña encriptada
      },
    });

    // Retornamos el usuario creado
    return newUser;
  } catch (error) {
    console.error('Error creando usuario:', error);
    return null;
  }
}
