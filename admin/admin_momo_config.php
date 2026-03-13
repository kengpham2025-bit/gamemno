<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    die("Bạn cần đăng nhập để xem nội dung này.");
}

require_once '../DB.php';

// Check if table exists, if not create it
$mysqli->query("CREATE TABLE IF NOT EXISTS `admin_momo` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `momo_number` varchar(20) NOT NULL,
    `momo_name` varchar(255) NOT NULL,
    `is_active` tinyint(1) NOT NULL DEFAULT 1,
    `created_at` datetime NOT NULL DEFAULT current_timestamp(),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    
    if ($action === 'add') {
        $momo_number = trim($_POST['momo_number']);
        $momo_name = trim($_POST['momo_name']);
        
        $stmt = $mysqli->prepare("INSERT INTO admin_momo (momo_number, momo_name, is_active) VALUES (?, ?, 1)");
        $stmt->bind_param("ss", $momo_number, $momo_name);
        $stmt->execute();
        header("Location: admin_momo_config.php?msg=added");
        exit;
    }
    
    if ($action === 'delete') {
        $id = (int)$_POST['id'];
        $stmt = $mysqli->prepare("DELETE FROM admin_momo WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        header("Location: admin_momo_config.php?msg=deleted");
        exit;
    }
    
    if ($action === 'toggle') {
        $id = (int)$_POST['id'];
        $current = (int)$_POST['current'];
        $new_status = $current === 1 ? 0 : 1;
        $stmt = $mysqli->prepare("UPDATE admin_momo SET is_active = ? WHERE id = ?");
        $stmt->bind_param("ii", $new_status, $id);
        $stmt->execute();
        header("Location: admin_momo_config.php?msg=toggled");
        exit;
    }
}

// Fetch 
$momos = [];
$res = $mysqli->query("SELECT * FROM admin_momo ORDER BY id DESC");
if ($res) {
    while($row = $res->fetch_assoc()) {
        $momos[] = $row;
    }
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Cấu Hình MoMo</title>
    <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        /* Utilizing global style.css components */
    </style>
</head>
<body class="iframe-body">

    <h2>Cấu Hình Ví MoMo</h2>
    
    <?php if(isset($_GET['msg'])): ?>
        <div style="background: #dff6dd; color: #0f7b0f; padding: 10px; border-radius: 4px; margin-bottom: 15px; font-size: 13px;">
            Đã cập nhật dữ liệu thành công!
        </div>
    <?php endif; ?>

    <div class="setting-section" style="max-width: 500px">
        <h3 style="margin-top:0; color: #a50064;">Thêm Tài Khoản MoMo Mới</h3>
        <form method="POST">
            <input type="hidden" name="action" value="add">
            
            <div class="form-group">
                <label>Số điện thoại MoMo</label>
                <input type="text" name="momo_number" required placeholder="Ví dụ: 0987654321">
            </div>
            
            <div class="form-group">
                <label>Tên chủ tài khoản MoMo</label>
                <input type="text" name="momo_name" required placeholder="Ví dụ: NGUYEN VAN A">
            </div>
            
            <button type="submit" class="btn-primary" style="background: #a50064;">Thêm Ví MoMo</button>
        </form>
    </div>

    <div class="setting-section">
        <h3 style="margin-top:0">Danh Sách Tài Khoản MoMo</h3>
        <table>
            <thead>
                <tr>
                    <th>Số Điện Thoại</th>
                    <th>Tên Chủ Tài Khoản</th>
                    <th>Trạng Thái</th>
                    <th>Thao Tác</th>
                </tr>
            </thead>
            <tbody>
                <?php if(empty($momos)): ?>
                <tr>
                    <td colspan="4" style="text-align:center">Chưa có ví MoMo nào.</td>
                </tr>
                <?php else: ?>
                    <?php foreach($momos as $m): ?>
                    <tr>
                        <td style="font-weight:600; color: #a50064;"><?php echo htmlspecialchars($m['momo_number']); ?></td>
                        <td><?php echo htmlspecialchars($m['momo_name']); ?></td>
                        <td>
                            <?php if($m['is_active']): ?>
                                <span class="badge b-success">Đang bật</span>
                            <?php else: ?>
                                <span class="badge b-danger">Đã tắt</span>
                            <?php endif; ?>
                        </td>
                        <td>
                            <form method="POST" style="display:inline;" onsubmit="event.preventDefault(); let f = this; window.parent.macConfirm('Đổi trạng thái?', function(){ f.submit(); });">
                                <input type="hidden" name="action" value="toggle">
                                <input type="hidden" name="id" value="<?php echo $m['id']; ?>">
                                <input type="hidden" name="current" value="<?php echo $m['is_active']; ?>">
                                <button type="submit" class="btn-sm btn-toggle">Bật/Tắt</button>
                            </form>
                            
                            <form method="POST" style="display:inline;" onsubmit="event.preventDefault(); let f = this; window.parent.macConfirm('Chắc chắn xóa?', function(){ f.submit(); });">
                                <input type="hidden" name="action" value="delete">
                                <input type="hidden" name="id" value="<?php echo $m['id']; ?>">
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

