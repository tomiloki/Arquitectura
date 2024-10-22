import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuthRoute = req.nextUrl.pathname.startsWith('/auth');

    // Si el usuario ya está autenticado y está en una ruta de autenticación, lo redirigimos al home
    if (isAuthRoute && token) {
      return NextResponse.redirect(new URL('/', req.url)); 
    }

    // Si el usuario no está autenticado y está accediendo a rutas protegidas, redirigir al login
    if (!token && req.nextUrl.pathname !== '/auth/signin') {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }

    return NextResponse.next();  // Permitir la navegación si no es necesario redirigir
  },
  {
    pages: {
      signIn: '/auth/signin',  // Página de login si no está autenticado
    },
  }
);

export const config = { matcher: ['/auth/:path*', '/protected/:path*'] };
