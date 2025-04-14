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


app.get('/api/user/:userId/data', async (req, res) => {
  const userId = req.params.userId;
  console.log("Received request for userId:", userId);  // Log the userId

  const sql = `SELECT * FROM nutrientgoals WHERE user_id = ?`;

  try {
    const [results] = await pool.query(sql, [userId]);

    if (results.length === 0) {
      console.log("No results found for userId:", userId);
      return res.status(404).json({ error: 'No data found for this user' });
    }

    console.log("Found data:", results);  // Log the results
    res.json(results[0]);  // Send the first result
  } catch (err) {
    console.error('Database error:', err);
    return res.status(500).json({ error: 'Database error' });
  }
});

app.get(`/api/user/:userId/userInfo`, async (req, res) => {
  const userId = req.params.userId;

  console.log(userId)
  const sql = `SELECT * FROM userinfo WHERE id = ? `;
  try {
    const [results] = await pool.query(sql, [userId]);

    if (results.length === 0) {
      console.log("No results found for userId:", userId);
      return res.status(404).json({ error: 'No data found for this user' });
    }
  console.log("Results", results)
  res.json(results[0])
  }catch(err){
    console.error('Database error:', err);
    return res.status(500).json({ error: 'Database error' });
  }
})
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
