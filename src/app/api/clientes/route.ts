import { NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM cliente ORDER BY id');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    return NextResponse.json([], { status: 500 }); // <- Retorna array vazio no erro
  }
}

export async function POST(request: Request) {
  const { nome, email, telefone } = await request.json();
  await pool.query('INSERT INTO cliente (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
  return NextResponse.json({ message: 'Cliente cadastrado' });
}