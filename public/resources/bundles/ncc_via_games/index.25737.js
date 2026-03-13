System.register(
  "chunks:///_virtual/ApiService3.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ViaGameConfig.ts",
    "./ViaGameHTTPManager.ts",
    "./PersistManager.ts",
  ],
  function (e) {
    "use strict";
    var n, t, r, s, o, i, c, u, a;
    return {
      setters: [
        function (e) {
          (n = e.inheritsLoose), (t = e.extends);
        },
        function (e) {
          (r = e.cclegacy), (s = e._decorator), (o = e.log), (i = e.Component);
        },
        function (e) {
          c = e.default;
        },
        function (e) {
          u = e.default;
        },
        function (e) {
          a = e.PersistManager;
        },
      ],
      execute: function () {
        var l;
        r._RF.push({}, "31271uyhLdOpqikmwPxzz1c", "ApiService", void 0);
        var f = s.ccclass;
        s.property,
          e(
            "ApiService",
            f("ApiService")(
              (l = (function (e) {
                function r() {
                  return e.apply(this, arguments) || this;
                }
                return (
                  n(r, e),
                  (r.sendRefreshMoney = function (e, n) {
                    var t = c.build(c.PROVIDER.REFRESH_MONEY),
                      r = c.AccessToken;
                    u.getInstance().sendGetHttpRequestWithAuthorization(
                      t,
                      r,
                      function (n) {
                        o("[refreshMoney] success:", n), e(n);
                      },
                      function (e) {
                        console.error("[refreshMoney] error:", e), n(e);
                      }
                    );
                  }),
                  (r.getProviderGames = function (e, n) {
                    var t,
                      r,
                      s = c.build(c.PROVIDER.LIST_GAMES),
                      i = c.AccessToken;
                    null == (t = a.getInstance()) ||
                      null == (r = t.loading) ||
                      r.show(),
                      u.getInstance().sendGetHttpRequestWithAuthorization(
                        s,
                        i,
                        function (n) {
                          o("[getProviderGames] success:", n), e(n);
                        },
                        function (e) {
                          console.error("[getProviderGames] error:", e), n(e);
                        }
                      );
                  }),
                  (r.getGameUrl = function (e, n, r) {
                    var s, i;
                    null == (s = a.getInstance()) ||
                      null == (i = s.loading) ||
                      i.show();
                    var l = c.build(c.PROVIDER.GET_GAME_URL),
                      f = c.AccessToken,
                      g = JSON.stringify(t({}, e));
                    u.getInstance().sendPostHttpRequestWithAuthoriztion(
                      l,
                      f,
                      g,
                      function (e) {
                        o("[getGameUrl] success:", e), n(e);
                      },
                      function (e) {
                        console.error("[getGameUrl] error:", e), r(e);
                      }
                    );
                  }),
                  r
                );
              })(i))
            ) || l
          );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GameItem3.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ApiService3.ts",
    "./ViaGameConfig.ts",
    "./WebviewController3.ts",
    "./PersistManager.ts",
    "./ViaDeviceHelper.ts",
  ],
  function (e) {
    "use strict";
    var t, n, a, o, r, i, l, m, s, c, u, p, d, g, f, I, v;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (a = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (i = e._decorator),
            (l = e.Button),
            (m = e.Sprite),
            (s = e.sys),
            (c = e.Color),
            (u = e.log),
            (p = e.Component);
        },
        function (e) {
          d = e.ApiService;
        },
        function (e) {
          g = e.default;
        },
        function (e) {
          f = e.WebviewController;
        },
        function (e) {
          I = e.PersistManager;
        },
        function (e) {
          v = e.default;
        },
      ],
      execute: function () {
        var h, G, b, C, D, w, O, R, S;
        r._RF.push({}, "4decf9MSCxCrYth+dw4zIt3", "GameItem", void 0);
        var y = i.ccclass,
          L = i.property;
        e(
          "GameItem",
          ((h = y("GameItem")),
          (G = L(String)),
          (b = L(l)),
          (C = L(m)),
          h(
            ((O = t(
              (w = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, r = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    r[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    a(t, "gameId", O, o(t)),
                    a(t, "btnOpenGame", R, o(t)),
                    a(t, "iconSprite", S, o(t)),
                    (t.gameData = null),
                    t
                  );
                }
                n(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    var e = this;
                    this.btnOpenGame &&
                      this.btnOpenGame.node.on("click", function () {
                        if (
                          s.isBrowser &&
                          s.platform === s.Platform.MOBILE_BROWSER
                        )
                          if (v.isIPad()) {
                            if (null == e.gameData || null == e.gameData)
                              return;
                            var t =
                              g.GetHtmlLadingPage() +
                              "?providerId=" +
                              encodeURIComponent(e.gameData.providerId) +
                              "&productId=" +
                              encodeURIComponent(e.gameData.productId) +
                              "&gameCode=" +
                              encodeURIComponent(e.gameData.gameCode) +
                              "&gameName=" +
                              encodeURIComponent(e.gameData.gameName) +
                              "&tokenAuthorization=" +
                              encodeURIComponent(g.AccessToken);
                            s.openURL(t);
                          } else {
                            var n = window.open("", "_blank");
                            e.onGetOpenGame(n);
                          }
                        else e.onGetOpenGame(null);
                      });
                  }),
                  (r.onSetData = function (e) {
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
                          (this.iconSprite.color = new c(255, 255, 255, 225)));
                  }),
                  (r.onGetOpenGame = function (e) {
                    if (this.gameData) {
                      var t = {
                        providerId: this.gameData.providerId,
                        productId: this.gameData.productId,
                        gameCode: this.gameData.gameCode,
                        gameName: this.gameData.gameName,
                        extra: {},
                      };
                      d.getGameUrl(
                        t,
                        function (t) {
                          var n, a, o, r;
                          (u("[GameItem] URL game received:", t),
                          console.log(
                            "url response " +
                              (null == (n = t.data) ? void 0 : n.url)
                          ),
                          s.isBrowser &&
                            s.platform === s.Platform.MOBILE_BROWSER)
                            ? null == e ||
                              e.location.assign(
                                null == (r = t.data) ? void 0 : r.url
                              )
                            : null == (a = f.getInstance()) ||
                              a.openWebView(
                                null == (o = t.data) ? void 0 : o.url
                              );
                        },
                        function (e) {
                          var t, n;
                          console.error("[GameItem] Error get URL:", e),
                            null == (t = I.getInstance()) ||
                              null == (n = t.loading) ||
                              n.hide();
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
              })(p)).prototype,
              "gameId",
              [G],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "";
                },
              }
            )),
            (R = t(w.prototype, "btnOpenGame", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = t(w.prototype, "iconSprite", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = w))
          ) || D)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ncc_via_games",
  [
    "./ApiService3.ts",
    "./GameItem3.ts",
    "./ViaGameHTTPManager.ts",
    "./NodeSafeArea3.ts",
    "./SoundButtonComponent3.ts",
    "./ViaDeviceHelper.ts",
    "./ViaStringUtils.ts",
    "./ViaCanvas.ts",
    "./ViaGameConfig.ts",
    "./ViaManager.ts",
    "./ViaPortraitCanvasScaleByOrientation.ts",
    "./ViaPortraitCustomCanvasSize.ts",
    "./ViaSoundManager.ts",
    "./ViaUserInfor.ts",
    "./WebviewController3.ts",
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
  "chunks:///_virtual/NodeSafeArea3.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, r, i, n, o, a, u, c, s;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (a = e._decorator),
            (u = e.Widget),
            (c = e.sys),
            (s = e.Component);
        },
      ],
      execute: function () {
        var l, p, d, f, h, N, g;
        o._RF.push({}, "63371WvxrZCva820nt2b8Bu", "NodeSafeArea", void 0);
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
                    var t, r = arguments.length, o = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    i(t, "widgetNode", N, n(t)),
                    i(t, "notchNumber", g, n(t)),
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
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SoundButtonComponent3.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./ViaSoundManager.ts"],
  function (n) {
    "use strict";
    var t, o, e, u, c;
    return {
      setters: [
        function (n) {
          t = n.inheritsLoose;
        },
        function (n) {
          (o = n.cclegacy), (e = n._decorator), (u = n.Component);
        },
        function (n) {
          c = n.ViaSoundManager;
        },
      ],
      execute: function () {
        var r;
        o._RF.push(
          {},
          "31c72QRdh5EZbSdAtMEpydv",
          "SoundButtonComponent",
          void 0
        );
        var i = e.ccclass;
        e.property,
          n(
            "SoundButtonComponent",
            i("SoundButtonComponent")(
              (r = (function (n) {
                function o() {
                  return n.apply(this, arguments) || this;
                }
                return (
                  t(o, n),
                  (o.prototype.onLoad = function () {
                    this.node.on("click", function () {
                      c.getInstance().playClickSfx();
                    });
                  }),
                  o
                );
              })(u))
            ) || r
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ViaCanvas.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, n, o, a, i, s;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy),
            (o = t._decorator),
            (a = t.view),
            (i = t.UITransform),
            (s = t.Component);
        },
      ],
      execute: function () {
        var r;
        n._RF.push({}, "4f1b5oI3npMiK4FCEuKOTuu", "ViaCanvas", void 0);
        var c = o.ccclass;
        o.property,
          t(
            "ViaCanvas",
            c("ViaCanvas")(
              (r = (function (t) {
                function n() {
                  for (
                    var e, n = arguments.length, o = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    ((e =
                      t.call.apply(t, [this].concat(o)) || this).updateScale =
                      function () {
                        var t = a.getVisibleSize(),
                          n = e.node.getComponent(i);
                        n && n.setContentSize(t.width, t.height);
                      }),
                    e
                  );
                }
                e(n, t);
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

System.register("chunks:///_virtual/ViaDeviceHelper.ts", ["cc"], function (i) {
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
      e._RF.push({}, "ba925HVDZlIJbKoTX6gEX0E", "ViaDeviceHelper", void 0);
      var o = t.ccclass;
      t.property,
        i(
          "default",
          o("ViaDeviceHelper")(
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
  "chunks:///_virtual/ViaGameConfig.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, r, i;
    return {
      setters: [
        function (e) {
          t = e.createClass;
        },
        function (e) {
          (n = e.cclegacy), (r = e._decorator), (i = e.sys);
        },
      ],
      execute: function () {
        var a, o;
        n._RF.push({}, "2db26JotPRGzInXbzaBcf/O", "ViaGameConfig", void 0);
        var s = r.ccclass;
        r.property,
          e(
            "default",
            s("ViaGameConfig")(
              (((o = (function () {
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
                    var n = JSON.parse(t),
                      r = n[e.WebViewUrl],
                      a = n[e.rs_domain];
                    return i.isBrowser ||
                      (i.isBrowser && i.platform === i.Platform.MOBILE_BROWSER)
                      ? window.location.href.split("?")[0] + r
                      : a + r;
                  }),
                  (e.GetHtml = function () {
                    return "dev" == this.currentEnv
                      ? "https://resources.gwin.info/sun-dev-coma/webview/EvoVia.html"
                      : e.GetConfigWebViewUrl();
                  }),
                  (e.GetHtmlLadingPage = function () {
                    return (
                      window.location.href.split("?")[0] +
                      "internal/livestream_page/landingPage_via.html"
                    );
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
              (o.LOCALE = "vi"),
              (o.WebViewUrl = "ncc_games"),
              (o.rs_domain = "rs_domain"),
              (o.ENVIRONMENTS = {
                dev: "https://api100.atpman.net/gameapi-prerelease",
                prod: "https://api100.atpman.net/gameapi",
              }),
              (o.currentEnv = "prod"),
              (o.PROVIDER = {
                REFRESH_MONEY: "/public/user/refresh-money",
                LIST_GAMES: "/public/providers/games",
                GET_GAME_URL: "/public/providers/get-url",
              }),
              (a = o))
            ) || a
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ViaGameHTTPManager.ts",
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
        var a, r;
        t._RF.push({}, "493dc1IzIBAEY4OVzYJjt8W", "ViaGameHTTPManager", void 0);
        var i = s.ccclass;
        s.property,
          e(
            "default",
            i("ViaGameHTTPManager")(
              (((r = (function () {
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
                    a,
                    r
                  ) {
                    void 0 === r && (r = !1);
                    var i = new XMLHttpRequest();
                    this.activeRequests.push(i),
                      (i.onreadystatechange = function () {
                        if (4 == i.readyState)
                          if (i.status >= 200 && i.status < 400) {
                            e.getInstance().activeRequests = e
                              .getInstance()
                              .activeRequests.filter(function (e) {
                                return e !== i;
                              });
                            var t = r ? atob(i.responseText) : i.responseText,
                              s = JSON.parse(t);
                            n(s);
                          } else {
                            var o;
                            s = null;
                            try {
                              s = JSON.parse(i.responseText);
                            } catch (e) {}
                            (o = s.msg), a(o);
                          }
                      }),
                      (i.onerror = function () {
                        var e,
                          t = null;
                        try {
                          t = JSON.parse(i.responseText);
                        } catch (e) {}
                        (e = t.msg), a(e);
                      }),
                      (i.ontimeout = function () {
                        a("Đã xảy ra lỗi!");
                      }),
                      i.open("GET", t, !0),
                      i.setRequestHeader("Authorization", s),
                      i.send();
                  }),
                  (t.sendPostHttpRequestWithAuthoriztion = function (
                    e,
                    t,
                    s,
                    a,
                    r
                  ) {
                    var i = new XMLHttpRequest();
                    (i.onreadystatechange = function () {
                      if (4 == i.readyState)
                        if (i.status >= 200 && i.status < 400) {
                          n(i.responseText);
                          var e = i.responseText,
                            t = e;
                          try {
                            t = JSON.parse(e);
                          } catch (e) {}
                          a(t);
                        } else {
                          var s;
                          n(i.responseText),
                            n(i.responseText),
                            (s = JSON.parse(i.responseText).msg),
                            r(s);
                        }
                    }),
                      (i.onerror = function () {
                        var e;
                        n(JSON.stringify(i.responseText)),
                          n(i.responseText),
                          (e = JSON.parse(i.responseText).msg),
                          r(e);
                      }),
                      (i.ontimeout = function () {
                        r("Đã xảy ra lỗi!");
                      }),
                      i.open("POST", e, !0),
                      i.setRequestHeader("Content-Type", "application/json"),
                      i.setRequestHeader("Authorization", t),
                      i.send(s);
                  }),
                  e
                );
              })())._instance = void 0),
              (a = r))
            ) || a
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ViaManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameItem3.ts",
    "./ViaGameConfig.ts",
    "./ApiService3.ts",
    "./PersistManager.ts",
    "./MiniGameNodeController.ts",
    "./Define.ts",
  ],
  function (e) {
    "use strict";
    var n, t, i, o, a, r, s, l, c, u, f, m, d, v, h, p, g, G, C, I;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized),
            (a = e.createForOfIteratorHelperLoose),
            (r = e.extends);
        },
        function (e) {
          (s = e.cclegacy),
            (l = e._decorator),
            (c = e.Button),
            (u = e.Node),
            (f = e.log),
            (m = e.director),
            (d = e.macro),
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
          I = e.GameID;
        },
      ],
      execute: function () {
        var b, _, E, L, y, V, A, M, D, R;
        s._RF.push({}, "34b6b75dRlOtqCvQVqwcEkg", "ViaManager", void 0);
        var N = l.ccclass,
          O = l.property;
        e(
          "ViaManager",
          ((b = N("ViaManager")),
          (_ = O(c)),
          (E = O(u)),
          (L = O([h])),
          b(
            (((R = (function (e) {
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
                    "Via Casino"),
                  i(n, "btnClose", A, o(n)),
                  i(n, "mainCanvas", M, o(n)),
                  i(n, "listGameItem", D, o(n)),
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
                        f("Lists game:", n), e.handleGameListResponse(n);
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
                    m.on("LOGGED_IN_OTHER_DEVICE", this.closeGame, this);
                }),
                (s.start = function () {
                  this.schedule(this.onHideMini, 1, d.REPEAT_FOREVER);
                }),
                (s.onHideMini = function () {
                  var e;
                  null == (e = C.getInstance()) ||
                    e.adjustPosition(I.VIA_GAMES);
                }),
                (s.handleGameListResponse = function (e) {
                  var n = this;
                  if (null != e && e.data && Array.isArray(e.data))
                    for (
                      var t,
                        i = e.data.filter(function (e) {
                          return e.providerName === n.providerName;
                        }),
                        o = a(i);
                      !(t = o()).done;

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
                              i = n.listGameItem.find(function (n) {
                                var t, i, o, a;
                                return (
                                  (null == (t = n.gameId) ||
                                  null == (i = t.trim())
                                    ? void 0
                                    : i.toLowerCase()) ===
                                  (null == (o = e.gameCode) ||
                                  null == (a = o.trim())
                                    ? void 0
                                    : a.toLowerCase())
                                );
                              });
                            i
                              ? i.onSetData(t)
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
                  f("Via is closed"),
                    console.log("Via is closed"),
                    m.emit("INTEGRATION_BACK_TO_LOBBY");
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
                    m.off("LOGGED_IN_OTHER_DEVICE", this.closeGame, this);
                }),
                n
              );
            })(v))._instance = void 0),
            (A = n((V = R).prototype, "btnClose", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = n(V.prototype, "mainCanvas", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = n(V.prototype, "listGameItem", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (y = V))
          ) || y)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ViaPortraitCanvasScaleByOrientation.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (i) {
    "use strict";
    var e, t, n, o, s, r, a, h, u, c, l, d, g, w, f, S, R, p, D;
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
            (p = i.Camera),
            (D = i.Component);
        },
      ],
      execute: function () {
        var b, z, m, v, y, O, T, I, N, C, A, E, _, H, P, B, W, F, L, V, M, G, X;
        s._RF.push(
          {},
          "efd01UXcjpJnbImyT55/XNH",
          "ViaPortraitCanvasScaleByOrientation",
          void 0
        );
        var j = r.ccclass,
          K = r.property;
        i(
          "ViaPortraitCanvasScaleByOrientation",
          ((b = j("ViaPortraitCanvasScaleByOrientation")),
          (z = K(a)),
          (m = K(a)),
          (v = K({ type: h })),
          (y = K(a)),
          (O = K(a)),
          (T = K(u)),
          (I = K(u)),
          (N = K({ type: c })),
          (C = K(a)),
          (A = K({ type: u })),
          b(
            ((H = e(
              (_ = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, s = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (e = i.call.apply(i, [this].concat(s)) || this),
                    n(e, "autoOrientation", H, o(e)),
                    n(e, "isPortrait", P, o(e)),
                    n(e, "canvas", B, o(e)),
                    n(e, "fitByOrientation", W, o(e)),
                    n(e, "useCustomDesignResolution", F, o(e)),
                    n(e, "customDSWidth", L, o(e)),
                    n(e, "customDSHeight", V, o(e)),
                    n(e, "widgetNodes", M, o(e)),
                    n(e, "isDebug", G, o(e)),
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
                        e.getComponent(p) || (e.angle = i ? 180 : 0);
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
              })(D)).prototype,
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
            (P = e(_.prototype, "isPortrait", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (B = e(_.prototype, "canvas", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = e(_.prototype, "fitByOrientation", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (F = e(_.prototype, "useCustomDesignResolution", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (L = e(_.prototype, "customDSWidth", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1280;
              },
            })),
            (V = e(_.prototype, "customDSHeight", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 720;
              },
            })),
            (M = e(_.prototype, "widgetNodes", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (G = e(_.prototype, "isDebug", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (X = e(_.prototype, "minScreenRatio", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (E = _))
          ) || E)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ViaPortraitCustomCanvasSize.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ViaPortraitCanvasScaleByOrientation.ts",
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
          h = t.ViaPortraitCanvasScaleByOrientation;
        },
      ],
      execute: function () {
        var d, v, p, f, g;
        a._RF.push(
          {},
          "7edca5F/k5F+JyjNx0gJ2V3",
          "ViaPortraitCustomCanvasSize",
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
  "chunks:///_virtual/ViaSoundManager.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./Define.ts"],
  function (i) {
    "use strict";
    var t, n, e, s, a, o, c, r, u, l;
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
            (c = i.AudioSource),
            (r = i.sys),
            (u = i.Component);
        },
        function (i) {
          l = i.StorageKey;
        },
      ],
      execute: function () {
        var f, g, h, m, p, _, b, S;
        a._RF.push({}, "15819K/+ZNLr5f+gCYH86QG", "ViaSoundManager", void 0);
        var y = o.ccclass,
          d = o.property;
        i(
          "ViaSoundManager",
          ((f = y("ViaSoundManager")),
          (g = d(c)),
          (h = d(c)),
          f(
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
                  e(t, "sfx_click", _, s(t)),
                  e(t, "bgm_main", b, s(t)),
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
                    "1" == r.localStorage.getItem(l.Music) ||
                    "true" == localStorage.getItem(l.Music)),
                    (this.isSfxOn =
                      "1" == r.localStorage.getItem(l.SoundFX) ||
                      "true" == localStorage.getItem(l.SoundFX)),
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
            })(u))._instance = null),
            (_ = t((p = S).prototype, "sfx_click", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = t(p.prototype, "bgm_main", [h], {
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

System.register("chunks:///_virtual/ViaStringUtils.ts", ["cc"], function (t) {
  "use strict";
  var r, n;
  return {
    setters: [
      function (t) {
        (r = t.cclegacy), (n = t._decorator);
      },
    ],
    execute: function () {
      var i;
      r._RF.push({}, "71ff4Qu7PpJ7bRahJ0l7AKN", "ViaStringUtils", void 0);
      var e = n.ccclass;
      n.property,
        t(
          "ViaStringUtils",
          e("ViaStringUtils")(
            (i = (function () {
              function t() {}
              return (
                (t.round = function (t, r) {
                  var n = t.toString().split(".");
                  if (1 == n.length) return t.toString();
                  if (2 == n.length) {
                    for (
                      var i = t.toFixed(r);
                      "0" == i[i.length - 1] || "." == i[i.length - 1];

                    )
                      i = i.substr(0, i.length - 1);
                    return i;
                  }
                  return "0";
                }),
                (t.formatMoneyNumberWithComma = function (t, r) {
                  void 0 === r && (r = 2);
                  var n = !1;
                  if ((t < 0 && ((t *= -1), (n = !0)), t < 1e3)) {
                    var i = this.round(t, r);
                    return 1 == n && (i = "-" + i), i;
                  }
                  for (
                    var e = "",
                      u = this.round(t, r).split("."),
                      o = u[0],
                      l = o.length;
                    l >= 0;
                    l -= 3
                  ) {
                    if (l - 3 <= 0) {
                      e = o.slice(0, l) + e;
                      break;
                    }
                    e = "," + o.slice(l - 3, l) + e;
                  }
                  return (
                    u.length > 1 && (e += "." + u[1]),
                    1 == n && (e = "-" + e),
                    e
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
          ) || i
        );
      r._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/ViaUserInfor.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ViaStringUtils.ts",
    "./ApiService3.ts",
    "./State.ts",
  ],
  function (e) {
    "use strict";
    var n, a, t, r, i, o, s, l, c, u, f, p, h, d, y;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (a = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy),
            (o = e._decorator),
            (s = e.Sprite),
            (l = e.SpriteFrame),
            (c = e.Label),
            (u = e.systemEvent),
            (f = e.log),
            (p = e.Component);
        },
        function (e) {
          h = e.ViaStringUtils;
        },
        function (e) {
          d = e.ApiService;
        },
        function (e) {
          y = e.state;
        },
      ],
      execute: function () {
        var m, v, g, b, _, U, R, M, F, S, A, L;
        i._RF.push({}, "b3500HjUudIpamNagKhtZF+", "ViaUserInfor", void 0);
        var w = o.ccclass,
          E = o.property;
        e(
          "ViaUserInfor",
          ((m = w("ViaUserInfor")),
          (v = E(s)),
          (g = E([l])),
          (b = E(c)),
          (_ = E(c)),
          m(
            (((L = (function (e) {
              function n() {
                for (
                  var n, a = arguments.length, i = new Array(a), o = 0;
                  o < a;
                  o++
                )
                  i[o] = arguments[o];
                return (
                  (n = e.call.apply(e, [this].concat(i)) || this),
                  t(n, "spr_avatar", M, r(n)),
                  t(n, "sprFrame_avatar", F, r(n)),
                  t(n, "lbl_money", S, r(n)),
                  t(n, "lbl_displayname", A, r(n)),
                  n
                );
              }
              a(n, e),
                (n.getInstance = function () {
                  return this._instance;
                });
              var i = n.prototype;
              return (
                (i.onLoad = function () {
                  (n._instance = this),
                    u.on("REFRESH_MONEY", this.handleRefreshMoney, this),
                    u.on("update-money", this.handleRefreshMoney, this),
                    this.onGetAvatarUser(),
                    this.onGetMoneyUser(),
                    this.onGetNameUser();
                }),
                (i.sendRefreshMoney = function () {
                  var e = this;
                  d.sendRefreshMoney(
                    function (n) {
                      null !== n.data
                        ? void 0 !== n.data.balance
                          ? (console.log("balance user " + n.data.balance),
                            (y.gold = n.data.balance),
                            e.onGetMoneyUser())
                          : console.log("Balance is undefined:", n)
                        : console.log(n.message);
                    },
                    function (e) {
                      console.error("Error when call API:", e);
                    }
                  );
                }),
                (i.onGetAvatarUser = function () {
                  if (this.sprFrame_avatar)
                    if (y.avatarURL) {
                      var e = y.avatarURL.split("/"),
                        n = e[e.length - 1];
                      if (n) {
                        var a = this.sprFrame_avatar.filter(function (e) {
                          return n.indexOf(e.name) >= 0;
                        });
                        this.spr_avatar
                          ? (this.spr_avatar.spriteFrame =
                              a.length > 0
                                ? a[0]
                                : a[this.sprFrame_avatar.length - 1])
                          : f("---- Sprite avatar is null");
                      } else console.warn("---- avatarName invalid");
                    } else console.warn("---- avatarURL is empty");
                  else console.log("---- sprFrame avatar is null");
                }),
                (i.onGetMoneyUser = function () {
                  this.lbl_money
                    ? (this.lbl_money.string = h.formatMoneyNumberWithComma(
                        y.gold
                      ))
                    : f("---- Label money is null");
                }),
                (i.onGetNameUser = function () {
                  this.lbl_displayname
                    ? (this.lbl_displayname.string = h.shorten(y.displayName))
                    : f("---- Label displayname is null");
                }),
                (i.handleRefreshMoney = function (e) {
                  if ("number" == typeof e) y.gold = e;
                  else if (e.As) {
                    var n = e.As,
                      a = n.gold,
                      t = n.safe;
                    (y.gold = a), (y.goldSafe = t);
                  } else if (e[1] && e[1].As) {
                    var r = e[1].As,
                      i = r.gold,
                      o = r.safe;
                    (y.gold = i), (y.goldSafe = o);
                  }
                  this.onGetMoneyUser();
                }),
                (i.onDestroy = function () {
                  u.off("REFRESH_MONEY", this.handleRefreshMoney, this),
                    u.off("update-money", this.handleRefreshMoney, this);
                }),
                n
              );
            })(p))._instance = void 0),
            (M = n((R = L).prototype, "spr_avatar", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = n(R.prototype, "sprFrame_avatar", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = n(R.prototype, "lbl_money", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = n(R.prototype, "lbl_displayname", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = R))
          ) || U)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WebviewController3.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ViaUserInfor.ts",
    "./ViaManager.ts",
    "./ViaSoundManager.ts",
    "./PersistManager.ts",
    "./ViaDeviceHelper.ts",
    "./ViaGameConfig.ts",
  ],
  function (e) {
    "use strict";
    var i, t, n, o, s, a, l, r, b, w, u, c, f, h, v, m, p, V, d;
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
            (a = e._decorator),
            (l = e.WebView),
            (r = e.Button),
            (b = e.Prefab),
            (w = e.Node),
            (u = e.instantiate),
            (c = e.sys),
            (f = e.Component);
        },
        function (e) {
          h = e.ViaUserInfor;
        },
        function (e) {
          v = e.ViaManager;
        },
        function (e) {
          m = e.ViaSoundManager;
        },
        function (e) {
          p = e.PersistManager;
        },
        function (e) {
          V = e.default;
        },
        function (e) {
          d = e.default;
        },
      ],
      execute: function () {
        var W, C, g, P, G, I, M, R, S, y, O, _, B, E;
        s._RF.push({}, "ca2e3NQst5OIq5Rtla8leqg", "WebviewController", void 0);
        var H = a.ccclass,
          T = a.property;
        e(
          "WebviewController",
          ((W = H("WebviewController")),
          (C = T(l)),
          (g = T(r)),
          (P = T(r)),
          (G = T(b)),
          (I = T(w)),
          W(
            (((E = (function (e) {
              function i() {
                for (
                  var i, t = arguments.length, s = new Array(t), a = 0;
                  a < t;
                  a++
                )
                  s[a] = arguments[a];
                return (
                  (i = e.call.apply(e, [this].concat(s)) || this),
                  n(i, "webViewGame", S, o(i)),
                  (i.isPlatform = null),
                  n(i, "btnCloseWebview", y, o(i)),
                  n(i, "btnCloseWebviewHtml", O, o(i)),
                  n(i, "webViewPrefab", _, o(i)),
                  n(i, "parent_webview", B, o(i)),
                  (i.isKeepPosition = !1),
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
                    var t = u(this.webViewPrefab);
                    (t.parent = this.parent_webview),
                      (this.webViewGame = t.getComponent(l));
                    var n = !1,
                      o = c.isNative,
                      s = V.isAndroid(),
                      a = V.isIPad(),
                      r = V.isIPhone();
                    if (o && a) {
                      var b = encodeURIComponent(e),
                        w = d.GetHtml() + "?url=" + b + "&isLandscape=true";
                      this.webViewGame && (this.webViewGame.url = w),
                        this.btnCloseWebviewHtml &&
                          (this.btnCloseWebviewHtml.node.active = !0),
                        (n = !1);
                    } else if (o && (r || s)) {
                      var f = encodeURIComponent(e),
                        h = d.GetHtml() + "?url=" + f + "&isLandscape=false";
                      this.webViewGame && (this.webViewGame.url = h), (n = !0);
                    } else
                      this.webViewGame && (this.webViewGame.url = e), (n = !0);
                    this.webViewGame &&
                      this.webViewGame.scheduleOnce(function () {
                        var e, t, o, s;
                        n &&
                          i.btnCloseWebview &&
                          (i.btnCloseWebview.node.active = !0),
                          i.MoveToWebViewCenter(),
                          null == (e = p.getInstance()) ||
                            null == (t = e.loading) ||
                            t.hide(),
                          null == (o = v.getInstance()) ||
                            o.onSetactiveMainCanvas(!1),
                          null == (s = m.getInstance()) ||
                            s.handleWebViewSound(!0);
                      }, 2);
                  } else console.log("webViewPrefab is null");
                }),
                (s.closeWebView = function () {
                  var e, i, t, n, o;
                  (this.btnCloseWebview &&
                    (this.btnCloseWebview.node.active = !1),
                  this.webViewGame) &&
                    ((this.webViewGame.url = ""),
                    this.MoveToWebViewOutSide(),
                    null == (o = v.getInstance()) ||
                      o.onSetactiveMainCanvas(!0));
                  null == (e = p.getInstance()) ||
                    null == (i = e.loading) ||
                    i.hide(),
                    null == (t = m.getInstance()) || t.handleWebViewSound(!1),
                    null == (n = h.getInstance()) || n.sendRefreshMoney();
                }),
                (s.MoveToWebViewCenter = function () {
                  this.webViewGame && this.webViewGame.node.setPosition(0, 0),
                    !c.isBrowser ||
                      (c.platform !== c.Platform.MOBILE_BROWSER &&
                        c.platform !== c.Platform.DESKTOP_BROWSER) ||
                      (this.isKeepPosition = !0);
                }),
                (s.MoveToWebViewOutSide = function () {
                  this.webViewGame &&
                    this.webViewGame.node.setPosition(3e3, 3e3),
                    !c.isBrowser ||
                      (c.platform !== c.Platform.MOBILE_BROWSER &&
                        c.platform !== c.Platform.DESKTOP_BROWSER) ||
                      (this.isKeepPosition = !1);
                }),
                (s.update = function (e) {
                  !c.isBrowser ||
                    (c.platform !== c.Platform.MOBILE_BROWSER &&
                      c.platform !== c.Platform.DESKTOP_BROWSER) ||
                    (this.isKeepPosition && this.MoveToWebViewCenter());
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
            })(f))._instance = void 0),
            (S = i((R = E).prototype, "webViewGame", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = i(R.prototype, "btnCloseWebview", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = i(R.prototype, "btnCloseWebviewHtml", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = i(R.prototype, "webViewPrefab", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = i(R.prototype, "parent_webview", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = R))
          ) || M)
        );
        s._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/ncc_via_games",
    "chunks:///_virtual/ncc_via_games"
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
