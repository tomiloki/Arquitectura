// app/layout.tsx
import './globals.css';  // Aquí puedes importar tus estilos globales
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/productos">Productos</a></li>
            </ul>
          </nav>
        </header>
        
        <main>
          {children}  {/* Renderiza las páginas aquí */}
        </main>

        <footer>
          <p>© 2024 Mi Aplicación</p>
        </footer>
      </body>
    </html>
  );
}
