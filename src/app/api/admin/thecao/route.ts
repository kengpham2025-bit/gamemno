import { NextRequest } from 'next/server';
import { runLegacyHandler } from '../../_lib/legacy';
import { getTheCaoForAdmin, createOrUpdateTheCao } from '@/lib/db';

async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const config = await getTheCaoForAdmin();
      const data = config
        ? {
            _id: config._id?.toString(),
            partner_id: config.partner_id,
            partner_key: config.partner_key,
            url: config.url,
            is_active: config.is_active !== false,
          }
        : null;
      return res.status(200).json({ success: true, data });
    }

    if (req.method === 'POST') {
      const { id, partner_id, partner_key, url, is_active } = req.body;

      await createOrUpdateTheCao({
        _id: id || undefined,
        partner_id: partner_id ?? '',
        partner_key: partner_key ?? '',
        url: url ?? 'https://doithe1s.vn/chargingws/v2',
        is_active: is_active !== false && is_active !== 'false',
      });

      return res.status(200).json({ success: true, message: 'Lưu cấu hình doithe1s thành công' });
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
