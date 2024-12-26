import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}).promise();

export async function createuser(name, email, pss, conf_pass) {
  if (pss !== conf_pass) {
    return "Passwords do not match";
  }
  
  const [result] = await pool.query(
    `
    INSERT INTO users (full_name, email_address, password_hash, conf_password_hash)
    VALUES (?, ?, ?, ?)
    `,
    [name, email, pss, conf_pass]
  );

  return result;
}

export async function validateUser(email, password) {
  try {
    const [rows] = await pool.query(
      `
      SELECT * FROM users WHERE email_address = ?
      `,
      [email]
    );

    if (rows.length === 0) {
      return null; 
    }

    //const user = rows[0];
    //console.log(rows[0].password_hash);
    if (password === rows[0].password_hash) {
      return { id: rows[0].id};
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error validating user:', error);
    throw new Error('Database error occurred during user validation.');
  }
}
