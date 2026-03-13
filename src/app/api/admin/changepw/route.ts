import { NextRequest } from 'next/server';
import { runLegacyHandler } from '../../_lib/legacy';
import { verifyAdminPassword, updateAdminPassword, findAdminUser } from '@/lib/db';

async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { username, currentPassword, newPassword } = req.body;

  if (!username || !currentPassword || !newPassword) {
    return res.status(200).json({ success: false, message: 'Vui lòng nhập đầy đủ thông tin' });
  }

  if (newPassword.length < 4) {
    return res.status(200).json({ success: false, message: 'Mật khẩu mới phải có ít nhất 4 ký tự' });
  }

  try {
    const user = await findAdminUser(username);
    if (!user) {
      return res.status(200).json({ success: false, message: 'Tài khoản không tồn tại' });
    }

    const isValid = await verifyAdminPassword(username, currentPassword);
    if (!isValid) {
      return res.status(200).json({ success: false, message: 'Mật khẩu hiện tại không đúng' });
    }

    const updated = await updateAdminPassword(username, newPassword);
    if (updated) {
      return res.status(200).json({ success: true, message: 'Đổi mật khẩu thành công' });
    }
    return res.status(200).json({ success: false, message: 'Không thể cập nhật mật khẩu' });
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
