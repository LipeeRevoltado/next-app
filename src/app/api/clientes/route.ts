import { NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function GET() {
  const [rows] = await pool.query('SELECT * FROM cliente ORDER BY id');
  const clientes = rows.map((row: any) => ({
    ...row,
    id: Number(row.id),
  }));
  return NextResponse.json(clientes);
}

export async function POST(request: Request) {
  const { nome, email, telefone } = await request.json();
  await pool.query('INSERT INTO cliente (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
  return NextResponse.json({ message: 'Cliente cadastrado' });
}