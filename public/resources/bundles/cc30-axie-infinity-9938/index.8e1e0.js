System.register(
  "chunks:///_virtual/Bet9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./Bet.ts"],
  function (t) {
    "use strict";
    var e, i, a, n;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (a = t._decorator);
        },
        function (t) {
          n = t.Bet;
        },
      ],
      execute: function () {
        var r;
        i._RF.push({}, "f8f0fdhIpRPnLzBCvcPXNcg", "Bet9938", void 0);
        var o = a.ccclass;
        a.property,
          t(
            "Bet9938",
            o("Bet9938")(
              (r = (function (t) {
                function i() {
                  return t.apply(this, arguments) || this;
                }
                e(i, t);
                var a = i.prototype;
                return (
                  (a.initBet = function () {
                    (this.dataStore.lastBetIdTrial =
                      this.dataStore.betData.betKey),
                      t.prototype.initBet.call(this);
                  }),
                  (a.updateBet = function (e) {
                    var i = this.dataStore.betData.betKey;
                    this.dataStore.isTrialMode
                      ? (this.dataStore.lastBetIdTrial = i)
                      : (this.dataStore.lastBetIdReal = i),
                      t.prototype.updateBet.call(this, e);
                  }),
                  (a.increaseBet = function () {
                    this.guiMgr.hideInfo(), t.prototype.increaseBet.call(this);
                  }),
                  (a.reduceBet = function () {
                    this.guiMgr.hideInfo(), t.prototype.reduceBet.call(this);
                  }),
                  (a.enableBetBtn = function () {
                    t.prototype.enableBetBtn.call(this),
                      this.eventManager.emit("ENABLE_BET_BUTTON");
                  }),
                  (a.disableBetBtn = function () {
                    t.prototype.disableBetBtn.call(this),
                      this.eventManager.emit("DISABLE_BET_BUTTON");
                  }),
                  i
                );
              })(n))
            ) || r
          );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetHistoryScrollItem9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var e, n, o, r, i;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (o = t._decorator), (r = t.Event);
        },
        function (t) {
          i = t.GameObject;
        },
      ],
      execute: function () {
        var c;
        n._RF.push(
          {},
          "8b265JsihBAoapMr3ArQSnG",
          "BetHistoryScrollItem9938",
          void 0
        );
        var s = o.ccclass;
        o.property,
          t(
            "BetHistoryScrollItem9938",
            s("BetHistoryScrollItem9938")(
              (c = (function (t) {
                function n() {
                  for (
                    var e, n = arguments.length, o = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    ((e = t.call.apply(t, [this].concat(o)) || this).index = 0),
                    e
                  );
                }
                e(n, t);
                var o = n.prototype;
                return (
                  (o.onLoad = function () {
                    this.node.setIndex = this.setIndex.bind(this);
                  }),
                  (o.onClick = function () {
                    var t = new r("ON_SCROLL_ITEM_CLICK", !0);
                    (t.scrollItemData = { index: this.index }),
                      this.node.dispatchEvent(t);
                  }),
                  (o.setIndex = function (t) {
                    this.index = t;
                  }),
                  n
                );
              })(i))
            ) || c
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ButtonAnim9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var n, i, e, o, s, a, u, r, h, l;
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
            (u = t.Node),
            (r = t.sp),
            (h = t.Button);
        },
        function (t) {
          l = t.GameObject;
        },
      ],
      execute: function () {
        var b, c, p, m, d, T, f, E, v, S, B, y;
        s._RF.push({}, "021b6DEYJNO9KijzG0c86SF", "ButtonAnim9938", void 0);
        var N = a.ccclass,
          A = a.property;
        t(
          "ButtonAnim9938",
          ((b = N("ButtonAnim9938")),
          (c = A(u)),
          (p = A({ type: r.Skeleton })),
          b(
            ((T = n(
              (d = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, s = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (n = t.call.apply(t, [this].concat(s)) || this),
                    e(n, "buttonNode", T, o(n)),
                    e(n, "buttonSpine", f, o(n)),
                    e(n, "animIdle", E, o(n)),
                    e(n, "animHover", v, o(n)),
                    e(n, "animPress", S, o(n)),
                    e(n, "animDisable", B, o(n)),
                    e(n, "animBounce", y, o(n)),
                    (n.button = void 0),
                    (n.isBetButton = !1),
                    n
                  );
                }
                i(n, t);
                var s = n.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.button = this.buttonNode.getComponent(h)),
                      this.buttonNode &&
                        (this.buttonNode.on(
                          u.EventType.TOUCH_START,
                          this.onTouchStart,
                          this
                        ),
                        this.buttonNode.on(
                          u.EventType.TOUCH_END,
                          this.onTouchCancel,
                          this
                        ),
                        this.buttonNode.on(
                          u.EventType.TOUCH_CANCEL,
                          this.onTouchCancel,
                          this
                        ),
                        this.buttonNode.on(
                          u.EventType.MOUSE_LEAVE,
                          this.onMouseLeave,
                          this
                        ),
                        this.buttonNode.on(
                          u.EventType.MOUSE_ENTER,
                          this.onHover,
                          this
                        )),
                      (this.isBetButton =
                        !this.buttonSpine.findAnimation("Idle_Static")),
                      this.eventManager && this.isBetButton
                        ? (this.eventManager.on(
                            "DISABLE_BET_BUTTON",
                            this.disable,
                            this
                          ),
                          this.eventManager.on(
                            "ENABLE_BET_BUTTON",
                            this.enable,
                            this
                          ))
                        : this.isBetButton ||
                          (this.node.on("DISABLE_BUTTONS", this.disable, this),
                          this.node.on("ENABLE_BUTTONS", this.enable, this)),
                      this.buttonSpine.setAnimation(0, this.animIdle, !0);
                  }),
                  (s.onHover = function () {
                    this.buttonSpine &&
                      this.button.interactable &&
                      this.buttonSpine.setAnimation(0, this.animHover, !0);
                  }),
                  (s.onMouseLeave = function () {
                    this.buttonSpine &&
                      this.button.interactable &&
                      this.buttonSpine.setAnimation(0, this.animIdle, !0);
                  }),
                  (s.disable = function () {
                    this.buttonSpine.setAnimation(0, this.animDisable, !0);
                  }),
                  (s.enable = function () {
                    this.buttonSpine.setAnimation(0, this.animIdle, !0);
                  }),
                  (s.onTouchStart = function () {
                    this.buttonSpine &&
                      this.button.interactable &&
                      (this.animPress &&
                        this.buttonSpine.setAnimation(0, this.animPress, !1),
                      this.animBounce &&
                        this.buttonSpine.addAnimation(0, this.animBounce, !1),
                      this.animBounce &&
                        this.buttonSpine.addAnimation(0, this.animIdle, !0));
                  }),
                  (s.onTouchCancel = function () {}),
                  (s.onDestroy = function () {
                    this.buttonNode.off(
                      u.EventType.TOUCH_START,
                      this.onTouchStart,
                      this
                    ),
                      this.buttonNode.off(
                        u.EventType.TOUCH_END,
                        this.onTouchCancel,
                        this
                      ),
                      this.buttonNode.off(
                        u.EventType.TOUCH_CANCEL,
                        this.onTouchCancel,
                        this
                      ),
                      this.buttonNode.off(
                        u.EventType.MOUSE_LEAVE,
                        this.onMouseLeave,
                        this
                      ),
                      this.buttonNode.off(
                        u.EventType.MOUSE_ENTER,
                        this.onHover,
                        this
                      );
                  }),
                  n
                );
              })(l)).prototype,
              "buttonNode",
              [c],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (f = n(d.prototype, "buttonSpine", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (E = n(d.prototype, "animIdle", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "Idle";
              },
            })),
            (v = n(d.prototype, "animHover", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "Hover";
              },
            })),
            (S = n(d.prototype, "animPress", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "Press";
              },
            })),
            (B = n(d.prototype, "animDisable", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "Disable";
              },
            })),
            (y = n(d.prototype, "animBounce", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "Bounce";
              },
            })),
            (m = d))
          ) || m)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/cc30-axie-infinity-9938",
  [
    "./Bet9938.ts",
    "./Config9938.ts",
    "./DataStore9938.ts",
    "./Director9938.ts",
    "./FreeGameDirector9938.ts",
    "./FreeGameWriter9938.ts",
    "./NormalGameDirector9938.ts",
    "./NormalGameWriter9938.ts",
    "./BetHistoryScrollItem9938.ts",
    "./CoinsEffect9938.ts",
    "./DotsHistory9938.ts",
    "./Info9938.ts",
    "./IntroFree9938.ts",
    "./JackpotCoinEffect9938.ts",
    "./JackpotWin9938.ts",
    "./PopupSound9938.ts",
    "./SlotBetHistoryDetail9938.ts",
    "./SlotBetSummaryHistory9938.ts",
    "./SlotBetTableHistoryDetail9938.ts",
    "./TotalWinPanel9938.ts",
    "./WinEffect9938.ts",
    "./SideItem9938.ts",
    "./SideItemResult9938.ts",
    "./SideWheelConfig9938.ts",
    "./SideWheelMgr9938.ts",
    "./FreeSpinEffect9938.ts",
    "./FreeSpinTimes9938.ts",
    "./IntroWildFeature9938.ts",
    "./LineDrawingPayline9938.ts",
    "./PetAxieController9938.ts",
    "./SlotReel9938.ts",
    "./SlotSymbol9938.ts",
    "./SlotSymbolPayline9938.ts",
    "./SlotTable9938.ts",
    "./SlotTableNearWinEffect9938.ts",
    "./SlotTablePayline9938.ts",
    "./SlotTablePaylineInfo9938.ts",
    "./SlotTableSoundEffect9938.ts",
    "./WildRoadController9938.ts",
    "./WinlineMgr9938.ts",
    "./TrialButton9938.ts",
    "./TutorialMgr9938.ts",
    "./ButtonAnim9938.ts",
    "./IconRotate9938.ts",
    "./Jackpot9938.ts",
    "./LoadingContent9938.ts",
    "./SlotButton9938.ts",
    "./TopUI9938.ts",
    "./Turbo9938.ts",
    "./UIManager9938.ts",
    "./WinAmount9938.ts",
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
  "chunks:///_virtual/CoinsEffect9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CoinsEffect.ts"],
  function (t) {
    "use strict";
    var e, o, n, c, r;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (n = t._decorator), (c = t.ParticleSystem2D);
        },
        function (t) {
          r = t.CoinsEffect;
        },
      ],
      execute: function () {
        var s;
        o._RF.push({}, "dcf42UNbf5D7atFcrIquMY5", "CoinsEffect9938", void 0);
        var i = n.ccclass;
        n.property,
          t(
            "CoinsEffect9938",
            i("CoinsEffect9938")(
              (s = (function (t) {
                function o() {
                  return t.apply(this, arguments) || this;
                }
                e(o, t);
                var n = o.prototype;
                return (
                  (n.startParticle = function () {
                    this.coinDropper.getComponent(c).resetSystem();
                  }),
                  (n.stopParticle = function () {
                    this.coinDropper.getComponent(c).stopSystem();
                  }),
                  o
                );
              })(r))
            ) || s
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Config9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gameCommonUtils.ts"],
  function (_) {
    "use strict";
    var I, E, N, A, T;
    return {
      setters: [
        function (_) {
          I = _.inheritsLoose;
        },
        function (_) {
          (E = _.cclegacy), (N = _._decorator), (A = _.Component);
        },
        function (_) {
          T = _.default;
        },
      ],
      execute: function () {
        var L;
        E._RF.push({}, "fb1ddp/TntICp+aKkkk7Em9", "Config9938", void 0);
        var O = N.ccclass;
        _(
          "Config9000",
          O("Config9938")(
            (L = (function (_) {
              function E() {
                return _.apply(this, arguments) || this;
              }
              return (
                I(E, _),
                (E.prototype.onLoad = function () {
                  this.node.config = {
                    GAME_ID: "9938",
                    JP_PREFIX_EVENT: "9938_",
                    JP_NAMES: ["GRAND", "MAJOR"],
                    DEFAULT_BET: "1",
                    BETS: {
                      1: 1e3,
                      2: 5e3,
                      3: 1e4,
                      4: 2e4,
                      5: 5e4,
                      6: 1e5,
                      7: 1e6,
                    },
                    DEFAULT_EXTRA_BET: "0",
                    EXTRA_BETS: { 0: 1 },
                    TOTAL_BET_CREDIT: 50,
                    DEFAULT_TRIAL_JACKPOT: {
                      "9938_1_GRAND": 2e5,
                      "9938_1_MAJOR": 2e4,
                      "9938_2_GRAND": 1e6,
                      "9938_2_MAJOR": 1e5,
                      "9938_3_GRAND": 2e6,
                      "9938_3_MAJOR": 2e5,
                      "9938_4_GRAND": 4e6,
                      "9938_4_MAJOR": 4e5,
                      "9938_5_GRAND": 1e7,
                      "9938_5_MAJOR": 1e6,
                      "9938_6_GRAND": 2e7,
                      "9938_6_MAJOR": 2e6,
                      "9938_7_GRAND": 2e8,
                      "9938_7_MAJOR": 2e7,
                    },
                    DEFAULT_TRIAL_WALLET: 2e8,
                    TRIAL_BET: "2",
                    TRIAL_EXTRA_BET: "0",
                    MESSAGE_DIALOG: T.getMessageSlot(),
                    GAME_SPEED: { NORMAL: 0, TURBO: 1, INSTANTLY: 2 },
                    PARTICLE_MOVING_TIME: 1,
                    MUSIC_VOLUME: 0.7,
                    SOUND_EFFECT_VOLUME: 1,
                    JP_LIST_HISTORY: "GRAND",
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
                    SLIDE_WILD_FORMAT: [4, 4, 4, 4, 4],
                    TABLE_BUFFER: { TOP: 1, BOT: 1 },
                    TABLE_NORMAL: {
                      TIME: 0.06,
                      DELAY_START: 0,
                      DELAY_STOP: 0.5,
                      EASING_DISTANCE: 15,
                      EASING_TIME: 0.08,
                      BLINKS: 2,
                      BLINK_DURATION: 1,
                      ANIMATION_DURATION: 2,
                      STEP_STOP: 12,
                      EXPECT_PAYLINE_TIME: 2,
                      EXPECT_PAYLINE_ALLWAYS_TIME: 2,
                      MIN_TIME_EACH_PAYLINE: 2,
                      NEAR_WIN_DELAY: 0.6,
                      NEAR_WIN_DELAY_LAST_REEL: 1,
                      LIGHT_SPEED: 1,
                      IS_TURBO: !1,
                    },
                    TABLE_TURBO: {
                      TIME: 0.05,
                      DELAY_START: 0,
                      DELAY_STOP: 0,
                      EASING_DISTANCE: 15,
                      EASING_TIME: 0.08,
                      BLINKS: 2,
                      BLINK_DURATION: 1,
                      ANIMATION_DURATION: 2,
                      STEP_STOP: 6,
                      EXPECT_PAYLINE_TIME: 2,
                      EXPECT_PAYLINE_ALLWAYS_TIME: 2,
                      MIN_TIME_EACH_PAYLINE: 2,
                      NEAR_WIN_DELAY: 0.3,
                      NEAR_WIN_DELAY_LAST_REEL: 0.5,
                      LIGHT_SPEED: 2,
                      IS_TURBO: !1,
                    },
                    SUPER_TURBO: 0.04,
                    SLIDING_TIME: 0.9,
                    SLIDING_TIME_LAST_TIME: 0.2,
                    PET_AXIE_STATE: {
                      IDLE: 1,
                      WIN_PAYLINE: 2,
                      FREE_GAME: 3,
                      JACKPOT: 4,
                      SLIDING_WILD: 5,
                      SLEEPING: 6,
                      SIDE_WHEEL_INTERACTION: 7,
                      BUFF_WINLINE: 8,
                      NEAR_WIN: 9,
                    },
                    PET_AXIE_ANIMATION: {
                      APPEAR: "Appear",
                      DISAPPEAR: "Disappear",
                      IDLE: "Idle",
                      SMALL_WIN: "Small_Win",
                      BIG_WIN: "Big_Win",
                      MEGA_WIN: "Mega_Win",
                      SUPER_WIN: "Supper_Win",
                      FREE_GAME: "Free_Game",
                      JACKPOT: "Throwing_Item",
                      SLIDING_WILD: "Sliding_Wild",
                      SLEEPING: "Idle_Sleeping",
                      SLEEPING_LOOP: "Idle_Sleeping_Loop",
                      SLEEPING_END: "Idle_Sleeping_End",
                      NEAR_WIN: "Near_Win",
                      NEAR_WIN_LOOP: "Near_Win_Loop",
                      NEAR_WIN_WIN: "Near_Win_Win",
                      NEAR_WIN_MISS: "Near_Win_Miss",
                      SIDE_WHEEL_LOOK_LOOP: "Side_Wheel_Spin_Loop",
                      SIDE_WHEEL_LOOK_END: "Side_Wheel_Spin_End",
                      SIDE_WHEEL_SECOND_CHANCE: "Side_Wheel_Second_Chance",
                      SIDE_WHEEL_SPIN: "Side_Wheel_Spin",
                      SIDE_WHEEL_WIN: "Side_Wheel_Win",
                      SIDE_WHEEL_WIN_TURBO: "Side_Wheel_Win_Turbo",
                    },
                    SIDE_WHEEL_STATE: {
                      SPINNING: 1,
                      NEAR_WIN: 2,
                      STOP_SPINNING: 3,
                      SHOW_RESULT: 4,
                      SECOND_CHANCE: 5,
                    },
                    NORMAL_SYMBOLS: [
                      ["2", "3", "4", "5", "6", "7", "8", "A"],
                      ["2", "3", "4", "5", "6", "7", "8", "A"],
                      ["2", "3", "4", "5", "6", "7", "8", "A"],
                      ["2", "3", "4", "5", "6", "7", "8", "A"],
                      ["2", "3", "4", "5", "6", "7", "8", "A"],
                    ],
                    FREE_SYMBOLS: [
                      ["2", "3", "4", "5", "6", "7", "8"],
                      ["2", "3", "4", "5", "6", "7", "8"],
                      ["2", "3", "4", "5", "6", "7", "8"],
                      ["2", "3", "4", "5", "6", "7", "8"],
                      ["2", "3", "4", "5", "6", "7", "8"],
                    ],
                    EXCEPTION_SYMBOLS: ["A", "K"],
                    WILD_SYMBOL: "K",
                    SYMBOL_SMALL_NAME_LIST: ["2", "3", "4", "5", "6", "7", "8"],
                    SYMBOL_WIDTH: 136,
                    SYMBOL_HEIGHT: 134,
                    PAY_LINE_LENGTH: 50,
                    PAY_LINE_ALLWAYS: !1,
                    SHOW_WINLINE_FRAME: !1,
                    SHOW_DRAWING_LINE: !0,
                    PAY_LINE_MATRIX: {
                      1: [1, 1, 1, 1, 1],
                      2: [0, 0, 0, 0, 0],
                      3: [2, 2, 2, 2, 2],
                      4: [0, 1, 2, 1, 0],
                      5: [2, 1, 0, 1, 2],
                      6: [0, 0, 1, 2, 2],
                      7: [2, 2, 1, 0, 0],
                      8: [1, 0, 0, 0, 1],
                      9: [1, 2, 2, 2, 1],
                      10: [1, 0, 1, 0, 1],
                      11: [1, 2, 1, 2, 1],
                      12: [0, 1, 0, 1, 0],
                      13: [2, 1, 2, 1, 2],
                      14: [1, 1, 0, 1, 1],
                      15: [1, 1, 2, 1, 1],
                      16: [0, 1, 1, 1, 0],
                      17: [2, 1, 1, 1, 2],
                      18: [0, 2, 0, 2, 0],
                      19: [2, 0, 2, 0, 2],
                      20: [2, 2, 0, 2, 2],
                      21: [0, 0, 2, 0, 0],
                      22: [0, 2, 2, 2, 0],
                      23: [2, 0, 0, 0, 2],
                      24: [1, 2, 0, 2, 1],
                      25: [1, 0, 2, 0, 1],
                      26: [0, 2, 1, 2, 0],
                      27: [2, 0, 1, 0, 2],
                      28: [0, 0, 0, 1, 2],
                      29: [2, 2, 2, 1, 0],
                      30: [1, 1, 1, 0, 0],
                      31: [1, 1, 1, 2, 2],
                      32: [2, 1, 0, 0, 1],
                      33: [0, 1, 2, 2, 1],
                      34: [1, 0, 1, 2, 1],
                      35: [1, 2, 1, 0, 1],
                      36: [0, 1, 0, 2, 2],
                      37: [2, 1, 2, 0, 0],
                      38: [2, 2, 1, 2, 2],
                      39: [0, 0, 1, 0, 0],
                      40: [1, 1, 0, 2, 2],
                      41: [1, 1, 2, 0, 0],
                      42: [1, 0, 0, 1, 1],
                      43: [1, 2, 2, 1, 1],
                      44: [0, 1, 1, 0, 0],
                      45: [2, 1, 1, 2, 2],
                      46: [0, 2, 1, 0, 2],
                      47: [2, 0, 1, 2, 0],
                      48: [1, 0, 2, 1, 0],
                      49: [1, 2, 0, 1, 2],
                      50: [2, 0, 2, 1, 0],
                    },
                    HAS_GAME_EVENT: !1,
                    SERVER_VERSION: "",
                    TUTORIAL_TEXT: {
                      SPIN_START: "Bấm quay để bắt đầu chơi.",
                      INTRO_WILD:
                        "Wild có thể thay thế tất cả các biểu tượng, trừ Scatter.",
                      INTRO_INFO:
                        "Thắng tổ hợp 3 biểu tượng\nBình thuốc, có hệ số thưởng là\n10 và ở tổng cược 5,000\n(cược = 100)\n10 x 100 = 1000.",
                      INTRO_JACKPOT:
                        "Trò chơi có 2 kho báu,\nmỗi lần quay sẽ trích 1\nphần tiền vào kho báu.",
                      CONTINUE_SPIN: "Tiếp tục nào.",
                      INTRO_SLIPWILD:
                        "Cột có Wild sẽ giữ lại lượt quay sau và trượt dần lên.",
                      TURN_TURBO: "Bấm để kích hoạt\nchế độ siêu tốc nào.",
                      INTRO_DOGECOIN:
                        "Line thắng biểu tượng Tank Axie có cơ hội được trang bị vũ khí, tăng phần thưởng lên gấp\n2, 3, 5 lần.",
                      NEXT_SPIN: "Quay thêm lượt nữa nào.",
                      INTRO_FREEGAME:
                        "Khi có 3 Scatter trở lên ở vị trí bất kỳ sẽ kích hoạt giờ phiêu lưu, tặng lượt quay miễn phí.",
                      INTRO_EXTRA_FREE:
                        "Trong Giờ Phiêu Lưu, may mắn có thể nhận thêm nhiều lượt chơi hơn ở Rương Ma Thuật.",
                      HOLD_TO_AUTO_SPIN:
                        "Nhấn giữ để chuyển sang\nchế độ tự quay.",
                    },
                  };
                }),
                E
              );
            })(A))
          ) || L
        );
        E._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DataStore9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./DataStore.ts"],
  function (i) {
    "use strict";
    var t, r, e, a, n;
    return {
      setters: [
        function (i) {
          t = i.inheritsLoose;
        },
        function (i) {
          (r = i.cclegacy), (e = i._decorator), (a = i.warn);
        },
        function (i) {
          n = i.DataStore;
        },
      ],
      execute: function () {
        var l;
        r._RF.push({}, "fb925bATJ5PK5MugGT37o0m", "DataStore9938", void 0);
        var o = e.ccclass;
        i(
          "DataStore9938",
          o("DataStore9938")(
            (l = (function (i) {
              function r() {
                for (
                  var t, r = arguments.length, e = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  e[a] = arguments[a];
                return (
                  ((t =
                    i.call.apply(i, [this].concat(e)) ||
                    this).isWaitingFirstSpin = !1),
                  (t.mainSlideWild = []),
                  (t.mainSlideWildTrial = []),
                  (t.freeSlideWild = []),
                  (t.freeSlideWildTrial = []),
                  (t.lastBetIdTrial = "1"),
                  (t.lastBetIdReal = "1"),
                  t
                );
              }
              t(r, i);
              var e = r.prototype;
              return (
                (e.formatData = function (i) {
                  var t = i.matrix,
                    r = i.matrix0,
                    e = i.normalGameMatrix,
                    n = i.freeGameMatrix,
                    l = i.payLines,
                    o = this.config.NORMAL_TABLE_FORMAT;
                  return (
                    t
                      ? ((i.storeMatrix = [].concat(t)),
                        (i.matrix = this.convertMatrix(t, o)))
                      : n
                      ? ((i.storeMatrix = [].concat(n)),
                        (i.matrix = this.convertMatrix(n, o)))
                      : e && (i.matrix = this.convertMatrix(e, o)),
                    r && (i.matrix0 = this.convertMatrix(r, o)),
                    i.payLines && (i.payLines = this.convertPayLine(l)),
                    (this.playSession = i),
                    a("%c run data-update ", "color: red", this.playSession),
                    i
                  );
                }),
                (e.updateSlideWilds = function (i) {
                  var t = this.config.SLIDE_WILD_FORMAT;
                  this.isTrialMode
                    ? (this.mainSlideWildTrial = [])
                    : (this.mainSlideWild = []);
                  for (var r = i.split(","), e = 0; e < r.length; e++) {
                    for (
                      var a = Array.from(Array(t.length), function () {
                          return new Array(t[0]);
                        }),
                        n = r[e].split(";"),
                        l = n[1].split(""),
                        o = n[2].split(":"),
                        s = 0;
                      s < l.length;
                      s++
                    ) {
                      var d = l[s],
                        h = Math.floor(s / t[0]),
                        f = Math.floor(s % t[0]);
                      a[h][f] = d;
                    }
                    this.isTrialMode
                      ? this.mainSlideWildTrial.push({
                          betId: n[0],
                          matrix: a,
                          format: o,
                        })
                      : this.mainSlideWild.push({
                          betId: n[0],
                          matrix: a,
                          format: o,
                        });
                  }
                  return this.isTrialMode
                    ? this.mainSlideWildTrial
                    : this.mainSlideWild;
                }),
                (e.resetSlideWilds = function () {
                  this.isTrialMode
                    ? (this.mainSlideWildTrial = [])
                    : (this.mainSlideWild = []);
                }),
                (e.updateFreeSlideWilds = function () {
                  var i = this.playSession,
                    t = i.storeMatrix,
                    r = i.betId,
                    e = this.config.SLIDE_WILD_FORMAT;
                  this.isTrialMode
                    ? (this.freeSlideWildTrial = [])
                    : (this.freeSlideWild = []);
                  for (
                    var a = Array.from(Array(e.length), function () {
                        return new Array(e[0]);
                      }),
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    var l = t[n],
                      o = Math.floor(n / e[0]),
                      s = Math.floor(n % e[0]);
                    a[o][s] = l;
                  }
                  this.isRemaindingWild(a)
                    ? this.isTrialMode
                      ? this.freeSlideWildTrial.push({ betId: r, matrix: a })
                      : this.freeSlideWild.push({ betId: r, matrix: a })
                    : this.resetFreeSlideWilds();
                }),
                (e.isRemaindingWild = function (i) {
                  for (var t = 0; t < i.length; t++)
                    for (var r = 0; r < i[t].length; r++)
                      if ("K" == i[t][r]) return !0;
                  return !1;
                }),
                (e.resetFreeSlideWilds = function () {
                  this.isTrialMode
                    ? (this.freeSlideWildTrial = [])
                    : (this.freeSlideWild = []);
                }),
                (e.convertMatrix = function (i, t) {
                  void 0 === t && (t = null);
                  var r = this.config.NORMAL_TABLE_FORMAT;
                  return this.convertSlotMatrix(i, t || r);
                }),
                (e.convertSlotMatrix = function (i, t) {
                  void 0 === i && (i = []), void 0 === t && (t = []);
                  for (
                    var r = Array.from(Array(t.length), function () {
                        return new Array(t[0]);
                      }),
                      e = i.slice(),
                      a = [],
                      n = 0;
                    n < e.length;
                    n++
                  )
                    (n + 1) % 4 != 0 && a.push(i[n]);
                  for (var l = 0; l < a.length; l++) {
                    var o = a[l],
                      s = Math.floor(l / t[0]),
                      d = Math.floor(l % t[0]);
                    r[s][d] = o;
                  }
                  return r;
                }),
                (e.convertPayLine = function (i) {
                  void 0 === i && (i = []);
                  for (var t = [], r = 0; r < i.length; r++) {
                    var e = i[r].split(";");
                    e.length >= 3 &&
                      t.push({
                        payLineID: e[0],
                        payLineWinNumbers: parseInt(e[1]),
                        payLineWinAmount: e[2],
                        symbolName: e[3],
                        multiple: Number(e[4]),
                      });
                  }
                  return t;
                }),
                r
              );
            })(n))
          ) || l
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Director9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./Director.ts",
    "./EventNames.ts",
  ],
  function (e) {
    "use strict";
    var t, a, i, o, r, n;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (a = e.cclegacy), (i = e._decorator);
        },
        function (e) {
          o = e.SlotGameMode;
        },
        function (e) {
          r = e.Director;
        },
        function (e) {
          n = e.default;
        },
      ],
      execute: function () {
        var s;
        a._RF.push({}, "365acmHeKpJE4aRVMWpCLew", "Director9938", void 0);
        var c = _,
          u = i.ccclass;
        e(
          "Director9938",
          u("Director9938")(
            (s = (function (e) {
              function a() {
                return e.apply(this, arguments) || this;
              }
              t(a, e);
              var i = a.prototype;
              return (
                (i.onLoad = function () {
                  e.prototype.onLoad.call(this),
                    this.eventManager.on(
                      n.BET_UPDATE,
                      this.changeBetCallback,
                      this
                    );
                }),
                (i.newGameMode = function (t, a) {
                  var i = t.name,
                    r = t.data;
                  switch (
                    (e.prototype.newGameMode.call(
                      this,
                      { name: i, data: r },
                      a
                    ),
                    this.guiMgr.hideAllUI(),
                    i)
                  ) {
                    case o.NormalGame:
                      this.guiMgr.showUIMain();
                      break;
                    case o.FreeGame:
                      this.guiMgr.showUIFree();
                  }
                }),
                (i.resumeGameMode = function (t, a) {
                  var i = t.name;
                  switch (
                    (e.prototype.resumeGameMode.call(this, { name: i }, a),
                    this.guiMgr.hideAllUI(),
                    i)
                  ) {
                    case o.NormalGame:
                      this.guiMgr.showUIMain();
                      break;
                    case o.FreeGame:
                      this.guiMgr.showUIFree();
                  }
                }),
                (i._joinGameSuccess = function (t) {
                  var a = t.extendData;
                  c.isEmpty(a) ||
                    c.isEmpty(a.eData) ||
                    (this.dataStore.updateSlideWilds(a.eData),
                    (t.extendData.eData = null)),
                    e.prototype._joinGameSuccess.call(this, t);
                }),
                (i.changeBetCallback = function () {
                  this.currentGameMode.director.table.emit("ON_CHANGE_BET");
                }),
                a
              );
            })(r))
          ) || s
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DotsHistory9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./DotsHistory.ts"],
  function (t) {
    "use strict";
    var o, i, e, r, s, n, a, c;
    return {
      setters: [
        function (t) {
          (o = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy), (n = t._decorator), (a = t.Node);
        },
        function (t) {
          c = t.DotsHistory;
        },
      ],
      execute: function () {
        var l, u, D, p, h;
        s._RF.push({}, "bbd87c8JdRNU6wGqBHaUHhR", "DotsHistory9938", void 0);
        var d = n.ccclass,
          f = n.property;
        t(
          "DotsHistory9938",
          ((l = d("DotsHistory9938")),
          (u = f({ type: a })),
          l(
            ((h = o(
              (p = (function (t) {
                function o() {
                  for (
                    var o, i = arguments.length, s = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    s[n] = arguments[n];
                  return (
                    (o = t.call.apply(t, [this].concat(s)) || this),
                    e(o, "wildDot", h, r(o)),
                    o
                  );
                }
                i(o, t);
                var s = o.prototype;
                return (
                  (s.onLoad = function () {
                    this.node.on("SHOW_DOTS", this.showDots, this);
                  }),
                  (s.showDots = function (t) {
                    ((this.jackpotDot.active = !1),
                    (this.wildDot.active = !1),
                    (this.freeDot.active = !1),
                    t.metaData) &&
                      t.metaData.slideWildMode > 0 &&
                      (this.wildDot.active = !0);
                    t.totalJpWinAmount && (this.jackpotDot.active = !0),
                      (t.totalFreeWinAmount || t.freeGameTotal) &&
                        (this.freeDot.active = !0);
                  }),
                  o
                );
              })(c)).prototype,
              "wildDot",
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
            (D = p))
          ) || D)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeGameDirector9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotDirector.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var i, e, s, n, o, a, r, u, c;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (s = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy), (a = t._decorator), (r = t.Node);
        },
        function (t) {
          u = t.SlotDirector;
        },
        function (t) {
          c = t.TutorialTriggerType;
        },
      ],
      execute: function () {
        var l, h, _, p, S, f, m;
        o._RF.push(
          {},
          "46079a3UTNG/7GaQZWbFXnr",
          "FreeGameDirector9938",
          void 0
        );
        var T = a.ccclass,
          E = a.property;
        t(
          "FreeGameDirector9938",
          ((l = T("FreeGameDirector9938")),
          (h = E(r)),
          (_ = E(r)),
          l(
            ((f = i(
              (S = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    s(i, "petAxie", f, n(i)),
                    s(i, "freeSpinEffect", m, n(i)),
                    (i.tablePosition = null),
                    i
                  );
                }
                e(i, t);
                var o = i.prototype;
                return (
                  (o.extendInit = function () {
                    this.node.on("SHOW_TABLE_UI", this.showTableUI, this),
                      this.guiMgr.introWildFree.emit(
                        "INIT_WILD_FEATURE",
                        this.slotButton,
                        this.guiMgr
                      ),
                      this.table.emit("SET_UP_PET_AXIE", this.petAxie),
                      (this.tablePosition = this.table.position.clone());
                  }),
                  (o.showTableUI = function (t) {
                    t
                      ? this.table.setPosition(this.tablePosition)
                      : this.table.setPosition(
                          this.tablePosition.x,
                          this.tablePosition.y + 2e3
                        ),
                      this.setOpacity(this.slotButton, t ? 255 : 1),
                      this.table.emit("SHOW_SIDE_WHEEL_UI", t);
                  }),
                  (o.ready = function (t) {
                    this.table.emit("CLEAR_PAYLINES"),
                      t
                        ? (this.table.emit("CHANGE_MATRIX", { matrix: t }),
                          this.table.emit("ON_CHANGE_BET", !0))
                        : this.table.emit("RANDOM_MATRIX_FREE"),
                      this.slotButton &&
                        ((this.slotButton.active = !0),
                        this.slotButton.emit("SPIN_SHOW"),
                        this.slotButton.emit("SPIN_ENABLE"),
                        this.slotButton.emit("STOP_AUTO_SPIN_HIDE"));
                    var i = this.dataStore.playSession,
                      e = i.freeGameRemain,
                      s = i.freeGame,
                      n = e > 0 ? e : s;
                    n > 0 &&
                      (this.spinTimes &&
                        ((this.spinTimes.active = !0),
                        this.spinTimes.emit("UPDATE_SPINTIMES", n)),
                      this.runAction("SpinByTimes", n));
                    var o = c.EnterFreeGame;
                    this.guiMgr.setQuestPosition(this.questDummy),
                      this.soundPlayer && this.soundPlayer.playMainBGM(),
                      this.guiMgr.onIngameEvent(o, "ENTER_GAME_MODE");
                  }),
                  (o._spinClick = function (t) {
                    var i = this;
                    void 0 === t && (t = []),
                      this.fsm.can("actionTrigger") &&
                        (this.fsm.actionTrigger(),
                        this._setTurboMode(),
                        this.resetGameSpeed(),
                        this._showTrialButtons(null, !1),
                        this.slotButton &&
                          (this.slotButton.emit("SPIN_DISABLE"),
                          this.slotButton.emit("SPIN_HIDE"),
                          this.slotButton.emit("FAST_TO_RESULT_DISABLE"),
                          this.slotButton.emit("DISABLE_PROMOTION_STOP_SPIN"),
                          this.slotButton.emit("FAST_TO_RESULT_SHOW")),
                        this.hasTable
                          ? (this.soundPlayer.stopSfx("WIN_COUNTING"),
                            this.guiMgr.onIngameEvent(
                              c.SpinClicked,
                              "SPIN_CLICK"
                            ),
                            this.table.emit("START_SPINNING", function () {
                              i.executeNextScript(t);
                            }),
                            this.guiMgr.winAmount.emit("PLAY_EFFECT_IDLE"))
                          : this.executeNextScript(t));
                  }),
                  (o._forceGameExit = function (t, i) {
                    void 0 === t && (t = []),
                      i.isForce &&
                        (this.fsm.can("actionTrigger") &&
                          this.fsm.actionTrigger(),
                        this.fsm.can("resultReceive") &&
                          this.fsm.resultReceive()),
                      this._gameExit(t);
                  }),
                  (o._gameExit = function (i) {
                    void 0 === i && (i = []),
                      this.fsm.can("gameRestart") &&
                        (this.dataStore.resetFreeSlideWilds(),
                        t.prototype._gameExit.call(this, i));
                  }),
                  (o._blinkAllPaylines_2 = function (t) {
                    this.table.emit("BLINK_ALL_NORMAL_PAYLINES_FAST"),
                      this.executeNextScript(t);
                  }),
                  (o._showSideWheelResult = function (t) {
                    var i = this;
                    void 0 === t && (t = []),
                      this.table.emit("SHOW_SIDE_WHEEL_RESULT", function () {
                        i.executeNextScript(t);
                      });
                  }),
                  (o.forceToExit = function (i) {
                    t.prototype.forceToExit.call(this, i),
                      this.freeSpinEffect.emit("STOP_EFFECT_GET_FREE_SPIN"),
                      this.fastToResultClick();
                  }),
                  (o._playAnimJPWin = function (t, i) {
                    var e = this;
                    void 0 === t && (t = []);
                    var s = i.jackpotType;
                    this.guiMgr.playAnimJackpotWin(s, function () {
                      e.executeNextScript(t);
                    });
                  }),
                  (o._playAnimJPIdle = function (t, i) {
                    void 0 === t && (t = []);
                    var e = i.jackpotType;
                    this.guiMgr.playAnimJackpotIdle(e),
                      this.executeNextScript(t);
                  }),
                  (o._playAnimPetAxie = function (t, i) {
                    void 0 === t && (t = []),
                      this.petAxie.emit("PLAY_PET_ANIMATION", i),
                      this.executeNextScript(t);
                  }),
                  (o._playAnimBuffSymbols = function (t) {
                    void 0 === t && (t = []),
                      this.table.emit("PLAY_ANIM_BUFF"),
                      this.executeNextScript(t);
                  }),
                  (o._playAnimBuffSymbols_2 = function (t) {
                    void 0 === t && (t = []),
                      this.table.emit("PLAY_ANIM_BUFF", !0),
                      this.executeNextScript(t);
                  }),
                  (o._playEffectGetFreeSpin = function (t) {
                    var i = this;
                    void 0 === t && (t = []),
                      this.freeSpinEffect.emit(
                        "PLAY_EFFECT_GET_FREE_SPIN",
                        function () {
                          i.executeNextScript(t);
                        }
                      );
                  }),
                  (o._playEffectGetFreeSpin_2 = function (t) {
                    void 0 === t && (t = []), this.executeNextScript(t);
                  }),
                  (o._updateSpinTimes = function (i, e) {
                    if (
                      (this.guiMgr.onIngameEvent(c.Other, "UPDATE_SPIN_TIMES"),
                      this._checkPauseTutorial("pauseStartFreeGame") ||
                        this._checkPauseTutorial("pauseIntroExtraFree"))
                    )
                      return (
                        (this.storeCurrentScripts = "_updateSpinTimes"),
                        void (this.storeNextScripts = { script: i, data: e })
                      );
                    t.prototype._updateSpinTimes.call(this, i, e);
                  }),
                  (o._countSpinTimes = function (t, i) {
                    var e = this;
                    void 0 === t && (t = []),
                      this.spinTimes.emit("COUNT_SPIN_TIMES", i, function () {
                        e.executeNextScript(t);
                      });
                  }),
                  (o._countSpinTimes_2 = function (t, i) {
                    void 0 === t && (t = []),
                      this.spinTimes.emit("UPDATE_SPINTIMES", i),
                      this.executeNextScript(t);
                  }),
                  (o._runAutoSpin = function (t) {
                    var i = this;
                    void 0 === t && (t = []);
                    var e = this.dataStore.playSession.payLines;
                    !this.isAlwaysAutoSpin &&
                      this.dataStore.isAutoSpin &&
                      this.slotButton &&
                      this.slotButton.emit("STOP_AUTO_SPIN_SHOW"),
                      this.skipAllEffects(),
                      this.slotButton && this.slotButton.emit("SPIN_DISABLE"),
                      this._showTrialButtons(null, !1),
                      (this._callBackAutoSpin = function () {
                        i.runAction("SpinClick"),
                          i.executeNextScript(t),
                          (i._callBackAutoSpin = null);
                      }),
                      (this._autoSpin = !0),
                      this.scheduleOnce(this._callBackAutoSpin, e ? 1 : 0.5);
                  }),
                  (o._updateWinningAmountSync = function (t, i) {
                    var e = this,
                      s = i.winAmount,
                      n = i.time,
                      o = i.rate,
                      a = i.isFTR,
                      r = a ? 20 : n;
                    (this._canFastUpdateWinAmount = !0),
                      (this._winValue = s),
                      s > 0 && !a && this.soundPlayer.playSfx("WIN_COUNTING"),
                      this.guiMgr.winAmount.emit("PLAY_EFFECT_WIN", i),
                      this.guiMgr.updateWinAmount(s, r / 1e3, function () {
                        e.scheduleOnce(function () {
                          e.soundPlayer.stopSfx("WIN_COUNTING");
                        }, 0.05),
                          (e._canFastUpdateWinAmount = !1),
                          (e._winValue = 0),
                          s > 0 && !a && e.playSoundWin(o + 1),
                          e.executeNextScript(t);
                      });
                  }),
                  (o.playSoundWin = function (t) {
                    this.soundPlayer.playSfx("WINLINE_" + Number(t));
                  }),
                  (o.stopSoundWin = function (t) {
                    this.soundPlayer.stopSfx("WIN_COUNTING"),
                      this.soundPlayer.stopSfx("WINLINE_" + Number(t));
                  }),
                  (o.fastToResultClick = function () {
                    t.prototype.fastToResultClick.call(this),
                      this.soundPlayer && this.soundPlayer.playSfx("SPIN_STOP");
                  }),
                  (o._showScatterPayLine = function (i) {
                    t.prototype._showScatterPayLine.call(this, i),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("WIN_SCATTERS");
                  }),
                  i
                );
              })(u)).prototype,
              "petAxie",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (m = i(S.prototype, "freeSpinEffect", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (p = S))
          ) || p)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeGameWriter9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotGameWriter.ts",
  ],
  function (e) {
    "use strict";
    var a, t, n, m, o, i;
    return {
      setters: [
        function (e) {
          a = e.inheritsLoose;
        },
        function (e) {
          (t = e.cclegacy), (n = e._decorator);
        },
        function (e) {
          (m = e.SlotGameMode), (o = e.SlotSceneType);
        },
        function (e) {
          i = e.SlotGameWriter;
        },
      ],
      execute: function () {
        var s;
        t._RF.push({}, "4a544UWogZEt61toRoAyz0U", "FreeGameWriter9938", void 0);
        var u = n.ccclass;
        e(
          "FreeGameWriter9938",
          u("FreeGameWriter9938")(
            (s = (function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              a(t, e);
              var n = t.prototype;
              return (
                (n.makeScriptSpinClick = function () {
                  var e,
                    a,
                    t = [],
                    n = this.node.dataStore,
                    o = n.betData.betId,
                    i = n.spinTimes,
                    s = n.isAutoSpin,
                    u = n.promotion,
                    p = n.currentGameMode,
                    d = n.playSession,
                    c = d.freeGameRemain,
                    r = d.freeGame,
                    l = d.respinGameRemain,
                    h = 0;
                  u && ((e = u.promotionRemain), (a = u.promotionBetId)),
                    c && c > 0
                      ? (h = c - 1)
                      : u && e > 0
                      ? ((h = e - 1),
                        t.push({ command: "_updatePromotionRemain", data: h }))
                      : s
                      ? i && i > 0 && (h = i - 1)
                      : (h = 0),
                    (n.spinTimes = h);
                  var _ = n.getWalletAfterSpin() >= 0;
                  return (
                    t.push({ command: "_showTrialButtons", data: !1 }),
                    _ || c > 0 || r > 0 || u || (l && l > 0)
                      ? (t.push({ command: "_disableBet" }),
                        t.push({ command: "_clearPaylines" }),
                        p === m.NormalGame &&
                          t.push({ command: "_clearWinAmount" }),
                        t.push({ command: "_updateSpinTimes", data: h }),
                        p !== m.NormalGame ||
                          u ||
                          t.push({ command: "_updateWalletAfterClickSpin" }),
                        t.push({ command: "_pauseWallets" }),
                        t.push({ command: "_pauseTopPlayer" }),
                        t.push({ command: "_spinClick" }),
                        !u || c || r
                          ? t.push({
                              command: "_sendSpinToNetwork",
                              data: { currentBetData: o },
                            })
                          : t.push({
                              command: "_sendSpinToNetwork",
                              data: { currentBetData: a },
                            }))
                      : ((n.spinTimes = 0),
                        (n.isAutoSpin = !1),
                        (t = [
                          { command: "_enableBet" },
                          { command: "_resetSpinButton" },
                          { command: "_showTrialButtons", data: !0 },
                          { command: "_showMessageNoMoney" },
                        ])),
                    t
                  );
                }),
                (n.makeScriptResultReceive = function () {
                  var e = this.node.dataStore,
                    a = e.playSession,
                    t = a.matrix,
                    n = a.msw,
                    m = a.jackpotInfo,
                    o = [];
                  if (m) {
                    var i = m[m.length - 1].split(";"),
                      s = i[0].slice(7),
                      u = Number(i[1]);
                    o.push({ command: "_pauseUpdateJP" }),
                      o.push({
                        command: "_updateValueJP",
                        data: { jpType: s, jpValue: u },
                      });
                  }
                  return (
                    e.updateFreeSlideWilds(),
                    o.push({
                      command: "_resultReceive",
                      data: { matrix: t, matrixSideWheel: n },
                    }),
                    o.push({ command: "_showResult", data: t }),
                    o
                  );
                }),
                (n.makeScriptShowResults = function () {
                  var e = this.node.dataStore,
                    a = e.playSession,
                    t = a.matrix,
                    n = a.winAmount,
                    m = a.winAmountPS,
                    i = a.payLines,
                    s = a.msw,
                    u = a.freeGameRemain,
                    p = a.jackpotInfo,
                    d = e.betData,
                    c = e.config,
                    r = e.gameSpeed,
                    l = n && n >= 10 * d.getTotalBet() && !p,
                    h = [],
                    _ = !1,
                    S = this._checkRateSoundWin(),
                    A = r === c.GAME_SPEED.INSTANTLY;
                  if (
                    (h.push({
                      command: "_setUpPaylines",
                      data: { matrix: t, payLines: i },
                    }),
                    e.isTrialMode &&
                      p &&
                      h.push({ command: "_showTrialButtons", data: !1 }),
                    h.push({ command: "_showSideWheelResult" }),
                    !p &&
                      i &&
                      i.findIndex(function (e) {
                        return e.multiple > 1;
                      }) > -1 &&
                      (h.push({ command: "_playAnimBuffSymbols" }), (_ = !0)),
                    p)
                  ) {
                    var y = p[p.length - 1].split(";"),
                      T = y[0].slice(7),
                      f = Number(y[1]);
                    h.push({
                      command: "_playAnimJPWin",
                      data: { jackpotType: T.includes("GRAND") ? 0 : 1 },
                    }),
                      h.push({
                        command: "_showUnskippedCutscene",
                        data: {
                          name: o.JackpotWin,
                          content: {
                            winAmount: f,
                            jackpotType: T.includes("GRAND") ? 0 : 1,
                            currentBetData: d.getTotalBet(),
                          },
                        },
                      }),
                      h.push({
                        command: "_playAnimJPIdle",
                        data: { jackpotType: T.includes("GRAND") ? 0 : 1 },
                      }),
                      i &&
                        i.findIndex(function (e) {
                          return e.multiple > 1;
                        }) > -1 &&
                        !_ &&
                        (h.push({ command: "_playAnimBuffSymbols" }), (_ = !0)),
                      e.isTrialMode &&
                        h.push({ command: "_showTrialButtons", data: !0 }),
                      h.push({
                        command: "_updateWinningAmount",
                        data: { winAmount: m, time: 100 },
                      }),
                      h.push({ command: "_resumeUpdateJP" });
                  } else
                    l &&
                      (h.push({
                        command: "_playAnimPetAxie",
                        data: {
                          state: c.PET_AXIE_STATE.WIN_PAYLINE,
                          winAmount: n,
                          currentBetData: d.getTotalBet(),
                        },
                      }),
                      h.push({ command: "_blinkAllPaylines" }),
                      h.push({
                        command: "_showCutscene",
                        data: {
                          name: o.BigWin,
                          content: {
                            winAmount: n,
                            currentBetData: d.getTotalBet(),
                          },
                        },
                      }));
                  return (
                    i &&
                      i.length > 0 &&
                      (l || h.push({ command: "_blinkAllPaylines" }),
                      h.push({ command: "_showNormalPayline" })),
                    !u || u <= 0
                      ? (n &&
                          n > 0 &&
                          h.push({
                            command: "_updateWinningAmountSync",
                            data: {
                              winAmount: m,
                              time: 950,
                              rate: S,
                              isFTR: A,
                            },
                          }),
                        h.push({ command: "_delayTimeScript", data: 1 }),
                        h.push({ command: "_clearPaylines" }),
                        h.push({
                          command: "_showUnskippedCutscene",
                          data: {
                            name: o.IntroFreeGame,
                            content: { isResume: !1, isEnter: !1 },
                          },
                        }),
                        h.push({ command: "_gameExit" }))
                      : (u - e.spinTimes > 0 &&
                          (h.push({
                            command: "_playAnimPetAxie",
                            data: { state: c.PET_AXIE_STATE.FREE_GAME },
                          }),
                          (e.spinTimes = u),
                          h.push({
                            command: "_playEffectGetFreeSpin",
                            data: s[1],
                          }),
                          h.push({ command: "_countSpinTimes", data: u })),
                        h.push({ command: "_gameRestart" })),
                    h
                  );
                }),
                (n.scriptUpdateWinAmount = function (e) {
                  var a = this.node.dataStore,
                    t = a.playSession,
                    n = t.winAmountPS,
                    m = t.winAmount,
                    o = t.isFinished,
                    i = a.questData,
                    s = i.showedAnim,
                    u = i.winAmountQuest,
                    p = i.playingFinish,
                    d = this._checkRateSoundWin(),
                    c = a.config,
                    r = a.gameSpeed === c.GAME_SPEED.INSTANTLY;
                  o &&
                    !s &&
                    u &&
                    (e.push({ command: "_playAnimWinQuest" }),
                    p && e.push({ command: "_getAvailableQuest" }),
                    (a.questData.showedAnim = !0)),
                    m &&
                      m > 0 &&
                      e.push({
                        command: "_updateWinningAmountSync",
                        data: { winAmount: n, time: 950, rate: d, isFTR: r },
                      }),
                    o &&
                      (e.push({ command: "_resumeWallets" }),
                      e.push({ command: "_resumeTopPlayer" }));
                }),
                (n._checkRateSoundWin = function () {
                  var e = this.node.dataStore,
                    a = e.playSession.winAmount,
                    t = e.getTotalBet();
                  return a < t ? 0 : a == t ? 1 : a > t ? 2 : void 0;
                }),
                t
              );
            })(i))
          ) || s
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeSpinEffect9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var e, o, i, a, r, c, n, l, s, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (c = t._decorator),
            (n = t.Vec3),
            (l = t.ParticleSystem2D),
            (s = t.tween);
        },
        function (t) {
          p = t.GameObject;
        },
      ],
      execute: function () {
        var f, h, u, y;
        r._RF.push({}, "b4495T5ekdFopN/DCMmFq/C", "FreeSpinEffect9938", void 0);
        var d = c.ccclass,
          F = c.property;
        t(
          "FreeSpinEffect9938",
          d("FreeSpinEffect9938")(
            ((u = e(
              (h = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, r = new Array(o), c = 0;
                    c < o;
                    c++
                  )
                    r[c] = arguments[c];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    i(e, "particleFlyPrefabName", u, a(e)),
                    i(e, "particleImpactPrefabName", y, a(e)),
                    (e.poolFactory = null),
                    (e.fromPosition = new n(517, -31, 0)),
                    (e.toPosition = new n(288.6, -234, 0)),
                    (e.callback = void 0),
                    e
                  );
                }
                o(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "PLAY_EFFECT_GET_FREE_SPIN",
                        this.playEffectGetFreeSpin,
                        this
                      ),
                      this.node.on(
                        "STOP_EFFECT_GET_FREE_SPIN",
                        this.stopEffectGetFreeSpin,
                        this
                      );
                  }),
                  (r.playEffectGetFreeSpin = function (t) {
                    var e = this;
                    this.poolFactory ||
                      (this.poolFactory = this.mainDirector.poolFactory),
                      this.soundPlayer && this.soundPlayer.playSfx("EXTRA_ADD");
                    var o = this.poolFactory.getObject(
                      this.particleFlyPrefabName
                    );
                    this.node.addChild(o),
                      (this.callback = t),
                      (o.active = !0),
                      (o.position = this.fromPosition);
                    var i = o.getComponentsInChildren(l);
                    i.forEach(function (t) {
                      t.resetSystem();
                    }),
                      s(o)
                        .delay(0.1)
                        .call(function () {
                          e.soundPlayer &&
                            e.soundPlayer.playSfx("EXTRA_TURN_FLYING");
                        })
                        .to(0.5, { position: this.toPosition })
                        .call(function () {
                          e.callback && e.callback(),
                            (e.callback = null),
                            i.forEach(function (t) {
                              t.stopSystem();
                            }),
                            e.soundPlayer &&
                              e.soundPlayer.playSfx("EXTRA_TURN_ADD"),
                            e.playEffectImpact();
                        })
                        .delay(0.5)
                        .call(function () {
                          e.poolFactory.removeObject(o);
                        })
                        .start();
                  }),
                  (r.stopEffectGetFreeSpin = function () {
                    var t = this;
                    this.node.children.forEach(function (e) {
                      t.poolFactory.removeObject(e);
                    }),
                      this.node.removeAllChildren(),
                      this.callback && this.callback(),
                      (this.callback = null);
                  }),
                  (r.playEffectImpact = function () {
                    var t = this,
                      e = this.poolFactory.getObject(
                        this.particleImpactPrefabName
                      );
                    this.node.addChild(e),
                      (e.active = !0),
                      (e.position = this.toPosition),
                      e.getComponentsInChildren(l).forEach(function (t) {
                        t.resetSystem();
                      }),
                      s(e)
                        .delay(0.25)
                        .call(function () {
                          t.poolFactory.removeObject(e);
                        })
                        .start();
                  }),
                  e
                );
              })(p)).prototype,
              "particleFlyPrefabName",
              [F],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "ParticleFly";
                },
              }
            )),
            (y = e(h.prototype, "particleImpactPrefabName", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "ParticleImpact";
              },
            })),
            (f = h))
          ) || f
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeSpinTimes9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpinTimes.ts"],
  function (n) {
    "use strict";
    var i, t, e, o;
    return {
      setters: [
        function (n) {
          i = n.inheritsLoose;
        },
        function (n) {
          (t = n.cclegacy), (e = n._decorator);
        },
        function (n) {
          o = n.SpinTimes;
        },
      ],
      execute: function () {
        var s;
        t._RF.push({}, "16ef2kJSiVLKaESwtsQZ8ep", "FreeSpinTimes9938", void 0);
        var c = e.ccclass;
        e.property,
          n(
            "FreeSpinTimes9938",
            c("FreeSpinTimes9938")(
              (s = (function (n) {
                function t() {
                  for (
                    var i, t = arguments.length, e = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    e[o] = arguments[o];
                  return (
                    ((i =
                      n.call.apply(n, [this].concat(e)) ||
                      this).countSpinTimeCB = null),
                    (i.count = 0),
                    i
                  );
                }
                i(t, n);
                var e = t.prototype;
                return (
                  (e.onLoad = function () {
                    n.prototype.onLoad.call(this),
                      this.node.on(
                        "COUNT_SPIN_TIMES",
                        this.countSpinTimes,
                        this
                      );
                  }),
                  (e.setSpinTimes = function (n, i) {
                    void 0 === n && (n = null),
                      void 0 === i && (i = 0),
                      n &&
                        Number(i) >= 0 &&
                        ((n.string = "" + (i > 100 ? "∞" : i)),
                        (this.numSpin = i),
                        this.showSpinTimes(n.node, !0));
                  }),
                  (e.countSpinTimes = function (n, i, t) {
                    var e = this;
                    void 0 === t && (t = 1);
                    var o = t / (n - this.numSpin);
                    (this.count = this.numSpin),
                      (this.countSpinTimeCB = function () {
                        e.increaseFakeSp(1),
                          e.count++,
                          e.count == n &&
                            (i && i(), e.unschedule(e.countSpinTimeCB));
                      }),
                      this.schedule(this.countSpinTimeCB, o);
                  }),
                  t
                );
              })(o))
            ) || s
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IconRotate9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, i, n, o, r, s, a;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy), (s = e._decorator), (a = e.Component);
        },
      ],
      execute: function () {
        var c, l, p, h, u;
        r._RF.push({}, "acdeaoxz5lAhZIGdjpvxkeG", "IconRotate9938", void 0);
        var d = s.ccclass,
          f = s.property;
        e(
          "IconRotate9938",
          d("IconRotate9938")(
            ((p = t(
              (l = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, r = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    n(t, "normalSpeed", p, o(t)),
                    n(t, "highSpeed", h, o(t)),
                    n(t, "isClockwise", u, o(t)),
                    (t._speed = 0),
                    t
                  );
                }
                i(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    (this._speed = 0),
                      this.node.on("ON_SPIN_CLICK", this.onSpinClick, this),
                      this.node.on("ON_SPIN_SHOW", this.onSpinShow, this);
                  }),
                  (r.start = function () {
                    this._speed = this.normalSpeed;
                  }),
                  (r.update = function (e) {
                    (this.node.angle +=
                      (this.isClockwise ? -1 : 1) * this._speed * e),
                      (this.node.angle >= 720 || this.node.angle <= -720) &&
                        (this.node.angle = 0);
                  }),
                  (r.onSpinClick = function () {
                    this._speed = this.highSpeed;
                  }),
                  (r.onSpinShow = function () {
                    this._speed = this.normalSpeed;
                  }),
                  t
                );
              })(a)).prototype,
              "normalSpeed",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return 120;
                },
              }
            )),
            (h = t(l.prototype, "highSpeed", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 480;
              },
            })),
            (u = t(l.prototype, "isClockwise", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (c = l))
          ) || c
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Info9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./Info.ts"],
  function (t) {
    "use strict";
    var n, o, i, e;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          e = t.Info;
        },
      ],
      execute: function () {
        var s;
        o._RF.push({}, "36bfdTUJ1dOqK+JcPtGJAER", "Info9938", void 0);
        var r = i.ccclass;
        i.property,
          t(
            "Info9938",
            r("Info9938")(
              (s = (function (t) {
                function o() {
                  for (
                    var n, o = arguments.length, i = new Array(o), e = 0;
                    e < o;
                    e++
                  )
                    i[e] = arguments[e];
                  return (
                    ((n =
                      t.call.apply(t, [this].concat(i)) || this).showingInfo =
                      !1),
                    n
                  );
                }
                n(o, t);
                var i = o.prototype;
                return (
                  (i.show = function () {
                    if (this.showingInfo) return this.exit();
                    (this.showingInfo = !0),
                      (this.node.active = !0),
                      this.setOpacity(this.node, 255);
                  }),
                  (i.exit = function () {
                    (this.showingInfo = !1), t.prototype.exit.call(this);
                  }),
                  o
                );
              })(e))
            ) || s
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroFree9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts", "./IntroFree.ts"],
  function (t) {
    "use strict";
    var e, i, n, o, r, a, l, s, c, u, p, f, h, m;
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
            (l = t.sp),
            (s = t.Node),
            (c = t.CCFloat),
            (u = t.Button),
            (p = t.Label),
            (f = t.tween);
        },
        function (t) {
          h = t.formatMoney;
        },
        function (t) {
          m = t.IntroFree;
        },
      ],
      execute: function () {
        var y, d, v, b, F, w, g, A, C, T, _, S, k, I, x, G, N;
        r._RF.push({}, "67901txLVtC657KFom2eGh0", "IntroFree9938", void 0);
        var z = a.ccclass,
          P = a.property;
        t(
          "IntroFree9938",
          ((y = z("IntroFree9938")),
          (d = P({ type: l.Skeleton })),
          (v = P({ type: s })),
          (b = P({ type: c })),
          (F = P({ type: u })),
          (w = P({ type: l.Skeleton })),
          (g = P({ type: s })),
          y(
            ((T = e(
              (C = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "transitionAnim", T, o(e)),
                    n(e, "winAmount", _, o(e)),
                    n(e, "showingTime", S, o(e)),
                    n(e, "closeBtn", k, o(e)),
                    n(e, "blackCover", I, o(e)),
                    n(e, "vfxConfetti", x, o(e)),
                    n(e, "introFreegame", G, o(e)),
                    n(e, "outroFreegame", N, o(e)),
                    (e.canClose = !1),
                    (e.opacityComp = void 0),
                    (e.animationName = void 0),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this);
                  }),
                  (r.show = function () {
                    (this.node.active = !0),
                      this.setOpacity(this.node, 0),
                      this.fadeIn(this.node, 0.2);
                  }),
                  (r.enter = function () {
                    this.soundPlayer &&
                      (this.soundPlayer.pauseMusic(),
                      this.content.isEnter
                        ? this.soundPlayer.playSfx("TRANSITION_FREE")
                        : this.soundPlayer.playSfx("TOTAL_WIN")),
                      this.showTransitionFreeGame();
                  }),
                  (r.showTransitionFreeGame = function () {
                    if (this.content) {
                      var t = this.content,
                        e = t.spinTimes,
                        i = t.isEnter,
                        n = t.isResume,
                        o = e ? e.toString() : "";
                      this.playAnimEnterFree(o, i, n);
                    }
                  }),
                  (r.playAnimEnterFree = function (t, e, i) {
                    var n = this;
                    void 0 === t && (t = "default"),
                      void 0 === e && (e = !0),
                      void 0 === i && (i = !1),
                      (this.animationName =
                        i || e ? "MainG_To_FreeG" : "FreeG_To_MainG"),
                      this.setOpacity(this.node, 0);
                    var o = e ? 3 : 4.5;
                    if (
                      ((this.blackCover.node.active = !1),
                      (this.transitionAnim.node.active = !0),
                      (this.winAmount.active = !1),
                      (this.vfxConfetti.active = !1),
                      !e && !i)
                    ) {
                      (t = "default"), (this.winAmount.active = !0);
                      var r = this.dataStore.playSession.winAmountPS;
                      (this.winAmount.getComponent(p).string = h(r)),
                        (this.vfxConfetti.active = !0);
                    }
                    this.transitionAnim.setSkin(t),
                      this.transitionAnim.setAnimation(
                        0,
                        this.animationName,
                        !1
                      ),
                      f(this.node)
                        .call(function () {
                          n.fadeIn(n.node, 0.2);
                        })
                        .delay(o)
                        .call(function () {
                          (n.blackCover.node.active = !0),
                            n.setOpacity(n.blackCover.node, 255),
                            n.blackCover.setAnimation(0, "Black_Cover", !1);
                        })
                        .delay(0.65)
                        .call(function () {
                          e || (n.vfxConfetti.active = !1),
                            (n.transitionAnim.node.active = !1),
                            (n.winAmount.active = !1),
                            n.callNextScript(),
                            n.fadeOut(n.blackCover.node, 0.5);
                        })
                        .delay(0.5)
                        .call(function () {
                          n.exit();
                        })
                        .start();
                  }),
                  (r.callNextScript = function () {
                    this.callback && (this.node.mainDirector, this.callback()),
                      this.soundPlayer &&
                        this.soundPlayer.stopSfx("TRANSITION_FREE");
                  }),
                  e
                );
              })(m)).prototype,
              "transitionAnim",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (_ = e(C.prototype, "winAmount", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (S = e(C.prototype, "showingTime", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 3;
              },
            })),
            (k = e(C.prototype, "closeBtn", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(C.prototype, "blackCover", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (x = e(C.prototype, "vfxConfetti", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (G = e(C.prototype, "introFreegame", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "MainG_To_FreeG";
              },
            })),
            (N = e(C.prototype, "outroFreegame", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "FreeG_To_MainG";
              },
            })),
            (A = C))
          ) || A)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroWildFeature9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./GameObject.ts",
  ],
  function (t) {
    "use strict";
    var e, i, o, n, a, s, r, l, u, h, c;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (s = t._decorator),
            (r = t.Node),
            (l = t.sp),
            (u = t.tween);
        },
        function (t) {
          h = t.TutorialTriggerType;
        },
        function (t) {
          c = t.GameObject;
        },
      ],
      execute: function () {
        var d, p, f, y, b, _, S, T, g, L, E, F;
        a._RF.push(
          {},
          "ab77228ck5AJrJX2fidFC8a",
          "IntroWildFeature9938",
          void 0
        );
        var w = s.ccclass,
          m = s.property,
          A = 1,
          v = 2,
          B = { 0: 128, 1: 180 };
        t(
          "IntroWildFeature9938",
          ((d = w("IntroWildFeature9938")),
          (p = m({ type: r })),
          (f = m({ type: l.Skeleton })),
          (y = m({ type: r })),
          (b = m({ type: r })),
          d(
            ((T = e(
              (S = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    o(e, "layout", T, n(e)),
                    o(e, "logoSpine", g, n(e)),
                    o(e, "boardTable", L, n(e)),
                    o(e, "boardWildTable", E, n(e)),
                    o(e, "isWildFeatureFree", F, n(e)),
                    (e.currentState = v),
                    (e.currentLevel = 0),
                    (e._tweenLayout = null),
                    (e.slotButtons = null),
                    (e.uiManager = null),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("SHOW_EFFECT", this.showEffect, this),
                      this.node.on("HIDE_EFFECT", this.hideEffect, this),
                      this.node.on("ENTER_FEATURE", this.enterFeature, this),
                      this.node.on("EXIT_FEATURE", this.exitFeature, this),
                      this.node.on(
                        "INIT_WILD_FEATURE",
                        this.initWildFeature,
                        this
                      ),
                      this.node.on("SET_BOARD_TABLE", this.setBoardTable, this),
                      this.node.on(
                        "FADE_BOARD_TABLE",
                        this.fadeBoardTable,
                        this
                      ),
                      this.exitFeature(),
                      this.isWildFeatureFree && (this.node.active = !1);
                  }),
                  (a.initWildFeature = function (t, e) {
                    (this.slotButtons = t), (this.uiManager = e);
                  }),
                  (a.enterFeature = function () {
                    this.hideLayout(),
                      (this.currentState = A),
                      this.logoSpine.setAnimation(
                        0,
                        "Sliding_Wild_Popup_Idle",
                        !0
                      ),
                      this.showBoardTable(!0);
                  }),
                  (a.exitFeature = function () {
                    this.hideLayout(),
                      (this.currentState = v),
                      this.logoSpine.setAnimation(0, "Logo_Idle", !0),
                      this.showBoardTable(!1);
                  }),
                  (a.isTurbo = function () {
                    return this.dataStore.modeTurbo;
                  }),
                  (a.showEffect = function (t, e) {
                    this.currentState !== A &&
                      (this.soundPlayer &&
                        this.soundPlayer.playSfx("MAGIC_STONE_APPEAR"),
                      this.showLayout(t, e),
                      (this.currentState = A),
                      (this.logoSpine.timeScale = this.isTurbo() ? 2 : 1),
                      this.logoSpine.setAnimation(0, "Logo_Disappear", !1),
                      this.logoSpine.addAnimation(
                        0,
                        "Sliding_Wild_Popup_Appear",
                        !1
                      ),
                      this.logoSpine.addAnimation(
                        0,
                        "Sliding_Wild_Popup_Idle",
                        !0
                      ),
                      this.resetTimeScale("Sliding_Wild_Popup_Appear"),
                      this.showBoardTable(!0));
                  }),
                  (a.hideEffect = function () {
                    this.currentState === A &&
                      ((this.logoSpine.timeScale = this.isTurbo() ? 2 : 1),
                      this.hideLayout(),
                      (this.currentState = v),
                      this.logoSpine.setAnimation(
                        0,
                        "Sliding_Wild_Popup_Disappear",
                        !1
                      ),
                      this.logoSpine.addAnimation(0, "Logo_Appear", !1),
                      this.logoSpine.addAnimation(0, "Logo_Idle", !0),
                      this.resetTimeScale("Logo_Appear"),
                      this.showBoardTable(!1));
                  }),
                  (a.resetTimeScale = function (t) {
                    var e = this;
                    this.logoSpine.setCompleteListener(function (i) {
                      i.animation.name === t &&
                        ((e.logoSpine.timeScale = 1),
                        e.logoSpine.setCompleteListener(function () {}),
                        e.guiMgr.onIngameEvent(
                          h.AnyAction,
                          "SHOW_WILD_FEATURE"
                        ));
                    });
                  }),
                  (a.showBoardTable = function (t) {
                    void 0 === t && (t = !1),
                      this.boardWildTable.forEach(function (e) {
                        e.active = t;
                      }),
                      (this.currentLevel = 2);
                  }),
                  (a.setBoardTable = function (t) {
                    var e = this;
                    if ((void 0 === t && (t = 2), this.currentState === A)) {
                      this.currentLevel = t;
                      var i = B[t] || 255;
                      this.boardWildTable.forEach(function (t) {
                        t.tweenFade &&
                          (t.tweenFade.stop(), (t.tweenFade = null)),
                          e.fadeTo(t, 0.2, i);
                      });
                    }
                  }),
                  (a.fadeBoardTable = function () {
                    this.currentState === A &&
                      (this.currentLevel--,
                      this.setBoardTable(this.currentLevel));
                  }),
                  (a.showLayout = function (t, e) {
                    var i = this;
                    this.disableSpaceKey(),
                      (this.layout.active = !0),
                      this.fadeOut(this.layout, 0),
                      this.fadeIn(this.layout, 0.3),
                      this._tweenLayout &&
                        (this._tweenLayout.stop(), (this._tweenLayout = null)),
                      (this._tweenLayout = u(this.layout)
                        .delay(this.isTurbo() ? 1 : 1.5)
                        .call(function () {
                          e && e(), i.fadeOut(i.layout, 0.3);
                        })
                        .delay(0.3)
                        .call(function () {
                          i.enableSpaceKey(), t && t(), (i.layout.active = !1);
                        })
                        .start());
                  }),
                  (a.hideLayout = function () {
                    this._tweenLayout &&
                      (this._tweenLayout.stop(), (this._tweenLayout = null)),
                      this.setOpacity(this.layout, 0),
                      (this.layout.active = !1);
                  }),
                  (a.disableSpaceKey = function () {
                    this.slotButtons &&
                      this.slotButtons.emit("ENABLE_SPIN_KEY", !1);
                  }),
                  (a.enableSpaceKey = function () {
                    this.slotButtons &&
                      this.uiManager.isTutorialFinished() &&
                      this.slotButtons.emit("ENABLE_SPIN_KEY", !0);
                  }),
                  (a.onDisable = function () {
                    this.boardWildTable.forEach(function (t) {
                      t.tweenFade && (t.tweenFade.stop(), (t.tweenFade = null));
                    }),
                      this._tweenLayout &&
                        (this._tweenLayout.stop(), (this._tweenLayout = null));
                  }),
                  e
                );
              })(c)).prototype,
              "layout",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (g = e(S.prototype, "logoSpine", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (L = e(S.prototype, "boardTable", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (E = e(S.prototype, "boardWildTable", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (F = e(S.prototype, "isWildFeatureFree", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (_ = S))
          ) || _)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Jackpot9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./Jackpot.ts"],
  function (i) {
    "use strict";
    var t, e, n, o, a, s, r, p;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (e = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (a = i.cclegacy), (s = i._decorator), (r = i.sp);
        },
        function (i) {
          p = i.Jackpot;
        },
      ],
      execute: function () {
        var c, l, d, h, u, f, y;
        a._RF.push({}, "9542frArbxEo55djZiTWjwP", "Jackpot9938", void 0);
        var A = s.ccclass,
          v = s.property;
        i(
          "Jackpot9938",
          ((c = A("Jackpot9938")),
          (l = v({ type: r.Skeleton })),
          (d = v({ type: r.Skeleton })),
          c(
            ((f = t(
              (u = (function (i) {
                function t() {
                  for (
                    var t, e = arguments.length, a = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (t = i.call.apply(i, [this].concat(a)) || this),
                    n(t, "spineGrand", f, o(t)),
                    n(t, "spineMajor", y, o(t)),
                    t
                  );
                }
                e(t, i);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    (this.spineGrand.node.active = !0),
                      (this.spineMajor.node.active = !0),
                      this.node.on("PLAY_ANIM_JPWIN", this.playAnimJPWin, this),
                      this.node.on(
                        "PLAY_ANIM_JPIDLE",
                        this.playAnimJPIdle,
                        this
                      ),
                      this.spineGrand.setAnimation(0, "Idle_CoDai", !0),
                      this.spineMajor.setAnimation(0, "Idle_ThanBi", !0),
                      i.prototype.onLoad.call(this);
                  }),
                  (a.playAnimJPWin = function (i, t) {
                    var e = 0 === i ? this.spineGrand : this.spineMajor,
                      n = 0 === i ? "Jump_CoDai" : "Jump_ThanBi";
                    (e.node.active = !0),
                      e.setAnimation(0, n, !1),
                      (this.jackpots[
                        0 === i ? "GRAND" : "MAJOR"
                      ].jpNode.active = !1),
                      e.setCompleteListener(function () {
                        e.setCompleteListener(function () {}),
                          (e.node.active = !1),
                          t && t();
                      });
                  }),
                  (a.playAnimJPIdle = function (i) {
                    var t = 0 === i ? this.spineGrand : this.spineMajor,
                      e = 0 === i ? "Idle_CoDai" : "Idle_ThanBi";
                    t.node.active = !0;
                    var n = this.jackpots[0 === i ? "GRAND" : "MAJOR"].jpNode;
                    (n.active = !0),
                      this.setOpacity(n, 0),
                      this.fadeIn(n, 0.5),
                      this.setOpacity(t.node, 0),
                      this.fadeIn(t.node, 0.5),
                      t.setAnimation(0, e, !0);
                  }),
                  t
                );
              })(p)).prototype,
              "spineGrand",
              [l],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (y = t(u.prototype, "spineMajor", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (h = u))
          ) || h)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotCoinEffect9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./JackpotCoinEffect.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var e, o, n, i, s, r, a, p, c, m;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy),
            (n = t._decorator),
            (i = t.instantiate),
            (s = t.ParticleSystem2D),
            (r = t.view),
            (a = t.tween),
            (p = t.Vec3);
        },
        function (t) {
          c = t.JackpotCoinEffect;
        },
        function (t) {
          m = t.setOpacity;
        },
      ],
      execute: function () {
        var h;
        o._RF.push(
          {},
          "5faf7I9z6JLVZIxq9BtYX7l",
          "JackpotCoinEffect9938",
          void 0
        );
        var f = n.ccclass;
        t(
          "JackpotCoinEffect9938",
          f("JackpotCoinEffect9938")(
            (h = (function (t) {
              function o() {
                return t.apply(this, arguments) || this;
              }
              e(o, t);
              var n = o.prototype;
              return (
                (n.initValue = function () {
                  if (this.moneyPrefab) {
                    this.moneyPool = [];
                    for (var t = 0; t < 20; ++t) {
                      var e = i(this.moneyPrefab);
                      (e.parent = this.moneySpawner),
                        m(e, 0),
                        this.moneyPool.push(e);
                    }
                    this.moneySpawner && m(this.moneySpawner, 0);
                  }
                }),
                (n.startParticle = function () {
                  var t = this;
                  this.coinDropper.getComponent(s).resetSystem(),
                    this.coinPiles &&
                      this.coinPiles.forEach(function (e) {
                        e.getComponent(s).resetSystem(),
                          e.setPosition(0, -r.getVisibleSize().height / 2),
                          a(e)
                            .by(t.duration, { position: new p(0, 50, 0) })
                            .start();
                      });
                }),
                (n.stopParticle = function () {
                  this.coinDropper.getComponent(s).stopSystem(),
                    this.coinPiles &&
                      this.coinPiles.forEach(function (t) {
                        t.getComponent(s).stopSystem();
                      }),
                    this.diamondDropper &&
                      (this.diamondDropper.getComponent(s).resetSystem(),
                      this.diamondDropper.getComponent(s).stopSystem(),
                      this.diamondPiles.forEach(function (t) {
                        t.getComponent(s).resetSystem(),
                          t.getComponent(s).stopSystem();
                      }));
                }),
                (n.randomDropMoney = function () {
                  var t = this;
                  this.moneyPrefab &&
                    ((this.moneyIndex = 0),
                    m(this.moneySpawner, 0),
                    a(this.moneySpawner)
                      .repeatForever(
                        a()
                          .delay(0.3)
                          .call(function () {
                            t.dropMoney();
                          })
                      )
                      .start());
                }),
                (n.dropMoney = function () {
                  if (this.moneyPool) {
                    var t = this.moneyPool[this.moneyIndex];
                    (this.moneyIndex =
                      (this.moneyIndex + 1) % this.moneyPool.length),
                      (t.position.x =
                        (Math.random() - 0.5) * r.getVisibleSize().width);
                    var e = "TienRoi" + ((3 * Math.random()) | 1);
                    m(t, 1),
                      t.getComponent("sp.Skeleton").setAnimation(0, e, !1);
                  }
                }),
                (n.dropDiamond = function () {
                  this.diamondDropper &&
                    (m(this.diamondDropper, 0),
                    this.diamondDropper.getComponent(s).resetSystem());
                }),
                o
              );
            })(c))
          ) || h
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotWin9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./JackpotWin.ts",
  ],
  function (t) {
    "use strict";
    var i, n, e, o, a, s, l, r, c, u;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy), (s = t._decorator), (l = t.sp), (r = t.tween);
        },
        function (t) {
          c = t.formatMoney;
        },
        function (t) {
          u = t.JackpotWin;
        },
      ],
      execute: function () {
        var p, h, d, y, f;
        a._RF.push({}, "679ffdXbANB/IKY2T1hvQg0", "JackpotWin9938", void 0);
        var A = s.ccclass,
          T = s.property;
        t(
          "JackpotWin9938",
          ((p = A("JackpotWin9938")),
          (h = T({ type: l.Skeleton })),
          p(
            ((f = i(
              (y = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, a = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(a)) || this),
                    e(i, "jackpotAnim", f, o(i)),
                    i
                  );
                }
                n(i, t);
                var a = i.prototype;
                return (
                  (a.playSoundStart = function () {
                    this.soundPlayer && this.soundPlayer.stopAllAudio(),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("JACKPOT_START", !0),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("COIN_FALLING");
                  }),
                  (a.playSoundEnd = function () {
                    this.soundPlayer &&
                      this.soundPlayer.stopSfx("JACKPOT_START"),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("JACKPOT_END");
                  }),
                  (a.show = function () {
                    (this.node.active = !0), this.setOpacity(this.node, 255);
                  }),
                  (a.enter = function () {
                    var t = this;
                    this.setOpacity(this.jackpotAnim.node, 255);
                    var i = 0 === this.content.jackpotType ? "CoDai" : "ThanBi";
                    this.jackpotAnim.setAnimation(0, "Open_" + i, !1),
                      this.jackpotAnim.addAnimation(0, "Win_" + i, !0),
                      this.playSoundStart(),
                      (this.label.string = ""),
                      this.scheduleOnce(function () {
                        t.playTweenWinAmount(),
                          t.playTweenTitle(),
                          t.startParticle(),
                          t.initValue(),
                          t.startUpdateWinAmount();
                      }, 1);
                  }),
                  (a.finish = function () {
                    var t = this;
                    (this.isUpdating = !1),
                      (this.label.string = c(this.content.winAmount)),
                      this.stopParticle(),
                      this.stopTweenTitle(),
                      this.stopTweenWinAmount(),
                      (this.tweenExit = r(this.node)
                        .delay(this.delayShowTime)
                        .call(function () {
                          t.fadeTo(t.node, t.hideTime, 1),
                            t.fadeTo(t.jackpotAnim.node, t.hideTime, 1);
                        })
                        .delay(this.hideTime)
                        .call(function () {
                          (t.label.string = ""),
                            t.exit(),
                            t.soundPlayer && t.soundPlayer.stopAllAudio(),
                            t.soundPlayer && t.soundPlayer.playMainBGM();
                        })
                        .start());
                  }),
                  i
                );
              })(u)).prototype,
              "jackpotAnim",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
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

System.register(
  "chunks:///_virtual/LineDrawingPayline9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./LineDrawingPayline.ts"],
  function (i) {
    "use strict";
    var t, e, n, s, o, a, h, r, c, f, l, L, g, p, d;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (e = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (s = i.assertThisInitialized);
        },
        function (i) {
          (o = i.cclegacy),
            (a = i._decorator),
            (h = i.Node),
            (r = i.Prefab),
            (c = i.Sprite),
            (f = i.UITransform),
            (l = i.Vec3),
            (L = i.instantiate),
            (g = i.tween),
            (p = i.Animation);
        },
        function (i) {
          d = i.LineDrawingPayline;
        },
      ],
      execute: function () {
        var u, _, H, O, m, v, Y;
        o._RF.push(
          {},
          "e2f8fhp6a1NrZxBhhSpLRt4",
          "LineDrawingPayline9938",
          void 0
        );
        var S = a.ccclass,
          y = a.property;
        i(
          "LineDrawingPayline9938",
          ((u = S("LineDrawingPayline9938")),
          (_ = y({ type: h })),
          (H = y({ type: r })),
          u(
            ((v = t(
              (m = (function (i) {
                function t() {
                  for (
                    var t, e = arguments.length, o = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = i.call.apply(i, [this].concat(o)) || this),
                    n(t, "effectLineHolder", v, s(t)),
                    n(t, "lineAnim", Y, s(t)),
                    (t._usingEffectLine = []),
                    t
                  );
                }
                e(t, i);
                var o = t.prototype;
                return (
                  (o.addLine = function (i, t, e) {
                    if (
                      (this.cachedLine[t] || (this.cachedLine[t] = []),
                      this.cachedLine[t][e])
                    ) {
                      if (this.cachedLine[t][e][i]) return;
                    } else this.cachedLine[t][e] = [];
                    this.cachedLine[t][e][i] = !0;
                    var n = null;
                    this.poolFactory &&
                      ((n = this.poolFactory.getObject(
                        this.linePrefabName
                      )).active = !0),
                      (n.parent = this.lineHolder),
                      this._usingObj.push(n);
                    var s =
                        this._startXPos +
                        this.config.SYMBOL_WIDTH / 2 +
                        t * this.config.SYMBOL_WIDTH,
                      o =
                        this._startYPos +
                        this.config.SYMBOL_HEIGHT / 2 +
                        (this.totalRow - 1 - e) * this.config.SYMBOL_HEIGHT;
                    o -= this.heightOffsetAllLines;
                    var a = n.getComponent(c);
                    a || (a = n.addComponent(c));
                    var h = n.getComponent(f);
                    if ((h || (h = n.addComponent(f)), 0 == i))
                      (a.spriteFrame = this.lineSprites[0]),
                        (h.width = this.config.SYMBOL_WIDTH),
                        (h.height = this.horizontalLineHeight),
                        (h.anchorX = 0),
                        (h.anchorY = 0.5),
                        (n.scale = new l(1, 1, 1)),
                        n.setPosition(s, o, 1);
                    else if (1 == i || 2 == i) {
                      (a.spriteFrame = this.lineSprites[1]),
                        (h.anchorX = 0),
                        (h.anchorY = 0),
                        (n.scale = new l(1, 1 == i ? 1 : -1, 1));
                      var r = 1 == i ? 1 : -1;
                      n.setPosition(s, o - r, 1);
                    } else if (3 == i || 4 == i) {
                      (a.spriteFrame = this.lineSprites[2]),
                        (h.anchorX = 0),
                        (h.anchorY = 0),
                        (n.scale = new l(1, 3 == i ? 1 : -1, 1));
                      var L = 3 == i ? 2 : -2;
                      n.setPosition(s, o - L, 1);
                    }
                    this.addDotToLine(t, e), this.addEffectLine(i, t, e);
                  }),
                  (o.addFirstLine = function (i) {
                    if (!this.cachedFirstLine[i]) {
                      var t;
                      (this.cachedFirstLine[i] = !0),
                        this.poolFactory &&
                          ((t = this.poolFactory.getObject(
                            this.linePrefabName
                          )).active = !0),
                        (t.parent = this.lineHolder),
                        this._usingObj.push(t);
                      var e =
                        1 == i
                          ? this.config.SYMBOL_WIDTH / 2
                          : -this.leftOffset;
                      e += this._startXPos;
                      var n =
                        this._startYPos +
                        this.config.SYMBOL_HEIGHT / 2 +
                        this.config.SYMBOL_HEIGHT;
                      n -= this.heightOffsetAllLines;
                      var s = t.getComponent(c);
                      s || (s = t.addComponent(c));
                      var o = t.getComponent(f);
                      if ((o || (o = t.addComponent(f)), 1 == i))
                        (s.spriteFrame = this.lineSprites[0]),
                          (o.width =
                            this.config.SYMBOL_WIDTH / 2 + this.leftOffset),
                          (o.height = this.horizontalLineHeight),
                          (o.anchorX = 0),
                          (o.anchorY = 0.5),
                          (t.scale = new l(-1, 1, 1)),
                          t.setPosition(e, n, 1);
                      else if (0 == i || 2 == i) {
                        (s.spriteFrame = this.lineSprites[3]),
                          (o.width =
                            this.config.SYMBOL_WIDTH / 2 + this.rightOffset),
                          (o.anchorX = 0),
                          (o.anchorY = 0.5);
                        var a =
                          0 == i
                            ? this.config.SYMBOL_HEIGHT
                            : -this.config.SYMBOL_HEIGHT;
                        t.setPosition(e, n + a, 1);
                      }
                      this.addEffectLine(0, -1, i);
                    }
                  }),
                  (o.addLastLine = function (i) {
                    if (!this.cachedLastLine[i]) {
                      var t;
                      (this.cachedLastLine[i] = !0),
                        this.poolFactory &&
                          ((t = this.poolFactory.getObject(
                            this.linePrefabName
                          )).active = !0),
                        (t.parent = this.lineHolder),
                        this._usingObj.push(t);
                      var e =
                          this._startXPos +
                          (1 == i
                            ? this.config.SYMBOL_WIDTH / 2
                            : this.config.SYMBOL_WIDTH + this.rightOffset) +
                          (this.totalCol - 1) * this.config.SYMBOL_WIDTH,
                        n =
                          this._startYPos +
                          this.config.SYMBOL_HEIGHT / 2 +
                          this.config.SYMBOL_HEIGHT;
                      n -= this.heightOffsetAllLines;
                      var s = t.getComponent(c);
                      s || (s = t.addComponent(c));
                      var o = t.getComponent(f);
                      if ((o || (o = t.addComponent(f)), 1 == i))
                        (s.spriteFrame = this.lineSprites[0]),
                          (o.width =
                            this.config.SYMBOL_WIDTH / 2 + this.rightOffset),
                          (o.height = this.horizontalLineHeight),
                          (o.anchorX = 0),
                          (o.anchorY = 0.5),
                          (t.scale = new l(1, 1, 1)),
                          t.setPosition(e, n, 1);
                      else if (0 == i || 2 == i) {
                        (s.spriteFrame = this.lineSprites[3]),
                          (o.width =
                            this.config.SYMBOL_WIDTH / 2 + this.rightOffset),
                          (o.anchorX = 0),
                          (o.anchorY = 0.5),
                          (t.scale = new l(-1, 1, 1));
                        var a =
                          0 == i
                            ? this.config.SYMBOL_HEIGHT
                            : -this.config.SYMBOL_HEIGHT;
                        t.setPosition(e, n + a, 1);
                      }
                      this.addDotToLine(4, i), this.addEffectLine(0, 4, i);
                    }
                  }),
                  (o.addDotToLine = function (i, t) {}),
                  (o.addEffectLine = function (i, t, e) {
                    var n = this.config,
                      s = n.SYMBOL_WIDTH,
                      o = n.SYMBOL_HEIGHT,
                      a = null,
                      h =
                        -1 != t
                          ? this._startXPos + s / 2 + t * s
                          : this._startXPos,
                      r = this._startYPos + o / 2 + (this.totalRow - 1 - e) * o;
                    ((a = L(this.lineAnim[i])).parent = this.effectLineHolder),
                      this.setOpacity(a, 255);
                    var c = a.getComponent(f);
                    (a.tweenLine = g(a)
                      .delay(0.17 * (t + 1))
                      .call(function () {
                        a.getComponent(p).play();
                      })
                      .delay(1)
                      .call(function () {
                        a.getComponent(p).play(), (a.tweenLine = null);
                      })
                      .start()),
                      this._usingEffectLine.push(a),
                      (c.anchorX = 0),
                      a.setPosition(h, r, 1),
                      (-1 !== t && 4 !== t) || (a.scale = new l(0.51, 1, 1));
                  }),
                  (o.clear = function () {
                    for (var i = 0; i < this._usingObj.length; i++) {
                      var t = this._usingObj[i];
                      t &&
                        ((t.scale = new l(1, 1, 1)),
                        this.poolFactory.removeObject(t));
                    }
                    for (var e = 0; e < this._usingEffectLine.length; e++) {
                      var n = this._usingEffectLine[e];
                      n && n.tweenLine && n.tweenLine.stop();
                    }
                    this.effectLineHolder.removeAllChildren(),
                      (this._usingEffectLine = []),
                      (this._usingObj = []),
                      (this.cachedLine = []),
                      (this.cachedFirstLine = []),
                      (this.cachedLastLine = []),
                      (this.cachedDotLine = []);
                  }),
                  t
                );
              })(d)).prototype,
              "effectLineHolder",
              [_],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (Y = t(m.prototype, "lineAnim", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (O = m))
          ) || O)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LoadingContent9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, n, i, r, a, o, p, s, l, c;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (p = t.Sprite),
            (s = t.SpriteFrame),
            (l = t.tween),
            (c = t.Component);
        },
      ],
      execute: function () {
        var u, d, h, S, g, f, y;
        a._RF.push({}, "78dfcHCZqZBzI4j/PUArGRY", "LoadingContent9938", void 0);
        var C = o.ccclass,
          v = o.property;
        t(
          "LoadingContent9938",
          ((u = C("LoadingContent9938")),
          (d = v({ type: p })),
          (h = v({ type: s })),
          u(
            ((f = e(
              (g = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "content", f, r(e)),
                    i(e, "listSprites", y, r(e)),
                    (e.tweenChangeSprite = null),
                    (e.updatedSprites = []),
                    e
                  );
                }
                n(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var t = this;
                    (this.updatedSprites = []),
                      (this.tweenChangeSprite = l(this.node).repeatForever(
                        l()
                          .call(function () {
                            0 === t.updatedSprites.length &&
                              (t.updatedSprites = [].concat(t.listSprites));
                            var e = Math.floor(
                              Math.random() * t.updatedSprites.length
                            );
                            (t.content.spriteFrame = t.updatedSprites[e]),
                              t.updatedSprites.splice(e, 1);
                          })
                          .delay(5)
                      )),
                      this.tweenChangeSprite.start();
                  }),
                  (a.onDisable = function () {
                    this.tweenChangeSprite &&
                      (this.tweenChangeSprite.stop(),
                      (this.tweenChangeSprite = null));
                  }),
                  e
                );
              })(c)).prototype,
              "content",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (y = e(g.prototype, "listSprites", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = g))
          ) || S)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NormalGameDirector9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotDirector.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, s, o, a, c, u, r, l;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy), (a = t._decorator), (c = t.Node), (u = t.tween);
        },
        function (t) {
          r = t.TutorialTriggerType;
        },
        function (t) {
          l = t.SlotDirector;
        },
      ],
      execute: function () {
        var h, p, _, S, A;
        o._RF.push(
          {},
          "7c0cbLAJBFPvZ3Dxgfm338L",
          "NormalGameDirector9938",
          void 0
        );
        var m = a.ccclass,
          f = a.property;
        t(
          "NormalGameDirector9938",
          ((h = m("NormalGameDirector9938")),
          (p = f(c)),
          h(
            ((A = i(
              (S = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    n(i, "petAxie", A, s(i)),
                    (i._waitingForActionAnim = null),
                    (i.tablePosition = null),
                    (i._winRate = null),
                    i
                  );
                }
                e(i, t);
                var o = i.prototype;
                return (
                  (o.extendInit = function () {
                    this.node.on("SHOW_TABLE_UI", this.showTableUI, this),
                      this.guiMgr.introWildMain.emit(
                        "INIT_WILD_FEATURE",
                        this.slotButton,
                        this.guiMgr
                      ),
                      this.table.emit("SET_UP_PET_AXIE", this.petAxie),
                      (this.tablePosition = this.table.position.clone());
                  }),
                  (o.switchMode = function () {
                    t.prototype.switchMode.call(this),
                      this.table.emit("SWITCH_TABLE");
                  }),
                  (o.showTableUI = function (t) {
                    t
                      ? this.table.setPosition(this.tablePosition)
                      : this.table.setPosition(
                          this.tablePosition.x,
                          this.tablePosition.y + 2e3
                        ),
                      this.setOpacity(this.slotButton, t ? 255 : 1),
                      this.table.emit("SHOW_SIDE_WHEEL_UI", t);
                  }),
                  (o.enableButtonInteraction = function () {
                    this.slotButton.emit("ENABLE_BUTTON_INTERACTION"),
                      t.prototype.enableButtonInteraction.call(this);
                  }),
                  (o._updateMatrixSideWheel = function (t, i) {
                    void 0 === t && (t = []),
                      void 0 === i && (i = []),
                      this.table.emit("UPDATE_MATRIX_SIDE_WHEEL", i),
                      this.executeNextScript(t);
                  }),
                  (o._spinClick = function (t) {
                    var i = this;
                    void 0 === t && (t = []),
                      this.fsm.can("actionTrigger") &&
                        (this.fsm.actionTrigger(),
                        this._setTurboMode(),
                        this.resetGameSpeed(),
                        this._showTrialButtons(null, !1),
                        this.slotButton &&
                          (this.slotButton.emit("SPIN_DISABLE"),
                          this.slotButton.emit("SPIN_HIDE"),
                          this.slotButton.emit("FAST_TO_RESULT_DISABLE"),
                          this.slotButton.emit("DISABLE_PROMOTION_STOP_SPIN"),
                          this.slotButton.emit("FAST_TO_RESULT_SHOW")),
                        this._canFastUpdateWinAmount &&
                          this._winValue > 0 &&
                          ((this._canFastUpdateWinAmount = !1),
                          this.guiMgr.winAmount.emit("FAST_UPDATE_WIN_AMOUNT", {
                            value: this._winValue,
                            time: 0,
                          })),
                        this.hasTable
                          ? (this.scheduleOnce(function () {
                              i.soundPlayer.stopSfx("WINLINE_" + i._winRate);
                            }, 0.05),
                            this.guiMgr.onIngameEvent(
                              r.SpinClicked,
                              "SPIN_CLICK"
                            ),
                            this.table.emit("START_SPINNING", function () {
                              i.executeNextScript(t);
                            }),
                            this.guiMgr.winAmount.emit("PLAY_EFFECT_IDLE"))
                          : this.executeNextScript(t));
                  }),
                  (o._showUnskippedCutscene = function (t, i) {
                    var e = this,
                      n = i.name,
                      s = i.content;
                    if (
                      this._checkPauseTutorial("pauseFreeGame") ||
                      this._checkPauseTutorial("pauseBonusGame")
                    ) {
                      this.storeCurrentScripts = "_showCutscene";
                      var o = { name: n, content: s };
                      this.storeNextScripts = { script: t, data: o };
                    } else
                      this.guiMgr.showCutScene(n, s, function () {
                        e.executeNextScript(t);
                      });
                  }),
                  (o._blinkAllPaylines_2 = function (t) {
                    this.table.emit("BLINK_ALL_NORMAL_PAYLINES_FAST"),
                      this.executeNextScript(t);
                  }),
                  (o._showSideWheelResult = function (t) {
                    var i = this;
                    void 0 === t && (t = []),
                      this.table.emit("SHOW_SIDE_WHEEL_RESULT", function () {
                        i.executeNextScript(t);
                      });
                  }),
                  (o._resumeGameMode = function (i, e) {
                    void 0 === i && (i = []);
                    var n = e.name,
                      s = e.data;
                    this._autoSpin || this.slotButton.emit("SPIN_ENABLE"),
                      t.prototype._resumeGameMode.call(this, i, {
                        name: n,
                        data: s,
                      });
                  }),
                  (o._playSoundWin = function (t, i) {
                    void 0 === t && (t = []), this.executeNextScript(t);
                  }),
                  (o._playSoundWin_2 = function (t) {
                    void 0 === t && (t = []), this.executeNextScript(t);
                  }),
                  (o._showNormalPayline = function (t) {
                    var i = this;
                    if (this.hasPayline)
                      if (this.canStoreAsyncScript()) {
                        this.storeAsyncScript(t, {
                          callback: function () {
                            i.guiMgr.onIngameEvent(
                              r.ShowPayline,
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
                          r.ShowPayline,
                          "SHOW_NORMAL_PAYLINE"
                        ),
                          this.table.emit("SHOW_ALL_NORMAL_PAYLINES"),
                          this.executeNextScript(t);
                    else this.executeNextScript(t);
                  }),
                  (o._showSlideWildFeature = function (t) {
                    var i = this;
                    if (this.canStoreAsyncScript()) {
                      this.storeAsyncScript(t, {
                        callback: function () {
                          i.table.emit("SHOW_WILD_FEATURE"), i.runAsyncScript();
                        },
                        name: "_showSlideWildFeature",
                        isSkippable: !0,
                      });
                    } else
                      this.table.emit("SHOW_WILD_FEATURE"),
                        this.executeNextScript(t);
                  }),
                  (o._playAnimJPWin = function (t, i) {
                    var e = this;
                    void 0 === t && (t = []);
                    var n = i.jackpotType;
                    this.guiMgr.playAnimJackpotWin(n, function () {
                      e.executeNextScript(t);
                    });
                  }),
                  (o._playAnimJPIdle = function (t, i) {
                    void 0 === t && (t = []);
                    var e = i.jackpotType;
                    this.guiMgr.playAnimJackpotIdle(e),
                      this.executeNextScript(t);
                  }),
                  (o._playAnimPetAxie = function (t, i) {
                    var e = this;
                    if (this.canStoreAsyncScript()) {
                      this.storeAsyncScript(t, {
                        callback: function () {
                          e.petAxie.emit("PLAY_PET_ANIMATION", i),
                            e.runAsyncScript();
                        },
                        name: "_playAnimPetAxie",
                        isSkippable: !1,
                      });
                    } else
                      this.petAxie.emit("PLAY_PET_ANIMATION", i),
                        this.executeNextScript(t);
                  }),
                  (o._triggerPetAxieSleepingMode = function (t) {
                    this.triggerPetAxieSleepingMode(),
                      this.executeNextScript(t);
                  }),
                  (o.triggerPetAxieSleepingMode = function () {
                    var t = this,
                      i = 0;
                    this._waitingForActionAnim &&
                      (this._waitingForActionAnim.stop(),
                      (this._waitingForActionAnim = null)),
                      (this._waitingForActionAnim = u(this.node).repeatForever(
                        u()
                          .delay(10)
                          .call(function () {
                            if (++i >= 30) {
                              var e = {
                                state: t.config.PET_AXIE_STATE.SLEEPING,
                              };
                              t.petAxie.emit("PLAY_PET_ANIMATION", e),
                                t._waitingForActionAnim &&
                                  (t._waitingForActionAnim.stop(),
                                  (t._waitingForActionAnim = null));
                            }
                          })
                      )),
                      this._waitingForActionAnim.start();
                  }),
                  (o._playAnimBuffSymbols = function (t) {
                    var i = this;
                    if (
                      (void 0 === t && (t = []), this.canStoreAsyncScript())
                    ) {
                      this.storeAsyncScript(t, {
                        callback: function () {
                          i.table.emit("PLAY_ANIM_BUFF"), i.runAsyncScript();
                        },
                        name: "_playAnimBuffSymbols",
                        isSkippable: !1,
                      });
                    } else
                      this.table.emit("PLAY_ANIM_BUFF"),
                        this.executeNextScript(t);
                  }),
                  (o._playAnimBuffSymbols_2 = function (t) {
                    void 0 === t && (t = []),
                      this.table.emit("PLAY_ANIM_BUFF", !0),
                      this.executeNextScript(t);
                  }),
                  (o._runAutoSpin = function (t) {
                    var i = this;
                    void 0 === t && (t = []);
                    var e = this.dataStore.playSession.payLines;
                    !this.isAlwaysAutoSpin &&
                      this.dataStore.isAutoSpin &&
                      this.slotButton &&
                      this.slotButton.emit("STOP_AUTO_SPIN_SHOW"),
                      this.skipAllEffects(),
                      this.slotButton && this.slotButton.emit("SPIN_DISABLE"),
                      this._showTrialButtons(null, !1),
                      (this._callBackAutoSpin = function () {
                        i.runAction("SpinClick"),
                          i.executeNextScript(t),
                          (i._callBackAutoSpin = null);
                      }),
                      (this._autoSpin = !0),
                      this.scheduleOnce(this._callBackAutoSpin, e ? 1 : 0.5);
                  }),
                  (o._updateWinningAmountSync = function (t, i) {
                    var e = this,
                      n = i.winAmount,
                      s = i.time,
                      o = i.rate,
                      a = i.isFTR,
                      c = a ? 20 : s;
                    if (
                      ((this._canFastUpdateWinAmount = !0),
                      (this._winValue = n),
                      this.canStoreAsyncScript())
                    ) {
                      this.storeAsyncScript(t, {
                        callback: function () {
                          n > 0 && !a && e.soundPlayer.playSfx("WIN_COUNTING"),
                            e.guiMgr.winAmount.emit("PLAY_EFFECT_WIN", i),
                            e.guiMgr.updateWinAmount(n, c / 1e3, function () {
                              e.scheduleOnce(function () {
                                e.soundPlayer.stopSfx("WIN_COUNTING");
                              }, 0.05),
                                (e._canFastUpdateWinAmount = !1),
                                (e._winValue = 0),
                                n > 0 && !a && e.playSoundWin(o + 1),
                                (e._winRate = o + 1),
                                e.runAsyncScript();
                            });
                        },
                        name: "_updateWinningAmountSync",
                        isSkippable: !1,
                      });
                    } else
                      n > 0 && !a && this.soundPlayer.playSfx("WIN_COUNTING"),
                        this.guiMgr.updateWinAmount(n, c / 1e3, function () {
                          e.scheduleOnce(function () {
                            e.soundPlayer.stopSfx("WIN_COUNTING");
                          }, 0.05),
                            (e._canFastUpdateWinAmount = !1),
                            (e._winValue = 0),
                            n > 0 && !a && e.playSoundWin(o + 1),
                            (e._winRate = o + 1),
                            e.executeNextScript(t);
                        });
                  }),
                  (o.playSoundWin = function (t) {
                    this.soundPlayer.playSfx("WINLINE_" + t);
                  }),
                  (o.stopSoundWin = function (t) {
                    this.soundPlayer.stopSfx("WIN_COUNTING"),
                      this.soundPlayer.stopSfx("WINLINE_" + t);
                  }),
                  (o.fastToResultClick = function () {
                    t.prototype.fastToResultClick.call(this),
                      this.soundPlayer && this.soundPlayer.playSfx("SPIN_STOP");
                  }),
                  (o._showScatterPayLine = function (i) {
                    t.prototype._showScatterPayLine.call(this, i),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("WIN_SCATTERS");
                  }),
                  (o._showCutsceneBigWin = function (t, i) {
                    var e = this,
                      n = i.name,
                      s = i.content;
                    if (this.canStoreAsyncScript()) {
                      this.storeAsyncScript(t, {
                        callback: function () {
                          e.guiMgr.showCutScene(n, s, function () {
                            e.runAsyncScript();
                          });
                        },
                        name: "_showCutsceneBigWin",
                        isSkippable: !0,
                      });
                    } else
                      this.guiMgr.showCutScene(n, s, function () {
                        e.executeNextScript(t);
                      });
                  }),
                  (o._forceToClearPaylines = function (i) {
                    (this._canFastUpdateWinAmount = !1),
                      (this._winValue = 0),
                      t.prototype._forceToClearPaylines.call(this, i);
                  }),
                  (o.forceToExit = function (i) {
                    t.prototype.forceToExit.call(this, i),
                      this.fastToResultClick();
                  }),
                  (o._showCutsceneBigWin_2 = function (t) {
                    this.executeNextScript(t);
                  }),
                  i
                );
              })(l)).prototype,
              "petAxie",
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
            (_ = S))
          ) || _)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NormalGameWriter9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotGameWriter.ts",
  ],
  function (a) {
    "use strict";
    var e, n, t, m, o, i;
    return {
      setters: [
        function (a) {
          e = a.inheritsLoose;
        },
        function (a) {
          (n = a.cclegacy), (t = a._decorator);
        },
        function (a) {
          (m = a.SlotSceneType), (o = a.SlotGameMode);
        },
        function (a) {
          i = a.SlotGameWriter;
        },
      ],
      execute: function () {
        var s;
        n._RF.push(
          {},
          "ef8c7+X3DNGdZUHjXC2dTP9",
          "NormalGameWriter9938",
          void 0
        );
        var u = t.ccclass;
        a(
          "NormalGameWriter9938",
          u("NormalGameWriter9938")(
            (s = (function (a) {
              function n() {
                return a.apply(this, arguments) || this;
              }
              e(n, a);
              var t = n.prototype;
              return (
                (t.makeScriptResume = function () {
                  var a = this.node.dataStore;
                  if (a) {
                    var e,
                      n,
                      t = a.config,
                      i = a.promotion,
                      s = t.NORMAL_TABLE_FORMAT,
                      u = a.playSession,
                      d = u.normalGameMatrix,
                      p = u.normalGamePaylines,
                      r = u.freeGameRemain,
                      c = u.freeGameMatrix,
                      l = u.winAmountPS,
                      h = u.betId,
                      _ = u.walletType,
                      S = u.mswn,
                      A = u.freeGameTotal,
                      T = a.convertMatrix(d, s),
                      y = p ? a.convertPayLine(p) : null,
                      f = r && r > 0,
                      w = [];
                    if (
                      (i && ((e = i.promotionRemain), (n = i.promotionTotal)),
                      w.push({ command: "_updateBetId", data: h }),
                      w.push({ command: "_loadWallet", data: _ }),
                      w.push({ command: "_disableBet" }),
                      w.push({ command: "_showTrialButtons", data: !1 }),
                      w.push({ command: "_updateMatrix", data: { matrix: T } }),
                      w.push({
                        command: "_setUpPaylines",
                        data: { matrix: T, payLines: y },
                      }),
                      S &&
                        w.push({ command: "_updateMatrixSideWheel", data: S }),
                      l &&
                        l > 0 &&
                        w.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: l, time: 0 },
                        }),
                      f)
                    ) {
                      var G = null;
                      c && (a.updateFreeSlideWilds(), (G = a.convertMatrix(c))),
                        w.push({ command: "_showScatterPayLine" }),
                        c ||
                          w.push({
                            command: "_showCutscene",
                            data: {
                              name: m.IntroFreeGame,
                              content: {
                                isResume: !0,
                                spinTimes: A,
                                isEnter: !0,
                              },
                            },
                          }),
                        w.push({
                          command: "_newGameMode",
                          data: { name: o.FreeGame, data: G },
                        }),
                        w.push({
                          command: "_resumeGameMode",
                          data: { name: o.NormalGame },
                        });
                    }
                    return (
                      y &&
                        y.length > 0 &&
                        w.push({ command: "_showNormalPayline" }),
                      w.push({ command: "_gameFinish" }),
                      w.push({ command: "_gameRestart" }),
                      i &&
                        e &&
                        n &&
                        e > 0 &&
                        w.push({ command: "_showPromotionPopup" }),
                      w
                    );
                  }
                }),
                (t.makeScriptSpinClick = function () {
                  var a,
                    e,
                    n = [],
                    t = this.node.dataStore,
                    m = t.betData.betId,
                    i = t.spinTimes,
                    s = t.isAutoSpin,
                    u = t.promotion,
                    d = t.currentGameMode,
                    p = t.playSession,
                    r = p.freeGameRemain,
                    c = p.freeGame,
                    l = p.respinGameRemain,
                    h = 0;
                  u && ((a = u.promotionRemain), (e = u.promotionBetId)),
                    r && r > 0
                      ? (h = r - 1)
                      : u && a > 0
                      ? ((h = a - 1),
                        n.push({ command: "_updatePromotionRemain", data: h }))
                      : s
                      ? i && i > 0 && (h = i - 1)
                      : (h = 0),
                    (t.spinTimes = h);
                  var _ = t.getWalletAfterSpin() >= 0;
                  return (
                    n.push({ command: "_showTrialButtons", data: !1 }),
                    _ || r > 0 || c > 0 || u || (l && l > 0)
                      ? (n.push({ command: "_disableBet" }),
                        n.push({ command: "_clearPaylines" }),
                        d === o.NormalGame &&
                          n.push({ command: "_clearWinAmount" }),
                        n.push({ command: "_updateSpinTimes", data: h }),
                        d !== o.NormalGame ||
                          u ||
                          n.push({ command: "_updateWalletAfterClickSpin" }),
                        n.push({ command: "_pauseWallets" }),
                        n.push({ command: "_pauseTopPlayer" }),
                        n.push({ command: "_spinClick" }),
                        !u || r || c
                          ? n.push({
                              command: "_sendSpinToNetwork",
                              data: { currentBetData: m },
                            })
                          : n.push({
                              command: "_sendSpinToNetwork",
                              data: { currentBetData: e },
                            }))
                      : ((t.spinTimes = 0),
                        (t.isAutoSpin = !1),
                        (n = [
                          { command: "_enableBet" },
                          { command: "_resetSpinButton" },
                          { command: "_showTrialButtons", data: !0 },
                          { command: "_showMessageNoMoney" },
                        ])),
                    n
                  );
                }),
                (t.makeScriptResultReceive = function () {
                  var a = this.node.dataStore,
                    e = a.playSession,
                    n = e.matrix,
                    t = e.msw,
                    m = e.jackpotInfo,
                    o = e.lsw,
                    i = [];
                  if (m) {
                    var s = m[m.length - 1].split(";"),
                      u = s[0].slice(7),
                      d = Number(s[1]);
                    i.push({ command: "_pauseUpdateJP" }),
                      i.push({
                        command: "_updateValueJP",
                        data: { jpType: u, jpValue: d },
                      });
                  }
                  return (
                    o ? a.updateSlideWilds(o) : a.resetSlideWilds(),
                    i.push({
                      command: "_resultReceive",
                      data: { matrix: n, matrixSideWheel: t },
                    }),
                    i.push({ command: "_showResult", data: n }),
                    i
                  );
                }),
                (t.makeScriptShowResults = function () {
                  var a = this.node.dataStore,
                    e = a.playSession,
                    n = e.matrix,
                    t = e.winAmount,
                    i = e.winAmountPS,
                    s = e.payLines,
                    u = e.isFinished,
                    d = e.freeGame,
                    p = e.freeGameTotal,
                    r = e.jackpotInfo,
                    c = a.betData,
                    l = a.config,
                    h = a.gameSpeed,
                    _ = t && t >= 10 * c.getTotalBet() && !r,
                    S = [],
                    A = !1,
                    T = !1,
                    y = this._checkRateSoundWin(),
                    f = h === l.GAME_SPEED.INSTANTLY;
                  if (
                    (S.push({
                      command: "_setUpPaylines",
                      data: { matrix: n, payLines: s },
                    }),
                    S.push({ command: "_showSideWheelResult" }),
                    !d &&
                      !r &&
                      s &&
                      s.findIndex(function (a) {
                        return a.multiple > 1;
                      }) > -1 &&
                      (S.push({ command: "_playAnimBuffSymbols" }), (A = !0)),
                    t && S.push({ command: "_playSoundWin", data: y }),
                    r)
                  ) {
                    var w = r[r.length - 1].split(";"),
                      G = w[0].slice(7),
                      P = Number(w[1]);
                    S.push({
                      command: "_playAnimJPWin",
                      data: { jackpotType: G.includes("GRAND") ? 0 : 1 },
                    }),
                      S.push({
                        command: "_showUnskippedCutscene",
                        data: {
                          name: m.JackpotWin,
                          content: {
                            winAmount: P,
                            jackpotType: G.includes("GRAND") ? 0 : 1,
                            currentBetData: c.getTotalBet(),
                          },
                        },
                      }),
                      S.push({
                        command: "_playAnimJPIdle",
                        data: { jackpotType: G.includes("GRAND") ? 0 : 1 },
                      }),
                      s &&
                        s.findIndex(function (a) {
                          return a.multiple > 1;
                        }) > -1 &&
                        !A &&
                        (S.push({ command: "_playAnimBuffSymbols" }), (A = !0)),
                      S.push({
                        command: "_updateWinningAmount",
                        data: { winAmount: P, time: 100 },
                      }),
                      S.push({ command: "_resumeUpdateJP" });
                  } else
                    _ &&
                      u &&
                      ((T = !0),
                      S.push({
                        command: "_playAnimPetAxie",
                        data: {
                          state: l.PET_AXIE_STATE.WIN_PAYLINE,
                          winAmount: t,
                          currentBetData: c.getTotalBet(),
                        },
                      }),
                      S.push({ command: "_blinkAllPaylines" }),
                      S.push({
                        command: "_showCutsceneBigWin",
                        data: {
                          name: m.BigWin,
                          content: {
                            winAmount: t,
                            currentBetData: c.getTotalBet(),
                          },
                        },
                      }));
                  if (d && d > 0) {
                    S.push({
                      command: "_playAnimPetAxie",
                      data: { state: l.PET_AXIE_STATE.FREE_GAME },
                    });
                    var B = a.spinTimes;
                    i &&
                      i > 0 &&
                      S.push({
                        command: "_updateWinningAmount",
                        data: { winAmount: i, time: 10 },
                      }),
                      S.push({ command: "_showScatterPayLine" }),
                      S.push({ command: "_delayTimeScript", data: 1 }),
                      S.push({
                        command: "_showUnskippedCutscene",
                        data: {
                          name: m.IntroFreeGame,
                          content: { isResume: !1, spinTimes: p, isEnter: !0 },
                        },
                      }),
                      S.push({
                        command: "_newGameMode",
                        data: { name: o.FreeGame },
                      }),
                      S.push({
                        command: "_resumeGameMode",
                        data: { name: o.NormalGame },
                      }),
                      S.push({ command: "_delayTimeScript", data: 1 }),
                      B &&
                        B > 0 &&
                        S.push({ command: "_resumeSpinTime", data: B });
                  }
                  return (
                    s &&
                      s.findIndex(function (a) {
                        return a.multiple > 1;
                      }) > -1 &&
                      !A &&
                      S.push({ command: "_playAnimBuffSymbols" }),
                    s &&
                      s.length > 0 &&
                      (r ||
                        _ ||
                        d ||
                        S.push({
                          command: "_playAnimPetAxie",
                          data: {
                            state: l.PET_AXIE_STATE.WIN_PAYLINE,
                            winAmount: t,
                            currentBetData: c.getTotalBet(),
                          },
                        }),
                      T || S.push({ command: "_blinkAllPaylines" }),
                      S.push({ command: "_showNormalPayline" })),
                    u &&
                      t &&
                      t > 0 &&
                      S.push({
                        command: "_updateWinningAmountSync",
                        data: { winAmount: i, time: 950, rate: y, isFTR: f },
                      }),
                    S.push({ command: "_gameFinish" }),
                    S.push({ command: "_gameRestart" }),
                    S
                  );
                }),
                (t.makeScriptGameRestart = function () {
                  var a,
                    e = this.node.dataStore,
                    n = [],
                    t = e.playSession.freeGameRemain,
                    m = e.spinTimes,
                    o = e.promotion;
                  return (
                    o && (a = o.promotionRemain),
                    n.push({ command: "_showSlideWildFeature" }),
                    a &&
                      a > 0 &&
                      (n.push({ command: "_showTrialButtons", data: !1 }),
                      n.push({ command: "_resetPromotionButtons" })),
                    m && m > 0
                      ? t && t > 0
                        ? n.push({ command: "_runAutoSpin" })
                        : (o && a) || n.push({ command: "_runAutoSpin" })
                      : (n.push({ command: "_triggerPetAxieSleepingMode" }),
                        (!a || a <= 0) &&
                          (n.push({ command: "_enableBet" }),
                          n.push({ command: "_exitPromotionMode" }),
                          n.push({ command: "_showTrialButtons", data: !0 }),
                          n.push({ command: "_resetSpinButton" }))),
                    n.push({ command: "_resumeWallets" }),
                    n.push({ command: "_runAsyncScript" }),
                    n
                  );
                }),
                (t._checkRateSoundWin = function () {
                  var a = this.node.dataStore,
                    e = a.playSession.winAmount,
                    n = a.getTotalBet();
                  return e < n ? 0 : e == n ? 1 : e > n ? 2 : void 0;
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
  "chunks:///_virtual/PetAxieController9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
  ],
  function (i) {
    "use strict";
    var e, t, n, s, a, l, h, o, A;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (s = i.assertThisInitialized);
        },
        function (i) {
          (a = i.cclegacy), (l = i._decorator), (h = i.sp);
        },
        function (i) {
          o = i.setMixAllAnims;
        },
        function (i) {
          A = i.GameObject;
        },
      ],
      execute: function () {
        var r, p, m, c, E, u, I;
        a._RF.push(
          {},
          "7e222vfettOh4WKrCbo9j1B",
          "PetAxieController9938",
          void 0
        );
        var y = l.ccclass,
          S = l.property;
        i(
          "PetAxieController9938",
          ((r = y("PetAxieController9938")),
          (p = S({ type: h.Skeleton })),
          (m = S({ type: h.Skeleton })),
          r(
            ((u = e(
              (E = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, a = new Array(t), l = 0;
                    l < t;
                    l++
                  )
                    a[l] = arguments[l];
                  return (
                    (e = i.call.apply(i, [this].concat(a)) || this),
                    n(e, "petAxie", u, s(e)),
                    n(e, "mainAxieEye", I, s(e)),
                    (e.superWinRate = 50),
                    (e.megaWinRate = 30),
                    (e.bigWinRate = 10),
                    (e.animState = 0),
                    (e.petAnim = ""),
                    (e.currentState = 0),
                    (e.currentSideWheelState = 0),
                    (e.isBuffSymbol = !1),
                    (e.isSleeping = !1),
                    (e.isNearWinTable = !1),
                    (e._delayTimeCallback = null),
                    e
                  );
                }
                t(e, i);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.init(),
                      this.node.on(
                        "PLAY_PET_ANIMATION",
                        this.playPetAnimation,
                        this
                      ),
                      this.node.on(
                        "SHOW_MAIN_AXIE_EYES",
                        this.showMainAxieEyes,
                        this
                      ),
                      o(this.petAxie, 0.1),
                      this.showMainAxieEyes(!1);
                  }),
                  (a.showMainAxieEyes = function (i) {
                    var e = this;
                    void 0 === i && (i = !1),
                      i
                        ? ((this.mainAxieEye.node.active = !0),
                          this.mainAxieEye.setCompleteListener(function () {}),
                          this.mainAxieEye.setAnimation(0, "Appear", !1),
                          this.mainAxieEye.addAnimation(0, "Idle", !0))
                        : (this.mainAxieEye.setAnimation(0, "Disappear", !1),
                          this.mainAxieEye.setCompleteListener(function () {
                            (e.mainAxieEye.node.active = !1),
                              e.mainAxieEye.setCompleteListener(function () {});
                          }));
                  }),
                  (a.init = function () {
                    (this.animState = this.config.PET_AXIE_STATE),
                      (this.petAnim = this.config.PET_AXIE_ANIMATION),
                      (this.currentState = this.animState.IDLE),
                      this.petAxie.setAnimation(0, this.petAnim.IDLE, !0);
                  }),
                  (a.playPetAnimation = function (i) {
                    var e = i.state,
                      t = this.animState,
                      n = t.IDLE,
                      s = t.WIN_PAYLINE,
                      a = t.FREE_GAME,
                      l = t.JACKPOT,
                      h = t.SLIDING_WILD,
                      o = t.SLEEPING,
                      A = t.SIDE_WHEEL_INTERACTION,
                      r = t.BUFF_WINLINE,
                      p = t.NEAR_WIN;
                    switch (e) {
                      case n:
                        this.playAnimIdle();
                        break;
                      case s:
                        this.playAnimWinLine(i);
                        break;
                      case a:
                        this.playFreeGame();
                        break;
                      case l:
                        this.playAnimJackpot();
                        break;
                      case h:
                        this.playAnimSlidingWild();
                        break;
                      case o:
                        this.playAnimSleeping();
                        break;
                      case A:
                        this.playAnimSideWheel(i);
                        break;
                      case r:
                        this.playAnimBuff();
                        break;
                      case p:
                        this.playAnimNearWinTable();
                    }
                    this.currentState = e;
                  }),
                  (a.playAnimIdle = function () {
                    this.petAxie.setAnimation(0, this.petAnim.IDLE, !0);
                  }),
                  (a.playAnimWinLine = function (i) {
                    var e = this,
                      t = i.winAmount,
                      n = i.currentBetData,
                      s = Number(t) / Number(n);
                    if (!(s < 1)) {
                      var a = this.petAnim.SMALL_WIN,
                        l = 0;
                      s >= this.superWinRate
                        ? ((a = this.petAnim.SUPER_WIN), (l = 3))
                        : s >= this.megaWinRate
                        ? ((a = this.petAnim.MEGA_WIN), (l = 2))
                        : s >= this.bigWinRate &&
                          ((a = this.petAnim.BIG_WIN), (l = 1));
                      var h = function () {
                        e.petAxie.setAnimation(0, a, !1),
                          0 !== l &&
                            e.soundPlayer &&
                            e.soundPlayer.playSfx("PET_WINLINE_" + l),
                          e.backToIdle();
                      };
                      this.isBuffSymbol
                        ? ((this._delayTimeCallback = function () {
                            (e._delayTimeCallback = null), h();
                          }),
                          this.scheduleOnce(this._delayTimeCallback, 0.5))
                        : h();
                    }
                  }),
                  (a.playAnimJackpot = function () {
                    this.petAxie.setAnimation(0, this.petAnim.JACKPOT, !1),
                      this.backToIdle();
                  }),
                  (a.playFreeGame = function () {
                    this.soundPlayer &&
                      this.soundPlayer.playSfx("CHEER_FREE_SPIN"),
                      this.petAxie.setAnimation(0, this.petAnim.FREE_GAME, !1),
                      this.backToIdle();
                  }),
                  (a.playAnimSlidingWild = function () {
                    this.soundPlayer && this.soundPlayer.playSfx("CHEER_WIN"),
                      this.petAxie.setAnimation(
                        0,
                        this.petAnim.SLIDING_WILD,
                        !1
                      ),
                      this.backToIdle();
                  }),
                  (a.playAnimSleeping = function () {
                    (this.isSleeping = !0),
                      this.petAxie.setAnimation(0, this.petAnim.SLEEPING, !1),
                      this.petAxie.addAnimation(
                        0,
                        this.petAnim.SLEEPING_LOOP,
                        !0
                      );
                  }),
                  (a.playAnimNearWinTable = function () {
                    this.isNearWinTable ||
                      ((this.isNearWinTable = !0),
                      this.petAxie.setAnimation(0, this.petAnim.NEAR_WIN, !1),
                      this.petAxie.addAnimation(
                        0,
                        this.petAnim.NEAR_WIN_LOOP,
                        !0
                      ));
                  }),
                  (a.playAnimSideWheel = function (i) {
                    var e = i.sideWheelState,
                      t = i.isWin,
                      n = i.isTurbo,
                      s = i.isFTR,
                      a = this.config.SIDE_WHEEL_STATE,
                      l = a.SPINNING,
                      h = a.NEAR_WIN,
                      o = a.SHOW_RESULT,
                      A = a.SECOND_CHANCE,
                      r = a.STOP_SPINNING;
                    switch (e) {
                      case l:
                        this.isSleeping
                          ? this.petAxie.setAnimation(
                              0,
                              this.petAnim.SLEEPING_END,
                              !1
                            )
                          : n ||
                            (this.petAxie.setAnimation(
                              0,
                              this.petAnim.SIDE_WHEEL_SPIN,
                              !1
                            ),
                            this.petAxie.addAnimation(
                              0,
                              this.petAnim.SIDE_WHEEL_LOOK_LOOP,
                              !0
                            )),
                          (this.isSleeping = !1),
                          (this.isNearWinTable = !1),
                          (this.isBuffSymbol = !1),
                          this._delayTimeCallback &&
                            (this.unschedule(this._delayTimeCallback),
                            (this._delayTimeCallback = null));
                        break;
                      case r:
                        break;
                      case h:
                        s
                          ? this.backToIdle()
                          : this.petAxie.setAnimation(
                              0,
                              this.petAnim.SIDE_WHEEL_LOOK_LOOP,
                              !0
                            );
                        break;
                      case o:
                        if (
                          this.currentSideWheelState !== h &&
                          this.isNearWinTable
                        )
                          this.dataStore.playSession.freeGame
                            ? (this.petAxie.setAnimation(
                                0,
                                this.petAnim.NEAR_WIN_WIN,
                                !1
                              ),
                              this.backToIdle())
                            : (this.soundPlayer &&
                                this.soundPlayer.playSfx("PET_DISAPOINTED"),
                              this.petAxie.setAnimation(
                                0,
                                this.petAnim.NEAR_WIN_MISS,
                                !1
                              ),
                              this.backToIdle());
                        else
                          t
                            ? (this.petAxie.setAnimation(
                                0,
                                this.petAnim.SIDE_WHEEL_WIN,
                                !1
                              ),
                              this.backToIdle())
                            : (this.currentSideWheelState !== l ||
                                n ||
                                this.petAxie.setAnimation(
                                  0,
                                  this.petAnim.SIDE_WHEEL_LOOK_END,
                                  !1
                                ),
                              this.backToIdle());
                        break;
                      case A:
                        this.soundPlayer &&
                          this.soundPlayer.playSfx("SECOND_CHANGE"),
                          this.petAxie.setAnimation(
                            0,
                            this.petAnim.SIDE_WHEEL_SECOND_CHANCE,
                            !1
                          ),
                          this.backToIdle();
                    }
                    this.currentSideWheelState = e;
                  }),
                  (a.playAnimBuff = function () {
                    (this.isBuffSymbol = !0),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("WIN_OVERTOP"),
                      this.petAxie.setAnimation(
                        0,
                        this.petAnim.SIDE_WHEEL_WIN_TURBO,
                        !1
                      ),
                      this.backToIdle();
                  }),
                  (a.backToIdle = function () {
                    this.petAxie.addAnimation(0, this.petAnim.IDLE, !0);
                  }),
                  e
                );
              })(A)).prototype,
              "petAxie",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (I = e(E.prototype, "mainAxieEye", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (c = E))
          ) || c)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupSound9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (n) {
    "use strict";
    var o, t, e, i, r, u, p;
    return {
      setters: [
        function (n) {
          (o = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (e = n.initializerDefineProperty),
            (i = n.assertThisInitialized);
        },
        function (n) {
          (r = n.cclegacy), (u = n._decorator);
        },
        function (n) {
          p = n.GameObject;
        },
      ],
      execute: function () {
        var s, a, c;
        r._RF.push({}, "3ac77GwzRNM+LWuOXTsxZaQ", "PopupSound9938", void 0);
        var l = u.ccclass,
          d = u.property;
        n(
          "PopupSound9938",
          l("PopupSound9938")(
            ((c = o(
              (a = (function (n) {
                function o() {
                  for (
                    var o, t = arguments.length, r = new Array(t), u = 0;
                    u < t;
                    u++
                  )
                    r[u] = arguments[u];
                  return (
                    (o = n.call.apply(n, [this].concat(r)) || this),
                    e(o, "isSkipSoundOpen", c, i(o)),
                    o
                  );
                }
                t(o, n);
                var r = o.prototype;
                return (
                  (r.onLoad = function () {
                    n.prototype.onLoad.call(this),
                      this.node.on("PLAY", this.playSoundOpen, this);
                  }),
                  (r.playSoundOpen = function () {
                    !this.isSkipSoundOpen &&
                      this.soundPlayer &&
                      this.soundPlayer.playSfx("POPUP_OPEN");
                  }),
                  (r.playSoundClose = function () {
                    this.soundPlayer && this.soundPlayer.playSfx("POPUP_CLOSE");
                  }),
                  o
                );
              })(p)).prototype,
              "isSkipSoundOpen",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              }
            )),
            (s = a))
          ) || s
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SideItem9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts"],
  function (t) {
    "use strict";
    var e, i, s, r, l, n, u, o, a, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (s = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (n = t._decorator),
            (u = t.SpriteFrame),
            (o = t.Sprite),
            (a = t.Component);
        },
        function (t) {
          p = t.convertAssetArrayToObject;
        },
      ],
      execute: function () {
        var m, c, h, b, d, y, f, S, v, g, A, F;
        l._RF.push({}, "7d026gCD+JIW6I2Whg/2gu9", "SideItem9938", void 0);
        var R = n.ccclass,
          x = n.property;
        t(
          "SideItem9938",
          ((m = R("SideItem9938")),
          (c = x({ type: u })),
          (h = x({ type: u })),
          (b = x({ type: o })),
          (d = x({ type: u })),
          m(
            ((S = e(
              (f = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, l = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    l[n] = arguments[n];
                  return (
                    (e = t.call.apply(t, [this].concat(l)) || this),
                    s(e, "symbols", S, r(e)),
                    s(e, "blurSymbols", v, r(e)),
                    s(e, "blurNamePrefix", g, r(e)),
                    s(e, "multipleSprite", A, r(e)),
                    s(e, "multipleSpriteFrames", F, r(e)),
                    (e.assets = []),
                    (e.blurAssets = []),
                    (e.multipleAsset = []),
                    (e.static = null),
                    e
                  );
                }
                i(e, t);
                var l = e.prototype;
                return (
                  (l.onLoad = function () {
                    (this.node.randomResult = this.randomResult.bind(this)),
                      (this.node.setResult = this.setResult.bind(this)),
                      (this.multipleSprite.node.active = !1),
                      (this.assets = p(this.symbols)),
                      (this.blurAssets = p(this.blurSymbols)),
                      (this.static = this.node.getComponent(o)),
                      (this.multipleAsset = p(this.multipleSpriteFrames));
                  }),
                  (l.randomResult = function (t) {
                    this.multipleSprite.node.active = !1;
                    var e = this.blurNamePrefix + t;
                    this.blurAssets[e] &&
                      (this.static.spriteFrame = this.blurAssets[e]),
                      (this.node.symbol = t);
                  }),
                  (l.setResult = function (t, e) {
                    void 0 === e && (e = !0),
                      this.assets[t] &&
                        (this.static.spriteFrame = this.assets[t]),
                      (this.multipleSprite.node.active = !1),
                      e &&
                        ("N" == t || "X" == t
                          ? ((this.multipleSprite.node.active = !0),
                            (this.multipleSprite.spriteFrame =
                              this.multipleAsset.x2))
                          : "M" == t || "Y" == t
                          ? ((this.multipleSprite.node.active = !0),
                            (this.multipleSprite.spriteFrame =
                              this.multipleAsset.x3))
                          : ("P" != t && "Z" != t) ||
                            ((this.multipleSprite.node.active = !0),
                            (this.multipleSprite.spriteFrame =
                              this.multipleAsset.x5)),
                        (this.node.symbol = t));
                  }),
                  e
                );
              })(a)).prototype,
              "symbols",
              [c],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (v = e(f.prototype, "blurSymbols", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (g = e(f.prototype, "blurNamePrefix", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "blur_";
              },
            })),
            (A = e(f.prototype, "multipleSprite", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (F = e(f.prototype, "multipleSpriteFrames", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (y = f))
          ) || y)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SideItemResult9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CustomType.ts"],
  function (t) {
    "use strict";
    var i, n, e, a, o, s, r, m, l, u;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (s = t._decorator),
            (r = t.sp),
            (m = t.error),
            (l = t.Component);
        },
        function (t) {
          u = t.SlotCustomDataType;
        },
      ],
      execute: function () {
        var c, h, p, d, f;
        o._RF.push({}, "258fc47BEVLH5zG9X6vs31s", "SideItemResult9938", void 0);
        var y = s.ccclass,
          _ = s.property,
          A = {
            N: "X2",
            M: "X3",
            P: "X5",
            X: "X2",
            Y: "X3",
            Z: "X5",
            B: "X3",
            C: "X5",
          };
        t(
          "SideItemResult9938",
          ((c = y("SideItemResult9938")),
          (h = _({ type: u })),
          c(
            ((f = i(
              (d = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, o = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    e(i, "spineList", f, a(i)),
                    (i._animation = null),
                    i
                  );
                }
                n(i, t);
                var o = i.prototype;
                return (
                  (o.onLoad = function () {
                    this.node.on("PLAY_ANIMATION", this.playAnimation, this),
                      this.node.on(
                        "PLAY_ANIMATION_IDLE",
                        this.playAnimationIdle,
                        this
                      ),
                      this.node.on("STOP_ANIMATION", this.stopAnimation, this),
                      (this._animation = this.node.getComponent(r.Skeleton)),
                      (this.node.active = !1);
                  }),
                  (o.playAnimation = function (t) {
                    var i = this.findSymbolSpineData(t);
                    i
                      ? ((this.node.active = !0),
                        (this._animation.skeletonData = i.spineData),
                        "O" === t || "U" === t
                          ? (this._animation.setSkin("default"),
                            this._animation.setAnimation(0, "animation", !0))
                          : "B" === t || "C" === t
                          ? (this._animation.setSkin("default"),
                            this._animation.setAnimation(0, A[t], !0))
                          : A[t]
                          ? (this._animation.setSkin(A[t]),
                            this._animation.setAnimation(0, A[t], !0))
                          : (this._animation.setSkin("animation"),
                            this._animation.setAnimation(0, "animation", !0)))
                      : m("Do not find seketonData with symbolName: " + t);
                  }),
                  (o.playAnimationIdle = function (t) {
                    var i = this.findSymbolSpineData(t);
                    i
                      ? ((this.node.active = !0),
                        (this._animation.skeletonData = i.spineData),
                        this._animation.setAnimation(0, "animation", !0))
                      : m("Do not find seketonData with symbolName: " + t);
                  }),
                  (o.stopAnimation = function () {
                    this.node.active = !1;
                  }),
                  (o.findSymbolSpineData = function (t) {
                    return (
                      this.spineList.find(function (i) {
                        return i.spineName.includes(t);
                      }) || null
                    );
                  }),
                  i
                );
              })(l)).prototype,
              "spineList",
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
            (p = d))
          ) || p)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SideWheelConfig9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (E) {
    "use strict";
    var _, A, I, L;
    return {
      setters: [
        function (E) {
          _ = E.inheritsLoose;
        },
        function (E) {
          (A = E.cclegacy), (I = E._decorator), (L = E.Component);
        },
      ],
      execute: function () {
        var N;
        A._RF.push(
          {},
          "43b99dykz5HBoNriPWcI2GR",
          "SideWheelConfig9938",
          void 0
        );
        var T = I.ccclass;
        I.property,
          E(
            "SideWheelConfig9938",
            T("SideWheelConfig9938")(
              (N = (function (E) {
                function A() {
                  return E.apply(this, arguments) || this;
                }
                return (
                  _(A, E),
                  (A.prototype.onLoad = function () {
                    this.node.sideWheelConfig = {
                      ACCEL: 960,
                      MIN_SPEED: 1120,
                      MAX_SPEED: 2080,
                      SUPER_SPEED: 2560,
                      NEAR_MISS_MAX_SPEED: 1920,
                      SIDE_WHEEL_ROLL: {
                        FAST: {
                          TIME: 0.06,
                          DELAY_START: 0.2,
                          DELAY_STOP: 0.7,
                          EASING_DISTANCE: 25,
                          EASING_TIME: 0.5,
                          TOTAL_CIRCULAR: 5,
                          RATE: 1,
                          IS_TURBO: !1,
                          BLINKS: 2,
                          BLINK_DURATION: 0.5,
                          ANIMATION_DURATION: 2,
                          EXPECT_PAYLINE_TIME: 2,
                          EXPECT_PAYLINE_ALLWAYS_TIME: 2,
                          MIN_TIME_EACH_PAYLINE: 0.3,
                          NEAR_WIN_DELAY: 0.3,
                          NEAR_WIN_DELAY_LAST_REEL: 0.7,
                          LIGHT_SPEED: 1,
                          NEAR_WIN_MULTIPLE_DELAY: 1.8,
                        },
                        TURBO: {
                          TIME: 0.06,
                          DELAY_START: 0.1,
                          DELAY_STOP: 0.1,
                          EASING_DISTANCE: 25,
                          EASING_TIME: 0,
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
                          NEAR_WIN_DELAY_LAST_REEL: 0.55,
                          LIGHT_SPEED: 2,
                          NEAR_WIN_MULTIPLE_DELAY: 1.8,
                        },
                      },
                      TABLE_BUFFER: { TOP: 1, BOT: 1 },
                      TABLE_FORMAT: [3, 3, 3, 3, 3],
                      SIDE_WHEEL_FREE_SYMBOLS: [
                        "X",
                        "Y",
                        "Z",
                        "N",
                        "M",
                        "P",
                        "X",
                        "Y",
                        "Z",
                        "N",
                        "M",
                        "P",
                        "X",
                        "Y",
                        "Z",
                        "N",
                        "M",
                        "P",
                        "O",
                        "U",
                        "B",
                        "C",
                      ],
                      SIDE_WHEEL_MAIN_SYMBOLS: [
                        "X",
                        "Y",
                        "Z",
                        "N",
                        "M",
                        "P",
                        "X",
                        "Y",
                        "Z",
                        "N",
                        "M",
                        "P",
                        "X",
                        "Y",
                        "Z",
                        "N",
                        "M",
                        "P",
                        "O",
                        "U",
                      ],
                      EMPTY_SYMBOL: "E",
                      MAP_SOUND_INDEX: {
                        X: 0,
                        Y: 0,
                        Z: 0,
                        M: 1,
                        N: 1,
                        P: 1,
                        U: 2,
                        O: 3,
                      },
                      EMPTY_INDEX: -1,
                    };
                  }),
                  A
                );
              })(L))
            ) || N
          );
        A._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SideWheelMgr9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
  ],
  function (i) {
    "use strict";
    var t, s, e, n, o, l, h, a, r, p, S, c, u, d, f, y, E;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (s = i.inheritsLoose),
            (e = i.initializerDefineProperty),
            (n = i.assertThisInitialized);
        },
        function (i) {
          (o = i.cclegacy),
            (l = i._decorator),
            (h = i.Prefab),
            (a = i.Node),
            (r = i.Sprite),
            (p = i.SpriteFrame),
            (S = i.instantiate),
            (c = i.tween),
            (u = i.Vec3),
            (d = i.Color);
        },
        function (i) {
          (f = i.convertAssetArrayToObject), (y = i.setOpacity);
        },
        function (i) {
          E = i.GameObject;
        },
      ],
      execute: function () {
        var m, T, b, g, N, _, A, W, I, M, R, w, P, C, L, O, v, x, k;
        o._RF.push({}, "e3afeTJm05Gr7hVPXtwMe67", "SideWheelMgr9938", void 0);
        var D = l.ccclass,
          Y = l.property;
        i(
          "SideWheelMgr9938",
          ((m = D("SideWheelMgr9938")),
          (T = Y({ type: h })),
          (b = Y({ type: a })),
          (g = Y({ type: a })),
          (N = Y({ type: h })),
          (_ = Y({ type: a })),
          (A = Y({ type: r })),
          (W = Y({ type: p })),
          m(
            ((R = t(
              (M = (function (i) {
                function t() {
                  for (
                    var t, s = arguments.length, o = new Array(s), l = 0;
                    l < s;
                    l++
                  )
                    o[l] = arguments[l];
                  return (
                    (t = i.call.apply(i, [this].concat(o)) || this),
                    e(t, "itemPrefab", R, n(t)),
                    e(t, "scrollNode", w, n(t)),
                    e(t, "spineResult", P, n(t)),
                    e(t, "spinePrefab", C, n(t)),
                    e(t, "nearWinEffect", L, n(t)),
                    e(t, "dimColor", O, n(t)),
                    e(t, "multipleSprite", v, n(t)),
                    e(t, "multipleSpriteFrames", x, n(t)),
                    e(t, "isFreeMode", k, n(t)),
                    (t.symbolPos = []),
                    (t.previousY = 0),
                    (t.showNumber = 3),
                    (t.symbolHeight = 144),
                    (t.currentIndex = 0),
                    (t.rollingCount = 0),
                    (t.totalScrolling = 0),
                    (t.extendTime = 0),
                    (t.bufferMiss = 0),
                    (t.currentSpeed = 40),
                    (t.rate = 1),
                    (t.totalSymbols = 5),
                    (t.symbolStartY = 0),
                    (t.stop = 0),
                    (t.targetY = 0),
                    (t.tweenTime = 0),
                    (t.maxSpeed = 0),
                    (t.multipleIndex = 0),
                    (t.multiplySymbol = "3,4"),
                    (t.jackpotSymbols = "OU"),
                    (t.symbolList = []),
                    (t.isIdle = !0),
                    (t.isNearMiss = !0),
                    (t.isStopWithNearMiss = !0),
                    (t.isMisSymbol = !1),
                    (t.isSpinNearMiss = !1),
                    (t.isSecondChance = !1),
                    (t.isShowingResult = !1),
                    (t.isStartSpinning = !1),
                    (t.isLastSpinMiss = !1),
                    (t.isFastToResult = !1),
                    (t.isNearWinMultiply = !1),
                    (t.isSpinning = !1),
                    (t.paylineSymbols = ["N", "M", "P", "X", "Y", "Z"]),
                    (t.showSymbols = []),
                    (t.symbols = []),
                    (t.spineSymbols = []),
                    (t.startSpinTween = null),
                    (t.stopSpinTween = null),
                    (t.callbackSoundWin = null),
                    (t.callBackDelayStop = null),
                    (t.reelConfig = {}),
                    (t.result = []),
                    (t.callbackStop = null),
                    (t.sideWheelConfig = {}),
                    (t.multipleAsset = {}),
                    (t.petAxie = null),
                    (t.callbackSoundEndReel = null),
                    (t.callback = null),
                    (t.isShow = void 0),
                    t
                  );
                }
                s(t, i);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on("INIT", this.init, this),
                      this.node.on("START_SPINNING", this.startSpinning, this),
                      this.node.on(
                        "STOP_SPINNING",
                        this.stopSpinningWithDelay,
                        this
                      ),
                      this.node.on(
                        "PLAY_SOUND_END_REEL_CB",
                        this.playSoundEndReelCallback,
                        this
                      ),
                      this.node.on(
                        "FAST_TO_RESULT",
                        this.fastStopSpinning,
                        this
                      ),
                      this.node.on("CHANGE_MATRIX", this.changeMatrix, this),
                      this.node.on("SHOW_RESULT", this.showResult, this),
                      this.node.on("RESET_RESULT", this.resetSpineResult, this),
                      this.node.on(
                        "EXTEND_TIME_STOP",
                        this.extendTimeToStop,
                        this
                      ),
                      this.node.on(
                        "UPDATE_NEAR_WIN_SPEED",
                        this.updateNearWinSpeed,
                        this
                      ),
                      this.node.on(
                        "REEL_STOP_NEARWIN",
                        this.reelStopNearWin,
                        this
                      ),
                      this.node.on(
                        "SHOW_SIDE_WHEEL_UI",
                        this.showSideWheelUI,
                        this
                      ),
                      this.node.on("GAME_EXIT", this.gameExit, this),
                      this.node.on("SET_UP_PET_AXIE", this.setUpPetAxie, this),
                      (this.multipleAsset = f(this.multipleSpriteFrames)),
                      (this.sideWheelConfig = this.node.sideWheelConfig),
                      (this.currentSpeed = this.sideWheelConfig.MIN_SPEED);
                  }),
                  (o.init = function () {
                    var i = this.config.TABLE_BUFFER,
                      t = i.TOP,
                      s = i.BOT;
                    (this.symbolList = this.isFreeMode
                      ? this.sideWheelConfig.SIDE_WHEEL_FREE_SYMBOLS
                      : this.sideWheelConfig.SIDE_WHEEL_MAIN_SYMBOLS),
                      (this.totalSymbols = this.showNumber + t + s),
                      (this.symbolStartY =
                        -(this.showNumber / 2 + s - 0.5) * this.symbolHeight),
                      (this.showSymbols = []),
                      (this.symbols = []),
                      (this.spineSymbols = []);
                    for (var e = 0; e < this.totalSymbols; e++) {
                      var n = S(this.itemPrefab);
                      n.setPosition(
                        0,
                        this.symbolStartY + e * this.symbolHeight
                      ),
                        this.scrollNode.addChild(n),
                        n.setResult(this.getRandomSymbolName()),
                        this.symbols.push(n),
                        this.symbolPos.push(n.position.y),
                        e >= s &&
                          e < this.totalSymbols - t &&
                          this.showSymbols.unshift(n);
                      var o = S(this.spinePrefab);
                      this.spineResult.addChild(o), this.spineSymbols.push(o);
                    }
                  }),
                  (o.setUpPetAxie = function (i) {
                    this.petAxie = i;
                  }),
                  (o.changeMatrix = function (i) {
                    var t = this,
                      s = [].concat(i);
                    (this.isMisSymbol =
                      s[1] === this.sideWheelConfig.EMPTY_SYMBOL),
                      this.isMisSymbol
                        ? ((this.result = [].concat(s).filter(function (i) {
                            return i !== t.sideWheelConfig.EMPTY_SYMBOL;
                          })),
                          this.result.unshift(this.getRandomSymbolName()))
                        : (this.result = [].concat(s)),
                      this.reset();
                  }),
                  (o.startSpinning = function (i) {
                    var t = i
                      ? this.sideWheelConfig.SIDE_WHEEL_ROLL.TURBO
                      : this.sideWheelConfig.SIDE_WHEEL_ROLL.FAST;
                    (this.isStartSpinning = !0),
                      (this.reelConfig = t),
                      (this.rate = this.reelConfig.RATE),
                      this.setUpConfig(),
                      (this.isIdle = !1),
                      (this.isLastSpinMiss = this.isMisSymbol);
                    var s = this.config,
                      e = s.PET_AXIE_STATE,
                      n = s.SIDE_WHEEL_STATE,
                      o = {
                        state: e.SIDE_WHEEL_INTERACTION,
                        sideWheelState: n.SPINNING,
                        isTurbo: this.reelConfig.IS_TURBO,
                        isFTR: this.isFastToResult,
                      };
                    this.petAxie.emit("PLAY_PET_ANIMATION", o),
                      this.petAxie.emit("SHOW_MAIN_AXIE_EYES", !1),
                      this.hideWinEffect();
                  }),
                  (o.stopSpinningWithDelay = function (i, t, s) {
                    var e = this;
                    if ((void 0 === i && (i = []), this.isStartSpinning)) {
                      (this.isStartSpinning = !1),
                        (this.showSymbols = []),
                        (this.callbackStop = t);
                      var n = this.dataStore.playSession,
                        o = n.payLines,
                        l = n.freeGame;
                      (this.isSecondChance =
                        this.isWinMultiply(o) && Math.random() < 0.4 && !l),
                        (this.isMisSymbol =
                          i[1] === this.sideWheelConfig.EMPTY_SYMBOL),
                        this.isMisSymbol
                          ? ((this.result = [].concat(i).filter(function (i) {
                              return i !== e.sideWheelConfig.EMPTY_SYMBOL;
                            })),
                            this.result.unshift(this.getRandomSymbolName()))
                          : (this.result = [].concat(i)),
                        this.checkNearWinMultiply();
                      var h = this.dataStore.playSession.jackpot,
                        a = this.jackpotSymbols.includes(
                          this.result[this.result.length - 1]
                        ),
                        r = h || (this.isMisSymbol && a);
                      this.isNearMiss =
                        !this.isSecondChance &&
                        Math.random() < 0.2 &&
                        r &&
                        !this.isWinMultiply(o);
                      var p = this.reelConfig,
                        S = p.DELAY_STOP,
                        c = p.IS_TURBO,
                        u = c ? S : (s + 1) * S;
                      (this.isStopWithNearMiss =
                        !this.isFastToResult && this.isNearMiss && !c),
                        this.isStopWithNearMiss &&
                          (this.maxSpeed =
                            this.sideWheelConfig.NEAR_MISS_MAX_SPEED),
                        (this.callBackDelayStop = function () {
                          (e.stop = 0),
                            (e.isShowingResult = !0),
                            (e.callBackDelayStop = null);
                          var i = e.reelConfig.TOTAL_CIRCULAR;
                          e.isFastToResult && (e.isStopWithNearMiss = !1);
                          var t =
                            (e.isStopWithNearMiss ? 3 * i : i) * e.symbolHeight;
                          (e.bufferMiss = 0),
                            e.isMisSymbol &&
                              !e.isLastSpinMiss &&
                              (e.bufferMiss = e.symbolHeight / 2),
                            !e.isMisSymbol &&
                              e.isLastSpinMiss &&
                              (e.bufferMiss = -e.symbolHeight / 2),
                            (e.targetY =
                              e.scrollNode.position.y -
                              t +
                              e.totalScrolling -
                              e.bufferMiss),
                            e.isStopWithNearMiss
                              ? e.stopSpinningWithNearMiss()
                              : e.isSecondChance
                              ? e.stopSpinningWithSecondChance()
                              : e.stopSpinningWithSteps();
                        }),
                        this.unschedule(this.callBackDelayStop),
                        this.scheduleOnce(
                          this.callBackDelayStop,
                          u + this.extendTime
                        );
                    }
                  }),
                  (o.stopSpinningWithSecondChance = function () {
                    var i = this;
                    (this.tweenTime =
                      (1.5 * (this.targetY - this.scrollNode.position.y)) /
                      this.currentSpeed),
                      this.stopSpinTween && this.stopSpinTween.stop();
                    var t = this.reelConfig.EASING_DISTANCE,
                      s = this.symbolHeight / 2;
                    (this.stopSpinTween = c(this.scrollNode)
                      .to(
                        Math.abs(this.tweenTime) + 0.08,
                        {
                          position: new u(
                            this.scrollNode.position.x,
                            this.targetY - t - s,
                            0
                          ),
                        },
                        { easing: "sineOut" }
                      )
                      .call(function () {
                        (i.isFastToResult = !0),
                          (i.isIdle = !0),
                          i.playSoundReelEnd();
                      })
                      .to(0.08, {
                        position: new u(
                          this.scrollNode.position.x,
                          this.targetY - s,
                          0
                        ),
                      })
                      .call(function () {
                        i.onReelStop(),
                          i.playSecondChanceAnim(),
                          (i.isSpinning = !1);
                      })
                      .delay(1.3)
                      .by(0.12, { position: new u(0, s, 0) })
                      .call(function () {
                        (i.isSecondChance = !1),
                          i.reset(),
                          i.callbackStop &&
                            (i.callbackStop(), (i.callbackStop = null)),
                          (i.stopSpinTween = null);
                      })),
                      this.stopSpinTween.start();
                  }),
                  (o.stopSpinningWithSteps = function () {
                    var i = this;
                    (this.tweenTime =
                      (1.5 * (this.targetY - this.scrollNode.position.y)) /
                      this.currentSpeed),
                      this.stopSpinTween && this.stopSpinTween.stop();
                    var t = this.reelConfig.EASING_DISTANCE;
                    (this.stopSpinTween = c(this.scrollNode)
                      .to(
                        Math.abs(this.tweenTime) + 0.08,
                        {
                          position: new u(
                            this.scrollNode.position.x,
                            this.targetY - t,
                            0
                          ),
                        },
                        { easing: "sineOut" }
                      )
                      .call(function () {
                        (i.isFastToResult = !0),
                          (i.isIdle = !0),
                          i.playSoundReelEnd();
                      })
                      .to(0.08, {
                        position: new u(
                          this.scrollNode.position.x,
                          this.targetY,
                          0
                        ),
                      })
                      .call(function () {
                        i.reset(),
                          i.onReelStop(),
                          i.callbackStop &&
                            (i.callbackStop(), (i.callbackStop = null)),
                          (i.isSpinning = !1),
                          (i.stopSpinTween = null);
                      })),
                      this.stopSpinTween.start();
                  }),
                  (o.stopSpinningWithNearMiss = function () {
                    var i = this,
                      t = this.targetY;
                    this.isMisSymbol && (t += this.symbolHeight / 2),
                      (this.tweenTime =
                        (1.5 * (t - this.scrollNode.position.y)) /
                        this.currentSpeed),
                      this.stopSpinTween && this.stopSpinTween.stop();
                    var s = this.symbolHeight / 6,
                      e = 1.5 * (Math.abs(this.tweenTime) + 0.08);
                    this.playEffectNearWin(),
                      this.isMisSymbol
                        ? ((this.stopSpinTween = c(this.scrollNode)
                            .to(
                              e,
                              {
                                position: new u(
                                  this.scrollNode.position.x,
                                  this.targetY,
                                  0
                                ),
                              },
                              { easing: "sineOut" }
                            )
                            .call(function () {
                              (i.isIdle = !0), (i.isSpinNearMiss = !0);
                            })
                            .by(
                              1.2,
                              { position: new u(0, -s, 0) },
                              { easing: "sineOut" }
                            )
                            .by(
                              0.6,
                              { position: new u(0, s, 0) },
                              { easing: "sineOut" }
                            )
                            .call(function () {
                              i.reset(),
                                i.onReelStop(),
                                (i.isFastToResult = !0),
                                (i.isSpinning = !1),
                                i.callbackStop &&
                                  (i.callbackStop(), (i.callbackStop = null)),
                                (i.stopSpinTween = null);
                            })),
                          this.stopSpinTween.start())
                        : ((this.stopSpinTween = c(this.scrollNode)
                            .to(
                              e,
                              {
                                position: new u(
                                  this.scrollNode.position.x,
                                  t,
                                  0
                                ),
                              },
                              { easing: "sineOut" }
                            )
                            .call(function () {
                              (i.isIdle = !0), (i.isSpinNearMiss = !0);
                            })
                            .by(
                              1.2,
                              { position: new u(0, -s, 0) },
                              { easing: "sineOut" }
                            )
                            .by(
                              0.6,
                              { position: new u(0, s, 0) },
                              { easing: "sineOut" }
                            )
                            .call(function () {
                              i.reset(),
                                i.onReelStop(),
                                (i.isFastToResult = !0),
                                (i.isSpinning = !1),
                                i.callbackStop &&
                                  (i.callbackStop(), (i.callbackStop = null)),
                                (i.stopSpinTween = null);
                            })),
                          this.stopSpinTween.start());
                  }),
                  (o.playSoundReelEnd = function () {
                    var i = this;
                    if (this.soundPlayer) {
                      var t = this.dataStore.playSession.payLines,
                        s = this.isValidSymbol(this.result[1], t);
                      (this.isNearWinMultiply && !s) ||
                        (s && !this.isMisSymbol
                          ? this.soundPlayer &&
                            ((this.callbackSoundWin = function () {
                              i.callbackSoundWin = null;
                            }),
                            this.scheduleOnce(this.callbackSoundWin, 0.5))
                          : this.soundPlayer &&
                            this.soundPlayer.playSfx("REEL_STOP"));
                    }
                  }),
                  (o.playSoundEndReelCallback = function () {}),
                  (o.onReelStop = function () {
                    var i = this.config,
                      t = i.PET_AXIE_STATE,
                      s = i.SIDE_WHEEL_STATE,
                      e = {
                        state: t.SIDE_WHEEL_INTERACTION,
                        sideWheelState: s.STOP_SPINNING,
                        isFTR: this.isFastToResult,
                      };
                    this.petAxie.emit("PLAY_PET_ANIMATION", e),
                      this.hideEffectNearWin(),
                      this.callbackSoundEndReel && this.callbackSoundEndReel();
                  }),
                  (o.fastStopSpinning = function () {
                    !this.isFastToResult &&
                      this.isSpinning &&
                      (this.rollingCount >=
                        this.reelConfig.TOTAL_CIRCULAR - 1 ||
                        ((this.isFastToResult = !0),
                        (this.isNearWinMultiply = !1),
                        (this.rate = 2),
                        (this.currentSpeed =
                          3 * this.sideWheelConfig.MAX_SPEED),
                        this.callBackDelayStop
                          ? (this.unschedule(this.callBackDelayStop),
                            this.callBackDelayStop(!0))
                          : this.stopSpinTween &&
                            (this.isSpinNearMiss
                              ? this.fastStopWithNearMiss()
                              : this.stopSpinningWithSteps())));
                  }),
                  (o.fastStopWithNearMiss = function () {
                    this.stopSpinTween &&
                      (this.stopSpinTween.stop(), (this.stopSpinTween = null)),
                      this.reset(),
                      this.onReelStop(),
                      (this.isSpinNearMiss = !1),
                      (this.isFastToResult = !0),
                      (this.isSpinning = !1),
                      this.callbackStop &&
                        (this.callbackStop(), (this.callbackStop = null));
                  }),
                  (o.setUpConfig = function () {
                    (this.rate = this.reelConfig.RATE),
                      (this.currentSpeed = this.sideWheelConfig.MIN_SPEED),
                      (this.rollingCount = 0),
                      (this.isSpinning = !0),
                      (this.totalScrolling = 0),
                      (this.isShowingResult = !1),
                      (this.isFastToResult = !1),
                      (this.previousY = 0),
                      (this.extendTime = 0),
                      (this.isNearWinMultiply = !1),
                      (this.maxSpeed = this.sideWheelConfig.MAX_SPEED);
                  }),
                  (o.reset = function () {
                    var i = this.config.TABLE_BUFFER;
                    this.scrollNode.setPosition(this.scrollNode.position.x, 0),
                      this.symbols.sort(function (i, t) {
                        return i.position.y - t.position.y;
                      });
                    var t = 0;
                    this.showSymbols = [];
                    for (var s = 0; s < this.symbols.length; s++) {
                      var e = this.symbols[s];
                      if (e)
                        if (
                          (e.setPosition(
                            new u(
                              e.position.x,
                              this.symbolPos[s] -
                                (this.isMisSymbol ? this.symbolHeight / 2 : 0),
                              0
                            )
                          ),
                          s >= i.BOT && s < this.symbols.length - i.TOP)
                        ) {
                          this.showSymbols.unshift(e);
                          var n = this.result[t];
                          e.setResult(n, this.isShow), t++;
                        } else e.setResult(e.symbol, this.isShow);
                    }
                    this.currentIndex = 0;
                  }),
                  (o.getRandomSymbolName = function () {
                    return this.symbolList[
                      Math.floor(Math.random() * this.symbolList.length)
                    ];
                  }),
                  (o.update = function (i) {
                    if (!this.isIdle) {
                      var t = i >= 0.0167 ? 0.0167 : i;
                      this.isSpinning &&
                        (this.currentSpeed < this.maxSpeed && 1 == this.rate
                          ? (this.currentSpeed +=
                              this.sideWheelConfig.ACCEL * t)
                          : this.isFastToResult ||
                            (this.currentSpeed = this.maxSpeed),
                        this.isShowingResult ||
                          this.scrollNode.setPosition(
                            this.scrollNode.position.x,
                            this.scrollNode.position.y - this.currentSpeed * t
                          ),
                        this.previousY != this.scrollNode.position.y &&
                          ((this.totalScrolling += Math.abs(
                            this.previousY - this.scrollNode.position.y
                          )),
                          (this.previousY = this.scrollNode.position.y))),
                        this.circulateSymbols();
                    }
                  }),
                  (o.circulateSymbols = function () {
                    if (this.sideWheelConfig)
                      for (
                        var i = this.config.TABLE_BUFFER;
                        this.totalScrolling >= this.symbolHeight;

                      ) {
                        var t = this.symbols[this.currentIndex],
                          s = t.position.y;
                        (s += this.symbolHeight * this.totalSymbols),
                          t.setPosition(new u(t.position.x, s, 0)),
                          (this.currentIndex =
                            (this.currentIndex + 1) % this.symbols.length),
                          (this.totalScrolling =
                            this.totalScrolling - this.symbolHeight);
                        var e = this.getRandomSymbolName();
                        if (this.isShowingResult) {
                          this.rollingCount++;
                          var n = this.showNumber + i.TOP - 1,
                            o =
                              (this.isStopWithNearMiss
                                ? 3 * this.reelConfig.TOTAL_CIRCULAR
                                : this.reelConfig.TOTAL_CIRCULAR) - n;
                          this.rollingCount >= o &&
                          this.rollingCount < o + this.showNumber
                            ? ((e = this.result[this.stop]),
                              t.setResult(e, this.isShow),
                              this.stop++)
                            : t.randomResult(e),
                            this.rollingCount === o + this.showNumber &&
                              t.setResult(e, this.isShow);
                        } else t.randomResult(e);
                      }
                  }),
                  (o.showResult = function (i) {
                    var t = this;
                    this.callback = i;
                    var s = this.result[1],
                      e = this.dataStore.playSession.payLines,
                      n = [].concat(this.symbols).sort(function (i, t) {
                        return i.position.y - t.position.y;
                      }),
                      o = this.isValidSymbol(s, e);
                    if (this.isMisSymbol || !o)
                      this.playPetAxieShowResult(!1),
                        this.callback && this.callback(),
                        (this.callback = null);
                    else if (o) {
                      this.playPetAxieShowResult(!0);
                      var l = Math.floor(this.symbols.length / 2);
                      n.forEach(function (i, e) {
                        var n = t.spineSymbols[e];
                        (n.position = i.position),
                          e === l
                            ? ("O" == s
                                ? t.soundPlayer &&
                                  t.soundPlayer.playSfx("WIN_GRAND")
                                : "U" == s &&
                                  t.soundPlayer &&
                                  t.soundPlayer.playSfx("WIN_MAJOR"),
                              n.emit("PLAY_ANIMATION", s),
                              (i.active = !1))
                            : t.updateColor(i, !1);
                      }),
                        this.showWinEffect(e);
                    }
                  }),
                  (o.playPetAxieShowResult = function (i) {
                    if (!this.dataStore.playSession.jackpot) {
                      var t = this.config,
                        s = t.PET_AXIE_STATE,
                        e = t.SIDE_WHEEL_STATE,
                        n = {
                          state: s.SIDE_WHEEL_INTERACTION,
                          sideWheelState: e.SHOW_RESULT,
                          isWin: i,
                          isTurbo: this.reelConfig.IS_TURBO,
                          isFTR: this.isFastToResult,
                        };
                      this.petAxie.emit("PLAY_PET_ANIMATION", n);
                    }
                  }),
                  (o.playSecondChanceAnim = function () {
                    var i = this.config,
                      t = i.PET_AXIE_STATE,
                      s = i.SIDE_WHEEL_STATE,
                      e = {
                        state: t.SIDE_WHEEL_INTERACTION,
                        sideWheelState: s.SECOND_CHANCE,
                        isTurbo: this.reelConfig.IS_TURBO,
                        isFTR: this.isFastToResult,
                      };
                    this.petAxie.emit("PLAY_PET_ANIMATION", e);
                  }),
                  (o.updateColor = function (i, t) {
                    void 0 === t && (t = !1),
                      (i.color = t ? d.WHITE : this.dimColor);
                  }),
                  (o.loopMultipleNode = function () {
                    (this.multipleSprite.node.tweenZoomLoop = c(
                      this.multipleSprite.node
                    ).repeatForever(
                      c()
                        .to(0.2, { scale: new u(1.1, 1.1, 0) })
                        .to(0.2, { scale: new u(1, 1, 0) })
                    )),
                      this.multipleSprite.node.tweenZoomLoop.start();
                  }),
                  (o.showWinEffect = function (i) {
                    if (
                      (this.petAxie.emit("SHOW_MAIN_AXIE_EYES", !0),
                      this.isWinMultiply(i))
                    ) {
                      this.callback && this.callback(), (this.callback = null);
                      var t = i[this.multipleIndex].multiple;
                      (this.multipleSprite.spriteFrame =
                        this.multipleAsset["x" + t]),
                        (this.multipleSprite.node.active = !0),
                        this.loopMultipleNode();
                    } else {
                      if (!this.dataStore.playSession.jackpotInfo)
                        return (
                          this.callback && this.callback(),
                          void (this.callback = null)
                        );
                      var s = { state: this.config.PET_AXIE_STATE.JACKPOT };
                      this.petAxie.emit("PLAY_PET_ANIMATION", s),
                        this.soundPlayer &&
                          this.soundPlayer.playSfx("MAGIC_BALL_APPEAR");
                      this.guiMgr.playIntroJackpotEffect(0.3, this.callback);
                    }
                  }),
                  (o.hideWinEffect = function () {
                    this.callbackSoundWin &&
                      ((this.callbackSoundWin = null),
                      this.unschedule(this.callbackSoundWin));
                  }),
                  (o.resetSpineResult = function () {
                    var i = this;
                    this.spineSymbols.forEach(function (t) {
                      i.updateColor(t, !0), t.emit("STOP_ANIMATION");
                    }),
                      this.symbols.forEach(function (t) {
                        (t.active = !0), i.updateColor(t, !0);
                      }),
                      this.multipleSprite.node.tweenZoomLoop &&
                        (this.multipleSprite.node.tweenZoomLoop.stop(),
                        (this.multipleSprite.node.tweenZoomLoop = null)),
                      (this.multipleSprite.node.active = !1);
                  }),
                  (o.extendTimeToStop = function (i) {
                    var t = this.sideWheelConfig.TABLE_FORMAT;
                    (this.extendTime = 0),
                      i === t.length - 1
                        ? (this.extendTime =
                            this.reelConfig.NEAR_WIN_DELAY_LAST_REEL * i)
                        : (this.extendTime =
                            this.reelConfig.NEAR_WIN_DELAY * i);
                  }),
                  (o.showSideWheelUI = function (i) {
                    (this.isShow = i),
                      y(this.scrollNode, i ? 255 : 0),
                      y(this.multipleSprite.node, i ? 255 : 0),
                      this.spineSymbols.forEach(function (t) {
                        y(t, i ? 255 : 0);
                      });
                  }),
                  (o.gameExit = function () {}),
                  (o.checkNearWinMultiply = function () {
                    var i = this,
                      t = this.dataStore.playSession.payLines;
                    if (t && t.length) {
                      var s = t.findIndex(function (t) {
                        return i.multiplySymbol.includes(t.symbolName);
                      });
                      this.isNearWinMultiply =
                        s !== this.sideWheelConfig.EMPTY_INDEX &&
                        !this.reelConfig.IS_TURBO;
                    } else this.isNearWinMultiply = !1;
                    this.isNearWinMultiply && this.extendTimeNearMultiply();
                  }),
                  (o.extendTimeNearMultiply = function () {
                    this.extendTime += this.reelConfig.NEAR_WIN_MULTIPLE_DELAY;
                  }),
                  (o.reelStopNearWin = function () {
                    this.isNearWinMultiply &&
                      (this.updateNearWinSpeed(), this.playEffectNearWin());
                  }),
                  (o.playEffectNearWin = function () {
                    (this.nearWinEffect.active = !0),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("NEARWIN_OVERTOP");
                    var i = this.config,
                      t = i.PET_AXIE_STATE,
                      s = i.SIDE_WHEEL_STATE,
                      e = {
                        state: t.SIDE_WHEEL_INTERACTION,
                        sideWheelState: s.NEAR_WIN,
                      };
                    this.petAxie.emit("PLAY_PET_ANIMATION", e);
                  }),
                  (o.hideEffectNearWin = function () {
                    (this.nearWinEffect.active = !1),
                      this.soundPlayer &&
                        this.soundPlayer.stopSfx("NEARWIN_OVERTOP");
                  }),
                  (o.updateNearWinSpeed = function () {
                    this.currentSpeed !== this.sideWheelConfig.SUPER_SPEED &&
                      (this.currentSpeed = this.sideWheelConfig.SUPER_SPEED);
                  }),
                  (o.isValidSymbol = function (i, t) {
                    var s =
                      this.paylineSymbols.indexOf(i) ===
                      this.sideWheelConfig.EMPTY_INDEX;
                    return s || this.isWinMultiply(t);
                  }),
                  (o.isWinMultiply = function (i) {
                    if (!i || !i.length) return !1;
                    var t = i.findIndex(function (i) {
                      return i.multiple > 1;
                    });
                    return (
                      (this.multipleIndex = t),
                      t !== this.sideWheelConfig.EMPTY_INDEX
                    );
                  }),
                  (o.onDisable = function () {
                    this.stopSpinTween &&
                      (this.stopSpinTween.stop(), (this.stopSpinTween = null));
                  }),
                  t
                );
              })(E)).prototype,
              "itemPrefab",
              [T],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (w = t(M.prototype, "scrollNode", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (P = t(M.prototype, "spineResult", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (C = t(M.prototype, "spinePrefab", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (L = t(M.prototype, "nearWinEffect", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (O = t(M.prototype, "dimColor", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new d();
              },
            })),
            (v = t(M.prototype, "multipleSprite", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (x = t(M.prototype, "multipleSpriteFrames", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (k = t(M.prototype, "isFreeMode", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (I = M))
          ) || I)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetHistoryDetail9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotBetHistoryDetail.ts"],
  function (t) {
    "use strict";
    var e, i, n, o, r, a, s, l, h, u, c, d, m, p, g, S, f, M;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.initializerDefineProperty),
            (n = t.inheritsLoose),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (a = t._decorator),
            (s = t.SpriteFrame),
            (l = t.Prefab),
            (h = t.NodePool),
            (u = t.warn),
            (c = t.Label),
            (d = t.Button),
            (m = t.Vec2),
            (p = t.Toggle),
            (g = t.instantiate),
            (S = t.UITransform),
            (f = t.Sprite);
        },
        function (t) {
          M = t.SlotBetHistoryDetail;
        },
      ],
      execute: function () {
        var B, b, P, v, G, w, y, x, C, I, D, F, V, k, E, L, T, _;
        r._RF.push(
          {},
          "0d90fKDxbRIMIodwMowyXLC",
          "SlotBetHistoryDetail9938",
          void 0
        );
        var A = a.ccclass,
          z = a.property,
          O = t(
            "ButtonState",
            ((B = A("ButtonState")),
            (b = z({ type: s })),
            (P = z({ type: s })),
            (v = z({ type: s })),
            (G = z({ type: s })),
            B(
              ((x = e(
                (y = function () {
                  i(this, "normalState", x, this),
                    i(this, "pressedState", C, this),
                    i(this, "hoverState", I, this),
                    i(this, "disableState", D, this);
                }).prototype,
                "normalState",
                [b],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (C = e(y.prototype, "pressedState", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (I = e(y.prototype, "hoverState", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (D = e(y.prototype, "disableState", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (w = y))
            ) || w)
          );
        t(
          "SlotBetHistoryDetail9938",
          ((F = A("SlotBetHistoryDetail9938")),
          (V = z({ type: l })),
          (k = z({ type: O })),
          F(
            ((T = e(
              (L = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    i(e, "scrollButtonPrefab", T, o(e)),
                    i(e, "buttonState", _, o(e)),
                    (e.scrollButtons = []),
                    (e.scrollButtonPool = null),
                    (e.currentModePage = void 0),
                    e
                  );
                }
                n(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    (this.scrollButtonPool = new h()),
                      t.prototype.onLoad.call(this),
                      this.node.on(
                        "ON_SCROLL_ITEM_CLICK",
                        this.onScrollItemClick,
                        this
                      ),
                      this.prevModeBtn &&
                        ((this.prevModeBtn.active = !0),
                        this.updateButtonState(this.prevModeBtn, !1)),
                      this.nextModeBtn &&
                        ((this.nextModeBtn.active = !0),
                        this.updateButtonState(this.nextModeBtn, !0)),
                      (this.currentModePage = 0);
                  }),
                  (r.getModeIndex = function (e) {
                    var i = this;
                    e && e.length
                      ? (t.prototype.getModeIndex.call(this, e),
                        this.freeIndexes &&
                          this.freeIndexes.length &&
                          this.freeIndexes.forEach(function (t, e) {
                            var n = i.getScrollButton();
                            if (n) {
                              n.active = !0;
                              var o = n.getChildByName("Title");
                              o && (o.getComponent(c).string = "Free " + t),
                                i.scrollContent.addChild(n),
                                n.setIndex(e),
                                i.scrollButtons.push(n);
                            }
                          }))
                      : u("Scroll data not found", e);
                  }),
                  (r.resetUI = function () {
                    t.prototype.resetUI.call(this);
                    for (var e = 0; e < this.scrollButtons.length; e++) {
                      var i = this.scrollButtons[e];
                      this.scrollContent.removeChild(i);
                    }
                    (this.scrollButtons = []),
                      this.prevModeBtn &&
                        ((this.prevModeBtn.active = !0),
                        this.updateButtonState(this.prevModeBtn, !1)),
                      this.nextModeBtn &&
                        ((this.nextModeBtn.active = !0),
                        this.updateButtonState(this.nextModeBtn, !0)),
                      (this.currentModePage = 0);
                  }),
                  (r.onScrollItemClick = function (t) {
                    if (t.scrollItemData) {
                      var e = Number(t.scrollItemData.index);
                      (this.currentFreeGamePage = e),
                        this.onShowGameMode(null, 2);
                    }
                  }),
                  (r.onShowGameMode = function (t, e) {
                    switch (
                      (this.hideAllView(),
                      this.enableGameModeButtons(!0),
                      this.soundPlayer && this.soundPlayer.playSFXClick(),
                      (this.gameMode = Number(e)),
                      this.normalGameView &&
                        this.normalGameView.emit("CLEAR_TABLE"),
                      this.freeGameView &&
                        this.freeGameView.emit("CLEAR_TABLE"),
                      this.jackpotView && this.jackpotView.emit("CLEAR_TABLE"),
                      this.gameMode)
                    ) {
                      case 0:
                        (this.summaryBtn.getComponent(d).interactable = !1),
                          (this.summaryView.active = !0),
                          (this.currentModePage = 0),
                          this.updateButtonState(this.nextModeBtn, !0),
                          this.updateButtonState(this.prevModeBtn, !1);
                        break;
                      case 1:
                        (this.normalGameBtn.getComponent(d).interactable = !1),
                          (this.normalGameView.active = !0),
                          this.normalGameData
                            ? this.updateGameMode(this.normalGameData)
                            : this.normalIndex >= 0 &&
                              this.requestDetail(this.normalIndex),
                          !this.freeIndexes.length &&
                            this.nextModeBtn &&
                            this.updateButtonState(this.nextModeBtn, !1),
                          this.updateButtonState(this.prevModeBtn, !0),
                          (this.currentModePage = 1);
                        break;
                      case 2:
                        (this.freeGameView.active = !0),
                          this.freeGameData[this.currentFreeGamePage]
                            ? this.updateGameMode(
                                this.freeGameData[this.currentFreeGamePage]
                              )
                            : this.freeIndexes.length &&
                              this.freeIndexes[this.currentFreeGamePage] >= 1 &&
                              this.requestDetail(
                                this.freeIndexes[this.currentFreeGamePage]
                              ),
                          (this.currentModePage = this.currentFreeGamePage + 2),
                          this.updateButtonState(
                            this.nextModeBtn,
                            this.currentFreeGamePage !==
                              this.freeIndexes.length - 1
                          ),
                          this.updateButtonState(this.prevModeBtn, !0);
                    }
                    this.updateScroller();
                  }),
                  (r.updateGameMode = function (t) {
                    switch (this.gameMode) {
                      case 1:
                        (this.normalGameData = t),
                          this.normalGameView &&
                            this.normalGameView.emit("UPDATE_DETAIL_VIEW", t);
                        break;
                      case 2:
                        (this.freeGameData[this.currentFreeGamePage] = t),
                          this.freeGameView &&
                            this.freeGameView.emit(
                              "UPDATE_DETAIL_VIEW",
                              t,
                              this.freeIndexes,
                              this.currentFreeGamePage
                            );
                    }
                  }),
                  (r.onPrevMode = function () {
                    var t = this.spacingX + this.itemWidth,
                      e =
                        this.indexGameMode - 1 < 0 ? 0 : this.indexGameMode - 1,
                      i = new m((e - 2) * t, 0);
                    this.updateScrollView(i),
                      this.soundPlayer && this.soundPlayer.playSFXClick(),
                      this.updateToogleButton(e),
                      (this.prevModeBtn.isClicked = !0),
                      (this.indexGameMode = e),
                      this.updateButtonState(this.nextModeBtn, !0),
                      this.currentModePage--;
                    var n = this.scrollContent.children;
                    n.forEach(function (t) {
                      t.getComponent(p).isChecked = !1;
                    }),
                      (n[this.currentModePage].getComponent(p).isChecked = !0),
                      this.currentModePage <= 1
                        ? this.onShowGameMode(null, this.currentModePage)
                        : this.currentModePage > 1 &&
                          ((this.currentFreeGamePage =
                            this.currentModePage - 2),
                          this.onShowGameMode(null, 2));
                  }),
                  (r.onNextMode = function () {
                    var t = this.spacingX + this.itemWidth,
                      e =
                        this.indexGameMode + 1 >= this.gameModes.length
                          ? this.indexGameMode
                          : this.indexGameMode + 1,
                      i = new m((e - 1) * t, 0);
                    this.updateScrollView(i),
                      this.soundPlayer && this.soundPlayer.playSFXClick(),
                      this.updateToogleButton(e),
                      (this.nextModeBtn.isClicked = !0),
                      (this.indexGameMode = e),
                      this.updateButtonState(this.prevModeBtn, !0),
                      this.currentModePage++;
                    var n = this.scrollContent.children;
                    n.forEach(function (t) {
                      t.getComponent(p).isChecked = !1;
                    }),
                      (n[this.currentModePage].getComponent(p).isChecked = !0),
                      this.currentModePage <= 1
                        ? this.onShowGameMode(null, this.currentModePage)
                        : this.currentModePage > 1 &&
                          ((this.currentFreeGamePage =
                            this.currentModePage - 2),
                          this.onShowGameMode(null, 2));
                  }),
                  (r.getScrollButton = function () {
                    var t = this.scrollButtonPool.get();
                    return t || (t = g(this.scrollButtonPrefab)), t;
                  }),
                  (r.updateScroller = function () {
                    this.scrollView.stopAutoScroll(),
                      this.scrollContent.children[0].getComponent(S) ||
                        this.scrollContent.children[0].addComponent(S);
                    var t =
                      this.scrollContent.children[0].getComponent(S).width;
                    if (
                      2 === this.gameMode &&
                      this.currentFreeGamePage >= 0 &&
                      this.currentFreeGamePage + 1 <=
                        this.scrollContent.children.length
                    ) {
                      var e =
                        (this.currentFreeGamePage + 1) * t +
                        10 * (this.currentFreeGamePage + 1);
                      this.scrollView.scrollToOffset(new m(e, 0));
                    } else this.scrollView.scrollToOffset(new m(0, 0));
                  }),
                  (r.onScrolling = function (t) {
                    var e = this.scrollView.getScrollOffset();
                    this.currentOffset = new m(Math.abs(e.x), Math.abs(e.y));
                  }),
                  (r.onScrollEnded = function () {
                    var t = this.scrollView.getScrollOffset();
                    this.currentOffset = new m(Math.abs(t.x), Math.abs(t.y));
                  }),
                  (r.checkMaxModePages = function () {
                    t.prototype.checkMaxModePages.call(this),
                      (this.nextModeBtn.active = !0);
                  }),
                  (r.updateButtonState = function (t, e) {
                    var i = t.getComponent(d);
                    (i.interactable = e),
                      e
                        ? ((t.getComponent(f).spriteFrame =
                            this.buttonState.normalState),
                          (i.normalSprite = this.buttonState.normalState),
                          (i.pressedSprite = this.buttonState.pressedState),
                          (i.hoverSprite = this.buttonState.hoverState),
                          (i.disabledSprite = this.buttonState.normalState))
                        : ((t.getComponent(f).spriteFrame =
                            this.buttonState.disableState),
                          (i.normalSprite = this.buttonState.disableState),
                          (i.pressedSprite = this.buttonState.disableState),
                          (i.hoverSprite = this.buttonState.disableState),
                          (i.disabledSprite = this.buttonState.disableState));
                  }),
                  (r.onDestroy = function () {
                    this.scrollButtonPool.clear();
                  }),
                  e
                );
              })(M)).prototype,
              "scrollButtonPrefab",
              [V],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (_ = e(L.prototype, "buttonState", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = L))
          ) || E)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetSummaryHistory9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotBetSummaryHistory.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var n, o, i, r, s;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          r = t.SlotBetSummaryHistory;
        },
        function (t) {
          s = t.formatMoney;
        },
      ],
      execute: function () {
        var e;
        o._RF.push(
          {},
          "eaad9d2WR9GoIysG83E1roY",
          "SlotBetSummaryHistory9938",
          void 0
        );
        var a = i.ccclass;
        t(
          "SlotBetSummaryHistory9938",
          a("SlotBetSummaryHistory9938")(
            (e = (function (t) {
              function o() {
                return t.apply(this, arguments) || this;
              }
              n(o, t);
              var i = o.prototype;
              return (
                (i.onLoad = function () {
                  t.prototype.onLoad.call(this);
                }),
                (i.updateSummary = function (t) {
                  if (t) {
                    if (
                      (this.totalWinAmount &&
                        (this.totalWinAmount.string = s(
                          parseInt(t.totalWinAmount)
                        )),
                      this.normalWinAmount &&
                        (this.normalWinAmount.string = s(
                          parseInt(t.totalNormalWinAmount)
                        )),
                      this.freeWinAmount &&
                        (this.freeWinAmount.string = s(
                          parseInt(t.totalFreeWinAmount)
                        )),
                      this.jackpotWinAmount)
                    ) {
                      var n = parseInt(t.totalJpWinAmount),
                        o = parseInt(t.eventExtraAmountTotal || null),
                        i = n + o,
                        r = parseInt(t.userLevel.replace("LEVEL", ""));
                      o
                        ? ((this.jackpotWinVip.string =
                            s(n) +
                            " + " +
                            s(o) +
                            " (" +
                            t.eventExtraPercent +
                            "% vip" +
                            r +
                            ") \n= " +
                            s(i)),
                          (this.jackpotWinVip.node.active = !0),
                          (this.jackpotWinAmount.node.active = !1))
                        : ((this.jackpotWinAmount.string = s(
                            parseInt(t.totalJpWinAmount)
                          )),
                          (this.jackpotWinVip.node.active = !1),
                          (this.jackpotWinAmount.node.active = !0));
                    }
                    this.bonusWinAmount &&
                      (this.bonusWinAmount.string = s(
                        parseInt(t.totalBonusWinAmount)
                      )),
                      this.topUpWinAmount &&
                        (this.topUpWinAmount.string = s(
                          parseInt(t.totalTopUpWinAmount)
                        ));
                  }
                }),
                o
              );
            })(r))
          ) || e
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetTableHistoryDetail9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotBetTableHistoryDetail.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var e, i, r, o, l, a, n, s, u, c, h, b, p, m, d;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (a = t._decorator),
            (n = t.Prefab),
            (s = t.Node),
            (u = t.SpriteFrame),
            (c = t.Label),
            (h = t.Sprite),
            (b = t.instantiate),
            (p = t.Vec3);
        },
        function (t) {
          m = t.SlotBetTableHistoryDetail;
        },
        function (t) {
          d = t.formatMoney;
        },
      ],
      execute: function () {
        var f,
          y,
          g,
          v,
          S,
          w,
          H,
          T,
          W,
          k,
          L,
          P,
          A,
          j,
          z,
          F,
          D,
          I,
          M,
          C,
          N,
          R,
          x,
          B,
          _,
          K;
        l._RF.push(
          {},
          "e77f8sgDq1OdKwJrkliTS06",
          "SlotBetTableHistoryDetail9938",
          void 0
        );
        var E = a.ccclass,
          J = a.property,
          O = ["MAJOR", "GRAND"];
        t(
          "SlotBetTableHistoryDetail9938",
          ((f = E("SlotBetTableHistoryDetail9938")),
          (y = J({ type: n })),
          (g = J({ type: n })),
          (v = J({ type: n })),
          (S = J({ type: s })),
          (w = J({ type: s })),
          (H = J({ type: s })),
          (T = J({ type: s })),
          (W = J({ type: s })),
          (k = J({ type: s })),
          (L = J({ type: s })),
          (P = J({ type: u })),
          f(
            ((z = e(
              (j = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, l = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    l[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(l)) || this),
                    r(e, "symbolSidePrefab", z, o(e)),
                    r(e, "wildPrefab", F, o(e)),
                    r(e, "roadPrefab", D, o(e)),
                    r(e, "symbolSide", I, o(e)),
                    r(e, "bigWildHolder", M, o(e)),
                    r(e, "roadHolder", C, o(e)),
                    r(e, "wildTag", N, o(e)),
                    r(e, "titleLayout", R, o(e)),
                    r(e, "gameModeLabel", x, o(e)),
                    r(e, "jackpotFrame", B, o(e)),
                    r(e, "jackpotSprites", _, o(e)),
                    r(e, "symbolHeight", K, o(e)),
                    e
                  );
                }
                i(e, t);
                var l = e.prototype;
                return (
                  (l.updateDetailView = function (e, i, r) {
                    t.prototype.updateDetailView.call(this, e, i),
                      this.renderWildInTable(e),
                      this.renderSideWheel(e);
                    var o = [].concat(e.matrixResult);
                    0 ===
                      o.filter(function (t) {
                        return "K" === t;
                      }).length ||
                    "normal" !== e.mode ||
                    e.latestWinJackpotInfo
                      ? (this.titleLayout && (this.titleLayout.active = !0),
                        this.wildTag && (this.wildTag.active = !1),
                        this.renderTitleLayout(e, r))
                      : this.wildTag && (this.wildTag.active = !0);
                    var l = e.paylines;
                    if (l && l.length)
                      for (var a = 0; a < l.length; a++) {
                        var n = l[a].split(";")[4];
                        if (n > 1)
                          for (
                            var s = l[a].split(";")[3],
                              u = l[a].split(";")[0],
                              c = l[a].split(";")[1],
                              h = this.config.PAY_LINE_MATRIX[u],
                              b = 0;
                            b < c;
                            ++b
                          ) {
                            var p = h[b],
                              m = b;
                            o[p + 3 * m] == s &&
                              this.slotTable.children[p + 3 * m].emit(
                                "CHANGE_SKIN",
                                Number(n)
                              );
                          }
                      }
                  }),
                  (l.renderTitleLayout = function (t, e) {
                    this.jackpotFrame.active = !1;
                    var i = t.mode,
                      r = t.latestWinJackpotInfo,
                      o = t.winAmount;
                    if (
                      ((this.gameModeLabel.getComponent(c).string =
                        "normal" === i
                          ? "Normal"
                          : "Free" + (e >= 0 ? " " + (e + 1) : "")),
                      r)
                    ) {
                      var l = -1;
                      if (
                        (O.forEach(function (t, e) {
                          r[0].jackpotId.indexOf(t) >= 0 && (l = e);
                        }),
                        this.jackpotSprites.length <= O.length && -1 != l)
                      ) {
                        (this.jackpotFrame.getComponent(h).spriteFrame =
                          this.jackpotSprites[l]),
                          (this.jackpotFrame.active = !0);
                        var a = this.gameModeLabel.getComponent(c).string;
                        this.gameModeLabel.getComponent(c).string = a + " + ";
                      }
                    }
                    if (
                      ((this.totalWinAmount.string = ""),
                      (this.totalWinAmount.node.active = !1),
                      o &&
                        o > 0 &&
                        ((this.totalWinAmount.node.active = !0),
                        (this.totalWinAmount.string = " : " + d(o))),
                      r && r.length)
                    ) {
                      var n =
                        Number(r[0].jackpotAmount) + Number(o > 0 ? o : 0);
                      (this.totalWinAmount.node.active = !0),
                        (this.totalWinAmount.string = " : " + d(n));
                    }
                  }),
                  (l.renderWildInTable = function (t) {
                    for (
                      var e = [],
                        i = [].concat(t.matrixResult),
                        r =
                          (-t.matrixFormat.length / 2 + 0.5) *
                          this.customSymbolWidth,
                        o =
                          (t.matrixFormat[0] / 2 - 0.5) *
                          this.customSymbolHeight;
                      i.length;

                    )
                      e.push(i.splice(0, 3));
                    for (var l = 0; l < e.length; l++) {
                      var a,
                        n = e[l].indexOf("K");
                      if (
                        0 !==
                        (a = e[l].filter(function (t) {
                          return "K" === t;
                        }).length)
                      ) {
                        var s = b(this.wildPrefab);
                        s.parent = this.bigWildHolder;
                        var u = -1;
                        switch (a) {
                          case 3:
                            u = 1;
                            break;
                          case 2:
                            u = 0 === n ? 0 : 2;
                            break;
                          case 1:
                            u = 0 === n ? -1 : 3;
                        }
                        if (-1 !== u) {
                          var c = b(this.roadPrefab);
                          (c.parent = this.roadHolder),
                            c.setPosition(
                              new p(
                                r + l * this.customSymbolWidth,
                                o - this.customSymbolHeight,
                                0
                              )
                            );
                        }
                        s.setPosition(
                          new p(
                            r + l * this.customSymbolWidth,
                            o - u * this.customSymbolHeight,
                            0
                          )
                        );
                      }
                    }
                  }),
                  (l.renderSideWheel = function (t) {
                    var e = t.result.matrixSideWheel,
                      i = [].concat(e).reverse();
                    if ("E" === i[1])
                      for (var r = [i[0], i[2]], o = 0; o < r.length; o++) {
                        var l = b(this.symbolSidePrefab);
                        (l.parent = this.symbolSide),
                          l.setPosition(
                            0,
                            -0.5 * this.symbolHeight + o * this.symbolHeight
                          ),
                          l.setResult(r[o]);
                      }
                    else
                      for (var a = 0; a < i.length; a++) {
                        var n = b(this.symbolSidePrefab);
                        (n.parent = this.symbolSide),
                          n.setPosition(
                            0,
                            -this.symbolHeight + a * this.symbolHeight
                          ),
                          n.setResult(i[a]);
                      }
                  }),
                  (l.resetUI = function () {
                    this.titleLayout && (this.titleLayout.active = !0),
                      this.jackpotFrame && (this.jackpotFrame.active = !1),
                      this.gameModeLabel &&
                        (this.gameModeLabel.getComponent(c).string = ""),
                      t.prototype.resetUI.call(this);
                  }),
                  (l.clearTable = function () {
                    t.prototype.clearTable.call(this),
                      this.bigWildHolder &&
                        this.bigWildHolder.removeAllChildren(),
                      this.roadHolder && this.roadHolder.removeAllChildren(),
                      this.symbolSide && this.symbolSide.removeAllChildren(),
                      this.wildTag && (this.wildTag.active = !1);
                  }),
                  e
                );
              })(m)).prototype,
              "symbolSidePrefab",
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
            (F = e(j.prototype, "wildPrefab", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(j.prototype, "roadPrefab", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(j.prototype, "symbolSide", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = e(j.prototype, "bigWildHolder", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = e(j.prototype, "roadHolder", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(j.prototype, "wildTag", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(j.prototype, "titleLayout", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = e(j.prototype, "gameModeLabel", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = e(j.prototype, "jackpotFrame", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = e(j.prototype, "jackpotSprites", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (K = e(j.prototype, "symbolHeight", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 166;
              },
            })),
            (A = j))
          ) || A)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotButton9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotButton.ts",
  ],
  function (t) {
    "use strict";
    var i, n, o, e, s, p, a, c, h, S, r;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (p = t._decorator),
            (a = t.Node),
            (c = t.Sprite),
            (h = t.KeyCode);
        },
        function (t) {
          S = t.SlotGameMode;
        },
        function (t) {
          r = t.SlotButton;
        },
      ],
      execute: function () {
        var l, u, y, d, m;
        s._RF.push({}, "b299eOXBRxBEbShJKCHuyDY", "SlotButton9938", void 0);
        var f = p.ccclass,
          b = p.property;
        t(
          "SlotButton9938",
          ((l = f("SlotButton9938")),
          (u = b(a)),
          l(
            ((m = i(
              (d = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, s = new Array(n), p = 0;
                    p < n;
                    p++
                  )
                    s[p] = arguments[p];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    o(i, "iconSpin", m, e(i)),
                    (i.isJoinGameSuccess = !1),
                    i
                  );
                }
                n(i, t);
                var s = i.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.iconSpin && this.iconSpin.emit("ON_SPIN_SHOW"),
                      this.node.on(
                        "ENABLE_BUTTON_INTERACTION",
                        this.enableButtonInteraction,
                        this
                      );
                  }),
                  (s.enableButtonInteraction = function () {
                    this.isJoinGameSuccess = !0;
                  }),
                  (s.enableSpin = function () {
                    t.prototype.enableSpin.call(this),
                      this.iconSpin &&
                        ((this.iconSpin.active = !0),
                        this.iconSpin.emit("ON_SPIN_SHOW"));
                  }),
                  (s.onHover = function () {
                    t.prototype.onHover.call(this),
                      this.iconSpin && this.iconSpin.emit("ON_SPIN_CLICK");
                  }),
                  (s.onMouseLeave = function () {
                    t.prototype.onMouseLeave.call(this),
                      this.iconSpin && this.iconSpin.emit("ON_SPIN_SHOW");
                  }),
                  (s.showSpin = function () {
                    t.prototype.showSpin.call(this),
                      (this.iconSpin.active = !0);
                  }),
                  (s.hideSpin = function () {
                    t.prototype.hideSpin.call(this),
                      (this.iconSpin.active = !1);
                  }),
                  (s.showStopAutoSpin = function () {
                    t.prototype.showStopAutoSpin.call(this),
                      this.currentGameMode === S.NormalGame &&
                        (this.setOpacity(this.btnFastStop.node, 0),
                        this.setOpacity(this.btnSpin.node, 0));
                  }),
                  (s.hideStopAutoSpin = function (i) {
                    t.prototype.hideStopAutoSpin.call(this, i),
                      this.currentGameMode === S.NormalGame &&
                        (this.setOpacity(this.btnFastStop.node, 255),
                        this.setOpacity(this.btnSpin.node, 255));
                  }),
                  (s.spinClick = function () {
                    this.spineBtnSpin &&
                      this.isJoinGameSuccess &&
                      (this.spineBtnSpin.setAnimation(0, "Spin_To_Stop", !1),
                      this.spineBtnSpin.addAnimation(
                        0,
                        this.animFastToResult,
                        !1
                      ),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("SPIN_CLICK")),
                      t.prototype.spinClick.call(this);
                  }),
                  (s.runAutoSpin = function (i, n) {
                    void 0 === n && (n = 99999),
                      (this.iconSpin.active = !1),
                      t.prototype.runAutoSpin.call(this, i, n);
                  }),
                  (s.enableFastToResult = function () {
                    (this.btnFastStop.interactable = !0),
                      this.textSpin &&
                        this.txtPressToStop &&
                        (this.textSpin.getComponent(c).spriteFrame =
                          this.txtPressToStop);
                  }),
                  (s.disableFastToResult = function () {
                    this.btnFastStop.interactable = !1;
                  }),
                  (s.showFastToResult = function () {
                    t.prototype.showFastToResult.call(this),
                      this.textSpin &&
                        this.txtPressToStop &&
                        (this.textSpin.getComponent(c).spriteFrame =
                          this.txtPressToStop);
                  }),
                  (s.onKeyUp = function (i) {
                    i.keyCode === h.SPACE &&
                      this.isJoinGameSuccess &&
                      this.guiMgr.isSpinVisible() &&
                      this.guiMgr.isDisplayFullScreen() &&
                      this.node.active &&
                      this.btnSpin &&
                      this.btnSpin.interactable &&
                      !this.btnStopAuto.node.active &&
                      this.spineBtnSpin &&
                      (this.spineBtnSpin.setAnimation(0, "Spin_To_Stop", !1),
                      this.spineBtnSpin.addAnimation(
                        0,
                        this.animFastToResult,
                        !1
                      )),
                      t.prototype.onKeyUp.call(this, i);
                  }),
                  i
                );
              })(r)).prototype,
              "iconSpin",
              [u],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (y = d))
          ) || y)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotReel9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./SlotReelv2.ts",
  ],
  function (i) {
    "use strict";
    var t, e, s, n, o, l, h, d;
    return {
      setters: [
        function (i) {
          t = i.inheritsLoose;
        },
        function (i) {
          (e = i.cclegacy),
            (s = i._decorator),
            (n = i.tween),
            (o = i.Vec3),
            (l = i.sp);
        },
        function (i) {
          h = i.changeParent;
        },
        function (i) {
          d = i.SlotReelv2;
        },
      ],
      execute: function () {
        var a;
        e._RF.push({}, "c2d43OPA5xBhLbEVMx2MK22", "SlotReel9938", void 0);
        var c = s.ccclass,
          r = "K",
          S = 1,
          u = 2;
        i(
          "SlotReel9938",
          c("SlotReel9938")(
            (a = (function (i) {
              function e() {
                for (
                  var t, e = arguments.length, s = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  s[n] = arguments[n];
                return (
                  ((t = i.call.apply(i, [this].concat(s)) || this).wildObject =
                    null),
                  (t.wildPrefabName = "ExpandingWild"),
                  (t.scatterPrefab = "ScatterSymbol"),
                  (t.poolFactory = null),
                  (t.tableParent = null),
                  (t.isSlidingWild = !1),
                  (t.isSlidingWildLastTime = !1),
                  (t.isHavingBigWild = !1),
                  (t.slidingSymbols = []),
                  (t.bigWildIndex = -2),
                  (t.callbackSoundEndReel = function () {}),
                  (t.updatedIndex = 0),
                  (t.wildState = 0),
                  (t.startSpinTween = void 0),
                  t
                );
              }
              t(e, i);
              var s = e.prototype;
              return (
                (s.onLoad = function () {
                  i.prototype.onLoad.call(this),
                    (this.node.reelComponent = this);
                }),
                (s.initPoolFactory = function (i, t) {
                  void 0 === i && (i = null),
                    void 0 === t && (t = null),
                    (this.poolFactory = i),
                    (this.tableParent = t);
                }),
                (s.startSlidingWild = function () {
                  this.isSlidingWild &&
                    (this.playAnimWildSlide(),
                    (this.showSymbols = []),
                    this.runAnimSliding(this.config.SLIDING_TIME));
                }),
                (s.startSlidingLastWild = function () {
                  this.isSlidingWildLastTime &&
                    ((this.isSlidingWild = !1),
                    this.runAnimSliding(this.config.SLIDING_TIME_LAST_TIME));
                }),
                (s.runAnimSliding = function (i) {
                  var t = this;
                  this.revertToOldWildParent(),
                    this.symbols.forEach(function (i, e) {
                      i.emit("CHANGE_TO_SYMBOL", t.slidingSymbols[e]),
                        e < t.showNumber && t.showSymbols.unshift(i);
                    }),
                    (this.startSpinTween = n(this.node)
                      .by(i, {
                        position: new o(0, this.config.SYMBOL_HEIGHT, 0),
                      })
                      .call(function () {
                        t.circularSlideSymbol();
                      })),
                    this.startSpinTween.start();
                }),
                (s.circularSlideSymbol = function () {
                  var i = this.symbols[this.symbols.length - 1];
                  if (
                    (i.setPosition(new o(i.position.x, 2 * -i.position.y, 0)),
                    this.reset(),
                    this.isSlidingWildLastTime)
                  ) {
                    var t = this.symbols[this.symbols.length - 1];
                    t.emit("CHANGE_TO_BLUR_SYMBOL", t.symbol),
                      this.resetBigWild(),
                      this.tableParent &&
                        this.tableParent.reelSlideLastTime(this.reelIndex),
                      (this.isSlidingWildLastTime = !1);
                  }
                }),
                (s.startSpinning = function (i, t) {
                  void 0 === t && (t = {}),
                    this.isSlidingWild ||
                      ((this.step = this.MAX_STEP - 1),
                      (this.reelConfig = t),
                      (this.reelIndex = i),
                      this.setUpConfig(),
                      this.runSpinning());
                }),
                (s.stopSpinningWithDelay = function (i, t, e) {
                  void 0 === e && (e = 0),
                    (this.callbackStop = t),
                    (this.result = [].concat(i)),
                    (this.isNearWin = !1),
                    (this.reelIndex = e);
                  var s = this.reelConfig,
                    n = s.DELAY_STOP,
                    o = s.IS_TURBO ? n : e * n;
                  this.isSlidingWild
                    ? (t && t(!0), (this.callbackStop = function () {}))
                    : ((this.showSymbols = []),
                      this.unschedule(this.setStepToStop),
                      this.scheduleOnce(
                        this.setStepToStop,
                        o + this.extendTime
                      )),
                    this.result.unshift(
                      this.getRandomSymbolNameWithExceptions(["A", "K"])
                    ),
                    this.config.TABLE_BUFFER.BOT > 0 &&
                      this.result.push(
                        this.getRandomSymbolNameWithExceptions(["A", "K"])
                      );
                }),
                (s.runSpinning = function () {
                  var i = this;
                  this.runSpinningAnimation(function () {
                    if (i.step > i.showNumber)
                      i.runSpinning(),
                        i.step--,
                        i.step < i.totalSymbols &&
                          ((i.isShowingResult = !0),
                          i.bigWildIndex > -2 &&
                            !i.wildObject &&
                            i.addBigWild());
                    else if (i.step == i.showNumber)
                      if (
                        i.reelIndex ===
                          i.config.NORMAL_TABLE_FORMAT.length - 1 &&
                        i.isNearWin &&
                        !i.isFastToResult
                      )
                        i.runStopAnimation(50, 0.2);
                      else {
                        var t = i.reelConfig.EASING_DISTANCE;
                        i.runStopAnimation(t, 0.08);
                      }
                  });
                }),
                (s.fastStopSpinning = function () {
                  this.step !== this.MAX_STEP &&
                    ((this.isFastToResult = !0),
                    this.unschedule(this.setStepToStop),
                    (this.currentSpeed = this.currentSpeed / 3),
                    this.step >= this.totalSymbols &&
                      (this.step = this.totalSymbols));
                }),
                (s.circulateSymbols = function () {
                  var i = this.symbols[this.currentIndex],
                    t = this.getRandomSymbolName();
                  if ((this.removeScatterSymbol(i), this.isShowingResult)) {
                    if (this.stop < this.totalSymbols) {
                      var e =
                        this.stop >= this.config.TABLE_BUFFER.TOP &&
                        this.stop <
                          this.showNumber + this.config.TABLE_BUFFER.TOP;
                      (t = this.result[this.stop]),
                        (this.step =
                          this.totalSymbols +
                          this.showNumber -
                          (this.stop + this.config.TABLE_BUFFER.BOT)),
                        e
                          ? (i.emit("CHANGE_TO_SYMBOL", t),
                            "A" === t && this.addScatterSymbol(i),
                            this.showSymbols.unshift(i))
                          : i.emit("CHANGE_TO_BLUR_SYMBOL", t),
                        this.stop++;
                    }
                  } else i.emit("CHANGE_TO_BLUR_SYMBOL", t);
                  var s = i.position.y;
                  (s += this.symbolHeight * this.totalSymbols),
                    i.setPosition(new o(i.position.x, s, 0)),
                    (this.currentIndex =
                      (this.currentIndex + 1) % this.symbols.length);
                }),
                (s.addScatterSymbol = function (i) {
                  if (this.poolFactory) {
                    var t = this.poolFactory.getObject(this.scatterPrefab);
                    (i.scatterSymbol = t), i.emit("ADD_SCATTER_SYMBOL", t);
                  }
                }),
                (s.removeScatterSymbol = function (i) {
                  i.scatterSymbol &&
                    this.poolFactory &&
                    (i.emit("REMOVE_SCATTER_SYMBOL"),
                    this.poolFactory.removeObject(i.scatterSymbol),
                    (i.scatterSymbol = null));
                }),
                (s.playSoundEndReelCallback = function (i) {
                  (this.callbackSoundEndReel = i || function () {}),
                    this.isSlidingWild &&
                      (i && i(!0),
                      (this.callbackSoundEndReel = function () {}));
                }),
                (s.setUpSlideWild = function (i) {
                  (this.bigWildIndex = -2),
                    (this.isSlidingWild =
                      i.findIndex(function (i) {
                        return i === r;
                      }) > -1),
                    (this.isSlidingWildLastTime = i[0] === r && i[1] !== r),
                    this.isSlidingWildLastTime && (this.isSlidingWild = !1),
                    (this.slidingSymbols = [].concat(i).reverse()),
                    this.slidingSymbols.push(
                      this.getRandomSymbolNameWithExceptions(["A", "K"])
                    );
                }),
                (s.resetSlideWild = function () {
                  this.isSlidingWild = !1;
                }),
                (s.onReelStop = function () {
                  if (
                    (this.symbols.forEach(function (i) {
                      i.emit("CHANGE_TO_SYMBOL", i.symbol);
                    }),
                    this.isHavingBigWild && this.tableParent)
                  ) {
                    this.isHavingBigWild = !1;
                    var i = [].concat(this.result).reverse();
                    (i[1] === r && i[2] !== r) ||
                      this.tableParent.playSoundWinWild();
                  }
                  this.callbackSoundEndReel && this.callbackSoundEndReel();
                }),
                (s.resetReel = function () {
                  var i = this;
                  this.symbols.sort(function (i, t) {
                    return i.position.y - t.position.y;
                  }),
                    this.symbols.forEach(function (t, e) {
                      t.setPosition(t.position.x, i.symbolPos[e]);
                    }),
                    this.node.setPosition(this.node.position.x, 0);
                }),
                (s.reset = function () {
                  this.wildObject &&
                    this.wildObject.setPosition(
                      0,
                      this.wildObject.position.y + this.node.position.y
                    ),
                    this.resetReel(),
                    (this.currentIndex = 0),
                    (this.stop = 0),
                    (this.step = this.MAX_STEP),
                    (this.isShowingResult = !1),
                    (this.result = []),
                    (this.isSpinning = !1);
                }),
                (s.extendTimeToStop = function (i) {
                  void 0 === i && (i = !1);
                  var t = this.config.NORMAL_TABLE_FORMAT;
                  (this.extendTime = 0),
                    (this.extendTime = i
                      ? (this.reelConfig.DELAY_STOP +
                          this.reelConfig.NEAR_WIN_DELAY) *
                        (this.reelIndex - 1)
                      : (this.reelConfig.DELAY_STOP +
                          this.reelConfig.NEAR_WIN_DELAY) *
                          (this.reelIndex - 1) +
                        this.reelConfig.DELAY_STOP),
                    i &&
                      this.reelIndex === t.length &&
                      (this.extendTime =
                        this.extendTime +
                        this.reelConfig.NEAR_WIN_DELAY_LAST_REEL),
                    this.unschedule(this.setStepToStop),
                    this.scheduleOnce(this.setStepToStop, this.extendTime);
                }),
                (s.transformWild = function (i) {
                  this.wildObject || this.calculateWildIndex(i);
                }),
                (s.calculateWildIndex = function (i) {
                  var t = [].concat(i).reverse();
                  this.bigWildIndex = t.indexOf(r);
                  var e = t.filter(function (i) {
                    return i === r;
                  }).length;
                  -1 === this.bigWildIndex
                    ? (this.bigWildIndex = -2)
                    : 0 === this.bigWildIndex &&
                      2 === e &&
                      (this.bigWildIndex = -1);
                }),
                (s.addBigWild = function (i) {
                  if (
                    (void 0 === i && (i = !1),
                    this.poolFactory && this.bigWildIndex > -2)
                  ) {
                    var t = -1;
                    if (i)
                      switch (this.bigWildIndex) {
                        case -1:
                          t = -2;
                          break;
                        case 0:
                          t = -1;
                          break;
                        case 1:
                          t = 0;
                          break;
                        case 2:
                          t = 1;
                          break;
                        case 3:
                          t = 2;
                      }
                    else t = this.bigWildIndex + this.showNumber + 1;
                    var e = t * this.config.SYMBOL_HEIGHT,
                      s = this.poolFactory.getObject(this.wildPrefabName);
                    s &&
                      ((s.active = !0),
                      s.setPosition(0, e - this.node.position.y),
                      this.node.addChild(s),
                      (this.wildObject = s),
                      this.playAnimWildIdle(),
                      i || (this.isHavingBigWild = !0));
                  }
                }),
                (s.resetBigWild = function () {
                  (this.bigWildIndex = -2),
                    this.wildObject &&
                      (this.wildObject
                        .getComponent(l.Skeleton)
                        .setAnimation(0, "Idle", !0),
                      this.poolFactory.removeObject(this.wildObject),
                      (this.wildObject = null));
                }),
                (s.playAnimWildWin = function (i) {
                  this.wildObject && i && h(this.wildObject, i),
                    this.wildObject &&
                      this.wildState !== u &&
                      ((this.wildState = u),
                      this.wildObject
                        .getComponent(l.Skeleton)
                        .setAnimation(0, "Win", !0));
                }),
                (s.playAnimWildIdle = function () {
                  this.wildObject &&
                    this.wildState !== S &&
                    ((this.wildState = S),
                    this.wildObject
                      .getComponent(l.Skeleton)
                      .setAnimation(0, "Idle", !0));
                }),
                (s.revertToOldWildParent = function () {
                  this.wildObject && h(this.wildObject, this.node);
                }),
                (s.playAnimWildSlide = function () {
                  this.wildObject &&
                    ((this.wildState = S),
                    this.wildObject
                      .getComponent(l.Skeleton)
                      .setAnimation(0, "Slide", !1),
                    this.wildObject
                      .getComponent(l.Skeleton)
                      .addAnimation(0, "Idle", !0));
                }),
                (s.updateSymbols = function (i) {
                  var t = this;
                  this.showSymbols.forEach(function (e, s) {
                    "A" === i[s] && t.removeScatterSymbol(e),
                      e.emit("CHANGE_TO_SYMBOL", i[s]);
                  });
                }),
                e
              );
            })(d))
          ) || a
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSymbol9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./SlotSymbol.ts",
  ],
  function (t) {
    "use strict";
    var e, i, s, o, l, n, r, a, h;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy),
            (s = t._decorator),
            (o = t.Color),
            (l = t.Vec3),
            (n = t.tween),
            (r = t.sp);
        },
        function (t) {
          a = t.setOpacity;
        },
        function (t) {
          h = t.SlotSymbol;
        },
      ],
      execute: function () {
        var c;
        i._RF.push({}, "2d26bfU/+RD+6UUNYq1nprk", "SlotSymbol9938", void 0);
        var m = s.ccclass,
          S = { 32: "N", 33: "M", 35: "P", 42: "X", 43: "Y", 45: "Z" };
        t(
          "SlotSymbol9938",
          m("SlotSymbol9938")(
            (c = (function (t) {
              function i() {
                for (
                  var e, i = arguments.length, s = new Array(i), o = 0;
                  o < i;
                  o++
                )
                  s[o] = arguments[o];
                return (
                  ((e =
                    t.call.apply(t, [this].concat(s)) ||
                    this).storeSpriteFrame = null),
                  (e.scatterSkeleton = null),
                  e
                );
              }
              e(i, t);
              var s = i.prototype;
              return (
                (s.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    this.node.on("CHANGE_SKIN", this.changeSkin, this),
                    this.node.on(
                      "ADD_SCATTER_SYMBOL",
                      this.addScatterSymbol,
                      this
                    ),
                    this.node.on(
                      "REMOVE_SCATTER_SYMBOL",
                      this.removeScatterSymbol,
                      this
                    );
                }),
                (s.initForPayline = function (t, e, i, s) {
                  this._staticPaylineHolder || (this._staticPaylineHolder = t),
                    this._poolFactoryNode || (this._poolFactoryNode = e),
                    (this._isAnimated = i),
                    this._staticPaylineHolder &&
                      this.node.scatterSymbol &&
                      ((this._staticPaylineHolder.active = !0),
                      (this.node.scatterSymbol.parent =
                        this._staticPaylineHolder),
                      this.node.scatterSymbol.setPosition(s));
                }),
                (s.changeToRealSymbol = function (t) {
                  void 0 === t && (t = "2");
                  var e = "K" === t ? "8" : t,
                    i = this.assets[e];
                  i
                    ? ((this.node.symbol = t),
                      a(this.node, 255),
                      a(this.staticSymbol, 255),
                      "A" == t && this.scatterSkeleton
                        ? (this.symbolSpriteFrame.spriteFrame = null)
                        : (this.symbolSpriteFrame.spriteFrame = i))
                    : this.symbolSpriteFrame &&
                      (this.symbolSpriteFrame.spriteFrame = null);
                }),
                (s.changeToBlurSymbol = function (t) {
                  void 0 === t && (t = "2");
                  var e = "K" === t ? "8" : t,
                    i = this.blurAssets[e];
                  i
                    ? ((this.node.symbol = t),
                      a(this.staticSymbol, 255),
                      a(this.node, 255),
                      this.symbolSpriteFrame &&
                        (this.symbolSpriteFrame.spriteFrame = i))
                    : this.changeToRealSymbol(t);
                }),
                (s.changeSkin = function (t) {
                  var e = S["" + this.node.symbol + t];
                  this.assets[e] &&
                    (this.symbolSpriteFrame.spriteFrame = this.assets[e]);
                }),
                (s.blinkHighlight = function () {
                  this.node.isHidden ||
                    (a(this.node, 255),
                    (this.staticSymbol.active = !0),
                    (this.symbolSpriteFrame.color = o.WHITE),
                    this.scatterSkeleton &&
                      (this.scatterSkeleton.color = o.WHITE),
                    (this._isPlayAnim = !1));
                }),
                (s.enableHighlight = function (t) {
                  void 0 === t && (t = !1),
                    this.node.isHidden ||
                      ((this.node.active = !0),
                      (this.symbolSpriteFrame.color = o.WHITE),
                      this.scatterSkeleton &&
                        (this.scatterSkeleton.color = o.WHITE),
                      this.zoomTween &&
                        (this.zoomTween.stop(), (this.zoomTween = null)),
                      this._isAnimated
                        ? ((this.staticSymbol.active = !1),
                          (this._isPlayAnim = !0))
                        : ((this.staticSymbol.active = !0),
                          this.staticSymbol.setScale(new l(1, 1, 1)),
                          t ||
                            ((this.zoomTween = n(this.staticSymbol)
                              .to(0.2, { scale: new l(1.05, 1.05, 1) })
                              .to(0.2, { scale: new l(0.95, 0.95, 1) })
                              .to(0.2, { scale: new l(1, 1, 1) })
                              .repeat(2)),
                            this.zoomTween.start())));
                }),
                (s.disableHighlight = function () {
                  this.node.isHidden ||
                    ((this.node.active = !0),
                    (this.staticSymbol.active = !this._isPlayAnim),
                    (this.symbolSpriteFrame.color = this.dimColor),
                    this.scatterSkeleton &&
                      (this.scatterSkeleton.color = this.dimColor),
                    (this.staticSymbol.scale = new l(1, 1, 1)));
                }),
                (s.reset = function () {
                  (this.staticSymbol.active = !0),
                    (this.symbolSpriteFrame.color = o.WHITE),
                    a(this.staticSymbol, 255),
                    a(this.node, 255),
                    (this.node.active = !0),
                    (this.staticSymbol.scale = new l(1, 1, 1)),
                    (this.staticSymbol.position = new l(0, 0, 0)),
                    this.zoomTween &&
                      (this.zoomTween.stop(), (this.zoomTween = null)),
                    (this._isPlayAnim = !1),
                    this.node.scatterSymbol &&
                      ((this.node.scatterSymbol.position = new l(0, 0, 0)),
                      (this.node.scatterSymbol.parent = this.staticSymbol)),
                    this.scatterSkeleton &&
                      (this.scatterSkeleton.color = o.WHITE);
                }),
                (s.addScatterSymbol = function (t) {
                  (t.active = !0),
                    (t.position = l.ZERO),
                    (this.scatterSkeleton = t.getComponent(r.Skeleton)),
                    (this.scatterSkeleton.color = o.WHITE),
                    this.staticSymbol.addChild(t),
                    (this.storeSpriteFrame =
                      this.symbolSpriteFrame.spriteFrame.clone()),
                    (this.symbolSpriteFrame.spriteFrame = null);
                }),
                (s.removeScatterSymbol = function () {
                  this.storeSpriteFrame &&
                    ((this.symbolSpriteFrame.spriteFrame =
                      this.storeSpriteFrame),
                    (this.storeSpriteFrame = null),
                    (this.scatterSkeleton = null));
                }),
                i
              );
            })(h))
          ) || c
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSymbolPayline9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotSymbolPayline.ts"],
  function (i) {
    "use strict";
    var t, n, o, a, s;
    return {
      setters: [
        function (i) {
          t = i.inheritsLoose;
        },
        function (i) {
          (n = i.cclegacy), (o = i._decorator), (a = i.Color);
        },
        function (i) {
          s = i.SlotSymbolPayline;
        },
      ],
      execute: function () {
        var e;
        n._RF.push(
          {},
          "9881fQ9HkdAt7ivlfr6CHOn",
          "SlotSymbolPayline9938",
          void 0
        );
        var l = o.ccclass;
        o.property,
          i(
            "SlotSymbolPayline9938",
            l("SlotSymbolPayline9938")(
              (e = (function (i) {
                function n() {
                  for (
                    var t, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    ((t =
                      i.call.apply(i, [this].concat(o)) ||
                      this)._multipleSymbols = ["3", "4"]),
                    t
                  );
                }
                t(n, i);
                var o = n.prototype;
                return (
                  (o.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on(
                        "PLAY_SCATTER_IDLE",
                        this.playScatterIdle,
                        this
                      );
                  }),
                  (o.playAnimation = function (i) {
                    if (this._havingAnim && !this._isPlaying)
                      if (
                        ((this._isPlaying = !0),
                        (this.spineNode.active = !0),
                        "A" === this._symbolName)
                      )
                        this._animation.setAnimation(0, "Win", !0);
                      else if (i > 1) {
                        var t = "X" + i;
                        this._animation.skeletonData.skeletonJson.skins[t] &&
                          this._animation.setSkin(t),
                          this._animation.setAnimation(0, t, !0);
                      } else
                        this._multipleSymbols.indexOf(this._symbolName) > -1
                          ? this._animation.setSkin("animation")
                          : this._animation.setSkin("default"),
                          this._animation.setAnimation(0, "animation", !0);
                  }),
                  (o.playScatterIdle = function () {
                    (this.spineNode.active = !0),
                      this._animation.setAnimation(0, "Idle", !0);
                  }),
                  (o.stopAnimation = function () {
                    this.spineNode.active = !1;
                  }),
                  (o.enableHighlight = function () {
                    this._animation.color = a.WHITE;
                  }),
                  (o.disableHighlight = function () {
                    this._isPlaying
                      ? (this._animation.color = this.dimColor)
                      : (this.spineNode.active = !1);
                  }),
                  (o.forceDisableHighlight = function () {
                    this._animation.color = this.dimColor;
                  }),
                  (o.blinkHighlight = function () {}),
                  (o.reset = function () {
                    (this._animation.color = a.WHITE),
                      (this._isPlaying = !1),
                      (this.spineNode.active = !1);
                  }),
                  n
                );
              })(s))
            ) || e
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTable9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./EventNames.ts",
    "./SlotTable.ts",
  ],
  function (i) {
    "use strict";
    var t, e, s, n, l, d, h, o, r, a, S;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (e = i.inheritsLoose),
            (s = i.initializerDefineProperty),
            (n = i.assertThisInitialized);
        },
        function (i) {
          (l = i.cclegacy),
            (d = i._decorator),
            (h = i.Node),
            (o = i.ParticleSystem2D),
            (r = i.tween);
        },
        function (i) {
          a = i.default;
        },
        function (i) {
          S = i.SlotTable;
        },
      ],
      execute: function () {
        var W, u, c, f, m, E, g, p, _;
        l._RF.push({}, "abbaaNvNtBAGZmrUnlXC6O7", "SlotTable9938", void 0);
        var T = d.ccclass,
          F = d.property;
        i(
          "SlotTable9938",
          ((W = T("SlotTable9938")),
          (u = F({ type: h })),
          (c = F({ type: o })),
          (f = F({ type: h })),
          W(
            ((g = t(
              (E = (function (i) {
                function t() {
                  for (
                    var t, e = arguments.length, l = new Array(e), d = 0;
                    d < e;
                    d++
                  )
                    l[d] = arguments[d];
                  return (
                    (t = i.call.apply(i, [this].concat(l)) || this),
                    s(t, "sideWheel", g, n(t)),
                    s(t, "slidingWildParticles", p, n(t)),
                    s(t, "bigWildHolder", _, n(t)),
                    (t.scatterPrefab = void 0),
                    (t.isShowingWildFeature = !1),
                    (t.isPlayingSound = !1),
                    (t.isSliding = !1),
                    (t.isLastWild = !1),
                    (t.isFullWild = !1),
                    (t.isSideWheelFinished = !1),
                    (t.haveWild = []),
                    (t.slideWildState = []),
                    (t.slideWild = []),
                    (t.petAxie = null),
                    (t.betIndex = 0),
                    (t.poolFactory = null),
                    (t.startSpinTween = null),
                    (t.reelComponents = []),
                    (t.introWildFeature = null),
                    t
                  );
                }
                e(t, i);
                var l = t.prototype;
                return (
                  (l.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on(
                        "UPDATE_MATRIX_SIDE_WHEEL",
                        this.updateMatrixSideWheel,
                        this
                      ),
                      this.node.on(
                        "SHOW_SIDE_WHEEL_RESULT",
                        this.showSideWheelResult,
                        this
                      ),
                      this.node.on(
                        "RESET_SIDE_WHEEL",
                        this.resetSideWheel,
                        this
                      ),
                      this.node.on(
                        "SHOW_SIDE_WHEEL_UI",
                        this.showSideWheelUI,
                        this
                      ),
                      this.node.on("ON_CHANGE_BET", this.onChangeBet, this),
                      this.node.on("SWITCH_TABLE", this.switchTable, this),
                      this.node.on(
                        "PLAY_ANIM_WILD_WIN",
                        this.playAnimWildWin,
                        this
                      ),
                      this.node.on(
                        "EXTEND_TIME_STOP",
                        this.extendTimeStop,
                        this
                      ),
                      this.node.on(
                        "RANDOM_MATRIX_FREE",
                        this.randomMatrixFreeGame,
                        this
                      ),
                      this.node.on(
                        "SHOW_WILD_FEATURE",
                        this.showWildFeature,
                        this
                      ),
                      this.node.on("CHECK_ROAD_WILD", this.checkShowRoad, this),
                      this.node.on("SET_UP_PET_AXIE", this.setUpPetAxie, this),
                      (this.node.getXPosition = this.getXPosition.bind(this)),
                      this.initSlideWild();
                  }),
                  (l.init = function () {
                    var t = this;
                    i.prototype.init.call(this),
                      this.node.emit("INIT_WILD_ROAD"),
                      this.sideWheel.emit("INIT"),
                      (this.poolFactory = this.mainDirector.poolFactory),
                      this.reels.forEach(function (i) {
                        i.reelComponent.initPoolFactory(t.poolFactory, t),
                          t.reelComponents.push(i.reelComponent);
                      }),
                      this.isFreeMode
                        ? (this.introWildFeature = this.guiMgr.introWildFree)
                        : (this.introWildFeature = this.guiMgr.introWildMain);
                  }),
                  (l.setUpPetAxie = function (i) {
                    (this.petAxie = i),
                      (this.node.petAxie = i),
                      this.sideWheel.emit("SET_UP_PET_AXIE", i);
                  }),
                  (l.getXPosition = function (i) {
                    return (
                      void 0 === i && (i = 0),
                      -(this.tableFormat.length / 2 - 0.5) *
                        this.config.SYMBOL_WIDTH +
                        i * this.config.SYMBOL_WIDTH
                    );
                  }),
                  (l.changeMatrix = function (i) {
                    var t = i.matrix;
                    (this.matrix = t),
                      this.node.emit("RESET_WILD_ROAD"),
                      this.resetScatterSymbols();
                    for (var e = 0; e < this.tableFormat.length; ++e)
                      this.reels[e].emit("UPDATE_SYMBOLS", this.matrix[e]),
                        !this.matrix[e].includes("K") ||
                          ("K" === this.matrix[e][0] &&
                            "K" !== this.matrix[e][1]) ||
                          this.node.emit("SHOW_WILD_ROAD", e);
                  }),
                  (l.startSpinning = function (i) {
                    var t = this;
                    if (
                      ((this._isSpinning = !0),
                      (this.isTurbo = this.dataStore.modeTurbo),
                      (this.isFastToResult = !1),
                      this.updateSlideWildWhenStart(),
                      this.isSliding)
                    ) {
                      var e = !this.isFullWild && this.isLastWild,
                        s = this.isFullWild ? this.config.SLIDING_TIME : 0,
                        n = this.isLastWild
                          ? this.config.SLIDING_TIME_LAST_TIME + 0.05
                          : 0;
                      this.guiMgr.enableButtonSkip(!1);
                      this.showWildFeature(function () {
                        t.isFullWild && t.startSlidingWild(),
                          (t.startSpinTween = r(t.node)
                            .delay(s)
                            .call(function () {
                              t.guiMgr.enableButtonSkip(!0),
                                t.introWildFeature.emit("FADE_BOARD_TABLE"),
                                t.isLastWild && t.startSlidingLastWild();
                            })
                            .delay(n)
                            .call(function () {
                              e && t.hideWildFeature(),
                                t.startNormalSpinning(i);
                            })),
                          t.startSpinTween.start();
                      });
                    } else this.startNormalSpinning(i);
                  }),
                  (l.startSlidingWild = function () {
                    this.soundPlayer && this.soundPlayer.playSfx("SLIDE_WILD"),
                      this.reelComponents.forEach(function (i) {
                        i.startSlidingWild();
                      });
                  }),
                  (l.startSlidingLastWild = function () {
                    var i = this;
                    this.reelComponents.forEach(function (t, e) {
                      t.startSlidingLastWild(),
                        t.isSlidingWildLastTime &&
                          i.node.emit("HIDE_WILD_ROAD", e);
                    });
                  }),
                  (l.startNormalSpinning = function (i) {
                    i && i();
                    var t =
                      this.config[
                        this.isTurbo ? "TABLE_TURBO" : "TABLE_NORMAL"
                      ];
                    this.reels.forEach(function (i, e) {
                      i.emit("START_SPIN", e, t);
                    }),
                      this.sideWheel.emit("START_SPINNING", this.isTurbo),
                      this.node.emit("TABLE_START_SOUND"),
                      this.node.emit("RESET_NEAR_WIN"),
                      this.eventManager.emit(a.TABLE_START_SPIN);
                  }),
                  (l.stopSpinning = function (i, t) {
                    var e = this;
                    void 0 === i && (i = {}), void 0 === t && (t = null);
                    var s = i,
                      n = s.matrix,
                      l = s.matrixSideWheel;
                    this.transformSlideWild(),
                      (this.matrix = n),
                      (this._tableStopCB = t),
                      (this.stopSpinningCallbackCount = 0),
                      (this.isSideWheelFinished = !1);
                    var d = 0;
                    this.reels.forEach(function (i, t) {
                      var s = [].concat(n[t]).reverse();
                      e.slideWildState[t] || d++,
                        i.emit(
                          "STOP_SPIN",
                          s,
                          e.checkStopSpinningCallback.bind(e, n[t], !1, t),
                          d
                        ),
                        e.reelComponents[t].playSoundEndReelCallback(
                          e.playSoundEndReel.bind(e, n, !1, t)
                        );
                    }),
                      this.node.emit(
                        "SET_UP_SOUND_STOP",
                        n,
                        this.slideWildState
                      ),
                      this.node.emit("REEL_DELAY_NEAR_WIN", {
                        reels: this.reels,
                        matrix: n,
                        context: this,
                      }),
                      this.node.emit("REEL_ABOUT_TO_STOP_SOUND", {
                        reels: this.reels,
                        matrix: n,
                        context: this,
                      }),
                      this.sideWheel.emit(
                        "STOP_SPINNING",
                        [].concat(l).reverse(),
                        this.checkStopSpinningCallback.bind(this, n, !0),
                        d
                      ),
                      this.sideWheel.emit(
                        "PLAY_SOUND_END_REEL_CB",
                        this.playSoundEndReel.bind(this, n, !0)
                      );
                  }),
                  (l.checkStopSpinningCallback = function (i, t, e, s) {
                    void 0 === i && (i = []),
                      void 0 === t && (t = !1),
                      void 0 === e && (e = 0),
                      void 0 === s && (s = !1),
                      t
                        ? (this.isSideWheelFinished = !0)
                        : this.stopSpinningCallbackCount++;
                    var n = this.stopSpinningCallbackCount >= this.reels.length;
                    n && this.isSideWheelFinished && this.onTableStopped(),
                      n &&
                        (this.isSideWheelFinished ||
                          this.sideWheel.emit("REEL_STOP_NEARWIN"),
                        this.node.emit("REEL_RESET_NEAR_WIN"),
                        this.isShowingWildFeature &&
                          this.introWildFeature.emit(
                            "SET_BOARD_TABLE",
                            this.getCurrentWildLevel()
                          )),
                      t ||
                        s ||
                        this.node.emit("REEL_STOP_NEARWIN", {
                          matrix: i,
                          count: e + 1,
                          index: e,
                          context: this,
                          reels: this.reels,
                        });
                  }),
                  (l.onTableStopped = function () {
                    this.stopSfxReelSpin(),
                      this.checkShowRoad(),
                      i.prototype.onTableStopped.call(this);
                  }),
                  (l.playSoundEndReel = function (i, t, e, s) {
                    void 0 === t && (t = !1),
                      void 0 === e && (e = 0),
                      t ||
                        s ||
                        this.node.emit("REEL_STOP_SOUND", {
                          matrix: i,
                          count: e + 1,
                          context: this,
                          reels: this.reels,
                        });
                  }),
                  (l.checkShowRoad = function () {
                    for (var i = 0; i < this.tableFormat.length; ++i) {
                      var t = [].concat(this.matrix[i]);
                      !t.includes("K") ||
                        ("K" === t[0] && "K" !== t[1]) ||
                        this.node.emit("SHOW_WILD_ROAD", i);
                    }
                  }),
                  (l.fastToResult = function (i) {
                    var t = this;
                    void 0 === i && (i = null),
                      this._isSpinning
                        ? (this.stopSpinningCallbackCount < this.reels.length ||
                            !this.isSideWheelFinished) &&
                          ((this._tableFastStopCB = i),
                          (this.isFastToResult = !0),
                          this.reels.forEach(function (i, e) {
                            i.emit("FAST_STOP", e, t.isTurbo);
                          }),
                          this.sideWheel.emit("FAST_TO_RESULT"))
                        : i && i();
                  }),
                  (l.stopReelWithRandomMatrix = function (i) {
                    void 0 === i && (i = null),
                      this.stopSpinning(
                        {
                          matrix: this.getFakeMatrix(),
                          matrixSideWheel: ["M", "X", "N"],
                        },
                        i
                      );
                  }),
                  (l.updateMatrixSideWheel = function (i) {
                    this.sideWheel.emit("CHANGE_MATRIX", i);
                  }),
                  (l.getFakeMatrix = function () {
                    for (var i = [], t = 0; t < this.tableFormat.length; ++t) {
                      i[t] = [];
                      for (var e = this.tableFormat[t] - 1; e >= 0; --e) {
                        var s = this.reelComponents[t];
                        i[t][e] = s
                          ? s.getRandomSymbolNameWithExceptions(["A", "K"])
                          : "3";
                      }
                    }
                    return i;
                  }),
                  (l.randomMatrixFreeGame = function () {
                    this.forceExitWildFeature(),
                      this.changeMatrix({ matrix: this.getFakeMatrix() });
                  }),
                  (l.showSideWheelResult = function (i) {
                    this.sideWheel.emit("SHOW_RESULT", i);
                  }),
                  (l.showSideWheelUI = function (i) {
                    this.sideWheel.emit("SHOW_SIDE_WHEEL_UI", i);
                  }),
                  (l.resetSideWheel = function () {
                    this.sideWheel.emit("RESET_RESULT");
                  }),
                  (l.extendTimeStop = function (i, t) {
                    this.reels[i] &&
                      (this.reels[i].emit("EXTEND_TIME_STOP", t),
                      this.sideWheel.emit("EXTEND_TIME_STOP", i),
                      this.sideWheel.emit("UPDATE_NEAR_WIN_SPEED"));
                  }),
                  (l.updateSlideWildWhenStart = function () {
                    !this.isFreeMode &&
                    this.isSliding &&
                    this.dataStore.isWaitingFirstSpin
                      ? this.forceResetSlideWild()
                      : this.setUpSlideWildForNextSpin(),
                      (this.dataStore.isWaitingFirstSpin = !1);
                  }),
                  (l.setUpSlideWildForNextSpin = function () {
                    var i = this;
                    this.storeSlideWildData(),
                      this.slideWild &&
                        this.slideWild.length &&
                        this.reelComponents.forEach(function (t, e) {
                          i.isSliding
                            ? t.setUpSlideWild(
                                i.slideWild[i.betIndex].matrix[e]
                              )
                            : t.resetSlideWild(),
                            (i.slideWildState[e] = t.isSlidingWild);
                        }),
                      (this.isLastWild = !1),
                      (this.isFullWild = !1),
                      this.reelComponents.forEach(function (t) {
                        t.isSlidingWildLastTime &&
                          !i.isLastWild &&
                          (i.isLastWild = !0),
                          t.isSlidingWild &&
                            !i.isFullWild &&
                            (i.isFullWild = !0);
                      });
                  }),
                  (l.forceResetSlideWild = function () {
                    this.isFreeMode ||
                      ((this.dataStore.mainSlideWildTrial = []),
                      this.resetSlideWild(),
                      this.resetWildAndChangeMatrix(),
                      (this.slideWild = []),
                      this.forceExitWildFeature());
                  }),
                  (l.transformSlideWild = function () {
                    var i = this;
                    this.storeSlideWildData(),
                      this.slideWild &&
                        this.slideWild.length &&
                        this.reelComponents.forEach(function (t, e) {
                          i.isSliding &&
                            t.transformWild(i.slideWild[i.betIndex].matrix[e]);
                        });
                  }),
                  (l.onChangeBet = function (i) {
                    var t = this;
                    if (
                      (this.setUpSlideWildForNextSpin(),
                      this.reelComponents.forEach(function (i) {
                        i.resetBigWild();
                      }),
                      this.slideWild && this.slideWild.length)
                    ) {
                      var e = this.getFakeMatrix(),
                        s = this.getSlideWildLastBet(this.slideWild),
                        n = this.isSliding
                          ? this.slideWild[this.betIndex].matrix
                          : e;
                      if (!this.isSliding && !s) return;
                      this.node.emit("CLEAR_PAYLINES"),
                        this.changeMatrix({ matrix: n }),
                        this.reelComponents.forEach(function (i, e) {
                          i.resetBigWild(),
                            t.isSliding &&
                              (i.transformWild(
                                t.slideWild[t.betIndex].matrix[e]
                              ),
                              i.addBigWild(!0));
                        });
                    } else this.resetScatterSymbols();
                    (!this.isFullWild && this.isLastWild) || !this.isSliding
                      ? i
                        ? this.forceExitWildFeature()
                        : this.hideWildFeature()
                      : i
                      ? this.forceEnterWildFeature()
                      : (this.showVfxSlidingWild(), this.showWildFeature(null));
                  }),
                  (l.switchTable = function () {
                    var i = this.dataStore,
                      t = i.mainSlideWild,
                      e = i.isRemaindingWild,
                      s = i.isTrialMode,
                      n = i.betData;
                    if (
                      (this.storeSlideWildData(),
                      this.matrix && this.matrix.length)
                    )
                      for (var l = 0; l < this.matrix.length; l++)
                        for (var d = 0; d < this.matrix[l].length; d++)
                          if ("K" === this.matrix[l][d]) {
                            this.resetWildAndChangeMatrix();
                            break;
                          }
                    if ((this.hideVfxSlidingWild(), s))
                      this.forceResetSlideWild();
                    else if (
                      ((this.dataStore.mainSlideWildTrial = []),
                      (this.dataStore.isWaitingFirstSpin = !1),
                      t && t.length)
                    ) {
                      var h = t.findIndex(function (i) {
                        return i.betId === n.betKey + "0";
                      });
                      h > -1 && e(t[h].matrix)
                        ? this.onChangeBet(!1)
                        : this.forceExitWildFeature();
                    } else this.forceExitWildFeature();
                    this.resetScatterSymbols();
                  }),
                  (l.resetScatterSymbols = function () {
                    this.reelComponents.forEach(function (i) {
                      i.symbols.forEach(function (t) {
                        i.removeScatterSymbol(t);
                      });
                    });
                  }),
                  (l.resetWildAndChangeMatrix = function () {
                    for (var i = 0; i < this.reels.length; ++i)
                      this.reelComponents[i].resetBigWild();
                    this.changeMatrix({ matrix: this.getFakeMatrix() });
                  }),
                  (l.getSlideWildLastBet = function (i) {
                    var t = this.dataStore,
                      e = t.lastBetIdTrial,
                      s = t.lastBetIdReal,
                      n = t.isTrialMode,
                      l = t.isRemaindingWild,
                      d = n ? e : s;
                    if (!d) return !1;
                    var h = i.findIndex(function (i) {
                      return i.betId === d + "0";
                    });
                    return h > -1 && l(i[h].matrix);
                  }),
                  (l.storeSlideWildData = function () {
                    var i = this.dataStore,
                      t = i.mainSlideWild,
                      e = i.mainSlideWildTrial,
                      s = i.freeSlideWild,
                      n = i.freeSlideWildTrial,
                      l = i.isRemaindingWild,
                      d = i.isTrialMode;
                    if (
                      ((this.slideWild = this.isFreeMode ? s : t),
                      d && (this.slideWild = this.isFreeMode ? n : e),
                      this.slideWild && this.slideWild.length)
                    ) {
                      var h = this.dataStore.betData.betKey;
                      (this.betIndex = this.slideWild.findIndex(function (i) {
                        return i.betId === h + "0";
                      })),
                        (this.isSliding =
                          this.betIndex > -1 &&
                          l(this.slideWild[this.betIndex].matrix));
                    } else this.resetSlideWild();
                  }),
                  (l.reelSlideLastTime = function (i) {
                    this.slideWildState[i] && (this.slideWildState[i] = !1);
                  }),
                  (l.resetSlideWild = function () {
                    this.isSliding = !1;
                    for (var i = 0; i < this.reels.length; ++i)
                      this.reelComponents[i].resetSlideWild(),
                        (this.slideWildState[i] = !1);
                  }),
                  (l.initSlideWild = function () {
                    (this.slideWildState = [!1, !1, !1, !1, !1]),
                      (this.isSliding = !1),
                      (this.slideWild = null),
                      (this.betIndex = -1);
                  }),
                  (l.gameExit = function () {
                    for (var i = 0; i < this.reels.length; ++i)
                      this.reelComponents[i].resetBigWild();
                    this.resetSlideWild(),
                      this.sideWheel.emit("GAME_EXIT"),
                      this.hideVfxSlidingWild();
                  }),
                  (l.showWildFeature = function (i) {
                    var t = this;
                    this.setUpSlideWildForNextSpin(),
                      this.isFullWild && !this.isShowingWildFeature
                        ? ((this.isShowingWildFeature = !0),
                          this.introWildFeature.emit(
                            "SHOW_EFFECT",
                            function () {
                              i && i();
                            },
                            function () {
                              var i = {
                                state: t.config.PET_AXIE_STATE.SLIDING_WILD,
                              };
                              t.petAxie.emit("PLAY_PET_ANIMATION", i);
                            }
                          ),
                          this.introWildFeature.emit(
                            "SET_BOARD_TABLE",
                            this.getCurrentWildLevel()
                          ),
                          this.showVfxSlidingWild(),
                          this.playSoundWildFeature())
                        : i && i();
                  }),
                  (l.hideWildFeature = function () {
                    this.isShowingWildFeature &&
                      ((this.isShowingWildFeature = !1),
                      this.introWildFeature.emit("HIDE_EFFECT"),
                      this.hideVfxSlidingWild(),
                      this.stopSoundWildFeature());
                  }),
                  (l.showVfxSlidingWild = function () {
                    this.slidingWildParticles.forEach(function (i) {
                      (i.node.active = !0), i.resetSystem();
                    });
                  }),
                  (l.hideVfxSlidingWild = function () {
                    this.slidingWildParticles.forEach(function (i) {
                      i.stopSystem(), (i.node.active = !1);
                    });
                  }),
                  (l.forceEnterWildFeature = function () {
                    (this.isShowingWildFeature = !0),
                      this.introWildFeature.emit("ENTER_FEATURE"),
                      this.introWildFeature.emit(
                        "SET_BOARD_TABLE",
                        this.getCurrentWildLevel()
                      ),
                      this.playSoundWildFeature(),
                      this.showVfxSlidingWild();
                  }),
                  (l.forceExitWildFeature = function () {
                    (this.isShowingWildFeature = !1),
                      this.introWildFeature.emit("EXIT_FEATURE"),
                      this.stopSoundWildFeature(),
                      this.hideVfxSlidingWild();
                  }),
                  (l.getCurrentWildLevel = function () {
                    var i = [];
                    if (this.slideWild && this.slideWild.length)
                      for (
                        var t = this.slideWild[this.betIndex], e = 0;
                        e < this.reels.length;
                        ++e
                      )
                        if (this.isSliding && t) {
                          var s = t.matrix[e].lastIndexOf("K");
                          s >= 0 && i.push(s);
                        }
                    return Math.max.apply(Math, i);
                  }),
                  (l.playSoundWildFeature = function () {
                    this.isFreeMode;
                  }),
                  (l.stopSoundWildFeature = function () {
                    this.isFreeMode;
                  }),
                  (l.playSoundWinWild = function () {}),
                  (l.playAnimWildWin = function (i) {
                    this.reels[i] &&
                      this.reelComponents[i].playAnimWildWin(
                        this.bigWildHolder
                      );
                  }),
                  (l.stopSfxReelSpin = function () {}),
                  t
                );
              })(S)).prototype,
              "sideWheel",
              [u],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (p = t(E.prototype, "slidingWildParticles", [c], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (_ = t(E.prototype, "bigWildHolder", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (m = E))
          ) || m)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableNearWinEffect9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotTableNearWinEffect.ts"],
  function (t) {
    "use strict";
    var i, e, n, s;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (n = t._decorator);
        },
        function (t) {
          s = t.SlotTableNearWinEffect;
        },
      ],
      execute: function () {
        var r;
        e._RF.push(
          {},
          "20205EGJ75PqJN+UqKSOPvA",
          "SlotTableNearWinEffect9938",
          void 0
        );
        var a = n.ccclass;
        n.property,
          t(
            "SlotTableNearWinEffect9938",
            a("SlotTableNearWinEffect9938")(
              (r = (function (t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                i(e, t);
                var n = e.prototype;
                return (
                  (n.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("REEL_RESET_NEAR_WIN", this.reset, this);
                  }),
                  (n.adjustReelDelay = function (t) {
                    t.reels;
                    var i = t.matrix,
                      e = t.context,
                      n = 0;
                    if (((this.nearWinList = []), !e.isTurbo))
                      for (var s = 0; s < i.length; s++) {
                        var r =
                            n >= this.startAtScatterCount &&
                            n < this.stopAtScatterCount,
                          a = r,
                          o = !1;
                        e.reelComponents[s] &&
                          e.reelComponents[s].wildObject &&
                          ((a = !1), (o = !0));
                        for (var l = 0; l < i[s].length; ++l) {
                          i[s][l] === this.scatterSymbol && n++;
                        }
                        r &&
                          ((this.nearWinList[s] = {
                            isNearWin: r,
                            isHavingWild: o,
                          }),
                          a && this.node.emit("EXTEND_TIME_STOP", s, r));
                      }
                  }),
                  (n.reelStopNearWin = function (t) {
                    var i = t.count,
                      e = t.index,
                      n = t.context,
                      s = t.reels;
                    if (
                      this.nearWinList &&
                      this.nearWinList.length &&
                      (this.hideAnimNearWin(),
                      !this.nearWinList[e] || !this.nearWinList[e].isHavingWild)
                    ) {
                      if (
                        this.nearWinList[i] &&
                        this.nearWinList[i].isNearWin &&
                        !n.isFastToResult
                      ) {
                        this.playAnimNearWinPetAxie();
                        for (var r = i; r < s.length; r++)
                          this.nearWinList[r] &&
                            this.nearWinList[r].isNearWin &&
                            s[r].emit("UPDATE_NEAR_WIN_SPEED");
                        for (var a = n.reelComponents, o = i; o < a.length; o++)
                          if (
                            this.nearWinList[o] &&
                            this.nearWinList[o].isNearWin &&
                            !a[o].wildObject
                          ) {
                            this.showAnimNearWin(o);
                            break;
                          }
                      } else this.stopSoundNearWin();
                      i >= s.length &&
                        (this.clearSymbolPaylines(),
                        this.hideAnimNearWin(),
                        this.stopSoundNearWin());
                    }
                  }),
                  (n.playAnimNearWinPetAxie = function () {
                    if (this.node.petAxie) {
                      var t = { state: this.config.PET_AXIE_STATE.NEAR_WIN };
                      this.node.petAxie.emit("PLAY_PET_ANIMATION", t);
                    }
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
  "chunks:///_virtual/SlotTablePayline9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotTablePayline.ts",
  ],
  function (i) {
    "use strict";
    var e, t, a, n, l, o, r, s, c, f, h, y;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (a = i.initializerDefineProperty),
            (n = i.assertThisInitialized);
        },
        function (i) {
          (l = i.cclegacy),
            (o = i._decorator),
            (r = i.Node),
            (s = i.tween),
            (c = i.Vec3),
            (f = i.sp);
        },
        function (i) {
          h = i.PerformanceLevel;
        },
        function (i) {
          y = i.SlotTablePayline;
        },
      ],
      execute: function () {
        var p, m, u, E, L, b, d, I, P, N, v, _, w;
        l._RF.push(
          {},
          "f09e7sX2AxPvL9ZYoiy07jr",
          "SlotTablePayline9938",
          void 0
        );
        var g = o.ccclass,
          H = o.property;
        i(
          "SlotTablePayline9938",
          ((p = g("SlotTablePayline9938")),
          (m = H({ type: r })),
          (u = H({ type: r })),
          (E = H({ type: r })),
          (L = H({ type: r })),
          p(
            ((I = e(
              (d = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, l = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    l[o] = arguments[o];
                  return (
                    (e = i.call.apply(i, [this].concat(l)) || this),
                    a(e, "electricEffectHolder", I, n(e)),
                    a(e, "electricImpactEffectHolder", P, n(e)),
                    a(e, "winLineBackHolder", N, n(e)),
                    a(e, "wildEffectHolder", v, n(e)),
                    a(e, "winLineBackPrefabName", _, n(e)),
                    a(e, "wildEffectPrefabName", w, n(e)),
                    (e.electricEffectPrefabName = "ElectricEffect"),
                    (e.electricImpactEffectPrefabName = "ElectricImpactEffect"),
                    (e.isDelayBuffEffect = !1),
                    (e.callbackShowPayline = null),
                    (e.callbackShowNormalPL = null),
                    e
                  );
                }
                t(e, i);
                var l = e.prototype;
                return (
                  (l.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on(
                        "BLINK_ALL_NORMAL_PAYLINES_FAST",
                        this.blinkAllPaylineWild,
                        this
                      ),
                      this.node.on("PLAY_ANIM_BUFF", this.playAnimBuff, this);
                  }),
                  (l.createPaylineObject = function (i, e) {
                    var t = this.node.reels[i].getShowSymbols()[e];
                    if (t) {
                      var a = this.getSymbolSpineData(t.symbol);
                      this.poolFactory ||
                        (this.poolFactory = this.mainDirector.poolFactory);
                      var n =
                          this.animationLevel >= Number(h.Medium) && null != a,
                        l = this.createPaylineSymbol(
                          t.symbol,
                          i,
                          e,
                          n ? a : null
                        );
                      t.emit(
                        "INIT_FOR_PAYLINE",
                        this.staticPaylineHolder,
                        this.poolFactory.node,
                        n,
                        l.position.clone()
                      );
                      var o = { symbol: t, paylineSymbol: l };
                      if (this.showWinLineFrame) {
                        var r = this.createWinLineFrame(i, e);
                        o.winLineFrame = r;
                      }
                      (l.col = i), (l.row = e);
                      var s = this.createWinLineBack(i, e);
                      o.winLineBack = s;
                      var c = this.createWildEffect(i, e);
                      return (
                        (o.wildEffect = c),
                        (o.isShowing = !0),
                        (this.paylinesMatrix[i][e] = o),
                        "A" == t.symbol
                          ? this.scatterHolderNode.push(o)
                          : "R" == t.symbol
                          ? this.bonusHolderNode.push(o)
                          : "K" == t.symbol && this.wildHolderNode.push(o),
                        t.symbol == this.jackpotSymbol &&
                          this.jackpotHolderNode.push(o),
                        o
                      );
                    }
                  }),
                  (l.createWinLineBack = function (i, e) {
                    var t = this.getXPosition(i),
                      a =
                        this.node.isFreeMode &&
                        this.config.SYMBOL_HEIGHT_FREE_GAME
                          ? this.config.SYMBOL_HEIGHT_FREE_GAME
                          : this.config.SYMBOL_HEIGHT,
                      n = (this.node.tableFormat[i] / 2 - e - 0.5) * a,
                      l = null;
                    return (
                      (l = this.poolFactory.getObject(
                        this.winLineBackPrefabName
                      )) &&
                        ((l.active = !1),
                        (l.parent = this.winLineBackHolder),
                        (l[i] = i),
                        (l[e] = e),
                        l.setPosition(t, n),
                        this.usingObjs.push(l)),
                      l
                    );
                  }),
                  (l.createWildEffect = function (i, e) {
                    var t = this.getXPosition(i),
                      a =
                        this.node.isFreeMode &&
                        this.config.SYMBOL_HEIGHT_FREE_GAME
                          ? this.config.SYMBOL_HEIGHT_FREE_GAME
                          : this.config.SYMBOL_HEIGHT,
                      n = (this.node.tableFormat[i] / 2 - e - 0.5) * a,
                      l = null;
                    return (
                      (l = this.poolFactory.getObject(
                        this.wildEffectPrefabName
                      )) &&
                        ((l.active = !1),
                        (l.parent = this.wildEffectHolder),
                        (l[i] = i),
                        (l[e] = e),
                        l.setPosition(t, n),
                        this.usingObjs.push(l)),
                      l
                    );
                  }),
                  (l.isWildEffect = function (i, e) {
                    for (var t = !1, a = 0; a < e; ++a) {
                      var n = i[a],
                        l = a;
                      "K" === this.paylinesMatrix[l][n].symbol.symbol &&
                        (t = !0);
                    }
                    return t;
                  }),
                  (l.blinkNormalPaylinePerline = function (i) {
                    var e = i.payLineID,
                      t = i.payLineWinNumbers,
                      a = this.config.PAY_LINE_MATRIX[e];
                    this.isWildEffect(a, t);
                    for (var n = 0; n < t; ++n) {
                      var l = a[n],
                        o = n,
                        r = this.paylinesMatrix[o][l];
                      if ((r || (r = this.createPaylineObject(o, l)), !r))
                        return;
                      var s = r,
                        c = s.symbol,
                        f = s.paylineSymbol,
                        h = s.winLineFrame,
                        y = s.winLineBack,
                        p = s.wildEffect;
                      c &&
                        f &&
                        (c.emit(
                          "BLINK_HIGHLIGHT",
                          this.curentConfig.BLINK_DURATION,
                          this.curentConfig.BLINKS
                        ),
                        f.emit(
                          "BLINK_HIGHLIGHT",
                          this.curentConfig.BLINK_DURATION,
                          this.curentConfig.BLINKS
                        ),
                        h && ((h.active = !0), h.emit("SHOW_WIN_LINE")),
                        y && ((y.active = !0), y.emit("SHOW_WIN_LINE")),
                        p &&
                          this.isWildEffect(a, t) &&
                          ((p.active = !0),
                          this.setOpacity(p, 1),
                          this.fadeIn(p, 0.1))),
                        "K" == c.symbol &&
                          this.node.emit("PLAY_ANIM_WILD_WIN", o);
                    }
                  }),
                  (l.showAllNormalPayLines = function (i, e) {
                    var t = this;
                    if ((void 0 === e && (e = 0), this.payLineNormals))
                      if (
                        ((this.callbackShowPayline = i),
                        (this.callbackShowNormalPL = function () {
                          (t.callbackShowNormalPL = null),
                            (t.paylineIndex = e),
                            (t.showingPayline = !0),
                            (t.paylineType = "normal"),
                            (t._callbackShowPayline = i);
                          var a = t.node.dataStore;
                          a && !a.isAutoSpin
                            ? (t.nextPaylineTime =
                                t.curentConfig.EXPECT_PAYLINE_ALLWAYS_TIME)
                            : (t.nextPaylineTime = Math.max(
                                t.curentConfig.EXPECT_PAYLINE_TIME /
                                  t.payLineNormals.length,
                                t.curentConfig.MIN_TIME_EACH_PAYLINE
                              )),
                            t.showNextPayline();
                        }),
                        this.isDelayBuffEffect)
                      ) {
                        this.scheduleOnce(this.callbackShowNormalPL, 0.7);
                      } else this.callbackShowNormalPL();
                    else i && i();
                  }),
                  (l.blinkAllPaylineWild = function () {
                    if (this.paylinesMatrix)
                      for (var i = 0; i < this.payLineNormals.length; ++i)
                        for (
                          var e = this.payLineNormals[i],
                            t = e.payLineID,
                            a = e.payLineWinNumbers,
                            n = this.config.PAY_LINE_MATRIX[t],
                            l = 0;
                          l < a;
                          ++l
                        ) {
                          var o = n[l],
                            r = l;
                          "K" === this.paylinesMatrix[r][o].symbol.symbol &&
                            this.node.emit("PLAY_ANIM_WILD_WIN", r);
                        }
                  }),
                  (l.showNormalPaylinePerline = function (i) {
                    var e = this,
                      t = i.payLineID,
                      a = i.payLineWinNumbers,
                      n = i.symbolName,
                      l = i.multiple;
                    this.disableHighlightNormalPaylines();
                    var o = this.config.PAY_LINE_MATRIX[t];
                    if (
                      o &&
                      o.length > 0 &&
                      this.paylinesMatrix &&
                      this.paylinesMatrix.length > 0
                    )
                      for (
                        var r = function (i) {
                            var t = o[i],
                              r = i,
                              c = e.paylinesMatrix[r][t],
                              f = c.symbol,
                              h = c.paylineSymbol,
                              y = c.winLineFrame,
                              p = c.winLineBack,
                              m = c.wildEffect;
                            f &&
                              h &&
                              ((f.symbol !== n &&
                                f.symbol !== e.config.WILD_SYMBOL) ||
                                (h.tweenPayline &&
                                  (h.tweenPayline.stop(),
                                  (h.tweenPayline = null)),
                                (h.tweenPayline = s(h)
                                  .delay(0.12 * r)
                                  .call(function () {
                                    f.emit("ENABLE_HIGHLIGHT"),
                                      h.emit("PLAY_ANIMATION", l),
                                      h.emit("ENABLE_HIGHLIGHT");
                                  })
                                  .start()))),
                              e.playWinLineAnim(p, r),
                              e.playWinLineAnim(y, r),
                              m &&
                                e.isWildEffect(o, a) &&
                                ((m.active = !0),
                                e.setOpacity(m, 1),
                                e.fadeIn(m, 0.1));
                          },
                          c = 0;
                        c < a;
                        ++c
                      )
                        r(c);
                  }),
                  (l.playWinLineAnim = function (i, e) {
                    i &&
                      ((i.active = !0),
                      i.emit("HIDE_WIN_LINE"),
                      s(i)
                        .delay(0.12 * (e + 1))
                        .call(function () {
                          i.emit("SHOW_WIN_LINE");
                        })
                        .start());
                  }),
                  (l.disableHighlightNormalPaylines = function () {
                    if (this.paylinesMatrix) {
                      for (var i = 0; i < this.paylinesMatrix.length; ++i)
                        for (
                          var e = 0;
                          e < this.paylinesMatrix[i].length;
                          ++e
                        ) {
                          var t = this.paylinesMatrix[i][e],
                            a = t.symbol,
                            n = t.paylineSymbol,
                            l = t.winLineFrame,
                            o = t.winLineBack,
                            r = t.wildEffect;
                          a &&
                            n &&
                            (a.emit("DISABLE_HIGHLIGHT"),
                            n.emit("DISABLE_HIGHLIGHT"),
                            l && (l.active = !1),
                            o && (o.active = !1),
                            r && (r.active = !1));
                        }
                      this.dimBackground && (this.dimBackground.active = !0);
                    }
                  }),
                  (l.playAnimBuff = function (i, e) {
                    if (
                      (void 0 === i && (i = !1),
                      void 0 === e && (e = !1),
                      this.payLineNormals && this.payLineNormals.length)
                    ) {
                      this.isDelayBuffEffect = i;
                      for (var t = 0; t < this.payLineNormals.length; ++t) {
                        var a = this.payLineNormals[t],
                          n = a.payLineID,
                          l = a.payLineWinNumbers,
                          o = a.multiple,
                          r = this.config.PAY_LINE_MATRIX[n];
                        if (
                          r &&
                          r.length > 0 &&
                          this.paylinesMatrix &&
                          this.paylinesMatrix.length > 0
                        )
                          for (var s = 0; s < l; ++s) {
                            var c = r[s],
                              f = s,
                              h = this.paylinesMatrix[f][c],
                              y = h.symbol,
                              p = h.paylineSymbol;
                            ("3" === y.symbol || "4" === y.symbol) &&
                              o > 1 &&
                              (e
                                ? y.emit("CHANGE_SKIN", o)
                                : this.showElectricEffect(p, y, o));
                          }
                      }
                    }
                  }),
                  (l.showElectricEffect = function (i, e, t) {
                    var a = this;
                    if (!i.isPlayedEffect) {
                      i.isPlayedEffect = !0;
                      var n = this.poolFactory.getObject(
                        this.electricEffectPrefabName
                      );
                      if (n) {
                        (n.active = !0),
                          (n.parent = this.electricEffectHolder),
                          this.usingObjs.push(n);
                        var l = i.row * this.config.SYMBOL_HEIGHT + 40,
                          o = (4 - i.col) * this.config.SYMBOL_WIDTH + 230,
                          r = Math.atan(l / o) * (180 / Math.PI);
                        (n.angle = r),
                          n.setScale(new c(0, 1, 0)),
                          this.setOpacity(n, 255);
                        var h = Math.floor(Math.random() * n.children.length);
                        n.children.forEach(function (i, e) {
                          i.active = e === h;
                        });
                        var y =
                          Math.sqrt(Math.pow(l, 2) + Math.pow(o, 2)) / 480;
                        n.tweenElectricEffect = s(n)
                          .delay(0.4)
                          .to(0.5, { scale: new c(y, 1, 0) })
                          .call(function () {
                            var e = a.poolFactory.getObject(
                              a.electricImpactEffectPrefabName
                            );
                            a.usingObjs.push(e),
                              (e.parent = a.electricImpactEffectHolder),
                              (e.active = !0),
                              (e.position = i.position);
                            var t = e.getComponent(f.Skeleton);
                            t.setAnimation(0, "animation", !1),
                              t.setCompleteListener(function () {
                                (e.active = !1),
                                  t.setCompleteListener(function () {});
                              });
                          })
                          .delay(0.2)
                          .call(function () {
                            e.emit("CHANGE_SKIN", t), a.fadeOut(n, 0.2);
                          })
                          .delay(0.2)
                          .call(function () {
                            n.tweenElectricEffect = null;
                          })
                          .start();
                      }
                      if (this.node.petAxie && 0 === i.col) {
                        var p = {
                          state: this.config.PET_AXIE_STATE.BUFF_WINLINE,
                        };
                        this.node.petAxie.emit("PLAY_PET_ANIMATION", p);
                      }
                    }
                  }),
                  (l.resetSymbolPaylines = function () {
                    if (this.paylinesMatrix && 0 !== this.paylinesMatrix.length)
                      for (var i = 0; i < this.paylinesMatrix.length; ++i)
                        for (
                          var e = 0;
                          e < this.paylinesMatrix[i].length;
                          ++e
                        ) {
                          var t = this.paylinesMatrix[i][e],
                            a = t.symbol,
                            n = t.paylineSymbol,
                            l = t.winLineFrame,
                            o = t.winLineBack,
                            r = t.wildEffect;
                          a &&
                            n &&
                            ((a.active = !0),
                            (a.isHidden = !1),
                            (n.active = !0),
                            a.emit("RESET"),
                            n.emit("RESET"),
                            (n.isPlayedEffect = !1)),
                            l && (l.active = !1),
                            o && (o.active = !1),
                            r && (r.active = !1);
                        }
                  }),
                  (l.showScatterPayLine = function (e) {
                    this.staticPaylineHolder &&
                      (this.staticPaylineHolder.active = !1),
                      i.prototype.showScatterPayLine.call(this, e);
                  }),
                  (l.clearPaylines = function () {
                    this.playAnimBuff(!1, !0),
                      (this.isDelayBuffEffect = !1),
                      this.callbackShowNormalPL &&
                        (this.unschedule(this.callbackShowNormalPL),
                        (this.callbackShowNormalPL = null));
                    for (var e = 0; e < this.usingObjs.length; e++) {
                      var t = this.usingObjs[e];
                      t.tweenPayline &&
                        (t.tweenPayline.stop(), (t.tweenPayline = null)),
                        t.tweenElectricEffect &&
                          (t.tweenElectricEffect.stop(),
                          (t.tweenElectricEffect = null));
                    }
                    i.prototype.clearPaylines.call(this),
                      this.node.emit("RESET_SIDE_WHEEL");
                  }),
                  (l.blinkHighlightPaylines = function (e) {
                    void 0 === e && (e = function () {}),
                      i.prototype.blinkHighlightPaylines.call(this, e),
                      this.soundPlayer && this.soundPlayer.playSfx("WIN_BLINK");
                  }),
                  e
                );
              })(y)).prototype,
              "electricEffectHolder",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (P = e(d.prototype, "electricImpactEffectHolder", [u], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (N = e(d.prototype, "winLineBackHolder", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (v = e(d.prototype, "wildEffectHolder", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (_ = e(d.prototype, "winLineBackPrefabName", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "WinLineBack";
              },
            })),
            (w = e(d.prototype, "wildEffectPrefabName", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "WildEffect";
              },
            })),
            (b = d))
          ) || b)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTablePaylineInfo9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./SlotTablePaylineInfo.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, o, l;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          o = t.formatMoney;
        },
        function (t) {
          l = t.SlotTablePaylineInfo;
        },
      ],
      execute: function () {
        var s;
        e._RF.push(
          {},
          "017caW5QtxDlZZ8S35amFbT",
          "SlotTablePaylineInfo9938",
          void 0
        );
        var a = i.ccclass,
          r = { 32: "N", 33: "M", 35: "P", 42: "X", 43: "Y", 45: "Z" };
        t(
          "SlotTablePaylineInfo9938",
          a("SlotTablePaylineInfo9938")(
            (s = (function (t) {
              function e() {
                return t.apply(this, arguments) || this;
              }
              return (
                n(e, t),
                (e.prototype.showPaylineInfoLine = function (t) {
                  var n = t.line,
                    e = n.payLineID,
                    i = n.payLineWinNumbers,
                    l = n.payLineWinAmount,
                    s = n.symbolName,
                    a = n.multiple,
                    c = a > 1 ? "x " + a + " " : "";
                  (this.lbLeft.string = "Line " + e + " thắng " + i + " x"),
                    (this.lbRight.string = c + "= " + o(l));
                  var u = s;
                  a > 1 && (u = r["" + s + a]),
                    (this.symbolImg.spriteFrame =
                      this.assets[this.symbolPrefix + u]),
                    (this.node.active = !0);
                }),
                e
              );
            })(l))
          ) || s
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableSoundEffect9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotTableSoundEffect.ts"],
  function (t) {
    "use strict";
    var e, a, o, s;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (a = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          s = t.SlotTableSoundEffect;
        },
      ],
      execute: function () {
        var n;
        a._RF.push(
          {},
          "a0ecedOcQBO06HidnbimFEr",
          "SlotTableSoundEffect9938",
          void 0
        );
        var r = o.ccclass,
          i = (o.property, 0),
          c = 1;
        t(
          "SlotTableSoundEffect9938",
          r("SlotTableSoundEffect9938")(
            (n = (function (t) {
              function a() {
                for (
                  var e, a = arguments.length, o = new Array(a), s = 0;
                  s < a;
                  s++
                )
                  o[s] = arguments[s];
                return (
                  ((e =
                    t.call.apply(t, [this].concat(o)) || this).scatterMatrix =
                    void 0),
                  (e.totalScatter = 0),
                  e
                );
              }
              e(a, t);
              var o = a.prototype;
              return (
                (o.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    this.node.on(
                      "SET_UP_SOUND_STOP",
                      this.setUpSoundStop,
                      this
                    );
                }),
                (o.reelStartSound = function () {
                  (this.countBonus = 0),
                    (this.countScatter = 0),
                    (this.scatterMatrix = new Array(5).fill({})),
                    (this.totalScatter = 0),
                    this.sfxReelSpinning &&
                      this.soundPlayer &&
                      this.soundPlayer.playSfx(this.sfxReelSpinning),
                    this.soundPlayer &&
                      (this.dataStore.modeTurbo
                        ? this.soundPlayer.playSfx("QUICK_SPIN")
                        : this.soundPlayer.playSfx(this.sfxReelSpinning));
                }),
                (o.setUpSoundStop = function (t, e) {
                  if (
                    this.scatterMatrix &&
                    !(
                      e.filter(function (t) {
                        return !0 === t;
                      }).length > 2
                    )
                  )
                    for (var a = 0, o = 0; o < t.length; o++) {
                      if (t[o].indexOf("A") > -1) {
                        for (var s = i, n = 0, r = o + 1; r < e.length; r++)
                          !0 === e[r] && n++;
                        switch (o) {
                          case 0:
                            n <= 2 && (s = c);
                            break;
                          case 1:
                            1 === a ? n <= 2 && (s = c) : n <= 1 && (s = c);
                            break;
                          case 2:
                            2 === a
                              ? (s = c)
                              : 1 === a
                              ? n <= 1 && (s = c)
                              : 0 === n && (s = c);
                            break;
                          case 3:
                            (a >= 2 || (1 === a && 0 === n)) && (s = c);
                            break;
                          case 4:
                            a >= 2 && (s = c);
                        }
                        (this.scatterMatrix[o] = { state: s, countScatter: a }),
                          a++,
                          (this.totalScatter = a);
                      }
                    }
                }),
                (o.reelStopSound = function (t) {
                  t.matrix;
                  var e = t.count;
                  if (this.soundPlayer) {
                    var a = e - 1,
                      o =
                        this.dataStore.gameSpeed ===
                        this.config.GAME_SPEED.INSTANTLY;
                    if (this.dataStore.modeTurbo || o)
                      5 === e &&
                        (this.soundPlayer.stopSfx(this.sfxReelSpinning),
                        this.soundPlayer.playSfx(this.sfxReelStop));
                    else {
                      var s = this.scatterMatrix[a],
                        n = s.state,
                        r = s.countScatter;
                      n === c
                        ? this.soundPlayer.playSfx("SCATTER" + (r + 1))
                        : 2 !== this.totalScatter ||
                          5 !== e ||
                          this.scatterMatrix[4].countScatter
                        ? this.soundPlayer.playSfx(this.sfxReelStop)
                        : this.soundPlayer.playSfx("REEL_STOP_LOSE");
                    }
                  }
                }),
                a
              );
            })(s))
          ) || n
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TopUI9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var e, o, n, i, s, r, l, u, c;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy), (r = t._decorator), (l = t.Toggle), (u = t.Button);
        },
        function (t) {
          c = t.GameObject;
        },
      ],
      execute: function () {
        var a, h, p, B, T;
        s._RF.push({}, "fb523iwzbBICI2YGTyEPF7N", "TopUI9938", void 0);
        var b = r.ccclass,
          f = r.property;
        t(
          "TopupUIController9938",
          ((a = b("TopupUIController9938")),
          (h = f({ type: l })),
          a(
            ((T = e(
              (B = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, s = new Array(o), r = 0;
                    r < o;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    n(e, "turboToggle", T, i(e)),
                    (e.listButtons = []),
                    e
                  );
                }
                o(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    (this.listButtons = this.node.getComponentsInChildren(u)),
                      this.listButtons &&
                        this.listButtons.length > 0 &&
                        (this.node.on(
                          "ENABLE_BUTTONS",
                          this.enableButtons,
                          this
                        ),
                        this.node.on(
                          "DISABLE_BUTTONS",
                          this.disableButtons,
                          this
                        ));
                  }),
                  (s.enableButtons = function () {
                    this.listButtons.forEach(function (t) {
                      t.node.children[0].emit("ENABLE_BUTTONS");
                    }),
                      (this.turboToggle.interactable = !0);
                  }),
                  (s.disableButtons = function () {
                    this.listButtons.forEach(function (t) {
                      t.node.children[0].emit("DISABLE_BUTTONS");
                    }),
                      (this.turboToggle.interactable = !1);
                  }),
                  e
                );
              })(c)).prototype,
              "turboToggle",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (p = B))
          ) || p)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TotalWinPanel9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./TotalWinPanel.ts"],
  function (t) {
    "use strict";
    var n, o, e, i;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (e = t._decorator);
        },
        function (t) {
          i = t.TotalWinPanel;
        },
      ],
      execute: function () {
        var l;
        o._RF.push({}, "15e94v0zAdP65c00rmvCilm", "TotalWinPanel9938", void 0);
        var s = e.ccclass;
        e.property,
          t(
            "TotalWinPanel9938",
            s("TotalWinPanel9938")(
              (l = (function (t) {
                function o() {
                  return t.apply(this, arguments) || this;
                }
                n(o, t);
                var e = o.prototype;
                return (
                  (e.show = function () {
                    t.prototype.show.call(this),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("POPUP_OPEN");
                  }),
                  (e.exit = function () {
                    t.prototype.show.call(this),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("POPUP_CLOSE");
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
  "chunks:///_virtual/TrialButton9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./TrialButton.ts",
  ],
  function (t) {
    "use strict";
    var o, n, i, e, r;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          e = t.SlotSceneType;
        },
        function (t) {
          r = t.TrialButton;
        },
      ],
      execute: function () {
        var u;
        n._RF.push({}, "bc09bb816tHJ4EA2CytrQR8", "TrialButton9938", void 0);
        var l = i.ccclass;
        i.property,
          t(
            "TrialButton9938",
            l("TrialButton9938")(
              (u = (function (t) {
                function n() {
                  return t.apply(this, arguments) || this;
                }
                o(n, t);
                var i = n.prototype;
                return (
                  (i.playSoundClick = function () {
                    this.soundPlayer &&
                      this.soundPlayer.playSfx("TUTORIAL_CLICK");
                  }),
                  (i.onPlayTrialButtonClicked = function () {
                    (this.guiMgr.isShowingCutScene(e.BigWin) &&
                      !this.dataStore.modeTurbo) ||
                      t.prototype.onPlayTrialButtonClicked.call(this);
                  }),
                  (i.onPlayRealButtonClicked = function () {
                    (this.guiMgr.isShowingCutScene(e.BigWin) &&
                      !this.dataStore.modeTurbo) ||
                      t.prototype.onPlayRealButtonClicked.call(this);
                  }),
                  n
                );
              })(r))
            ) || u
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Turbo9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./Turbo.ts"],
  function (t) {
    "use strict";
    var o, r, e, u;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (r = t.cclegacy), (e = t._decorator);
        },
        function (t) {
          u = t.Turbo;
        },
      ],
      execute: function () {
        var n;
        r._RF.push({}, "ce079mjcGRHT4geOmh76Dyg", "Turbo9938", void 0);
        var s = e.ccclass;
        e.property,
          t(
            "Turbo9938",
            s("Turbo9938")(
              (n = (function (t) {
                function r() {
                  return t.apply(this, arguments) || this;
                }
                return (
                  o(r, t),
                  (r.prototype.turboToggle = function () {
                    this.guiMgr.hideInfo(),
                      t.prototype.turboToggle.call(this),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("TURBO_CLICK");
                  }),
                  r
                );
              })(u))
            ) || n
          );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TutorialMgr9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TutorialMgr.ts",
    "./EventNames.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, o, r, s;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (n = t._decorator), (o = t.Button);
        },
        function (t) {
          r = t.TutorialMgr;
        },
        function (t) {
          s = t.default;
        },
      ],
      execute: function () {
        var a;
        e._RF.push({}, "1b91e4spYNEorDTkFcq5E5w", "TutorialMgr9938", void 0);
        var u = n.ccclass;
        t(
          "TutorialMgr9938",
          u("TutorialMgr9938")(
            (a = (function (t) {
              function e() {
                return t.apply(this, arguments) || this;
              }
              i(e, t);
              var n = e.prototype;
              return (
                (n.skipTutorial = function () {
                  this.soundPlayer && this.soundPlayer.playSfx("CANCEL_CLICK"),
                    this.eventManager.emit(
                      s.TUTORIAL_BREAK,
                      this.index,
                      this.tutorialSteps.json.Steps.length
                    ),
                    (this.index = this.tutorialSteps.json.Steps.length),
                    (this.showing = !1),
                    this._isSpinning
                      ? (this.doActionAfterFinishSpin = !0)
                      : ((this.endTutorialData = !0),
                        (this.finished = !0),
                        this._activeBet({ active: !0 })),
                    this.mainDirector &&
                      this.mainDirector.node &&
                      this.mainDirector.gameStateManager.skipTutorial(),
                    this.guiMgr.topUI &&
                      this.guiMgr.topUI.emit("ENABLE_BUTTONS"),
                    this.hideTutorial();
                }),
                (n.hideTutorial = function () {
                  this.guiMgr.hideTutorialMode(),
                    t.prototype.hideTutorial.call(this);
                }),
                (n.enableButtonSkip = function (t) {
                  this.buttonSkip.getComponent(o).interactable = t;
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
  "chunks:///_virtual/UIManager9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./CustomEnum.ts",
    "./UIManager.ts",
  ],
  function (t) {
    "use strict";
    var e, a, i, o, n, r, l, c, s, m, h, p, u, d, f, y, g, I;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (a = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy),
            (r = t._decorator),
            (l = t.Node),
            (c = t.Vec3),
            (s = t.Vec2),
            (m = t.ParticleSystem2D),
            (h = t.tween),
            (p = t.Animation),
            (u = t.Tween);
        },
        function (t) {
          d = t.tweenBezier2DTo;
        },
        function (t) {
          (f = t.SlotSceneType), (y = t.SlotGameMode), (g = t.WalletType);
        },
        function (t) {
          I = t.UIManager;
        },
      ],
      execute: function () {
        var b,
          M,
          T,
          G,
          v,
          B,
          A,
          S,
          w,
          E,
          _,
          k,
          j,
          U,
          W,
          F,
          N,
          P,
          J,
          L,
          O,
          C,
          D,
          R,
          z;
        n._RF.push({}, "74186WQmHlOcqMj1QG9Sj4H", "UIManager9938", void 0);
        var x = r.ccclass,
          Y = r.property;
        t(
          "UIManager9938",
          ((b = x("UIManager9938")),
          (M = Y({ type: l })),
          (T = Y({ type: l })),
          (G = Y({ type: l })),
          (v = Y({ type: l })),
          (B = Y({ type: l })),
          (A = Y({ type: l })),
          (S = Y({ type: l })),
          (w = Y({ type: l })),
          (E = Y({ type: l })),
          (_ = Y({ type: l })),
          (k = Y({ type: l })),
          b(
            ((W = e(
              (U = (function (t) {
                function e() {
                  for (
                    var e, a = arguments.length, n = new Array(a), r = 0;
                    r < a;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    ((e =
                      t.call.apply(t, [this].concat(n)) || this).grandTarget =
                      null),
                    (e.majorTarget = null),
                    i(e, "mainGameUI", W, o(e)),
                    i(e, "freeGameUI", F, o(e)),
                    i(e, "mainBoardTable", N, o(e)),
                    i(e, "freeBoardTable", P, o(e)),
                    i(e, "introWildMain", J, o(e)),
                    i(e, "introWildFree", L, o(e)),
                    i(e, "magicBallGrand", O, o(e)),
                    i(e, "magicBallMajor", C, o(e)),
                    i(e, "impactBallGrand", D, o(e)),
                    i(e, "impactBallMajor", R, o(e)),
                    i(e, "trialJackpot", z, o(e)),
                    e
                  );
                }
                a(e, t);
                var n = e.prototype;
                return (
                  (n.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.grandTarget =
                        this.impactBallGrand.position.clone()),
                      (this.majorTarget =
                        this.impactBallMajor.position.clone()),
                      this.freeGameUI.forEach(function (t) {
                        t.active = !1;
                      });
                  }),
                  (n.hideInfo = function () {
                    this.hideCutScene(f.GameInfo);
                  }),
                  (n.hideTutorialMode = function () {
                    this.dataStore.isWaitingFirstSpin = !0;
                  }),
                  (n.forceExitFreeGame = function () {
                    var t = [];
                    t.push({ command: "_clearPaylines" }),
                      t.push({
                        command: "_forceGameExit",
                        data: { isForce: !0 },
                      }),
                      this.mainDirector.gameModes[y.FreeGame].emit(
                        "FORCE_TO_EXIT",
                        t
                      ),
                      (this.dataStore.freeSlideWildTrial = []);
                  }),
                  (n.forceExitNormalGame = function () {
                    var t = [];
                    t.push({
                      command: "_resumeGameMode",
                      data: { name: y.NormalGame },
                    }),
                      t.push({ command: "_resetSpinButton" }),
                      t.push({ command: "_gameFinish" }),
                      t.push({ command: "_gameRestart" }),
                      t.push({ command: "_showTrialButtons", data: !0 }),
                      t.push({ command: "_clearWinAmount" }),
                      this.mainDirector.gameModes[y.NormalGame].emit(
                        "FORCE_TO_EXIT",
                        t
                      );
                  }),
                  (n.playAnimJackpotWin = function (t, e) {
                    this.dataStore.isTrialMode
                      ? this.trialJackpot.emit("PLAY_ANIM_JPWIN", t, e)
                      : this.jackpot.emit("PLAY_ANIM_JPWIN", t, e);
                  }),
                  (n.playAnimJackpotIdle = function (t) {
                    this.dataStore.isTrialMode
                      ? this.trialJackpot.emit("PLAY_ANIM_JPIDLE", t)
                      : this.jackpot.emit("PLAY_ANIM_JPIDLE", t);
                  }),
                  (n.playIntroJackpotEffect = function (t, e) {
                    var a = this,
                      i = this.dataStore.playSession.jackpotInfo;
                    this.scheduleOnce(function () {
                      var t = i[i.length - 1].split(";")[0].split("_")[2],
                        o = "GRAND" === t ? a.grandTarget : a.majorTarget;
                      (a.magicBallGrand.active = "GRAND" === t),
                        (a.magicBallMajor.active = "MAJOR" === t),
                        (a.impactBallGrand.active = !1),
                        (a.impactBallMajor.active = !1);
                      var n =
                          "GRAND" === t ? a.magicBallGrand : a.magicBallMajor,
                        r =
                          "GRAND" === t ? a.impactBallGrand : a.impactBallMajor,
                        l = "GRAND" === t ? 430 : 610,
                        u = new c(512, 98, 0);
                      n.setPosition(u);
                      var f = new s(n.position.x, n.position.y + 500),
                        y = new s(o.x, o.y + l),
                        g = new s(o.x, o.y),
                        I = n.getComponentsInChildren(m);
                      I.forEach(function (t) {
                        t.resetSystem();
                      }),
                        a.setOpacity(n, 0),
                        h(n)
                          .call(function () {
                            a.fadeIn(n, 0.2);
                          })
                          .delay(0.2)
                          .call(function () {
                            d(n, 1, f, y, g);
                          })
                          .delay(1)
                          .call(function () {
                            (r.active = !0),
                              r.getComponent(p).play(),
                              I.forEach(function (t) {
                                t.stopSystem();
                              });
                          })
                          .call(function () {
                            a.fadeOut(n, 0.2);
                          })
                          .delay(0.2)
                          .call(function () {
                            a.soundPlayer &&
                              a.soundPlayer.playSfx("ANNOUNCE_JACKPOT"),
                              e && e();
                          })
                          .delay(0.3)
                          .call(function () {
                            (r.active = !1), (n.active = !1);
                          })
                          .start();
                    }, t);
                  }),
                  (n.hideAllUI = function () {
                    t.prototype.hideAllUI.call(this),
                      this.dataStore.isTrialMode
                        ? (this.trialJackpot.active = !0)
                        : (this.jackpot.active = !0),
                      this.mainGameUI.forEach(function (t) {
                        t.active = !1;
                      }),
                      this.freeGameUI.forEach(function (t) {
                        t.active = !1;
                      }),
                      (this.introWildMain.active = !1),
                      (this.introWildFree.active = !1),
                      (this.mainBoardTable.active = !1),
                      (this.freeBoardTable.active = !1);
                  }),
                  (n.showUIMain = function () {
                    t.prototype.showUIMain.call(this),
                      this.dataStore.isTrialMode
                        ? (this.trialJackpot.active = !0)
                        : (this.jackpot.active = !0),
                      this.mainGameUI.forEach(function (t) {
                        t.active = !0;
                      }),
                      (this.introWildMain.active = !0),
                      (this.mainBoardTable.active = !0);
                  }),
                  (n.showUIFree = function () {
                    t.prototype.showUIFree.call(this),
                      (this.trialButton.active = !0),
                      (this.bet.active = !0),
                      (this.wallet.active = !0),
                      (this.introWildFree.active = !0),
                      (this.freeBoardTable.active = !0),
                      this.freeGameUI.forEach(function (t) {
                        t.active = !0;
                      });
                  }),
                  (n.switchToRealMode = function () {
                    this.winAmount.emit("PLAY_EFFECT_IDLE"),
                      t.prototype.switchToRealMode.call(this);
                    var e = this.dataStore.currentGameMode,
                      a = e == y.FreeGame,
                      i = e == y.NormalGame;
                    this.dataStore.resumeWallet(g.NORMAL),
                      this.dataStore.resumeWallet(g.PROMOTE),
                      this.dataStore.resumeWallet(g.TRIAL),
                      this.trialJackpot && (this.trialJackpot.active = !1),
                      this.jackpot && (this.jackpot.active = !0),
                      i ||
                        (this.forceExitNormalGame(),
                        a && this.forceExitFreeGame());
                  }),
                  (n.switchToTrialMode = function () {
                    this.winAmount.emit("PLAY_EFFECT_IDLE"),
                      this.hideCutScene(f.GameInfo),
                      this.dataStore.resumeWallet(g.NORMAL),
                      this.dataStore.resumeWallet(g.PROMOTE),
                      this.dataStore.resumeWallet(g.TRIAL),
                      this.jackpot && (this.jackpot.active = !1),
                      this.trialJackpot && (this.trialJackpot.active = !0),
                      t.prototype.switchToTrialMode.call(this);
                  }),
                  (n.onSettingClick = function () {
                    this.hideCutScene(f.GameInfo),
                      t.prototype.onSettingClick.call(this);
                  }),
                  (n.onInfoClick = function () {
                    this.onEnterInfo(),
                      this.showCutScene(
                        f.GameInfo,
                        {},
                        this.onExitInfo.bind(this)
                      ),
                      this.soundPlayer && this.soundPlayer.playSFXClick();
                  }),
                  (n.showJackpotHistory = function () {
                    this.hideCutScene(f.GameInfo),
                      t.prototype.showJackpotHistory.call(this);
                  }),
                  (n.onEnterInfo = function () {
                    this.showAllTableUI(!1);
                  }),
                  (n.onExitInfo = function () {
                    this.showAllTableUI(!0);
                  }),
                  (n.showAllTableUI = function (t) {
                    void 0 === t && (t = !1),
                      this.mainDirector.gameModes[y.NormalGame].emit(
                        "SHOW_TABLE_UI",
                        t
                      ),
                      this.mainDirector.gameModes[y.FreeGame].emit(
                        "SHOW_TABLE_UI",
                        t
                      ),
                      this.setOpacity(this.paylineInfo, 1 == t ? 255 : 0);
                  }),
                  (n.enableButtonSkip = function (t) {
                    this.tutorialMgr.enableButtonSkip(t);
                  }),
                  (n.onDisable = function () {
                    u.stopAllByTarget(this.magicBallGrand),
                      u.stopAllByTarget(this.magicBallMajor),
                      u.stopAll(),
                      this.magicBallGrand.bezierX &&
                        this.magicBallGrand.bezierX.stop(),
                      this.magicBallMajor.bezierY &&
                        this.magicBallMajor.bezierY.stop();
                  }),
                  e
                );
              })(I)).prototype,
              "mainGameUI",
              [M],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (F = e(U.prototype, "freeGameUI", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (N = e(U.prototype, "mainBoardTable", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (P = e(U.prototype, "freeBoardTable", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (J = e(U.prototype, "introWildMain", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (L = e(U.prototype, "introWildFree", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (O = e(U.prototype, "magicBallGrand", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (C = e(U.prototype, "magicBallMajor", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (D = e(U.prototype, "impactBallGrand", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (R = e(U.prototype, "impactBallMajor", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (z = e(U.prototype, "trialJackpot", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (j = U))
          ) || j)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WildRoadController9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (i) {
    "use strict";
    var e, t, o, n, r, l, a, d, s, h, c;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (o = i.initializerDefineProperty),
            (n = i.assertThisInitialized);
        },
        function (i) {
          (r = i.cclegacy),
            (l = i._decorator),
            (a = i.Node),
            (d = i.Prefab),
            (s = i.instantiate),
            (h = i.sp);
        },
        function (i) {
          c = i.GameObject;
        },
      ],
      execute: function () {
        var p, u, f, v, W, g, b, R, y, H, _;
        r._RF.push(
          {},
          "6854dJV+h9D1ZIE+sH6I8xQ",
          "WildRoadController9938",
          void 0
        );
        var m = l.ccclass,
          D = l.property;
        i(
          "WildRoadController9938",
          ((p = m("WildRoadController9938")),
          (u = D({ type: a })),
          (f = D({ type: d })),
          (v = D({ type: a })),
          (W = D({ type: d })),
          p(
            ((R = e(
              (b = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, r = new Array(t), l = 0;
                    l < t;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (e = i.call.apply(i, [this].concat(r)) || this),
                    o(e, "roadHolder", R, n(e)),
                    o(e, "roadPrefab", y, n(e)),
                    o(e, "slidingWildHolder", H, n(e)),
                    o(e, "slidingWildPrefab", _, n(e)),
                    (e.haveWild = []),
                    e
                  );
                }
                t(e, i);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on("INIT_WILD_ROAD", this.init, this),
                      this.node.on("SHOW_WILD_ROAD", this.showRoad, this),
                      this.node.on("HIDE_WILD_ROAD", this.hideRoad, this),
                      this.node.on("RESET_WILD_ROAD", this.resetRoad, this);
                  }),
                  (r.init = function () {
                    for (
                      var i = 0;
                      i < this.config.NORMAL_TABLE_FORMAT.length;
                      ++i
                    ) {
                      var e = this.node.getXPosition(i),
                        t = s(this.roadPrefab);
                      (t.parent = this.roadHolder),
                        t.setPosition(e, 0),
                        (t.active = !1);
                      var o = s(this.slidingWildPrefab);
                      (o.parent = this.slidingWildHolder),
                        o.setPosition(e, 0),
                        (o.active = !1);
                    }
                  }),
                  (r.showRoad = function (i) {
                    if ((void 0 === i && (i = 0), !this.haveWild.includes(i))) {
                      this.haveWild.push(i);
                      var e = this.roadHolder.children[i];
                      (e.active = !0),
                        e
                          .getComponent(h.Skeleton)
                          .setAnimation(0, "Road_Appear", !1),
                        (this.slidingWildHolder.children[i].active = !0);
                    }
                  }),
                  (r.hideRoad = function (i) {
                    var e = this;
                    if (
                      (void 0 === i && (i = 0),
                      this.haveWild.includes(i) &&
                        (this.haveWild.splice(this.haveWild.indexOf(i), 1),
                        !this.haveWild.includes(i)))
                    ) {
                      var t = this.roadHolder.children[i];
                      t
                        .getComponent(h.Skeleton)
                        .setAnimation(0, "Road_Disappear", !1),
                        t
                          .getComponent(h.Skeleton)
                          .setCompleteListener(function () {
                            t
                              .getComponent(h.Skeleton)
                              .setCompleteListener(function () {}),
                              (t.active = !1),
                              (e.slidingWildHolder.children[i].active = !1);
                          });
                    }
                  }),
                  (r.resetRoad = function () {
                    this.haveWild = [];
                    for (var i = 0; i < this.roadHolder.children.length; i++) {
                      (this.roadHolder.children[i].active = !1),
                        (this.slidingWildHolder.children[i].active = !1);
                    }
                  }),
                  e
                );
              })(c)).prototype,
              "roadHolder",
              [u],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (y = e(b.prototype, "roadPrefab", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (H = e(b.prototype, "slidingWildHolder", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (_ = e(b.prototype, "slidingWildPrefab", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (g = b))
          ) || g)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WinAmount9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./WinAmount.ts"],
  function (t) {
    "use strict";
    var i, n, o, e, s, a, l, r;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy), (a = t._decorator), (l = t.sp);
        },
        function (t) {
          r = t.WinAmount;
        },
      ],
      execute: function () {
        var u, c, p, m, d;
        s._RF.push({}, "2510egDnZ5GmJJPdBnUKrfS", "WinAmount9938", void 0);
        var h = a.ccclass,
          f = a.property;
        t(
          "WinAmount9938",
          ((u = h("WinAmount9938")),
          (c = f({ type: l.Skeleton })),
          u(
            ((d = i(
              (m = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, s = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    o(i, "winAmountSpine", d, e(i)),
                    (i.isGold = null),
                    i
                  );
                }
                n(i, t);
                var s = i.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("PLAY_EFFECT_WIN", this.playEffectWin, this),
                      this.node.on(
                        "PLAY_EFFECT_IDLE",
                        this.playEffectIdle,
                        this
                      ),
                      this.winAmountSpine.setAnimation(0, "Static_Normal", !0);
                  }),
                  (s.playEffectWin = function (t) {
                    var i = t.rate;
                    this.isGold = i >= 1;
                    var n = this.isGold ? "Normal_To_Gold" : "Normal",
                      o = this.isGold ? "Static_Gold" : "Static_Normal";
                    this.winAmountSpine.setAnimation(0, n, !1),
                      this.winAmountSpine.addAnimation(0, o, !0);
                  }),
                  (s.playEffectIdle = function () {
                    this.isGold
                      ? (this.winAmountSpine.setAnimation(
                          0,
                          "Gold_To_Normal",
                          !1
                        ),
                        this.winAmountSpine.addAnimation(
                          0,
                          "Static_Normal",
                          !0
                        ))
                      : this.winAmountSpine.setAnimation(
                          0,
                          "Static_Normal",
                          !0
                        ),
                      (this.isGold = !1);
                  }),
                  (s._resetLabel = function () {
                    this.stopTweenFade(),
                      this.stopTweenValue(),
                      this.fadeIn(this.labelWinAmount.node, 0),
                      (this.node.isFading = !1);
                  }),
                  i
                );
              })(r)).prototype,
              "winAmountSpine",
              [c],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (p = m))
          ) || p)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WinEffect9938.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./WinEffect.ts",
    "./utils2.ts",
    "./EventNames.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, s, o, a, l, r, c, h, u, f, p, d;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (l = t.sp),
            (r = t.tween),
            (c = t.Vec3),
            (h = t.sys);
        },
        function (t) {
          u = t.WinEffect;
        },
        function (t) {
          f = t.formatMoney;
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          d = t.TutorialTriggerType;
        },
      ],
      execute: function () {
        var m, y, w, A, g, v, S;
        o._RF.push({}, "4579cijPVxBxL/49tKydEc2", "WinEffect9938", void 0);
        var T = a.ccclass,
          E = a.property;
        t(
          "WinEffect9938",
          ((m = T("WinEffect9938")),
          (y = E({ type: l.Skeleton })),
          (w = E({ type: l.Skeleton })),
          m(
            ((v = e(
              (g = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "winAnimSkeleton", v, s(e)),
                    n(e, "vfxUIBigWin", S, s(e)),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.show = function () {
                    (this.node.active = !0), this.setOpacity(this.node, 255);
                  }),
                  (o.enter = function () {
                    this.setOpacity(this.winAnimSkeleton.node, 255),
                      this.setOpacity(this.vfxUIBigWin.node, 255),
                      t.prototype.enter.call(this);
                  }),
                  (o.showFastEffectWin = function () {
                    this.soundPlayer &&
                      this.soundPlayer.playSfx("COIN_FALLING"),
                      (this.winInfo.active = !1),
                      t.prototype.showFastEffectWin.call(this);
                  }),
                  (o.showEffectWin = function () {
                    var t = this;
                    this.overlayNode && (this.overlayNode.active = !0),
                      (this.label.string = ""),
                      this.setOpacity(this.winInfo, 255),
                      this.setAnimation("Green_Appear", "Green_Idle"),
                      (this.isShowNormalEffect = !0),
                      this.startParticle(),
                      (this.winInfo.active = !0),
                      this.winInfo.setScale(0.2, 0.2, 1),
                      r(this.winInfo)
                        .to(
                          0.4,
                          { scale: new c(1.2, 1.2, 0) },
                          { easing: "backIn" }
                        )
                        .to(
                          0.3,
                          { scale: new c(1, 1, 0) },
                          { easing: "backOut" }
                        )
                        .call(function () {
                          (t.winAmountTween = r(t.winAmount)
                            .repeatForever(
                              r()
                                .to(0.2, { scale: new c(1.2, 1.2, 1.2) })
                                .to(0.2, { scale: new c(1, 1, 1) })
                            )
                            .start()),
                            t.initValue(),
                            t.startUpdateWinAmount();
                        })
                        .start(),
                      this.playSoundStart();
                  }),
                  (o.setAnimation = function (t, e) {
                    var i = this;
                    t &&
                      e &&
                      this.winAnimSkeleton &&
                      (this.winAnimSkeleton.setAnimation(0, t, !1),
                      this.winAnimSkeleton.setCompleteListener(function (n) {
                        i.winAnimSkeleton.setCompleteListener(function () {}),
                          n.animation.name === t &&
                            i.winAnimSkeleton.setAnimation(0, e, !0);
                      }));
                  }),
                  (o.playSoundStart = function () {
                    var t = 1;
                    this.content.winAmount >= this.superWinAmount
                      ? (t = 3)
                      : this.content.winAmount >= this.megaWinAmount && (t = 2),
                      this.soundPlayer &&
                        (this.soundPlayer.pauseMusic(),
                        this.soundPlayer.playSfx("BIGWIN_" + t),
                        this.soundPlayer.playSfx("COIN_FALLING"));
                  }),
                  (o.playSoundEnd = function () {
                    var t = 1;
                    this.content.winAmount >= this.superWinAmount
                      ? (t = 3)
                      : this.content.winAmount >= this.megaWinAmount && (t = 2),
                      this.soundPlayer &&
                        (this.soundPlayer.stopAllAudio(),
                        this.soundPlayer.playSfx("BIGWIN_" + t + "_END"));
                  }),
                  (o.changeTitle = function (t) {
                    (this.currentTitle = t),
                      1 === t
                        ? this.setAnimation("Blue_Appear", "Blue_Idle")
                        : 2 === t &&
                          this.setAnimation("Red_Appear", "Red_Idle");
                  }),
                  (o.finish = function () {
                    var t = this;
                    (this.isUpdating = !1),
                      (this.label.string = f(this.content.winAmount)),
                      this.winAmountTween && this.winAmountTween.stop(),
                      this.titleTween && this.titleTween.stop(),
                      this.nodeTween && this.nodeTween.stop(),
                      this.currentValue >= this.superWinAmount &&
                      1 == this.currentTitle
                        ? this.changeTitle(2)
                        : this.currentValue >= this.megaWinAmount &&
                          0 == this.currentTitle &&
                          this.changeTitle(1),
                      this.stopParticle(),
                      this.playSoundEnd(),
                      r(this.winInfo)
                        .delay(this.delayShowTime)
                        .call(function () {
                          t.fadeTo(t.winInfo, t.hideTime, 1),
                            t.fadeTo(t.node, t.hideTime, 1),
                            t.fadeTo(t.winAnimSkeleton.node, t.hideTime, 1),
                            t.fadeTo(t.vfxUIBigWin.node, t.hideTime, 1);
                        })
                        .delay(this.hideTime)
                        .call(function () {
                          (t.label.string = ""),
                            t.exit(),
                            t.soundPlayer && t.soundPlayer.stopAllAudio(),
                            t.soundPlayer && t.soundPlayer.playMainBGM();
                        })
                        .start();
                  }),
                  (o.exit = function (t) {
                    var e = this;
                    void 0 === t && (t = null),
                      (this.isShowFastEffect = !1),
                      (this.isShowNormalEffect = !1),
                      t && "function" == typeof t && (this.callback = t),
                      this.guiMgr.onIngameEvent(
                        d.OnCutsceneClose,
                        "ON_CUTSCENE_CLOSE"
                      ),
                      this.callback &&
                        (this.node.emit("STOP"), this.callback()),
                      h.isNative &&
                        this.eventManager &&
                        this.eventManager.emit(
                          p.REMOVE_ON_DEMAND_OBJECT,
                          Number(this.sceneType),
                          !0,
                          function () {
                            var t = e.guiMgr.sceneComp.indexOf(e);
                            t > -1 && e.guiMgr.sceneComp.splice(t, 1);
                          }
                        ),
                      this.hideScene();
                  }),
                  e
                );
              })(u)).prototype,
              "winAnimSkeleton",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (S = e(g.prototype, "vfxUIBigWin", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (A = g))
          ) || A)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WinlineMgr9938.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (i) {
    "use strict";
    var e, n, t, r, o, a, s, l;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (n = i.inheritsLoose),
            (t = i.initializerDefineProperty),
            (r = i.assertThisInitialized);
        },
        function (i) {
          (o = i.cclegacy), (a = i._decorator), (s = i.sp), (l = i.Component);
        },
      ],
      execute: function () {
        var p, c, u, h, d, f, m;
        o._RF.push({}, "246eb/9oK1Ii5+lF0r5I/OL", "WinlineMgr9938", void 0);
        var y = a.ccclass,
          I = a.property;
        i(
          "WinlineMgr9938",
          ((p = y("WinlineMgr9938")),
          (c = I({ type: s.Skeleton })),
          p(
            ((d = e(
              (h = (function (i) {
                function e() {
                  for (
                    var e, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = i.call.apply(i, [this].concat(o)) || this),
                    t(e, "spine", d, r(e)),
                    t(e, "animIdle", f, r(e)),
                    t(e, "animAppear", m, r(e)),
                    e
                  );
                }
                n(e, i);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    this.node.on("SHOW_WIN_LINE", this.showWinLine, this),
                      this.node.on("HIDE_WIN_LINE", this.hideWinLine, this);
                  }),
                  (o.showWinLine = function () {
                    (this.spine.node.active = !0),
                      this.spine.setAnimation(0, this.animAppear, !1),
                      this.spine.addAnimation(0, this.animIdle, !0);
                  }),
                  (o.hideWinLine = function () {
                    this.spine.node.active = !1;
                  }),
                  e
                );
              })(l)).prototype,
              "spine",
              [c],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (f = e(h.prototype, "animIdle", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "Idle_Back";
              },
            })),
            (m = e(h.prototype, "animAppear", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "Appear_Back";
              },
            })),
            (u = h))
          ) || u)
        );
        o._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/cc30-axie-infinity-9938",
    "chunks:///_virtual/cc30-axie-infinity-9938"
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
