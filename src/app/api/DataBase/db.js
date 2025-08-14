const mysql = require("mysql2/promise");
require("dotenv").config();

const config = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: 'utf8mb4',
  timezone: '-03:00', 
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true,
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

// Função para inserir investidor
async function insertInvestidor(data) {
  try {
    await connectDB();
    
    // Converte as datas ISO string para objetos Date do MySQL
    const criadoEm = data.CriadoEm ? new Date(data.CriadoEm) : new Date();
    const atualizadoEm = data.AtualizadoEm ? new Date(data.AtualizadoEm) : new Date();

    const query = `
      INSERT INTO Investidor (
        Nome, Email, Cidade, UF, WhatsApp, JaInvestiu, 
        IdFaixaInvestimento, IdObjetivoInvestidor, IdPreferenciaImovel, 
        QuerFalarEspecialista, ComoConheceu, CriadoEm, AtualizadoEm
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      data.Nome,
      data.Email,
      data.Cidade || null,
      data.UF || null,
      data.WhatsApp,
      data.JaInvestiu || 0,
      data.IdFaixaInvestimento || 0,
      data.IdObjetivoInvestidor || 0,
      data.IdPreferenciaImovel || 0,
      data.QuerFalarEspecialista || 0,
      data.ComoConheceu || null,
      criadoEm,
      atualizadoEm
    ];

    console.log('📝 Inserindo investidor:', {
      query: query.substring(0, 100) + '...',
      values: values.map((v, i) => `${i}: ${v}`),
      dates: { criadoEm, atualizadoEm }
    });

    const [result] = await pool.execute(query, values);
    
    console.log('✅ Investidor inserido com sucesso:', {
      insertId: result.insertId,
      affectedRows: result.affectedRows
    });

    return {
      success: true,
      insertId: result.insertId,
      message: 'Investidor cadastrado com sucesso!'
    };

  } catch (error) {
    console.error('❌ Erro ao inserir investidor:', {
      message: error.message,
      code: error.code,
      errno: error.errno,
      sql: error.sql
    });
    
    throw {
      success: false,
      error: error.message,
      code: error.code || 'DB_ERROR'
    };
  }
}

// Função para inserir corretor
async function insertCorretor(data) {
  try {
    await connectDB();
    
    // Converte as datas ISO string para objetos Date do MySQL
    const criadoEm = data.CriadoEm ? new Date(data.CriadoEm) : new Date();
    const atualizadoEm = data.AtualizadoEm ? new Date(data.AtualizadoEm) : new Date();

    const query = `
      INSERT INTO Corretor (
        TipoAtuacao, Nome, NomeImobiliaria, WhatsApp, Email, 
        IdTipoCliente, JaVendeuInternacional, IdFaixaClientes50k, 
        QuerTreinamento, IdCNPJAtivo, CriadoEm, AtualizadoEm
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      data.TipoAtuacao || 0,
      data.Nome,
      data.NomeImobiliaria || null,
      data.WhatsApp,
      data.Email,
      data.IdTipoCliente || 0,
      data.JaVendeuInternacional || 0,
      data.IdFaixaClientes50k || 0,
      data.QuerTreinamento || 0,
      data.IdCNPJAtivo || 0,
      criadoEm,
      atualizadoEm
    ];

    console.log('📝 Inserindo corretor:', {
      query: query.substring(0, 100) + '...',
      values: values.map((v, i) => `${i}: ${v}`),
      dates: { criadoEm, atualizadoEm }
    });

    const [result] = await pool.execute(query, values);
    
    console.log('✅ Corretor inserido com sucesso:', {
      insertId: result.insertId,
      affectedRows: result.affectedRows
    });

    return {
      success: true,
      insertId: result.insertId,
      message: 'Corretor cadastrado com sucesso!'
    };

  } catch (error) {
    console.error('❌ Erro ao inserir corretor:', {
      message: error.message,
      code: error.code,
      errno: error.errno,
      sql: error.sql
    });
    
    throw {
      success: false,
      error: error.message,
      code: error.code || 'DB_ERROR'
    };
  }
}

// Função genérica para executar queries (útil para outros casos)
async function executeQuery(query, values = []) {
  try {
    await connectDB();
    const [results] = await pool.execute(query, values);
    return results;
  } catch (error) {
    console.error('❌ Erro ao executar query:', error);
    throw error;
  }
}

// Função para verificar se um email já existe (evitar duplicatas)
async function checkEmailExists(email, table) {
  try {
    const query = `SELECT COUNT(*) as count FROM ${table} WHERE Email = ?`;
    const [results] = await pool.execute(query, [email]);
    return results[0].count > 0;
  } catch (error) {
    console.error('❌ Erro ao verificar email:', error);
    return false;
  }
}

// Função para buscar dados (útil para relatórios)
async function getInvestidores(limit = 50, offset = 0) {
  try {
    const query = `
      SELECT * FROM Investidor 
      ORDER BY CriadoEm DESC 
      LIMIT ? OFFSET ?
    `;
    return await executeQuery(query, [limit, offset]);
  } catch (error) {
    console.error('❌ Erro ao buscar investidores:', error);
    throw error;
  }
}

async function getCorretores(limit = 50, offset = 0) {
  try {
    const query = `
      SELECT * FROM Corretor 
      ORDER BY CriadoEm DESC 
      LIMIT ? OFFSET ?
    `;
    return await executeQuery(query, [limit, offset]);
  } catch (error) {
    console.error('❌ Erro ao buscar corretores:', error);
    throw error;
  }
}

module.exports = {
  connectDB,
  closeDB,
  insertInvestidor,
  insertCorretor,
  executeQuery,
  checkEmailExists,
  getInvestidores,
  getCorretores
};