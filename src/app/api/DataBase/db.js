const sql = require("mssql");
require("dotenv").config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_NAME,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: false,
  },
};

async function connectDB() {
  try {
    const pool = await sql.connect(config);
    console.log("✅ Conectado ao SQL Server com sucesso!");
    return pool;
  } catch (err) {
    console.error("❌ Erro de conexão com o banco:", err);
    throw err;
  }
}

module.exports = {
  sql,
  connectDB,
};