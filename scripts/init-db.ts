import { initDatabase } from '../src/lib/mysql';

async function main() {
  console.log('Initializing database...');
  try {
    await initDatabase();
    console.log('Database initialized successfully!');
  } catch (error) {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  }
  process.exit(0);
}

main();
