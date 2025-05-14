"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Clientes() {
  const [clientes, setClientes] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/clientes")
      .then(res => res.json())
      .then(data => setClientes(data));
  }, []);

  const excluirCliente = async (id: number) => {
    await fetch(`/api/clientes/${id}`, {
      method: "DELETE",
    });
    setClientes(clientes.filter(c => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-gray-600">Clientes</h1>
          <Link href="/clientes/novo">
            <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
              Novo Cliente
            </button>
          </Link>
        </div>

        {clientes.length === 0 ? (
          <p className="text-gray-600">Nenhum cliente encontrado.</p>
        ) : (
          <ul className="space-y-4">
            {clientes.map(cliente => (
              <li key={cliente.id} className="bg-white p-6 rounded-xl shadow flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600">{cliente.name}</p>
                  <p className="text-gray-600">{cliente.phone}</p>
                  <p className="text-gray-600">{cliente.email}</p>
                </div>
                <div className="flex space-x-3 mt-4 sm:mt-0">
                <Link href={`/clientes/${cliente.id}`}>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                      Editar
                    </button>
                  </Link>
                  <button
                    onClick={() => excluirCliente(cliente.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}