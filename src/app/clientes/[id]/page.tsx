"use client";

import Link from "next/link";
import { useState } from "react";

export default function ClienteId({ params }: { params: { id: string } }) {
    const [cliente, setCliente] = useState({});

    console.log("ID =>", params.id);



  return (
    <div>
      <h1>Cliente ID: {params.id}</h1>
      <Link href="/clientes">Voltar</Link>

      <input></input>
    </div>
  );
}
