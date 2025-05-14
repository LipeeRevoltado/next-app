import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '144.22.200.28',
  user: 'felipe',
  password: 'GpCBsGBcsjGnZMxP',
  database: 'felipe',
  port: 3306,
});

export default pool;