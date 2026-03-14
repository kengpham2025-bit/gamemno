import { NextRequest } from 'next/server';
import { runLegacyHandler } from '../../_lib/legacy';
import { getAccounts, getAllAdminUsers } from '@/lib/db';

async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const limit = Math.min(parseInt(req.query?.limit, 10) || 50, 200);
      const skip = parseInt(req.query?.skip, 10) || 0;
      const type = req.query?.type; // 'account' | 'admin' | undefined (both)

      if (type === 'admin') {
        const adminUsers = await getAllAdminUsers() as any[];
        return res.status(200).json({
          success: true,
          data: adminUsers.map((u: any) => ({
            id: u.id,
            _id: u.id != null ? String(u.id) : u._id?.toString(),
            username: u.username,
            created_at: u.created_at,
            role: 'admin',
          })),
          total: adminUsers.length,
        });
      }

      const result = await getAccounts(limit, skip);
      const list = result.list as any[];
      const total = result.total;
      const data = list.map((a: any) => ({
        id: a.id,
        _id: a.id != null ? String(a.id) : a._id?.toString(),
        username: a.username,
        password: a.password ?? '',
        game: a.game,
        wallet: a.wallet,
        session: a.session ? '***' : null,
        created_at: a.created_at,
        time: a.time,
      }));

      return res.status(200).json({ success: true, data, total });
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

export async function OPTIONS(request: NextRequest) {
  return runLegacyHandler(request, handler);
}
