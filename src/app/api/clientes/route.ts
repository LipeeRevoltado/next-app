import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../lib/db';

type Context = {
  params: { id: string };
};

export async function PUT(request: NextRequest, { params }: Context) {
  const { nome, telefone } = await request.json();
  await pool.query('UPDATE cliente SET nome = ?, telefone = ? WHERE id = ?', [nome, telefone, params.id]);
  return NextResponse.json({ message: 'Cliente atualizado' });
}

export async function DELETE(request: NextRequest, { params }: Context) {
  await pool.query('DELETE FROM cliente WHERE id = ?', [params.id]);
  return NextResponse.json({ message: 'Cliente deletado' });
}
