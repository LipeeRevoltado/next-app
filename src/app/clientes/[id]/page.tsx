"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ClienteId() {
  
  const params = useParams();
  const id = params?.id as string;
  console.log('ID DO CLIENTE = ', id);
  
  const [cliente, setCliente] = useState();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/clientes`)
      .then(res => res.json())
      .then(data => {
        const c = data.find((c: any) => c.id == id);
        if (c) {
          setCliente(c);
          setNome(c.nome);
          setTelefone(c.telefone);
        }
      });
  }, [id]);

  const handleUpdate = async () => {
    await fetch(`/api/clientes/${id}`, {
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
        <h1 className="text-gray-600 font-bold mb-6">Editando Cliente #{id}</h1>
        <div className="space-y-4">
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Nome"
            className="w-full border rounded px-4 py-2 text-gray-600"
          />
          <input
            type="text"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            placeholder="Telefone"
            className="w-full border rounded px-4 py-2 text-gray-600"
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