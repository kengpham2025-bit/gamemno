import { MongoClient, Db, Collection, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB || 'admin_tool';

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectToDatabase(): Promise<Db> {
  if (db) {
    return db;
  }

  client = new MongoClient(uri);
  await client.connect();
  db = client.db(dbName);
  
  console.log(`Connected to MongoDB: ${dbName}`);
  return db;
}

export async function getDatabase(): Promise<Db> {
  if (!db) {
    return connectToDatabase();
  }
  return db;
}

export async function getCollection<T extends Document = any>(name: string): Promise<Collection<T>> {
  const database = await getDatabase();
  return database.collection<T>(name);
}

export async function closeDatabase(): Promise<void> {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}

export { ObjectId };
export default { connectToDatabase, getDatabase, getCollection, closeDatabase, ObjectId };
