System.register(
  "chunks:///_virtual/base-bet",
  [
    "./BaseBetEntry.ts",
    "./BaseBetGameView.ts",
    "./BetEntry.ts",
    "./BetGameData.ts",
    "./BetGameInvitationPlayerView.ts",
    "./BetGameSettingPopup.ts",
    "./BetGameUserChatPopup.ts",
    "./BetGameUserChatTextItem.ts",
    "./BetGameUserInvitePopup.ts",
    "./BetGameUserOnlinePopup.ts",
    "./NoHuView.ts",
    "./SoiCauItemPopup.ts",
    "./SoiCauPopup.ts",
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
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/BaseBetEntry.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./BlinkCmp.ts",
    "./ScaleCmp.ts",
    "./SoundButtonCmp.ts",
  ],
  function (t) {
    "use strict";
    var e, n, r, i, l, o, u, s, a, c, h, b, _, p, m, B;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (o = t._decorator),
            (u = t.Label),
            (s = t.Sprite),
            (a = t.Button),
            (c = t.UIOpacity),
            (h = t.Color),
            (b = t.Component);
        },
        function (t) {
          _ = t.StringUtils;
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          m = t.default;
        },
        function (t) {
          B = t.default;
        },
      ],
      execute: function () {
        var f, C, y, g, S, d, k, v, O, F, w, z, E, I, N, L, M, T, x, D, P;
        l._RF.push({}, "28633bevIJPmbE1OvMpRZjE", "BaseBetEntry", void 0);
        var R = o.ccclass,
          H = o.property;
        t(
          "BaseBetEntry",
          ((f = R("BaseBetEntry")),
          (C = H(u)),
          (y = H(u)),
          (g = H(u)),
          (S = H(String)),
          (d = H(s)),
          (k = H(p)),
          (v = H(a)),
          (O = H(Boolean)),
          (F = H(Boolean)),
          f(
            ((E = e(
              (z = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, l = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    l[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(l)) || this),
                    r(e, "lbl_bet_total", E, i(e)),
                    (e.totalBetScaleCmp = null),
                    r(e, "lbl_bet_current", I, i(e)),
                    (e.currentBetScaleCmp = null),
                    r(e, "lbl_user", N, i(e)),
                    r(e, "entry_name", L, i(e)),
                    r(e, "spr_text", M, i(e)),
                    r(e, "blinkCmp", T, i(e)),
                    (e.blinkOpacity = null),
                    r(e, "button", x, i(e)),
                    r(e, "useShortFormat", D, i(e)),
                    r(e, "useShortFormatOnlyCurrentBet", P, i(e)),
                    (e.totalBet = 0),
                    (e.currentBet = 0),
                    (e.onBetCallBack = null),
                    e
                  );
                }
                n(e, t);
                var l = e.prototype;
                return (
                  (l.getTotalBet = function () {
                    return this.totalBet;
                  }),
                  (l.getCurrentBet = function () {
                    return this.currentBet;
                  }),
                  (l.flyChipToButton = function (t) {}),
                  (l.onLoad = function () {
                    var t,
                      e = this;
                    this.lbl_bet_current &&
                      (this.currentBetScaleCmp =
                        this.lbl_bet_current.node.getComponent(m)),
                      this.lbl_bet_total &&
                        (this.totalBetScaleCmp =
                          this.lbl_bet_total.node.getComponent(m)),
                      this.blinkCmp &&
                        (this.blinkOpacity =
                          this.blinkCmp.node.getComponent(c)),
                      null == (t = this.button) ||
                        t.node.on("click", function () {
                          e.sendBet();
                        });
                  }),
                  (l.isHighlight = function () {
                    return this.blinkCmp && this.blinkCmp.node.active;
                  }),
                  (l.getHighlightOpacity = function () {
                    return this.blinkOpacity && this.blinkOpacity.opacity;
                  }),
                  (l.updateBetInfo = function (t, e) {
                    var n;
                    this.totalBet != t &&
                      (null == (n = this.totalBetScaleCmp) || n.runOnce());
                    (this.totalBet = t),
                      this.lbl_bet_total &&
                        (this.lbl_bet_total.string = this.useShortFormat
                          ? _.formatMoneyNumber(t)
                          : _.formatNumber(t)),
                      this.lbl_bet_total &&
                        (this.lbl_bet_total.node.parent.active = t > 0),
                      this.lbl_user && (this.lbl_user.string = e);
                  }),
                  (l.addCurrentBet = function (t) {
                    (this.currentBet += t),
                      this.lbl_bet_current &&
                        (this.lbl_bet_current.string =
                          this.useShortFormat ||
                          this.useShortFormatOnlyCurrentBet
                            ? _.formatMoneyNumber(this.currentBet)
                            : _.formatNumber(this.currentBet)),
                      this.lbl_bet_current &&
                        (this.lbl_bet_current.node.parent.active =
                          this.currentBet > 0);
                  }),
                  (l.setCurrentBet = function (t) {
                    this.currentBet != t &&
                      this.currentBetScaleCmp &&
                      this.currentBetScaleCmp.runOnce(),
                      (this.currentBet = t),
                      this.lbl_bet_current &&
                        (this.lbl_bet_current.string =
                          this.useShortFormat ||
                          this.useShortFormatOnlyCurrentBet
                            ? _.formatMoneyNumber(this.currentBet)
                            : _.formatNumber(this.currentBet)),
                      this.lbl_bet_current &&
                        (this.lbl_bet_current.node.parent.active =
                          this.currentBet > 0);
                  }),
                  (l.resetCurrentBet = function () {
                    this.currentBet = 0;
                  }),
                  (l.reset = function () {
                    (this.totalBet = 0),
                      (this.currentBet = 0),
                      this.lbl_bet_total &&
                        (this.lbl_bet_total.string = this.useShortFormat
                          ? _.formatMoneyNumber(this.totalBet)
                          : _.formatNumber(this.totalBet)),
                      this.lbl_bet_current &&
                        (this.lbl_bet_current.string =
                          this.useShortFormat ||
                          this.useShortFormatOnlyCurrentBet
                            ? _.formatMoneyNumber(this.currentBet)
                            : _.formatNumber(this.currentBet)),
                      this.lbl_user && (this.lbl_user.string = "0"),
                      this.lbl_bet_current &&
                        (this.lbl_bet_current.node.parent.active =
                          this.currentBet > 0),
                      this.lbl_bet_total &&
                        (this.lbl_bet_total.node.parent.active = !1),
                      this.ungray(),
                      this.stophighlight();
                  }),
                  (l.gray = function () {
                    if (
                      "DICE_TRIPLE" != this.entry_name &&
                      "SMALL" != this.entry_name &&
                      "BIG" != this.entry_name
                    ) {
                      var t = new h(150, 150, 150, 255),
                        e = this.node.getComponent(s);
                      e && (e.color = t),
                        this.lbl_bet_total && (this.lbl_bet_total.color = t),
                        this.lbl_bet_current &&
                          (this.lbl_bet_current.color = t),
                        this.lbl_user && (this.lbl_user.color = t);
                    }
                  }),
                  (l.ungray = function () {
                    if (
                      "DICE_TRIPLE" != this.entry_name &&
                      "SMALL" != this.entry_name &&
                      "BIG" != this.entry_name
                    ) {
                      var t = h.WHITE,
                        e = this.node.getComponent(s);
                      e && (e.color = t),
                        this.lbl_bet_total && (this.lbl_bet_total.color = t),
                        this.lbl_bet_current &&
                          (this.lbl_bet_current.color = t),
                        this.lbl_user && (this.lbl_user.color = t);
                    }
                  }),
                  (l.getName = function () {
                    return this.entry_name;
                  }),
                  (l.highlight = function () {
                    this.ungray(),
                      this.totalBetScaleCmp && this.totalBetScaleCmp.run(),
                      this.currentBetScaleCmp && this.currentBetScaleCmp.run(),
                      this.blinkCmp &&
                        ((this.blinkCmp.node.active = !0), this.blinkCmp.run());
                  }),
                  (l.stophighlight = function () {
                    this.totalBetScaleCmp && this.totalBetScaleCmp.stop(),
                      this.currentBetScaleCmp && this.currentBetScaleCmp.stop(),
                      this.blinkCmp &&
                        (this.blinkCmp.stop(),
                        (this.blinkCmp.node.active = !1));
                  }),
                  (l.setOnBetCallBack = function (t) {
                    this.onBetCallBack = t;
                  }),
                  (l.sendBet = function () {
                    this.onBetCallBack &&
                      this.onBetCallBack(this.entry_name, this);
                  }),
                  (l.sendBetWithSfx = function () {
                    var t, e;
                    null == (t = this.button) ||
                      null == (e = t.getComponent(B)) ||
                      e.playSfx(),
                      this.sendBet();
                  }),
                  e
                );
              })(b)).prototype,
              "lbl_bet_total",
              [C],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (I = e(z.prototype, "lbl_bet_current", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(z.prototype, "lbl_user", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(z.prototype, "entry_name", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (M = e(z.prototype, "spr_text", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(z.prototype, "blinkCmp", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = e(z.prototype, "button", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(z.prototype, "useShortFormat", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (P = e(z.prototype, "useShortFormatOnlyCurrentBet", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (w = z))
          ) || w)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BaseBetGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BundleManager.ts",
    "./SocketManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, r, o, a, s, c, u, l;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy), (a = e._decorator), (s = e.Node), (c = e.Component);
        },
        function (e) {
          u = e.bundleManager;
        },
        function (e) {
          l = e.socketManager;
        },
      ],
      execute: function () {
        var f, p, h, y, g, b, d;
        o._RF.push({}, "11015AD+FxP6qttsdzoY/2c", "BaseBetGameView", void 0);
        var B = a.ccclass,
          m = a.property;
        e(
          "BaseBetGameView",
          ((f = B("BaseBetGameView")),
          (p = m(s)),
          (h = m(s)),
          f(
            ((b = t(
              (g = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    i(t, "back_screen", b, r(t)),
                    i(t, "root", d, r(t)),
                    (t.isStart = !1),
                    (t.isEnd = !0),
                    (t.isRefreshingInBackground = !1),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    this.show();
                  }),
                  (o.getChipPooling = function () {
                    return null;
                  }),
                  (o.getVisiblePlayerByID = function (e) {}),
                  (o.getVisiblePlayerByUserName = function (e) {}),
                  (o.onClickBetEntry = function (e) {}),
                  (o.playBgmMusic = function () {}),
                  (o.isEndGame = function () {
                    return this.isEnd;
                  }),
                  (o.isStartGame = function () {
                    return this.isStart;
                  }),
                  (o.leaveRoom = function () {
                    u.runLobby();
                  }),
                  (o.show = function () {
                    l.sendRefreshMoney(),
                      this.initUI(),
                      this.back_screen && (this.back_screen.active = !0),
                      this.root && (this.root.active = !0);
                  }),
                  (o.initUI = function () {}),
                  t
                );
              })(c)).prototype,
              "back_screen",
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
            (d = t(g.prototype, "root", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = g))
          ) || y)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetEntry.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SoundManager.ts",
    "./StringUtils.ts",
    "./BlinkCmp.ts",
    "./GameUtils.ts",
    "./ChipPooling.ts",
  ],
  function (t) {
    "use strict";
    var n, e, o, i, l, r, a, s, c, p, u, h, g, d, f, m, y, v, b, _, C, w, P;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (r = t._decorator),
            (a = t.Vec3),
            (s = t.Sprite),
            (c = t.Node),
            (p = t.Label),
            (u = t.Button),
            (h = t.UITransform),
            (g = t.Tween),
            (d = t.UIOpacity),
            (f = t.Color),
            (m = t.tween),
            (y = t.log),
            (v = t.Component);
        },
        function (t) {
          b = t.SoundManager;
        },
        function (t) {
          _ = t.StringUtils;
        },
        function (t) {
          C = t.default;
        },
        function (t) {
          w = t.default;
        },
        function (t) {
          P = t.ChipPooling;
        },
      ],
      execute: function () {
        var R,
          B,
          x,
          S,
          I,
          O,
          E,
          F,
          M,
          A,
          T,
          z,
          k,
          N,
          V,
          Z,
          q,
          D,
          U,
          L,
          W,
          G,
          j,
          H,
          J;
        l._RF.push({}, "eb3c8lj1qVLipSurt9xSMUq", "BetEntry", void 0);
        var K = r.ccclass,
          Q = r.property,
          X = t("RandomPos", function () {
            (this.pos = a.ZERO), (this.chips = []);
          });
        t(
          "BetEntry",
          ((R = K("BetEntry")),
          (B = Q(s)),
          (x = Q(c)),
          (S = Q(p)),
          (I = Q(p)),
          (O = Q(u)),
          (E = Q(p)),
          (F = Q(Number)),
          (M = Q(Boolean)),
          (A = Q(c)),
          (T = Q(c)),
          (z = Q(P)),
          R(
            ((V = n(
              (N = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, l = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    l[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(l)) || this),
                    o(n, "spr_noglow", V, i(n)),
                    o(n, "glow", Z, i(n)),
                    o(n, "lbl_total_bet", q, i(n)),
                    o(n, "lbl_my_bet", D, i(n)),
                    o(n, "button", U, i(n)),
                    o(n, "lbl_rate", L, i(n)),
                    o(n, "eid", W, i(n)),
                    o(n, "useShortFormat", G, i(n)),
                    o(n, "random_pos", j, i(n)),
                    o(n, "dealer_chip_pos", H, i(n)),
                    o(n, "chipPooling", J, i(n)),
                    (n.currentBet = 0),
                    (n.listBetCoin = []),
                    (n.blink = null),
                    (n.totalBet = 0),
                    (n.random_chip_data = []),
                    (n.gameView = null),
                    n
                  );
                }
                e(n, t);
                var l = n.prototype;
                return (
                  (l.setGameView = function (t) {
                    this.gameView = t;
                  }),
                  (l.onLoad = function () {
                    var t,
                      n = this;
                    this.glow && (this.blink = this.glow.getComponent(C)),
                      null == (t = this.button) ||
                        t.node.on("click", function () {
                          var t;
                          null == (t = n.gameView) || t.onClickBetEntry(n.eid);
                        });
                  }),
                  (l.createRandomChipData = function () {
                    if (null != this.random_pos) {
                      this.random_chip_data = [];
                      var t = this.random_pos.getComponent(h);
                      if (null != t)
                        for (
                          var n = t.getBoundingBox().xMin + 30,
                            e = t.getBoundingBox().xMax + 30,
                            o = t.getBoundingBox().yMin + 20,
                            i = t.getBoundingBox().yMax + 20,
                            l = Math.abs(e - n),
                            r = Math.abs(i - o),
                            s = 0;
                          s < 5;
                          s++
                        )
                          for (var c = n + s * (l / 5), p = 0; p < 5; p++) {
                            var u = new a(c, o + p * (r / 5), 0),
                              g = new X();
                            (g.pos = u),
                              (g.chips = []),
                              this.random_chip_data.push(g);
                          }
                    }
                  }),
                  (l.getRandomPosition = function () {
                    if (null == this.random_pos) return a.ZERO;
                    var t = this.random_pos.position.x,
                      n = this.random_pos.position.y,
                      e = this.random_pos.getComponent(h);
                    if (null == e) return a.ZERO;
                    var o,
                      i,
                      l = e.contentSize.width,
                      r = e.contentSize.height;
                    return (
                      (o = w.getRandomInt(-l / 2, l / 2)),
                      (i = w.getRandomInt(-r / 2, r / 2)),
                      new a((t += o), (n += i), 0)
                    );
                  }),
                  (l.getRandomPosition2 = function () {
                    var t,
                      n,
                      e = 0,
                      o = 0;
                    return (
                      (t = w.getRandomInt(-37.5, 37.5)),
                      (n = w.getRandomInt(-37.5, 37.5)),
                      new a((e += t), (o += n), 0)
                    );
                  }),
                  (l.setRate = function (t) {
                    null != this.lbl_rate &&
                      ((this.lbl_rate.node.active = !0),
                      (this.lbl_rate.string = "1:" + t));
                  }),
                  (l.hideAll = function () {
                    g.stopAllByTarget(this.node),
                      this.listBetCoin.forEach(function (t) {
                        g.stopAllByTarget(t);
                        var n = t.getComponent(d);
                        n && g.stopAllByTarget(n);
                      }),
                      (this.listBetCoin = []),
                      this.createRandomChipData(),
                      (this.currentBet = 0),
                      (this.totalBet = 0),
                      this.lbl_total_bet &&
                        this.lbl_total_bet.node.parent &&
                        (this.lbl_total_bet.node.parent.active = !1),
                      this.lbl_my_bet &&
                        this.lbl_my_bet.node.parent &&
                        (this.lbl_my_bet.node.parent.active = !1),
                      this.showGlow(!1);
                  }),
                  (l.resetUI = function () {
                    this.showGlow(!1);
                  }),
                  (l.gray = function () {
                    this.spr_noglow &&
                      (this.spr_noglow.color = new f(150, 150, 150, 255));
                  }),
                  (l.ungray = function () {
                    this.spr_noglow &&
                      (this.spr_noglow.color = new f(255, 255, 255, 255));
                  }),
                  (l.showGlow = function (t) {
                    void 0 === t && (t = !0),
                      null == this.blink &&
                        this.glow &&
                        (this.blink = this.glow.getComponent(C)),
                      t && null != this.blink && this.blink.run(),
                      this.ungray(),
                      this.glow && (this.glow.active = t);
                  }),
                  (l.showGlowOnce = function (t) {
                    var n;
                    (void 0 === t && (t = !0), null == this.blink) &&
                      this.glow &&
                      (this.blink =
                        null == (n = this.glow) ? void 0 : n.getComponent(C));
                    t && null != this.blink && this.blink.runOnce(),
                      this.ungray(),
                      this.glow && (this.glow.active = t);
                  }),
                  (l.isGlowing = function () {
                    var t;
                    return null == (t = this.glow) ? void 0 : t.active;
                  }),
                  (l.setTotalBet = function (t) {
                    (this.totalBet = t),
                      this.lbl_total_bet &&
                        this.lbl_total_bet.node.parent &&
                        (this.lbl_total_bet.node.parent.active = t > 0),
                      this.lbl_total_bet &&
                        (this.lbl_total_bet.string = this.useShortFormat
                          ? _.formatMoneyNumber(t)
                          : _.formatNumber(t));
                  }),
                  (l.setTotalBet2 = function (t) {
                    (this.totalBet = t),
                      this.lbl_total_bet &&
                        this.lbl_total_bet.node.parent &&
                        (this.lbl_total_bet.node.parent.active = !0),
                      this.lbl_total_bet &&
                        (this.lbl_total_bet.string = this.useShortFormat
                          ? _.formatMoneyNumber(t)
                          : _.formatNumber(t));
                  }),
                  (l.getTotalBet = function () {
                    return this.totalBet;
                  }),
                  (l.setCurrentBet = function (t) {
                    (this.currentBet += t),
                      this.lbl_my_bet &&
                        this.lbl_my_bet.node.parent &&
                        (this.lbl_my_bet.node.parent.active = !0),
                      this.lbl_my_bet &&
                        (this.lbl_my_bet.string = this.useShortFormat
                          ? _.formatMoneyNumber(this.currentBet)
                          : _.formatNumber(this.currentBet));
                  }),
                  (l.getCurrentBet = function () {
                    return this.currentBet;
                  }),
                  (l.setCurrentBet2 = function (t) {
                    (this.currentBet = t),
                      this.lbl_my_bet &&
                        this.lbl_my_bet.node.parent &&
                        (this.lbl_my_bet.node.parent.active = t > 0),
                      this.lbl_my_bet &&
                        (this.lbl_my_bet.string = this.useShortFormat
                          ? _.formatMoneyNumber(this.currentBet)
                          : _.formatNumber(this.currentBet));
                  }),
                  (l.getEID = function () {
                    return this.eid;
                  }),
                  (l.addCoin = function (t) {
                    this.listBetCoin.push(t);
                  }),
                  (l.getChipPooling = function () {
                    return this.chipPooling;
                  }),
                  (l.getChip = function (t) {
                    var n,
                      e,
                      o = {},
                      i =
                        null == (n = this.chipPooling) ? void 0 : n.getChip2(t),
                      l = a.ZERO;
                    if (i) l = this.getFixedRandomPositionAtEntry(i);
                    else {
                      var r = this.getLastestChipInRandomPosition();
                      (i = r.chip), (l = r.pos);
                    }
                    return (
                      i && (null == (e = this.chipPooling) || e.topOnChip(i)),
                      (o.newCoin = i),
                      (o.desPos = l),
                      o
                    );
                  }),
                  (l.getRandomChip = function () {
                    var t,
                      n,
                      e = {},
                      o =
                        null == (t = this.chipPooling)
                          ? void 0
                          : t.getRandomChip2(),
                      i = a.ZERO;
                    if (o) i = this.getFixedRandomPositionAtEntry(o);
                    else {
                      var l = this.getLastestChipInRandomPosition();
                      (o = l.chip), (i = l.pos);
                    }
                    return (
                      o && (null == (n = this.chipPooling) || n.topOnChip(o)),
                      (e.newCoin = o),
                      (e.desPos = i),
                      e
                    );
                  }),
                  (l.getFixedRandomPositionAtEntry = function (t) {
                    var n = this.random_chip_data.filter(function (t) {
                        return t.chips.length < 2;
                      }),
                      e = n[w.getRandomInt(0, n.length)];
                    return e
                      ? (this.addCoin(t),
                        e.chips.push(t),
                        new a(e.pos.x, e.pos.y, 0))
                      : a.ZERO;
                  }),
                  (l.getLastestChipInRandomPosition = function () {
                    var t = this.random_chip_data.filter(function (t) {
                        return (
                          t.chips.length > 1 &&
                          0 ==
                            t.chips.filter(function (t) {
                              return "flying" == t.name;
                            }).length
                        );
                      }),
                      n = t[w.getRandomInt(0, t.length)],
                      e = { chip: null };
                    if (((e.pos = a.ZERO), n)) {
                      var o = n.chips.shift();
                      (e.chip = o),
                        (e.pos = new a(n.pos.x, n.pos.y, 0)),
                        o && n.chips.push(o);
                    }
                    return e;
                  }),
                  (l.payChipsForDealer = function (t, n, e) {
                    for (
                      var o = this,
                        i = t ? this.listBetCoin : [],
                        l = function (t) {
                          var l = t,
                            r = i[l];
                          g.stopAllByTarget(r);
                          var s = r.getComponent(d);
                          s && g.stopAllByTarget(s);
                          var c = new a(
                            o.random_pos
                              ? o.random_pos.position
                              : o.node.position
                          );
                          m(r)
                            .sequence(
                              m().call(function () {
                                0 == t && e && b.getInstance().playSfx(n);
                              }),
                              m()
                                .to(0.3, { position: c })
                                .call(function () {}),
                              m().delay(0.2),
                              m().call(function () {
                                var t = r.getComponent(d);
                                m(t).to(0.4, { opacity: 0 }).start();
                              }),
                              m()
                                .delay(0.4)
                                .call(function () {
                                  var t = new a(r.position);
                                  (t.y = c.y + 3 * l),
                                    r.setPosition(t),
                                    r.parent &&
                                      r.setSiblingIndex(
                                        r.parent.children.length - 1
                                      );
                                }),
                              m()
                                .delay(0.1)
                                .call(function () {
                                  var o = r.getComponent(d);
                                  o && (o.opacity = 1),
                                    0 == t && e && b.getInstance().playSfx(n),
                                    m(o).to(0.7, { opacity: 255 }).start();
                                }),
                              m()
                                .delay(0.7)
                                .call(function () {
                                  0 == t && e && b.getInstance().playSfx(n);
                                })
                                .to(0.5, {
                                  position: o.dealer_chip_pos
                                    ? o.dealer_chip_pos.position
                                    : a.ZERO,
                                }),
                              m().call(function () {
                                var t = r.getComponent(d);
                                m(t).to(0.5, { opacity: 0 }).start();
                              })
                            )
                            .start();
                        },
                        r = 0;
                      r < i.length;
                      r++
                    )
                      l(r);
                  }),
                  (l.getRandomPositionAtEntry = function () {
                    var t = 0,
                      n = 0,
                      e = w.getRandomInt(-75, 75),
                      o = w.getRandomInt(-50, 50);
                    return new a((t += e), (n += o), 0);
                  }),
                  (l.payChipsForHidden = function (t, n) {
                    var e = this;
                    g.stopAllByTarget(this.node);
                    m(this.node)
                      .delay(2.7)
                      .call(function () {
                        for (
                          var n = 0,
                            o = function (o) {
                              var i = e.listBetCoin[o];
                              n < 80
                                ? m(i)
                                    .sequence(
                                      m().to(
                                        1,
                                        { position: e.getRandomPosition2() },
                                        { easing: "expoOut" }
                                      ),
                                      m().delay(0.5 + 0.03 * n),
                                      m().call(function () {
                                        var t =
                                          null == i
                                            ? void 0
                                            : i.getComponent(d);
                                        t && g.stopAllByTarget(t),
                                          m(t)
                                            .to(
                                              0.4,
                                              { opacity: 0 },
                                              { easing: "expoIn" }
                                            )
                                            .start();
                                      }),
                                      m()
                                        .to(0.4, { position: new a(t) })
                                        .to(0.2, { scale: a.ZERO })
                                        .call(function () {
                                          i && (i.active = !1);
                                        })
                                    )
                                    .start()
                                : m(i)
                                    .sequence(
                                      m().to(
                                        0.5,
                                        { position: a.ZERO },
                                        { easing: "expoOut" }
                                      ),
                                      m().call(function () {
                                        i &&
                                          ((i.scale = a.ZERO), (i.active = !1));
                                      })
                                    )
                                    .start();
                              n++;
                            },
                            i = e.listBetCoin.length - 1;
                          i >= 0;
                          i--
                        )
                          o(i);
                      })
                      .start();
                  }),
                  (l.payChipsForPlayersByUName = function (t, n) {
                    var e = this;
                    try {
                      var o,
                        i =
                          null == (o = this.gameView)
                            ? void 0
                            : o.getVisiblePlayerByUserName(t);
                      if (null == i) return;
                      var l = [],
                        r = i.shakeDiskCoinsPath.filter(function (t) {
                          return t.eid == e.eid;
                        });
                      if (null == r || null == r || r.length <= 0)
                        return void y("No shake coin!");
                      r[0].coins.forEach(function (t) {
                        var n,
                          o,
                          i,
                          r,
                          c =
                            null == (n = e.gameView) ||
                            null == (o = n.getChipPooling())
                              ? void 0
                              : o.getPayChip(
                                  t.getComponent(s).spriteFrame.name
                                );
                        c &&
                          (null == (i = e.gameView) ||
                            null == (r = i.getChipPooling()) ||
                            r.topOnChip(c),
                          c.setPosition(
                            new a(t.position.x, t.position.y, t.position.z)
                          ),
                          (c.active = !0),
                          l.push(c));
                        t.active = !1;
                      });
                      for (var c = [], p = 0; p < l.length; p++) {
                        var u,
                          g,
                          d,
                          f,
                          v =
                            null == (u = this.gameView) ||
                            null == (g = u.getChipPooling())
                              ? void 0
                              : g.getPayChip(
                                  l[p].getComponent(s).spriteFrame.name
                                );
                        if (v)
                          null == (d = this.gameView) ||
                            null == (f = d.getChipPooling()) ||
                            f.topOnChip(v),
                            v.setPosition(a.ZERO),
                            (v.active = !1),
                            c.push(v);
                      }
                      m(i.node)
                        .sequence(
                          m(i.node).delay(2.7),
                          m(i.node).call(function () {
                            m(i.node)
                              .sequence(
                                m(i.node).call(function () {
                                  var t,
                                    o,
                                    r =
                                      null == i
                                        ? void 0
                                        : i.getMoneyPositions()[0].position,
                                    s = e.getChipPooling(),
                                    c = i
                                      .getIconMoneyPosition()
                                      .parent.getComponent(h)
                                      .convertToWorldSpaceAR(r);
                                  s && s.node.parent
                                    ? (t =
                                        null ==
                                        (o = s.node.parent.getComponent(h))
                                          ? void 0
                                          : o.convertToNodeSpaceAR(c))
                                    : (t = r);
                                  for (var p = 0; p < l.length; p++) {
                                    var u = l[p];
                                    (u.active = !0),
                                      m(u)
                                        .call(function () {
                                          b.getInstance().playSfx(n);
                                        })
                                        .to(
                                          0.9,
                                          {
                                            position: new a(
                                              t.x,
                                              t.y + 3 * p,
                                              t.z
                                            ),
                                          },
                                          { easing: "expoOut" }
                                        )
                                        .start();
                                  }
                                }),
                                m(i.node).delay(0.5),
                                m(i.node).call(function () {
                                  try {
                                    var t,
                                      o,
                                      l =
                                        null == i
                                          ? void 0
                                          : i.getMoneyPositions()[1].position,
                                      r = e.getChipPooling(),
                                      s = i
                                        .getIconMoneyPosition()
                                        .parent.getComponent(h)
                                        .convertToWorldSpaceAR(l);
                                    if (r && r.node.parent)
                                      t =
                                        null ==
                                        (o = r.node.parent.getComponent(h))
                                          ? void 0
                                          : o.convertToNodeSpaceAR(s);
                                    else t = l;
                                    for (var p = 0; p < c.length; p++) {
                                      var u = c[p];
                                      if (((u.active = !0), null != u))
                                        try {
                                          m(u)
                                            .call(function () {
                                              b.getInstance().playSfx(n);
                                            })
                                            .to(
                                              0.9,
                                              {
                                                position: new a(
                                                  t.x,
                                                  t.y + 3 * p,
                                                  t.z
                                                ),
                                              },
                                              { easing: "expoOut" }
                                            )
                                            .start();
                                        } catch (t) {}
                                      else y("can't find coin");
                                    }
                                  } catch (t) {
                                    y(
                                      "some error occur in payChipsForPlayers1"
                                    );
                                  }
                                }),
                                m(i.node).delay(1.5),
                                m(i.node).call(function () {
                                  try {
                                    var t,
                                      n,
                                      o = i.getIconMoneyPosition().position,
                                      r = e.getChipPooling(),
                                      s = i
                                        .getIconMoneyPosition()
                                        .parent.getComponent(h)
                                        .convertToWorldSpaceAR(o);
                                    if (r && r.node.parent)
                                      t =
                                        null ==
                                        (n = r.node.parent.getComponent(h))
                                          ? void 0
                                          : n.convertToNodeSpaceAR(s);
                                    else t = o;
                                    for (var p = 0; p < c.length; p++) {
                                      var u = c[p];
                                      (u.active = !0),
                                        m(u)
                                          .sequence(
                                            m().call(function () {}),
                                            m()
                                              .to(
                                                0.2,
                                                { position: new a(t) },
                                                { easing: "linear" }
                                              )
                                              .to(0.2, { scale: a.ZERO })
                                          )
                                          .start();
                                    }
                                    for (var g = 0; g < l.length; g++) {
                                      var d = l[g];
                                      m(d)
                                        .sequence(
                                          m().call(function () {}),
                                          m()
                                            .to(
                                              0.2,
                                              { position: new a(t) },
                                              { easing: "linear" }
                                            )
                                            .to(0.2, { scale: a.ZERO })
                                        )
                                        .start();
                                    }
                                  } catch (t) {
                                    y(
                                      "some error occur in payChipsForPlayers2"
                                    );
                                  }
                                })
                              )
                              .start();
                          }),
                          m(i.node).call(function () {
                            i.showWinFx(0.9, 4, !1);
                          })
                        )
                        .start();
                    } catch (t) {
                      y("some error occur in payChipsForPlayers4");
                    }
                  }),
                  (l.payChipsForPlayers = function (t, n) {
                    var e = this;
                    try {
                      var o,
                        i =
                          null == (o = this.gameView)
                            ? void 0
                            : o.getVisiblePlayerByID(t);
                      if (null == i) return;
                      var l = [],
                        r = i.shakeDiskCoinsPath.filter(function (t) {
                          return t.eid == e.eid;
                        });
                      if (null == r || null == r || r.length <= 0)
                        return void y("No shake coin!");
                      r[0].coins.forEach(function (t) {
                        var n,
                          o,
                          i,
                          r,
                          c =
                            null == (n = e.gameView) ||
                            null == (o = n.getChipPooling())
                              ? void 0
                              : o.getPayChip(
                                  t.getComponent(s).spriteFrame.name
                                );
                        c &&
                          (null == (i = e.gameView) ||
                            null == (r = i.getChipPooling()) ||
                            r.topOnChip(c),
                          c.setPosition(
                            new a(t.position.x, t.position.y, t.position.z)
                          ),
                          l.push(c));
                        t.active = !1;
                      });
                      for (var c = [], p = 0; p < l.length; p++) {
                        var u,
                          g,
                          d,
                          f,
                          v =
                            null == (u = this.gameView) ||
                            null == (g = u.getChipPooling())
                              ? void 0
                              : g.getPayChip(
                                  l[p].getComponent(s).spriteFrame.name
                                );
                        if (v)
                          null == (d = this.gameView) ||
                            null == (f = d.getChipPooling()) ||
                            f.topOnChip(v),
                            v.setPosition(a.ZERO),
                            (v.active = !1),
                            c.push(v);
                      }
                      m(i.node)
                        .sequence(
                          m().delay(2.7),
                          m().call(function () {
                            m(i.node)
                              .sequence(
                                m().delay(0.5),
                                m().call(function () {
                                  try {
                                    var t,
                                      o,
                                      l =
                                        null == i
                                          ? void 0
                                          : i.getMoneyPositions()[1].position,
                                      r = e.getChipPooling(),
                                      s = i
                                        .getIconMoneyPosition()
                                        .parent.getComponent(h)
                                        .convertToWorldSpaceAR(l);
                                    if (r && r.node.parent)
                                      t =
                                        null ==
                                        (o = r.node.parent.getComponent(h))
                                          ? void 0
                                          : o.convertToNodeSpaceAR(s);
                                    else t = l;
                                    for (var p = 0; p < c.length; p++) {
                                      var u = c[p];
                                      if (((u.active = !0), null != u))
                                        try {
                                          m(u)
                                            .call(function () {
                                              b.getInstance().playSfx(n);
                                            })
                                            .to(
                                              0.9,
                                              {
                                                position: new a(
                                                  t.x,
                                                  t.y + 3 * p,
                                                  t.z
                                                ),
                                              },
                                              { easing: "expoOut" }
                                            )
                                            .start();
                                        } catch (t) {}
                                      else y("can't find coin");
                                    }
                                  } catch (t) {
                                    y(
                                      "some error occur in payChipsForPlayers1"
                                    );
                                  }
                                }),
                                m().delay(1.5),
                                m().call(function () {
                                  try {
                                    var t,
                                      n,
                                      o = i.getIconMoneyPosition().position,
                                      r = e.getChipPooling(),
                                      s = i
                                        .getIconMoneyPosition()
                                        .parent.getComponent(h)
                                        .convertToWorldSpaceAR(o);
                                    if (r && r.node.parent)
                                      t =
                                        null ==
                                        (n = r.node.parent.getComponent(h))
                                          ? void 0
                                          : n.convertToNodeSpaceAR(s);
                                    else t = o;
                                    for (var p = 0; p < c.length; p++) {
                                      var u = c[p];
                                      (u.active = !0),
                                        m(u)
                                          .sequence(
                                            m().call(function () {}),
                                            m()
                                              .to(
                                                0.2,
                                                { position: new a(t) },
                                                { easing: "linear" }
                                              )
                                              .to(0.2, { scale: a.ZERO })
                                          )
                                          .start();
                                    }
                                    for (var g = 0; g < l.length; g++) {
                                      var d = l[g];
                                      m(d)
                                        .sequence(
                                          m().call(function () {}),
                                          m()
                                            .to(
                                              0.2,
                                              { position: new a(t) },
                                              { easing: "linear" }
                                            )
                                            .to(0.2, { scale: a.ZERO })
                                        )
                                        .start();
                                    }
                                  } catch (t) {
                                    y(
                                      "some error occur in payChipsForPlayers2"
                                    );
                                  }
                                })
                              )
                              .start();
                          }),
                          m().call(function () {
                            i.showWinFx(0.9, 4, !1);
                          }),
                          m().call(function () {
                            try {
                              var t,
                                o,
                                r =
                                  null == i
                                    ? void 0
                                    : i.getMoneyPositions()[0].position,
                                s = e.getChipPooling(),
                                c = i
                                  .getIconMoneyPosition()
                                  .parent.getComponent(h)
                                  .convertToWorldSpaceAR(r);
                              if (s && s.node.parent)
                                t =
                                  null == (o = s.node.parent.getComponent(h))
                                    ? void 0
                                    : o.convertToNodeSpaceAR(c);
                              else t = r;
                              for (var p = 0; p < l.length; p++) {
                                var u = l[p];
                                (u.active = !0),
                                  m(u)
                                    .call(function () {
                                      b.getInstance().playSfx(n);
                                    })
                                    .to(
                                      0.9,
                                      {
                                        position: new a(t.x, t.y + 3 * p, t.z),
                                      },
                                      { easing: "expoOut" }
                                    )
                                    .start();
                              }
                            } catch (t) {
                              y("some error occur in payChipsForPlayers3");
                            }
                          })
                        )
                        .start();
                    } catch (t) {
                      y("some error occur in payChipsForPlayers4");
                    }
                  }),
                  n
                );
              })(v)).prototype,
              "spr_noglow",
              [B],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (Z = n(N.prototype, "glow", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = n(N.prototype, "lbl_total_bet", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = n(N.prototype, "lbl_my_bet", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = n(N.prototype, "button", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = n(N.prototype, "lbl_rate", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = n(N.prototype, "eid", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (G = n(N.prototype, "useShortFormat", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (j = n(N.prototype, "random_pos", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = n(N.prototype, "dealer_chip_pos", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = n(N.prototype, "chipPooling", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = N))
          ) || k)
        );
        l._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/BetGameData.ts", ["cc"], function (t) {
  "use strict";
  var e;
  return {
    setters: [
      function (t) {
        e = t.cclegacy;
      },
    ],
    execute: function () {
      e._RF.push({}, "97a3chfxu5JrJNSF87HKjdG", "BetGameData", void 0);
      t("UserBetData", function () {
        (this.uid = ""), (this.eid = ""), (this.bet = 0);
      });
      e._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/BetGameInvitationPlayerView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (e) {
    "use strict";
    var t, i, n, r, l, o, a, s, u, c;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (o = e._decorator),
            (a = e.Label),
            (s = e.Toggle),
            (u = e.Component);
        },
        function (e) {
          c = e.StringUtils;
        },
      ],
      execute: function () {
        var p, g, y, b, h, m, f, v, d;
        l._RF.push(
          {},
          "2e461T1MoNJLZUO27Qa40oP",
          "BetGameInvitationPlayerView",
          void 0
        );
        var _ = o.ccclass,
          w = o.property;
        e(
          "BetGameInvitationPlayerView",
          ((p = _("BetGameInvitationPlayerView")),
          (g = w(a)),
          (y = w(a)),
          (b = w(s)),
          p(
            ((f = t(
              (m = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, l = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    l[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(l)) || this),
                    n(t, "lbl_displayName", f, r(t)),
                    n(t, "lbl_money", v, r(t)),
                    n(t, "toggle_invite", d, r(t)),
                    (t.uid = ""),
                    t
                  );
                }
                i(t, e);
                var l = t.prototype;
                return (
                  (l.isSelected = function () {
                    var e;
                    return (
                      this.node.active &&
                      (null == (e = this.toggle_invite) ? void 0 : e.isChecked)
                    );
                  }),
                  (l.getName = function () {
                    return this.uid;
                  }),
                  (l.show = function (e, t, i) {
                    (this.uid = e),
                      this.toggle_invite && (this.toggle_invite.isChecked = !0),
                      this.lbl_money &&
                        (this.lbl_money.string = c.formatMoneyNumber(i)),
                      this.lbl_displayName && (this.lbl_displayName.string = t);
                  }),
                  t
                );
              })(u)).prototype,
              "lbl_displayName",
              [g],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (v = t(m.prototype, "lbl_money", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = t(m.prototype, "toggle_invite", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (h = m))
          ) || h)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetGameSettingPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SettingPopup.ts",
    "./State.ts",
    "./PlayerView.ts",
    "./EventManager.ts",
    "./Define.ts",
    "./PersistManager.ts",
  ],
  function (t) {
    "use strict";
    var e, i, o, n, l, s, a, u, r, c, g, h, f, m, _, d;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (s = t._decorator),
            (a = t.Button),
            (u = t.Toggle),
            (r = t.log);
        },
        function (t) {
          c = t.SettingPopup;
        },
        function (t) {
          g = t.state;
        },
        function (t) {
          h = t.PlayerView;
        },
        function (t) {
          (f = t.eventManager), (m = t.EventKey);
        },
        function (t) {
          _ = t.StorageKey;
        },
        function (t) {
          d = t.PersistManager;
        },
      ],
      execute: function () {
        var p, E, S, x, C, v, y, b, k, w, B, I, P, G;
        l._RF.push(
          {},
          "d8546OLwchI5bQD5DnErLE7",
          "BetGameSettingPopup",
          void 0
        );
        var H = s.ccclass,
          D = s.property;
        t(
          "BetGameSettingPopup",
          ((p = H("BetGameSettingPopup")),
          (E = D(a)),
          (S = D(u)),
          (x = D(u)),
          (C = D(u)),
          (v = D(h)),
          p(
            (((G = (function (t) {
              function e() {
                for (
                  var e, i = arguments.length, l = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  l[s] = arguments[s];
                return (
                  (e = t.call.apply(t, [this].concat(l)) || this),
                  o(e, "btn_exit", k, n(e)),
                  o(e, "toggle_hideChat", w, n(e)),
                  o(e, "tog_sfx", B, n(e)),
                  o(e, "tog_music", I, n(e)),
                  o(e, "my_info", P, n(e)),
                  (e.isWillExit = !1),
                  (e.callBackExitRoom = null),
                  (e.gameView = null),
                  e
                );
              }
              i(e, t);
              var l = e.prototype;
              return (
                (l.setGameView = function (t) {
                  this.gameView = t;
                }),
                (l.isHideChat = function () {
                  var t;
                  return (
                    (null == (t = this.toggle_hideChat)
                      ? void 0
                      : t.isChecked) || g.username.indexOf("dealer_789") >= 0
                  );
                }),
                (l.onLoad = function () {
                  var i,
                    o,
                    n,
                    l,
                    s,
                    a,
                    u,
                    c = this;
                  t.prototype.onLoad.call(this),
                    this.tog_sfx ||
                      r("BetGameSettingPopup tog_sfx is not assigned"),
                    this.tog_music ||
                      r("BetGameSettingPopup tog_music is not assigned"),
                    (this.flip = !0),
                    null == (i = this.btn_exit) ||
                      i.node.on("click", function () {
                        return c.exitRoom();
                      }),
                    (this.tog_sfx.isChecked =
                      "1" == localStorage.getItem(_.SoundFX) ||
                      "true" == localStorage.getItem(_.SoundFX)),
                    (this.tog_music.isChecked =
                      "1" == localStorage.getItem(_.Music) ||
                      "true" == localStorage.getItem(_.Music)),
                    f.emit(
                      m.SoundToggle,
                      null == (o = this.tog_sfx) ? void 0 : o.isChecked
                    ),
                    f.emit(
                      m.MusicToggle,
                      null == (n = this.tog_music) ? void 0 : n.isChecked
                    ),
                    null == (l = this.tog_sfx) ||
                      l.node.on("toggle", function () {
                        localStorage.setItem(
                          _.SoundFX,
                          c.tog_sfx.isChecked ? "1" : "0"
                        ),
                          f.emit(m.SoundToggle, c.tog_sfx.isChecked);
                      }),
                    null == (s = this.tog_music) ||
                      s.node.on("toggle", function () {
                        localStorage.setItem(
                          _.Music,
                          c.tog_music.isChecked ? "1" : "0"
                        ),
                          f.emit(m.MusicToggle, c.tog_music.isChecked);
                      }),
                    null == (a = this.toggle_hideChat) ||
                      a.node.on("toggle", function () {
                        r(c.isHideChat()),
                          localStorage.setItem(
                            e.SAVE_HIDE_CHAT_KEY,
                            c.isHideChat() ? "true" : "false"
                          );
                      });
                  var g = localStorage.getItem(e.SAVE_HIDE_CHAT_KEY);
                  null == g || null == g
                    ? this.toggle_hideChat &&
                      (this.toggle_hideChat.isChecked = !1)
                    : this.toggle_hideChat &&
                      (this.toggle_hideChat.isChecked = "true" == g);
                  var h =
                    null == (u = this.my_info) ? void 0 : u.getButtonGetout();
                  null != h &&
                    h.node.on("click", function () {
                      var t;
                      null == (t = c.my_info) || t.showButtonGetout(!1);
                      d.showNoti("Bạn sẽ ở lại chơi."), (c.isWillExit = !1);
                    });
                }),
                (l.exitRoom = function () {
                  var t,
                    e = this;
                  if (null == (t = this.gameView) ? void 0 : t.isEndGame())
                    this.callBackExitRoom &&
                      f.emit(m.IsMiniDownload, function () {
                        e.callBackExitRoom();
                      });
                  else if (this.isWillExit) {
                    var i;
                    d.showNoti("Bạn sẽ ở lại chơi.", this.root, 15, 0),
                      (this.isWillExit = !1),
                      null == (i = this.my_info) || i.showButtonGetout(!1);
                  } else {
                    var o;
                    d.showNoti(
                      "Bạn sẽ rời phòng khi kết thúc ván.",
                      this.root,
                      15,
                      0
                    ),
                      (this.isWillExit = !0),
                      null == (o = this.my_info) || o.showButtonGetout();
                  }
                }),
                (l.reset = function () {
                  var t;
                  (this.isWillExit = !1),
                    null == (t = this.my_info) || t.showButtonGetout(!1);
                }),
                (l.setCallbackExitRoom = function (t) {
                  this.callBackExitRoom = t;
                }),
                e
              );
            })(c)).SAVE_HIDE_CHAT_KEY = "SAVE_HIDE_CHAT_KEY"),
            (k = e((b = G).prototype, "btn_exit", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = e(b.prototype, "toggle_hideChat", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = e(b.prototype, "tog_sfx", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (I = e(b.prototype, "tog_music", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (P = e(b.prototype, "my_info", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = b))
          ) || y)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetGameUserChatPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BetGameUserChatTextItem.ts",
    "./SettingPopup.ts",
    "./BubblePopup.ts",
    "./State.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, a, r, l, s, u, c, p, h, b, d;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (l = t.Node),
            (s = t.EditBox),
            (u = t.Button),
            (c = t.instantiate);
        },
        function (t) {
          p = t.BetGameUserChatTextItem;
        },
        function (t) {
          h = t.SettingPopup;
        },
        function (t) {
          b = t.BubblePopup;
        },
        function (t) {
          d = t.state;
        },
      ],
      execute: function () {
        var f, m, g, _, x, v, y, B, C, P, w, M, S, k, z, U, E;
        a._RF.push(
          {},
          "e0c33v70EdInaN0qOgUhSSm",
          "BetGameUserChatPopup",
          void 0
        );
        var G = r.ccclass,
          I = r.property;
        t(
          "BetGameUserChatPopup",
          ((f = G("BetGameUserChatPopup")),
          (m = I([String])),
          (g = I([p])),
          (_ = I(l)),
          (x = I(s)),
          (v = I(u)),
          (y = I(b)),
          (B = I([l])),
          f(
            ((w = e(
              (P = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "text", w, o(e)),
                    i(e, "emotions", M, o(e)),
                    i(e, "text_chat_template", S, o(e)),
                    i(e, "editBox", k, o(e)),
                    i(e, "btn_emo", z, o(e)),
                    i(e, "bubblePopup", U, o(e)),
                    i(e, "pooled_chat_items", E, o(e)),
                    (e.sendMessageCallback = null),
                    e
                  );
                }
                n(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var e,
                      n,
                      i,
                      o = this;
                    t.prototype.onLoad.call(this),
                      null == (e = this.btn_emo) ||
                        e.node.on("click", function () {
                          var t;
                          null == (t = o.bubblePopup) || t.show();
                        }),
                      this.text.forEach(function (t, e) {
                        var n;
                        if (e >= o.pooled_chat_items.length) {
                          var i = c(o.text_chat_template);
                          if (!i || !o.text_chat_template) return;
                          (i.parent = o.text_chat_template.parent),
                            o.pooled_chat_items.push(i);
                        }
                        var a = o.pooled_chat_items[e];
                        a &&
                          ((a.active = !0),
                          null == (n = a.getComponent(p)) ||
                            n.setText(
                              t,
                              function () {
                                o.close();
                              },
                              e < o.text.length - 1
                            ));
                      }),
                      null == (n = this.editBox) ||
                        n.node.on("editing-did-began", function () {
                          d.isDisplayingTextInput = !0;
                        }),
                      null == (i = this.editBox) ||
                        i.node.on("editing-did-ended", function () {});
                  }),
                  (a.setSendMessageCallback = function (t) {
                    (this.sendMessageCallback = t),
                      this.pooled_chat_items.forEach(function (e, n) {
                        var i;
                        null == (i = e.getComponent(p)) ||
                          i.setSendMessageCallback(t);
                      }),
                      this.emotions.forEach(function (e, n) {
                        e.setSendMessageCallback(t);
                      });
                  }),
                  (a.sendMsg = function () {
                    if (this.editBox) {
                      var t = this.editBox.string;
                      (this.editBox.string = ""),
                        this.sendMessageCallback && this.sendMessageCallback(t),
                        this.close();
                    }
                  }),
                  (a.onEndChat = function () {
                    this.sendMsg();
                  }),
                  (a.show = function (e) {
                    var n;
                    void 0 === e && (e = function () {}),
                      t.prototype.show.call(this, e),
                      null == (n = this.bubblePopup) || n.hide();
                  }),
                  e
                );
              })(h)).prototype,
              "text",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (M = e(P.prototype, "emotions", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = e(P.prototype, "text_chat_template", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = e(P.prototype, "editBox", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(P.prototype, "btn_emo", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = e(P.prototype, "bubblePopup", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = e(P.prototype, "pooled_chat_items", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (C = P))
          ) || C)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetGameUserChatTextItem.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, i, l, o, a, r, s, u, c, h;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (l = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (a = e._decorator),
            (r = e.sp),
            (s = e.Label),
            (u = e.Node),
            (c = e.Button),
            (h = e.Component);
        },
      ],
      execute: function () {
        var b, m, p, d, f, C, g, v, k, y, z;
        o._RF.push(
          {},
          "61c1bG1R2FAY7HzRAfS089q",
          "BetGameUserChatTextItem",
          void 0
        );
        var x = a.ccclass,
          B = a.property;
        e(
          "BetGameUserChatTextItem",
          ((b = x("BetGameUserChatTextItem")),
          (m = B(r.Skeleton)),
          (p = B(s)),
          (d = B(u)),
          (f = B(c)),
          b(
            ((v = t(
              (g = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    i(t, "emo", v, l(t)),
                    i(t, "label", k, l(t)),
                    i(t, "line", y, l(t)),
                    i(t, "button", z, l(t)),
                    (t.sendMessageCallback = null),
                    (t.onClicked = null),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    var e,
                      t = this;
                    this.setEmo(),
                      null == (e = this.button) ||
                        e.node.on("click", function () {
                          t.sendChat(), t.onClicked && t.onClicked();
                        });
                  }),
                  (o.setEmo = function () {
                    null != this.emo &&
                      this.emo.setAnimation(0, this.emo.node.name, !0);
                  }),
                  (o.setText = function (e, t, n) {
                    void 0 === t && (t = function () {}),
                      void 0 === n && (n = !0),
                      this.label && (this.label.string = e),
                      this.line && (this.line.active = n),
                      (this.onClicked = t);
                  }),
                  (o.setSendMessageCallback = function (e) {
                    this.sendMessageCallback = e;
                  }),
                  (o.sendChat = function () {
                    var e,
                      t =
                        null == this.label
                          ? null == (e = this.emo)
                            ? void 0
                            : e.node.name
                          : this.label.string;
                    null == t && (t = ""),
                      this.sendMessageCallback && this.sendMessageCallback(t);
                  }),
                  t
                );
              })(h)).prototype,
              "emo",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (k = t(g.prototype, "label", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = t(g.prototype, "line", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = t(g.prototype, "button", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = g))
          ) || C)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetGameUserInvitePopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BetGameInvitationPlayerView.ts",
    "./SettingPopup.ts",
    "./PersistManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, a, r, s, l, c, u;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy), (r = t._decorator), (s = t.Button);
        },
        function (t) {
          l = t.BetGameInvitationPlayerView;
        },
        function (t) {
          c = t.SettingPopup;
        },
        function (t) {
          u = t.PersistManager;
        },
      ],
      execute: function () {
        var p, v, h, f, d, y, b;
        a._RF.push(
          {},
          "fa1a97UyNBPW4GUHHwLDeBv",
          "BetGameUserInvitePopup",
          void 0
        );
        var I = r.ccclass,
          _ = r.property;
        t(
          "BetGameUserInvitePopup",
          ((p = I("BetGameUserInvitePopup")),
          (v = _([l])),
          (h = _(s)),
          p(
            ((y = e(
              (d = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "pooled_player_views", y, o(e)),
                    i(e, "btn_invite", b, o(e)),
                    (e.sendInvitationsCallback = null),
                    (e.fetchUserInvitationsCallback = null),
                    e
                  );
                }
                n(e, t);
                var a = e.prototype;
                return (
                  (a.setSendInvitationsCallback = function (t) {
                    this.sendInvitationsCallback = t;
                  }),
                  (a.setFetchUserInvitationsCallback = function (t) {
                    this.fetchUserInvitationsCallback = t;
                  }),
                  (a.onLoad = function () {
                    var e,
                      n = this;
                    t.prototype.onLoad.call(this),
                      null == (e = this.btn_invite) ||
                        e.node.on("click", function () {
                          var t = n.pooled_player_views
                            .filter(function (t) {
                              return t.isSelected();
                            })
                            .map(function (t) {
                              return t.getName();
                            });
                          t.length > 0 &&
                            n.sendInvitationsCallback &&
                            n.sendInvitationsCallback(t),
                            n.close();
                        });
                  }),
                  (a.fetchUserInvitations = function () {
                    this.fetchUserInvitationsCallback &&
                      this.fetchUserInvitationsCallback();
                  }),
                  (a.getPooledView = function () {
                    return this.pooled_player_views;
                  }),
                  (a.showPlayersToBeInvited = function (t) {
                    u.getInstance().hideLoading(),
                      0 != t.length
                        ? (this.pooled_player_views.forEach(function (e, n) {
                            var i = t[n];
                            i
                              ? ((e.node.active = !0),
                                null == e || e.show(i.uid || i.u, i.dn, i.m))
                              : (e.node.active = !1);
                          }),
                          this.show())
                        : u.showNoti("Không có người ở sảnh chờ!");
                  }),
                  (a.close = function () {
                    t.prototype.close.call(this),
                      this.pooled_player_views.forEach(function (t, e) {
                        t.node.active = !1;
                      });
                  }),
                  e
                );
              })(c)).prototype,
              "pooled_player_views",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (b = e(d.prototype, "btn_invite", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = d))
          ) || f)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetGameUserOnlinePopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./PlayerView.ts",
    "./SettingPopup.ts",
  ],
  function (e) {
    "use strict";
    var n, r, i, t, s, l, a, u, o, h, c;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (t = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (l = e._decorator),
            (a = e.Button),
            (u = e.Label),
            (o = e.log);
        },
        function (e) {
          h = e.PlayerView;
        },
        function (e) {
          c = e.SettingPopup;
        },
      ],
      execute: function () {
        var g, p, d, f, _, b, y, O, v, U, P, w, H, k, m;
        s._RF.push(
          {},
          "d479dyX249IeL9cF32aoRhw",
          "BetGameUserOnlinePopup",
          void 0
        );
        var x = l.ccclass,
          B = l.property;
        e(
          "BetGameUserOnlinePopup",
          ((g = x("BetGameUserOnlinePopup")),
          (p = B(h)),
          (d = B([h])),
          (f = B(a)),
          (_ = B(a)),
          (b = B(u)),
          (y = B(Boolean)),
          g(
            ((U = n(
              (v = (function (e) {
                function n() {
                  for (
                    var n, r = arguments.length, s = new Array(r), l = 0;
                    l < r;
                    l++
                  )
                    s[l] = arguments[l];
                  return (
                    (n = e.call.apply(e, [this].concat(s)) || this),
                    i(n, "hiddenPlayerView", U, t(n)),
                    i(n, "player_views", P, t(n)),
                    i(n, "btn_prev", w, t(n)),
                    i(n, "btn_next", H, t(n)),
                    i(n, "lbl_current_page", k, t(n)),
                    i(n, "is_longho", m, t(n)),
                    (n.userOnlines = []),
                    (n.userHiddenOnlines = []),
                    (n.current_page = 0),
                    (n.skipUser = 0),
                    (n.sendUpdateHiddenUserOnlineCallback = null),
                    n
                  );
                }
                r(n, e);
                var s = n.prototype;
                return (
                  (s.setSendUpdateHiddenUserOnlineCallback = function (e) {
                    this.sendUpdateHiddenUserOnlineCallback = e;
                  }),
                  (s.getUserCount = function () {
                    return this.userOnlines.length;
                  }),
                  (s.onLoad = function () {
                    var n,
                      r,
                      i = this;
                    e.prototype.onLoad.call(this),
                      this.lbl_current_page ||
                        o(
                          "BetGameUserOnlinePopup lbl_current_page is not asigned"
                        ),
                      null == (n = this.btn_prev) ||
                        n.node.on("click", function () {
                          if (i.current_page > 0) {
                            var e = i.getMaxPage();
                            if (i.is_longho)
                              return i.current_page--, void i.refresh();
                            if (
                              i.current_page < e + 1 ||
                              i.userOnlines.length < 42
                            )
                              i.current_page--, i.refresh();
                            else if (i.current_page == e - 1)
                              (i.skipUser = i.userOnlines.length % (e - 1)),
                                i.current_page++,
                                i.refresh(i.skipUser),
                                i.hiddenUserPage(i.skipUser);
                            else {
                              i.current_page--;
                              i.sendUpdateHiddenUserOnlineCallback &&
                                i.hiddenUserPage(0);
                            }
                          }
                        }),
                      null == (r = this.btn_next) ||
                        r.node.on("click", function () {
                          var e = i.getMaxPage();
                          i.is_longho
                            ? i.current_page < e &&
                              (i.current_page++, i.refresh())
                            : i.current_page < e - 1 ||
                              i.userOnlines.length < 42
                            ? (i.current_page++, i.refresh())
                            : i.current_page == e - 1
                            ? ((i.skipUser = i.userOnlines.length % (e - 1)),
                              i.current_page++,
                              i.refresh(i.skipUser),
                              i.hiddenUserPage(i.skipUser))
                            : (i.userHiddenOnlines.length > 0 &&
                                i.userHiddenOnlines.length < 6 &&
                                i.current_page != e) ||
                              (i.current_page++, i.hiddenUserPage(0));
                        }),
                      this.clear();
                  }),
                  (s.hiddenUserPage = function (e) {
                    if (
                      (void 0 === e && (e = 0),
                      this.sendUpdateHiddenUserOnlineCallback)
                    ) {
                      var n =
                        0 != e
                          ? 0
                          : 6 * this.current_page - 48 + (6 - this.skipUser);
                      n < 0 && (n = 0),
                        this.sendUpdateHiddenUserOnlineCallback(6 - e, n);
                    }
                  }),
                  (s.getMaxPage = function () {
                    return (
                      Math.floor(this.userOnlines.length / 6) -
                      (0 == Math.floor(this.userOnlines.length % 6) ? 1 : 0)
                    );
                  }),
                  (s.refresh = function (e) {
                    var n = this,
                      r = this.getMaxPage();
                    if (!this.is_longho && this.current_page > r)
                      this.refreshHidden();
                    else {
                      this.lbl_current_page.string = (
                        this.current_page + 1
                      ).toString();
                      var i = 6 * this.current_page;
                      this.player_views.forEach(function (e, r) {
                        var t = i + r;
                        if ((t < 0 && (t = 0), t >= n.userOnlines.length))
                          n.current_page != n.getMaxPage() && e.hide(),
                            n.is_longho && e.hide();
                        else {
                          e.show();
                          var s = n.userOnlines[t];
                          s && e.setUserInfo(s);
                        }
                      });
                    }
                  }),
                  (s.reset = function () {
                    this.userOnlines = [];
                  }),
                  (s.addPlayer = function (e) {
                    this.userOnlines.push(e);
                  }),
                  (s.resetPlayerHidden = function () {
                    this.userHiddenOnlines = [];
                  }),
                  (s.addPlayerHidden = function (e) {
                    this.userHiddenOnlines.push(e);
                  }),
                  (s.refreshHidden = function () {
                    if (0 == this.userHiddenOnlines.length)
                      return (
                        (this.current_page -= 1),
                        this.current_page < 0 && (this.current_page = 0),
                        void (this.lbl_current_page.string = (
                          this.current_page + 1
                        ).toString())
                      );
                    this.lbl_current_page.string = (
                      this.current_page + 1
                    ).toString();
                    var e = this.skipUser;
                    this.current_page != this.getMaxPage() && (e = 0);
                    for (var n = 0; n < this.player_views.length; n++) {
                      var r = this.player_views[n + e];
                      if (
                        (this.is_longho && r && r.hide(),
                        n >= this.userHiddenOnlines.length)
                      )
                        0 == e && r && r.hide();
                      else {
                        if (0 != e && n > this.userHiddenOnlines.length)
                          continue;
                        r && r.show();
                        var i = this.userHiddenOnlines[n];
                        r && i && r.setUserInfo(i);
                      }
                    }
                  }),
                  (s.forceRefresh = function () {
                    var e = this;
                    (this.lbl_current_page.string = (
                      this.current_page + 1
                    ).toString()),
                      this.player_views.forEach(function (n, r) {
                        var i = r;
                        if (i >= e.userHiddenOnlines.length) n.hide();
                        else {
                          n.show();
                          var t = e.userHiddenOnlines[i];
                          t && n.setUserInfo(t);
                        }
                      });
                  }),
                  (s.getPlayer = function (e) {
                    return this.userOnlines.filter(function (n) {
                      return n.displayName == e;
                    }).length > 0
                      ? this.hiddenPlayerView
                      : null;
                  }),
                  (s.getPlayerByUID = function (e) {
                    return this.userOnlines.filter(function (n) {
                      return n.uid == e;
                    }).length > 0
                      ? this.hiddenPlayerView
                      : null;
                  }),
                  (s.getHiddenPlayerView = function () {
                    return this.hiddenPlayerView;
                  }),
                  (s.getPlayerInfoByID = function (e) {
                    var n = this.userOnlines.filter(function (n) {
                      return n.uid == e;
                    });
                    return n.length > 0 ? n[0] : null;
                  }),
                  (s.clear = function () {
                    this.player_views.forEach(function (e) {
                      e.hide();
                    });
                  }),
                  (s.setRongHo = function (e) {
                    this.is_longho = e;
                  }),
                  n
                );
              })(c)).prototype,
              "hiddenPlayerView",
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
            (P = n(v.prototype, "player_views", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (w = n(v.prototype, "btn_prev", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = n(v.prototype, "btn_next", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = n(v.prototype, "lbl_current_page", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (m = n(v.prototype, "is_longho", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (O = v))
          ) || O)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NoHuView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./BlinkCmp.ts",
    "./SoundManager.ts",
  ],
  function (i) {
    "use strict";
    var n, t, e, o, a, s, l, r, u, c, h, g, p, d, w, f, _, b, m;
    return {
      setters: [
        function (i) {
          (n = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (e = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (a = i.cclegacy),
            (s = i._decorator),
            (l = i.Node),
            (r = i.Sprite),
            (u = i.Label),
            (c = i.AudioClip),
            (h = i.log),
            (g = i.Tween),
            (p = i.Vec3),
            (d = i.UIOpacity),
            (w = i.tween),
            (f = i.Component);
        },
        function (i) {
          _ = i.StringUtils;
        },
        function (i) {
          b = i.default;
        },
        function (i) {
          m = i.SoundManager;
        },
      ],
      execute: function () {
        var y, v, H, B, k, M, F, N, x, V, z, A, S, C, T, L, q;
        a._RF.push({}, "cc990rNMiFAELOpZo+ERGRo", "NoHuView", void 0);
        var I = s.ccclass,
          R = s.property;
        i(
          "default",
          ((y = I("NoHuView")),
          (v = R(l)),
          (H = R(l)),
          (B = R(r)),
          (k = R(b)),
          (M = R(r)),
          (F = R(u)),
          (N = R(c)),
          y(
            ((z = n(
              (V = (function (i) {
                function n() {
                  for (
                    var n, t = arguments.length, a = new Array(t), s = 0;
                    s < t;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (n = i.call.apply(i, [this].concat(a)) || this),
                    e(n, "root", z, o(n)),
                    e(n, "black_screen", A, o(n)),
                    e(n, "noHuMoneyBg", S, o(n)),
                    e(n, "glow", C, o(n)),
                    e(n, "finishFx", T, o(n)),
                    e(n, "nohu_win_amount", L, o(n)),
                    e(n, "nohu_bgm", q, o(n)),
                    (n.win_amount_tween = null),
                    (n.activated_click = !1),
                    (n.gameView = null),
                    n
                  );
                }
                t(n, i);
                var a = n.prototype;
                return (
                  (a.setGameView = function (i) {
                    this.gameView = i;
                  }),
                  (a.onLoad = function () {
                    var i = this;
                    this.root || h("NoHuView root is not asigned"),
                      this.black_screen ||
                        h("NoHuView black_screen is not asigned"),
                      this.nohu_bgm || h("NoHuView nohu_bgm is not asigned"),
                      this.finishFx || h("NoHuView finishFx is not asigned"),
                      this.noHuMoneyBg ||
                        h("NoHuView noHuMoneyBg is not asigned"),
                      this.glow || h("NoHuView glow is not asigned"),
                      this.nohu_win_amount ||
                        h("NoHuView nohu_win_amount is not asigned"),
                      this.black_screen.on("click", function () {
                        i.activated_click && i.hide();
                      });
                  }),
                  (a.activeClick = function () {
                    (this.black_screen.active = !0),
                      (this.activated_click = !0);
                  }),
                  (a.getNohu_BGM = function () {
                    return this.nohu_bgm;
                  }),
                  (a.show = function (i) {
                    var n,
                      t,
                      e,
                      o,
                      a = this;
                    m.getInstance().playBgm(this.nohu_bgm),
                      (this.root.active = !0),
                      (this.black_screen.active = !0),
                      (this.activated_click = !1),
                      g.stopAllByTarget(
                        null == (n = this.noHuMoneyBg) ? void 0 : n.node
                      ),
                      g.stopAllByTarget(
                        null == (t = this.finishFx) ? void 0 : t.node
                      ),
                      g.stopAllByTarget(
                        null == (e = this.glow) ? void 0 : e.node
                      ),
                      this.win_amount_tween && this.win_amount_tween.stop(),
                      (this.finishFx.node.active = !1),
                      this.finishFx.node.setScale(new p(3, 3, 3));
                    var s = this.finishFx.node.getComponent(d);
                    s && (s.opacity = 255),
                      w(this.finishFx.node)
                        .sequence(
                          w().delay(0.4),
                          w().call(function () {
                            a.finishFx.node.active = !0;
                          }),
                          w().to(0.3, { scale: p.ONE })
                        )
                        .start();
                    var l = new p(this.noHuMoneyBg.node.position);
                    (l.y = -485),
                      this.noHuMoneyBg.node.setPosition(l),
                      w(null == (o = this.noHuMoneyBg) ? void 0 : o.node)
                        .sequence(
                          w().delay(0.6),
                          w().to(0.3, { position: new p(0, -260, 0) })
                        )
                        .start(),
                      this.glow.run();
                    this.win_amount_tween = w({ a: 0 })
                      .to(
                        2,
                        { a: i },
                        {
                          progress: function (i, n, t, e) {
                            return (
                              (a.nohu_win_amount.string = _.formatNumber(
                                Math.floor(t)
                              )),
                              i + (n - i) * e
                            );
                          },
                        }
                      )
                      .call(function () {
                        return (a.nohu_win_amount.string = _.formatNumber(
                          Math.floor(i)
                        ));
                      })
                      .start();
                    var r = this.node.getComponent(d);
                    r && (r.opacity = 255);
                  }),
                  (a.hide = function () {
                    var i,
                      n,
                      t,
                      e = this;
                    (this.black_screen.active = !1),
                      (this.activated_click = !1),
                      (this.root.active = !1),
                      g.stopAllByTarget(
                        null == (i = this.noHuMoneyBg) ? void 0 : i.node
                      ),
                      g.stopAllByTarget(
                        null == (n = this.finishFx) ? void 0 : n.node
                      ),
                      this.glow.stop(),
                      w(this.finishFx.node)
                        .sequence(
                          w().to(0.3, { scale: new p(3, 3, 3) }),
                          w().call(function () {
                            var i;
                            (e.finishFx.node.active = !1),
                              (e.root.active = !1),
                              null == (i = e.gameView) || i.playBgmMusic();
                          })
                        )
                        .start(),
                      w(this.finishFx.node.getComponent(d))
                        .to(0.3, { opacity: 1 })
                        .start(),
                      w(null == (t = this.noHuMoneyBg) ? void 0 : t.node)
                        .sequence(
                          w().call(function () {}),
                          w().to(0.3, { position: new p(0, -485, 0) })
                        )
                        .start();
                  }),
                  (a.IsShowing = function () {
                    return this.black_screen.active;
                  }),
                  n
                );
              })(f)).prototype,
              "root",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (A = n(V.prototype, "black_screen", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (S = n(V.prototype, "noHuMoneyBg", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (C = n(V.prototype, "glow", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (T = n(V.prototype, "finishFx", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (L = n(V.prototype, "nohu_win_amount", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (q = n(V.prototype, "nohu_bgm", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (x = V))
          ) || x)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SoiCauItemPopup.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var i, r, t, s, n, p, a, o, c;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (s = e.assertThisInitialized);
        },
        function (e) {
          (n = e.cclegacy),
            (p = e._decorator),
            (a = e.Sprite),
            (o = e.SpriteFrame),
            (c = e.Component);
        },
      ],
      execute: function () {
        var u, l, d, h, _, m, f, F, b, y, g;
        n._RF.push({}, "d34cdLk+tFPPKYCxVvX0E7q", "SoiCauItemPopup", void 0);
        var v = p.ccclass,
          P = p.property;
        e(
          "SoiCauItemPopup",
          ((u = v("SoiCauItemPopup")),
          (l = P(a)),
          (d = P(a)),
          (h = P(a)),
          (_ = P([o])),
          u(
            ((F = i(
              (f = (function (e) {
                function i() {
                  for (
                    var i, r = arguments.length, n = new Array(r), p = 0;
                    p < r;
                    p++
                  )
                    n[p] = arguments[p];
                  return (
                    (i = e.call.apply(e, [this].concat(n)) || this),
                    t(i, "spr_d1", F, s(i)),
                    t(i, "spr_d2", b, s(i)),
                    t(i, "spr_d3", y, s(i)),
                    t(i, "spriteFrame_dice", g, s(i)),
                    i
                  );
                }
                r(i, e);
                var n = i.prototype;
                return (
                  (n.show = function (e, i, r) {
                    e < this.spriteFrame_dice.length &&
                      this.spr_d1 &&
                      this.spriteFrame_dice[e] &&
                      (this.spr_d1.spriteFrame = this.spriteFrame_dice[e]),
                      i < this.spriteFrame_dice.length &&
                        this.spr_d2 &&
                        this.spriteFrame_dice[i] &&
                        (this.spr_d2.spriteFrame = this.spriteFrame_dice[i]),
                      r < this.spriteFrame_dice.length &&
                        this.spr_d3 &&
                        this.spriteFrame_dice[r] &&
                        (this.spr_d3.spriteFrame = this.spriteFrame_dice[r]),
                      (this.node.active = !0);
                  }),
                  (n.hide = function () {
                    this.node.active = !1;
                  }),
                  i
                );
              })(c)).prototype,
              "spr_d1",
              [l],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (b = i(f.prototype, "spr_d2", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = i(f.prototype, "spr_d3", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = i(f.prototype, "spriteFrame_dice", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (m = f))
          ) || m)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SoiCauPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SoiCauItemPopup.ts",
    "./SettingPopup.ts",
    "./GameListItem.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, r, a, s, l, u, c, p, h, f, m;
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
            (s = t.Label),
            (l = t.Node),
            (u = t.ScrollView),
            (c = t.UITransform),
            (p = t.instantiate);
        },
        function (t) {
          h = t.SoiCauItemPopup;
        },
        function (t) {
          f = t.SettingPopup;
        },
        function (t) {
          m = t.GameListItem;
        },
      ],
      execute: function () {
        var g, v, d, w, b, _, y, S, V, P, x, C, z;
        r._RF.push({}, "cae83g6t1NN05IYMQJ6fqY0", "SoiCauPopup", void 0);
        var E = a.ccclass,
          I = a.property;
        t(
          "SoiCauPopup",
          ((g = E("SoiCauPopup")),
          (v = I([s])),
          (d = I(l)),
          (w = I(Number)),
          (b = I([h])),
          (_ = I(u)),
          g(
            ((V = e(
              (S = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "lbl_stats", V, o(e)),
                    n(e, "item_template", P, o(e)),
                    n(e, "max_item", x, o(e)),
                    n(e, "pooled_items", C, o(e)),
                    n(e, "scrView", z, o(e)),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.start = function () {
                    var t,
                      e = this;
                    null == (t = this.scrView) ||
                      t.node.on("scrolling", function () {
                        e.updateVisibility();
                      });
                  }),
                  (r.updateVisibility = function () {
                    if (
                      this.scrView &&
                      this.scrView.view &&
                      this.scrView.view.node.parent
                    ) {
                      var t = this.scrView.view.node.parent
                          .getComponent(c)
                          .convertToWorldSpaceAR(
                            this.scrView.view.node.getPosition()
                          ),
                        e = t.x,
                        i = t.x + this.scrView.view.contentSize.width,
                        n = t.y,
                        o = t.y + this.scrView.view.contentSize.height;
                      this.pooled_items.forEach(function (t) {
                        var r;
                        null == (r = t.getComponent(m)) ||
                          r.updateVisibility(e, i, n, o);
                      });
                    }
                  }),
                  (r.updateBangSoiCau = function (t, e) {
                    void 0 === e && (e = !1);
                    var i = this.getStat(t, e);
                    if (
                      (this.lbl_stats.forEach(function (t, e) {
                        e < i.length
                          ? ((t.node.active = !0), (t.string = "" + i[e]))
                          : (t.node.active = !1);
                      }),
                      this.pooled_items.length <= 0)
                    )
                      for (var n = 0; n < this.max_item; n++) {
                        var o = p(this.item_template);
                        o.parent = this.item_template.parent;
                        var r = o.getComponent(h);
                        r && this.pooled_items.push(r);
                      }
                    var a = t.length - this.max_item;
                    a < 0 && (a = 0);
                    var s = t.length - 1;
                    this.pooled_items.forEach(function (e, i) {
                      if (s >= a) {
                        var n = t[s];
                        e.show(n[0], n[1], n[2]), s--;
                      } else e.hide();
                    });
                  }),
                  (r.show = function (e) {
                    void 0 === e && (e = function () {}),
                      t.prototype.show.call(this, e),
                      this.updateVisibility();
                  }),
                  (r.getStat = function (t, e) {
                    var i = this,
                      n = [0, 0, 0, 0, 0, 0];
                    e
                      ? t
                          .filter(function (e, n) {
                            return n >= t.length - i.max_item;
                          })
                          .forEach(function (t, e) {
                            e < i.max_item &&
                              t.forEach(function (t) {
                                t < n.length &&
                                  null != n[t] &&
                                  (n[t] = n[t] + 1);
                              });
                          })
                      : t.forEach(function (t, e) {
                          e < i.max_item &&
                            t.forEach(function (t) {
                              t < n.length && null != n[t] && (n[t] = n[t] + 1);
                            });
                        });
                    return n;
                  }),
                  e
                );
              })(f)).prototype,
              "lbl_stats",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (P = e(S.prototype, "item_template", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (x = e(S.prototype, "max_item", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 30;
              },
            })),
            (C = e(S.prototype, "pooled_items", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (z = e(S.prototype, "scrView", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = S))
          ) || y)
        );
        r._RF.pop();
      },
    };
  }
);

(function (r) {
  r("virtual:///prerequisite-imports/base-bet", "chunks:///_virtual/base-bet");
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
