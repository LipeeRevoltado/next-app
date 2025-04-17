import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400">
      <div className="bg-white rounded-xl shadow-xl p-10 text-center space-y-6 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-gray-800">Sistema de Clientes</h1>
        <p className="text-gray-600">Gerencie seus clientes com facilidade e agilidade.</p>
        <Link href="/clientes">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-md">
            Acessar Clientes
          </button>
        </Link>
      </div>
    </div>
  );
}
