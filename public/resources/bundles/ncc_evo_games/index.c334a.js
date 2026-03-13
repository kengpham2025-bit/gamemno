System.register(
  "chunks:///_virtual/ApiService.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./EvoGameConfig.ts",
    "./EvoGameHTTPManager.ts",
    "./PersistManager.ts",
  ],
  function (e) {
    "use strict";
    var n, t, o, r, s, i, c, u, a;
    return {
      setters: [
        function (e) {
          (n = e.inheritsLoose), (t = e.extends);
        },
        function (e) {
          (o = e.cclegacy), (r = e._decorator), (s = e.log), (i = e.Component);
        },
        function (e) {
          c = e.default;
        },
        function (e) {
          u = e.EvoGameHTTPManager;
        },
        function (e) {
          a = e.PersistManager;
        },
      ],
      execute: function () {
        var l;
        o._RF.push({}, "d63a4NwD45LlLId5j0iSjdA", "ApiService", void 0);
        var g = r.ccclass;
        r.property,
          e(
            "ApiService",
            g("ApiService")(
              (l = (function (e) {
                function o() {
                  return e.apply(this, arguments) || this;
                }
                return (
                  n(o, e),
                  (o.sendRefreshMoney = function (e, n) {
                    var t = c.build(c.PROVIDER.REFRESH_MONEY),
                      o = c.AccessToken;
                    u.getInstance().sendGetHttpRequestWithAuthorization(
                      t,
                      o,
                      function (n) {
                        s("[refreshMoney] success:", n), e(n);
                      },
                      function (e) {
                        console.error("[refreshMoney] error:", e), n(e);
                      }
                    );
                  }),
                  (o.getProviderGames = function (e, n) {
                    var t,
                      o,
                      r = c.build(c.PROVIDER.LIST_GAMES),
                      s = c.AccessToken;
                    null == (t = a.getInstance()) ||
                      null == (o = t.loading) ||
                      o.show(),
                      u.getInstance().sendGetHttpRequestWithAuthorization(
                        r,
                        s,
                        function (n) {
                          console.log("[getProviderGames] success:", n), e(n);
                        },
                        function (e) {
                          console.error("[getProviderGames] error:", e), n(e);
                        }
                      );
                  }),
                  (o.getGameUrl = function (e, n, o) {
                    var r, s;
                    null == (r = a.getInstance()) ||
                      null == (s = r.loading) ||
                      s.show();
                    var i = c.build(c.PROVIDER.GET_GAME_URL),
                      l = c.AccessToken,
                      g = JSON.stringify(
                        t({}, e, { lang: e.lang || c.LOCALE })
                      );
                    u.getInstance().sendPostHttpRequestWithAuthoriztion(
                      i,
                      l,
                      g,
                      function (e) {
                        console.log("[getGameUrl] success:", e), n(e);
                      },
                      function (e) {
                        console.error("[getGameUrl] error:", e), o(e);
                      }
                    );
                  }),
                  o
                );
              })(i))
            ) || l
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EvoCanvas.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, o, a, i, s;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (n = e.cclegacy),
            (o = e._decorator),
            (a = e.view),
            (i = e.UITransform),
            (s = e.Component);
        },
      ],
      execute: function () {
        var r;
        n._RF.push({}, "fb7e9ykB/9H47GUn7vQbQoX", "EvoCanvas", void 0);
        var c = o.ccclass;
        o.property,
          e(
            "EvoCanvas",
            c("EvoCanvas")(
              (r = (function (e) {
                function n() {
                  for (
                    var t, n = arguments.length, o = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    ((t =
                      e.call.apply(e, [this].concat(o)) || this).updateScale =
                      function () {
                        var e = a.getVisibleSize(),
                          n = t.node.getComponent(i);
                        n && n.setContentSize(e.width, e.height);
                      }),
                    t
                  );
                }
                t(n, e);
                var o = n.prototype;
                return (
                  (o.onLoad = function () {
                    this.updateScale(),
                      a.on("design-resolution-changed", this.updateScale, this);
                  }),
                  (o.onDestroy = function () {
                    a.off("design-resolution-changed", this.updateScale, this);
                  }),
                  n
                );
              })(s))
            ) || r
          );
        n._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/EvoDeviceHelper.ts", ["cc"], function (i) {
  "use strict";
  var e, t, n, r;
  return {
    setters: [
      function (i) {
        (e = i.cclegacy), (t = i._decorator), (n = i.sys), (r = i.view);
      },
    ],
    execute: function () {
      var s, a;
      e._RF.push({}, "b4ac3lmZ75E5q0XtYTGgFMc", "EvoDeviceHelper", void 0);
      var o = t.ccclass;
      t.property,
        i(
          "default",
          o("EvoDeviceHelper")(
            (((a = (function () {
              function i() {}
              return (
                (i.isIOS = function () {
                  return n.os === n.OS.IOS;
                }),
                (i.isAndroid = function () {
                  return n.os === n.OS.ANDROID;
                }),
                (i.isWindows = function () {
                  return n.os === n.OS.WINDOWS;
                }),
                (i.isMac = function () {
                  return n.os === n.OS.OSX;
                }),
                (i.isIPad = function () {
                  if (null !== this._cachedIsIPad) return this._cachedIsIPad;
                  if (n.isNative) {
                    var i = r.getFrameSize(),
                      e = Math.min(i.width, i.height);
                    return n.os === n.OS.IOS && e >= 744
                      ? (this._cachedIsIPad = !0)
                      : (this._cachedIsIPad = !1);
                  }
                  var t =
                    navigator.userAgent || navigator.vendor || window.opera;
                  if (/iPad/i.test(t)) return (this._cachedIsIPad = !0);
                  if (/Macintosh/i.test(t) && "ontouchstart" in window)
                    return (this._cachedIsIPad = !0);
                  if (
                    /Macintosh/i.test(t) &&
                    navigator.maxTouchPoints &&
                    navigator.maxTouchPoints > 2
                  )
                    return (this._cachedIsIPad = !0);
                  var s = window.screen.width / window.screen.height;
                  return Math.min(window.screen.width, window.screen.height) >=
                    768 &&
                    s < 1.6 &&
                    this.isIOS()
                    ? (this._cachedIsIPad = !0)
                    : (this._cachedIsIPad = !1);
                }),
                (i.isAndroidTablet = function () {
                  if (null !== this._cachedTablet) return this._cachedTablet;
                  if (!this.isAndroid()) return (this._cachedTablet = !1);
                  var i = r.getCanvasSize().width,
                    e = r.getCanvasSize().height;
                  if (Math.max(i, e) / Math.min(i, e) < 1.7078)
                    return (this._cachedTablet = !0);
                  if (!n.isNative) {
                    var t = navigator.userAgent.toLowerCase();
                    if (
                      t.includes("tablet") ||
                      (t.includes("android") && !t.includes("mobile"))
                    )
                      return (this._cachedTablet = !0);
                  }
                  return (this._cachedTablet = !1);
                }),
                (i.isTablet = function () {
                  return this.isIPad() || this.isAndroidTablet();
                }),
                (i.isIPhone = function () {
                  return !!this.isIOS() && !this.isIPad();
                }),
                (i.isMobile = function () {
                  if (null !== this._cachedIsMobile)
                    return this._cachedIsMobile;
                  if (n.isNative)
                    return (this._cachedIsMobile =
                      this.isIOS() || this.isAndroid());
                  var i = navigator.userAgent || "",
                    e =
                      /Android|iPhone|iPod|iPad|Mobile|BlackBerry|IEMobile|Silk|Opera Mini/i.test(
                        i
                      );
                  return (this._cachedIsMobile = e);
                }),
                (i.isDesktop = function () {
                  return !this.isMobile() && !this.isTablet();
                }),
                (i.prototype.detectDevice = function () {
                  var i = navigator.userAgent,
                    e = navigator.platform,
                    t = navigator.maxTouchPoints,
                    n = ("MacIntel" === e && t > 1) || !!/iPad/.test(i),
                    r = /iPhone/.test(i) && t > 0,
                    s =
                      /iPhone|iPad|iPod/.test(i) || ("MacIntel" === e && t > 1);
                  return (
                    console.log("UserAgent:", i),
                    console.log("Platform:", e),
                    console.log("maxTouchPoints:", t),
                    console.log("isIOS:", s),
                    console.log("isIPhone:", r),
                    console.log("isIPad:", n),
                    n
                      ? "iPad"
                      : r
                      ? "iPhone"
                      : s
                      ? "iOS device (unknown type)"
                      : "Not iOS"
                  );
                }),
                (i.isSafari = function () {
                  if (n.isNative) return !1;
                  var i = navigator.userAgent;
                  return /^((?!chrome|android).)*safari/i.test(i);
                }),
                (i.isChrome = function () {
                  if (n.isNative) return !1;
                  var i = navigator.userAgent;
                  return /Chrome|CriOS/i.test(i);
                }),
                (i.isWebView = function () {
                  if (n.isNative) return !1;
                  var i = navigator.userAgent || "";
                  return (
                    /wv/.test(i) ||
                    /WebView/i.test(i) ||
                    /\bFBAN|FBAV\b/i.test(i)
                  );
                }),
                (i.isNativeApp = function () {
                  return n.isNative;
                }),
                (i.isWeb = function () {
                  return !n.isNative;
                }),
                (i.getDeviceCategory = function () {
                  return this.isTablet()
                    ? "tablet"
                    : this.isMobile()
                    ? "phone"
                    : "desktop";
                }),
                (i.getPlatformName = function () {
                  if (n.isNative) {
                    if (this.isIOS())
                      return this.isIPad() ? "iPad (App)" : "iPhone (App)";
                    if (this.isAndroid())
                      return this.isAndroidTablet()
                        ? "Android Tablet (App)"
                        : "Android Phone (App)";
                    if (this.isWindows()) return "Windows (Native)";
                    if (this.isMac()) return "Mac (Native)";
                  } else {
                    if (this.isSafari()) return "Safari (Web)";
                    if (this.isChrome()) return "Chrome (Web)";
                    if (this.isWebView()) return "WebView (Web)";
                  }
                  return "Unknown Platform";
                }),
                (i.getScreenRatio = function () {
                  var i = r.getFrameSize();
                  return i.width / i.height;
                }),
                (i.isLandscape = function () {
                  var i = r.getFrameSize();
                  return i.width >= i.height;
                }),
                (i.isPortrait = function () {
                  return !this.isLandscape();
                }),
                (i.debugInfo = function () {
                  var i = r.getFrameSize();
                  return {
                    os: n.os,
                    platform: n.platform,
                    screen: i.width + "x" + i.height,
                    ratio: this.getScreenRatio().toFixed(2),
                    deviceCategory: this.getDeviceCategory(),
                    platformName: this.getPlatformName(),
                  };
                }),
                i
              );
            })())._cachedIsIPad = null),
            (a._cachedIsMobile = null),
            (a._cachedTablet = null),
            (s = a))
          ) || s
        );
      e._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/EvoGameConfig.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, r, n, i;
    return {
      setters: [
        function (e) {
          t = e.createClass;
        },
        function (e) {
          (r = e.cclegacy), (n = e._decorator), (i = e.sys);
        },
      ],
      execute: function () {
        var o, s;
        r._RF.push({}, "99639gzfltJYKZAN5yV1j9q", "EvoGameConfig", void 0);
        var a = n.ccclass;
        n.property,
          e(
            "default",
            a("EvoGameConfig")(
              (((s = (function () {
                function e() {}
                return (
                  (e.initConfig = function () {
                    var t;
                    e.AccessToken =
                      null != (t = i.localStorage.getItem("user_token"))
                        ? t
                        : "";
                  }),
                  (e.GetConfigWebViewUrl = function () {
                    var t = localStorage.getItem("X_GAME_CONFIG");
                    if (null == t || null == t) return "";
                    var r = JSON.parse(t),
                      n = r[e.WebViewUrl],
                      o = r[e.rs_domain];
                    return i.isBrowser ||
                      (i.isBrowser && i.platform === i.Platform.MOBILE_BROWSER)
                      ? window.location.href.split("?")[0] + n
                      : o + n;
                  }),
                  (e.GetHtml = function () {
                    return "dev" == this.currentEnv
                      ? "https://resources.gwin.info/sun-dev-coma/webview/EvoVia.html"
                      : e.GetConfigWebViewUrl();
                  }),
                  (e.build = function (e) {
                    return e.startsWith("http") ? e : "" + this.BaseURL + e;
                  }),
                  t(e, null, [
                    {
                      key: "BaseURL",
                      get: function () {
                        return this.ENVIRONMENTS[this.currentEnv];
                      },
                    },
                  ]),
                  e
                );
              })()).AccessToken = void 0),
              (s.LOCALE = "vi"),
              (s.WebViewUrl = "ncc_games"),
              (s.rs_domain = "rs_domain"),
              (s.ENVIRONMENTS = {
                dev: "https://api100.atpman.net/gameapi-prerelease",
                prod: "https://api100.atpman.net/gameapi",
              }),
              (s.currentEnv = "prod"),
              (s.PROVIDER = {
                REFRESH_MONEY: "/public/user/refresh-money",
                LIST_GAMES: "/public/providers/games",
                GET_GAME_URL: "/public/providers/get-url",
              }),
              (o = s))
            ) || o
          );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EvoGameHTTPManager.ts",
  ["cc"],
  function (e) {
    "use strict";
    var t, s, n;
    return {
      setters: [
        function (e) {
          (t = e.cclegacy), (s = e._decorator), (n = e.log);
        },
      ],
      execute: function () {
        var r, a;
        t._RF.push({}, "1a781pD4LpMmIbp2zuuyTm4", "EvoGameHTTPManager", void 0);
        var o = s.ccclass;
        s.property,
          e(
            "EvoGameHTTPManager",
            o("EvoGameHTTPManager")(
              (((a = (function () {
                function e() {
                  this.activeRequests = [];
                }
                e.getInstance = function () {
                  return (
                    (null !== this._instance && void 0 !== this._instance) ||
                      (this._instance = new e()),
                    this._instance
                  );
                };
                var t = e.prototype;
                return (
                  (t.sendGetHttpRequestWithAuthorization = function (
                    t,
                    s,
                    n,
                    r,
                    a
                  ) {
                    void 0 === a && (a = !1);
                    var o = new XMLHttpRequest();
                    this.activeRequests.push(o),
                      (o.onreadystatechange = function () {
                        if (4 == o.readyState)
                          if (o.status >= 200 && o.status < 400) {
                            e.getInstance().activeRequests = e
                              .getInstance()
                              .activeRequests.filter(function (e) {
                                return e !== o;
                              });
                            var t = a ? atob(o.responseText) : o.responseText,
                              s = JSON.parse(t);
                            n(s);
                          } else {
                            var i;
                            s = null;
                            try {
                              s = JSON.parse(o.responseText);
                            } catch (e) {}
                            (i = s.msg), r(i);
                          }
                      }),
                      (o.onerror = function () {
                        var e,
                          t = null;
                        try {
                          t = JSON.parse(o.responseText);
                        } catch (e) {}
                        (e = t.msg), r(e);
                      }),
                      (o.ontimeout = function () {
                        r("Đã xảy ra lỗi!");
                      }),
                      o.open("GET", t, !0),
                      o.setRequestHeader("Authorization", s),
                      o.send();
                  }),
                  (t.sendPostHttpRequestWithAuthoriztion = function (
                    e,
                    t,
                    s,
                    r,
                    a
                  ) {
                    var o = new XMLHttpRequest();
                    (o.onreadystatechange = function () {
                      if (4 == o.readyState)
                        if (o.status >= 200 && o.status < 400) {
                          n(o.responseText);
                          var e = o.responseText,
                            t = e;
                          try {
                            t = JSON.parse(e);
                          } catch (e) {}
                          r(t);
                        } else {
                          var s;
                          n(o.responseText),
                            n(o.responseText),
                            (s = JSON.parse(o.responseText).msg),
                            a(s);
                        }
                    }),
                      (o.onerror = function () {
                        var e;
                        n(JSON.stringify(o.responseText)),
                          n(o.responseText),
                          (e = JSON.parse(o.responseText).msg),
                          a(e);
                      }),
                      (o.ontimeout = function () {
                        a("Đã xảy ra lỗi!");
                      }),
                      o.open("POST", e, !0),
                      o.setRequestHeader("Content-Type", "application/json"),
                      o.setRequestHeader("Authorization", t),
                      o.send(s);
                  }),
                  e
                );
              })())._instance = void 0),
              (r = a))
            ) || r
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EvoManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameItem.ts",
    "./EvoGameConfig.ts",
    "./ApiService.ts",
    "./PersistManager.ts",
    "./MiniGameNodeController.ts",
    "./Define.ts",
  ],
  function (e) {
    "use strict";
    var n, t, o, i, a, r, s, l, c, u, f, m, d, v, h, p, g, G, C, E;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (i = e.assertThisInitialized),
            (a = e.createForOfIteratorHelperLoose),
            (r = e.extends);
        },
        function (e) {
          (s = e.cclegacy),
            (l = e._decorator),
            (c = e.Button),
            (u = e.Node),
            (f = e.director),
            (m = e.macro),
            (d = e.log),
            (v = e.Component);
        },
        function (e) {
          h = e.GameItem;
        },
        function (e) {
          p = e.default;
        },
        function (e) {
          g = e.ApiService;
        },
        function (e) {
          G = e.PersistManager;
        },
        function (e) {
          C = e.default;
        },
        function (e) {
          E = e.GameID;
        },
      ],
      execute: function () {
        var I, _, b, L, y, M, A, D, N, O;
        s._RF.push({}, "494b8SlYNtFVKzpPxFH5qg7", "EvoManager", void 0);
        var P = l.ccclass,
          R = l.property;
        e(
          "EvoManager",
          ((I = P("EvoManager")),
          (_ = R(c)),
          (b = R(u)),
          (L = R([h])),
          I(
            (((O = (function (e) {
              function n() {
                for (
                  var n, t = arguments.length, a = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  a[r] = arguments[r];
                return (
                  ((n =
                    e.call.apply(e, [this].concat(a)) || this).providerName =
                    "Evolution"),
                  o(n, "btnClose", A, i(n)),
                  o(n, "mainCanvas", D, i(n)),
                  o(n, "listGameItem", N, i(n)),
                  n
                );
              }
              t(n, e),
                (n.getInstance = function () {
                  return this._instance;
                });
              var s = n.prototype;
              return (
                (s.onLoad = function () {
                  var e = this;
                  (n._instance = this),
                    p.initConfig(),
                    g.getProviderGames(
                      function (n) {
                        console.log("Lists game:", n),
                          e.handleGameListResponse(n);
                      },
                      function (e) {
                        console.error("Error when call API:", e);
                      }
                    ),
                    this.onGetListGame(),
                    this.btnClose &&
                      this.btnClose.node.on(
                        "click",
                        function () {
                          e.closeGame();
                        },
                        this
                      ),
                    f.on("LOGGED_IN_OTHER_DEVICE", this.closeGame, this);
                }),
                (s.start = function () {
                  this.schedule(this.onHideMini, 1, m.REPEAT_FOREVER);
                }),
                (s.onHideMini = function () {
                  var e;
                  null == (e = C.getInstance()) ||
                    e.adjustPosition(E.EVO_GAMES);
                }),
                (s.handleGameListResponse = function (e) {
                  var n = this;
                  if (null != e && e.data && Array.isArray(e.data))
                    for (
                      var t,
                        o = e.data.filter(function (e) {
                          return e.providerName === n.providerName;
                        }),
                        i = a(o);
                      !(t = i()).done;

                    )
                      for (
                        var s,
                          l,
                          c = t.value,
                          u =
                            (null == (s = c.providerId) || null == s.trim
                              ? void 0
                              : s.trim()) || "",
                          f = c.gameList || [],
                          m = function () {
                            var e = l.value;
                            if (null == e || !e.gameCode) return "continue";
                            var t = r({ providerId: u }, e),
                              o = n.listGameItem.find(function (n) {
                                var t, o, i, a;
                                return (
                                  (null == (t = n.gameId) ||
                                  null == (o = t.trim())
                                    ? void 0
                                    : o.toLowerCase()) ===
                                  (null == (i = e.gameCode) ||
                                  null == (a = i.trim())
                                    ? void 0
                                    : a.toLowerCase())
                                );
                              });
                            o
                              ? o.onSetData(t)
                              : console.log(
                                  "No GameItem found for gameCode:",
                                  e.gameCode
                                );
                          },
                          d = a(f);
                        !(l = d()).done;

                      )
                        m();
                  else console.error("API have no data:", e);
                }),
                (s.onSetactiveMainCanvas = function (e) {
                  this.mainCanvas && (this.mainCanvas.active = e);
                }),
                (s.onGetListGame = function () {
                  var e, n;
                  null == (e = G.getInstance()) ||
                    null == (n = e.loading) ||
                    n.show();
                }),
                (s.closeGame = function () {
                  d("Evo is closed"),
                    console.log("Evo is closed"),
                    f.emit("INTEGRATION_BACK_TO_LOBBY");
                }),
                (s.onDestroy = function () {
                  var e = this;
                  this.btnClose &&
                    this.btnClose.node.off(
                      "click",
                      function () {
                        e.closeGame();
                      },
                      this
                    ),
                    f.off("LOGGED_IN_OTHER_DEVICE", this.closeGame, this);
                }),
                n
              );
            })(v))._instance = void 0),
            (A = n((M = O).prototype, "btnClose", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = n(M.prototype, "mainCanvas", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = n(M.prototype, "listGameItem", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (y = M))
          ) || y)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EvoPortraitCanvasScaleByOrientation.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (i) {
    "use strict";
    var e, t, n, o, s, r, a, h, u, c, l, d, g, w, f, S, R, D, b;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (s = i.cclegacy),
            (r = i._decorator),
            (a = i.CCBoolean),
            (h = i.Canvas),
            (u = i.CCInteger),
            (c = i.Widget),
            (l = i.sys),
            (d = i.view),
            (g = i.macro),
            (w = i.director),
            (f = i.screen),
            (S = i.log),
            (R = i.ResolutionPolicy),
            (D = i.Camera),
            (b = i.Component);
        },
      ],
      execute: function () {
        var p, z, v, m, y, O, T, I, N, E, C, A, P, _, H, B, W, F, L, M, G, V, X;
        s._RF.push(
          {},
          "45517STSo1PCbQFTEDmmn8j",
          "EvoPortraitCanvasScaleByOrientation",
          void 0
        );
        var j = r.ccclass,
          K = r.property;
        i(
          "EvoPortraitCanvasScaleByOrientation",
          ((p = j("EvoPortraitCanvasScaleByOrientation")),
          (z = K(a)),
          (v = K(a)),
          (m = K({ type: h })),
          (y = K(a)),
          (O = K(a)),
          (T = K(u)),
          (I = K(u)),
          (N = K({ type: c })),
          (E = K(a)),
          (C = K({ type: u })),
          p(
            ((_ = e(
              (P = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, s = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (e = i.call.apply(i, [this].concat(s)) || this),
                    n(e, "autoOrientation", _, o(e)),
                    n(e, "isPortrait", H, o(e)),
                    n(e, "canvas", B, o(e)),
                    n(e, "fitByOrientation", W, o(e)),
                    n(e, "useCustomDesignResolution", F, o(e)),
                    n(e, "customDSWidth", L, o(e)),
                    n(e, "customDSHeight", M, o(e)),
                    n(e, "widgetNodes", G, o(e)),
                    n(e, "isDebug", V, o(e)),
                    n(e, "minScreenRatio", X, o(e)),
                    (e._thisOnResized = void 0),
                    (e.innerSize = void 0),
                    e
                  );
                }
                t(e, i);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    if (
                      ((this.innerSize = {
                        width: window.innerWidth,
                        height: window.innerHeight,
                      }),
                      (this._thisOnResized = this.onScreenResized.bind(this)),
                      l.isBrowser
                        ? window.addEventListener("resize", this._thisOnResized)
                        : d.on("canvas-resize", this._thisOnResized),
                      !l.isNative)
                    ) {
                      var i = document.getElementById("div_full_screen");
                      this.isPortrait && i && (i.style.visibility = "hidden"),
                        this.autoOrientation
                          ? d.setOrientation(g.ORIENTATION_AUTO)
                          : this.isPortrait
                          ? d.setOrientation(g.ORIENTATION_PORTRAIT)
                          : d.setOrientation(g.ORIENTATION_LANDSCAPE);
                    }
                  }),
                  (s.start = function () {
                    if (l.isMobile) {
                      var i = new Event("gameShow");
                      window.dispatchEvent(i);
                    }
                    l.isNative &&
                      w.emit(
                        "INTEGRATION_SET_CANVAS_ORIENT",
                        this.isPortrait ? 0 : 1
                      ),
                      this.scaleCanvasByOrientation();
                  }),
                  (s.scaleCanvasByOrientation = function () {
                    var i = window ? window.innerWidth : f.windowSize.width,
                      e = window ? window.innerHeight : f.windowSize.height;
                    if (
                      (this.autoOrientation
                        ? (this.isPortrait = i < e)
                        : this.isPortrait
                        ? d.setOrientation(g.ORIENTATION_PORTRAIT)
                        : d.setOrientation(g.ORIENTATION_LANDSCAPE),
                      this.canvas)
                    ) {
                      if (
                        (this.isDebug && S("Canvas after update: "),
                        this.isDebug && S(this.canvas),
                        (this.canvas.alignCanvasWithScreen = !0),
                        this.fitByOrientation)
                      ) {
                        var t = this.useCustomDesignResolution
                            ? this.customDSWidth / this.customDSHeight
                            : d.getDesignResolutionSize().width /
                              d.getDesignResolutionSize().height,
                          n = i / e;
                        if (window && l.isMobile && l.isBrowser) {
                          var o = this.isLandscapeScreen();
                          n = this.isPortrait
                            ? o
                              ? e / i
                              : i / e
                            : o
                            ? window.innerWidth / window.innerHeight
                            : window.innerHeight / window.innerWidth;
                        }
                        this.isDebug &&
                          S(
                            "[TestResize]View size width: " +
                              i +
                              ", height: " +
                              e +
                              "  Design Resolution: W: " +
                              d.getDesignResolutionSize().width +
                              ", H: " +
                              d.getDesignResolutionSize().height +
                              ",  Screen Ratio: " +
                              n +
                              ", Design Ratio: " +
                              t +
                              ", minScreenRatio: " +
                              this.minScreenRatio
                          ),
                          this.isPortrait
                            ? (n < t
                                ? (d.setDesignResolutionSize(
                                    d.getDesignResolutionSize().width,
                                    d.getDesignResolutionSize().height,
                                    R.FIXED_WIDTH
                                  ),
                                  this.isDebug && S("CANVAS FIT WIDTH"))
                                : (d.setDesignResolutionSize(
                                    d.getDesignResolutionSize().width,
                                    d.getDesignResolutionSize().height,
                                    R.FIXED_HEIGHT
                                  ),
                                  this.isDebug && S("CANVAS FIT HEIGHT")),
                              this.rotateRootPortraitGame())
                            : n < t && n >= this.minScreenRatio
                            ? (d.setDesignResolutionSize(
                                d.getDesignResolutionSize().width,
                                d.getDesignResolutionSize().height,
                                R.FIXED_WIDTH
                              ),
                              this.isDebug && S("[TestResize]CANVAS FIT WIDTH"))
                            : (d.setDesignResolutionSize(
                                d.getDesignResolutionSize().width,
                                d.getDesignResolutionSize().height,
                                R.FIXED_HEIGHT
                              ),
                              this.isDebug &&
                                S("[TestResize]CANVAS FIT HEIGHT"));
                      }
                    } else this.isDebug && S("No canvas component");
                    if (this.widgetNodes && this.widgetNodes.length > 0)
                      for (var s = 0; s < this.widgetNodes.length; s++) {
                        this.widgetNodes[s] &&
                          this.widgetNodes[s].updateAlignment();
                      }
                  }),
                  (s.onScreenResized = function () {
                    this.scaleCanvasByOrientation();
                  }),
                  (s.isLandscapeScreen = function () {
                    if (
                      l.isMobile &&
                      l.isBrowser &&
                      "function" == typeof window.matchMedia
                    ) {
                      if (window.matchMedia("(orientation: landscape)").matches)
                        return !0;
                      if (window.matchMedia("(orientation: portrait)").matches)
                        return !1;
                    }
                    return !0;
                  }),
                  (s.isShowKeyboard = function () {
                    return (
                      (window.innerWidth * window.innerHeight) /
                        (this.innerSize.width * this.innerSize.height) <
                      0.8
                    );
                  }),
                  (s.rotateRootPortraitGame = function () {
                    if (this.isPortrait && l.isMobile && l.isBrowser) {
                      var i =
                        this.isLandscapeScreen() && !this.isShowKeyboard();
                      this.node.children.forEach(function (e) {
                        e.getComponent(D) || (e.angle = i ? 180 : 0);
                      });
                    }
                  }),
                  (s.onDestroy = function () {
                    l.isBrowser
                      ? window.removeEventListener(
                          "resize",
                          this._thisOnResized
                        )
                      : d.off("canvas-resize", this._thisOnResized);
                  }),
                  e
                );
              })(b)).prototype,
              "autoOrientation",
              [z],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              }
            )),
            (H = e(P.prototype, "isPortrait", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (B = e(P.prototype, "canvas", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = e(P.prototype, "fitByOrientation", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (F = e(P.prototype, "useCustomDesignResolution", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (L = e(P.prototype, "customDSWidth", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1280;
              },
            })),
            (M = e(P.prototype, "customDSHeight", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 720;
              },
            })),
            (G = e(P.prototype, "widgetNodes", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (V = e(P.prototype, "isDebug", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (X = e(P.prototype, "minScreenRatio", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (A = P))
          ) || A)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EvoPortraitCustomCanvasSize.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./EvoPortraitCanvasScaleByOrientation.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, o, a, s, r, u, l, c, h;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (s = t._decorator),
            (r = t.view),
            (u = t.ResolutionPolicy),
            (l = t.sys),
            (c = t.Component);
        },
        function (t) {
          h = t.EvoPortraitCanvasScaleByOrientation;
        },
      ],
      execute: function () {
        var d, v, p, f, g;
        a._RF.push(
          {},
          "9b670lbGIVB7b3raB0QwZ2P",
          "EvoPortraitCustomCanvasSize",
          void 0
        );
        var C = s.ccclass,
          m = s.property;
        t(
          "PortraitCustomCanvasSize",
          C("PortraitCustomCanvasSize")(
            ((p = i(
              (v = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, a = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(a)) || this),
                    n(i, "customDSWidth", p, o(i)),
                    n(i, "customDSHeight", f, o(i)),
                    n(i, "isPortrait", g, o(i)),
                    (i._defaultDesignResolution = {}),
                    (i._defaultResolutionPolicy = null),
                    (i._thisOnResized = void 0),
                    (i._canvasScaleComp = null),
                    i
                  );
                }
                e(i, t);
                var a = i.prototype;
                return (
                  (a.onLoad = function () {
                    this._canvasScaleComp =
                      this.node.scene.getComponentInChildren(h);
                  }),
                  (a.start = function () {
                    this.updateCustomCanvasSize(),
                      this.updateWindowOrientation(),
                      this.scaleCanvasByOrientation(0.1);
                  }),
                  (a.updateCustomCanvasSize = function () {
                    var t = r.getDesignResolutionSize();
                    (this._defaultDesignResolution.width = t.width),
                      (this._defaultDesignResolution.height = t.height),
                      (this._defaultResolutionPolicy = r.getResolutionPolicy());
                    var i = this.isPortrait ? u.FIXED_HEIGHT : u.FIXED_WIDTH;
                    r.setDesignResolutionSize(
                      this.customDSWidth,
                      this.customDSHeight,
                      i
                    );
                  }),
                  (a.updateWindowOrientation = function () {
                    if (!l.isNative && window && this.isMobile()) {
                      var t = new CustomEvent("orientationchange", {
                        detail: { type: "manualCall" },
                      });
                      window.dispatchEvent(t);
                    }
                  }),
                  (a.scaleCanvasByOrientation = function (t) {
                    var i = this;
                    this.scheduleOnce(function () {
                      i._canvasScaleComp &&
                        i._canvasScaleComp.scaleCanvasByOrientation();
                    }, t);
                  }),
                  (a.isMobile = function () {
                    var t =
                      null !=
                      navigator.userAgent.match(
                        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                      );
                    return t;
                  }),
                  (a.onDestroy = function () {
                    var t = this._defaultDesignResolution,
                      i = t.width,
                      e = t.height;
                    (l.isNative || (l.isBrowser && !this.isMobile())) &&
                      r.setDesignResolutionSize(
                        i,
                        e,
                        this._defaultResolutionPolicy
                      ),
                      this.updateWindowOrientation();
                  }),
                  i
                );
              })(c)).prototype,
              "customDSWidth",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return 720;
                },
              }
            )),
            (f = i(v.prototype, "customDSHeight", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1560;
              },
            })),
            (g = i(v.prototype, "isPortrait", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (d = v))
          ) || d
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EvoSoundManager.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./Define.ts"],
  function (i) {
    "use strict";
    var t, n, e, s, a, o, r, c, l, u;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (n = i.inheritsLoose),
            (e = i.initializerDefineProperty),
            (s = i.assertThisInitialized);
        },
        function (i) {
          (a = i.cclegacy),
            (o = i._decorator),
            (r = i.AudioSource),
            (c = i.sys),
            (l = i.Component);
        },
        function (i) {
          u = i.StorageKey;
        },
      ],
      execute: function () {
        var h, f, g, m, p, _, b, S;
        a._RF.push({}, "a712aVQwllPhrreiaqlXMjE", "EvoSoundManager", void 0);
        var y = o.ccclass,
          d = o.property;
        i(
          "EvoSoundManager",
          ((h = y("EvoSoundManager")),
          (f = d(r)),
          (g = d(r)),
          h(
            (((S = (function (i) {
              function t() {
                for (
                  var t, n = arguments.length, a = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  a[o] = arguments[o];
                return (
                  (t = i.call.apply(i, [this].concat(a)) || this),
                  e(t, "bgm_main", _, s(t)),
                  e(t, "sfx_click", b, s(t)),
                  (t.isMusicOn = !0),
                  (t.isSfxOn = !0),
                  t
                );
              }
              n(t, i),
                (t.getInstance = function () {
                  return (
                    (null !== this._instance && void 0 !== this._instance) ||
                      (this._instance = new t()),
                    this._instance
                  );
                });
              var a = t.prototype;
              return (
                (a.onLoad = function () {
                  t._instance = this;
                }),
                (a.start = function () {
                  (this.isMusicOn =
                    "1" == c.localStorage.getItem(u.Music) ||
                    "true" == localStorage.getItem(u.Music)),
                    (this.isSfxOn =
                      "1" == c.localStorage.getItem(u.SoundFX) ||
                      "true" == localStorage.getItem(u.SoundFX)),
                    this.isMusicOn && this.bgm_main && this.bgm_main.play();
                }),
                (a.playClickSfx = function () {
                  this.isSfxOn && this.sfx_click && this.sfx_click.play();
                }),
                (a.handleWebViewSound = function (i) {
                  i
                    ? this.bgm_main && this.bgm_main.stop()
                    : this.isMusicOn && this.bgm_main && this.bgm_main.play();
                }),
                (a.onDestroy = function () {
                  this.bgm_main && this.bgm_main.stop(),
                    this.sfx_click && this.sfx_click.stop();
                }),
                t
              );
            })(l))._instance = null),
            (_ = t((p = S).prototype, "bgm_main", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = t(p.prototype, "sfx_click", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = p))
          ) || m)
        );
        a._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/EvoStringUtils.ts", ["cc"], function (t) {
  "use strict";
  var r, n;
  return {
    setters: [
      function (t) {
        (r = t.cclegacy), (n = t._decorator);
      },
    ],
    execute: function () {
      var e;
      r._RF.push({}, "c23bbkA+khLLaaSIO42q5dg", "EvoStringUtils", void 0);
      var i = n.ccclass;
      n.property,
        t(
          "EvoStringUtils",
          i("EvoStringUtils")(
            (e = (function () {
              function t() {}
              return (
                (t.round = function (t, r) {
                  var n = t.toString().split(".");
                  if (1 == n.length) return t.toString();
                  if (2 == n.length) {
                    for (
                      var e = t.toFixed(r);
                      "0" == e[e.length - 1] || "." == e[e.length - 1];

                    )
                      e = e.substr(0, e.length - 1);
                    return e;
                  }
                  return "0";
                }),
                (t.formatMoneyNumberWithComma = function (t, r) {
                  void 0 === r && (r = 2);
                  var n = !1;
                  if ((t < 0 && ((t *= -1), (n = !0)), t < 1e3)) {
                    var e = this.round(t, r);
                    return 1 == n && (e = "-" + e), e;
                  }
                  for (
                    var i = "",
                      o = this.round(t, r).split("."),
                      u = o[0],
                      s = u.length;
                    s >= 0;
                    s -= 3
                  ) {
                    if (s - 3 <= 0) {
                      i = u.slice(0, s) + i;
                      break;
                    }
                    i = "," + u.slice(s - 3, s) + i;
                  }
                  return (
                    o.length > 1 && (i += "." + o[1]),
                    1 == n && (i = "-" + i),
                    i
                  );
                }),
                (t.shorten = function (t, r) {
                  return (
                    void 0 === r && (r = 15),
                    t.length <= r ? t : t.slice(0, r - 3) + "..."
                  );
                }),
                (t.isNullOrEmpty = function (t) {
                  return null == t || "" === t || 0 === t.length;
                }),
                t
              );
            })())
          ) || e
        );
      r._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/EvoUserInfor.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./EvoStringUtils.ts",
    "./ApiService.ts",
    "./State.ts",
  ],
  function (e) {
    "use strict";
    var n, t, a, r, o, i, s, l, c, u, f, p, h, v;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (a = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (i = e._decorator),
            (s = e.Sprite),
            (l = e.SpriteFrame),
            (c = e.Label),
            (u = e.systemEvent),
            (f = e.Component);
        },
        function (e) {
          p = e.EvoStringUtils;
        },
        function (e) {
          h = e.ApiService;
        },
        function (e) {
          v = e.state;
        },
      ],
      execute: function () {
        var y, d, m, g, b, _, U, R, M, E, A, S;
        o._RF.push({}, "ab6a8X1iAJAxLAppc9Kgu+W", "EvoUserInfor", void 0);
        var F = i.ccclass,
          L = i.property;
        e(
          "EvoUserInfor",
          ((y = F("EvoUserInfor")),
          (d = L(s)),
          (m = L([l])),
          (g = L(c)),
          (b = L(c)),
          y(
            (((S = (function (e) {
              function n() {
                for (
                  var n, t = arguments.length, o = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  o[i] = arguments[i];
                return (
                  (n = e.call.apply(e, [this].concat(o)) || this),
                  a(n, "spr_avatar", R, r(n)),
                  a(n, "sprFrame_avatar", M, r(n)),
                  a(n, "lbl_money", E, r(n)),
                  a(n, "lbl_displayname", A, r(n)),
                  n
                );
              }
              t(n, e),
                (n.getInstance = function () {
                  return this._instance;
                });
              var o = n.prototype;
              return (
                (o.onLoad = function () {
                  (n._instance = this),
                    u.on("REFRESH_MONEY", this.handleRefreshMoney, this),
                    u.on("update-money", this.handleRefreshMoney, this),
                    this.onGetAvatarUser(),
                    this.onGetMoneyUser(),
                    this.onGetNameUser();
                }),
                (o.sendRefreshMoney = function () {
                  var e = this;
                  h.sendRefreshMoney(
                    function (n) {
                      null !== n.data
                        ? void 0 !== n.data.balance
                          ? (console.log("balance user " + n.data.balance),
                            (v.gold = n.data.balance),
                            e.onGetMoneyUser())
                          : console.log("Balance is undefined:", n)
                        : console.log(n.message);
                    },
                    function (e) {
                      console.error("Error when call API:", e);
                    }
                  );
                }),
                (o.onGetAvatarUser = function () {
                  if (this.sprFrame_avatar)
                    if (v.avatarURL) {
                      var e = v.avatarURL.split("/"),
                        n = e[e.length - 1];
                      if (n) {
                        var t = this.sprFrame_avatar.filter(function (e) {
                          return n.indexOf(e.name) >= 0;
                        });
                        this.spr_avatar
                          ? (this.spr_avatar.spriteFrame =
                              t.length > 0
                                ? t[0]
                                : t[this.sprFrame_avatar.length - 1])
                          : console.log("---- Sprite avatar is null");
                      } else console.warn("---- avatarName invalid");
                    } else console.warn("---- avatarURL is empty");
                  else console.log("---- sprFrame avatar is null");
                }),
                (o.onGetMoneyUser = function () {
                  this.lbl_money
                    ? (this.lbl_money.string = p.formatMoneyNumberWithComma(
                        v.gold
                      ))
                    : console.log("---- Label money is null");
                }),
                (o.onGetNameUser = function () {
                  this.lbl_displayname
                    ? (this.lbl_displayname.string = p.shorten(v.displayName))
                    : console.log("---- Label displayname is null");
                }),
                (o.handleRefreshMoney = function (e) {
                  if ("number" == typeof e) v.gold = e;
                  else if (e.As) {
                    var n = e.As,
                      t = n.gold,
                      a = n.safe;
                    (v.gold = t), (v.goldSafe = a);
                  } else if (e[1] && e[1].As) {
                    var r = e[1].As,
                      o = r.gold,
                      i = r.safe;
                    (v.gold = o), (v.goldSafe = i);
                  }
                  this.onGetMoneyUser();
                }),
                (o.onDestroy = function () {
                  u.off("REFRESH_MONEY", this.handleRefreshMoney, this),
                    u.off("update-money", this.handleRefreshMoney, this);
                }),
                n
              );
            })(f))._instance = void 0),
            (R = n((U = S).prototype, "spr_avatar", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = n(U.prototype, "sprFrame_avatar", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (E = n(U.prototype, "lbl_money", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = n(U.prototype, "lbl_displayname", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = U))
          ) || _)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GameItem.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ApiService.ts",
    "./EvoGameConfig.ts",
    "./WebviewController.ts",
  ],
  function (e) {
    "use strict";
    var t, n, a, o, i, r, l, s, m, u, c, p, g, d;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (a = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy),
            (r = e._decorator),
            (l = e.Button),
            (s = e.Sprite),
            (m = e.sys),
            (u = e.Color),
            (c = e.Component);
        },
        function (e) {
          p = e.ApiService;
        },
        function (e) {
          g = e.default;
        },
        function (e) {
          d = e.WebviewController;
        },
      ],
      execute: function () {
        var f, v, h, b, G, I, O, S, y;
        i._RF.push({}, "574672HWLFJ7qqUhhoQjpWV", "GameItem", void 0);
        var w = r.ccclass,
          D = r.property;
        e(
          "GameItem",
          ((f = w("GameItem")),
          (v = D(String)),
          (h = D(l)),
          (b = D(s)),
          f(
            ((O = t(
              (I = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    i[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    a(t, "gameId", O, o(t)),
                    a(t, "btnOpenGame", S, o(t)),
                    a(t, "iconSprite", y, o(t)),
                    (t.gameData = null),
                    t
                  );
                }
                n(t, e);
                var i = t.prototype;
                return (
                  (i.onLoad = function () {
                    var e = this;
                    this.btnOpenGame &&
                      this.btnOpenGame.node.on("click", function () {
                        if (
                          m.isBrowser &&
                          m.platform === m.Platform.MOBILE_BROWSER &&
                          m.os == m.OS.IOS
                        ) {
                          var t = window.open("", "_blank");
                          e.onGetOpenGame(t);
                        } else e.onGetOpenGame(null);
                      });
                  }),
                  (i.onSetData = function (e) {
                    var t, n, a, o;
                    (this.gameData = e),
                      (null == e ||
                      null == (t = e.gameCode) ||
                      null == (n = t.trim())
                        ? void 0
                        : n.toLowerCase()) ===
                        (null == (a = this.gameId) || null == (o = a.trim())
                          ? void 0
                          : o.toLowerCase()) &&
                        (console.log(
                          "game data is setted => " + JSON.stringify(e, null, 2)
                        ),
                        this.btnOpenGame &&
                          (this.btnOpenGame.interactable = !0),
                        this.iconSprite &&
                          (this.iconSprite.color = new u(255, 255, 255, 225)));
                  }),
                  (i.onGetOpenGame = function (e) {
                    if (this.gameData) {
                      var t = {
                        providerId: this.gameData.providerId,
                        productId: this.gameData.productId,
                        gameCode: this.gameData.gameCode,
                        gameName: this.gameData.gameName,
                        lang: g.LOCALE,
                        gameType: this.gameData.gameType,
                      };
                      p.getGameUrl(
                        t,
                        function (t) {
                          var n, a, o, i;
                          (console.log("[GameItem] URL game received:", t),
                          console.log(
                            "url response " +
                              (null == (n = t.data) ? void 0 : n.url)
                          ),
                          m.isBrowser &&
                            m.platform === m.Platform.MOBILE_BROWSER &&
                            m.os == m.OS.IOS)
                            ? null == e ||
                              e.location.assign(
                                null == (i = t.data) ? void 0 : i.url
                              )
                            : null == (a = d.getInstance()) ||
                              a.openWebView(
                                null == (o = t.data) ? void 0 : o.url
                              );
                        },
                        function (e) {
                          console.error("[GameItem] Error get URL:", e);
                        }
                      );
                    } else
                      console.error(
                        "[GameItem] Have no data game to open (" +
                          this.gameId +
                          ")"
                      );
                  }),
                  t
                );
              })(c)).prototype,
              "gameId",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "";
                },
              }
            )),
            (S = t(I.prototype, "btnOpenGame", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = t(I.prototype, "iconSprite", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = I))
          ) || G)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ncc_evo_games",
  [
    "./ApiService.ts",
    "./EvoCanvas.ts",
    "./EvoGameConfig.ts",
    "./EvoManager.ts",
    "./EvoPortraitCanvasScaleByOrientation.ts",
    "./EvoPortraitCustomCanvasSize.ts",
    "./EvoSoundManager.ts",
    "./EvoUserInfor.ts",
    "./GameItem.ts",
    "./EvoGameHTTPManager.ts",
    "./NodeSafeArea.ts",
    "./SoundButtonComponent.ts",
    "./EvoDeviceHelper.ts",
    "./EvoStringUtils.ts",
    "./WebviewController.ts",
  ],
  function () {
    "use strict";
    return {
      setters: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/NodeSafeArea.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, r, i, o, n, a, u, c, s;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (n = e.cclegacy),
            (a = e._decorator),
            (u = e.Widget),
            (c = e.sys),
            (s = e.Component);
        },
      ],
      execute: function () {
        var l, p, d, f, h, N, g;
        n._RF.push({}, "96f51K8VBRG94WHVk4A7jku", "NodeSafeArea", void 0);
        var b = a.ccclass,
          y = a.property;
        e(
          "NodeSafeArea",
          ((l = b("NodeSafeArea")),
          (p = y(u)),
          (d = y(Number)),
          l(
            ((N = t(
              (h = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, n = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    n[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    i(t, "widgetNode", N, o(t)),
                    i(t, "notchNumber", g, o(t)),
                    t
                  );
                }
                return (
                  r(t, e),
                  (t.prototype.start = function () {
                    c.isNative &&
                      this.widgetNode &&
                      ((this.widgetNode.top += this.notchNumber),
                      this.widgetNode.updateAlignment());
                  }),
                  t
                );
              })(s)).prototype,
              "widgetNode",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (g = t(h.prototype, "notchNumber", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 44;
              },
            })),
            (f = h))
          ) || f)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SoundButtonComponent.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./EvoSoundManager.ts"],
  function (n) {
    "use strict";
    var o, t, e, u, c;
    return {
      setters: [
        function (n) {
          o = n.inheritsLoose;
        },
        function (n) {
          (t = n.cclegacy), (e = n._decorator), (u = n.Component);
        },
        function (n) {
          c = n.EvoSoundManager;
        },
      ],
      execute: function () {
        var r;
        t._RF.push(
          {},
          "e11a1CkopZNap1LAigNW4V7",
          "SoundButtonComponent",
          void 0
        );
        var i = e.ccclass;
        e.property,
          n(
            "SoundButtonComponent",
            i("SoundButtonComponent")(
              (r = (function (n) {
                function t() {
                  return n.apply(this, arguments) || this;
                }
                return (
                  o(t, n),
                  (t.prototype.onLoad = function () {
                    this.node.on("click", function () {
                      c.getInstance().playClickSfx();
                    });
                  }),
                  t
                );
              })(u))
            ) || r
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WebviewController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./EvoGameConfig.ts",
    "./EvoUserInfor.ts",
    "./EvoManager.ts",
    "./EvoSoundManager.ts",
    "./EvoDeviceHelper.ts",
    "./PersistManager.ts",
    "./NativeHelper.ts",
  ],
  function (e) {
    "use strict";
    var i, t, n, o, s, l, a, r, b, w, c, u, v, h, f, m, p, d, W, V;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (l = e._decorator),
            (a = e.WebView),
            (r = e.Button),
            (b = e.Prefab),
            (w = e.Node),
            (c = e.instantiate),
            (u = e.sys),
            (v = e.Component);
        },
        function (e) {
          h = e.default;
        },
        function (e) {
          f = e.EvoUserInfor;
        },
        function (e) {
          m = e.EvoManager;
        },
        function (e) {
          p = e.EvoSoundManager;
        },
        function (e) {
          d = e.default;
        },
        function (e) {
          W = e.PersistManager;
        },
        function (e) {
          V = e.NativeHelper;
        },
      ],
      execute: function () {
        var C, g, G, H, I, P, y, M, O, S, _, E, R, L;
        s._RF.push({}, "3c250eGs/FN+oTc2H/Il9cK", "WebviewController", void 0);
        var T = l.ccclass,
          z = l.property;
        e(
          "WebviewController",
          ((C = T("WebviewController")),
          (g = z(a)),
          (G = z(r)),
          (H = z(r)),
          (I = z(b)),
          (P = z(w)),
          C(
            (((L = (function (e) {
              function i() {
                for (
                  var i, t = arguments.length, s = new Array(t), l = 0;
                  l < t;
                  l++
                )
                  s[l] = arguments[l];
                return (
                  (i = e.call.apply(e, [this].concat(s)) || this),
                  n(i, "webViewGame", O, o(i)),
                  n(i, "btnCloseWebview", S, o(i)),
                  n(i, "btnCloseWebviewHtml", _, o(i)),
                  n(i, "webViewPrefab", E, o(i)),
                  n(i, "parent_webview", R, o(i)),
                  (i.isKeepPosition = !1),
                  (i.isOrientation = !1),
                  i
                );
              }
              t(i, e),
                (i.getInstance = function () {
                  return this._instance;
                });
              var s = i.prototype;
              return (
                (s.onLoad = function () {
                  var e = this;
                  (i._instance = this),
                    (this.isKeepPosition = !1),
                    (this.isOrientation = !1),
                    this.btnCloseWebview &&
                      this.btnCloseWebview.node.on(
                        "click",
                        function () {
                          e.closeWebView();
                        },
                        this
                      ),
                    this.btnCloseWebviewHtml &&
                      this.btnCloseWebviewHtml.node.on(
                        "click",
                        function () {
                          e.closeWebView();
                        },
                        this
                      );
                }),
                (s.openWebView = function (e) {
                  var i = this;
                  if (
                    (this.webViewGame &&
                      (this.webViewGame.destroy(), (this.webViewGame = null)),
                    this.webViewPrefab)
                  ) {
                    var t = c(this.webViewPrefab);
                    (t.parent = this.parent_webview),
                      (this.webViewGame = t.getComponent(a));
                    var n = !1,
                      o = u.isNative,
                      s = d.isIOS(),
                      l = d.isAndroid(),
                      r = d.isTablet(),
                      b = d.isIPhone(),
                      w =
                        u.isBrowser && u.platform === u.Platform.MOBILE_BROWSER,
                      v = e;
                    if (this.webViewGame) {
                      if (o && s && r) {
                        var f = encodeURIComponent(e);
                        (v = h.GetHtml() + "?url=" + f + "&isLandscape=true"),
                          (this.webViewGame.url = v),
                          this.btnCloseWebviewHtml &&
                            (this.btnCloseWebviewHtml.node.active = !0),
                          (n = !1);
                      } else if (o && l && r) {
                        var C = encodeURIComponent(e);
                        (v = h.GetHtml() + "?url=" + C + "&isLandscape=false"),
                          (this.webViewGame.url = v),
                          (n = !0),
                          V.setDeviceOrientation(1),
                          (this.isOrientation = !0);
                      } else if (o && (b || (l && !r))) {
                        var g = encodeURIComponent(e);
                        (v = h.GetHtml() + "?url=" + g + "&isLandscape=false"),
                          (this.webViewGame.url = v),
                          (n = !0);
                      } else if (w)
                        if (r) {
                          var G = encodeURIComponent(e);
                          (v = h.GetHtml() + "?url=" + G + "&isLandscape=true"),
                            (this.webViewGame.url = v),
                            this.btnCloseWebviewHtml &&
                              (this.btnCloseWebviewHtml.node.active = !0),
                            (n = !1);
                        } else (this.webViewGame.url = e), (n = !0);
                      else (this.webViewGame.url = e), (n = !0);
                      this.webViewGame.scheduleOnce(function () {
                        var e, t, o, s;
                        n &&
                          i.btnCloseWebview &&
                          (i.btnCloseWebview.node.active = !0),
                          i.MoveToWebViewCenter(),
                          null == (e = W.getInstance()) ||
                            null == (t = e.loading) ||
                            t.hide(),
                          null == (o = m.getInstance()) ||
                            o.onSetactiveMainCanvas(!1),
                          null == (s = p.getInstance()) ||
                            s.handleWebViewSound(!0);
                      }, 2);
                    }
                  } else console.log("webViewPrefab is null");
                }),
                (s.closeWebView = function () {
                  var e, i, t, n, o;
                  (this.btnCloseWebview &&
                    (this.btnCloseWebview.node.active = !1),
                  this.btnCloseWebviewHtml &&
                    (this.btnCloseWebviewHtml.node.active = !1),
                  this.webViewGame) &&
                    ((this.webViewGame.url = ""),
                    this.MoveToWebViewOutSide(),
                    null == (o = m.getInstance()) ||
                      o.onSetactiveMainCanvas(!0));
                  null == (e = W.getInstance()) ||
                    null == (i = e.loading) ||
                    i.hide(),
                    null == (t = p.getInstance()) || t.handleWebViewSound(!1),
                    null == (n = f.getInstance()) || n.sendRefreshMoney(),
                    this.isOrientation &&
                      (V.setDeviceOrientation(0), (this.isOrientation = !1));
                }),
                (s.MoveToWebViewCenter = function () {
                  this.webViewGame && this.webViewGame.node.setPosition(0, 0),
                    (this.isKeepPosition = !0);
                }),
                (s.MoveToWebViewOutSide = function () {
                  this.webViewGame &&
                    this.webViewGame.node.setPosition(3e3, 3e3),
                    (this.isKeepPosition = !1);
                }),
                (s.update = function (e) {
                  this.isKeepPosition && this.MoveToWebViewCenter();
                }),
                (s.onDestroy = function () {
                  var e = this;
                  this.btnCloseWebview &&
                    this.btnCloseWebview.node.off(
                      "click",
                      function () {
                        e.closeWebView();
                      },
                      this
                    ),
                    this.btnCloseWebviewHtml &&
                      this.btnCloseWebviewHtml.node.off(
                        "click",
                        function () {
                          e.closeWebView();
                        },
                        this
                      );
                }),
                i
              );
            })(v))._instance = void 0),
            (O = i((M = L).prototype, "webViewGame", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(M.prototype, "btnCloseWebview", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = i(M.prototype, "btnCloseWebviewHtml", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = i(M.prototype, "webViewPrefab", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = i(M.prototype, "parent_webview", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = M))
          ) || y)
        );
        s._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/ncc_evo_games",
    "chunks:///_virtual/ncc_evo_games"
  );
})(function (mid, cid) {
  System.register(mid, [cid], function (_export, _context) {
    return {
      setters: [
        function (_m) {
          var _exportObj = {};

          for (var _key in _m) {
            if (_key !== "default" && _key !== "__esModule")
              _exportObj[_key] = _m[_key];
          }

          _export(_exportObj);
        },
      ],
      execute: function () {},
    };
  });
});
