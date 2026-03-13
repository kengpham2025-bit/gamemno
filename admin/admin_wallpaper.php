<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    die("Bạn cần đăng nhập để xem nội dung này.");
}

// Generate > 100 wallpaper IDs from Picsum for variety
$wallpapers = [];

// Add the default Windows 11-like wallpaper
$wallpapers[] = [
    'thumb' => 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=320&auto=format&fit=crop',
    'full' => 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    'name' => 'Windows 11 Default'
];

$wallpapers[] = [
    'thumb' => 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=320&auto=format&fit=crop',
    'full' => 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=2564&auto=format&fit=crop',
    'name' => 'Windows 11 Dark'
];

$wallpapers[] = [
    'thumb' => 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=320&auto=format&fit=crop',
    'full' => 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2564&auto=format&fit=crop',
    'name' => 'Abstract Blue'
];

// Add 100+ from picsum
$start_id = 10;
for ($i = 0; $i < 105; $i++) {
    $id = $start_id + $i;
    // skip text images or weird ones known in picsum, but 10-115 are mostly landscapes/items
    $wallpapers[] = [
        'thumb' => "https://picsum.photos/id/{$id}/320/180",
        'full' => "https://picsum.photos/id/{$id}/1920/1080",
        'name' => "Hình Nền " . ($i + 1)
    ];
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Đổi Ảnh Nền</title>
    <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .setting-section { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
        .wallpaper-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin-top: 15px; }
        .wallpaper-item { border-radius: 8px; overflow: hidden; border: 2px solid transparent; cursor: pointer; transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s; background: var(--section-bg); text-align: center; }
        .wallpaper-item:hover { transform: translateY(-4px); box-shadow: 0 8px 16px rgba(0,0,0,0.1); border-color: var(--taskbar-hover); }
        .wallpaper-item.active { border-color: var(--accent-color); box-shadow: 0 0 0 2px var(--accent-color); }
        .wallpaper-item img { width: 100%; height: 112px; object-fit: cover; display: block; border-bottom: 1px solid var(--glass-border); }
        .wallpaper-item .name { padding: 8px; font-size: 13px; font-weight: 500; color: var(--text-color); }
        
        /* Message toast */
        #msg { display: none; background: #dff6dd; color: #107c10; padding: 10px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; border: 1px solid #c3e6cb; }
    </style>
</head>
<body class="iframe-body">

    <h2>Kho Hình Nền Windows (Hơn 100+ Ảnh)</h2>
    <p style="font-size: 13px; color: var(--text-color); opacity: 0.8; margin-bottom: 20px;">Chọn một hình ảnh tuyệt đẹp để làm mới không gian làm việc của bạn. Ảnh nền sẽ được lưu tự động cho thiết bị này.</p>
    
    <div id="msg">Đã áp dụng ảnh nền làm hình nền chính!</div>

    <div class="setting-section">
        <h3 style="margin-top:0">Danh Sách Hình Nền</h3>
        <div class="wallpaper-grid" id="wallpaper-grid">
            <?php foreach($wallpapers as $idx => $wp): ?>
                <div class="wallpaper-item" onclick="setWallpaper('<?php echo $wp['full']; ?>', this)">
                    <img src="<?php echo $wp['thumb']; ?>" loading="lazy" alt="<?php echo htmlspecialchars($wp['name']); ?>">
                    <div class="name"><?php echo htmlspecialchars($wp['name']); ?></div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <script>
        // Init active state based on current wallpaper
        const currentWp = window.parent.localStorage.getItem('admin_wallpaper');
        if (currentWp) {
            // we won't perfectly match due to URL encoding sometimes but we can try
        }
        
        function setWallpaper(url, el) {
            // Call parent window to change the background directly
            if(window.parent && window.parent.changeWallpaper) {
                window.parent.changeWallpaper(url);
                
                // Show message
                const msg = document.getElementById('msg');
                msg.style.display = 'block';
                setTimeout(() => { msg.style.display = 'none'; }, 3000);
                
                // Update active state
                document.querySelectorAll('.wallpaper-item').forEach(item => item.classList.remove('active'));
                if(el) el.classList.add('active');
            } else {
                alert("Lỗi: Không thể kết nối với hệ điều hành gốc.");
            }
        }
    </script>
</body>
</html>
