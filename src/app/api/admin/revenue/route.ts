import { NextRequest } from 'next/server';
import { runLegacyHandler } from '../../_lib/legacy';
import { getPaygateStats, getPaygateStatsByMethod, getPaygateTransactions } from '@/lib/db';

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function endOfToday() {
  const d = new Date();
  d.setHours(23, 59, 59, 999);
  return d;
}

async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const url = req.url ? new URL(req.url, 'http://localhost') : null;
      const startDateParam = url?.searchParams.get('start_date');
      const endDateParam = url?.searchParams.get('end_date');

      let startDateFilter: Date | undefined;
      let endDateFilter: Date | undefined;

      if (startDateParam) {
        startDateFilter = new Date(startDateParam);
        startDateFilter.setHours(0, 0, 0, 0);
      }
      if (endDateParam) {
        endDateFilter = new Date(endDateParam);
        endDateFilter.setHours(23, 59, 59, 999);
      }

      const todayStart = startOfToday();
      const todayEnd = endOfToday();

      const queryFilter = (startDateFilter || endDateFilter)
        ? { start_date: startDateFilter, end_date: endDateFilter }
        : {};

      const [totalStats, todayStats, byMethod, recentList, filteredStats, filteredByMethod] = await Promise.all([
        getPaygateStats({}),
        getPaygateStats({ start_date: todayStart, end_date: todayEnd }),
        getPaygateStatsByMethod(),
        getPaygateTransactions({ limit: 20, skip: 0 }),
        getPaygateStats(queryFilter),
        startDateFilter || endDateFilter ? getPaygateStatsByMethod(startDateFilter, endDateFilter) : Promise.resolve([]),
      ]);

      const byMethodMap: Record<string, { total_amount: number; count: number }> = {};
      (byMethod || []).forEach((r: any) => {
        const key = r.method ?? r._id ?? 'other';
        byMethodMap[key] = { total_amount: Number(r.total_amount) || 0, count: Number(r.count) || 0 };
      });

      const filteredByMethodMap: Record<string, { total_amount: number; count: number }> = {};
      (filteredByMethod || []).forEach((r: any) => {
        const key = r.method ?? r._id ?? 'other';
        filteredByMethodMap[key] = { total_amount: Number(r.total_amount) || 0, count: Number(r.count) || 0 };
      });

      const totalRevenue = totalStats?.total_amount || 0;
      const totalOrders = totalStats?.count || 0;
      const todayRevenue = todayStats?.total_amount || 0;
      const todayOrders = todayStats?.count || 0;
      const filteredRevenue = filteredStats?.total_amount || 0;
      const filteredOrders = filteredStats?.count || 0;
      const isFiltered = Boolean(startDateFilter || endDateFilter);

      return res.status(200).json({
        success: true,
        data: {
          totalRevenue,
          totalOrders,
          todayRevenue,
          todayOrders,
          filteredRevenue,
          filteredOrders,
          byMethod: isFiltered ? filteredByMethodMap : byMethodMap,
          startDate: startDateFilter?.toISOString().split('T')[0] || null,
          endDate: endDateFilter?.toISOString().split('T')[0] || null,
          recent: (recentList || []).map((t: any) => ({
            _id: t._id?.toString(),
            method: t.method,
            amount: t.amount,
            status: t.status,
            created_at: t.created_at,
          })),
        },
      });
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
