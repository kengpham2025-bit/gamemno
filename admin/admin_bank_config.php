<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    die("Bạn cần đăng nhập để xem nội dung này.");
}

require_once '../DB.php';

// Handle POST actions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    
    if ($action === 'add') {
        $bank_name = trim($_POST['bank_name']);
        $account_number = trim($_POST['account_number']);
        $account_name = trim($_POST['account_name']);
        
        $stmt = $mysqli->prepare("INSERT INTO admin_bank (bank_name, account_number, account_name, is_active) VALUES (?, ?, ?, 1)");
        $stmt->bind_param("sss", $bank_name, $account_number, $account_name);
        $stmt->execute();
        header("Location: admin_bank_config.php?msg=added");
        exit;
    }
    
    if ($action === 'delete') {
        $id = (int)$_POST['id'];
        $stmt = $mysqli->prepare("DELETE FROM admin_bank WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        header("Location: admin_bank_config.php?msg=deleted");
        exit;
    }
    
    if ($action === 'toggle') {
        $id = (int)$_POST['id'];
        $current = (int)$_POST['current'];
        $new_status = $current === 1 ? 0 : 1;
        $stmt = $mysqli->prepare("UPDATE admin_bank SET is_active = ? WHERE id = ?");
        $stmt->bind_param("ii", $new_status, $id);
        $stmt->execute();
        header("Location: admin_bank_config.php?msg=toggled");
        exit;
    }
}

// Fetch all banks
$banks = [];
$res = $mysqli->query("SELECT * FROM admin_bank ORDER BY id DESC");
if ($res) {
    while($row = $res->fetch_assoc()) {
        $banks[] = $row;
    }
}

// List of available bank icons from static_resources
$bank_files = glob("static_resources/lb_icon_bank_*.png");
$bank_options = [];
foreach ($bank_files as $file) {
    $filename = basename($file);
    // extract 'acb' from 'lb_icon_bank_acb.png'
    $code = str_replace(['lb_icon_bank_', '.png'], '', $filename);
    $bank_options[] = [
        'code' => $code,
        'image' => $file,
        'name' => strtoupper($code)
    ];
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Cấu Hình Bank</title>
    <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .bank-select-container { display: flex; align-items: center; gap: 10px; }
        .bank-preview { width: 64px; height: auto; border-radius: 4px; object-fit: contain; }
    </style>
</head>
<body class="iframe-body">

    <h2>Cấu Hình Ngân Hàng</h2>
    
    <?php if(isset($_GET['msg'])): ?>
        <div style="background: #dff6dd; color: #0f7b0f; padding: 10px; border-radius: 4px; margin-bottom: 15px; font-size: 13px;">
            Đã cập nhật dữ liệu thành công!
        </div>
    <?php endif; ?>

    <div class="setting-section" style="max-width: 500px">
        <h3 style="margin-top:0">Thêm Tài Khoản Mới</h3>
        <form method="POST">
            <input type="hidden" name="action" value="add">
            
            <div class="form-group">
                <label>Ngân hàng</label>
                <div class="bank-select-container">
                    <select name="bank_name" id="bank_select" required onchange="updateBankPreview()">
                        <option value="">-- Chọn Ngân Hàng --</option>
                        <?php foreach($bank_options as $b): ?>
                            <option value="<?php echo htmlspecialchars($b['name']); ?>" data-image="<?php echo htmlspecialchars($b['image']); ?>">
                                <?php echo htmlspecialchars($b['name']); ?>
                            </option>
                        <?php endforeach; ?>
                    </select>
                    <img id="bank_preview" src="" class="bank-preview" style="display:none;">
                </div>
            </div>
            
            <div class="form-group">
                <label>Số tài khoản</label>
                <input type="text" name="account_number" required>
            </div>
            
            <div class="form-group">
                <label>Tên chủ tài khoản</label>
                <input type="text" name="account_name" required>
            </div>
            
            <button type="submit" class="btn-primary">Thêm Ngân Hàng</button>
        </form>
    </div>

    <div class="setting-section">
        <h3 style="margin-top:0">Danh Sách Tài Khoản</h3>
        <table>
            <thead>
                <tr>
                    <th>Ngân Hàng</th>
                    <th>Số TK</th>
                    <th>Tên TK</th>
                    <th>Trạng Thái</th>
                    <th>Thao Tác</th>
                </tr>
            </thead>
            <tbody>
                <?php if(empty($banks)): ?>
                <tr>
                    <td colspan="5" style="text-align:center">Chưa có ngân hàng nào.</td>
                </tr>
                <?php else: ?>
                    <?php foreach($banks as $b): ?>
                    <tr>
                        <td style="font-weight:600;">
                            <?php 
                            $imgSrc = "static_resources/lb_icon_bank_" . strtolower(str_replace(' ', '', $b['bank_name'])) . ".png";
                            if(file_exists($imgSrc)){
                                echo "<img src='$imgSrc' style='height:24px; vertical-align:middle; margin-right:8px;'>";
                            }
                            ?>
                            <?php echo htmlspecialchars($b['bank_name']); ?>
                        </td>
                        <td><?php echo htmlspecialchars($b['account_number']); ?></td>
                        <td><?php echo htmlspecialchars($b['account_name']); ?></td>
                        <td>
                            <?php if($b['is_active']): ?>
                                <span class="badge b-success">Đang bật</span>
                            <?php else: ?>
                                <span class="badge b-danger">Đã tắt</span>
                            <?php endif; ?>
                        </td>
                        <td>
                            <form method="POST" style="display:inline;" onsubmit="event.preventDefault(); let f = this; window.parent.macConfirm('Đổi trạng thái?', function(){ f.submit(); });">
                                <input type="hidden" name="action" value="toggle">
                                <input type="hidden" name="id" value="<?php echo $b['id']; ?>">
                                <input type="hidden" name="current" value="<?php echo $b['is_active']; ?>">
                                <button type="submit" class="btn-sm btn-toggle">Bật/Tắt</button>
                            </form>
                            
                            <form method="POST" style="display:inline;" onsubmit="event.preventDefault(); let f = this; window.parent.macConfirm('Chắc chắn xóa?', function(){ f.submit(); });">
                                <input type="hidden" name="action" value="delete">
                                <input type="hidden" name="id" value="<?php echo $b['id']; ?>">
                                <button type="submit" class="btn-sm btn-delete">Xóa</button>
                            </form>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    </div>

    <script>
        function updateBankPreview() {
            var select = document.getElementById('bank_select');
            var selectedOption = select.options[select.selectedIndex];
            var img = document.getElementById('bank_preview');
            var imgUrl = selectedOption.getAttribute('data-image');
            
            if (imgUrl) {
                img.src = imgUrl;
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        }
    </script>
</body>
</html>

