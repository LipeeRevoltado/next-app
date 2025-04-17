import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const { nome, telefone } = await request.json();

  if (!id) {
    return NextResponse.json({ error: 'ID não fornecido' }, { status: 400 });
  }

  await pool.query('UPDATE cliente SET nome = ?, telefone = ? WHERE id = ?', [nome, telefone, id]);
  return NextResponse.json({ message: 'Cliente atualizado' });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID não fornecido' }, { status: 400 });
  }

  await pool.query('DELETE FROM cliente WHERE id = ?', [id]);
  return NextResponse.json({ message: 'Cliente deletado' });
}
