import mysql from "mysql2/promise";
import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";


dotenv.config();
const port = 5000;
const app = express();
app.use(cors(({  origin: "http://localhost:5173" })));

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MY_SQL_ROOT,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

async function getEmployees(){

    const [rows] = await pool.query("SELECT * FROM employees")

    return rows;
}

async function getEmployee(id)
{
    const [rows] = await pool.query(`SELECT * FROM employees WHERE id = ?`, [id])
    return rows[0];
}

app.get('/api/employees', async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM employees");
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch employees' });
    }
  });

  
  
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });


