import { NextResponse } from "next/server";

let listaClientes = [
  { id: 1, nome: "João", idade: 25 },
  { id: 2, nome: "Maria", idade: 30 },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log("PARAMS =>", searchParams);

  const nome = searchParams.get("nome");
  console.log("PARAMS nome =>", nome);

  return NextResponse.json(listaClientes, { status: 201 });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log("BODY =>", body);

  return NextResponse.json({ message: "Hello World" });
}
