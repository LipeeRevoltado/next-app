import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400">
        <Link href="/clientes">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-md">
            Acessar Clientes
          </button>
        </Link>
      </div>
  );
}
