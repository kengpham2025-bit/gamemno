<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    die("Bạn cần đăng nhập để xem nội dung này.");
}

require_once '../DB.php';

// Prepare data for export if requested
if (isset($_GET['export']) && $_GET['export'] == 'txt') {
    $res = $mysqli->query("SELECT username, password FROM account ORDER BY id ASC");
    $content = "";
    if ($res) {
        while($row = $res->fetch_assoc()) {
            $content .= $row['username'] . "|" . $row['password'] . "\r\n";
        }
    }
    
    header('Content-Type: text/plain');
    header('Content-Disposition: attachment; filename="users_export_' . date('Ymd_His') . '.txt"');
    header('Content-Length: ' . strlen($content));
    echo $content;
    exit;
}

// Fetch Users with Search
$search = $_GET['search'] ?? '';
$sql = "SELECT * FROM account";
if ($search) {
    $sql .= " WHERE username LIKE '%" . $mysqli->real_escape_string($search) . "%'";
}
$sql .= " ORDER BY id DESC LIMIT 100";

$users = [];
$res = $mysqli->query($sql);
if ($res) {
    while($row = $res->fetch_assoc()) {
        $users[] = $row;
    }
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Quản Lý Người Dùng</title>
    <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .search-box { display: flex; gap: 10px; margin-bottom: 15px; }
        .search-box input { flex-grow: 1; padding: 8px 12px; border: 1px solid var(--glass-border); border-radius: 4px; }
        .btn-export { background: #107c10; } /* Excel green */
    </style>
</head>
<body class="iframe-body">

    <h2>Quản Lý Người Dùng</h2>
    
    <div class="setting-section">
        <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
            <form method="GET" class="search-box" style="margin-bottom: 0; width: 400px;">
                <input type="text" name="search" placeholder="Tìm kiếm Username..." value="<?php echo htmlspecialchars($search); ?>">
                <button type="submit" class="btn-primary">Tìm</button>
            </form>
            
            <a href="?export=txt" class="btn-primary btn-export">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle; margin-right:4px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Xuất File TXT (user|pass)
            </a>
        </div>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên Tài Khoản</th>
                    <th>Mật Khẩu (Mã hóa)</th>
                    <th>Game/Cổng</th>
                    <th>Số Dư Ví</th>
                    <th>Ngày Tạo</th>
                </tr>
            </thead>
            <tbody>
                <?php if(empty($users)): ?>
                <tr>
                    <td colspan="6" style="text-align:center">Không tìm thấy người dùng nào.</td>
                </tr>
                <?php else: ?>
                    <?php foreach($users as $u): ?>
                    <tr>
                        <td><?php echo $u['id']; ?></td>
                        <td style="font-weight:600; color: var(--accent-color);"><?php echo htmlspecialchars($u['username']); ?></td>
                        <td><span style="font-size: 11px; color:#888; background: #eee; padding: 2px 6px; border-radius: 3px;"><?php echo htmlspecialchars($u['password'] ? substr($u['password'],0,15).'...' : 'N/A'); ?></span></td>
                        <td><span class="badge" style="background:#e1dfdd; color:#333; padding: 4px 8px; border-radius:4px; font-size:11px;"><?php echo htmlspecialchars($u['game'] ?? 'N/A'); ?></span></td>
                        <td style="color:#107c10; font-weight:bold;"><?php echo htmlspecialchars($u['wallet'] ?? '0'); ?></td>
                        <td><?php echo htmlspecialchars($u['time'] ?? 'N/A'); ?></td>
                    </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
        <?php if(count($users) == 100): ?>
            <p style="font-size: 12px; color: #888; text-align: center; margin-top: 10px;">Đang hiển thị 100 kết quả mới nhất.</p>
        <?php endif; ?>
    </div>
</body>
</html>

