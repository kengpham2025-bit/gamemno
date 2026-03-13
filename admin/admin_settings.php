<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    die("Bạn cần đăng nhập để xem nội dung này.");
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Đổi Mật Khẩu Admin</title>
    <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .setting-section {
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            max-width: 420px;
        }
        .setting-section h3 {
            margin-top: 0;
            margin-bottom: 6px;
            font-size: 16px;
        }
        .setting-section p.desc {
            font-size: 13px;
            color: #555;
            margin-bottom: 20px;
        }
        .form-group {
            margin-bottom: 16px;
        }
        .form-group label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 6px;
            color: #333;
        }
        .form-group input {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid var(--glass-border);
            border-radius: 6px;
            background: rgba(255,255,255,0.6);
            font-family: inherit;
            font-size: 14px;
            box-sizing: border-box;
            transition: border-color 0.15s;
        }
        .form-group input:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.15);
        }
        .btn-save {
            background: var(--accent-color);
            color: white;
            border: none;
            padding: 10px 28px;
            border-radius: 6px;
            cursor: pointer;
            font-family: inherit;
            font-size: 14px;
            font-weight: 600;
            transition: background 0.15s, transform 0.1s;
        }
        .btn-save:hover {
            filter: brightness(1.1);
        }
        .btn-save:active {
            transform: scale(0.97);
        }
        .btn-save:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        .msg {
            padding: 10px 14px;
            border-radius: 6px;
            font-size: 13px;
            margin-bottom: 16px;
            display: none;
        }
        .msg.success {
            background: #dff6dd;
            color: #0f7b0f;
            border: 1px solid #c3e6cb;
            display: block;
        }
        .msg.error {
            background: #fde7e9;
            color: #c42b1c;
            border: 1px solid #f5c6cb;
            display: block;
        }
        .lock-icon {
            width: 40px;
            height: 40px;
            background: var(--accent-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 12px;
        }
        .lock-icon svg {
            width: 20px;
            height: 20px;
            stroke: white;
            fill: none;
            stroke-width: 2;
        }
    </style>
</head>
<body class="iframe-body">

    <h2>Cài Đặt</h2>

    <div class="setting-section">
        <div class="lock-icon">
            <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </div>
        <h3>Đổi Mật Khẩu Admin</h3>
        <p class="desc">Thay đổi mật khẩu đăng nhập vào hệ thống quản trị. Sau khi đổi, bạn sẽ cần sử dụng mật khẩu mới để đăng nhập.</p>

        <div class="msg" id="msg-box"></div>

        <form id="change-pass-form" onsubmit="return handleChangePass(event)">
            <div class="form-group">
                <label for="current_password">Mật khẩu hiện tại</label>
                <input type="password" id="current_password" name="current_password" placeholder="Nhập mật khẩu hiện tại..." required>
            </div>
            <div class="form-group">
                <label for="new_password">Mật khẩu mới</label>
                <input type="password" id="new_password" name="new_password" placeholder="Nhập mật khẩu mới..." required>
            </div>
            <div class="form-group">
                <label for="confirm_password">Xác nhận mật khẩu mới</label>
                <input type="password" id="confirm_password" name="confirm_password" placeholder="Nhập lại mật khẩu mới..." required>
            </div>
            <button type="submit" class="btn-save" id="btn-submit">Lưu Mật Khẩu</button>
        </form>
    </div>

    <script>
        function handleChangePass(e) {
            e.preventDefault();
            const msgBox = document.getElementById('msg-box');
            const btn = document.getElementById('btn-submit');

            const currentPass = document.getElementById('current_password').value;
            const newPass = document.getElementById('new_password').value;
            const confirmPass = document.getElementById('confirm_password').value;

            // Client-side validation
            if (newPass !== confirmPass) {
                msgBox.className = 'msg error';
                msgBox.textContent = 'Mật khẩu mới không khớp.';
                return false;
            }
            if (newPass.length < 4) {
                msgBox.className = 'msg error';
                msgBox.textContent = 'Mật khẩu mới phải có ít nhất 4 ký tự.';
                return false;
            }

            btn.disabled = true;
            btn.textContent = 'Đang xử lý...';
            msgBox.className = 'msg';
            msgBox.style.display = 'none';

            const formData = new FormData();
            formData.append('current_password', currentPass);
            formData.append('new_password', newPass);
            formData.append('confirm_password', confirmPass);

            fetch('change_password.php', { method: 'POST', body: formData })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        msgBox.className = 'msg success';
                        msgBox.textContent = data.message;
                        document.getElementById('change-pass-form').reset();

                        // Notify parent (Windows 11 toast)
                        if (window.parent && window.parent.showNotification) {
                            window.parent.showNotification('Cài Đặt', 'Đổi mật khẩu Admin thành công!', 'icons/settings.png');
                        }
                    } else {
                        msgBox.className = 'msg error';
                        msgBox.textContent = data.message;
                    }
                })
                .catch(() => {
                    msgBox.className = 'msg error';
                    msgBox.textContent = 'Lỗi hệ thống, vui lòng thử lại.';
                })
                .finally(() => {
                    btn.disabled = false;
                    btn.textContent = 'Lưu Mật Khẩu';
                });

            return false;
        }
    </script>
</body>
</html>
