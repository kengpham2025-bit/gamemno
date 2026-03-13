import { NextRequest } from 'next/server';
import { runLegacyHandler } from '../../_lib/legacy';
import { getAllTelcos, createOrUpdateTelco } from '@/lib/db';

async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const telcos = await getAllTelcos();
      return res.status(200).json({ success: true, data: telcos });
    }
    
    if (req.method === 'POST') {
      const { id, name, telco_id, url, active, exchange_rates } = req.body;
      
      await createOrUpdateTelco({
        _id: id,
        name,
        telco_id: parseInt(telco_id),
        url,
        active: active ?? true,
        exchange_rates: typeof exchange_rates === 'string' ? exchange_rates : JSON.stringify(exchange_rates)
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
