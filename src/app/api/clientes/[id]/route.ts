import { NextResponse } from 'next/server';
import pool from '../../../../../lib/db';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { nome, telefone } = await request.json();
  await pool.query('UPDATE cliente SET nome = ?, telefone = ? WHERE id = ?', [nome, telefone, params.id]);
  return NextResponse.json({ message: 'Cliente atualizado' });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await pool.query('DELETE FROM cliente WHERE id = ?', [params.id]);
  return NextResponse.json({ message: 'Cliente deletado' });
}
