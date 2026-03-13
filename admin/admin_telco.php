<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    die("Bạn cần đăng nhập để xem nội dung này.");
}

require_once '../DB.php';

// Check if tables exist, if not create them
$mysqli->query("CREATE TABLE IF NOT EXISTS `admin_thecao` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `partner_id` varchar(255) NOT NULL,
    `partner_key` varchar(255) NOT NULL,
    `url` varchar(512) NOT NULL DEFAULT 'https://doithe1s.vn/chargingws/v2',
    `is_active` tinyint(1) NOT NULL DEFAULT 1,
    `created_at` datetime NOT NULL DEFAULT current_timestamp(),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

$mysqli->query("CREATE TABLE IF NOT EXISTS `admin_telco` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(64) NOT NULL,
    `telco_id` int(11) NOT NULL,
    `url` varchar(255) NOT NULL,
    `active` tinyint(1) NOT NULL DEFAULT 1,
    `exchange_rates` text,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    
    // Partner Config
    if ($action === 'save_partner') {
        $partner_id = trim($_POST['partner_id']);
        $partner_key = trim($_POST['partner_key']);
        $url = trim($_POST['url']);
        
        $check = $mysqli->query("SELECT id FROM admin_thecao LIMIT 1");
        if ($check->num_rows > 0) {
            $stmt = $mysqli->prepare("UPDATE admin_thecao SET partner_id=?, partner_key=?, url=? LIMIT 1");
            $stmt->bind_param("sss", $partner_id, $partner_key, $url);
        } else {
            $stmt = $mysqli->prepare("INSERT INTO admin_thecao (partner_id, partner_key, url, is_active) VALUES (?, ?, ?, 1)");
            $stmt->bind_param("sss", $partner_id, $partner_key, $url);
        }
        $stmt->execute();
        header("Location: admin_telco.php?msg=partner_saved");
        exit;
    }
    
    // Telco Toggle Fast
    if ($action === 'toggle_telco') {
        $id = (int)$_POST['id'];
        $current = (int)$_POST['current'];
        $new_status = $current === 1 ? 0 : 1;
        $stmt = $mysqli->prepare("UPDATE admin_telco SET active = ? WHERE id = ?");
        $stmt->bind_param("ii", $new_status, $id);
        $stmt->execute();
        header("Location: admin_telco.php?msg=telco_toggled");
        exit;
    }
    
    // Default Sync (Insert Vina/Mobi/Viettel if empty)
    if ($action === 'sync_default') {
        $check = $mysqli->query("SELECT COUNT(*) as cnt FROM admin_telco");
        $row = $check->fetch_assoc();
        if ($row['cnt'] == 0) {
            $rates = json_encode([
                ['gold' => 8000, 'amount' => 10000, 'promotionPercent' => 0, 'brand' => '789.club'],
                ['gold' => 16000, 'amount' => 20000, 'promotionPercent' => 0, 'brand' => '789.club'],
                ['gold' => 40000, 'amount' => 50000, 'promotionPercent' => 0, 'brand' => '789.club'],
                ['gold' => 80000, 'amount' => 100000, 'promotionPercent' => 0, 'brand' => '789.club'],
                ['gold' => 400000, 'amount' => 500000, 'promotionPercent' => 0, 'brand' => '789.club'],
                ['gold' => 800000, 'amount' => 1000000, 'promotionPercent' => 0, 'brand' => '789.club'],
            ]);
            
            $mysqli->query("INSERT INTO admin_telco (name, telco_id, url, active, exchange_rates) VALUES 
                ('Viettel', 1, '/images/bank/VIETTEL.png', 1, '$rates'),
                ('VinaPhone', 2, '/images/bank/VINAPHONE.png', 1, '$rates'),
                ('MobiFone', 3, '/images/bank/MOBIFONE.png', 1, '$rates')
            ");
            header("Location: admin_telco.php?msg=synced");
            exit;
        }
    }
}

// Fetch Data
$partner = ['partner_id' => '', 'partner_key' => '', 'url' => 'https://doithe1s.vn/chargingws/v2'];
$pRes = $mysqli->query("SELECT * FROM admin_thecao LIMIT 1");
if ($pRes && $pRes->num_rows > 0) {
    $partner = $pRes->fetch_assoc();
}

$telcos = [];
$tRes = $mysqli->query("SELECT * FROM admin_telco ORDER BY telco_id ASC");
if ($tRes) {
    while($row = $tRes->fetch_assoc()) {
        $telcos[] = $row;
    }
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Cấu Hình Thẻ Cào</title>
    <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        /* Utilizing global style.css components */
    </style>
</head>
<body class="iframe-body">

    <h2>Cấu Hình Thẻ Cào & Gạch Thẻ</h2>
    
    <?php if(isset($_GET['msg'])): ?>
        <div style="background: #dff6dd; color: #0f7b0f; padding: 10px; border-radius: 4px; margin-bottom: 15px; font-size: 13px;">
            Đã lưu dữ liệu thành công!
        </div>
    <?php endif; ?>

    <div class="setting-section" style="max-width: 600px;">
        <h3 style="margin-top:0">Kết nối Đối tác (doithe1s.vn)</h3>
        <p style="font-size:12px; color:#666;">Nhập Partner ID và Partner Key để hệ thống tự động gạch thẻ bằng API.</p>
        <form method="POST">
            <input type="hidden" name="action" value="save_partner">
            <div class="form-group">
                <label>Partner ID</label>
                <input type="text" name="partner_id" value="<?php echo htmlspecialchars($partner['partner_id']); ?>" required>
            </div>
            <div class="form-group">
                <label>Partner Key</label>
                <input type="text" name="partner_key" value="<?php echo htmlspecialchars($partner['partner_key']); ?>" required>
            </div>
            <div class="form-group">
                <label>API Endpoint URL</label>
                <input type="text" name="url" value="<?php echo htmlspecialchars($partner['url']); ?>" required>
            </div>
            <button type="submit" class="btn-primary">Lưu Kết Nối API</button>
        </form>
    </div>

    <div class="setting-section">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3 style="margin-top:0; margin-bottom:0;">Danh Sách Nhà Mạng Hiện Trong Game</h3>
            <form method="POST">
                <input type="hidden" name="action" value="sync_default">
                <?php if(empty($telcos)): ?>
                    <button type="submit" class="btn-primary" style="background: #107c10;">Thêm Dữ Liệu Mẫu (Vina/Mobi/Viettel)</button>
                <?php endif; ?>
            </form>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th>Tên Thẻ</th>
                    <th>Telco ID</th>
                    <th>Icon (Game URL)</th>
                    <th>Trạng Thái</th>
                    <th>Thao Tác</th>
                </tr>
            </thead>
            <tbody>
                <?php if(empty($telcos)): ?>
                <tr>
                    <td colspan="5" style="text-align:center; padding: 20px;">Không có dữ liệu trong bảng admin_telco. Hãy thêm dữ liệu mẫu bằng nút bên trên.</td>
                </tr>
                <?php else: ?>
                    <?php foreach($telcos as $t): ?>
                    <tr>
                        <td style="font-weight:600; color: var(--accent-color);"><?php echo htmlspecialchars($t['name']); ?></td>
                        <td><?php echo htmlspecialchars($t['telco_id']); ?></td>
                        <td><span style="font-size:11px; color:#666;"><?php echo htmlspecialchars($t['url']); ?></span></td>
                        <td>
                            <?php if($t['active'] == 1): ?>
                                <span class="badge b-success">Đang hoạt động</span>
                            <?php else: ?>
                                <span class="badge b-danger">Đã tắt</span>
                            <?php endif; ?>
                        </td>
                        <td>
                            <form method="POST" style="display:inline;" onsubmit="event.preventDefault(); let f = this; window.parent.macConfirm('Đổi trạng thái hiển thị trong game?', function(){ f.submit(); });">
                                <input type="hidden" name="action" value="toggle_telco">
                                <input type="hidden" name="id" value="<?php echo $t['id']; ?>">
                                <input type="hidden" name="current" value="<?php echo $t['active']; ?>">
                                <button type="submit" class="btn-sm btn-toggle">Bật/Tắt thẻ này</button>
                            </form>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
        <p style="font-size:12px; color:#555; margin-top:10px;">Lưu ý: Bạn có thể bật, tắt thẻ cào ở đây thì ngay lập tức ở Paygate (game) thẻ nạp cũng sẽ bị khóa / mở theo.</p>
    </div>

</body>
</html>

