export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body className="bg-gray-100">
        <header className="p-4 bg-blue-600 text-white">
          <h1 className="text-2xl">Mi Aplicación</h1>
        </header>
        <main>{children}</main>
        <footer className="p-4 bg-blue-600 text-white text-center">
          © 2024 Mi Aplicación
        </footer>
      </body>
    </html>
  );
}
