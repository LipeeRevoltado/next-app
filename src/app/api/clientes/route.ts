import { NextResponse } from 'next/server';
import pool from '../../../lib/db';
import clientPromise from '@/lib/mongo';

export async function GET() {

  const client = await clientPromise;
  const db = client.db('devcontrole'); // <- substitua pelo nome real do seu banco
  const collection = db.collection('Customer'); // <- substitua pelo nome real da coleção

  const result = await collection.find({}).toArray();
  console.log("🚀 ~ GET ~ result:", result);

  // const [rows] = await pool.query('SELECT * FROM cliente ORDER BY id') as any[];
  // console.log('ROWS =>', rows);
  // const clientes = rows.map((row: any) => ({
  //   ...row,
  //   id: Number(row.id),
  // }));
  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const { nome, email, telefone } = await request.json();
  await pool.query('INSERT INTO cliente (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
  return NextResponse.json({ message: 'Cliente cadastrado' });
}