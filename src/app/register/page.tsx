// app/register/page.tsx
import { useState } from 'react';

export default function Register() {
  const [errorMessage, setErrorMessage] = useState('');

  const isValidPassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = (e.currentTarget as any).username.value;
    const password = (e.currentTarget as any).password.value;

    if (!isValidPassword(password)) {
      setErrorMessage('La contraseña no es suficientemente robusta');
      return;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('Usuario registrado exitosamente');
    } else {
      setErrorMessage('Error registrando usuario');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-md">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Usuario</label>
          <input
            id="username"
            name="username"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button type="submit" className="w-full bg-sky-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-sky-600">
          Registrar Usuario
        </button>
      </form>
    </div>
  );
}
