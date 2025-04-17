"use client";

import { useState } from "react";

export default function Clientes() {
  const [clientes, setClientes] = useState({});

  console.log('LISTA DE CLIENTES');

  return (
    <div>
      <h1>Lista de Clientes</h1>
    </div>
  );
}
