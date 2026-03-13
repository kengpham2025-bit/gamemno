<?php
session_start();
// Check login status
$is_logged_in = isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true;
$admin_username = $_SESSION['admin_username'] ?? 'Administrator';
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KENGBY</title>
    <!-- Use Windows 11 Segoe UI font -->
    <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="desktop-bg" oncontextmenu="return showContextMenu(event);">

    <!-- LOCK / LOGIN SCREEN -->
    <div id="login-screen" style="<?php if ($is_logged_in)
    echo 'display: none;'; ?>">
        <div class="login-clock" id="login-clock-container">
            <div class="login-time" id="lock-time">12:00</div>
            <div class="login-date" id="lock-date">Saturday, January 1</div>
        </div>

        <div class="login-box" id="login-box-container" style="display:none;">
            <img src="https://ui-avatars.com/api/?name=<?php echo urlencode($admin_username); ?>&background=random&size=150" class="login-avatar">
            <div class="login-name" id="login-username-display"><?php echo htmlspecialchars($admin_username); ?></div>
            
            <div class="login-input-group">
                <input type="password" id="login-password" class="login-input" placeholder="PIN hoặc Mật khẩu" autofocus onkeypress="if(event.key === 'Enter') attemptLogin()">
                <button class="login-submit" onclick="attemptLogin()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
            <div class="login-error" id="login-error-msg">Mật khẩu không chính xác. Thử lại.</div>
        </div>
    </div>


    <div id="desktop-content" style="<?php if (!$is_logged_in)
    echo 'display: none;'; ?>">
        <!-- Desktop Icons -->
        <div class="desktop-icons">
            <div class="desktop-icon" onclick="openWindow('report')" ondblclick="openWindow('report')">
                <img src="icons/mac-wallet.png" alt="Report">
                <span>Báo Cáo</span>
            </div>
            <div class="desktop-icon" onclick="openWindow('bank')" ondblclick="openWindow('bank')">
                <img src="icons/mac-wallet.png" alt="Bank">
                <span>Ngân Hàng</span>
            </div>
            <div class="desktop-icon" onclick="openWindow('momo')" ondblclick="openWindow('momo')">
                <img src="icons/mac-messages.png" alt="MoMo">
                <span>Ví MoMo</span>
            </div>
            <div class="desktop-icon" onclick="openWindow('telco')" ondblclick="openWindow('telco')">
                <img src="icons/mac-appstore.png" alt="Telco">
                <span>Thẻ Cào</span>
            </div>
            <div class="desktop-icon" onclick="openWindow('crypto')" ondblclick="openWindow('crypto')">
                <img src="icons/mac-calculator.png" alt="Crypto">
                <span>Crypto</span>
            </div>
            <div class="desktop-icon" onclick="openWindow('wallpaper')" ondblclick="openWindow('wallpaper')">
                <img src="icons/mac-photos.png" alt="Wallpaper">
                <span>Đổi Ảnh Nền</span>
            </div>
            <div class="desktop-icon" onclick="openWindow('users')" ondblclick="openWindow('users')">
                <img src="icons/mac-contacts.png" alt="Users">
                <span>Người Dùng</span>
            </div>
            <div class="desktop-icon" onclick="openWindow('settings')" ondblclick="openWindow('settings')">
                <img src="icons/mac-settings.png" alt="Settings">
                <span>Cài Đặt</span>
            </div>
            <div class="desktop-icon" onclick="openWindow('browser')" ondblclick="openWindow('browser')">
                <img src="icons/mac-safari.png" alt="Browser">
                <span>Trình Duyệt</span>
            </div>
            <div class="desktop-icon" onclick="openWindow('proxy')" ondblclick="openWindow('proxy')">
                <img src="icons/mac-settings.png" alt="Proxy">
                <span>Proxy</span>
            </div>
        </div>

        <!-- Windows Container -->
        <div id="windows-layer">
            <div class="window" id="win-telco">
                <div class="window-header">
                    <div class="window-title">
                        <img src="icons/mac-appstore.png" alt="">
                        Quản lý Thẻ Cào
                    </div>
                    <div class="window-controls"><div class="win-btn close" onclick="closeWindow('telco')"></div><div class="win-btn min" onclick="minWindow('telco')"></div><div class="win-btn max" onclick="maxWindow('telco')"></div></div>
                </div>
                <div class="window-content">
                    <iframe src="admin_telco.php" name="iframe_telco"></iframe>
                </div>
            </div>

            <div class="window" id="win-crypto">
                <div class="window-header">
                    <div class="window-title">
                        <img src="icons/mac-calculator.png" alt="">
                        Quản lý Crypto
                    </div>
                    <div class="window-controls"><div class="win-btn close" onclick="closeWindow('crypto')"></div><div class="win-btn min" onclick="minWindow('crypto')"></div><div class="win-btn max" onclick="maxWindow('crypto')"></div></div>
                </div>
                <div class="window-content">
                    <iframe src="admin_crypto.php" name="iframe_crypto"></iframe>
                </div>
            </div>

            <div class="window" id="win-settings">
                <div class="window-header">
                    <div class="window-title">
                        <img src="icons/mac-settings.png" alt="">
                        Cài Đặt Hệ Thống
                    </div>
                    <div class="window-controls"><div class="win-btn close" onclick="closeWindow('settings')"></div><div class="win-btn min" onclick="minWindow('settings')"></div><div class="win-btn max" onclick="maxWindow('settings')"></div></div>
                </div>
                <div class="window-content">
                    <iframe src="admin_settings.php" name="iframe_settings"></iframe>
                </div>
            </div>

            <div class="window" id="win-report">
                <div class="window-header">
                    <div class="window-title">
                        <img src="icons/mac-wallet.png" alt="">
                        Báo Cáo Doanh Thu
                    </div>
                    <div class="window-controls"><div class="win-btn close" onclick="closeWindow('report')"></div><div class="win-btn min" onclick="minWindow('report')"></div><div class="win-btn max" onclick="maxWindow('report')"></div></div>
                </div>
                <div class="window-content">
                    <iframe src="admin_report.php" name="iframe_report"></iframe>
                </div>
            </div>

            <div class="window" id="win-bank">
                <div class="window-header">
                    <div class="window-title">
                        <img src="icons/mac-wallet.png" alt="">
                        Cấu Hình Bank
                    </div>
                    <div class="window-controls"><div class="win-btn close" onclick="closeWindow('bank')"></div><div class="win-btn min" onclick="minWindow('bank')"></div><div class="win-btn max" onclick="maxWindow('bank')"></div></div>
                </div>
                <div class="window-content">
                    <iframe src="admin_bank_config.php" name="iframe_bank"></iframe>
                </div>
            </div>

            <div class="window" id="win-momo">
                <div class="window-header">
                    <div class="window-title">
                        <img src="icons/mac-appstore.png" alt="">
                        Cấu Hình MoMo
                    </div>
                    <div class="window-controls"><div class="win-btn close" onclick="closeWindow('momo')"></div><div class="win-btn min" onclick="minWindow('momo')"></div><div class="win-btn max" onclick="maxWindow('momo')"></div></div>
                </div>
                <div class="window-content">
                    <iframe src="admin_momo_config.php" name="iframe_momo"></iframe>
                </div>
            </div>

            <div class="window" id="win-users">
                <div class="window-header">
                    <div class="window-title">
                        <img src="icons/mac-contacts.png" alt="">
                        Người Dùng
                    </div>
                    <div class="window-controls"><div class="win-btn close" onclick="closeWindow('users')"></div><div class="win-btn min" onclick="minWindow('users')"></div><div class="win-btn max" onclick="maxWindow('users')"></div></div>
                </div>
                <div class="window-content">
                    <iframe src="admin_users.php" name="iframe_users"></iframe>
                </div>
            </div>

            <div class="window" id="win-browser">
                <div class="window-header">
                    <div class="window-title">
                        <img src="icons/mac-safari.png" alt="">
                        Trình Duyệt Web
                    </div>
                    <div class="window-controls"><div class="win-btn close" onclick="closeWindow('browser')"></div><div class="win-btn min" onclick="minWindow('browser')"></div><div class="win-btn max" onclick="maxWindow('browser')"></div></div>
                </div>
                <div class="window-content" style="padding:0">
                    <iframe src="admin_browser.php" name="iframe_browser"></iframe>
                </div>
            </div>

            <div class="window" id="win-wallpaper">
                <div class="window-header">
                    <div class="window-title">
                        <img src="icons/mac-photos.png" alt="">
                        Kho Hình Nền
                    </div>
                    <div class="window-controls"><div class="win-btn close" onclick="closeWindow('wallpaper')"></div><div class="win-btn min" onclick="minWindow('wallpaper')"></div><div class="win-btn max" onclick="maxWindow('wallpaper')"></div></div>
                </div>
                <div class="window-content">
                    <iframe src="admin_wallpaper.php" name="iframe_wallpaper"></iframe>
                </div>
            </div>

            <div class="window" id="win-proxy">
                <div class="window-header">
                    <div class="window-title">
                        <img src="icons/mac-settings.png" alt="">
                        Cấu Hình Proxy
                    </div>
                    <div class="window-controls"><div class="win-btn close" onclick="closeWindow('proxy')"></div><div class="win-btn min" onclick="minWindow('proxy')"></div><div class="win-btn max" onclick="maxWindow('proxy')"></div></div>
                </div>
                <div class="window-content">
                    <iframe src="admin_proxy_config.php" name="iframe_proxy"></iframe>
                </div>
            </div>
        </div>

        <!-- Start Menu -->
        <div class="start-menu" id="start-menu">
            <div class="start-search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" placeholder="Gõ để tìm kiếm ứng dụng, cài đặt, và tài liệu...">
            </div>
            <div class="start-section-title">
                <span>Đã ghim</span>
                <span style="font-size: 12px; font-weight: normal; background: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 4px; cursor: pointer;">Tất cả ứng dụng &gt;</span>
            </div>
            <div class="start-apps">
                <div class="app-item" onclick="openWindow('report')">
                    <div class="app-item-icon"><img src="icons/mac-wallet.png"></div>
                    <div class="app-item-label">Báo Cáo</div>
                </div>
                <div class="app-item" onclick="openWindow('bank')">
                    <div class="app-item-icon"><img src="icons/mac-wallet.png"></div>
                    <div class="app-item-label">Ngân Hàng</div>
                </div>
                <div class="app-item" onclick="openWindow('momo')">
                    <div class="app-item-icon"><img src="icons/mac-messages.png"></div>
                    <div class="app-item-label">Ví MoMo</div>
                </div>
                <div class="app-item" onclick="openWindow('telco')">
                    <div class="app-item-icon"><img src="icons/mac-appstore.png"></div>
                    <div class="app-item-label">Thẻ Cào</div>
                </div>
                <div class="app-item" onclick="openWindow('crypto')">
                    <div class="app-item-icon"><img src="icons/mac-calculator.png"></div>
                    <div class="app-item-label">Crypto</div>
                </div>
                <div class="app-item" onclick="openWindow('users')">
                    <div class="app-item-icon"><img src="icons/mac-contacts.png"></div>
                    <div class="app-item-label">Người Dùng</div>
                </div>
                <div class="app-item" onclick="openWindow('settings')">
                    <div class="app-item-icon"><img src="icons/mac-settings.png"></div>
                    <div class="app-item-label">Cài Đặt</div>
                </div>
                <div class="app-item" onclick="openWindow('wallpaper')">
                    <div class="app-item-icon"><img src="icons/mac-photos.png"></div>
                    <div class="app-item-label">Ảnh Nền</div>
                </div>
                <div class="app-item" onclick="openWindow('browser')">
                    <div class="app-item-icon"><img src="icons/mac-safari.png"></div>
                    <div class="app-item-label">Trình Duyệt</div>
                </div>
                <div class="app-item" onclick="openWindow('proxy')">
                    <div class="app-item-icon"><img src="icons/mac-settings.png"></div>
                    <div class="app-item-label">Proxy</div>
                </div>
            </div>
            <div style="flex-grow:1"></div>
            
            <!-- Bottom Start Profile Bar -->
            <div style="display:flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--glass-border); padding-top: 16px;">
                <div style="display:flex; align-items:center; gap: 12px; padding: 4px; border-radius: 4px; cursor: pointer;">
                    <img src="https://ui-avatars.com/api/?name=<?php echo urlencode($admin_username); ?>&background=random" style="width:32px; height:32px; border-radius:50%">
                    <span style="font-weight:600; font-size:13px"><?php echo htmlspecialchars($admin_username); ?></span>
                </div>
                <div style="cursor:pointer; padding: 10px; border-radius: 4px;" id="power-btn" onmouseover="this.style.background='var(--taskbar-hover)'" onmouseout="this.style.background='transparent'" onclick="togglePower(event)">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
                </div>
            </div>
        </div>

        <!-- Power Menu -->
        <div class="power-menu" id="power-menu">
            <div class="power-item" onclick="attemptLogout()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Đăng xuất</div>
            <div class="power-item" onclick="location.reload()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg> Khởi động lại</div>
        </div>

        <!-- Menubar & Dock -->
        <div class="mac-menubar">
            <div class="mac-menubar-left">
                <div class="mac-menubar-item mac-apple-logo" onclick="toggleStart()"></div>
                <div class="mac-menubar-item" style="font-weight:700">Admin</div>
                <div class="mac-menubar-item">File</div>
                <div class="mac-menubar-item">Edit</div>
                <div class="mac-menubar-item">View</div>
                <div class="mac-menubar-item">Window</div>
                <div class="mac-menubar-item">Help</div>
            </div>
            <div class="mac-menubar-right" style="cursor:default">
                <div class="mac-menubar-item" style="display:flex; gap:12px">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                </div>
                <div class="mac-menubar-item" style="display:flex; gap:8px">
                    <span id="date" style="font-weight: 500">1/1/2026</span>
                    <span id="time" style="font-weight: 500">12:00 PM</span>
                </div>
            </div>
        </div>

        <div class="mac-dock-container">
            <div class="mac-dock">
                <!-- Finder (always open essentially but here just a shortcut to home/reload) -->
                <div class="taskbar-icon active" onclick="location.reload()" title="Finder">
                    <img src="icons/mac-finder.png" alt="Finder" onerror="this.src='icons/mac-contacts.png'">
                </div>
                
                <div class="dock-separator"></div>

                <!-- Launchpad (replaces Start Menu) -->
                <div class="taskbar-icon" id="start-btn" onclick="toggleStart()" title="Launchpad">
                    <img src="icons/mac-launchpad.png" alt="Launchpad" onerror="this.src='icons/start.png'">
                </div>
                
                <!-- Open Apps Dynamic Icons -->
                <div class="taskbar-icon" onclick="toggleWindow('report')" id="task-report" style="display:none" title="Báo Cáo">
                    <img src="icons/mac-wallet.png" style="width:48px;height:48px;">
                </div>
                <div class="taskbar-icon" onclick="toggleWindow('bank')" id="task-bank" style="display:none" title="Ngân Hàng">
                    <img src="icons/mac-wallet.png" style="width:48px;height:48px;">
                </div>
                <div class="taskbar-icon" onclick="toggleWindow('momo')" id="task-momo" style="display:none" title="Ví MoMo">
                    <img src="icons/mac-appstore.png" style="width:48px;height:48px;">
                </div>
                <div class="taskbar-icon" onclick="toggleWindow('telco')" id="task-telco" style="display:none" title="Thẻ Cào">
                    <img src="icons/mac-appstore.png" style="width:48px;height:48px;">
                </div>
                <div class="taskbar-icon" onclick="toggleWindow('crypto')" id="task-crypto" style="display:none" title="Crypto">
                    <img src="icons/mac-calculator.png" style="width:48px;height:48px;">
                </div>
                <div class="taskbar-icon" onclick="toggleWindow('users')" id="task-users" style="display:none" title="Người Dùng">
                    <img src="icons/mac-contacts.png" style="width:48px;height:48px;">
                </div>
                
                <div class="dock-separator"></div>

                <div class="taskbar-icon" onclick="toggleWindow('settings')" id="task-settings" style="display:none" title="Cài Đặt">
                    <img src="icons/mac-settings.png" style="width:48px;height:48px;">
                </div>
                <div class="taskbar-icon" onclick="toggleWindow('wallpaper')" id="task-wallpaper" style="display:none" title="Ảnh Nền">
                    <img src="icons/mac-photos.png" style="width:48px;height:48px;">
                </div>
                <div class="taskbar-icon" onclick="toggleWindow('browser')" id="task-browser" style="display:none" title="Safari">
                    <img src="icons/mac-safari.png" style="width:48px;height:48px;">
                </div>
                <div class="taskbar-icon" onclick="toggleWindow('proxy')" id="task-proxy" style="display:none" title="Proxy">
                    <img src="icons/mac-settings.png" style="width:48px;height:48px;">
                </div>
                
                <!-- Trash (rightmost) -->
                <div class="dock-separator"></div>
                <div class="taskbar-icon" title="Thùng rác">
                    <img src="icons/mac-trash.png" alt="Trash" onerror="this.src='icons/mac-contacts.png'">
                </div>
            </div>
        </div>

        <!-- System Context Menu -->
        <div id="context-menu">
            <div class="context-item" onclick="location.reload();">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                Làm mới 
            </div>
            <div class="context-item" onclick="refreshActiveIframe();">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3h18v18H3zM12 8v8M8 12h8"></path></svg>
                Tải lại Cửa sổ 
            </div>
            <div class="context-separator"></div>
            <div class="context-item" onclick="showNotification('Tùy chọn', 'Tính năng mở rộng đang được nâng cấp.')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                Hiển thị thêm tùy chọn
            </div>
            <div class="context-separator"></div>
            <div class="context-item" onclick="openWindow('settings')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                Cá nhân hóa (Personalize)
            </div>
        </div>
        
        <!-- Toast Container -->
        <div id="toast-container"></div>
        
        <!-- Custom macOS Dialog -->
        <div id="mac-dialog-overlay">
            <div class="mac-dialog">
                <div class="mac-dialog-content">
                    <div class="mac-dialog-icon">
                        <img src="icons/mac-settings.png" width="48" height="48" style="border-radius:10px" id="mac-dialog-img">
                    </div>
                    <div class="mac-dialog-message" id="mac-dialog-message">Message</div>
                </div>
                <div class="mac-dialog-buttons" id="mac-dialog-buttons">
                    <!-- Buttons injected via JS -->
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script>
        // --- CUSTOM NATIVE MAC DIALOG ---
        window.macConfirm = function(message, onConfirm, onCancel = null) {
            const overlay = document.getElementById('mac-dialog-overlay');
            document.getElementById('mac-dialog-message').innerText = message;
            
            const btnContainer = document.getElementById('mac-dialog-buttons');
            btnContainer.innerHTML = '';
            
            const btnCancel = document.createElement('button');
            btnCancel.className = 'mac-dialog-btn';
            btnCancel.innerText = 'Hủy';
            btnCancel.onclick = function() {
                closeMacDialog();
                if(onCancel) onCancel();
            };
            
            const btnOk = document.createElement('button');
            btnOk.className = 'mac-dialog-btn bold';
            btnOk.innerText = 'OK';
            btnOk.onclick = function() {
                closeMacDialog();
                if(onConfirm) onConfirm();
            };
            
            btnContainer.appendChild(btnCancel);
            btnContainer.appendChild(btnOk);
            
            overlay.style.display = 'flex';
            requestAnimationFrame(() => overlay.classList.add('show'));
        };

        window.macAlert = function(message) {
            const overlay = document.getElementById('mac-dialog-overlay');
            document.getElementById('mac-dialog-message').innerText = message;
            
            const btnContainer = document.getElementById('mac-dialog-buttons');
            btnContainer.innerHTML = '';
            
            const btnOk = document.createElement('button');
            btnOk.className = 'mac-dialog-btn bold';
            btnOk.innerText = 'OK';
            btnOk.onclick = closeMacDialog;
            
            btnContainer.appendChild(btnOk);
            
            overlay.style.display = 'flex';
            requestAnimationFrame(() => overlay.classList.add('show'));
        };

        function closeMacDialog() {
            const overlay = document.getElementById('mac-dialog-overlay');
            overlay.classList.remove('show');
            setTimeout(() => overlay.style.display = 'none', 200);
        }

        // --- WALLPAPER INIT ---
        (function() {
            const DEFAULT_WALLPAPER = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop';
            const savedWp = localStorage.getItem('admin_wallpaper');
            const wp = savedWp || DEFAULT_WALLPAPER;
            const el = document.querySelector('.desktop-bg');
            if (el) el.style.backgroundImage = `url('${wp}')`;
            if (!savedWp) localStorage.setItem('admin_wallpaper', DEFAULT_WALLPAPER);
        })();
        // --- NOTIFICATION LOGIC ---
        function showNotification(title, message, iconSrc = 'icons/start.png') {
            const container = document.getElementById('toast-container');
            if(!container) return;
            
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = `
                <div class="toast-header">
                    <img src="${iconSrc}">
                    <span>${title}</span>
                </div>
                <div class="toast-body">${message}</div>
            `;
            container.appendChild(toast);
            
            // Trigger animation
            setTimeout(() => toast.classList.add('show'), 10);
            
            // Remove after 3.5 seconds
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 3500);
        }

        // --- CONTEXT MENU LOGIC ---
        const contextMenu = document.getElementById('context-menu');
        
        function showContextMenu(e) {
            e.preventDefault();
            // Show only if logged in
            <?php if (!$is_logged_in)
    echo 'return false;'; ?>
            
            // Get mouse position
            let x = e.clientX;
            let y = e.clientY;
            
            contextMenu.style.display = 'flex';
            
            // Ensure menu stays within window bounds
            const menuWidth = contextMenu.offsetWidth;
            const menuHeight = contextMenu.offsetHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            
            if(x + menuWidth > windowWidth) { x = windowWidth - menuWidth - 5; }
            if(y + menuHeight > windowHeight) { y = windowHeight - menuHeight - 5; }
            
            contextMenu.style.left = `${x}px`;
            contextMenu.style.top = `${y}px`;
            
            return false;
        }

        function refreshActiveIframe() {
            // Find windows with highest zIndex implicitly or just refresh all open
            document.querySelectorAll('.window').forEach(win => {
                if(win.style.display !== 'none' && !win.classList.contains('minimized')) {
                    const ifr = win.querySelector('iframe');
                    if(ifr) ifr.src = ifr.src;
                }
            });
        }

        // --- LOGIN LOGIC ---
        const isLoggedIn = <?php echo $is_logged_in ? 'true' : 'false'; ?>;
        const loginScreen = document.getElementById('login-screen');
        
        if (loginScreen) {
            loginScreen.addEventListener('click', (e) => {
                if(e.target.id === 'login-screen' || e.target.closest('.login-clock')) {
                    document.getElementById('login-clock-container').style.display = 'none';
                    document.getElementById('login-box-container').style.display = 'flex';
                    document.getElementById('login-password').focus();
                }
            });
        }

        function attemptLogin() {
            const pass = document.getElementById('login-password').value;
            const err = document.getElementById('login-error-msg');
            if(!pass) return;

            const formData = new FormData();
            formData.append('username', '<?php echo htmlspecialchars($admin_username); ?>');
            formData.append('password', pass);

            fetch('login_process.php', { method: 'POST', body: formData })
                .then(res => res.json())
                .then(data => {
                    if(data.success) {
                        loginScreen.style.opacity = '0';
                        setTimeout(() => {
                            location.reload();
                        }, 500);
                    } else {
                        err.innerText = data.message;
                        err.style.display = 'block';
                    }
                })
                .catch(e => {
                    err.innerText = "Lỗi hệ thống!";
                    err.style.display = 'block';
                });
        }

        function attemptLogout() {
            fetch('logout_process.php?action=logout')
                .then(res=>res.json())
                .then(data => location.reload());
        }

        // --- DESKTOP LOGIC ---
        let highestZ = 100;

        // Handle Wallpaper from LocalStorage (default nếu chưa có)
        function checkWallpaper() {
            var defaultWp = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop';
            var wp = localStorage.getItem('admin_wallpaper') || defaultWp;
            document.body.style.backgroundImage = 'url(' + wp + ')';
            if (!localStorage.getItem('admin_wallpaper')) localStorage.setItem('admin_wallpaper', defaultWp);
        }
        checkWallpaper();
        
        // Let iframe call this to change global wallpaper
        window.changeWallpaper = function(url) {
            document.body.style.backgroundImage = 'url(' + url + ')';
            localStorage.setItem('admin_wallpaper', url);
        };

        function updateClock() {
            const now = new Date();
            const timeStr = now.toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'});
            const dateStr = now.toLocaleDateString();
            
            // Taskbar
            document.getElementById('time').innerText = timeStr;
            document.getElementById('date').innerText = dateStr;
            
            // Lock screen
            if(!isLoggedIn){
                document.getElementById('lock-time').innerText = timeStr;
                document.getElementById('lock-date').innerText = now.toLocaleDateString('en-US', {weekday:'long', month:'long', day:'numeric'});
            }
        }
        setInterval(updateClock, 1000);
        updateClock();

        function toggleStart() {
            const menu = document.getElementById('start-menu');
            const pm = document.getElementById('power-menu');
            pm.style.display = 'none';
            menu.classList.toggle('open');
        }
        function togglePower(e) {
            e.stopPropagation();
            const pm = document.getElementById('power-menu');
            pm.style.display = pm.style.display === 'flex' ? 'none' : 'flex';
            pm.style.flexDirection = 'column';
        }

        document.addEventListener('click', (e) => {
            const startMenu = document.getElementById('start-menu');
            const startBtn = document.getElementById('start-btn');
            const powerMenu = document.getElementById('power-menu');
            const powerBtn = document.getElementById('power-btn');
            
            if(!startMenu.contains(e.target) && !startBtn.contains(e.target) && !powerMenu.contains(e.target)) {
                startMenu.classList.remove('open');
            }
            if(!powerMenu.contains(e.target) && !powerBtn.contains(e.target)) {
                powerMenu.style.display = 'none';
            }
            
            // Hide context menu if clicked outside
            if(contextMenu && e.button !== 2) { // 2 ensures it's not a right click
                contextMenu.style.display = 'none';
            }
        });

        function focusWindow(id) {
            const win = document.getElementById(`win-${id}`);
            if(!win) return;
            highestZ++;
            win.style.zIndex = highestZ;
            
            document.querySelectorAll('.taskbar-icon').forEach(icon => icon.classList.remove('active'));
            const taskIcon = document.getElementById(`task-${id}`);
            if(taskIcon) {
                taskIcon.classList.add('active');
                taskIcon.classList.add('open');
            }
        }

        function openWindow(id) {
            const win = document.getElementById(`win-${id}`);
            if(!win) return;
            win.style.display = 'flex';
            setTimeout(() => { win.classList.remove('minimized'); }, 10);
            
            const taskIcon = document.getElementById(`task-${id}`);
            if(taskIcon) taskIcon.style.display = 'flex';
            
            focusWindow(id);
            document.getElementById('start-menu').classList.remove('open');
        }

        function toggleWindow(id) {
            const win = document.getElementById(`win-${id}`);
            if(win.classList.contains('minimized')) openWindow(id);
            else {
                if(win.style.zIndex == highestZ) minWindow(id);
                else focusWindow(id);
            }
        }

        function minWindow(id) {
            const win = document.getElementById(`win-${id}`);
            if(win) win.classList.add('minimized');
            const taskIcon = document.getElementById(`task-${id}`);
            if(taskIcon) taskIcon.classList.remove('active');
        }

        function maxWindow(id) {
            const win = document.getElementById(`win-${id}`);
            if(win) win.classList.toggle('maximized');
        }

        function closeWindow(id) {
            const win = document.getElementById(`win-${id}`);
            if(win) {
                win.style.display = 'none';
                win.classList.remove('maximized', 'minimized');
                const taskIcon = document.getElementById(`task-${id}`);
                if(taskIcon) {
                    taskIcon.style.display = 'none';
                    taskIcon.classList.remove('active', 'open');
                }
            }
        }

        // Draggable Logic - Smooth with Transform
        document.querySelectorAll('.window').forEach(win => {
            const header = win.querySelector('.window-header');
            win.addEventListener('mousedown', () => focusWindow(win.id.replace('win-', '')));
            
            let isDragging = false, currentX, currentY, initialX, initialY, xOffset = 0, yOffset = 0;
            
            header.addEventListener('mousedown', e => {
                if(e.target.closest('.win-btn') || win.classList.contains('maximized')) return;
                const rect = win.getBoundingClientRect();
                xOffset = rect.left;
                yOffset = rect.top;
                
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
                isDragging = true;
                
                win.style.transition = 'none'; // remove transition during drag
                
                document.addEventListener('mouseup', dragEnd);
                document.addEventListener('mousemove', drag);
                
                if(!win.querySelector('.drag-overlay')){
                    const overlay = document.createElement('div');
                    overlay.className = 'drag-overlay';
                    overlay.style.cssText = 'position:absolute;top:0;left:0;right:0;bottom:0;z-index:100;';
                    win.appendChild(overlay);
                }
            });

            function dragEnd() {
                isDragging = false;
                win.style.transition = 'width 0.2s, height 0.2s, opacity 0.15s'; 
                document.removeEventListener('mouseup', dragEnd);
                document.removeEventListener('mousemove', drag);
                const overlay = win.querySelector('.drag-overlay');
                if(overlay) overlay.remove();
            }

            function drag(e) {
                if (isDragging) {
                    e.preventDefault();
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                    win.style.left = currentX + "px";
                    win.style.top = currentY + "px";
                }
            }
        });
    </script>
</body>
</html>


