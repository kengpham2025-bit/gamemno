System.register(
  "chunks:///_virtual/Bet9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Bet.ts",
    "./utils2.ts",
    "./gameCommonUtils.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, a, l, s, r, o, c, u, h, B, p, b, d, f, E;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (s = t._decorator),
            (r = t.Button),
            (o = t.Node),
            (c = t.Label),
            (u = t.SpriteFrame),
            (h = t.tween),
            (B = t.Vec3),
            (p = t.Sprite);
        },
        function (t) {
          b = t.Bet;
        },
        function (t) {
          (d = t.formatWalletMoney), (f = t.formatMoney);
        },
        function (t) {
          E = t.default;
        },
      ],
      execute: function () {
        var L, y, T, m, x, g, _, D, W, S, A, w, N, v, P;
        l._RF.push({}, "3b75awwTSFMrpryNOz0mwXD", "Bet9976", void 0);
        var R = s.ccclass,
          I = s.property;
        t(
          "Bet9976",
          ((L = R("Bet9976")),
          (y = I(r)),
          (T = I(o)),
          (m = I(o)),
          (x = I(c)),
          (g = I(u)),
          (_ = I(c)),
          L(
            ((S = e(
              (W = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, l = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    l[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(l)) || this),
                    n(e, "betlineBtn", S, a(e)),
                    n(e, "selectWild", A, a(e)),
                    n(e, "textWild", w, a(e)),
                    n(e, "extraBetRate", N, a(e)),
                    n(e, "textWildBGs", v, a(e)),
                    n(e, "betLineLabel", P, a(e)),
                    e
                  );
                }
                i(e, t);
                var l = e.prototype;
                return (
                  (l.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "ENABLE_BETLINE_SELECT",
                        this.enableBetlineSelect,
                        this
                      ),
                      this.node.on(
                        "ENABLE_WILD_SELECT",
                        this.enableWildSelect,
                        this
                      ),
                      this.node.on(
                        "UPDATE_BET_LINES",
                        this.updateBetLines,
                        this
                      );
                  }),
                  (l.initBet = function () {
                    t.prototype.initBet.call(this),
                      this.showExtraBetRate(),
                      this.selectWild.emit("UPDATE_TOTAL_BET");
                  }),
                  (l.increaseBet = function () {
                    t.prototype.increaseBet.call(this),
                      this.playBtnAnim(this.increaseBetBtn.node),
                      this.soundPlayer.playSfx("BUTTON_BET");
                  }),
                  (l.reduceBet = function () {
                    t.prototype.reduceBet.call(this),
                      this.playBtnAnim(this.reduceBetBtn.node),
                      this.soundPlayer.playSfx("BUTTON_BET");
                  }),
                  (l.increaseExtraBet = function () {
                    t.prototype.increaseExtraBet.call(this),
                      this.playBtnAnim(this.increaseExtraBtn.node),
                      this.selectWild.emit("UPDATE_EXTRA_BET"),
                      this.soundPlayer.playSfx("BUTTON_BET");
                  }),
                  (l.reduceExtraBet = function () {
                    t.prototype.reduceExtraBet.call(this),
                      this.playBtnAnim(this.reduceExtraBtn.node),
                      this.selectWild.emit("UPDATE_EXTRA_BET"),
                      this.soundPlayer.playSfx("BUTTON_BET");
                  }),
                  (l.playBtnAnim = function (t) {
                    h(t)
                      .to(
                        0.05,
                        { scale: new B(1.05, 1.05, 1.05) },
                        { easing: "quartIn" }
                      )
                      .to(
                        0.05,
                        { scale: new B(1, 1, 1) },
                        { easing: "quartIn" }
                      )
                      .start();
                  }),
                  (l.enableBet = function () {
                    t.prototype.enableBet.call(this),
                      this.enableBetlineSelect(!0),
                      this.enableWildSelect(!0);
                  }),
                  (l.disableBet = function () {
                    t.prototype.disableBet.call(this),
                      this.enableBetlineSelect(!1),
                      this.enableWildSelect(!1);
                  }),
                  (l.enableBetlineSelect = function (t) {
                    void 0 === t && (t = !1),
                      this.betlineBtn && (this.betlineBtn.interactable = t);
                  }),
                  (l.enableWildSelect = function (t) {
                    void 0 === t && (t = !1),
                      this.selectWild &&
                        this.selectWild.emit("ENABLE_SELECT_WILD", t);
                  }),
                  (l.updateBet = function (e) {
                    t.prototype.updateBet.call(this, e),
                      this.updateTotalLabel(),
                      this.selectWild &&
                        this.selectWild.emit("UPDATE_TOTAL_BET"),
                      this.showExtraBetRate(),
                      this.updateTotalLabel();
                  }),
                  (l.updateTotalLabel = function () {
                    var t = this.betData,
                      e = t.betLines,
                      i = t.extraBets,
                      n =
                        t.denom *
                        (i[t.extraBetKey] || 1) *
                        (e.length ? e.length : this.betData.maxBetLine);
                    this.totalLabel.string = d(n);
                  }),
                  (l.updateExtraBet = function (e) {
                    t.prototype.updateExtraBet.call(this, e),
                      this.showExtraBetRate(),
                      this.updateTotalLabel();
                  }),
                  (l.showExtraBetRate = function () {
                    var t = this.betData.extraBets[this.betData.extraBetKey],
                      e = this.betData.betLines.length
                        ? this.betData.betLines.length
                        : this.betData.maxBetLine,
                      i = void 0 !== t && this.betData.denom * (t - 1) * e;
                    (this.extraBetRate.string = d(i)),
                      this.textWild &&
                        (this.textWild.getComponent(p).spriteFrame =
                          this.textWildBGs[
                            Number(this.betData.extraBetKey) - 1
                          ]);
                  }),
                  (l.updateBetLines = function (t) {
                    this.betData.updateBetLines(t),
                      this.betLinesLabel &&
                        ((this.betLinesLabel.string =
                          this.betData.betLineNumber),
                        (this.totalLabel.string = this.isFormatTotal
                          ? d(this.dataStore.getTotalBet())
                          : f(this.dataStore.getTotalBet())));
                  }),
                  (l.loadCacheBetLines = function () {
                    for (
                      var t = [], e = 0;
                      e < this.config.PAY_LINE_LENGTH;
                      e++
                    )
                      t.push(e + 1);
                    t = t.join(",");
                    var i = E.getKeyWithGame(
                      this.config.GAME_ID,
                      this.config.BET_LINES_KEY,
                      t
                    );
                    return (
                      (i =
                        i.split(",").map(function (t) {
                          return Number(t);
                        }) || []),
                      (this.betLineLabel.string =
                        i.length || this.betData.maxBetLine),
                      i
                    );
                  }),
                  e
                );
              })(b)).prototype,
              "betlineBtn",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (A = e(W.prototype, "selectWild", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = e(W.prototype, "textWild", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(W.prototype, "extraBetRate", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = e(W.prototype, "textWildBGs", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (P = e(W.prototype, "betLineLabel", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = W))
          ) || D)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetHistoryScrollItem.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameObject.ts",
    "./CustomType.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, c;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          o = t.GameObject;
        },
        function (t) {
          c = t.CustomEvent;
        },
      ],
      execute: function () {
        var s;
        n._RF.push(
          {},
          "ce51bu6ZkFL/6nZLOfeDCl0",
          "BetHistoryScrollItem",
          void 0
        );
        var r = i.ccclass;
        t(
          "BetHistoryScrollItem",
          r("BetHistoryScrollItem")(
            (s = (function (t) {
              function n() {
                for (
                  var e, n = arguments.length, i = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  i[o] = arguments[o];
                return (
                  ((e =
                    t.call.apply(t, [this].concat(i)) || this).clickItemEvent =
                    null),
                  (e.index = null),
                  e
                );
              }
              e(n, t);
              var i = n.prototype;
              return (
                (i.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    (this.node.setIndex = this.setIndex.bind(this));
                }),
                (i.onClick = function () {
                  this.soundPlayer && this.soundPlayer.playSFXClick(),
                    (this.clickItemEvent = new c("ON_SCROLL_CLICK", !0, {
                      index: this.index,
                    })),
                    this.node.dispatchEvent(this.clickItemEvent);
                }),
                (i.setIndex = function (t) {
                  void 0 === t && (t = -2), (this.index = t);
                }),
                n
              );
            })(o))
          ) || s
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetLineHistory.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, i, r, n, o, s, c, a, l;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (s = e._decorator),
            (c = e.Color),
            (a = e.Sprite),
            (l = e.Component);
        },
      ],
      execute: function () {
        var u, p, h, f, y;
        o._RF.push({}, "b56d5b/e6ZJMrzKMm5YqgBg", "BetLineHistory", void 0);
        var L = s.ccclass,
          B = s.property,
          d = new c(255, 255, 255),
          g = new c(100, 100, 100);
        e(
          "BetLineHistory",
          ((u = L("BetLineHistory")),
          (p = B({ type: a })),
          u(
            ((y = t(
              (f = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, o = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "lines", y, n(t)),
                    t
                  );
                }
                i(t, e);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    this.reset(),
                      this.node.on("SHOW_BET_LINE", this.showBetLine, this);
                  }),
                  (o.showBetLine = function (e) {
                    var t = this;
                    this.reset(),
                      (e
                        ? e
                            .replace("[", "")
                            .replace("]", "")
                            .replace(/ /g, "")
                            .split(",")
                        : []
                      ).forEach(function (e) {
                        t.lines[e - 1].color = d;
                      });
                  }),
                  (o.reset = function () {
                    this.lines.forEach(function (e) {
                      e.color = g;
                    });
                  }),
                  t
                );
              })(l)).prototype,
              "lines",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (h = f))
          ) || h)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetlineItem9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var e, i, n, o, r, s, a, u, l, c, h;
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
            (s = t._decorator),
            (a = t.Node),
            (u = t.SpriteFrame),
            (l = t.Color),
            (c = t.Sprite);
        },
        function (t) {
          h = t.GameObject;
        },
      ],
      execute: function () {
        var p, d, f, b, m, v, B, g, y, L, C;
        r._RF.push({}, "305b0WQqA9BIJWPRtFVv+M4", "BetlineItem9976", void 0);
        var A = s.ccclass,
          I = s.property;
        t(
          "BetlineItem9976",
          ((p = A("BetlineItem9976")),
          (d = I(a)),
          (f = I(u)),
          (b = I(l)),
          (m = I(l)),
          p(
            ((g = e(
              (B = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "betLineButton", g, o(e)),
                    n(e, "activeButtons", y, o(e)),
                    n(e, "defaultColor", L, o(e)),
                    n(e, "dimColor", C, o(e)),
                    (e.index = 0),
                    (e.betLineManager = null),
                    (e.isActive = !1),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("SET_ACTIVE", this.setActiveButton, this),
                      this.node.on("SET_INDEX", this.setIndex, this),
                      this.node.on("SET_SOUND", this.setSound, this);
                  }),
                  (r.init = function (t) {
                    this.betLineManager = t;
                  }),
                  (r.setActiveButton = function (t) {
                    (this.isActive = t),
                      (this.betLineButton.getComponent(c).color = t
                        ? this.defaultColor
                        : this.dimColor);
                  }),
                  (r.setIndex = function (t) {
                    void 0 === t && (t = 1),
                      (this.index = Number(t)),
                      (this.betLineButton.getComponent(c).spriteFrame =
                        this.activeButtons[this.index - 1]);
                  }),
                  (r.onToggleActive = function () {
                    this.soundPlayer.playSFXClick(),
                      this.setActiveButton(!this.isActive),
                      this.betLineManager &&
                        this.betLineManager.onBetLineChangedByButton();
                  }),
                  (r.setSound = function () {}),
                  e
                );
              })(h)).prototype,
              "betLineButton",
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
            (y = e(B.prototype, "activeButtons", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (L = e(B.prototype, "defaultColor", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new l();
              },
            })),
            (C = e(B.prototype, "dimColor", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new l();
              },
            })),
            (v = B))
          ) || v)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/cc30-aladin-9976",
  [
    "./Config9976.ts",
    "./DataStore9976.ts",
    "./Director9976.ts",
    "./SlotTable9976.ts",
    "./DrawingPayline9976.ts",
    "./FreeDirector9976.ts",
    "./FreeWriter9976.ts",
    "./MainDirector9976.ts",
    "./MainWriter9976.ts",
    "./SlotSoundPlayer9976.ts",
    "./Bet9976.ts",
    "./CustomButton9976.ts",
    "./CustomToggle9976.ts",
    "./JackpotWin9976.ts",
    "./SelectWild9976.ts",
    "./SparkleControl9976.ts",
    "./StarsControl9976.ts",
    "./UIManager9976.ts",
    "./Wallet9976.ts",
    "./WinAmount9976.ts",
    "./WinEffect9976.ts",
    "./BetlineItem9976.ts",
    "./CoinsEffect9976.ts",
    "./FreeToNormal9976.ts",
    "./IntroFreeGame9976.ts",
    "./ParticleSpawnerControl9976.ts",
    "./SelectBetline9976.ts",
    "./TotalWinPanel9976.ts",
    "./BetHistoryScrollItem.ts",
    "./BetLineHistory.ts",
    "./DotsHistory9976.ts",
    "./ExpandingWildSymbol9976.ts",
    "./SlotBetCellHistory9976.ts",
    "./SlotBetHistoryDetail9976.ts",
    "./SlotBetTableHistory9976.ts",
    "./SlotBetTableHistoryDetai9976.ts",
    "./SlotButton9976.ts",
    "./SlotReel9976.ts",
    "./SlotSymbolPayline9976.ts",
    "./SlotTableNearWinEffect9976.ts",
    "./SlotTablePayline9976.ts",
    "./SlotTablePaylineInfo9976.ts",
    "./SlotTableSoundEffect9976.ts",
    "./slotsymbol9976.ts",
    "./TutorialMgr9976.ts",
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
  "chunks:///_virtual/CoinsEffect9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CoinsEffect.ts"],
  function (t) {
    "use strict";
    var e, o, i, n, s, c, r;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy),
            (i = t._decorator),
            (n = t.ParticleSystem2D),
            (s = t.tween),
            (c = t.Vec3);
        },
        function (t) {
          r = t.CoinsEffect;
        },
      ],
      execute: function () {
        var l;
        o._RF.push({}, "d2d7f9D4v5KL7x2cmCbiw4H", "CoinsEffect9976", void 0);
        var f = i.ccclass;
        t(
          "CoinsEffect9976",
          f("CoinsEffect9976")(
            (l = (function (t) {
              function o() {
                return t.apply(this, arguments) || this;
              }
              e(o, t);
              var i = o.prototype;
              return (
                (i.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    this.node.on("RESET_PARTICLE", this.resetParticle, this);
                }),
                (i.resetParticle = function () {
                  this.coinPiles.forEach(function (t) {
                    t.getComponent(n).resetSystem(),
                      t.getComponent(n).stopSystem();
                  });
                }),
                (i.startParticle = function () {
                  var t = this;
                  this.coinDropper.getComponent(n).resetSystem(),
                    this.coinPiles.forEach(function (e, o) {
                      e.setPosition(0, -420), e.getComponent(n).resetSystem();
                      var i = e.getPosition();
                      e.tweenPilePosition = s(e)
                        .to(t.duration, {
                          position: new c(i.x, i.y + 40 * (o + 1), i.z),
                        })
                        .call(function () {
                          e.tweenPilePosition = null;
                        })
                        .start();
                    });
                }),
                (i.stopParticle = function () {
                  this.coinPiles.forEach(function (t) {
                    t.tweenPilePosition &&
                      (t.tweenPilePosition.stop(),
                      (t.tweenPilePosition = null));
                  }),
                    t.prototype.stopParticle.call(this);
                }),
                o
              );
            })(r))
          ) || l
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Config9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gameCommonUtils.ts"],
  function (_) {
    "use strict";
    var A, I, E, N, T;
    return {
      setters: [
        function (_) {
          A = _.inheritsLoose;
        },
        function (_) {
          (I = _.cclegacy), (E = _._decorator), (N = _.Component);
        },
        function (_) {
          T = _.default;
        },
      ],
      execute: function () {
        var L;
        I._RF.push({}, "2de11YF4AxI+bL4rH51s6fv", "Config9976", void 0);
        var n = E.ccclass;
        _(
          "Config9976",
          n("Config9976")(
            (L = (function (_) {
              function I() {
                return _.apply(this, arguments) || this;
              }
              return (
                A(I, _),
                (I.prototype.onLoad = function () {
                  this.node.config = {
                    GAME_ID: "9976",
                    JP_PREFIX_EVENT: "ALADDIN_JP_",
                    JP_NAMES: ["GRAND"],
                    DEFAULT_BET: "1000",
                    BETS: { 1: 100, 2: 1e3, 3: 1e4 },
                    DEFAULT_EXTRA_BET: "1",
                    EXTRA_BETS: { 1: 1, 2: 2, 3: 3 },
                    TOTAL_BET_CREDIT: 25,
                    DEFAULT_TRIAL_JACKPOT: {
                      ALADDIN_JP_1_GRAND: 1e6,
                      ALADDIN_JP_2_GRAND: 1e7,
                      ALADDIN_JP_3_GRAND: 1e8,
                    },
                    DEFAULT_TRIAL_WALLET: 2e8,
                    TRIAL_BET: "2",
                    TRIAL_EXTRA_BET: "1",
                    MESSAGE_DIALOG: T.getMessageSlot(),
                    DEMONTATION: 250,
                    BOX_MAP_VALUES: { 100: 1, 200: 2, 400: 3 },
                    PAY_TABLE: {
                      2: [10, 15, 50],
                      3: [5, 10, 20],
                      4: [5, 10, 20],
                      5: [5, 10, 20],
                      6: [5, 10, 20],
                      22: [10, 15, 50],
                      33: [35, 65, 250],
                      44: [15, 50, 200],
                      55: [15, 35, 150],
                      66: [10, 30, 100],
                    },
                    GAME_SPEED: { NORMAL: 0, TURBO: 1, INSTANTLY: 2 },
                    PARTICLE_MOVING_TIME: 1,
                    MUSIC_VOLUME: 0.7,
                    SOUND_EFFECT_VOLUME: 1,
                    JP_LIST_HISTORY: "GRAND-MAJOR",
                    BET_IDS: "10-20-30-40-50-60",
                    BET_IDS_IFRAME: "10-20-30-40-50-60",
                    SKIP_NEAR_WIN_TURBO: !0,
                    IS_SHOW_JACKPOT_EXPLOSION: !0,
                    HIGH_PERFORMANCE_LV: {
                      PAYLINE_ANIMATION: 2,
                      BIG_WIN_ANIMATION: 2,
                      JP_WIN_ANIMATION: 2,
                      BACKGROUND_ANIMATION: 2,
                      NEAR_WIN_ANIMATION: 2,
                      TRANSITION_ANIMATION: 2,
                      BONUS_ANIMATION: 2,
                    },
                    MEDIUM_PERFORMANCE_LV: {
                      PAYLINE_ANIMATION: 1,
                      BIG_WIN_ANIMATION: 1,
                      JP_WIN_ANIMATION: 1,
                      BACKGROUND_ANIMATION: 1,
                      NEAR_WIN_ANIMATION: 1,
                      TRANSITION_ANIMATION: 1,
                      BONUS_ANIMATION: 1,
                    },
                    LOW_PERFORMANCE_LV: {
                      PAYLINE_ANIMATION: 0,
                      BIG_WIN_ANIMATION: 0,
                      JP_WIN_ANIMATION: 0,
                      BACKGROUND_ANIMATION: 0,
                      NEAR_WIN_ANIMATION: 0,
                      TRANSITION_ANIMATION: 0,
                      BONUS_ANIMATION: 0,
                    },
                    NORMAL_TABLE_FORMAT: [3, 3, 3, 3, 3],
                    FREE_TABLE_FORMAT: [3, 3, 3, 3, 3],
                    TOPUP_TABLE_FORMAT: [3, 3, 3, 3, 3],
                    BONUS_TABLE_FORMAT: [3, 3, 3, 3, 3],
                    TABLE_BUFFER: { TOP: 1, BOT: 1 },
                    ACCEL: 1200,
                    MIN_SPEED: 2e3,
                    MAX_SPEED: 2800,
                    SUPER_SPEED: 3500,
                    TABLE_NORMAL: {
                      TIME: 0.06,
                      DELAY_START: 0,
                      DELAY_STOP: 0.5,
                      EASING_DISTANCE: 25,
                      EASING_TIME: 0.5,
                      TOTAL_CIRCULAR: 8,
                      RATE: 1,
                      IS_TURBO: !1,
                      BLINKS: 2,
                      BLINK_DURATION: 0.5,
                      ANIMATION_DURATION: 2,
                      EXPECT_PAYLINE_TIME: 2,
                      EXPECT_PAYLINE_ALLWAYS_TIME: 2,
                      MIN_TIME_EACH_PAYLINE: 0.2,
                      NEAR_WIN_DELAY: 0.6,
                      NEAR_WIN_DELAY_LAST_REEL: 1,
                    },
                    TABLE_TURBO: {
                      TIME: 0.05,
                      DELAY_START: 0,
                      DELAY_STOP: 0,
                      EASING_DISTANCE: 15,
                      EASING_TIME: 0.08,
                      TOTAL_CIRCULAR: 6,
                      RATE: 2,
                      IS_TURBO: !0,
                      BLINKS: 1,
                      BLINK_DURATION: 0.5,
                      ANIMATION_DURATION: 1,
                      EXPECT_PAYLINE_TIME: 2,
                      EXPECT_PAYLINE_ALLWAYS_TIME: 2,
                      MIN_TIME_EACH_PAYLINE: 0.2,
                      NEAR_WIN_DELAY: 0.3,
                      NEAR_WIN_DELAY_LAST_REEL: 0.5,
                    },
                    NORMAL_SYMBOLS: [
                      [
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "JP",
                        "A",
                      ],
                      [
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "JP",
                      ],
                      [
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "JP",
                        "A",
                      ],
                      [
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "JP",
                      ],
                      [
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "JP",
                        "A",
                      ],
                    ],
                    FREE_SYMBOLS: [
                      [
                        "22",
                        "33",
                        "44",
                        "55",
                        "66",
                        "77",
                        "88",
                        "22",
                        "33",
                        "44",
                        "55",
                        "66",
                        "77",
                        "88",
                        "A",
                        "JJ",
                      ],
                      [
                        "22",
                        "33",
                        "44",
                        "55",
                        "66",
                        "77",
                        "88",
                        "22",
                        "33",
                        "44",
                        "55",
                        "66",
                        "77",
                        "88",
                        "JJ",
                      ],
                      [
                        "22",
                        "33",
                        "44",
                        "55",
                        "66",
                        "77",
                        "88",
                        "22",
                        "33",
                        "44",
                        "55",
                        "66",
                        "77",
                        "88",
                        "A",
                        "JJ",
                      ],
                      [
                        "22",
                        "33",
                        "44",
                        "55",
                        "66",
                        "77",
                        "88",
                        "22",
                        "33",
                        "44",
                        "55",
                        "66",
                        "77",
                        "88",
                        "JJ",
                      ],
                      [
                        "22",
                        "33",
                        "44",
                        "55",
                        "66",
                        "77",
                        "88",
                        "22",
                        "33",
                        "44",
                        "55",
                        "66",
                        "77",
                        "88",
                        "A",
                        "JJ",
                      ],
                    ],
                    EXCEPTION_SYMBOLS: ["A", "R", "K", "K1", "K2", "JP"],
                    WILD_SYMBOL: "K",
                    SYMBOL_SMALL_NAME_LIST: [
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "J",
                    ],
                    SYMBOL_WIDTH: 188,
                    SYMBOL_HEIGHT: 160,
                    PAY_LINE_LENGTH: 25,
                    PAY_LINE_ALLWAYS: !1,
                    SHOW_WINLINE_FRAME: !1,
                    SHOW_DRAWING_LINE: !0,
                    PAY_LINE_MATRIX: {
                      1: [1, 1, 1, 1, 1],
                      2: [0, 0, 0, 0, 0],
                      3: [2, 2, 2, 2, 2],
                      4: [2, 1, 0, 1, 2],
                      5: [0, 1, 2, 1, 0],
                      6: [1, 0, 0, 0, 1],
                      7: [1, 2, 2, 2, 1],
                      8: [0, 0, 1, 2, 2],
                      9: [2, 2, 1, 0, 0],
                      10: [1, 2, 1, 0, 1],
                      11: [1, 0, 1, 2, 1],
                      12: [0, 1, 1, 1, 0],
                      13: [2, 1, 1, 1, 2],
                      14: [0, 1, 0, 1, 0],
                      15: [2, 1, 2, 1, 2],
                      16: [1, 1, 0, 1, 1],
                      17: [1, 1, 2, 1, 1],
                      18: [0, 0, 2, 0, 0],
                      19: [2, 2, 0, 2, 2],
                      20: [0, 2, 2, 2, 0],
                      21: [2, 0, 0, 0, 2],
                      22: [1, 0, 2, 0, 1],
                      23: [1, 2, 0, 2, 1],
                      24: [0, 2, 0, 2, 0],
                      25: [2, 0, 2, 0, 2],
                    },
                    SERVER_VERSION: 2,
                    HAS_GAME_EVENT: !1,
                    TUTORIAL_TEXT: {
                      CLICK_SPIN_1: "Bấm quay để bắt đầu chơi.",
                      INFO_PAYLINE:
                        "Xét trên dòng 1 đang cược 1K,\ncó 3 biểu tượng Aladdin có hệ số\nthưởng 15 thì sẽ được trả thưởng\nlà 1K x 15 = 15,000.",
                      INFO_JACKPOT:
                        "Đây là hũ xu của game, mỗi lần quay sẽ góp 1 phần tiền cược vào hũ.",
                      INFO_PAYLINE_MORE:
                        "Do hiện tại chỉ mua dòng 1\nnên không thể thắng được luôn\ntổ hợp ở dòng dưới.",
                      CLICK_BET_LINE: "Bấm vào đây để tăng dòng cược.",
                      INFO_BET_LINE: "Dòng nào sáng lên là\nđược chọn để cược.",
                      CLICK_BET_EVENT:
                        "Bấm vào đây để chọn tất cả\ncác dòng chẵn.",
                      INFO_BET_ONE:
                        "Có thể bấm trực tiếp trên dòng muốn mua hoặc bỏ đi dòng không muốn.",
                      CLICK_BET_ALL:
                        "Nhưng đừng để cơ hội vụt mất,\nhãy chọn tất cả.",
                      CLICK_CLOSE_BET_LINE:
                        "Bấm vào đây để\nhoàn tất việc chọn dòng.",
                      CLICK_SELECT_WILD:
                        "Tăng thêm giải thưởng bằng cách\nmua hệ số nhân của WILD ở đây.",
                      CLICK_MAX_WILD:
                        "Hãy chọn WILD hệ số nhân cao để có những phần thưởng cao hơn nào.",
                      INFO_EXTRA_BET: "Có thể chọn nhanh hệ số WILD ở đây.",
                      CLICK_SPIN_2: "Quay thử lại xem nào.",
                      CLICK_INCREASE_BET:
                        "Đã dễ trúng hơn rồi, thử tăng\nmức cược xem sao.",
                      CLICK_SPIN_3: "Thử lại lần nữa nào.",
                      INFO_SCATTER:
                        "Khi xuất hiện 3 biểu tượng Scatter\nsẽ đi vào hầm bí mật tìm báu vật.",
                      INFO_FREE_TIME:
                        "Số lần quay miễn phí\nsẽ cập nhật ở đây.",
                      INFO_WIN_JACKPOT:
                        "Tìm đủ 5 biểu tượng JACKPOT là sẽ chiếm được trái tim của Jasmine.",
                      CLICK_TURBO: "Bấm vào đây để tăng tốc nào.",
                      CLICK_HOLD_AUTO:
                        "Nhấn và giữ để tự quay và\ntiếp tục săn Jackpot.",
                    },
                    HAS_SELECT_BET_LINE: !0,
                    BET_LINES_KEY: "betLines",
                    EXTRA_BET_KEY: "extraBetId",
                  };
                }),
                I
              );
            })(N))
          ) || L
        );
        I._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CustomButton9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, n, i, o, r, s, u, a, c;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (s = t._decorator),
            (u = t.SpriteFrame),
            (a = t.Button),
            (c = t.Sprite);
        },
      ],
      execute: function () {
        var p, l, b, h, d;
        r._RF.push({}, "aa8fbEWNRZJDbWsKviGGWOQ", "CustomButton9976", void 0);
        var f = s.ccclass,
          m = s.property;
        t(
          "CustomButton9976",
          ((p = f("CustomButton9976")),
          (l = m(u)),
          p(
            ((d = e(
              (h = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, r = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    i(e, "buttonSprites", d, o(e)),
                    e
                  );
                }
                n(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    this.node.enableButton = this.enableButton.bind(this);
                  }),
                  (r._updateState = function () {
                    this._disabledSprite = this.buttonSprites[1];
                  }),
                  (r.enableButton = function (t) {
                    void 0 === t && (t = !1),
                      (this.node.getComponent(a).interactable = t),
                      (this.node.getComponent(c).spriteFrame = t
                        ? this.buttonSprites[0]
                        : this.buttonSprites[1]);
                  }),
                  e
                );
              })(a)).prototype,
              "buttonSprites",
              [l],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (b = h))
          ) || b)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CustomToggle9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, c, i, o;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (c = e.cclegacy), (i = e._decorator), (o = e.Toggle);
        },
      ],
      execute: function () {
        var s;
        c._RF.push({}, "04a9at/eJFJdZLDj0CdCvGx", "CustomToggle9976", void 0);
        var n = i.ccclass;
        e(
          "CustomToggle9976",
          n("CustomToggle9976")(
            (s = (function (e) {
              function c() {
                return e.apply(this, arguments) || this;
              }
              t(c, e);
              var i = c.prototype;
              return (
                (i.toggle = function () {
                  this.isChecked || (this.isChecked = !this.isChecked);
                }),
                (i.uncheck = function () {
                  (this.isChecked = !1), (this.checkMark.node.active = !1);
                }),
                (i.check = function () {
                  (this.isChecked = !0), (this.checkMark.node.active = !0);
                }),
                (i.showCheckMark = function (e) {
                  this.checkMark.node.active = e;
                }),
                c
              );
            })(o))
          ) || s
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DataStore9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./DataStore.ts",
  ],
  function (t) {
    "use strict";
    var a, e, r, i, n, o;
    return {
      setters: [
        function (t) {
          a = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (r = t._decorator), (i = t.warn);
        },
        function (t) {
          n = t.StateGameMode;
        },
        function (t) {
          o = t.DataStore;
        },
      ],
      execute: function () {
        var s;
        e._RF.push({}, "d0aa0r21eZOQLUnefBhhOeN", "DataStore9976", void 0);
        var u = r.ccclass;
        t(
          "DataStore9976",
          u("DataStore9976")(
            (s = (function (t) {
              function e() {
                return t.apply(this, arguments) || this;
              }
              a(e, t);
              var r = e.prototype;
              return (
                (r.formatData = function (t) {
                  var a = this.config,
                    e = a.NORMAL_TABLE_FORMAT,
                    r = a.FREE_TABLE_FORMAT,
                    o = t.matrix,
                    s = t.matrix0,
                    u = t.normalGameMatrix,
                    c = t.freeGameMatrix,
                    m = t.payLines,
                    h = t.state,
                    x = t.bonusGameMatrix,
                    p = t.promotion,
                    l = t.eventData,
                    v = t.winAmountQuest,
                    M = t.winAmountEvent,
                    f = t.isTrialMode,
                    d = e;
                  return (
                    h == n.FreeGame && (d = r),
                    o
                      ? (t.matrix = this.convertMatrix(o, d))
                      : c
                      ? (t.matrix = this.convertMatrix(c, d))
                      : u && (t.matrix = this.convertMatrix(u, d)),
                    s
                      ? (t.matrix0 = this.convertMatrix(s, d))
                      : c
                      ? (t.matrix0 = this.convertMatrix(c, d))
                      : u && (t.matrix0 = this.convertMatrix(u, d)),
                    t.payLines && (t.payLines = this.convertPayLine(m)),
                    x && (t.bonusGameMatrix = this.formatBonusMatrix(x)),
                    (this.promotion = p),
                    l && !f && this.questData.updateQuestData(l, v, M),
                    (this.playSession = t),
                    i("%c run data-update ", "color: red", this.playSession),
                    t
                  );
                }),
                (r.getTotalBet = function () {
                  var t = this.node.dataStore.betData,
                    a = t.betLines,
                    e = t.extraBets,
                    r = t.denom,
                    i = t.extraBetKey,
                    n = t.maxBetLine;
                  return r * (e[i] || 1) * (a.length ? a.length : n) || 0;
                }),
                e
              );
            })(o))
          ) || s
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Director9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./Director.ts",
  ],
  function (e) {
    "use strict";
    var t, r, a, i, s;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (r = e.cclegacy), (a = e._decorator);
        },
        function (e) {
          i = e.SlotGameMode;
        },
        function (e) {
          s = e.Director;
        },
      ],
      execute: function () {
        var o;
        r._RF.push({}, "351bfexh4tN5Zza2Fw1TZGz", "Director9976", void 0);
        var c = a.ccclass;
        e(
          "Director9976",
          c("Director9976")(
            (o = (function (e) {
              function r() {
                return e.apply(this, arguments) || this;
              }
              t(r, e);
              var a = r.prototype;
              return (
                (a._joinGameSuccess = function (t) {
                  if (
                    (e.prototype._joinGameSuccess.call(this, t),
                    t.hasOwnProperty("dataResume") ||
                      this.guiMgr.showSelectWildPanel(3),
                    this.guiMgr.initSelectWild(),
                    t.dataResume)
                  ) {
                    var r = t.dataResume.bLns;
                    this.guiMgr.updateBetLines(r);
                  }
                }),
                (a.newGameMode = function (t, r) {
                  var a = t.name,
                    s = t.data;
                  switch (
                    (e.prototype.newGameMode.call(
                      this,
                      { name: a, data: s },
                      r
                    ),
                    a)
                  ) {
                    case i.NormalGame:
                      this.guiMgr.showUIMain();
                      break;
                    case i.FreeGame:
                      this.guiMgr.showUIFree();
                  }
                }),
                (a.resumeGameMode = function (t, r) {
                  var a = t.name;
                  switch (
                    (e.prototype.resumeGameMode.call(this, { name: a }, r), a)
                  ) {
                    case i.NormalGame:
                      this.guiMgr.showUIMain();
                      break;
                    case i.FreeGame:
                      this.guiMgr.showUIFree();
                  }
                }),
                r
              );
            })(s))
          ) || o
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DotsHistory9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./DotsHistory.ts"],
  function (t) {
    "use strict";
    var o, s, i, e;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (s = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          e = t.DotsHistory;
        },
      ],
      execute: function () {
        var r;
        s._RF.push({}, "6626bc2XKBF2IZqiEz1rP6f", "DotsHistory9976", void 0);
        var c = i.ccclass;
        t(
          "DotsHistory9976",
          c("DotsHistory9976")(
            (r = (function (t) {
              function s() {
                return t.apply(this, arguments) || this;
              }
              return (
                o(s, t),
                (s.prototype.showDots = function (t) {
                  (this.jackpotDot.active = !1),
                    (this.freeDot.active = !1),
                    t.totalJpWinAmount && (this.jackpotDot.active = !0),
                    (t.totalFreeWinAmount || t.freeGameTotal) &&
                      (this.freeDot.active = !0);
                }),
                s
              );
            })(e))
          ) || r
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DrawingPayline9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./LineDrawingPayline.ts"],
  function (i) {
    "use strict";
    var e, t, n, s, a, o, r;
    return {
      setters: [
        function (i) {
          e = i.inheritsLoose;
        },
        function (i) {
          (t = i.cclegacy),
            (n = i._decorator),
            (s = i.Sprite),
            (a = i.UITransform),
            (o = i.Vec3);
        },
        function (i) {
          r = i.LineDrawingPayline;
        },
      ],
      execute: function () {
        var c;
        t._RF.push({}, "92482nxqJFGs6bTwNqeRa3p", "DrawingPayline9976", void 0);
        var h = n.ccclass;
        i(
          "DrawingPayline9976",
          h("DrawingPayline9976")(
            (c = (function (i) {
              function t() {
                return i.apply(this, arguments) || this;
              }
              return (
                e(t, i),
                (t.prototype.addLine = function (i, e, t) {
                  if (
                    (this.cachedLine[e] || (this.cachedLine[e] = []),
                    this.cachedLine[e][t])
                  ) {
                    if (this.cachedLine[e][t][i]) return;
                  } else this.cachedLine[e][t] = [];
                  this.cachedLine[e][t][i] = !0;
                  var n = null;
                  this.poolFactory &&
                    ((n = this.poolFactory.getObject(
                      this.linePrefabName
                    )).active = !0),
                    (n.parent = this.lineHolder),
                    this._usingObj.push(n);
                  var r =
                      this._startXPos +
                      this.config.SYMBOL_WIDTH / 2 +
                      e * this.config.SYMBOL_WIDTH,
                    c =
                      this._startYPos +
                      this.config.SYMBOL_HEIGHT / 2 +
                      (this.totalRow - 1 - t) * this.config.SYMBOL_HEIGHT;
                  c -= this.heightOffsetAllLines;
                  var h = n.getComponent(s);
                  h || (h = n.addComponent(s));
                  var l = n.getComponent(a);
                  if ((l || (l = n.addComponent(a)), 0 == i))
                    (h.spriteFrame = this.lineSprites[0]),
                      (l.width = this.config.SYMBOL_WIDTH),
                      (l.anchorX = 0),
                      (l.anchorY = 0.5),
                      (n.scale = new o(1, 1, 1)),
                      n.setPosition(r, c, 1);
                  else if (1 == i || 2 == i) {
                    var p = 1 === i ? -9 : 9;
                    (h.spriteFrame = this.lineSprites[1]),
                      (l.height = this.config.SYMBOL_HEIGHT + 20),
                      (l.anchorX = 0),
                      (l.anchorY = 0),
                      (n.scale = new o(1, 1 == i ? 1 : -1, 1)),
                      n.setPosition(r, c + p, 1);
                  } else if (3 == i || 4 == i) {
                    var f = 3 === i ? -9 : 9;
                    (h.spriteFrame = this.lineSprites[2]),
                      (l.height = 2 * this.config.SYMBOL_HEIGHT + 20),
                      (l.anchorX = 0),
                      (l.anchorY = 0),
                      (n.scale = new o(1, 3 == i ? 1 : -1, 1)),
                      n.setPosition(r, c + f, 1);
                  }
                  this.addDotToLine(e, t);
                }),
                t
              );
            })(r))
          ) || c
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ExpandingWildSymbol9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (e) {
    "use strict";
    var i, n, t, s, o, p, a, l, d, r, c;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (s = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (p = e._decorator),
            (a = e.Node),
            (l = e.sp),
            (d = e.Vec3),
            (r = e.tween);
        },
        function (e) {
          c = e.GameObject;
        },
      ],
      execute: function () {
        var h, u, x, m, f, y, E, S;
        o._RF.push(
          {},
          "87f1cp82WpOdKagmsYJTOLK",
          "ExpandingWildSymbol9976",
          void 0
        );
        var I = p.ccclass,
          b = p.property;
        e(
          "ExpandingWildSymbol9976",
          ((h = I("ExpandingWildSymbol9976")),
          (u = b(a)),
          (x = b(a)),
          h(
            ((y = i(
              (f = (function (e) {
                function i() {
                  for (
                    var i, n = arguments.length, o = new Array(n), p = 0;
                    p < n;
                    p++
                  )
                    o[p] = arguments[p];
                  return (
                    (i = e.call.apply(e, [this].concat(o)) || this),
                    t(i, "spineExpand", y, s(i)),
                    t(i, "spineIdle", E, s(i)),
                    t(i, "idleAnimation", S, s(i)),
                    (i.expandAnimations = [
                      "Expand Top",
                      "Expand Mid",
                      "Expand Bot",
                    ]),
                    (i.expandTopPosY = 138.7),
                    (i.expandMidPosY = 0),
                    (i.expandBotPosY = -138.6),
                    (i._spineSkeletonExp = null),
                    (i._spineSkeletonIdle = null),
                    i
                  );
                }
                n(i, e);
                var o = i.prototype;
                return (
                  (o.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      (this.node.playSpineAnimation =
                        this.playSpineAnimation.bind(this)),
                      (this.node.reset = this.reset.bind(this)),
                      this.spineExpand &&
                        (this._spineSkeletonExp = this.spineExpand.getComponent(
                          l.Skeleton
                        )),
                      this.spineIdle &&
                        (this._spineSkeletonIdle = this.spineIdle.getComponent(
                          l.Skeleton
                        ));
                  }),
                  (o.playSpineAnimation = function (e, i, n) {
                    var t = this;
                    if (
                      (void 0 === i && (i = !1),
                      void 0 === n && (n = !1),
                      this._spineSkeletonExp)
                    ) {
                      var s = Number(this.dataStore.betData.extraBetKey),
                        o = " Copper";
                      switch (s) {
                        case 2:
                          o = " Silver";
                          break;
                        case 3:
                          o = " Gold";
                      }
                      if (i)
                        this.spineIdle &&
                          ((this.spineIdle.active = !0),
                          n && this.soundPlayer.playSfx("BIG_WILD"),
                          this._spineSkeletonIdle.setAnimation(
                            0,
                            this.idleAnimation + o,
                            !0
                          ));
                      else {
                        n && this.soundPlayer.playSfx("WILD_OPEN"),
                          (this.spineExpand.active = !0);
                        var p = this.spineExpand.position.y;
                        0 == e
                          ? (p = this.expandTopPosY)
                          : 1 == e
                          ? (p = this.expandMidPosY)
                          : 2 == e && (p = this.expandBotPosY),
                          this.spineExpand.setPosition(
                            new d(
                              this.spineExpand.position.x,
                              p,
                              this.spineExpand.position.z
                            )
                          );
                        var a = "";
                        e >= 0 &&
                          e < this.expandAnimations.length &&
                          (a = this.expandAnimations[e] + o),
                          this._spineSkeletonIdle &&
                            this._spineSkeletonIdle.setCompleteListener(
                              function () {}
                            ),
                          this._spineSkeletonExp.setCompleteListener(function (
                            e,
                            i
                          ) {
                            t._spineSkeletonExp.setCompleteListener(
                              function () {}
                            ),
                              t.spineIdle &&
                                (r(t.spineExpand)
                                  .delay(0.01)
                                  .call(function () {
                                    t.spineExpand.active = !1;
                                  })
                                  .start(),
                                (t.spineIdle.active = !0),
                                n && t.soundPlayer.playSfx("BIG_WILD"),
                                t._spineSkeletonIdle.setAnimation(
                                  0,
                                  t.idleAnimation + o,
                                  !0
                                ));
                          }),
                          this._spineSkeletonExp.setAnimation(0, a, !1);
                      }
                    }
                  }),
                  (o.reset = function () {
                    this.spineExpand && (this.spineExpand.active = !1),
                      this.spineIdle && (this.spineIdle.active = !1);
                  }),
                  i
                );
              })(c)).prototype,
              "spineExpand",
              [u],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (E = i(f.prototype, "spineIdle", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(f.prototype, "idleAnimation", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "Idle";
              },
            })),
            (m = f))
          ) || m)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeDirector9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotDirector.ts",
  ],
  function (t) {
    "use strict";
    var i, e, s, n, o, r;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (s = t._decorator);
        },
        function (t) {
          (n = t.TutorialTriggerType), (o = t.SlotGameMode);
        },
        function (t) {
          r = t.SlotDirector;
        },
      ],
      execute: function () {
        var a;
        e._RF.push({}, "250f3xr1ZFAj7mxK6siki1v", "FreeDirector9976", void 0);
        var u = s.ccclass;
        t(
          "FreeDirector9976",
          u("FreeDirector9976")(
            (a = (function (t) {
              function e() {
                return t.apply(this, arguments) || this;
              }
              i(e, t);
              var s = e.prototype;
              return (
                (s.ready = function (t) {
                  this.table.emit("CLEAR_PAYLINES");
                  var i = this.dataStore.playSession.isFinished;
                  if (
                    (this.table.emit("CHANGE_MATRIX", { matrix: t }),
                    t && this.table.emit("SHOW_BIG_WILD", null, !0, !1, t),
                    this.slotButton &&
                      !1 !== i &&
                      ((this.slotButton.active = !0),
                      this.slotButton.emit("SPIN_SHOW"),
                      this.slotButton.emit("SPIN_ENABLE"),
                      this.slotButton.emit("STOP_AUTO_SPIN_HIDE")),
                    this.isAlwaysAutoSpin)
                  ) {
                    var e = this.dataStore.playSession,
                      s = e.bonusGameRemain,
                      r = e.freeGameRemain,
                      a = e.freeGame;
                    if (s > 0) this.stateResume();
                    else {
                      var u = r > 0 ? r : a;
                      u > 0 &&
                        (this.spinTimes &&
                          ((this.spinTimes.active = this.isAlwaysAutoSpin),
                          this.spinTimes.emit("UPDATE_SPINTIMES", u)),
                        this.runAction("SpinByTimes", u));
                    }
                  } else
                    this.slotButton &&
                      this.slotButton.emit("FAST_TO_RESULT_HIDE");
                  var c = n.ResumeNormalGame;
                  this.currentGameMode === o.FreeGame
                    ? (c = n.EnterFreeGame)
                    : this.currentGameMode === o.BonusGame
                    ? (c = n.EnterBonusGame)
                    : this.currentGameMode === o.TopUpGame &&
                      (c = n.EnterTopupGame),
                    this.guiMgr.setQuestPosition(this.questDummy),
                    this.soundPlayer && this.soundPlayer.playMainBGM(),
                    this.guiMgr.onIngameEvent(c, "ENTER_GAME_MODE");
                }),
                (s._spinClick = function (i) {
                  void 0 === i && (i = []),
                    this.fsm.can("actionTrigger") &&
                      (this.table.emit("HIDE_BIG_WILD"),
                      t.prototype._spinClick.call(this, i));
                }),
                (s._showBigWild = function (t, i) {
                  var e = this;
                  this.table.emit(
                    "SHOW_BIG_WILD",
                    function () {
                      e.executeNextScript(t);
                    },
                    i.isIdle,
                    i.playSound
                  );
                }),
                (s._showBigWin = function (t, i) {
                  var e = this,
                    s = i.name,
                    n = i.currentBetData,
                    o = i.winAmount,
                    r = this.dataStore.playSession,
                    a = {
                      winType: r.winType,
                      bigWinConfig: r.bigWinConfig,
                      winAmount: o,
                      currentBetData: n,
                    };
                  if (this.canStoreAsyncScript()) {
                    this.storeAsyncScript(t, {
                      callback: function () {
                        e.guiMgr.showCutScene(s, a, function () {
                          e.runAsyncScript();
                        });
                      },
                      name: "_showBigWin",
                      isSkippable: !0,
                    });
                  } else
                    this.guiMgr.showCutScene(s, a, function () {
                      e.executeNextScript(t);
                    });
                }),
                (s._playSFXWinRate = function (t, i) {
                  this.soundPlayer.playSfx("WIN" + i),
                    this.executeNextScript(t);
                }),
                e
              );
            })(r))
          ) || a
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeToNormal9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotUIScene.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var o, i, e, n, r, s, a, l, h, c, u;
    return {
      setters: [
        function (t) {
          (o = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (s = t._decorator),
            (a = t.Node),
            (l = t.Vec3),
            (h = t.tween);
        },
        function (t) {
          c = t.SlotUIScene;
        },
        function (t) {
          u = t.TutorialTriggerType;
        },
      ],
      execute: function () {
        var g, f, d, p, m, D, y, _, w;
        r._RF.push({}, "9a853vOBjdEfbneuU6q10RB", "FreeToNormal9976", void 0);
        var N = s.ccclass,
          S = s.property;
        t(
          "FreeToNormal9976",
          ((g = N("FreeToNormal9976")),
          (f = S(a)),
          (d = S(a)),
          (p = S(a)),
          g(
            ((y = o(
              (D = (function (t) {
                function o() {
                  for (
                    var o, i = arguments.length, r = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (o = t.call.apply(t, [this].concat(r)) || this),
                    e(o, "gameNode", y, n(o)),
                    e(o, "leftDoor", _, n(o)),
                    e(o, "rightDoor", w, n(o)),
                    (o.startPosXLeftDoor = -1500),
                    (o.startPosXRightDoor = 1500),
                    (o.endPosXLeftDoor = 350),
                    (o.endPosXRightDoor = -350),
                    (o.animationDuration = 2),
                    (o.shakingMaxDistance = 30),
                    (o.tweenGameNode = void 0),
                    o
                  );
                }
                i(o, t);
                var r = o.prototype;
                return (
                  (r.enter = function () {
                    var t = this;
                    this.soundPlayer.stopAllAudio(),
                      this.fadeTo(this.leftDoor, 0, 255),
                      this.fadeTo(this.rightDoor, 0, 255),
                      this.leftDoor &&
                        this.leftDoor.setPosition(
                          new l(
                            this.startPosXLeftDoor,
                            this.leftDoor.position.y,
                            this.leftDoor.position.z
                          )
                        ),
                      this.rightDoor &&
                        this.rightDoor.setPosition(
                          new l(
                            this.startPosXRightDoor,
                            this.leftDoor.position.y,
                            this.leftDoor.position.z
                          )
                        ),
                      this.gameNode && this._playShakingAnimation(),
                      h(this.node)
                        .delay(0.5)
                        .call(function () {
                          t.soundPlayer.playSfx("END_FREE_GAME");
                        })
                        .start(),
                      this._playClosingDoorAnimation();
                  }),
                  (r._playClosingDoorAnimation = function () {
                    var t = this;
                    h(this.leftDoor)
                      .to(this.animationDuration, {
                        position: new l(this.endPosXLeftDoor, 0, 0),
                      })
                      .start(),
                      h(this.rightDoor)
                        .to(this.animationDuration, {
                          position: new l(this.endPosXRightDoor, 0, 0),
                        })
                        .call(function () {
                          t._onExit();
                        })
                        .start();
                  }),
                  (r._playShakingAnimation = function () {
                    this.tweenGameNode && this.tweenGameNode.stop(),
                      (this.tweenGameNode = h(this.gameNode).repeatForever(
                        h()
                          .to(0.01, {
                            position: new l(
                              this._getSignRandom(),
                              this._getSignRandom(),
                              0
                            ),
                          })
                          .to(0.01, { position: new l(0, 0, 0) })
                          .to(0.01, {
                            position: new l(
                              this._getSignRandom(!0),
                              this._getSignRandom(!0),
                              0
                            ),
                          })
                          .to(0.01, { position: new l(0, 0, 0) })
                          .to(0.01, {
                            position: new l(
                              this._getSignRandom(),
                              this._getSignRandom(!0),
                              0
                            ),
                          })
                          .to(0.01, { position: new l(0, 0, 0) })
                          .to(0.01, {
                            position: new l(
                              this._getSignRandom(!0),
                              this._getSignRandom(),
                              0
                            ),
                          })
                          .to(0.01, { position: new l(0, 0, 0) })
                      )),
                      this.tweenGameNode.start();
                  }),
                  (r._getSignRandom = function (t) {
                    return (
                      void 0 === t && (t = !1),
                      ((Math.random() * this.shakingMaxDistance) / 2) *
                        (t ? -1 : 1)
                    );
                  }),
                  (r._reset = function () {
                    this.tweenGameNode && this.tweenGameNode.stop(),
                      this.gameNode.setPosition(l.ZERO);
                  }),
                  (r._onExit = function () {
                    var t = this;
                    h(this.node)
                      .call(function () {
                        t.callback && t.callback(), t._reset();
                      })
                      .delay(1)
                      .call(function () {
                        t.fadeTo(t.leftDoor, 1, 0), t.fadeTo(t.rightDoor, 1, 0);
                      })
                      .delay(1.5)
                      .call(function () {
                        t.exit();
                      })
                      .start();
                  }),
                  (r.exit = function () {
                    this.guiMgr.onIngameEvent(
                      u.OnCutsceneClose,
                      "ON_CUTSCENE_CLOSE"
                    ),
                      t.prototype.exit.call(this);
                  }),
                  o
                );
              })(c)).prototype,
              "gameNode",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (_ = o(D.prototype, "leftDoor", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = o(D.prototype, "rightDoor", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = D))
          ) || m)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeWriter9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotGameWriter.ts",
  ],
  function (e) {
    "use strict";
    var t, a, n, i, s, m;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (a = e.cclegacy), (n = e._decorator);
        },
        function (e) {
          (i = e.SlotSceneType), (s = e.StateGameMode);
        },
        function (e) {
          m = e.SlotGameWriter;
        },
      ],
      execute: function () {
        var o;
        a._RF.push({}, "5387bwEUtJKUKcmZTOe90Jz", "FreeWriter9976", void 0);
        var r = n.ccclass;
        e(
          "FreeWriter9976",
          r("FreeWriter9976")(
            (o = (function (e) {
              function a() {
                return e.apply(this, arguments) || this;
              }
              t(a, e);
              var n = a.prototype;
              return (
                (n.makeScriptShowResults = function () {
                  var e = this.node.dataStore,
                    t = e.playSession,
                    a = t.matrix,
                    n = t.winAmount,
                    s = t.winAmountPS,
                    m = t.payLines,
                    o = t.freeGameRemain,
                    r = t.freeGameTotal,
                    u = e.modeTurbo,
                    p = this._getTotalBetAmount(),
                    d = n >= 10 * p ? 3 : n >= p ? 2 : 1,
                    c = n && n >= 20 * p,
                    l = [];
                  return (
                    l.push({
                      command: "_setUpPaylines",
                      data: { matrix: a, payLines: m },
                    }),
                    l.push({
                      command: "_showBigWild",
                      data: {
                        isIdle: !1,
                        playSound: d > 1 && (!c || (c && u)),
                      },
                    }),
                    m &&
                      m.length > 0 &&
                      (c
                        ? (l.push({ command: "_blinkAllPaylines" }),
                          l.push({
                            command: "_showBigWin",
                            data: {
                              name: i.BigWin,
                              currentBetData: p,
                              winAmount: n,
                            },
                          }))
                        : (l.push({ command: "_blinkAllPaylines" }),
                          l.push({ command: "_playSFXWinRate", data: d })),
                      l.push({ command: "_showFreePayline" })),
                    !o || o <= 0
                      ? (s &&
                          s > 0 &&
                          l.push({
                            command: "_updateWinningAmount",
                            data: { winAmount: s, time: 300 },
                          }),
                        l.push({ command: "_delayTimeScript", data: 1 }),
                        l.push({
                          command: "_showCutscene",
                          data: { name: i.IntroNormalGame },
                        }),
                        l.push({
                          command: "_showUnskippedCutscene",
                          data: {
                            name: i.TotalWinPanel,
                            content: { winAmount: s, freeGameTotal: r },
                          },
                        }),
                        l.push({ command: "_clearPaylines" }),
                        l.push({ command: "_gameExit" }))
                      : (o > e.spinTimes
                          ? (l.push({ command: "_showScatterPayLine" }),
                            l.push({ command: "_moveParticles" }),
                            l.push({
                              command: "_addSpinTimesAnimation",
                              data: o - e.spinTimes,
                            }),
                            (e.spinTimes = o),
                            l.push({ command: "_updateSpinTimes", data: o }),
                            l.push({ command: "_delayTimeScript", data: 0.5 }))
                          : ((e.spinTimes = o),
                            l.push({ command: "_updateSpinTimes", data: o })),
                        l.push({ command: "_gameRestart" })),
                    l
                  );
                }),
                (n.makeScriptResultReceive = function () {
                  var e = this.node.dataStore.playSession,
                    t = e.matrix,
                    a = e.matrix0,
                    n = e.jackpotInfo,
                    i = [];
                  if (e.state == s.FreespinOption)
                    i.push({ command: "_showFreeOptionResult" });
                  else {
                    if (n) {
                      var m = n[n.length - 1].split(";"),
                        o = m[0].split("_")[3],
                        r = Math.floor(Number(m[1]));
                      i.push({ command: "_pauseUpdateJP" }),
                        i.push({
                          command: "_updateValueJP",
                          data: { jpType: o, jpValue: r },
                        });
                    }
                    i.push({ command: "_resultReceive", data: a || t }),
                      i.push({ command: "_showResult", data: t });
                  }
                  return i;
                }),
                (n._getTotalBetAmount = function () {
                  var e = this.node.dataStore.betData,
                    t = e.betLines,
                    a = e.extraBets,
                    n = e.denom,
                    i = e.extraBetKey,
                    s = e.maxBetLine;
                  return n * (a[i] || 1) * (t.length ? t.length : s) || 0;
                }),
                a
              );
            })(m))
          ) || o
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroFreeGame9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotUIScene.ts",
    "./CustomEnum.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, a, o, r, c, l, s, u, f, m, h, d;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (a = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (r = e._decorator),
            (c = e.Node),
            (l = e.ParticleSystem2D),
            (s = e.Label),
            (u = e.tween),
            (f = e.Vec3),
            (m = e.sp);
        },
        function (e) {
          h = e.SlotUIScene;
        },
        function (e) {
          d = e.TutorialTriggerType;
        },
      ],
      execute: function () {
        var p, g, b, y, k, v, S, _, P, T, E, G, w, x, C, F;
        o._RF.push({}, "3049aZQWzVEtbD0OCBRQTki", "IntroFreeGame9976", void 0);
        var I = r.ccclass,
          z = r.property;
        e(
          "IntroFreeGame9976",
          ((p = I("IntroFreeGame9976")),
          (g = z(c)),
          (b = z(c)),
          (y = z(c)),
          (k = z(l)),
          (v = z(c)),
          (S = z(c)),
          p(
            ((T = t(
              (P = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    i(t, "count", T, a(t)),
                    i(t, "background", E, a(t)),
                    i(t, "contentNode", G, a(t)),
                    i(t, "suffixText", w, a(t)),
                    i(t, "smokeParticle", x, a(t)),
                    i(t, "mainGameElements", C, a(t)),
                    i(t, "character", F, a(t)),
                    (t.characterMoveDuration = 1.5),
                    (t._originScale = void 0),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.start = function () {
                    this.character &&
                      (this._originScale = this.character.scale);
                  }),
                  (o.enter = function () {
                    var e = this;
                    this.soundPlayer.stopAllAudio(),
                      this.soundPlayer.playSfx("POPUP"),
                      (this.count.getComponent(s).string = ""),
                      this.fadeTo(this.background, 0, 0),
                      this._showSmokeEffect(),
                      this.character.setPosition(-104.624, -158.56),
                      this._showTotalFreeSpin(
                        function () {
                          e._fadeMainGame(!1, function () {
                            e._hideSmokeEffect();
                          });
                        },
                        function () {
                          e._enterFreeGame(function () {
                            e.exit();
                          });
                        }
                      );
                  }),
                  (o._showTotalFreeSpin = function (e, t) {
                    var n = this;
                    void 0 === e && (e = null),
                      void 0 === t && (t = null),
                      this.contentNode &&
                        u(this.contentNode)
                          .call(function () {
                            n.count.getComponent(s).string =
                              n.content.freeGameTotal + " " + n.suffixText;
                          })
                          .delay(0.5)
                          .call(function () {
                            n.fadeTo(n.contentNode, 0.5, 255);
                          })
                          .delay(1)
                          .call(function () {
                            e && e();
                          })
                          .delay(0.5)
                          .call(function () {
                            n.fadeTo(n.contentNode, 0.5, 0), t && t();
                          })
                          .start();
                  }),
                  (o._showSmokeEffect = function () {
                    var e = this;
                    this.smokeParticle &&
                      ((this.smokeParticle.node.active = !0),
                      u(this.smokeParticle.node)
                        .to(0.1, { position: new f(50, -500, 0) })
                        .call(function () {
                          e.smokeParticle.resetSystem();
                        })
                        .start());
                  }),
                  (o._hideSmokeEffect = function () {
                    var e = this;
                    this.smokeParticle &&
                      u(this.smokeParticle.node)
                        .to(0.2, { position: new f(0, 2e3, 0) })
                        .delay(2)
                        .call(function () {
                          e.smokeParticle.stopSystem(),
                            e.smokeParticle.node.setPosition(
                              e.smokeParticle.node.position.x,
                              -3e3
                            ),
                            (e.smokeParticle.node.active = !1);
                        })
                        .start();
                  }),
                  (o._fadeMainGame = function (e, t) {
                    var n = this;
                    if (
                      (void 0 === t && (t = null),
                      this.mainGameElements && this.mainGameElements.length > 0)
                    ) {
                      t && t();
                      for (
                        var i = function (i) {
                            e
                              ? (i > 0 &&
                                  n.fadeTo(n.mainGameElements[i], 0, 255),
                                i === n.mainGameElements.length - 1 && t && t())
                              : u(n.mainGameElements[i])
                                  .call(function () {
                                    n.fadeTo(n.mainGameElements[i], 0.5, 0),
                                      i === n.mainGameElements.length - 1 &&
                                        t &&
                                        t();
                                  })
                                  .start();
                          },
                          a = 0;
                        a < this.mainGameElements.length;
                        a++
                      )
                        i(a);
                    }
                  }),
                  (o._enterFreeGame = function (e) {
                    var t = this;
                    this.soundPlayer.playSfx("INTRO_FREE"),
                      (this.character.active = !0),
                      this.character
                        .getComponent(m.Skeleton)
                        .setAnimation(0, "anim_Idle", !1),
                      u(this.character)
                        .call(function () {
                          t.fadeTo(t.character, 0.5, 255);
                        })
                        .delay(0.5)
                        .call(function () {
                          t.character
                            .getComponent(m.Skeleton)
                            .setAnimation(0, "anim_move", !0);
                        })
                        .parallel(
                          u().to(this.characterMoveDuration, {
                            position: new f(-8, -84, 0),
                          }),
                          u().to(this.characterMoveDuration, {
                            scale: new f(0.5, 0.5, 0),
                          })
                        )
                        .call(function () {
                          t.character
                            .getComponent(m.Skeleton)
                            .setAnimation(0, "anim_Idle", !1),
                            t.fadeTo(t.character, 0.5, 0);
                        })
                        .start(),
                      u(this.background)
                        .call(function () {
                          t.fadeTo(t.background, 0.5, 255);
                        })
                        .delay(0.5)
                        .call(function () {
                          t._fadeMainGame(!0);
                        })
                        .delay(3)
                        .call(function () {
                          t.fadeTo(t.background, 0.5, 0),
                            t.callback && t.callback(),
                            e && e();
                        })
                        .start();
                  }),
                  (o.exit = function () {
                    this.character &&
                      ((this.character.active = !1),
                      this.fadeTo(this.character, 0, 0),
                      this._originScale &&
                        (this.character.scale = this._originScale)),
                      this.guiMgr.onIngameEvent(
                        d.OnCutsceneClose,
                        "ON_CUTSCENE_CLOSE"
                      ),
                      e.prototype.exit.call(this);
                  }),
                  t
                );
              })(h)).prototype,
              "count",
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
            (E = t(P.prototype, "background", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = t(P.prototype, "contentNode", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = t(P.prototype, "suffixText", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (x = t(P.prototype, "smokeParticle", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = t(P.prototype, "mainGameElements", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (F = t(P.prototype, "character", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = P))
          ) || _)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotWin9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./JackpotWin.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var n, i, e, o, s, a, r, l, u, c, p, y, h;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (a = t._decorator),
            (r = t.Node),
            (l = t.sp),
            (u = t.tween),
            (c = t.Vec3);
        },
        function (t) {
          p = t.formatMoney;
        },
        function (t) {
          y = t.JackpotWin;
        },
        function (t) {
          h = t.TutorialTriggerType;
        },
      ],
      execute: function () {
        var f, d, m, P, w;
        s._RF.push({}, "514e9++99VHqJ1/lMChjX/i", "JackpotWin9976", void 0);
        var A = a.ccclass,
          g = a.property;
        t(
          "JackpotWin9976",
          ((f = A("JackpotWin9976")),
          (d = g({ type: r })),
          f(
            ((w = n(
              (P = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, s = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (n = t.call.apply(t, [this].concat(s)) || this),
                    e(n, "winJPAnim", w, o(n)),
                    n
                  );
                }
                i(n, t);
                var s = n.prototype;
                return (
                  (s.playTweenWinAmount = function () {}),
                  (s.playSoundStart = function () {
                    this.soundPlayer && this.soundPlayer.stopAllAudio(),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("BIG_WIN", !0);
                  }),
                  (s.playSoundEnd = function () {
                    this.soundPlayer && this.soundPlayer.playSfx("BIG_WIN_END");
                  }),
                  (s.enter = function () {
                    t.prototype.enter.call(this),
                      this.winJPAnim &&
                        ((this.winJPAnim.active = !0),
                        this.winJPAnim
                          .getComponent(l.Skeleton)
                          .setAnimation(0, "animation", !0));
                  }),
                  (s.finish = function () {
                    var t = this;
                    (this.isUpdating = !1),
                      (this.label.string = p(this.content.winAmount)),
                      this.stopParticle(),
                      this.stopTweenTitle(),
                      this.stopTweenWinAmount(),
                      u(this.winInfo)
                        .delay(this.delayShowTime - 0.1)
                        .call(function () {
                          t.coinsEffect.emit("RESET_PARTICLE");
                        })
                        .delay(0.1)
                        .to(this.hideTime, { scale: new c(0, 0, 0) })
                        .call(function () {
                          (t.label.string = ""),
                            t.guiMgr.onIngameEvent(
                              h.OnCutsceneClose,
                              "ON_CUTSCENE_CLOSE"
                            ),
                            t.exit(),
                            t.soundPlayer && t.soundPlayer.stopAllAudio(),
                            t.soundPlayer && t.soundPlayer.playMainBGM();
                        })
                        .start();
                  }),
                  n
                );
              })(y)).prototype,
              "winJPAnim",
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
            (m = P))
          ) || m)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MainDirector9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotDirector.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, c, s;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (n = t._decorator);
        },
        function (t) {
          c = t.TutorialTriggerType;
        },
        function (t) {
          s = t.SlotDirector;
        },
      ],
      execute: function () {
        var r;
        e._RF.push({}, "70f82+2RQFNOIk6Rw92f/EN", "MainDirector9976", void 0);
        var o = n.ccclass;
        t(
          "MainDirector9976",
          o("MainDirector9976")(
            (r = (function (t) {
              function e() {
                return t.apply(this, arguments) || this;
              }
              i(e, t);
              var n = e.prototype;
              return (
                (n.switchMode = function () {
                  this.dataStore.isTrialMode && this.resetAsyncScript(),
                    t.prototype.switchMode.call(this);
                }),
                (n._showBigWild = function (t, i) {
                  var e = this;
                  this.table.emit(
                    "SHOW_BIG_WILD",
                    function () {
                      e.executeNextScript(t);
                    },
                    i.isIdle,
                    i.playSound
                  );
                }),
                (n._showBigWin = function (t, i) {
                  var e = this,
                    n = i.name,
                    c = i.currentBetData,
                    s = i.winAmount,
                    r = this.dataStore.playSession,
                    o = {
                      winType: r.winType,
                      bigWinConfig: r.bigWinConfig,
                      winAmount: s,
                      currentBetData: c,
                    };
                  if (this.canStoreAsyncScript()) {
                    this.storeAsyncScript(t, {
                      callback: function () {
                        e.guiMgr.showCutScene(n, o, function () {
                          e.runAsyncScript();
                        });
                      },
                      name: "_showBigWin",
                      isSkippable: !0,
                    });
                  } else
                    this.guiMgr.showCutScene(n, o, function () {
                      e.executeNextScript(t);
                    });
                }),
                (n._showNormalPayline = function (t) {
                  var i = this;
                  if (this.hasPayline)
                    if (this.canStoreAsyncScript()) {
                      this.storeAsyncScript(t, {
                        callback: function () {
                          i.guiMgr.onIngameEvent(
                            c.ShowPayline,
                            "SHOW_NORMAL_PAYLINE"
                          ),
                            i.table.emit("SHOW_ALL_NORMAL_PAYLINES"),
                            i.runAsyncScript();
                        },
                        name: "_showNormalPayline",
                        isSkippable: !0,
                      });
                    } else
                      this.guiMgr.onIngameEvent(
                        c.ShowPayline,
                        "SHOW_NORMAL_PAYLINE"
                      ),
                        this.table.emit("SHOW_ALL_NORMAL_PAYLINES"),
                        this.executeNextScript(t);
                  else this.executeNextScript(t);
                }),
                (n._showUnskippedCutscene = function (t, i) {
                  var e = this,
                    n = i.name,
                    c = i.content;
                  if (this._checkPauseTutorial("pauseJackpotAnim")) {
                    this.storeCurrentScripts = "_showUnskippedCutscene";
                    var s = { name: n, content: c };
                    this.storeNextScripts = { script: t, data: s };
                  } else
                    this.guiMgr.showCutScene(n, c, function () {
                      e.executeNextScript(t);
                    });
                }),
                (n._playSFXWinRate = function (t, i) {
                  this.soundPlayer.playSfx("WIN" + i),
                    this.executeNextScript(t);
                }),
                (n._showSelectWild = function (t) {
                  this.guiMgr.initSelectWild(), this.executeNextScript(t);
                }),
                e
              );
            })(s))
          ) || r
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MainWriter9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotGameWriter.ts",
  ],
  function (a) {
    "use strict";
    var e, t, n, m, o, i, s;
    return {
      setters: [
        function (a) {
          e = a.inheritsLoose;
        },
        function (a) {
          (t = a.cclegacy), (n = a._decorator);
        },
        function (a) {
          (m = a.SlotGameMode), (o = a.SlotSceneType), (i = a.StateGameMode);
        },
        function (a) {
          s = a.SlotGameWriter;
        },
      ],
      execute: function () {
        var u;
        t._RF.push({}, "e3219+fm4pKl4kijS64O3xV", "MainWriter9976", void 0);
        var r = n.ccclass;
        a(
          "MainWriter9976",
          r("MainWriter9976")(
            (u = (function (a) {
              function t() {
                return a.apply(this, arguments) || this;
              }
              e(t, a);
              var n = t.prototype;
              return (
                (n.makeScriptResume = function () {
                  var a = this.node.dataStore;
                  if (a) {
                    var e,
                      t,
                      n = a.config,
                      o = n.NORMAL_TABLE_FORMAT,
                      i = n.FREE_TABLE_FORMAT,
                      s = a.playSession,
                      u = s.normalGameMatrix,
                      r = s.normalGamePaylines,
                      d = s.freeGameRemain,
                      p = s.promotion,
                      c = s.freeGameMatrix,
                      l = s.winAmountPS,
                      h = s.betId,
                      _ = s.walletType,
                      y = a.convertMatrix(u, o),
                      f = r ? a.convertPayLine(r) : null,
                      g = d && d > 0,
                      w = [];
                    if (p && p.length > 2) {
                      var S = p.split(";");
                      (e = parseInt(S[0])), (t = parseInt(S[1]));
                    }
                    if (
                      (w.push({ command: "_updateBetId", data: h }),
                      w.push({ command: "_loadWallet", data: _ }),
                      w.push({ command: "_disableBet" }),
                      w.push({ command: "_showTrialButtons", data: !1 }),
                      w.push({ command: "_updateMatrix", data: { matrix: y } }),
                      w.push({
                        command: "_setUpPaylines",
                        data: { matrix: y, payLines: f },
                      }),
                      w.push({ command: "_showBigWild", data: { isIdle: !0 } }),
                      l &&
                        l > 0 &&
                        w.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: l, time: 0 },
                        }),
                      g)
                    ) {
                      var A = null;
                      c && (A = a.convertMatrix(c, i)),
                        w.push({ command: "_showScatterPayLine" }),
                        d &&
                          d > 0 &&
                          w.push({
                            command: "_newGameMode",
                            data: { name: m.FreeGame, data: A },
                          }),
                        w.push({
                          command: "_resumeGameMode",
                          data: { name: m.NormalGame },
                        });
                    }
                    return (
                      w.push({ command: "_showSelectWild" }),
                      f &&
                        f.length > 0 &&
                        (w.push({ command: "_blinkAllPaylines" }),
                        w.push({ command: "_showNormalPayline" })),
                      w.push({ command: "_gameFinish" }),
                      w.push({ command: "_gameRestart" }),
                      p &&
                        e &&
                        t &&
                        e > 0 &&
                        w.push({ command: "_showPromotionPopup" }),
                      w
                    );
                  }
                }),
                (n.makeScriptShowResults = function () {
                  var a = this.node.dataStore,
                    e = a.playSession,
                    t = e.matrix,
                    n = e.matrix0,
                    i = e.winAmount,
                    s = e.winAmountPS,
                    u = e.payLines,
                    r = e.bonusGame,
                    d = e.freeGame,
                    p = e.jackpotInfo,
                    c = a.modeTurbo,
                    l = this._getTotalBetAmount(),
                    h = i >= 10 * l ? 3 : i >= l ? 2 : 1,
                    _ = i && i >= 20 * l,
                    y = [];
                  if (
                    (y.push({
                      command: "_setUpPaylines",
                      data: { matrix: t, payLines: u },
                    }),
                    y.push({
                      command: "_showBigWild",
                      data: {
                        isIdle: !1,
                        playSound: h > 1 && (!_ || (_ && c)),
                      },
                    }),
                    p)
                  ) {
                    var f,
                      g = p[p.length - 1].split(";"),
                      w = 0;
                    g &&
                      g.length > 2 &&
                      ((w = Math.floor(Number(g[1]))), (f = g[2])),
                      f &&
                        y.push({
                          command: "_showJackpotPayLine",
                          data: { jpPayLineID: f },
                        }),
                      y.push({
                        command: "_showUnskippedCutscene",
                        data: {
                          name: o.JackpotWin,
                          content: { winAmount: w, currentBetData: l },
                        },
                      }),
                      y.push({ command: "_resumeUpdateJP" });
                  } else
                    _ &&
                      (u &&
                        u.length > 0 &&
                        y.push({ command: "_blinkAllPaylines" }),
                      y.push({
                        command: "_showBigWin",
                        data: {
                          name: o.BigWin,
                          currentBetData: l,
                          winAmount: i,
                        },
                      }),
                      u &&
                        u.length > 0 &&
                        y.push({ command: "_showNormalPayline" }));
                  if (d && d > 0) {
                    var S = a.spinTimes;
                    r ||
                      (s && s > 0
                        ? y.push({
                            command: "_updateWinningAmount",
                            data: { winAmount: s, time: 10 },
                          })
                        : y.push({ command: "_clearWinAmount" })),
                      y.push({ command: "_showScatterPayLine" }),
                      y.push({
                        command: "_showCutscene",
                        data: {
                          name: o.IntroFreeGame,
                          content: { freeGameTotal: d },
                        },
                      }),
                      y.push({
                        command: "_newGameMode",
                        data: { name: m.FreeGame, data: n || t },
                      }),
                      y.push({
                        command: "_resumeGameMode",
                        data: { name: m.NormalGame },
                      }),
                      S &&
                        S > 0 &&
                        y.push({ command: "_resumeSpinTime", data: S });
                  }
                  return (
                    p ||
                      (u &&
                        u.length > 0 &&
                        (_ ||
                          (d ||
                            y.push({
                              command: "_updateWinningAmount",
                              data: { winAmount: s, time: 300 },
                            }),
                          y.push({ command: "_blinkAllPaylines" }),
                          y.push({ command: "_playSFXWinRate", data: h })))),
                    !p &&
                      u &&
                      u.length > 0 &&
                      y.push({ command: "_showNormalPayline" }),
                    y.push({ command: "_gameFinish" }),
                    y.push({ command: "_gameRestart" }),
                    y
                  );
                }),
                (n.makeScriptResultReceive = function () {
                  var a = this.node.dataStore.playSession,
                    e = a.matrix,
                    t = a.matrix0,
                    n = a.jackpotInfo,
                    m = [];
                  if (a.state == i.FreespinOption)
                    m.push({ command: "_showFreeOptionResult" });
                  else {
                    if (n) {
                      var o = n[n.length - 1].split(";"),
                        s = o[0].split("_")[3],
                        u = Math.floor(Number(o[1]));
                      m.push({ command: "_pauseUpdateJP" }),
                        m.push({
                          command: "_updateValueJP",
                          data: { jpType: s, jpValue: u },
                        });
                    }
                    m.push({ command: "_resultReceive", data: t || e }),
                      m.push({ command: "_showResult", data: e });
                  }
                  return m;
                }),
                (n._getTotalBetAmount = function () {
                  var a = this.node.dataStore.betData,
                    e = a.betLines,
                    t = a.extraBets,
                    n = a.denom,
                    m = a.extraBetKey,
                    o = a.maxBetLine;
                  return n * (t[m] || 1) * (e.length ? e.length : o) || 0;
                }),
                t
              );
            })(s))
          ) || u
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ParticleSpawnerControl9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var e, i, n, r, o, a, l, s, u, c, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized),
            (o = t.createClass);
        },
        function (t) {
          (a = t.cclegacy),
            (l = t._decorator),
            (s = t.Node),
            (u = t.Vec3),
            (c = t.UITransform);
        },
        function (t) {
          p = t.GameObject;
        },
      ],
      execute: function () {
        var m,
          h,
          f,
          b,
          g,
          d,
          y,
          w,
          S,
          v,
          P,
          _,
          z,
          R,
          x,
          F,
          M,
          O,
          C,
          j,
          V,
          I,
          D,
          Z,
          A;
        a._RF.push(
          {},
          "22b4336uopMQ5ugaV9XuV8/",
          "ParticleSpawnerControl9976",
          void 0
        );
        var L = l.ccclass,
          N = l.property;
        t(
          "ParticleSpawnerControl9976",
          ((m = L("ParticleSpawnerControl9976")),
          (h = N(s)),
          m(
            ((g = e(
              (b = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "spawnPositions", g, r(e)),
                    n(e, "maxParticleCount", d, r(e)),
                    n(e, "minParticleCount", y, r(e)),
                    n(e, "minMovingSpeed", w, r(e)),
                    n(e, "maxMovingSpeed", S, r(e)),
                    n(e, "movingDirection", v, r(e)),
                    n(e, "particlePrefabName", P, r(e)),
                    n(e, "interval", _, r(e)),
                    n(e, "duration", z, r(e)),
                    n(e, "fromScale", R, r(e)),
                    n(e, "fromScaleVar", x, r(e)),
                    n(e, "toScale", F, r(e)),
                    n(e, "toScaleVar", M, r(e)),
                    n(e, "maxRotationYSpeed", O, r(e)),
                    n(e, "minRotationYSpeed", C, r(e)),
                    n(e, "maxRotationZSpeed", j, r(e)),
                    n(e, "minRotationZSpeed", V, r(e)),
                    n(e, "minInitAngle", I, r(e)),
                    n(e, "maxInitAngle", D, r(e)),
                    n(e, "spawnOnStart", Z, r(e)),
                    n(e, "isLoop", A, r(e)),
                    (e._isPlaying = !1),
                    (e._usingObjects = []),
                    (e._timer = 0),
                    (e._poolFactory = null),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    t.prototype.onLoad.call(this);
                    var e = this.node.mainDirector;
                    e && (this._poolFactory = e.poolFactory),
                      this.spawnOnStart && this.spawn();
                  }),
                  (a.spawn = function () {
                    for (
                      var t = this.getRandomInt(
                          this.minParticleCount,
                          this.maxParticleCount
                        ),
                        e = 0;
                      e < t;
                      e++
                    )
                      if (this._poolFactory) {
                        var i = this._poolFactory.getObject(
                            this.particlePrefabName
                          ),
                          n = this.getRandomFloat(
                            this.minMovingSpeed,
                            this.maxMovingSpeed
                          ),
                          r =
                            this.fromScale +
                            this.getRandomFloat(
                              -this.fromScaleVar,
                              this.fromScaleVar
                            ),
                          o =
                            this.toScale +
                            this.getRandomFloat(
                              -this.toScaleVar,
                              this.toScaleVar
                            ) -
                            r,
                          a = this.getRandomFloat(
                            this.minRotationZSpeed,
                            this.maxRotationZSpeed
                          ),
                          l = this.getRandomFloat(
                            this.minInitAngle,
                            this.maxInitAngle
                          );
                        if (i) {
                          (i.active = !0),
                            (i.speed = n),
                            (i.direction = this.movingDirection),
                            (i.scaleDelta = o),
                            i.setScale(new u(r, r, r)),
                            (i.rotationZSpeed = a);
                          var s = e % this.spawnPositions.length,
                            p = this.spawnPositions[s];
                          if (p) {
                            var m = p.getComponent(c),
                              h = m.width,
                              f = m.height,
                              b = Math.random() * h - h / 2,
                              g = Math.random() * f - f / 2;
                            i.setPosition(new u(b, g, 0)), (i.parent = p);
                          } else {
                            var d = this.node.getComponent(c),
                              y = d.width,
                              w = d.height,
                              S = Math.random() * y - y / 2,
                              v = Math.random() * w - w / 2;
                            i.setPosition(new u(S, v, 0)),
                              (i.parent = this.node);
                          }
                          (i.angle = l), this._usingObjects.push(i);
                        }
                      }
                    this.isPlaying = !0;
                  }),
                  (a.update = function (t) {
                    if (this._isPlaying) {
                      if (((this._timer += t), this._timer >= this.interval))
                        for (var e = 0; e < this._usingObjects.length; e++) {
                          var i = this._usingObjects[e];
                          if (i) {
                            var n = i.direction,
                              r = i.speed,
                              o = i.scaleDelta,
                              a = i.rotationZSpeed,
                              l = i.scale.x + (t * o) / this.duration;
                            i.setScale(new u(l, l, l));
                            var s = i.position.x + n.x * r * t,
                              c = i.position.y + n.y * r * t;
                            i.setPosition(new u(s, c)), (i.angle += a);
                          }
                        }
                      this._timer >= this.duration + this.interval &&
                        (this.reset(), this.isLoop && this.spawn());
                    }
                  }),
                  (a.reset = function () {
                    for (var t = 0; t < this._usingObjects.length; t++) {
                      var e = this._usingObjects[t];
                      e &&
                        this._poolFactory &&
                        this._poolFactory.removeObject(e);
                    }
                    (this._usingObjects = []),
                      (this._timer = 0),
                      (this._isPlaying = !1);
                  }),
                  (a.getRandomFloat = function (t, e) {
                    return Math.random() * (e - t) + t;
                  }),
                  (a.getRandomInt = function (t, e) {
                    return Math.floor(this.getRandomFloat(t, e));
                  }),
                  o(e, [
                    {
                      key: "isPlaying",
                      get: function () {
                        return this._isPlaying;
                      },
                      set: function (t) {
                        this._isPlaying = t;
                      },
                    },
                  ]),
                  e
                );
              })(p)).prototype,
              "spawnPositions",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (d = e(b.prototype, "maxParticleCount", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 40;
              },
            })),
            (y = e(b.prototype, "minParticleCount", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 35;
              },
            })),
            (w = e(b.prototype, "minMovingSpeed", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 400;
              },
            })),
            (S = e(b.prototype, "maxMovingSpeed", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 800;
              },
            })),
            (v = e(b.prototype, "movingDirection", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new u(0, -1, 1);
              },
            })),
            (P = e(b.prototype, "particlePrefabName", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (_ = e(b.prototype, "interval", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.1;
              },
            })),
            (z = e(b.prototype, "duration", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 2;
              },
            })),
            (R = e(b.prototype, "fromScale", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.5;
              },
            })),
            (x = e(b.prototype, "fromScaleVar", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.05;
              },
            })),
            (F = e(b.prototype, "toScale", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.45;
              },
            })),
            (M = e(b.prototype, "toScaleVar", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.05;
              },
            })),
            (O = e(b.prototype, "maxRotationYSpeed", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 5;
              },
            })),
            (C = e(b.prototype, "minRotationYSpeed", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.5;
              },
            })),
            (j = e(b.prototype, "maxRotationZSpeed", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 4;
              },
            })),
            (V = e(b.prototype, "minRotationZSpeed", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return -4;
              },
            })),
            (I = e(b.prototype, "minInitAngle", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return -50;
              },
            })),
            (D = e(b.prototype, "maxInitAngle", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 50;
              },
            })),
            (Z = e(b.prototype, "spawnOnStart", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (A = e(b.prototype, "isLoop", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (f = b))
          ) || f)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SelectBetline9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotUIScene.ts",
    "./gameCommonUtils.ts",
    "./CustomEnum.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, s, o, a, r, l, h, c, u, L, f, B, g;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (s = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (a = e._decorator),
            (r = e.Node),
            (l = e.Prefab),
            (h = e.Label),
            (c = e.Toggle),
            (u = e.instantiate),
            (L = e.tween);
        },
        function (e) {
          f = e.SlotUIScene;
        },
        function (e) {
          B = e.default;
        },
        function (e) {
          g = e.TutorialTriggerType;
        },
      ],
      execute: function () {
        var b, d, p, m, E, _, v, T, y, C, S, I, w, D, A, k, N, x;
        o._RF.push({}, "eebcfcxAQ5I9YJBvbrdwjez", "SelectBetline9976", void 0);
        var P = a.ccclass,
          M = a.property;
        e(
          "SelectBetline9976",
          ((b = P("SelectBetline9976")),
          (d = M(r)),
          (p = M(l)),
          (m = M(r)),
          (E = M(h)),
          (_ = M(r)),
          (v = M(r)),
          (T = M(c)),
          b(
            ((S = t(
              (C = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    n(t, "betLineView", S, s(t)),
                    n(t, "betLineItemPrefab", I, s(t)),
                    n(t, "toastView", w, s(t)),
                    n(t, "betLineLabel", D, s(t)),
                    n(t, "bet", A, s(t)),
                    n(t, "panel", k, s(t)),
                    n(t, "toggles", N, s(t)),
                    n(t, "betLineComponentText", x, s(t)),
                    (t.itemWidth = 160),
                    (t.itemHeight = 80),
                    (t.betData = null),
                    (t.allBetLineTypes = []),
                    (t.selectBetLineTypes = []),
                    (t.allBetLineNodes = []),
                    (t.fullBetLine = []),
                    (t.oddBetLine = []),
                    (t.evenBetLine = []),
                    (t.noneBetLine = []),
                    (t.maxBetLines = 25),
                    (t.tweenToast = void 0),
                    (t.renderedBetLines = !1),
                    t
                  );
                }
                i(t, e);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      this.node.on(
                        "UPDATE_BET_LINES",
                        this.updateBetLines,
                        this
                      ),
                      (this.betData = this.dataStore.betData);
                    for (var t = 1; t <= this.maxBetLines; t++) {
                      var i = t;
                      if ((this.fullBetLine.push(i), t % 2 == 0)) {
                        var n = t;
                        this.evenBetLine.push(n);
                      } else {
                        var s = t;
                        this.oddBetLine.push(s);
                      }
                    }
                    this._setDefaultBetLines();
                  }),
                  (o.start = function () {
                    this.renderedBetLines ||
                      ((this.renderedBetLines = !0), this._renderBetLines());
                  }),
                  (o.enter = function () {
                    this.onBetLineChangedByButton();
                  }),
                  (o._setDefaultBetLines = function () {
                    for (
                      var e = [], t = 0;
                      t < this.config.PAY_LINE_LENGTH;
                      t++
                    )
                      e.push(t + 1);
                    if (((e = e.join(",")), this.dataStore)) {
                      var i = B.getKeyWithGame(
                        this.config.GAME_ID,
                        this.config.BET_LINES_KEY,
                        e
                      );
                      i && i.length > 0
                        ? ((this.betData.betLines =
                            i.split(",").map(function (e) {
                              return Number(e);
                            }) || []),
                          this.betData.betLines.length &&
                            this.betData.betLines.find(function (e) {
                              return e > 25;
                            }) &&
                            ((this.betData.betLines = e
                              .split(",")
                              .map(function (e) {
                                return Number(e);
                              })),
                            B.setKeyWithGame(
                              this.config.GAME_ID,
                              this.config.BET_LINES_KEY,
                              e
                            )),
                          (this.allBetLineTypes = this.betData.betLines),
                          this.updateBetLines(this.betData.betLines))
                        : ((this.betData.betLines = []),
                          this.updateBetLines([]));
                    } else
                      this.allBetLineNodes = [].concat(
                        e.split(",").map(function (e) {
                          return Number(e);
                        })
                      );
                  }),
                  (o.updateBetLines = function (e) {
                    var t = this;
                    void 0 === e && (e = []),
                      this.renderedBetLines ||
                        ((this.renderedBetLines = !0),
                        this._renderBetLines(),
                        this._setDefaultBetLines()),
                      this.dataStore.isTrialMode ||
                        B.setKeyWithGame(
                          this.config.GAME_ID,
                          this.config.BET_LINES_KEY,
                          e.join(",")
                        ),
                      (this.selectBetLineTypes = [].concat(e)),
                      (this.betLineLabel.string = "" + e.length),
                      this.betLineView.children.forEach(function (i, n) {
                        var s = i.getComponent(t.betLineComponentText),
                          o = s && s.index && -1 !== e.indexOf(s.index);
                        s.setActiveButton(o);
                      }),
                      this.onBetLineChangedByButton();
                  }),
                  (o._renderBetLines = function () {
                    var e = this.maxBetLines / 5;
                    this.selectBetLineTypes = [].concat(this.allBetLineTypes);
                    for (var t = 1; t <= this.maxBetLines; t++) {
                      var i = u(this.betLineItemPrefab);
                      i.name = "BetLineButton_" + t;
                      var n = i.getComponent(this.betLineComponentText);
                      n.setActiveButton(!0), n.init(this), n.setIndex(t);
                      var s =
                          ((Math.floor(t - 1) % 5) - 2.5 + 0.5) *
                          this.itemWidth,
                        o =
                          (((Math.floor(t - 1) / 5) | 0) - e / 2 + 0.5) *
                          -this.itemHeight;
                      i.setPosition(s, o),
                        this.allBetLineNodes.push(i),
                        this.betLineView.addChild(i);
                    }
                  }),
                  (o._setStoreBetLines = function (e) {
                    this.dataStore &&
                      e &&
                      ((this.betData.betLines = [].concat(e)),
                      this.dataStore.isTrialMode ||
                        B.setKeyWithGame(
                          this.config.GAME_ID,
                          this.config.BET_LINES_KEY,
                          this.betData.betLines.join(",")
                        ));
                  }),
                  (o._getSelectedBetLines = function () {
                    var e = this,
                      t = [];
                    return (
                      this.betLineView.children.forEach(function (i, n) {
                        var s = i.getComponent(e.betLineComponentText);
                        s && s.index && s.isActive && t.push(s.index);
                      }),
                      t.sort(function (e, t) {
                        return e - t;
                      })
                    );
                  }),
                  (o.compareArr = function (e, t) {
                    var i = !0;
                    if (e.length === t.length) {
                      for (var n = 0; n < e.length; n++)
                        if (e[n] != t[n]) {
                          i = !1;
                          break;
                        }
                    } else i = !1;
                    return i;
                  }),
                  (o.onBetLineChangedByButton = function () {
                    if (this.toggles)
                      for (var e = 0; e < this.toggles.length; e++) {
                        var t = this.toggles[e];
                        t && t.isChecked && t.uncheck();
                      }
                    var i = this._getSelectedBetLines();
                    if (this.compareArr(i, this.fullBetLine)) {
                      var n = this.toggles[0];
                      n && n.check();
                    } else if (this.compareArr(i, this.evenBetLine)) {
                      var s = this.toggles[1];
                      s && s.check();
                    } else if (this.compareArr(i, this.oddBetLine)) {
                      var o = this.toggles[2];
                      o && o.check();
                    } else if (this.compareArr(i, this.noneBetLine)) {
                      var a = this.toggles[3];
                      a && a.check();
                    }
                  }),
                  (o.onSelectEvenPayLines = function () {
                    this.toggles[1].showCheckMark(!1),
                      this.soundPlayer.playSFXClick(),
                      this.allBetLineNodes.forEach(function (e, t) {
                        e.emit("SET_ACTIVE", t % 2 != 0);
                      }),
                      this.guiMgr.onIngameEvent(
                        g.BetLineEventClick,
                        "BET_LINE_EVEN_CLICK"
                      );
                  }),
                  (o.onSeletOddBetLines = function () {
                    this.toggles[2].showCheckMark(!1),
                      this.soundPlayer.playSFXClick(),
                      this.allBetLineNodes.forEach(function (e, t) {
                        e.emit("SET_ACTIVE", t % 2 == 0);
                      });
                  }),
                  (o.onCancelSelectBetLines = function () {
                    this.toggles[3].showCheckMark(!1),
                      this.soundPlayer.playSFXClick(),
                      this.allBetLineNodes.forEach(function (e) {
                        e.emit("SET_ACTIVE", !1);
                      });
                  }),
                  (o.onSelectAllBetLines = function () {
                    this.toggles[0].showCheckMark(!1),
                      this.soundPlayer.playSFXClick(),
                      this.allBetLineNodes.forEach(function (e) {
                        e.emit("SET_ACTIVE", !0);
                      }),
                      this.guiMgr.onIngameEvent(
                        g.BetLineAllClick,
                        "BET_LINE_ALL_CLICK"
                      );
                  }),
                  (o.onCheckBetLines = function () {
                    var e = this,
                      t = this._getSelectedBetLines();
                    if (!t.length)
                      return (
                        this.tweenToast && this.tweenToast.stop(),
                        void (this.tweenToast = L(this.toastView)
                          .call(function () {
                            e.fadeTo(e.toastView, 0.5, 255);
                          })
                          .delay(1)
                          .call(function () {
                            e.fadeTo(e.toastView, 0.5, 0);
                          })
                          .start())
                      );
                    this._setStoreBetLines(t),
                      (this.betLineLabel.string = "" + t.length),
                      this.bet &&
                        (this.bet.emit("UPDATE_BET", this.betData.betKey),
                        this.bet.emit(
                          "UPDATE_EXTRA_BET",
                          this.betData.extraBetKey
                        )),
                      this.exit();
                  }),
                  (o.show = function () {
                    e.prototype.show.call(this),
                      this.guiMgr.onIngameEvent(
                        g.OpenBetLinePanel,
                        "BET_LINE_OPEN"
                      );
                  }),
                  (o.exit = function () {
                    e.prototype.exit.call(this),
                      this.soundPlayer.playSFXClick(),
                      this.guiMgr.onIngameEvent(
                        g.CloseBetLinePanel,
                        "BET_LINE_CLOSE"
                      );
                  }),
                  t
                );
              })(f)).prototype,
              "betLineView",
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
            (I = t(C.prototype, "betLineItemPrefab", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = t(C.prototype, "toastView", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = t(C.prototype, "betLineLabel", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = t(C.prototype, "bet", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = t(C.prototype, "panel", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = t(C.prototype, "toggles", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (x = t(C.prototype, "betLineComponentText", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "BetLineButton9976";
              },
            })),
            (y = C))
          ) || y)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SelectWild9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameObject.ts",
    "./utils2.ts",
    "./gameCommonUtils.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, a, o, l, s, r, c, u, h, p, d, f, g, b, E, T, w;
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
            (l = t._decorator),
            (s = t.Node),
            (r = t.Label),
            (c = t.Button),
            (u = t.v3),
            (h = t.tween),
            (p = t.Vec3),
            (d = t.Toggle),
            (f = t.log);
        },
        function (t) {
          g = t.GameObject;
        },
        function (t) {
          (b = t.setOpacity), (E = t.formatWalletMoney);
        },
        function (t) {
          T = t.default;
        },
        function (t) {
          w = t.TutorialTriggerType;
        },
      ],
      execute: function () {
        var y, S, v, m, B, _, C, D, P, W, I, L, A, x, O, z, N, k, K, M, R;
        o._RF.push({}, "4d34dP3/FZFyownDuwmltBz", "SelectWild9976", void 0);
        var F = l.ccclass,
          G = l.property;
        t(
          "SelectWild9976",
          ((y = F("SelectWild9976")),
          (S = G(s)),
          (v = G(s)),
          (m = G(s)),
          (B = G(s)),
          (_ = G(s)),
          (C = G(s)),
          (D = G(s)),
          (P = G(s)),
          (W = G(r)),
          y(
            ((A = e(
              (L = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, o = new Array(n), l = 0;
                    l < n;
                    l++
                  )
                    o[l] = arguments[l];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    i(e, "wildButtons", A, a(e)),
                    i(e, "toggleWilds", x, a(e)),
                    i(e, "winline", O, a(e)),
                    i(e, "bet", z, a(e)),
                    i(e, "panel", N, a(e)),
                    i(e, "panelContent", k, a(e)),
                    i(e, "closePos", K, a(e)),
                    i(e, "blockInputs", M, a(e)),
                    i(e, "panelTotalBets", R, a(e)),
                    (e.gameDirector = void 0),
                    (e.betData = null),
                    (e.fadeSpeed = 0.5),
                    (e.isShowing = !1),
                    (e.canPlayBetSound = !0),
                    (e.panelTween = null),
                    e
                  );
                }
                n(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "UPDATE_EXTRA_BET",
                        this.updateExtraBet,
                        this
                      ),
                      this.node.on(
                        "UPDATE_TOTAL_BET",
                        this.showTotalBets,
                        this
                      ),
                      this.node.on("INIT", this.init, this),
                      this.node.on("SHOW_PANEL", this.enter, this),
                      this.node.on("HIDE_PANEL", this.exit, this),
                      this.node.on(
                        "ENABLE_SELECT_WILD",
                        this.enableSelectWild,
                        this
                      ),
                      (this.betData = this.dataStore.betData);
                    var e = T.getKeyWithGame(
                      this.config.GAME_ID,
                      this.config.EXTRA_BET_KEY,
                      this.dataStore.betData.extraBetKey
                    );
                    (this.betData.extraBetKey = e),
                      (this.node.active = !1),
                      (this.panel.active = !1);
                  }),
                  (o.init = function () {
                    this.showWinline(),
                      this.showTotalBets(),
                      (this.node.active = !0);
                  }),
                  (o.updateExtraBet = function () {
                    this.showWinline(), this.showTotalBets();
                  }),
                  (o.enableSelectWild = function (t) {
                    this.blockInputs && (this.blockInputs.active = !t),
                      this.wildButtons.forEach(function (e) {
                        e.getComponent(c).interactable = t;
                      });
                  }),
                  (o.onEnter = function () {
                    this.guiMgr.onIngameEvent(
                      w.OpenWildPanel,
                      "OPEN_WILD_PANEL"
                    ),
                      this.enter(0);
                  }),
                  (o.enter = function (t) {
                    var e = this;
                    void 0 === t && (t = 0),
                      this.soundPlayer.playSFXClick(),
                      (this.panel.active = !0),
                      this.setOpacity(this.panel, 255),
                      (this.panelContent.active = !0),
                      (this.panelContent.scale = u(0.1, 0.1, 0.1)),
                      this.panelTween && this.panelTween.stop(),
                      (this.panelTween = h(this.panelContent)
                        .call(function () {
                          (e.canPlayBetSound = !1), e.showSelectedToggle();
                        })
                        .parallel(
                          h().to(
                            this.fadeSpeed,
                            { scale: u(1, 1, 1) },
                            { easing: "quartIn" }
                          ),
                          h().call(function () {
                            e.fadeTo(e.panelContent, e.fadeSpeed, 255);
                          })
                        )
                        .call(function () {
                          e.guiMgr.onIngameEvent(w.SelectWild, "SELECT_WILD"),
                            (e.canPlayBetSound = !0),
                            (e.isShowing = !0);
                        })
                        .delay(t)
                        .call(function () {
                          t && e.exit();
                        })
                        .start());
                  }),
                  (o.exit = function () {
                    var t = this;
                    this.isShowing &&
                      ((this.isShowing = !1),
                      this.soundPlayer.playSFXClick(),
                      this.guiMgr.onIngameEvent(
                        w.CloseWildPanel,
                        "CLOSE_WILD_PANEL"
                      ),
                      h(this.panelContent)
                        .parallel(
                          h().to(
                            this.fadeSpeed,
                            { scale: u(0.1, 0.1, 0.1) },
                            { easing: "quartIn" }
                          ),
                          h().to(
                            this.fadeSpeed,
                            {
                              position: new p(
                                this.closePos.position.x,
                                this.closePos.position.y,
                                0
                              ),
                            },
                            { easing: "quartIn" }
                          ),
                          h().call(function () {
                            t.fadeTo(t.panelContent, t.fadeSpeed, 1);
                          })
                        )
                        .call(function () {
                          (t.panel.active = !1),
                            t.setOpacity(t.panel, 0),
                            t.panelContent &&
                              (b(t.panelContent, 1),
                              (t.panelContent.scale = u(0.1, 0.1, 0.1)),
                              t.panelContent.setPosition(0, 0),
                              (t.panelContent.active = !1)),
                            t.guiMgr.onIngameEvent(
                              w.SelectWIldClosed,
                              "SELECT_WILD_CLOSED"
                            );
                        })
                        .start());
                  }),
                  (o.showWinline = function () {
                    var t = Number(this.betData.extraBetKey) - 1;
                    if (void 0 !== t) {
                      var e;
                      switch (t) {
                        case 0:
                          e = new p(0, -80, 0);
                          break;
                        case 1:
                          e = p.ZERO;
                          break;
                        case 2:
                          e = new p(0, 80, 0);
                      }
                      this.winline.setPosition(e), (this.winline.active = !0);
                    }
                  }),
                  (o.showSelectedToggle = function () {
                    var t = Number(this.betData.extraBetKey) - 1,
                      e = this.toggleWilds[t];
                    e && (e.getComponent(d).isChecked = !0);
                  }),
                  (o.showTotalBets = function () {
                    var t = this.betData,
                      e = t.betLines,
                      n = t.extraBets,
                      i = t.maxBetLine,
                      a = t.denom;
                    if (e && n) {
                      var o = e.length ? e.length : i;
                      this.panelTotalBets.forEach(function (t, e) {
                        var i = a * n[e + 1] * o;
                        t.string = E(i);
                      });
                    }
                  }),
                  (o.onSelectWild = function (t, e) {
                    f(t, "event"),
                      this.soundPlayer.playSfx("BUTTON_BET"),
                      this.bet &&
                        (this.bet.emit("UPDATE_BET", this.betData.betKey),
                        this.bet.emit("UPDATE_EXTRA_BET", e)),
                      this.dataStore.isTrialMode ||
                        T.setKeyWithGame(
                          this.config.GAME_ID,
                          this.config.EXTRA_BET_KEY,
                          e
                        ),
                      this.showWinline();
                  }),
                  (o.isOpenPanel = function () {
                    return !0 === this.panel.active;
                  }),
                  e
                );
              })(g)).prototype,
              "wildButtons",
              [S],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (x = e(L.prototype, "toggleWilds", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (O = e(L.prototype, "winline", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(L.prototype, "bet", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(L.prototype, "panel", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = e(L.prototype, "panelContent", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = e(L.prototype, "closePos", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = e(L.prototype, "blockInputs", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(L.prototype, "panelTotalBets", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (I = L))
          ) || I)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetCellHistory9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotBetCellHistory.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var e, o, r, n, i, l, a, s, c, u;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (i = t.cclegacy), (l = t._decorator), (a = t.Node), (s = t.Label);
        },
        function (t) {
          c = t.SlotBetCellHistory;
        },
        function (t) {
          u = t.formatWalletMoney;
        },
      ],
      execute: function () {
        var p, y, f, D, b;
        i._RF.push(
          {},
          "a55e0cLnD1L24IqDgVdBAC1",
          "SlotBetCellHistory9976",
          void 0
        );
        var d = l.ccclass,
          h = l.property;
        t(
          "SlotBetCellHistory9976",
          ((p = d("SlotBetCellHistory9976")),
          (y = h({ type: a })),
          p(
            ((b = e(
              (D = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, i = new Array(o), l = 0;
                    l < o;
                    l++
                  )
                    i[l] = arguments[l];
                  return (
                    (e = t.call.apply(t, [this].concat(i)) || this),
                    r(e, "betDenom", b, n(e)),
                    e
                  );
                }
                return (
                  o(e, t),
                  (e.prototype.updateData = function (e, o) {
                    e &&
                      ((this.betDenom.getComponent(s).string = u(
                        parseInt(e.betDenom)
                      )),
                      t.prototype.updateData.call(this, e, o));
                  }),
                  e
                );
              })(c)).prototype,
              "betDenom",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (f = D))
          ) || f)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetHistoryDetail9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotBetHistoryDetail.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, s, r, a, l, h, c, m, u, g, d, p, f, v, C, B;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (r = t._decorator),
            (a = t.Prefab),
            (l = t.Label),
            (h = t.Node),
            (c = t.Event),
            (m = t.Button),
            (u = t.v2),
            (g = t.NodePool),
            (d = t.instantiate),
            (p = t.UITransform),
            (f = t.Vec2),
            (v = t.Color);
        },
        function (t) {
          C = t.SlotBetHistoryDetail;
        },
        function (t) {
          B = t.formatMoney;
        },
      ],
      execute: function () {
        var w, L, P, y, I, b, D, V, E;
        s._RF.push(
          {},
          "75df5GNyZVKqZsJBxAELpjL",
          "SlotBetHistoryDetail9976",
          void 0
        );
        var M = r.ccclass,
          S = r.property;
        t(
          "SlotBetHistoryDetail9976",
          ((w = M("SlotBetHistoryDetail9976")),
          (L = S({ type: a })),
          (P = S({ type: l })),
          (y = S({ type: h })),
          w(
            ((D = e(
              (b = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    n(e, "scrollItem", D, o(e)),
                    n(e, "title", V, o(e)),
                    n(e, "betLine", E, o(e)),
                    (e.currentPage = -2),
                    (e.maxItem = 3),
                    (e.nameBetHistoryScrollItem = "BetHistoryScrollItem"),
                    (e.modeItem = void 0),
                    (e.hasFreespinOption = !1),
                    (e.timeCount = []),
                    (e.normalName = "Normal"),
                    (e.summaryData = void 0),
                    (e.scrollList = []),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    this.node.on("GET_GAME_MODEL", this.getGameModel, this),
                      this.node.mainDirector ||
                        this.node.dispatchEvent(new c("GET_GAME_MODEL", !0)),
                      this.node.on("SHOW_BET_DETAIL", this.showBetDetail, this),
                      this.node.on("RESET_UI", this.resetUI, this),
                      this.node.on(
                        "UPDATE_GAME_DETAIL",
                        this.updateGameDetail,
                        this
                      ),
                      this.node.on(
                        "ON_SCROLL_CLICK",
                        this.onScrollClick.bind(this)
                      ),
                      this.prevModeBtn &&
                        ((this.prevModeBtn.active = !0),
                        (this.prevModeBtn.getComponent(m).interactable = !1)),
                      this.nextModeBtn &&
                        ((this.nextModeBtn.active = !0),
                        (this.nextModeBtn.getComponent(m).interactable = !1)),
                      this.scrollView && this.scrollView.scrollTo(u(0, 0), 0),
                      this.title && (this.title.string = "");
                  }),
                  (s.onScrollClick = function (t) {
                    t.propagationStopped = !0;
                    var e = t.details.index;
                    e != this.currentPage &&
                      (this.removeHighlight(this.currentPage),
                      (this.currentPage = e),
                      this.title && (this.title.string = ""),
                      e >= 0
                        ? this.requestDetail(e)
                        : -1 === e
                        ? (this.updateScroller(), this.renderBetLinePage())
                        : this.requestDetail(-2),
                      this.highlightButton(this.currentPage));
                  }),
                  (s.start = function () {
                    this.modeItem = new g();
                    for (var t = 0; t < 10; t++)
                      this.modeItem.put(d(this.scrollItem));
                  }),
                  (s.getModeItem = function () {
                    var t = this.modeItem.get();
                    return t || (t = d(this.scrollItem)), t;
                  }),
                  (s.onRequestResponse = function (t) {
                    if (
                      (this.loading && (this.loading.active = !1),
                      t.error || !t.data || t.data.resultList.length <= 0)
                    )
                      this.noBetDetail && (this.noBetDetail.active = !0);
                    else {
                      if (
                        (this.noBetDetail && (this.noBetDetail.active = !1),
                        t.data && t.data.resultList)
                      ) {
                        this.isGetMode || this.getModeIndex(t.data.scroll),
                          (this.nextModeBtn.getComponent(m).interactable = !0),
                          (this.prevModeBtn.getComponent(m).interactable = !0),
                          t.data.total <= this.currentPage + 1 &&
                            (this.nextModeBtn.getComponent(m).interactable =
                              !1);
                        var e = t.data.resultList[0];
                        switch ((this.hideAllView(), e.mode)) {
                          case "normal":
                            (this.normalGameView.active = !0),
                              (this.normalGameData = e),
                              this.updateTitle(t.data.resultList[0]),
                              this.normalGameView &&
                                this.normalGameView.emit(
                                  "UPDATE_DETAIL_VIEW",
                                  e
                                );
                            break;
                          case "free":
                            (this.freeGameView.active = !0),
                              this.updateTitle(
                                t.data.resultList[0],
                                this.currentPage
                              ),
                              (this.freeGameData[this.currentFreeGamePage] = e),
                              this.freeGameView &&
                                this.freeGameView.emit(
                                  "UPDATE_DETAIL_VIEW",
                                  e,
                                  this.freeIndexes
                                );
                            break;
                          case "jackpot":
                            (this.jackpotView.active = !0),
                              this.updateTitle(t.data.resultList[0]),
                              (this.jackpotData[this.currentJackpotPage] = e),
                              this.jackpotView &&
                                this.jackpotView.emit(
                                  "UPDATE_DETAIL_VIEW",
                                  e,
                                  this.jackpotIndexes
                                );
                            break;
                          default:
                            (this.prevModeBtn.getComponent(m).interactable =
                              !1),
                              (this.nextModeBtn.getComponent(m).interactable =
                                !0),
                              (this.summaryView.active = !0),
                              this.title && (this.title.string = ""),
                              this.summaryView.emit("UPDATE_SUMMARY", e),
                              (this.summaryData = e);
                        }
                        this.updateScroller();
                      }
                      this.prevModeBtn.getComponent(m).interactable =
                        this.currentPage > -2;
                    }
                  }),
                  (s.getModeIndex = function (t) {
                    var e = this;
                    this.isGetMode = !0;
                    this.cleanScrollList(),
                      this.addButtonTotalPage(),
                      this.addButtonBetLine();
                    var i = 0;
                    t.forEach(function (t, n) {
                      var o = t.split(":"),
                        s = parseInt(o[0]),
                        r = o[1];
                      e.scrollList.push(r);
                      var a = "" != r ? 1 : e.timeCount[n - 1] + 1;
                      switch (((e.timeCount[n] = a), r)) {
                        case "normal":
                          r = "Normal";
                          break;
                        case "free":
                          r = "Free" + ++i;
                          break;
                        case "bonus":
                          r = "Bonus" + e.timeCount[n];
                      }
                      if ("free_option" == r) i = 0;
                      else {
                        var h = null,
                          c = e.getModeItem();
                        (c.parent = e.scrollContent),
                          (h = c.getComponent(l)
                            ? c.getComponent(l)
                            : c.getChildByName("Label").getComponent(l)) &&
                            (h.string = r),
                          c
                            .getComponent(e.nameBetHistoryScrollItem)
                            .setIndex(s);
                      }
                      e.highlightButton(e.currentPage);
                    }),
                      (this.scrollView.enabled = t && 1 !== t.length);
                  }),
                  (s.onPrevMode = function () {
                    this.removeHighlight(this.currentPage),
                      (this.currentPage = this.currentPage - 1),
                      this.highlightButton(this.currentPage),
                      "free_option" == this.scrollList[this.currentPage] &&
                        (this.currentPage -= 1),
                      this.soundPlayer && this.soundPlayer.playSFXClick(),
                      -1 === this.currentPage
                        ? (this.updateScroller(), this.renderBetLinePage())
                        : this.requestDetail(this.currentPage);
                  }),
                  (s.updateScroller = function () {
                    if (!(this.scrollContent.children.length <= 3)) {
                      var t = this.scrollView.getScrollOffset().x;
                      if (
                        this.currentPage >= -1 &&
                        this.currentPage + 3 <=
                          this.scrollContent.children.length
                      ) {
                        var e =
                            this.scrollContent.children[0].getComponent(
                              p
                            ).width,
                          i = (this.currentPage + 1.5) * e,
                          n = i - e / 2;
                        i + t - e / 2 < 0 || (n = (this.currentPage + 1) * e),
                          this.scrollView.scrollToOffset(new f(n, 0));
                      }
                    }
                  }),
                  (s.onNextMode = function () {
                    this.removeHighlight(this.currentPage),
                      (this.currentPage += 1),
                      this.highlightButton(this.currentPage),
                      "free_option" == this.scrollList[this.currentPage] &&
                        (this.currentPage += 1),
                      -1 === this.currentPage
                        ? this.renderBetLinePage()
                        : this.requestDetail(this.currentPage),
                      this.soundPlayer && this.soundPlayer.playSFXClick();
                  }),
                  (s.addButtonBetLine = function () {
                    var t = this.getModeItem();
                    t.parent = this.scrollContent;
                    var e = null;
                    t.getComponent(this.nameBetHistoryScrollItem).setIndex(-1),
                      (e = t.getComponent(l)
                        ? t.getComponent(l)
                        : t.getChildByName("Label").getComponent(l)) &&
                        (e.string = "Line");
                  }),
                  (s.renderBetLinePage = function () {
                    this.loading && (this.loading.active = !1),
                      this.title && (this.title.string = "Dòng cược đã mua"),
                      (this.prevModeBtn.getComponent(m).interactable = !0),
                      (this.nextModeBtn.getComponent(m).interactable = !0),
                      this.hideAllView(),
                      this.betLine &&
                        ((this.betLine.active = !0),
                        this.betLine.emit(
                          "SHOW_BET_LINE",
                          this.summaryData.bettingLinesDetail
                        ));
                  }),
                  (s.cleanScrollList = function () {
                    for (
                      this.scrollContent.children.forEach(function (t) {
                        t.getComponent(l).color = new v(255, 255, 255, 255);
                      });
                      this.scrollContent.children.length > 0;

                    )
                      this.modeItem.put(this.scrollContent.children[0]);
                  }),
                  (s.addButtonTotalPage = function () {
                    var t = d(this.scrollItem),
                      e = null;
                    t.getComponent(this.nameBetHistoryScrollItem).setIndex(-2),
                      (t.parent = this.scrollContent),
                      (e = t.getComponent(l)
                        ? t.getComponent(l)
                        : t.getChildByName("Label").getComponent(l)) &&
                        (e.string = "Tổng kết");
                  }),
                  (s.removeHighlight = function (t) {
                    var e = this.scrollContent.children[t + 2];
                    e &&
                      e.getComponent(l) &&
                      (e.getComponent(l).color = new v(255, 255, 255, 255));
                  }),
                  (s.highlightButton = function (t) {
                    (this.scrollContent.children[t + 2].getComponent(l).color =
                      new v(255, 255, 0, 255)),
                      (this.currentPage = t);
                  }),
                  (s.updateTitle = function (t, e) {
                    var i = this.title.string;
                    t &&
                      (t.mode && "normal" === t.mode
                        ? (i = this.normalName)
                        : "free" === t.mode &&
                          ((i = "Free" + e),
                          t.winAmount && (i += ": " + B(t.winAmount))),
                      t.mode || (i = t)),
                      (this.title.string = i);
                  }),
                  (s.hideAllView = function () {
                    this.summaryView && (this.summaryView.active = !1),
                      this.normalGameView && (this.normalGameView.active = !1),
                      this.freeGameView && (this.freeGameView.active = !1),
                      this.betLine && (this.betLine.active = !1);
                  }),
                  (s.resetUI = function () {
                    this.scrollContent.children.forEach(function (t, e) {
                      t.getComponent(l) &&
                        (t.getComponent(l).color = new v(
                          255,
                          255,
                          0 === e ? 0 : 255,
                          255
                        ));
                    }),
                      this.resetData(),
                      (this.currentPage = -2),
                      (this.title.string = ""),
                      this.scrollView.scrollTo(u(0, 0), 0),
                      (this.currentOffset = this.scrollView.getScrollOffset()),
                      this.hideGameMode(),
                      this.hideAllView(),
                      this.summaryView && this.summaryView.emit("RESET_ALL"),
                      this.normalGameView &&
                        this.normalGameView.emit("RESET_ALL"),
                      this.freeGameView && this.freeGameView.emit("RESET_ALL"),
                      this.summaryView && (this.summaryView.active = !0);
                  }),
                  e
                );
              })(C)).prototype,
              "scrollItem",
              [L],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (V = e(b.prototype, "title", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (E = e(b.prototype, "betLine", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (I = b))
          ) || I)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetTableHistory9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotBaseTableHistory.ts"],
  function (t) {
    "use strict";
    var e, o, r, s;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (r = t._decorator);
        },
        function (t) {
          s = t.SlotBaseTableHistory;
        },
      ],
      execute: function () {
        var i;
        o._RF.push(
          {},
          "938244J0cNAyKQprX1Cc2n7",
          "SlotBetTableHistory9976",
          void 0
        );
        var c = r.ccclass;
        t(
          "SlotBetTableHistory9976",
          c("SlotBetTableHistory9976")(
            (i = (function (t) {
              function o() {
                return t.apply(this, arguments) || this;
              }
              return e(o, t), o;
            })(s))
          ) || i
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetTableHistoryDetai9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotBetTableHistoryDetail.ts",
    "./utils2.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var e, i, a, s, n, o, l, r, h, c, u;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (a = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy), (o = t._decorator), (l = t.Node), (r = t.sp);
        },
        function (t) {
          h = t.SlotBetTableHistoryDetail;
        },
        function (t) {
          c = t.setOpacity;
        },
        function (t) {
          u = t.SlotGameMode;
        },
      ],
      execute: function () {
        var g, y, p, d, f;
        n._RF.push(
          {},
          "44f4fgSYG1CoZnc0R+yfGFL",
          "SlotBetTableHistoryDetai9976",
          void 0
        );
        var m = o.ccclass,
          b = o.property;
        t(
          "SlotBetTableHistoryDetai9976",
          ((g = m("SlotBetTableHistoryDetai9976")),
          (y = b(l)),
          g(
            ((f = e(
              (d = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, n = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    n[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(n)) || this),
                    a(e, "bigWilds", f, s(e)),
                    (e.isScatterPayline = null),
                    e
                  );
                }
                i(e, t);
                var n = e.prototype;
                return (
                  (n.updateDetailView = function (t, e) {
                    (this.data = t),
                      (this.pages = e),
                      this.clearTable(),
                      this.updateTotalWinAmount(t),
                      e &&
                        e.length > 1 &&
                        (this.sceneType === u.FreeGame
                          ? this.nextPageBtn &&
                            (this.nextPageBtn.active =
                              this.currentFreeGamePage < e.length - 1)
                          : this.sceneType === u.JackpotGame
                          ? this.nextPageBtn &&
                            (this.nextPageBtn.active =
                              this.currentJackpotPage < e.length - 1)
                          : this.sceneType === u.BonusGame
                          ? this.nextPageBtn &&
                            (this.nextPageBtn.active =
                              this.currentBonusGamePage < e.length - 1)
                          : this.sceneType === u.TopUpGame &&
                            this.nextPageBtn &&
                            (this.nextPageBtn.active =
                              this.currentTopUpGamePage < e.length - 1)),
                      this.renderTable(
                        t.matrixResult,
                        t.matrixFormat,
                        t.multiplier
                      );
                  }),
                  (n.updateTotalWinAmount = function (t) {}),
                  (n.renderTable = function (t, e, i) {
                    if (
                      (this.bigWilds.forEach(function (t) {
                        t.active = !1;
                      }),
                      t)
                    ) {
                      this.dimBackground && (this.dimBackground.active = !1);
                      var a =
                          this.sceneType === u.FreeGame &&
                          this.config.SYMBOL_WIDTH_FREE_GAME
                            ? this.config.SYMBOL_WIDTH_FREE_GAME
                            : this.config.SYMBOL_WIDTH,
                        s =
                          this.sceneType === u.FreeGame &&
                          this.config.SYMBOL_HEIGHT_FREE_GAME
                            ? this.config.SYMBOL_HEIGHT_FREE_GAME
                            : this.config.SYMBOL_HEIGHT;
                      (a = this.customSymbolWidth || a),
                        (s = this.customSymbolHeight || s);
                      var n = (-e.length / 2 + 0.5) * a,
                        o = 0,
                        l = "1";
                      switch ((i = i || 1)) {
                        case 1:
                          l = "1";
                          break;
                        case 3:
                          l = "2";
                          break;
                        case 8:
                          l = "3";
                      }
                      for (var h = 0; h < e.length; h++) {
                        this.symbols[h] = [];
                        for (
                          var g = (e[h] / 2 - 0.5) * s, y = 0;
                          y < e[h];
                          y++
                        ) {
                          var p = this.getSymbol();
                          (p.parent = this.slotTable),
                            p.setPosition(n + h * a, g - y * s),
                            p.emit(
                              "INIT_FOR_PAYLINE",
                              this.enableHighlightHolder,
                              null,
                              !1
                            ),
                            (p.col = h),
                            (p.row = y);
                          var d = t[o];
                          if (
                            (("" !== (d = "K" === d ? d + l : d) &&
                              d !== t[o]) ||
                              p.emit("CHANGE_TO_SYMBOL", d),
                            "K" == t[o] && h >= 1 && h <= 3 && p)
                          ) {
                            (d = "K"),
                              (p.isHidden = !0),
                              c(p, 1),
                              (this.bigWilds[h - 1].active = !0);
                            var f = this.bigWilds[h - 1].getComponent(
                              r.Skeleton
                            );
                            "1" === l && f.setAnimation(0, "Idle Copper", !0),
                              "2" === l && f.setAnimation(0, "Idle Silver", !0),
                              "3" === l && f.setAnimation(0, "Idle Gold", !0);
                          }
                          (p.symbolName = t[o]), (this.symbols[h][y] = p), o++;
                        }
                      }
                      this.showPaylines();
                    }
                  }),
                  (n.showPaylines = function () {
                    if (
                      ((this.isScatterPayline =
                        this.data.matrixResult.filter(function (t) {
                          return "A" === t;
                        }).length >= 3),
                      (this.hasPayline &&
                        this.data.paylines &&
                        this.data.paylines.length &&
                        "[]" !== this.data.paylines) ||
                        this.data.latestWinJackpotInfo ||
                        this.isScatterPayline)
                    ) {
                      var t = this.dataStore.convertPayLine(this.data.paylines);
                      this.showTablePaylines(t);
                    } else
                      this.dimBackground && (this.dimBackground.active = !1);
                  }),
                  (n.showTablePaylines = function (t) {
                    var e = this;
                    ((t && 0 != t.length) ||
                      this.data.latestWinJackpotInfo ||
                      this.isScatterPayline) &&
                      (this.disableHighlight(),
                      t &&
                        t.forEach(function (t) {
                          e.showNextPayline(t);
                        }),
                      (this.data.latestWinJackpotInfo ||
                        this.isScatterPayline) &&
                        this.showNextSpecialPayline());
                  }),
                  (n.showNextSpecialPayline = function () {
                    var t = this;
                    this.slotTable.children.forEach(function (e) {
                      var i = t.data.latestWinJackpotInfo
                          ? "JP" === e.symbolName
                          : null,
                        a = t.isScatterPayline ? "A" === e.symbolName : null;
                      (i || a) && t.showSymbolHightlight(e);
                    });
                  }),
                  e
                );
              })(h)).prototype,
              "bigWilds",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (p = d))
          ) || p)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotButton9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotButton.ts"],
  function (t) {
    "use strict";
    var o, i, n, s;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (n = t._decorator);
        },
        function (t) {
          s = t.SlotButton;
        },
      ],
      execute: function () {
        var l;
        i._RF.push({}, "f971bdXOodMR57VWuBovSZX", "SlotButton9976", void 0);
        var u = n.ccclass;
        n.property,
          t(
            "SlotButton9976",
            u("SlotButton9976")(
              (l = (function (t) {
                function i() {
                  return t.apply(this, arguments) || this;
                }
                o(i, t);
                var n = i.prototype;
                return (
                  (n.spinClick = function () {
                    t.prototype.spinClick.call(this),
                      this.soundPlayer.playSFXClick();
                  }),
                  (n.fastToResultClick = function () {
                    t.prototype.fastToResultClick.call(this),
                      this.soundPlayer.playSFXClick();
                  }),
                  (n.stopAutoSpinClick = function () {
                    t.prototype.stopAutoSpinClick.call(this),
                      this.soundPlayer.playSFXClick();
                  }),
                  (n.runAutoSpin = function (o, i) {
                    void 0 === i && (i = 99999),
                      this.hideSpinButtons(),
                      t.prototype.runAutoSpin.call(this, o, i);
                  }),
                  (n.disableFastToResult = function () {
                    this.isAutoSpin ||
                      t.prototype.disableFastToResult.call(this);
                  }),
                  i
                );
              })(s))
            ) || l
          );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotReel9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotReel.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var o, s, i, e, n, l, h;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (s = t.cclegacy), (i = t._decorator), (e = t.Vec3), (n = t.log);
        },
        function (t) {
          l = t.SlotReel;
        },
        function (t) {
          h = t.SlotGameMode;
        },
      ],
      execute: function () {
        var r;
        s._RF.push({}, "47aa1Vb3cBPS7FguXmf2wZb", "SlotReel9976", void 0);
        var a = i.ccclass;
        t(
          "SlotReel9976",
          a("SlotReel9976")(
            (r = (function (t) {
              function s() {
                for (
                  var o, s = arguments.length, i = new Array(s), e = 0;
                  e < s;
                  e++
                )
                  i[e] = arguments[e];
                return (
                  ((o = t.call.apply(t, [this].concat(i)) || this).dataStore =
                    null),
                  o
                );
              }
              o(s, t);
              var i = s.prototype;
              return (
                (i.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    this.node.on("SET_DATASTORE", this.setDatastore, this);
                }),
                (i.setDatastore = function (t) {
                  this.dataStore = t;
                }),
                (i.circulateSymbols = function () {
                  for (
                    var t = this.config.TABLE_BUFFER;
                    this.totalScrolling >= this.symbolHeight;

                  ) {
                    var o = this.symbols[this.currentIndex],
                      s = o.position.y;
                    (s += this.symbolHeight * this.totalSymbols),
                      o.setPosition(new e(o.position.x, s, 0)),
                      (this.currentIndex =
                        (this.currentIndex + 1) % this.symbols.length),
                      (this.totalScrolling =
                        this.totalScrolling - this.symbolHeight);
                    var i = this.getRandomSymbolName();
                    if (
                      ("K" === i && (i = this.changeWildSymbol()),
                      this.isShowingResult)
                    ) {
                      this.rollingCount++;
                      var n = this.showNumber + t.TOP - 1,
                        l = this.reelConfig.TOTAL_CIRCULAR - n;
                      this.rollingCount >= l &&
                      this.rollingCount < l + this.showNumber
                        ? ("K" === (i = this.result[this.stop]) &&
                            (i = this.changeWildSymbol()),
                          this.showRealSymbols(o, i),
                          this.stop++)
                        : this.showFakeSymbols(o, i);
                    } else this.showFakeSymbols(o, i);
                  }
                }),
                (i.reset = function () {
                  var t = this.config.TABLE_BUFFER;
                  this.node.setPosition(this.node.position.x, 0),
                    this.symbols.sort(function (t, o) {
                      return t.position.y - o.position.y;
                    });
                  var o = 0;
                  this.showSymbols = [];
                  for (var s = 0; s < this.symbols.length; s++) {
                    var i = this.symbols[s];
                    if (i)
                      if (
                        (i.setPosition(
                          new e(i.position.x, this.symbolPos[s], 0)
                        ),
                        s >= t.BOT && s < this.symbols.length - t.TOP)
                      ) {
                        this.showSymbols.unshift(i);
                        var n = this.result[o];
                        "K" === n && (n = this.changeWildSymbol()),
                          i.emit("CHANGE_TO_SYMBOL", n),
                          o++;
                      } else i.emit("CHANGE_TO_SYMBOL", i.symbol);
                  }
                  this.currentIndex = 0;
                }),
                (i.showFakeSymbols = function (t, o) {
                  0 === this.reelIndex &&
                    this.isFastToResult &&
                    n("Show Blur Fake Symbol: " + o);
                  var s =
                    this.dataStore.currentGameMode === h.FreeGame && "A" === o
                      ? this.getRandomSymbolNameWithExceptions("A")
                      : o;
                  t.emit("CHANGE_TO_BLUR_SYMBOL", s);
                }),
                (i.updateSymbols = function (t) {
                  var o = this;
                  this.showSymbols.forEach(function (s, i) {
                    var e = t[i];
                    "K" === e && (e = o.changeWildSymbol()),
                      s.emit("CHANGE_TO_SYMBOL", e);
                  });
                }),
                (i.getRandomSymbolName = function () {
                  var t =
                    this.symbolList[
                      Math.floor(Math.random() * this.symbolList.length)
                    ];
                  return "K" === t && (t = this.changeWildSymbol()), t;
                }),
                (i.changeWildSymbol = function () {
                  var t = Number(this.dataStore.betData.extraBetKey),
                    o = "K1";
                  return 3 === t ? (o = "K3") : 2 === t && (o = "K2"), o;
                }),
                (i.testResult = function () {}),
                s
              );
            })(l))
          ) || r
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSoundPlayer9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotSoundPlayer.ts"],
  function (t) {
    "use strict";
    var o, e, n, r;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (n = t._decorator);
        },
        function (t) {
          r = t.SlotSoundPlayer;
        },
      ],
      execute: function () {
        var u;
        e._RF.push(
          {},
          "ee0beDgTddB37OAkjz33cHi",
          "SlotSoundPlayer9976",
          void 0
        );
        var l = n.ccclass;
        t(
          "SlotSoundPlayer9976",
          l("SlotSoundPlayer9976")(
            (u = (function (t) {
              function e() {
                return t.apply(this, arguments) || this;
              }
              return (
                o(e, t),
                (e.prototype.playSFXTrialButton = function () {
                  this.playSfx("TRIAL_CLICK");
                }),
                e
              );
            })(r))
          ) || u
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/slotsymbol9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotSymbol.ts"],
  function (t) {
    "use strict";
    var o, s, e, n;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (s = t.cclegacy), (e = t._decorator);
        },
        function (t) {
          n = t.SlotSymbol;
        },
      ],
      execute: function () {
        var c;
        s._RF.push({}, "2c9faCieWRM7INdLh+3EG2c", "slotsymbol9976", void 0);
        var l = e.ccclass;
        t(
          "Slotsymbol9976",
          l("Slotsymbol9976")(
            (c = (function (t) {
              function s() {
                return t.apply(this, arguments) || this;
              }
              return (
                o(s, t),
                (s.prototype.reset = function () {
                  (this.node.isHidden = !1), t.prototype.reset.call(this);
                }),
                s
              );
            })(n))
          ) || c
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSymbolPayline9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotSymbolPayline.ts"],
  function (i) {
    "use strict";
    var t, n, o, e;
    return {
      setters: [
        function (i) {
          t = i.inheritsLoose;
        },
        function (i) {
          (n = i.cclegacy), (o = i._decorator);
        },
        function (i) {
          e = i.SlotSymbolPayline;
        },
      ],
      execute: function () {
        var s;
        n._RF.push(
          {},
          "0fd15fu/7NPZYDDj5rW3uGs",
          "SlotSymbolPayline9976",
          void 0
        );
        var l = o.ccclass;
        o.property,
          i(
            "SlotSymbolPayline9976",
            l("SlotSymbolPayline9976")(
              (s = (function (i) {
                function n() {
                  return i.apply(this, arguments) || this;
                }
                return (
                  t(n, i),
                  (n.prototype.init = function (i, t, n) {
                    (this._isPlaying = !1),
                      (this._havingAnim = !!t),
                      (this._disableHighlightHolder = n),
                      (this.spineNode.active = !0),
                      (this._symbolName = i),
                      this._animation &&
                        this._havingAnim &&
                        (this._animation.skeletonData = t),
                      (this.spineNode.active = !1);
                  }),
                  n
                );
              })(e))
            ) || s
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTable9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotTable.ts"],
  function (t) {
    "use strict";
    var e, r, i, a;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (r = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          a = t.SlotTable;
        },
      ],
      execute: function () {
        var s;
        r._RF.push({}, "8c954jTll5JfbfN8FddJsem", "SlotTable9976", void 0);
        var o = i.ccclass;
        t(
          "SlotTable9976",
          o("SlotTable9976")(
            (s = (function (t) {
              function r() {
                return t.apply(this, arguments) || this;
              }
              e(r, t);
              var i = r.prototype;
              return (
                (i.init = function () {
                  t.prototype.init.call(this);
                  for (var e = 0; e < this.reels.length; e++)
                    this.reels[e].emit("SET_DATASTORE", this.dataStore);
                }),
                (i.changeMatrix = function (t) {
                  var e = t.matrix;
                  if (e) {
                    this.matrix = e;
                    for (var r = 0; r < this.tableFormat.length; ++r) {
                      this.reels[r].emit("UPDATE_SYMBOLS", this.matrix[r]);
                      for (
                        var i = this.node.reels[r].getShowSymbols(), a = 0;
                        a < this.tableFormat[r];
                        ++a
                      ) {
                        var s = this.matrix[r][a];
                        "K" === s && (s = this.changeWildSymbol()),
                          i && i[a].emit("CHANGE_TO_SYMBOL", s);
                      }
                    }
                  } else this.randomMatrix();
                }),
                (i.changeWildSymbol = function () {
                  var t;
                  switch (Number(this.dataStore.betData.extraBetKey)) {
                    case 1:
                      t = "K1";
                      break;
                    case 2:
                      t = "K2";
                      break;
                    case 3:
                      t = "K3";
                  }
                  return t;
                }),
                r
              );
            })(a))
          ) || s
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableNearWinEffect9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotTableNearWinEffect.ts"],
  function (t) {
    "use strict";
    var i, e, n, a;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (n = t._decorator);
        },
        function (t) {
          a = t.SlotTableNearWinEffect;
        },
      ],
      execute: function () {
        var r;
        e._RF.push(
          {},
          "7dc656ZQqlCvJ4gnTRAYPXv",
          "SlotTableNearWinEffect9976",
          void 0
        );
        var s = n.ccclass;
        n.property,
          t(
            "SlotTableNearWinEffect9976",
            s("SlotTableNearWinEffect9976")(
              (r = (function (t) {
                function e() {
                  for (
                    var i, e = arguments.length, n = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    n[a] = arguments[a];
                  return (
                    ((i =
                      t.call.apply(t, [this].concat(n)) || this).wildSymbol =
                      "K"),
                    (i.scatterColumns = void 0),
                    (i.countScatter = void 0),
                    (i.payLineMatrixForCompare = void 0),
                    i
                  );
                }
                i(e, t);
                var n = e.prototype;
                return (
                  (n.onLoad = function () {
                    var i = this;
                    t.prototype.onLoad.call(this),
                      (this.scatterColumns = [1, 3, 5]),
                      (this.countScatter = { 1: !1, 3: !1, 5: !1 });
                    var e = this.config.PAY_LINE_MATRIX;
                    (this.payLineMatrixForCompare = []),
                      e &&
                        Object.keys(e).forEach(function (t) {
                          i.payLineMatrixForCompare.push(
                            e[t].join().slice(0, -2)
                          );
                        });
                  }),
                  (n.reset = function () {
                    t.prototype.reset.call(this),
                      (this.scatterColumns = [1, 3, 5]),
                      (this.countScatter = { 1: !1, 3: !1, 5: !1 });
                  }),
                  (n.adjustReelDelay = function (t) {
                    var i = t.reels,
                      e = t.matrix,
                      n = this.node.tableFormat,
                      a = 0,
                      r = 0,
                      s = "",
                      o = !1;
                    this.nearWinList = [];
                    var c = this.dataStore.betData.betLines,
                      l =
                        this.dataStore &&
                        this.dataStore.modeTurbo &&
                        this.isSkipNearWinTurbo;
                    if (!l)
                      for (var h = 0; h < e.length; h++) {
                        for (
                          var u = !1,
                            S = r >= 2 && 3 === h && !l,
                            W = a >= this.startAtJackpotCount && !l,
                            f = S,
                            p = -1,
                            m = 0;
                          m < e[h].length;
                          ++m
                        ) {
                          var N = e[h][m];
                          N === this.scatterSymbol
                            ? ((u = !0),
                              this.createPaylineSymbol(n[h], N, h, m))
                            : N === this.jackpotSymbol
                            ? (this.createPaylineSymbol(n[h], N, h, m),
                              a++,
                              (p = m))
                            : N === this.wildSymbol && r++;
                        }
                        if (
                          (h !== e.length - 1 && (s += (h > 0 ? "," : "") + p),
                          c && c.length)
                        ) {
                          for (var d = !1, y = 0; y < c.length; y++)
                            d ||
                              (d =
                                this.payLineMatrixForCompare[c[y] - 1] === s);
                          W = h === e.length - 1 && a >= 4 && d;
                        }
                        (f = f || W),
                          (o = o || f) &&
                            ((this.nearWinList[h] = {
                              isNearWinWild: S,
                              isNearWinJackpot: W,
                              isNearWin: f,
                            }),
                            i[h].emit("EXTEND_TIME_STOP", f)),
                          u &&
                            this.scatterColumns.includes(h + 1) &&
                            this._checkValidScatterColumn(h + 1) &&
                            ((this.countScatter[h + 1] = !0),
                            this.nearWinList[h + 1]
                              ? (this.nearWinList[h + 1].isNearWinScatter = !0)
                              : (this.nearWinList[h + 1] = {
                                  isNearWinScatter: !0,
                                }));
                      }
                  }),
                  (n.reelStopNearWin = function (t) {
                    var i = t.count,
                      e = t.context;
                    this.hideAnimNearWin(),
                      e.isFastToResult ||
                        this.runAnimationNearWin(this.jackpotSymbol, i),
                      this.nearWinList[i] &&
                        this.nearWinList[i].isNearWinScatter &&
                        !e.isFastToResult &&
                        this.runAnimationNearWin(this.scatterSymbol, i);
                    var n = this.node.reels;
                    if (
                      this.nearWinList[i] &&
                      this.nearWinList[i].isNearWin &&
                      !e.isFastToResult
                    ) {
                      this.showAnimNearWin(i);
                      for (var a = i; a < n.length; a++)
                        this.nearWinList[a] &&
                          this.nearWinList[a].isNearWin &&
                          n[a].emit("UPDATE_NEAR_WIN_SPEED");
                    } else this.stopSoundNearWin();
                    i >= n.length &&
                      (this.clearSymbolPaylines(),
                      this.hideAnimNearWin(),
                      this.stopSoundNearWin());
                  }),
                  (n._checkValidScatterColumn = function (t) {
                    return (
                      1 === t ||
                      !(3 !== t || !this.countScatter[1]) ||
                      !(
                        5 !== t ||
                        !this.countScatter[1] ||
                        !this.countScatter[3]
                      )
                    );
                  }),
                  e
                );
              })(a))
            ) || r
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTablePayline9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotTablePayline.ts",
  ],
  function (i) {
    "use strict";
    var t, e, l, a, s, n, o, r, h;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (e = i.inheritsLoose),
            (l = i.initializerDefineProperty),
            (a = i.assertThisInitialized);
        },
        function (i) {
          (s = i.cclegacy), (n = i._decorator), (o = i.Node);
        },
        function (i) {
          r = i.SlotGameMode;
        },
        function (i) {
          h = i.SlotTablePayline;
        },
      ],
      execute: function () {
        var d, y, g, c, u;
        s._RF.push(
          {},
          "cf58ecRV+BMupNxGcroW1EN",
          "SlotTablePayline9976",
          void 0
        );
        var b = n.ccclass,
          f = n.property;
        i(
          "SlotTablePayline9976",
          ((d = b("SlotTablePayline9976")),
          (y = f(o)),
          d(
            ((u = t(
              (c = (function (i) {
                function t() {
                  for (
                    var t, e = arguments.length, s = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    s[n] = arguments[n];
                  return (
                    (t = i.call.apply(i, [this].concat(s)) || this),
                    l(t, "bigWilds", u, a(t)),
                    (t._bigWildValues = []),
                    (t.playedSoundNormalPaylines = []),
                    (t.normalMatrix = []),
                    t
                  );
                }
                e(t, i);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on("SHOW_BIG_WILD", this.showBigWild, this),
                      this.node.on("HIDE_BIG_WILD", this.hideBigWild, this),
                      (this.playedSoundNormalPaylines = []),
                      (this._bigWildValues = []);
                  }),
                  (s.setupPaylines = function (t, e) {
                    if (
                      (void 0 === t && (t = []),
                      void 0 === e && (e = []),
                      i.prototype.setupPaylines.call(this, t, e),
                      (this.matrix = t),
                      this.bigWilds && this.bigWilds.length > 0)
                    )
                      for (var l = 0; l < this.bigWilds.length; l++)
                        this._bigWildValues[l] = -1;
                    this.guiMgr &&
                      this.guiMgr.setCurrentBetDenom(
                        this.dataStore.betData.denom
                      );
                  }),
                  (s.showBigWild = function (i, t, e, l) {
                    if (
                      (void 0 === t && (t = !1),
                      void 0 === e && (e = !1),
                      l && (this.matrix = l),
                      (this.normalMatrix = l),
                      this.bigWilds && this.bigWilds.length > 0)
                    )
                      for (var a = 0; a < this.bigWilds.length; a++) {
                        var s = this.checkBigWild(a + 1);
                        (this._bigWildValues[a] = s),
                          s >= 0 &&
                            !this.checkHavingJackpotPaylineOnly(
                              this.payLineNormals
                            ) &&
                            (this.bigWilds[a].playSpineAnimation(
                              this._bigWildValues[a],
                              t,
                              e
                            ),
                            l
                              ? this.hideStaticSymbolOfReel(a + 1, !1)
                              : this.hideShowSymbolOfReel(a + 1, !1));
                      }
                    i && i();
                  }),
                  (s.hideBigWild = function () {
                    if (this.normalMatrix) {
                      if (
                        ((this.normalMatrix = null),
                        this.bigWilds && this.bigWilds.length > 0)
                      )
                        for (var i = 0; i < this.bigWilds.length; i++)
                          (this._bigWildValues[i] = -1),
                            this.bigWilds[i].reset();
                      for (
                        var t = this.node.reels, e = 0;
                        e < this.bigWilds.length;
                        e++
                      )
                        for (
                          var l = t[e + 1].getShowSymbols(), a = 0;
                          a < 3;
                          a++
                        ) {
                          var s = l[a];
                          (s.isHidden = !1), s.emit("SHOW_SYMBOL");
                        }
                    }
                  }),
                  (s.checkBigWild = function (i) {
                    void 0 === i && (i = 1);
                    var t = this.matrix[i],
                      e = -1;
                    if (t)
                      for (var l = 0; l < t.length; l++)
                        if ("K" == t[l]) {
                          e = l;
                          break;
                        }
                    return e;
                  }),
                  (s.hideStaticSymbolOfReel = function (i, t) {
                    void 0 === i && (i = 1);
                    for (
                      var e = this.node.reels[i].getShowSymbols(), l = 0;
                      l < 3;
                      l++
                    ) {
                      var a = e[l];
                      a.emit("HIDE_SYMBOL"), (a.isHidden = !0);
                    }
                  }),
                  (s.hideShowSymbolOfReel = function (i, t) {
                    if ((void 0 === i && (i = 1), this.paylinesMatrix.length))
                      for (var e = 0; e < 3; e++) {
                        var l = this.paylinesMatrix[i][e],
                          a = l.symbol,
                          s = l.paylineSymbol;
                        a.emit("HIDE_SYMBOL"),
                          (a.isHidden = !0),
                          s.emit("STOP_ANIMATION");
                      }
                  }),
                  (s.showNormalPaylinePerline = function (i) {
                    var t = i.payLineID,
                      e = i.payLineWinNumbers,
                      l = i.symbolName;
                    this.disableHighlightNormalPaylines();
                    var a = this.config.PAY_LINE_MATRIX[t];
                    if (
                      a &&
                      a.length > 0 &&
                      this.paylinesMatrix &&
                      this.paylinesMatrix.length > 0
                    ) {
                      this.dataStore.currentGameMode === r.FreeGame
                        ? this.soundPlayer.playSfx("COUNT_LINE")
                        : this.playedSoundNormalPaylines.includes(t) ||
                          (this.playedSoundNormalPaylines.push(t),
                          this.soundPlayer.playSfx("COUNT_LINE"));
                      for (var s = 0; s < e; ++s) {
                        var n = a[s],
                          o = s,
                          h = this.paylinesMatrix[o][n],
                          d = h.symbol,
                          y = h.paylineSymbol,
                          g = h.winLineFrame,
                          c = h.isShowing;
                        d &&
                          y &&
                          c &&
                          ((d.symbol !== l &&
                            d.symbol !== this.config.WILD_SYMBOL) ||
                            d.isHidden ||
                            (d.emit("ENABLE_HIGHLIGHT"),
                            y.emit("PLAY_ANIMATION"),
                            y.emit("ENABLE_HIGHLIGHT"))),
                          g && (g.active = !0);
                      }
                    }
                  }),
                  (s.clearPaylines = function () {
                    i.prototype.clearPaylines.call(this);
                    for (var t = 0; t < this.paylinesMatrix.length; ++t)
                      for (var e = 0; e < this.paylinesMatrix[t].length; ++e)
                        (this.paylinesMatrix[t][e].symbol.active = !0),
                          (this.paylinesMatrix[t][e].paylineSymbol.active = !0);
                    if (this.bigWilds && this.bigWilds.length > 0)
                      for (var l = 0; l < this.bigWilds.length; l++)
                        (this._bigWildValues[l] = -1), this.bigWilds[l].reset();
                    this.dataStore.currentGameMode === r.NormalGame &&
                      (this.playedSoundNormalPaylines = []);
                  }),
                  (s.checkHavingJackpotPaylineOnly = function (i) {
                    var t = !1;
                    if (i && i.length)
                      for (var e = 0; e < i.length; e++) {
                        var l = i[e];
                        if (l) t = "JP" === l.payLineSymbol;
                      }
                    return t;
                  }),
                  t
                );
              })(h)).prototype,
              "bigWilds",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (g = c))
          ) || g)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTablePaylineInfo9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotTablePaylineInfo.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var e, n, o, i, a;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          i = t.SlotTablePaylineInfo;
        },
        function (t) {
          a = t.formatMoney;
        },
      ],
      execute: function () {
        var s;
        n._RF.push(
          {},
          "68cb0CLccBLf4qpm6//99cc",
          "SlotTablePaylineInfo9976",
          void 0
        );
        var r = o.ccclass;
        t(
          "SlotTablePaylineInfo9976",
          r("SlotTablePaylineInfo9976")(
            (s = (function (t) {
              function n() {
                for (
                  var e, n = arguments.length, o = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  o[i] = arguments[i];
                return (
                  ((e =
                    t.call.apply(t, [this].concat(o)) ||
                    this).currentBetDenom = 0),
                  e
                );
              }
              e(n, t);
              var o = n.prototype;
              return (
                (o.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    this.node.on(
                      "SET_CURRENT_BET_DENOM",
                      this.setCurrentBetDenom,
                      this
                    ),
                    (this.currentBetDenom = this.dataStore.betData.denom || 0);
                }),
                (o.setCurrentBetDenom = function (t) {
                  void 0 === t && (t = 0), (this.currentBetDenom = t);
                }),
                (o.showPaylineInfoLine = function (t) {
                  var e = t.line,
                    n = e.payLineID,
                    o = e.payLineWinNumbers,
                    i = e.payLineWinAmount,
                    s = e.symbolName,
                    r = e.hasWildMuliplier,
                    l = this.dataStore.playSession.extend,
                    c = this.currentBetDenom || this.dataStore.betData.denom,
                    u = 1;
                  l && (u = l.multi);
                  var h = parseInt(i) / ((r > 0 ? u : 1) * c);
                  (this.node.active = !0),
                    (this.lbLeft.string = "Line " + n + " thắng " + o),
                    (this.lbRight.string =
                      r > 0 && u > 1
                        ? " (" + a(h) + ") x " + u + " x " + a(c) + " = " + a(i)
                        : " (" + a(h) + ") x " + a(c) + " = " + a(i)),
                    (this.symbolImg.spriteFrame =
                      this.assets[this.symbolPrefix + s]);
                }),
                n
              );
            })(i))
          ) || s
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableSoundEffect9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotTableSoundEffect.ts"],
  function (t) {
    "use strict";
    var e, n, o, c;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          c = t.SlotTableSoundEffect;
        },
      ],
      execute: function () {
        var r;
        n._RF.push(
          {},
          "bdec1nWpGVMir8MU3fkq6ho",
          "SlotTableSoundEffect9976",
          void 0
        );
        var s = o.ccclass;
        o.property,
          t(
            "SlotTableSoundEffect9976",
            s("SlotTableSoundEffect9976")(
              (r = (function (t) {
                function n() {
                  for (
                    var e, n = arguments.length, o = new Array(n), c = 0;
                    c < n;
                    c++
                  )
                    o[c] = arguments[c];
                  return (
                    ((e =
                      t.call.apply(t, [this].concat(o)) ||
                      this).scatterColumns = []),
                    (e.countScatter = {}),
                    e
                  );
                }
                e(n, t);
                var o = n.prototype;
                return (
                  (o.reelStartSound = function () {
                    t.prototype.reelStartSound.call(this),
                      (this.scatterColumns = [1, 3, 5]),
                      (this.countScatter = { 1: !1, 3: !1, 5: !1 });
                  }),
                  (o.reelStopSound = function (t) {
                    var e = t.matrix,
                      n = t.count;
                    this.soundPlayer &&
                      (this.sfxReelStop &&
                        this.soundPlayer.playSfx(this.sfxReelStop),
                      n >= this.node.reels.length &&
                        this.sfxReelSpinning &&
                        this.soundPlayer.stopSfx(this.sfxReelSpinning),
                      this.dataStore.modeTurbo ||
                        (e.indexOf("A") > -1 &&
                          this.scatterColumns.includes(n) &&
                          this._checkValidScatterColumn(n) &&
                          ((this.countScatter[n] = !0),
                          this.soundPlayer.playSoundGetScatter(n))));
                  }),
                  (o._checkValidScatterColumn = function (t) {
                    return (
                      1 === t ||
                      !(3 !== t || !this.countScatter[1]) ||
                      !(
                        5 !== t ||
                        !this.countScatter[1] ||
                        !this.countScatter[3]
                      )
                    );
                  }),
                  n
                );
              })(c))
            ) || r
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SparkleControl9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts"],
  function (t) {
    "use strict";
    var n, e, a, o, i, r, l, c;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy),
            (a = t._decorator),
            (o = t.tween),
            (i = t.Vec3),
            (r = t.Component);
        },
        function (t) {
          (l = t.fadeIn), (c = t.fadeOut);
        },
      ],
      execute: function () {
        var s;
        e._RF.push({}, "77f9aM0I2FAUIPKBv6xovrO", "SparkleControl9976", void 0);
        var u = a.ccclass;
        t(
          "SparkleControl9976",
          u("SparkleControl9976")(
            (s = (function (t) {
              function e() {
                for (
                  var n, e = arguments.length, a = new Array(e), o = 0;
                  o < e;
                  o++
                )
                  a[o] = arguments[o];
                return (
                  ((n =
                    t.call.apply(t, [this].concat(a)) ||
                    this).delayTimeMin = 0.2),
                  (n.delayTimeMax = 2),
                  (n.durationMin = 0.5),
                  (n.durationMax = 2),
                  (n.sparkles = []),
                  n
                );
              }
              n(e, t);
              var a = e.prototype;
              return (
                (a.onLoad = function () {
                  this.node.on("PLAY_EFFECT", this.playEffect, this),
                    this.node.on("STOP_EFFECT", this.stopEffect, this);
                }),
                (a.playEffect = function () {
                  var t =
                      Math.random() * (this.delayTimeMax - this.delayTimeMin) +
                      this.delayTimeMin,
                    n =
                      Math.random() * (this.durationMax - this.durationMin) +
                      this.durationMin,
                    e = 360 * Math.random() - 180;
                  this.node.children.forEach(function (a) {
                    o(a)
                      .repeatForever(
                        o()
                          .parallel(
                            o().call(function () {
                              l(a, n / 2);
                            }),
                            o().to(n / 2, { scale: new i(1, 1, 1) }),
                            o().by(n, { angle: e / 2 })
                          )
                          .by(n, { angle: e })
                          .delay(t)
                          .parallel(
                            o().call(function () {
                              c(a, n / 2);
                            }),
                            o().to(n / 2, { scale: new i(0.1, 0.1, 0.1) }),
                            o().by(n, { angle: 0 })
                          )
                      )
                      .start();
                  });
                }),
                (a.stopEffect = function () {}),
                e
              );
            })(r))
          ) || s
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/StarsControl9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts"],
  function (t) {
    "use strict";
    var i, n, r, a, o, s, e, l, h, c, u, d, f;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (s = t._decorator),
            (e = t.Node),
            (l = t.UITransform),
            (h = t.Vec3),
            (c = t.tween),
            (u = t.Component);
        },
        function (t) {
          (d = t.fadeOut), (f = t.fadeIn);
        },
      ],
      execute: function () {
        var g, p, m, y, D;
        o._RF.push({}, "5e93cGstsdOjriB/ra9ozJl", "StarsControl9976", void 0);
        var v = s.ccclass,
          w = s.property;
        t(
          "StarsControl9976",
          ((g = v("StarsControl9976")),
          (p = w(e)),
          g(
            ((D = i(
              (y = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, o = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    r(i, "starHolders", D, a(i)),
                    (i.minHidingDuration = 0.2),
                    (i.maxHidingDuration = 1),
                    (i.minIdleDuration = 2),
                    (i.maxIdleDuration = 3),
                    (i.playOnStart = !0),
                    (i.stars = []),
                    (i._isPlaying = !1),
                    i
                  );
                }
                n(i, t);
                var o = i.prototype;
                return (
                  (o.onLoad = function () {
                    this.node.on("PLAY_EFFECT", this.playEffect, this),
                      this.node.on("STOP_EFFECT", this.stopEffect, this);
                  }),
                  (o.start = function () {
                    var t = this;
                    if (
                      ((this.stars = []),
                      this.starHolders.forEach(function (i) {
                        t.stars = t.stars.concat(i.children);
                      }),
                      this.stars)
                    )
                      for (var i = 0; i < this.stars.length; i++) {
                        var n = this.stars[i],
                          r = n.parent.getComponent(l),
                          a = r.width,
                          o = r.height,
                          s = this.getRandom(-a / 2, a / 2),
                          e = this.getRandom(-o / 2, o / 2);
                        (n.position.x = s),
                          (n.position.y = e),
                          d(n, 0),
                          (n.scale = new h(0.1, 0.1, 1));
                        var c = this.getRandom(
                            this.minHidingDuration,
                            this.maxHidingDuration
                          ),
                          u = this.getRandom(
                            this.minIdleDuration,
                            this.maxIdleDuration
                          );
                        (n.hidingDuration = c),
                          (n.idleDuration = u),
                          (n.hidingTimer = 0),
                          (n.isShowing = !1);
                      }
                    this.playOnStart && this.playEffect();
                  }),
                  (o.playEffect = function () {
                    this._isPlaying = !0;
                  }),
                  (o.stopEffect = function () {
                    this._isPlaying = !1;
                  }),
                  (o.getRandom = function (t, i) {
                    return Math.random() * (i - t) + t;
                  }),
                  (o.update = function (t) {
                    if (this._isPlaying && this.stars && this.stars.length > 0)
                      for (var i = 0; i < this.stars.length; i++) {
                        var n = this.stars[i];
                        n &&
                          (n.isShowing ||
                            ((n.hidingTimer += t),
                            n.hidingTimer > n.hidingDuration &&
                              ((n.hidingTimer = 0),
                              (n.isShowing = !0),
                              this.showStar(n))));
                      }
                  }),
                  (o.showStar = function (t) {
                    var i = this;
                    c(t)
                      .parallel(
                        c().call(function () {
                          f(t, t.idleDuration / 4);
                        }),
                        c().to(t.idleDuration / 4, { scale: new h(1, 1, 1) })
                      )
                      .delay(t.idleDuration / 2)
                      .parallel(
                        c().call(function () {
                          d(t, t.idleDuration / 4);
                        }),
                        c().to(t.idleDuration / 4, {
                          scale: new h(0.1, 0.1, 1),
                        })
                      )
                      .call(function () {
                        var n = t.parent.getComponent(l),
                          r = n.width,
                          a = n.height,
                          o = i.getRandom(-r / 2, r / 2),
                          s = i.getRandom(-a / 2, a / 2);
                        (t.position.x = o),
                          (t.position.y = s),
                          (t.isShowing = !1);
                      })
                      .start();
                  }),
                  i
                );
              })(u)).prototype,
              "starHolders",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (m = y))
          ) || m)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TotalWinPanel9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./TotalWinPanel.ts"],
  function (t) {
    "use strict";
    var n, e, l, o;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (l = t._decorator);
        },
        function (t) {
          o = t.TotalWinPanel;
        },
      ],
      execute: function () {
        var i;
        e._RF.push({}, "68d3dsogcVHQJYNHdWEbMaC", "TotalWinPanel9976", void 0);
        var a = l.ccclass;
        t(
          "TotalWinPanel9976",
          a("TotalWinPanel9976")(
            (i = (function (t) {
              function e() {
                return t.apply(this, arguments) || this;
              }
              return (
                n(e, t),
                (e.prototype.enter = function () {
                  this.content.winAmount || (this.content.winAmount = 0),
                    this.soundPlayer.playSfx("SUM_FREE_GAME"),
                    this.callback && this.callback(),
                    (this.callback = null),
                    t.prototype.enter.call(this);
                }),
                e
              );
            })(o))
          ) || i
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TutorialMgr9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./TutorialMgr.ts"],
  function (t) {
    "use strict";
    var r, i, o, e;
    return {
      setters: [
        function (t) {
          r = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          e = t.TutorialMgr;
        },
      ],
      execute: function () {
        var c;
        i._RF.push({}, "c34c5+u6DVCW42E9AlYZB0s", "TutorialMgr9976", void 0);
        var n = o.ccclass;
        t(
          "TutorialMgr9976",
          n("TutorialMgr9976")(
            (c = (function (t) {
              function i() {
                return t.apply(this, arguments) || this;
              }
              r(i, t);
              var o = i.prototype;
              return (
                (o.getUpdatedJackpot = function () {
                  var t = {};
                  return (
                    this.trialJpl.forEach(function (r) {
                      var i = r.split(";");
                      t[i[0]] = Math.floor(Number(i[1]));
                    }),
                    t
                  );
                }),
                (o._activeBet = function (r) {
                  var i = r.active;
                  (this.mainDirector.currentGameMode.director.isSpinning &&
                    !this.showing &&
                    i) ||
                    t.prototype._activeBet.call(this, { active: i });
                }),
                i
              );
            })(e))
          ) || c
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UIManager9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./UIManager.ts",
    "./SelectWild9976.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, l, s, o, r, a, c, E;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (l = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy), (o = t._decorator), (r = t.Node);
        },
        function (t) {
          a = t.SlotSceneType;
        },
        function (t) {
          c = t.UIManager;
        },
        function (t) {
          E = t.SelectWild9976;
        },
      ],
      execute: function () {
        var h, u, p, T, d, _, L, b, S, f, m;
        s._RF.push({}, "439ddPbXrNPrqEg+ZcmVkA1", "UIManager9976", void 0);
        var B = o.ccclass,
          C = o.property;
        t(
          "UIManager9976",
          ((h = B("UIManager9976")),
          (u = C(r)),
          (p = C(r)),
          (T = C(r)),
          (d = C(r)),
          h(
            ((b = e(
              (L = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    n(e, "selectWild", b, l(e)),
                    n(e, "selectBetlinePanel", S, l(e)),
                    n(e, "starsControl", f, l(e)),
                    n(e, "sparkleControl", m, l(e)),
                    (e._realSelectedLines = void 0),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.showSelectWildPanel = function (t) {
                    void 0 === t && (t = 3),
                      this.selectWild.emit("SHOW_PANEL", t);
                  }),
                  (s.initSelectWild = function () {
                    this.selectWild.emit("INIT");
                  }),
                  (s.onBetlineClick = function () {
                    this.showCutScene(a.BetLinePanel),
                      this.soundPlayer && this.soundPlayer.playSFXClick();
                  }),
                  (s.showUIMain = function () {
                    t.prototype.showUIMain.call(this),
                      this.bet.emit("ENABLE_BETLINE_SELECT", !0),
                      this.bet.emit("ENABLE_WILD_SELECT", !0),
                      (this.selectWild.active = !0),
                      this.starsControl &&
                        this.starsControl.emit("PLAY_EFFECT"),
                      this.sparkleControl &&
                        this.sparkleControl.emit("STOP_EFFECT");
                  }),
                  (s.showUIFree = function () {
                    t.prototype.showUIFree.call(this),
                      (this.bet.active = !0),
                      this.bet.emit("ENABLE_BETLINE_SELECT", !1),
                      this.bet.emit("ENABLE_WILD_SELECT", !1),
                      (this.selectWild.active = !1),
                      this.starsControl &&
                        this.starsControl.emit("STOP_EFFECT"),
                      this.sparkleControl &&
                        this.sparkleControl.emit("PLAY_EFFECT");
                  }),
                  (s.updateBetLines = function (t) {
                    void 0 === t && (t = [1]),
                      this.selectBetlinePanel.emit("UPDATE_BET_LINES", t),
                      this.bet.emit("UPDATE_BET_LINES", t),
                      (this.dataStore.betData.betLines = t);
                  }),
                  (s.switchToTrialMode = function () {
                    (this._realSelectedLines = [].concat(
                      this.dataStore.betData.betLines
                    )),
                      this.selectBetlinePanel.emit("UPDATE_BET_LINES", [1]),
                      this.bet.emit("UPDATE_BET_LINES", [1]),
                      t.prototype.switchToTrialMode.call(this),
                      (this.dataStore.betData.betLines = [1]),
                      this.selectWild.emit("UPDATE_EXTRA_BET");
                  }),
                  (s.disableBet = function (t) {
                    void 0 === t && (t = !1),
                      (this.isTutorialFinished() || t) &&
                        (this.bet.emit("DISABLE_BET"),
                        t && this.bet.emit("ENABLE_BETLINE_SELECT", !0));
                  }),
                  (s.switchToRealMode = function () {
                    (this.dataStore.betData.betLines = [].concat(
                      this._realSelectedLines
                    )),
                      this.selectBetlinePanel.emit(
                        "UPDATE_BET_LINES",
                        this.dataStore.betData.betLines
                      ),
                      t.prototype.switchToRealMode.call(this),
                      this.selectWild.emit("UPDATE_EXTRA_BET");
                  }),
                  (s.extraSpinCheck = function () {
                    return !1 === this.selectWild.getComponent(E).isOpenPanel();
                  }),
                  (s.setCurrentBetDenom = function (t) {
                    void 0 === t && (t = 0),
                      this.paylineInfo.emit("SET_CURRENT_BET_DENOM", t);
                  }),
                  e
                );
              })(c)).prototype,
              "selectWild",
              [u],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (S = e(L.prototype, "selectBetlinePanel", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = e(L.prototype, "starsControl", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = e(L.prototype, "sparkleControl", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = L))
          ) || _)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Wallet9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Wallet.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var e, i, a, l, n;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (a = t._decorator);
        },
        function (t) {
          l = t.Wallet;
        },
        function (t) {
          n = t.WalletType;
        },
      ],
      execute: function () {
        var o;
        i._RF.push({}, "a8d14eQOXRI+6VhxgDUsmw6", "Wallet9976", void 0);
        var r = a.ccclass;
        a.property,
          t(
            "Wallet9976",
            r("Wallet9976")(
              (o = (function (t) {
                function i() {
                  return t.apply(this, arguments) || this;
                }
                e(i, t);
                var a = i.prototype;
                return (
                  (a.switchTrial = function () {
                    (this.walletNormal.active = !1),
                      (this.walletTrial.active = !0),
                      this.buttonSwitch &&
                        (this.buttonSwitch.interactable = !1),
                      this.buttonNormal &&
                        (this.buttonNormal.interactable = !0),
                      this.buttonPromote &&
                        (this.buttonPromote.interactable = !1);
                  }),
                  (a.switchReal = function () {
                    (this.walletNormal.active = !0),
                      (this.walletTrial.active = !1),
                      this.buttonSwitch &&
                        (this.buttonSwitch.interactable = !0),
                      this.setWalletDisplay(
                        this.dataStore.getCurrentWalletType()
                      );
                  }),
                  (a.enableSwitch = function (t) {
                    this.buttonSwitch && (this.buttonSwitch.interactable = t);
                  }),
                  (a.setWalletDisplay = function (t) {
                    this.buttonPromote &&
                      this.buttonNormal &&
                      ((this.currentWallet = t),
                      t == n.NORMAL
                        ? ((this.buttonNormal.interactable = !0),
                          (this.buttonPromote.interactable = !1))
                        : ((this.buttonNormal.interactable = !1),
                          (this.buttonPromote.interactable = !0)));
                  }),
                  i
                );
              })(l))
            ) || o
          );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WinAmount9976.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts", "./WinAmount.ts"],
  function (t) {
    "use strict";
    var n, e, i, o, a, r, u, l, s, c, m, p;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (u = t.Node),
            (l = t.sp),
            (s = t.log);
        },
        function (t) {
          (c = t.formatMoney), (m = t.tweenMoney);
        },
        function (t) {
          p = t.WinAmount;
        },
      ],
      execute: function () {
        var h, f, A, v, y;
        a._RF.push({}, "940c9KtW75MaIvvb18A9DKA", "WinAmount9976", void 0);
        var W = r.ccclass,
          d = r.property;
        t(
          "WinAmount9976",
          ((h = W("WinAmount9976")),
          (f = d(u)),
          h(
            ((y = n(
              (v = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, a = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(a)) || this),
                    i(n, "animation", y, o(n)),
                    n
                  );
                }
                e(n, t);
                var a = n.prototype;
                return (
                  (a.updateWinAmount = function (n, e) {
                    var i = n.value,
                      o = n.time,
                      a = n.isLastest;
                    t.prototype.updateWinAmount.call(
                      this,
                      { value: i, time: o, isLastest: a },
                      e
                    ),
                      this.animation
                        .getComponent(l.Skeleton)
                        .setAnimation(0, "animation", !1),
                      this.animation
                        .getComponent(l.Skeleton)
                        .addAnimation(0, "loop", !0, 0);
                  }),
                  (a._tweenWinAmount = function (t, n) {
                    var e = this;
                    if ((this._resetLabel(), 0 === n))
                      return (
                        (this.currentValue = t),
                        (this.labelWinAmount.string = c(this.currentValue)),
                        this.resetCallBack(),
                        void s("show win Amount instantly", {
                          value: t,
                          time: n,
                        })
                      );
                    this._tweenValue = m(
                      this.labelWinAmount,
                      n,
                      Math.floor(t),
                      {
                        onComplete: function () {
                          e.resetCallBack(), (e._tweenValue = null);
                        },
                      }
                    );
                  }),
                  n
                );
              })(p)).prototype,
              "animation",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (A = v))
          ) || A)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WinEffect9976.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./WinEffect.ts",
    "./ParticleSpawnerControl9976.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, s, a, o, l, c, r, f, h, u, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (l = t.Vec3),
            (c = t.tween),
            (r = t.Sprite);
        },
        function (t) {
          f = t.formatMoney;
        },
        function (t) {
          h = t.WinEffect;
        },
        function (t) {
          u = t.ParticleSpawnerControl9976;
        },
        function (t) {
          p = t.TutorialTriggerType;
        },
      ],
      execute: function () {
        var w, E, d, y, S;
        a._RF.push({}, "7ee650rcbFBCJi47/0W81e2", "WinEffect9976", void 0);
        var T = o.ccclass,
          v = o.property;
        t(
          "WinEffect9976",
          ((w = T("WinEffect9976")),
          (E = v({ type: u })),
          w(
            ((S = e(
              (y = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "fastParticleSpawner", S, s(e)),
                    (e._fastEffect = null),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.showFastEffectWin = function () {
                    var t = this;
                    this.isShowFastEffect
                      ? this.callback && this.callback()
                      : ((this.isShowFastEffect = !0),
                        this.setOpacity(this.winInfo, 0),
                        this.coinsEffect.setPosition(new l(-2e3, 0, 0)),
                        this.overlayNode && (this.overlayNode.active = !1),
                        null != this.fastParticleSpawner &&
                          (this.setOpacity(this.fastParticleSpawner.node, 255),
                          this.fastParticleSpawner.reset(),
                          this.fastParticleSpawner.spawn()),
                        this.callback && this.callback(),
                        this._fastEffect &&
                          (this._fastEffect.stop(), (this._fastEffect = null)),
                        (this._fastEffect = c(this.node)
                          .delay(2)
                          .call(function () {
                            (t.isShowFastEffect = !1),
                              t.setOpacity(t.fastParticleSpawner.node, 0),
                              t.fastParticleSpawner.reset(),
                              (t._fastEffect = null),
                              t.isShowNormalEffect || (t.node.active = !1);
                          })),
                        this._fastEffect.start());
                  }),
                  (a.showEffectWin = function () {
                    (this.isShowNormalEffect = !0),
                      this.overlayNode && (this.overlayNode.active = !0),
                      this.coinsEffect.setPosition(l.ZERO),
                      this.setOpacity(this.winInfo, 255),
                      this.playSoundStart(),
                      (this.winAmountTween = c(this.winAmount)
                        .repeatForever(
                          c()
                            .to(0.2, { scale: new l(1.2, 1.2, 1.2) })
                            .to(0.2, { scale: new l(1, 1, 1) })
                        )
                        .start()),
                      (this.titleTween = c(this.title)
                        .repeatForever(
                          c()
                            .to(0.5, { scale: new l(1.2, 1.2, 1.2) })
                            .to(0.5, { scale: new l(1, 1, 1) })
                        )
                        .start()),
                      this.initValue(),
                      this.startParticle(),
                      this.startUpdateWinAmount();
                  }),
                  (a.changeTitle = function (t) {
                    var e = this;
                    (this.currentTitle = t),
                      this.title &&
                        (this.titleTween = c(this.title)
                          .parallel(
                            c().to(0.3, { scale: new l(2, 2, 2) }),
                            c().call(function () {
                              e.fadeTo(e.title, 0.3, 1);
                            })
                          )
                          .call(function () {
                            e.title.getComponent(r).spriteFrame =
                              e.titleFrame[t];
                          })
                          .parallel(
                            c().to(0.3, { scale: new l(1, 1, 1) }),
                            c().call(function () {
                              e.fadeTo(e.title, 0.3, 255);
                            })
                          )
                          .call(function () {
                            c(e.title)
                              .repeatForever(
                                c()
                                  .to(0.5, { scale: new l(1.2, 1.2, 1.2) })
                                  .to(0.5, { scale: new l(1, 1, 1) })
                              )
                              .start();
                          })
                          .start());
                  }),
                  (a.finish = function () {
                    var t = this;
                    (this.isUpdating = !1),
                      (this.label.string = f(this.content.winAmount)),
                      this.winAmountTween && this.winAmountTween.stop(),
                      this.titleTween && this.titleTween.stop(),
                      this.nodeTween && this.nodeTween.stop(),
                      this.stopParticle(),
                      this.playSoundEnd(),
                      c(this.winInfo)
                        .delay(this.delayShowTime - 0.1)
                        .call(function () {
                          t.coinsEffect.emit("RESET_PARTICLE");
                        })
                        .delay(0.1)
                        .to(this.hideTime, { scale: new l(0, 0, 0) })
                        .call(function () {
                          (t.label.string = ""),
                            t.setOpacity(t.winInfo, 1),
                            t.guiMgr.onIngameEvent(
                              p.OnCutsceneClose,
                              "ON_CUTSCENE_CLOSE"
                            ),
                            t.exit(),
                            t.soundPlayer && t.soundPlayer.stopAllAudio(),
                            t.soundPlayer && t.soundPlayer.playMainBGM();
                        })
                        .start();
                  }),
                  e
                );
              })(h)).prototype,
              "fastParticleSpawner",
              [E],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (d = y))
          ) || d)
        );
        a._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/cc30-aladin-9976",
    "chunks:///_virtual/cc30-aladin-9976"
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
