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
        $proxy_full = trim($_POST['proxy_full']);

        // Parse proxy string: 91.239.130.17:11222:ZP15462_aavbxB:EomRJB4H__country-vn_city-phurieng_session-6u2wp2m3_lifetime-5m
        // Format: IP:PORT:USERNAME:PASSWORD__metadata
        $parts = explode(':', $proxy_full);
        $ip = isset($parts[0]) ? $parts[0] : '';
        $port = isset($parts[1]) ? (int)$parts[1] : 0;

        // The rest (parts[2] and beyond) is USERNAME:PASSWORD__metadata
        $username = '';
        $password = '';
        $country = '';
        $city = '';
        $session = '';
        $lifetime = '';

        if (isset($parts[2])) {
            // Combine remaining parts in case password contains colons
            $userpass_meta = implode(':', array_slice($parts, 2));

            // Find double underscore which separates credentials from metadata
            $pos = strpos($userpass_meta, '__');
            if ($pos !== false) {
                $creds = substr($userpass_meta, 0, $pos);
                $metadata = substr($userpass_meta, $pos + 2);

                // Split credentials by FIRST colon (username:password)
                $cred_parts = explode(':', $creds);
                $username = isset($cred_parts[0]) ? $cred_parts[0] : '';
                $password = isset($cred_parts[1]) ? $cred_parts[1] : '';

                // Parse metadata: country-vn_city-phurieng_session-6u2wp2m3_lifetime-5m
                $metadata_parts = explode('_', $metadata);
                foreach ($metadata_parts as $meta) {
                    if (strpos($meta, 'country-') === 0) {
                        $country = substr($meta, 8);
                    } elseif (strpos($meta, 'city-') === 0) {
                        $city = substr($meta, 5);
                    } elseif (strpos($meta, 'session-') === 0) {
                        $session = substr($meta, 8);
                    } elseif (strpos($meta, 'lifetime-') === 0) {
                        $lifetime = substr($meta, 9);
                    }
                }
            } else {
                // No metadata, just username:password
                $cred_parts = explode(':', $userpass_meta);
                $username = isset($cred_parts[0]) ? $cred_parts[0] : '';
                $password = isset($cred_parts[1]) ? $cred_parts[1] : '';
            }
        }

        $stmt = $mysqli->prepare("INSERT INTO proxy (proxy, ip, port, username, password, country, city, session, lifetime, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)");
        $stmt->bind_param("ssissssss", $proxy_full, $ip, $port, $username, $password, $country, $city, $session, $lifetime);
        $stmt->execute();
        header("Location: admin_proxy_config.php?msg=added");
        exit;
    }

    if ($action === 'delete') {
        $id = (int)$_POST['id'];
        $stmt = $mysqli->prepare("DELETE FROM proxy WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        header("Location: admin_proxy_config.php?msg=deleted");
        exit;
    }

    if ($action === 'toggle') {
        $id = (int)$_POST['id'];
        $current = (int)$_POST['current'];
        $new_status = $current === 1 ? 0 : 1;
        $stmt = $mysqli->prepare("UPDATE proxy SET is_active = ? WHERE id = ?");
        $stmt->bind_param("ii", $new_status, $id);
        $stmt->execute();
        header("Location: admin_proxy_config.php?msg=toggled");
        exit;
    }

    if ($action === 'set_default') {
        // First, remove default from all
        $mysqli->query("UPDATE proxy SET is_active = 0");

        // Then set the selected one as default (is_active = 2 means default)
        $id = (int)$_POST['id'];
        $stmt = $mysqli->prepare("UPDATE proxy SET is_active = 2 WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        header("Location: admin_proxy_config.php?msg=default_set");
        exit;
    }
}

// Fetch all proxies - show default (2) first, then active (1), then inactive (0)
$proxies = [];
$res = $mysqli->query("SELECT * FROM proxy ORDER BY is_active DESC, id DESC");
if ($res) {
    while($row = $res->fetch_assoc()) {
        $proxies[] = $row;
    }
}

// Get current default proxy
$default_proxy = null;
foreach ($proxies as $p) {
    if ($p['is_active'] == 2) {
        $default_proxy = $p;
        break;
    }
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Cấu Hình Proxy</title>
    <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .proxy-card {
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 12px;
        }
        .proxy-card.default {
            border-color: var(--accent-color);
            box-shadow: 0 0 0 1px var(--accent-color);
        }
        .proxy-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 8px;
            margin-bottom: 12px;
        }
        .proxy-info-item {
            font-size: 13px;
        }
        .proxy-info-item label {
            color: #666;
            font-size: 11px;
            display: block;
        }
        .proxy-info-item span {
            font-weight: 600;
        }
        .proxy-full {
            font-family: monospace;
            font-size: 12px;
            background: rgba(0,0,0,0.05);
            padding: 8px;
            border-radius: 4px;
            word-break: break-all;
            margin-bottom: 12px;
        }
        .proxy-actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btn-sm {
            padding: 6px 12px;
            font-size: 12px;
            border-radius: 4px;
            cursor: pointer;
            border: none;
            font-weight: 600;
        }
        .btn-default {
            background: var(--accent-color);
            color: white;
        }
        .btn-toggle {
            background: #e0e0e0;
            color: #333;
        }
        .btn-delete {
            background: #ffebee;
            color: #c62828;
        }
        .badge-default {
            background: var(--accent-color);
            color: white;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 600;
        }
        .status-active {
            color: #2e7d32;
        }
        .status-inactive {
            color: #c62828;
        }
    </style>
</head>
<body class="iframe-body">

    <h2>Cấu Hình Proxy</h2>

    <?php if(isset($_GET['msg'])): ?>
        <div style="background: #dff6dd; color: #0f7b0f; padding: 10px; border-radius: 4px; margin-bottom: 15px; font-size: 13px;">
            <?php
            $msg = $_GET['msg'];
            if ($msg === 'added') echo 'Đã thêm proxy mới!';
            elseif ($msg === 'deleted') echo 'Đã xóa proxy!';
            elseif ($msg === 'toggled') echo 'Đã cập nhật trạng thái!';
            elseif ($msg === 'default_set') echo 'Đã đặt làm proxy mặc định!';
            ?>
        </div>
    <?php endif; ?>

    <?php if($default_proxy): ?>
    <div style="background: #e3f2fd; border: 1px solid #90caf9; border-radius: 8px; padding: 12px; margin-bottom: 20px;">
        <strong>Proxy Đang Hoạt Động:</strong>
        <div style="font-family: monospace; margin-top: 4px;"><?php echo htmlspecialchars($default_proxy['proxy']); ?></div>
    </div>
    <?php endif; ?>

    <div class="setting-section" style="max-width: 700px">
        <h3 style="margin-top:0">Thêm Proxy Mới</h3>
        <p style="font-size: 13px; color: #666; margin-bottom: 16px;">
            Nhập thông tin proxy theo định dạng: <code>IP:PORT:USERNAME:PASSWORD_country-city_session-LIFETIME</code><br>
            Ví dụ: <code>91.239.130.17:11222:ZP15462_aavbxB:EomRJB4H__country-vn_city-phurieng_session-6u2wp2m3_lifetime-5m</code>
        </p>
        <form method="POST">
            <input type="hidden" name="action" value="add">

            <div class="form-group">
                <label>Chuỗi Proxy đầy đủ</label>
                <input type="text" name="proxy_full" required placeholder="91.239.130.17:11222:username:password__country-vn_city-phurieng_session-xxx_lifetime-5m" style="font-family: monospace;">
            </div>

            <button type="submit" class="btn-primary">Thêm Proxy</button>
        </form>
    </div>

    <div class="setting-section" style="max-width: 700px">
        <h3 style="margin-top:0">Danh Sách Proxy (<?php echo count($proxies); ?>)</h3>

        <?php if(empty($proxies)): ?>
        <p style="text-align:center; color: #666; padding: 20px;">Chưa có proxy nào.</p>
        <?php else: ?>
            <?php foreach($proxies as $p): ?>
            <div class="proxy-card <?php echo ($p['is_active'] == 2) ? 'default' : ''; ?>">
                <?php if($p['is_active'] == 2): ?>
                <div style="margin-bottom: 8px;"><span class="badge-default">MẶC ĐỊNH</span></div>
                <?php endif; ?>

                <div class="proxy-full"><?php echo htmlspecialchars($p['proxy']); ?></div>

                <div class="proxy-info">
                    <div class="proxy-info-item">
                        <label>IP</label>
                        <span><?php echo htmlspecialchars($p['ip']); ?></span>
                    </div>
                    <div class="proxy-info-item">
                        <label>Port</label>
                        <span><?php echo htmlspecialchars($p['port']); ?></span>
                    </div>
                    <div class="proxy-info-item">
                        <label>Username</label>
                        <span><?php echo htmlspecialchars($p['username']); ?></span>
                    </div>
                    <div class="proxy-info-item">
                        <label>Password</label>
                        <span><?php echo htmlspecialchars($p['password']); ?></span>
                    </div>
                    <div class="proxy-info-item">
                        <label>Country</label>
                        <span><?php echo htmlspecialchars($p['country']); ?></span>
                    </div>
                    <div class="proxy-info-item">
                        <label>City</label>
                        <span><?php echo htmlspecialchars($p['city']); ?></span>
                    </div>
                    <div class="proxy-info-item">
                        <label>Session</label>
                        <span><?php echo htmlspecialchars($p['session']); ?></span>
                    </div>
                    <div class="proxy-info-item">
                        <label>Lifetime</label>
                        <span><?php echo htmlspecialchars($p['lifetime']); ?></span>
                    </div>
                </div>

                <div class="proxy-actions">
                    <?php if($p['is_active'] != 2): ?>
                    <form method="POST" style="display:inline;">
                        <input type="hidden" name="action" value="set_default">
                        <input type="hidden" name="id" value="<?php echo $p['id']; ?>">
                        <button type="submit" class="btn-sm btn-default">Đặt làm mặc định</button>
                    </form>
                    <?php endif; ?>

                    <form method="POST" style="display:inline;" onsubmit="event.preventDefault(); let f = this; window.parent.macConfirm('Xóa proxy này?', function(){ f.submit(); });">
                        <input type="hidden" name="action" value="delete">
                        <input type="hidden" name="id" value="<?php echo $p['id']; ?>">
                        <button type="submit" class="btn-sm btn-delete">Xóa</button>
                    </form>
                </div>
            </div>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>

</body>
</html>
