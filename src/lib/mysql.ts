import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || '194.59.164.55',
  user: process.env.DB_USER || 'u963457986_playname',
  password: process.env.DB_PASSWORD || 'Keng@1995',
  database: process.env.DB_NAME || 'u963457986_playname',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

export async function getConnection() {
  return pool.getConnection();
}

export async function query(sql: string, params?: any[]) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}

export async function initDatabase(): Promise<void> {
  // Create tables if they don't exist
  const tables = [
    `CREATE TABLE IF NOT EXISTS account (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255),
      token VARCHAR(255),
      wallet DECIMAL(15,2) DEFAULT 0,
      session VARCHAR(255),
      game VARCHAR(255) DEFAULT '789Club',
      time DATETIME DEFAULT CURRENT_TIMESTAMP,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY unique_username_game (username, game),
      INDEX idx_token (token),
      INDEX idx_session (session)
    )`,
    `CREATE TABLE IF NOT EXISTS login_logs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255),
      password VARCHAR(255),
      wallet VARCHAR(255),
      token VARCHAR(255),
      session VARCHAR(255),
      ip VARCHAR(45),
      login_time DATETIME DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_username (username),
      INDEX idx_login_time (login_time)
    )`,
    `CREATE TABLE IF NOT EXISTS admin_users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS admin_bank (
      id INT AUTO_INCREMENT PRIMARY KEY,
      bank_name VARCHAR(255),
      account_number VARCHAR(50),
      account_name VARCHAR(255),
      sepay_bank_code VARCHAR(50),
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS admin_crypto (
      id INT AUTO_INCREMENT PRIMARY KEY,
      currency VARCHAR(50),
      network VARCHAR(50),
      wallet_address TEXT,
      qr_code TEXT,
      exchange_rate DECIMAL(10,4) DEFAULT 1,
      fee DECIMAL(5,2) DEFAULT 0,
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_currency (currency),
      INDEX idx_active (is_active)
    )`,
    `CREATE TABLE IF NOT EXISTS admin_momo (
      id INT AUTO_INCREMENT PRIMARY KEY,
      momo_number VARCHAR(20),
      momo_name VARCHAR(255),
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS admin_telco (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      telco_id INT,
      url TEXT,
      active BOOLEAN DEFAULT TRUE,
      exchange_rates TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_active (active)
    )`,
    `CREATE TABLE IF NOT EXISTS admin_thecao (
      id INT AUTO_INCREMENT PRIMARY KEY,
      partner_id VARCHAR(255),
      partner_key VARCHAR(255),
      url TEXT,
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS paygate_transactions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      method VARCHAR(50),
      amount DECIMAL(15,2),
      status VARCHAR(20),
      bank_name VARCHAR(255),
      account_number VARCHAR(50),
      codepay VARCHAR(50),
      telco VARCHAR(50),
      serial VARCHAR(100),
      card_code VARCHAR(100),
      note TEXT,
      ip_address VARCHAR(45),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_method (method),
      INDEX idx_status (status),
      INDEX idx_created (created_at)
    )`,
    `CREATE TABLE IF NOT EXISTS proxy (
      id INT AUTO_INCREMENT PRIMARY KEY,
      proxy TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  ];

  for (const sql of tables) {
    await query(sql);
  }

  console.log('Database initialized successfully!');
}

export default pool;
