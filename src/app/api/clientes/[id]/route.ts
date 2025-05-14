import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../lib/db';

type Props = {
  params: Promise<{
    id: string
  }>
}

export async function PUT(request: NextRequest, props: Props) {
  const params = await props.params

  console.log('params', params);

  const { nome, telefone } = await request.json();
  await pool.query('UPDATE cliente SET nome = ?, telefone = ? WHERE id = ?', [nome, telefone, params.id]);
  return NextResponse.json({ message: 'Cliente atualizado' });
}

export async function DELETE(_: Request,  props: Props) {
  const params = await props.params

  await pool.query('DELETE FROM cliente WHERE id = ?', [params.id]);
  return NextResponse.json({ message: 'Cliente deletado' });
}