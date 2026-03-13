System.register(
  "chunks:///_virtual/Bet9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./Bet.ts"],
  function (t) {
    "use strict";
    var e, n, i, r;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          r = t.Bet;
        },
      ],
      execute: function () {
        var a;
        n._RF.push({}, "5dd3cx7yJxEAZhrnhMpaVli", "Bet9881", void 0);
        var s = i.ccclass;
        t(
          "Bet9901",
          s("Bet9901")(
            (a = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              e(n, t);
              var i = n.prototype;
              return (
                (i.increaseBet = function () {
                  t.prototype.increaseBet.call(this);
                  var e = this.betData,
                    n = e.mainBets,
                    i = e.betKey,
                    r = Object.keys(n);
                  r[r.length - 1] === i &&
                    (this.increaseBetBtn.interactable = !1);
                }),
                (i.reduceBet = function () {
                  t.prototype.reduceBet.call(this);
                  var e = this.betData,
                    n = e.mainBets,
                    i = e.betKey;
                  Object.keys(n)[0] === i &&
                    (this.reduceBetBtn.interactable = !1);
                }),
                (i.updateBet = function (e) {
                  t.prototype.updateBet.call(this, e),
                    this.dataStore.promotion ||
                      ((this.reduceBetBtn.interactable = !0),
                      (this.increaseBetBtn.interactable = !0));
                }),
                (i.enableBetBtn = function () {
                  this.increaseBetBtn &&
                    (this.increaseBetBtn.interactable = !this._isMaxBet()),
                    this.reduceBetBtn &&
                      (this.reduceBetBtn.interactable = !this._isMinBet());
                }),
                (i._isMaxBet = function () {
                  var t = this.betData,
                    e = t.mainBets,
                    n = t.betKey,
                    i = Object.keys(e);
                  return i[i.length - 1] == n;
                }),
                (i._isMinBet = function () {
                  var t = this.betData,
                    e = t.mainBets,
                    n = t.betKey;
                  return Object.keys(e)[0] == n;
                }),
                (i._getNextKey = function (t, e) {
                  var n = Object.keys(e),
                    i = n.indexOf(t);
                  return n[i === n.length - 1 ? n.length - 1 : i + 1];
                }),
                (i._getPrevKey = function (t, e) {
                  var n = Object.keys(e),
                    i = n.indexOf(t);
                  return n[0 === i ? 0 : i - 1];
                }),
                n
              );
            })(r))
          ) || a
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigWild9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameObject.ts",
    "./CustomEnum.ts",
  ],
  function (i) {
    "use strict";
    var t, e, n, s, l, h, d, a, o, W, r, g;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (e = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (s = i.assertThisInitialized);
        },
        function (i) {
          (l = i.cclegacy),
            (h = i._decorator),
            (d = i.Node),
            (a = i.v3),
            (o = i.sp),
            (W = i.Event);
        },
        function (i) {
          r = i.GameObject;
        },
        function (i) {
          g = i.SlotGameMode;
        },
      ],
      execute: function () {
        var f, m, A, c, _, u, I;
        l._RF.push({}, "1a087Pci4hFILZ+io+zXtbp", "BigWild9881", void 0);
        var L = h.ccclass,
          p = h.property,
          v = ["Expand_Top_FreeG", "Expand_Mid_FreeG", "Expand_Bot_FreeG"],
          B = "Expand_Idle",
          P = "Expand_Win",
          E = "Expand_NearWin_Start",
          D = "Expand_NearWin_Idle",
          H = "Expand_NearWin_End";
        i(
          "BigWild9881",
          ((f = L("BigWild9881")),
          (m = p(d)),
          (A = p(d)),
          f(
            ((u = t(
              (_ = (function (i) {
                function t() {
                  for (
                    var t, e = arguments.length, l = new Array(e), h = 0;
                    h < e;
                    h++
                  )
                    l[h] = arguments[h];
                  return (
                    (t = i.call.apply(i, [this].concat(l)) || this),
                    n(t, "leftWild", u, s(t)),
                    n(t, "rightWild", I, s(t)),
                    (t.isHasLeftWild = !1),
                    (t.isHasRightWild = !1),
                    (t.leftWildAnim = null),
                    (t.rightWildAnim = null),
                    (t.leftWildPosition = null),
                    (t.rightWildPosition = null),
                    (t.isNearWin = !1),
                    t
                  );
                }
                e(t, i);
                var l = t.prototype;
                return (
                  (l.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on("SETUP_BIGWILD", this.setupBigWild, this),
                      this.node.on("APPEAR_BIGWILD", this.appearBigWild, this),
                      this.node.on(
                        "DISPLAY_BIGWILD",
                        this.displayBigWild,
                        this
                      ),
                      this.node.on("SET_NEAR_WIN", this.setNearWin, this),
                      this.node.on("FORCE_IDLE", this.forceIdle, this),
                      this.node.on("ON_START_SPIN", this.resetBigWild, this),
                      this.node.on("ON_TABLE_STOPPED", this.onTableStop, this),
                      this.node.on(
                        "ON_FAST_TO_RESULT",
                        this.onFastToResult,
                        this
                      ),
                      (this.leftWildPosition = this.leftWild.position.clone()),
                      (this.rightWildPosition =
                        this.rightWild.position.clone()),
                      this._init();
                  }),
                  (l.onEnable = function () {
                    this.eventManager &&
                      (this.eventManager.on(
                        "ENABLE_BIGWILD",
                        this.enableBigWild,
                        this
                      ),
                      this.eventManager.on(
                        "DISABLE_BIGWILD",
                        this.disableBigWild,
                        this
                      ),
                      this.eventManager.on(
                        "SHOW_PAYLINE_JACKPOT",
                        this.showPayLineJackpot,
                        this
                      ),
                      this.eventManager.on(
                        "PLAY_BIGWILD_WIN",
                        this.playBigWildWin,
                        this
                      ),
                      this.eventManager.on(
                        "PLAY_BIGWILD_IDLE",
                        this.playBigWildIdle,
                        this
                      ),
                      this.eventManager.on(
                        "PLAY_DEFAULT_MATRIX_BIGWILD_IDLE",
                        this.playDefaultMatrixBigWildIdle,
                        this
                      ));
                  }),
                  (l.onDisable = function () {
                    this.eventManager &&
                      (this.eventManager.off(
                        "ENABLE_BIGWILD",
                        this.enableBigWild,
                        this
                      ),
                      this.eventManager.off(
                        "DISABLE_BIGWILD",
                        this.disableBigWild,
                        this
                      ),
                      this.eventManager.off(
                        "SHOW_PAYLINE_JACKPOT",
                        this.showPayLineJackpot,
                        this
                      ),
                      this.eventManager.off(
                        "PLAY_BIGWILD_WIN",
                        this.playBigWildWin,
                        this
                      ),
                      this.eventManager.off(
                        "PLAY_BIGWILD_IDLE",
                        this.playBigWildIdle,
                        this
                      ),
                      this.eventManager.off(
                        "PLAY_DEFAULT_MATRIX_BIGWILD_IDLE",
                        this.playDefaultMatrixBigWildIdle,
                        this
                      ));
                  }),
                  (l.onFastToResult = function () {
                    if (this.isNearWin) {
                      if (this.isHasRightWild) {
                        var i = this._getCurrentTrackAnimation(
                          this.rightWildAnim
                        ).name;
                        i === D || i === E
                          ? this.rightWildAnim.setAnimation(0, B, !0)
                          : this._addAnimIdle(this.rightWildAnim);
                      }
                      if (this.isHasLeftWild) {
                        var t = this._getCurrentTrackAnimation(
                          this.leftWildAnim
                        ).name;
                        t === D || t === E
                          ? this.leftWildAnim.setAnimation(0, B, !0)
                          : this._addAnimIdle(this.leftWildAnim);
                      }
                    }
                    this.isNearWin = !1;
                  }),
                  (l.onTableStop = function () {
                    this.isNearWin &&
                      (this.rightWildAnim &&
                        (this.rightWildAnim.setAnimation(0, H, !1),
                        this.rightWildAnim.addAnimation(0, B, !0)),
                      this.leftWildAnim &&
                        (this.leftWildAnim.setAnimation(0, H, !1),
                        this.leftWildAnim.addAnimation(0, B, !0))),
                      (this.isNearWin = !1);
                  }),
                  (l.setNearWin = function () {
                    this.isNearWin = !0;
                  }),
                  (l.forceIdle = function () {
                    if (this.rightWildAnim && this.rightWild.active) {
                      this.rightWildAnim.setAnimation(0, B, !0);
                      var i = this.rightWildAnim.node.getPosition().x;
                      this.rightWildAnim.node.setPosition(a(i, 0, 0));
                    }
                    if (this.leftWildAnim && this.leftWild.active) {
                      this.leftWildAnim.setAnimation(0, B, !0);
                      var t = this.leftWildAnim.node.getPosition().x;
                      this.leftWildAnim.node.setPosition(a(t, 0, 0));
                    }
                  }),
                  (l._init = function () {
                    this.leftWild &&
                      ((this.leftWildAnim = this.leftWild.getComponent(
                        o.Skeleton
                      )),
                      this.leftWildAnim.setMix(B, E, 0.2),
                      this.leftWildAnim.setMix(D, H, 0.2)),
                      this.rightWild &&
                        ((this.rightWildAnim = this.rightWild.getComponent(
                          o.Skeleton
                        )),
                        this.rightWildAnim.setMix(B, E, 0.2),
                        this.rightWildAnim.setMix(D, H, 0.2));
                  }),
                  (l.resetBigWild = function () {
                    (this.isHasLeftWild = !1),
                      (this.isHasRightWild = !1),
                      (this.rightWild.active = !1),
                      (this.leftWild.active = !1),
                      this.rightWildAnim.clearTracks(),
                      this.leftWildAnim.clearTracks(),
                      (this.isNearWin = !1),
                      this.leftWild.emit("RESET_BIG_WILD"),
                      this.rightWild.emit("RESET_BIG_WILD");
                  }),
                  (l.setupBigWild = function (i) {
                    for (
                      var t = i.matrix, e = i.isResume, n = 0;
                      n <= this.config.NORMAL_TABLE_FORMAT.length;
                      n++
                    )
                      for (
                        var s = 0;
                        s <= this.config.NORMAL_TABLE_FORMAT[n];
                        s++
                      )
                        "K2" === t[n][s]
                          ? (this.isHasLeftWild = !0)
                          : "K3" === t[n][s] && (this.isHasRightWild = !0);
                    e &&
                      (this.isHasLeftWild &&
                        this.leftWild &&
                        (this.leftWild.active = !0),
                      this.isHasRightWild &&
                        this.rightWild &&
                        (this.rightWild.active = !0),
                      this.playBigWildIdle());
                  }),
                  (l.appearBigWild = function (i) {
                    var t = this,
                      e = i.matrix,
                      n = i.col,
                      s = this._getRow(e);
                    if (
                      (!this.isHasRightWild && !this.isHasLeftWild) ||
                      -1 !== s
                    ) {
                      if (n > 2 && this.isHasRightWild && s > -1) {
                        var l = this._getPosByColRow(n, s);
                        (this.rightWild.active = !0),
                          this.rightWild.setPosition(l),
                          this.rightWildAnim.setAnimation(0, v[s], !1),
                          this.isNearWin
                            ? this._addAnimNearWinIdle(this.rightWildAnim)
                            : this._addAnimIdle(this.rightWildAnim);
                        var h = new W("ON_BIG_WILD_SHOW", !0);
                        (h.userData = {
                          col:
                            this.dataStore.currentGameMode === g.NormalGame
                              ? 4
                              : 3,
                        }),
                          this.node.dispatchEvent(h);
                      } else if (n < 2 && this.isHasLeftWild && s > -1) {
                        var d = this._getPosByColRow(n, s);
                        (this.leftWild.active = !0),
                          this.leftWild.setPosition(d),
                          this.leftWildAnim.setAnimation(0, v[s], !1),
                          this.isNearWin
                            ? this._addAnimNearWinIdle(this.leftWildAnim)
                            : this._addAnimIdle(this.leftWildAnim);
                        var a = new W("ON_BIG_WILD_SHOW", !0);
                        (a.userData = {
                          col:
                            this.dataStore.currentGameMode === g.NormalGame
                              ? 0
                              : 1,
                        }),
                          this.node.dispatchEvent(a);
                      }
                      this.dataStore.playSession.payLines &&
                        (this.isHasRightWild || this.isHasLeftWild) &&
                        this.scheduleOnce(function () {
                          t.soundPlayer.playSfx("WILD_EXPAND");
                        }, 0.2);
                    }
                  }),
                  (l.displayBigWild = function (i) {
                    void 0 === i && (i = !1),
                      i
                        ? (this.leftWild &&
                            (this.leftWild.active = this.isHasLeftWild),
                          this.rightWild &&
                            (this.rightWild.active = this.isHasRightWild))
                        : (this.leftWild && (this.leftWild.active = !1),
                          this.rightWild && (this.rightWild.active = !1));
                  }),
                  (l.disableBigWild = function () {
                    this.leftWild.active &&
                      this.leftWildAnim &&
                      (this._disableHighlight(this.leftWildAnim),
                      this.leftWildAnim.setAnimation(0, B, !0)),
                      this.rightWild.active &&
                        this.rightWildAnim &&
                        (this._disableHighlight(this.rightWildAnim),
                        this.rightWildAnim.setAnimation(0, B, !0));
                  }),
                  (l.enableBigWild = function () {
                    this.leftWild.active &&
                      this.leftWildAnim &&
                      (this._enableHighlight(this.leftWildAnim),
                      this.leftWildAnim.setAnimation(0, B, !0)),
                      this.rightWild.active &&
                        this.rightWildAnim &&
                        (this._enableHighlight(this.rightWildAnim),
                        this.rightWildAnim.setAnimation(0, B, !0));
                  }),
                  (l.showPayLineJackpot = function () {
                    this.leftWild.active &&
                      this.leftWildAnim &&
                      (this._enableHighlight(this.leftWildAnim),
                      this.leftWildAnim.setAnimation(0, P, !0)),
                      this.rightWild.active &&
                        this.rightWildAnim &&
                        (this._enableHighlight(this.rightWildAnim),
                        this.rightWildAnim.setAnimation(0, P, !0));
                  }),
                  (l.playBigWildWin = function (i) {
                    var t,
                      e,
                      n =
                        this.dataStore.currentGameMode === g.NormalGame ? 4 : 3;
                    this.leftWildAnim &&
                      this.leftWild &&
                      this.leftWild.active &&
                      i >= 2 &&
                      (this._enableHighlight(this.leftWildAnim),
                      this.leftWildAnim.setAnimation(0, P, !0),
                      null == (t = this.leftWildAnim.node) ||
                        t.setPosition(this.leftWildPosition));
                    this.rightWildAnim &&
                      this.rightWild &&
                      this.rightWild.active &&
                      i >= n &&
                      (this._enableHighlight(this.rightWildAnim),
                      this.rightWildAnim.setAnimation(0, P, !0),
                      null == (e = this.rightWildAnim.node) ||
                        e.setPosition(this.rightWildPosition));
                  }),
                  (l.playDefaultMatrixBigWildIdle = function () {
                    this.leftWild && (this.leftWild.active = !0),
                      this.rightWild && (this.rightWild.active = !0),
                      this.playBigWildIdle();
                  }),
                  (l.playBigWildIdle = function () {
                    var i, t;
                    this.leftWild &&
                      this.leftWild.active &&
                      this.leftWildAnim &&
                      (this.leftWildAnim.setAnimation(0, B, !0),
                      null == (i = this.leftWildAnim.node) ||
                        i.setPosition(this.leftWildPosition));
                    this.rightWild &&
                      this.rightWild.active &&
                      this.rightWildAnim &&
                      (this.rightWildAnim.setAnimation(0, B, !0),
                      null == (t = this.rightWildAnim.node) ||
                        t.setPosition(this.rightWildPosition));
                  }),
                  (l._addAnimIdle = function (i) {
                    i.setCompleteListener(function (t) {
                      i.setCompleteListener(function () {});
                      var e = i.node.getPosition().x;
                      v.indexOf(t.animation.name) > -1 &&
                        i &&
                        i.node &&
                        (i.node.setPosition(a(e, 0, 0)),
                        i.setAnimation(0, B, !0));
                    });
                  }),
                  (l._addAnimNearWinIdle = function (i) {
                    i.setCompleteListener(function (t) {
                      if (
                        (i.setCompleteListener(function () {}),
                        v.indexOf(t.animation.name) > -1 && i && i.node)
                      ) {
                        var e = i.node.getPosition().x;
                        i.node.setPosition(a(e, 0, 0)),
                          i.setAnimation(0, E, !1),
                          i.addAnimation(0, D, !0);
                      }
                    });
                  }),
                  (l._getRow = function (i) {
                    return i.findIndex(function (i) {
                      return "K2" === i || "K3" === i;
                    });
                  }),
                  (l._getPosByColRow = function (i, t) {
                    var e = this.config,
                      n = e.TABLE_FORMAT,
                      s = e.SYMBOL_WIDTH,
                      l = e.SYMBOL_HEIGHT,
                      h = -(n.length / 2 - 0.5) * s,
                      d = n[t] / 2 - t - 0.5;
                    return a(h + s * i, d * l, 0);
                  }),
                  (l._getCurrentTrackAnimation = function (i) {
                    var t = i.getCurrent(0);
                    return t ? t.animation : {};
                  }),
                  (l._enableHighlight = function (i) {
                    i && i.node && i.node.emit("ENABLE_HIGHLIGHT_BIG_WILD");
                  }),
                  (l._disableHighlight = function (i) {
                    i && i.node && i.node.emit("DISABLE_HIGHLIGHT_BIG_WILD");
                  }),
                  t
                );
              })(r)).prototype,
              "leftWild",
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
            (I = t(_.prototype, "rightWild", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (c = _))
          ) || c)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigWildSymbol9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (o) {
    "use strict";
    var t, e, n, r, i, l, s, c, h;
    return {
      setters: [
        function (o) {
          (t = o.inheritsLoose), (e = o.createClass);
        },
        function (o) {
          (n = o.cclegacy),
            (r = o._decorator),
            (i = o.sp),
            (l = o.Vec3),
            (s = o.Color),
            (c = o.tween),
            (h = o.Component);
        },
      ],
      execute: function () {
        var u;
        n._RF.push({}, "08ed0e9qoJMMY7SNY7uu0Z5", "BigWildSymbol9881", void 0);
        var C = r.ccclass;
        r.property,
          o(
            "BigWildSymbol9881",
            C("BigWildSymbol9881")(
              (u = (function (o) {
                function n() {
                  for (
                    var t, e = arguments.length, n = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    ((t =
                      o.call.apply(o, [this].concat(n)) ||
                      this)._spineSkeleton = null),
                    (t._tweenColor = void 0),
                    (t.colorSymbol = new s()),
                    (t._currentColor = new l(255, 255, 255)),
                    (t._targetColor = new l(255, 255, 255)),
                    t
                  );
                }
                t(n, o);
                var r = n.prototype;
                return (
                  (r.onLoad = function () {
                    this.node.on(
                      "ENABLE_HIGHLIGHT_BIG_WILD",
                      this.enableHighlight,
                      this
                    ),
                      this.node.on(
                        "DISABLE_HIGHLIGHT_BIG_WILD",
                        this.disableHighlight,
                        this
                      ),
                      this.node.on("RESET_BIG_WILD", this.reset, this),
                      (this._spineSkeleton = this.node.getComponent(
                        i.Skeleton
                      ));
                  }),
                  (r.reset = function () {
                    this._tweenColor && this._tweenColor.stop(),
                      (this._tweenColor = null),
                      (this.currentColor = new l(255, 255, 255));
                  }),
                  (r.tweenColor = function (o, t) {
                    var e = this;
                    void 0 === t && (t = 0),
                      this._tweenColor && this._tweenColor.stop();
                    var n = o ? 80 : 255;
                    t && this.node.active
                      ? (this.convertFromColorToVec3(
                          this._targetColor,
                          new s(n, n, n, 255)
                        ),
                        (this._tweenColor = c(this)
                          .to(t, { currentColor: this._targetColor })
                          .call(function () {
                            e._tweenColor = null;
                          })
                          .start()))
                      : (this._spineSkeleton.color = new s(n, n, n, 255));
                  }),
                  (r.setColor = function (o) {
                    this._spineSkeleton.color = o;
                  }),
                  (r.convertFromVec3ToColor = function (o, t) {
                    (o.r = t.x), (o.g = t.y), (o.b = t.z);
                  }),
                  (r.convertFromColorToVec3 = function (o, t) {
                    (o.x = t.r), (o.y = t.g), (o.z = t.b);
                  }),
                  (r.enableHighlight = function () {
                    this.tweenColor(!1, 0.2);
                  }),
                  (r.disableHighlight = function () {
                    this.tweenColor(!0, 0.2);
                  }),
                  (r.onDestroy = function () {
                    this._tweenColor && this._tweenColor.stop(),
                      (this._tweenColor = null);
                  }),
                  e(n, [
                    {
                      key: "currentColor",
                      get: function () {
                        return this._currentColor;
                      },
                      set: function (o) {
                        (this._currentColor = o),
                          this.convertFromVec3ToColor(
                            this.colorSymbol,
                            this._currentColor
                          ),
                          this.setColor(this.colorSymbol);
                      },
                    },
                  ]),
                  n
                );
              })(h))
            ) || u
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/cc30-thanbaimientay-9881",
  [
    "./Config9881.ts",
    "./CustomType9881.ts",
    "./DataStore9881.ts",
    "./Director9881.ts",
    "./IconLoadingScreen9892.ts",
    "./SlotSoundPlayer9881.ts",
    "./FreeDirector9881.ts",
    "./FreeGameBattle9881.ts",
    "./FreeWriter9881.ts",
    "./IntroFree9881.ts",
    "./JackpotWin9881.ts",
    "./MainDirector9881.ts",
    "./MainWriter9881.ts",
    "./SlotBetHistory9881.ts",
    "./SlotJackpotHistory9881.ts",
    "./TotalWinBattle9881.ts",
    "./TotalWinPanel9881.ts",
    "./TrialButton9881.ts",
    "./WinEffect9881.ts",
    "./Bet9881.ts",
    "./CoinsEffect9881.ts",
    "./ReelBackgroundFree9881.ts",
    "./RotateIcon9881.ts",
    "./SlotButton9881.ts",
    "./SpinTimes9881.ts",
    "./TrialInfoButton9881.ts",
    "./Turbo9881.ts",
    "./UIManager9881.ts",
    "./DotsHistory9881.ts",
    "./ScrollModeItem9881.ts",
    "./SlotBetHistoryDetail9881.ts",
    "./SlotBetSummaryHistory9881.ts",
    "./SlotBetTableHistoryDetail9881.ts",
    "./IntroGame9881.ts",
    "./IntroPage1Anim9881.ts",
    "./IntroPage2Anim9881.ts",
    "./BigWild9881.ts",
    "./BigWildSymbol9881.ts",
    "./LineDrawingPayline9881.ts",
    "./SlotReel9881.ts",
    "./SlotSymbol9881.ts",
    "./SlotSymbolPayline9881.ts",
    "./SlotTable9881.ts",
    "./SlotTableNearWinEffect9881.ts",
    "./SlotTablePayline9881.ts",
    "./SlotTableSoundEffect9881.ts",
    "./StickyWildFree9881.ts",
    "./TableTrailEffect9881.ts",
    "./TrailSymbol9881.ts",
    "./TutorialMgr9881.ts",
    "./TutorialPopup9881.ts",
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
  "chunks:///_virtual/CoinsEffect9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts"],
  function (t) {
    "use strict";
    var e, n, i, o, s, c, r, a;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy),
            (i = t._decorator),
            (o = t.ParticleSystem2D),
            (s = t.Component);
        },
        function (t) {
          (c = t.setOpacity), (r = t.fadeIn), (a = t.fadeOut);
        },
      ],
      execute: function () {
        var u;
        n._RF.push({}, "42c63lC4RtFiKKbL9+bJxLc", "CoinsEffect9881", void 0);
        var f = i.ccclass;
        i.property,
          t(
            "CoinsEffect9881",
            f("CoinsEffect9881")(
              (u = (function (t) {
                function n() {
                  for (
                    var e, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    ((e =
                      t.call.apply(t, [this].concat(i)) || this)._particles =
                      []),
                    e
                  );
                }
                e(n, t);
                var i = n.prototype;
                return (
                  (i.onLoad = function () {
                    this.node.on("START_PARTICLE", this.startParticle, this),
                      this.node.on("STOP_PARTICLE", this.stopParticle, this),
                      (this._particles = this.node.getComponentsInChildren(o));
                  }),
                  (i.startParticle = function (t) {
                    var e = this;
                    void 0 === t && (t = 0.2),
                      c(this.node, 0),
                      (this.node.active = !0),
                      this._particles.forEach(function (n) {
                        c(n.node, 0),
                          n.resetSystem(),
                          e.scheduleOnce(function () {
                            c(n.node, 255);
                          }, t);
                      }),
                      this.scheduleOnce(function () {
                        r(e.node, 0.1);
                      }, t);
                  }),
                  (i.stopParticle = function () {
                    a(this.node, 2),
                      this._particles.forEach(function (t) {
                        return t.stopSystem();
                      });
                  }),
                  n
                );
              })(s))
            ) || u
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Config9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gameCommonUtils.ts"],
  function (_) {
    "use strict";
    var A, I, N, E, T;
    return {
      setters: [
        function (_) {
          A = _.inheritsLoose;
        },
        function (_) {
          (I = _.cclegacy), (N = _._decorator), (E = _.Component);
        },
        function (_) {
          T = _.default;
        },
      ],
      execute: function () {
        var L;
        I._RF.push({}, "af468rmIzpN9bc938GeNwfw", "Config9881", void 0);
        var O = N.ccclass;
        _(
          "Config9881",
          O("Config9881")(
            (L = (function (_) {
              function I() {
                return _.apply(this, arguments) || this;
              }
              return (
                A(I, _),
                (I.prototype.onLoad = function () {
                  this.node.config = {
                    GAME_ID: "9881",
                    JP_PREFIX_EVENT: "9881_",
                    JP_NAMES: ["GRAND"],
                    DEFAULT_BET: "1",
                    BETS: { 1: 500, 2: 1e3, 3: 5e3, 4: 1e4, 5: 5e4, 6: 5e5 },
                    DEFAULT_EXTRA_BET: "0",
                    EXTRA_BETS: { 0: 1 },
                    TOTAL_BET_CREDIT: 25,
                    TREASURE_VALUE_1: ["1", "2", "3", "4"],
                    DEFAULT_TRIAL_JACKPOT: {
                      "9881_1_GRAND": 1e6,
                      "9881_2_GRAND": 2e6,
                      "9881_3_GRAND": 5e6,
                      "9881_4_GRAND": 1e7,
                      "9881_5_GRAND": 2e7,
                      "9881_6_GRAND": 5e7,
                      "9881_7_GRAND": 1e8,
                      "9881_8_GRAND": 2e8,
                      "9881_9_GRAND": 5e8,
                      "9881_a_GRAND": 1e9,
                    },
                    DEFAULT_TRIAL_WALLET: 1e8,
                    TRIAL_BET: "4",
                    TRIAL_EXTRA_BET: "0",
                    MESSAGE_DIALOG: T.getMessageSlot(),
                    DEMONTATION: 250,
                    ACTIVE_SYMBOL: ["8", "18", "38", "68", "168"],
                    BOX_MAP_VALUES: { 100: 1, 200: 2, 400: 3 },
                    RANDOM_ACTIVE_SYMBOL: [
                      ["8"],
                      ["8", "18"],
                      ["8", "18", "38"],
                      ["8", "18", "38", "68"],
                      ["8", "18", "38", "68", "168"],
                    ],
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
                    MUSIC_VOLUME: 1,
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
                    TABLE_FORMAT: [3, 3, 3, 3, 3],
                    TABLE_BUFFER: { TOP: 1, BOT: 1 },
                    ACCEL: 1200,
                    MIN_SPEED: 2e3,
                    MAX_SPEED: 2800,
                    SUPER_SPEED: 3500,
                    SUPER_TURBO: 0.03,
                    TABLE_NORMAL: {
                      TIME: 0.06,
                      DELAY_START: 0,
                      DELAY_STOP: 0,
                      EASING_DISTANCE: 15,
                      EASING_TIME: 0.65,
                      TOTAL_CIRCULAR: 8,
                      STEP_STOP: 12,
                      RATE: 1,
                      IS_TURBO: !1,
                      BLINKS: 2,
                      BLINK_DURATION: 1,
                      ANIMATION_DURATION: 2,
                      EXPECT_PAYLINE_TIME: 2,
                      EXPECT_PAYLINE_ALLWAYS_TIME: 2,
                      MIN_TIME_EACH_PAYLINE: 1,
                      NEAR_WIN_DELAY: 1,
                      NEAR_WIN_DELAY_LAST_REEL: 1,
                    },
                    TABLE_TURBO: {
                      TIME: 0.05,
                      DELAY_START: 0,
                      DELAY_STOP: 0,
                      EASING_DISTANCE: 15,
                      EASING_TIME: 0.08,
                      TOTAL_CIRCULAR: 6,
                      STEP_STOP: 6,
                      RATE: 2,
                      IS_TURBO: !0,
                      BLINKS: 1,
                      BLINK_DURATION: 1,
                      ANIMATION_DURATION: 1,
                      EXPECT_PAYLINE_TIME: 2,
                      EXPECT_PAYLINE_ALLWAYS_TIME: 2,
                      MIN_TIME_EACH_PAYLINE: 1,
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
                        "9",
                        "K2",
                        "K2",
                        "K2",
                      ],
                      ["2", "3", "4", "5", "6", "7", "8", "9"],
                      [
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "K1",
                        "K1",
                        "K1",
                      ],
                      ["2", "3", "4", "5", "6", "7", "8", "9"],
                      [
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "K3",
                        "K3",
                        "K3",
                      ],
                    ],
                    FREE_SYMBOLS: [
                      ["2", "3", "4", "5", "6", "7", "8", "9"],
                      [
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "K2",
                        "K2",
                        "K2",
                      ],
                      [
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "K1",
                        "K1",
                        "K1",
                      ],
                      [
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "K3",
                        "K3",
                        "K3",
                      ],
                      ["2", "3", "4", "5", "6", "7", "8", "9"],
                    ],
                    EXCEPTION_SYMBOLS: [],
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
                      "K1",
                      "K2",
                      "K3",
                    ],
                    SYMBOL_WIDTH: 165,
                    SYMBOL_HEIGHT: 163,
                    PAY_LINE_LENGTH: 20,
                    PAY_LINE_ALLWAYS: !1,
                    SHOW_WINLINE_FRAME: !1,
                    SHOW_DRAWING_LINE: !0,
                    PAY_LINE_MATRIX: {
                      1: [1, 1, 1, 1, 1],
                      2: [0, 0, 0, 0, 0],
                      3: [2, 2, 2, 2, 2],
                      4: [0, 1, 2, 1, 0],
                      5: [2, 1, 0, 1, 2],
                      6: [1, 0, 1, 0, 1],
                      7: [1, 2, 1, 2, 1],
                      8: [0, 1, 0, 1, 0],
                      9: [2, 1, 2, 1, 2],
                      10: [1, 0, 0, 0, 1],
                      11: [1, 2, 2, 2, 1],
                      12: [2, 2, 1, 2, 2],
                      13: [0, 0, 1, 0, 0],
                      14: [2, 1, 1, 1, 2],
                      15: [0, 1, 1, 1, 0],
                      16: [0, 2, 0, 2, 0],
                      17: [2, 0, 2, 0, 2],
                      18: [1, 1, 0, 1, 1],
                      19: [1, 1, 2, 1, 1],
                      20: [2, 2, 0, 2, 2],
                    },
                    BEAUTY_MATRIX: [
                      "6,3,4,7,3,3,8,9,8,5,5,7,2,5,6",
                      "9,K2,3,2,7,6,4,8,K1,6,9,8,5,K3,6",
                      "9,8,3,4,9,3,4,7,2,5,6,2,5,7,6",
                    ],
                    HAS_GAME_EVENT: !1,
                    SERVER_VERSION: 1,
                    TUTORIAL_TEXT: {
                      CLICK_SPIN_1: "Bấm quay để bắt đầu chơi.",
                      INFO_BET_1:
                        "Xét trên dòng 1 đang cược 5K, có 3 \nbiểu tượng Eva và hệ số thưởng là\n 40 thì sẽ được trả thưởng\n là 5K x 40 = 200.000.",
                      INTRO_JACKPOT:
                        "Đây là hũ xu của game, mỗi lần quay sẽ góp 1 phần tiền cược vào hũ.",
                      CONTINUE_SPIN: "Thử thêm lần nữa nào.",
                      CLICK_BET:
                        "Không thắng được gì. Thử tăng mức cược lên xem sao.",
                      CLICK_TURBO: "Bấm vào đây để tăng tốc.",
                      WIN_BONUS:
                        "Tìm đủ 3 biểu tượng Bonus, bạn sẽ \nbiết được đường vào hầm bí mật.",
                      BONUS_RULE:
                        "Bạn có 3 lần mở rương với các phần thưởng khác nhau. Hãy chọn nào.",
                      WIN_SCATTER:
                        "Tìm đủ 3 biểu tượng Free bạn sẽ bắt được tín hiệu trợ giúp.",
                      SPIN_TIMES: "Số lần quay còn lại sẽ được cập nhật ở đây.",
                      CLICK_AUTO_SPIN: "Nhấn giữ để tự động quay.",
                      START_TRIAL:
                        "Kết thúc hướng dẫn,\ntiếp tục ở chế độ chơi thử.",
                      B2R: "Kết thúc chơi thử\nvà đang ở chế độ chơi thật.",
                      ASK_B2R: "Quay về chế độ chơi thật\nđể săn hũ.",
                    },
                    MAX_PLAY_DEMO: 20,
                  };
                }),
                I
              );
            })(E))
          ) || L
        );
        I._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CustomType9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, r, i, n, a;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor), (r = t.initializerDefineProperty);
        },
        function (t) {
          (i = t.cclegacy), (n = t._decorator), (a = t.SpriteFrame);
        },
      ],
      execute: function () {
        var o, l, u, s, p, c, b, f, y, h, m;
        i._RF.push({}, "145e05RmDJGmabXJ0KfoNok", "CustomType9881", void 0);
        var S = n.ccclass,
          d = n.property;
        t(
          "ButtonState9881",
          ((o = S("ButtonState9881")),
          (l = d({ type: a })),
          (u = d({ type: a })),
          (s = d({ type: a })),
          (p = d({ type: a })),
          o(
            ((f = e(
              (b = function () {
                r(this, "normalState", f, this),
                  r(this, "pressedState", y, this),
                  r(this, "hoverState", h, this),
                  r(this, "disableState", m, this);
              }).prototype,
              "normalState",
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
            (y = e(b.prototype, "pressedState", [u], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (h = e(b.prototype, "hoverState", [s], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = e(b.prototype, "disableState", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (c = b))
          ) || c)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DataStore9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DataStore.ts",
    "./CustomEnum.ts",
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
          n = t.DataStore;
        },
        function (t) {
          o = t.StateGameMode;
        },
      ],
      execute: function () {
        var s;
        e._RF.push({}, "bc4d1HuMrVIvK87Qzg8N2G8", "DataStore9881", void 0);
        var u = r.ccclass;
        t(
          "DataStore9881",
          u("DataStore9881")(
            (s = (function (t) {
              function e() {
                for (
                  var a, e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                return (
                  ((a = t.call.apply(t, [this].concat(r)) || this).winRate = 0),
                  (a.isUpdatedTrialWallet = !1),
                  a
                );
              }
              a(e, t);
              var r = e.prototype;
              return (
                (r.formatData = function (t) {
                  var a = this.config,
                    e = a.NORMAL_TABLE_FORMAT,
                    r = a.FREE_TABLE_FORMAT,
                    n = t.matrix,
                    s = t.matrix0,
                    u = t.normalGameMatrix,
                    c = t.freeGameMatrix,
                    l = t.payLines,
                    m = t.state,
                    h = t.eventData,
                    p = t.winAmountQuest,
                    f = t.winAmountEvent,
                    v = t.isTrialMode,
                    d = t.nMx0,
                    x = t.sFt,
                    g = t.fGb,
                    y = e;
                  return (
                    m == o.FreeGame && (y = r),
                    s && (t.matrix0 = this.convertMatrix(s, y)),
                    d && (t.normalMatrix0 = this.convertMatrix(d, y)),
                    n
                      ? ((t.matrix = this.convertMatrix(n, y)),
                        (t.bigWild = this.getBigWild(t.matrix)))
                      : c
                      ? (t.matrix = this.convertMatrix(c, y))
                      : u && (t.matrix = this.convertMatrix(u, y)),
                    t.payLines &&
                      ((t.payLines = this.convertPayLine(l)),
                      (t.payLines = t.payLines.sort(function (t, a) {
                        return (
                          Number(a.payLineWinAmount) -
                          Number(t.payLineWinAmount)
                        );
                      }))),
                    x &&
                      g &&
                      (t.freeBattleData = this.formatFreeGameFeature(x, g)),
                    h && !v && this.questData.updateQuestData(h, p, f),
                    (this.playSession = t),
                    i("%c run data-update ", "color: red", this.playSession),
                    t
                  );
                }),
                (r.formatFreeGameFeature = function (t, a) {
                  for (
                    var e = [],
                      r = 1,
                      i = "K2" == a,
                      n = {
                        C1: "Heo Cơ",
                        C2: "Dôi Heo",
                        C3: "Ba Đôi Thông Nhỏ",
                        C4: "Ba Đôi Thông Lớn",
                        C5: "Tứ Quý Nhỏ",
                        C6: "Tứ Quý Nhỏ Lớn",
                        C7: "Bốn Đôi Thông",
                      },
                      o = [1, 2, 4, 8],
                      s = t.split(","),
                      u = 0;
                    u < s.length;
                    u++
                  ) {
                    var c = s[u],
                      l = n[c];
                    (r = o[u]),
                      e.push({
                        cardID: c,
                        cardName: l,
                        multiply: r,
                        isRabbit: i,
                      }),
                      (i = !i);
                  }
                  return e;
                }),
                (r.getBigWild = function (t) {
                  for (var a = [], e = 0; e < t.length; e++)
                    (t[e].includes("K2") || t[e].includes("K3")) && a.push(e);
                  return a;
                }),
                e
              );
            })(n))
          ) || s
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Director9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./Director.ts"],
  function (e) {
    "use strict";
    var t, r, a, i, n, o, c, s;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (a = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (n = e.cclegacy), (o = e._decorator), (c = e.Node);
        },
        function (e) {
          s = e.Director;
        },
      ],
      execute: function () {
        var u, l, m, p, h;
        n._RF.push({}, "2522dEh+01L4IVzsfOUE7C0", "Director9881", void 0);
        var d = o.ccclass,
          f = o.property;
        e(
          "Director9881",
          ((u = d("Director9881")),
          (l = f({ type: c })),
          u(
            ((h = t(
              (p = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, n = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    n[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    a(t, "introGame", h, i(t)),
                    (t.joinGameSuccessCB = null),
                    t
                  );
                }
                r(t, e);
                var n = t.prototype;
                return (
                  (n._joinGameSuccess = function (t) {
                    var r = t.hasOwnProperty("dataResume"),
                      a = t.extendData.metaDataPromotion;
                    r || a
                      ? this.eventManager.emit("HIDE_INTRO_GAME")
                      : this.eventManager.emit("SHOW_INTRO_BUTTONS"),
                      e.prototype._joinGameSuccess.call(this, t);
                  }),
                  (n.newGameMode = function (t, r) {
                    var a = t.name,
                      i = t.data;
                    this.gameModes[a] && this.guiMgr.changeGameMode(a),
                      e.prototype.newGameMode.call(
                        this,
                        { name: a, data: i },
                        r
                      );
                  }),
                  (n.resumeGameMode = function (t, r) {
                    var a = t.name;
                    this.gameModes[a] && this.guiMgr.changeGameMode(a),
                      e.prototype.resumeGameMode.call(
                        this,
                        { name: a },
                        function () {
                          r && r();
                        }
                      );
                  }),
                  t
                );
              })(s)).prototype,
              "introGame",
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
            (m = p))
          ) || m)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DotsHistory9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./DotsHistory.ts"],
  function (t) {
    "use strict";
    var o, i, e, r, s, n, c, a;
    return {
      setters: [
        function (t) {
          (o = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy), (n = t._decorator), (c = t.Node);
        },
        function (t) {
          a = t.DotsHistory;
        },
      ],
      execute: function () {
        var p, l, u, h, f;
        s._RF.push({}, "c636cewdy1Od5Jx7rYRubA9", "DotsHistory9881", void 0);
        var y = n.ccclass,
          D = n.property;
        t(
          "DotsHistory9881",
          ((p = y("DotsHistory9881")),
          (l = D({ type: c })),
          p(
            ((f = o(
              (h = (function (t) {
                function o() {
                  for (
                    var o, i = arguments.length, s = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    s[n] = arguments[n];
                  return (
                    (o = t.call.apply(t, [this].concat(s)) || this),
                    e(o, "positionCircles", f, r(o)),
                    o
                  );
                }
                return (
                  i(o, t),
                  (o.prototype.showDots = function (t) {
                    var o = this;
                    (this.jackpotDot.active = !1), (this.freeDot.active = !1);
                    var i = [];
                    t.totalJpWinAmount &&
                      ((this.jackpotDot.active = !0), i.push(this.jackpotDot)),
                      (t.totalFreeWinAmount || t.freeGameTotal) &&
                        ((this.freeDot.active = !0), i.push(this.freeDot)),
                      i.length > 0 &&
                        this.positionCircles.length > 0 &&
                        i.forEach(function (t, i) {
                          var e = o.positionCircles[i].position;
                          t.setPosition(e);
                        });
                  }),
                  o
                );
              })(a)).prototype,
              "positionCircles",
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
            (u = h))
          ) || u)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeDirector9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotDirector.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, s, o, a, r, c, l;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy), (a = t._decorator), (r = t.Node);
        },
        function (t) {
          c = t.SlotDirector;
        },
        function (t) {
          l = t.SlotSceneType;
        },
      ],
      execute: function () {
        var u, h, _, p, S;
        o._RF.push({}, "c002djmo9dBLagPO67zFeBN", "FreeDirector9881", void 0);
        var f = a.ccclass,
          g = a.property;
        t(
          "FreeDirector9881",
          ((u = f("FreeDirector9881")),
          (h = g({ type: r })),
          u(
            ((S = i(
              (p = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    n(i, "stickyWild", S, s(i)),
                    (i._callbackForceExit = null),
                    i
                  );
                }
                e(i, t);
                var o = i.prototype;
                return (
                  (o.ready = function (t) {
                    var i = this,
                      e = t.matrix,
                      n = t.isResume,
                      s = this.dataStore.playSession.isFinished;
                    if (
                      (e &&
                        (this.table.emit("CHANGE_MATRIX", { matrix: e }),
                        this.table.emit("CLEAR_PAYLINES")),
                      n &&
                        this.stickyWild &&
                        this.stickyWild.emit("PLAY_ANIM_RESUME"),
                      this.slotButton &&
                        !1 !== s &&
                        ((this.slotButton.active = !0),
                        this.slotButton.emit("SPIN_SHOW"),
                        this.slotButton.emit("SPIN_ENABLE"),
                        this.slotButton.emit("STOP_AUTO_SPIN_HIDE")),
                      this.isAlwaysAutoSpin)
                    ) {
                      var o = this.dataStore.playSession,
                        a = o.freeGameRemain,
                        r = o.freeGame,
                        c = a > 0 ? a : r;
                      c > 0 &&
                        (this.spinTimes &&
                          ((this.spinTimes.active = this.isAlwaysAutoSpin),
                          this.spinTimes.emit("UPDATE_SPINTIMES", c)),
                        this.scheduleOnce(function () {
                          i.runAction("SpinByTimes", c);
                        }, 1.5));
                    }
                    this.soundPlayer && this.soundPlayer.playMainBGM(),
                      this.guiMgr.onIngameEvent(null, "ENTER_GAME_MODE"),
                      (this.stickyWild.active = !0);
                  }),
                  (o.switchMode = function () {
                    var i = this;
                    t.prototype.switchMode.call(this),
                      this.dataStore.isTrialMode ||
                        this.scheduleOnce(function () {
                          var t =
                            i.config.MESSAGE_DIALOG.B2R ||
                            i.config.TUTORIAL_TEXT.B2R;
                          i.guiMgr.showTutorialPopup(t, !1);
                        }, 0.1);
                  }),
                  (o._spinClick = function (i) {
                    if (
                      (void 0 === i && (i = []), this.fsm.can("actionTrigger"))
                    ) {
                      this.guiMgr.hideAnimWin(),
                        this.guiMgr.stopAllWinLineSound();
                      var e = this.dataStore.playSession.winAmountPS;
                      e && this.guiMgr.updateWinAmount(e, 0),
                        t.prototype._spinClick.call(this, i);
                    }
                  }),
                  (o._showJackpotPayLine = function (t) {
                    var i = this;
                    this.hasPayline
                      ? this.table.emit("SHOW_JACKPOT_PAYLINE", function () {
                          i.guiMgr.onIngameEvent(
                            null,
                            "ON_FINISH_JACKPOT_PAYLINE"
                          ),
                            i.executeNextScript(t);
                        })
                      : this.executeNextScript(t);
                  }),
                  (o._showJackpotPayLine_2 = function (t) {
                    var i = this;
                    this.table.emit("SHOW_JACKPOT_PAYLINE", function () {
                      i.guiMgr.onIngameEvent(null, "ON_FINISH_JACKPOT_PAYLINE"),
                        i.executeNextScript(t);
                    });
                  }),
                  (o._setupBigWild = function (t, i) {
                    this.table.emit("ON_SETUP_BIGWILD", i),
                      this.executeNextScript(t);
                  }),
                  (o._displayBigWild = function (t, i) {
                    (this.stickyWild.active = !!i),
                      this.table.emit("ON_DISPLAY_BIGWILD", i),
                      this.executeNextScript(t);
                  }),
                  (o._showBigWildWinLine = function (t) {
                    this.table.emit("SHOW_BIG_WILD_WIN_LINE"),
                      this.executeNextScript(t);
                  }),
                  (o._playSoundWinLine = function (t, i) {
                    var e = "WIN_1";
                    i > 0 && i < 1 && (e = "WIN_1"),
                      i >= 1 && i < 3 && (e = "WIN_2"),
                      i >= 3 && i < 10 && (e = "WIN_3"),
                      i >= 10 && i < 20 && (e = "WIN_4"),
                      this.soundPlayer && this.soundPlayer.playSfx(e);
                    var n = "Win_Lv1";
                    i < 1 && (n = "Win_Lv1"),
                      i >= 1 && i < 3 && (n = "Win_Lv2"),
                      i >= 3 && i < 10 && (n = "Win_Lv3"),
                      i >= 10 && i < 20 && (n = "Win_Lv4"),
                      this.guiMgr.playAnimWin(n),
                      this.executeNextScript(t);
                  }),
                  (o._clearWinAmount = function (t) {
                    this.guiMgr.fadeOutWinAmount(),
                      this.soundPlayer.stopSfx("WIN_1"),
                      this.soundPlayer.stopSfx("WIN_2"),
                      this.soundPlayer.stopSfx("WIN_3"),
                      this.soundPlayer.stopSfx("WIN_4"),
                      this.executeNextScript(t);
                  }),
                  (o._showTotalBattle = function (t, i) {
                    this.guiMgr.showTotalBattle(i), this.executeNextScript(t);
                  }),
                  (o._hideTotalBattle = function (t, i) {
                    var e = this;
                    this.guiMgr.hideTotalBattle(i, function () {
                      e.executeNextScript(t);
                    });
                  }),
                  (o._showNormalPayline = function (t) {
                    var i = this;
                    this.hasPayline
                      ? this.dataStore.gameSpeed ===
                        this.config.GAME_SPEED.INSTANTLY
                        ? (this.table.emit(
                            "SHOW_ALL_NORMAL_PAYLINES",
                            function () {}
                          ),
                          this.executeNextScript(t))
                        : this.table.emit(
                            "SHOW_ALL_NORMAL_PAYLINES",
                            function () {
                              i.executeNextScript(t);
                            }
                          )
                      : this.executeNextScript(t);
                  }),
                  (o._blinkAllPaylines_2 = function (t) {
                    this.table.emit(
                      "BLINK_ALL_NORMAL_PAYLINES",
                      function () {}
                    ),
                      this.executeNextScript(t);
                  }),
                  (o._showBigWin = function (t, i) {
                    var e = this,
                      n = i.name,
                      s = i.matrix,
                      o = this.dataStore.playSession,
                      a = o.winType,
                      r = o.bigWinConfig,
                      c = o.bigwinAmount,
                      l = o.freeBattleData;
                    if (!a) return this.executeNextScript(t);
                    var u = {
                      winType: a,
                      bigWinConfig: r,
                      winAmount: c,
                      currentBetData: this.dataStore.betData.getTotalBet(),
                      freeBattleData: l,
                      matrix: s,
                    };
                    this.guiMgr.showCutScene(n, u, function () {
                      e.executeNextScript(t);
                    });
                  }),
                  (o._showBigWin_2 = function (t, i) {
                    var e = this,
                      n = i.matrix,
                      s = this.dataStore.playSession,
                      o = s.winType,
                      a = s.bigWinConfig,
                      r = s.bigwinAmount,
                      c = s.freeBattleData;
                    if (!o) return this.executeNextScript(t);
                    var u = {
                      winType: o,
                      bigWinConfig: a,
                      winAmount: r,
                      currentBetData: this.dataStore.betData.getTotalBet(),
                      freeBattleData: c,
                      matrix: n,
                    };
                    this.guiMgr.showCutScene(l.BigWin, u, function () {
                      e.executeNextScript(t);
                    });
                  }),
                  (o.forceToExit = function (i) {
                    var e = this;
                    (this._callbackForceExit = function () {
                      i && i(), (e._callbackForceExit = null);
                    }),
                      t.prototype.forceToExit.call(this, [
                        { command: "_gameReset" },
                      ]),
                      this.isSpinning
                        ? this.fastToResultClick()
                        : this.executeNextScript(this.exitScript);
                  }),
                  (o._gameReset = function () {
                    this.unscheduleAllCallbacks(),
                      this.skipAllEffects(),
                      this.stopAutoSpinClick(),
                      this._updateSpinTimes([], 0),
                      this.node.resetCallbackWhenHide(),
                      this.table.emit("CLEAR_PAYLINES"),
                      this._callbackForceExit(),
                      (this._callbackForceExit = null),
                      this.fsm.reboot(),
                      this.fsm.gameStart(),
                      this.table.emit("FORCE_RESET_TABLE"),
                      (this.forceToExitMode = !1),
                      this.node.exit();
                  }),
                  i
                );
              })(c)).prototype,
              "stickyWild",
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
            (_ = p))
          ) || _)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeGameBattle9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotUIScene.ts"],
  function (t) {
    "use strict";
    var e, n, i, a, l, o, s, r, u, _, c;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (o = t._decorator),
            (s = t.Node),
            (r = t.sp),
            (u = t.CCInteger),
            (_ = t.tween);
        },
        function (t) {
          c = t.SlotUIScene;
        },
      ],
      execute: function () {
        var d, h, y, m, p, A, C, b, f, w, S, O, T, v, B, I, L, P, E;
        l._RF.push({}, "53ea9VTEP9ELIgRiMpRyHJR", "FreeGameBattle9881", void 0);
        var M = o.ccclass,
          W = o.property,
          R = {
            C1: "Mot_Con_Heo",
            C2: "Hai_Con_Heo",
            C3: "Ba_Doi_Thong_Nho",
            C4: "Ba_Doi_Thong_Lon",
            C5: "Tu_Quy_Nho",
            C6: "Tu_Quy_Lon",
            C7: "Bon_Doi_Thong_Nho",
            C8: "Bon_Doi_Thong_Lon",
          },
          k = {
            C1_RABBIT: "VO_THO_1",
            C2_RABBIT: "VO_THO_2",
            C3_RABBIT: "VO_THO_3",
            C4_RABBIT: "VO_THO_4",
            C5_RABBIT: "VO_THO_5",
            C6_RABBIT: "VO_THO_6",
            C7_RABBIT: "VO_THO_7",
            C8_RABBIT: "VO_THO_8",
            C1_SWALLOW: "VO_EN_1",
            C2_SWALLOW: "VO_EN_2",
            C3_SWALLOW: "VO_EN_3",
            C4_SWALLOW: "VO_EN_4",
            C5_SWALLOW: "VO_EN_5",
            C6_SWALLOW: "VO_EN_6",
            C7_SWALLOW: "VO_EN_7",
            C8_SWALLOW: "VO_EN_8",
          },
          x = "lobby_Start",
          N = "lobby_Idle",
          V = "rabbit_Attack",
          g = "rabbit_Counter",
          D = "rabbit_Idle",
          H = "rabbit_Win_Start",
          z = "rabbit_Win_Immediately",
          F = "rabbit_Win_Idle",
          U = "rabbit_Win_End",
          G = "swallow_Attack",
          Q = "swallow_Counter",
          Y = "swallow_Idle",
          X = "swallow_Win_Start",
          j = "swallow_Win_Immediately",
          J = "swallow_Win_Idle",
          q = "swallow_Win_End";
        t(
          "FreeGameBattle9881",
          ((d = M("FreeGameBattle9881")),
          (h = W(s)),
          (y = W(r.Skeleton)),
          (m = W(r.Skeleton)),
          (p = W(r.Skeleton)),
          (A = W(r.Skeleton)),
          (C = W(r.Skeleton)),
          (b = W(r.Skeleton)),
          (f = W({ type: u, override: !0 })),
          d(
            ((O = e(
              (S = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, l = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    l[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(l)) || this),
                    i(e, "overlay", O, a(e)),
                    i(e, "battleIntro", T, a(e)),
                    i(e, "battleAnim", v, a(e)),
                    i(e, "animCard_1", B, a(e)),
                    i(e, "animCard_2", I, a(e)),
                    i(e, "animMultiply_1", L, a(e)),
                    i(e, "animMultiply_2", P, a(e)),
                    i(e, "sceneType", E, a(e)),
                    (e.tweenBattle = null),
                    (e.tweenShowCard = null),
                    (e.tweenAnimWin = null),
                    (e.tweenMultiply = null),
                    (e.canExit = !1),
                    (e.countRabbitAttack = 0),
                    e
                  );
                }
                n(e, t);
                var l = e.prototype;
                return (
                  (l.onLoad = function () {
                    var e = this;
                    t.prototype.onLoad.call(this),
                      (this.battleIntro.node.active = !1), //!test
                      (window._testBattle = function () {
                        e.play(
                          {
                            freeBattleData: [
                              {
                                cardID: "C2",
                                cardName: "Dôi Heo",
                                multiply: 1,
                                isRabbit: !0,
                              },
                              {
                                cardID: "C5",
                                cardName: "Tứ Quý Nhỏ",
                                multiply: 2,
                                isRabbit: !1,
                              },
                              {
                                cardID: "C6",
                                cardName: "Tứ Quý Nhỏ Lớn",
                                multiply: 4,
                                isRabbit: !0,
                              },
                            ],
                          },
                          function () {}
                        );
                      }),
                      (this.node.active = !1);
                  }),
                  (l.show = function () {
                    (this.node.active = !0), this.setOpacity(this.node, 255);
                  }),
                  (l.enter = function () {
                    var t = this;
                    (this.countRabbitAttack = 0),
                      this._resetAll(),
                      (this.canExit = !1);
                    var e = this.content.freeBattleData,
                      n = R[e[0].cardID];
                    this.battleAnim.setSkin(n),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("VO_REFEREE_1"),
                      this.soundPlayer &&
                        this.soundPlayer.playMusic("BGM_BATTLE"),
                      this.tweenBattle && this.tweenBattle.stop(),
                      (this.tweenBattle = _(this.node)
                        .call(function () {
                          (t.canExit = !0),
                            (t.battleIntro.node.active = !0),
                            t.battleIntro.setAnimation(
                              0,
                              "Battle_Card_Start",
                              !1
                            );
                        })
                        .delay(2)
                        .call(function () {
                          t.soundPlayer &&
                            t.soundPlayer.playSfx("START_FEATURE"),
                            (t.overlay.active = !0),
                            (t.battleIntro.node.active = !1),
                            (t.battleAnim.node.active = !0),
                            t.battleAnim.setAnimation(0, x, !1),
                            t.battleAnim.addAnimation(0, N, !0);
                        })
                        .delay(1));
                    for (
                      var i = function (n) {
                          var i = e[n].multiply;
                          t.tweenBattle
                            .call(function () {
                              t.animShowCard(e[n], n);
                            })
                            .delay(8 == i ? 2.5 : 4);
                        },
                        a = 0;
                      a < e.length;
                      a++
                    )
                      i(a);
                    this.tweenBattle
                      .call(function () {
                        t.soundPlayer &&
                          t.soundPlayer.stopSfx("VO_THO_EMOTION_1"),
                          t.soundPlayer &&
                            t.soundPlayer.stopSfx("VO_EN_EMOTION_1"),
                          t.playAnimWin(e[e.length - 1]);
                      })
                      .delay(2)
                      .call(function () {
                        (t.tweenBattle = null), t.exit();
                      })
                      .start();
                  }),
                  (l.animShowCard = function (t, e) {
                    var n = t.cardID,
                      i = t.multiply,
                      a = t.isRabbit,
                      l = R[n];
                    a && this.countRabbitAttack++,
                      this.soundPlayer && this.soundPlayer.playSfx("DRAW_CARD"),
                      this.playAnimShowMultiply(i),
                      0 == e
                        ? this.firstAttack(n, l, a, i)
                        : this.nextAttack(n, l, a, i);
                  }),
                  (l.firstAttack = function (t, e, n, i) {
                    var a = this,
                      l = e;
                    if ("C4" == t || "C6" == t || "C8" == t) {
                      var o = t;
                      "C4" == t && (o = "C3"),
                        "C6" == t && (o = "C5"),
                        "C8" == t && (o = "C7"),
                        (l = R[o]);
                    }
                    this.battleAnim.setSkin(l),
                      this.battleAnim.setSlotsToSetupPose(),
                      this.animCard_1.setSkin(l),
                      this.animCard_2.setSkin(l),
                      (this.animCard_1.node.active = !0),
                      this.animCard_1.setAnimation(0, n ? V : G, !1),
                      this.battleAnim.setAnimation(0, n ? V : G, !1),
                      this.tweenShowCard && this.tweenShowCard.stop(),
                      (this.tweenShowCard = _(this)
                        .delay(0.9)
                        .call(function () {
                          var e = t + (n ? "_RABBIT" : "_SWALLOW");
                          a.soundPlayer && a.soundPlayer.playSfx("CARD_HIT"),
                            a.soundPlayer && a.soundPlayer.playSfx(k[e]);
                        })
                        .delay(1.6)
                        .call(function () {
                          (a.animCard_1.node.active = !1),
                            (a.animCard_2.node.active = !0),
                            a.animCard_2.setAnimation(0, n ? D : Y, !0),
                            a.battleAnim.setAnimation(0, n ? D : Y, !0),
                            (a.tweenShowCard = null);
                        })
                        .start());
                  }),
                  (l.nextAttack = function (t, e, n, i) {
                    var a = this,
                      l = e;
                    this.battleAnim.setSkin(l),
                      this.battleAnim.setSlotsToSetupPose(),
                      this.animCard_1.setSkin(e),
                      (this.animCard_1.node.active = !0),
                      (this.animCard_2.node.active = !0),
                      this.battleAnim.setAnimation(0, n ? g : Q, !1),
                      this.animCard_1.setAnimation(0, n ? V : G, !1),
                      this.animCard_2.setAnimation(0, n ? g : Q, !1),
                      this.tweenShowCard && this.tweenShowCard.stop(),
                      (this.tweenShowCard = _(this)
                        .delay(0.9)
                        .call(function () {
                          var e = t + (n ? "_RABBIT" : "_SWALLOW");
                          a.soundPlayer &&
                            a.soundPlayer.playSfx("CARD_STRONG_HIT"),
                            a.soundPlayer && a.soundPlayer.playSfx(k[e]);
                        })
                        .delay(1.5)
                        .call(function () {
                          var t = n ? "VO_THO_EMOTION_2" : "VO_END_EMOTION_2";
                          a.soundPlayer && a.soundPlayer.playSfx(t);
                        })
                        .delay(0.1)
                        .call(function () {
                          i < 8 && a.battleAnim.setAnimation(0, n ? D : Y, !0),
                            a.animCard_2.setSkin(e),
                            a.animCard_2.setAnimation(0, n ? D : Y, !0),
                            (a.animCard_1.node.active = !1),
                            (a.tweenShowCard = null);
                        })
                        .start());
                  }),
                  (l.playAnimWin = function (t) {
                    var e = this,
                      n = t.isRabbit,
                      i = t.multiply,
                      a = n ? H : X;
                    8 == i && (a = n ? z : j),
                      this.battleAnim.setAnimation(0, a, !1),
                      this.tweenAnimWin && this.tweenAnimWin.stop(),
                      (this.tweenAnimWin = _(this)
                        .delay(0.5)
                        .call(function () {
                          var t = n ? "VO_THO_EMOTION_1" : "VO_EN_EMOTION_1";
                          e.soundPlayer && e.soundPlayer.playSfx(t);
                        })
                        .delay(0.5)
                        .call(function () {
                          var t = n ? "VO_REFEREE_2" : "VO_REFEREE_3";
                          e.battleAnim.setAnimation(0, n ? F : J, !1),
                            e.soundPlayer && e.soundPlayer.playSfx(t);
                        })
                        .call(function () {
                          e.battleAnim.setAnimation(0, n ? U : q, !1),
                            (e.tweenAnimWin = null);
                        })
                        .start());
                  }),
                  (l.playAnimShowMultiply = function (t) {
                    var e = this;
                    if (1 != t) {
                      var n = "x" + t;
                      this.animMultiply_1.setSkin(n),
                        (this.animMultiply_1.node.active = !0),
                        this.animMultiply_1.setAnimation(0, "Counter", !1),
                        this.tweenMultiply && this.tweenMultiply.stop(),
                        (this.tweenMultiply = _(this)
                          .delay(1)
                          .call(function () {
                            e.animMultiply_2.node.active = !1;
                          })
                          .delay(0.05)
                          .call(function () {
                            e.soundPlayer &&
                              e.soundPlayer.playSfx(e._getSoundMul(t)),
                              e.soundPlayer &&
                                e.soundPlayer.playSfx(e._getSoundClause(t));
                          })
                          .delay(1.75)
                          .call(function () {
                            (e.animMultiply_1.node.active = !1),
                              (e.animMultiply_2.node.active = !0),
                              e.animMultiply_2.setSkin(n),
                              e.animMultiply_2.setAnimation(0, "Idle", !0);
                          })
                          .start());
                    }
                  }),
                  (l.exit = function () {
                    this.canExit &&
                      ((this.canExit = !1),
                      this._resetAll(),
                      this.node.emit("STOP"),
                      this.callback && this.callback(),
                      (this.callback = null),
                      (this.node.active = !1));
                  }),
                  (l.skip = function () {
                    this.node.active &&
                      ((this.canExit = !0),
                      (this.callback = null),
                      this.exit());
                  }),
                  (l._getSoundMul = function (t) {
                    return 1 == t
                      ? "MULTIPLY_1"
                      : 2 == t
                      ? "MULTIPLY_2"
                      : 4 == t
                      ? "MULTIPLY_3"
                      : "MULTIPLY_4";
                  }),
                  (l._getSoundClause = function (t) {
                    return 2 == t
                      ? "APPLAUSE_1_X2"
                      : 4 == t
                      ? "APPLAUSE_2_X4"
                      : "APPLAUSE_3_X8";
                  }),
                  (l._resetAll = function () {
                    (this.overlay.active = !1),
                      this.stopAllBattleTween(),
                      this.battleIntro.setCompleteListener(function () {}),
                      this.battleAnim.setCompleteListener(function () {}),
                      this.animCard_1.setCompleteListener(function () {}),
                      this.animCard_2.setCompleteListener(function () {}),
                      this.animMultiply_1.setCompleteListener(function () {}),
                      this.animMultiply_2.setCompleteListener(function () {}),
                      (this.battleIntro.node.active = !1),
                      (this.battleAnim.node.active = !1),
                      (this.animCard_1.node.active = !1),
                      (this.animCard_2.node.active = !1),
                      (this.animMultiply_1.node.active = !1),
                      (this.animMultiply_2.node.active = !1);
                  }),
                  (l.stopAllBattleTween = function () {
                    this.tweenBattle && this.tweenBattle.stop(),
                      (this.tweenBattle = null),
                      this.tweenShowCard && this.tweenShowCard.stop(),
                      (this.tweenShowCard = null),
                      this.tweenMultiply && this.tweenMultiply.stop(),
                      (this.tweenMultiply = null),
                      this.tweenAnimWin && this.tweenAnimWin.stop(),
                      (this.tweenAnimWin = null);
                  }),
                  (l.onDestroy = function () {
                    this.stopAllBattleTween();
                  }),
                  e
                );
              })(c)).prototype,
              "overlay",
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
            (T = e(S.prototype, "battleIntro", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = e(S.prototype, "battleAnim", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = e(S.prototype, "animCard_1", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(S.prototype, "animCard_2", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(S.prototype, "animMultiply_1", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = e(S.prototype, "animMultiply_2", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = e(S.prototype, "sceneType", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 98;
              },
            })),
            (w = S))
          ) || w)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeWriter9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotGameWriter.ts",
    "./CustomEnum.ts",
  ],
  function (a) {
    "use strict";
    var t, e, n, i, m;
    return {
      setters: [
        function (a) {
          t = a.inheritsLoose;
        },
        function (a) {
          (e = a.cclegacy), (n = a._decorator);
        },
        function (a) {
          i = a.SlotGameWriter;
        },
        function (a) {
          m = a.SlotSceneType;
        },
      ],
      execute: function () {
        var o;
        e._RF.push({}, "79a56JfNt5AAIhZEkvQ4cQg", "FreeWriter9881", void 0);
        var s = n.ccclass;
        a(
          "FreeWriter9881",
          s("FreeWriter9881")(
            (o = (function (a) {
              function e() {
                return a.apply(this, arguments) || this;
              }
              t(e, a);
              var n = e.prototype;
              return (
                (n.makeScriptResultReceive = function () {
                  var a = this.node.dataStore,
                    t = a.playSession,
                    e = t.matrix0,
                    n = t.jackpotInfo,
                    i = t.extraVipJackpot,
                    m = (t.bigWild, []);
                  if (n) {
                    var o = n[n.length - 1].split(";"),
                      s = o[0].slice(7),
                      d = Number(o[1]);
                    m.push({
                      command: "_updateValueJP",
                      data: { jpType: s, jpValue: d - (i || 0) },
                    }),
                      m.push({ command: "_pauseUpdateJP" });
                  }
                  return (
                    m.push({
                      command: "_setupBigWild",
                      data: {
                        matrix: e,
                        isResume: !1,
                        bigWild: a.playSession.bigWild,
                      },
                    }),
                    m.push({ command: "_resultReceive", data: e }),
                    m.push({ command: "_showResult", data: e }),
                    m
                  );
                }),
                (n.makeScriptShowResults = function () {
                  var a = this.node.dataStore,
                    t = a.playSession,
                    e = t.matrix,
                    n = t.winAmount,
                    i = t.winAmountPS,
                    o = t.payLines,
                    s = t.freeGame,
                    d = t.jackpotInfo,
                    u = t.bigWild,
                    p = t.freeGameRemain,
                    c = (t.freeGameTotal, t.freeBattleData),
                    r = a.betData.getTotalBet(),
                    l = n && n >= 20 * r,
                    h = a.betData,
                    _ = a.config,
                    g = a && a.modeTurbo,
                    W = a.gameSpeed === _.GAME_SPEED.INSTANTLY,
                    y = n / r,
                    S = W || d || s ? 0 : 1e3 * this._getTimeUpdateWinAmount(y),
                    A = [];
                  if (
                    (A.push({
                      command: "_setUpPaylines",
                      data: { matrix: e, payLines: o },
                    }),
                    (a.winRate = y),
                    d)
                  ) {
                    var T = d[d.length - 1].split(";"),
                      f = 0;
                    T && T.length > 0 && (f = Number(T[1])),
                      u &&
                        u.length &&
                        A.push({ command: "_delayTimeScript", data: 1 }),
                      A.push({ command: "_showJackpotPayLine" }),
                      A.push({
                        command: "_showUnskippedCutscene",
                        data: {
                          name: m.JackpotWin,
                          content: {
                            winAmount: f,
                            currentBetData: h.getTotalBet(),
                          },
                        },
                      }),
                      A.push({ command: "_resumeUpdateJP" }),
                      A.push({
                        command: "_updateWinningAmount",
                        data: { winAmount: i - n, time: 0, rate: y },
                      });
                  }
                  if (
                    (c
                      ? (A.push({ command: "_delayTimeScript", data: 0.5 }),
                        A.push({ command: "_displayBigWild", data: !1 }),
                        A.push({
                          command: "_showUnskippedCutscene",
                          data: { name: 98, content: { freeBattleData: c } },
                        }),
                        A.push({
                          command: "_showTotalBattle",
                          data: {
                            freeBattleData: c,
                            winAmount: n,
                            isBigWin: l,
                          },
                        }),
                        1 === c.length &&
                          A.push({ command: "_displayBigWild", data: !0 }),
                        A.push({ command: "_delayTimeScript", data: 1 }),
                        A.push({ command: "_blinkAllPaylines" }),
                        A.push({
                          command: "_hideTotalBattle",
                          data: {
                            freeBattleData: c,
                            winAmount: n,
                            isBigWin: l,
                          },
                        }),
                        1 !== c.length &&
                          (A.push({ command: "_displayBigWild", data: !0 }),
                          A.push({ command: "_showBigWildWinLine" })),
                        l &&
                          A.push({
                            command: "_showBigWin",
                            data: { name: m.BigWin, matrix: e },
                          }),
                        A.push({ command: "_playSoundWinLine", data: y }),
                        A.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: i, time: S, rate: y },
                        }))
                      : l &&
                        ((g || W) &&
                          A.push({
                            command: "_updateWinningAmount",
                            data: { winAmount: i, time: S, rate: y },
                          }),
                        u &&
                          u.length &&
                          A.push({ command: "_delayTimeScript", data: 1 }),
                        A.push({ command: "_blinkAllPaylines" }),
                        A.push({
                          command: "_showBigWin",
                          data: { name: m.BigWin, matrix: e },
                        }),
                        g ||
                          W ||
                          A.push({
                            command: "_updateWinningAmount",
                            data: { winAmount: i, time: S, rate: y },
                          })),
                    !l &&
                      o &&
                      (s ||
                        (A.push({ command: "_playSoundWinLine", data: y }),
                        A.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: i, time: S, rate: y },
                        }),
                        u &&
                          u.length &&
                          A.push({ command: "_delayTimeScript", data: 1 }),
                        A.push({ command: "_blinkAllPaylines" }),
                        A.push({ command: "_showNormalPayline" }))),
                    !p || p <= 0)
                  ) {
                    A.push({ command: "_delayTimeScript", data: 1 });
                    var w = i / r;
                    A.push({
                      command: "_showUnskippedCutscene",
                      data: {
                        name: m.TotalWinPanel,
                        content: { winAmount: i, rate: w },
                      },
                    }),
                      A.push({ command: "_clearPaylines" }),
                      A.push({ command: "_gameExit" });
                  } else
                    p > a.spinTimes
                      ? (A.push({ command: "_showScatterPayLine" }),
                        A.push({
                          command: "_addSpinTimesAnimation",
                          data: p - a.spinTimes,
                        }),
                        (a.spinTimes = p),
                        A.push({ command: "_updateSpinTimes", data: p }),
                        A.push({ command: "_delayTimeScript", data: 0.5 }))
                      : ((a.spinTimes = p),
                        A.push({ command: "_updateSpinTimes", data: p })),
                      A.push({ command: "_gameRestart" });
                  return A;
                }),
                (n._getTimeUpdateWinAmount = function (a) {
                  var t = 0;
                  return (
                    a > 0 && a < 1 && (t = 0),
                    a >= 1 && a < 3 && (t = 0),
                    a >= 3 && a < 10 && (t = 2.2),
                    a >= 10 && a < 20 && (t = 4.16),
                    t
                  );
                }),
                (n.scriptUpdateWinAmount = function () {}),
                e
              );
            })(i))
          ) || o
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IconLoadingScreen9892.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./LoadingScreen.ts"],
  function (n) {
    "use strict";
    var e, o, t, i, r, a, s, c, l;
    return {
      setters: [
        function (n) {
          (e = n.applyDecoratedDescriptor),
            (o = n.inheritsLoose),
            (t = n.initializerDefineProperty),
            (i = n.assertThisInitialized);
        },
        function (n) {
          (r = n.cclegacy), (a = n._decorator), (s = n.Node), (c = n.Component);
        },
        function (n) {
          l = n.LoadingScreen;
        },
      ],
      execute: function () {
        var u, d, p, g, h, f;
        r._RF.push(
          {},
          "51e2acJCB5OMZIokXxPQ3hR",
          "IconLoadingScreen9892",
          void 0
        );
        var y = a.ccclass,
          S = a.property;
        n(
          "IconLoadingScreen9892",
          ((u = y("IconLoadingScreen9892")),
          (d = S({ type: s })),
          u(
            ((h = e(
              (g = (function (n) {
                function e() {
                  for (
                    var e, o = arguments.length, r = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = n.call.apply(n, [this].concat(r)) || this),
                    t(e, "loadingGlow", h, i(e)),
                    t(e, "barWidth", f, i(e)),
                    (e.loadingScreen = null),
                    (e.startPosX = 0),
                    e
                  );
                }
                o(e, n);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    (this.loadingScreen = this.node.getComponent(l)),
                      (this.startPosX = this.loadingGlow.position.x);
                  }),
                  (r.update = function () {
                    if (
                      (this.loadingScreen.totalPercent -
                        this.loadingScreen.progressBar.progress) /
                        20 >
                        0 &&
                      this.loadingGlow
                    ) {
                      var n =
                        this.barWidth * this.loadingScreen.progressBar.progress;
                      this.loadingGlow.setPosition(
                        this.startPosX + n,
                        this.loadingGlow.position.y
                      );
                    }
                  }),
                  e
                );
              })(c)).prototype,
              "loadingGlow",
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
            (f = e(g.prototype, "barWidth", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (p = g))
          ) || p)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroFree9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./IntroFree.ts",
    "./utils2.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, a, o, r, l, s, c, u, p, d, h;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (r = t._decorator),
            (l = t.sp),
            (s = t.Node),
            (c = t.tween);
        },
        function (t) {
          u = t.IntroFree;
        },
        function (t) {
          (p = t.setOpacity), (d = t.fadeIn);
        },
        function (t) {
          h = t.SlotGameMode;
        },
      ],
      execute: function () {
        var m, f, y, b, v, I, w, _, F;
        o._RF.push({}, "2bcdfoJ49RB3ZiRrDfCp30d", "IntroFree9881", void 0);
        var k = r.ccclass,
          g = r.property;
        t(
          "IntroFree9881",
          ((m = k("IntroFree9881")),
          (f = g(l.Skeleton)),
          (y = g(s)),
          (b = g(s)),
          m(
            ((w = n(
              (I = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, o = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(o)) || this),
                    i(n, "animation", w, a(n)),
                    i(n, "animHolder", _, a(n)),
                    i(n, "overlay", F, a(n)),
                    (n.tweenIntro = null),
                    n
                  );
                }
                e(n, t);
                var o = n.prototype;
                return (
                  (o.show = function () {
                    var t = this,
                      n = this.content.isResume;
                    if (((this.node.active = !0), n))
                      return (
                        p(this.node, 255),
                        (this.animation.node.parent = this.animHolder),
                        this.callback && this.callback(),
                        (this.callback = null),
                        this.animation.setAnimation(
                          0,
                          "Battle_Card_Start_Reload",
                          !1
                        ),
                        void this.animation.setCompleteListener(function () {
                          t.animation.setCompleteListener(function () {}),
                            t.exit();
                        })
                      );
                    (this.overlay.active = !0),
                      p(this.node, 0),
                      this.soundPlayer.playSfx("TRANSITION"),
                      this.soundPlayer.playMainBGM(h.FreeGame),
                      (this.animation.node.parent = this.node),
                      d(this.node, 0.1),
                      this.animation.setAnimation(0, "Transition_Appear", !1),
                      this.animation.addAnimation(0, "Transition_Idle", !0),
                      (this.tweenIntro = c(this.node)
                        .delay(2)
                        .call(function () {
                          t.animation.setAnimation(
                            0,
                            "Transition_Disappear",
                            !1
                          );
                        })
                        .delay(1)
                        .call(function () {
                          (t.overlay.active = !1),
                            (t.animation.node.parent = t.animHolder),
                            t.callback && t.callback(),
                            (t.callback = null);
                        })
                        .delay(2)
                        .call(function () {
                          t.exit();
                        })
                        .start());
                  }),
                  (o.exit = function () {
                    (this.animation.node.parent = this.node),
                      t.prototype.exit.call(this);
                  }),
                  (o.onDestroy = function () {
                    this.tweenIntro && this.tweenIntro.stop(),
                      (this.tweenIntro = null);
                  }),
                  n
                );
              })(u)).prototype,
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
            (_ = n(I.prototype, "animHolder", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = n(I.prototype, "overlay", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = I))
          ) || v)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroGame9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
    "./CustomType9881.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, r, o, a, s, u, l, h, c, p, g, S, d, m;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (s = t.PageView),
            (u = t.Node),
            (l = t.Button),
            (h = t.sys),
            (c = t.tween),
            (p = t.Sprite);
        },
        function (t) {
          (g = t.setOpacity), (S = t.fadeOut);
        },
        function (t) {
          d = t.GameObject;
        },
        function (t) {
          m = t.ButtonState9881;
        },
      ],
      execute: function () {
        var I, b, f, v, y, P, w, G, x, T, F, C, _, M, O, N, k;
        o._RF.push({}, "95c56ueQrhLVbM+cQ85h9Ex", "IntroGame9881", void 0);
        var V = a.ccclass,
          B = a.property;
        t(
          "IntroGame9881",
          ((I = V("IntroGame9881")),
          (b = B(s)),
          (f = B(u)),
          (v = B(l)),
          (y = B(l)),
          (P = B(u)),
          (w = B(u)),
          (G = B({ type: m })),
          I(
            ((F = e(
              (T = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    i(e, "pageView", F, r(e)),
                    i(e, "introPages", C, r(e)),
                    i(e, "btnPrev", _, r(e)),
                    i(e, "btnNext", M, r(e)),
                    i(e, "btnStart", O, r(e)),
                    i(e, "skipIntroToggle", N, r(e)),
                    i(e, "buttonStateSpriteFrame", k, r(e)),
                    (e.currentIndex = 0),
                    (e.isSkipIntroGame = !1),
                    (e.callback = void 0),
                    e
                  );
                }
                n(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.eventManager &&
                        (this.eventManager.on(
                          "SHOW_INTRO_BUTTONS",
                          this.showIntroButtons,
                          this
                        ),
                        this.eventManager.on(
                          "HIDE_INTRO_GAME",
                          this.hideIntroGame,
                          this
                        )),
                      this.pageView.node.on(
                        "page-turning",
                        this.pageViewEvent,
                        this
                      );
                  }),
                  (o.start = function () {
                    if (!this.config || !this.config.GAME_ID)
                      this.currentIndex = 0;
                    else {
                      this.currentIndex = globalThis.currentIntroPage || 0;
                      var t = h.localStorage.getItem("HideIntroGame");
                      (t ? JSON.parse(t) : {})[this.config.GAME_ID]
                        ? (this.node.active = !1)
                        : (g(this.node, 255), this.showPageIntro());
                    }
                    this.pageView.scrollToPage(this.currentIndex, 0);
                  }),
                  (o.onDisable = function () {
                    this.eventManager &&
                      (this.eventManager.off(
                        "SHOW_INTRO_BUTTONS",
                        this.showIntroButtons,
                        this
                      ),
                      this.eventManager.off(
                        "HIDE_INTRO_GAME",
                        this.hideIntroGame,
                        this
                      ));
                  }),
                  (o.pageViewEvent = function () {
                    var t = this.pageView.getCurrentPageIndex();
                    1 === Math.abs(t - this.currentIndex)
                      ? ((this.currentIndex = t),
                        this.showPageIntro(),
                        this.pageView.scrollToPage(this.currentIndex, 0.3))
                      : this.pageView.scrollToPage(this.currentIndex, 0.1);
                  }),
                  (o.showIntroButtons = function (t) {
                    var e = h.localStorage.getItem("HideIntroGame");
                    (e ? JSON.parse(e) : {})[this.config.GAME_ID]
                      ? this.hideIntroGame()
                      : ((this.skipIntroToggle.active = !0),
                        (this.btnStart.active = !0));
                  }),
                  (o.onPrevPage = function () {
                    this.currentIndex--,
                      this.showPageIntro(),
                      this.pageView.scrollToPage(this.currentIndex, 0.3),
                      this.soundPlayer && this.soundPlayer.playSFXClick();
                  }),
                  (o.onNextPage = function () {
                    this.currentIndex++,
                      this.showPageIntro(),
                      this.pageView.scrollToPage(this.currentIndex, 0.3),
                      this.soundPlayer && this.soundPlayer.playSFXClick();
                  }),
                  (o.onStartGame = function () {
                    var t = {};
                    (t[this.config.GAME_ID] = this.isSkipIntroGame),
                      h.localStorage.setItem(
                        "HideIntroGame",
                        JSON.stringify(t)
                      ),
                      this.soundPlayer.playSFXClick(),
                      this.hideIntroGame();
                  }),
                  (o.hideIntroGame = function () {
                    var t = this;
                    S(this.node, 0.2),
                      c(this.node)
                        .delay(0.2)
                        .call(function () {
                          t.node.active = !1;
                        })
                        .start();
                  }),
                  (o.onToggleHideIntro = function () {
                    (this.isSkipIntroGame = !this.isSkipIntroGame),
                      this.soundPlayer.playSFXClick();
                  }),
                  (o.showPageIntro = function () {
                    (globalThis.currentIntroPage = this.currentIndex),
                      this.updateButtonStatus(
                        this.btnPrev.node,
                        this.currentIndex > 0
                      ),
                      this.updateButtonStatus(
                        this.btnNext.node,
                        this.currentIndex !== this.introPages.length - 1
                      );
                  }),
                  (o.updateButtonStatus = function (t, e) {
                    (t.active = !0),
                      (t.getComponent(l).interactable = e),
                      e
                        ? ((t.getComponent(p).spriteFrame =
                            this.buttonStateSpriteFrame.normalState),
                          (t.getComponent(l).normalSprite =
                            this.buttonStateSpriteFrame.normalState),
                          (t.getComponent(l).pressedSprite =
                            this.buttonStateSpriteFrame.pressedState),
                          (t.getComponent(l).hoverSprite =
                            this.buttonStateSpriteFrame.hoverState),
                          (t.getComponent(l).disabledSprite =
                            this.buttonStateSpriteFrame.normalState))
                        : ((t.getComponent(p).spriteFrame =
                            this.buttonStateSpriteFrame.disableState),
                          (t.getComponent(l).normalSprite =
                            this.buttonStateSpriteFrame.disableState),
                          (t.getComponent(l).pressedSprite =
                            this.buttonStateSpriteFrame.disableState),
                          (t.getComponent(l).hoverSprite =
                            this.buttonStateSpriteFrame.disableState),
                          (t.getComponent(l).disabledSprite =
                            this.buttonStateSpriteFrame.disableState));
                  }),
                  e
                );
              })(d)).prototype,
              "pageView",
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
            (C = e(T.prototype, "introPages", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (_ = e(T.prototype, "btnPrev", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = e(T.prototype, "btnNext", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = e(T.prototype, "btnStart", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(T.prototype, "skipIntroToggle", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = e(T.prototype, "buttonStateSpriteFrame", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = T))
          ) || x)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroPage1Anim9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts"],
  function (e) {
    "use strict";
    var n, t, i, a, s, o, r, l, c, u, f, d, p;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (a = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (o = e._decorator),
            (r = e.Node),
            (l = e.tween),
            (c = e.v3),
            (u = e.Component);
        },
        function (e) {
          (f = e.fadeOut), (d = e.setOpacity), (p = e.fadeIn);
        },
      ],
      execute: function () {
        var m, g, h, w, b, y, A;
        s._RF.push({}, "ff83b/RwMFJyI4M0ZNNrMaa", "IntroPage1Anim9881", void 0);
        var I = o.ccclass,
          v = o.property;
        e(
          "IntroPage1Anim9881",
          ((m = I("IntroPage1Anim9881")),
          (g = v(r)),
          (h = v(r)),
          m(
            ((y = n(
              (b = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, s = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (n = e.call.apply(e, [this].concat(s)) || this),
                    i(n, "smallWilds", y, a(n)),
                    i(n, "bigWilds", A, a(n)),
                    (n.tweenAnim = void 0),
                    n
                  );
                }
                t(n, e);
                var s = n.prototype;
                return (
                  (s.onEnable = function () {
                    var e = this,
                      n = 0.5,
                      t = 0.5;
                    this.tweenAnim = l(this.node)
                      .call(function () {
                        e.bigWilds.forEach(function (e) {
                          f(e, n);
                        }),
                          e.smallWilds.forEach(function (e) {
                            d(e, 0),
                              e.setScale(c(1, 1, 1)),
                              p(e, n),
                              (e.tweenAnim = l(e)
                                .to(
                                  t,
                                  { scale: c(1.1, 1.1, 1.1) },
                                  { easing: "sineInOut" }
                                )
                                .to(
                                  t,
                                  { scale: c(1, 1, 1) },
                                  { easing: "sineInOut" }
                                )
                                .start());
                          });
                      })
                      .delay(2)
                      .call(function () {
                        e.smallWilds.forEach(function (e) {
                          f(e, n);
                        }),
                          e.bigWilds.forEach(function (e) {
                            p(e, n),
                              (e.tweenAnim = l(e)
                                .to(
                                  t,
                                  { scale: c(1.1, 1.1, 1.1) },
                                  { easing: "sineInOut" }
                                )
                                .to(
                                  t,
                                  { scale: c(1, 1, 1) },
                                  { easing: "sineInOut" }
                                )
                                .to(
                                  t,
                                  { scale: c(1.1, 1.1, 1.1) },
                                  { easing: "sineInOut" }
                                )
                                .to(
                                  t,
                                  { scale: c(1, 1, 1) },
                                  { easing: "sineInOut" }
                                )
                                .start());
                          });
                      })
                      .delay(2.5)
                      .delay(1.5)
                      .union()
                      .repeatForever()
                      .start();
                  }),
                  (s.onDisable = function () {
                    this.tweenAnim && this.tweenAnim.stop(),
                      this.smallWilds.forEach(function (e) {
                        e.tweenAnim && e.tweenAnim.stop(),
                          e.tweenFade && e.tweenFade.stop(),
                          d(e, 255),
                          e.setScale(c(1, 1, 1));
                      }),
                      this.bigWilds.forEach(function (e) {
                        e.tweenAnim && e.tweenAnim.stop(),
                          e.tweenFade && e.tweenFade.stop(),
                          d(e, 0),
                          e.setScale(c(1, 1, 1));
                      });
                  }),
                  n
                );
              })(u)).prototype,
              "smallWilds",
              [g],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (A = n(b.prototype, "bigWilds", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (w = b))
          ) || w)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroPage2Anim9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts"],
  function (e) {
    "use strict";
    var t, i, n, o, l, a, s, r, d, c, u, p, b;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (a = e._decorator),
            (s = e.Node),
            (r = e.tween),
            (d = e.v3),
            (c = e.Component);
        },
        function (e) {
          (u = e.setOpacity), (p = e.fadeIn), (b = e.fadeOut);
        },
      ],
      execute: function () {
        var f, h, g, N, m, w, y, A, W;
        l._RF.push({}, "e2841XkxUBMeJMKs9VhejnN", "IntroPage2Anim9881", void 0);
        var v = a.ccclass,
          F = a.property;
        e(
          "IntroPage2Anim9881",
          ((f = v("IntroPage2Anim9881")),
          (h = F(s)),
          (g = F(s)),
          (N = F(s)),
          f(
            ((y = t(
              (w = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, l = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    l[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(l)) || this),
                    n(t, "bigWildsNode", y, o(t)),
                    n(t, "battleNode", A, o(t)),
                    n(t, "multiNodes", W, o(t)),
                    (t.tweenAnim = void 0),
                    (t.tweenBigWilds = void 0),
                    t
                  );
                }
                i(t, e);
                var l = t.prototype;
                return (
                  (l.onEnable = function () {
                    var e = this,
                      t = 0.5,
                      i = 0.3,
                      n = this.multiNodes.length;
                    r(this.node)
                      .call(function () {
                        u(e.battleNode, 0),
                          e.multiNodes.forEach(function (e) {
                            u(e, 0);
                          }),
                          p(e.bigWildsNode, t),
                          (e.tweenBigWilds = r(e.bigWildsNode)
                            .to(i, { scale: d(1.1, 1.1, 1.1) })
                            .to(i, { scale: d(1, 1, 1) })
                            .start());
                      })
                      .delay(0)
                      .call(function () {
                        b(e.bigWildsNode, t), p(e.battleNode, t);
                      })
                      .delay(0)
                      .call(function () {
                        e.multiNodes.forEach(function (e, o) {
                          p(e, t),
                            (e.tweenAnim = r(e)
                              .delay(t * o)
                              .to(i, { scale: d(1.1, 1.1, 1.1) })
                              .to(i, { scale: d(1, 1, 1) })),
                            o === n - 1 &&
                              e.tweenAnim
                                .to(i, { scale: d(1.1, 1.1, 1.1) })
                                .to(i, { scale: d(1, 1, 1) }),
                            e.tweenAnim.start();
                        });
                      })
                      .delay(t * n + 0.6)
                      .delay(1.5)
                      .call(function () {
                        b(e.battleNode, t), p(e.bigWildsNode, t);
                      })
                      .delay(1)
                      .union()
                      .repeatForever()
                      .start();
                  }),
                  (l.onDisable = function () {
                    this.tweenAnim && this.tweenAnim.stop(),
                      this.tweenBigWilds && this.tweenBigWilds.stop(),
                      this.bigWildsNode.tweenFade &&
                        this.bigWildsNode.tweenFade.stop(),
                      this.battleNode.tweenFade &&
                        this.battleNode.tweenFade.stop(),
                      u(this.bigWildsNode, 255),
                      u(this.battleNode, 0),
                      this.multiNodes.forEach(function (e) {
                        e.tweenAnim && e.tweenAnim.stop(),
                          e.tweenFade && e.tweenFade.stop(),
                          u(e, 0),
                          e.setScale(d(1, 1, 1));
                      });
                  }),
                  t
                );
              })(c)).prototype,
              "bigWildsNode",
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
            (A = t(w.prototype, "battleNode", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = t(w.prototype, "multiNodes", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (m = w))
          ) || m)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotWin9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./JackpotWin.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var n, i, e, a, s, o, r, l, u, h, c, p;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (o = t._decorator),
            (r = t.sp),
            (l = t.tween),
            (u = t.v3),
            (h = t.Vec3);
        },
        function (t) {
          c = t.JackpotWin;
        },
        function (t) {
          p = t.formatMoney;
        },
      ],
      execute: function () {
        var d, w, y, m, f, A, S;
        s._RF.push({}, "1124alLB+ZAJrpH3ewp2adt", "JackpotWin9881", void 0);
        var g = o.ccclass,
          T = o.property;
        t(
          "JackpotWin9881",
          ((d = g("JackpotWin9881")),
          (w = T(r.Skeleton)),
          (y = T(r.Skeleton)),
          d(
            ((A = n(
              (f = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, s = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (n = t.call.apply(t, [this].concat(s)) || this),
                    e(n, "backgroundAnim", A, a(n)),
                    e(n, "anim", S, a(n)),
                    (n.tweenShow = void 0),
                    (n.tweenScaleWinAmount = void 0),
                    n
                  );
                }
                i(n, t);
                var s = n.prototype;
                return (
                  (s.enter = function () {
                    var t = this;
                    this.backgroundAnim.setAnimation(0, "Appear", !1),
                      this.backgroundAnim.addAnimation(0, "Idle", !0),
                      this.anim.setAnimation(0, "Appear_TextOnly", !1),
                      this.anim.addAnimation(0, "Idle_TextOnly", !0),
                      this.initValue(),
                      (this.isUpdating = !1),
                      (this.skippable = !1),
                      this.tweenShow && this.tweenShow.stop(),
                      (this.label.string = ""),
                      (this.tweenShow = l(this.node)
                        .delay(1)
                        .call(function () {
                          t.playSoundStart(),
                            t.playTweenHighlightWinAmount(),
                            t.startParticle(),
                            t.startUpdateWinAmount(),
                            (t.isUpdating = !0),
                            (t.skippable = !0);
                        })
                        .delay(20)
                        .call(function () {
                          t.finish(), (t.tweenShow = null);
                        })
                        .start());
                  }),
                  (s.finish = function () {
                    var t = this;
                    this.playSoundEnd(),
                      this.tweenShow && this.tweenShow.stop(),
                      (this.tweenShow = null),
                      (this.isUpdating = !1),
                      (this.label.string = p(this.content.winAmount)),
                      this.tweenScaleWinAmount &&
                        this.tweenScaleWinAmount.stop(),
                      (this.tweenScaleWinAmount = null),
                      this.stopParticle(),
                      (this.tweenExit = l(this.node)
                        .delay(this.delayShowTime)
                        .call(function () {
                          t.backgroundAnim.setAnimation(0, "Disappear", !1),
                            t.anim.setAnimation(0, "Disappear_TextOnly", !1),
                            l(t.winAmount)
                              .to(t.hideTime, { scale: u(0, 0, 1) })
                              .start();
                        })
                        .delay(this.hideTime)
                        .call(function () {
                          (t.label.string = ""),
                            t.soundPlayer && t.soundPlayer.stopAllAudio(),
                            t.soundPlayer && t.soundPlayer.playMainBGM(),
                            t.exit();
                        })
                        .start());
                  }),
                  (s.playTweenHighlightWinAmount = function () {
                    this.winAmount &&
                      ((this.tweenScaleWinAmount = l(
                        this.winAmount
                      ).repeatForever(
                        l()
                          .to(0.2, { scale: new h(1.2, 1.2, 1.2) })
                          .to(0.2, { scale: new h(1, 1, 1) })
                      )),
                      this.tweenScaleWinAmount.start());
                  }),
                  (s.playSoundStart = function () {
                    this.soundPlayer.stopMusic(),
                      this.soundPlayer.playSfx("JACKPOT"),
                      this.soundPlayer.playSfx("COUNTING", !0);
                  }),
                  (s.playSoundEnd = function () {
                    this.soundPlayer.stopSfx("JACKPOT"),
                      this.soundPlayer.stopSfx("COUNTING"),
                      this.soundPlayer.playSfx("JACKPOT_END");
                  }),
                  (s.startUpdateWinAmount = function () {
                    var t,
                      n = this,
                      i =
                        ((t = function (t) {
                          return t * t;
                        }),
                        function (n) {
                          return 1 - t(1 - n);
                        }),
                      e = 0.5 * Number(this.content.winAmount),
                      a =
                        this.dataStore && this.dataStore.isAutoSpin
                          ? this.extendFinishDelayTime
                          : 0;
                    (this.currentTween = l(this)),
                      this.currentTween
                        .to(
                          0.5 * this.animDuration,
                          { currentValue: e },
                          {
                            easing: function (t) {
                              return t * t;
                            },
                          }
                        )
                        .to(
                          0.5 * this.animDuration,
                          { currentValue: Number(this.content.winAmount) },
                          { easing: i }
                        )
                        .call(function () {
                          n.soundPlayer &&
                            (n.soundPlayer.stopSfx("COUNTING"),
                            n.soundPlayer.playSfx("COUNTING_END"));
                        })
                        .delay(a)
                        .call(function () {
                          n.dataStore &&
                            n.dataStore.isAutoSpin &&
                            ((n.skippable = !1),
                            (n.currentTween = null),
                            n.finish());
                        }),
                      this.currentTween.start();
                  }),
                  (s.onClick = function () {
                    var t = this;
                    this.isUpdating &&
                      !this.speedUp &&
                      this.skippable &&
                      ((this.skippable = !1),
                      (this.speedUp = !0),
                      this.playTweenHighlightWinAmount(),
                      this.currentTween && this.currentTween.stop(),
                      (this.currentTween = l(this)),
                      this.currentTween
                        .to(1, { currentValue: 1 * this.content.winAmount })
                        .delay(0.1)
                        .call(function () {
                          t.finish();
                        })
                        .start());
                  }),
                  n
                );
              })(c)).prototype,
              "backgroundAnim",
              [w],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (S = n(f.prototype, "anim", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (m = f))
          ) || m)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LineDrawingPayline9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./LineDrawingPayline.ts"],
  function (t) {
    "use strict";
    var i, e, n, s, o, a, h;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy),
            (n = t._decorator),
            (s = t.Sprite),
            (o = t.UITransform),
            (a = t.Vec3);
        },
        function (t) {
          h = t.LineDrawingPayline;
        },
      ],
      execute: function () {
        var r;
        e._RF.push(
          {},
          "e7a19NBPeFET4fUe2E2/wUE",
          "LineDrawingPayline9881",
          void 0
        );
        var c = n.ccclass;
        n.property,
          t(
            "LineDrawingPayline9881",
            c("LineDrawingPayline9881")(
              (r = (function (t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                i(e, t);
                var n = e.prototype;
                return (
                  (n.addLine = function (t, i, e) {
                    if (
                      (this.cachedLine[i] || (this.cachedLine[i] = []),
                      this.cachedLine[i][e])
                    ) {
                      if (this.cachedLine[i][e][t]) return;
                    } else this.cachedLine[i][e] = [];
                    this.cachedLine[i][e][t] = !0;
                    var n = null;
                    this.poolFactory &&
                      ((n = this.poolFactory.getObject(
                        this.linePrefabName
                      )).active = !0),
                      (n.parent = this.lineHolder),
                      this._usingObj.push(n);
                    var h = this.config,
                      r = h.SYMBOL_WIDTH,
                      c = h.SYMBOL_HEIGHT,
                      d = this._startXPos + r / 2 + i * r,
                      l = this._startYPos + c / 2 + (this.totalRow - 1 - e) * c,
                      L = n.getComponent(s);
                    L || (L = n.addComponent(s));
                    var p = n.getComponent(o);
                    p || (p = n.addComponent(o));
                    var g = 0;
                    0 == t
                      ? ((L.spriteFrame = this.lineSprites[0]),
                        (p.width = this.config.SYMBOL_WIDTH),
                        (p.height = this.horizontalLineHeight),
                        (p.anchorX = 0),
                        (p.anchorY = 0.5),
                        (n.scale = new a(1, 1, 1)),
                        n.setPosition(d, l, 1))
                      : 1 == t || 2 == t
                      ? ((L.spriteFrame = this.lineSprites[1]),
                        (p.width = this.config.SYMBOL_WIDTH),
                        (p.height = this.config.SYMBOL_HEIGHT),
                        (p.anchorX = 0),
                        (p.anchorY = 0),
                        (n.scale = new a(1, 1 == t ? 1 : -1, 1)),
                        (g = 1 == t ? -2 : 2),
                        n.setPosition(d, l + g, 1))
                      : (3 != t && 4 != t) ||
                        ((L.spriteFrame = this.lineSprites[2]),
                        (p.width = this.config.SYMBOL_WIDTH),
                        (p.height = 2 * this.config.SYMBOL_HEIGHT),
                        (p.anchorX = 0),
                        (p.anchorY = 0),
                        (n.scale = new a(1, 3 == t ? 1.005 : -1.005, 1.005)),
                        (g = 3 == t ? -2 : 2),
                        n.setPosition(d, l + g, 1)),
                      this.addDotToLine(i, e);
                  }),
                  (n.addFirstLine = function (t) {
                    if (!this.cachedFirstLine[t]) {
                      var i;
                      (this.cachedFirstLine[t] = !0),
                        this.poolFactory &&
                          ((i = this.poolFactory.getObject(
                            this.linePrefabName
                          )).active = !0),
                        (i.parent = this.lineHolder),
                        this._usingObj.push(i);
                      var e = i.getComponent(s);
                      e || (e = i.addComponent(s));
                      var n = i.getComponent(o);
                      n || (n = i.addComponent(o));
                      var h = this.config,
                        r = h.SYMBOL_WIDTH,
                        c = h.SYMBOL_HEIGHT,
                        d = r / 2 + this._startXPos,
                        l =
                          this._startYPos + c / 2 + (this.totalRow - 1 - t) * c;
                      e.spriteFrame = this.lineSprites[0];
                      var L = 1 === t ? -1 : 6;
                      (n.width = this.config.SYMBOL_WIDTH / 2 + L),
                        (n.height = 6),
                        (n.anchorX = 1),
                        (n.anchorY = 0.5),
                        (i.scale = new a(1, 1, 1)),
                        i.setPosition(d, l, 1);
                    }
                  }),
                  (n.addLastLine = function (t) {
                    if (!this.cachedLastLine[t]) {
                      var i;
                      (this.cachedLastLine[t] = !0),
                        this.poolFactory &&
                          ((i = this.poolFactory.getObject(
                            this.linePrefabName
                          )).active = !0),
                        (i.parent = this.lineHolder),
                        this._usingObj.push(i);
                      var e = i.getComponent(s);
                      e || (e = i.addComponent(s));
                      var n = i.getComponent(o);
                      n || (n = i.addComponent(o));
                      var h = this.config,
                        r = h.SYMBOL_WIDTH,
                        c = h.SYMBOL_HEIGHT,
                        d = this._startXPos + r / 2 + (this.totalCol - 1) * r,
                        l =
                          this._startYPos + c / 2 + (this.totalRow - 1 - t) * c;
                      e.spriteFrame = this.lineSprites[0];
                      var L = 1 === t ? -1 : 6;
                      (n.width = this.config.SYMBOL_WIDTH / 2 + L),
                        (n.height = 6),
                        (n.anchorX = 0),
                        (n.anchorY = 0.5),
                        (i.scale = new a(1, 1, 1)),
                        i.setPosition(d, l, 1),
                        this.addDotToLine(4, t);
                    }
                  }),
                  (n.addDotToLine = function (t, i) {
                    if (
                      (this.cachedDotLine[t] || (this.cachedDotLine[t] = []),
                      this.cachedDotLine[t][i] ||
                        (this.cachedDotLine[t][i] = []),
                      1 != this.cachedDotLine[t][i])
                    ) {
                      var e;
                      (this.cachedDotLine[t][i] = !0),
                        this.poolFactory &&
                          ((e = this.poolFactory.getObject(
                            this.dotPrefabName
                          )).active = !0);
                      var n =
                          this._startXPos +
                          this.config.SYMBOL_WIDTH / 2 +
                          t * this.config.SYMBOL_WIDTH,
                        s =
                          this._startYPos +
                          this.config.SYMBOL_HEIGHT / 2 +
                          (this.totalRow - 1 - i) * this.config.SYMBOL_HEIGHT;
                      (e.parent = this.dotHolder),
                        e.setPosition(n + 1, s - 1),
                        (e.scale = new a(0.4, 0.4, 0.4)),
                        this._usingObj.push(e);
                    }
                  }),
                  e
                );
              })(h))
            ) || r
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MainDirector9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotDirector.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var i, e, s, n, o, a;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (s = t._decorator);
        },
        function (t) {
          n = t.SlotDirector;
        },
        function (t) {
          (o = t.WalletType), (a = t.SlotGameMode);
        },
      ],
      execute: function () {
        var r;
        e._RF.push({}, "e6d4cgUIpFHNqhPtgZBn5xD", "MainDirector9881", void 0);
        var u = s.ccclass;
        t(
          "MainDirector9881",
          u("MainDirector9881")(
            (r = (function (t) {
              function e() {
                return t.apply(this, arguments) || this;
              }
              i(e, t);
              var s = e.prototype;
              return (
                (s.onEnable = function () {
                  this.eventManager &&
                    this.eventManager.on(
                      "START_SPIN_TRIAL",
                      this.startSpinTrial,
                      this
                    );
                }),
                (s.canStoreAsyncScript = function () {
                  return !1;
                }),
                (s.spinClick = function () {
                  if (
                    this.dataStore.isTrialMode &&
                    this.config.trialSessionCount >= this.config.MAX_PLAY_DEMO
                  )
                    return (
                      (this.config.trialSessionCount = 0),
                      (this.config.isPlayedMax = !0),
                      void this.showTutorialPopup()
                    );
                  if (this.node && this.fsm && this.fsm.can("actionTrigger")) {
                    var i = this.dataStore.playSession.winAmountPS;
                    i &&
                      (this.guiMgr.updateWinAmount(i, 0),
                      this.dataStore.resumeWallet(o.NORMAL),
                      this.dataStore.resumeWallet(o.PROMOTE),
                      this.dataStore.resumeWallet(o.TRIAL),
                      this.guiMgr.updateWallet(this.dataStore.getWallets())),
                      t.prototype.spinClick.call(this);
                  }
                }),
                (s._runAutoSpin = function (i) {
                  if (
                    this.dataStore.isTrialMode &&
                    this.config.trialSessionCount >= this.config.MAX_PLAY_DEMO
                  ) {
                    (this.config.trialSessionCount = 0),
                      (this.config.isPlayedMax = !0),
                      this.stopAutoSpinClick(),
                      this.showTutorialPopup();
                    var e = this.dataStore.playSession.isFinished;
                    (void 0 !== e && !0 !== e) ||
                      (this.slotButton &&
                        (this.slotButton.emit("SPIN_SHOW"),
                        this.slotButton.emit("SPIN_ENABLE"),
                        this.slotButton.emit("STOP_AUTO_SPIN_HIDE"),
                        this.slotButton.emit("FAST_TO_RESULT_HIDE")),
                      this.dataStore.promotion ||
                        (this.spinTimes &&
                          this.spinTimes.emit("RESET_SPINTIMES")),
                      (this._autoSpin = !1),
                      (this.dataStore.isAutoSpin = !1),
                      this._showTrialButtons(null, !0),
                      this.guiMgr.enableBet());
                  } else
                    t.prototype._runAutoSpin.call(this, i),
                      this.guiMgr.enablePlayTrialButton(!1);
                }),
                (s.showTutorialPopup = function () {
                  this.dataStore.isAutoSpin && this.stopAutoSpinClick();
                  var t =
                    this.config.MESSAGE_DIALOG.ASK_B2R ||
                    this.config.TUTORIAL_TEXT.ASK_B2R;
                  this.guiMgr.showTutorialPopup(t, !0);
                }),
                (s._setupBigWild = function (t, i) {
                  this.table.emit("ON_SETUP_BIGWILD", i),
                    this.executeNextScript(t);
                }),
                (s._showNormalPayline = function (t) {
                  var i = this;
                  this.hasPayline
                    ? this.dataStore.gameSpeed ===
                      this.config.GAME_SPEED.INSTANTLY
                      ? (this.table.emit(
                          "SHOW_ALL_NORMAL_PAYLINES",
                          function () {}
                        ),
                        this.executeNextScript(t))
                      : this.table.emit(
                          "SHOW_ALL_NORMAL_PAYLINES",
                          function () {
                            i.executeNextScript(t);
                          }
                        )
                    : this.executeNextScript(t);
                }),
                (s._blinkAllPaylines_2 = function (t) {
                  this.table.emit("BLINK_ALL_NORMAL_PAYLINES", function () {}),
                    this.executeNextScript(t);
                }),
                (s._showNormalSymbolPayLine = function (t, i) {
                  var e = this;
                  this.hasPayline
                    ? this.table.emit("BLINK_ALL_NORMAL_PAYLINES", function () {
                        e.table.emit("SHOW_ALL_NORMAL_PAYLINES", i),
                          e.executeNextScript(t);
                      })
                    : this.executeNextScript(t);
                }),
                (s._showJackpotPayLine = function (t) {
                  var i = this;
                  this.hasPayline
                    ? this.table.emit("SHOW_JACKPOT_PAYLINE", function () {
                        i.guiMgr.onIngameEvent(
                          null,
                          "ON_FINISH_JACKPOT_PAYLINE"
                        ),
                          i.executeNextScript(t);
                      })
                    : this.executeNextScript(t);
                }),
                (s._showJackpotPayLine_2 = function (t) {
                  var i = this;
                  this.table.emit("SHOW_JACKPOT_PAYLINE", function () {
                    i.guiMgr.onIngameEvent(null, "ON_FINISH_JACKPOT_PAYLINE"),
                      i.executeNextScript(t);
                  });
                }),
                (s._playSoundWinLine = function (t, i) {
                  var e = "WIN_1";
                  i > 0 && i < 1 && (e = "WIN_1"),
                    i >= 1 && i < 3 && (e = "WIN_2"),
                    i >= 3 && i < 10 && (e = "WIN_3"),
                    i >= 10 && i < 20 && (e = "WIN_4"),
                    this.soundPlayer && this.soundPlayer.playSfx(e);
                  var s = "Win_Lv1";
                  i < 1 && (s = "Win_Lv1"),
                    i >= 1 && i < 3 && (s = "Win_Lv2"),
                    i >= 3 && i < 10 && (s = "Win_Lv3"),
                    i >= 10 && i < 20 && (s = "Win_Lv4"),
                    this.guiMgr.playAnimWin(s),
                    this.executeNextScript(t);
                }),
                (s._clearWinAmount = function (t) {
                  this.guiMgr.fadeOutWinAmount(),
                    this.soundPlayer.stopSfx("WIN_1"),
                    this.soundPlayer.stopSfx("WIN_2"),
                    this.soundPlayer.stopSfx("WIN_3"),
                    this.soundPlayer.stopSfx("WIN_4"),
                    this.executeNextScript(t);
                }),
                (s.startSpinTrial = function () {
                  this.table.emit("CLEAR_PAYLINES"), this.spinClick();
                }),
                (s._stopStepTrialMode = function (t) {
                  this.dataStore.playSession.isLastStepTutorial
                    ? (this.stopAutoSpinClick(), this.executeNextScript(t))
                    : this.executeNextScript(t);
                }),
                (s._gameReset = function () {
                  this.unscheduleAllCallbacks(),
                    this.skipAllEffects(),
                    this.stopAutoSpinClick(),
                    this._updateSpinTimes([], 0),
                    this.node.resetCallbackWhenHide(),
                    this.guiMgr.winAmount.emit("RESET_NUMBER"),
                    this.soundPlayer &&
                      (this.soundPlayer.stopAllAudio(),
                      this.soundPlayer.playMainBGM()),
                    this.table.emit("ON_FORCE_BIGWILD_IDLE"),
                    this._resetSpinButton([]),
                    this._resumeUpdateJP([]),
                    this._gameRestart(),
                    (this.forceToExitMode = !1);
                }),
                (s._gameRestart = function (i, e) {
                  t.prototype._gameRestart.call(this, i, !1),
                    this.guiMgr.onIngameEvent(null, "NORMAL_GAME_RESTART");
                }),
                (s.forceToExit = function () {
                  var i = [];
                  (i =
                    this.dataStore.currentGameMode !== a.NormalGame
                      ? [
                          {
                            command: "_resumeGameMode",
                            data: { name: a.NormalGame },
                          },
                          { command: "_gameReset" },
                        ]
                      : [{ command: "_gameReset" }]),
                    t.prototype.forceToExit.call(this, i),
                    this.isSpinning
                      ? this.fastToResultClick()
                      : this.executeNextScript(this.exitScript);
                }),
                (s.onDisable = function () {
                  this.eventManager &&
                    this.eventManager.off(
                      "START_AUTO_SPIN_TRIAL",
                      this.startSpinTrial,
                      this
                    );
                }),
                (s._showBigWin_2 = function (t, i) {
                  this._showBigWin(t, i);
                }),
                (s._showBigWin = function (t, i) {
                  var e = this,
                    s = i.name,
                    n = i.matrix,
                    o = this.dataStore.playSession,
                    a = o.winType,
                    r = o.bigWinConfig,
                    u = o.bigwinAmount;
                  if (!a) return this.executeNextScript(t);
                  var l = {
                    winType: a,
                    bigWinConfig: r,
                    winAmount: u,
                    matrix: n,
                    currentBetData: this.dataStore.betData.getTotalBet(),
                  };
                  if (this.canStoreAsyncScript()) {
                    this.storeAsyncScript(t, {
                      callback: function () {
                        e.guiMgr.showCutScene(s, l, function () {
                          e.runAsyncScript();
                        });
                      },
                      name: "_showBigWin",
                      isSkippable: !0,
                    });
                  } else
                    this.guiMgr.showCutScene(s, l, function () {
                      e.executeNextScript(t);
                    });
                }),
                (s._spinClick = function (i) {
                  this.fsm.can("actionTrigger") &&
                    (this.guiMgr.hideAnimWin(),
                    this.guiMgr.stopAllWinLineSound(),
                    this.unschedule(this._delayTimeCallback),
                    this.dataStore.isAutoSpin ||
                      this.soundPlayer.playSfx("SPIN"),
                    t.prototype._spinClick.call(this, i));
                }),
                (s._resetSpinButton = function (i) {
                  t.prototype._resetSpinButton.call(this, i),
                    this.guiMgr.enablePlayTrialButton(!0);
                }),
                (s._updateTrialWalletAfterResume = function (t) {
                  var i = this.dataStore.playSession.winAmountPS;
                  i &&
                    (this.dataStore.setCurrentWallet(
                      this.dataStore.getCurrentWallet() + i
                    ),
                    (this.dataStore.isUpdatedTrialWallet = !0)),
                    this.executeNextScript(t);
                }),
                e
              );
            })(n))
          ) || r
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MainWriter9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotGameWriter.ts",
    "./CustomEnum.ts",
  ],
  function (a) {
    "use strict";
    var e, t, n, m, i, o;
    return {
      setters: [
        function (a) {
          e = a.inheritsLoose;
        },
        function (a) {
          (t = a.cclegacy), (n = a._decorator);
        },
        function (a) {
          m = a.SlotGameWriter;
        },
        function (a) {
          (i = a.SlotSceneType), (o = a.SlotGameMode);
        },
      ],
      execute: function () {
        var s;
        t._RF.push({}, "0d09cSBWd9M+4657l/lkXTz", "MainWriter9881", void 0);
        var u = n.ccclass;
        a(
          "MainWriter9881",
          u("MainWriter9881")(
            (s = (function (a) {
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
                      m = a.promotion,
                      s = n.NORMAL_TABLE_FORMAT,
                      u = n.FREE_TABLE_FORMAT,
                      d = a.playSession,
                      r = d.normalGameMatrix,
                      p = d.normalGamePaylines,
                      c = d.freeGameRemain,
                      l = d.freeGameMatrix,
                      h = d.winAmountPS,
                      _ = d.betId,
                      S = d.walletType,
                      g = d.normalMatrix0,
                      W = a.convertMatrix(r, s),
                      y = p ? a.convertPayLine(p) : null,
                      A = c && c > 0,
                      T = [];
                    if (
                      (m && ((e = m.promotionRemain), (t = m.promotionTotal)),
                      T.push({ command: "_updateBetId", data: _ }),
                      T.push({ command: "_loadWallet", data: S }),
                      T.push({ command: "_disableBet" }),
                      T.push({ command: "_showTrialButtons", data: !1 }),
                      T.push({ command: "_updateMatrix", data: { matrix: g } }),
                      (a.playSession.bigWild = a.getBigWild(W)),
                      T.push({
                        command: "_setUpPaylines",
                        data: { matrix: W, payLines: y },
                      }),
                      T.push({
                        command: "_setupBigWild",
                        data: {
                          matrix: g,
                          isResume: !0,
                          bigWild: a.playSession.bigWild,
                        },
                      }),
                      h &&
                        h > 0 &&
                        T.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: h, time: 0 },
                        }),
                      A)
                    ) {
                      var w = g;
                      l && (w = a.convertMatrix(l, u)),
                        T.push({ command: "_showScatterPayLine" }),
                        T.push({
                          command: "_showCutscene",
                          data: {
                            name: i.IntroFreeGame,
                            content: { isResume: !0 },
                          },
                        }),
                        T.push({
                          command: "_newGameMode",
                          data: {
                            name: o.FreeGame,
                            data: { matrix: w, isResume: !0 },
                          },
                        }),
                        T.push({
                          command: "_resumeGameMode",
                          data: { name: o.NormalGame },
                        });
                    }
                    return (
                      y &&
                        y.length > 0 &&
                        T.push({ command: "_showNormalSymbolPayLine" }),
                      T.push({ command: "_resumeWallets" }),
                      T.push({ command: "_gameFinish" }),
                      T.push({ command: "_gameRestart" }),
                      m &&
                        e &&
                        t &&
                        e > 0 &&
                        T.push({ command: "_showPromotionPopup" }),
                      T
                    );
                  }
                }),
                (n.makeScriptResultReceive = function () {
                  var a = this.node.dataStore,
                    e = a.playSession,
                    t = e.matrix0,
                    n = e.jackpotInfo,
                    m = e.extraVipJackpot,
                    i = [];
                  if (n) {
                    var o = n[n.length - 1].split(";"),
                      s = o[0].slice(7),
                      u = Number(o[1]);
                    i.push({ command: "_pauseUpdateJP" }),
                      i.push({
                        command: "_updateValueJP",
                        data: { jpType: s, jpValue: u - (m || 0) },
                      });
                  }
                  return (
                    i.push({
                      command: "_setupBigWild",
                      data: {
                        matrix: t,
                        isResume: !1,
                        bigWild: a.playSession.bigWild,
                      },
                    }),
                    i.push({ command: "_resultReceive", data: t }),
                    i.push({ command: "_showResult", data: t }),
                    i
                  );
                }),
                (n.makeScriptShowResults = function () {
                  var a = this.node.dataStore,
                    e = a.playSession,
                    t = e.matrix,
                    n = e.matrix0,
                    m = e.winAmount,
                    s = e.winAmountPS,
                    u = e.payLines,
                    d = e.freeGame,
                    r = e.jackpotInfo,
                    p = e.bigWild,
                    c = (e.isFinished, a.betData.getTotalBet()),
                    l = m && m >= 20 * c,
                    h = a.betData,
                    _ = a.config,
                    S = a && a.modeTurbo,
                    g = a && a.isAutoSpin,
                    W = a.gameSpeed === _.GAME_SPEED.INSTANTLY,
                    y = m / c,
                    A = W || r || d ? 0 : 1e3 * this._getTimeUpdateWinAmount(y),
                    T = [],
                    w = !1,
                    R = !d;
                  if (
                    (T.push({
                      command: "_setUpPaylines",
                      data: { matrix: t, payLines: u },
                    }),
                    (a.winRate = y),
                    r)
                  ) {
                    var f = r[r.length - 1].split(";"),
                      M = 0;
                    f && f.length > 0 && (M = Number(f[1])),
                      (S || W) &&
                        p &&
                        p.length &&
                        T.push({ command: "_delayTimeScript", data: 1 }),
                      T.push({ command: "_showJackpotPayLine" }),
                      T.push({
                        command: "_showUnskippedCutscene",
                        data: {
                          name: i.JackpotWin,
                          content: {
                            winAmount: M,
                            currentBetData: h.getTotalBet(),
                          },
                        },
                      }),
                      T.push({ command: "_resumeUpdateJP" }),
                      T.push({
                        command: "_updateWinningAmount",
                        data: { winAmount: M, time: 0, rate: y },
                      });
                  }
                  if (
                    (l &&
                      ((S || W) &&
                        p &&
                        p.length &&
                        T.push({ command: "_delayTimeScript", data: 1 }),
                      (S || W) &&
                        T.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: s, time: A, rate: y },
                        }),
                      T.push({ command: "_blinkAllPaylines" }),
                      T.push({
                        command: "_showBigWin",
                        data: { name: i.BigWin, matrix: t },
                      }),
                      S ||
                        W ||
                        T.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: s, time: 300, rate: y },
                        })),
                    !l &&
                      u &&
                      (!R ||
                        g ||
                        w ||
                        (T.push({ command: "_gameRestart" }), (w = !0)),
                      d ||
                        ((S || W) &&
                          p &&
                          p.length &&
                          T.push({ command: "_delayTimeScript", data: 1 }),
                        T.push({ command: "_playSoundWinLine", data: y }),
                        T.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: s, time: A, rate: y },
                        }),
                        T.push({ command: "_blinkAllPaylines" }))),
                    d && d > 0)
                  ) {
                    var P = a.spinTimes;
                    T.push({ command: "_playSoundWinLine", data: 2 }),
                      s && s > 0
                        ? T.push({
                            command: "_updateWinningAmount",
                            data: { winAmount: s, time: 0, rate: 2 },
                          })
                        : T.push({ command: "_clearWinAmount" }),
                      (W || S) &&
                        T.push({ command: "_delayTimeScript", data: 1 }),
                      T.push({ command: "_showScatterPayLine" }),
                      T.push({
                        command: "_showUnskippedCutscene",
                        data: { name: i.IntroFreeGame },
                      }),
                      T.push({
                        command: "_newGameMode",
                        data: {
                          name: o.FreeGame,
                          data: { matrix: n, isResume: !1 },
                        },
                      }),
                      T.push({
                        command: "_resumeGameMode",
                        data: { name: o.NormalGame },
                      }),
                      P &&
                        P > 0 &&
                        T.push({ command: "_resumeSpinTime", data: P }),
                      a.isTrialMode &&
                        (T.push({ command: "_updateTrialWalletAfterResume" }),
                        T.push({ command: "_stopStepTrialMode" })),
                      g ||
                        w ||
                        S ||
                        (T.push({ command: "_gameRestart" }), (w = !0));
                  }
                  return (
                    g || w || (T.push({ command: "_gameRestart" }), (w = !0)),
                    T.push({ command: "_resumeWallets" }),
                    u &&
                      u.length > 0 &&
                      (d && T.push({ command: "_blinkAllPaylines" }),
                      T.push({ command: "_showNormalPayline" })),
                    T.push({ command: "_gameFinish" }),
                    w || T.push({ command: "_gameRestart" }),
                    T
                  );
                }),
                (n.makeScriptGameRestart = function () {
                  var a,
                    e = this.node.dataStore,
                    t = [],
                    n = e.playSession,
                    m = n.freeGameRemain,
                    i = n.respinGameRemain,
                    o = (e.playSession.isTrialMode, e.spinTimes),
                    s = e.promotion;
                  return (
                    s && (a = s.promotionRemain),
                    this.scriptUpdateWinAmount(),
                    a &&
                      a > 0 &&
                      (t.push({ command: "_showTrialButtons", data: !1 }),
                      t.push({ command: "_resetPromotionButtons" })),
                    o && o > 0
                      ? (m && m > 0) || (i && i > 0)
                        ? t.push({ command: "_runAutoSpin" })
                        : (s && a) || t.push({ command: "_runAutoSpin" })
                      : (!a || a <= 0) &&
                        (t.push({ command: "_enableBet" }),
                        t.push({ command: "_exitPromotionMode" }),
                        t.push({ command: "_resetSpinButton" }),
                        t.push({ command: "_showTrialButtons", data: !0 })),
                    t.push({ command: "_runAsyncScript" }),
                    t
                  );
                }),
                (n.makeScriptGameFinish = function () {
                  var a = this.node.dataStore,
                    e = a.playSession.winAmountPS;
                  return (
                    a.isTrialMode &&
                      (e &&
                        !a.isUpdatedTrialWallet &&
                        a.setCurrentWallet(a.getCurrentWallet() + e),
                      (a.isUpdatedTrialWallet = !1)),
                    []
                  );
                }),
                (n.scriptUpdateWinAmount = function () {}),
                (n._getTimeUpdateWinAmount = function (a) {
                  var e = 0;
                  return (
                    a > 0 && a < 1 && (e = 0),
                    a >= 1 && a < 3 && (e = 0),
                    a >= 3 && a < 10 && (e = 2.2),
                    a >= 10 && a < 20 && (e = 4.16),
                    e
                  );
                }),
                t
              );
            })(m))
          ) || s
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ReelBackgroundFree9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (o) {
    "use strict";
    var t, e, r, n, i, l, s, c, h;
    return {
      setters: [
        function (o) {
          (t = o.inheritsLoose), (e = o.createClass);
        },
        function (o) {
          (r = o.cclegacy),
            (n = o._decorator),
            (i = o.Sprite),
            (l = o.Vec3),
            (s = o.Color),
            (c = o.tween),
            (h = o.Component);
        },
      ],
      execute: function () {
        var u;
        r._RF.push(
          {},
          "6a3e4ZH7xtN7agGRH/AThWw",
          "ReelBackgroundFree9881",
          void 0
        );
        var a = n.ccclass;
        n.property,
          o(
            "ReelBackgroundFree9881",
            a("ReelBackgroundFree9881")(
              (u = (function (o) {
                function r() {
                  for (
                    var t, e = arguments.length, r = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    r[n] = arguments[n];
                  return (
                    ((t =
                      o.call.apply(o, [this].concat(r)) || this)._reelSprite =
                      null),
                    (t._tweenColor = void 0),
                    (t.colorSymbol = new s()),
                    (t._currentColor = new l(255, 255, 255)),
                    (t._targetColor = new l(255, 255, 255)),
                    t
                  );
                }
                t(r, o);
                var n = r.prototype;
                return (
                  (n.onLoad = function () {
                    this.node.on(
                      "ENABLE_HIGHLIGHT_REEL_BG",
                      this.enableHighlight,
                      this
                    ),
                      this.node.on(
                        "DISABLE_HIGHLIGHT_REEL_BG",
                        this.disableHighlight,
                        this
                      ),
                      (this._reelSprite = this.node.getComponent(i));
                  }),
                  (n.reset = function () {
                    this._tweenColor && this._tweenColor.stop(),
                      (this._tweenColor = null),
                      (this.currentColor = new l(255, 255, 255));
                  }),
                  (n.tweenColor = function (o, t) {
                    var e = this;
                    void 0 === t && (t = 0),
                      this._tweenColor && this._tweenColor.stop();
                    var r = o ? 150 : 255;
                    t && this.node.active
                      ? (this.convertFromColorToVec3(
                          this._targetColor,
                          new s(r, r, r, 255)
                        ),
                        (this._tweenColor = c(this)
                          .to(t, { currentColor: this._targetColor })
                          .call(function () {
                            e._tweenColor = null;
                          })
                          .start()))
                      : (this._reelSprite.color = new s(r, r, r, 255));
                  }),
                  (n.setColor = function (o) {
                    this._reelSprite.color = o;
                  }),
                  (n.convertFromVec3ToColor = function (o, t) {
                    (o.r = t.x), (o.g = t.y), (o.b = t.z);
                  }),
                  (n.convertFromColorToVec3 = function (o, t) {
                    (o.x = t.r), (o.y = t.g), (o.z = t.b);
                  }),
                  (n.enableHighlight = function () {
                    this.tweenColor(!1, 0.2);
                  }),
                  (n.disableHighlight = function () {
                    this.tweenColor(!0, 0.2);
                  }),
                  (n.onDestroy = function () {
                    this._tweenColor && this._tweenColor.stop(),
                      (this._tweenColor = null);
                  }),
                  e(r, [
                    {
                      key: "currentColor",
                      get: function () {
                        return this._currentColor;
                      },
                      set: function (o) {
                        (this._currentColor = o),
                          this.convertFromVec3ToColor(
                            this.colorSymbol,
                            this._currentColor
                          ),
                          this.setColor(this.colorSymbol);
                      },
                    },
                  ]),
                  r
                );
              })(h))
            ) || u
          );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/RotateIcon9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./RotateIcon.ts"],
  function (t) {
    "use strict";
    var e, o, n, r, c;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (n = t._decorator), (r = t.tween);
        },
        function (t) {
          c = t.RotateIcon;
        },
      ],
      execute: function () {
        var i;
        o._RF.push({}, "d4e90G/+rFA/Yfawo/Gwvrh", "RotateIcon9881", void 0);
        var a = n.ccclass;
        n.property,
          t(
            "RotateIcon9881",
            a("RotateIcon9881")(
              (i = (function (t) {
                function o() {
                  return t.apply(this, arguments) || this;
                }
                e(o, t);
                var n = o.prototype;
                return (
                  (n.onLoad = function () {
                    t.prototype.onLoad.call(this);
                  }),
                  (n.rotateIcon = function (t) {
                    void 0 === t && (t = 2),
                      this.tweenRotate && this.tweenRotate.stop(),
                      (this.tweenRotate = r(this.node.children[0])),
                      this.tweenRotate
                        .by(t, { angle: -360 * this.direction })
                        .repeatForever()
                        .start();
                  }),
                  o
                );
              })(c))
            ) || i
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ScrollModeItem9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, o, r, s, l, c, h;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy), (s = e._decorator), (l = e.Node);
        },
        function (e) {
          c = e.changeParent;
        },
        function (e) {
          h = e.GameObject;
        },
      ],
      execute: function () {
        var a, d, u, g, p;
        r._RF.push({}, "22a3baixS5O6JwelHTr2vJK", "ScrollModeItem9881", void 0);
        var f = s.ccclass,
          I = s.property;
        e(
          "ScrollModeItem9881",
          ((a = f("ScrollModeItem9881")),
          (d = I({ type: l })),
          a(
            ((p = t(
              (g = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, r = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    n(t, "highlightHolder", p, o(t)),
                    (t.pageIndex = 0),
                    (t.modeIndex = 0),
                    (t.eventTarget = null),
                    (t.mode = ""),
                    t
                  );
                }
                i(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    this.node.on(
                      "SHOW_HIGHLIGHT",
                      this.showHighlight.bind(this)
                    ),
                      this.node.on("ON_CLICK", this.onClick.bind(this));
                  }),
                  (r.showHighlight = function (e) {
                    c(e, this.highlightHolder), e.setPosition(0, 0);
                  }),
                  (r.setIndex = function (e, t, i) {
                    (this.mode = e), (this.pageIndex = t), (this.modeIndex = i);
                  }),
                  (r.setEvent = function (e) {
                    this.eventTarget = e;
                  }),
                  (r.onClick = function () {
                    this.eventTarget &&
                      this.eventTarget.emit(
                        "ON_SCROLL_ITEM_CLICK",
                        this.mode,
                        this.pageIndex,
                        this.modeIndex
                      );
                  }),
                  t
                );
              })(h)).prototype,
              "highlightHolder",
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
            (u = g))
          ) || u)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetHistory9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotBetHistory.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var e, i, o, n, s;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          n = t.SlotBetHistory;
        },
        function (t) {
          s = t.SlotSceneType;
        },
      ],
      execute: function () {
        var r;
        i._RF.push({}, "3247bKD+IFC16/SQI14vc/S", "SlotBetHistory9881", void 0);
        var a = o.ccclass;
        o.property,
          t(
            "SlotBetHistory9881",
            a("SlotBetHistory9881")(
              (r = (function (t) {
                function i() {
                  return t.apply(this, arguments) || this;
                }
                e(i, t);
                var o = i.prototype;
                return (
                  (o.openPanel = function () {
                    t.prototype.openPanel.call(this),
                      this.pagination && (this.pagination.active = !1);
                  }),
                  (o.onRequestBetResponse = function (e) {
                    t.prototype.onRequestBetResponse.call(this, e),
                      this.noBetHistoryText.active || this.errorMessage.active
                        ? (this.pagination.active = !1)
                        : (this.pagination.active = !0);
                  }),
                  (o.requestErr = function () {
                    t.prototype.requestErr.call(this),
                      this.noBetHistoryText.active || this.errorMessage.active
                        ? (this.pagination.active = !1)
                        : (this.pagination.active = !0);
                  }),
                  (o.hideSettingPanel = function () {
                    (this.historyTable.active = !0),
                      (this.historyDetail.active = !1),
                      this.guiMgr.hideCutScene(s.Setting);
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
  "chunks:///_virtual/SlotBetHistoryDetail9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotBetHistoryDetail.ts",
    "./CustomType9881.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, a, s, r, l, h, c, u, d, p, m, g, S, v, f, C;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (s = t._decorator),
            (r = t.EventTarget),
            (l = t.Prefab),
            (h = t.Node),
            (c = t.Button),
            (u = t.instantiate),
            (d = t.Label),
            (p = t.Toggle),
            (m = t.Vec2),
            (g = t.Layout),
            (S = t.UITransform),
            (v = t.Sprite);
        },
        function (t) {
          f = t.SlotBetHistoryDetail;
        },
        function (t) {
          C = t.ButtonState9881;
        },
      ],
      execute: function () {
        var M, b, B, I, y, w, x, V, D, G;
        a._RF.push(
          {},
          "21806ysJztOc4tFVbaRY2CY",
          "SlotBetHistoryDetail9881",
          void 0
        );
        var P = s.ccclass,
          L = s.property,
          F = new r();
        t(
          "SlotBetHistoryDetail9881",
          ((M = P("SlotBetHistoryDetail9881")),
          (b = L({ type: l })),
          (B = L({ type: h })),
          (I = L({ type: C })),
          M(
            ((x = e(
              (w = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "scrollModeItem", x, o(e)),
                    n(e, "highlight", V, o(e)),
                    n(e, "scrollModeItemName", D, o(e)),
                    n(e, "buttonStateSpriteFrame", G, o(e)),
                    (e.scrollList = []),
                    (e.scrollItemDataIndex = []),
                    (e.pageData = []),
                    (e.currentPageIndex = -1),
                    (e.currentModeIndex = 0),
                    (e._usingObjects = []),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      F.on(
                        "ON_SCROLL_ITEM_CLICK",
                        this.onScrollItemClick,
                        this
                      ),
                      this.prevModeBtn && (this.prevModeBtn.active = !0),
                      this.nextModeBtn && (this.nextModeBtn.active = !0),
                      (this._usingObjects = []);
                  }),
                  (a.getModeIndex = function (t) {
                    var e = this;
                    (this.nextModeBtn.getComponent(c).interactable = !0),
                      (this.isGetMode = !0);
                    var i = 0,
                      n = "";
                    if (((this.scrollList = []), t)) {
                      var o = 0;
                      t.forEach(function (t) {
                        var a = t.split(":"),
                          s = a[1];
                        if ("bonus" != s || ("bonus" == s && "init" != a[3])) {
                          var r = 0;
                          switch (
                            (e.scrollList.push(s),
                            e.scrollItemDataIndex.push(Number(a[0])),
                            s)
                          ) {
                            case "normal":
                              n = "Normal";
                              break;
                            case "free":
                              i++, (n = "Free Game" + i), (r = i);
                          }
                          e.addScrollModeItem(s, n, o++, r);
                        }
                      });
                    }
                  }),
                  (a.addScrollModeItem = function (t, e, i, n) {
                    void 0 === e && (e = ""),
                      void 0 === i && (i = 0),
                      void 0 === n && (n = 0);
                    var o = u(this.scrollModeItem);
                    o.active = !0;
                    var a = o.getComponent(this.scrollModeItemName);
                    a.setIndex(t, i, n),
                      a.setEvent(F),
                      this.scrollContent.addChild(o),
                      (o.getComponentInChildren(d).string = e),
                      this._usingObjects.push(o);
                  }),
                  (a.updateGameMode = function (t) {
                    (this.pageData[this.currentPageIndex] = t),
                      (t.modeIndex = this.currentModeIndex),
                      this.normalGameView &&
                        this.normalGameView.active &&
                        this.normalGameView.emit("UPDATE_DETAIL_VIEW", t),
                      this.freeGameView &&
                        this.freeGameView.active &&
                        this.freeGameView.emit("UPDATE_DETAIL_VIEW", t);
                  }),
                  (a.onScrollItemClick = function (t, e, i) {
                    void 0 === e && (e = 0),
                      void 0 === i && (i = 0),
                      (this.currentPageIndex = e),
                      (this.currentModeIndex = i),
                      this.onShowGameMode(t, e),
                      this.updateHighlight(e + 1),
                      this.updateScrollView();
                    for (
                      var n = 0;
                      n < this.scrollContent.children.length;
                      n++
                    ) {
                      var o = this.scrollContent.children[n];
                      e + 1 !== n &&
                        (o.getComponentInChildren(p).isChecked = !1);
                    }
                  }),
                  (a.onPrevMode = function () {
                    this.currentPageIndex--;
                    var t = this.currentPageIndex + 1;
                    if (
                      (this.nextModeBtn &&
                        (this.nextModeBtn.getComponent(c).interactable = !0),
                      0 === t)
                    )
                      return (
                        this.onShowGameMode("summary", -1),
                        this.updateScrollView(),
                        void (this.prevModeBtn.getComponent(c).interactable =
                          !1)
                      );
                    var e = this.scrollContent.children[t];
                    e &&
                      (e.emit("ON_CLICK"),
                      this.updateScrollView(),
                      this.soundPlayer && this.soundPlayer.playSFXClick());
                  }),
                  (a.onNextMode = function () {
                    this.currentPageIndex++;
                    var t = this.currentPageIndex + 1,
                      e = this.scrollContent.children[t];
                    this.prevModeBtn &&
                      (this.prevModeBtn.getComponent(c).interactable = !0),
                      t === this.scrollContent.children.length - 1 &&
                        (this.nextModeBtn.getComponent(c).interactable = !1),
                      e &&
                        (e.emit("ON_CLICK"),
                        this.updateHighlight(this.currentPageIndex + 1),
                        this.updateScrollView(),
                        this.soundPlayer && this.soundPlayer.playSFXClick());
                  }),
                  (a.onShowSummaryView = function (t) {
                    this.onShowGameMode("summary", 0);
                  }),
                  (a.onShowGameMode = function (t, e) {
                    switch (
                      (void 0 === t && (t = "summary"),
                      void 0 === e && (e = 0),
                      this.hideAllView(),
                      this.enableGameModeButtons(!0),
                      this.soundPlayer && this.soundPlayer.playSFXClick(),
                      this.normalGameView &&
                        (this.normalGameView.emit("CLEAR_TABLE"),
                        (this.normalGameView.active = !1)),
                      this.freeGameView &&
                        (this.freeGameView.emit("CLEAR_TABLE"),
                        (this.freeGameView.active = !1)),
                      t)
                    ) {
                      case "summary":
                        (this.currentPageIndex = -1),
                          (this.summaryBtn.getComponent(c).interactable = !1),
                          (this.summaryView.active = !0),
                          (this.scrollContent.children[0].index = -1),
                          this.updateHighlight(0),
                          this.updateButtonStatus(this.prevModeBtn, !1),
                          this.updateButtonStatus(this.nextModeBtn, !0);
                        break;
                      case "normal":
                        this.normalGameView &&
                          (this.normalGameView.active = !0),
                          this.pageData[e]
                            ? this.updateGameMode(this.pageData[e])
                            : e >= 0 &&
                              this.requestDetail(this.scrollItemDataIndex[e]),
                          2 === this.scrollList.length &&
                            (this.nextModeBtn.getComponent(c).interactable =
                              !1),
                          this.updateButtonStatus(this.prevModeBtn, !0),
                          this.updateButtonStatus(
                            this.nextModeBtn,
                            e < this.scrollList.length - 1
                          );
                        break;
                      case "free":
                        this.freeGameView && (this.freeGameView.active = !0),
                          this.pageData[e]
                            ? this.updateGameMode(this.pageData[e])
                            : e >= 0 &&
                              this.requestDetail(this.scrollItemDataIndex[e]),
                          e === this.scrollList.length - 1 &&
                            (this.nextModeBtn.getComponent(c).interactable =
                              !1),
                          this.updateButtonStatus(this.prevModeBtn, !0),
                          this.updateButtonStatus(
                            this.nextModeBtn,
                            e < this.scrollList.length - 1
                          );
                    }
                  }),
                  (a.updateHighlight = function (t) {
                    for (
                      var e = 0;
                      e < this.scrollContent.children.length;
                      e++
                    ) {
                      var i = this.scrollContent.children[e];
                      t === e && i.emit("SHOW_HIGHLIGHT", this.highlight);
                    }
                  }),
                  (a.enableGameModeButtons = function (t) {
                    this.summaryBtn &&
                      (this.summaryBtn.getComponent(c).interactable = t);
                  }),
                  (a.updateScrollView = function () {
                    if (this.currentPageIndex <= 0)
                      this.scrollView.scrollToOffset(new m(0, 0), 0.1);
                    else {
                      var t = this.currentPageIndex * this.itemWidth;
                      this.scrollView.scrollToOffset(new m(t, 0), 0.1);
                    }
                  }),
                  (a.onScrolling = function (e) {
                    t.prototype.onScrolling.call(this, e),
                      (this.prevModeBtn.active = !0),
                      (this.nextModeBtn.active = !0);
                  }),
                  (a.onScrollEnded = function () {
                    var t = this.scrollView.getScrollOffset();
                    this.currentOffset = new m(Math.abs(t.x), Math.abs(t.y));
                  }),
                  (a.checkMaxModePages = function () {
                    if (this.scrollContent) {
                      this.spacingX =
                        this.scrollContent.getComponent(g).spacingX;
                      var t = this.scrollContent.children[0];
                      this.itemWidth = t.getComponent(S).width;
                      var e = this.scrollView.node.getComponent(S).width,
                        i = this.scrollContent.getComponent(S).width;
                      this.maxPage = Math.ceil(i / e);
                    }
                    this.updateButtonStatus(this.prevModeBtn, !1),
                      this.updateButtonStatus(this.nextModeBtn, !0);
                  }),
                  (a.resetUI = function () {
                    var e = this;
                    t.prototype.resetUI.call(this),
                      this._usingObjects.forEach(function (t) {
                        e.scrollContent.removeChild(t);
                      }),
                      (this.prevModeBtn.active = !0),
                      (this.nextModeBtn.active = !0),
                      this.updateButtonStatus(this.prevModeBtn, !1),
                      this.updateButtonStatus(this.nextModeBtn, !1),
                      (this._usingObjects = []),
                      this.updateHighlight(0);
                  }),
                  (a.resetData = function () {
                    t.prototype.resetData.call(this),
                      (this.pageData = []),
                      (this.currentPageIndex = -1),
                      (this.currentModeIndex = 0),
                      (this.scrollItemDataIndex = []);
                  }),
                  (a.requestErr = function () {
                    t.prototype.requestErr.call(this),
                      this.updateButtonStatus(this.prevModeBtn, !1),
                      this.updateButtonStatus(this.nextModeBtn, !1);
                  }),
                  (a.updateButtonStatus = function (t, e) {
                    (t.active = !0),
                      (t.getComponent(c).interactable = e),
                      e
                        ? ((t.getComponent(v).spriteFrame =
                            this.buttonStateSpriteFrame.normalState),
                          (t.getComponent(c).normalSprite =
                            this.buttonStateSpriteFrame.normalState),
                          (t.getComponent(c).pressedSprite =
                            this.buttonStateSpriteFrame.pressedState),
                          (t.getComponent(c).hoverSprite =
                            this.buttonStateSpriteFrame.hoverState),
                          (t.getComponent(c).disabledSprite =
                            this.buttonStateSpriteFrame.normalState))
                        : ((t.getComponent(v).spriteFrame =
                            this.buttonStateSpriteFrame.disableState),
                          (t.getComponent(c).normalSprite =
                            this.buttonStateSpriteFrame.disableState),
                          (t.getComponent(c).pressedSprite =
                            this.buttonStateSpriteFrame.disableState),
                          (t.getComponent(c).hoverSprite =
                            this.buttonStateSpriteFrame.disableState),
                          (t.getComponent(c).disabledSprite =
                            this.buttonStateSpriteFrame.disableState));
                  }),
                  e
                );
              })(f)).prototype,
              "scrollModeItem",
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
            (V = e(w.prototype, "highlight", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(w.prototype, "scrollModeItemName", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "ScrollModeItem9881";
              },
            })),
            (G = e(w.prototype, "buttonStateSpriteFrame", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = w))
          ) || y)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetSummaryHistory9881.ts",
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
        var u;
        o._RF.push(
          {},
          "fd717CTDbVPSIEbxJpEs9hq",
          "SlotBetSummaryHistory9881",
          void 0
        );
        var e = i.ccclass;
        t(
          "SlotBetSummaryHistory9881",
          e("SlotBetSummaryHistory9881")(
            (u = (function (t) {
              function o() {
                return t.apply(this, arguments) || this;
              }
              return (
                n(o, t),
                (o.prototype.updateSummary = function (t) {
                  t &&
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
                    this.jackpotWinAmount &&
                      ((this.jackpotWinAmount.string = s(
                        parseInt(t.totalJpWinAmount)
                      )),
                      (this.jackpotWinAmount.node.active = !0)));
                }),
                o
              );
            })(r))
          ) || u
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetTableHistoryDetail9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotBetTableHistoryDetail.ts",
    "./CustomEnum.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, a, o, l, r, s, p, c, u, h, m, f;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (l = t._decorator),
            (r = t.Label),
            (s = t.Node),
            (p = t.Sprite),
            (c = t.SpriteFrame),
            (u = t.Color);
        },
        function (t) {
          h = t.SlotBetTableHistoryDetail;
        },
        function (t) {
          m = t.SlotGameMode;
        },
        function (t) {
          f = t.formatMoney;
        },
      ],
      execute: function () {
        var b, d, y, g, k, E, x, v, w, T, I, A, S, D, H, W, B, F, C, L, N;
        o._RF.push(
          {},
          "08f76Pq6AJDsacJPKzhib7D",
          "SlotBetTableHistoryDetail9881",
          void 0
        );
        var z = l.ccclass,
          _ = l.property;
        t(
          "SlotBetTableHistoryDetail9881",
          ((b = z("SlotBetTableHistoryDetail9881")),
          (d = _({ type: r })),
          (y = _({ type: s })),
          (g = _({ type: s })),
          (k = _({ type: s })),
          (E = _({ type: s })),
          (x = _({ type: s })),
          (v = _({ type: s })),
          (w = _({ type: p })),
          (T = _({ type: c })),
          b(
            ((S = e(
              (A = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    o[l] = arguments[l];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "pageTitle", S, a(e)),
                    n(e, "k2Expand", D, a(e)),
                    n(e, "k3Expand", H, a(e)),
                    n(e, "k1Expand", W, a(e)),
                    n(e, "battle", B, a(e)),
                    n(e, "frameRabbit", F, a(e)),
                    n(e, "frameSwallow", C, a(e)),
                    n(e, "multiplier", L, a(e)),
                    n(e, "multiplierFrames", N, a(e)),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.updateDetailView = function (e, i) {
                    t.prototype.updateDetailView.call(this, e, i),
                      this.sceneType === m.FreeGame && this.showBattle();
                  }),
                  (o.showBigWild = function () {
                    var t = this,
                      e =
                        (-this.data.matrixFormat.length / 2 + 0.5) *
                        this.config.SYMBOL_WIDTH;
                    this.symbols.forEach(function (i, n) {
                      var a = 0;
                      if (
                        (i.forEach(function (t) {
                          t.symbol.includes("K") && a++;
                        }),
                        3 === a)
                      ) {
                        var o = e + t.config.SYMBOL_WIDTH * n;
                        2 === n
                          ? t.k1Expand && (t.k1Expand.active = !0)
                          : n < 2
                          ? ((t.k2Expand.active = !0),
                            t.k2Expand.setPosition(o, t.k2Expand.position.y))
                          : ((t.k3Expand.active = !0),
                            t.k3Expand.setPosition(o, t.k3Expand.position.y)),
                          t.hideSymbolAtCol(n);
                      }
                    });
                  }),
                  (o.hideSymbolAtCol = function (t) {
                    this.symbols[t].forEach(function (t) {
                      t.active = !1;
                    });
                  }),
                  (o.showBattle = function () {
                    if (this.battle) {
                      var t = this.data.result.metaDataDetail,
                        e = t.sFt,
                        i = t.fGb,
                        n = t.mTf;
                      if (e && i && n)
                        if (n > 0) {
                          (this.battle.active = !0),
                            this.k1Expand && (this.k1Expand.active = !1),
                            this.k2Expand && (this.k2Expand.active = !1),
                            this.k3Expand && (this.k3Expand.active = !1),
                            this.hideSymbolAtCol(1),
                            this.hideSymbolAtCol(2),
                            this.hideSymbolAtCol(3);
                          var a = this.multiplierFrames[0];
                          4 === n
                            ? (a = this.multiplierFrames[1])
                            : 8 === n && (a = this.multiplierFrames[2]),
                            (this.multiplier.spriteFrame = a);
                          for (
                            var o = "K2" === i, l = e.split(","), r = 0;
                            r < l.length;
                            r++
                          )
                            r > 0 && (o = !o);
                          (this.frameRabbit.active = o),
                            (this.frameSwallow.active = !o);
                        } else this.battle.active = !1;
                    }
                  }),
                  (o.updateTotalWinAmount = function (t) {
                    (this.totalWinAmount.string = ""),
                      this.sceneType === m.FreeGame
                        ? ((this.pageTitle.string = "Free Game"),
                          t.modeIndex &&
                            (this.pageTitle.string += " " + t.modeIndex),
                          t.latestWinJackpotInfo &&
                          t.latestWinJackpotInfo.length
                            ? ((this.pageTitle.string += " + Jackpot:"),
                              (this.totalWinAmount.string = f(
                                parseInt(
                                  t.latestWinJackpotInfo[0].jackpotAmount
                                ) + parseInt(t.winAmount)
                              )))
                            : t.winAmount &&
                              ((this.pageTitle.string += ":"),
                              (this.totalWinAmount.string = f(
                                parseInt(t.winAmount)
                              ))))
                        : this.sceneType === m.NormalGame &&
                          ((this.pageTitle.string = "Normal"),
                          t.latestWinJackpotInfo &&
                          t.latestWinJackpotInfo.length
                            ? ((this.pageTitle.string += " + Jackpot:"),
                              (this.totalWinAmount.string = f(
                                parseInt(
                                  t.latestWinJackpotInfo[0].jackpotAmount
                                ) + parseInt(t.winAmount)
                              )))
                            : t.winAmount &&
                              ((this.pageTitle.string += ":"),
                              (this.totalWinAmount.string = f(
                                parseInt(t.winAmount)
                              ))));
                  }),
                  (o.clearTable = function () {
                    t.prototype.clearTable.call(this),
                      this.k2Expand &&
                        (this.k2Expand.getComponent(p).color = new u(
                          255,
                          255,
                          255,
                          255
                        )),
                      this.k3Expand &&
                        (this.k3Expand.getComponent(p).color = new u(
                          255,
                          255,
                          255,
                          255
                        )),
                      this.k1Expand && (this.k1Expand.active = !1),
                      this.k2Expand && (this.k2Expand.active = !1),
                      this.k3Expand && (this.k3Expand.active = !1),
                      this.battle && (this.battle.active = !1);
                  }),
                  (o.showPaylines = function () {
                    var t = this;
                    if (
                      (this.showBigWild(),
                      this.hasPayline &&
                        this.data.paylines &&
                        this.data.paylines.length &&
                        "[]" !== this.data.paylines)
                    ) {
                      this.k2Expand &&
                        (this.k2Expand.getComponent(p).color = new u(
                          80,
                          80,
                          80,
                          255
                        )),
                        this.k3Expand &&
                          (this.k3Expand.getComponent(p).color = new u(
                            80,
                            80,
                            80,
                            255
                          ));
                      var e = this.dataStore.convertPayLine(this.data.paylines);
                      this.slotTable.children.forEach(function (t) {
                        t.emit("DISABLE_HIGHLIGHT_HISTORY");
                      }),
                        e.forEach(function (e) {
                          var i = e.symbolName,
                            n = e.payLineWinNumbers,
                            a = e.payLineID;
                          t.slotTable.children.forEach(function (e) {
                            (e.symbolName === i.trim() ||
                              "K1" === e.symbolName ||
                              "K2" === e.symbolName ||
                              "K3" === e.symbolName) &&
                              e.col < n &&
                              ("K2" === e.symbolName
                                ? t.k2Expand &&
                                  (t.k2Expand.getComponent(p).color = new u(
                                    255,
                                    255,
                                    255,
                                    255
                                  ))
                                : "K3" === e.symbolName &&
                                  t.k3Expand &&
                                  (t.k3Expand.getComponent(p).color = new u(
                                    255,
                                    255,
                                    255,
                                    255
                                  )));
                          });
                          var o = t.config.PAY_LINE_MATRIX[a.trim()];
                          if (o && o.length && t.symbols.length > 0)
                            for (var l = 0; l < n; ++l) {
                              var r = o[l],
                                s = l,
                                c = t.symbols[s][r];
                              c &&
                                c.active &&
                                c.emit("ENABLE_HIGHLIGHT_HISTORY");
                            }
                        });
                    }
                  }),
                  e
                );
              })(h)).prototype,
              "pageTitle",
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
            (D = e(A.prototype, "k2Expand", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = e(A.prototype, "k3Expand", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = e(A.prototype, "k1Expand", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = e(A.prototype, "battle", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = e(A.prototype, "frameRabbit", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = e(A.prototype, "frameSwallow", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(A.prototype, "multiplier", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(A.prototype, "multiplierFrames", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (I = A))
          ) || I)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotButton9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotButton.ts"],
  function (t) {
    "use strict";
    var o, i, e, n, r, l, p, s, a;
    return {
      setters: [
        function (t) {
          (o = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy), (l = t._decorator), (p = t.Node), (s = t.Sprite);
        },
        function (t) {
          a = t.SlotButton;
        },
      ],
      execute: function () {
        var c, u, h, m, S, d, f, v, b;
        r._RF.push({}, "f231eb5PzlMfY8D8qlav5zz", "SlotButton9881", void 0);
        var y = l.ccclass,
          T = l.property;
        t(
          "SlotButton9881",
          ((c = y("SlotButton9881")),
          (u = T(p)),
          (h = T(p)),
          (m = T(p)),
          c(
            ((f = o(
              (d = (function (t) {
                function o() {
                  for (
                    var o, i = arguments.length, r = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (o = t.call.apply(t, [this].concat(r)) || this),
                    e(o, "promotionSpinTimes", f, n(o)),
                    e(o, "promotionIconSpin", v, n(o)),
                    e(o, "promotionNode", b, n(o)),
                    o
                  );
                }
                i(o, t);
                var r = o.prototype;
                return (
                  (r.showSpin = function () {
                    (this.btnSpin.node.active = !0),
                      this.textSpin &&
                        this.txtHoldToAuto &&
                        (this.textSpin.getComponent(s).spriteFrame =
                          this.txtHoldToAuto);
                  }),
                  (r.hideSpin = function () {
                    this.cancelAutoSpinPanel(), (this.btnSpin.node.active = !1);
                  }),
                  (r.disableFastToResult = function () {
                    this.textSpin &&
                      this.txtPressToStop &&
                      (this.textSpin.getComponent(s).spriteFrame =
                        this.txtPressToStop),
                      t.prototype.disableFastToResult.call(this);
                  }),
                  (r.showAllPromoUI = function () {
                    t.prototype.showAllPromoUI.call(this),
                      (this.promotionSpinTimes.active = !0),
                      (this.promotionIconSpin.active = !0),
                      (this.promotionNode.active = !0);
                  }),
                  (r.hideAllPromoUI = function () {
                    t.prototype.hideAllPromoUI.call(this),
                      (this.promotionSpinTimes.active = !1),
                      (this.promotionIconSpin.active = !1),
                      (this.promotionNode.active = !1);
                  }),
                  o
                );
              })(a)).prototype,
              "promotionSpinTimes",
              [u],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (v = o(d.prototype, "promotionIconSpin", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (b = o(d.prototype, "promotionNode", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (S = d))
          ) || S)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotJackpotHistory9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotJackpotHistory.ts"],
  function (t) {
    "use strict";
    var o, i, e, s;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (e = t._decorator);
        },
        function (t) {
          s = t.SlotJackpotHistory;
        },
      ],
      execute: function () {
        var n;
        i._RF.push(
          {},
          "897fdBrTXRGcaE31ghQyO8J",
          "SlotJackpotHistory9881",
          void 0
        );
        var a = e.ccclass;
        e.property,
          t(
            "SlotJackpotHistory9881",
            a("SlotJackpotHistory9881")(
              (n = (function (t) {
                function i() {
                  return t.apply(this, arguments) || this;
                }
                o(i, t);
                var e = i.prototype;
                return (
                  (e.openPanel = function () {
                    t.prototype.openPanel.call(this),
                      this.pagination && (this.pagination.active = !1);
                  }),
                  (e.onRequestResponse = function (o) {
                    t.prototype.onRequestResponse.call(this, o),
                      this.noJackpotText.active || this.errorMessage.active
                        ? (this.pagination.active = !1)
                        : (this.pagination.active = !0);
                  }),
                  (e.requestErr = function () {
                    t.prototype.requestErr.call(this),
                      this.noJackpotText.active || this.errorMessage.active
                        ? (this.pagination.active = !1)
                        : (this.pagination.active = !0);
                  }),
                  i
                );
              })(s))
            ) || n
          );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotReel9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotReelv2.ts",
    "./CustomTypeShare.ts",
  ],
  function (t) {
    "use strict";
    var i, s, e, o, n, h, l;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (s = t.cclegacy), (e = t._decorator), (o = t.tween), (n = t.Vec3);
        },
        function (t) {
          h = t.SlotReelv2;
        },
        function (t) {
          l = t.CustomEvent;
        },
      ],
      execute: function () {
        var S;
        s._RF.push({}, "56229KabtBL27xzO//Mq05p", "SlotReel9881", void 0);
        var r = e.ccclass;
        e.property,
          t(
            "SlotReel9881",
            r("SlotReel9881")(
              (S = (function (t) {
                function s() {
                  for (
                    var i, s = arguments.length, e = new Array(s), o = 0;
                    o < s;
                    o++
                  )
                    e[o] = arguments[o];
                  return (
                    ((i =
                      t.call.apply(t, [this].concat(e)) || this).isSlowDown =
                      !1),
                    (i._timeStep = 0),
                    (i._tweenSpeed = void 0),
                    (i._tweenSpin = void 0),
                    (i.delayIndex = void 0),
                    i
                  );
                }
                i(s, t);
                var e = s.prototype;
                return (
                  (e.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "UPDATE_BEAUTY_MATRIX",
                        this.updateBeautyMatrix,
                        this
                      ),
                      this.node.on(
                        "SHOW_NEARWIN_EFFECT",
                        this.showNearWinEffect,
                        this
                      ),
                      this.node.on(
                        "HIDE_SYMBOL_BIG_WILD",
                        this.hideSymbolForBigWild,
                        this
                      ),
                      this.node.on(
                        "RESET_SYMBOL_BIG_WILD",
                        this.resetSymbolBigWild,
                        this
                      ),
                      this.node.on("DIM_SYMBOLS", this.dimSymbols, this),
                      this.node.on("UN_DIM_SYMBOLS", this.unDimSymbols, this);
                  }),
                  (e.dimSymbols = function () {
                    var t = this;
                    0 != this.showSymbols.length &&
                      this.symbols.forEach(function (i) {
                        t.showSymbols.findIndex(function (t) {
                          return t === i;
                        }) > -1 && i.emit("DIM_COLOR");
                      });
                  }),
                  (e.unDimSymbols = function () {
                    var t = this;
                    0 != this.showSymbols.length &&
                      this.symbols.forEach(function (i) {
                        t.showSymbols.findIndex(function (t) {
                          return t === i;
                        }) > -1 && i.emit("UNDIM_COLOR");
                      });
                  }),
                  (e.hideBufferSymbols = function () {
                    var t = this;
                    0 != this.showSymbols.length &&
                      this.symbols.forEach(function (i) {
                        t.showSymbols.findIndex(function (t) {
                          return t === i;
                        }) > -1 || (i.active = !1);
                      });
                  }),
                  (e.showBufferSymbols = function () {
                    var t = this;
                    0 != this.showSymbols.length &&
                      this.symbols.forEach(function (i) {
                        t.showSymbols.findIndex(function (t) {
                          return t === i;
                        }) > -1 || (i.active = !0);
                      });
                  }),
                  (e.showNearWinEffect = function () {
                    var t = this;
                    this.isSlowDown ||
                      this.isFastToResult ||
                      ((this.isSlowDown = !0),
                      (this._timeStep = this.currentSpeed),
                      this._tweenSpeed && this._tweenSpeed.stop(),
                      (this._tweenSpeed = o(this)
                        .to(2.5, { _timeStep: 5 * this.currentSpeed })
                        .call(function () {
                          t._tweenSpeed = null;
                        })
                        .start()),
                      this.unschedule(this.setStepToStop),
                      this.scheduleOnce(function () {
                        t.step = 10;
                      }, 2.5));
                  }),
                  (e.runSpinningAnimation = function (t) {
                    var i = this,
                      s =
                        this.currentSpeed + (this.currentSpeed * this.stop) / 4;
                    this.isSlowDown && (s = this._timeStep),
                      this._tweenSpin && this._tweenSpin.stop(),
                      (this._tweenSpin = o(this.node)
                        .by(s, {
                          position: new n(0, -1 * this.symbolHeight, 0),
                        })
                        .call(function () {
                          i.circulateSymbols(), t && t();
                        })
                        .start());
                  }),
                  (e.updateBeautyMatrix = function (t, i) {
                    this.symbols[t].emit("CHANGE_TO_SYMBOL", i);
                  }),
                  (e.startSpinning = function (i, s) {
                    void 0 === s && (s = {}),
                      t.prototype.startSpinning.call(this, i, s),
                      this.showBufferSymbols(),
                      this.symbols.forEach(function (t) {
                        t.isHideForBigWild && (t.active = !1);
                      });
                  }),
                  (e.stopSpinningWithDelay = function (t, i) {
                    (this.showSymbols = []),
                      (this.callbackStop = i),
                      (this.result = [].concat(t)),
                      (this.isNearWin = !1);
                    var s = this.reelConfig,
                      e = s.DELAY_STOP,
                      o = s.EASING_TIME,
                      n = e;
                    if (!s.IS_TURBO) {
                      var h = this.reelIndex + 1;
                      4 === h ? (h = 2) : 5 === h && (h = 1),
                        (n = h * o + e),
                        (this.delayIndex = h);
                    }
                    this.unschedule(this.setStepToStop),
                      this.scheduleOnce(
                        this.setStepToStop,
                        n + this.extendTime
                      ),
                      this.result.unshift(
                        this.getRandomSymbolNameWithExceptions("A")
                      ),
                      this.result.push(
                        this.getRandomSymbolNameWithExceptions("R")
                      );
                  }),
                  (e.extendTimeToStop = function () {
                    var t;
                    (this.extendTime = 0),
                      (t = this.isSlowDown
                        ? (this.reelConfig.REEL_DELAY_STOP +
                            this.reelConfig.NEAR_WIN_DELAY) *
                          this.delayIndex
                        : (this.reelConfig.REEL_DELAY_STOP +
                            this.reelConfig.NEAR_WIN_DELAY) *
                            (this.delayIndex - 1) +
                          this.reelConfig.REEL_DELAY_STOP),
                      this.isSlowDown &&
                        this.delayIndex ===
                          this.config.TABLE_FORMAT.length - 1 &&
                        (t += this.reelConfig.NEAR_WIN_DELAY_LAST_REEL);
                    (this.extendTime =
                      5 * this.reelConfig.NEAR_WIN_DELAY_LAST_REEL),
                      this.unschedule(this.setStepToStop),
                      this.scheduleOnce(this.setStepToStop, t);
                  }),
                  (e.reset = function () {
                    t.prototype.reset.call(this),
                      (this.isSlowDown = !1),
                      this.hideBufferSymbols();
                  }),
                  (e.circulateSymbols = function () {
                    var t = this.symbols[this.currentIndex % this.totalSymbols],
                      i = this.getRandomSymbolName();
                    if (
                      (this.symbols.findIndex(function (t) {
                        return t.symbol.indexOf("K") > -1;
                      }) > -1 &&
                        (i = this.getRandomSymbolNameWithExceptions([
                          "K1",
                          "K2",
                          "K3",
                        ])),
                      this.isShowingResult)
                    ) {
                      if (this.stop < this.totalSymbols) {
                        var s = this._isRealSymbol();
                        if (
                          ((i = this.result[this.stop]),
                          (this.step =
                            this.totalSymbols +
                            this.showNumber -
                            (this.stop + this.config.TABLE_BUFFER.BOT)),
                          s)
                        )
                          t.emit("CHANGE_TO_SYMBOL", i),
                            this.showSymbols.unshift(t);
                        else
                          this.symbols.findIndex(function (t) {
                            return t.symbol.indexOf("K") > -1;
                          }) > -1 &&
                            (i = this.getRandomSymbolNameWithExceptions([
                              "K1",
                              "K2",
                              "K3",
                            ])),
                            this.isSlowDown
                              ? t.emit("CHANGE_TO_SYMBOL", i)
                              : t.emit("CHANGE_TO_BLUR_SYMBOL", i),
                            i.indexOf("K") > -1 &&
                              this._dispatchChangeToWild(i, t);
                        this.stop++;
                      }
                    } else
                      i.indexOf("K") > -1 && this._dispatchChangeToWild(i, t),
                        this.isSlowDown
                          ? t.emit("CHANGE_TO_SYMBOL", i)
                          : t.emit("CHANGE_TO_BLUR_SYMBOL", i);
                    var e = t.position.y;
                    (e += this.symbolHeight * this.totalSymbols),
                      t.setPosition(new n(t.position.x, e, 0)),
                      this.currentIndex++;
                  }),
                  (e.hasFakeWildBottom = function () {
                    return (
                      !this.stop &&
                      !!this.isNearWin &&
                      !(Math.random() > 0.3) &&
                      !(this.result.indexOf("K1") > -1)
                    );
                  }),
                  (e._dispatchChangeToWild = function (t, i) {
                    this.node.dispatchEvent(
                      new l("ON_CHANGE_SYMBOL_TO_WILD", !0, {
                        symbolName: t,
                        node: i,
                      })
                    );
                  }),
                  (e.runStopAnimation = function (i, s) {
                    this.isSlowDown
                      ? (this.onReelStop(),
                        this.reset(),
                        this.callbackStop(),
                        this.unschedule(this.setStepToStop),
                        (this.currentSpeed = this.reelConfig.TIME))
                      : t.prototype.runStopAnimation.call(this, i, s);
                  }),
                  (e.fastStopSpinning = function (t) {
                    this.step !== this.MAX_STEP &&
                      (this.isFastToResult ||
                        ((this.isFastToResult = !0),
                        (this.isSlowDown = !1),
                        this.unschedule(this.setStepToStop),
                        (this.isShowingResult = !0),
                        this._tweenSpeed && this._tweenSpeed.stop(),
                        (this.currentSpeed = 0.03)));
                  }),
                  (e.hideSymbolForBigWild = function () {
                    this.symbols.forEach(function (t) {
                      (t.isHideForBigWild = !0), (t.active = !1);
                    });
                  }),
                  (e.resetSymbolBigWild = function () {
                    this.symbols.forEach(function (t) {
                      (t.isHideForBigWild = !1), (t.active = !0);
                    });
                  }),
                  (e.updateNearWinSpeed = function () {}),
                  (e.onDestroy = function () {
                    this._tweenSpin && this._tweenSpin.stop(),
                      (this._tweenSpin = null);
                  }),
                  s
                );
              })(h))
            ) || S
          );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSoundPlayer9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotSoundPlayer.ts"],
  function (t) {
    "use strict";
    var o, r, e, n;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (r = t.cclegacy), (e = t._decorator);
        },
        function (t) {
          n = t.SlotSoundPlayer;
        },
      ],
      execute: function () {
        var u;
        r._RF.push(
          {},
          "ddbaaPQtIZKdotR6XZFyXJb",
          "SlotSoundPlayer9881",
          void 0
        );
        var l = e.ccclass;
        e.property,
          t(
            "SlotSoundPlayer9881",
            l("SlotSoundPlayer9881")(
              (u = (function (t) {
                function r() {
                  return t.apply(this, arguments) || this;
                }
                return o(r, t), r;
              })(n))
            ) || u
          );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSymbol9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotSymbol.ts"],
  function (o) {
    "use strict";
    var t, i, e, n, r, l, s, c;
    return {
      setters: [
        function (o) {
          (t = o.inheritsLoose), (i = o.createClass);
        },
        function (o) {
          (e = o.cclegacy),
            (n = o._decorator),
            (r = o.Color),
            (l = o.tween),
            (s = o.Vec3);
        },
        function (o) {
          c = o.SlotSymbol;
        },
      ],
      execute: function () {
        var h;
        e._RF.push({}, "6f7e2sDhV9E4YdrclPLj7Mz", "SlotSymbol9881", void 0);
        var a = n.ccclass;
        o(
          "SlotSymbol9881",
          a("SlotSymbol9881")(
            (h = (function (o) {
              function e() {
                for (
                  var t, i = arguments.length, e = new Array(i), n = 0;
                  n < i;
                  n++
                )
                  e[n] = arguments[n];
                return (
                  ((t = o.call.apply(o, [this].concat(e)) || this)._tweenColor =
                    void 0),
                  (t.colorSymbol = new r()),
                  (t._currentColor = new s(255, 255, 255)),
                  (t._targetColor = new s(255, 255, 255)),
                  t
                );
              }
              t(e, o);
              var n = e.prototype;
              return (
                (n.onLoad = function () {
                  o.prototype.onLoad.call(this),
                    this.node.on(
                      "ENABLE_HIGHLIGHT_HISTORY",
                      this.enableHighlightHistory,
                      this
                    ),
                    this.node.on(
                      "DISABLE_HIGHLIGHT_HISTORY",
                      this.disableHighlightHistory,
                      this
                    ),
                    this.node.on("DIM_COLOR", this.dimColorSymbol, this),
                    this.node.on("UNDIM_COLOR", this.undimColorSymbol, this);
                }),
                (n.dimColorSymbol = function () {
                  this.tweenColor(!0, 0.3);
                }),
                (n.undimColorSymbol = function () {
                  this.tweenColor(!1, 0.3);
                }),
                (n.tweenColor = function (o, t) {
                  var i = this;
                  void 0 === t && (t = 0),
                    this._tweenColor && this._tweenColor.stop();
                  var e = o ? 80 : 255;
                  t && this.staticSymbol.active
                    ? (this.convertFromColorToVec3(
                        this._targetColor,
                        new r(e, e, e, 255)
                      ),
                      (this._tweenColor = l(this)
                        .to(t, { currentColor: this._targetColor })
                        .call(function () {
                          i._tweenColor = null;
                        })
                        .start()))
                    : (this.symbolSpriteFrame.color = new r(e, e, e, 255));
                }),
                (n.setColor = function (o) {
                  this.symbolSpriteFrame.color = o;
                }),
                (n.convertFromVec3ToColor = function (o, t) {
                  (o.r = t.x), (o.g = t.y), (o.b = t.z);
                }),
                (n.convertFromColorToVec3 = function (o, t) {
                  (o.x = t.r), (o.y = t.g), (o.z = t.b);
                }),
                (n.enableHighlight = function (t) {
                  void 0 === t && (t = !1),
                    o.prototype.enableHighlight.call(this, t),
                    this.tweenColor(!1, 0.2);
                }),
                (n.disableHighlight = function () {
                  this.node.isHidden ||
                    (this.node.isHideForBigWild
                      ? (this.node.active = !1)
                      : (this.node.active = !0),
                    (this.staticSymbol.active = !this._isPlayAnim),
                    (this.staticSymbol.scale = new s(1, 1, 1)),
                    (this.staticSymbol.parent = this.node),
                    (this.staticSymbol.position = new s(0, 0, 0)),
                    this.tweenColor(!0, 0.2));
                }),
                (n.enableHighlightHistory = function () {
                  this.currentColor = new s(255, 255, 255);
                }),
                (n.disableHighlightHistory = function () {
                  this.currentColor = new s(80, 80, 80);
                }),
                (n.reset = function () {
                  this._tweenColor && this._tweenColor.stop(),
                    (this._tweenColor = null),
                    (this.currentColor = new s(255, 255, 255)),
                    o.prototype.reset.call(this);
                }),
                (n.onDestroy = function () {
                  this._tweenColor && this._tweenColor.stop(),
                    (this._tweenColor = null);
                }),
                i(e, [
                  {
                    key: "currentColor",
                    get: function () {
                      return this._currentColor;
                    },
                    set: function (o) {
                      (this._currentColor = o),
                        this.convertFromVec3ToColor(
                          this.colorSymbol,
                          this._currentColor
                        ),
                        this.setColor(this.colorSymbol);
                    },
                  },
                ]),
                e
              );
            })(c))
          ) || h
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSymbolPayline9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotSymbolPayline.ts"],
  function (t) {
    "use strict";
    var o, i, n, e, s, l, r, a;
    return {
      setters: [
        function (t) {
          (o = t.inheritsLoose), (i = t.createClass);
        },
        function (t) {
          (n = t.cclegacy),
            (e = t._decorator),
            (s = t.Color),
            (l = t.tween),
            (r = t.Vec3);
        },
        function (t) {
          a = t.SlotSymbolPayline;
        },
      ],
      execute: function () {
        var h;
        n._RF.push(
          {},
          "e63b1Q0kixBTLgxcrYhGLqx",
          "SlotSymbolPayline9881",
          void 0
        );
        var c = e.ccclass;
        t(
          "SlotSymbolPayline9881",
          c("SlotSymbolPayline9881")(
            (h = (function (t) {
              function n() {
                for (
                  var o, i = arguments.length, n = new Array(i), e = 0;
                  e < i;
                  e++
                )
                  n[e] = arguments[e];
                return (
                  ((o = t.call.apply(t, [this].concat(n)) || this)._tweenColor =
                    void 0),
                  (o.colorSymbol = new s()),
                  (o._currentColor = new r(0, 0, 0)),
                  (o._targetColor = new r(255, 255, 255)),
                  o
                );
              }
              o(n, t);
              var e = n.prototype;
              return (
                (e.init = function (t, o, i) {
                  (this._isPlaying = !1),
                    (this._havingAnim = !!o),
                    (this._disableHighlightHolder = i),
                    (this.spineNode.active = !0),
                    (this._symbolName = t),
                    this._animation &&
                      this._havingAnim &&
                      (this._animation.skeletonData = o),
                    (this.spineNode.active = !1);
                }),
                (e.playAnimation = function () {
                  if (this._havingAnim) {
                    this.spineNode.active = !0;
                    var t = "animation";
                    "K1" == this._symbolName ||
                    "K2" == this._symbolName ||
                    "K3" == this._symbolName
                      ? ((t = "Win"),
                        this._animation.setAnimation(0, t, !0),
                        (this._isPlaying = !0))
                      : this._animation.findAnimation(t) &&
                        (this._isPlaying ||
                          (this._animation.setAnimation(0, t, !0),
                          (this._isPlaying = !0)));
                  }
                }),
                (e.enableHighlight = function () {
                  t.prototype.enableHighlight.call(this),
                    this._animation && this.tweenColor(!1, 0.2);
                }),
                (e.disableHighlight = function () {
                  this._isPlaying
                    ? this._animation && this.tweenColor(!0, 0.2)
                    : (this.spineNode.active = !1);
                }),
                (e.tweenColor = function (t, o) {
                  var i = this;
                  void 0 === o && (o = 0),
                    this._tweenColor && this._tweenColor.stop();
                  var n = t ? 80 : 255;
                  o && this.spineNode.active
                    ? (this.convertFromColorToVec3(
                        this._targetColor,
                        new s(n, n, n, 255)
                      ),
                      (this._tweenColor = l(this)
                        .to(o, { currentColor: this._targetColor })
                        .call(function () {
                          i._tweenColor = null;
                        })
                        .start()))
                    : (this._animation.color = new s(n, n, n, 255));
                }),
                (e.setColor = function (t) {
                  this._animation.color = t;
                }),
                (e.convertFromVec3ToColor = function (t, o) {
                  (t.r = o.x), (t.g = o.y), (t.b = o.z);
                }),
                (e.convertFromColorToVec3 = function (t, o) {
                  (t.x = o.r), (t.y = o.g), (t.z = o.b);
                }),
                (e.reset = function () {
                  this._animation &&
                    (this._tweenColor && this._tweenColor.stop(),
                    (this._tweenColor = null),
                    (this.currentColor = new r(255, 255, 255)),
                    (this.spineNode.parent = this.node),
                    (this.spineNode.position = new r(0, 0, 0))),
                    (this._isPlaying = !1);
                }),
                (e.onDestroy = function () {
                  this._tweenColor && this._tweenColor.stop(),
                    (this._tweenColor = null);
                }),
                i(n, [
                  {
                    key: "currentColor",
                    get: function () {
                      return this._currentColor;
                    },
                    set: function (t) {
                      (this._currentColor = t),
                        this.convertFromVec3ToColor(
                          this.colorSymbol,
                          this._currentColor
                        ),
                        this.setColor(this.colorSymbol);
                    },
                  },
                ]),
                n
              );
            })(a))
          ) || h
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTable9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotTable.ts"],
  function (t) {
    "use strict";
    var i, e, n, o, s, r, a, l, h;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy), (r = t._decorator), (a = t.Node), (l = t.warn);
        },
        function (t) {
          h = t.SlotTable;
        },
      ],
      execute: function () {
        var c, _, S, d, u;
        s._RF.push({}, "bb8e6yTDpBFfJ+eVBXQ6NEa", "SlotTable9881", void 0);
        var p = r.ccclass,
          I = r.property;
        t(
          "SlotTable9881",
          ((c = p("SlotTable9881")),
          (_ = I(a)),
          c(
            ((u = i(
              (d = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, s = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    n(i, "bigWild", u, o(i)),
                    i
                  );
                }
                e(i, t);
                var s = i.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "ON_SETUP_BIGWILD",
                        this.onSetupBigWild,
                        this
                      ),
                      this.node.on(
                        "ON_DISPLAY_BIGWILD",
                        this.onDisplayBigWild,
                        this
                      ),
                      this.node.on(
                        "ON_BIG_WILD_SHOW",
                        this.onBigWildShow,
                        this
                      ),
                      this.node.on(
                        "ON_FORCE_BIGWILD_IDLE",
                        this.onForceBigWildIdle,
                        this
                      );
                  }),
                  (s.init = function () {
                    if ((t.prototype.init.call(this), !this.isFreeMode)) {
                      var i = Math.floor(
                          Math.random() * this.config.BEAUTY_MATRIX.length
                        ),
                        e = this.config.BEAUTY_MATRIX[i];
                      this.showAnimIntro(e);
                    }
                  }),
                  (s.startSpinning = function () {
                    var i = this;
                    this.reels.forEach(function (t, e) {
                      i.isFreeMode
                        ? 2 !== e && t.emit("RESET_SYMBOL_BIG_WILD")
                        : t.emit("RESET_SYMBOL_BIG_WILD");
                    }),
                      t.prototype.startSpinning.call(this),
                      this.bigWild.emit("ON_START_SPIN"),
                      this.isFreeMode &&
                        this.reels[2].emit("HIDE_SYMBOL_BIG_WILD"),
                      (this.node.currentConfig =
                        this.config[
                          this.isTurbo ? "TABLE_TURBO" : "TABLE_NORMAL"
                        ]);
                  }),
                  (s.stopSpinning = function (t, i) {
                    var e = this;
                    void 0 === t && (t = []),
                      void 0 === i && (i = null),
                      (this.matrix = t),
                      l("==== matrix: " + t.join(",") + " ===="),
                      (this._tableStopCB = i),
                      this.node.emit("REEL_DELAY_NEAR_WIN", {
                        reels: this.reels,
                        matrix: t,
                        context: this,
                      }),
                      this.node.emit("REEL_ABOUT_TO_STOP_SOUND", {
                        reels: this.reels,
                        matrix: t,
                        context: this,
                      }),
                      (this.stopSpinningCallbackCount = 0),
                      this.reels.forEach(function (i, n) {
                        var o = [].concat(t[n]).reverse(),
                          s = e.checkStopSpinningCallback.bind(e, t[n], n);
                        i.emit("STOP_SPIN", o, s);
                      });
                  }),
                  (s.checkStopSpinningCallback = function (t, i) {
                    void 0 === t && (t = []), void 0 === i && (i = -1);
                    var e =
                      this.dataStore.gameSpeed ===
                      this.config.GAME_SPEED.INSTANTLY;
                    this.stopSpinningCallbackCount++;
                    var n = this.stopSpinningCallbackCount;
                    this.node.emit("REEL_STOP_NEARWIN", {
                      matrix: t,
                      count: n,
                      context: this,
                      col: i,
                    }),
                      this.node.emit("REEL_STOP_SOUND", {
                        matrix: t,
                        count: n,
                        context: this,
                        col: i,
                      }),
                      this.bigWild.emit("APPEAR_BIGWILD", {
                        matrix: t,
                        col: i,
                        isFTR: e,
                      }),
                      this.node.emit("HIDE_SYMBOLS_IN_WILD_REEL", i),
                      n >= this.reels.length &&
                        (this.reels.forEach(function (t) {
                          t.emit("UN_DIM_SYMBOLS");
                        }),
                        e || this.bigWild.emit("ON_TABLE_STOPPED"),
                        this.onTableStopped());
                  }),
                  (s.fastToResult = function () {
                    t.prototype.fastToResult.call(this),
                      this.bigWild.emit("ON_FAST_TO_RESULT");
                  }),
                  (s.changeMatrix = function (i) {
                    t.prototype.changeMatrix.call(this, i),
                      this.isFreeMode &&
                        this.reels[2].emit("HIDE_SYMBOL_BIG_WILD");
                  }),
                  (s.onSetupBigWild = function (t) {
                    this.bigWild.emit("SETUP_BIGWILD", t);
                  }),
                  (s.onDisplayBigWild = function (t) {
                    this.bigWild.emit("DISPLAY_BIGWILD", t);
                  }),
                  (s.onBigWildShow = function (t) {
                    t.propagationStopped = !0;
                    var i = t.userData.col;
                    this.reels[i].emit("HIDE_SYMBOL_BIG_WILD");
                  }),
                  (s.onForceBigWildIdle = function () {
                    this.bigWild.emit("FORCE_IDLE");
                  }),
                  (s.getBeautyMatrixRandom = function (t) {
                    var i = t.split(",");
                    return this.dataStore.convertMatrix(
                      i,
                      this.config.NORMAL_TABLE_FORMAT
                    );
                  }),
                  (s.showAnimIntro = function (t) {
                    for (
                      var i = this.getBeautyMatrixRandom(t), e = 0;
                      e < this.tableFormat.length;
                      ++e
                    ) {
                      for (
                        var n = this.reels[e], o = 0;
                        o < this.tableFormat[e];
                        ++o
                      )
                        n.emit("UPDATE_BEAUTY_MATRIX", o + 1, i[e][o]);
                      ((0 === e && i[e].includes("K2")) ||
                        (4 === e && i[e].includes("K3"))) &&
                        this.eventManager.emit(
                          "PLAY_DEFAULT_MATRIX_BIGWILD_IDLE"
                        );
                    }
                  }),
                  i
                );
              })(h)).prototype,
              "bigWild",
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
            (S = d))
          ) || S)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableNearWinEffect9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotTableNearWinEffect.ts"],
  function (t) {
    "use strict";
    var i, e, n, o;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (n = t._decorator);
        },
        function (t) {
          o = t.SlotTableNearWinEffect;
        },
      ],
      execute: function () {
        var r;
        e._RF.push(
          {},
          "bc6318bwp5BX45fwciCCpho",
          "SlotTableNearWinEffect9881",
          void 0
        );
        var s = n.ccclass;
        n.property,
          t(
            "SlotTableNearWinEffect9881",
            s("SlotTableNearWinEffect9881")(
              (r = (function (t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                i(e, t);
                var n = e.prototype;
                return (
                  (n.adjustReelDelay = function (t) {
                    var i = t.reels,
                      e = t.matrix,
                      n = t.context,
                      o = 0;
                    this.nearWinList = [];
                    var r =
                        this.dataStore &&
                        this.dataStore.modeTurbo &&
                        this.isSkipNearWinTurbo,
                      s = this._isNearWinJp(e.slice());
                    if (!r)
                      for (var a = 0; a < e.length; a++) {
                        for (var c = 0; c < e[a].length; ++c) {
                          var l = e[a][c];
                          "K" === l[0] && "K1" !== l && o++;
                        }
                        (o >= 2 || s) &&
                          ((this.nearWinList[4] = { isNearWin: !0 }),
                          i[2].emit("EXTEND_TIME_STOP", !0),
                          n.bigWild.emit("SET_NEAR_WIN"));
                      }
                  }),
                  (n.reelStopNearWin = function (i) {
                    var e = i.context,
                      n = i.count;
                    if (
                      4 === n &&
                      e &&
                      e.reels &&
                      !e.isFastToResult &&
                      this.nearWinList[n] &&
                      this.nearWinList[n].isNearWin
                    ) {
                      var o = e.reels[2];
                      o.emit("SHOW_NEARWIN_EFFECT"),
                        e.reels.forEach(function (t) {
                          t !== o && t.emit("DIM_SYMBOLS");
                        });
                    }
                    t.prototype.reelStopNearWin.call(this, i);
                  }),
                  (n.showAnimNearWin = function (t) {
                    this.sfxNearWin &&
                      this.soundPlayer &&
                      this.soundPlayer.playSfx(this.sfxNearWin),
                      (this.animNode.active = !0);
                  }),
                  (n._isNearWinJp = function (t) {
                    if (this.node.isFreeMode) {
                      var i = this._countSymbol(t[1], "K2"),
                        e = this._countSymbol(t[3], "K3"),
                        n = t[0][0],
                        o = this._countSymbol(t[0], n),
                        r = i > 0 ? 3 : this._countSymbol(t[1], n),
                        s = e > 0 ? 3 : this._countSymbol(t[3], n),
                        a = this._countSymbol(t[4], n);
                      return o >= 3 && r >= 3 && s >= 3 && a >= 3;
                    }
                    var c = this._countSymbol(t[0], "K2"),
                      l = this._countSymbol(t[4], "K3"),
                      u = t[1][0],
                      h = c > 0 ? 3 : this._countSymbol(t[0], u),
                      f = this._countSymbol(t[1], u),
                      S = this._countSymbol(t[3], u),
                      _ = l > 0 ? 3 : this._countSymbol(t[4], u);
                    return h >= 3 && f >= 3 && S >= 3 && _ >= 3;
                  }),
                  (n._countSymbol = function (t, i) {
                    return t.reduce(function (t, e) {
                      return t + (e === i ? 1 : 0);
                    }, 0);
                  }),
                  e
                );
              })(o))
            ) || r
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTablePayline9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotTablePayline.ts",
    "./EventNames.ts",
  ],
  function (i) {
    "use strict";
    var e, t, n, a, l, s, o, r, h, y;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (a = i.assertThisInitialized);
        },
        function (i) {
          (l = i.cclegacy), (s = i._decorator), (o = i.Node), (r = i.sp);
        },
        function (i) {
          h = i.SlotTablePayline;
        },
        function (i) {
          y = i.default;
        },
      ],
      execute: function () {
        var c, L, m, d, g, u, p, b, I, _, f;
        l._RF.push(
          {},
          "b20c2lgN7VF+YgX1NNWhCzt",
          "SlotTablePayline9881",
          void 0
        );
        var N = s.ccclass,
          W = s.property;
        i(
          "SlotTablePayline9881",
          ((c = N("SlotTablePayline9881")),
          (L = W({ type: o })),
          (m = W({ type: o })),
          (d = W({ type: o })),
          (g = W({ type: o })),
          c(
            ((b = e(
              (p = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, l = new Array(t), s = 0;
                    s < t;
                    s++
                  )
                    l[s] = arguments[s];
                  return (
                    (e = i.call.apply(i, [this].concat(l)) || this),
                    n(e, "stickyWild", b, a(e)),
                    n(e, "winLineBigWild", I, a(e)),
                    n(e, "backGroundReelLeft", _, a(e)),
                    n(e, "backGroundReelRight", f, a(e)),
                    (e.maxPayLineWinNumbers = -1),
                    (e.bigWildReels = []),
                    e
                  );
                }
                t(e, i);
                var l = e.prototype;
                return (
                  (l.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on("ON_SETUP_BIGWILD", this.setupBigWild, this),
                      this.node.on(
                        "SHOW_BIG_WILD_WIN_LINE",
                        this.showBigWildWinLine,
                        this
                      ),
                      this.node.on(
                        "HIDE_SYMBOLS_IN_WILD_REEL",
                        this.hideSymbolsInWildReel,
                        this
                      );
                  }),
                  (l.setupPaylines = function (e, t) {
                    void 0 === e && (e = []),
                      void 0 === t && (t = []),
                      (this.maxPayLineWinNumbers = -1),
                      i.prototype.setupPaylines.call(this, e, t);
                  }),
                  (l.setupBigWild = function (i) {
                    var e = i.bigWild;
                    (this.bigWildReels = e ? [].concat(e) : []),
                      this.node.isFreeMode && this.bigWildReels.push(2);
                  }),
                  (l.createWinLineFrame = function (i, e) {
                    var t = this.getXPosition(i),
                      n =
                        this.node.isFreeMode &&
                        this.config.SYMBOL_HEIGHT_FREE_GAME
                          ? this.config.SYMBOL_HEIGHT_FREE_GAME
                          : this.config.SYMBOL_HEIGHT,
                      a = (this.node.tableFormat[i] / 2 - e - 0.5) * n,
                      l = null,
                      s =
                        this.bigWildReels &&
                        this.bigWildReels.length &&
                        this.bigWildReels.indexOf(i) >= 0;
                    return (
                      (l = this.poolFactory.getObject(
                        this.winLineFramePrefabName
                      )) &&
                        ((l.active = !1),
                        (l.parent = s
                          ? this.winLineBigWild
                          : this.winLineFrameHolder),
                        (l[i] = i),
                        (l[e] = e),
                        l.setPosition(t, a),
                        this.usingObjs.push(l)),
                      l
                    );
                  }),
                  (l.showScatterPayLine = function (i) {
                    var e = this;
                    this.disableHighlightNormalPaylines(),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("ANIM_SCATTER");
                    for (var t = 0; t < this.paylinesMatrix[2].length; ++t) {
                      var n = this.paylinesMatrix[2][t],
                        a = n.symbol,
                        l = n.paylineSymbol;
                      "K1" == a.symbol &&
                        (a.emit("ENABLE_HIGHLIGHT"),
                        l.emit("ENABLE_HIGHLIGHT"),
                        l.emit("PLAY_ANIMATION"));
                    }
                    this.eventManager.emit("SHOW_PAYLINE_JACKPOT"),
                      this.scheduleOnce(function () {
                        e.eventManager.emit("PLAY_BIGWILD_IDLE"), i && i();
                      }, 1);
                  }),
                  (l.showJackpotPayLine = function (i) {
                    var e = this;
                    this.disableHighlightNormalPaylines();
                    for (var t = 0; t < this.payLineNormals.length; ++t)
                      this.blinkNormalPaylinePerline(this.payLineNormals[t]);
                    this.eventManager.emit("SHOW_PAYLINE_JACKPOT"),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("PRE_JACKPOT"),
                      (this._blinkingCallback = function () {
                        e.eventManager.emit("PLAY_BIGWILD_IDLE"),
                          i && i(),
                          (e._blinkingCallback = null);
                      }),
                      this.scheduleOnce(this._blinkingCallback, 1);
                  }),
                  (l.hideSymbolsInWildReel = function (i) {
                    -1 !== this.bigWildReels.indexOf(i) &&
                      this.node.reels[i].getShowSymbols().forEach(function (i) {
                        i.active = !1;
                      });
                  }),
                  (l.blinkHighlightPaylines = function (i) {
                    var e = this;
                    if (
                      (void 0 === i && (i = function () {}),
                      this.payLineNormals)
                    ) {
                      this.backGroundReelLeft &&
                        this.backGroundReelLeft.emit(
                          "DISABLE_HIGHLIGHT_REEL_BG"
                        ),
                        this.backGroundReelRight &&
                          this.backGroundReelRight.emit(
                            "DISABLE_HIGHLIGHT_REEL_BG"
                          );
                      var t = this.dataStore.isAutoSpin,
                        n = this.dataStore.playSession.freeGame,
                        a =
                          1 *
                          (t || n
                            ? 2
                            : this._getBlinkTime(this.dataStore.winRate));
                      (this._blinkingCallback = function () {
                        i && i(), (e._blinkingCallback = null);
                      }),
                        this.setOpacity(this.paylineHolder, 255),
                        this.disableHighlightNormalPaylines(),
                        this.showDrawingLine &&
                          this.eventManager &&
                          this.eventManager.emit(y.DRAWING_LINE_CLEAR);
                      for (var l = 0; l < this.payLineNormals.length; ++l)
                        this.blinkNormalPayline(this.payLineNormals[l]);
                      if (
                        (this.node.emit("BLINK_ALL_PAYLINE"),
                        this.scheduleOnce(this._blinkingCallback, a),
                        this.bigWildReels.length)
                      ) {
                        if (
                          ((this.maxPayLineWinNumbers = 0),
                          this.payLineNormals && this.payLineNormals.length)
                        )
                          for (var s = 0; s < this.payLineNormals.length; ++s) {
                            var o = this.payLineNormals[s].payLineWinNumbers;
                            o > this.maxPayLineWinNumbers &&
                              (this.maxPayLineWinNumbers = Number(o));
                          }
                        this.eventManager.emit(
                          "PLAY_BIGWILD_WIN",
                          this.maxPayLineWinNumbers
                        ),
                          !this.node.isFreeMode &&
                            this.bigWildReels[0] < 2 &&
                            this.soundPlayer.playSfx("WILD_EXPAND_REEL_1");
                      }
                      this.stickyWild && this.stickyWild.emit("PLAY_ANIM_WIN");
                    } else i && i();
                  }),
                  (l.showBigWildWinLine = function () {
                    this.eventManager.emit(
                      "PLAY_BIGWILD_WIN",
                      this.maxPayLineWinNumbers
                    ),
                      this.stickyWild && this.stickyWild.emit("PLAY_ANIM_WIN");
                  }),
                  (l.showNextPayline = function () {
                    if (
                      (this.setOpacity(this.paylineHolder, 255),
                      this.dataStore.isAutoSpin)
                    ) {
                      var e = this._getLineTime(this.dataStore.winRate),
                        t = !(!e.length || !e[this.paylineIndex]),
                        n = !(
                          !this.payLineNormals ||
                          !this.payLineNormals[this.paylineIndex]
                        );
                      if (
                        ((t && n) ||
                          ((this.showingPayline = !1),
                          (this.paylineIndex = 0),
                          this._callbackShowPayline &&
                            this._callbackShowPayline(),
                          (this._callbackShowPayline = null)),
                        t && n && this.showingPayline)
                      ) {
                        var a = e[this.paylineIndex],
                          l = this.payLineNormals[this.paylineIndex];
                        this.showDrawingLine &&
                          this.eventManager &&
                          (this.eventManager.emit(y.DRAWING_LINE_CLEAR),
                          this.drawPayline(l)),
                          this.showNormalPayline(l),
                          this.guiMgr && this.guiMgr.showPaylineInfo(l),
                          this.extShowPayline(),
                          (this.paylineIndex += 1),
                          (this.paylineTime = a);
                      }
                    } else i.prototype.showNextPayline.call(this);
                  }),
                  (l.blinkNormalPaylinePerline = function (i) {
                    for (
                      var e = i.payLineID,
                        t = i.payLineWinNumbers,
                        n = this.config.PAY_LINE_MATRIX[e],
                        a = 0;
                      a < t;
                      ++a
                    ) {
                      var l = n[a],
                        s = a,
                        o = this.paylinesMatrix[s][l];
                      if ((o || (o = this.createPaylineObject(s, l)), !o))
                        return;
                      var h = o,
                        y = h.symbol,
                        c = h.paylineSymbol,
                        L = h.winLineFrame;
                      -1 !== this.bigWildReels.indexOf(s) ||
                        this.isStickyWildReel(s) ||
                        (y &&
                          (y.emit("ENABLE_HIGHLIGHT"),
                          c.emit("PLAY_ANIMATION"),
                          c.emit("ENABLE_HIGHLIGHT"))),
                        L &&
                          ((L.active = !0),
                          L.getComponent(r.Skeleton).setAnimation(0, "Win", !1),
                          L.getComponent(r.Skeleton).addAnimation(
                            0,
                            "Idle",
                            !0
                          ));
                    }
                    this.showDrawingLine &&
                      this.eventManager &&
                      this.drawPayline(i);
                  }),
                  (l.showNormalPaylinePerline = function (i) {
                    var e = i.payLineID,
                      t = i.payLineWinNumbers,
                      n = i.symbolName;
                    this.disableHighlightNormalPaylines();
                    var a = this.config.PAY_LINE_MATRIX[e];
                    if (
                      a &&
                      a.length > 0 &&
                      this.paylinesMatrix &&
                      this.paylinesMatrix.length > 0
                    )
                      for (var l = 0; l < t; ++l) {
                        var s = a[l],
                          o = l,
                          h = this.paylinesMatrix[o][s],
                          y = h.symbol,
                          c = h.paylineSymbol,
                          L = h.winLineFrame,
                          m = h.isShowing;
                        -1 !== this.bigWildReels.indexOf(o) ||
                          this.isStickyWildReel(o) ||
                          (y &&
                            c &&
                            m &&
                            ((y.symbol !== n &&
                              y.symbol !== this.config.WILD_SYMBOL &&
                              y.symbol !== this.config.WILD_SYMBOL + "1") ||
                              (y.emit("ENABLE_HIGHLIGHT"),
                              c.emit("PLAY_ANIMATION"),
                              c.emit("ENABLE_HIGHLIGHT")))),
                          this.stickyWild &&
                            this.stickyWild.emit("PLAY_ANIM_WIN"),
                          L &&
                            ((L.active = !0),
                            L.getComponent(r.Skeleton).setAnimation(
                              0,
                              "Win",
                              !1
                            ),
                            L.getComponent(r.Skeleton).addAnimation(
                              0,
                              "Idle",
                              !0
                            ));
                      }
                    this.bigWildReels.length &&
                      this.eventManager.emit("PLAY_BIGWILD_WIN", Number(t));
                  }),
                  (l.disableHighlightNormalPaylines = function () {
                    for (
                      var i = this, e = 0;
                      e < this.paylinesMatrix.length;
                      ++e
                    )
                      for (
                        var t = function (t) {
                            var n = i.paylinesMatrix[e][t],
                              a = n.symbol,
                              l = n.paylineSymbol,
                              s = n.winLineFrame;
                            a.isHideForBigWild
                              ? (a.active = !1)
                              : ((a.active = !0), a.emit("DISABLE_HIGHLIGHT")),
                              l && l.emit("DISABLE_HIGHLIGHT"),
                              s &&
                                s.active &&
                                (s
                                  .getComponent(r.Skeleton)
                                  .setAnimation(0, "Disappear", !1),
                                s
                                  .getComponent(r.Skeleton)
                                  .setCompleteListener(function (i) {
                                    s
                                      .getComponent(r.Skeleton)
                                      .setCompleteListener(function () {}),
                                      "Disappear" === i.animation.name &&
                                        (s.active = !1);
                                  }));
                          },
                          n = 0;
                        n < this.paylinesMatrix[e].length;
                        ++n
                      )
                        t(n);
                    this.bigWildReels.length &&
                      this.eventManager.emit("DISABLE_BIGWILD");
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
                            n = t.symbol,
                            a = t.paylineSymbol,
                            l = t.winLineFrame;
                          n &&
                            a &&
                            (n.isHideForBigWild ||
                              ((n.active = !0), (n.isHidden = !1)),
                            (a.active = !0),
                            n.emit("RESET"),
                            a.emit("RESET"),
                            n.isHideForBigWild && (n.active = !1)),
                            l && (l.active = !1);
                        }
                  }),
                  (l.clearPaylines = function () {
                    (this.maxPayLineWinNumbers = -1),
                      i.prototype.clearPaylines.call(this),
                      this.winLineFrameHolder.removeAllChildren(),
                      this.winLineBigWild.removeAllChildren(),
                      this.stickyWild && this.stickyWild.emit("PLAY_ANIM_IDLE"),
                      (this.dataStore.winRate = 0),
                      this.bigWildReels.length &&
                        this.eventManager.emit("ENABLE_BIGWILD"),
                      (this.bigWildReels = []),
                      this.backGroundReelLeft &&
                        this.backGroundReelLeft.emit(
                          "ENABLE_HIGHLIGHT_REEL_BG"
                        ),
                      this.backGroundReelRight &&
                        this.backGroundReelRight.emit(
                          "ENABLE_HIGHLIGHT_REEL_BG"
                        );
                  }),
                  (l.isStickyWildReel = function (i) {
                    return this.node.isFreeMode && 2 === i;
                  }),
                  (l._getLineTime = function (i) {
                    var e = [];
                    return (
                      i >= 3 && i < 10 && (e = [2]),
                      i >= 10 && i < 20 && (e = [2, 2]),
                      i >= 20 && (e = [2, 2]),
                      e
                    );
                  }),
                  (l._getBlinkTime = function (i) {
                    var e = 1;
                    return (
                      i > 0 && i < 1 && (e = 1),
                      i >= 1 && i < 3 && (e = 1),
                      i >= 3 && i < 10 && (e = 2),
                      i >= 10 && i < 20 && (e = 2),
                      i >= 20 && (e = 0.5),
                      e
                    );
                  }),
                  e
                );
              })(h)).prototype,
              "stickyWild",
              [L],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (I = e(p.prototype, "winLineBigWild", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = e(p.prototype, "backGroundReelLeft", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = e(p.prototype, "backGroundReelRight", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (u = p))
          ) || u)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableSoundEffect9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotTableSoundEffect.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var n, o, e, a, i;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (e = t._decorator);
        },
        function (t) {
          a = t.SlotTableSoundEffect;
        },
        function (t) {
          i = t.SlotGameMode;
        },
      ],
      execute: function () {
        var s;
        o._RF.push(
          {},
          "b68c412lBdMuaS8o93MEu71",
          "SlotTableSoundEffect9881",
          void 0
        );
        var l = e.ccclass;
        e.property,
          t(
            "SlotTableSoundEffect9881",
            l("SlotTableSoundEffect9881")(
              (s = (function (t) {
                function o() {
                  for (
                    var n, o = arguments.length, e = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    e[a] = arguments[a];
                  return (
                    ((n =
                      t.call.apply(t, [this].concat(e)) ||
                      this).canPlaySoundWild = !1),
                    n
                  );
                }
                n(o, t);
                var e = o.prototype;
                return (
                  (e.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "REEL_ABOUT_TO_STOP_SOUND",
                        this.setupSound,
                        this
                      );
                  }),
                  (e.setupSound = function (t) {
                    var n = t.matrix;
                    (this.canPlaySoundWild = !1), (n = n.slice());
                    var o = 0;
                    n.forEach(function (t, n) {
                      var e = 0;
                      t.forEach(function (t) {
                        t.indexOf("K") > -1 && e++;
                      }),
                        3 == e && 2 != n && o++;
                    }),
                      o >= 2 && (this.canPlaySoundWild = !0);
                  }),
                  (e.reelStopSound = function (t) {
                    var n = t.matrix,
                      o = t.count;
                    if (this.soundPlayer) {
                      var e =
                          this.dataStore.gameSpeed ===
                          this.config.GAME_SPEED.INSTANTLY,
                        a = this.dataStore.currentGameMode === i.FreeGame;
                      (3 === o && a) ||
                        this.soundPlayer.playSfx(this.sfxReelStop, !1, 1.5),
                        o >= this.node.reels.length &&
                          this.sfxReelSpinning &&
                          this.soundPlayer.stopSfx(this.sfxReelSpinning),
                        this.dataStore.modeTurbo ||
                          !this.canPlaySoundWild ||
                          e ||
                          ((n.indexOf("K2") > -1 || n.indexOf("K3") > -1) &&
                            this.soundPlayer.playSfx("WILD_1"),
                          n.indexOf("K1") > -1 &&
                            !a &&
                            this.soundPlayer.playSfx("WILD_2"));
                    }
                  }),
                  o
                );
              })(a))
            ) || s
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SpinTimes9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SpinTimes.ts",
    "./CustomEnum.ts",
  ],
  function (i) {
    "use strict";
    var s, t, n, e, o;
    return {
      setters: [
        function (i) {
          s = i.inheritsLoose;
        },
        function (i) {
          (t = i.cclegacy), (n = i._decorator);
        },
        function (i) {
          e = i.SpinTimes;
        },
        function (i) {
          o = i.SlotGameMode;
        },
      ],
      execute: function () {
        var r;
        t._RF.push({}, "d4bf8ncRkFOxrt4jGJNL44V", "SpinTimes9881", void 0);
        var p = n.ccclass;
        n.property,
          i(
            "SpinTimes9881",
            p("SpinTimes9881")(
              (r = (function (i) {
                function t() {
                  return i.apply(this, arguments) || this;
                }
                s(t, i);
                var n = t.prototype;
                return (
                  (n.updateSpintimes = function (i, s) {
                    void 0 === i && (i = 0),
                      void 0 === s && (s = !1),
                      this.resetSpintimes(),
                      s
                        ? this.setSpinTimes(this.promoSpinTimes, i, s)
                        : this.setSpinTimes(this.spinTimes, i);
                  }),
                  (n.setSpinTimes = function (i, s, t) {
                    void 0 === i && (i = null),
                      void 0 === t && (t = !1),
                      i &&
                        (t
                          ? Number(s) >= 0 &&
                            ((i.string = "" + s),
                            (this.numSpin = s),
                            this.showSpinTimes(i.node, !0))
                          : (Number(s) > 0 ||
                              this.currentGameMode !== o.NormalGame) &&
                            ((i.string = "" + (s > 100 ? "∞" : s)),
                            (this.numSpin = s),
                            this.showSpinTimes(i.node, !0)));
                  }),
                  t
                );
              })(e))
            ) || r
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/StickyWildFree9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (i) {
    "use strict";
    var n, t, e, a, o, r, s, l;
    return {
      setters: [
        function (i) {
          (n = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (e = i.initializerDefineProperty),
            (a = i.assertThisInitialized);
        },
        function (i) {
          (o = i.cclegacy), (r = i._decorator), (s = i.sp), (l = i.Component);
        },
      ],
      execute: function () {
        var c, u, p, m, d, h, y;
        o._RF.push({}, "d0b8cvurnhK9LkiH2Xq9aC3", "StickyWildFree9881", void 0);
        var f = r.ccclass,
          A = r.property;
        i(
          "StickyWildFree9881",
          ((c = f("StickyWildFree9881")),
          (u = A({ type: s.Skeleton })),
          (p = A({ type: s.Skeleton })),
          c(
            ((h = n(
              (d = (function (i) {
                function n() {
                  for (
                    var n, t = arguments.length, o = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (n = i.call.apply(i, [this].concat(o)) || this),
                    e(n, "anim", h, a(n)),
                    e(n, "animTransition", y, a(n)),
                    (n.isIdle = !1),
                    n
                  );
                }
                t(n, i);
                var o = n.prototype;
                return (
                  (o.onLoad = function () {
                    this.node.on("PLAY_ANIM_RESUME", this.playAnimResume, this),
                      this.node.on("PLAY_ANIM_WIN", this.playAnimWin, this),
                      this.node.on("PLAY_ANIM_IDLE", this.playAnimIdle, this);
                  }),
                  (o.playAnimResume = function () {
                    var i = this;
                    (this.animTransition.node.active = !0),
                      this.animTransition.setAnimation(
                        0,
                        "Battle_Card_Start_Reload",
                        !1
                      ),
                      this.animTransition.setCompleteListener(function () {
                        i.animTransition &&
                          i.animTransition.node &&
                          ((i.animTransition.node.active = !1),
                          i.animTransition.setCompleteListener(function () {}));
                      });
                  }),
                  (o.playAnimWin = function () {
                    this.anim && this.anim.setAnimation(0, "Expand_Win", !0),
                      (this.isIdle = !1);
                  }),
                  (o.playAnimIdle = function () {
                    this.isIdle ||
                      ((this.isIdle = !0),
                      this.anim &&
                        this.anim.setAnimation(0, "Expand_Idle", !0));
                  }),
                  n
                );
              })(l)).prototype,
              "anim",
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
            (y = n(d.prototype, "animTransition", [p], {
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
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TableTrailEffect9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameObject.ts",
    "./EventNames.ts",
    "./CustomEnum.ts",
  ],
  function (e) {
    "use strict";
    var t, r, a, i, l, n, o, s, c, u, f, h;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (a = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (n = e._decorator),
            (o = e.Node),
            (s = e.Prefab),
            (c = e.instantiate);
        },
        function (e) {
          u = e.GameObject;
        },
        function (e) {
          f = e.default;
        },
        function (e) {
          h = e.SlotGameMode;
        },
      ],
      execute: function () {
        var b, p, d, T, m, y, _;
        l._RF.push(
          {},
          "b8868FNMDBEXYfxO3CIGBNE",
          "TableTrailEffect9881",
          void 0
        );
        var v = n.ccclass,
          E = n.property;
        e(
          "TableTrailEffect9881",
          ((b = v("TableTrailEffect9881")),
          (p = E(o)),
          (d = E(s)),
          b(
            ((y = t(
              (m = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, l = new Array(r), n = 0;
                    n < r;
                    n++
                  )
                    l[n] = arguments[n];
                  return (
                    (t = e.call.apply(e, [this].concat(l)) || this),
                    a(t, "tableTrailHolder", y, i(t)),
                    a(t, "trailPrefab", _, i(t)),
                    t
                  );
                }
                r(t, e);
                var l = t.prototype;
                return (
                  (l.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      this.node.on(
                        "ON_CHANGE_SYMBOL_TO_WILD",
                        this.onChangeSymbolWild,
                        this
                      ),
                      this.node.on("CLEAR", this.clearAllTrails, this);
                  }),
                  (l.onEnable = function () {
                    this.eventManager.on(
                      f.TABLE_STOP_SPIN,
                      this.clearAllTrails,
                      this
                    );
                  }),
                  (l.onDisable = function () {
                    this.eventManager.off(
                      f.TABLE_STOP_SPIN,
                      this.clearAllTrails,
                      this
                    );
                  }),
                  (l.onChangeSymbolWild = function (e) {
                    e.propagationStopped = !0;
                    var t = e.details,
                      r = t.symbolName,
                      a = t.node;
                    (this.dataStore.currentGameMode !== h.NormalGame &&
                      "K1" === r) ||
                      this._createTrail(r, a);
                  }),
                  (l._createTrail = function (e, t) {
                    var r = c(this.trailPrefab);
                    return (
                      (r.parent = this.tableTrailHolder),
                      (r.active = !0),
                      r.emit("INIT", e, t),
                      r
                    );
                  }),
                  (l.clearAllTrails = function () {
                    this.tableTrailHolder.destroyAllChildren();
                  }),
                  t
                );
              })(u)).prototype,
              "tableTrailHolder",
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
            (_ = t(m.prototype, "trailPrefab", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = m))
          ) || T)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TotalWinBattle9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, l, a, o, s, u, r, h, c, p, m;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (l = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (s = t.Node),
            (u = t.sp),
            (r = t.Label),
            (h = t.tween);
        },
        function (t) {
          c = t.formatMoney;
        },
        function (t) {
          p = t.GameObject;
        },
        function (t) {
          m = t.SlotGameMode;
        },
      ],
      execute: function () {
        var d, y, w, f, b, S, _, A, M, v, L;
        a._RF.push({}, "a3104FjNjFNrZ7CLwmGPeCj", "TotalWinBattle9881", void 0);
        var g = o.ccclass,
          W = o.property,
          P = "swallow_Result",
          V = "rabbit_Result";
        t(
          "TotalWinBattle9881",
          ((d = g("TotalWinBattle9881")),
          (y = W(s)),
          (w = W(u.Skeleton)),
          (f = W(u.Skeleton)),
          (b = W(r)),
          d(
            ((A = e(
              (_ = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "overlay", A, l(e)),
                    n(e, "battleAnim", M, l(e)),
                    n(e, "animMultiply", v, l(e)),
                    n(e, "labelWinAmt", L, l(e)),
                    (e.tweenShow = null),
                    (e._tweenValue = null),
                    (e.callback = null),
                    (e.currentValue = 0),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("SHOW", this.show, this),
                      this.node.on("FINISH", this.finish, this),
                      (this.overlay.active = !1),
                      (this.node.active = !1),
                      (window.totalBattle = this);
                  }),
                  (a.show = function (t) {
                    var e = this,
                      i = t.freeBattleData,
                      n = t.isBigWin,
                      l = t.winAmount,
                      a = i[i.length - 1],
                      o = this.dataStore && this.dataStore.modeTurbo,
                      s =
                        this.dataStore &&
                        this.dataStore.gameSpeed ===
                          this.config.GAME_SPEED.INSTANTLY,
                      u = a.multiply,
                      r = a.isRabbit,
                      p = l / u;
                    u <= 1
                      ? (this.node.active = !1)
                      : (this.setOpacity(this.node, 255),
                        (this.overlay.active = !0),
                        (this.animMultiply.node.active = !1),
                        p > 0
                          ? ((this.currentValue = p),
                            (this.labelWinAmt.string = c(p)))
                          : ((this.currentValue = 0),
                            (this.labelWinAmt.string = "")),
                        this.soundPlayer.playSfx("APPLAUSE_4_FINISH"),
                        this.playAnimShowMultiply(u),
                        this.battleAnim.setSkin("default"),
                        this.battleAnim.setSlotsToSetupPose(),
                        this.battleAnim.setAnimation(0, r ? V : P, !0),
                        this.tweenShow && this.tweenShow.stop(),
                        (this.tweenShow = h(this.node)
                          .delay(0.2)
                          .call(function () {
                            e.soundPlayer.playSfx("MATCH_END");
                          })
                          .delay(1.5)
                          .call(function () {
                            e.soundPlayer.muteMusic();
                          })
                          .delay(1.5)
                          .call(function () {
                            e.soundPlayer.playSfx("MULTIPLY_HIT");
                          })
                          .delay(0.3)
                          .call(function () {
                            e.updateWinAmt(l, 0.8);
                          })
                          .delay(!n || o || s ? 1.5 : 0.5)
                          .call(function () {
                            e.hide(), (e.tweenShow = null);
                          })
                          .start()));
                  }),
                  (a.playAnimShowMultiply = function (t) {
                    if (1 != t) {
                      var e = "x" + t;
                      this.animMultiply &&
                        this.animMultiply.node &&
                        ((this.animMultiply.node.active = !0),
                        this.animMultiply.setSkin(e),
                        this.animMultiply.setAnimation(0, "Result", !1));
                    }
                  }),
                  (a.updateWinAmt = function (t, e) {
                    var i = this;
                    this._tweenValue && this._tweenValue.stop(),
                      (this._tweenValue = h(this)),
                      this._tweenValue
                        .to(
                          e,
                          { currentValue: t },
                          {
                            easing: "sineInOut",
                            onUpdate: function () {
                              i._updateLabelWinAmount();
                            },
                            onComplete: function () {
                              i._updateLabelWinAmount();
                            },
                          }
                        )
                        .start();
                  }),
                  (a.finish = function (t, e) {
                    this.callback = e;
                    var i = t.freeBattleData;
                    i[i.length - 1].multiply <= 1 && this.hide();
                  }),
                  (a.hide = function () {
                    this.labelWinAmt && (this.labelWinAmt.string = ""),
                      this.soundPlayer.unmuteMusic(),
                      this.soundPlayer.playMainBGM(m.FreeGame),
                      this.callback && this.callback(),
                      (this.callback = null),
                      this._tweenValue && this._tweenValue.stop(),
                      (this._tweenValue = null),
                      this.tweenShow && this.tweenShow.stop(),
                      (this.tweenShow = null),
                      this.node &&
                        (this.setOpacity(this.node, 0),
                        (this.node.active = !1));
                  }),
                  (a._updateLabelWinAmount = function () {
                    this.labelWinAmt &&
                      (this.labelWinAmt.string =
                        this.currentValue > 0 ? c(this.currentValue) : "");
                  }),
                  (a._getSoundMul = function (t) {
                    return 1 == t
                      ? "MULTIPLY_1"
                      : 2 == t
                      ? "MULTIPLY_2"
                      : 4 == t
                      ? "MULTIPLY_3"
                      : "MULTIPLY_4";
                  }),
                  (a.onDestroy = function () {
                    this._tweenValue && this._tweenValue.stop(),
                      (this._tweenValue = null),
                      this.tweenShow && this.tweenShow.stop(),
                      (this.tweenShow = null);
                  }),
                  e
                );
              })(p)).prototype,
              "overlay",
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
            (M = e(_.prototype, "battleAnim", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = e(_.prototype, "animMultiply", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(_.prototype, "labelWinAmt", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = _))
          ) || S)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TotalWinPanel9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TotalWinPanel.ts",
    "./utils2.ts",
  ],
  function (n) {
    "use strict";
    var t, e, i, o, a, l, s, u, c, r, d, h, p, m;
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
            (l = n._decorator),
            (s = n.sp),
            (u = n.Node),
            (c = n.Vec3),
            (r = n.tween);
        },
        function (n) {
          d = n.TotalWinPanel;
        },
        function (n) {
          (h = n.setOpacity), (p = n.formatMoney), (m = n.fadeOut);
        },
      ],
      execute: function () {
        var f, T, w, A, y, W, P;
        a._RF.push({}, "fe213+mxd5HcpcEMHRed41M", "TotalWinPanel9881", void 0);
        var v = l.ccclass,
          _ = l.property;
        n(
          "TotalWinPanel9881",
          ((f = v("TotalWinPanel9881")),
          (T = _({ type: s.Skeleton })),
          (w = _(u)),
          f(
            ((W = t(
              (y = (function (n) {
                function t() {
                  for (
                    var t, e = arguments.length, a = new Array(e), l = 0;
                    l < e;
                    l++
                  )
                    a[l] = arguments[l];
                  return (
                    (t = n.call.apply(n, [this].concat(a)) || this),
                    i(t, "animation", W, o(t)),
                    i(t, "particle", P, o(t)),
                    (t.soundId = ""),
                    (t.tweenTotalWinPanel = null),
                    (t.tweenWinAmount = null),
                    t
                  );
                }
                e(t, n);
                var a = t.prototype;
                return (
                  (a.show = function () {
                    (this.node.active = !0), h(this.node, 255);
                  }),
                  (a.enter = function () {
                    var n = this;
                    this.closeBtn &&
                      ((this.closeBtn.node.active = !0),
                      this.setOpacity(this.closeBtn.node, 0),
                      this.fadeTo(this.closeBtn.node, 0.3, 200)),
                      (this.canClose = !1);
                    var t = this.content,
                      e = t.winAmount,
                      i = t.rate,
                      o = 3,
                      a = "1";
                    i >= 30 && i < 70
                      ? ((a = "2"),
                        (o = 4),
                        this.particle.emit("START_PARTICLE", 0.3))
                      : i >= 70 &&
                        ((a = "3"),
                        (o = 5),
                        this.particle.emit("START_PARTICLE", 0.3));
                    var l = "LvL" + a + "_Appear",
                      s = "LvL" + a + "_Disappear",
                      u = "LvL" + a + "_Idle";
                    (this.soundId = "TOTAL_WIN_" + a),
                      this.playSoundTotalWin(),
                      this.animation.setAnimation(0, l, !1),
                      this.animation.addAnimation(0, u, !0),
                      this.winAmount.node.setScale(new c(1, 1, 1)),
                      this.setOpacity(this.winAmount.node, 255),
                      (this.winAmount.string = p(e)),
                      (this.tweenTotalWinPanel = r(this.node)
                        .delay(0.5)
                        .call(function () {
                          (n.canClose = !0), (n.closeBtn.interactable = !0);
                        })
                        .delay(o - 1)
                        .call(function () {
                          n.particle.emit("STOP_PARTICLE"),
                            n.animation.setAnimation(0, s, !1);
                        })
                        .delay(0.2)
                        .call(function () {
                          n.winAmount &&
                            n.winAmount.node &&
                            m(n.winAmount.node, 0.3),
                            n.tweenWinAmount && n.tweenWinAmount.stop(),
                            (n.tweenWinAmount = r(n.winAmount.node)
                              .to(0.25, { scale: new c(0, 0, 0) })
                              .start()),
                            n.callback && n.callback(),
                            (n.callback = null),
                            n.closeBtn && n.fadeOut(n.closeBtn.node, 0.3);
                        })
                        .delay(1.3)
                        .call(function () {
                          (n.tweenTotalWinPanel = null),
                            n.stopSoundTotalWin(),
                            n.guiMgr.onIngameEvent(
                              null,
                              "ON_CLOSE_TOTAL_WIN_PANEL"
                            ),
                            n.exit();
                        })
                        .start());
                  }),
                  (a.playSoundTotalWin = function () {
                    this.soundPlayer && this.soundPlayer.playSfx(this.soundId);
                  }),
                  (a.stopSoundTotalWin = function () {
                    this.soundPlayer && this.soundPlayer.stopSfx(this.soundId);
                  }),
                  (a.onDestroy = function () {
                    this.tweenTotalWinPanel && this.tweenTotalWinPanel.stop(),
                      (this.tweenTotalWinPanel = null),
                      this.tweenWinAmount && this.tweenWinAmount.stop(),
                      (this.tweenWinAmount = null);
                  }),
                  t
                );
              })(d)).prototype,
              "animation",
              [T],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (P = t(y.prototype, "particle", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = y))
          ) || A)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrailSymbol9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts"],
  function (t) {
    "use strict";
    var e, i, r, o, s, n, a, l, c, u, f, h;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (n = t._decorator),
            (a = t.Node),
            (l = t.SpriteFrame),
            (c = t.Sprite),
            (u = t.UITransform),
            (f = t.Component);
        },
        function (t) {
          h = t.convertAssetArrayToObject;
        },
      ],
      execute: function () {
        var p, m, b, g, y, v, d, S, T;
        s._RF.push({}, "6d806Nr7klPaaH8D/plhSEO", "TrailSymbol9881", void 0);
        var P = n.ccclass,
          O = n.property;
        t(
          "TrailSymbol9881",
          ((p = P("TrailSymbol9881")),
          (m = O(a)),
          (b = O(a)),
          (g = O(l)),
          p(
            ((d = e(
              (v = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    s[n] = arguments[n];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    r(e, "staticSymbol", d, o(e)),
                    r(e, "particleEffect", S, o(e)),
                    r(e, "symbolSpriteframes", T, o(e)),
                    (e.assets = void 0),
                    (e.target = void 0),
                    (e.symbolName = void 0),
                    (e.isOutOffTable = void 0),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    (this.assets = h(this.symbolSpriteframes)),
                      this.node.on("INIT", this.init, this),
                      this.node.on("RESET", this.reset, this),
                      (this.target = null);
                  }),
                  (s.init = function (t, e) {
                    var i = this.assets[t];
                    (this.symbolName = t),
                      (this.target = e),
                      (this.staticSymbol.getComponent(c).spriteFrame = i),
                      (this.particleEffect.active = !0),
                      this.particleEffect.emit("START_PARTICLE");
                    var r = this._getPositions().curPos;
                    (this.node.position = r),
                      (this.isOutOffTable = !1),
                      (this.staticSymbol.active = !0);
                  }),
                  (s._getPositions = function () {
                    var t = this.target.parent
                      .getComponent(u)
                      .convertToWorldSpaceAR(this.target.getPosition());
                    return {
                      worldPos: t,
                      curPos: this.node.parent
                        .getComponent(u)
                        .convertToNodeSpaceAR(t),
                    };
                  }),
                  (s.lateUpdate = function () {
                    if (this.target && !this.isOutOffTable) {
                      var t = this._getPositions().curPos;
                      t.y < -(this._getHeight(this.node.parent) + 163) / 2
                        ? ((this.staticSymbol.active = !1),
                          this.particleEffect.emit("STOP_PARTICLE"),
                          (this.isOutOffTable = !0),
                          (this.target = null))
                        : (this.node.position = t);
                    }
                  }),
                  (s._getHeight = function (t) {
                    return t.getComponent(u).height;
                  }),
                  (s.reset = function (t) {
                    var e = this;
                    this.particleEffect.emit("STOP_PARTICLE"),
                      (this.target = null),
                      (this.isOutOffTable = !1),
                      this.scheduleOnce(function () {
                        (e.staticSymbol.active = !1),
                          (e.particleEffect.active = !1),
                          t && t();
                      });
                  }),
                  e
                );
              })(f)).prototype,
              "staticSymbol",
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
            (S = e(v.prototype, "particleEffect", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(v.prototype, "symbolSpriteframes", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (y = v))
          ) || y)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrialButton9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./TrialButton.ts",
  ],
  function (t) {
    "use strict";
    var n, o, i, e, u;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          e = t.SlotSceneType;
        },
        function (t) {
          u = t.TrialButton;
        },
      ],
      execute: function () {
        var c;
        o._RF.push({}, "4b944FT2uZLfLhLVMNcbM7s", "TrialButton9881", void 0);
        var r = i.ccclass;
        t(
          "TrialButton9881",
          r("TrialButton9881")(
            (c = (function (t) {
              function o() {
                return t.apply(this, arguments) || this;
              }
              n(o, t);
              var i = o.prototype;
              return (
                (i.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    this.node.on(
                      "PLAY_REAL_MODE",
                      this.onPlayRealButtonClicked,
                      this
                    );
                }),
                (i.onPlayRealButtonClicked = function () {
                  var n = this.guiMgr.isShowingCutScene(e.BigWin),
                    o = this.guiMgr.isShowingCutScene(e.JackpotWin);
                  n || o || t.prototype.onPlayRealButtonClicked.call(this);
                }),
                o
              );
            })(u))
          ) || c
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrialInfoButton9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./TrialButton.ts",
    "./GameObject.ts",
  ],
  function (t) {
    "use strict";
    var n, i, e, o, r, a, u, l, s, c, h;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy), (a = t._decorator), (u = t.Node), (l = t.Button);
        },
        function (t) {
          s = t.SlotSceneType;
        },
        function (t) {
          c = t.TrialButton;
        },
        function (t) {
          h = t.GameObject;
        },
      ],
      execute: function () {
        var p, T, B, f, g;
        r._RF.push(
          {},
          "01221TTXpdPEbhvza8CZDK+",
          "TrialInfoButton9881",
          void 0
        );
        var y = a.ccclass,
          d = a.property;
        t(
          "TrialInfoButton9881",
          ((p = y("TrialInfoButton9881")),
          (T = d({ type: u })),
          p(
            ((g = n(
              (f = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (n = t.call.apply(t, [this].concat(r)) || this),
                    e(n, "trialButton", g, o(n)),
                    n
                  );
                }
                i(n, t);
                var r = n.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.eventManager.on(
                        "SHOW_TRIAL_BUTTON_INFO_PAGE",
                        this.showTrialButton,
                        this
                      ),
                      this.eventManager.on(
                        "ENABLE_TRIAL_BUTTON",
                        this.enableTrialButton,
                        this
                      );
                  }),
                  (r.showTrialButton = function () {
                    this.trialButton.active = !0;
                  }),
                  (r.enableTrialButton = function (t) {
                    this.trialButton.getComponent(l).interactable = t;
                  }),
                  (r.playTrialMode = function () {
                    var t = this;
                    (this.dataStore.playSession.winAmountPS = 0),
                      this.guiMgr.winAmount.emit("RESET_NUMBER"),
                      this.guiMgr.trialButton
                        .getComponent(c)
                        .onEnableButtons(!0),
                      this.guiMgr.trialButton
                        .getComponent(c)
                        .onPlayTrialButtonClicked(),
                      (this.trialButton.active = !1),
                      this.guiMgr.hideCutScene(s.GameInfo),
                      this.scheduleOnce(function () {
                        t.eventManager.emit("START_SPIN_TRIAL");
                      }, 2);
                  }),
                  n
                );
              })(h)).prototype,
              "trialButton",
              [T],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (B = f))
          ) || B)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Turbo9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./Turbo.ts"],
  function (t) {
    "use strict";
    var i, o, r, e, s, u, n, a, b, h;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (u = t._decorator),
            (n = t.Node),
            (a = t.sys),
            (b = t.Toggle);
        },
        function (t) {
          h = t.Turbo;
        },
      ],
      execute: function () {
        var c, l, f, T, p, g, v;
        s._RF.push({}, "65e25lOZXhCzKWcBM82A8AF", "Turbo9881", void 0);
        var d = u.ccclass,
          O = u.property;
        t(
          "Turbo9881",
          ((c = d("Turbo9881")),
          (l = O(n)),
          (f = O(n)),
          c(
            ((g = i(
              (p = (function (t) {
                function i() {
                  for (
                    var i, o = arguments.length, s = new Array(o), u = 0;
                    u < o;
                    u++
                  )
                    s[u] = arguments[u];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    r(i, "turboOn", g, e(i)),
                    r(i, "turboOff", v, e(i)),
                    (i.isTurbo = void 0),
                    (i.firstLoad = void 0),
                    i
                  );
                }
                o(i, t);
                var s = i.prototype;
                return (
                  (s.loadTurboConfig = function () {
                    var t = this.config.GAME_ID,
                      i =
                        JSON.parse(
                          a.localStorage.getItem("turboValueWithGame") || "{}"
                        )[t] || !1;
                    this.getComponent(b) &&
                      (this.getComponent(b).isChecked = i),
                      this.dataStore.setTurbo(i),
                      i ? this.turnOnTurbo() : this.turnOffTurbo();
                  }),
                  (s.turboToggle = function () {
                    this.guiMgr.onIngameEvent(null, "TURBO_CLICK"),
                      (this.isTurbo = !this.isTurbo),
                      (this.turboOn.active = this.isTurbo),
                      (this.turboOff.active = !this.isTurbo),
                      this.dataStore.setTurbo(this.isTurbo),
                      this.soundPlayer &&
                        !this.firstLoad &&
                        this.soundPlayer.playSfx("TURBO"),
                      this.saveTurboConfig(this.isTurbo);
                  }),
                  (s.turnOnTurbo = function () {
                    (this.isTurbo = !0),
                      (this.turboOn.active = !0),
                      (this.turboOff.active = !1),
                      this.dataStore.setTurbo(!0),
                      this.saveTurboConfig(this.isTurbo);
                  }),
                  (s.turnOffTurbo = function () {
                    (this.isTurbo = !1),
                      (this.turboOn.active = !1),
                      (this.turboOff.active = !0),
                      this.dataStore.setTurbo(!1),
                      this.saveTurboConfig(this.isTurbo);
                  }),
                  i
                );
              })(h)).prototype,
              "turboOn",
              [l],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (v = i(p.prototype, "turboOff", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (T = p))
          ) || T)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TutorialMgr9881.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./TutorialMgr.ts"],
  function (i) {
    "use strict";
    var t, s, o, n;
    return {
      setters: [
        function (i) {
          t = i.inheritsLoose;
        },
        function (i) {
          (s = i.cclegacy), (o = i._decorator);
        },
        function (i) {
          n = i.TutorialMgr;
        },
      ],
      execute: function () {
        var h;
        s._RF.push({}, "cf2e2aTeI1McIty8imjEMfo", "TutorialMgr9881", void 0);
        var r = o.ccclass;
        o.property,
          i(
            "TutorialMgr9881",
            r("TutorialMgr9881")(
              (h = (function (i) {
                function s() {
                  for (
                    var t, s = arguments.length, o = new Array(s), n = 0;
                    n < s;
                    n++
                  )
                    o[n] = arguments[n];
                  return (
                    ((t =
                      i.call.apply(i, [this].concat(o)) ||
                      this).hasShowPopupFinished = !1),
                    (t.isShowingTutorial = !1),
                    (t.isTutorialSpin = !1),
                    t
                  );
                }
                t(s, i);
                var o = s.prototype;
                return (
                  (o.startTutorial = function () {
                    var t = this;
                    i.prototype.startTutorial.call(this),
                      this.scheduleOnce(function () {
                        t.mainDirector.currentGameMode.emit("SPIN_DISABLE"),
                          (t.buttonSkip.active = !1);
                      }, this.timeDelayStart),
                      (this.hasShowPopupFinished = !1),
                      (this.isShowingTutorial = !0),
                      (this.isTutorialSpin = !0),
                      (this.config.trialSessionCount = 0),
                      (this.config.isPlayedMax = !1);
                  }),
                  (o.trigger = function (i) {
                    this.waitingTrigger &&
                      this.waitingTrigger.some(function (t) {
                        return t === i;
                      }) &&
                      ((this.index += 1),
                      this.index < this.tutorialSteps.json.Steps.length
                        ? this.run()
                        : this.hideTutorial()),
                      "ON_JACKPOT_CUTSCENE_CLOSE" == i &&
                        this.jackpotReset &&
                        (this.resetJackpot(), (this.jackpotReset = !1)),
                      "GAME_RESET_SESSION" === i &&
                        ((this._isSpinning = !1),
                        this.doActionAfterFinishSpin &&
                          (this._activeBet({ active: !0 }),
                          (this.endTutorialData = !0),
                          (this.finished = !0),
                          (this.doActionAfterFinishSpin = !1))),
                      "NORMAL_GAME_RESTART" === i &&
                        (this.config.trialSessionCount += 1),
                      "SPIN_CLICK" === i && (this._isSpinning = !0),
                      "NORMAL_GAME_RESTART" === i &&
                        this.isTutorialSpin &&
                        ((this.isTutorialSpin = !1),
                        (this.config.trialSessionCount = 0)),
                      this.isShowingTutorial &&
                        !this.hasShowPopupFinished &&
                        "ON_CLOSE_TOTAL_WIN_PANEL" === i &&
                        ((this.isShowingTutorial = !1),
                        this.hideTutorial(),
                        this._showPopupFinish());
                  }),
                  (o._showPopupFinish = function () {
                    if (!this.hasShowPopupFinished) {
                      this.hasShowPopupFinished = !0;
                      var i =
                        this.config.MESSAGE_DIALOG.START_TRIAL ||
                        this.config.TUTORIAL_TEXT.START_TRIAL;
                      this.guiMgr.showTutorialPopup(i);
                    }
                  }),
                  (o.playAnimSwitchToReal = function () {
                    this.skipTutorial(),
                      (this.isShowingTutorial = !1),
                      i.prototype.playAnimSwitchToReal.call(this);
                  }),
                  s
                );
              })(n))
            ) || h
          );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TutorialPopup9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameObject.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var i, o, e, n, u, a, r, l, s, c, p;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (u = t.cclegacy),
            (a = t._decorator),
            (r = t.Node),
            (l = t.Label),
            (s = t.tween);
        },
        function (t) {
          c = t.GameObject;
        },
        function (t) {
          p = t.setOpacity;
        },
      ],
      execute: function () {
        var h, P, d, f, y, w, T;
        u._RF.push({}, "47a71kT8btC0a7WQ2OjOxoO", "TutorialPopup9881", void 0);
        var b = a.ccclass,
          v = a.property;
        t(
          "TutorialPopup9881",
          ((h = b("TutorialPopup9881")),
          (P = v(r)),
          (d = v(l)),
          h(
            ((w = i(
              (y = (function (t) {
                function i() {
                  for (
                    var i, o = arguments.length, u = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    u[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(u)) || this),
                    e(i, "buttonLayout", w, n(i)),
                    e(i, "lbMessage", T, n(i)),
                    (i.waitForAction = !1),
                    (i.tweenTutorialPopup = null),
                    i
                  );
                }
                o(i, t);
                var u = i.prototype;
                return (
                  (u.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "SHOW_TUTORIAL_POPUP",
                        this.showTutorialPopup,
                        this
                      ),
                      (this.node.active = !1);
                  }),
                  (u.showTutorialPopup = function (t, i) {
                    var o = this;
                    void 0 === i && (i = !1),
                      (this.waitForAction = i),
                      (this.buttonLayout.active = this.waitForAction),
                      (this.lbMessage.string = t),
                      (this.node.active = !0),
                      p(this.node, 255),
                      this.waitForAction ||
                        (this.tweenTutorialPopup = s(this.node)
                          .delay(3)
                          .call(function () {
                            (o.node.active = !1), (o.tweenTutorialPopup = null);
                          })
                          .start());
                  }),
                  (u.onClickConfirm = function () {
                    this.soundPlayer.playSFXClick(),
                      (this.node.active = !1),
                      this.guiMgr.trialButton.emit("PLAY_REAL_MODE");
                  }),
                  (u.onClickCancel = function () {
                    this.soundPlayer.playSFXClick(), (this.node.active = !1);
                  }),
                  (u.onHidePopup = function () {
                    this.waitForAction ||
                      (this.tweenTutorialPopup &&
                        this.tweenTutorialPopup.stop(),
                      (this.tweenTutorialPopup = null),
                      (this.node.active = !1));
                  }),
                  (u.onDestroy = function () {
                    this.tweenTutorialPopup && this.tweenTutorialPopup.stop(),
                      (this.tweenTutorialPopup = null);
                  }),
                  i
                );
              })(c)).prototype,
              "buttonLayout",
              [P],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (T = i(y.prototype, "lbMessage", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = y))
          ) || f)
        );
        u._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UIManager9881.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./UIManager.ts",
    "./CustomEnum.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, a, o, r, l, s, u, c, h, m, p;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (r = t._decorator),
            (l = t.Node),
            (s = t.Button),
            (u = t.sp);
        },
        function (t) {
          c = t.UIManager;
        },
        function (t) {
          (h = t.SlotGameMode), (m = t.WalletType), (p = t.SlotSceneType);
        },
      ],
      execute: function () {
        var f, d, S, T, y, B, b, A, M, I, g, w, v, _, P, W, E, O, G, R, N;
        o._RF.push({}, "bed61c8I9ZDu68KPLM6xnpY", "UIManager9881", void 0);
        var U = r.ccclass,
          F = r.property;
        t(
          "UIManager9881",
          ((f = U("UIManager9881")),
          (d = F(l)),
          (S = F(l)),
          (T = F(l)),
          (y = F(l)),
          (B = F(l)),
          (b = F(s)),
          (A = F(u.Skeleton)),
          (M = F(u.Skeleton)),
          (I = F(l)),
          f(
            ((v = i(
              (w = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    n(i, "mainSpinBtn", v, a(i)),
                    n(i, "freeSpinBtn", _, a(i)),
                    n(i, "totalBattle", P, a(i)),
                    n(i, "freeBattle", W, a(i)),
                    n(i, "introGame", E, a(i)),
                    n(i, "playTrialBtn", O, a(i)),
                    n(i, "animBG", G, a(i)),
                    n(i, "animWinAmt", R, a(i)),
                    n(i, "tutorialPopup", N, a(i)),
                    i
                  );
                }
                e(i, t);
                var o = i.prototype;
                return (
                  (o.changeGameMode = function (t) {
                    switch ((void 0 === t && (t = h.NormalGame), t)) {
                      case h.FreeGame:
                        this.showUIFree();
                        break;
                      default:
                        this.showUIMain();
                    }
                  }),
                  (o.showUIMain = function () {
                    t.prototype.showUIMain.call(this),
                      (this.mainSpinBtn.active = !0),
                      (this.freeSpinBtn.active = !1),
                      this.animBG.setAnimation(0, "MainG", !1);
                  }),
                  (o.showUIFree = function () {
                    t.prototype.showUIFree.call(this),
                      (this.mainSpinBtn.active = !1),
                      (this.freeSpinBtn.active = !0),
                      (this.bet.active = !0),
                      (this.wallet.active = !0),
                      (this.jackpot.active = !0),
                      (this.turbo.active = !0),
                      this.dataStore.isTrialMode &&
                        (this.trialButton.active = !0),
                      this.animBG.setAnimation(0, "FreeG", !1);
                  }),
                  (o.enableTrialBtn = function (i) {
                    void 0 === i && (i = !1),
                      t.prototype.enableTrialBtn.call(this, i),
                      this.eventManager.emit("ENABLE_TRIAL_BUTTON", i);
                  }),
                  (o.switchToTrialMode = function () {
                    this.dataStore.resumeWallet(m.NORMAL),
                      this.dataStore.resumeWallet(m.PROMOTE),
                      this.dataStore.resumeWallet(m.TRIAL),
                      t.prototype.switchToTrialMode.call(this),
                      this.disableBet();
                  }),
                  (o.switchToRealMode = function () {
                    var i = this;
                    t.prototype.switchToRealMode.call(this);
                    var e = this.dataStore.currentGameMode === h.NormalGame;
                    (this.dataStore.playSession.winAmountPS = 0),
                      (this.dataStore.playSession.freeGameRemain = 0),
                      (this.dataStore.playSession.isFinished = !0),
                      (this.dataStore.spinTimes = 0),
                      this.dataStore.resumeWallet(m.NORMAL),
                      this.dataStore.resumeWallet(m.PROMOTE),
                      this.dataStore.resumeWallet(m.TRIAL),
                      this.enableTrialBtn(!1);
                    var n =
                      this.config.MESSAGE_DIALOG.B2R ||
                      this.config.TUTORIAL_TEXT.B2R;
                    e
                      ? (this.mainDirector.gameModes[h.NormalGame].emit(
                          "FORCE_TO_EXIT"
                        ),
                        this.config.isPlayedMax ||
                          this.showTutorialPopup(n, !1),
                        (this.config.isPlayedMax = !1))
                      : (this.mainDirector.gameModes[h.FreeGame].emit(
                          "FORCE_TO_EXIT",
                          function () {
                            i.mainDirector.gameModes[h.NormalGame].emit(
                              "FORCE_TO_EXIT"
                            );
                          }
                        ),
                        this.showTutorialPopup(n, !1)),
                      this.tutorialMgr &&
                        this.tutorialMgr.trigger("GAME_RESET_SESSION");
                  }),
                  (o.showTotalBattle = function (t) {
                    (this.totalBattle.active = !0),
                      this.totalBattle.emit("SHOW", t);
                  }),
                  (o.hideTotalBattle = function (t, i) {
                    this.totalBattle &&
                      ((this.totalBattle.active = !0),
                      this.totalBattle.emit("FINISH", t, i));
                  }),
                  (o.playSoundCancel = function () {
                    this.soundPlayer.playSfx("CANCEL");
                  }),
                  (o.playAnimWin = function (t) {
                    this.animWinAmt &&
                      this.animWinAmt.node &&
                      ((this.animWinAmt.node.active = !0),
                      this.animWinAmt.setAnimation(0, t, !1));
                  }),
                  (o.fadeOutWinAmount = function () {
                    this.winAmount &&
                      (this.winAmount.emit("FADE_OUT_NUMBER", 0.4),
                      this.hideAnimWin());
                  }),
                  (o.hideAnimWin = function () {
                    this.animWinAmt &&
                      this.animWinAmt.node &&
                      (this.animWinAmt.node.active = !1);
                  }),
                  (o.extraSpinCheck = function () {
                    return !this.introGame.active;
                  }),
                  (o.enablePlayTrialButton = function (t) {
                    void 0 === t && (t = !0),
                      this.playTrialBtn && (this.playTrialBtn.interactable = t);
                  }),
                  (o.stopAllWinLineSound = function () {
                    var t = this;
                    this.soundPlayer &&
                      ["WIN_1", "WIN_2", "WIN_3", "WIN_4"].forEach(function (
                        i
                      ) {
                        t.soundPlayer.stopSfx(i);
                      });
                  }),
                  (o.showTutorialPopup = function (t, i) {
                    this.tutorialPopup &&
                      ((this.tutorialPopup.active = !0),
                      this.tutorialPopup.emit("SHOW_TUTORIAL_POPUP", t, i));
                  }),
                  (o.onInfoClick = function () {
                    this.showCutScene(p.GameInfo),
                      this.soundPlayer && this.soundPlayer.playSFXClick(),
                      this.dataStore.isTrialMode ||
                        this.eventManager.emit("SHOW_TRIAL_BUTTON_INFO_PAGE");
                  }),
                  (o.showJackpotHistory = function () {
                    this.showCutScene(p.JackpotHistory),
                      this.soundPlayer && this.soundPlayer.playSFXClick();
                  }),
                  (o.enableBet = function () {
                    this.bet.emit("ENABLE_BET");
                  }),
                  i
                );
              })(c)).prototype,
              "mainSpinBtn",
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
            (_ = i(w.prototype, "freeSpinBtn", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = i(w.prototype, "totalBattle", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = i(w.prototype, "freeBattle", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = i(w.prototype, "introGame", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = i(w.prototype, "playTrialBtn", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = i(w.prototype, "animBG", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = i(w.prototype, "animWinAmt", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = i(w.prototype, "tutorialPopup", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = w))
          ) || g)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WinEffect9881.ts",
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
    var i, e, n, a, s, r, l, o, c, h, u, f, p, d;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (r = t._decorator),
            (l = t.Node),
            (o = t.sp),
            (c = t.tween),
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
        var T, m, S, g, y, W, E, P, _, v, b, C, I;
        s._RF.push({}, "ac972JwUUVHUbWXHBEUL0Mn", "WinEffect9881", void 0);
        var w = r.ccclass,
          N = r.property,
          A = "K2",
          L = "K3",
          B = "TL_Appear",
          k = "TL_Idle",
          M = "TL_to_TCL",
          R = "TCL_Idle",
          O = "TCL_to_TSL_Tho",
          x = "TCL_to_TSL_En",
          D = "TSL_Idle_Tho",
          H = "TSL_Idle_En";
        t(
          "WinEffect9881",
          ((T = w("WinEffect9881")),
          (m = N(l)),
          (S = N(l)),
          (g = N(l)),
          (y = N(l)),
          (W = N(l)),
          T(
            ((_ = i(
              (P = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, s = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    n(i, "animBigWin", _, a(i)),
                    n(i, "particleBigWin", v, a(i)),
                    n(i, "particleMegaWin", b, a(i)),
                    n(i, "particleSuperWin", C, a(i)),
                    n(i, "fastParticleHolder", I, a(i)),
                    (i.winCharacter = ""),
                    (i.animSkeleton = null),
                    i
                  );
                }
                e(i, t);
                var s = i.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.animBigWin &&
                        (this.animSkeleton = this.animBigWin.getComponent(
                          o.Skeleton
                        ));
                  }),
                  (s.enter = function () {
                    var t =
                        this.dataStore.gameSpeed ===
                        this.config.GAME_SPEED.INSTANTLY,
                      i = this.dataStore.modeTurbo,
                      e = this.content,
                      n = e.matrix,
                      a = e.freeBattleData,
                      s = e.rate;
                    this.coinsEffect && this.setOpacity(this.coinsEffect, 255),
                      (this.currentTitle = 0),
                      i || t
                        ? ((this.animSkeleton.node.active = !1),
                          (this.particleBigWin.active = !1),
                          (this.particleMegaWin.active = !1),
                          (this.particleSuperWin.active = !1),
                          this.showFastEffectWin())
                        : (s >= this.superRate
                            ? (this.animDuration = 12)
                            : s >= this.megaRate
                            ? (this.animDuration = 10)
                            : (this.animDuration = 8),
                          this.showEffectWin(),
                          (this.winCharacter = this.getBigWinCharacter(n, a)),
                          (this.animSkeleton.node.active = !0),
                          this.animSkeleton.setAnimation(0, B, !1),
                          this.animSkeleton.addAnimation(0, k, !0));
                  }),
                  (s.showFastEffectWin = function () {
                    var t = this;
                    if (this.isShowFastEffect)
                      return (
                        this.callback && this.callback(),
                        void (this.callback = null)
                      );
                    (this.isShowFastEffect = !0),
                      this.setOpacity(this.winInfo, 0),
                      this.overlayNode && (this.overlayNode.active = !1),
                      this.fastParticleHolder &&
                        ((this.fastParticleHolder.active = !0),
                        this.fastParticleHolder.emit("START_PARTICLE")),
                      this.callback && this.callback(),
                      (this.callback = null),
                      this.nodeTween && this.nodeTween.stop(),
                      (this.nodeTween = c(this.node)
                        .delay(1)
                        .call(function () {
                          t.fastParticleHolder &&
                            t.fastParticleHolder.emit("STOP_PARTICLE");
                        })
                        .delay(2)
                        .call(function () {
                          t.exit();
                        })
                        .start());
                  }),
                  (s.update = function (t) {
                    if (this.isUpdating)
                      if (
                        ((this.label.string = f(this.currentValue)),
                        this.currentValue >= this.superWinAmount &&
                          1 == this.currentTitle)
                      ) {
                        this.soundPlayer.playSfx("BIGWIN_HIT"),
                          this.changeTitle(2),
                          this.startParticle();
                        var i = this.winCharacter == A ? O : x,
                          e = this.winCharacter == A ? D : H;
                        this.animSkeleton.setAnimation(0, i, !1),
                          this.animSkeleton.addAnimation(0, e, !0);
                      } else
                        this.currentValue >= this.megaWinAmount &&
                          0 == this.currentTitle &&
                          (this.soundPlayer.playSfx("BIGWIN_HIT"),
                          this.changeTitle(1),
                          this.startParticle(),
                          this.animSkeleton.setAnimation(0, M, !1),
                          this.animSkeleton.addAnimation(0, R, !0));
                  }),
                  (s.getBigWinCharacter = function (t, i) {
                    if (i) return i[i.length - 1].isRabbit ? A : L;
                    var e = this._hasBigWild(t, "K1"),
                      n = this._hasBigWild(t, "K2"),
                      a = this._hasBigWild(t, "K3");
                    return (e && n && a) || (e && n)
                      ? A
                      : e && a
                      ? L
                      : n
                      ? A
                      : a
                      ? L
                      : A;
                  }),
                  (s._hasBigWild = function (t, i) {
                    return (
                      t.flat().reduce(function (t, e) {
                        return t + (e === i ? 1 : 0);
                      }, 0) >= 3
                    );
                  }),
                  (s.playSoundStart = function () {
                    this.soundPlayer &&
                      (this.soundPlayer.stopMusic(),
                      this.soundPlayer.playSfx("BIGWIN"),
                      this.soundPlayer.playSfx("COUNTING", !0));
                  }),
                  (s.playSoundEnd = function () {
                    this.soundPlayer &&
                      (this.soundPlayer.stopSfx("BIGWIN"),
                      this.soundPlayer.stopSfx("COUNTING"),
                      this.soundPlayer.playSfx("BIGWIN_END"),
                      this.soundPlayer.playSfx("COUNTING_END"));
                  }),
                  (s.startParticle = function () {
                    this.stopParticle(),
                      0 == this.currentTitle
                        ? ((this.particleBigWin.active = !0),
                          this.particleBigWin.emit("START_PARTICLE"))
                        : 1 == this.currentTitle
                        ? ((this.particleMegaWin.active = !0),
                          this.particleMegaWin.emit("START_PARTICLE"))
                        : 2 == this.currentTitle &&
                          ((this.particleSuperWin.active = !0),
                          this.particleSuperWin.emit("START_PARTICLE"));
                  }),
                  (s.stopParticle = function () {
                    this.particleBigWin.emit("STOP_PARTICLE"),
                      this.particleMegaWin.emit("STOP_PARTICLE"),
                      this.particleSuperWin.emit("STOP_PARTICLE");
                  }),
                  (s.exit = function (t) {
                    var i = this;
                    void 0 === t && (t = null),
                      this.isShowNormalEffect &&
                        this.soundPlayer &&
                        this.soundPlayer.stopAllEffects(),
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
                            var t = i.guiMgr.sceneComp.indexOf(i);
                            t > -1 && i.guiMgr.sceneComp.splice(t, 1);
                          }
                        ),
                      this.hideScene(),
                      (this.isShowFastEffect = !1),
                      (this.isShowNormalEffect = !1);
                  }),
                  (s.onDestroy = function () {
                    this.nodeTween && this.nodeTween.stop(),
                      (this.nodeTween = null);
                  }),
                  i
                );
              })(u)).prototype,
              "animBigWin",
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
            (v = i(P.prototype, "particleBigWin", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = i(P.prototype, "particleMegaWin", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = i(P.prototype, "particleSuperWin", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = i(P.prototype, "fastParticleHolder", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = P))
          ) || E)
        );
        s._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/cc30-thanbaimientay-9881",
    "chunks:///_virtual/cc30-thanbaimientay-9881"
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
