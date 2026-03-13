<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    die("Bạn cần đăng nhập để xem nội dung này.");
}

require_once '../DB.php';

// Handle Action (Approve / Reject)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action']) && isset($_POST['id'])) {
        $id = (int)$_POST['id'];
        if ($_POST['action'] === 'approve') {
            $mysqli->query("UPDATE paygate_transactions SET status = 'success' WHERE id = $id AND status = 'pending'");
            $success_msg = "Đã duyệt giao dịch thành công! (Doanh thu đã được cộng)";
        } elseif ($_POST['action'] === 'reject') {
            $mysqli->query("UPDATE paygate_transactions SET status = 'failed' WHERE id = $id AND status = 'pending'");
            $success_msg = "Đã từ chối giao dịch!";
        }
    }
}

// Filter parameters
$start_date = $_GET['start_date'] ?? date('Y-m-d');
$end_date = $_GET['end_date'] ?? date('Y-m-d');
$method = $_GET['method'] ?? 'all';

// Build Query
$where = ["DATE(created_at) >= '$start_date'", "DATE(created_at) <= '$end_date'"];
if ($method !== 'all') {
    $where[] = "method = '" . $mysqli->real_escape_string($method) . "'";
}
// Only count successful transactions for revenue (assuming 'success' or 'completed', but let's check basic ones, maybe we consider only success status. Let's see what the system writes. For now, let's group by status)
$where_sql = implode(' AND ', $where);

// Get totals
$summary = [
    'total' => 0,
    'bank' => 0,
    'momo' => 0,
    'card' => 0
];

$res_totals = $mysqli->query("SELECT method, SUM(amount) as total_amount FROM paygate_transactions WHERE $where_sql AND status='success' GROUP BY method");
if ($res_totals) {
    while($row = $res_totals->fetch_assoc()) {
        $summary['total'] += $row['total_amount'];
        $summary[$row['method']] = $row['total_amount'];
    }
}

// Get transactions list
$transactions = [];
$res_list = $mysqli->query("SELECT * FROM paygate_transactions WHERE $where_sql ORDER BY id DESC LIMIT 200");
if ($res_list) {
    while($row = $res_list->fetch_assoc()) {
        $transactions[] = $row;
    }
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Báo Cáo Doanh Thu</title>
    <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .filter-bar { display: flex; gap: 15px; align-items: flex-end; margin-bottom: 20px; flex-wrap: wrap; }
        .filter-group { display: flex; flex-direction: column; gap: 6px; }
        .filter-group label { font-size: 13px; font-weight: 600; color: var(--text-color); opacity: 0.9; }
        .filter-group input, .filter-group select { padding: 10px 12px; border: 1px solid var(--input-border); border-radius: 8px; background: var(--input-bg); color: var(--text-color); font-family: inherit; font-size: 14px; box-shadow: inset 0 1px 2px rgba(0,0,0,0.02); transition: all 0.2s; }
        .filter-group input:focus, .filter-group select:focus { outline: none; border-color: var(--accent-color); box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.25); }
        .btn-filter { background: var(--accent-color); color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 14px; transition: filter 0.2s, transform 0.1s; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .btn-filter:hover { filter: brightness(1.05); }
        .btn-filter:active { transform: scale(0.98); }
        
        .dashboard-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px; }
        .card { background: var(--section-bg); padding: 24px; border-radius: 12px; border: 1px solid var(--section-border); box-shadow: 0 2px 8px rgba(0,0,0,0.04); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); display: flex; flex-direction: column; gap: 8px; }
        .card-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 4px; }
        .card-title { font-size: 13px; color: var(--text-color); opacity: 0.7; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .card-value { font-size: 26px; font-weight: 700; color: var(--text-color); }
        .st-success { background: #dff6dd; color: #107c10; border: 1px solid #c3e6cb; }
        .st-failed { background: #fde7e9; color: #c42b1c; border: 1px solid #f5c6cb; }
        .st-pending { background: #fff4ce; color: #9d5d00; border: 1px solid #fde7a9; }
        
        .m-bank { color: #0078D4; font-weight: bold; }
        .m-momo { color: #a50064; font-weight: bold; }
        .m-card { color: #d13438; font-weight: bold; }
    </style>
</head>
<body class="iframe-body">
    <div class="report-container">
        <h2 style="margin-bottom: 5px;">Báo Cáo Doanh Thu Giao Dịch</h2>
        <p style="color: #666; font-size: 13px; margin-bottom: 20px;">Xem biến động doanh thu theo ngày từ các kênh nạp Bank, Momo, và Thẻ Cào. Tổng doanh thu chỉ tính giao dịch <strong style="color: #28a745;">thành công</strong>.</p>
        
        <?php if(isset($success_msg)): ?>
            <div style="background: #d4edda; color: #155724; padding: 10px 15px; border-radius: 8px; margin-bottom: 20px; font-weight: 600;">
                ✅ <?php echo $success_msg; ?>
            </div>
        <?php endif; ?>

        <div class="setting-section" style="padding: 20px;">
        <form method="GET" class="filter-bar">
            <div class="filter-group">
                <label>Từ ngày</label>
                <input type="date" name="start_date" value="<?php echo htmlspecialchars($start_date); ?>">
            </div>
            <div class="filter-group">
                <label>Đến ngày</label>
                <input type="date" name="end_date" value="<?php echo htmlspecialchars($end_date); ?>">
            </div>
            <div class="filter-group">
                <label>Phương thức</label>
                <select name="method">
                    <option value="all" <?php echo $method==='all'?'selected':''; ?>>Tất cả</option>
                    <option value="bank" <?php echo $method==='bank'?'selected':''; ?>>Bank (Chuyển khoản)</option>
                    <option value="momo" <?php echo $method==='momo'?'selected':''; ?>>Ví MoMo</option>
                    <option value="card" <?php echo $method==='card'?'selected':''; ?>>Thẻ Cào</option>
                </select>
            </div>
            <button type="submit" class="btn-filter">Lọc Dữ Liệu</button>
        </form>

        <div class="dashboard-cards">
            <div class="card">
                <div class="card-icon" style="background: rgba(43, 136, 216, 0.1); color: #2b88d8;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                </div>
                <div class="card-title">Tổng Doanh Thu</div>
                <div class="card-value"><?php echo number_format($summary['total']); ?> ₫</div>
            </div>
            <div class="card">
                <div class="card-icon" style="background: rgba(0, 120, 212, 0.1); color: #0078D4;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div class="card-title">Chuyển Khoản Bank</div>
                <div class="card-value"><?php echo number_format($summary['bank']); ?> ₫</div>
            </div>
            <div class="card">
                <div class="card-icon" style="background: rgba(165, 0, 100, 0.1); color: #a50064;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <div class="card-title">Ví MoMo</div>
                <div class="card-value"><?php echo number_format($summary['momo']); ?> ₫</div>
            </div>
            <div class="card">
                <div class="card-icon" style="background: rgba(209, 52, 56, 0.1); color: #d13438;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <div class="card-title">Thẻ Cào</div>
                <div class="card-value"><?php echo number_format($summary['card']); ?> ₫</div>
            </div>
        </div>

        <h3 style="margin-top:0">Lịch Sử Giao Dịch</h3>
        <table>
            <thead>
                <tr>
                    <th>Thời Gian</th>
                    <th>Hình Thức</th>
                    <th>Số Tiền</th>
                    <th>Trạng Thái</th>
                    <th>Chi Tiết</th>
                </tr>
            </thead>
            <tbody>
                <?php if(empty($transactions)): ?>
                <tr>
                    <td colspan="5" style="text-align:center">Không có giao dịch nào trong khoảng thời gian này.</td>
                </tr>
                <?php else: ?>
                    <?php foreach($transactions as $t): ?>
                    <tr>
                        <td><span style="color:#555;"><?php echo date('d/m/Y H:i:s', strtotime($t['created_at'])); ?></span></td>
                        <td>
                            <?php 
                            if($t['method'] == 'bank') echo '<span class="m-bank">BANK</span>';
                            elseif($t['method'] == 'momo') echo '<span class="m-momo">MOMO</span>';
                            elseif($t['method'] == 'card') echo '<span class="m-card">THẺ CÀO</span>';
                            else echo htmlspecialchars(strtoupper($t['method']));
                            ?>
                        </td>
                        <td style="font-weight:bold; color:var(--accent-color);"><?php echo number_format($t['amount']); ?> ₫</td>
                        <td>
                            <?php
                            $st = strtolower($t['status']);
                            if(in_array($st, ['success', 'thành công', 'completed'])) {
                                echo '<span class="badge st-success">Thành công</span>';
                            } elseif(in_array($st, ['failed', 'thất bại', 'error'])) {
                                echo '<span class="badge st-failed">Thất bại</span>';
                            } else {
                                echo '<span class="badge st-pending">'.htmlspecialchars($t['status']).'</span>';
                            }
                            ?>
                        </td>
                        <td>
                            <?php if($t['method'] == 'card'): ?>
                                <span style="font-size:11px; color:#666;">
                                    <strong><?php echo htmlspecialchars($t['telco']); ?></strong><br>
                                    Seri: <?php echo htmlspecialchars($t['serial']); ?><br>
                                    PIN: <?php echo htmlspecialchars($t['card_code']); ?>
                                </span>
                            <?php else: ?>
                                <span style="font-size:11px; color:#666;">
                                    <?php if($t['codepay']) echo "ND: <strong>".htmlspecialchars($t['codepay'])."</strong><br>"; ?>
                                    <?php echo htmlspecialchars($t['note']); ?>
                                </span>
                            <?php endif; ?>
                            
                            <?php if(strtolower($t['status']) == 'pending'): ?>
                                <div style="margin-top: 8px;">
                                    <form method="POST" style="display:inline;" onsubmit="event.preventDefault(); let f = this; window.parent.macConfirm('Bạn chắn chắc muốn DUYỆT giao dịch này? (Tiền sẽ được cộng vào Doanh Thu)', function(){ f.submit(); });">
                                        <input type="hidden" name="action" value="approve">
                                        <input type="hidden" name="id" value="<?php echo $t['id']; ?>">
                                        <button type="submit" style="background: #28a745; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer; font-weight: bold;">Duyệt</button>
                                    </form>
                                    <form method="POST" style="display:inline;" onsubmit="event.preventDefault(); let f = this; window.parent.macConfirm('Bạn chắn chắc muốn TỪ CHỐI giao dịch này?', function(){ f.submit(); });">
                                        <input type="hidden" name="action" value="reject">
                                        <input type="hidden" name="id" value="<?php echo $t['id']; ?>">
                                        <button type="submit" style="background: #dc3545; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer; font-weight: bold;">Từ chối</button>
                                    </form>
                                </div>
                            <?php endif; ?>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
        
        <?php if(count($transactions) == 200): ?>
            <p style="font-size: 12px; color: #888; text-align: center; margin-top: 10px;">Đang hiển thị 200 giao dịch mới nhất.</p>
        <?php endif; ?>
    </div>
</body>
</html>
