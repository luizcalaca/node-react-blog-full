import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_KEY,
  database: 'blog',
});

export default db;
