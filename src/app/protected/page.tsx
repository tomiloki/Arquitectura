"use client";

import { useRouter } from 'next/navigation';

export default function AuthWarningPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Necesitas estar autenticado</h1>
      <button
        onClick={() => router.push('/auth/signin')} // Redirigir al login con botón
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Ir al Login
      </button>
    </div>
  );
}
