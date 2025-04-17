"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ClienteId({ params }: { params: { id: string } }) {
  const [cliente, setCliente] = useState<any>(null);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/clientes`)
      .then(res => res.json())
      .then(data => {
        const c = data.find((c: any) => c.id == params.id);
        if (c) {
          setCliente(c);
          setNome(c.nome);
          setTelefone(c.telefone);
        }
      });
  }, [params.id]);

  const handleUpdate = async () => {
    await fetch(`/api/clientes/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({ nome, telefone }),
      headers: { 'Content-Type': 'application/json' },
    });
    router.push('/clientes');
  };

  if (!cliente) return <p className="p-4">Carregando...</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Editando Cliente #{params.id}</h1>
        <div className="space-y-4">
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Nome"
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="text"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            placeholder="Telefone"
            className="w-full border rounded px-4 py-2"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
}