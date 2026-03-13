import { NextRequest } from 'next/server';
import { runLegacyHandler } from '../../_lib/legacy';
import { verifyAdminPassword, createAdminUser, findAdminUser } from '@/lib/db';

async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(200).json({ success: false, message: 'Vui lòng nhập đầy đủ thông tin' });
  }

  try {
    const existingUser = await findAdminUser(username);
    if (!existingUser) {
      await createAdminUser(username, password);
      return res.status(200).json({ success: true, message: 'Khởi tạo tài khoản quản trị thành công' });
    }

    const isValid = await verifyAdminPassword(username, password);
    
    if (isValid) {
      return res.status(200).json({ success: true, message: 'Đăng nhập thành công' });
    } else {
      return res.status(200).json({ success: false, message: 'Mật khẩu không chính xác' });
    }
  } catch (error) {
    return res.status(200).json({ success: false, message: 'Lỗi hệ thống' });
  }
}

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  return runLegacyHandler(request, handler);
}

export async function OPTIONS(request: NextRequest) {
  return runLegacyHandler(request, handler);
}
