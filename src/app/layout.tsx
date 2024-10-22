import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Evitar redireccionar si ya estamos en /auth/signin para no crear un bucle
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    if (pathname !== '/auth/signin') {
      redirect('/auth/signin');
    }
  }

  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
