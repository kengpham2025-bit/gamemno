<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    die("Bạn cần đăng nhập để xem nội dung này.");
}

require_once '../DB.php';

// Handle Actions (Add, Delete, Toggle)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action']) && $_POST['action'] === 'add') {
        $currency = $mysqli->real_escape_string($_POST['currency']);
        $network = $mysqli->real_escape_string($_POST['network']);
        $wallet = $mysqli->real_escape_string($_POST['wallet']);
        $rate = (float)$_POST['rate'];
        $fee = (float)$_POST['fee'];
        
        if (!empty($currency) && !empty($network) && !empty($wallet)) {
            $mysqli->query("INSERT INTO admin_crypto (currency, network, wallet_address, exchange_rate, fee, is_active) VALUES ('$currency', '$network', '$wallet', $rate, $fee, 1)");
            $success_msg = "Thêm ví Crypto thành công!";
        } else {
            $error_msg = "Vui lòng nhập đầy đủ thông tin!";
        }
    } elseif (isset($_POST['action']) && $_POST['action'] === 'delete') {
        $id = (int)$_POST['id'];
        $mysqli->query("DELETE FROM admin_crypto WHERE id = $id");
        $success_msg = "Đã xóa ví Crypto!";
    } elseif (isset($_POST['action']) && $_POST['action'] === 'toggle') {
        $id = (int)$_POST['id'];
        $current = (int)$_POST['current'];
        $new_status = $current ? 0 : 1;
        $mysqli->query("UPDATE admin_crypto SET is_active = $new_status WHERE id = $id");
        $success_msg = "Đã cập nhật trạng thái ví!";
    }
}

// Fetch Live Data
$cryptos = [];
$res = $mysqli->query("SELECT * FROM admin_crypto ORDER BY id DESC LIMIT 50");
if ($res) {
    while($row = $res->fetch_assoc()) {
        $cryptos[] = $row;
    }
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Quản lý Crypto</title>
    <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .badge {
            padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;
        }
        .b-success { background: rgba(0, 150, 0, 0.1); color: #008000; }
        .b-danger { background: rgba(255, 0, 0, 0.1); color: #CC0000; }
        .b-warning { background: rgba(255, 165, 0, 0.1); color: #FF8C00; }
        .stats { display: flex; gap: 20px; margin-bottom: 24px; }
        .stat-box { flex: 1; padding: 20px; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 8px; border-left: 4px solid #F7931A; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .btn-sm { padding: 4px 8px; cursor: pointer; border: none; border-radius: 4px; font-size: 12px; font-weight: 500;}
        .btn-toggle { background: #ffc107; color: #000; }
        .btn-delete { background: #dc3545; color: #fff; }
    </style>
</head>
<body class="iframe-body">

    <h2>Quản lý Cấu hình Ví Crypto</h2>
    
    <?php if(isset($success_msg)): ?>
        <div style="background: #d4edda; color: #155724; padding: 10px 15px; border-radius: 8px; margin-bottom: 20px; font-weight: 600;">
            ✅ <?php echo $success_msg; ?>
        </div>
    <?php endif; ?>
    <?php if(isset($error_msg)): ?>
        <div style="background: #f8d7da; color: #721c24; padding: 10px 15px; border-radius: 8px; margin-bottom: 20px; font-weight: 600;">
            ❌ <?php echo $error_msg; ?>
        </div>
    <?php endif; ?>

    <div class="stats">
        <div class="stat-box">
            <div style="font-size: 12px; color: #666; text-transform:uppercase; font-weight:600;">Tổng số Ví Đang Bật</div>
            <div style="font-size: 28px; font-weight: bold; margin-top: 8px;">
                <?php 
                    $active_count = 0;
                    foreach($cryptos as $c) if($c['is_active'] == 1) $active_count++;
                    echo $active_count;
                ?>
            </div>
        </div>
        <div class="stat-box" style="border-left-color: #0078D4;">
            <div style="font-size: 12px; color: #666; text-transform:uppercase; font-weight:600;">Tổng cấu hình hệ thống</div>
            <div style="font-size: 28px; font-weight: bold; margin-top: 8px;"><?php echo count($cryptos); ?></div>
        </div>
    </div>

    <!-- Form Data -->
    <div class="setting-section">
        <form method="POST">
            <input type="hidden" name="action" value="add">
            <h3 style="color: #F7931A; margin-bottom: 20px;">Thêm Ví Crypto Mới</h3>
            
            <div style="display: flex; gap: 15px; margin-bottom: 15px;">
                <div class="form-group" style="flex: 1;">
                    <label>Tiền tệ</label>
                    <select name="currency" required>
                        <option value="USDT">USDT</option>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                    </select>
                </div>
                <div class="form-group" style="flex: 1;">
                    <label>Mạng lưới</label>
                    <input type="text" name="network" placeholder="Ví dụ: BEP20, TRC20" required>
                </div>
                <div class="form-group" style="flex: 1;">
                    <label>Tỷ giá (Rate VNĐ)</label>
                    <input type="number" name="rate" placeholder="25000" step="1" required>
                </div>
                <div class="form-group" style="flex: 1;">
                    <label>Phí (%)</label>
                    <input type="number" name="fee" placeholder="0" step="0.1" value="0" required>
                </div>
            </div>
            
            <div class="form-group">
                <label>Địa chỉ Ví (Wallet Address)</label>
                <input type="text" name="wallet" placeholder="Nhập địa chỉ ví Crypto..." required>
            </div>
            
            <button type="submit" class="btn-primary" style="background:#F7931A;">Thêm Ví Crypto</button>
        </form>
    </div>

    <div class="setting-section">
        <h3 style="margin-bottom: 15px;">Danh Sách Cấu Hình Crypto</h3>
        <table class="win-table">
            <thead>
                <tr>
                    <th>Tiền tệ</th>
                    <th>Mạng lưới</th>
                    <th>Địa chỉ Ví (Wallet)</th>
                    <th>Tỷ giá (Rate)</th>
                    <th>Phí (%)</th>
                    <th>Trạng Thái</th>
                    <th>Thao Tác</th>
                </tr>
            </thead>
            <tbody>
                <?php if(empty($cryptos)): ?>
                <tr>
                    <td colspan="7" style="text-align:center; padding: 20px;">Chưa có Ví Crypto nào được thêm vào hệ thống.</td>
                </tr>
                <?php else: ?>
                    <?php foreach($cryptos as $c): ?>
                    <tr>
                        <td><span class="badge b-warning" style="font-size:12px;"><?php echo htmlspecialchars($c['currency']); ?></span></td>
                        <td style="font-weight:600;"><?php echo htmlspecialchars($c['network']); ?></td>
                        <td><code style="background: rgba(0,0,0,0.05); padding: 4px; border-radius:4px; font-size:12px;"><?php echo htmlspecialchars($c['wallet_address']); ?></code></td>
                        <td><?php echo number_format($c['exchange_rate'] ?? 25000); ?></td>
                        <td><?php echo $c['fee'] ?? 0; ?>%</td>
                        <td>
                            <?php if($c['is_active'] == 1): ?>
                                <span class="badge b-success">Hoạt động</span>
                            <?php else: ?>
                                <span class="badge b-danger">Bảo trì</span>
                            <?php endif; ?>
                        </td>
                        <td>
                            <form method="POST" style="display:inline;" onsubmit="event.preventDefault(); let f = this; window.parent.macConfirm('Đổi trạng thái ví này?', function(){ f.submit(); });">
                                <input type="hidden" name="action" value="toggle">
                                <input type="hidden" name="id" value="<?php echo $c['id']; ?>">
                                <input type="hidden" name="current" value="<?php echo $c['is_active']; ?>">
                                <button type="submit" class="btn-sm btn-toggle">Bật/Tắt</button>
                            </form>
                            
                            <form method="POST" style="display:inline;" onsubmit="event.preventDefault(); let f = this; window.parent.macConfirm('Chắc chắn xóa ví này?', function(){ f.submit(); });">
                                <input type="hidden" name="action" value="delete">
                                <input type="hidden" name="id" value="<?php echo $c['id']; ?>">
                                <button type="submit" class="btn-sm btn-delete">Xóa</button>
                            </form>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    </div>

</body>
</html>
