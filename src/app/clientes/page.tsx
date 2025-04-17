import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../lib/db';

function extractIdFromUrl(url: string): string | null {
  const match = url.match(/\/api\/clientes\/(\d+)/);
  return match ? match[1] : null;
}

export async function PUT(request: NextRequest) {
  const id = extractIdFromUrl(request.url);
  if (!id) return NextResponse.json({ error: 'ID não encontrado na URL' }, { status: 400 });

  const { nome, telefone } = await request.json();
  await pool.query('UPDATE cliente SET nome = ?, telefone = ? WHERE id = ?', [nome, telefone, id]);
  return NextResponse.json({ message: 'Cliente atualizado' });
}

export async function DELETE(request: NextRequest) {
  const id = extractIdFromUrl(request.url);
  if (!id) return NextResponse.json({ error: 'ID não encontrado na URL' }, { status: 400 });

  await pool.query('DELETE FROM cliente WHERE id = ?', [id]);
  return NextResponse.json({ message: 'Cliente deletado' });
}
