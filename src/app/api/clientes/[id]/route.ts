import { NextResponse } from 'next/server';
import pool from '../../../../../lib/db';

export async function PUT(request: Request, context: { params: { id: string } }) {
  const { params } = context;
  const { nome, telefone } = await request.json();
  await pool.query('UPDATE cliente SET nome = ?, telefone = ? WHERE id = ?', [nome, telefone, params.id]);
  return NextResponse.json({ message: 'Cliente atualizado' });
}

export async function DELETE(_: Request,  context: { params: { id: string } }) {
  const { params } = context;
  await pool.query('DELETE FROM cliente WHERE id = ?', [params.id]);
  return NextResponse.json({ message: 'Cliente deletado' });
}