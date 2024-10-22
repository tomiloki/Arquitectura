"use client"; // Asegúrate de que la página de login sea un Client Component

import { signIn } from 'next-auth/react';

export default function SignIn() {
  const handleLogin = async () => {
    await signIn('credentials', {
      redirect: true,  // Redirige automáticamente tras iniciar sesión
      callbackUrl: '/',  // Redirige al home tras login
    });
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
