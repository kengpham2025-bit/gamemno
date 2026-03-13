'use client';

import { FormEvent, useEffect, useState } from 'react';
import s from './page.module.css';

type BankRecord = {
  _id?: string;
  bank_name?: string;
  account_number?: string;
  account_name?: string;
  sepay_bank_code?: string;
  is_active?: boolean;
};

type MomoRecord = {
  _id?: string;
  momo_number?: string;
  momo_name?: string;
  is_active?: boolean;
};

type TheCaoRecord = {
  _id?: string;
  partner_id?: string;
  partner_key?: string;
  url?: string;
  is_active?: boolean;
};

type TelcoRecord = {
  _id?: string;
  name?: string;
  telco_id?: number;
  url?: string;
  active?: boolean;
  exchange_rates?: string;
};

type CryptoRecord = {
  _id?: string;
  currency?: string;
  network?: string;
  wallet_address?: string;
  qr_code?: string;
  exchange_rate?: number;
  fee?: number;
  is_active?: boolean;
};

type UserRecord = {
  _id?: string;
  username?: string;
  email?: string;
  balance?: number;
  role?: string;
  created_at?: string;
};

type RevenueData = {
  totalRevenue: number;
  todayRevenue: number;
  totalOrders: number;
  todayOrders: number;
  bankAmount: number;
  momoAmount: number;
  telcoAmount: number;
  cryptoAmount: number;
};

type PanelKey = 'overview' | 'users' | 'bank' | 'momo' | 'telco' | 'crypto' | 'revenue' | 'changepw';

const navItems: Array<{ key: PanelKey; label: string; desc: string }> = [
  { key: 'overview', label: 'Tổng quan', desc: 'Trạng thái cấu hình' },
  { key: 'users', label: 'Quản lý tài khoản', desc: 'Danh sách người dùng' },
  { key: 'bank', label: 'Ngân hàng', desc: 'Tài khoản nhận tiền' },
  { key: 'momo', label: 'Momo', desc: 'Ví điện tử nhận tiền' },
  { key: 'telco', label: 'Thẻ cào', desc: 'Cấu hình nạp thẻ' },
  { key: 'crypto', label: 'Crypto/API', desc: 'Cấu hình crypto' },
  { key: 'revenue', label: 'Doanh thu', desc: 'Thống kê doanh thu' },
  { key: 'changepw', label: 'Đổi MK admin', desc: 'Đổi mật khẩu đăng nhập admin' },
];

function Icon({
  name,
}: {
  name: 'sparkles' | 'bank' | 'wallet' | 'search' | 'sun' | 'moon' | 'logout' | 'shield' | 'users' | 'card' | 'crypto' | 'chart' | 'plus' | 'trash' | 'edit' | 'key';
}) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  } as const;

  switch (name) {
    case 'users':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'card':
      return (
        <svg {...common}>
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M2 10h20" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case 'crypto':
      return (
        <svg {...common}>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...common}>
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7 16l4-8 4 4 5-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'plus':
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'trash':
      return (
        <svg {...common}>
          <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'edit':
      return (
        <svg {...common}>
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'key':
      return (
        <svg {...common}>
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'search':
      return (
        <svg {...common}>
          <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M16.4 16.4 21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg {...common}>
          <path d="M12 2l1.3 5.1L18 8.4l-4.7 1.3L12 15l-1.3-5.3L6 8.4l4.7-1.3L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M4 12l.7 2.6L7 15.3l-2.3.7L4 18l-.7-2-2.3-.7 2.3-.7L4 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case 'bank':
      return (
        <svg {...common}>
          <path d="M4 9.2 12 4l8 5.2V11H4V9.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M6.5 11v7M10 11v7M14 11v7M17.5 11v7" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5 18h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'wallet':
      return (
        <svg {...common}>
          <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h11A1.5 1.5 0 0 1 20 6.5V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5 9h12.5A2.5 2.5 0 0 1 20 11.5v6A2.5 2.5 0 0 1 17.5 20h-10A2.5 2.5 0 0 1 5 17.5V9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M16.5 14h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'sun':
      return (
        <svg {...common}>
          <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 2v2.2M12 19.8V22M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2 12h2.2M19.8 12H22M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'moon':
      return (
        <svg {...common}>
          <path d="M21 13.2A7.8 7.8 0 0 1 10.8 3a6.5 6.5 0 1 0 10.2 10.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case 'logout':
      return (
        <svg {...common}>
          <path d="M10 7V6a2 2 0 0 1 2-2h7v16h-7a2 2 0 0 1-2-2v-1" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M3 12h10M7 8l-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3 19 6.5V12c0 5-3.2 8.6-7 9.9C8.2 20.6 5 17 5 12V6.5L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="m9.2 12 2 2.1 3.6-4.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [activePanel, setActivePanel] = useState<PanelKey>('overview');
  const [loginForm, setLoginForm] = useState({ username: 'admin', password: 'admin' });
  const [navQuery, setNavQuery] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [bank, setBank] = useState<BankRecord>({
    bank_name: 'Vietcombank',
    account_number: '',
    account_name: '',
    sepay_bank_code: 'VCB',
    is_active: true,
  });
  const [momo, setMomo] = useState<MomoRecord>({
    momo_number: '',
    momo_name: '',
    is_active: true,
  });
  const [thecaoConfig, setThecaoConfig] = useState<TheCaoRecord | null>(null);
  const [telcoList, setTelcoList] = useState<TelcoRecord[]>([]);
  const [cryptoList, setCryptoList] = useState<CryptoRecord[]>([]);
  const [cryptoForm, setCryptoForm] = useState<Partial<CryptoRecord>>({
    currency: '',
    network: '',
    wallet_address: '',
    qr_code: '',
    exchange_rate: 25000,
    fee: 0,
    is_active: true,
  });
  const [accountsList, setAccountsList] = useState<any[]>([]);
  const [accountsTotal, setAccountsTotal] = useState(0);
  const [revenueData, setRevenueData] = useState<{
    totalRevenue: number;
    totalOrders: number;
    todayRevenue: number;
    todayOrders: number;
    filteredRevenue: number;
    filteredOrders: number;
    byMethod: Record<string, { total_amount: number; count: number }>;
    startDate: string | null;
    endDate: string | null;
  } | null>(null);
  const [revenueStartDate, setRevenueStartDate] = useState('');
  const [revenueEndDate, setRevenueEndDate] = useState('');
  const [changepwForm, setChangepwForm] = useState({
    username: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const saved = window.localStorage.getItem('admin_logged_in');
    if (saved === '1') {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('admin_theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
      return;
    }
    const preferDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
    setTheme(preferDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (!loggedIn) return;
    void loadConfigs();
  }, [loggedIn]);

  async function loadConfigs() {
    const [bankRes, momoRes, telcoRes, thecaoRes, cryptoRes, accountsRes, revenueRes] = await Promise.all([
      fetch('/admin/bank').then((res) => res.json()),
      fetch('/admin/momo').then((res) => res.json()),
      fetch('/admin/telco').then((res) => res.json()),
      fetch('/admin/thecao').then((res) => res.json()),
      fetch('/admin/crypto').then((res) => res.json()),
      fetch('/admin/accounts').then((res) => res.json()),
      fetch('/admin/revenue').then((res) => res.json()),
    ]);

    if (Array.isArray(bankRes?.data) && bankRes.data.length > 0) {
      setBank(bankRes.data[0]);
    }
    if (momoRes?.data && Object.keys(momoRes.data).length > 0) {
      setMomo(momoRes.data);
    }
    if (Array.isArray(telcoRes?.data)) {
      setTelcoList(telcoRes.data);
    }
    if (thecaoRes?.success && thecaoRes?.data) {
      setThecaoConfig(thecaoRes.data);
    } else {
      setThecaoConfig({
        partner_id: '',
        partner_key: '',
        url: 'https://doithe1s.vn/chargingws/v2',
        is_active: true,
      });
    }
    if (Array.isArray(cryptoRes?.data)) {
      setCryptoList(cryptoRes.data);
    }
    if (Array.isArray(accountsRes?.data)) {
      setAccountsList(accountsRes.data);
      setAccountsTotal(accountsRes.total ?? accountsRes.data.length);
    }
    if (revenueRes?.success && revenueRes?.data) {
      setRevenueData({
        totalRevenue: revenueRes.data.totalRevenue ?? 0,
        totalOrders: revenueRes.data.totalOrders ?? 0,
        todayRevenue: revenueRes.data.todayRevenue ?? 0,
        todayOrders: revenueRes.data.todayOrders ?? 0,
        filteredRevenue: revenueRes.data.filteredRevenue ?? 0,
        filteredOrders: revenueRes.data.filteredOrders ?? 0,
        byMethod: revenueRes.data.byMethod ?? {},
        startDate: revenueRes.data.startDate ?? null,
        endDate: revenueRes.data.endDate ?? null,
      });
    }
  }

  async function loadRevenueByDate() {
    const params = new URLSearchParams();
    if (revenueStartDate) params.set('start_date', revenueStartDate);
    if (revenueEndDate) params.set('end_date', revenueEndDate);

    const url = `/admin/revenue${params.toString() ? '?' + params.toString() : ''}`;
    const revenueRes = await fetch(url).then((res) => res.json());

    if (revenueRes?.success && revenueRes?.data) {
      setRevenueData({
        totalRevenue: revenueRes.data.totalRevenue ?? 0,
        totalOrders: revenueRes.data.totalOrders ?? 0,
        todayRevenue: revenueRes.data.todayRevenue ?? 0,
        todayOrders: revenueRes.data.todayOrders ?? 0,
        filteredRevenue: revenueRes.data.filteredRevenue ?? 0,
        filteredOrders: revenueRes.data.filteredOrders ?? 0,
        byMethod: revenueRes.data.byMethod ?? {},
        startDate: revenueRes.data.startDate ?? null,
        endDate: revenueRes.data.endDate ?? null,
      });
    }
  }

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    const res = await fetch('/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginForm),
    });
    const data = await res.json();

    setLoading(false);
    setMessage(data?.message || '');

    if (data?.success) {
      window.localStorage.setItem('admin_logged_in', '1');
      setLoggedIn(true);
      setActivePanel('overview');
    }
  }

  async function saveBank(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    const res = await fetch('/admin/bank', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: bank._id,
        bank_name: bank.bank_name,
        account_number: bank.account_number,
        account_name: bank.account_name,
        sepay_bank_code: bank.sepay_bank_code,
        is_active: true,
      }),
    });
    const data = await res.json();
    setLoading(false);
    setMessage(data?.message || 'Lưu tài khoản ngân hàng thành công');
    await loadConfigs();
  }

  async function saveMomo(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    const res = await fetch('/admin/momo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: momo._id,
        momo_number: momo.momo_number,
        momo_name: momo.momo_name,
        is_active: true,
      }),
    });
    const data = await res.json();
    setLoading(false);
    setMessage(data?.message || 'Lưu Momo thành công');
    await loadConfigs();
  }

  async function saveThecao(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    const res = await fetch('/admin/thecao', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: thecaoConfig?._id,
        partner_id: thecaoConfig?.partner_id ?? '',
        partner_key: thecaoConfig?.partner_key ?? '',
        url: thecaoConfig?.url ?? 'https://doithe1s.vn/chargingws/v2',
        is_active: thecaoConfig?.is_active !== false,
      }),
    });
    const data = await res.json();
    setLoading(false);
    setMessage(data?.message || 'Lưu cấu hình doithe1s thành công');
    await loadConfigs();
  }

  async function saveCrypto(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    const res = await fetch('/admin/crypto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: cryptoForm._id,
        currency: cryptoForm.currency ?? '',
        network: cryptoForm.network ?? '',
        wallet_address: cryptoForm.wallet_address ?? '',
        qr_code: cryptoForm.qr_code ?? '',
        exchange_rate: cryptoForm.exchange_rate ?? 25000,
        fee: cryptoForm.fee ?? 0,
        is_active: cryptoForm.is_active !== false,
      }),
    });
    const data = await res.json();
    setLoading(false);
    setMessage(data?.message ?? (data?.success ? 'Lưu thành công' : 'Lỗi'));
    if (data?.success) {
      await loadConfigs();
      setCryptoForm({
        currency: '',
        network: '',
        wallet_address: '',
        qr_code: '',
        exchange_rate: 25000,
        fee: 0,
        is_active: true,
      });
    }
  }

  async function handleChangePassword(e: FormEvent) {
    e.preventDefault();
    if (changepwForm.newPassword !== changepwForm.confirmPassword) {
      setMessage('Mật khẩu mới và xác nhận không trùng nhau');
      return;
    }
    setLoading(true);
    setMessage('');
    const res = await fetch('/admin/changepw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: changepwForm.username,
        currentPassword: changepwForm.currentPassword,
        newPassword: changepwForm.newPassword,
      }),
    });
    const data = await res.json();
    setLoading(false);
    setMessage(data?.message || '');
    if (data?.success) {
      setChangepwForm((prev) => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }));
    }
  }

  function logout() {
    window.localStorage.removeItem('admin_logged_in');
    setLoggedIn(false);
    setMessage('');
  }

  function toggleTheme() {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('admin_theme', next);
      return next;
    });
  }

  function exportAccountsUserPass() {
    if (accountsList.length === 0) {
      setMessage('Không có dữ liệu để xuất');
      return;
    }
    const lines = accountsList.map((a: any) => `${String(a.username ?? '').trim()}|${String(a.password ?? '').trim()}`);
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `accounts_user_pass_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setMessage('Đã xuất file ' + a.download);
  }

  const filteredNav = navItems.filter((item) => {
    const q = navQuery.trim().toLowerCase();
    if (!q) return true;
    return `${item.label} ${item.desc}`.toLowerCase().includes(q);
  });

  const iconForPanel: Record<PanelKey, JSX.Element> = {
    overview: <Icon name="sparkles" />,
    users: <Icon name="users" />,
    bank: <Icon name="bank" />,
    momo: <Icon name="wallet" />,
    telco: <Icon name="card" />,
    crypto: <Icon name="crypto" />,
    revenue: <Icon name="chart" />,
    changepw: <Icon name="key" />,
  };

  function renderMain() {
    if (!loggedIn) {
      return (
        <div className={s.authWrap}>
          <section className={s.authHero}>
            <div className={s.kicker}>789 CLUB CMS</div>
            <h1 className={s.authTitle}>Bảng quản trị Paygate</h1>
            <p className={s.authText}>
              Đăng nhập để quản lý cấu hình nạp tiền sử dụng MongoDB. Tài khoản admin có thể được tự khởi tạo ở lần đăng nhập đầu tiên.
            </p>
            <div className={s.grid3}>
              <div className={s.metric}>
                <span>Nguồn dữ liệu</span>
                <strong>MongoDB</strong>
                <p>Đọc/ghi cấu hình trực tiếp.</p>
              </div>
              <div className={s.metric}>
                <span>Module</span>
                <strong>Paygate CMS</strong>
                <p>Quản trị Bank/Momo.</p>
              </div>
              <div className={s.metric}>
                <span>Bảo mật</span>
                <strong>Local session</strong>
                <p>Lưu trạng thái đăng nhập ở máy.</p>
              </div>
            </div>
          </section>

          <form onSubmit={handleLogin} className={s.loginCard}>
            <div className={s.loginHead}>
              <h2>Đăng nhập quản trị</h2>
              <span className={s.pill}>
                <Icon name="shield" /> Secure
              </span>
            </div>

            <label className={s.field}>
              Tài khoản
              <input
                value={loginForm.username}
                onChange={(e) => setLoginForm((prev) => ({ ...prev, username: e.target.value }))}
                className={s.input}
                autoComplete="username"
              />
            </label>
            <label className={s.field}>
              Mật khẩu
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm((prev) => ({ ...prev, password: e.target.value }))}
                className={s.input}
                autoComplete="current-password"
              />
            </label>
            <button type="submit" className={s.buttonPrimary} disabled={loading}>
              {loading ? 'Đang xử lý...' : 'Đăng nhập'}
            </button>
          </form>
        </div>
      );
    }

    if (activePanel === 'overview') {
      return (
        <div className={s.contentGrid}>
          <section className={s.card}>
            <div className={s.cardHead}>
              <div>
                <div className={s.cardLabel}>Dashboard</div>
                <div className={s.cardTitle}>Tổng quan cấu hình</div>
              </div>
              <span className={`${s.chip} ${s.chipOk}`}>Online</span>
            </div>

            <div className={s.grid3}>
              <div className={s.metric}>
                <span>Ngân hàng</span>
                <strong>{bank.bank_name || 'Chưa có'}</strong>
                <p>{bank.account_number || 'Chưa cấu hình số tài khoản'}</p>
              </div>
              <div className={s.metric}>
                <span>Chủ tài khoản</span>
                <strong>{bank.account_name || 'Chưa có'}</strong>
                <p>Dùng cho paygate và NapNhanh247</p>
              </div>
              <div className={s.metric}>
                <span>Momo</span>
                <strong>{momo.momo_name || 'Chưa có'}</strong>
                <p>{momo.momo_number || 'Chưa cấu hình số ví'}</p>
              </div>
            </div>

            <div className={s.table}>
              <div className={s.tableHead}>
                <span>Nguồn cấu hình</span>
                <span>Giá trị hiện tại</span>
                <span>Trạng thái</span>
              </div>
              <div className={s.tableRow}>
                <span>Mongo `admin_bank`</span>
                <span>{bank.account_number ? `${bank.bank_name} • ${bank.account_number}` : 'Chưa cấu hình'}</span>
                <span className={`${s.tag} ${bank.account_number ? s.tagOk : s.tagWarn}`}>
                  {bank.account_number ? 'Sẵn sàng' : 'Thiếu dữ liệu'}
                </span>
              </div>
              <div className={s.tableRow}>
                <span>Mongo `admin_momo`</span>
                <span>{momo.momo_number ? `${momo.momo_name} • ${momo.momo_number}` : 'Chưa cấu hình'}</span>
                <span className={`${s.tag} ${momo.momo_number ? s.tagOk : s.tagWarn}`}>
                  {momo.momo_number ? 'Sẵn sàng' : 'Thiếu dữ liệu'}
                </span>
              </div>
              <div className={s.tableRow}>
                <span>Paygate</span>
                <span>Đọc cấu hình trực tiếp từ Mongo admin</span>
                <span className={`${s.tag} ${s.tagOk}`}>Đang dùng</span>
              </div>
            </div>
          </section>

          <aside className={`${s.card} ${s.stack}`}>
            <div>
              <div className={s.cardLabel}>Quick actions</div>
              <div className={s.cardTitle}>Tác vụ nhanh</div>
            </div>
            <button onClick={() => setActivePanel('bank')} className={s.buttonPrimary} type="button">
              Sửa tài khoản ngân hàng
            </button>
            <button onClick={() => setActivePanel('momo')} className={s.buttonSecondary} type="button">
              Sửa ví Momo
            </button>
            <div className={s.metric}>
              <span>Ghi chú</span>
              <strong>Đồng bộ realtime</strong>
              <p>Khi thay đổi cấu hình tại đây, paygate sẽ lấy dữ liệu mới trực tiếp từ Mongo thay vì fallback local.</p>
            </div>
          </aside>
        </div>
      );
    }

    if (activePanel === 'users') {
      return (
        <div className={s.contentGrid}>
          <section className={s.card}>
            <div className={s.cardHead}>
              <div>
                <div className={s.cardLabel}>Users</div>
                <div className={s.cardTitle}>Quản lý tài khoản</div>
              </div>
              <span className={s.chip}>MongoDB</span>
            </div>

            <div className={`${s.table} ${s.table6users}`}>
              <div className={s.tableHead}>
                <span>ID</span>
                <span>User (tên đăng nhập)</span>
                <span>Pass (mật khẩu)</span>
                <span>Game</span>
                <span>Ví (wallet)</span>
                <span>Ngày tạo</span>
              </div>
              {accountsList.length === 0 ? (
                <div className={s.tableRow}>
                  <span style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--muted)' }}>
                    Chưa có dữ liệu từ MongoDB
                  </span>
                </div>
              ) : (
                accountsList.map((a: any, idx: number) => (
                  <div key={a._id || idx} className={s.tableRow}>
                    <span>{(a._id || '').slice(-6)}</span>
                    <span>{a.username ?? '—'}</span>
                    <span>{a.password != null ? String(a.password) : '—'}</span>
                    <span>{a.game ?? '—'}</span>
                    <span>{typeof a.wallet === 'number' ? a.wallet.toLocaleString('vi-VN') + ' VNĐ' : a.wallet ?? '—'}</span>
                    <span>{a.created_at ? new Date(a.created_at).toLocaleDateString('vi-VN') : '—'}</span>
                  </div>
                ))
              )}
            </div>
          </section>

          <aside className={`${s.card} ${s.stack}`}>
            <div>
              <div className={s.cardLabel}>Nguồn</div>
              <div className={s.cardTitle}>MongoDB • account</div>
            </div>
            <button className={s.buttonPrimary} type="button" onClick={exportAccountsUserPass}>
              Xuất file txt (user|pass)
            </button>
            <button className={s.buttonSecondary} type="button" onClick={() => void loadConfigs()}>
              Làm mới
            </button>
            <div className={s.metric}>
              <span>Tổng số</span>
              <strong>{accountsTotal} tài khoản</strong>
              <p>Định dạng xuất: user|pass (mỗi dòng 1 tài khoản)</p>
            </div>
          </aside>
        </div>
      );
    }

    if (activePanel === 'bank') {
      return (
        <div className={s.contentGrid}>
          <section className={s.card}>
            <div className={s.cardHead}>
              <div>
                <div className={s.cardLabel}>Bank</div>
                <div className={s.cardTitle}>Tài khoản ngân hàng nhận tiền</div>
              </div>
              <span className={s.chip}>Mongo</span>
            </div>

            <form onSubmit={saveBank} className={s.form}>
              <label className={s.field}>
                Tên ngân hàng
                <input
                  value={bank.bank_name || ''}
                  onChange={(e) => setBank((prev) => ({ ...prev, bank_name: e.target.value }))}
                  className={s.input}
                />
              </label>
              <label className={s.field}>
                Số tài khoản
                <input
                  value={bank.account_number || ''}
                  onChange={(e) => setBank((prev) => ({ ...prev, account_number: e.target.value }))}
                  className={s.input}
                />
              </label>
              <label className={`${s.field} ${s.fieldFull}`}>
                Tên chủ tài khoản
                <input
                  value={bank.account_name || ''}
                  onChange={(e) => setBank((prev) => ({ ...prev, account_name: e.target.value }))}
                  className={s.input}
                />
              </label>
              <label className={s.field}>
                MÃ SePay
                <input
                  value={bank.sepay_bank_code || ''}
                  onChange={(e) => setBank((prev) => ({ ...prev, sepay_bank_code: e.target.value.toUpperCase() }))}
                  className={s.input}
                  placeholder="VCB, BIDV, MBBank..."
                />
              </label>
              <div className={s.fieldFull}>
                <button type="submit" className={s.buttonPrimary} disabled={loading}>
                  {loading ? 'Đang lưu...' : 'Lưu cấu hình ngân hàng'}
                </button>
              </div>
            </form>
          </section>

          <aside className={`${s.card} ${s.stack}`}>
            <div>
              <div className={s.cardLabel}>Preview</div>
              <div className={s.cardTitle}>Xem nhanh</div>
            </div>
            <div className={s.metric}>
              <span>Ngân hàng</span>
              <strong>{bank.bank_name || 'Chưa cấu hình'}</strong>
            </div>
            <div className={s.metric}>
              <span>Số tài khoản</span>
              <strong>{bank.account_number || 'Chưa cấu hình'}</strong>
            </div>
            <div className={s.metric}>
              <span>Chủ tài khoản</span>
              <strong>{bank.account_name || 'Chưa cấu hình'}</strong>
            </div>
          </aside>
        </div>
      );
    }

    if (activePanel === 'momo') {
      return (
        <div className={s.contentGrid}>
          <section className={s.card}>
            <div className={s.cardHead}>
              <div>
                <div className={s.cardLabel}>Momo</div>
                <div className={s.cardTitle}>Ví điện tử nhận tiền</div>
              </div>
              <span className={s.chip}>Mongo</span>
            </div>

            <form onSubmit={saveMomo} className={s.form}>
              <label className={s.field}>
                Số Momo
                <input
                  value={momo.momo_number || ''}
                  onChange={(e) => setMomo((prev) => ({ ...prev, momo_number: e.target.value }))}
                  className={s.input}
                />
              </label>
              <label className={s.field}>
                Tên Momo
                <input
                  value={momo.momo_name || ''}
                  onChange={(e) => setMomo((prev) => ({ ...prev, momo_name: e.target.value }))}
                  className={s.input}
                />
              </label>
              <div className={s.fieldFull}>
                <button type="submit" className={s.buttonPrimary} disabled={loading}>
                  {loading ? 'Đang lưu...' : 'Lưu cấu hình Momo'}
                </button>
              </div>
            </form>
          </section>

          <aside className={`${s.card} ${s.stack}`}>
            <div>
              <div className={s.cardLabel}>Preview</div>
              <div className={s.cardTitle}>Xem nhanh</div>
            </div>
            <div className={s.metric}>
              <span>Tên ví</span>
              <strong>{momo.momo_name || 'Chưa cấu hình'}</strong>
            </div>
            <div className={s.metric}>
              <span>Số ví</span>
              <strong>{momo.momo_number || 'Chưa cấu hình'}</strong>
            </div>
          </aside>
        </div>
      );
    }

    if (activePanel === 'telco') {
      const thecao = thecaoConfig ?? { partner_id: '', partner_key: '', url: 'https://doithe1s.vn/chargingws/v2', is_active: true };
      return (
        <div className={s.contentGrid}>
          <section className={s.card}>
            <div className={s.cardHead}>
              <div>
                <div className={s.cardLabel}>API doithe1s</div>
                <div className={s.cardTitle}>Cấu hình tích hợp thẻ cào (full quyền)</div>
              </div>
              <span className={s.chip}>MongoDB • admin_thecao</span>
            </div>
            <p style={{ margin: '0 0 14px', fontSize: '13px', color: 'var(--muted)' }}>
              Cấu hình API doithe1s dùng cho nạp thẻ cào. Thay đổi và lưu trực tiếp vào MongoDB.
            </p>
            <form onSubmit={saveThecao} className={s.form}>
              <label className={s.field}>
                Partner ID
                <input
                  value={thecao.partner_id ?? ''}
                  onChange={(e) => setThecaoConfig((prev) => ({ ...prev, partner_id: e.target.value }))}
                  className={s.input}
                  placeholder="partner_id từ doithe1s"
                />
              </label>
              <label className={s.field}>
                Partner Key
                <input
                  type="password"
                  value={thecao.partner_key ?? ''}
                  onChange={(e) => setThecaoConfig((prev) => ({ ...prev, partner_key: e.target.value }))}
                  className={s.input}
                  placeholder="partner_key từ doithe1s"
                />
              </label>
              <label className={`${s.field} ${s.fieldFull}`}>
                URL API (mặc định: https://doithe1s.vn/chargingws/v2)
                <input
                  value={thecao.url ?? ''}
                  onChange={(e) => setThecaoConfig((prev) => ({ ...prev, url: e.target.value }))}
                  className={s.input}
                  placeholder="https://doithe1s.vn/chargingws/v2"
                />
              </label>
              <label className={s.fieldFull} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={thecao.is_active !== false}
                  onChange={(e) => setThecaoConfig((prev) => ({ ...prev, is_active: e.target.checked }))}
                />
                <span>Bật sử dụng cấu hình này (is_active)</span>
              </label>
              <div className={s.fieldFull}>
                <button type="submit" className={s.buttonPrimary} disabled={loading}>
                  {loading ? 'Đang lưu...' : 'Lưu cấu hình doithe1s'}
                </button>
              </div>
            </form>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--stroke2)' }}>
              <div className={s.cardHead}>
                <div>
                  <div className={s.cardLabel}>Danh sách nhà mạng</div>
                  <div className={s.cardTitle}>admin_telco (Viettel, Mobifone, …)</div>
                </div>
              </div>
              <div className={`${s.table} ${s.table4}`}>
                <div className={s.tableHead}>
                  <span>Nhà mạng</span>
                  <span>Mã (telco_id)</span>
                  <span>URL / Tỷ giá</span>
                  <span>Trạng thái</span>
                </div>
                {telcoList.length === 0 ? (
                  <div className={s.tableRow}>
                    <span style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--muted)' }}>
                      Chưa có dữ liệu từ MongoDB (admin_telco)
                    </span>
                  </div>
                ) : (
                  telcoList.map((t: TelcoRecord, idx: number) => (
                    <div key={t._id || idx} className={s.tableRow}>
                      <span>{t.name || '—'}</span>
                      <span>{t.telco_id ?? '—'}</span>
                      <span style={{ fontSize: '12px', wordBreak: 'break-all' }}>{t.url || (t.exchange_rates ? `Tỷ giá: ${t.exchange_rates}` : '—')}</span>
                      <span className={t.active !== false ? `${s.tag} ${s.tagOk}` : s.tagWarn}>
                        {t.active !== false ? 'Hoạt động' : 'Tắt'}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>

          <aside className={`${s.card} ${s.stack}`}>
            <div>
              <div className={s.cardLabel}>Nguồn</div>
              <div className={s.cardTitle}>doithe1s + admin_telco</div>
            </div>
            <div className={s.metric}>
              <span>API doithe1s</span>
              <strong>{thecao.partner_id ? 'Đã cấu hình' : 'Chưa cấu hình'}</strong>
              <p>partner_id, partner_key, url</p>
            </div>
            <button className={s.buttonSecondary} type="button" onClick={() => void loadConfigs()}>
              Làm mới
            </button>
            <div className={s.metric}>
              <span>Nhà mạng</span>
              <strong>{telcoList.length} bản ghi</strong>
              <p>{telcoList.filter((t: TelcoRecord) => t.active !== false).length} hoạt động</p>
            </div>
          </aside>
        </div>
      );
    }

    if (activePanel === 'crypto') {
      return (
        <div className={s.contentGrid}>
          <section className={s.card}>
            <div className={s.cardHead}>
              <div>
                <div className={s.cardLabel}>Crypto</div>
                <div className={s.cardTitle}>Cấu hình Crypto/API</div>
              </div>
              <span className={s.chip}>MongoDB</span>
            </div>

            <form onSubmit={saveCrypto} className={s.form}>
              <label className={s.field}>
                Đồng coin (currency)
                <input
                  value={cryptoForm.currency ?? ''}
                  onChange={(e) => setCryptoForm((prev) => ({ ...prev, currency: e.target.value }))}
                  className={s.input}
                  placeholder="USDT, BTC, ETH..."
                />
              </label>
              <label className={s.field}>
                Network
                <input
                  value={cryptoForm.network ?? ''}
                  onChange={(e) => setCryptoForm((prev) => ({ ...prev, network: e.target.value }))}
                  className={s.input}
                  placeholder="TRC20, ERC20, BEP20..."
                />
              </label>
              <label className={`${s.field} ${s.fieldFull}`}>
                Địa chỉ ví (wallet_address)
                <input
                  value={cryptoForm.wallet_address ?? ''}
                  onChange={(e) => setCryptoForm((prev) => ({ ...prev, wallet_address: e.target.value }))}
                  className={s.input}
                  placeholder="0x... hoặc T..."
                />
              </label>
              <label className={s.field}>
                Tỷ giá (VNĐ / 1 coin)
                <input
                  type="number"
                  value={cryptoForm.exchange_rate ?? ''}
                  onChange={(e) => setCryptoForm((prev) => ({ ...prev, exchange_rate: e.target.value ? Number(e.target.value) : 25000 }))}
                  className={s.input}
                  placeholder="25000"
                />
              </label>
              <label className={s.field}>
                Phí (%)
                <input
                  type="number"
                  step="0.01"
                  value={cryptoForm.fee ?? ''}
                  onChange={(e) => setCryptoForm((prev) => ({ ...prev, fee: e.target.value ? Number(e.target.value) : 0 }))}
                  className={s.input}
                  placeholder="0"
                />
              </label>
              <label className={s.fieldFull} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={cryptoForm.is_active !== false}
                  onChange={(e) => setCryptoForm((prev) => ({ ...prev, is_active: e.target.checked }))}
                />
                <span>Bật cấu hình (is_active)</span>
              </label>
              <div className={s.fieldFull} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button type="submit" className={s.buttonPrimary} disabled={loading}>
                  {loading ? 'Đang lưu...' : cryptoForm._id ? 'Cập nhật cấu hình' : 'Thêm cấu hình crypto'}
                </button>
                {cryptoForm._id && (
                  <button
                    type="button"
                    className={s.buttonSecondary}
                    onClick={() => setCryptoForm({
                      currency: '',
                      network: '',
                      wallet_address: '',
                      qr_code: '',
                      exchange_rate: 25000,
                      fee: 0,
                      is_active: true,
                    })}
                  >
                    Hủy / Thêm mới
                  </button>
                )}
              </div>
            </form>

            <div className={`${s.table} ${s.table7}`} style={{ marginTop: '20px' }}>
              <div className={s.tableHead}>
                <span>Đồng coin</span>
                <span>Network</span>
                <span>Địa chỉ ví</span>
                <span>Tỷ giá</span>
                <span>Phí</span>
                <span>Trạng thái</span>
                <span></span>
              </div>
              {cryptoList.length === 0 ? (
                <div className={s.tableRow}>
                  <span style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--muted)' }}>
                    Chưa có dữ liệu từ MongoDB (admin_crypto). Thêm cấu hình bằng form phía trên.
                  </span>
                </div>
              ) : (
                cryptoList.map((c: CryptoRecord, idx: number) => (
                  <div key={c._id || idx} className={s.tableRow}>
                    <span>{c.currency || '—'}</span>
                    <span>{c.network || '—'}</span>
                    <span style={{ fontSize: '11px', wordBreak: 'break-all' }}>{(c.wallet_address || '—').slice(0, 12)}...</span>
                    <span>{c.exchange_rate != null ? c.exchange_rate.toLocaleString('vi-VN') + ' VNĐ' : '—'}</span>
                    <span>{c.fee != null ? c.fee + '%' : '0%'}</span>
                    <span className={c.is_active !== false ? `${s.tag} ${s.tagOk}` : s.tagWarn}>
                      {c.is_active !== false ? 'Hoạt động' : 'Tắt'}
                    </span>
                    <span>
                      <button
                        type="button"
                        className={s.buttonSecondary}
                        style={{ padding: '4px 8px', fontSize: '12px' }}
                        onClick={() => setCryptoForm({
                          _id: typeof c._id === 'string' ? c._id : (c._id as any)?.toString?.(),
                          currency: c.currency ?? '',
                          network: c.network ?? '',
                          wallet_address: c.wallet_address ?? '',
                          qr_code: c.qr_code ?? '',
                          exchange_rate: c.exchange_rate ?? 25000,
                          fee: c.fee ?? 0,
                          is_active: c.is_active !== false,
                        })}
                      >
                        <Icon name="edit" /> Sửa
                      </button>
                    </span>
                  </div>
                ))
              )}
            </div>
          </section>

          <aside className={`${s.card} ${s.stack}`}>
            <div>
              <div className={s.cardLabel}>Nguồn</div>
              <div className={s.cardTitle}>MongoDB • admin_crypto</div>
            </div>
            <button className={s.buttonSecondary} type="button" onClick={() => void loadConfigs()}>
              Làm mới
            </button>
            <div className={s.metric}>
              <span>Tổng số</span>
              <strong>{cryptoList.length} cấu hình</strong>
              <p>{cryptoList.filter((c: CryptoRecord) => c.is_active !== false).length} hoạt động</p>
            </div>
          </aside>
        </div>
      );
    }

    if (activePanel === 'revenue') {
      const rev = revenueData;
      const isFiltered = Boolean(revenueStartDate || revenueEndDate);
      const displayRev = isFiltered ? (rev?.filteredRevenue ?? 0) : (rev?.totalRevenue ?? 0);
      const displayOrd = isFiltered ? (rev?.filteredOrders ?? 0) : (rev?.totalOrders ?? 0);
      const todayRev = rev?.todayRevenue ?? 0;
      const todayOrd = rev?.todayOrders ?? 0;
      const filteredRev = rev?.filteredRevenue ?? 0;
      const filteredOrd = rev?.filteredOrders ?? 0;
      const byMethod = rev?.byMethod ?? {};
      const methodLabels: Record<string, string> = { bank: 'Ngân hàng', momo: 'Momo', telco: 'Thẻ cào', crypto: 'Crypto' };
      const methodEntries = Object.entries(byMethod);
      const avgPerOrder = displayOrd > 0 ? Math.round(displayRev / displayOrd) : 0;

      return (
        <div className={s.contentGrid}>
          <section className={s.card}>
            <div className={s.cardHead}>
              <div>
                <div className={s.cardLabel}>Revenue</div>
                <div className={s.cardTitle}>Quản lý doanh thu</div>
              </div>
              <span className={s.chip}>MongoDB • paygate_transactions</span>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '12px', color: 'var(--muted)' }}>Từ ngày</label>
                <input
                  type="date"
                  value={revenueStartDate}
                  onChange={(e) => setRevenueStartDate(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--bg)',
                    color: 'var(--fg)',
                    fontSize: '14px',
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '12px', color: 'var(--muted)' }}>Đến ngày</label>
                <input
                  type="date"
                  value={revenueEndDate}
                  onChange={(e) => setRevenueEndDate(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--bg)',
                    color: 'var(--fg)',
                    fontSize: '14px',
                  }}
                />
              </div>
              <button
                type="button"
                onClick={() => void loadRevenueByDate()}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'var(--primary)',
                  color: 'white',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontWeight: 500,
                }}
              >
                Lọc
              </button>
              {(revenueStartDate || revenueEndDate) && (
                <button
                  type="button"
                  onClick={() => {
                    setRevenueStartDate('');
                    setRevenueEndDate('');
                    void loadConfigs();
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'transparent',
                    color: 'var(--fg)',
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                >
                  Xóa lọc
                </button>
              )}
            </div>

            {isFiltered && (
              <div className={s.metric} style={{ marginBottom: '20px', background: 'var(--primary-bg)', border: '1px solid var(--primary)', borderRadius: '12px', padding: '16px' }}>
                <span>Doanh thu lọc theo ngày</span>
                <strong style={{ color: 'var(--primary)' }}>{filteredRev.toLocaleString('vi-VN')} VNĐ</strong>
                <p>{filteredOrd} giao dịch ({rev?.startDate || '...'} đến {rev?.endDate || '...'})</p>
              </div>
            )}

            <div className={s.grid3}>
              <div className={s.metric}>
                <span>{isFiltered ? 'Doanh thu lọc' : 'Tổng doanh thu'}</span>
                <strong>{displayRev.toLocaleString('vi-VN')} VNĐ</strong>
                <p>{isFiltered ? `${revenueStartDate || '...'} đến ${revenueEndDate || '...'}` : 'Từ khi khởi tạo'}</p>
              </div>
              <div className={s.metric}>
                <span>Doanh thu hôm nay</span>
                <strong>{todayRev.toLocaleString('vi-VN')} VNĐ</strong>
                <p>{todayOrd} giao dịch</p>
              </div>
              <div className={s.metric}>
                <span>{isFiltered ? 'Giao dịch lọc' : 'Tổng giao dịch'}</span>
                <strong>{displayOrd.toLocaleString('vi-VN')}</strong>
                <p>{isFiltered ? `Lọc: ${filteredOrd}` : 'Giao dịch thành công'}</p>
              </div>
            </div>

            <div className={`${s.table} ${s.table4}`}>
              <div className={s.tableHead}>
                <span>Phương thức</span>
                <span>Số giao dịch</span>
                <span>Doanh thu</span>
                <span>Tỷ trọng</span>
              </div>
              {methodEntries.length === 0 ? (
                <div className={s.tableRow}>
                  <span style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--muted)' }}>
                    Chưa có giao dịch từ MongoDB (paygate_transactions)
                  </span>
                </div>
              ) : (
                methodEntries.map(([method, data]) => {
                  const pct = displayRev > 0 ? ((data.total_amount / displayRev) * 100).toFixed(1) : '0';
                  return (
                    <div key={method} className={s.tableRow}>
                      <span>{methodLabels[method] || method}</span>
                      <span>{data.count.toLocaleString('vi-VN')}</span>
                      <span>{data.total_amount.toLocaleString('vi-VN')} VNĐ</span>
                      <span className={s.tagOk}>{pct}%</span>
                    </div>
                  );
                })
              )}
            </div>
          </section>

          <aside className={`${s.card} ${s.stack}`}>
            <div>
              <div className={s.cardLabel}>Nguồn</div>
              <div className={s.cardTitle}>Thống kê realtime</div>
            </div>
            <button className={s.buttonSecondary} type="button" onClick={() => void loadConfigs()}>
              Làm mới
            </button>
            <div className={s.metric}>
              <span>Doanh thu trung bình</span>
              <strong>{avgPerOrder.toLocaleString('vi-VN')} VNĐ</strong>
              <p>Mỗi giao dịch</p>
            </div>
            <div className={s.metric}>
              <span>Hôm nay</span>
              <strong>{todayOrd} giao dịch</strong>
              <p>{todayRev.toLocaleString('vi-VN')} VNĐ</p>
            </div>
          </aside>
        </div>
      );
    }

    if (activePanel === 'changepw') {
      return (
        <div className={s.contentGrid}>
          <section className={s.card}>
            <div className={s.cardHead}>
              <div>
                <div className={s.cardLabel}>Bảo mật</div>
                <div className={s.cardTitle}>Đổi mật khẩu đăng nhập admin</div>
              </div>
              <span className={s.chip}>admin_users</span>
            </div>

            <form onSubmit={handleChangePassword} className={s.form}>
              <label className={s.field}>
                Tên đăng nhập admin
                <input
                  value={changepwForm.username}
                  onChange={(e) => setChangepwForm((prev) => ({ ...prev, username: e.target.value }))}
                  className={s.input}
                  placeholder="admin"
                  autoComplete="username"
                />
              </label>
              <label className={s.field}>
                Mật khẩu hiện tại
                <input
                  type="password"
                  value={changepwForm.currentPassword}
                  onChange={(e) => setChangepwForm((prev) => ({ ...prev, currentPassword: e.target.value }))}
                  className={s.input}
                  autoComplete="current-password"
                />
              </label>
              <label className={s.field}>
                Mật khẩu mới
                <input
                  type="password"
                  value={changepwForm.newPassword}
                  onChange={(e) => setChangepwForm((prev) => ({ ...prev, newPassword: e.target.value }))}
                  className={s.input}
                  autoComplete="new-password"
                />
              </label>
              <label className={s.field}>
                Xác nhận mật khẩu mới
                <input
                  type="password"
                  value={changepwForm.confirmPassword}
                  onChange={(e) => setChangepwForm((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                  className={s.input}
                  autoComplete="new-password"
                />
              </label>
              <div className={s.fieldFull}>
                <button type="submit" className={s.buttonPrimary} disabled={loading}>
                  {loading ? 'Đang xử lý...' : 'Đổi mật khẩu'}
                </button>
              </div>
            </form>
          </section>

          <aside className={`${s.card} ${s.stack}`}>
            <div>
              <div className={s.cardLabel}>Lưu ý</div>
              <div className={s.cardTitle}>Đổi MK admin</div>
            </div>
            <p className={s.sub} style={{ marginTop: 0 }}>
              Nhập đúng tên đăng nhập và mật khẩu hiện tại, sau đó đặt mật khẩu mới (ít nhất 4 ký tự). Mật khẩu được lưu mã hóa trong MongoDB (admin_users).
            </p>
          </aside>
        </div>
      );
    }

    return null;
  }

  return (
    <main className={s.page} data-theme={theme}>
      <section className={s.window} aria-label="Admin window">
        <header className={s.titlebar}>
          <div className={s.traffic} aria-hidden="true">
            <span className={`${s.dot} ${s.dotRed}`} />
            <span className={`${s.dot} ${s.dotYellow}`} />
            <span className={`${s.dot} ${s.dotGreen}`} />
          </div>
          <div className={s.title}>Paygate • Admin</div>
          <div className={s.titleRight}>
            {loggedIn ? <span className={`${s.chip} ${s.chipOk}`}>Đã đăng nhập</span> : <span className={s.chip}>Guest</span>}
            <button className={s.iconButton} type="button" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Icon name="sun" /> : <Icon name="moon" />}
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            {loggedIn ? (
              <button className={s.iconButton} type="button" onClick={logout}>
                <Icon name="logout" />
                Đăng xuất
              </button>
            ) : null}
          </div>
        </header>

        <div className={s.body}>
          <aside className={s.sidebar}>
            <div className={s.brand}>
              <div className={s.brandMark}>A</div>
              <div>
                <div className={s.brandTitle}>Admin </div>
              </div>
            </div>

            <div className={s.search}>
              <Icon name="search" />
              <input
                value={navQuery}
                onChange={(e) => setNavQuery(e.target.value)}
                placeholder="Tìm menu…"
                aria-label="Search navigation"
              />
            </div>

            <nav className={s.nav} aria-label="Navigation">
              {filteredNav.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActivePanel(item.key)}
                  className={`${s.navItem} ${activePanel === item.key ? s.navItemActive : ''}`}
                >
                  <span aria-hidden="true">{iconForPanel[item.key]}</span>
                  <span className={s.navText}>
                    <span className={s.navLabel}>{item.label}</span>
                    <span className={s.navDesc}>{item.desc}</span>
                  </span>
                </button>
              ))}
            </nav>

            <div className={s.sidebarFooter}>
              Môi trường
              <strong>MongoDB / Next.js</strong>
            </div>
          </aside>

          <section className={s.main}>
            <div className={s.mobileBar} aria-label="Mobile navigation">
              <span className={s.chip}>Menu</span>
              <select
                className={s.input}
                value={activePanel}
                onChange={(e) => setActivePanel(e.target.value as PanelKey)}
                aria-label="Select panel"
              >
                {navItems.map((it) => (
                  <option key={it.key} value={it.key}>
                    {it.label}
                  </option>
                ))}
              </select>
            </div>

            <header className={s.header}>
              <div>
                <div className={s.kicker}>Administration</div>
                <h1 className={s.h1}>Trang quản trị hệ thống</h1>
                <div className={s.sub}>Quản lý cấu hình nạp tiền (Bank/Momo/Thẻ/Crypto) theo phong cách giao diện macOS (vibrancy + blur).</div>
              </div>
              <div className={s.headerActions}>
                <span className={s.chip}>Panel: {navItems.find((x) => x.key === activePanel)?.label}</span>
              </div>
            </header>

            {renderMain()}
            {message ? <div className={s.notice}>{message}</div> : null}
          </section>
        </div>
      </section>
    </main>
  );
}
