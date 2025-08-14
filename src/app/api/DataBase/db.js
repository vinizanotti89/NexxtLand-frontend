const mysql = require("mysql2/promise");
require("dotenv").config();

const config = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // Configurações específicas para MySQL
  charset: 'utf8mb4',
  timezone: '+00:00', // UTC
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true,
  // Pool de conexões para melhor performance
  connectionLimit: 10,
  multipleStatements: false
};

let pool = null;

async function connectDB() {
  try {
    if (!pool) {
      pool = mysql.createPool(config);
    }

    // Testa a conexão
    const connection = await pool.getConnection();
    console.log("✅ Conectado ao MySQL com sucesso!");
    connection.release(); // Libera a conexão de volta para o pool

    return pool;
  } catch (err) {
    console.error("❌ Erro de conexão com o banco:", err);
    throw err;
  }
}

// Função para fechar o pool de conexões (útil para testes ou encerramento)
async function closeDB() {
  if (pool) {
    await pool.end();
    pool = null;
    console.log("🔌 Conexão com MySQL fechada");
  }
}

module.exports = {
  connectDB,
  closeDB
};