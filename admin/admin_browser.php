<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Trình Duyệt</title>
    <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; background: transparent; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        .browser-toolbar { display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: var(--taskbar-bg); border-bottom: 1px solid var(--glass-border); backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur); }
        .nav-btn { width: 32px; height: 32px; border: none; background: transparent; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--text-color); }
        .nav-btn:hover { background: var(--taskbar-hover); }
        .url-bar { flex-grow: 1; display: flex; align-items: center; background: var(--input-bg); border: 1px solid var(--input-border); border-radius: 16px; padding: 4px 12px; height: 32px; box-sizing: border-box; }
        .url-bar input { border: none; outline: none; background: transparent; color: var(--text-color); flex-grow: 1; font-size: 13px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        .browser-content { height: calc(100% - 49px); width: 100%; }
        .browser-content iframe { width: 100%; height: 100%; border: none; }
    </style>
</head>
<body>
    <div class="browser-toolbar">
        <button class="nav-btn" onclick="document.getElementById('browser-frame').contentWindow.history.back()" title="Back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="nav-btn" onclick="document.getElementById('browser-frame').contentWindow.history.forward()" title="Forward">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        <button class="nav-btn" onclick="document.getElementById('browser-frame').src = document.getElementById('browser-frame').src" title="Reload">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.21l5.67-5.67"></path></svg>
        </button>
        <button class="nav-btn" onclick="loadUrl('https://www.google.com/webhp?igu=1')" title="Home">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </button>
        <div class="url-bar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2" style="margin-right:8px"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <input type="text" id="url-input" value="https://google.com" onkeypress="if(event.key === 'Enter') navigateUrl()">
        </div>
    </div>
    <div class="browser-content">
        <!-- Cannot embed other domains due to X-Frame-Options, so we default to local game UI -->
        <iframe id="browser-frame" src="https://www.google.com/webhp?igu=1" sandbox="allow-same-origin allow-scripts allow-forms allow-popups"></iframe>
    </div>

    <script>
        function loadUrl(url) {
            document.getElementById('browser-frame').src = url;
            document.getElementById('url-input').value = url;
        }
        
        function navigateUrl() {
            var url = document.getElementById('url-input').value;
            if(!url.startsWith('http')) {
                // Try searching or assume https
                if(url.includes('.')) {
                    url = 'https://' + url;
                } else {
                    url = 'https://www.google.com/search?igu=1&q=' + encodeURIComponent(url);
                }
            }
            document.getElementById('browser-frame').src = url;
            document.getElementById('url-input').value = url;
        }
    </script>
</body>
</html>
