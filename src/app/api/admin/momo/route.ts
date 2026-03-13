import { NextRequest } from 'next/server';
import { runLegacyHandler } from '../../_lib/legacy';
import { getActiveMomo, createOrUpdateMomo } from '@/lib/db';

async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const momo = await getActiveMomo();
      return res.status(200).json({ success: true, data: momo || {} });
    }
    
    if (req.method === 'POST') {
      const { id, momo_number, momo_name, is_active } = req.body;
      
      await createOrUpdateMomo({
        _id: id,
        momo_number,
        momo_name,
        is_active: is_active ?? true
      });
      
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
