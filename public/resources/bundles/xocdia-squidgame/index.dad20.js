System.register(
  "chunks:///_virtual/GamePlayBridge.ts",
  [
    "cc",
    "./SocketManager.ts",
    "./BundleManager.ts",
    "./PersistManager.ts",
    "./SoundManager.ts",
    "./Define.ts",
    "./EventManager.ts",
  ],
  function (n) {
    "use strict";
    var e, t, o, i, a, u, c, f;
    return {
      setters: [
        function (n) {
          (e = n.cclegacy), (t = n.Vec3);
        },
        function (n) {
          o = n.socketManager;
        },
        function (n) {
          i = n.bundleManager;
        },
        function (n) {
          a = n.PersistManager;
        },
        function (n) {
          u = n.SoundManager;
        },
        function (n) {
          c = n.StorageKey;
        },
        function (n) {
          f = n.EventKey;
        },
      ],
      execute: function () {
        e._RF.push({}, "1a8ff7KAD9FbKnAt2EF3Ig+", "GamePlayBridge", void 0);
        n(
          "GamePlayBridge",
          (function () {
            function n() {}
            return (
              (n.sendRefreshMoney = function () {
                o.sendRefreshMoney();
              }),
              (n.backToLobby = function () {
                i.runLobby();
              }),
              (n.getDefaultAvatarSpriteFrame = function () {
                return a.getInstance().avatarDefault || void 0;
              }),
              (n.loadRemoteSpriteFrame = function (n, e) {
                a.getInstance().getAvatar(n, e);
              }),
              (n.hideInfoPopup = function () {}),
              (n.showCommonPopup = function (n) {
                a.getInstance().showCommonPopup(n, function () {
                  a.getInstance().hideCommonPopup();
                });
              }),
              (n.hideInvitePopup = function () {}),
              (n.showNotiMessage = function (n, e, o, i, u) {
                void 0 === e && (e = null),
                  void 0 === o && (o = 0),
                  void 0 === i && (i = 2),
                  void 0 === u && (u = t.ZERO),
                  a.showNoti(n, e, o, i, u);
              }),
              (n.showLoadingView = function () {}),
              (n.hideLoadingView = function () {}),
              (n.playSfx = function (n, e) {
                void 0 === e && (e = !1), u.getInstance().playSfx(n, e);
              }),
              (n.stopSfx = function () {
                u.getInstance().stopSfx();
              }),
              (n.playBgm = function (n, e, t, o) {
                void 0 === e && (e = !0),
                  void 0 === t && (t = !1),
                  void 0 === o && (o = !0),
                  u.getInstance().playBgm(n, e, t, o);
              }),
              (n.playAdditionalSfx = function (n, e) {
                var t;
                void 0 === e && (e = !1),
                  null == (t = u.getInstance()) || t.playAdditionalSfx(n, e);
              }),
              (n.stopAdditionalSfx = function (n) {
                var e;
                null == (e = u.getInstance()) || e.stopAdditionalSfx(n);
              }),
              (n.getEnableSfxKey = function () {
                return c.SoundFX;
              }),
              (n.getEnableBgmKey = function () {
                return c.Music;
              }),
              (n.getSfxToggedKey = function () {
                return f.SoundToggle;
              }),
              (n.getBgmToggedKey = function () {
                return f.MusicToggle;
              }),
              n
            );
          })()
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ScrollViewInfoPopup2.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPopup.ts"],
  function (o) {
    "use strict";
    var t, n, e, r;
    return {
      setters: [
        function (o) {
          t = o.inheritsLoose;
        },
        function (o) {
          (n = o.cclegacy), (e = o._decorator);
        },
        function (o) {
          r = o.CommonPopup;
        },
      ],
      execute: function () {
        var c;
        n._RF.push(
          {},
          "4dc9eRTGjlCOIwHgIytEqJ7",
          "ScrollViewInfoPopup",
          void 0
        );
        var p = e.ccclass;
        e.property,
          o(
            "ScrollViewInfoPopup",
            p("ScrollViewInfoPopup")(
              (c = (function (o) {
                function n() {
                  return o.apply(this, arguments) || this;
                }
                return (
                  t(n, o),
                  (n.prototype.onLoad = function () {
                    o.prototype.onLoad.call(this);
                  }),
                  n
                );
              })(r))
            ) || c
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDSQJackpotHistoryItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./XDSQJackpotHistoryView.ts",
    "./StringUtils.ts",
  ],
  function (t) {
    "use strict";
    var i, e, r, s, n, a, o, p, l, c, _, d, h, u, m, b;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy),
            (a = t._decorator),
            (o = t.Label),
            (p = t.Button),
            (l = t.Node),
            (c = t.Sprite),
            (_ = t.SpriteFrame),
            (d = t.log),
            (h = t.Color),
            (u = t.Component);
        },
        function (t) {
          m = t.default;
        },
        function (t) {
          b = t.StringUtils;
        },
      ],
      execute: function () {
        var g, y, w, f, v, F, k, H, S, x, D, V, I, X, J, Q, z, j, L, C, T;
        n._RF.push(
          {},
          "07702SlXgZM8qHwsionyGkT",
          "XDSQJackpotHistoryItemView",
          void 0
        );
        var B = a.ccclass,
          M = a.property;
        t(
          "default",
          ((g = B("XDSQJackpotHistoryItemView")),
          (y = M(o)),
          (w = M(o)),
          (f = M(p)),
          (v = M(l)),
          (F = M(c)),
          (k = M(c)),
          (H = M(c)),
          (S = M(c)),
          (x = M([_])),
          g(
            ((I = i(
              (V = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, n = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    n[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(n)) || this),
                    r(i, "txt_phien_time", I, s(i)),
                    r(i, "txt_phien_tienhu", X, s(i)),
                    r(i, "btn_detail", J, s(i)),
                    r(i, "jackpotHistoryView", Q, s(i)),
                    r(i, "spr_d1", z, s(i)),
                    r(i, "spr_d2", j, s(i)),
                    r(i, "spr_d3", L, s(i)),
                    r(i, "spr_d4", C, s(i)),
                    r(i, "spriteFrame_dice", T, s(i)),
                    (i.users = []),
                    (i.time = ""),
                    i
                  );
                }
                e(i, t);
                var n = i.prototype;
                return (
                  (n.onLoad = function () {
                    var t = this;
                    this.btn_detail ||
                      d("XDSQJackpotHistoryItemView btn_detail is not asigned"),
                      this.btn_detail ||
                        d(
                          "XDSQJackpotHistoryItemView jackpotHistoryView is not asigned"
                        ),
                      this.txt_phien_time ||
                        d(
                          "XDSQJackpotHistoryItemView txt_phien_time is not asigned"
                        ),
                      this.txt_phien_tienhu ||
                        d(
                          "XDSQJackpotHistoryItemView txt_phien_tienhu is not asigned"
                        ),
                      this.spr_d1 ||
                        d("XDSQJackpotHistoryItemView spr_d1 is not asigned"),
                      this.spr_d2 ||
                        d("XDSQJackpotHistoryItemView spr_d2 is not asigned"),
                      this.spr_d3 ||
                        d("XDSQJackpotHistoryItemView spr_d3 is not asigned"),
                      this.spr_d4 ||
                        d("XDSQJackpotHistoryItemView spr_d4 is not asigned"),
                      this.btn_detail.node.on("click", function () {
                        var i;
                        null == (i = t.jackpotHistoryView.getComponent(m)) ||
                          i.showDetail(t.users, t.time);
                      });
                  }),
                  (n.show = function (t, i, e, r, s) {
                    (this.txt_phien_time.string = t.toString()),
                      (this.txt_phien_tienhu.color = h.WHITE),
                      (this.txt_phien_tienhu.string = b.formatNumber(e));
                    var n = r[0] - 1,
                      a = r[1] - 1,
                      o = r[2] - 1,
                      p = r[3] - 1;
                    n < this.spriteFrame_dice.length &&
                      this.spriteFrame_dice[n] &&
                      this.spr_d1 &&
                      (this.spr_d1.spriteFrame = this.spriteFrame_dice[n]),
                      a < this.spriteFrame_dice.length &&
                        this.spriteFrame_dice[a] &&
                        (this.spr_d2.spriteFrame = this.spriteFrame_dice[a]),
                      o < this.spriteFrame_dice.length &&
                        this.spriteFrame_dice[o] &&
                        (this.spr_d3.spriteFrame = this.spriteFrame_dice[o]),
                      p < this.spriteFrame_dice.length &&
                        this.spriteFrame_dice[p] &&
                        (this.spr_d4.spriteFrame = this.spriteFrame_dice[p]),
                      (this.users = s),
                      (this.time = i),
                      (this.spr_d1.node.active = !0),
                      (this.spr_d2.node.active = !0),
                      (this.spr_d3.node.active = !0),
                      (this.spr_d4.node.active = !0),
                      (this.txt_phien_time.node.active = !0),
                      (this.txt_phien_tienhu.node.active = !0),
                      (this.btn_detail.node.active = !0),
                      (this.btn_detail.target.active = !0);
                  }),
                  (n.hide = function () {
                    (this.spr_d1.node.active = !1),
                      (this.spr_d2.node.active = !1),
                      (this.spr_d3.node.active = !1),
                      (this.spr_d4.node.active = !1),
                      (this.txt_phien_time.node.active = !1),
                      (this.txt_phien_tienhu.node.active = !1),
                      (this.btn_detail.node.active = !1),
                      (this.btn_detail.target.active = !1);
                  }),
                  i
                );
              })(u)).prototype,
              "txt_phien_time",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (X = i(V.prototype, "txt_phien_tienhu", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (J = i(V.prototype, "btn_detail", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Q = i(V.prototype, "jackpotHistoryView", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (z = i(V.prototype, "spr_d1", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (j = i(V.prototype, "spr_d2", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (L = i(V.prototype, "spr_d3", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (C = i(V.prototype, "spr_d4", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (T = i(V.prototype, "spriteFrame_dice", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (D = V))
          ) || D)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDSQJackpotHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./XDSQNetworkHandler.ts",
    "./GamePlayBridge.ts",
    "./XDSQJackpotRankItemView.ts",
    "./XDSQJackpotHistoryItemView.ts",
    "./StringUtils.ts",
    "./CommonPopup.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, r, a, s, l, c, u, p, _, h, d, m, b, g;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (a = t._decorator),
            (s = t.Button),
            (l = t.Label),
            (c = t.Node),
            (u = t.log),
            (p = t.UIOpacity);
        },
        function (t) {
          _ = t.XDSQNetworkHandler;
        },
        function (t) {
          h = t.GamePlayBridge;
        },
        function (t) {
          d = t.default;
        },
        function (t) {
          m = t.default;
        },
        function (t) {
          b = t.StringUtils;
        },
        function (t) {
          g = t.CommonPopup;
        },
      ],
      execute: function () {
        var y, f, v, w, k, H, S, D, P, J, Q, X, V, z, x, A, C, L, N, j, B, I, T;
        r._RF.push(
          {},
          "b796d4/t1BGErTdzCrLfnBG",
          "XDSQJackpotHistoryView",
          void 0
        );
        var F = a.ccclass,
          M = a.property,
          G = function () {
            (this.money = 0),
              (this.uid = ""),
              (this.displayName = ""),
              (this.customerId = ""),
              (this.avaUrl = ""),
              (this.platform = 0),
              (this.betAmount = 0);
          },
          U = function () {
            (this.time = ""),
              (this.time2 = ""),
              (this.jackpotMoney = 0),
              (this.users = []),
              (this.results = []);
          };
        t(
          "default",
          ((y = F("XDSQJackpotHistoryView")),
          (f = M(s)),
          (v = M(s)),
          (w = M(s)),
          (k = M(l)),
          (H = M(l)),
          (S = M(c)),
          (D = M(c)),
          (P = M(c)),
          (J = M([c])),
          (Q = M([c])),
          y(
            ((z = e(
              (V = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "btn_prev", z, o(e)),
                    n(e, "btn_prev_detail", x, o(e)),
                    n(e, "btn_next", A, o(e)),
                    n(e, "lbl_page", C, o(e)),
                    n(e, "lbl_time_detail", L, o(e)),
                    n(e, "history_node", N, o(e)),
                    n(e, "history_table_title_node", j, o(e)),
                    n(e, "rank_node", B, o(e)),
                    n(e, "item_nodes", I, o(e)),
                    n(e, "rank_item_nodes", T, o(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.max_pages = 0),
                    (e.item_views = []),
                    (e.rank_item_views = []),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    var e = this;
                    t.prototype.onLoad.call(this),
                      this.btn_prev ||
                        u("XDSQJackpotHistoryView btn_prev is not asigned"),
                      this.btn_prev_detail ||
                        u(
                          "XDSQJackpotHistoryView btn_prev_detail is not asigned"
                        ),
                      this.btn_next ||
                        u("XDSQJackpotHistoryView btn_next is not asigned"),
                      this.lbl_page ||
                        u("XDSQJackpotHistoryView lbl_page is not asigned"),
                      this.lbl_time_detail ||
                        u(
                          "XDSQJackpotHistoryView lbl_time_detail is not asigned"
                        ),
                      this.history_node ||
                        u("XDSQJackpotHistoryView history_node is not asigned"),
                      this.history_table_title_node ||
                        u(
                          "XDSQJackpotHistoryView history_table_title_node is not asigned"
                        ),
                      this.rank_node ||
                        u("XDSQJackpotHistoryView rank_node is not asigned"),
                      this.btn_prev.node.on("click", function () {
                        e.currentPage > 1 &&
                          ((e.currentPage -= 1),
                          (e.lbl_page.string = e.currentPage.toString())),
                          e.fetchHistory(!1);
                      }),
                      this.btn_prev_detail.node.on("click", function () {
                        (e.rank_node.active = !1),
                          (e.lbl_time_detail.node.active = !1),
                          (e.history_node.active = !0),
                          (e.history_table_title_node.active = !0);
                      }),
                      this.btn_next.node.on("click", function () {
                        e.currentPage < e.max_pages &&
                          ((e.currentPage += 1),
                          (e.lbl_page.string = e.currentPage.toString())),
                          e.fetchHistory(!1);
                      });
                  }),
                  (r.goToFirstPage = function () {
                    (this.currentPage = 1),
                      (this.lbl_page.string = this.currentPage.toString());
                  }),
                  (r.fetchHistory = function (t) {
                    void 0 === t && (t = !0),
                      t && this.goToFirstPage(),
                      h.showLoadingView();
                    var e = 5 * (this.currentPage - 1);
                    _.sendFetchJackpotHistory(5, e);
                  }),
                  (r.showJackpotHistoryWithData = function (t) {
                    this._bets = [];
                    var e = t.items,
                      i = t.count;
                    this.max_pages = Math.ceil(i / 5);
                    for (var n = 0; n < e.length; n++) {
                      for (
                        var o = e[n], r = o.winners, a = new U(), s = 0;
                        s < r.length;
                        s++
                      ) {
                        var l = r[s],
                          c = new G();
                        (c.money = l.jackpotWin),
                          (c.displayName = l.displayName),
                          (c.betAmount = l.betAmount),
                          a.users.push(c);
                      }
                      a.jackpotMoney = o.jackpotAmount;
                      var u = o.timestamp,
                        p = new Date(u);
                      (a.time = b.formatTime(p)), (a.time2 = b.formatTime2(p));
                      for (
                        var _ = o.results, h = [], d = 0;
                        d < _.length;
                        d++
                      ) {
                        var m = _[d];
                        h.push(m);
                      }
                      (a.results = h), this._bets.push(a);
                    }
                    this.showJackpotHistory(!this.IsShowing());
                  }),
                  (r.showJackpotHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      this.item_views.length <= 0 &&
                        (this.item_views = this.item_nodes.map(function (t) {
                          return t.getComponent(m);
                        })),
                      this.item_views.forEach(function (t, i) {
                        var n = e._bets[i],
                          o = t.node.getComponent(p);
                        null != n && null != n
                          ? (o && (o.opacity = 255),
                            t.show(
                              n.time,
                              n.time2,
                              n.jackpotMoney,
                              n.results,
                              n.users
                            ))
                          : (o && (o.opacity = 1), t.hide());
                      }),
                      t && this.show();
                  }),
                  (r.showDetail = function (t, e) {
                    this.rank_item_views.length <= 0 &&
                      (this.rank_item_views = this.rank_item_nodes.map(
                        function (t) {
                          return t.getComponent(d);
                        }
                      )),
                      this.rank_item_views.forEach(function (e, i) {
                        var n = t[i],
                          o = e.node.getComponent(p);
                        null != n &&
                        null != n &&
                        0 != n.betAmount &&
                        0 != n.money
                          ? (o && (o.opacity = 255),
                            e.show(i + 1, n.displayName, n.money, n.betAmount))
                          : (o && (o.opacity = 1), e.hide());
                      }),
                      (this.lbl_time_detail.node.active = !0),
                      (this.lbl_time_detail.string = e),
                      (this.rank_node.active = !0),
                      (this.history_node.active = !1),
                      (this.history_table_title_node.active = !1);
                  }),
                  e
                );
              })(g)).prototype,
              "btn_prev",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (x = e(V.prototype, "btn_prev_detail", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (A = e(V.prototype, "btn_next", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (C = e(V.prototype, "lbl_page", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (L = e(V.prototype, "lbl_time_detail", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (N = e(V.prototype, "history_node", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (j = e(V.prototype, "history_table_title_node", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (B = e(V.prototype, "rank_node", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (I = e(V.prototype, "item_nodes", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (T = e(V.prototype, "rank_item_nodes", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (X = V))
          ) || X)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDSQJackpotRankItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var n, e, i, a, r, o, s, u, _, c, l, p;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (o = t._decorator),
            (s = t.Label),
            (u = t.Sprite),
            (_ = t.log),
            (c = t.Color),
            (l = t.Component);
        },
        function (t) {
          p = t.StringUtils;
        },
      ],
      execute: function () {
        var m, h, x, k, d, b, g, f, w, v, y, S, R;
        r._RF.push(
          {},
          "922858pOB9A07Ej5Rf/H6JR",
          "XDSQJackpotRankItemView",
          void 0
        );
        var D = o.ccclass,
          I = o.property;
        t(
          "default",
          ((m = D("XDSQJackpotRankItemView")),
          (h = I(s)),
          (x = I(u)),
          (k = I(s)),
          (d = I(s)),
          (b = I(s)),
          m(
            ((w = n(
              (f = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, r = new Array(e), o = 0;
                    o < e;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (n = t.call.apply(t, [this].concat(r)) || this),
                    i(n, "txt_rank", w, a(n)),
                    i(n, "spr_rank", v, a(n)),
                    i(n, "txt_username", y, a(n)),
                    i(n, "txt_win_amount", S, a(n)),
                    i(n, "txt_bet_amount", R, a(n)),
                    n
                  );
                }
                e(n, t);
                var r = n.prototype;
                return (
                  (r.onLoad = function () {
                    this.txt_rank ||
                      _("XDSQJackpotRankItemView txt_rank is not asigned"),
                      this.spr_rank ||
                        _("XDSQJackpotRankItemView spr_rank is not asigned"),
                      this.txt_username ||
                        _(
                          "XDSQJackpotRankItemView txt_username is not asigned"
                        ),
                      this.txt_win_amount ||
                        _(
                          "XDSQJackpotRankItemView txt_win_amount is not asigned"
                        );
                  }),
                  (r.show = function (t, n, e, i) {
                    void 0 === i && (i = 0),
                      (this.node.active = !0),
                      t > 3
                        ? ((this.txt_rank.node.active = !0),
                          (this.spr_rank.node.active = !1),
                          (this.txt_rank.string = t.toString()))
                        : ((this.txt_rank.node.active = !1),
                          (this.spr_rank.node.active = !0)),
                      (this.txt_username.string = n.toString()),
                      (this.txt_win_amount.color = c.WHITE),
                      (this.txt_win_amount.string = p.formatNumber(e)),
                      this.txt_bet_amount &&
                        (this.txt_bet_amount.string = p.formatNumber(i)),
                      (this.txt_username.node.active = !0),
                      (this.txt_win_amount.node.active = !0),
                      this.txt_bet_amount &&
                        (this.txt_bet_amount.node.active = !0);
                  }),
                  (r.hide = function () {
                    (this.node.active = !1),
                      (this.spr_rank.node.active = !1),
                      (this.txt_rank.node.active = !1),
                      (this.txt_username.node.active = !1),
                      (this.txt_win_amount.node.active = !1);
                  }),
                  (r.reset = function () {
                    (this.txt_rank.string = ""),
                      (this.txt_username.string = ""),
                      (this.txt_win_amount.string = "");
                  }),
                  n
                );
              })(l)).prototype,
              "txt_rank",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (v = n(f.prototype, "spr_rank", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (y = n(f.prototype, "txt_username", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (S = n(f.prototype, "txt_win_amount", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (R = n(f.prototype, "txt_bet_amount", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = f))
          ) || g)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDSQNetworkHandler.ts",
  ["cc", "./XocDiaSquidGameView.ts", "./GamePlatformManager.ts", "./State.ts"],
  function (e) {
    "use strict";
    var n, _, o, E, s, a, T;
    return {
      setters: [
        function (e) {
          (n = e.cclegacy), (_ = e.log), (o = e.sys), (E = e.url);
        },
        function (e) {
          s = e.XocDiaSquidGameView;
        },
        function (e) {
          a = e.GamePlatformManager;
        },
        function (e) {
          T = e.state;
        },
      ],
      execute: function () {
        var t;
        n._RF.push({}, "b80b7bjyvBLOJpw5QxjGghT", "XDSQNetworkHandler", void 0),
          (function (e) {
            (e[(e.UNLOGGED_IN = 0)] = "UNLOGGED_IN"),
              (e[(e.LOGGED_IN = 1)] = "LOGGED_IN");
          })(t || (t = {}));
        var i,
          S,
          N,
          r = e(
            "XDSQNetworkHandler",
            (function () {
              function e() {}
              return (
                (e.init = function (n) {
                  _("XDSQNetworkHandler::Connecting to game server:" + n),
                    null != e.ws && e.close();
                  try {
                    o.Platform.ANDROID === o.platform
                      ? (e.ws = new WebSocket(
                          n,
                          null,
                          E.raw("resources/cacert.pem")
                        ))
                      : (e.ws = new WebSocket(n)),
                      (e.wsURL = n);
                  } catch (n) {
                    (e.IS_ERROR = !0), _("XDSQNetworkHandler::exception", n);
                  }
                  e.ws &&
                    ((e.ws.onopen = function (o) {
                      _(
                        "XDSQNetworkHandler::Connected to game server " +
                          n +
                          "," +
                          this.readyState
                      );
                      var E,
                        s = {};
                      (s.info = T.loginInfo),
                        (s.signature = T.signature),
                        (s.pid = a.getPlatformID()),
                        (s.subi = !0),
                        (E = [
                          S.LogIn_Type,
                          "ShakeDisk",
                          T.username,
                          T.password,
                          s,
                        ]),
                        e.send(E),
                        (e.IS_ERROR = !1),
                        (e.CLOSE_BY_MANUAL = !1);
                    }),
                    (e.ws.onmessage = function (n) {
                      var _ = s.getInstance();
                      if (_) {
                        var o = JSON.parse(n.data),
                          E = o[0],
                          a = o[1],
                          T = a.cmd;
                        switch (E) {
                          case i.LogIn_Response:
                            var S = o[1];
                            (e.NETWORK_STATE = S ? t.LOGGED_IN : t.UNLOGGED_IN),
                              _.onLoginResponse(S);
                            break;
                          case i.LogOut_Response:
                            (e.NETWORK_STATE = t.UNLOGGED_IN), _.loggedOut();
                            break;
                          case i.JoinRoom_Response:
                            _.onJoinRoomResponse(o);
                            break;
                          case i.LeaveRoom_Response:
                            _.onLeaveRoomResponse(o);
                            break;
                          case i.Ping_Response:
                            var r = o[1];
                            _.onPingResponse(r);
                            break;
                          case i.Extension_Response:
                            switch (T) {
                              case N.SUBSCRIBE_INFO:
                                _.onSubscribeInfo(a);
                                break;
                              case N.UNSUBSCRIBE_INFO:
                                _.onUnsubscribeInfo();
                                break;
                              case N.INGAME_JOIN_TABLE_INFOS:
                                _.onJoinTableInfo(a);
                                break;
                              case N.QUICK_PLAY:
                              case N.CREATE_TABLE:
                              case N.QUICK_PLAY_WITH_BET:
                                _.onQuickPlay(a);
                                break;
                              case N.INGAME_USER_LEAVE_AND_JOIN_TABLE:
                                _.onUserJoinAndLeaveTable(a);
                                break;
                              case N.SELF_BET:
                                _.onSelfBet(a);
                                break;
                              case N.BET_MULTI:
                                _.onBetMulti(a);
                                break;
                              case N.OTHERS_BET:
                                _.onOtherBet(a);
                                break;
                              case N.FETCH_JP_HISTORY:
                                _.onFetchJackpotHistory(a);
                                break;
                              case N.START_GAME:
                                _.onStartGame(a);
                                break;
                              case N.FINISH_GAME:
                                _.onFinishGame(a);
                                break;
                              case N.PAY_MONEY:
                                _.onPayMoney(a);
                                break;
                              case N.ERROR_MESSAGE:
                                _.onErrorMessage(a);
                                break;
                              case N.INGAME_USER_CHAT:
                                _.onUserChat(a);
                                break;
                              case N.UPDATE_HIDDEN_USER_COUNT:
                                _.onUpdateHiddenUserCount(a);
                                break;
                              case N.UPDATE_HIDDEN_USER_ONLINE:
                                _.onUpdateHiddenUserOnline(a);
                                break;
                              case N.INGAME_UPDATE_MONEY:
                                _.onUpdateMoney(a);
                                break;
                              case N.INGAME_JACKPOT:
                                _.onJackpot(a);
                                break;
                              case N.INGAME_GET_JACKPOTS:
                                _.onGetJackpot(a);
                                break;
                              case N.FIND_PLAYERS_TO_INVITE:
                                _.onGetPlayerToBeInvited(a);
                                break;
                              case N.REFRESH_MONEY:
                                _.onRefreshMoney(a);
                                break;
                              case N.USER_INFO:
                                _.onUserInfo(a);
                                break;
                              case N.MESSAGE_INGAME:
                                _.onInGameMessage(a);
                            }
                        }
                      }
                    }),
                    (e.ws.onerror = function (n) {
                      _("XDSQNetworkHandler::Send Text fired an error", n),
                        (e.IS_ERROR = !0),
                        e.reconnect();
                    }),
                    (e.ws.onclose = function (n) {
                      var o;
                      _("XDSQNetworkHandler::WebSocket instance closed. 1"),
                        (null != (o = s.getInstance()) && o.LOGGED_OUT) ||
                          e.CLOSE_BY_MANUAL ||
                          (_("XDSQNetworkHandler::WebSocket instance closed."),
                          e.reconnect());
                    }));
                }),
                (e.send = function (n) {
                  try {
                    e.ws && e.ws.send(JSON.stringify(n));
                  } catch (e) {
                    _("sendXDSQ:", e);
                  }
                }),
                (e.close = function () {
                  (e.CLOSE_BY_MANUAL = !0),
                    null != e.ws &&
                      (e.ws && e.ws.close(),
                      (e.ws.onopen = null),
                      (e.ws.onmessage = null),
                      (e.ws.onerror = null),
                      (e.ws.onclose = null),
                      (e.ws = null));
                }),
                (e.reconnect = function (n) {
                  void 0 === n && (n = 0),
                    0 == n && (n = e.TIME_DELAY_RECONNECT),
                    _("XDSQNetworkHandler::reconnect"),
                    setTimeout(function () {
                      e.init(e.wsURL);
                    }, n);
                }),
                (e.joinRoom = function () {
                  var n = {};
                  n.cmd = N.SUBSCRIBE_INFO;
                  var _ = [
                    S.ZonePlugin_Type,
                    "ShakeDisk",
                    "SD_ConMucPlugin",
                    n,
                  ];
                  e.send(_);
                }),
                (e.leaveRoom = function () {
                  var n = {};
                  n.cmd = N.UNSUBSCRIBE_INFO;
                  var _ = [
                    S.ZonePlugin_Type,
                    "ShakeDisk",
                    "SD_ConMucPlugin",
                    n,
                  ];
                  e.send(_);
                }),
                (e.sendPing = function (n) {
                  if (
                    (void 0 === n && (n = 0), e.NETWORK_STATE != t.UNLOGGED_IN)
                  ) {
                    var _ = n + 1,
                      o = [S.Ping_Type, "ShakeDisk", _, 0];
                    e.send(o);
                  }
                }),
                (e.sendChat = function (n, _) {
                  if (e.NETWORK_STATE != t.UNLOGGED_IN && e.canSendChat()) {
                    var o = { cmd: 102 };
                    o.mgs = n;
                    var E = [
                      S.ZonePlugin_Type,
                      "ShakeDisk",
                      "SD_ConMucPlugin",
                      o,
                    ];
                    e.send(E),
                      (e.timeoutChat = setTimeout(function () {
                        e.timeoutChat = null;
                      }, 2e3));
                  }
                }),
                (e.getUserInLobby = function () {
                  if (e.NETWORK_STATE != t.UNLOGGED_IN) {
                    var n = { cmd: 303, rid: "" },
                      _ = [
                        S.ZonePlugin_Type,
                        "ShakeDisk",
                        "SD_ConMucPlugin",
                        n,
                      ];
                    e.send(_);
                  }
                }),
                (e.sendInvitationsTo = function (n) {
                  if (e.NETWORK_STATE != t.UNLOGGED_IN) {
                    n.push("de97dffc-9fa2-46dc-8cee-3a2de75ba8d7"),
                      n.push("055ee000-a89e-476b-88c9-d0b33374aa02"),
                      n.push("222f9874-001f-4bf7-9042-1237bda4d19f");
                    var _ = { cmd: 304, rid: "" };
                    _.us = n;
                    var o = [S.ZonePlugin_Type, "Simms", "channelPlugin", _];
                    e.send(o);
                  }
                }),
                (e.canSendChat = function () {
                  return null == e.timeoutChat;
                }),
                (e.refreshInBackground = function () {
                  (e.NETWORK_STATE = t.UNLOGGED_IN), e.reconnect(0.1);
                }),
                (e.sendBet = function (n, _) {
                  var o = {};
                  (o.cmd = N.SELF_BET), (o.eid = n), (o.v = _);
                  var E = [
                    S.ZonePlugin_Type,
                    "ShakeDisk",
                    "SD_ConMucPlugin",
                    o,
                  ];
                  e.send(E);
                }),
                (e.sendBetMulti = function (n) {
                  var _ = {};
                  (_.cmd = N.BET_MULTI), (_.bs = n);
                  var o = [
                    S.ZonePlugin_Type,
                    "ShakeDisk",
                    "SD_ConMucPlugin",
                    _,
                  ];
                  e.send(o);
                }),
                (e.sendUpdateHiddenUserOnline = function (n, _) {
                  var o = {};
                  (o.cmd = N.UPDATE_HIDDEN_USER_ONLINE), (o.L = n), (o.S = _);
                  var E = [
                    S.ZonePlugin_Type,
                    "ShakeDisk",
                    "SD_ConMucPlugin",
                    o,
                  ];
                  e.send(E);
                }),
                (e.sendFetchJackpotHistory = function (n, _) {
                  var o = {};
                  (o.cmd = N.FETCH_JP_HISTORY), (o.limit = n), (o.skip = _);
                  var E = [
                    S.ZonePlugin_Type,
                    "ShakeDisk",
                    "SD_ConMucPlugin",
                    o,
                  ];
                  e.send(E);
                }),
                e
              );
            })()
          );
        (r.wsURL = ""),
          (r.ws = null),
          (r.NETWORK_STATE = t.UNLOGGED_IN),
          (r.IS_ERROR = !1),
          (r.CLOSE_BY_MANUAL = !1),
          (r.TIME_DELAY_RECONNECT = 5e3),
          (r.timeoutChat = null),
          (function (e) {
            (e[(e.LogIn_Response = 1)] = "LogIn_Response"),
              (e[(e.LogOut_Response = 2)] = "LogOut_Response"),
              (e[(e.JoinRoom_Response = 3)] = "JoinRoom_Response"),
              (e[(e.LeaveRoom_Response = 4)] = "LeaveRoom_Response"),
              (e[(e.Extension_Response = 5)] = "Extension_Response"),
              (e[(e.Ping_Response = 6)] = "Ping_Response");
          })(i || (i = {})),
          (function (e) {
            (e[(e.LogIn_Type = 1)] = "LogIn_Type"),
              (e[(e.LogOut_Type = 2)] = "LogOut_Type"),
              (e[(e.JoinRoom_Type = 3)] = "JoinRoom_Type"),
              (e[(e.LeaveRoom_Type = 4)] = "LeaveRoom_Type"),
              (e[(e.RoomPlugin_Type = 5)] = "RoomPlugin_Type"),
              (e[(e.ZonePlugin_Type = 6)] = "ZonePlugin_Type"),
              (e[(e.Ping_Type = 7)] = "Ping_Type");
          })(S || (S = {})),
          (function (e) {
            (e[(e.ERROR_MESSAGE = 1)] = "ERROR_MESSAGE"),
              (e[(e.MESSAGE_INGAME = 7)] = "MESSAGE_INGAME"),
              (e[(e.SELF_BET = 900)] = "SELF_BET"),
              (e[(e.OTHERS_BET = 901)] = "OTHERS_BET"),
              (e[(e.SET_HOST = 902)] = "SET_HOST"),
              (e[(e.HOST_SELL_ENTRY = 903)] = "HOST_SELL_ENTRY"),
              (e[(e.CANCEL_HOST = 910)] = "CANCEL_HOST"),
              (e[(e.GET_MAX_VALUE_BUYING_ENTRY = 911)] =
                "GET_MAX_VALUE_BUYING_ENTRY"),
              (e[(e.START_GAME = 904)] = "START_GAME"),
              (e[(e.USER_BUY_ENTRY = 905)] = "USER_BUY_ENTRY"),
              (e[(e.START_SELLING_ENTRY = 906)] = "START_SELLING_ENTRY"),
              (e[(e.FINISH_GAME = 907)] = "FINISH_GAME"),
              (e[(e.PAY_MONEY = 908)] = "PAY_MONEY"),
              (e[(e.REBET = 909)] = "REBET"),
              (e[(e.CAN_HET = 912)] = "CAN_HET"),
              (e[(e.SUBSCRIBE_INFO = 1950)] = "SUBSCRIBE_INFO"),
              (e[(e.UNSUBSCRIBE_INFO = 1951)] = "UNSUBSCRIBE_INFO"),
              (e[(e.USER_INFO = 100)] = "USER_INFO"),
              (e[(e.INGAME_USER_CHAT = 102)] = "INGAME_USER_CHAT"),
              (e[(e.INGAME_USER_LEAVE_AND_JOIN_TABLE = 200)] =
                "INGAME_USER_LEAVE_AND_JOIN_TABLE"),
              (e[(e.INGAME_JOIN_TABLE_INFOS = 202)] =
                "INGAME_JOIN_TABLE_INFOS"),
              (e[(e.INGAME_UPDATE_MONEY = 205)] = "INGAME_UPDATE_MONEY"),
              (e[(e.INGAME_JACKPOT = 206)] = "INGAME_JACKPOT"),
              (e[(e.INGAME_GET_JACKPOTS = 207)] = "INGAME_GET_JACKPOTS"),
              (e[(e.FIND_PLAYERS_TO_INVITE = 303)] = "FIND_PLAYERS_TO_INVITE"),
              (e[(e.QUICK_PLAY = 307)] = "QUICK_PLAY"),
              (e[(e.CREATE_TABLE = 308)] = "CREATE_TABLE"),
              (e[(e.REFRESH_MONEY = 310)] = "REFRESH_MONEY"),
              (e[(e.QUICK_PLAY_WITH_BET = 313)] = "QUICK_PLAY_WITH_BET"),
              (e[(e.UPDATE_HIDDEN_USER_COUNT = 1105)] =
                "UPDATE_HIDDEN_USER_COUNT"),
              (e[(e.UPDATE_HIDDEN_USER_ONLINE = 1106)] =
                "UPDATE_HIDDEN_USER_ONLINE"),
              (e[(e.BET_MULTI = 1953)] = "BET_MULTI"),
              (e[(e.FETCH_JP_HISTORY = 1963)] = "FETCH_JP_HISTORY");
          })(N || (N = {})),
          n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDSQSlotMachineCmp.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./XDSQSlotMachineColumn.ts"],
  function (n) {
    "use strict";
    var t, e, i, o, a, r, l, s, u, c, m, p, f;
    return {
      setters: [
        function (n) {
          (t = n.applyDecoratedDescriptor),
            (e = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (o = n.assertThisInitialized);
        },
        function (n) {
          (a = n.cclegacy),
            (r = n._decorator),
            (l = n.sp),
            (s = n.SpriteFrame),
            (u = n.Tween),
            (c = n.tween),
            (m = n.Component);
        },
        function (n) {
          (p = n.default), (f = n.SlotMachineState);
        },
      ],
      execute: function () {
        var _, h, g, S, b, d, y, w, E, v, A, k, z, I, D, M, T, P, C, L, x, N;
        a._RF.push({}, "b9aa3bAawdOPaZTtzajaAS8", "XDSQSlotMachineCmp", void 0);
        var F = r.ccclass,
          O = r.property;
        n(
          "default",
          ((_ = F("XDSQSlotMachineCmp")),
          (h = O(l.Skeleton)),
          (g = O([p])),
          (S = O(String)),
          (b = O(String)),
          (d = O(String)),
          (y = O(String)),
          (w = O(String)),
          (E = O([s])),
          (v = O([s])),
          _(
            (((N = (function (n) {
              function t() {
                for (
                  var t, e = arguments.length, a = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  a[r] = arguments[r];
                return (
                  (t = n.call.apply(n, [this].concat(a)) || this),
                  i(t, "skeleton", z, o(t)),
                  i(t, "colums", I, o(t)),
                  i(t, "anim_start_name", D, o(t)),
                  i(t, "anim_roll_name", M, o(t)),
                  i(t, "anim_loop_name", T, o(t)),
                  i(t, "anim_win_name", P, o(t)),
                  i(t, "anim_stop_name", C, o(t)),
                  i(t, "loaded_xingau_normal", L, o(t)),
                  i(t, "loaded_xingau_blur", x, o(t)),
                  (t.onMachineStopped = function () {}),
                  t
                );
              }
              e(t, n);
              var a = t.prototype;
              return (
                (a.onLoad = function () {
                  var n = this;
                  this.skeleton.setAnimation(0, this.anim_start_name, !1),
                    this.skeleton.setCompleteListener(function (t) {
                      var e;
                      (t.animation ? t.animation.name : "") ==
                        n.anim_start_name &&
                        (null == (e = n.skeleton) ||
                          e.setAnimation(0, n.anim_loop_name, !0));
                    });
                }),
                (a.init = function () {
                  var n = this;
                  this.colums.forEach(function (t) {
                    u.stopAllByTarget(t.node), t.setSlotMachineCmp(n), t.init();
                  }),
                    this.colums &&
                      this.colums[this.colums.length - 1] &&
                      (this.colums[this.colums.length - 1].onStopped =
                        function () {
                          return n.onMachineStopped();
                        });
                }),
                (a.spin = function () {
                  var n = this;
                  this.skeleton.setAnimation(0, this.anim_start_name, !1),
                    this.skeleton.setCompleteListener(function (t) {
                      var e,
                        i = t.animation ? t.animation.name : "";
                      i == n.anim_stop_name
                        ? null == (e = n.skeleton) ||
                          e.setAnimation(0, n.anim_loop_name, !0)
                        : i == n.anim_start_name &&
                          n.skeleton.setAnimation(0, n.anim_roll_name, !0);
                    }),
                    this.colums.forEach(function (n) {
                      n.init(), n.spin();
                    });
                }),
                (a.stop = function (n) {
                  var t = [0, 0.3, 0.6, 0.9];
                  this.colums.forEach(function (e, i) {
                    var o = e,
                      a = n[i];
                    c(o.node)
                      .sequence(
                        c().delay(t[i]),
                        c().call(function () {
                          o.stop(a);
                        })
                      )
                      .start();
                  });
                }),
                (a.stopWithoutFx = function (n) {
                  this.skeleton.setAnimation(0, this.anim_stop_name, !0);
                  var t = [0, 0.3, 0.6, 0.9];
                  this.colums.forEach(function (e, i) {
                    var o = e,
                      a = n[i];
                    c(o.node)
                      .sequence(
                        c().delay(t[i]),
                        c().call(function () {
                          e.stopNoFx(a);
                        })
                      )
                      .start();
                  });
                }),
                (a.cancelAllAction = function () {
                  this.colums.forEach(function (n, t) {
                    u.stopAllByTarget(n.node);
                  });
                }),
                (a.zoomInOut = function (n) {
                  this.colums.forEach(function (t, e) {
                    t.zoomInOut(n);
                  });
                }),
                (a.stopImmediately = function (n) {
                  this.colums.forEach(function (t, e) {
                    t.stopNoFx(n[e]);
                  });
                }),
                (a.isStopped = function () {
                  return (
                    this.colums.filter(function (n) {
                      return n.getstate() == f.STOPPED;
                    }).length >= this.colums.length
                  );
                }),
                (a.isSpinning = function () {
                  return (
                    this.colums.filter(function (n) {
                      return n.getstate() == f.SPINNING;
                    }).length >= this.colums.length
                  );
                }),
                (a.win = function () {
                  this.skeleton.setAnimation(0, this.anim_win_name, !0),
                    this.skeleton.setCompleteListener(function (n) {});
                }),
                t
              );
            })(m)).ORIGINAL_SPIN_SPEED = 500),
            (N.SPIN_SPEED = 500),
            (N.FIXED_DELTA_TIME = 0.016666000000004715),
            (N.TIME_TO_SHOW_RESULT = 0.05),
            (z = t((k = N).prototype, "skeleton", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (I = t(k.prototype, "colums", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (D = t(k.prototype, "anim_start_name", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "start to roll";
              },
            })),
            (M = t(k.prototype, "anim_roll_name", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "roll";
              },
            })),
            (T = t(k.prototype, "anim_loop_name", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "loop";
              },
            })),
            (P = t(k.prototype, "anim_win_name", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "animation";
              },
            })),
            (C = t(k.prototype, "anim_stop_name", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "roll stop";
              },
            })),
            (L = t(k.prototype, "loaded_xingau_normal", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (x = t(k.prototype, "loaded_xingau_blur", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (A = k))
          ) || A)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDSQSlotMachineColumn.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./XDSQSlotMachineCmp.ts",
    "./XDSQSlotMachineItemView.ts",
  ],
  function (t) {
    "use strict";
    var i, o, e, n, s, p, m, a, r, h, u, _, c;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (p = t._decorator),
            (m = t.Layout),
            (a = t.UITransform),
            (r = t.Vec3),
            (h = t.tween),
            (u = t.Component);
        },
        function (t) {
          _ = t.default;
        },
        function (t) {
          c = t.default;
        },
      ],
      execute: function () {
        var l, f, d, y, S, g, v, E, I;
        t("SlotMachineState", void 0),
          s._RF.push(
            {},
            "69e61Yjz+9A6aqb3KZANxv9",
            "XDSQSlotMachineColumn",
            void 0
          );
        var P,
          T = p.ccclass,
          b = p.property;
        !(function (t) {
          (t[(t.SPINNING = 0)] = "SPINNING"),
            (t[(t.CHECK_TO_STOP = 1)] = "CHECK_TO_STOP"),
            (t[(t.STOPPING = 2)] = "STOPPING"),
            (t[(t.STOPPED = 3)] = "STOPPED");
        })(P || (P = t("SlotMachineState", {})));
        t(
          "default",
          ((l = T("XDSQSlotMachineColumn")),
          (f = b([c])),
          (d = b(m)),
          (y = b(Boolean)),
          l(
            ((v = i(
              (g = (function (t) {
                function i() {
                  for (
                    var i, o = arguments.length, s = new Array(o), p = 0;
                    p < o;
                    p++
                  )
                    s[p] = arguments[p];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    e(i, "items", v, n(i)),
                    e(i, "layout", E, n(i)),
                    e(i, "use_random_texture", I, n(i)),
                    (i.state = P.STOPPED),
                    (i.item_position_y_limited = 0),
                    (i.item_position_y_top = 0),
                    (i.item_position_y_bottom = 0),
                    (i.item_position_y_stop = 0),
                    (i.item_top = null),
                    (i.onStopped = function () {}),
                    (i.time = 0),
                    i
                  );
                }
                o(i, t);
                var s = i.prototype;
                return (
                  (s.onLoad = function () {
                    var t,
                      i,
                      o,
                      e =
                        null == (t = this.items[0])
                          ? void 0
                          : t.node.getComponent(a);
                    (this.item_position_y_bottom =
                      null == (i = this.items[0]) ? void 0 : i.node.position.y),
                      e &&
                        (this.item_position_y_stop =
                          this.item_position_y_bottom -
                          e.contentSize.height / 20),
                      (this.item_position_y_top =
                        null == (o = this.items[this.items.length - 1])
                          ? void 0
                          : o.node.position.y),
                      e &&
                        (this.item_position_y_limited =
                          this.item_position_y_bottom -
                          e.contentSize.height -
                          this.layout.spacingY);
                  }),
                  (s.init = function () {
                    (this.state = P.STOPPED),
                      this.items.forEach(function (t) {
                        return t.init();
                      });
                  }),
                  (s.setSlotMachineCmp = function (t) {
                    this.items.forEach(function (i) {
                      return i.setSlotMachineCmp(t);
                    });
                  }),
                  (s.spin = function () {
                    (this.item_top = this.getTopItem()),
                      this.items.forEach(function (t) {
                        return t.blur();
                      }),
                      (this.state = P.SPINNING);
                  }),
                  (s.stop = function (t) {
                    var i, o;
                    (this.item_top = this.getTopItem()),
                      null == (i = this.item_top) || i.setXiNgau(t),
                      null == (o = this.item_top) || o.bright(),
                      (this.state = P.CHECK_TO_STOP);
                  }),
                  (s.stopNoFx = function (t) {
                    var i, o, e;
                    (this.item_top = this.getBottomItem()),
                      null == (i = this.item_top) || i.setXiNgau(t),
                      null == (o = this.item_top) || o.bright(),
                      null == (e = this.item_top) || e.zoomInOut(),
                      (this.state = P.STOPPED),
                      this.onStopped && this.onStopped();
                  }),
                  (s.zoomInOut = function (t) {
                    var i;
                    (this.item_top = this.getBottomItem()),
                      null == (i = this.item_top) || i.zoomInOut(t);
                  }),
                  (s.getstate = function () {
                    return this.state;
                  }),
                  (s.update = function (t) {
                    switch (this.state) {
                      case P.SPINNING:
                        this.spinning(t);
                        break;
                      case P.CHECK_TO_STOP:
                        this.checkToStop(t);
                    }
                  }),
                  (s.getTopItem = function () {
                    var t = this.items[0];
                    return (
                      this.items.forEach(function (i) {
                        i.node.position.y >= t.node.position.y && (t = i);
                      }),
                      t
                    );
                  }),
                  (s.getBottomItem = function () {
                    var t = this.items[0];
                    return (
                      this.items.forEach(function (i) {
                        i.node.position.y < t.node.position.y && (t = i);
                      }),
                      t
                    );
                  }),
                  (s.spinning = function (t) {
                    var i = this;
                    if (this.use_random_texture)
                      return (
                        this.time >= 0.005 &&
                          (this.items.forEach(function (t) {
                            t.randomize();
                          }),
                          (this.time = 0)),
                        void (this.time += t)
                      );
                    var o = !1;
                    this.items.forEach(function (t) {
                      var e = new r(t.node.position);
                      if (
                        ((e.y -= _.SPIN_SPEED * _.FIXED_DELTA_TIME),
                        e.y <= i.item_position_y_limited)
                      ) {
                        var n,
                          s = i.getTopItem(),
                          p =
                            null == (n = i.items[0])
                              ? void 0
                              : n.node.getComponent(a);
                        p &&
                          (i.item_position_y_top =
                            s.node.position.y + 0.7 * p.contentSize.height),
                          (e.y = i.item_position_y_top),
                          (i.item_top = t),
                          (o = !0);
                      }
                      t.node.position = e;
                    }),
                      o && this.sort();
                  }),
                  (s.sort = function () {
                    this.items = this.items.sort(function (t, i) {
                      return t.node.position.y < i.node.position.y ? -1 : 1;
                    });
                  }),
                  (s.checkToStop = function (t) {
                    var i = this;
                    this.items.forEach(function (t) {
                      var o = new r(t.node.position);
                      if (
                        ((o.y -= _.SPIN_SPEED * _.FIXED_DELTA_TIME),
                        o.y <= i.item_position_y_limited)
                      ) {
                        var e,
                          n = i.getTopItem(),
                          s =
                            null == (e = i.items[0])
                              ? void 0
                              : e.node.getComponent(a);
                        s &&
                          (i.item_position_y_top =
                            n.node.position.y + 0.7 * s.contentSize.height),
                          (o.y = i.item_position_y_top);
                      }
                      t.node.position = o;
                    }),
                      this.item_top &&
                        this.item_top.node.position.y <=
                          this.item_position_y_stop &&
                        (this.bounce(), (this.state = P.STOPPING));
                  }),
                  (s.bounce = function () {
                    var t = this;
                    if (this.item_top) {
                      this.sort();
                      var i = new r(this.item_top.node.position);
                      (i.y = this.item_position_y_stop),
                        (this.item_top.node.position = i),
                        this.items.forEach(function (i, o) {
                          if (t.item_top && i.name != t.item_top.name) {
                            var e = new r(i.node.position);
                            if (0 == o) {
                              var n,
                                s =
                                  null == (n = t.items[o + 1])
                                    ? void 0
                                    : n.node.getComponent(a);
                              s &&
                                (e.y =
                                  t.items[o + 1].node.position.y -
                                  (t.layout.spacingY + s.contentSize.height));
                            } else {
                              var p,
                                m =
                                  null == (p = t.items[o - 1])
                                    ? void 0
                                    : p.node.getComponent(a);
                              m &&
                                (e.y =
                                  t.items[o - 1].node.position.y +
                                  t.layout.spacingY +
                                  m.contentSize.height);
                            }
                            i.node.position = e;
                          }
                        });
                      var o =
                        Math.abs(this.item_position_y_stop) -
                        Math.abs(this.item_position_y_bottom);
                      this.items.forEach(function (i) {
                        h(i.node)
                          .sequence(
                            h().by(0.1, { position: new r(0, o, 0) }),
                            h().call(function () {
                              (t.state = P.STOPPED),
                                t.onStopped && t.onStopped(),
                                t.items.forEach(function (i) {
                                  var o = i.getComponentsInChildren(c);
                                  t.item_top &&
                                    i.name != t.item_top.name &&
                                    o.forEach(function (t, i) {
                                      t.disable();
                                    });
                                });
                            })
                          )
                          .start();
                      });
                    }
                  }),
                  i
                );
              })(u)).prototype,
              "items",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (E = i(g.prototype, "layout", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (I = i(g.prototype, "use_random_texture", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (S = g))
          ) || S)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDSQSlotMachineItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUtils.ts"],
  function (i) {
    "use strict";
    var t, e, n, o, r, s, a, l, u, c, h, p, m;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (e = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (r = i.cclegacy),
            (s = i._decorator),
            (a = i.Sprite),
            (l = i.Vec3),
            (u = i.Tween),
            (c = i.UIOpacity),
            (h = i.tween),
            (p = i.Component);
        },
        function (i) {
          m = i.default;
        },
      ],
      execute: function () {
        var g, d, f, v, _;
        r._RF.push(
          {},
          "de6eepmzjNIaIX6W3vtv0oM",
          "XDSQSlotMachineItemView",
          void 0
        );
        var x = s.ccclass,
          y = s.property,
          M = i(
            "XiNgauItem",
            (function () {
              function i() {
                this.code = 0;
              }
              var t = i.prototype;
              return (
                (t.decodeItem = function (i) {
                  this.code = i;
                }),
                (t.getResourceNormalName = function (i) {
                  return (
                    void 0 === i && (i = !1),
                    this.code.toString() + (i ? ".png" : "")
                  );
                }),
                (t.getResourceBlurName = function (i) {
                  return (
                    void 0 === i && (i = !1),
                    this.code.toString() + "_blur" + (i ? ".png" : "")
                  );
                }),
                i
              );
            })()
          );
        i(
          "default",
          ((g = x("XDSQSlotMachineItemView")),
          (d = y(a)),
          g(
            ((_ = t(
              (v = (function (i) {
                function t() {
                  for (
                    var t, e = arguments.length, r = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (t = i.call.apply(i, [this].concat(r)) || this),
                    n(t, "spr_item", _, o(t)),
                    (t.originPos = null),
                    (t.originScale = null),
                    (t.xingau = null),
                    (t.slotMachineCmp = null),
                    t
                  );
                }
                e(t, i);
                var r = t.prototype;
                return (
                  (r.setSlotMachineCmp = function (i) {
                    this.slotMachineCmp = i;
                  }),
                  (r.init = function (i) {
                    null == this.originPos &&
                      (this.originPos = new l(this.node.position)),
                      null == this.originScale &&
                        (this.originScale = new l(this.spr_item.node.scale)),
                      u.stopAllByTarget(this.node),
                      this.node.setPosition(this.originPos),
                      (this.xingau = new M());
                    var t = m.getRandomInt(1, 7);
                    this.xingau.decodeItem(t), this.bright();
                  }),
                  (r.randomize = function () {
                    this.xingau = new M();
                    var i = m.getRandomInt(1, 7);
                    this.xingau.decodeItem(i), this.blur();
                  }),
                  (r.updateTexture = function () {
                    if (null != this.xingau) {
                      var i = this.xingau.getResourceNormalName();
                      if (
                        null != this.slotMachineCmp &&
                        null != this.slotMachineCmp
                      ) {
                        var t = this.slotMachineCmp.loaded_xingau_normal.filter(
                          function (t) {
                            return t.name.indexOf(i) >= 0;
                          }
                        )[0];
                        t && (this.spr_item.spriteFrame = t);
                      }
                    }
                  }),
                  (r.setXiNgau = function (i) {
                    null != i && (this.xingau = i);
                  }),
                  (r.blur = function () {
                    if (null != this.xingau) {
                      var i = this.xingau.getResourceBlurName();
                      if (
                        null != this.slotMachineCmp &&
                        null != this.slotMachineCmp
                      ) {
                        var t = this.slotMachineCmp.loaded_xingau_blur.filter(
                          function (t) {
                            return t.name.indexOf(i) >= 0;
                          }
                        )[0];
                        t && (this.spr_item.spriteFrame = t);
                      }
                      this.spr_item.node.active = !0;
                      var e = this.spr_item.node.getComponent(c);
                      e && (e.opacity = 50);
                    }
                  }),
                  (r.bright = function () {
                    if (null != this.xingau) {
                      var i = this.xingau.getResourceNormalName();
                      if (
                        null != this.slotMachineCmp &&
                        null != this.slotMachineCmp
                      ) {
                        var t = this.slotMachineCmp.loaded_xingau_normal.filter(
                          function (t) {
                            return t.name.indexOf(i) >= 0;
                          }
                        )[0];
                        t && (this.spr_item.spriteFrame = t);
                      }
                      this.spr_item.node.active = !0;
                      var e = this.spr_item.node.getComponent(c);
                      e && (e.opacity = 255);
                    }
                  }),
                  (r.zoomInOut = function (i) {
                    if (
                      (void 0 === i && (i = 0),
                      u.stopAllByTarget(this.spr_item.node),
                      null != this.originScale)
                    ) {
                      var t = new l(this.originScale);
                      h(this.spr_item.node)
                        .delay(i)
                        .to(0.1, {
                          scale: new l(1.1 * t.x, 1.1 * t.y, 1.1 * t.z),
                        })
                        .to(0.1, { scale: new l(t) })
                        .start();
                    }
                  }),
                  (r.disable = function () {
                    this.spr_item.node.active = !1;
                  }),
                  t
                );
              })(p)).prototype,
              "spr_item",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (f = v))
          ) || f)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDSQSoiCauPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SettingPopup.ts",
    "./ScaleCmp.ts",
  ],
  function (t) {
    "use strict";
    var e, s, i, n, r, a, l, o, u, p, c, b;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (s = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (a = t._decorator),
            (l = t.Label),
            (o = t.Sprite),
            (u = t.SpriteFrame),
            (p = t.Vec3);
        },
        function (t) {
          c = t.SettingPopup;
        },
        function (t) {
          b = t.default;
        },
      ],
      execute: function () {
        var h, _, g, f, S, m, d, v, F, y, w;
        r._RF.push({}, "b55c3S/rwpCY7rpUKBGOSLc", "XDSQSoiCauPopup", void 0);
        var C = a.ccclass,
          P = a.property;
        t(
          "XDSQSoiCauPopup",
          ((h = C("XDSQSoiCauPopup")),
          (_ = P([l])),
          (g = P([o])),
          (f = P(u)),
          (S = P(u)),
          h(
            ((v = e(
              (d = (function (t) {
                function e() {
                  for (
                    var e, s = arguments.length, r = new Array(s), a = 0;
                    a < s;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    i(e, "lbl_stats", v, n(e)),
                    i(e, "cau_items", F, n(e)),
                    i(e, "sprFrame_chan", y, n(e)),
                    i(e, "sprFrame_le", w, n(e)),
                    e
                  );
                }
                s(e, t);
                var r = e.prototype;
                return (
                  (r.updateBangSoiCau = function (t, e, s, i, n, r, a) {
                    var l = this;
                    (this.lbl_stats[0].string = (t < 10 ? "0" : "") + t),
                      (this.lbl_stats[1].string = (e < 10 ? "0" : "") + e),
                      this.lbl_stats[2] &&
                        (this.lbl_stats[2].string =
                          (s < 10 ? "0" : "") + s.toString()),
                      this.lbl_stats[3] &&
                        (this.lbl_stats[3].string =
                          (i < 10 ? "0" : "") + i.toString()),
                      this.lbl_stats[4] &&
                        (this.lbl_stats[4].string =
                          (n < 10 ? "0" : "") + n.toString()),
                      this.lbl_stats[5] &&
                        (this.lbl_stats[5].string =
                          (r < 10 ? "0" : "") + r.toString());
                    var o = null != this.lbl_stats[2] ? 0.7 : 1;
                    this.cau_items.forEach(function (t, e) {
                      var s = t.getComponent(b);
                      e < a.length
                        ? (s &&
                            (e == a.length - 1
                              ? ((s.enabled = !0), s.run(o))
                              : (s.stop(new p(o, o, o)), (s.enabled = !1))),
                          (t.enabled = !0),
                          (t.spriteFrame = a[e]
                            ? l.sprFrame_chan
                            : l.sprFrame_le))
                        : ((t.enabled = !1),
                          s && (s.stop(new p(o, o, o)), (s.enabled = !1)));
                    });
                  }),
                  (r.updateBangSoiCau2 = function (t) {
                    var e = this,
                      s = 0,
                      i = 0,
                      n = 0,
                      r = 0,
                      a = 0,
                      l = 0;
                    t.forEach(function (t) {
                      t % 2 != 0 ? i++ : s++,
                        2 != t &&
                          (0 == t
                            ? a++
                            : 1 == t
                            ? l++
                            : 3 == t
                            ? r++
                            : 4 == t && n++);
                    }),
                      (this.lbl_stats[0].string = (s < 10 ? "0" : "") + s),
                      (this.lbl_stats[1].string = (i < 10 ? "0" : "") + i),
                      this.lbl_stats[2] &&
                        (this.lbl_stats[2].string =
                          (a < 10 ? "0" : "") + a.toString()),
                      this.lbl_stats[3] &&
                        (this.lbl_stats[3].string =
                          (l < 10 ? "0" : "") + l.toString()),
                      this.lbl_stats[4] &&
                        (this.lbl_stats[4].string =
                          (n < 10 ? "0" : "") + n.toString()),
                      this.lbl_stats[5] &&
                        (this.lbl_stats[5].string =
                          (r < 10 ? "0" : "") + r.toString());
                    var o = null != this.lbl_stats[2] ? 0.7 : 1;
                    this.cau_items.forEach(function (s, i) {
                      var n = s.getComponent(b);
                      i < t.length
                        ? (n &&
                            (i == t.length - 1
                              ? ((n.enabled = !0), n.run(o))
                              : (n.stop(new p(o, o, o)), (n.enabled = !1))),
                          (s.enabled = !0),
                          (s.spriteFrame =
                            t[i] % 2 == 0 ? e.sprFrame_chan : e.sprFrame_le))
                        : ((s.enabled = !1),
                          n && (n.stop(new p(o, o, o)), (n.enabled = !1)));
                    });
                  }),
                  e
                );
              })(c)).prototype,
              "lbl_stats",
              [_],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (F = e(d.prototype, "cau_items", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (y = e(d.prototype, "sprFrame_chan", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = e(d.prototype, "sprFrame_le", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = d))
          ) || m)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/xocdia-squidgame",
  [
    "./GamePlayBridge.ts",
    "./ScrollViewInfoPopup2.ts",
    "./XDSQSoiCauPopup.ts",
    "./XDSQSlotMachineCmp.ts",
    "./XDSQSlotMachineColumn.ts",
    "./XDSQSlotMachineItemView.ts",
    "./XocDiaSquidGameView.ts",
    "./XDSQJackpotHistoryItemView.ts",
    "./XDSQJackpotHistoryView.ts",
    "./XDSQJackpotRankItemView.ts",
    "./XDSQNetworkHandler.ts",
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
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/XocDiaSquidGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./XDSQNetworkHandler.ts",
    "./ScrollViewInfoPopup2.ts",
    "./GamePlayBridge.ts",
    "./BetEntry.ts",
    "./BaseBetGameView.ts",
    "./BetGameSettingPopup.ts",
    "./BetGameUserChatPopup.ts",
    "./BetGameUserInvitePopup.ts",
    "./BetGameUserOnlinePopup.ts",
    "./XDSQSlotMachineCmp.ts",
    "./XDSQSlotMachineItemView.ts",
    "./XDSQJackpotHistoryView.ts",
    "./BubbleChat.ts",
    "./JackpotItemView.ts",
    "./State.ts",
    "./GameUtils.ts",
    "./GameConfigManager.ts",
    "./PlayerView.ts",
    "./BetGameData.ts",
    "./ChipPanel.ts",
    "./NoHuView.ts",
    "./XDSQSoiCauPopup.ts",
    "./EventManager.ts",
  ],
  function (t) {
    "use strict";
    var e,
      n,
      i,
      a,
      o,
      s,
      l,
      r,
      u,
      h,
      c,
      d,
      p,
      f,
      _,
      b,
      m,
      g,
      v,
      w,
      y,
      C,
      S,
      B,
      k,
      I,
      P,
      V,
      x,
      D,
      E,
      U,
      A,
      G,
      R,
      M,
      O,
      T,
      z,
      H,
      X,
      N,
      L,
      F,
      j,
      J,
      q,
      Q,
      K,
      W;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (s = t._decorator),
            (l = t.Button),
            (r = t.sp),
            (u = t.Label),
            (h = t.ProgressBar),
            (c = t.SpriteFrame),
            (d = t.Sprite),
            (p = t.UITransform),
            (f = t.AudioClip),
            (_ = t.Node),
            (b = t.UIOpacity),
            (m = t.game),
            (g = t.Game),
            (v = t.sys),
            (w = t.Vec3),
            (y = t.log),
            (C = t.Tween),
            (S = t.tween),
            (B = t.assetManager),
            (k = t.Prefab);
        },
        function (t) {
          I = t.XDSQNetworkHandler;
        },
        function (t) {
          P = t.ScrollViewInfoPopup;
        },
        function (t) {
          V = t.GamePlayBridge;
        },
        function (t) {
          x = t.BetEntry;
        },
        function (t) {
          D = t.BaseBetGameView;
        },
        function (t) {
          E = t.BetGameSettingPopup;
        },
        function (t) {
          U = t.BetGameUserChatPopup;
        },
        function (t) {
          A = t.BetGameUserInvitePopup;
        },
        function (t) {
          G = t.BetGameUserOnlinePopup;
        },
        function (t) {
          R = t.default;
        },
        function (t) {
          M = t.XiNgauItem;
        },
        function (t) {
          O = t.default;
        },
        function (t) {
          T = t.BubbleChat;
        },
        function (t) {
          z = t.JackpotItemView;
        },
        function (t) {
          H = t.state;
        },
        function (t) {
          X = t.default;
        },
        function (t) {
          N = t.GameConfigManager;
        },
        function (t) {
          (L = t.PlayerView), (F = t.PlayerInfo);
        },
        function (t) {
          j = t.UserBetData;
        },
        function (t) {
          J = t.ChipPanel;
        },
        function (t) {
          q = t.default;
        },
        function (t) {
          Q = t.XDSQSoiCauPopup;
        },
        function (t) {
          (K = t.eventManager), (W = t.EventKey);
        },
      ],
      execute: function () {
        var Y,
          Z,
          $,
          tt,
          et,
          nt,
          it,
          at,
          ot,
          st,
          lt,
          rt,
          ut,
          ht,
          ct,
          dt,
          pt,
          ft,
          _t,
          bt,
          mt,
          gt,
          vt,
          wt,
          yt,
          Ct,
          St,
          Bt,
          kt,
          It,
          Pt,
          Vt,
          xt,
          Dt,
          Et,
          Ut,
          At,
          Gt,
          Rt,
          Mt,
          Ot,
          Tt,
          zt,
          Ht,
          Xt,
          Nt,
          Lt,
          Ft,
          jt,
          Jt,
          qt,
          Qt,
          Kt,
          Wt,
          Yt,
          Zt,
          $t,
          te,
          ee,
          ne,
          ie,
          ae,
          oe,
          se,
          le,
          re,
          ue,
          he,
          ce,
          de,
          pe,
          fe,
          _e,
          be,
          me,
          ge,
          ve,
          we,
          ye,
          Ce,
          Se,
          Be,
          ke,
          Ie,
          Pe,
          Ve,
          xe,
          De,
          Ee,
          Ue,
          Ae,
          Ge,
          Re,
          Me,
          Oe,
          Te,
          ze,
          He,
          Xe,
          Ne,
          Le,
          Fe,
          je,
          Je,
          qe,
          Qe,
          Ke,
          We,
          Ye,
          Ze,
          $e,
          tn,
          en,
          nn;
        o._RF.push(
          {},
          "8d51bix1QZFCpUX30lMyhGf",
          "XocDiaSquidGameView",
          void 0
        );
        var an = s.ccclass,
          on = s.property;
        t(
          "XocDiaSquidGameView",
          ((Y = an("XocDiaSquidGameView")),
          (Z = on(z)),
          ($ = on([x])),
          (tt = on(l)),
          (et = on(r.Skeleton)),
          (nt = on(r.Skeleton)),
          (it = on(u)),
          (at = on(h)),
          (ot = on(u)),
          (st = on([L])),
          (lt = on(L)),
          (rt = on(G)),
          (ut = on(U)),
          (ht = on(A)),
          (ct = on(J)),
          (dt = on(l)),
          (pt = on(l)),
          (ft = on([l])),
          (_t = on(l)),
          (bt = on(l)),
          (mt = on(l)),
          (gt = on(l)),
          (vt = on(l)),
          (wt = on(l)),
          (yt = on(P)),
          (Ct = on(c)),
          (St = on(c)),
          (Bt = on(c)),
          (kt = on(c)),
          (It = on([d])),
          (Pt = on([c])),
          (Vt = on(p)),
          (xt = on(Q)),
          (Dt = on([d])),
          (Et = on([c])),
          (Ut = on(u)),
          (At = on(u)),
          (Gt = on(E)),
          (Rt = on(f)),
          (Mt = on(f)),
          (Ot = on(f)),
          (Tt = on(f)),
          (zt = on(f)),
          (Ht = on(f)),
          (Xt = on([f])),
          (Nt = on(f)),
          (Lt = on(r.Skeleton)),
          (Ft = on(T)),
          (jt = on(_)),
          (Jt = on(q)),
          (qt = on(O)),
          (Qt = on(R)),
          (Kt = on([_])),
          (Wt = on(_)),
          (Yt = on(_)),
          (Zt = on([b])),
          Y(
            (((nn = (function (t) {
              function e() {
                for (
                  var e, n = arguments.length, o = new Array(n), s = 0;
                  s < n;
                  s++
                )
                  o[s] = arguments[s];
                return (
                  (e = t.call.apply(t, [this].concat(o)) || this),
                  i(e, "jackpotItemView", ee, a(e)),
                  i(e, "bauCuaBetEntries", ne, a(e)),
                  i(e, "btn_test", ie, a(e)),
                  i(e, "shake_anim", ae, a(e)),
                  i(e, "count_down_anim", oe, a(e)),
                  i(e, "lbl_countdown2", se, a(e)),
                  i(e, "lbl_countdown", le, a(e)),
                  i(e, "lbl_userOnline", re, a(e)),
                  i(e, "playerViews", ue, a(e)),
                  i(e, "my_info", he, a(e)),
                  i(e, "userOnlinePopup", ce, a(e)),
                  i(e, "userChatPopup", de, a(e)),
                  i(e, "userInvitePopup", pe, a(e)),
                  i(e, "chipPanel", fe, a(e)),
                  i(e, "btn_user", _e, a(e)),
                  i(e, "btn_invite", be, a(e)),
                  i(e, "btn_invites", me, a(e)),
                  i(e, "btn_chat", ge, a(e)),
                  i(e, "btn_soicau", ve, a(e)),
                  i(e, "btn_exit", we, a(e)),
                  i(e, "btn_datlai", ye, a(e)),
                  i(e, "btn_datx2", Ce, a(e)),
                  i(e, "btn_huongdan", Se, a(e)),
                  i(e, "scrollViewInfoPopup", Be, a(e)),
                  i(e, "btn_datx2_normal", ke, a(e)),
                  i(e, "btn_datx2_disable", Ie, a(e)),
                  i(e, "btn_datlai_normal", Pe, a(e)),
                  i(e, "btn_datlai_disable", Ve, a(e)),
                  i(e, "spr_result", xe, a(e)),
                  i(e, "sprFrame_result", De, a(e)),
                  i(e, "dice_result_node", Ee, a(e)),
                  i(e, "soiCauPopup", Ue, a(e)),
                  i(e, "last_result", Ae, a(e)),
                  i(e, "sprFrame_cau_result", Ge, a(e)),
                  i(e, "lbl_chan_count", Re, a(e)),
                  i(e, "lbl_le_count", Me, a(e)),
                  i(e, "bauCuaSettingPopup", Oe, a(e)),
                  i(e, "xocdia_bgm_music", Te, a(e)),
                  i(e, "shake_disk_sfx", ze, a(e)),
                  i(e, "session_start_sfx", He, a(e)),
                  i(e, "bet_sfx", Xe, a(e)),
                  i(e, "return_avatar_chip_sfx", Ne, a(e)),
                  i(e, "return_dealer_chip_sfx", Le, a(e)),
                  i(e, "sfx_dealer", Fe, a(e)),
                  i(e, "session_finish_sfx", je, a(e)),
                  i(e, "sp_dealer", Je, a(e)),
                  i(e, "dealer_talk", qe, a(e)),
                  i(e, "btn_jackpot_history", Qe, a(e)),
                  i(e, "noHuView", Ke, a(e)),
                  i(e, "jackpotHistoryView", We, a(e)),
                  i(e, "slotMachineCmp", Ye, a(e)),
                  i(e, "node_chips", Ze, a(e)),
                  i(e, "node_layer_1", $e, a(e)),
                  i(e, "node_layer_2", tn, a(e)),
                  i(e, "uiOpacitys", en, a(e)),
                  (e._coinValues = []),
                  (e._playerInfo = []),
                  (e._danhSachSoiCau = []),
                  (e.current_count_down = 0),
                  (e.userBet = []),
                  (e.isCanUpdateUser = !1),
                  (e.winJackpot = !1),
                  (e.winnerJackpot = null),
                  (e.my_bet = [0, 0, 0, 0, 0, 0]),
                  (e.first_bet = !0),
                  (e._remainingHiddenUserCount = 0),
                  (e.forceQuit = !1),
                  (e.forceKick = !1),
                  (e.isBigTable = !1),
                  (e.LOGGED_OUT = !1),
                  (e.random_dealer_anim_name = [
                    "Clap Hand",
                    "Handgun",
                    "Idle",
                    "Open Mask",
                    ,
                    "Point to JP",
                    "Think",
                    "Think2",
                  ]),
                  (e.random_jp_anim_name = [
                    "Idle",
                    "Idle1",
                    "Idle2",
                    "Idle3",
                    "Turn Around",
                  ]),
                  (e.random_sfx_index = [5, 1, 2, 0, -99, 3, 4, 4]),
                  (e.isSetValueCoin = !1),
                  e
                );
              }
              n(e, t),
                (e.getInstance = function () {
                  return e.instance;
                });
              var o = e.prototype;
              return (
                (o.isXDSquidGame = function () {
                  return !0;
                }),
                (o.onLoad = function () {
                  var n,
                    i,
                    a,
                    o,
                    s,
                    l,
                    u,
                    h,
                    c,
                    d,
                    p,
                    f,
                    _,
                    b,
                    y,
                    C,
                    S,
                    B,
                    k,
                    P = this;
                  (e.instance = this),
                    K.on(W.ForceLogoutSockets, this, function () {
                      return P.releaseGame();
                    }),
                    m.on(g.EVENT_SHOW, function () {
                      P.handleBackGameFromInterupt(0);
                    }),
                    this.bauCuaBetEntries.forEach(function (t) {
                      return t.setGameView(P);
                    }),
                    this.bauCuaBetEntries.forEach(function (t) {
                      var e;
                      return null == (e = t.getChipPooling())
                        ? void 0
                        : e.pool();
                    });
                  var x,
                    D,
                    E,
                    U,
                    A,
                    G = 0;
                  (null == (n = this.btn_test) ||
                    n.node.on("click", function () {
                      P.showResult(G), ++G >= 5 && (G = 0);
                    }),
                  null == (i = this.btn_user) ||
                    i.node.on("click", function () {
                      var t;
                      null == (t = P.userOnlinePopup) || t.show();
                    }),
                  null == (a = this.btn_huongdan) ||
                    a.node.on("click", function () {
                      var t;
                      null == (t = P.scrollViewInfoPopup) || t.show();
                    }),
                  null == (o = this.btn_jackpot_history) ||
                    o.on("click", function () {
                      var t;
                      null == (t = P.jackpotHistoryView) || t.fetchHistory();
                    }),
                  v.isBrowser) ||
                    null == (x = this.btn_invite) ||
                    x.node.setPosition(new w(-706, 220, 0));
                  (null == (s = this.btn_invite) ||
                    s.node.setScale(new w(0.87, 0.87, 0.87)),
                  this.soiCauPopup &&
                    (this.soiCauPopup.onClosed = function () {
                      P.btn_soicau && (P.btn_soicau.node.active = !0);
                    }),
                  null == (l = this.btn_invites) ||
                    l.forEach(function (t) {
                      t &&
                        t.node.on("click", function () {
                          var t;
                          null == (t = P.userInvitePopup) ||
                            t.fetchUserInvitations();
                        });
                    }),
                  null == (u = this.btn_chat) ||
                    u.node.on("click", function () {
                      var t;
                      null == (t = P.userChatPopup) || t.show();
                    }),
                  null == (h = this.btn_soicau) ||
                    h.node.on("click", function () {
                      var t;
                      P.btn_soicau && (P.btn_soicau.node.active = !1),
                        null == (t = P.soiCauPopup) || t.showImmediately();
                    }),
                  null == (c = this.btn_exit) ||
                    c.node.on("click", function () {
                      var t;
                      null == (t = P.bauCuaSettingPopup) || t.show();
                    }),
                  null == (d = this.btn_datlai) ||
                    d.node.on("click", function () {
                      var t;
                      P.isStart
                        ? P.rebet()
                        : null == (t = P.dealer_talk) ||
                          t.show("Ván chơi chưa bắt đầu!", !1, 2, 0, !0);
                    }),
                  null == (p = this.btn_datx2) ||
                    p.node.on("click", function () {
                      var t;
                      P.isStart
                        ? P.rebetx2()
                        : null == (t = P.dealer_talk) ||
                          t.show("Ván chơi chưa bắt đầu!", !1, 2, 0, !0);
                    }),
                  this.sp_dealer &&
                    (this.sp_dealer.setAnimation(0, "Idle", !1),
                    this.sp_dealer.setCompleteListener(function (t) {
                      var e = t.animation ? t.animation.name : "";
                      if (
                        "2 vang" != e &&
                        "4 trang" != e &&
                        "3 trang" != e &&
                        "4 vang" != e &&
                        "3 vang" != e
                      ) {
                        var n,
                          i = X.getRandomInt(
                            0,
                            P.random_dealer_anim_name.length
                          ),
                          a = P.random_dealer_anim_name[i];
                        if (
                          ((null != a && null != a) || (a = "Idle"),
                          null == (n = P.sp_dealer) || n.setAnimation(0, a, !1),
                          P.random_sfx_index && -99 != i)
                        ) {
                          var o = P.random_sfx_index[i];
                          P.sfx_dealer &&
                            P.sfx_dealer[o] &&
                            V.playAdditionalSfx(P.sfx_dealer[o]);
                        }
                      }
                    })),
                  null != (f = this.jackpotItemView) &&
                    f.getComponent(r.Skeleton)) &&
                    (null == (D = this.jackpotItemView) ||
                      null == (E = D.getComponent(r.Skeleton)) ||
                      E.setAnimation(0, "Idle", !1),
                    null == (U = this.jackpotItemView) ||
                      null == (A = U.getComponent(r.Skeleton)) ||
                      A.setCompleteListener(function (t) {
                        if (
                          "Jackpot" != (t.animation ? t.animation.name : "")
                        ) {
                          var e,
                            n,
                            i =
                              P.random_jp_anim_name[
                                X.getRandomInt(0, P.random_jp_anim_name.length)
                              ];
                          null == (e = P.jackpotItemView) ||
                            null == (n = e.getComponent(r.Skeleton)) ||
                            n.setAnimation(0, i, !1);
                        }
                      }));
                  this.slotMachineCmp &&
                    (this.slotMachineCmp.onMachineStopped = function () {
                      var t;
                      P.checkNoHu(),
                        null == (t = P.slotMachineCmp) || t.zoomInOut(0.15);
                    }),
                    null == (_ = this.bauCuaSettingPopup) ||
                      _.setGameView(this),
                    null == (b = this.bauCuaSettingPopup) ||
                      b.setCallbackExitRoom(function () {
                        I.leaveRoom(), V.showLoadingView();
                      }),
                    this.slotMachineCmp && this.slotMachineCmp.init(),
                    null == (y = this.userChatPopup) ||
                      y.setSendMessageCallback(function (t) {
                        var e;
                        I.sendChat(t),
                          null == (e = P.userChatPopup) || e.close();
                      }),
                    null == (C = this.userInvitePopup) ||
                      C.setSendInvitationsCallback(function (t) {
                        I.sendInvitationsTo(t);
                      }),
                    null == (S = this.userInvitePopup) ||
                      S.setFetchUserInvitationsCallback(function () {
                        I.getUserInLobby();
                      }),
                    null == (B = this.userOnlinePopup) ||
                      B.setSendUpdateHiddenUserOnlineCallback(function (t, e) {
                        I.sendUpdateHiddenUserOnline(t, e);
                      }),
                    null == (k = this.noHuView) || k.setGameView(this),
                    this.connectXDSQ(),
                    t.prototype.onLoad.call(this),
                    K.on(W.RefreshMoney, this, function (t) {
                      return P.handleRefreshMoney(t);
                    });
                }),
                (o.onDestroy = function () {
                  (e.instance = null), K.off(this, W.RefreshMoney);
                }),
                (o.connectXDSQ = function () {
                  var t = N.XDTLWSURL;
                  null != t ? I.init(t) : V.backToLobby();
                }),
                (o.onConnectedXDSQ = function () {
                  y("XDSQ onConnected"), I.joinRoom();
                }),
                (o.checkConnection = function (t) {
                  var e = this;
                  void 0 === t && (t = 0),
                    this.jackpotItemView &&
                      (C.stopAllByTarget(this.jackpotItemView.node),
                      S(this.jackpotItemView.node)
                        .delay(2)
                        .call(function () {
                          I.sendPing(t);
                        })
                        .delay(5)
                        .call(function () {
                          e.handleBackGameFromInterupt(2);
                        })
                        .start());
                }),
                (o.stopCheckConnection = function (t) {
                  C.stopAllByTarget(this.node),
                    this.btn_datlai && C.stopAllByTarget(this.btn_datlai.node),
                    this.shake_disk_sfx &&
                      V.stopAdditionalSfx(this.shake_disk_sfx),
                    this.sp_dealer && C.stopAllByTarget(this.sp_dealer.node),
                    this.jackpotItemView &&
                      C.stopAllByTarget(this.jackpotItemView.node);
                }),
                (o.onLoginResponse = function (t) {
                  t &&
                    ((this.isRefreshingInBackground = !1),
                    this.onConnectedXDSQ(),
                    this.checkConnection());
                }),
                (o.onJoinRoomResponse = function (t) {
                  if (
                    (y("XDSQ handleJoinRoomResponse:", JSON.stringify(t)),
                    !t[1])
                  ) {
                    this.leaveRoom();
                    var e;
                    (e = t[4]), V.showNotiMessage(e), V.hideLoadingView();
                  }
                }),
                (o.onLeaveRoomResponse = function (t) {
                  if (
                    (y("XDSQ handleLeaveRoomResponse", t),
                    V.hideLoadingView(),
                    null != t)
                  ) {
                    var e = t[5];
                    t[4];
                    this.leaveRoom(), "" != e && V.showCommonPopup(e);
                  }
                  this.stopCheckConnection();
                }),
                (o.onPingResponse = function (t) {
                  this.checkConnection(t);
                }),
                (o.onSubscribeInfo = function (t) {
                  V.hideLoadingView(),
                    t.plugins ||
                      S(this.node)
                        .delay(1)
                        .call(function () {
                          V.hideLoadingView();
                        })
                        .start(),
                    y("XDSQ SUBSCRIBE_INFO");
                }),
                (o.releaseGame = function () {
                  V.hideLoadingView(), I.close(), this.stopCheckConnection();
                }),
                (o.onUnsubscribeInfo = function () {
                  this.releaseGame(),
                    this.leaveRoom(),
                    this.shake_disk_sfx &&
                      V.stopAdditionalSfx(this.shake_disk_sfx),
                    y("XDSQ UNSUBSCRIBE_INFO");
                }),
                (o.onJoinTableInfo = function (t) {
                  t.b;
                  var e,
                    n = t.gS,
                    i = t.rmT;
                  i /= 1e3;
                  t.aid;
                  var a = t.Mu,
                    o = t.J;
                  o && this.updateJackpotLabel(o),
                    (this.isBigTable = !(a <= 9)),
                    (this.userBet = []),
                    (this.my_bet = [0, 0, 0, 0, 0, 0]),
                    null == (e = this.userOnlinePopup) || e.clear();
                  var s = !1;
                  4 == n || 5 == n || 6 == n
                    ? (i >= 1 && this.continue(i), (s = !0))
                    : this.wait(),
                    this.checkConnectivity();
                  for (var l = t.ps, r = 0; r < l.length; r++) {
                    var u = l[r],
                      h = u.m,
                      c = u.dn,
                      d = u.uid,
                      p = u.pid,
                      f = u.As,
                      _ = u.a,
                      b = 0;
                    u.id && (b = u.id),
                      "SD_Banker" != c &&
                        this.addPlayer(
                          c,
                          d,
                          !1,
                          h,
                          0,
                          0,
                          0,
                          !1,
                          p,
                          !0,
                          f,
                          _,
                          b
                        );
                  }
                  (this.isCanUpdateUser = !0), this.updateViewPostions(!0);
                  var m = t.ruc;
                  this.updateRemainingHiddenUserCount(m);
                  var g,
                    v = t.coins;
                  if (
                    (this.isXDSquidGame() && v.length > 10 && (v.length = 10),
                    this.isXDSquidGame()
                      ? this.isSetValueCoin ||
                        ((this.isSetValueCoin = !0),
                        this.setValueForCoinBtns(v))
                      : this.setValueForCoinBtns(v),
                    this.isXDSquidGame())
                  ) {
                    var w = t.gr;
                    y(JSON.stringify(w)), this.setBangSoiCau(w);
                  } else {
                    var C = t.tr;
                    y(JSON.stringify(C)), this.setBangSoiCau(C);
                  }
                  s &&
                    (this.setCurrentBetState(l),
                    this.isXDSquidGame ||
                      null == (g = this.slotMachineCmp) ||
                      g.cancelAllAction());
                  if (this.isXDSquidGame()) {
                    var S,
                      B = t.dice,
                      k = [];
                    B &&
                      (k.push(B.d1), k.push(B.d2), k.push(B.d3), k.push(B.d4));
                    for (var I = [], P = 0; P < k.length; P++) {
                      var V = new M();
                      V.decodeItem(k[P]), I.push(V);
                    }
                    null == (S = this.slotMachineCmp) || S.stopImmediately(I);
                  }
                  (this.isEnd = !this.hasBetCache()),
                    this.btn_datx2 && (this.btn_datx2.interactable = !1),
                    this.btn_datlai && (this.btn_datlai.interactable = !1);
                  var x = t.ets;
                  this.setRateLabels(x), y("XDSQ join table");
                }),
                (o.onQuickPlay = function (t) {
                  if (null != t.ri && null != t.ri) {
                    var e = t.ri;
                    e.rid, e.b, e.sid, e.Mu, e.gid;
                    null != e.pwd && null != e.pwd && e.pwd, I.joinRoom();
                  } else if (
                    (V.hideLoadingView(), null != t.mgs && null != t.mgs)
                  ) {
                    var n = t.mgs;
                    V.showNotiMessage(n);
                  } else V.showNotiMessage("Không tìm thấy phòng thích hợp!");
                }),
                (o.onUserJoinAndLeaveTable = function (t) {
                  var e = t.t;
                  if (1 == e) {
                    var n = t.p,
                      i = (n.a, n.g, n.m),
                      a = n.dn,
                      o = n.uid,
                      s = !1,
                      l = n.pid;
                    null != n.r && null != n.r && (s = n.r);
                    var r = n.As,
                      u = n.a,
                      h = 0;
                    null != n.id && null != n.id && (h = n.id),
                      this.addPlayer(a, o, !1, i, 0, 0, 0, s, l, !0, r, u, h);
                  }
                  if (2 == e) {
                    var c = t.p.uid;
                    this.removePlayer(c);
                  }
                  this.updateViewPostions();
                }),
                (o.onSelfBet = function (t) {
                  y("XDSQ SELF_BET:", t);
                  var e = t.eid,
                    n = t.b,
                    i = t.m,
                    a = t.teb;
                  this.btn_datlai &&
                    this.btn_datx2 &&
                    (this.first_bet &&
                      ((this.my_bet = [0, 0, 0, 0, 0, 0]),
                      (this.first_bet = !1)),
                    (this.btn_datx2.interactable = !1),
                    (this.btn_datlai.interactable = !1)),
                    (this.my_bet[e] += n),
                    this.betResponseByUid(H.userID, i, n, e, a),
                    (this.isEnd = !1);
                }),
                (o.onOtherBet = function (t) {
                  y("XDSQ OTHERS_BET:", t);
                  for (
                    var e = t.ets,
                      n = t.ps,
                      i = [0, 0, 0, 0, 0, 0],
                      a = [0, 0, 0, 0, 0, 0],
                      o = !1,
                      s = 0;
                    s < n.length;
                    s++
                  ) {
                    var l = n[s],
                      r = l.uid,
                      u = (l.dn, l.b),
                      h = null == this.getVisiblePlayerByID(r);
                    o = h;
                    for (var c = 0; c < u.length; c++) {
                      var d = u[c],
                        p = d.eid,
                        f = d.v,
                        _ = l.m;
                      h || r == H.userID
                        ? h
                          ? f > 0 && this.betResponseHidden(p)
                          : this.updateInfoByUid(r, _)
                        : f > 0 && this.betResponseByUid(r, _, f, p);
                    }
                  }
                  for (var b = 0; b < e.length; b++) {
                    var m,
                      g,
                      v = e[b],
                      w = v.eid,
                      C = v.v;
                    if (
                      ((i[w] =
                        null == (m = this.bauCuaBetEntries[w])
                          ? void 0
                          : m.getTotalBet()),
                      C > 0)
                    )
                      (a[w] = C),
                        null == (g = this.bauCuaBetEntries[w]) ||
                          g.setTotalBet(C);
                    else a[w] = i[w];
                    a[w] - i[w] > 0 && o && this.betResponseHidden(w);
                  }
                }),
                (o.onBetMulti = function (t) {
                  y("XDSQ BET_MULTI:", t),
                    V.sendRefreshMoney(),
                    this.updateBetInfo(t),
                    (this.isEnd = !1),
                    (this.first_bet = !1);
                }),
                (o.onFetchJackpotHistory = function (t) {
                  var e;
                  V.hideLoadingView(),
                    null == (e = this.jackpotHistoryView) ||
                      e.showJackpotHistoryWithData(t);
                }),
                (o.onStartGame = function (t) {
                  var e;
                  null != t.B && null != t.B && (e = t.B), this.startGame(e);
                }),
                (o.onFinishGame = function (t) {
                  y("XDSQ FINISH_GAME:", t), (this.isCanUpdateUser = !1);
                  var e = t.rt,
                    n = null == t.ps ? [] : t.ps,
                    i = null == t.ew ? [] : t.ew,
                    a = t.dice,
                    o = [];
                  if (
                    (a &&
                      (o.push(a.d1), o.push(a.d2), o.push(a.d3), o.push(a.d4)),
                    null != t.kes && null != t.kes)
                  ) {
                    var s = t.kes;
                    s.length > 0
                      ? this.finishThisGame(o, n, i, e, !0, s)
                      : this.finishThisGame(o, n, i, e);
                  } else this.finishThisGame(o, n, i, e);
                }),
                (o.onPayMoney = function (t) {
                  y("XDSQ PAY_MONEY:", t),
                    V.sendRefreshMoney(),
                    (this.isCanUpdateUser = !1);
                  var e = t.rt,
                    n = t.ps,
                    i = t.ew,
                    a = t.dice,
                    o = [];
                  if (
                    (a &&
                      (o.push(a.d1), o.push(a.d2), o.push(a.d3), o.push(a.d4)),
                    this.isXDSquidGame())
                  )
                    this.payMoney(n, i, e);
                  else if (null != t.kes && null != t.kes) {
                    var s = t.kes;
                    s.length > 0
                      ? this.finishThisGame(o, n, i, e, !0, s)
                      : this.finishThisGame(o, n, i, e);
                  } else this.finishThisGame(o, n, i, e);
                }),
                (o.onErrorMessage = function (t) {
                  var e;
                  null != t.mgs && null != t.mgs && (e = t.mgs),
                    y("ERROR_MESSAGE:", t);
                  var n = 1 == t.t ? 2 : 0;
                  e.length > 0 &&
                    "Cược không hợp lệ" != e &&
                    V.showNotiMessage(e, this.root, 0, n);
                }),
                (o.onUserChat = function (t) {
                  var e = t.uid,
                    n = t.mgs;
                  this.showChat(e, n);
                }),
                (o.onUpdateHiddenUserCount = function (t) {
                  var e = t.ruc;
                  this.updateRemainingHiddenUserCount(e);
                }),
                (o.onUpdateHiddenUserOnline = function (t) {
                  var e, n;
                  null == (e = this.userOnlinePopup) || e.resetPlayerHidden();
                  for (var i = t.ps, a = 0; a < i.length; a++) {
                    var o,
                      s = i[a],
                      l = s ? s.m : 0,
                      r = s ? s.dn : "",
                      u = s ? s.uid : "",
                      h = s ? s.a : "";
                    if ((s.id && s.id, !r || "BC_Banker" != r)) {
                      var c = new F();
                      (c.displayName = r),
                        (c.gold = l),
                        (c.avatarURL = h),
                        (c.uid = u),
                        null == (o = this.userOnlinePopup) ||
                          o.addPlayerHidden(c);
                    }
                  }
                  null == (n = this.userOnlinePopup) || n.refreshHidden();
                }),
                (o.onUpdateMoney = function (t) {
                  var e = this;
                  t.ps.forEach(function (t) {
                    var n = t.uid,
                      i = t.m,
                      a = e.getPlayerByUID(n);
                    a && a.setMoney(i);
                  });
                }),
                (o.onJackpot = function (t) {
                  t.gid;
                  var e = t.ba;
                  this.updateJackpotLabel(e);
                  var n = t.wns;
                  (this.winJackpot = !0),
                    (this.winnerJackpot = n),
                    this.isXDSquidGame() && this.checkNoHu();
                }),
                (o.onGetJackpot = function (t) {
                  t.gid;
                  var e = t.ba;
                  this.updateJackpotLabel(e);
                }),
                (o.onGetPlayerToBeInvited = function (t) {
                  var e,
                    n = t.us;
                  null == (e = this.userInvitePopup) ||
                    e.showPlayersToBeInvited(n);
                }),
                (o.onRefreshMoney = function (t) {
                  var e = t.As,
                    n = (e.vip, e.gold);
                  e.chip, e.safe;
                  (H.gold = n), this.handleRefreshMoney(H.gold);
                }),
                (o.onUserInfo = function (t) {
                  var e = t.As,
                    n = t.u,
                    i = e.gold,
                    a = e.safe,
                    o = t.id,
                    s = t.dn,
                    l = t.uid,
                    r = t.ph,
                    u = t.a,
                    h = t.vba;
                  if (
                    ((H.gold = i),
                    (H.goldSafe = a),
                    (H.customerID = o),
                    (H.userID = l),
                    (H.displayName = s),
                    (H.userName = n),
                    (H.avatarURL = u),
                    (H.phoneNumber = r),
                    (H.verifiedBankAccount = h),
                    y("my uid:", H.userID, h),
                    null != t.lr && null != t.lr)
                  ) {
                    var c = t.lr;
                    c.rid, c.gid, c.sid;
                    null != c.pwd && null != c.pwd && c.pwd;
                  } else if (null != t.lg && null != t.lg) {
                    var d = t.lg;
                    d.rid, d.gid, d.sid;
                    null != d.pwd && null != d.pwd && d.pwd;
                  }
                }),
                (o.onInGameMessage = function (t) {
                  var e = t.message;
                  3 == t.t && (V.showCommonPopup(e), (this.forceQuit = !0));
                }),
                (o.checkNoHu = function () {
                  this.winJackpot &&
                    (this.noHu(this.winnerJackpot),
                    (this.winJackpot = !1),
                    (this.winnerJackpot = null));
                }),
                (o.noHu = function (t) {
                  for (var e, n, i = this, a = !1, o = 0; o < t.length; o++) {
                    var s = t[o],
                      l = s.uid,
                      u = this.getPlayerByUID(l);
                    null != u &&
                      null != u &&
                      (this.isXDSquidGame() || (u.winning = s.mX)),
                      l == H.userID &&
                        (function () {
                          a = !0;
                          var t = s.mX;
                          i.noHuView &&
                            (C.stopAllByTarget(i.noHuView.node),
                            S(i.noHuView.node)
                              .call(function () {
                                var e;
                                null == (e = i.noHuView) || e.show(t);
                              })
                              .delay(4)
                              .call(function () {
                                var t;
                                null == (t = i.noHuView) || t.activeClick();
                              })
                              .start());
                        })();
                  }
                  if (!a) {
                    var h,
                      c =
                        null == (h = this.noHuView) ? void 0 : h.getNohu_BGM();
                    c && V.playAdditionalSfx(c);
                  }
                  var d =
                    null == (e = this.jackpotItemView)
                      ? void 0
                      : e.node.getComponent(r.Skeleton);
                  null != d && d.setAnimation(0, "Jackpot", !0),
                    null == (n = this.slotMachineCmp) || n.win();
                }),
                (o.getCurrentRoomName = function () {
                  return "SD_ConMucPlugin";
                }),
                (o.onClickBetEntry = function (t) {
                  var e,
                    n =
                      null == (e = this.chipPanel)
                        ? void 0
                        : e.getSelectedBetValue();
                  this.sendBet(t, n);
                }),
                (o.sendBet = function (t, e) {
                  var n;
                  this.isStart
                    ? I.sendBet(t, e)
                    : null == (n = this.dealer_talk) ||
                      n.show("Ván chơi chưa bắt đầu!", !1, 2, 0, !0);
                }),
                (o.sendReBetMulti = function (t) {
                  if ((void 0 === t && (t = 1), this.isStart)) {
                    this.btn_datx2 && (this.btn_datx2.interactable = !1),
                      this.btn_datlai && (this.btn_datlai.interactable = !1);
                    var e = [];
                    console.log("my last bet: " + this.my_bet),
                      this.my_bet.forEach(function (n, i) {
                        if (n > 0) {
                          var a = {};
                          (a.b = n * t), (a.eid = i), e.push(a);
                        }
                      }),
                      I.sendBetMulti(e);
                  } else {
                    var n;
                    null == (n = this.dealer_talk) ||
                      n.show("Ván chơi chưa bắt đầu!", !1, 2, 0, !0);
                  }
                  this.my_bet = [0, 0, 0, 0, 0, 0];
                }),
                (o.rebet = function () {
                  var t = this;
                  if (this.isXDSquidGame()) this.sendReBetMulti(1);
                  else if (this.isStart) {
                    this.btn_datx2 && (this.btn_datx2.node.active = !1),
                      this.btn_datlai && (this.btn_datlai.node.active = !1);
                    var e = [0, 0, 0, 0, 0, 0];
                    this.my_bet.forEach(function (t, n) {
                      e[n] = t;
                    }),
                      (this.my_bet = [0, 0, 0, 0, 0, 0]),
                      e.forEach(function (e, n) {
                        t.sendBet(n, e);
                      });
                  } else V.showNotiMessage("Ván chơi chưa bắt đầu!", null);
                }),
                (o.rebetx2 = function () {
                  var t = this;
                  if (this.isXDSquidGame()) this.sendReBetMulti(2);
                  else if (this.isStart) {
                    this.btn_datx2 && (this.btn_datx2.node.active = !1),
                      this.btn_datlai && (this.btn_datlai.node.active = !1);
                    var e = [0, 0, 0, 0, 0, 0];
                    this.my_bet.forEach(function (t, n) {
                      e[n] = t;
                    }),
                      (this.my_bet = [0, 0, 0, 0, 0, 0]),
                      e.forEach(function (e, n) {
                        t.sendBet(n, 2 * e);
                      });
                  } else V.showNotiMessage("Ván chơi chưa bắt đầu!", null);
                }),
                (o.resetUI = function () {
                  var t, e, n, i, a, o, s;
                  null == (t = this.userChatPopup) || t.close(),
                    null == (e = this.bauCuaSettingPopup) || e.close(),
                    null == (n = this.bauCuaSettingPopup) || n.reset(),
                    null == (i = this.soiCauPopup) || i.close(),
                    null == (a = this.userOnlinePopup) || a.close(),
                    null == (o = this.userInvitePopup) || o.close(),
                    this.playerViews.forEach(function (t) {
                      t.setUserInfo(null), t.stopAllAction();
                    }),
                    null == (s = this.shake_anim) ||
                      s.setAnimation(0, "idle", !0),
                    V.stopSfx();
                }),
                (o.initUI = function () {
                  var t = this;
                  this.btn_chat &&
                    (C.stopAllByTarget(this.btn_chat.node),
                    this.scheduleOnce(function () {
                      var e, n;
                      S(null == (e = t.btn_chat) ? void 0 : e.node)
                        .repeatForever(
                          S(null == (n = t.btn_chat) ? void 0 : n.node)
                            .call(function () {
                              t.playBgmMusic();
                            })
                            .delay(240)
                        )
                        .start();
                    }, 1)),
                    this.bauCuaBetEntries.forEach(function (t) {
                      return t.resetUI();
                    }),
                    (this.forceKick = !1);
                }),
                (o.playBgmMusic = function () {
                  var t;
                  (null != (t = this.noHuView) && t.IsShowing()) ||
                    (this.xocdia_bgm_music &&
                      V.playBgm(this.xocdia_bgm_music, !0, !0));
                }),
                (o.handleRefreshMoney = function (t) {
                  var e;
                  null == (e = this.my_info) || e.setMoney(t);
                }),
                (o.handleBackGameFromInterupt = function (t) {
                  y("handleBackGameFromInterupt::XDSQ", t),
                    this.LOGGED_OUT ||
                      this.isRefreshingInBackground ||
                      ((this.isRefreshingInBackground = !0),
                      V.showLoadingView(),
                      I.refreshInBackground());
                }),
                (o.showChat = function (t, e) {
                  var n;
                  if (
                    null == (n = this.bauCuaSettingPopup) ||
                    !n.isHideChat() ||
                    t == H.userID
                  ) {
                    var i = this.getPlayerByUID(t);
                    null != i &&
                      (e.indexOf("e_") >= 0 && (e = e.replace("e_", "emo_")),
                      i.showBubbleChat(e));
                  }
                }),
                (o.updateJackpotLabel = function (t) {
                  var e;
                  null == (e = this.jackpotItemView) || e.updateAmount(t);
                }),
                (o.hasBetCache = function () {
                  return (
                    this.my_bet.filter(function (t) {
                      return t > 0;
                    }).length > 0
                  );
                }),
                (o.updateRemainingHiddenUserCount = function (t) {
                  var e;
                  this._remainingHiddenUserCount = t;
                  var n =
                    null == (e = this.userOnlinePopup)
                      ? void 0
                      : e.getUserCount();
                  this.lbl_userOnline &&
                    null != n &&
                    (this.lbl_userOnline.string = (
                      n + this._remainingHiddenUserCount
                    ).toString());
                }),
                (o.loggedOut = function () {
                  C.stopAllByTarget(this.node),
                    I.close(),
                    (this.LOGGED_OUT = !0);
                }),
                (o.isInGame = function () {
                  var t;
                  return null == (t = this.root) ? void 0 : t.active;
                }),
                (o.payMoney = function (t, e, n) {
                  for (
                    var i = this,
                      a = function (e) {
                        var n = t[e],
                          a = (n.dn, n.uid),
                          o = i.getPlayerByUID(a);
                        if (null == o) return "continue";
                        var s = n.m;
                        o.money = s;
                        var l = n.wm;
                        o.winning = l;
                        var r = i._playerInfo.filter(function (t) {
                          return t.uid == a;
                        });
                        r.length > 0 && (r[0].gold = s);
                      },
                      o = 0;
                    o < t.length;
                    o++
                  )
                    a(o);
                  this.payChips(e);
                }),
                (o.setBangSoiCau = function (t) {
                  for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    this._danhSachSoiCau.push(n);
                  }
                  this.updateBangSoiCau();
                }),
                (o.setCurrentBetState = function (t) {
                  var e = this;
                  this.bauCuaBetEntries.forEach(function (t) {
                    return t.setTotalBet(0);
                  });
                  for (
                    var n = function (n) {
                        var i = t[n],
                          a = i.uid,
                          o = e.getPlayerByUID(a);
                        if (!o) return "continue";
                        for (
                          var s = i.b,
                            l = function (t) {
                              var n,
                                i,
                                l = s[t],
                                r = l.eid,
                                u = l.v;
                              o.isThisPlayer() && (e.my_bet[r] = u);
                              var h =
                                null !=
                                (n =
                                  null == (i = e.bauCuaBetEntries[r])
                                    ? void 0
                                    : i.getTotalBet())
                                  ? n
                                  : 0;
                              if (
                                ((h += u),
                                e.isBigTable &&
                                  e.userBet.filter(function (t) {
                                    return t.uid == a && t.eid == r;
                                  }).length > 2)
                              );
                              else {
                                var c = u,
                                  d = new j();
                                (d.uid = a),
                                  (d.eid = r),
                                  (d.bet = u),
                                  e.userBet.push(d),
                                  c > 0 && e.setBetState(a, c, r, h);
                              }
                            },
                            r = 0;
                          r < s.length;
                          r++
                        )
                          l(r);
                      },
                      i = 0;
                    i < t.length;
                    i++
                  )
                    n(i);
                }),
                (o.setBetState = function (t, e, n, i) {
                  var a;
                  void 0 === i && (i = 0);
                  var o,
                    s,
                    l = 0;
                  i > 0 &&
                    (null == (o = this.bauCuaBetEntries[n]) ||
                      o.setTotalBet(i));
                  H.userID == t &&
                    (null == (s = this.bauCuaBetEntries[n]) ||
                      s.setCurrentBet(e));
                  for (var r = 0; r < this._coinValues.length; r++)
                    if (e == this._coinValues[r]) {
                      l = r;
                      break;
                    }
                  var u =
                      null == (a = this.bauCuaBetEntries[n])
                        ? void 0
                        : a.getChip(l),
                    h = u.newCoin,
                    c = u.desPos;
                  if (null != h && null != h) {
                    (h.name = "standing"), (h.active = !0), h.setPosition(c);
                    var d = this.getPlayerByUID(t);
                    d && (d.addShakeCoin(n, h), d.addBetValue(n, e));
                  }
                }),
                (o.addPlayer = function (
                  t,
                  e,
                  n,
                  i,
                  a,
                  o,
                  s,
                  l,
                  r,
                  u,
                  h,
                  c,
                  d
                ) {
                  var p = new F();
                  (p.displayName = t),
                    (p.gold = i),
                    (p.avatarURL = c),
                    (p.uid = e),
                    this._playerInfo.push(p),
                    (this._playerInfo = this._playerInfo.sort(function (t, e) {
                      return t.gold < e.gold ? 1 : -1;
                    }));
                }),
                (o.removePlayer = function (t) {
                  (this._playerInfo = this._playerInfo.filter(function (e) {
                    return e.uid != t;
                  })),
                    (this._playerInfo = this._playerInfo.sort(function (t, e) {
                      return t.gold < e.gold ? 1 : -1;
                    })),
                    H.userID != t && this.removeVisiblePlayers();
                }),
                (o.removeVisiblePlayers = function () {
                  var t = this;
                  this.isCanUpdateUser &&
                    this.playerViews.forEach(function (e, n) {
                      0 ==
                        t._playerInfo.filter(function (t) {
                          return t.uid == e.getUID();
                        }).length &&
                        !e.isEmpty() &&
                        e.hideUserInfo();
                    });
                }),
                (o.updateViewPostions = function (t) {
                  var e,
                    n,
                    i,
                    a = this;
                  if ((void 0 === t && (t = !0), this.isCanUpdateUser)) {
                    var o = this.getNewUserSightIndex();
                    null == (e = this.userOnlinePopup) || e.reset();
                    var s = 0;
                    this._playerInfo.forEach(function (e, n) {
                      var i;
                      if (e.uid == H.userID)
                        null == (i = a.my_info) || i.setUserInfo(e);
                      else if (s < a.playerViews.length) {
                        var l;
                        if (t)
                          if (
                            0 ==
                            a.playerViews.filter(function (t) {
                              return t.getUID() == e.uid;
                            }).length
                          ) {
                            var r = o.pop();
                            null == a.playerViews[r] || null == a.playerViews[r]
                              ? y("updatedInsightIndex at:", r, " failed")
                              : a.playerViews[r].updateNewUser(e);
                          } else {
                            var u = a.playerViews.find(function (t) {
                              return t.getUID() == e.uid;
                            });
                            u && u.updateNewUser(e, !1);
                          }
                        else null == (l = a.playerViews[s]) || l.setUserInfo(e);
                        s++;
                      } else {
                        var h;
                        null == (h = a.userOnlinePopup) || h.addPlayer(e);
                      }
                    }),
                      null == (n = this.userOnlinePopup) || n.refresh();
                    var l =
                      null == (i = this.userOnlinePopup)
                        ? void 0
                        : i.getUserCount();
                    this.lbl_userOnline &&
                      null != l &&
                      (this.lbl_userOnline.string = (
                        l + this._remainingHiddenUserCount
                      ).toString());
                  }
                }),
                (o.getNewUserSightIndex = function () {
                  var t = this,
                    e = [],
                    n = this._playerInfo.filter(function (e, n) {
                      return n < t.playerViews.length;
                    });
                  return (
                    this.playerViews.forEach(function (t, i) {
                      0 ==
                        n.filter(function (e) {
                          return e.uid == t.getUID();
                        }).length && e.push(i);
                    }),
                    e
                  );
                }),
                (o.checkConnectivity = function () {
                  var t = this;
                  this.isXDSquidGame() &&
                    this.btn_datlai &&
                    (C.stopAllByTarget(this.btn_datlai.node),
                    S(this.btn_datlai.node)
                      .delay(35)
                      .call(function () {
                        I.reconnect(), t.checkConnectivity();
                      })
                      .start());
                }),
                (o.makeChipsBelowDealer = function () {
                  var t,
                    e = this;
                  this.isXDSquidGame() &&
                    (null == (t = this.node_chips) ||
                      t.forEach(function (t) {
                        t.setParent(e.node_layer_1, !0);
                      }));
                }),
                (o.makeChipsAboveDealer = function () {
                  var t,
                    e = this;
                  this.isXDSquidGame() &&
                    (null == (t = this.node_chips) ||
                      t.forEach(function (t) {
                        t.setParent(e.node_layer_2, !0);
                      }));
                }),
                (o.startGame = function (t) {
                  var e,
                    n,
                    i,
                    a,
                    o,
                    s = this;
                  ((this.first_bet = !0),
                  this.playerViews.forEach(function (t) {
                    C.stopAllByTarget(t.node), t.grayOut(!1);
                  }),
                  this.my_info &&
                    (C.stopAllByTarget(this.my_info.node),
                    this.my_info.grayOut(!1)),
                  this.makeChipsAboveDealer(),
                  this.checkConnectivity(),
                  null != (e = this.jackpotItemView) &&
                    e.getComponent(r.Skeleton)) &&
                    (null == (i = this.jackpotItemView) ||
                      null == (a = i.getComponent(r.Skeleton)) ||
                      a.setAnimation(0, "Idle", !1));
                  ((this.userBet = []),
                  (this.isCanUpdateUser = !0),
                  this.updateViewPostions(),
                  this.updateRemainingHiddenUserCount(
                    this._remainingHiddenUserCount
                  ),
                  this.removeVisiblePlayers(),
                  this.resetShakeDiskCoin(),
                  this.bauCuaBetEntries.forEach(function (t) {
                    var e;
                    return null == (e = t.getChipPooling())
                      ? void 0
                      : e.activeAll(!1);
                  }),
                  C.stopAllByTarget(this.node),
                  this.stopCountDown(),
                  this.bauCuaBetEntries.forEach(function (t) {
                    return t.hideAll();
                  }),
                  S(this.node)
                    .sequence(
                      S().call(function () {
                        s.playShakeAnim();
                      }),
                      S().delay(0.3),
                      S().call(function () {}),
                      S().delay(2.5),
                      S().call(function () {}),
                      S().delay(0.2),
                      S().call(function () {
                        s.sp_dealer &&
                          (s.sp_dealer.setAnimation(0, "Play", !1),
                          s.sfx_dealer && V.playAdditionalSfx(s.sfx_dealer[1])),
                          s.bauCuaBetEntries.forEach(function (t) {
                            return t.showGlowOnce();
                          }),
                          s.slotMachineCmp && s.slotMachineCmp.spin(),
                          s.startCountDown(21, 0.95),
                          s.session_start_sfx &&
                            V.playAdditionalSfx(s.session_start_sfx),
                          s.hasBetCache() &&
                            (s.btn_datx2 && (s.btn_datx2.interactable = !0),
                            s.btn_datlai && (s.btn_datlai.interactable = !0));
                      })
                    )
                    .start(),
                  (this.isEnd = !0),
                  (null != (n = this.bauCuaSettingPopup) && n.isWillExit) ||
                    this.forceQuit) &&
                    (null == (o = this.bauCuaSettingPopup) || o.exitRoom());
                }),
                (o.continue = function (t) {
                  var e, n, i;
                  (this.makeChipsAboveDealer(),
                  (this._danhSachSoiCau = []),
                  this.resetAllPlayerViewAction(),
                  this.bauCuaBetEntries.forEach(function (t) {
                    var e;
                    return null == (e = t.getChipPooling())
                      ? void 0
                      : e.activeAll(!1);
                  }),
                  C.stopAllByTarget(this.node),
                  this.stopCountDown(!1),
                  this.bauCuaBetEntries.forEach(function (t) {
                    return t.hideAll();
                  }),
                  this.startCountDown(t),
                  this.slotMachineCmp && this.slotMachineCmp.spin(),
                  this.sp_dealer &&
                    (C.stopAllByTarget(this.sp_dealer.node),
                    this.shake_disk_sfx &&
                      V.stopAdditionalSfx(this.shake_disk_sfx)),
                  null != (e = this.jackpotItemView) &&
                    e.getComponent(r.Skeleton)) &&
                    (null == (n = this.jackpotItemView) ||
                      null == (i = n.getComponent(r.Skeleton)) ||
                      i.setAnimation(0, "Idle", !1));
                }),
                (o.wait = function () {
                  this.makeChipsAboveDealer(),
                    (this._danhSachSoiCau = []),
                    this.resetAllPlayerViewAction(),
                    this.bauCuaBetEntries.forEach(function (t) {
                      var e;
                      return null == (e = t.getChipPooling())
                        ? void 0
                        : e.activeAll(!1);
                    }),
                    C.stopAllByTarget(this.node),
                    this.stopCountDown(),
                    this.bauCuaBetEntries.forEach(function (t) {
                      return t.hideAll();
                    }),
                    this.sp_dealer &&
                      (C.stopAllByTarget(this.sp_dealer.node),
                      this.shake_disk_sfx &&
                        V.stopAdditionalSfx(this.shake_disk_sfx));
                }),
                (o.resetAllPlayerViewAction = function () {
                  (this._playerInfo = []),
                    this.playerViews.forEach(function (t) {
                      C.stopAllByTarget(t.node), t.grayOut(!1);
                    }),
                    this.my_info &&
                      (C.stopAllByTarget(this.my_info.node),
                      this.my_info.grayOut(!1)),
                    this.resetShakeDiskCoin();
                }),
                (o.resetShakeDiskCoin = function () {
                  var t;
                  this.playerViews.forEach(function (t) {
                    t.resetBetValue();
                  }),
                    null == (t = this.my_info) || t.resetBetValue();
                }),
                (o.continueCountDownBy = function (t) {
                  (this.current_count_down += t),
                    this.current_count_down < 0 &&
                      (this.current_count_down = 0),
                    this.lbl_countdown && C.stopAllByTarget(this.lbl_countdown),
                    this.startCountDown(this.current_count_down);
                }),
                (o.startCountDown = function (t, e) {
                  var n,
                    i = this;
                  (void 0 === e && (e = 1), this.count_down_anim) &&
                    ((this.count_down_anim.node.active = !0),
                    (this.count_down_anim.timeScale = 1.5),
                    this.count_down_anim.setAnimation(0, "appear", !1),
                    null == (n = this.uiOpacitys) ||
                      n.forEach(function (t) {
                        C.stopAllByTarget(t),
                          S(t)
                            .to(0.1, { opacity: 120 })
                            .delay(1.25)
                            .to(0.1, { opacity: 255 })
                            .start();
                      }));
                  (this.current_count_down = t),
                    (this.isStart = !0),
                    (this.current_count_down = Math.round(
                      this.current_count_down
                    )),
                    this.lbl_countdown &&
                      (this.lbl_countdown.node.parent &&
                        (this.lbl_countdown.node.parent.active = !0),
                      (this.lbl_countdown.progress =
                        this.current_count_down / 20)),
                    this.lbl_countdown2 &&
                      (C.stopAllByTarget(this.lbl_countdown2),
                      (this.lbl_countdown2.node.active = !1),
                      S(this.lbl_countdown2)
                        .delay(1.5)
                        .call(function () {
                          i.lbl_countdown2 &&
                            (i.lbl_countdown2.node.active = !0);
                        })
                        .start(),
                      (this.lbl_countdown2.string =
                        (this.current_count_down < 10 ? "0" : "") +
                        this.current_count_down.toString())),
                    S(this.lbl_countdown)
                      .repeat(
                        this.current_count_down,
                        S(this.lbl_countdown).sequence(
                          S().delay(e),
                          S().call(function () {
                            (i.current_count_down -= 1),
                              i.lbl_countdown2 &&
                                (i.lbl_countdown2.string =
                                  (i.current_count_down < 10 ? "0" : "") +
                                  i.current_count_down.toString()),
                              S(i.lbl_countdown)
                                .to(0.5, {
                                  progress: i.current_count_down / 20,
                                })
                                .start();
                          })
                        )
                      )
                      .start();
                }),
                (o.setCountDown = function (t, e) {
                  var n = this;
                  void 0 === e && (e = 1),
                    this.count_down_anim &&
                      ((this.count_down_anim.node.active = !0),
                      (this.count_down_anim.timeScale = 0),
                      this.count_down_anim.setAnimation(0, "disapear", !1)),
                    (this.current_count_down = t),
                    (this.isStart = !0),
                    (this.current_count_down = Math.round(
                      this.current_count_down
                    )),
                    this.lbl_countdown &&
                      (this.lbl_countdown.node.parent &&
                        (this.lbl_countdown.node.parent.active = !0),
                      (this.lbl_countdown.progress =
                        this.current_count_down / 20)),
                    this.lbl_countdown2 &&
                      (C.stopAllByTarget(this.lbl_countdown2),
                      (this.lbl_countdown2.string =
                        (this.current_count_down < 10 ? "0" : "") +
                        this.current_count_down.toString())),
                    S(this.lbl_countdown)
                      .repeat(
                        this.current_count_down,
                        S(this.lbl_countdown).sequence(
                          S().delay(e),
                          S().call(function () {
                            (n.current_count_down -= 1),
                              n.lbl_countdown2 &&
                                (n.lbl_countdown2.string =
                                  (n.current_count_down < 10 ? "0" : "") +
                                  n.current_count_down.toString()),
                              S(n.lbl_countdown)
                                .to(0.5, {
                                  progress: n.current_count_down / 20,
                                })
                                .start();
                          })
                        )
                      )
                      .start();
                }),
                (o.stopCountDown = function (t) {
                  var e = this;
                  void 0 === t && (t = !0),
                    (this.isStart = !1),
                    this.lbl_countdown &&
                      (C.stopAllByTarget(this.lbl_countdown),
                      this.lbl_countdown.node.parent &&
                        (this.lbl_countdown.node.parent.active = !1)),
                    this.lbl_countdown2 && (this.lbl_countdown2.string = "00"),
                    this.count_down_anim &&
                      t &&
                      ((this.count_down_anim.timeScale = 1.5),
                      this.count_down_anim.setAnimation(0, "disapear", !1),
                      this.count_down_anim.setCompleteListener(function (t) {
                        if (null != t) {
                          var n = t.animation ? t.animation.name : "";
                          e.count_down_anim &&
                            "disapear" == n &&
                            (e.count_down_anim.node.active = !1);
                        }
                      }));
                }),
                (o.finishThisGame = function (t, e, n, i, a, o) {
                  var s,
                    l = this;
                  this.makeChipsBelowDealer(),
                    this.session_finish_sfx &&
                      (V.playAdditionalSfx(this.session_finish_sfx),
                      this.scheduleOnce(function () {
                        V.playAdditionalSfx(l.sfx_dealer[5]);
                      }, 2)),
                    this.isXDSquidGame()
                      ? this.sfx_dealer &&
                        V.playAdditionalSfx(this.sfx_dealer[3])
                      : V.showNotiMessage("Mở Bát", this.root, 0, 0),
                    this.stopCountDown(),
                    this.showResult(i);
                  for (
                    var r = function (t) {
                        var n = e[t],
                          i = (n.dn, n.uid),
                          a = l.getPlayerByUID(i);
                        if (null == a) return "continue";
                        var o = n.m;
                        a.money = o;
                        var s = n.wm;
                        a.winning = s;
                        var r = l._playerInfo.filter(function (t) {
                          return t.uid == i;
                        });
                        r.length > 0 && r && r[0] && (r[0].gold = o);
                      },
                      u = 0;
                    u < e.length;
                    u++
                  )
                    r(u);
                  this.payChipsForDealer();
                  for (var h = [], c = 0; c < t.length; c++) {
                    var d = new M();
                    d.decodeItem(t[c]), h.push(d);
                  }
                  null == (s = this.slotMachineCmp) || s.stopWithoutFx(h);
                }),
                (o.payChipsForDealer = function () {
                  var t = this,
                    e = [];
                  this.bauCuaBetEntries.forEach(function (t, n) {
                    t.isGlowing() && e.push(n);
                  });
                  var n = !0;
                  this.bauCuaBetEntries.forEach(function (i, a) {
                    var o;
                    t.return_dealer_chip_sfx &&
                      i.payChipsForDealer(
                        ((o = a),
                        e.filter(function (t) {
                          return t == o;
                        }).length <= 0),
                        t.return_dealer_chip_sfx,
                        n
                      ),
                      (n = !1);
                  });
                }),
                (o.payChips = function (t) {
                  var e = this;
                  this.bauCuaBetEntries.forEach(function (t, n) {
                    e.btn_user &&
                      e.return_dealer_chip_sfx &&
                      t.payChipsForHidden(
                        e.btn_user.node.position,
                        e.return_dealer_chip_sfx
                      );
                  });
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n],
                      a = i.eid,
                      o = i.wns;
                    if (o.length > 0)
                      for (var s = 0; s < o.length; s++) {
                        var l,
                          r = o[s];
                        this.return_avatar_chip_sfx &&
                          (null == (l = this.bauCuaBetEntries[a]) ||
                            l.payChipsForPlayers(
                              r,
                              this.return_avatar_chip_sfx
                            ));
                      }
                  }
                  this.forceKick &&
                    this.scheduleOnce(function () {
                      e.leaveRoom();
                    }, 3);
                }),
                (o.refreshUserOnlinePopup = function () {
                  var t;
                  null == (t = this.userOnlinePopup) || t.refresh();
                }),
                (o.getPlayer_canNotCompareUserName = function (t) {
                  var e;
                  if (t == H.displayName) return this.my_info;
                  if (this.playerViews.length > 0) {
                    var n = this.playerViews.filter(function (e) {
                      return e.getName() == t;
                    });
                    if (n.length > 0) return n[0];
                  }
                  return null == (e = this.userOnlinePopup)
                    ? void 0
                    : e.getPlayer(t);
                }),
                (o.getPlayerByUID = function (t) {
                  var e;
                  if (t == H.userID) return this.my_info;
                  if (this.playerViews.length > 0) {
                    var n = this.playerViews.filter(function (e) {
                      return e.getUID() == t;
                    });
                    if (n.length > 0) return n[0];
                  }
                  return null == (e = this.userOnlinePopup)
                    ? void 0
                    : e.getHiddenPlayerView();
                }),
                (o.getVisiblePlayer_canNotCompareUserName = function (t) {
                  if (t == H.displayName) return this.my_info;
                  if (this.playerViews.length > 0) {
                    var e = this.playerViews.filter(function (e) {
                      return e.getName() == t;
                    });
                    if (e.length > 0) return e[0];
                  }
                  return null;
                }),
                (o.getChipPooling = function () {
                  var t;
                  return null == (t = this.bauCuaBetEntries[0])
                    ? void 0
                    : t.getChipPooling();
                }),
                (o.getVisiblePlayerByID = function (t) {
                  if (t == H.userID) return this.my_info;
                  if (this.playerViews.length > 0) {
                    var e = this.playerViews.filter(function (e) {
                      return e.getUID() == t;
                    });
                    if (e.length > 0) return e[0];
                  }
                  return null;
                }),
                (o.setRateLabels = function (t) {
                  for (var e = 0; e < t.length; e++) {
                    var n = t[e],
                      i = n.eid,
                      a = this.bauCuaBetEntries[i],
                      o = n.ert;
                    null == a || a.setRate(o);
                    var s = n.v;
                    null == a || a.setTotalBet(s);
                  }
                }),
                (o.setValueForCoinBtns = function (t) {
                  var e;
                  this._coinValues = [];
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    this._coinValues.push(i);
                  }
                  null == (e = this.chipPanel) ||
                    e.initChipPanel(this._coinValues);
                }),
                (o.betResponseByUid = function (t, e, n, i, a, o) {
                  var s;
                  void 0 === a && (a = 0), void 0 === o && (o = !0);
                  var l = this.getPlayerByUID(t);
                  if (l) {
                    var r,
                      u,
                      h = 0;
                    if (a > 0)
                      null == (r = this.bauCuaBetEntries[i]) ||
                        r.setTotalBet(a);
                    if (l.isThisPlayer())
                      null == (u = this.bauCuaBetEntries[i]) ||
                        u.setCurrentBet(n);
                    var c = {};
                    if (null != this.getVisiblePlayerByID(l.getUID())) {
                      for (var d, p = this._coinValues.length - 1; p >= 0; p--)
                        if (n >= this._coinValues[p]) {
                          h = p;
                          break;
                        }
                      c =
                        null == (d = this.bauCuaBetEntries[i])
                          ? void 0
                          : d.getChip(h);
                    } else {
                      var f;
                      c =
                        null == (f = this.bauCuaBetEntries[i])
                          ? void 0
                          : f.getRandomChip();
                    }
                    var _ = c.newCoin,
                      b = c.desPos;
                    if (null != _ && null != _) {
                      if (
                        (this.bet_sfx && V.playSfx(this.bet_sfx),
                        (_.name = "flying"),
                        (_.active = !0),
                        _.setPosition(l.node.position),
                        o)
                      )
                        S(_)
                          .to(0.7, { position: b }, { easing: "expoOut" })
                          .start();
                      else _.setPosition(b);
                      if (l.isVisible()) _.name = l.getUID() + "%" + i;
                      else {
                        var m = this._playerInfo.filter(function (t) {
                            return t.uid == g;
                          }),
                          g = "";
                        m.length > 0 && (g = m[0].uid), (_.name = g + "%" + i);
                      }
                      l.addShakeCoin(i, _), l.addBetValue(i, n);
                      var v = this._playerInfo.filter(function (e) {
                        return e.uid == t;
                      });
                      v.length > 0 && v && v[0] && (v[0].gold = e),
                        null == (s = this.userOnlinePopup) || s.refresh(),
                        l.refresh();
                    }
                  }
                }),
                (o.getRandomPositionAtEntry = function (t) {
                  var e,
                    n,
                    i,
                    a,
                    o =
                      null == (e = this.bauCuaBetEntries[t])
                        ? void 0
                        : e.node.position.x,
                    s =
                      null == (n = this.bauCuaBetEntries[t])
                        ? void 0
                        : n.node.position.y;
                  return (
                    2 == t || 5 == t
                      ? ((i = X.getRandomInt(-40, 80)),
                        (a = X.getRandomInt(5, 30)))
                      : ((i = X.getRandomInt(-10, 50)),
                        (a = X.getRandomInt(20, 40))),
                    o && (o += i),
                    s && (s += a),
                    new w(o, s, 0)
                  );
                }),
                (o.betResponseHidden = function (t, e) {
                  var n;
                  void 0 === e && (e = !0);
                  var i =
                      null == (n = this.bauCuaBetEntries[t])
                        ? void 0
                        : n.getRandomChip(),
                    a = i.newCoin,
                    o = i.desPos;
                  null != a &&
                    null != a &&
                    (this.bet_sfx && V.playSfx(this.bet_sfx),
                    (a.name = "flying"),
                    (a.active = !0),
                    this.btn_user && a.setPosition(this.btn_user.node.position),
                    e
                      ? S(a)
                          .to(0.7, { position: o }, { easing: "expoOut" })
                          .call(function () {
                            a.name = "standing";
                          })
                          .start()
                      : a.setPosition(o));
                }),
                (o.updateBetInfo = function (t) {
                  var e = this;
                  t.bs.forEach(function (n) {
                    var i = n.eid,
                      a = n.b;
                    (e.my_bet[i] = a),
                      e.betResponseByUid(H.userID, t.m, a, i, 0);
                  });
                }),
                (o.updateInfoByUid = function (t, e) {
                  var n,
                    i = this._playerInfo.filter(function (e) {
                      return e.uid == t;
                    });
                  i.length > 0 && i && i[0] && (i[0].gold = e),
                    null == (n = this.userOnlinePopup) || n.refresh();
                  var a = this.getPlayerByUID(t);
                  a && a.refresh();
                }),
                (o.update = function (t) {
                  if (this.btn_datx2) {
                    var e = this.btn_datx2.getComponent(d);
                    e &&
                      (e.spriteFrame = this.btn_datx2.interactable
                        ? this.btn_datx2_normal
                        : this.btn_datx2_disable);
                  }
                  if (this.btn_datlai) {
                    var n = this.btn_datlai.getComponent(d);
                    n &&
                      (n.spriteFrame = this.btn_datlai.interactable
                        ? this.btn_datlai_normal
                        : this.btn_datlai_disable);
                  }
                }),
                (o.showResult = function (t) {
                  var e, n, i, a;
                  this.sp_dealer ||
                    (this.dice_result_node &&
                      (this.dice_result_node.node.active = !0),
                    null == (e = this.shake_anim) ||
                      e.setAnimation(0, "open2", !1));
                  t % 2 == 0
                    ? (null == (n = this.bauCuaBetEntries[2]) || n.showGlow(),
                      this.isXDSquidGame()
                        ? this._danhSachSoiCau.push(t)
                        : this._danhSachSoiCau.push(!0))
                    : (null == (i = this.bauCuaBetEntries[5]) || i.showGlow(),
                      this.isXDSquidGame()
                        ? this._danhSachSoiCau.push(t)
                        : this._danhSachSoiCau.push(!1));
                  if (2 != t) {
                    if (0 == t)
                      null == (a = this.bauCuaBetEntries[0]) || a.showGlow(),
                        this.sp_dealer &&
                          this.sp_dealer.setAnimation(0, "4 vang", !1);
                    else if (1 == t) {
                      var o;
                      null == (o = this.bauCuaBetEntries[1]) || o.showGlow(),
                        this.sp_dealer &&
                          this.sp_dealer.setAnimation(0, "3 vang", !1);
                    } else if (3 == t) {
                      var s;
                      null == (s = this.bauCuaBetEntries[3]) || s.showGlow(),
                        this.sp_dealer &&
                          this.sp_dealer.setAnimation(0, "3 trang", !1);
                    } else if (4 == t) {
                      var l;
                      null == (l = this.bauCuaBetEntries[4]) || l.showGlow(),
                        this.sp_dealer &&
                          this.sp_dealer.setAnimation(0, "4 trang", !1);
                    }
                  } else
                    this.sp_dealer &&
                      this.sp_dealer.setAnimation(0, "2 vang", !1);
                  for (var r = 0, u = [], h = 0; h < 4; h++) u.push(h);
                  for (var c = 0; c < u.length; c++) {
                    var d = u[c],
                      p = 1;
                    r < t && ((p = 0), r++);
                    var f = "red";
                    0 == p && (f = "white");
                    var _ = f;
                    if ((d > 0 && (_ += d + 1), this.sp_dealer));
                    else if (
                      this.spr_result &&
                      this.sprFrame_result &&
                      this.spr_result[c]
                    ) {
                      var b =
                        _.indexOf("white") >= 0
                          ? this.sprFrame_result[0]
                          : this.sprFrame_result[1];
                      b && (this.spr_result[c].spriteFrame = b);
                    }
                  }
                  this.updateBangSoiCau();
                }),
                (o.updateBangSoiCau = function () {
                  var t,
                    e = this,
                    n =
                      (this._danhSachSoiCau[this._danhSachSoiCau.length - 1],
                      32);
                  this.isXDSquidGame() && (n = 36),
                    this._danhSachSoiCau.length > n &&
                      (this._danhSachSoiCau = this._danhSachSoiCau.filter(
                        function (t, i) {
                          return i >= e._danhSachSoiCau.length - n;
                        }
                      )),
                    this.last_result.forEach(function (t) {
                      t.spriteFrame = null;
                    });
                  var i = 0,
                    a = 0;
                  this._danhSachSoiCau.forEach(function (t) {
                    t ? i++ : a++;
                  }),
                    this.lbl_chan_count &&
                      (this.lbl_chan_count.string = (i < 10 ? "0" : "") + i),
                    this.lbl_le_count &&
                      (this.lbl_le_count.string = (a < 10 ? "0" : "") + a),
                    this._danhSachSoiCau
                      .filter(function (t, n) {
                        return n >= e._danhSachSoiCau.length - 7;
                      })
                      .forEach(function (t, n) {
                        if (n < e.last_result.length) {
                          var i = t
                            ? e.sprFrame_cau_result[1]
                            : e.sprFrame_cau_result[0];
                          i && (e.last_result[n].spriteFrame = i);
                        }
                      }),
                    null == (t = this.soiCauPopup) ||
                      t.updateBangSoiCau2(this._danhSachSoiCau);
                }),
                (o.playShakeAnim = function () {
                  var t,
                    e,
                    n = this;
                  if (this.sp_dealer)
                    return (
                      y("playShakeAnim"),
                      C.stopAllByTarget(this.sp_dealer.node),
                      void S(this.sp_dealer.node)
                        .call(function () {
                          var t;
                          null == (t = n.sp_dealer) ||
                            t.setAnimation(0, "Xoc Dia", !1);
                        })
                        .delay(1)
                        .call(function () {
                          n.shake_disk_sfx &&
                            V.playAdditionalSfx(n.shake_disk_sfx, !0);
                        })
                        .delay(1.25)
                        .call(function () {
                          n.shake_disk_sfx &&
                            V.stopAdditionalSfx(n.shake_disk_sfx);
                        })
                        .start()
                    );
                  null == (t = this.shake_anim) ||
                    t.setAnimation(0, "close2", !1),
                    null == (e = this.shake_anim) ||
                      e.setCompleteListener(function (t) {
                        var e, i, a;
                        null != t &&
                          "close2" == (t.animation ? t.animation.name : "") &&
                          (n.dice_result_node &&
                            (n.dice_result_node.node.active = !1),
                          null == (e = n.shake_anim) ||
                            e.setAnimation(0, "shake", !1),
                          null == (i = n.shake_anim) ||
                            i.addAnimation(0, "shake", !1),
                          null == (a = n.shake_anim) ||
                            a.addAnimation(0, "idle", !0),
                          n.shake_disk_sfx &&
                            V.playAdditionalSfx(n.shake_disk_sfx));
                      });
                }),
                (o.hide = function () {
                  this.back_screen &&
                    this.root &&
                    this.resetUI &&
                    ((this.back_screen.active = !1),
                    (this.root.active = !1),
                    this.resetUI());
                }),
                (o.release = function () {
                  this.bauCuaBetEntries.forEach(function (t) {
                    var e;
                    return null == (e = t.getChipPooling())
                      ? void 0
                      : e.clear();
                  }),
                    this.node.destroy(),
                    e.releaseBundle();
                }),
                (e.releaseBundle = function () {
                  e.instance = null;
                  var t = B.getBundle("xocdia_squidgame");
                  null != t &&
                    null != t &&
                    (t.release("prefab_xocdia_squidgame_2", k),
                    B.removeBundle(t),
                    y("remove asset bundle prefab_xocdia_squidgame_2"),
                    v.garbageCollect());
                }),
                e
              );
            })(D)).instance = null),
            (nn.KEEP_MONEY = 5e4),
            (ee = e((te = nn).prototype, "jackpotItemView", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ne = e(te.prototype, "bauCuaBetEntries", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (ie = e(te.prototype, "btn_test", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ae = e(te.prototype, "shake_anim", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (oe = e(te.prototype, "count_down_anim", [nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (se = e(te.prototype, "lbl_countdown2", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (le = e(te.prototype, "lbl_countdown", [at], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (re = e(te.prototype, "lbl_userOnline", [ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ue = e(te.prototype, "playerViews", [st], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (he = e(te.prototype, "my_info", [lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ce = e(te.prototype, "userOnlinePopup", [rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (de = e(te.prototype, "userChatPopup", [ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pe = e(te.prototype, "userInvitePopup", [ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (fe = e(te.prototype, "chipPanel", [ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_e = e(te.prototype, "btn_user", [dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (be = e(te.prototype, "btn_invite", [pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (me = e(te.prototype, "btn_invites", [ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (ge = e(te.prototype, "btn_chat", [_t], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ve = e(te.prototype, "btn_soicau", [bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (we = e(te.prototype, "btn_exit", [mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ye = e(te.prototype, "btn_datlai", [gt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ce = e(te.prototype, "btn_datx2", [vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Se = e(te.prototype, "btn_huongdan", [wt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Be = e(te.prototype, "scrollViewInfoPopup", [yt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ke = e(te.prototype, "btn_datx2_normal", [Ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ie = e(te.prototype, "btn_datx2_disable", [St], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pe = e(te.prototype, "btn_datlai_normal", [Bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ve = e(te.prototype, "btn_datlai_disable", [kt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (xe = e(te.prototype, "spr_result", [It], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (De = e(te.prototype, "sprFrame_result", [Pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ee = e(te.prototype, "dice_result_node", [Vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ue = e(te.prototype, "soiCauPopup", [xt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ae = e(te.prototype, "last_result", [Dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ge = e(te.prototype, "sprFrame_cau_result", [Et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Re = e(te.prototype, "lbl_chan_count", [Ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Me = e(te.prototype, "lbl_le_count", [At], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Oe = e(te.prototype, "bauCuaSettingPopup", [Gt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Te = e(te.prototype, "xocdia_bgm_music", [Rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ze = e(te.prototype, "shake_disk_sfx", [Mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (He = e(te.prototype, "session_start_sfx", [Ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Xe = e(te.prototype, "bet_sfx", [Tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ne = e(te.prototype, "return_avatar_chip_sfx", [zt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Le = e(te.prototype, "return_dealer_chip_sfx", [Ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Fe = e(te.prototype, "sfx_dealer", [Xt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (je = e(te.prototype, "session_finish_sfx", [Nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Je = e(te.prototype, "sp_dealer", [Lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (qe = e(te.prototype, "dealer_talk", [Ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Qe = e(te.prototype, "btn_jackpot_history", [jt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ke = e(te.prototype, "noHuView", [Jt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (We = e(te.prototype, "jackpotHistoryView", [qt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ye = e(te.prototype, "slotMachineCmp", [Qt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ze = e(te.prototype, "node_chips", [Kt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            ($e = e(te.prototype, "node_layer_1", [Wt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tn = e(te.prototype, "node_layer_2", [Yt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (en = e(te.prototype, "uiOpacitys", [Zt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            ($t = te))
          ) || $t)
        );
        o._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/xocdia-squidgame",
    "chunks:///_virtual/xocdia-squidgame"
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
