import { NextRequest } from 'next/server';
import { runLegacyHandler } from '../../_lib/legacy';
import { getAllCrypto, createOrUpdateCrypto } from '@/lib/db';

async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const crypto = await getAllCrypto();
      return res.status(200).json({ success: true, data: crypto });
    }
    
    if (req.method === 'POST') {
      const { id, currency, network, wallet_address, qr_code, exchange_rate, fee, is_active } = req.body;
      
      await createOrUpdateCrypto({
        _id: id,
        currency,
        network,
        wallet_address,
        qr_code,
        exchange_rate: parseFloat(exchange_rate) || 25000,
        fee: parseFloat(fee) || 0,
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
