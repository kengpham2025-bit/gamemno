'use client';

import { useEffect, useState, useCallback } from 'react';
import './desktop.css';

const DEFAULT_WALLPAPER = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop';

type WindowId = 'report' | 'bank' | 'momo' | 'telco' | 'crypto' | 'wallpaper' | 'users' | 'settings' | 'browser' | 'proxy';

const DESKTOP_APPS: { id: WindowId; label: string; icon: string }[] = [
  { id: 'report', label: 'Báo Cáo', icon: '📊' },
  { id: 'bank', label: 'Ngân Hàng', icon: '🏦' },
  { id: 'momo', label: 'Ví MoMo', icon: '💜' },
  { id: 'telco', label: 'Thẻ Cào', icon: '📱' },
  { id: 'crypto', label: 'Crypto', icon: '₿' },
  { id: 'wallpaper', label: 'Đổi Ảnh Nền', icon: '🖼️' },
  { id: 'users', label: 'Người Dùng', icon: '👥' },
  { id: 'settings', label: 'Cài Đặt', icon: '⚙️' },
  { id: 'browser', label: 'Trình Duyệt', icon: '🌐' },
  { id: 'proxy', label: 'Proxy', icon: '🔗' },
];

export default function AdminDesktopPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [openWindows, setOpenWindows] = useState<Set<WindowId>>(new Set());
  const [focusedWindow, setFocusedWindow] = useState<WindowId | null>(null);
  const [maximized, setMaximized] = useState<Set<WindowId>>(new Set());
  const [minimized, setMinimized] = useState<Set<WindowId>>(new Set());
  const [startOpen, setStartOpen] = useState(false);
  const [powerOpen, setPowerOpen] = useState(false);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [wallpaper, setWallpaper] = useState(DEFAULT_WALLPAPER);
  const [dialog, setDialog] = useState<{ message: string; onConfirm?: () => void; onCancel?: () => void } | null>(null);

  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('admin_logged_in');
    if (saved === '1') setLoggedIn(true);
    const wp = typeof window !== 'undefined' && localStorage.getItem('admin_wallpaper');
    if (wp) setWallpaper(wp);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
      setDate(now.toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long' }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const openWindow = useCallback((id: WindowId) => {
    setOpenWindows((prev) => new Set(prev).add(id));
    setFocusedWindow(id);
    setMinimized((prev) => { const n = new Set(prev); n.delete(id); return n; });
    setStartOpen(false);
  }, []);

  const closeWindow = useCallback((id: WindowId) => {
    setOpenWindows((prev) => { const n = new Set(prev); n.delete(id); return n; });
    setMaximized((prev) => { const n = new Set(prev); n.delete(id); return n; });
    setMinimized((prev) => { const n = new Set(prev); n.delete(id); return n; });
    if (focusedWindow === id) setFocusedWindow(null);
  }, [focusedWindow]);

  const minWindow = useCallback((id: WindowId) => {
    setMinimized((prev) => new Set(prev).add(id));
  }, []);

  const maxWindow = useCallback((id: WindowId) => {
    setMaximized((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  }, []);

  const toggleWindow = useCallback((id: WindowId) => {
    if (minimized.has(id)) {
      setMinimized((prev) => { const n = new Set(prev); n.delete(id); return n; });
      setFocusedWindow(id);
    } else if (focusedWindow === id) minWindow(id);
    else setFocusedWindow(id);
  }, [minimized, focusedWindow, minWindow]);

  const attemptLogin = useCallback(async () => {
    if (!password.trim()) return;
    setLoginError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data?.success) {
      localStorage.setItem('admin_logged_in', '1');
      setLoggedIn(true);
      setPassword('');
    } else {
      setLoginError(data?.message || 'Mật khẩu không chính xác.');
    }
  }, [username, password]);

  const attemptLogout = useCallback(() => {
    localStorage.removeItem('admin_logged_in');
    setLoggedIn(false);
    setPowerOpen(false);
  }, []);

  const changeWallpaper = useCallback((url: string) => {
    setWallpaper(url);
    if (typeof window !== 'undefined') localStorage.setItem('admin_wallpaper', url);
  }, []);

  const macConfirm = useCallback((message: string, onConfirm: () => void, onCancel?: () => void) => {
    setDialog({ message, onConfirm, onCancel });
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <div
      className="admin-desktop"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Login Screen */}
      {!loggedIn && (
        <div
          className="login-screen"
          onClick={(e) => {
            if ((e.target as HTMLElement).id === 'login-screen' || (e.target as HTMLElement).closest('.login-clock')) {
              setShowLoginBox(true);
            }
          }}
        >
          <div className="login-clock" style={{ pointerEvents: 'none' }}>
            <div className="login-time">{time || '12:00'}</div>
            <div className="login-date">{date || 'Saturday, January 1'}</div>
          </div>
          {showLoginBox && (
            <div className="login-box">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=random&size=150`}
                alt=""
                className="login-avatar"
              />
              <div className="login-name">{username}</div>
              <div className="login-input-group">
                <input
                  type="password"
                  className="login-input"
                  placeholder="PIN hoặc Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && attemptLogin()}
                  autoFocus
                />
                <button type="button" className="login-submit" onClick={attemptLogin} aria-label="Đăng nhập">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
              {loginError && <div className="login-error" style={{ display: 'block' }}>{loginError}</div>}
            </div>
          )}
        </div>
      )}

      {/* Desktop Content */}
      {loggedIn && (
        <>
          <div className="desktop-content">
            {/* Desktop Icons */}
            <div className="desktop-icons">
              {DESKTOP_APPS.map((app) => (
                <div key={app.id} className="desktop-icon" onClick={() => openWindow(app.id)}>
                  <div className="icon-box">{app.icon}</div>
                  <span>{app.label}</span>
                </div>
              ))}
            </div>

            {/* Windows */}
            {DESKTOP_APPS.map((app) => (
              <div
                key={app.id}
                className={`window ${openWindows.has(app.id) ? 'show' : ''} ${maximized.has(app.id) ? 'maximized' : ''} ${minimized.has(app.id) ? 'minimized' : ''}`}
                id={`win-${app.id}`}
                style={{ zIndex: focusedWindow === app.id ? 1000 : 100 }}
                onMouseDown={() => setFocusedWindow(app.id)}
              >
                <div className="window-header">
                  <div className="window-controls">
                    <div className="win-btn close" onClick={() => closeWindow(app.id)} />
                    <div className="win-btn min" onClick={() => minWindow(app.id)} />
                    <div className="win-btn max" onClick={() => maxWindow(app.id)} />
                  </div>
                  <div className="window-title">{app.icon} {getWindowTitle(app.id)}</div>
                </div>
                <div className="window-content">
                  <WindowContent
                    id={app.id}
                    onMessage={macConfirm}
                    onChangeWallpaper={changeWallpaper}
                  />
                </div>
              </div>
            ))}

            {/* Start Menu */}
            <div className={`start-menu ${startOpen ? 'open' : ''}`} id="start-menu">
              <div className="start-search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <input type="text" placeholder="Gõ để tìm kiếm..." readOnly />
              </div>
              <div className="start-section-title">Đã ghim</div>
              <div className="start-apps">
                {DESKTOP_APPS.map((app) => (
                  <div key={app.id} className="app-item" onClick={() => openWindow(app.id)}>
                    <div className="app-item-icon">{app.icon}</div>
                    <div className="app-item-label">{app.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ flexGrow: 1 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: 16 }}>
                <span style={{ fontWeight: 600, fontSize: 13 }}>{username}</span>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setPowerOpen(!powerOpen)}
                  style={{ cursor: 'pointer', padding: 10 }}
                  onKeyDown={(e) => e.key === 'Enter' && setPowerOpen(!powerOpen)}
                >
                  ⏻
                </div>
              </div>
            </div>

            {/* Power Menu */}
            <div className={`power-menu ${powerOpen ? 'show' : ''}`}>
              <div className="power-item" onClick={attemptLogout}>Đăng xuất</div>
              <div className="power-item" onClick={() => window.location.reload()}>Khởi động lại</div>
            </div>

            {/* Menubar */}
            <div className="mac-menubar">
              <div className="mac-menubar-left">
                <div className="mac-menubar-item mac-apple-logo" onClick={() => setStartOpen(!startOpen)} style={{ cursor: 'pointer' }}></div>
                <div className="mac-menubar-item" style={{ fontWeight: 700 }}>Admin</div>
              </div>
              <div className="mac-menubar-right">
                <span id="date">{date}</span>
                <span id="time">{time}</span>
              </div>
            </div>

            {/* Dock */}
            <div className="mac-dock-container">
              <div className="mac-dock">
                <div className="taskbar-icon active" onClick={() => window.location.reload()} style={{ display: 'flex' }} title="Finder">🖥️</div>
                <div className="dock-separator" />
                <div className="taskbar-icon" id="start-btn" onClick={() => setStartOpen(!startOpen)} style={{ display: 'flex' }} title="Launchpad">📱</div>
                {DESKTOP_APPS.map((app) => (
                  <div
                    key={app.id}
                    className={`taskbar-icon ${openWindows.has(app.id) ? 'open' : ''} ${focusedWindow === app.id ? 'active' : ''}`}
                    style={{ display: openWindows.has(app.id) ? 'flex' : 'none' }}
                    onClick={() => toggleWindow(app.id)}
                    title={app.label}
                  >
                    <span style={{ fontSize: 24 }}>{app.icon}</span>
                  </div>
                ))}
                <div className="dock-separator" />
                <div className="taskbar-icon" style={{ display: 'flex' }}>🗑️</div>
              </div>
            </div>
          </div>

          {/* Dialog */}
          {dialog && (
            <div className="mac-dialog-overlay show" onClick={() => setDialog(null)}>
              <div className="mac-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="mac-dialog-message">{dialog.message}</div>
                <div className="mac-dialog-buttons">
                  <button type="button" className="mac-dialog-btn" onClick={() => { dialog.onCancel?.(); setDialog(null); }}>Hủy</button>
                  <button type="button" className="mac-dialog-btn bold" onClick={() => { dialog.onConfirm?.(); setDialog(null); }}>OK</button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function getWindowTitle(id: WindowId): string {
  const t: Record<WindowId, string> = {
    report: 'Báo Cáo Doanh Thu',
    bank: 'Cấu Hình Bank',
    momo: 'Cấu Hình MoMo',
    telco: 'Quản lý Thẻ Cào',
    crypto: 'Quản lý Crypto',
    wallpaper: 'Kho Hình Nền',
    users: 'Người Dùng',
    settings: 'Cài Đặt Hệ Thống',
    browser: 'Trình Duyệt Web',
    proxy: 'Cấu Hình Proxy',
  };
  return t[id] || id;
}

function WindowContent({
  id,
  onMessage,
  onChangeWallpaper,
}: {
  id: WindowId;
  onMessage: (msg: string, onConfirm: () => void, onCancel?: () => void) => void;
  onChangeWallpaper: (url: string) => void;
}) {
  switch (id) {
    case 'report':
      return <WindowReport />;
    case 'bank':
      return <WindowBank onConfirm={onMessage} />;
    case 'momo':
      return <WindowMomo onConfirm={onMessage} />;
    case 'telco':
      return <WindowTelco onConfirm={onMessage} />;
    case 'crypto':
      return <WindowCrypto onConfirm={onMessage} />;
    case 'users':
      return <WindowUsers />;
    case 'settings':
      return <WindowSettings onConfirm={onMessage} />;
    case 'wallpaper':
      return <WindowWallpaper onChangeWallpaper={onChangeWallpaper} />;
    case 'browser':
      return <WindowBrowser />;
    case 'proxy':
      return <WindowProxy />;
    default:
      return <div className="iframe-body">Nội dung</div>;
  }
}

function WindowReport() {
  const [data, setData] = useState<{ total: number; bank: number; momo: number; card: number; list: any[] } | null>(null);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [method, setMethod] = useState('all');

  const load = useCallback(async () => {
    const params = new URLSearchParams();
    if (start) params.set('start_date', start);
    if (end) params.set('end_date', end);
    if (method !== 'all') params.set('method', method);
    const res = await fetch(`/api/admin/revenue?${params}`);
    const j = await res.json();
    if (j?.success && j?.data) {
      const d = j.data;
      setData({
        total: d.filteredRevenue ?? d.totalRevenue ?? 0,
        bank: d.byMethod?.bank?.total_amount ?? 0,
        momo: d.byMethod?.momo?.total_amount ?? 0,
        card: d.byMethod?.card?.total_amount ?? 0,
        list: d.recent ?? [],
      });
    }
  }, [start, end, method]);

  useEffect(() => { void load(); }, [load]);

  return (
    <div className="iframe-body">
      <h2>Báo Cáo Doanh Thu</h2>
      <div className="setting-section">
        <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Từ ngày</label>
            <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Đến ngày</label>
            <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Phương thức</label>
            <select value={method} onChange={(e) => setMethod(e.target.value)}>
              <option value="all">Tất cả</option>
              <option value="bank">Bank</option>
              <option value="momo">MoMo</option>
              <option value="card">Thẻ Cào</option>
            </select>
          </div>
          <button type="button" className="btn-primary" onClick={() => void load()}>Lọc</button>
        </div>
        {data && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 24 }}>
              <div className="setting-section" style={{ padding: 16 }}>
                <div style={{ fontSize: 12, opacity: 0.8 }}>Tổng Doanh Thu</div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>{Number(data.total).toLocaleString('vi-VN')} ₫</div>
              </div>
              <div className="setting-section" style={{ padding: 16 }}>
                <div style={{ fontSize: 12, opacity: 0.8 }}>Bank</div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>{Number(data.bank).toLocaleString('vi-VN')} ₫</div>
              </div>
              <div className="setting-section" style={{ padding: 16 }}>
                <div style={{ fontSize: 12, opacity: 0.8 }}>MoMo</div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>{Number(data.momo).toLocaleString('vi-VN')} ₫</div>
              </div>
              <div className="setting-section" style={{ padding: 16 }}>
                <div style={{ fontSize: 12, opacity: 0.8 }}>Thẻ Cào</div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>{Number(data.card).toLocaleString('vi-VN')} ₫</div>
              </div>
            </div>
            <h3>Lịch sử giao dịch</h3>
            <table>
              <thead>
                <tr>
                  <th>Thời gian</th>
                  <th>Hình thức</th>
                  <th>Số tiền</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {data.list.length === 0 ? (
                  <tr><td colSpan={4} style={{ textAlign: 'center' }}>Không có giao dịch</td></tr>
                ) : (
                  data.list.slice(0, 50).map((t: any, i: number) => (
                    <tr key={t.id ?? i}>
                      <td>{t.created_at ? new Date(t.created_at).toLocaleString('vi-VN') : '—'}</td>
                      <td>{String(t.method || '').toUpperCase()}</td>
                      <td>{Number(t.amount || 0).toLocaleString('vi-VN')} ₫</td>
                      <td><span className={`badge ${t.status === 'success' ? 'b-success' : 'b-danger'}`}>{t.status}</span></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

function WindowBank({ onConfirm }: { onConfirm: (m: string, ok: () => void, cancel?: () => void) => void }) {
  const [banks, setBanks] = useState<any[]>([]);
  const [form, setForm] = useState({ bank_name: '', account_number: '', account_name: '', sepay_bank_code: '' });
  const [msg, setMsg] = useState('');

  const load = useCallback(async () => {
    const res = await fetch('/api/admin/bank');
    const j = await res.json();
    if (j?.data) setBanks(Array.isArray(j.data) ? j.data : []);
  }, []);

  useEffect(() => { void load(); }, [load]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/bank', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, is_active: true }),
    });
    const j = await res.json();
    setMsg(j?.message || (j?.success ? 'Đã lưu' : 'Lỗi'));
    setForm({ bank_name: '', account_number: '', account_name: '', sepay_bank_code: '' });
    void load();
  };

  return (
    <div className="iframe-body">
      <h2>Cấu Hình Ngân Hàng</h2>
      {msg && <div style={{ background: '#dff6dd', color: '#0f7b0f', padding: 10, borderRadius: 4, marginBottom: 15 }}>{msg}</div>}
      <div className="setting-section" style={{ maxWidth: 500 }}>
        <h3>Thêm tài khoản</h3>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Ngân hàng</label>
            <input value={form.bank_name} onChange={(e) => setForm((p) => ({ ...p, bank_name: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label>Số tài khoản</label>
            <input value={form.account_number} onChange={(e) => setForm((p) => ({ ...p, account_number: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label>Tên chủ tài khoản</label>
            <input value={form.account_name} onChange={(e) => setForm((p) => ({ ...p, account_name: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label>Mã SePay (VCB, BIDV...)</label>
            <input value={form.sepay_bank_code} onChange={(e) => setForm((p) => ({ ...p, sepay_bank_code: e.target.value }))} />
          </div>
          <button type="submit" className="btn-primary">Thêm Ngân Hàng</button>
        </form>
      </div>
      <div className="setting-section">
        <h3>Danh sách</h3>
        <table>
          <thead>
            <tr><th>Ngân hàng</th><th>Số TK</th><th>Tên TK</th><th>Trạng thái</th></tr>
          </thead>
          <tbody>
            {banks.length === 0 ? <tr><td colSpan={4} style={{ textAlign: 'center' }}>Chưa có</td></tr> : banks.map((b: any) => (
              <tr key={b.id}>
                <td>{b.bank_name}</td>
                <td>{b.account_number}</td>
                <td>{b.account_name}</td>
                <td><span className={`badge ${b.is_active ? 'b-success' : 'b-danger'}`}>{b.is_active ? 'Bật' : 'Tắt'}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function WindowMomo({ onConfirm }: { onConfirm: (m: string, ok: () => void) => void }) {
  const [list, setList] = useState<any[]>([]);
  const [momo_number, setMomoNumber] = useState('');
  const [momo_name, setMomoName] = useState('');
  const [msg, setMsg] = useState('');

  const load = useCallback(async () => {
    const res = await fetch('/api/admin/momo');
    const j = await res.json();
    if (j?.data) {
      if (Array.isArray(j.data)) setList(j.data);
      else setList(j.data.momo_number ? [j.data] : []);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/momo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ momo_number, momo_name, is_active: true }),
    });
    const j = await res.json();
    setMsg(j?.message || (j?.success ? 'Đã lưu' : 'Lỗi'));
    setMomoNumber(''); setMomoName('');
    void load();
  };

  return (
    <div className="iframe-body">
      <h2>Cấu Hình Ví MoMo</h2>
      {msg && <div style={{ background: '#dff6dd', color: '#0f7b0f', padding: 10, borderRadius: 4, marginBottom: 15 }}>{msg}</div>}
      <div className="setting-section" style={{ maxWidth: 500 }}>
        <h3>Thêm Ví MoMo</h3>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Số điện thoại MoMo</label>
            <input value={momo_number} onChange={(e) => setMomoNumber(e.target.value)} placeholder="0987654321" required />
          </div>
          <div className="form-group">
            <label>Tên chủ ví</label>
            <input value={momo_name} onChange={(e) => setMomoName(e.target.value)} required />
          </div>
          <button type="submit" className="btn-primary" style={{ background: '#a50064' }}>Thêm Ví MoMo</button>
        </form>
      </div>
      <div className="setting-section">
        <h3>Danh sách</h3>
        <table>
          <thead>
            <tr><th>Số MoMo</th><th>Tên</th><th>Trạng thái</th></tr>
          </thead>
          <tbody>
            {list.length === 0 ? <tr><td colSpan={3} style={{ textAlign: 'center' }}>Chưa có</td></tr> : list.map((m: any) => (
              <tr key={m.id}>
                <td>{m.momo_number}</td>
                <td>{m.momo_name}</td>
                <td><span className={`badge ${m.is_active ? 'b-success' : 'b-danger'}`}>{m.is_active ? 'Bật' : 'Tắt'}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function WindowTelco({ onConfirm }: { onConfirm: (m: string, ok: () => void) => void }) {
  const [telcos, setTelcos] = useState<any[]>([]);
  const [thecao, setThecao] = useState<any>(null);
  const [form, setForm] = useState({ partner_id: '', partner_key: '', url: 'https://doithe1s.vn/chargingws/v2' });
  const [msg, setMsg] = useState('');

  const load = useCallback(async () => {
    const [r1, r2] = await Promise.all([fetch('/api/admin/telco'), fetch('/api/admin/thecao')]);
    const j1 = await r1.json();
    const j2 = await r2.json();
    if (j1?.data) setTelcos(Array.isArray(j1.data) ? j1.data : []);
    if (j2?.data) setThecao(j2.data);
    else if (j2?.success === false && !j2?.data) setForm((p) => ({ ...p, url: 'https://doithe1s.vn/chargingws/v2' }));
  }, []);

  useEffect(() => { void load(); }, [load]);

  useEffect(() => { if (thecao) setForm({ partner_id: thecao.partner_id || '', partner_key: thecao.partner_key || '', url: thecao.url || '' }); }, [thecao]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/thecao', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: thecao?.id, ...form, is_active: true }),
    });
    const j = await res.json();
    setMsg(j?.message || (j?.success ? 'Đã lưu' : 'Lỗi'));
    void load();
  };

  return (
    <div className="iframe-body">
      <h2>Quản lý Thẻ Cào</h2>
      {msg && <div style={{ background: '#dff6dd', color: '#0f7b0f', padding: 10, borderRadius: 4, marginBottom: 15 }}>{msg}</div>}
      <div className="setting-section" style={{ maxWidth: 500 }}>
        <h3>API doithe1s</h3>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Partner ID</label>
            <input value={form.partner_id} onChange={(e) => setForm((p) => ({ ...p, partner_id: e.target.value }))} />
          </div>
          <div className="form-group">
            <label>Partner Key</label>
            <input type="password" value={form.partner_key} onChange={(e) => setForm((p) => ({ ...p, partner_key: e.target.value }))} />
          </div>
          <div className="form-group">
            <label>URL API</label>
            <input value={form.url} onChange={(e) => setForm((p) => ({ ...p, url: e.target.value }))} />
          </div>
          <button type="submit" className="btn-primary">Lưu</button>
        </form>
      </div>
      <div className="setting-section">
        <h3>Nhà mạng</h3>
        <table>
          <thead>
            <tr><th>Tên</th><th>telco_id</th><th>Trạng thái</th></tr>
          </thead>
          <tbody>
            {telcos.length === 0 ? <tr><td colSpan={3} style={{ textAlign: 'center' }}>Chưa có</td></tr> : telcos.map((t: any) => (
              <tr key={t.id}>
                <td>{t.name}</td>
                <td>{t.telco_id}</td>
                <td><span className={`badge ${t.active ? 'b-success' : 'b-danger'}`}>{t.active ? 'Bật' : 'Tắt'}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function WindowCrypto({ onConfirm }: { onConfirm: (m: string, ok: () => void) => void }) {
  const [list, setList] = useState<any[]>([]);
  const [msg, setMsg] = useState('');

  const load = useCallback(async () => {
    const res = await fetch('/api/admin/crypto');
    const j = await res.json();
    if (j?.data) setList(Array.isArray(j.data) ? j.data : []);
  }, []);

  useEffect(() => { void load(); }, [load]);

  return (
    <div className="iframe-body">
      <h2>Quản lý Crypto</h2>
      {msg && <div style={{ background: '#dff6dd', color: '#0f7b0f', padding: 10, borderRadius: 4, marginBottom: 15 }}>{msg}</div>}
      <div className="setting-section">
        <h3>Danh sách</h3>
        <table>
          <thead>
            <tr><th>Đồng</th><th>Network</th><th>Địa chỉ ví</th><th>Tỷ giá</th><th>Trạng thái</th></tr>
          </thead>
          <tbody>
            {list.length === 0 ? <tr><td colSpan={5} style={{ textAlign: 'center' }}>Chưa có</td></tr> : list.map((c: any) => (
              <tr key={c.id}>
                <td>{c.currency}</td>
                <td>{c.network}</td>
                <td style={{ fontSize: 11 }}>{(c.wallet_address || '').slice(0, 16)}...</td>
                <td>{c.exchange_rate != null ? Number(c.exchange_rate).toLocaleString('vi-VN') : '—'}</td>
                <td><span className={`badge ${c.is_active ? 'b-success' : 'b-danger'}`}>{c.is_active ? 'Bật' : 'Tắt'}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function WindowUsers() {
  const [list, setList] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');

  const load = useCallback(async () => {
    const res = await fetch(`/api/admin/accounts?limit=100&skip=0`);
    const j = await res.json();
    if (j?.data) setList(Array.isArray(j.data) ? j.data : []);
    if (typeof j?.total === 'number') setTotal(j.total);
  }, []);

  useEffect(() => { void load(); }, [load]);

  const filtered = search.trim() ? list.filter((u: any) => String(u.username || '').toLowerCase().includes(search.toLowerCase())) : list;

  const exportTxt = () => {
    const lines = filtered.map((a: any) => `${a.username || ''}|${a.password || ''}`);
    const blob = new Blob([lines.join('\r\n')], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `users_export_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="iframe-body">
      <h2>Quản Lý Người Dùng</h2>
      <div className="setting-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 10 }}>
          <input
            type="text"
            placeholder="Tìm Username..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: '8px 12px', width: 200, borderRadius: 4, border: '1px solid var(--input-border)' }}
          />
          <button type="button" className="btn-primary" onClick={exportTxt}>Xuất TXT (user|pass)</button>
        </div>
        <table>
          <thead>
            <tr><th>ID</th><th>Tên TK</th><th>Mật khẩu</th><th>Game</th><th>Ví</th><th>Ngày</th></tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? <tr><td colSpan={6} style={{ textAlign: 'center' }}>Không có</td></tr> : filtered.map((u: any) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td style={{ fontWeight: 600 }}>{u.username}</td>
                <td style={{ fontSize: 11 }}>{(u.password || '').slice(0, 12)}...</td>
                <td>{u.game || '—'}</td>
                <td>{u.wallet != null ? Number(u.wallet).toLocaleString('vi-VN') : '—'}</td>
                <td>{u.created_at ? new Date(u.created_at).toLocaleDateString('vi-VN') : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function WindowSettings({ onConfirm }: { onConfirm: (m: string, ok: () => void) => void }) {
  const [username, setUsername] = useState('admin');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) { setMsg('Mật khẩu mới và xác nhận không trùng'); return; }
    const res = await fetch('/api/admin/changepw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, currentPassword, newPassword }),
    });
    const j = await res.json();
    setMsg(j?.message || (j?.success ? 'Đã đổi mật khẩu' : 'Lỗi'));
    if (j?.success) setCurrentPassword(''); setNewPassword(''); setConfirmPassword('');
  };

  return (
    <div className="iframe-body">
      <h2>Cài Đặt Hệ Thống</h2>
      <div className="setting-section" style={{ maxWidth: 420 }}>
        <h3>Đổi Mật Khẩu Admin</h3>
        {msg && <div style={{ marginBottom: 12, color: msg.includes('Lỗi') ? '#d13438' : '#107c10' }}>{msg}</div>}
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Tên đăng nhập admin</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Mật khẩu hiện tại</label>
            <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Mật khẩu mới</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Xác nhận mật khẩu mới</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn-primary">Đổi mật khẩu</button>
        </form>
      </div>
    </div>
  );
}

function WindowWallpaper({ onChangeWallpaper }: { onChangeWallpaper: (url: string) => void }) {
  const [url, setUrl] = useState('');
  const presets = [
    DEFAULT_WALLPAPER,
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920',
  ];

  return (
    <div className="iframe-body">
      <h2>Kho Hình Nền</h2>
      <div className="setting-section">
        <h3>URL ảnh nền</h3>
        <div className="form-group">
          <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." />
        </div>
        <button type="button" className="btn-primary" onClick={() => url && onChangeWallpaper(url)}>Áp dụng</button>
        <h3 style={{ marginTop: 24 }}>Mẫu</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {presets.map((u) => (
            <div key={u} onClick={() => { setUrl(u); onChangeWallpaper(u); }} style={{ cursor: 'pointer', width: 160, height: 100, borderRadius: 8, overflow: 'hidden', background: '#eee' }}>
              <img src={u} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WindowBrowser() {
  const [url, setUrl] = useState('https://www.google.com');
  return (
    <div className="iframe-body" style={{ padding: 0, height: '100%' }}>
      <div style={{ padding: 12, background: 'var(--section-bg)', borderBottom: '1px solid var(--section-border)', display: 'flex', gap: 8 }}>
        <input value={url} onChange={(e) => setUrl(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && setUrl((u) => u)} style={{ flex: 1, padding: '8px 12px', borderRadius: 6 }} />
        <button type="button" className="btn-primary" onClick={() => setUrl((u) => u)}>Go</button>
      </div>
      <iframe src={url} title="Browser" style={{ width: '100%', height: 'calc(100% - 50px)', border: 'none' }} sandbox="allow-scripts allow-same-origin" />
    </div>
  );
}

function WindowProxy() {
  return (
    <div className="iframe-body">
      <h2>Cấu Hình Proxy</h2>
      <div className="setting-section">
        <p>Cấu hình proxy được đặt trong file .env (PROXY_HOST, PROXY_PORT, PROXY_USER, PROXY_PASS). Không chỉnh qua giao diện để bảo mật.</p>
      </div>
    </div>
  );
}
