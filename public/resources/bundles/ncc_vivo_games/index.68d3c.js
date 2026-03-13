System.register(
  "chunks:///_virtual/ApiService4.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./VivoGameConfig.ts",
    "./VivoGameHTTPManager.ts",
    "./PersistManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, r, o, s, i, c, u, a;
    return {
      setters: [
        function (e) {
          (t = e.inheritsLoose), (n = e.extends);
        },
        function (e) {
          (r = e.cclegacy), (o = e._decorator), (s = e.log), (i = e.Component);
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
        r._RF.push({}, "00790s6a5BO2qt8XOipj+z2", "ApiService", void 0);
        var f = o.ccclass;
        o.property,
          e(
            "ApiService",
            f("ApiService")(
              (l = (function (e) {
                function r() {
                  return e.apply(this, arguments) || this;
                }
                return (
                  t(r, e),
                  (r.sendRefreshMoney = function (e, t) {
                    var n = c.build(c.PROVIDER.REFRESH_MONEY),
                      r = c.AccessToken;
                    u.getInstance().sendGetHttpRequestWithAuthorization(
                      n,
                      r,
                      function (t) {
                        s("[refreshMoney] success:", t), e(t);
                      },
                      function (e) {
                        console.error("[refreshMoney] error:", e), t(e);
                      }
                    );
                  }),
                  (r.getProviderGames = function (e, t) {
                    var n,
                      r,
                      o = c.build(c.PROVIDER.LIST_GAMES),
                      i = c.AccessToken;
                    null == (n = a.getInstance()) ||
                      null == (r = n.loading) ||
                      r.show(),
                      u.getInstance().sendGetHttpRequestWithAuthorization(
                        o,
                        i,
                        function (t) {
                          s("[getProviderGames] success:", t), e(t);
                        },
                        function (e) {
                          console.error("[getProviderGames] error:", e), t(e);
                        }
                      );
                  }),
                  (r.getGameUrl = function (e, t, r) {
                    var o, i;
                    null == (o = a.getInstance()) ||
                      null == (i = o.loading) ||
                      i.show();
                    var l = c.build(c.PROVIDER.GET_GAME_URL),
                      f = c.AccessToken,
                      g = JSON.stringify(n({}, e));
                    u.getInstance().sendPostHttpRequestWithAuthoriztion(
                      l,
                      f,
                      g,
                      function (e) {
                        s("[getGameUrl] success:", e), t(e);
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
  "chunks:///_virtual/GameItem4.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ApiService4.ts",
    "./WebviewController4.ts",
    "./VivoGameConfig.ts",
    "./PersistManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, a, r, o, i, l, s, u, c, m, p, d, g, f, v;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (a = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (i = e._decorator),
            (l = e.Button),
            (s = e.Sprite),
            (u = e.sys),
            (c = e.Color),
            (m = e.log),
            (p = e.Component);
        },
        function (e) {
          d = e.ApiService;
        },
        function (e) {
          g = e.WebviewController;
        },
        function (e) {
          f = e.default;
        },
        function (e) {
          v = e.PersistManager;
        },
      ],
      execute: function () {
        var h, b, G, I, O, w, y, S, C;
        o._RF.push({}, "4915eU3V+lKdpFy6RI3HkWr", "GameItem", void 0);
        var L = i.ccclass,
          D = i.property;
        e(
          "GameItem",
          ((h = L("GameItem")),
          (b = D(String)),
          (G = D(l)),
          (I = D(s)),
          h(
            ((y = t(
              (w = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    a(t, "gameId", y, r(t)),
                    a(t, "btnOpenGame", S, r(t)),
                    a(t, "iconSprite", C, r(t)),
                    (t.gameData = null),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    var e = this;
                    this.btnOpenGame &&
                      this.btnOpenGame.node.on("click", function () {
                        if (
                          u.isBrowser &&
                          u.platform === u.Platform.MOBILE_BROWSER
                        ) {
                          var t = window.open("", "_blank");
                          e.onGetOpenGame(t);
                        } else e.onGetOpenGame(null);
                      });
                  }),
                  (o.onSetData = function (e) {
                    var t, n, a, r;
                    (this.gameData = e),
                      (null == e ||
                      null == (t = e.gameCode) ||
                      null == (n = t.trim())
                        ? void 0
                        : n.toLowerCase()) ===
                        (null == (a = this.gameId) || null == (r = a.trim())
                          ? void 0
                          : r.toLowerCase()) &&
                        (console.log(
                          "game data is setted => " + JSON.stringify(e, null, 2)
                        ),
                        this.btnOpenGame &&
                          (this.btnOpenGame.interactable = !0),
                        this.iconSprite &&
                          (this.iconSprite.color = new c(255, 255, 255, 225)));
                  }),
                  (o.onGetOpenGame = function (e) {
                    if (this.gameData) {
                      var t = {
                        providerId: this.gameData.providerId,
                        productId: this.gameData.productId,
                        gameCode: this.gameData.gameCode,
                        extra: { lang: f.LOCALE },
                      };
                      d.getGameUrl(
                        t,
                        function (t) {
                          var n, a, r, o;
                          (m("[GameItem] URL game received:", t),
                          console.log(
                            "url response " +
                              (null == (n = t.data) ? void 0 : n.url)
                          ),
                          u.isBrowser &&
                            u.platform === u.Platform.MOBILE_BROWSER)
                            ? null == e ||
                              e.location.assign(
                                null == (o = t.data) ? void 0 : o.url
                              )
                            : null == (a = g.getInstance()) ||
                              a.openWebView(
                                null == (r = t.data) ? void 0 : r.url
                              );
                        },
                        function (e) {
                          var t, n;
                          console.error("[GameItem] Error get URL:", e),
                            null == (t = v.getInstance()) ||
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
              [b],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "";
                },
              }
            )),
            (S = t(w.prototype, "btnOpenGame", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = t(w.prototype, "iconSprite", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = w))
          ) || O)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ncc_vivo_games",
  [
    "./ApiService4.ts",
    "./GameItem4.ts",
    "./VivoGameHTTPManager.ts",
    "./NodeSafeArea4.ts",
    "./SoundButtonComponent4.ts",
    "./VivoStringUtils.ts",
    "./VivoCanvas.ts",
    "./VivoGameConfig.ts",
    "./VivoManager.ts",
    "./VivoPortraitCanvasScaleByOrientation.ts",
    "./VivoPortraitCustomCanvasSize.ts",
    "./VivoSoundManager.ts",
    "./VivoUserInfor.ts",
    "./WebviewController4.ts",
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
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/NodeSafeArea4.ts",
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
        var l, d, p, f, h, N, g;
        n._RF.push({}, "c7887kFuPJFvLduGuCyjhYa", "NodeSafeArea", void 0);
        var y = a.ccclass,
          b = a.property;
        e(
          "NodeSafeArea",
          ((l = y("NodeSafeArea")),
          (d = b(u)),
          (p = b(Number)),
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
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (g = t(h.prototype, "notchNumber", [p], {
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
  "chunks:///_virtual/SoundButtonComponent4.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./VivoSoundManager.ts"],
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
          c = n.VivoSoundManager;
        },
      ],
      execute: function () {
        var r;
        t._RF.push(
          {},
          "f8196+wHHxD4L6MxWCAIkGp",
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
  "chunks:///_virtual/VivoCanvas.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, n, o, i, a, s;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy),
            (o = t._decorator),
            (i = t.view),
            (a = t.UITransform),
            (s = t.Component);
        },
      ],
      execute: function () {
        var r;
        n._RF.push({}, "91dc3N8gPpOOL/QCR0OxbRu", "VivoCanvas", void 0);
        var c = o.ccclass;
        o.property,
          t(
            "VivoCanvas",
            c("VivoCanvas")(
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
                        var t = i.getVisibleSize(),
                          n = e.node.getComponent(a);
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
                      i.on("design-resolution-changed", this.updateScale, this);
                  }),
                  (o.onDestroy = function () {
                    i.off("design-resolution-changed", this.updateScale, this);
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

System.register(
  "chunks:///_virtual/VivoGameConfig.ts",
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
        r._RF.push({}, "d9d0cQeknxHYKlDDYjMu4Jy", "VivoGameConfig", void 0);
        var a = n.ccclass;
        n.property,
          e(
            "default",
            a("VivoGameConfig")(
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
  "chunks:///_virtual/VivoGameHTTPManager.ts",
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
        t._RF.push(
          {},
          "a3854B2HOtA9oxbsJ0TG4Zf",
          "VivoGameHTTPManager",
          void 0
        );
        var o = s.ccclass;
        s.property,
          e(
            "default",
            o("VivoGameHTTPManager")(
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
  "chunks:///_virtual/VivoManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameItem4.ts",
    "./VivoGameConfig.ts",
    "./ApiService4.ts",
    "./PersistManager.ts",
    "./MiniGameNodeController.ts",
    "./Define.ts",
  ],
  function (e) {
    "use strict";
    var n, t, i, o, a, r, s, l, c, u, f, m, d, v, h, p, g, G, I, C;
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
          I = e.default;
        },
        function (e) {
          C = e.GameID;
        },
      ],
      execute: function () {
        var _, b, y, E, L, M, V, A, D, N;
        s._RF.push({}, "28fd2j2r8ZI+7fZ393U5TVq", "VivoManager", void 0);
        var O = l.ccclass,
          R = l.property;
        e(
          "VivoManager",
          ((_ = O("VivoManager")),
          (b = R(c)),
          (y = R(u)),
          (E = R([h])),
          _(
            (((N = (function (e) {
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
                    "Vivo Gaming"),
                  i(n, "btnClose", V, o(n)),
                  i(n, "mainCanvas", A, o(n)),
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
                  null == (e = I.getInstance()) ||
                    e.adjustPosition(C.VIVO_GAMES);
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
                  f("Sexy is closed"),
                    console.log("Sexy is closed"),
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
            (V = n((M = N).prototype, "btnClose", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = n(M.prototype, "mainCanvas", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = n(M.prototype, "listGameItem", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (L = M))
          ) || L)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/VivoPortraitCanvasScaleByOrientation.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (i) {
    "use strict";
    var e, t, n, o, s, r, a, h, u, l, c, d, g, w, f, S, R, D, p;
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
            (l = i.Widget),
            (c = i.sys),
            (d = i.view),
            (g = i.macro),
            (w = i.director),
            (f = i.screen),
            (S = i.log),
            (R = i.ResolutionPolicy),
            (D = i.Camera),
            (p = i.Component);
        },
      ],
      execute: function () {
        var z, b, v, m, y, O, T, I, N, C, A, E, _, P, H, B, W, F, L, V, M, G, X;
        s._RF.push(
          {},
          "81f04s8lCtF8ZqSZKkU27RS",
          "VivoPortraitCanvasScaleByOrientation",
          void 0
        );
        var K = r.ccclass,
          k = r.property;
        i(
          "VivoPortraitCanvasScaleByOrientation",
          ((z = K("VivoPortraitCanvasScaleByOrientation")),
          (b = k(a)),
          (v = k(a)),
          (m = k({ type: h })),
          (y = k(a)),
          (O = k(a)),
          (T = k(u)),
          (I = k(u)),
          (N = k({ type: l })),
          (C = k(a)),
          (A = k({ type: u })),
          z(
            ((P = e(
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
                    n(e, "autoOrientation", P, o(e)),
                    n(e, "isPortrait", H, o(e)),
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
                      c.isBrowser
                        ? window.addEventListener("resize", this._thisOnResized)
                        : d.on("canvas-resize", this._thisOnResized),
                      !c.isNative)
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
                    if (c.isMobile) {
                      var i = new Event("gameShow");
                      window.dispatchEvent(i);
                    }
                    c.isNative &&
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
                        if (window && c.isMobile && c.isBrowser) {
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
                      c.isMobile &&
                      c.isBrowser &&
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
                    if (this.isPortrait && c.isMobile && c.isBrowser) {
                      var i =
                        this.isLandscapeScreen() && !this.isShowKeyboard();
                      this.node.children.forEach(function (e) {
                        e.getComponent(D) || (e.angle = i ? 180 : 0);
                      });
                    }
                  }),
                  (s.onDestroy = function () {
                    c.isBrowser
                      ? window.removeEventListener(
                          "resize",
                          this._thisOnResized
                        )
                      : d.off("canvas-resize", this._thisOnResized);
                  }),
                  e
                );
              })(p)).prototype,
              "autoOrientation",
              [b],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              }
            )),
            (H = e(_.prototype, "isPortrait", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (B = e(_.prototype, "canvas", [m], {
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
  "chunks:///_virtual/VivoPortraitCustomCanvasSize.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./VivoPortraitCanvasScaleByOrientation.ts",
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
          h = t.VivoPortraitCanvasScaleByOrientation;
        },
      ],
      execute: function () {
        var d, v, p, f, C;
        a._RF.push(
          {},
          "3d357//caZLq4ExDakCtC7u",
          "VivoPortraitCustomCanvasSize",
          void 0
        );
        var g = s.ccclass,
          m = s.property;
        t(
          "VivoPortraitCustomCanvasSize",
          g("VivoPortraitCustomCanvasSize")(
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
                    n(i, "isPortrait", C, o(i)),
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
            (C = i(v.prototype, "isPortrait", [m], {
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
  "chunks:///_virtual/VivoSoundManager.ts",
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
        a._RF.push({}, "bd96aaKcSJOv5rka68B0ufI", "VivoSoundManager", void 0);
        var d = o.ccclass,
          y = o.property;
        i(
          "VivoSoundManager",
          ((f = d("VivoSoundManager")),
          (g = y(c)),
          (h = y(c)),
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

System.register("chunks:///_virtual/VivoStringUtils.ts", ["cc"], function (t) {
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
      r._RF.push({}, "b5222AatwtOwZTKag84P81N", "VivoStringUtils", void 0);
      var e = n.ccclass;
      n.property,
        t(
          "VivoStringUtils",
          e("VivoStringUtils")(
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
                      o = this.round(t, r).split("."),
                      u = o[0],
                      s = u.length;
                    s >= 0;
                    s -= 3
                  ) {
                    if (s - 3 <= 0) {
                      e = u.slice(0, s) + e;
                      break;
                    }
                    e = "," + u.slice(s - 3, s) + e;
                  }
                  return (
                    o.length > 1 && (e += "." + o[1]),
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
  "chunks:///_virtual/VivoUserInfor.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./VivoStringUtils.ts",
    "./ApiService4.ts",
    "./State.ts",
  ],
  function (e) {
    "use strict";
    var n, t, a, r, i, o, s, l, c, u, f, p, h, d, v;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (a = e.initializerDefineProperty),
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
          h = e.VivoStringUtils;
        },
        function (e) {
          d = e.ApiService;
        },
        function (e) {
          v = e.state;
        },
      ],
      execute: function () {
        var y, m, g, b, _, U, R, M, S, F, A, L;
        i._RF.push({}, "d82a5oVTiZHQ6Vzdxq557vH", "VivoUserInfor", void 0);
        var w = o.ccclass,
          E = o.property;
        e(
          "VivoUserInfor",
          ((y = w("VivoUserInfor")),
          (m = E(s)),
          (g = E([l])),
          (b = E(c)),
          (_ = E(c)),
          y(
            (((L = (function (e) {
              function n() {
                for (
                  var n, t = arguments.length, i = new Array(t), o = 0;
                  o < t;
                  o++
                )
                  i[o] = arguments[o];
                return (
                  (n = e.call.apply(e, [this].concat(i)) || this),
                  a(n, "spr_avatar", M, r(n)),
                  a(n, "sprFrame_avatar", S, r(n)),
                  a(n, "lbl_money", F, r(n)),
                  a(n, "lbl_displayname", A, r(n)),
                  n
                );
              }
              t(n, e),
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
                (i.onGetAvatarUser = function () {
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
                          : f("---- Sprite avatar is null");
                      } else console.warn("---- avatarName invalid");
                    } else console.warn("---- avatarURL is empty");
                  else console.log("---- sprFrame avatar is null");
                }),
                (i.onGetMoneyUser = function () {
                  this.lbl_money
                    ? (this.lbl_money.string = h.formatMoneyNumberWithComma(
                        v.gold
                      ))
                    : f("---- Label money is null");
                }),
                (i.onGetNameUser = function () {
                  this.lbl_displayname
                    ? (this.lbl_displayname.string = h.shorten(v.displayName))
                    : f("---- Label displayname is null");
                }),
                (i.handleRefreshMoney = function (e) {
                  if ("number" == typeof e) v.gold = e;
                  else if (e.As) {
                    var n = e.As,
                      t = n.gold,
                      a = n.safe;
                    (v.gold = t), (v.goldSafe = a);
                  } else if (e[1] && e[1].As) {
                    var r = e[1].As,
                      i = r.gold,
                      o = r.safe;
                    (v.gold = i), (v.goldSafe = o);
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
            (M = n((R = L).prototype, "spr_avatar", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = n(R.prototype, "sprFrame_avatar", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (F = n(R.prototype, "lbl_money", [b], {
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
  "chunks:///_virtual/WebviewController4.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./VivoUserInfor.ts",
    "./VivoManager.ts",
    "./VivoSoundManager.ts",
    "./PersistManager.ts",
    "./VivoGameConfig.ts",
  ],
  function (e) {
    "use strict";
    var i, t, n, o, a, s, r, l, w, c, b, u, f, v, h, m, V, p;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (s = e._decorator),
            (r = e.WebView),
            (l = e.Button),
            (w = e.Prefab),
            (c = e.Node),
            (b = e.sys),
            (u = e.instantiate),
            (f = e.Component);
        },
        function (e) {
          v = e.VivoUserInfor;
        },
        function (e) {
          h = e.VivoManager;
        },
        function (e) {
          m = e.VivoSoundManager;
        },
        function (e) {
          V = e.PersistManager;
        },
        function (e) {
          p = e.default;
        },
      ],
      execute: function () {
        var W, d, g, P, C, G, S, M, B, I, O, _;
        a._RF.push({}, "3be697bpPFBH4YzalJ2XWu+", "WebviewController", void 0);
        var y = s.ccclass,
          R = s.property;
        e(
          "WebviewController",
          ((W = y("WebviewController")),
          (d = R(r)),
          (g = R(l)),
          (P = R(w)),
          (C = R(c)),
          W(
            (((_ = (function (e) {
              function i() {
                for (
                  var i, t = arguments.length, a = new Array(t), s = 0;
                  s < t;
                  s++
                )
                  a[s] = arguments[s];
                return (
                  (i = e.call.apply(e, [this].concat(a)) || this),
                  n(i, "webViewGame", M, o(i)),
                  (i.isPlatform = null),
                  n(i, "btnCloseWebview", B, o(i)),
                  n(i, "webViewPrefab", I, o(i)),
                  n(i, "parent_webview", O, o(i)),
                  (i.isKeepPosition = !1),
                  i
                );
              }
              t(i, e),
                (i.getInstance = function () {
                  return this._instance;
                });
              var a = i.prototype;
              return (
                (a.onLoad = function () {
                  var e = this;
                  (i._instance = this),
                    this.btnCloseWebview &&
                      this.btnCloseWebview.node.on(
                        "click",
                        function () {
                          e.closeWebView();
                        },
                        this
                      );
                }),
                (a.start = function () {
                  this.isPlatform = b.isNative ? 1 : 0;
                }),
                (a.initNativeWVCallBack = function () {
                  if (b.isNative) {
                    var e = this;
                    this.webViewGame &&
                      (this.webViewGame.setJavascriptInterfaceScheme(
                        "messagetogame"
                      ),
                      this.webViewGame.setOnJSCallback(function (i, t) {
                        t.includes("close_webview") && e.closeWebView();
                      }));
                  }
                }),
                (a.clearNativeWVCallback = function () {
                  b.isNative &&
                    this.webViewGame &&
                    (this.webViewGame.setJavascriptInterfaceScheme(""),
                    this.webViewGame.setOnJSCallback(function () {}));
                }),
                (a.openWebView = function (e) {
                  var i = this;
                  if (
                    (this.webViewGame &&
                      (this.webViewGame.destroy(), (this.webViewGame = null)),
                    this.webViewPrefab)
                  ) {
                    var t = u(this.webViewPrefab);
                    if (
                      ((t.parent = this.parent_webview),
                      (this.webViewGame = t.getComponent(r)),
                      this.webViewGame)
                    ) {
                      var n = encodeURIComponent(e),
                        o = p.GetHtml() + "?url=" + n + "&isLandscape=false";
                      b.isBrowser
                        ? (this.webViewGame.url = e)
                        : (this.webViewGame.url = o),
                        this.webViewGame.scheduleOnce(function () {
                          var e, t, n, o;
                          i.btnCloseWebview &&
                            (i.btnCloseWebview.node.active = !0),
                            i.MoveToWebViewCenter(),
                            null == (e = V.getInstance()) ||
                              null == (t = e.loading) ||
                              t.hide(),
                            null == (n = h.getInstance()) ||
                              n.onSetactiveMainCanvas(!1),
                            null == (o = m.getInstance()) ||
                              o.handleWebViewSound(!0);
                        }, 2);
                    }
                  } else console.log("webViewPrefab is null");
                }),
                (a.closeWebView = function () {
                  var e, i, t, n, o;
                  (this.btnCloseWebview &&
                    (this.btnCloseWebview.node.active = !1),
                  this.webViewGame) &&
                    ((this.webViewGame.url = ""),
                    this.MoveToWebViewOutSide(),
                    null == (o = h.getInstance()) ||
                      o.onSetactiveMainCanvas(!0));
                  null == (e = V.getInstance()) ||
                    null == (i = e.loading) ||
                    i.hide(),
                    null == (t = m.getInstance()) || t.handleWebViewSound(!1),
                    null == (n = v.getInstance()) || n.sendRefreshMoney();
                }),
                (a.MoveToWebViewCenter = function () {
                  this.webViewGame && this.webViewGame.node.setPosition(0, 0),
                    !b.isBrowser ||
                      (b.platform !== b.Platform.MOBILE_BROWSER &&
                        b.platform !== b.Platform.DESKTOP_BROWSER) ||
                      (this.isKeepPosition = !0);
                }),
                (a.MoveToWebViewOutSide = function () {
                  this.webViewGame &&
                    this.webViewGame.node.setPosition(3e3, 3e3),
                    !b.isBrowser ||
                      (b.platform !== b.Platform.MOBILE_BROWSER &&
                        b.platform !== b.Platform.DESKTOP_BROWSER) ||
                      (this.isKeepPosition = !1);
                }),
                (a.update = function (e) {
                  !b.isBrowser ||
                    (b.platform !== b.Platform.MOBILE_BROWSER &&
                      b.platform !== b.Platform.DESKTOP_BROWSER) ||
                    (this.isKeepPosition && this.MoveToWebViewCenter());
                }),
                (a.onDestroy = function () {
                  var e = this;
                  this.btnCloseWebview &&
                    this.btnCloseWebview.node.off(
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
            (M = i((S = _).prototype, "webViewGame", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = i(S.prototype, "btnCloseWebview", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = i(S.prototype, "webViewPrefab", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = i(S.prototype, "parent_webview", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = S))
          ) || G)
        );
        a._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/ncc_vivo_games",
    "chunks:///_virtual/ncc_vivo_games"
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
