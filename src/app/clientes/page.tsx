import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function PUT(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();
  if (!id) {
    return NextResponse.json({ error: 'ID não encontrado' }, { status: 400 });
  }

  const { nome, telefone } = await request.json();
  await pool.query('UPDATE cliente SET nome = ?, telefone = ? WHERE id = ?', [nome, telefone, id]);
  return NextResponse.json({ message: 'Cliente atualizado' });
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();
  if (!id) {
    return NextResponse.json({ error: 'ID não encontrado' }, { status: 400 });
  }

  await pool.query('DELETE FROM cliente WHERE id = ?', [id]);
  return NextResponse.json({ message: 'Cliente deletado' });
}
