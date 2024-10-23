import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container">
      <h1>Bienvenido a la Aplicación</h1>
      <p>Esta es la página principal de la aplicación.</p>

      <Link href="/productos">
        <button className="btn-primary">Ver Productos</button>
      </Link>
    </div>
  );
}
