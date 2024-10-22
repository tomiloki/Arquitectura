"use client"; // Necesario para usar hooks en Client Components

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function WelcomePage() {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/protected'); // Redirigir a una página protegida si no está autenticado
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Cargando...</div>;
  }

  if (status === 'authenticated') {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Bienvenido, {session?.user?.email}</h1>
      </div>
    );
  }

  return null;
}
