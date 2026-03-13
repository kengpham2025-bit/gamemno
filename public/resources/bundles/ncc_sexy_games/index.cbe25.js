System.register(
  "chunks:///_virtual/ApiService2.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SexyGameConfig.ts",
    "./SexyGameHTTPManager.ts",
    "./PersistManager.ts",
  ],
  function (e) {
    "use strict";
    var n, t, r, o, s, i, c, u, a;
    return {
      setters: [
        function (e) {
          (n = e.inheritsLoose), (t = e.extends);
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
        r._RF.push({}, "2cd00ffBCRJfIqgouyR0qZr", "ApiService", void 0);
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
                  n(r, e),
                  (r.sendRefreshMoney = function (e, n) {
                    var t = c.build(c.PROVIDER.REFRESH_MONEY),
                      r = c.AccessToken;
                    u.getInstance().sendGetHttpRequestWithAuthorization(
                      t,
                      r,
                      function (n) {
                        s("[refreshMoney] success:", n), e(n);
                      },
                      function (e) {
                        console.error("[refreshMoney] error:", e), n(e);
                      }
                    );
                  }),
                  (r.getProviderGames = function (e, n) {
                    var t,
                      r,
                      o = c.build(c.PROVIDER.LIST_GAMES),
                      i = c.AccessToken;
                    null == (t = a.getInstance()) ||
                      null == (r = t.loading) ||
                      r.show(),
                      u.getInstance().sendGetHttpRequestWithAuthorization(
                        o,
                        i,
                        function (n) {
                          s("[getProviderGames] success:", n), e(n);
                        },
                        function (e) {
                          console.error("[getProviderGames] error:", e), n(e);
                        }
                      );
                  }),
                  (r.getGameUrl = function (e, n, r) {
                    var o, i;
                    null == (o = a.getInstance()) ||
                      null == (i = o.loading) ||
                      i.show();
                    var l = c.build(c.PROVIDER.GET_GAME_URL),
                      f = c.AccessToken,
                      g = JSON.stringify(t({}, e));
                    u.getInstance().sendPostHttpRequestWithAuthoriztion(
                      l,
                      f,
                      g,
                      function (e) {
                        s("[getGameUrl] success:", e), n(e);
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
  "chunks:///_virtual/GameItem2.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ApiService2.ts",
    "./WebviewController2.ts",
    "./PersistManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, a, r, i, o, l, s, u, c, m, p, g, d, f, v;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (a = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy),
            (o = e._decorator),
            (l = e.Button),
            (s = e.Sprite),
            (u = e.sys),
            (c = e.Color),
            (m = e.log),
            (p = e.Vec3),
            (g = e.Component);
        },
        function (e) {
          d = e.ApiService;
        },
        function (e) {
          f = e.WebviewController;
        },
        function (e) {
          v = e.PersistManager;
        },
      ],
      execute: function () {
        var h, I, b, w, G, O, S, y, B;
        i._RF.push({}, "cc9258U2wFOAYq3A+FRBC5S", "GameItem", void 0);
        var R = o.ccclass,
          C = o.property;
        e(
          "GameItem",
          ((h = R("GameItem")),
          (I = C(String)),
          (b = C(l)),
          (w = C(s)),
          h(
            ((S = t(
              (O = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    a(t, "gameId", S, r(t)),
                    a(t, "btnOpenGame", y, r(t)),
                    a(t, "iconSprite", B, r(t)),
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
                          u.isBrowser &&
                          u.platform === u.Platform.MOBILE_BROWSER
                        ) {
                          var t = window.open("", "_blank");
                          e.onGetOpenGame(t);
                        } else e.onGetOpenGame(null);
                      });
                  }),
                  (i.onSetData = function (e) {
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
                  (i.onGetOpenGame = function (e) {
                    if (this.gameData) {
                      var t = {
                        providerId: this.gameData.providerId,
                        productId: this.gameData.productId,
                        gameCode: this.gameData.gameCode,
                        extra: {},
                      };
                      d.getGameUrl(
                        t,
                        function (t) {
                          var n, a, r, i, o, l;
                          (m("[GameItem] URL game received:", t),
                          console.log(
                            "url response " +
                              (null == (n = t.data) ? void 0 : n.url)
                          ),
                          u.isBrowser &&
                            u.platform === u.Platform.MOBILE_BROWSER)
                            ? null == e ||
                              e.location.assign(
                                null == (l = t.data) ? void 0 : l.url
                              )
                            : (null == (a = v.getInstance()) ||
                                null == (r = a.loading) ||
                                r.show(),
                              null == (i = f.getInstance()) ||
                                i.openWebView(
                                  null == (o = t.data) ? void 0 : o.url
                                ));
                        },
                        function (e) {
                          var t, n, a, r;
                          console.error("[GameItem] Error get URL:", e),
                            null == (t = v.getInstance()) ||
                              null == (n = t.loading) ||
                              n.hide();
                          var i = 1,
                            o = 1;
                          (u.isNative ||
                            (u.isBrowser &&
                              u.platform === u.Platform.MOBILE_BROWSER)) &&
                            ((i = 0.65), (o = 0.85)),
                            null == (a = v.getInstance()) ||
                              null == (r = a.notiView) ||
                              r.showMessage(
                                "Không thể mở game, vui lòng thử lại",
                                null,
                                0,
                                2,
                                new p(i, o, 1)
                              );
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
              })(g)).prototype,
              "gameId",
              [I],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "";
                },
              }
            )),
            (y = t(O.prototype, "btnOpenGame", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = t(O.prototype, "iconSprite", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = O))
          ) || G)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ncc_sexy_games",
  [
    "./ApiService2.ts",
    "./GameItem2.ts",
    "./SexyGameHTTPManager.ts",
    "./NodeSafeArea2.ts",
    "./SexyCanvas.ts",
    "./SexyGameConfig.ts",
    "./SexyManager.ts",
    "./SexyPortraitCanvasScaleByOrientation.ts",
    "./SexyPortraitCustomCanvasSize.ts",
    "./SexySoundManager.ts",
    "./SexyUserInfor.ts",
    "./SoundButtonComponent2.ts",
    "./SexyStringUtils.ts",
    "./WebviewController2.ts",
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
  "chunks:///_virtual/NodeSafeArea2.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, r, i, o, n, a, c, u, s;
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
            (c = e.Widget),
            (u = e.sys),
            (s = e.Component);
        },
      ],
      execute: function () {
        var l, p, d, f, h, N, g;
        n._RF.push({}, "0797fM3DpVEkZpCs0H9GTV4", "NodeSafeArea", void 0);
        var b = a.ccclass,
          y = a.property;
        e(
          "NodeSafeArea",
          ((l = b("NodeSafeArea")),
          (p = y(c)),
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
                    u.isNative &&
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
  "chunks:///_virtual/SexyCanvas.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, o, a, s, i;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (n = e.cclegacy),
            (o = e._decorator),
            (a = e.view),
            (s = e.UITransform),
            (i = e.Component);
        },
      ],
      execute: function () {
        var r;
        n._RF.push({}, "72508jr3zBEwpP8KZfcsNMt", "SexyCanvas", void 0);
        var c = o.ccclass;
        o.property,
          e(
            "SexyCanvas",
            c("SexyCanvas")(
              (r = (function (e) {
                function n() {
                  for (
                    var t, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return (
                    ((t =
                      e.call.apply(e, [this].concat(o)) || this).updateScale =
                      function () {
                        var e = a.getVisibleSize(),
                          n = t.node.getComponent(s);
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
              })(i))
            ) || r
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SexyGameConfig.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var r, t, n, i;
    return {
      setters: [
        function (e) {
          r = e.createClass;
        },
        function (e) {
          (t = e.cclegacy), (n = e._decorator), (i = e.sys);
        },
      ],
      execute: function () {
        var s, o;
        t._RF.push({}, "cc527srxlhH7L77+FLKF3cp", "SexyGameConfig", void 0);
        var a = n.ccclass;
        n.property,
          e(
            "default",
            a("SexyGameConfig")(
              (((o = (function () {
                function e() {}
                return (
                  (e.initConfig = function () {
                    var r;
                    e.AccessToken =
                      null != (r = i.localStorage.getItem("user_token"))
                        ? r
                        : "";
                  }),
                  (e.GetConfigWebViewUrl = function () {
                    var r = localStorage.getItem("X_GAME_CONFIG");
                    if (null == r || null == r) return "";
                    var t = JSON.parse(r),
                      n = t[e.WebViewUrl],
                      s = t[e.rs_domain];
                    return i.isBrowser ||
                      (i.isBrowser && i.platform === i.Platform.MOBILE_BROWSER)
                      ? window.location.href.split("?")[0] + n
                      : s + n;
                  }),
                  (e.GetHtml = function () {
                    return "dev" == this.currentEnv
                      ? "https://resources.gwin.info/sun-dev-coma/webview/EvoVia.html"
                      : e.GetConfigWebViewUrl();
                  }),
                  (e.build = function (e) {
                    return e.startsWith("http") ? e : "" + this.BaseURL + e;
                  }),
                  r(e, null, [
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
              (s = o))
            ) || s
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SexyGameHTTPManager.ts",
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
          "2322fX0lwlK45MVQkOzRk0g",
          "SexyGameHTTPManager",
          void 0
        );
        var o = s.ccclass;
        s.property,
          e(
            "default",
            o("SexyGameHTTPManager")(
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
  "chunks:///_virtual/SexyManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameItem2.ts",
    "./SexyGameConfig.ts",
    "./ApiService2.ts",
    "./PersistManager.ts",
    "./MiniGameNodeController.ts",
    "./Define.ts",
  ],
  function (e) {
    "use strict";
    var n, t, i, o, a, r, s, l, c, u, d, f, m, v, p, h, g, G, I, C;
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
            (d = e.log),
            (f = e.director),
            (m = e.macro),
            (v = e.Component);
        },
        function (e) {
          p = e.GameItem;
        },
        function (e) {
          h = e.default;
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
        var y, E, _, b, S, L, M, N, A, D;
        s._RF.push({}, "1a9c4UCahVJX51dMS9+iEVl", "SexyManager", void 0);
        var R = l.ccclass,
          x = l.property;
        e(
          "SexyManager",
          ((y = R("SexyManager")),
          (E = x(c)),
          (_ = x(u)),
          (b = x([p])),
          y(
            (((D = (function (e) {
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
                    "AMB-VN"),
                  (n.productIdName = "SEXY"),
                  i(n, "btnClose", M, o(n)),
                  i(n, "mainCanvas", N, o(n)),
                  i(n, "listGameItem", A, o(n)),
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
                    h.initConfig(),
                    g.getProviderGames(
                      function (n) {
                        d("Lists game:", n), e.handleGameListResponse(n);
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
                  null == (e = I.getInstance()) ||
                    e.adjustPosition(C.SEXY_GAMES);
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
                          d = c.gameList || [],
                          f = function () {
                            var e = l.value;
                            if (null == e || !e.gameCode) return "continue";
                            if (n.productIdName !== e.productId)
                              return "continue";
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
                          m = a(d);
                        !(l = m()).done;

                      )
                        f();
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
                  d("Sexy is closed"),
                    console.log("Sexy is closed"),
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
            (M = n((L = D).prototype, "btnClose", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = n(L.prototype, "mainCanvas", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = n(L.prototype, "listGameItem", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = L))
          ) || S)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SexyPortraitCanvasScaleByOrientation.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (i) {
    "use strict";
    var e, t, n, o, s, r, a, h, u, c, l, d, g, w, S, f, R, D, b;
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
            (S = i.screen),
            (f = i.log),
            (R = i.ResolutionPolicy),
            (D = i.Camera),
            (b = i.Component);
        },
      ],
      execute: function () {
        var p, z, v, y, m, O, T, I, N, C, A, E, H, _, P, B, W, F, L, M, G, V, x;
        s._RF.push(
          {},
          "af446g0cd1HbJdJ9KorYHXW",
          "SexyPortraitCanvasScaleByOrientation",
          void 0
        );
        var X = r.ccclass,
          K = r.property;
        i(
          "SexyPortraitCanvasScaleByOrientation",
          ((p = X("SexyPortraitCanvasScaleByOrientation")),
          (z = K(a)),
          (v = K(a)),
          (y = K({ type: h })),
          (m = K(a)),
          (O = K(a)),
          (T = K(u)),
          (I = K(u)),
          (N = K({ type: c })),
          (C = K(a)),
          (A = K({ type: u })),
          p(
            ((_ = e(
              (H = (function (i) {
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
                    n(e, "isPortrait", P, o(e)),
                    n(e, "canvas", B, o(e)),
                    n(e, "fitByOrientation", W, o(e)),
                    n(e, "useCustomDesignResolution", F, o(e)),
                    n(e, "customDSWidth", L, o(e)),
                    n(e, "customDSHeight", M, o(e)),
                    n(e, "widgetNodes", G, o(e)),
                    n(e, "isDebug", V, o(e)),
                    n(e, "minScreenRatio", x, o(e)),
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
                    var i = window ? window.innerWidth : S.windowSize.width,
                      e = window ? window.innerHeight : S.windowSize.height;
                    if (
                      (this.autoOrientation
                        ? (this.isPortrait = i < e)
                        : this.isPortrait
                        ? d.setOrientation(g.ORIENTATION_PORTRAIT)
                        : d.setOrientation(g.ORIENTATION_LANDSCAPE),
                      this.canvas)
                    ) {
                      if (
                        (this.isDebug && f("Canvas after update: "),
                        this.isDebug && f(this.canvas),
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
                          f(
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
                                  this.isDebug && f("CANVAS FIT WIDTH"))
                                : (d.setDesignResolutionSize(
                                    d.getDesignResolutionSize().width,
                                    d.getDesignResolutionSize().height,
                                    R.FIXED_HEIGHT
                                  ),
                                  this.isDebug && f("CANVAS FIT HEIGHT")),
                              this.rotateRootPortraitGame())
                            : n < t && n >= this.minScreenRatio
                            ? (d.setDesignResolutionSize(
                                d.getDesignResolutionSize().width,
                                d.getDesignResolutionSize().height,
                                R.FIXED_WIDTH
                              ),
                              this.isDebug && f("[TestResize]CANVAS FIT WIDTH"))
                            : (d.setDesignResolutionSize(
                                d.getDesignResolutionSize().width,
                                d.getDesignResolutionSize().height,
                                R.FIXED_HEIGHT
                              ),
                              this.isDebug &&
                                f("[TestResize]CANVAS FIT HEIGHT"));
                      }
                    } else this.isDebug && f("No canvas component");
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
            (P = e(H.prototype, "isPortrait", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (B = e(H.prototype, "canvas", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = e(H.prototype, "fitByOrientation", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (F = e(H.prototype, "useCustomDesignResolution", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (L = e(H.prototype, "customDSWidth", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1280;
              },
            })),
            (M = e(H.prototype, "customDSHeight", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 720;
              },
            })),
            (G = e(H.prototype, "widgetNodes", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (V = e(H.prototype, "isDebug", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (x = e(H.prototype, "minScreenRatio", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (E = H))
          ) || E)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SexyPortraitCustomCanvasSize.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SexyPortraitCanvasScaleByOrientation.ts",
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
          h = t.SexyPortraitCanvasScaleByOrientation;
        },
      ],
      execute: function () {
        var d, p, v, f, y;
        a._RF.push(
          {},
          "1dd5eZgZzpE75j8+7wYKWxQ",
          "SexyPortraitCustomCanvasSize",
          void 0
        );
        var g = s.ccclass,
          S = s.property;
        t(
          "PortraitCustomCanvasSize",
          g("PortraitCustomCanvasSize")(
            ((v = i(
              (p = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, a = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(a)) || this),
                    n(i, "customDSWidth", v, o(i)),
                    n(i, "customDSHeight", f, o(i)),
                    n(i, "isPortrait", y, o(i)),
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
              [S],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return 720;
                },
              }
            )),
            (f = i(p.prototype, "customDSHeight", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1560;
              },
            })),
            (y = i(p.prototype, "isPortrait", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (d = p))
          ) || d
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SexySoundManager.ts",
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
        var f, g, h, m, p, _, S, y;
        a._RF.push({}, "d8ba41f7ExDDoF0zKSSAr3+", "SexySoundManager", void 0);
        var b = o.ccclass,
          d = o.property;
        i(
          "SexySoundManager",
          ((f = b("SexySoundManager")),
          (g = d(c)),
          (h = d(c)),
          f(
            (((y = (function (i) {
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
                  e(t, "bgm_main", S, s(t)),
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
            (_ = t((p = y).prototype, "sfx_click", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = t(p.prototype, "bgm_main", [h], {
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

System.register("chunks:///_virtual/SexyStringUtils.ts", ["cc"], function (t) {
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
      r._RF.push({}, "996b544QxJBjoPNY0PCi0RU", "SexyStringUtils", void 0);
      var i = n.ccclass;
      n.property,
        t(
          "SexyStringUtils",
          i("SexyStringUtils")(
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
                      u = this.round(t, r).split("."),
                      o = u[0],
                      s = o.length;
                    s >= 0;
                    s -= 3
                  ) {
                    if (s - 3 <= 0) {
                      i = o.slice(0, s) + i;
                      break;
                    }
                    i = "," + o.slice(s - 3, s) + i;
                  }
                  return (
                    u.length > 1 && (i += "." + u[1]),
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
  "chunks:///_virtual/SexyUserInfor.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SexyStringUtils.ts",
    "./ApiService2.ts",
    "./State.ts",
  ],
  function (e) {
    "use strict";
    var n, t, a, r, i, o, s, l, c, u, f, p, h, y, d;
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
          h = e.SexyStringUtils;
        },
        function (e) {
          y = e.ApiService;
        },
        function (e) {
          d = e.state;
        },
      ],
      execute: function () {
        var m, v, b, g, _, S, U, R, M, F, A, E;
        i._RF.push({}, "162dfPZbJVDSZ+u8fTEOEY/", "SexyUserInfor", void 0);
        var L = o.ccclass,
          w = o.property;
        e(
          "SexyUserInfor",
          ((m = L("SexyUserInfor")),
          (v = w(s)),
          (b = w([l])),
          (g = w(c)),
          (_ = w(c)),
          m(
            (((E = (function (e) {
              function n() {
                for (
                  var n, t = arguments.length, i = new Array(t), o = 0;
                  o < t;
                  o++
                )
                  i[o] = arguments[o];
                return (
                  (n = e.call.apply(e, [this].concat(i)) || this),
                  a(n, "spr_avatar", R, r(n)),
                  a(n, "sprFrame_avatar", M, r(n)),
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
                  y.sendRefreshMoney(
                    function (n) {
                      null !== n.data
                        ? void 0 !== n.data.balance
                          ? (console.log("balance user " + n.data.balance),
                            (d.gold = n.data.balance),
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
                    if (d.avatarURL) {
                      var e = d.avatarURL.split("/"),
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
                        d.gold
                      ))
                    : f("---- Label money is null");
                }),
                (i.onGetNameUser = function () {
                  this.lbl_displayname
                    ? (this.lbl_displayname.string = h.shorten(d.displayName))
                    : f("---- Label displayname is null");
                }),
                (i.handleRefreshMoney = function (e) {
                  if ("number" == typeof e) d.gold = e;
                  else if (e.As) {
                    var n = e.As,
                      t = n.gold,
                      a = n.safe;
                    (d.gold = t), (d.goldSafe = a);
                  } else if (e[1] && e[1].As) {
                    var r = e[1].As,
                      i = r.gold,
                      o = r.safe;
                    (d.gold = i), (d.goldSafe = o);
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
            (R = n((U = E).prototype, "spr_avatar", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = n(U.prototype, "sprFrame_avatar", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (F = n(U.prototype, "lbl_money", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = n(U.prototype, "lbl_displayname", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = U))
          ) || S)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SoundButtonComponent2.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SexySoundManager.ts"],
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
          c = n.SexySoundManager;
        },
      ],
      execute: function () {
        var r;
        t._RF.push(
          {},
          "073ffVS/35AOoRu+6ZlaZ6Y",
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
  "chunks:///_virtual/WebviewController2.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SexyUserInfor.ts",
    "./SexyManager.ts",
    "./SexySoundManager.ts",
    "./PersistManager.ts",
    "./SexyGameConfig.ts",
  ],
  function (e) {
    "use strict";
    var i, t, n, o, r, s, a, l, w, b, u, c, f, h, p, v, m, d;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (s = e._decorator),
            (a = e.WebView),
            (l = e.Button),
            (w = e.Prefab),
            (b = e.Node),
            (u = e.instantiate),
            (c = e.sys),
            (f = e.Component);
        },
        function (e) {
          h = e.SexyUserInfor;
        },
        function (e) {
          p = e.SexyManager;
        },
        function (e) {
          v = e.SexySoundManager;
        },
        function (e) {
          m = e.PersistManager;
        },
        function (e) {
          d = e.default;
        },
      ],
      execute: function () {
        var V, W, g, P, S, y, C, G, M, R, _, B;
        r._RF.push({}, "3ddd2swmdNKuZpDhi1RFK7m", "WebviewController", void 0);
        var I = s.ccclass,
          O = s.property;
        e(
          "WebviewController",
          ((V = I("WebviewController")),
          (W = O(a)),
          (g = O(l)),
          (P = O(w)),
          (S = O(b)),
          V(
            (((B = (function (e) {
              function i() {
                for (
                  var i, t = arguments.length, r = new Array(t), s = 0;
                  s < t;
                  s++
                )
                  r[s] = arguments[s];
                return (
                  (i = e.call.apply(e, [this].concat(r)) || this),
                  n(i, "webViewGame", G, o(i)),
                  n(i, "btnCloseWebview", M, o(i)),
                  n(i, "webViewPrefab", R, o(i)),
                  n(i, "parent_webview", _, o(i)),
                  (i.isKeepPosition = !1),
                  i
                );
              }
              t(i, e),
                (i.getInstance = function () {
                  return this._instance;
                });
              var r = i.prototype;
              return (
                (r.onLoad = function () {
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
                (r.openWebView = function (e) {
                  var i = this;
                  if (
                    (this.webViewGame &&
                      (this.webViewGame.destroy(), (this.webViewGame = null)),
                    this.webViewPrefab)
                  ) {
                    var t = u(this.webViewPrefab);
                    if (
                      ((t.parent = this.parent_webview),
                      (this.webViewGame = t.getComponent(a)),
                      this.webViewGame)
                    ) {
                      var n = encodeURIComponent(e),
                        o = d.GetHtml() + "?url=" + n + "&isLandscape=false";
                      c.isBrowser
                        ? (this.webViewGame.url = e)
                        : (this.webViewGame.url = o),
                        this.webViewGame.scheduleOnce(function () {
                          var e, t, n, o;
                          i.btnCloseWebview &&
                            (i.btnCloseWebview.node.active = !0),
                            i.MoveToWebViewCenter(),
                            null == (e = m.getInstance()) ||
                              null == (t = e.loading) ||
                              t.hide(),
                            null == (n = p.getInstance()) ||
                              n.onSetactiveMainCanvas(!1),
                            null == (o = v.getInstance()) ||
                              o.handleWebViewSound(!0);
                        }, 2);
                    }
                  } else console.log("webViewPrefab is null");
                }),
                (r.closeWebView = function () {
                  var e, i, t, n, o;
                  (this.btnCloseWebview &&
                    (this.btnCloseWebview.node.active = !1),
                  this.webViewGame) &&
                    ((this.webViewGame.url = ""),
                    this.MoveToWebViewOutSide(),
                    null == (o = p.getInstance()) ||
                      o.onSetactiveMainCanvas(!0));
                  null == (e = m.getInstance()) ||
                    null == (i = e.loading) ||
                    i.hide(),
                    null == (t = v.getInstance()) || t.handleWebViewSound(!1),
                    null == (n = h.getInstance()) || n.sendRefreshMoney();
                }),
                (r.MoveToWebViewCenter = function () {
                  this.webViewGame && this.webViewGame.node.setPosition(0, 0),
                    !c.isBrowser ||
                      (c.platform !== c.Platform.MOBILE_BROWSER &&
                        c.platform !== c.Platform.DESKTOP_BROWSER) ||
                      (this.isKeepPosition = !0);
                }),
                (r.MoveToWebViewOutSide = function () {
                  this.webViewGame &&
                    this.webViewGame.node.setPosition(3e3, 3e3),
                    !c.isBrowser ||
                      (c.platform !== c.Platform.MOBILE_BROWSER &&
                        c.platform !== c.Platform.DESKTOP_BROWSER) ||
                      (this.isKeepPosition = !1);
                }),
                (r.update = function (e) {
                  !c.isBrowser ||
                    (c.platform !== c.Platform.MOBILE_BROWSER &&
                      c.platform !== c.Platform.DESKTOP_BROWSER) ||
                    (this.isKeepPosition && this.MoveToWebViewCenter());
                }),
                (r.onDestroy = function () {
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
            (G = i((C = B).prototype, "webViewGame", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = i(C.prototype, "btnCloseWebview", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = i(C.prototype, "webViewPrefab", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = i(C.prototype, "parent_webview", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = C))
          ) || y)
        );
        r._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/ncc_sexy_games",
    "chunks:///_virtual/ncc_sexy_games"
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
