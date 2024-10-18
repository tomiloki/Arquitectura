// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">¡Bienvenido a mi Catálogo de Productos!</h1>
      <p className="mt-4 text-lg">Empieza a agregar productos o ver el listado disponible.</p>
      
      {/* Botón para ir a la página de productos */}
      <Link href="/productos">
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Ver Productos
        </button>
      </Link>
    </main>
  );
}
