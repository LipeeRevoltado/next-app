import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function PUT(request: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;
  const { nome, telefone } = await request.json();
  await pool.query('UPDATE cliente SET nome = ?, telefone = ? WHERE id = ?', [nome, telefone, id]);
  return NextResponse.json({ message: 'Cliente atualizado' });
}

export async function DELETE(request: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;
  await pool.query('DELETE FROM cliente WHERE id = ?', [id]);
  return NextResponse.json({ message: 'Cliente deletado' });
}
