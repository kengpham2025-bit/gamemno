import { NextRequest } from 'next/server';
import { runLegacyHandler } from '../../_lib/legacy';
import { getAllBanks, createOrUpdateBank } from '@/lib/db';

async function handler(req: any, res: any) {
  // Set CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const banks = await getAllBanks();
      return res.status(200).json({ success: true, data: banks });
    }
    
    if (req.method === 'POST') {
      const { id, bank_name, account_number, account_name, sepay_bank_code, is_active } = req.body;
      
      if (id) {
        await createOrUpdateBank({
          _id: id,
          bank_name,
          account_number,
          account_name,
          sepay_bank_code,
          is_active: is_active ?? true
        });
      } else {
        await createOrUpdateBank({
          bank_name,
          account_number,
          account_name,
          sepay_bank_code,
          is_active: is_active ?? true
        });
      }
      
      return res.status(200).json({ success: true, message: 'Lưu thành công' });
    }

    return res.status(405).json({ success: false, message: 'Method not allowed' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Lỗi server: ' + String(error) });
  }
}

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  return runLegacyHandler(request, handler);
}

export async function POST(request: NextRequest) {
  return runLegacyHandler(request, handler);
}

export async function OPTIONS(request: NextRequest) {
  return runLegacyHandler(request, handler);
}
