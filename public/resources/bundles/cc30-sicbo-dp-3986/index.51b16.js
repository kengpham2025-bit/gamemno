System.register(
  "chunks:///_virtual/AssetsManager3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTAssetsManager.ts",
  ],
  function (e) {
    "use strict";
    var t, r, s, a, i, n, o, c;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (s = e.initializerDefineProperty),
            (a = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy), (n = e.SpriteAtlas), (o = e._decorator);
        },
        null,
        function (e) {
          c = e.BTAssetsManager;
        },
      ],
      execute: function () {
        var l, p, u, f, g;
        i._RF.push({}, "0edd6GOAB9LFL0RB3dxpgsi", "AssetsManager3986", void 0);
        var y = o,
          A = y.ccclass,
          d = y.property;
        e(
          "AssetsManager3986",
          ((l = A("AssetsManager3986")),
          (p = d({ displayName: "Chip Atlas Perspective", type: n })),
          l(
            ((g = t(
              (f = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, i = new Array(r), n = 0;
                    n < r;
                    n++
                  )
                    i[n] = arguments[n];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    s(t, "ChipAtlasPerspective", g, a(t)),
                    t
                  );
                }
                return (
                  r(t, e),
                  (t.prototype.onLoad = function () {
                    e.prototype.onLoad.call(this);
                  }),
                  t
                );
              })(c)).prototype,
              "ChipAtlasPerspective",
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
            (u = f))
          ) || u)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/AutoRebet3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./loadConfigAsync.ts",
    "./BettingState3986.ts",
    "./BTSubscriber.ts",
  ],
  function (t) {
    "use strict";
    var e, o, n, i, u, s, a, c, l, r, g, A, b, h, R;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (u = t.cclegacy),
            (s = t.Node),
            (a = t._decorator),
            (c = t.Toggle),
            (l = t.UIOpacity),
            (r = t.warn),
            (g = t.Tween),
            (A = t.tween);
        },
        null,
        function (t) {
          b = t.default;
        },
        function (t) {
          h = t.BettingState3986;
        },
        function (t) {
          R = t.BTSubscriber;
        },
      ],
      execute: function () {
        var p, _, f, d, y;
        u._RF.push({}, "dccf8hYa91MjZHQbnqxfh5+", "AutoRebet3986", void 0);
        var C = a,
          T = C.ccclass,
          v = C.property;
        t(
          "AutoRebet3986",
          ((p = T("AutoRebet3986")),
          (_ = v(s)),
          p(
            ((y = e(
              (d = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, u = new Array(o), s = 0;
                    s < o;
                    s++
                  )
                    u[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(u)) || this),
                    n(e, "toggleAutoRebet", y, i(e)),
                    (e._isAutoRebet = !1),
                    (e._nodeActionAutoRebet = null),
                    e
                  );
                }
                o(e, t);
                var u = e.prototype;
                return (
                  (u.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this._setupAutoRebet(),
                      this.node.on(
                        "_changeGameState",
                        this._onChangeGameState,
                        this
                      );
                  }),
                  (u._setupAutoRebet = function () {
                    var t = this;
                    this.toggleAutoRebet && (this.toggleAutoRebet.active = !1),
                      b.getConfig().IS_PRODUCTION
                        ? this.toggleAutoRebet &&
                          ((this.toggleAutoRebet.active = !1),
                          (this.toggleAutoRebet.getComponent(c).isChecked = !1),
                          (this.toggleAutoRebet.getComponent(c).enabled = !1))
                        : this.toggleAutoRebet &&
                          ((this._nodeActionAutoRebet = new s()),
                          (this._nodeActionAutoRebet.parent =
                            this.toggleAutoRebet),
                          (this.toggleAutoRebet.getComponent(l).opacity = 255),
                          (this.toggleAutoRebet.active = !0),
                          this.toggleAutoRebet.on("toggle", function () {
                            (t._isAutoRebet =
                              t.toggleAutoRebet.getComponent(c).isChecked),
                              r("3986_ENABLE_AUTO_REBET", t._isAutoRebet);
                          }));
                  }),
                  (u._onChangeGameState = function (t) {
                    var e = this,
                      o = t.cs,
                      n = b.getConfig().IS_PRODUCTION; //!Betting state
                    if (
                      1 == o &&
                      this._isAutoRebet &&
                      !n &&
                      this._nodeActionAutoRebet
                    ) {
                      var i = this.getBettingState(),
                        u = 0.5 * Math.random();
                      g.stopAllByTarget(this._nodeActionAutoRebet),
                        A(this._nodeActionAutoRebet)
                          .delay(0.5 + u)
                          .call(function () {
                            r("3986_SEND_AUTO_REBET", e._isAutoRebet),
                              null == i || i.clickToReBet();
                          })
                          .start();
                    }
                  }),
                  (u.getBettingState = function () {
                    return this.node.getComponent(h) || null;
                  }),
                  (u.onDestroy = function () {
                    g.stopAllByTarget(this._nodeActionAutoRebet);
                  }),
                  e
                );
              })(R)).prototype,
              "toggleAutoRebet",
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
            (f = d))
          ) || f)
        );
        u._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Avatar3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./utils2.ts",
    "./BTSubscriber.ts",
  ],
  function (t) {
    "use strict";
    var r, e, a, i, n, o, s, u, c, l;
    return {
      setters: [
        function (t) {
          (r = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (a = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy), (o = t.Node), (s = t._decorator), (u = t.Sprite);
        },
        null,
        function (t) {
          c = t.loadAvatarFacebook;
        },
        function (t) {
          l = t.BTSubscriber;
        },
      ],
      execute: function () {
        var p, v, f, A, b, g, d;
        n._RF.push({}, "cef54lNuxxNdr4mbXfXkhE3", "Avatar3986", void 0);
        var y = s,
          h = y.ccclass,
          m = y.property;
        t(
          "Avatar3986",
          ((p = h("Avatar3986")),
          (v = m({ displayName: "avatar", type: o })),
          (f = m({ displayName: "border", type: o })),
          p(
            ((g = r(
              (b = (function (t) {
                function r() {
                  for (
                    var r, e = arguments.length, n = new Array(e), o = 0;
                    o < e;
                    o++
                  )
                    n[o] = arguments[o];
                  return (
                    (r = t.call.apply(t, [this].concat(n)) || this),
                    a(r, "avatar", g, i(r)),
                    a(r, "border", d, i(r)),
                    r
                  );
                }
                e(r, t);
                var n = r.prototype;
                return (
                  (n.updateAvatar = function (t, r) {
                    var e = this.getAssetManager().AvatarAtlas,
                      a = this.avatar.getComponent(u);
                    r = this.getConfig().AVATAR.DEFAULT;
                    var i = this.getConfig().AVATAR.PREFIX;
                    c(a, t, e, i, 1, r);
                  }),
                  (n.getAvatarSpriteFrame = function () {
                    return this.avatar.getComponent(u).spriteFrame;
                  }),
                  r
                );
              })(l)).prototype,
              "avatar",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (d = r(b.prototype, "border", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = b))
          ) || A)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Betitem3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTAnimations.ts",
    "./BTBetItem.ts",
    "./BTCommons.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, s, r, a, l, u, h, c, p, m;
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
            (r = t.Node),
            (a = t._decorator),
            (l = t.Label),
            (u = t.v3),
            (h = t.UIOpacity);
        },
        null,
        function (t) {
          c = t.BTAnimations;
        },
        function (t) {
          p = t.BTBetItem;
        },
        function (t) {
          m = t.convertNumberToK;
        },
      ],
      execute: function () {
        var g, b, f, y, v, d, A, I, B;
        s._RF.push({}, "2515eMciVBDmqNZ9tFQG9aS", "Betitem3986", void 0);
        var T = a,
          C = T.ccclass,
          E = T.property;
        t(
          "Betitem3986",
          ((g = C("Betitem3986")),
          (b = E({ type: r })),
          (f = E({ type: r })),
          (y = E({ displayName: "Tie Icon", type: r })),
          g(
            ((A = e(
              (d = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    n(e, "returnAmount", A, o(e)),
                    n(e, "lblReturnAmount", I, o(e)),
                    n(e, "tieIcon", B, o(e)),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this), this.reset(!0);
                    var e = this.node;
                    (e.ON_EMITER.enableHighLight =
                      this.enableHighLight.bind(this)),
                      (e.ON_EMITER.showTieIcon = this.showTieIcon.bind(this)),
                      (e.ON_EMITER.showReturnAmount =
                        this.showReturnAmount.bind(this));
                  }),
                  (s.bettingDetails = function (t) {
                    var e = t.betAmount,
                      i = t.totalPlayers;
                    null != i &&
                      (i > 0
                        ? ((this.player.active = !0),
                          (this.player.getComponent(l).string = m(i)))
                        : (this.player.active = !1)),
                      this.totals &&
                        null != e &&
                        ((this.totals.getComponent(l).string =
                          e > 0 ? m(e) : ""),
                        (this.node.totalMoney = e),
                        this.totals.currentValue != e &&
                          c.popingEffect(this.totals, {
                            dur: 0.1,
                            curSC: 1,
                            maxSC: 1.2,
                            repeat: 1,
                          }),
                        (this.totals.currentValue = e),
                        (this.totals.active = e > 0));
                  }),
                  (s.enableHighLight = function (t) {
                    this.active(t);
                  }),
                  (s.showTieIcon = function () {
                    this.tieIcon && (this.tieIcon.active = !0);
                  }),
                  (s.showReturnAmount = function (t, e, i) {
                    this.returnAmount &&
                      ((this.returnAmount.active = !0),
                      this.returnAmount.setScale(u(0, 0, 0)),
                      (this.lblReturnAmount.getComponent(l).string = t),
                      c.zoomAnim(this.returnAmount, 1, e, i, "backOut"));
                  }),
                  (s.updateBetting = function (t) {
                    var e = t.betting;
                    null != e &&
                      ((this.betting.getComponent(h).opacity = 255),
                      (this.betting.active = !0),
                      (this.betting
                        .getChildByName("betValue")
                        .getComponent(l).string = m(e)),
                      (this.node.bettingValue = e),
                      this.resetTmpBettingValue());
                  }),
                  (s.reset = function (t) {
                    void 0 === t && (t = !1),
                      this.player &&
                        ((this.player.active = !1),
                        (this.player.getComponent(l).string = "")),
                      (this.node.totalMoney = 0),
                      (this.node.tmpBettingValue = 0),
                      (this.node.bettingValue = 0),
                      this.totals &&
                        ((this.totals.getComponent(l).string = ""),
                        (this.totals.active = !1)),
                      (this.betting
                        .getChildByName("betValue")
                        .getComponent(l).string = ""),
                      (this.betting.getComponent(h).opacity = t ? 0.1 : 255),
                      (this.betting.active = !!t),
                      this.showResult(!1, 0, 0),
                      this.active(!1),
                      this.disable(!0),
                      this.animEff &&
                        this.animEff.ON_EMITER &&
                        this.animEff.ON_EMITER.hideFn(),
                      c.stopAllActions(this.activeNode),
                      this.returnAmount && (this.returnAmount.active = !1),
                      this.tieIcon && (this.tieIcon.active = !1);
                  }),
                  e
                );
              })(p)).prototype,
              "returnAmount",
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
            (I = e(d.prototype, "lblReturnAmount", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = e(d.prototype, "tieIcon", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = d))
          ) || v)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BettingState3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./ChipManager3986.ts",
    "./State3986.ts",
    "./BTEventCode.ts",
    "./BTSoundManager.ts",
    "./BTPlayerManager.ts",
    "./BTStateAction.ts",
    "./BTCommons.ts",
  ],
  function (t) {
    "use strict";
    var e, i, a, n, o, s, h, g, l, r, c, B, u, M;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy),
            (a = t._decorator),
            (n = t.Node),
            (o = t.Label),
            (s = t.Tween),
            (h = t.tween);
        },
        null,
        function (t) {
          g = t.ChipManager3986;
        },
        function (t) {
          l = t.State3986;
        },
        function (t) {
          r = t.BTEventCode;
        },
        function (t) {
          c = t.BTSoundManager;
        },
        function (t) {
          B = t.BTPlayerManager;
        },
        function (t) {
          u = t.BTStateAction;
        },
        function (t) {
          M = t.convertNumberToK;
        },
      ],
      execute: function () {
        var _;
        i._RF.push({}, "07596s//cVAFoHP/ff22hK9", "BettingState3986", void 0);
        var p = a.ccclass;
        t(
          "BettingState3986",
          p("BettingState3986")(
            (_ = (function (t) {
              function i() {
                for (
                  var e, i = arguments.length, a = new Array(i), n = 0;
                  n < i;
                  n++
                )
                  a[n] = arguments[n];
                return (
                  ((e =
                    t.call.apply(t, [this].concat(a)) ||
                    this)._enableBettingBox = void 0),
                  (e._accTimeDelayBettingBox = void 0),
                  (e._failData = null),
                  (e._runFailChips = null),
                  e
                );
              }
              e(i, t);
              var a = i.prototype;
              return (
                (a.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    this._bindProps(),
                    (this._runFailChips = new n()),
                    (this._runFailChips.parent = this.node),
                    (this._accTimeDelayBettingBox = 0),
                    (this._enableBettingBox = !1);
                }),
                (a._bindProps = function () {
                  this.node.on(
                    "_updatePlayerBettingAmount",
                    this._updatePlayerBettingAmount,
                    this
                  ),
                    this.node.on(
                      "_updateTableBettingAmount",
                      this._updateTableBettingAmount,
                      this
                    ),
                    this.node.on(
                      "_updatePlayerTotalBetting",
                      this._updatePlayerTotalBetting,
                      this
                    ),
                    this.node.on(
                      "_otherPlayerBetting",
                      this._otherPlayerBetting,
                      this
                    ),
                    this.node.on("_playerBetting", this._playerBetting, this),
                    this.node.on(
                      "_setupBettingForBox",
                      this._setupBettingForBox,
                      this
                    ),
                    this.node.on("_playDealerAnim", this._playDealerAnim, this),
                    this.node.on(
                      "_returnChipFails",
                      this._returnChipFails,
                      this
                    ),
                    this.node.on(
                      "_clearPlayingSession",
                      this._clearChipFailing,
                      this
                    ),
                    this.getStateMachine().registerEvent(
                      r.STOP_FAIL_ACTION,
                      this._clearChipFailing.bind(this)
                    );
                }),
                (a.start = function () {
                  this.registerBetErrorEvents(), this.registerBetUIEvents();
                }),
                (a.update = function (t) {
                  (this._accTimeDelayBettingBox += t),
                    this._accTimeDelayBettingBox >= 0.1 &&
                      (this._enableBettingBox = !0);
                }),
                (a._playDealerAnim = function (t) {
                  if (this.isRunning()) {
                    var e = t.data.an;
                    this.getStateMachine().dealer &&
                      this.getStateMachine().dealer.ON_EMITER.playAnimByIndex(
                        e
                      );
                  }
                }),
                (a._updatePlayerTotalBetting = function (t) {
                  this.getStateMachine().totalBet &&
                    ((this.getStateMachine().totalBet.active = !0),
                    (this.getStateMachine().totalBet.getComponent(o).string =
                      M(t)));
                }),
                (a.onEnterState = function () {
                  t.prototype.onEnterState.call(this),
                    this.getStateMachine().dealer &&
                      (this.getStateMachine().dealer.ON_EMITER.playStartBetting(),
                      this.getStateMachine().dealer.ON_EMITER.setCanPlayIdleAnim(
                        !0
                      )),
                    this.gameDataStore.getCurrentTableMode() ==
                    this.gameConfig.TABLE_MODE.NORMAL
                      ? this.getStateMachine().bettingBoxes.setDisableAllBets(
                          !1
                        )
                      : this.getStateMachine().bettingBoxesTopView.setDisableAllBets(
                          !1
                        ),
                    this._updateBetButtonsState();
                }),
                (a.onExitState = function () {
                  t.prototype.onExitState.call(this),
                    this.disableAllButtons(),
                    this.getStateMachine().dealer &&
                      this.getStateMachine().dealer.ON_EMITER.setCanPlayIdleAnim(
                        !1
                      ),
                    this._returnChipFails(null, 0) ||
                      (this.getStateMachine().rollBackChips(),
                      this.fireEvent(r.CLEAR_BET_PROCESSINGS)),
                    this.getStateMachine().bettingBoxes.resetBetHighlight(),
                    this.getStateMachine().bettingBoxesTopView.resetBetHighlight();
                  var e = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE,
                    i = this.gameDataStore.getDataByKey(e),
                    a = this.getStateMachine().chipManagerTopView;
                  i == this.gameConfig.TABLE_MODE.NORMAL &&
                    (a = this.getStateMachine().chipManager),
                    a.getComponent(g).flushOnChipsGroupUser();
                }),
                (a.disableAllButtons = function () {
                  this.getStateMachine().bettingBoxes.setDisableAllBets(!0),
                    this.getStateMachine().bettingBoxesTopView.setDisableAllBets(
                      !0
                    ),
                    (this.getStateMachine().btnReBet.interactable = !1),
                    (this.getStateMachine().btnDoubleBet.interactable = !1);
                }),
                (a.registerBetErrorEvents = function () {
                  this.getStateMachine().registerEvent(
                    r.RESPONSE_RECEIVE_ERRORS,
                    this.onBetError.bind(this)
                  ),
                    this.getStateMachine().registerEvent(
                      r.BET_STATUS,
                      this.onBetStatus.bind(this)
                    );
                }),
                (a.registerBetUIEvents = function () {
                  var t = this;
                  this.getStateMachine().bettingBoxesTopView.registerCallback(
                    this.onBettingBox.bind(this)
                  ),
                    this.getStateMachine().bettingBoxes.registerCallback(
                      this.onBettingBox.bind(this)
                    ),
                    this.getStateMachine().btnReBet.node.on(
                      "click",
                      function () {
                        var e;
                        null == (e = c.getInstance()) || e.touchSFX(!0),
                          t.clickToReBet();
                      }
                    ),
                    this.getStateMachine().btnDoubleBet.node.on(
                      "click",
                      function () {
                        var e;
                        null == (e = c.getInstance()) || e.touchSFX(!0),
                          t.clickToDoubleBet();
                      }
                    );
                }),
                (a.onBettingBox = function (t) {
                  if (this._enableBettingBox) {
                    (this._accTimeDelayBettingBox = 0),
                      (this._enableBettingBox = !1);
                    var e = this.getStateMachine()
                      .getDataStore()
                      .getCurrentChipInfo();
                    if (e) {
                      var i = [{ betAmount: e.chipValue, betId: t }];
                      this.submitBet(i);
                    }
                  }
                }),
                (a._playerBetting = function (t) {
                  var e = this,
                    i = !0;
                  t.forEach(function (t) {
                    var a = t.betId,
                      n = t.betAmount,
                      o = e.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE;
                    e.gameDataStore.getDataByKey(o) ==
                    e.gameConfig.TABLE_MODE.NORMAL
                      ? e.getStateMachine().chipManager.bettingChip(a, n, 0, i)
                      : e
                          .getStateMachine()
                          .chipManagerTopView.bettingChip(a, n, 0, i),
                      (i = !1);
                  }),
                    this._returnChipFails();
                }),
                (a._updateBetButtonsState = function () {
                  var t = this.getStateMachine().getTableData().canReBet(),
                    e = this.getStateMachine().getTableData().canDoubleBet();
                  (this.getStateMachine().btnReBet.interactable = t),
                    (this.getStateMachine().btnDoubleBet.interactable = e);
                }),
                (a._setupBettingForBox = function (t) {
                  var e = t.betId,
                    i = t.betAmount,
                    a = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE;
                  this.gameDataStore.getDataByKey(a) ==
                  this.gameConfig.TABLE_MODE.NORMAL
                    ? this.getStateMachine().chipManager.setupChipsByAmount(
                        e,
                        i
                      )
                    : this.getStateMachine().chipManagerTopView.setupChipsByAmount(
                        e,
                        i
                      );
                }),
                (a.clickToReBet = function () {
                  this.getStateMachine().getTableData().canReBet() &&
                    (this.submitBet(
                      this.getStateMachine()
                        .getTableData()
                        .betWriter.getLastBettingDetail(),
                      1
                    ),
                    this._returnChipFails());
                }),
                (a.clickToDoubleBet = function () {
                  this.getStateMachine().getTableData().canDoubleBet() &&
                    (this.submitBet(
                      this.getStateMachine()
                        .getTableData()
                        .betWriter.getDoubleBettingDetail(),
                      2
                    ),
                    this._returnChipFails());
                }),
                (a.submitBet = function (t, e) {
                  void 0 === e && (e = null),
                    (this.getStateMachine().btnReBet.interactable = !1),
                    (this.getStateMachine().btnDoubleBet.interactable = !1),
                    this.getStateMachine().fireEvent(r.SUBMIT_TO_BET, {
                      bettingArr: t,
                      xn: e,
                    });
                }),
                (a._showBettingFails = function (t) {
                  for (var e, i = 0; i < t.length; i++) {
                    var a = t[i],
                      n = a.failAmount,
                      o = a.type,
                      s = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE;
                    this.gameDataStore.getDataByKey(s) ==
                    this.gameConfig.TABLE_MODE.NORMAL
                      ? this.getStateMachine().bettingBoxes.showBetFail({
                          betId: o,
                          betFailAmount: n,
                        })
                      : this.getStateMachine().bettingBoxesTopView.showBetFail({
                          betId: o,
                          betFailAmount: n,
                        });
                  }
                  null == (e = c.getInstance()) || e.warningSFX(!0),
                    this._updateBetButtonsState();
                }),
                (a._returnChipFails = function (t, e) {
                  var i = this;
                  if (
                    (void 0 === t && (t = null),
                    void 0 === e && (e = 2),
                    this._failData || t)
                  ) {
                    var a = null != t;
                    (this._failData = t || this._failData),
                      (t = this._failData),
                      a && this._showBettingFails(t);
                    var n = this.getStateMachine().getTableData();
                    return (
                      s.stopAllByTarget(this._runFailChips),
                      h(this._runFailChips)
                        .delay(e)
                        .call(function () {
                          i
                            .getStateMachine()
                            .fireEvent(r.CLEAR_BET_FAILS, function (t) {
                              var e = t.arrFail,
                                a = i.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE,
                                o = i.gameDataStore.getDataByKey(a),
                                s = n.betWriter.mapTotalAmountByGates,
                                h = n.getPlayerById(
                                  n.playerWriter.contextPlayerId
                                );
                              if (e.length > 0) {
                                for (var g, l = 0, r = 0; r < e.length; r++) {
                                  var c = e[r],
                                    u = c.failAmount,
                                    M = c.type,
                                    _ = c.confirmAmount,
                                    p = s[M] || _;
                                  o == i.gameConfig.TABLE_MODE.NORMAL
                                    ? (i
                                        .getStateMachine()
                                        .bettingBoxes.hideBetFail(M),
                                      i
                                        .getStateMachine()
                                        .chipManager.rollbackChipsByGate(M, p),
                                      i
                                        .getStateMachine()
                                        .chipManager.returnChipsToPlayerFromWinBox(
                                          0.7,
                                          M,
                                          u,
                                          0
                                        ))
                                    : (i
                                        .getStateMachine()
                                        .bettingBoxesTopView.hideBetFail(M),
                                      i
                                        .getStateMachine()
                                        .chipManagerTopView.rollbackChipsByGate(
                                          M,
                                          p
                                        ),
                                      i
                                        .getStateMachine()
                                        .chipManagerTopView.returnChipsToPlayerFromWinBox(
                                          0.7,
                                          M,
                                          u,
                                          0
                                        )),
                                    (l += u);
                                }
                                null == (g = B.getInstance()) ||
                                  g.showFailAmountFor(
                                    { player: h, failAmount: l },
                                    !0,
                                    0.5
                                  );
                              } else for (var E in (i.getStateMachine().bettingBoxes.hideAllBetFail(), i.getStateMachine().chipManager.clearAllChipsOnTable(), i.getStateMachine().bettingBoxesTopView.hideAllBetFail(), i.getStateMachine().chipManagerTopView.clearAllChipsOnTable(), s)) o == i.gameConfig.TABLE_MODE.NORMAL ? i.getStateMachine().chipManager.setupChipsByAmount(E, s[E], 0) : i.getStateMachine().chipManagerTopView.setupChipsByAmount(E, s[E], 0);
                              return 0.85;
                            }),
                            (i._failData = null);
                        })
                        .start(),
                      !0
                    );
                  }
                  return !1;
                }),
                (a.onBetError = function (t) {
                  t &&
                    ((t !==
                      this.getStateMachine().getConfig().ERROR_CODE_ID
                        .NOT_ENOUGH_MONEY_TO_JOIN_TABLE &&
                      t !==
                        this.getStateMachine().getConfig().ERROR_CODE_ID
                          .MAX_MONEY &&
                      t !==
                        this.getStateMachine().getConfig().ERROR_CODE_ID
                          .NOT_ENOUGH_MONEY_TO_BETTING) ||
                      this._updateBetButtonsState());
                }),
                (a.onBetStatus = function (t) {
                  var e = t.errCode;
                  e &&
                    ((e !==
                      this.getStateMachine().getConfig().ERROR_CODE_ID
                        .MAX_MONEY &&
                      e !==
                        this.getStateMachine().getConfig().ERROR_CODE_ID
                          .NOT_ENOUGH_MONEY_TO_BETTING) ||
                      this._updateBetButtonsState());
                }),
                (a._updatePlayerBettingAmount = function (t) {
                  this.isRunning() && this._updateBetButtonsState();
                  for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                      a = i.type,
                      n = i.betAmount,
                      o = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE;
                    this.gameDataStore.getDataByKey(o) ==
                    this.gameConfig.TABLE_MODE.NORMAL
                      ? this.getStateMachine().bettingBoxes.updateBettingDetails(
                          {
                            betId: a,
                            myBet: n,
                            totalBet: null,
                            totalPlayers: null,
                          }
                        )
                      : this.getStateMachine().bettingBoxesTopView.updateBettingDetails(
                          {
                            betId: a,
                            myBet: n,
                            totalBet: null,
                            totalPlayers: null,
                          }
                        );
                  }
                }),
                (a._updateTableBettingAmount = function (t) {
                  var e = this;
                  if (this.isRunning()) {
                    var i = [];
                    i.push(
                      new u()
                        .onStartAction(function () {})
                        .onFinishAction(function () {
                          for (var i = 0; i < t.length; i++) {
                            var a = t[i],
                              n = a.type,
                              o = a.betAmount,
                              s = a.totalPlayers,
                              h = e.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE;
                            e.gameDataStore.getDataByKey(h) ==
                            e.gameConfig.TABLE_MODE.NORMAL
                              ? e
                                  .getStateMachine()
                                  .bettingBoxes.updateBettingDetails({
                                    betId: n,
                                    myBet: null,
                                    totalBet: o,
                                    totalPlayers: s,
                                  })
                              : e
                                  .getStateMachine()
                                  .bettingBoxesTopView.updateBettingDetails({
                                    betId: n,
                                    myBet: null,
                                    totalBet: o,
                                    totalPlayers: s,
                                  });
                          }
                        })
                        .onDuration(0.35)
                    ),
                      this.runStateActions(i);
                  } else
                    for (var a = 0; a < t.length; a++) {
                      var n = t[a],
                        o = n.type,
                        s = n.betAmount,
                        h = n.totalPlayers,
                        g = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE;
                      this.gameDataStore.getDataByKey(g) ==
                      this.gameConfig.TABLE_MODE.NORMAL
                        ? this.getStateMachine().bettingBoxes.updateBettingDetails(
                            {
                              betId: o,
                              myBet: void 0,
                              totalBet: s,
                              totalPlayers: h,
                            }
                          )
                        : this.getStateMachine().bettingBoxesTopView.updateBettingDetails(
                            {
                              betId: o,
                              myBet: void 0,
                              totalBet: s,
                              totalPlayers: h,
                            }
                          );
                    }
                }),
                (a._otherPlayerBetting = function (t) {
                  var e = t.player,
                    i = t.betId,
                    a = t.betAmount,
                    n = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE,
                    o = this.gameDataStore.getDataByKey(n),
                    s = !this.getStateMachine().getDataStore().getHideApp();
                  s = s && this.isRunning();
                  var h = this.getStateMachine().chipManagerTopView;
                  o == this.gameConfig.TABLE_MODE.NORMAL &&
                    (h = this.getStateMachine().chipManager),
                    e
                      ? h.getComponent(g).bettingChip(i, a, e.seat - 1, !0, s)
                      : h
                          .getComponent(g)
                          .groupUserBettingChips(
                            i,
                            a,
                            this.gameConfig.MAX_SEAT,
                            !0,
                            s
                          );
                }),
                (a._clearChipFailing = function () {
                  s.stopAllByTarget(this._runFailChips),
                    this.getStateMachine().fireEvent(r.CLEAR_BET_FAILS);
                }),
                i
              );
            })(l))
          ) || _
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetWinAmount3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTAnimations.ts",
    "./BTSubscriber.ts",
  ],
  function (t) {
    "use strict";
    var n, i, o, e, r, u, c, s, a, l, p;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (u = t._decorator),
            (c = t.Node),
            (s = t.UIOpacity),
            (a = t.Label);
        },
        null,
        function (t) {
          l = t.BTAnimations;
        },
        function (t) {
          p = t.BTSubscriber;
        },
      ],
      execute: function () {
        var m, h, d, f, A;
        r._RF.push({}, "3dea7DX1IFJUJLoMI4IbJHz", "BetWinAmount3986", void 0);
        var y = u.ccclass,
          b = u.property;
        t(
          "BetWinAmount3986",
          ((m = y("BetWinAmount3986")),
          (h = b(c)),
          m(
            ((A = n(
              (f = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, r = new Array(i), u = 0;
                    u < i;
                    u++
                  )
                    r[u] = arguments[u];
                  return (
                    (n = t.call.apply(t, [this].concat(r)) || this),
                    o(n, "winAmount", A, e(n)),
                    n
                  );
                }
                i(n, t);
                var r = n.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.node.getComponent(s).opacity = 255),
                      (this.node.active = !1);
                  }),
                  (r.showWinAmount = function (t, n, i, o) {
                    void 0 === o && (o = !0), o && this.runWinAnim(t, n, i);
                  }),
                  (r.runWinAnim = function (t, n, i) {
                    this.winAmount &&
                      ((this.node.active = !0),
                      this.node.setScale(0, 0, 0),
                      (this.winAmount.getComponent(a).string = t),
                      l.zoomAnim(this.node, 1, n, i, "backOut"));
                  }),
                  n
                );
              })(p)).prototype,
              "winAmount",
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
            (d = f))
          ) || d)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetWriter3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTBetWriter.ts",
  ],
  function (t) {
    "use strict";
    var e, r, a, i, n;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose), (r = t.createClass);
        },
        function (t) {
          (a = t.cclegacy), (i = t._decorator);
        },
        null,
        function (t) {
          n = t.BTBetWriter;
        },
      ],
      execute: function () {
        var o;
        a._RF.push({}, "489dbQSoyRFaYv4T5tmtsck", "BetWriter3986", void 0);
        var s = i.ccclass,
          c = _;
        t(
          "BetWriter3986",
          s("BetWriter3986")(
            (o = (function (t) {
              function a() {
                return t.apply(this, arguments) || this;
              }
              return (
                e(a, t),
                (a.prototype.makeScriptOthersBetting = function (t) {
                  var e = this,
                    r = [],
                    a = t.tbds,
                    i = t.ps,
                    n = t.psm,
                    o = t.lbds,
                    s = t.tw,
                    p = t.gr,
                    l = t.er;
                  s && (r = r.concat(this._makeScriptShowTopUserBet(s)));
                  var u = null;
                  if (
                    (o &&
                      this.predictMapTotalAmountByGates &&
                      (u = c.cloneDeep(this.predictMapTotalAmountByGates)),
                    i &&
                      (r = r.concat(
                        this._writer.playerWriter._makeScriptUpdatePlayerListInfo(
                          i
                        )
                      )),
                    n &&
                      (r = r.concat(
                        this._makeScriptUpdateOtherPlayerBettingInfo(n)
                      )),
                    (r = r.concat(this._makeScriptUpdateTableBettingBoxes(a))),
                    o &&
                      o.forEach &&
                      o.forEach(function (t) {
                        for (var a in t)
                          if (a != e._writer.playerWriter.contextPlayerId) {
                            var i = t[a],
                              n = e._writer.playerWriter.mapPlayerById[a];
                            n &&
                              n.seat > e._writer.playerWriter.maxSeat &&
                              (n = null);
                            for (
                              var o = i.split(","), s = 0;
                              s < o.length;
                              s++
                            ) {
                              var c = o[s].split(":"),
                                p = Number(c[0]),
                                l = 100 * Number(c[1]);
                              !u[p] && (u[p] = 0),
                                !e.mapTotalAmountByGates[p] &&
                                  (e.mapTotalAmountByGates[p] = 0),
                                e.mapTotalAmountByGates[p] - u[p] > 0 &&
                                  r.push({
                                    code: "_otherPlayerBetting",
                                    data: { player: n, betId: p, betAmount: l },
                                  });
                            }
                          }
                      }),
                    p && l)
                  ) {
                    var h = this._writer._parseGateRate(p);
                    r.push({
                      code: "_updateDynamicGateRate",
                      data: { gateRates: h, er: l },
                    });
                  }
                  return r;
                }),
                r(a, [
                  {
                    key: "writer",
                    get: function () {
                      return this._writer;
                    },
                  },
                ]),
                a
              );
            })(n))
          ) || o
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/cc30-sicbo-dp-3986",
  [
    "./AssetsManager3986.ts",
    "./AutoRebet3986.ts",
    "./BetWriter3986.ts",
    "./Config3986.ts",
    "./DataStore3986.ts",
    "./Declaration3986.ts",
    "./Director3986.ts",
    "./EventCode3986.ts",
    "./GameState3986.ts",
    "./GameWriter3986.ts",
    "./PlayerWriter3986.ts",
    "./SoundManager3986.ts",
    "./LastResultForAnim3986.ts",
    "./LastResultPanel3986.ts",
    "./TableHistory3986.ts",
    "./Dealer3986.ts",
    "./DiceShaker3986.ts",
    "./GlassParticle3986.ts",
    "./Toast3986.ts",
    "./BetWinAmount3986.ts",
    "./Betitem3986.ts",
    "./ChipHolder3986.ts",
    "./CompoBet3986.ts",
    "./SlideBets3986.ts",
    "./TopUserBet3986.ts",
    "./TopUserItem3986.ts",
    "./ChipBox3986.ts",
    "./ChipItem3986.ts",
    "./ChipManager3986.ts",
    "./ChipSelector3986.ts",
    "./Avatar3986.ts",
    "./ExtendUserItem3986.ts",
    "./OtherPlayerItem3986.ts",
    "./PlayerItem3986.ts",
    "./PlayerManager3986.ts",
    "./DialogMessage3986.ts",
    "./ChartAnalytic3986.ts",
    "./ConnectAnalytic3986.ts",
    "./PopupAnalytic3986.ts",
    "./PopupListUser3986.ts",
    "./PopupManager3986.ts",
    "./DialogNetworkIdle3986.ts",
    "./MD5_3986.ts",
    "./MenuOptions3986.ts",
    "./NodeCollider3986.ts",
    "./PoupupPreloader3986.ts",
    "./Preloader3986.ts",
    "./ResizeSettingPopup3986.ts",
    "./SqueezeButton3986.ts",
    "./Timer3986.ts",
    "./ToastChat3986.ts",
    "./Waiting3986.ts",
    "./ChatPopup3986.ts",
    "./ListGateMaxBetAmount3986.ts",
    "./MD5History3986.ts",
    "./PopupHelp3986.ts",
    "./PopupHistory3986.ts",
    "./PopupSetting3986.ts",
    "./PopupTopWiner3986.ts",
    "./PopupUserInfo3986.ts",
    "./BettingState3986.ts",
    "./EndBettingState3986.ts",
    "./FinishState3986.ts",
    "./GameDirector3986.ts",
    "./ShowResultState3986.ts",
    "./SqueezeShowResultState3986.ts",
    "./StartState3986.ts",
    "./State3986.ts",
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
  "chunks:///_virtual/ChartAnalytic3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTAnimations.ts",
    "./BTChartAnalytic.ts",
  ],
  function (t) {
    "use strict";
    var e, i, r, n, a, o, s, c, l, h, u, p, y, d;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t.Color),
            (s = t.Node),
            (c = t._decorator),
            (l = t.instantiate),
            (h = t.Tween),
            (u = t.Graphics),
            (p = t.UIOpacity);
        },
        null,
        function (t) {
          y = t.BTAnimations;
        },
        function (t) {
          d = t.BTChartAnalytic;
        },
      ],
      execute: function () {
        var f, v, C, g, D;
        a._RF.push({}, "ee04c2THYtA35YwYEHkCmkw", "ChartAnalytic3986", void 0);
        var T = c,
          m = T.ccclass,
          w = T.property,
          A = [new o(247, 247, 86), new o(80, 194, 39), new o(38, 120, 245)];
        t(
          "ChartAnalytic3986",
          ((f = m("ChartAnalytic3986")),
          (v = w({ displayName: "Chart Dice Point", type: s })),
          f(
            ((D = e(
              (g = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    r(e, "chartDiceNode", D, n(e)),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.initDataChart = function () {
                    for (var t = 0; t < 21; t++) {
                      var e = l(this.resultPoint);
                      (e.active = !1),
                        this.chartPoint.node.addChild(e),
                        this.listResultPoint.push(e);
                    }
                    for (var i = 0; i < 3; i++) {
                      var r = [],
                        n = l(this.chartDiceItem);
                      this.chartDice.addChild(n);
                      for (var a = 0; a < 21; a++) {
                        var o = l(this.resultDice);
                        (o.active = !1),
                          this.chartDiceNode.addChild(o),
                          r.push(o);
                      }
                      this.listResultDices.push(r);
                    }
                  }),
                  (a.drawChartPoints = function (t) {
                    for (var e = 0; e < t.length; e++) {
                      var i = t[e];
                      if (
                        (this.updateResultPoint(this.listResultPoint[e], i),
                        e < t.length - 1)
                      ) {
                        var r = t[e].point,
                          n = t[e + 1].point;
                        this.chartPoint.moveTo(r.x, r.y),
                          this.chartPoint.lineTo(n.x, n.y);
                      }
                    }
                    (this.chartPoint.strokeColor = new o(240, 194, 155)),
                      this.chartPoint.stroke();
                    var a = this.listResultPoint[0].getChildByName("glow");
                    h.stopAllByTarget(a),
                      (a.active = !0),
                      this._runNewResultAnim(a);
                  }),
                  (a.drawChartDices = function (t, e, i, r) {
                    t.active = !0;
                    for (var n = t.getComponent(u), a = 0; a < i.length; a++) {
                      var o = i[a];
                      if (
                        (this.updateResultDice(e[a], r, o), a < i.length - 1)
                      ) {
                        var s = i[a].point,
                          c = i[a + 1].point;
                        n.moveTo(s.x, s.y), n.lineTo(c.x, c.y);
                      }
                    }
                    (n.strokeColor = A[r]), n.stroke();
                  }),
                  (a.updateResultDice = function (e, i, r) {
                    t.prototype.updateResultDice.call(this, e, i, r),
                      e.setZIndex(1);
                  }),
                  (a.getScoreColorByType = function (t) {
                    switch (t) {
                      case 3:
                      case 4:
                      case 11:
                        return o.WHITE;
                    }
                    return o.WHITE;
                  }),
                  (a._runNewResultAnim = function (t) {
                    (t.active = !0),
                      h.stopAllByTarget(t),
                      (t.getComponent(p).opacity = 255);
                    y.popingEffect(t, {
                      dur: 0.4,
                      curSC: 1,
                      maxSC: 1.15,
                      repeat: 1,
                      yoyo: !0,
                      baseEasing: "sineOut",
                    });
                  }),
                  e
                );
              })(d)).prototype,
              "chartDiceNode",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (C = g))
          ) || C)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ChatPopup3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTSoundManager.ts",
    "./BTEventCode.ts",
    "./BTSubscriber.ts",
    "./BTCommons.ts",
  ],
  function (t) {
    "use strict";
    var e,
      i,
      n,
      o,
      a,
      s,
      r,
      l,
      h,
      u,
      c,
      d,
      g,
      p,
      m,
      y,
      C,
      f,
      _,
      S,
      b,
      v,
      T,
      w,
      E,
      I,
      D,
      H,
      N;
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
            (s = t.Node),
            (r = t.EditBox),
            (l = t.Prefab),
            (h = t.ScrollView),
            (u = t.Color),
            (c = t.Canvas),
            (d = t.SpriteFrame),
            (g = t._decorator),
            (p = t.sys),
            (m = t.log),
            (y = t.view),
            (C = t.Tween),
            (f = t.tween),
            (_ = t.ResolutionPolicy),
            (S = t.instantiate),
            (b = t.Label),
            (v = t.UITransform),
            (T = t.v3),
            (w = t.js),
            (E = t.Sprite);
        },
        null,
        function (t) {
          I = t.BTSoundManager;
        },
        function (t) {
          D = t.BTEventCode;
        },
        function (t) {
          H = t.BTSubscriber;
        },
        function (t) {
          N = t.convertNumberToK;
        },
      ],
      execute: function () {
        var O,
          A,
          P,
          L,
          B,
          z,
          M,
          k,
          U,
          R,
          x,
          G,
          W,
          Y,
          F,
          V,
          j,
          X,
          K,
          q,
          Q,
          J,
          Z,
          $,
          tt,
          et,
          it,
          nt,
          ot,
          at,
          st,
          rt,
          lt,
          ht,
          ut,
          ct,
          dt,
          gt,
          pt,
          mt,
          yt,
          Ct,
          ft,
          _t,
          St,
          bt,
          vt,
          Tt,
          wt,
          Et,
          It,
          Dt,
          Ht,
          Nt,
          Ot;
        a._RF.push({}, "74613jwhstLM5eWg3v5LHGL", "ChatPopup3986", void 0);
        var At = g,
          Pt = At.ccclass,
          Lt = At.property,
          Bt = N,
          zt = [
            8211, 8212, 8216, 8217, 8220, 8221, 8226, 8230, 8482, 169, 61558,
            8226, 61607,
          ],
          Mt = [
            "--",
            "--",
            "'",
            "'",
            '"',
            '"',
            "*",
            "...",
            "&trade;",
            "&copy;",
            "&bull;",
            "&bull;",
            "&bull;",
          ];
        t(
          "ChatPopup3986",
          ((O = Pt("ChatPopup3986")),
          (A = Lt({ displayName: "overlay", type: s })),
          (P = Lt({ displayName: "btnShow", type: s })),
          (L = Lt({ displayName: "btnHide", type: s })),
          (B = Lt({ displayName: "btnShowHideSmiley", type: s })),
          (z = Lt({ displayName: "buttonSend", type: s })),
          (M = Lt({ displayName: "preLoader", type: s })),
          (k = Lt({ displayName: "editBox", type: r })),
          (U = Lt({ displayName: "chatParent", type: s })),
          (R = Lt({ displayName: "chatPrefab", type: l })),
          (x = Lt({ displayName: "chatScrollView", type: h })),
          (G = Lt({ displayName: "colorCurrentUser", type: u })),
          (W = Lt({ displayName: "colorOtherUser", type: u })),
          (Y = Lt({ displayName: "smileyParent", type: s })),
          (F = Lt({ displayName: "smileyPrefab", type: s })),
          (V = Lt({ displayName: "smileyMark", type: s })),
          (j = Lt({ displayName: "itemSuggest", type: s })),
          (X = Lt({ displayName: "parentSuggest", type: s })),
          (K = Lt({ displayName: "messInput", type: r })),
          (q = Lt({ displayName: "canvas", type: c })),
          (Q = Lt({ displayName: "dialogChat", type: s })),
          (J = Lt({ displayName: "disableTouch", type: s })),
          (Z = Lt({ type: s })),
          ($ = Lt({ displayName: "buttonIconSpriteframe", type: d })),
          (tt = Lt({ displayName: "background", type: d })),
          (et = Lt({ displayName: "ToastChat", type: s })),
          (it = Lt({ displayName: "place holder", type: s })),
          O(
            ((at = e(
              (ot = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "overlay", at, o(e)),
                    n(e, "btnShow", st, o(e)),
                    n(e, "btnHide", rt, o(e)),
                    n(e, "btnShowHideSmiley", lt, o(e)),
                    n(e, "buttonSend", ht, o(e)),
                    n(e, "preLoader", ut, o(e)),
                    n(e, "editBox", ct, o(e)),
                    n(e, "chatParent", dt, o(e)),
                    n(e, "chatPrefab", gt, o(e)),
                    n(e, "chatScrollView", pt, o(e)),
                    n(e, "colorCurrentUser", mt, o(e)),
                    n(e, "colorOtherUser", yt, o(e)),
                    n(e, "smileyParent", Ct, o(e)),
                    n(e, "smileyPrefab", ft, o(e)),
                    n(e, "smileyMark", _t, o(e)),
                    n(e, "itemSuggest", St, o(e)),
                    n(e, "parentSuggest", bt, o(e)),
                    n(e, "messInput", vt, o(e)),
                    n(e, "canvas", Tt, o(e)),
                    n(e, "dialogChat", wt, o(e)),
                    n(e, "disableTouch", Et, o(e)),
                    n(e, "disableChatBtn", It, o(e)),
                    n(e, "buttonIconSpriteframe", Dt, o(e)),
                    n(e, "background", Ht, o(e)),
                    n(e, "ToastChat", Nt, o(e)),
                    n(e, "placeHolder", Ot, o(e)),
                    (e.isShowDialog = !1),
                    (e.isShowSmiley = !1),
                    (e.contentOriginPos = null),
                    (e._listChatItem = []),
                    (e._listChatCustom = []),
                    (e._chatHistoryData = []),
                    (e.smileyOriginPos = null),
                    (e.ACTION_DELAY = null),
                    (e.isDisableTouch = !1),
                    (e.dialogChatInitY = null),
                    (e._initSmiley = null),
                    (e.canAutoScroll = null),
                    (e._msChat = null),
                    (e._isTouchItem = null),
                    (e._isMoving = null),
                    (e._isEmoji = null),
                    (e.limittedStr = 30),
                    (e.fitHeight = null),
                    (e.fitWidth = null),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var e = this;
                    t.prototype.onLoad.call(this),
                      (this.contentOriginPos = this.node.getPosition().clone()),
                      (this._listChatItem = []),
                      this._createListSuggest(),
                      this._createListChatHistory(),
                      this._createSmileysIfAny(),
                      (this.smileyOriginPos = this.smileyParent
                        .getPosition()
                        .clone()),
                      this._initUI(),
                      this.bindEvent(),
                      (this.node.active = !1),
                      this._detectChat(),
                      (this.ACTION_DELAY = new s()),
                      (this.ACTION_DELAY.parent = this.node),
                      (this.smileyParent.active = !1),
                      this.disableTouch && (this.disableTouch.active = !1),
                      this.btnHide.off("click"),
                      this.btnHide.on("click", function () {
                        e.hide();
                      });
                  }),
                  (a._removeClickListenerWhenShowKeyBoard = function () {
                    if (
                      p.isBrowser &&
                      p.isMobile &&
                      p.os == p.OS.IOS &&
                      this.messInput._impl
                    ) {
                      var t = this.messInput._impl,
                        e = t._edTxt,
                        i = t.__eventListeners;
                      e.removeEventListener("touchstart", i.onClick),
                        (i.onClick = null);
                    }
                  }),
                  (a._detectChat = function () {
                    var t = this,
                      e = this._detectIOS();
                    (this.dialogChatInitY = this.dialogChat.position.y),
                      this.disableTouch &&
                        (this.disableTouch.on(
                          s.EventType.TOUCH_START,
                          function () {
                            m("debug=disableTouch"), (t.isDisableTouch = !0);
                          }
                        ),
                        this.disableTouch.on(
                          s.EventType.TOUCH_END,
                          function () {
                            (t.isDisableTouch = !1),
                              (t.disableTouch.active = !1);
                          }
                        )),
                      this.messInput.node.on(
                        s.EventType.TOUCH_END,
                        function () {
                          t._removeClickListenerWhenShowKeyBoard();
                          var i = y.getVisibleSize(),
                            n = i.width / i.height;
                          if (p.isNative) {
                            var o = t.dialogChatInitY + 0;
                            t.dialogChat.setPosition(
                              t.dialogChat.position.x,
                              o,
                              t.dialogChat.position.z
                            );
                          } else {
                            var a =
                                document.getElementsByClassName("cocosEditBox"),
                              s = null;
                            if (
                              (a && a[0] && (s = a[0]),
                              s && (s.focus(), (s.value = "")),
                              p.isMobile && p.isBrowser && !y._isRotated && e)
                            ) {
                              var r = y.getResolutionPolicy();
                              (t.fitHeight =
                                "FixedHeight" === r._contentStrategy.name),
                                (t.fitWidth =
                                  "FixedWidth" === r._contentStrategy.name);
                              var l = 0,
                                h = t.dialogChatInitY + 0;
                              t.dialogChat.setPosition(
                                t.dialogChat.getPosition().x,
                                h,
                                t.dialogChat.getPosition().z
                              ),
                                C.stopAllByTarget(t.messInput),
                                C.stopAllByTarget(t.messInput.node),
                                f(t.messInput.node)
                                  .repeatForever(
                                    f()
                                      .delay(0.01)
                                      .call(function () {
                                        l >= 20
                                          ? (s && (s.focus(), (s.value = "")),
                                            C.stopAllByTarget(t.messInput.node))
                                          : (s &&
                                              window.scrollTo(
                                                0,
                                                s.scrollHeight
                                              ),
                                            l++,
                                            s && (s.focus(), (s.value = " ")),
                                            t.canvas &&
                                              (n > 2.5
                                                ? y.setDesignResolutionSize(
                                                    y.getDesignResolutionSize()
                                                      .width,
                                                    y.getDesignResolutionSize()
                                                      .height,
                                                    _.FIXED_WIDTH
                                                  )
                                                : (t.fitHeight &&
                                                    y.setDesignResolutionSize(
                                                      y.getDesignResolutionSize()
                                                        .width,
                                                      y.getDesignResolutionSize()
                                                        .height,
                                                      _.FIXED_HEIGHT
                                                    ),
                                                  t.fitWidth &&
                                                    y.setDesignResolutionSize(
                                                      y.getDesignResolutionSize()
                                                        .width,
                                                      y.getDesignResolutionSize()
                                                        .height,
                                                      _.FIXED_WIDTH
                                                    ))));
                                      })
                                  )
                                  .start();
                            }
                          }
                          t._disableTouchOnGame(!0);
                        }
                      );
                  }),
                  (a._disableTouchOnGame = function (t) {
                    if ((void 0 === t && (t = !1), this.disableTouch))
                      if (t) {
                        var e = this._detectIOS();
                        p.isMobile && !e
                          ? (this.disableTouch.active = !0)
                          : (this.disableTouch.active = !1);
                      } else this.disableTouch.active = !1;
                  }),
                  (a._detectIOS = function () {
                    return p.os == p.OS.IOS;
                  }),
                  (a.bindEvent = function () {
                    var t = this;
                    this.overlay &&
                      (this.overlay.off(s.EventType.TOUCH_END),
                      this.overlay.on(s.EventType.TOUCH_END, function () {
                        t.fireEvent(t.getConfig().EVENT_CODE.CLICK_OVERLAY),
                          t.hide();
                      })),
                      this.btnShow &&
                        (this.btnShow.off(s.EventType.TOUCH_END),
                        this.btnShow.on(s.EventType.TOUCH_END, function () {
                          t.show();
                        })),
                      this.btnShowHideSmiley &&
                        (this.btnShowHideSmiley.off(s.EventType.TOUCH_END),
                        this.btnShowHideSmiley.on(
                          s.EventType.TOUCH_END,
                          function () {
                            var e;
                            t.showHideSmiley(),
                              null == (e = I.getInstance()) || e.btnSound();
                          }
                        )),
                      this.editBox.node.on(
                        "editing-did-ended",
                        this._onEditEnded,
                        this
                      ),
                      this.editBox.node.on(
                        "editing-did-began",
                        this._onEditBegan,
                        this
                      ),
                      this.editBox.node.on(
                        "text-changed",
                        this._onTextChanged,
                        this
                      ),
                      (this.node.onPolygonColliderClicked =
                        this.onPolygonColliderClicked.bind(this));
                  }),
                  (a.onPolygonColliderClicked = function () {
                    this.hide();
                  }),
                  (a._initUI = function () {
                    for (var t = 0; t < 20; t++) {
                      var e = S(this.chatPrefab);
                      (e.userName = e
                        .getChildByName("userName")
                        .getComponent(b)),
                        (e.chat = e.getComponent(b)),
                        (e.smiley = e.getChildByName("smiley")),
                        (e.active = !1),
                        this._listChatItem.push(e);
                    }
                  }),
                  (a._createSmileysIfAny = function () {
                    if (!this._initSmiley) {
                      this._initSmiley = !0;
                      for (var t = 0; t < this.getConfig().TOTAL_SMILEY; t++) {
                        var e = S(this.smileyPrefab);
                        e.active = !0;
                        var i = t + 1;
                        (e._code = i),
                          this.onClickSmiley(e, e._code),
                          this.smileyParent.addChild(e),
                          e
                            .getComponent("sp.Skeleton")
                            .setAnimation(0, "emo_" + i.toString(), !0);
                      }
                    }
                  }),
                  (a.onClickSmiley = function (t, e) {
                    var i = this;
                    t.on(s.EventType.TOUCH_END, function () {
                      i.sendChat("Emotion_" + e),
                        i.isShowSmiley && i.showHideSmiley();
                    });
                  }),
                  (a.updateListChat = function (t) {
                    this.node.active &&
                      (this._hidePreloader(),
                      Array.isArray(t) &&
                        t.length > 0 &&
                        ((this.canAutoScroll = !0),
                        this._updateUI(t, this.canAutoScroll)));
                  }),
                  (a.updateListChatHistory = function (t) {
                    this.node.active &&
                      (this._hidePreloader(),
                      Array.isArray(t) &&
                        t.length > 0 &&
                        this._updateUI(t, !0));
                  }),
                  (a._updateUI = function (t, e) {
                    void 0 === e && (e = !1), m("===listChatHistory===", t, e);
                    var i = 0;
                    t.length > 20 && (i = t.length - 20);
                    for (
                      var n = Math.min(20, t.length), o = 0;
                      o < n;
                      o++, i++
                    ) {
                      var a = t[i],
                        s = this._listChatItem[o];
                      s.active = !0;
                      var r = this._parseChatData(a);
                      this._updateChatData(s, r);
                    }
                  }),
                  (a._parseChatData = function (t) {
                    var e = t.content.substring(t.content.indexOf(":::") + 3),
                      i = t.content.substring(0, t.content.indexOf(":::")),
                      n = this.getDataStore().globalData.MY_PLAYER_EUI == i;
                    return { displayName: t.senderName, content: e, isMe: n };
                  }),
                  (a._updateChatData = function (t, e) {
                    if (t && e) {
                      var i = e.content;
                      if (
                        ((t.userName.string = e.displayName + ": "),
                        t.userName.updateRenderData(!0),
                        (t.userName.color = e.isMe
                          ? this.colorCurrentUser
                          : this.colorOtherUser),
                        (t.chat.string = ""),
                        (t.smiley.active = !1),
                        i)
                      ) {
                        var n = i.split("_");
                        if (n[1]) {
                          var o = Number(n[1]);
                          if (o > 0 && o <= this.getConfig().TOTAL_SMILEY)
                            (t.smiley.active = !0),
                              0.25 * t.smiley.getComponent(v).width +
                                t.userName.node.getComponent(v).width +
                                25 <
                              t.getComponent(v).width
                                ? (t.smiley.setPosition(
                                    T(
                                      t.userName.node.getComponent(v).width +
                                        20,
                                      -16,
                                      1
                                    )
                                  ),
                                  (i = null))
                                : (t.smiley.setPosition(T(20, -45, 1)),
                                  (t.height += 100),
                                  (i = "\n")),
                              t.smiley
                                .getComponent("sp.Skeleton")
                                .setAnimation(0, "emo_" + o.toString(), !0);
                        }
                        if (i) {
                          for (
                            var a = p.os === p.OS.ANDROID ? 4.1 : 2,
                              s =
                                Math.floor(
                                  t.userName.node.getComponent(v).width / 7
                                ) + a,
                              r = "",
                              l = 0;
                            l < s;
                            l++
                          )
                            r += " ";
                          t.chat.string = r + i;
                        }
                      }
                      t.chat.updateRenderData(!0);
                    }
                  }),
                  (a.show = function () {
                    this._msChat || (this._msChat = 0),
                      this.smileyParent.setPosition(this.smileyOriginPos),
                      (this.isShowSmiley = !1),
                      (this.placeHolder.active = !1),
                      Date.now() - this._msChat <
                      1e3 * this.getConfig().CHAT_CONFIG.CHAT_DELAY_IN_SECONDS
                        ? this.fireEvent(
                            D.SHOW_TOAST_MESSAGE,
                            "Bạn không được chat quá nhanh"
                          )
                        : this._checkCanChatWithCurrentMoney() &&
                          this.showDialog();
                  }),
                  (a._checkCanChatWithCurrentMoney = function () {
                    var t = this.getConfig();
                    if (
                      this.getDataStore().getCurrentWallet() <
                      t.CHAT_CONFIG.LIMIT_CHAT_MONEY
                    ) {
                      var e = w.formatStr(
                        t.TOAST_MESSAGE.CHAT_REQUIRED,
                        Bt(t.CHAT_CONFIG.LIMIT_CHAT_MONEY)
                      );
                      return this.fireEvent(D.SHOW_TOAST_MESSAGE, e), !1;
                    }
                    return !0;
                  }),
                  (a.showDialog = function () {
                    var t;
                    if (!this.isShowDialog) {
                      (this.isShowDialog = !0),
                        (this.node.active = !0),
                        (this.overlay.active = !0);
                      var e = T(0, this.contentOriginPos.y);
                      C.stopAllByTarget(this.node),
                        f(this.node)
                          .to(0.35, { position: e }, { easing: "sineOut" })
                          .start(),
                        null == (t = I.getInstance()) || t.openPopup();
                    }
                  }),
                  (a.hide = function (t) {
                    var e,
                      i = this;
                    if ((void 0 === t && (t = 0.35), this.isShowDialog)) {
                      this.isShowDialog = !1;
                      var n = this.contentOriginPos;
                      C.stopAllByTarget(this.node),
                        f(this.node)
                          .to(t, { position: n }, { easing: "sineIn" })
                          .call(function () {
                            i._hideSmileyPanel(),
                              (i.node.active = !1),
                              (i.overlay.active = !1);
                          })
                          .start(),
                        null == (e = I.getInstance()) || e.closePopup();
                    }
                  }),
                  (a._onEditEnded = function () {
                    this._resetChat(), (this.placeHolder.active = !1);
                    var t = this.editBox.string.trim();
                    0 !== t.length
                      ? (this.sendChat(t) && this._updateListCustomChat(t),
                        (this.editBox.string = ""))
                      : (this.editBox.string = "");
                  }),
                  (a._onEditBegan = function () {
                    this.placeHolder.active = !0;
                  }),
                  (a._onTextChanged = function () {
                    this.editBox.string.length > 0
                      ? (this.placeHolder.active = !1)
                      : (this.placeHolder.active = !0);
                  }),
                  (a._showPreloader = function () {
                    this.preLoader &&
                      !this.preLoader.active &&
                      (this.preLoader.active = !0);
                  }),
                  (a._hidePreloader = function () {
                    this.preLoader &&
                      this.preLoader.active &&
                      (this.preLoader.active = !1);
                  }),
                  (a._updateListCustomChat = function (t) {
                    this._chatHistoryData.length >=
                      this.getConfig().MAX_CUSTOM_CHAT &&
                      this._chatHistoryData.shift(),
                      this._chatHistoryData.push(t);
                    for (var e = 0; e < this._chatHistoryData.length; e++) {
                      var i = this._chatHistoryData[e],
                        n = this._listChatCustom[e];
                      (n.active = !0), this._setTextChat(n, i, !0);
                    }
                  }),
                  (a._createListSuggest = function () {
                    if (!(this.getConfig().CHAT_SUGGEST.length <= 0))
                      for (
                        var t = 0;
                        t < this.getConfig().CHAT_SUGGEST.length;
                        t++
                      ) {
                        var e = S(this.itemSuggest);
                        (e.active = !0),
                          this._setupClickListener(e),
                          this.parentSuggest.addChild(e),
                          this._setTextChat(
                            e,
                            this.getConfig().CHAT_SUGGEST[t]
                          );
                      }
                  }),
                  (a._createListChatHistory = function () {
                    for (var t = 0; t < this.getConfig().MAX_CUSTOM_CHAT; t++) {
                      var e = S(this.itemSuggest);
                      (e.active = !1),
                        this._setupClickListener(e),
                        this.parentSuggest.addChild(e),
                        this._listChatCustom.push(e);
                    }
                  }),
                  (a._onItemMoveTouch = function (t) {
                    this._checkThreadHoldDraging(t);
                  }),
                  (a._onItemEndTouch = function (t) {
                    this._checkThreadHoldDraging(t),
                      this._isTouchItem &&
                        !this._isMoving &&
                        this.onClickItem(t),
                      (this._isEmoji = !1),
                      (this._isTouchItem = !1),
                      (this._isMoving = !1);
                  }),
                  (a._setupClickListener = function (t, e) {
                    var i = this;
                    void 0 === e && (e = !1),
                      t.on(
                        s.EventType.TOUCH_START,
                        function () {
                          i._onItemStartTouch(e);
                        },
                        this
                      ),
                      t.on(s.EventType.TOUCH_MOVE, this._onItemMoveTouch, this),
                      t.on(s.EventType.TOUCH_END, this._onItemEndTouch, this),
                      t.on(
                        s.EventType.TOUCH_CANCEL,
                        this._onItemEndTouch,
                        this
                      );
                  }),
                  (a._onItemStartTouch = function (t) {
                    void 0 === t && (t = !1),
                      (this._isEmoji = t),
                      (this._isTouchItem = !0),
                      (this._isMoving = !1);
                  }),
                  (a._checkThreadHoldDraging = function (t) {
                    if (this._isTouchItem && !this._isMoving) {
                      var e = t.getStartLocation().subtract(t.getLocation());
                      Math.abs(e.y) >= 15 && (this._isMoving = !0);
                    }
                  }),
                  (a.onClickItem = function (t) {
                    if (this._isEmoji)
                      this.sendChat("Emotion_" + t.target._code);
                    else {
                      var e = t.target
                        .getChildByName("Background")
                        .getChildByName("Label")
                        .getComponent(b);
                      this.sendChat(e.content);
                    }
                  }),
                  (a._setTextChat = function (t, e, i) {
                    void 0 === i && (i = !1);
                    var n = t
                      .getChildByName("Background")
                      .getChildByName("Label")
                      .getComponent(b);
                    (n.content = e),
                      (n.string =
                        e.length > this.limittedStr
                          ? e.substring(0, this.limittedStr - 3) + "..."
                          : e),
                      (t
                        .getChildByName("Background")
                        .getComponent(E).spriteFrame = i
                        ? this.background[1]
                        : this.background[0]);
                  }),
                  (a.sendChat = function (t) {
                    if ((this._resetChat(), !this._checkEmotionsInString(t)))
                      return (
                        this.ToastChat.showWithContent(
                          "Game không hỗ trợ loại biểu tượng này"
                        ),
                        (this.messInput.string = ""),
                        !1
                      );
                    if (!this._checkCanChatWithCurrentMoney()) return !1;
                    if (
                      (this._msChat || (this._msChat = 0),
                      !(
                        Date.now() - this._msChat >=
                        1e3 * this.getConfig().CHAT_CONFIG.CHAT_DELAY_IN_SECONDS
                      ))
                    )
                      return (
                        this.fireEvent(
                          D.SHOW_TOAST_MESSAGE,
                          "Bạn không được chat quá nhanh"
                        ),
                        !1
                      );
                    (t = t.replace(/(\r\n|\n|\r)/gm, " ")),
                      (this._msChat = Date.now());
                    var e =
                      this.getDataStore().globalData.MY_PLAYER_EUI + ":::" + t;
                    return (
                      this.fireEvent(D.CHAT_MESSAGE, e),
                      this.disableChatBtn.emit(
                        "SET_COOL_DOWN",
                        this.getConfig().CHAT_CONFIG.CHAT_DELAY_IN_SECONDS
                      ),
                      this.hide(),
                      !0
                    );
                  }),
                  (a._checkEmotionsInString = function (t) {
                    (t = t.trim()), (t = this._swapCode(t));
                    var e =
                      this.messInput.node.getChildByName("EMOTIONS_LABEL");
                    if (e) {
                      e.getComponent(v).width = 0;
                      for (var i = t.split(""), n = 0; n < i.length; n++) {
                        var o = i[n].trim();
                        if (
                          ((e.getComponent(b).string = o),
                          e.getComponent(b).updateRenderData(!0),
                          1 == o.length && e.getComponent(v).width > 0)
                        )
                          return !0;
                      }
                      return !1;
                    }
                    return !0;
                  }),
                  (a._swapCode = function (t) {
                    for (var e = 0, i = zt.length; e < i; e++) {
                      var n = new RegExp("\\u" + zt[e].toString(16), "g");
                      t = t.replace(n, Mt[e]);
                    }
                    return t;
                  }),
                  (a.showHideSmiley = function () {
                    this.isShowSmiley
                      ? this._hideSmileyPanel()
                      : this._showSmileyPanel();
                  }),
                  (a._showSmileyPanel = function () {
                    this.isShowSmiley ||
                      ((this.smileyParent.active = !0),
                      (this.parentSuggest.active = !1),
                      (this.btnShowHideSmiley
                        .getChildByName("target")
                        .getComponent(E).spriteFrame =
                        this.buttonIconSpriteframe[1]),
                      (this.isShowSmiley = !this.isShowSmiley));
                  }),
                  (a._hideSmileyPanel = function () {
                    this.isShowSmiley &&
                      ((this.smileyParent.active = !1),
                      (this.parentSuggest.active = !0),
                      (this.btnShowHideSmiley
                        .getChildByName("target")
                        .getComponent(E).spriteFrame =
                        this.buttonIconSpriteframe[0]),
                      (this.isShowSmiley = !this.isShowSmiley));
                  }),
                  (a._resetChat = function () {
                    this.isDisableTouch ||
                      (m("debug=_resetChat delay disable chat"),
                      this._disableTouchOnGame(!1)),
                      (this.isDisableTouch = !1);
                    var t = this.dialogChat.getPosition();
                    this.dialogChat.setPosition(t.x, this.dialogChatInitY, t.z);
                    var e = this._detectIOS();
                    this.canvas &&
                      e &&
                      (this.fitHeight &&
                        y.setDesignResolutionSize(
                          y.getDesignResolutionSize().width,
                          y.getDesignResolutionSize().height,
                          _.FIXED_HEIGHT
                        ),
                      this.fitWidth &&
                        y.setDesignResolutionSize(
                          y.getDesignResolutionSize().width,
                          y.getDesignResolutionSize().height,
                          _.FIXED_WIDTH
                        ),
                      (this.fitHeight = null),
                      (this.fitWidth = null)),
                      C.stopAllByTarget(this.messInput.node);
                  }),
                  e
                );
              })(H)).prototype,
              "overlay",
              [A],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (st = e(ot.prototype, "btnShow", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rt = e(ot.prototype, "btnHide", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (lt = e(ot.prototype, "btnShowHideSmiley", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ht = e(ot.prototype, "buttonSend", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ut = e(ot.prototype, "preLoader", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ct = e(ot.prototype, "editBox", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (dt = e(ot.prototype, "chatParent", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (gt = e(ot.prototype, "chatPrefab", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pt = e(ot.prototype, "chatScrollView", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (mt = e(ot.prototype, "colorCurrentUser", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new u();
              },
            })),
            (yt = e(ot.prototype, "colorOtherUser", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new u();
              },
            })),
            (Ct = e(ot.prototype, "smileyParent", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ft = e(ot.prototype, "smileyPrefab", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_t = e(ot.prototype, "smileyMark", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (St = e(ot.prototype, "itemSuggest", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (bt = e(ot.prototype, "parentSuggest", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (vt = e(ot.prototype, "messInput", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Tt = e(ot.prototype, "canvas", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (wt = e(ot.prototype, "dialogChat", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Et = e(ot.prototype, "disableTouch", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (It = e(ot.prototype, "disableChatBtn", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Dt = e(ot.prototype, "buttonIconSpriteframe", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ht = e(ot.prototype, "background", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Nt = e(ot.prototype, "ToastChat", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ot = e(ot.prototype, "placeHolder", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nt = ot))
          ) || nt)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ChipBox3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTChipBox.ts",
  ],
  function (t) {
    "use strict";
    var o, n, i, r;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (i = t._decorator);
        },
        null,
        function (t) {
          r = t.BTChipBox;
        },
      ],
      execute: function () {
        var c;
        n._RF.push({}, "bb2c6Sq6/hHBL56kuv1q6dj", "ChipBox3986", void 0);
        var e = i,
          s = e.ccclass;
        e.property,
          t(
            "ChipBox3986",
            s("ChipBox3986")(
              (c = (function (t) {
                function n() {
                  return t.apply(this, arguments) || this;
                }
                o(n, t);
                var i = n.prototype;
                return (
                  (i.onLoad = function () {
                    t.prototype.onLoad.call(this);
                  }),
                  (i.test = function () {}),
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
  "chunks:///_virtual/ChipHolder3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTChipHolder.ts",
  ],
  function (t) {
    "use strict";
    var e, i, r, n, a, o, p, s, h, l, c, u;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (p = t.SpriteFrame),
            (s = t.Node),
            (h = t.instantiate),
            (l = t.UIOpacity),
            (c = t.Sprite);
        },
        null,
        function (t) {
          u = t.BTChipHolder;
        },
      ],
      execute: function () {
        var d, f, g, C, m, B, y;
        a._RF.push({}, "8b7d5/nwmBNKpxcpyqhyGfX", "ChipHolder3986", void 0);
        var v = o.ccclass,
          b = o.property;
        t(
          "ChipHolder3986",
          ((d = v("ChipHolder3986")),
          (f = b({ type: p })),
          (g = b({ type: s })),
          d(
            ((B = e(
              (m = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    r(e, "spriteFrameBG", B, n(e)),
                    r(e, "frameBG", y, n(e)),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.node.ON_EMITER.updateChipAtlas =
                        this.updateChipAtlas.bind(this)),
                      this.updateChipFrameBG();
                  }),
                  (a.getChipsByValue = function (t, e, i) {
                    void 0 === e && (e = []), void 0 === i && (i = 10);
                    var r = !1;
                    do {
                      r = !1;
                      for (var n = this.chipsArr.length - 1; n >= 0; n--) {
                        var a = this.chipsArr[n];
                        if (a && a.chipValue <= t) {
                          e.push(a), (t -= a.chipValue), (r = !0);
                          break;
                        }
                      }
                    } while (t > 0 && r && e.length < i);
                    if (t < 1e3)
                      for (; t > 0; ) {
                        var o = h(this.chipItem);
                        o.setPosition(o.getPosition().x, 0),
                          (o.initZindex = o.getZIndex()),
                          (o.id = 20),
                          (o.chipValue = 100),
                          (o.chipID = 20),
                          (o.initValue = 100),
                          (o.active = !0),
                          (o.getComponent(l).opacity = 0),
                          e.push(o),
                          (t -= 100);
                      }
                    return e;
                  }),
                  (a.updateChipFrameBG = function () {
                    var t = this.gameDataStore.getCurrentTableMode();
                    this.frameBG.getComponent(c).spriteFrame =
                      String(t) == String(this.gameConfig.TABLE_MODE.NORMAL)
                        ? this.spriteFrameBG[1]
                        : this.spriteFrameBG[0];
                  }),
                  (a.updateChipAtlas = function () {
                    for (var t = this.chipsArr.length - 1; t >= 0; t--) {
                      var e = this.chipsArr[t];
                      e && e.ON_EMITER.updateChipAtlas(e.chipValue);
                    }
                    this.updateChipFrameBG();
                  }),
                  (a.checkController = function (t) {
                    (this.nextBtn.interactable = this.preBtn.interactable = !0),
                      (this.nextBtn.node.getComponent(c).grayscale = !1),
                      (this.preBtn.node.getComponent(c).grayscale = !1),
                      t >= this.endChipID &&
                        ((t = this.endChipID),
                        (this.nextBtn.interactable = !1),
                        (this.nextBtn.node.getComponent(c).grayscale = !0)),
                      t <= 0 &&
                        ((t = 0),
                        (this.preBtn.interactable = !1),
                        (this.preBtn.node.getComponent(c).grayscale = !0)),
                      (this.scrollChipID = t);
                  }),
                  e
                );
              })(u)).prototype,
              "spriteFrameBG",
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
            (y = e(m.prototype, "frameBG", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = m))
          ) || C)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ChipItem3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTChipItem.ts",
    "./BTCommons.ts",
  ],
  function (t) {
    "use strict";
    var e, i, s, r, a, n, o, p, h, l, c, u;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (s = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (n = t._decorator),
            (o = t.SpriteAtlas),
            (p = t.Sprite),
            (h = t.UIOpacity),
            (l = t.Label);
        },
        null,
        function (t) {
          c = t.BTChipItem;
        },
        function (t) {
          u = t.convertNumberToK;
        },
      ],
      execute: function () {
        var A, C, d, g, m;
        a._RF.push({}, "fba5b7tAv5Lip5TAWGs5LAN", "ChipItem3986", void 0);
        var v = n.ccclass,
          f = (n.property, n.type);
        t(
          "ChipItem3986",
          ((A = v("ChipItem3986")),
          (C = f(o)),
          A(
            ((m = e(
              (g = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    a[n] = arguments[n];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    s(e, "chipAtlas2", m, r(e)),
                    (e.currentChipAtlas = null),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    t.prototype.onLoad.call(this);
                    var e = this.getAssetManager();
                    this.chipAtlas ||
                      (this.chipAtlas2 = null == e ? void 0 : e.ChipAtlas),
                      this.chipAtlas2 ||
                        (this.chipAtlas2 =
                          null == e ? void 0 : e.ChipAtlasPerspective),
                      (this.currentChipAtlas = this.chipAtlas),
                      (this.node.ON_EMITER.updateChipAtlas =
                        this.updateChipAtlas.bind(this));
                  }),
                  (a.updateChipAtlas = function (t) {
                    this.setTableViewMode();
                    this.node;
                    var e = t,
                      i = this.currentChipAtlas.getSpriteFrame(e);
                    this.core.getComponent(p).spriteFrame = i;
                  }),
                  (a.setUp = function (e, i, s) {
                    void 0 === s && (s = !1),
                      t.prototype.setUp.call(this, e, i, s),
                      (this.node.getComponent(h).opacity = 255);
                  }),
                  (a.setTableViewMode = function () {
                    var t = this.node,
                      e = t.gameDataStore.getCurrentTableMode();
                    this.currentChipAtlas =
                      String(e) == String(t.gameConfig.TABLE_MODE.NORMAL)
                        ? this.chipAtlas2
                        : this.chipAtlas;
                    var i = this.currentChipAtlas.getSpriteFrame("glow");
                    this.activeNode.getComponent(p).spriteFrame = i;
                  }),
                  (a.setChipByValue = function (t) {
                    this.setTableViewMode();
                    this.node;
                    var e = t,
                      i = this.currentChipAtlas.getSpriteFrame(e);
                    i
                      ? (this.value.active = !1)
                      : ((i = this.currentChipAtlas.getSpriteFrame("default")),
                        (this.value.active = !0),
                        (this.value.getComponent(l).string = u(t))),
                      (this.core.getComponent(p).spriteFrame = i),
                      this.changeChipColor();
                  }),
                  e
                );
              })(c)).prototype,
              "chipAtlas2",
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
            (d = g))
          ) || d)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ChipManager3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTEventCode.ts",
    "./BTChipBox.ts",
    "./utils2.ts",
    "./BTChipItem.ts",
    "./BTCommons.ts",
    "./BTAnimations.ts",
    "./BTSoundManager.ts",
    "./BTPlayerManager.ts",
    "./BTChipHolder.ts",
    "./BTChipManager.ts",
  ],
  function (i) {
    "use strict";
    var t, e, n, o, s, r, a, h, p, c, l, u, g, d, C, f, v, m, y;
    return {
      setters: [
        function (i) {
          t = i.inheritsLoose;
        },
        function (i) {
          (e = i.cclegacy),
            (n = i._decorator),
            (o = i.v3),
            (s = i.UIOpacity),
            (r = i.sys),
            (a = i.Tween),
            (h = i.tween),
            (p = i.UITransform);
        },
        null,
        function (i) {
          c = i.BTEventCode;
        },
        function (i) {
          l = i.BTChipBox;
        },
        function (i) {
          u = i.setIndexZ;
        },
        function (i) {
          g = i.BTChipItem;
        },
        function (i) {
          d = i.getPositionInOtherNode;
        },
        function (i) {
          C = i.BTAnimations;
        },
        function (i) {
          f = i.BTSoundManager;
        },
        function (i) {
          v = i.BTPlayerManager;
        },
        function (i) {
          m = i.BTChipHolder;
        },
        function (i) {
          y = i.BTChipManager;
        },
      ],
      execute: function () {
        var B;
        e._RF.push({}, "8658c1WgQZEWb4v7yq7cLo0", "ChipManager3986", void 0);
        var I = n.ccclass,
          P = o(0.5, 0.4, 0.5);
        i(
          "ChipManager3986",
          I("ChipManager3986")(
            (B = (function (i) {
              function e() {
                for (
                  var t, e = arguments.length, n = new Array(e), o = 0;
                  o < e;
                  o++
                )
                  n[o] = arguments[o];
                return (
                  ((t =
                    i.call.apply(i, [this].concat(n)) ||
                    this).groupUserBetInfo = []),
                  t
                );
              }
              t(e, i);
              var n = e.prototype;
              return (
                (n.onLoad = function () {
                  i.prototype.onLoad.call(this),
                    (this.randomPosAtDealer = o(20, 1, 0)),
                    this.registerEvent(
                      c.ON_HIDE_APP,
                      this.flushOnChipsGroupUser,
                      this
                    );
                }),
                (n.checkGateWins = function (i, t) {
                  var e = t.split(",");
                  for (var n in e) if (e[n] == i) return !0;
                  return !1;
                }),
                (n.createChipFlying = function (i, t, e, n, p, c, v) {
                  var m = this;
                  void 0 === n && (n = 0),
                    void 0 === p && (p = 0.5),
                    void 0 === c && (c = !1),
                    void 0 === v && (v = !0);
                  var y = this.generateChipItemNode(this.chipPrefab),
                    B = t.getComponent(l).getRandomChipArea();
                  (y.getComponent(s).opacity = 0),
                    y.setScale(P),
                    (y.bettingBox = t),
                    (y.id = null),
                    (y.chipID = y.id),
                    (y.initValue = e),
                    (y.isMobile = r.isMobile),
                    (y.stepPosY = 2),
                    (y.baseIndex = B.id * (B.maxChips + 4)),
                    this.chipsArray.push(y),
                    this.chipsHolder.addChild(y),
                    u(y, this.chipsArray.length + 4),
                    y.getComponent(g).setUp(e, y.id, !0);
                  var I = !1,
                    A = B.scale,
                    M = d(this.chipsHolder, B),
                    T = M.x,
                    _ = M.y,
                    E = M.z;
                  if (null == i) (n = p = 0), y.setScale(A), y.setPosition(M);
                  else {
                    var b = d(this.chipsHolder, i);
                    if (!b) return;
                    y.setPosition(b), (I = !0);
                  }
                  null == i
                    ? ((y.getComponent(s).opacity = 255),
                      (y.endChipPos = M),
                      (_ += Math.min(B.countChips, B.maxChips) * y.stepPosY),
                      B.countChips++,
                      this._chipAnimOnFinish(B, y, !1))
                    : ((_ += Math.min(B.countChips, B.maxChips) * y.stepPosY),
                      B.countChips++,
                      a.stopAllByTarget(y),
                      h(y)
                        .delay(n)
                        .call(function () {
                          if (
                            ((y.getComponent(s).opacity = 255),
                            (y.endChipPos = M),
                            v && i)
                          )
                            if (i.popingEff) i.popingEff();
                            else {
                              C.popingEffect(i, {
                                dur: 0.1,
                                curSC: 1,
                                maxSC: 1.03,
                                repeat: 1,
                              });
                            }
                          var t;
                          c &&
                            I &&
                            (null == (t = f.getInstance()) || t.chips());
                        })
                        .to(
                          p,
                          { position: o(T, _, E), scale: A },
                          { easing: "sineOut" }
                        )
                        .call(function () {
                          m._chipAnimOnFinish(B, y);
                        })
                        .start());
                }),
                (n._sortChip = function (i) {
                  var t = 0;
                  i.chipsArray.forEach(function (e) {
                    var n = e.endChipPos.y + t * e.stepPosY,
                      s = e.endChipPos.x;
                    t++,
                      e.setOpacity(255),
                      u(e, e.baseIndex + t),
                      e.setScale(i.scale),
                      (e.position = o(s, n, e.position.z));
                  });
                }),
                (n._optimizeChipColumn = function (i, t) {
                  var e = this;
                  void 0 === t && (t = !0),
                    i.removeChipsArr.forEach(function (i) {
                      e.removeChip(i);
                    });
                  var n = 0;
                  i.chipsArray.forEach(function (e) {
                    var o = e.endChipPos.y + n * e.stepPosY,
                      s = e.endChipPos.x;
                    n++,
                      e.betValue && e.ON_EMITER.updateChipValue(e.betValue),
                      e.setOpacity(255),
                      u(e, e.baseIndex + n),
                      e.setScale(i.scale),
                      e.setPosition(s, o, e.position.z),
                      t &&
                        n % 2 == 1 &&
                        e.ON_EMITER.mergeChip(0.1 * Math.random(), 0.2);
                  }),
                    (i.countChips = i.chipsArray.length);
                }),
                (n.createNewChipAndReturn = function (
                  i,
                  t,
                  e,
                  n,
                  s,
                  a,
                  h,
                  c,
                  l,
                  d
                ) {
                  var C;
                  void 0 === a && (a = 0),
                    void 0 === h && (h = 0.5),
                    void 0 === c && (c = !0),
                    void 0 === l && (l = !0),
                    void 0 === d && (d = !1);
                  var f = this.generateChipItemNode(this.chipPrefab),
                    v = 0,
                    m = 0;
                  this.useRandomPos &&
                    !d &&
                    ((v = 20 * (Math.random() - Math.random())),
                    (m =
                      this.dealerBox.getComponent(p).height / 2 +
                      30 -
                      20 * Math.random()));
                  var y = t.x - v,
                    B = t.y - m,
                    I = t.z;
                  return (
                    (f.position = o(y, B, I)),
                    (f.id = 0),
                    (f.initValue = i.chipValue),
                    u(f, this.chipsHolder.children.length + 4),
                    (f.isMobile = r.isMobile),
                    (f.getChildByName("active").active = !1),
                    f.setScale(n),
                    this.chipsHolder.addChild(f),
                    null == (C = f.getComponent(g)) ||
                      C.setUp(i.chipValue, i.chipID, !0),
                    this.movingChip(f, e, s, a, h, c, l),
                    f
                  );
                }),
                (n.groupUserBettingChips = function (i, t, e, n, o) {
                  void 0 === o && (o = !0),
                    o && n
                      ? this.groupUserBetInfo.push({
                          betId: i,
                          chipValue: t,
                          userIndex: e,
                          isPlaySound: n,
                        })
                      : this.bettingChip(i, t, e, n, o);
                }),
                (n.bettingChip = function (i, t, e, n, o) {
                  var s,
                    r = this;
                  void 0 === o && (o = !0);
                  var a = this.getChipBoxByBetId(i);
                  if (null != a) {
                    var h = v.getInstance(),
                      p = null == h ? void 0 : h.getPlayerByID(e);
                    p = p || this.playerBoxes[e];
                    var c = this.getConfig().CHIPS.maxChipsOnColumn;
                    if (e == this.getConfig().MAX_SEAT)
                      (null == h ? void 0 : h.getNumberPlayerOutTable()) >
                        this.getConfig().MAX_PLAYER_GROUP_USE_CONFIG &&
                        (c = this.getConfig().MAX_CHIPS_GROUP_PLAYER);
                    var l =
                        null == (s = m.getInstance())
                          ? void 0
                          : s.getChipsByValue(t, [], c),
                      u = n,
                      g = 0.1;
                    o || (p = null),
                      (a.gateID = i),
                      l.forEach(function (i) {
                        r.createChipFlying(p, a, i.chipValue, g, 0.5, u),
                          (u = !1),
                          (g = l.length > 1 ? 0.5 * Math.random() : 0);
                      });
                  }
                }),
                (n.update = function () {
                  for (
                    var i = 0;
                    i < this.groupUserBetInfo.length &&
                    i < this.getConfig().MAX_BET_PER_FRAME;
                    i++
                  ) {
                    var t = this.groupUserBetInfo[i],
                      e = t.betId,
                      n = t.chipValue,
                      o = t.userIndex,
                      s = t.isPlaySound;
                    this.bettingChip(e, n, o, s, !0);
                  }
                  this.groupUserBetInfo.splice(
                    0,
                    this.getConfig().MAX_BET_PER_FRAME
                  );
                }),
                (n.removeChip = function (i) {
                  a.stopAllByTarget(i), this.chipItemNodePool.put(i);
                  var t = [];
                  for (var e in this._mapChipBox) {
                    var n = this._mapChipBox[e]
                      .getComponent(l)
                      .getRandomChipArea();
                    n.chipsArray &&
                      n.chipsArray.length &&
                      (t = t.concat(n.chipsArray));
                  }
                  this.chipsArray = t;
                }),
                (n.flushOnChipsGroupUser = function () {
                  for (var i = 0; i < this.groupUserBetInfo.length; i++) {
                    var t = this.groupUserBetInfo[i],
                      e = t.betId,
                      n = t.chipValue,
                      o = t.userIndex,
                      s = t.isPlaySound;
                    this.bettingChip(e, n, o, s, !1);
                  }
                  this.groupUserBetInfo = [];
                }),
                (n.clearAllLoseChipsOnTable = function () {
                  i.prototype.clearAllLoseChipsOnTable.call(this),
                    (this.groupUserBetInfo = []);
                }),
                (n.onDestroy = function () {
                  (this.groupUserBetInfo = []),
                    i.prototype.onDestroy.call(this);
                }),
                e
              );
            })(y))
          ) || B
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ChipSelector3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTChipSelector.ts",
  ],
  function (t) {
    "use strict";
    var o, e, r, c;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (r = t._decorator);
        },
        null,
        function (t) {
          c = t.BTChipSelector;
        },
      ],
      execute: function () {
        var i;
        e._RF.push({}, "6594cgbSVBFqp3JorlTbjdi", "ChipSelector3986", void 0);
        var n = r,
          l = n.ccclass;
        n.property,
          t(
            "ChipSelector3986",
            l("ChipSelector3986")(
              (i = (function (t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                o(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this);
                  }),
                  (r.start = function () {
                    t.prototype.start.call(this);
                  }),
                  e
                );
              })(c))
            ) || i
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CompoBet3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BetWinAmount3986.ts",
    "./index9.ts",
    "./BTAnimations.ts",
    "./BTCompoBet.ts",
    "./BTCommons.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, a, h, s, o, r, l, g, B, p, u, m, c;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (h = t.cclegacy),
            (s = t.Label),
            (o = t.Node),
            (r = t.Prefab),
            (l = t._decorator),
            (g = t.instantiate),
            (B = t.tween);
        },
        null,
        function (t) {
          p = t.BetWinAmount3986;
        },
        null,
        function (t) {
          u = t.BTAnimations;
        },
        function (t) {
          m = t.BTCompoBet;
        },
        function (t) {
          c = t.convertNumberToK;
        },
      ],
      execute: function () {
        var f, _, d, v, b, y, A, H, T, x, I, W, C, U, N, E, F, w, R, L, M;
        h._RF.push({}, "0b47avuZbdDBJY79AlBwq7f", "CompoBet3986", void 0);
        var D = l,
          X = D.ccclass,
          z = D.property;
        t(
          "CompoBet3986",
          ((f = X("CompoBet3986")),
          (_ = z({ displayName: "extra rate", type: [s] })),
          (d = z({ displayName: "winAmountLayer", type: o })),
          (v = z({ displayName: "betFailLayer", type: o })),
          (b = z({ displayName: "betWinAmountPrefab", type: r })),
          (y = z({ displayName: "topUserBet", type: o })),
          (A = z(o)),
          (H = z(o)),
          (T = z(o)),
          (x = z(o)),
          f(
            ((C = i(
              (W = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, h = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    h[s] = arguments[s];
                  return (
                    ((i =
                      t.call.apply(t, [this].concat(h)) || this)._mapBetBox =
                      void 0),
                    (i._mapBetWinAmount = void 0),
                    (i._mapBetTopUserBet = void 0),
                    (i._mapBgHighlight = void 0),
                    (i._mapBetHighlight = void 0),
                    (i._mapAnimX2X3 = void 0),
                    (i._mapAnimWinHighlight = void 0),
                    (i._highlightDelay = 0.2),
                    n(i, "extraRate", C, a(i)),
                    n(i, "winAmountLayer", U, a(i)),
                    n(i, "betFailLayer", N, a(i)),
                    n(i, "betWinAmountPrefab", E, a(i)),
                    n(i, "topUserBet", F, a(i)),
                    n(i, "bgHighlight", w, a(i)),
                    n(i, "betHighlight", R, a(i)),
                    n(i, "animX2X3Container", L, a(i)),
                    n(i, "animWinHighlightContainer", M, a(i)),
                    i
                  );
                }
                e(i, t);
                var h = i.prototype;
                return (
                  (h.onLoad = function () {
                    this._initMapView(), t.prototype.onLoad.call(this);
                  }),
                  (h._bindProps = function () {
                    t.prototype._bindProps.call(this);
                    var i = this.node;
                    (i.setTopUserBetVisible =
                      this.setTopUserBetVisible.bind(this)),
                      (i.updateTopUserBet = this.updateTopUserBet.bind(this)),
                      (i.resetBetHighlight = this.resetBetHighlight.bind(this)),
                      (i.updateDynamicGateRate =
                        this.updateDynamicGateRate.bind(this)),
                      this.registerEvent(
                        this.getConfig().EVENT_CODE.CLICK_OVERLAY,
                        this._resetTouch.bind(this)
                      );
                  }),
                  (h._initMapView = function () {
                    this._setupMapBetBox(),
                      this._setupMapWinAmount(),
                      this._setupMapBetTopUserBet(),
                      this._setupMapBgHighlight(),
                      this._setupMapBetHighlight(),
                      this._setupAnimWinHighlight();
                  }),
                  (h._setupMapBetBox = function () {
                    if (((this._mapBetBox = {}), this.listBetBoxes))
                      for (var t = 0; t < this.listBetBoxes.length; t++) {
                        var i = this.listBetBoxes[t];
                        this._mapBetBox[i.name] = i;
                      }
                  }),
                  (h._setupMapWinAmount = function () {
                    if (((this._mapBetWinAmount = {}), this.winAmountLayer))
                      for (
                        var t = this.winAmountLayer.children, i = 0;
                        i < t.length;
                        i++
                      ) {
                        var e = t[i];
                        this._mapBetWinAmount[e.name] = e;
                      }
                  }),
                  (h._setupMapBetTopUserBet = function () {
                    if (((this._mapBetTopUserBet = {}), this.topUserBet))
                      for (
                        var t = this.topUserBet.children, i = 0;
                        i < t.length;
                        i++
                      ) {
                        var e = t[i];
                        this._mapBetTopUserBet[e.name] = e;
                      }
                  }),
                  (h._setupMapBgHighlight = function () {
                    if (((this._mapBgHighlight = {}), this.bgHighlight))
                      for (
                        var t = this.bgHighlight.children, i = 0;
                        i < t.length;
                        i++
                      ) {
                        var e = t[i];
                        this._mapBgHighlight[e.name] = e;
                      }
                  }),
                  (h._getBgHighlightById = function (t) {
                    this._mapBgHighlight || this._setupMapBgHighlight();
                    var i = this.getConfig().getBetNameByBoxId(t);
                    return this._mapBgHighlight[i];
                  }),
                  (h._setupMapBetHighlight = function () {
                    if (((this._mapBetHighlight = {}), this.betHighlight))
                      for (
                        var t = this.betHighlight.children, i = 0;
                        i < t.length;
                        i++
                      ) {
                        var e = t[i];
                        this._mapBetHighlight[e.name] = e;
                      }
                  }),
                  (h._getBetHighlightById = function (t) {
                    this._mapBetHighlight || this._setupMapBetHighlight();
                    var i = this.getConfig().getBetNameByBoxId(t);
                    return this._mapBetHighlight[i];
                  }),
                  (h._setupAnimWinHighlight = function () {
                    if (
                      ((this._mapAnimWinHighlight = {}),
                      this.animWinHighlightContainer)
                    )
                      for (
                        var t = this.animWinHighlightContainer.children, i = 0;
                        i < t.length;
                        i++
                      ) {
                        var e = t[i];
                        this._mapAnimWinHighlight[e.name] = e;
                      }
                  }),
                  (h._getAnimWinHighlightById = function (t) {
                    this._mapAnimWinHighlight || this._setupAnimWinHighlight();
                    var i = this.getConfig().getBetNameByBoxId(t);
                    return this._mapAnimWinHighlight[i];
                  }),
                  (h.setupGateRates = function (t, i) {
                    this.updateDynamicGateRate(t, i), this._setTouchEvents();
                  }),
                  (h.updateDynamicGateRate = function (t, i) {
                    var e = { NormalRates: [], ExtraRates: [] };
                    if (t)
                      for (var n = 0; n < t.length; n++) {
                        var a = t[n],
                          h = a.id,
                          s = a.rate;
                        e.NormalRates.push({ ID: Number(h), Rate: s });
                        var o = this._getBetBoxById(h);
                        o &&
                          ((o.betId = Number(h)), o.ON_EMITER.setRateValue(s));
                      }
                    if (i) {
                      var r = 0,
                        l = i.split(",");
                      (e.ExtraRates = l),
                        this.extraRate.forEach(function (t) {
                          (t.string = l[r]), r++;
                        });
                    }
                    this.getDataStore().setCacheGateRates(e),
                      this.fireEvent(
                        this.getConfig().EVENT_CODE.UPDATE_GATE_RATES,
                        e
                      );
                  }),
                  (h.highlightWinBoxes = function (t) {
                    for (var i = 0; i < t.length; i++) {
                      var e = parseInt(t[i]),
                        n = this._getBetBoxById(e);
                      n && n.ON_EMITER.enableHighLight(!0);
                      var a = this._getBgHighlightById(e);
                      a && (a.active = !0);
                      var h = this._getAnimWinHighlightById(e);
                      h && (h.active = !0);
                    }
                  }),
                  (h.resetHighlightBoxes = function () {
                    for (var t = 0; t < this.listBetBoxes.length; t++) {
                      this.listBetBoxes[t].ON_EMITER.disableHighLight();
                    }
                  }),
                  (h.showEffUserBetWin = function (t, i) {
                    if (
                      (void 0 === i && (i = 0.3),
                      this._mapBetWinAmount && t.length > 0)
                    )
                      for (var e = 0; e < t.length; e++) {
                        var n = t[e],
                          a = n.betId,
                          h = n.betAmount,
                          s = n.status,
                          o = this.getConfig().getBetNameByBoxId(a),
                          r = this._mapBetWinAmount[o],
                          l = "l" !== s,
                          B = "+" + c(Number(h));
                        if (l) {
                          var u,
                            m = g(this.betWinAmountPrefab);
                          if (r && m)
                            (r.active = !0),
                              r.addChild(m),
                              l &&
                                (null == (u = m.getComponent(p)) ||
                                  u.showWinAmount(B, 0, i, l));
                        } else
                          this._mapBetBox &&
                            this._mapBetBox[o] &&
                            h > 0 &&
                            this._mapBetBox[o].ON_EMITER.showReturnAmount(
                              B,
                              0,
                              i
                            );
                      }
                  }),
                  (h._getBetBoxById = function (t) {
                    this._mapBetBox || this._setupMapBetBox();
                    var i = this.getConfig().getBetNameByBoxId(t);
                    return this._mapBetBox[i];
                  }),
                  (h._setupMapBetFail = function () {
                    if (((this._mapBetFail = {}), this.betFailLayer))
                      for (
                        var t = 0;
                        t < this.betFailLayer.children.length;
                        t++
                      ) {
                        var i = this.betFailLayer.children[t];
                        this._mapBetFail[i.name] = i;
                      }
                  }),
                  (h.showBetFail = function (t) {
                    var i = t.betId,
                      e = t.betFailAmount;
                    if (
                      (this._mapBetFail || this._setupMapBetFail(),
                      this.getConfig().getBetNameByBoxId)
                    ) {
                      var n = this.getConfig().getBetNameByBoxId(i),
                        a = this._mapBetFail[n];
                      null == a || a.updateBetFailAmount(e);
                    }
                  }),
                  (h.hideBetFail = function (t) {
                    if (
                      (this._mapBetFail || this._setupMapBetFail(),
                      this.getConfig().getBetNameByBoxId)
                    ) {
                      var i = this.getConfig().getBetNameByBoxId(t),
                        e = this._mapBetFail[i];
                      e && e.hide();
                    }
                  }),
                  (h.hideAllBetFail = function () {
                    for (var t in (this._mapBetFail || this._setupMapBetFail(),
                    this._mapBetFail)) {
                      var i = this._mapBetFail[t];
                      i && i.hide();
                    }
                  }),
                  (h.setTopUserBetVisible = function (t) {
                    for (var i in ((this.topUserBet.active = t),
                    this._mapBetTopUserBet)) {
                      var e = this._mapBetTopUserBet[i];
                      e && e.playShowAnim();
                    }
                  }),
                  (h.updateTopUserBet = function (t) {
                    if ((this._hideAllTopBetUser(t), t))
                      for (var i in t) {
                        var e = this.getConfig().getBetNameByBoxId(i),
                          n = this._mapBetTopUserBet[e],
                          a = t[i];
                        n && a && n.updateTopUserBet(a);
                      }
                  }),
                  (h.resetAll = function () {
                    for (var i in (t.prototype.resetAll.call(this),
                    this._removeAllBetWinAmount(),
                    this.topUserBet && (this.topUserBet.active = !1),
                    this._mapBgHighlight))
                      this._mapBgHighlight[i].active = !1;
                    for (var e in this._mapAnimX2X3)
                      u.stopAllActions(this._mapAnimX2X3[e]),
                        (this._mapAnimX2X3[e].active = !1);
                    for (var n in (this.resetBetHighlight(),
                    this._mapAnimWinHighlight))
                      this._mapAnimWinHighlight[n].active = !1;
                  }),
                  (h.resetBetHighlight = function () {
                    for (var t in this._mapBetHighlight)
                      u.stopAllActions(this._mapBetHighlight[t]),
                        (this._mapBetHighlight[t].active = !1);
                  }),
                  (h._hideAllTopBetUser = function (t) {
                    if ((void 0 === t && (t = null), null == t))
                      for (var i in this._mapBetTopUserBet) {
                        var e = this._mapBetTopUserBet[i];
                        e && e.resetUI();
                      }
                    else
                      for (var n in this._mapBetTopUserBet) {
                        var a = t[this.getConfig().getBetIdByBoxName(n)],
                          h = this._mapBetTopUserBet[n];
                        h && h.resetUI(a);
                      }
                  }),
                  (h._removeAllBetWinAmount = function () {
                    if (this._mapBetWinAmount)
                      for (var t in this._mapBetWinAmount) {
                        var i = this._mapBetWinAmount[t];
                        i && i.removeAllChildren();
                      }
                  }),
                  (h._touchStart = function (t) {
                    if (!this.isTouched) {
                      (this.isTouched = !0),
                        (this._currentBox = t),
                        (this._currentBox.isTouchStart = !0);
                      var i = this._getBetHighlightById(t.betId);
                      i && this.activeBetHighLight(i, !0);
                    }
                  }),
                  (h._touchEnd = function (t, i) {
                    if ((void 0 === i && (i = !0), t && t.isTouchStart)) {
                      (this.isTouched = !1), (t.isTouchStart = !1);
                      var e = this._getBetHighlightById(t.betId);
                      e && this.activeBetHighLight(e, !1),
                        !this.isDisableAllBets &&
                          i &&
                          this._callBack &&
                          this._callBack(t.betId);
                    }
                  }),
                  (h.activeBetHighLight = function (t, i) {
                    t &&
                      (u.stopAllActions(t),
                      i
                        ? (t.active = i)
                        : B(t)
                            .delay(this._highlightDelay)
                            .call(function () {
                              t.active = i;
                            })
                            .start());
                  }),
                  (h.showResult = function (t) {
                    t && this.highlightWinBoxes(t);
                  }),
                  (h._resetTouch = function () {
                    if (!this.isDisableAllBets) {
                      for (var t in this.mapIdItem)
                        this.mapIdItem[t].activeHighLight(!1);
                      (this.mapIdItem = {}), (this.isTouched = !1);
                    }
                  }),
                  i
                );
              })(m)).prototype,
              "extraRate",
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
            (U = i(W.prototype, "winAmountLayer", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = i(W.prototype, "betFailLayer", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = i(W.prototype, "betWinAmountPrefab", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = i(W.prototype, "topUserBet", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = i(W.prototype, "bgHighlight", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = i(W.prototype, "betHighlight", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = i(W.prototype, "animX2X3Container", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = i(W.prototype, "animWinHighlightContainer", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = W))
          ) || I)
        );
        h._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Config3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTConfig.ts",
  ],
  function (_) {
    "use strict";
    var E, A, i, e, n, t, D;
    return {
      setters: [
        function (_) {
          E = _.inheritsLoose;
        },
        function (_) {
          (A = _.cclegacy),
            (i = _._decorator),
            (e = _.v3),
            (n = _.Color),
            (t = _.Vec3);
        },
        null,
        function (_) {
          D = _.BTConfig;
        },
      ],
      execute: function () {
        var o;
        A._RF.push({}, "395199kCqVEh5uFYiMJGF5w", "Config3986", void 0);
        var h = i.ccclass;
        _(
          "Config3986",
          h("Config3986")(
            (o = (function (_) {
              function A() {
                for (
                  var E, A = arguments.length, i = new Array(A), e = 0;
                  e < A;
                  e++
                )
                  i[e] = arguments[e];
                return (
                  ((E =
                    _.call.apply(_, [this].concat(i)) ||
                    this).DEALER_ANIM_NAME = {
                    RING_BELL: 1,
                    WAVE_HAND: 2,
                    PHONE_HAND: 3,
                    THUMB_UP: 4,
                    TIME_UP: 5,
                    HUG_FACE: 6,
                    HEART_HAND: 7,
                    CLAD_HAND: 8,
                    SAD_FACE: 9,
                    PUSH_BOX: 10,
                    SHAKE_BOX: 11,
                    THROW_GRENADE: 12,
                    IDLE: 13,
                    IDLE_BLINK: 14,
                    IDLE_HAPPY: 15,
                    SCRARCH_HEAD: 16,
                    STOP_HAND: 17,
                  }),
                  E
                );
              }
              E(A, _);
              var i = A.prototype;
              return (
                (i.onLoad = function () {
                  _.prototype.onLoad.call(this);
                }),
                (i._bindProps = function () {
                  _.prototype._bindProps.call(this),
                    (this.node.config.getColorByRank =
                      this.getColorByRank.bind(this));
                }),
                (i.setGameId = function () {
                  _.prototype.setGameId.call(this), (this.gameID = "3986");
                }),
                (i.defineConfig = function () {
                  var E = {};
                  (E[this.DEALER_ANIM_NAME.RING_BELL] = "Ring_Bell"),
                    (E[this.DEALER_ANIM_NAME.WAVE_HAND] = "Wave_Hand"),
                    (E[this.DEALER_ANIM_NAME.PHONE_HAND] = "Call_Hand"),
                    (E[this.DEALER_ANIM_NAME.THUMB_UP] = "Thumb_Up"),
                    (E[this.DEALER_ANIM_NAME.TIME_UP] = "Time_Up"),
                    (E[this.DEALER_ANIM_NAME.HUG_FACE] = "Hug_Face"),
                    (E[this.DEALER_ANIM_NAME.CLAD_HAND] = "Clap_Hand"),
                    (E[this.DEALER_ANIM_NAME.HEART_HAND] = "Heart_Hand"),
                    (E[this.DEALER_ANIM_NAME.SAD_FACE] = "Sad_Face"),
                    (E[this.DEALER_ANIM_NAME.PUSH_BOX] = "Push_Box"),
                    (E[this.DEALER_ANIM_NAME.SHAKE_BOX] = "Shake_Box"),
                    (E[this.DEALER_ANIM_NAME.THROW_GRENADE] = "Throw_Bomb"),
                    (E[this.DEALER_ANIM_NAME.IDLE] = "Idle"),
                    (E[this.DEALER_ANIM_NAME.IDLE_BLINK] = "Idle_Blink"),
                    (E[this.DEALER_ANIM_NAME.IDLE_HAPPY] = "Idle_Happy"),
                    (E[this.DEALER_ANIM_NAME.SCRARCH_HEAD] = "Scratch_Head"),
                    (E[this.DEALER_ANIM_NAME.STOP_HAND] = "Stop_Hand");
                  var A = {};
                  (A[this.DEALER_ANIM_NAME.RING_BELL] = ["Bắt đầu nào!"]),
                    (A[this.DEALER_ANIM_NAME.WAVE_HAND] = [
                      "Xin chào ae!",
                      "Wow, đông quá ta!",
                      "Chào ae đồng mình nha!",
                      "Hello ae,\ntôi là Deadpool!",
                      "Chào bạn nha!",
                    ]),
                    (A[this.DEALER_ANIM_NAME.PHONE_HAND] = [
                      "Cơ hội thắng lớn,\ngọi thêm đồng minh!",
                      "Gọi thêm bạn vào nha!",
                      "Deadpool ở đây nè,\nkêu bạn vào!",
                      "Aloooo bạn là có tiền!",
                      "Đâu hết rồi,\ngọi thêm bạn ae!",
                    ]),
                    (A[this.DEALER_ANIM_NAME.THUMB_UP] = [
                      "Wow, thật phấn khích!",
                      "Nhiều tiền quá!",
                      "Tuyệt vời!",
                      "Vui quá đi!",
                      "Tốt lắm,\ntốt lắm!",
                    ]),
                    (A[this.DEALER_ANIM_NAME.TIME_UP] = [
                      "Nhanh lên,\nnhanh lên!",
                      "Sắp hết giờ rồi kìa!",
                      "Nhanh tay,\nnhanh tay!",
                      "Đặt lẹ hết giờ rồi!",
                      "Cơ hội cuối, đặt lẹ ae!",
                    ]),
                    (A[this.DEALER_ANIM_NAME.CLAD_HAND] = [
                      "Thật là tuyệt!",
                      "Hâm mộ quá!",
                      "Hay lắm!",
                      "Tiếp tục phát huy nha!",
                      "Chúc mừng ae thắng lớn!",
                    ]),
                    (A[this.DEALER_ANIM_NAME.SAD_FACE] = [
                      "Ôi không!",
                      "Tiếc quá đêêê!",
                      "Đáng ghét!",
                      "Xíu nữa là thắng!",
                      "Hmmm, làm lại ván sau!",
                    ]),
                    (A[this.DEALER_ANIM_NAME.HUG_FACE] = [
                      "Thôi xong, trùm cuối tất tay.",
                      "Hự Hự...trùm cuối đã cược!",
                      "Trùm cuối cược rồi, đu theo ae!",
                      "Híc...trùm cuối cược ô nào ta!",
                      "Trùm cuối cược gắt quá!",
                    ]),
                    (A[this.DEALER_ANIM_NAME.STOP_HAND] = ["Dừng cược nào!"]);
                  var i = _.prototype.defineConfig.call(this),
                    D = {
                      ENGINE_VERSION: 3,
                      GAME_CONTENT_SIZE: {
                        maxWidth: 1560,
                        maxHeight: 960,
                        minWidth: 1200,
                      },
                      DeltaPos: 30,
                      CARD_MANAGER: {
                        CARD_DEFAULT_SPRITE: 52,
                        NUM_USER_CARDS: 2,
                        DEAL_CARD_DURATION: 0.5,
                        DEAL_CARD_DELAY: 0.5,
                        SHOW_CARD_RESULT_DURATION: 0.35,
                        SHOW_CARD_RESULT_DELAY: 0.5,
                      },
                      EVENT_CODE: {
                        UPDATE_GATE_RATES: "UPDATE_GATE_RATES",
                        UPDATE_MAX_BET: "UPDATE_MAX_BET",
                        CLICK_OVERLAY: "CLICK_OVERLAY",
                      },
                      MAX_SEAT: 7,
                      MAX_PLAYER_PER_PAGE: 18,
                      CHIPS: {
                        rob: "1000,5000,10000,50000,100000,500000,1000000,5000000,10000000,50000000",
                        width: 71,
                        height: 72,
                        spacing: 0,
                        maxChip: 4,
                        maxChipsOnColumn: 3,
                      },
                      TOTAL_SMILEY: 30,
                      TRANSITION_TABLE_VIEW: { 0: "Đổi bàn cược!" },
                      TYPE_RESULT: { 3: "Tài", 4: "Xỉu", 11: "Bão" },
                      MAX_CUSTOM_CHAT: 3,
                      CHAT_SUGGEST: [
                        "Cho xin trái Bomb đêêêê!",
                        "Lắc ra Tài cái nào!",
                        "F*ck ra Xỉu rồi ae ơi!",
                        "Ván này ra Tài chắc, tao thề!",
                        "Thời tới cản không nổi!",
                        "Xuống xác đê, thua tao đền!",
                        "Tao phán là không sai á.",
                        "Bomb nổ banh xác rồi bây ơi!",
                      ],
                      ANIM_X2_X3: {
                        HIDE: "hide",
                        IDLE: "idle",
                        START: "start",
                      },
                      DICE_SHAKER: {
                        MIN_SCALE: e(0.19, 0.19, 0.19),
                        MIDDLE_SCALE: e(1.15, 1.15, 1.15),
                        MAX_SCALE: e(1, 1, 1),
                        HIDE_DURATION: 0.5,
                        SHOW_DURATION: 0.5,
                        HIDE_RESULT_DURATION: 0.6,
                        SHOW_RESULT_DURATION: 0.6,
                        ROTATE_GLOW_EFFECT_DURATION: 7,
                        RESULT_LAYER_ANIM_DURATION: 0.35,
                        DEALER_THROW_BOMB_DURATION: 2,
                        DEALER_WIN_EMOJI_DURATION: 0.1,
                        DELAY_SHOW_RESULT_DURATION: 2,
                        MIDDLE_POS: e(0, 50, 0),
                        CENTER_POS: e(0, -40, 0),
                        ANIM_NAME_IDLE: "Idle",
                        ANIM_NAME_SHAKED: "lacxingau5",
                        ANIM_NAME_CUP_OPEN: "Open",
                        ANIM_NAME_RESULT: "MoNap",
                        MAP_DICE_SPRITE_INDEX: {
                          1: 0,
                          2: 1,
                          3: 2,
                          4: 3,
                          5: 4,
                          6: 5,
                        },
                        MIN_TIME_SQUEEZE: 7,
                        TIME_QUEEZE_OVER: 3,
                      },
                      MAP_DEALER_NAME_BY_ID: E,
                      MAP_DEALER_BUBBLE_TEXT: A,
                      DEALER_ANIM_NAME: this.DEALER_ANIM_NAME,
                      NUM_TOP_USER_ITEM: 5,
                      FADEIN_TIME: 0.3,
                      MOVE_OFFSET: 20,
                      RANK_COLOR: {
                        1: new n(250, 161, 130),
                        2: new n(250, 161, 130),
                        3: new n(250, 161, 130),
                        4: new n(216, 234, 230),
                      },
                      TOAST_MESSAGE: {
                        CHAT_FAST: "Bạn không được chat quá nhanh",
                        CHAT_REQUIRED:
                          "Số dư của bạn phải từ %s\n để có thể chat",
                        CHAT_TOOLTIP: "Bạn cần có tối thiểu 20k để chat",
                        GAME_STATE: {},
                      },
                      arrPosHorizontal: [
                        new t(-35, 20, 0),
                        new t(-35, 0, 0),
                        new t(35, 20, 0),
                        new t(35, 0, 0),
                        new t(0, -20, 0),
                      ],
                      arrPosVertical: [
                        new t(0, -12.5, 0),
                        new t(0, -38.5, 0),
                        new t(0, -64.5, 0),
                        new t(0, -90.5, 0),
                        new t(0, -116.5, 0),
                      ],
                      MAP_TOP_USER_BET_SPRITE_FRAME_IDX: {
                        1: 0,
                        2: 1,
                        3: 2,
                        4: 3,
                        5: 4,
                        6: 5,
                        7: 6,
                        8: 7,
                        9: 8,
                        10: 9,
                      },
                      MAP_BET_BOX: {
                        1: "Chan",
                        2: "Le",
                        3: "Tai",
                        4: "Xiu",
                        5: "one-oneDice",
                        6: "two-twoDice",
                        7: "three-threeDice",
                        8: "four-fourDice",
                        9: "five-fiveDice",
                        10: "six-sixDice",
                        11: "anyThree",
                        12: "one-one-oneDice",
                        13: "two-two-twoDice",
                        14: "three-three-threeDice",
                        15: "four-four-fourDice",
                        16: "five-five-fiveDice",
                        17: "six-six-sixDice",
                        18: "one-twoDice",
                        19: "one-threeDice",
                        20: "one-fourDice",
                        21: "one-fiveDice",
                        22: "one-sixDice",
                        23: "two-threeDice",
                        24: "two-fourDice",
                        25: "two-fiveDice",
                        26: "two-sixDice",
                        27: "three-fourDice",
                        28: "three-fiveDice",
                        29: "three-sixDice",
                        30: "four-fiveDice",
                        31: "four-sixDice",
                        32: "five-sixDice",
                        33: "oneDice",
                        34: "twoDice",
                        35: "threeDice",
                        36: "fourDice",
                        37: "fiveDice",
                        38: "sixDice",
                        39: "four",
                        40: "five",
                        41: "six",
                        42: "seven",
                        43: "eight",
                        44: "nine",
                        45: "ten",
                        46: "eleven",
                        47: "twele",
                        48: "thirdTeen",
                        49: "fourTeen",
                        50: "fifTeen",
                        51: "sixTeen",
                        52: "sevenTeen",
                      },
                      MAP_BET_SPRITE_INDEX: {
                        1: 27,
                        2: 49,
                        3: 50,
                        4: 51,
                        5: 43,
                        6: 44,
                        7: 45,
                        8: 46,
                        9: 47,
                        10: 48,
                        11: 20,
                        12: 14,
                        13: 15,
                        14: 16,
                        15: 17,
                        16: 18,
                        17: 19,
                        18: 28,
                        19: 29,
                        20: 30,
                        21: 31,
                        22: 32,
                        23: 33,
                        24: 34,
                        25: 35,
                        26: 36,
                        27: 37,
                        28: 38,
                        29: 39,
                        30: 40,
                        31: 41,
                        32: 42,
                        33: 21,
                        34: 22,
                        35: 23,
                        36: 24,
                        37: 25,
                        38: 26,
                        39: 0,
                        40: 1,
                        41: 2,
                        42: 3,
                        43: 4,
                        44: 5,
                        45: 6,
                        46: 7,
                        47: 8,
                        48: 9,
                        49: 10,
                        50: 11,
                        51: 12,
                        52: 13,
                      },
                      KEY_ITEM: {
                        NEXT_TABLE_MODE: this.gameID + "_next_table_mode",
                        CURRENT_TABLE_MODE: this.gameID + "_current_table_mode",
                      },
                      TABLE_MODE: { TOPVIEW: 0, NORMAL: 1 },
                      MD5: { ANIM_NAME: { KEY: "key", MD5: "md5" } },
                      AVATAR: { DEFAULT: "avatar_01", PREFIX: "" },
                      MAX_CHIPS_GROUP_PLAYER: 1,
                      MAX_PLAYER_GROUP_USE_CONFIG: 100,
                      MAX_BET_PER_FRAME: 5,
                    };
                  return (
                    (i.MESSAGE.USER_BLOCKED =
                      "Tài khoản bị khóa chơi game Sicbo Deadpool"),
                    this.injectConfig(D, i)
                  );
                }),
                (i.getColorByRank = function (_) {
                  return this.node.config.RANK_COLOR[_];
                }),
                (i.getBetNameByBoxId = function (_) {
                  return this.node.config.MAP_BET_BOX[_];
                }),
                (i.getBetIdByBoxName = function (_) {
                  var E = this.node.config.MAP_BET_BOX;
                  return Object.keys(E).find(function (A) {
                    return E[A] === _;
                  });
                }),
                A
              );
            })(D))
          ) || o
        );
        A._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ConnectAnalytic3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTAnimations.ts",
    "./BTConnectAnalytic.ts",
  ],
  function (t) {
    "use strict";
    var e, o, n, i, s, a, r, l, c, h, m, u, p, g, y, d, C, P, I;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (a = t.Node),
            (r = t._decorator),
            (l = t.UITransform),
            (c = t.instantiate),
            (h = t.v3),
            (m = t.NodePool),
            (u = t.UIOpacity),
            (p = t.Sprite),
            (g = t.Tween),
            (y = t.Color),
            (d = t.tween),
            (C = t.warn);
        },
        null,
        function (t) {
          P = t.BTAnimations;
        },
        function (t) {
          I = t.BTConnectAnalytic;
        },
      ],
      execute: function () {
        var B, f, v, T, S;
        s._RF.push(
          {},
          "21980JrR8pGp7Ks3Vc5ibKB",
          "ConnectAnalytic3986",
          void 0
        );
        var N = r,
          b = N.ccclass,
          H = N.property;
        t(
          "ConnectAnalytic3986",
          ((B = b("ConnectAnalytic3986")),
          (f = H({ displayName: "Top Parent", type: a })),
          B(
            ((S = e(
              (T = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, s = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    n(e, "topParent", S, i(e)),
                    (e.isSetuped = null),
                    (e.lastPosition = null),
                    (e.arrItemsHistoryPosition = null),
                    (e.arrItemsHistory = []),
                    (e._lastData = null),
                    (e.isLoadingData = !1),
                    (e.listBottomConnectPanel = []),
                    (e.originBottomPanelPos = null),
                    (e.lastItemInLastCol = null),
                    (e.bottomItemPool = null),
                    (e.currentData = null),
                    (e.firstTimeLoad = !0),
                    e
                  );
                }
                o(e, t);
                var s = e.prototype;
                return (
                  (s.initDataConnect = function () {
                    for (
                      var t = this.bottomConnectPanel.getComponent(l),
                        e = this.iconConnect.getComponent(l),
                        o =
                          (t.getBoundingBox().size.height -
                            4 * e.getBoundingBox().size.height) /
                          4,
                        n =
                          (t.getBoundingBox().size.width -
                            19 * e.getBoundingBox().size.width) /
                          19,
                        i = 0,
                        s = 0,
                        a = 1,
                        r = 0;
                      r < 100;
                      r++
                    ) {
                      var m = c(this.iconConnect);
                      m.setPosition(h(i, s)),
                        (m.active = !1),
                        this.bottomConnectPanel.addChild(m),
                        this.listIconConnect.push(m),
                        0 != r && (r + 1) % 20 == 0
                          ? ((a *= -1),
                            (s += e.getBoundingBox().size.height + o))
                          : (i += (e.getBoundingBox().size.width + n) * a);
                    }
                    var u = c(this.iconConnect);
                    u.setPosition(h(i + n, t.getBoundingBox().size.height)),
                      (u.active = !1),
                      this.bottomConnectPanel.addChild(u),
                      this.listIconConnect.push(u),
                      (this.lastPosition = u);
                  }),
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.bottomItemPool = new m());
                  }),
                  (s.getBottomItem = function () {
                    var t = this.bottomItemPool.get();
                    return t || (t = c(this.iconConnect)), t;
                  }),
                  (s.onDestroy = function () {
                    this.bottomItemPool.clear();
                  }),
                  (s._bindEvents = function () {
                    (this.originBottomPanelPos =
                      this.topConnectPanel.getPosition()),
                      (this.node.resetUI = this.resetUI.bind(this)),
                      (this.node.onParseStatisticConnectData =
                        this.onParseStatisticConnectData.bind(this)),
                      (this.node.falseSetuped = this.falseSetuped.bind(this)),
                      (this.node.clearUI = this.clearUI.bind(this)),
                      this._getItemsHistory(),
                      this._initItemsHistory(),
                      this.initBottomConnectListIcon();
                  }),
                  (s.resetUI = function () {
                    (this.isLoadingData = !1),
                      (this.currentData = null),
                      this.resetTXTResult(this.topConnectText),
                      this.resetTXTResult(this.bottomConnectText);
                  }),
                  (s.clearUI = function () {
                    this.topConnectPanel.children.forEach(function (t) {
                      t.active = !1;
                    }),
                      this.bottomConnectPanel.children.forEach(function (t) {
                        t.active = !1;
                      });
                  }),
                  (s.initBottomConnectListIcon = function () {
                    for (var t = 0; t < 100; t++) {
                      var e = c(this.iconConnect);
                      (e.active = !1),
                        this.topConnectPanel.addChild(e),
                        this.listBottomConnectPanel.push(e);
                    }
                  }),
                  (s.recycleIconBottom = function (t) {
                    var e = this;
                    return (
                      t.forEach(function (t) {
                        e.bottomItemPool.put(t);
                      }),
                      (t = [])
                    );
                  }),
                  (s.updateStatisticConnectTop = function (t, e) {
                    var o = this;
                    void 0 === e && (e = !1);
                    for (
                      var n = this.topConnectPanel.getComponent(l),
                        i = n.getBoundingBox().height / 5,
                        s = n.getBoundingBox().width / 20,
                        a = n.getBoundingBox().width,
                        r = -n.getBoundingBox().height,
                        c = t.length - 1,
                        m = !1,
                        p = 0.5 * s,
                        y = 0.5 * -i,
                        P = t[c].resultType,
                        I = [],
                        B = function () {
                          (p = 0.5 * s),
                            (y = 0.5 * -i),
                            (P = t[c].resultType),
                            (I = o.recycleIconBottom(I)),
                            (m = !0);
                          for (var n = 0, l = c; l >= 0; l--) {
                            var B = t[l];
                            if (11 !== B.resultType && P !== B.resultType) {
                              if (
                                y != 0.5 * -i &&
                                (n++,
                                (y = 0.5 * -i),
                                (p = n * s + 0.5 * s) >= a)
                              ) {
                                c--, (m = !1);
                                break;
                              }
                            } else if (
                              11 !== B.resultType &&
                              P === B.resultType
                            ) {
                              var f = h(p, y);
                              o.isExistsOnBottomPanel(B.resultType, f, I, s, i)
                                ? ((p += s),
                                  (y += i),
                                  Math.round(y) == Math.round(0.5 * -i) && n++)
                                : y < r && ((y = 0.5 * -i - 4 * i), (p += s));
                            } else
                              11 === B.resultType &&
                                (function () {
                                  var t = !1,
                                    e = h(p, y);
                                  I.forEach(function (o) {
                                    var a = o.position;
                                    Math.round(a.x) == Math.round(e.x) &&
                                      Math.round(a.y) == Math.round(e.y) &&
                                      ((p += s),
                                      (y += i),
                                      Math.round(y) == Math.round(0.5 * -i) &&
                                        n++,
                                      (t = !0));
                                  }),
                                    !t &&
                                      y < r &&
                                      ((y = 0.5 * -i - 4 * i), (p += s));
                                })();
                            if (p >= a) {
                              c--, (m = !1);
                              break;
                            }
                            11 !== B.resultType && (P = B.resultType);
                            var v = o.getBottomItem();
                            o.updateIconConnectContent(v, B),
                              v.setPosition(p, y),
                              (v.type = P),
                              (v.data = B),
                              (y -= i),
                              I.push(v);
                          }
                          if (m) {
                            g.stopAllByTarget(o.topConnectPanel),
                              o.listBottomConnectPanel.forEach(function (t) {
                                (t.active = !1),
                                  (t.getChildByName("glow").active = !1);
                              });
                            for (
                              var T = Number.MIN_SAFE_INTEGER, S = 0;
                              S < I.length;
                              S++
                            ) {
                              var N = I[S];
                              o.updateIconConnectContent(
                                o.listBottomConnectPanel[S],
                                N.data
                              ),
                                (o.listBottomConnectPanel[S].data = N.data),
                                o.listBottomConnectPanel[S].setPosition(
                                  N.position
                                ),
                                (o.listBottomConnectPanel[S].active = !0),
                                (T = Math.max(T, N.position.x)),
                                e
                                  ? (o.listBottomConnectPanel[S].getComponent(
                                      u
                                    ).opacity = 255)
                                  : o.randomShow(
                                      o.listBottomConnectPanel[S].getComponent(
                                        u
                                      ),
                                      0.5 * Math.random(),
                                      0.3
                                    );
                            }
                            var b = I.length - 1;
                            o.recycleIconBottom(I);
                            var H =
                              o.listBottomConnectPanel[b].getChildByName(
                                "glow"
                              );
                            (H.active = !1),
                              g.stopAllByTarget(H),
                              (H.active = !0),
                              o._runNewResultAnim(H);
                            var M = !1;
                            if (o.lastItemInLastCol) {
                              if (
                                (C(
                                  "Math.round(this.listBottomConnectPanel[lastIndex].y)",
                                  Math.round(
                                    o.listBottomConnectPanel[b].getPosition().y
                                  )
                                ),
                                C(
                                  "Math.round(this.lastItemInLastCol.y",
                                  Math.round(
                                    o.lastItemInLastCol.getPosition().y
                                  )
                                ),
                                C(
                                  "Math.round(-paddingHeight * 0.5)",
                                  Math.round(0.5 * -i)
                                ),
                                Math.round(
                                  o.listBottomConnectPanel[b].getPosition().x
                                ) == Math.round(a - 0.5 * s) &&
                                  o.lastItemInLastCol.data.matchID !==
                                    o.listBottomConnectPanel[b].data.matchID)
                              )
                                if (
                                  11 !==
                                    o.listBottomConnectPanel[b].data
                                      .resultType &&
                                  o.lastItemInLastCol.data.resultType !==
                                    o.listBottomConnectPanel[b].data.resultType
                                )
                                  (o.lastItemInLastCol =
                                    o.listBottomConnectPanel[b]),
                                    (M = e);
                                else if (
                                  11 !==
                                    o.listBottomConnectPanel[b].data
                                      .resultType &&
                                  o.lastItemInLastCol.data.resultType ===
                                    o.listBottomConnectPanel[b].data.resultType
                                )
                                  Math.round(
                                    o.listBottomConnectPanel[b].getPosition().y
                                  ) ===
                                    Math.round(
                                      o.lastItemInLastCol.getPosition().y
                                    ) &&
                                    ((o.lastItemInLastCol =
                                      o.listBottomConnectPanel[b]),
                                    (M = e));
                                else if (
                                  11 ===
                                    o.listBottomConnectPanel[b].data
                                      .resultType &&
                                  Math.round(
                                    o.listBottomConnectPanel[b].getPosition().y
                                  ) ===
                                    Math.round(
                                      o.lastItemInLastCol.getPosition().y
                                    )
                                ) {
                                  var A = o.lastItemInLastCol.data.resultType;
                                  (o.lastItemInLastCol =
                                    o.listBottomConnectPanel[b]),
                                    (o.lastItemInLastCol.data.resultType = A),
                                    (M = e);
                                }
                            } else
                              Math.round(
                                o.listBottomConnectPanel[b].position.x
                              ) == Math.round(a - 0.5 * s) &&
                                (o.lastItemInLastCol =
                                  o.listBottomConnectPanel[b]);
                            M
                              ? ((o.listBottomConnectPanel[b].active = !1),
                                g.stopAllByTarget(o.topConnectPanel),
                                o.topConnectPanel.setPosition(
                                  o.originBottomPanelPos.x + s,
                                  o.originBottomPanelPos.y,
                                  0
                                ),
                                d(o.topConnectPanel)
                                  .to(
                                    0.5,
                                    { position: o.originBottomPanelPos },
                                    { easing: "sineOut" }
                                  )
                                  .call(function () {
                                    o.topConnectPanel.setPosition(
                                      o.originBottomPanelPos
                                    ),
                                      (o.listBottomConnectPanel[b].active = !0);
                                  })
                                  .start(),
                                o.runNewMatchAnim(o.listBottomConnectPanel[b]))
                              : ((o.lastItemInLastCol =
                                  o.listBottomConnectPanel[b]),
                                (o.listBottomConnectPanel[b].active = !0),
                                o.topConnectPanel.setPosition(
                                  o.originBottomPanelPos
                                ),
                                o.runNewMatchAnim(o.listBottomConnectPanel[b]));
                            var _ = o.getNumsOfResultType(t, c);
                            return (
                              o.updateTXTResult(o.bottomConnectText, _), "break"
                            );
                          }
                        };
                      ;

                    ) {
                      if ("break" === B()) break;
                    }
                  }),
                  (s.isExistsOnBottomPanel = function (t, e, o, n, i) {
                    for (var s = 0, a = o.length; s < a; s++) {
                      var r = o[s],
                        l = r.position,
                        c = r.type;
                      if (Math.round(l.x) == Math.round(e.x)) {
                        if (Math.round(l.y) == Math.round(e.y - i) && t === c)
                          return !0;
                        if (Math.round(l.y) == Math.round(e.y)) return !0;
                      } else if (
                        Math.round(l.x) == Math.round(e.x - n) &&
                        Math.round(l.y) == Math.round(e.y) &&
                        t === c
                      )
                        return !0;
                    }
                    return !1;
                  }),
                  (s.falseSetuped = function () {
                    this.isSetuped = !1;
                  }),
                  (s.onParseStatisticConnectData = function (t, e) {
                    if (
                      (void 0 === e && (e = !1),
                      JSON.stringify(t) != JSON.stringify(this.currentData))
                    ) {
                      this.currentData = t;
                      var o = [];
                      if (
                        (t.data.resultList.forEach(function (t) {
                          var e = {
                            matchID: t.gameNum,
                            score: t.score,
                            resultType: t.resultType,
                            facesList: t.facesList,
                          };
                          o.push(e);
                        }),
                        Array.isArray(o) && o.length > 0)
                      ) {
                        if (this.isLoadingData) return;
                        (this.isLoadingData = !0),
                          !0 === this.isSetuped
                            ? this._animUpdateTableHistory(
                                this._lastData,
                                o,
                                !0
                              )
                            : (this.updateUIConnectBottom(o),
                              (this.isSetuped = !0)),
                          this.updateStatisticConnectTop(o, e);
                        var n = this.getNumsOfResultType(o);
                        this.updateTXTResult(this.topConnectText, n);
                      }
                    }
                  }),
                  (s._animUpdateTableHistory = function (t, e, o) {
                    void 0 === o && (o = !1);
                    var n = o ? 0.5 : 0;
                    this.updateUIConnectBottom(t);
                    var i = this,
                      s = function () {
                        i.updateUIConnectBottom(e);
                      };
                    if (t.length < 100) {
                      for (var a = 0; a < t.length - 1; a++)
                        this._moveItem(a, n, !1);
                      var r = e[0],
                        l = this.getResultByType(r.resultType),
                        c = this.numberAtlas.getSpriteFrame(String(r.score)),
                        h = this.getScoreColorByType(r.resultType),
                        m = this.lastPosition;
                      (m.getComponent(u).opacity = 255),
                        (m.active = !0),
                        null != this.lastPosition &&
                          m.setPosition(this.lastPosition.getPosition()),
                        m &&
                          ((m
                            .getChildByName("background")
                            .getComponent(p).spriteFrame = l),
                          (m
                            .getChildByName("TXTScore")
                            .getComponent(p).spriteFrame = c),
                          (m.getChildByName("TXTScore").getComponent(p).color =
                            h),
                          (m.getComponent(u).opacity = 0),
                          (m.active = !0),
                          g.stopAllByTarget(m),
                          P.fadeAnim(m, 255, this.SINE_OUT, 0, n, s),
                          P.moveAnim(
                            m,
                            this.arrItemsHistory[99].getPosition(),
                            n,
                            0,
                            this.SINE_IN
                          ),
                          null === this.lastPosition &&
                            (this.lastPosition =
                              this.lastPosition.getPosition()));
                    } else {
                      for (var y = 1; y < t.length; y++)
                        this._moveItem(y, n, !0);
                      var d = e[0],
                        C = this.getResultByType(d.resultType),
                        I = this.numberAtlas.getSpriteFrame(String(d.score)),
                        B = this.getScoreColorByType(d.resultType),
                        f = this.arrItemsHistory[e.length];
                      f.setPosition(this.lastPosition.getPosition()),
                        f &&
                          ((f
                            .getChildByName("background")
                            .getComponent(p).spriteFrame = C),
                          (f
                            .getChildByName("TXTScore")
                            .getComponent(p).spriteFrame = I),
                          (f.getChildByName("TXTScore").getComponent(p).color =
                            B),
                          (f.getComponent(u).opacity = 0),
                          (f.active = !0),
                          g.stopAllByTarget(f),
                          P.fadeAnim(f, 255, this.SINE_OUT, 0, n, s),
                          P.moveAnim(
                            f,
                            this.arrItemsHistoryPosition[
                              e.length - 1
                            ].getPosition(),
                            n,
                            0,
                            this.SINE_IN
                          ),
                          null === this.lastPosition &&
                            (this.lastPosition =
                              this.lastPosition.getPosition()));
                    }
                  }),
                  (s._moveItem = function (t, e, o, n) {
                    if ((void 0 === n && (n = null), 0 == o)) {
                      if (
                        t >= 0 &&
                        t < Object.keys(this.arrItemsHistory).length
                      ) {
                        var i = this.arrItemsHistory[t];
                        (i.active = !0),
                          P.moveAnim(
                            i,
                            this.arrItemsHistory[t + 1].getPosition(),
                            e,
                            0,
                            this.SINE_IN,
                            function () {
                              "function" == typeof n && n();
                            }
                          );
                      }
                    } else if (
                      t >= 0 &&
                      t < Object.keys(this.arrItemsHistory).length
                    ) {
                      var s = this.arrItemsHistory[t];
                      (s.active = !0),
                        P.moveAnim(
                          s,
                          this.arrItemsHistory[t - 1].getPosition(),
                          e,
                          0,
                          this.SINE_IN,
                          function () {
                            "function" == typeof n && n();
                          }
                        );
                    }
                  }),
                  (s.updateUIConnectBottom = function (t) {
                    this._setDataHistory(t);
                  }),
                  (s._setDataHistory = function (t) {
                    if (((this._lastData = t), t.length < 100))
                      for (var e = t.length - 1; e >= 0; e--) {
                        var o = this._getItemHistoryByIndex(e);
                        if (o) {
                          o.active = !0;
                          var n = t[e].resultType,
                            i = t[e].score;
                          (o.getComponent(u).opacity = 0),
                            (o
                              .getChildByName("background")
                              .getComponent(p).spriteFrame =
                              this.getResultByType(n)),
                            (o
                              .getChildByName("TXTScore")
                              .getComponent(p).spriteFrame =
                              this.numberAtlas.getSpriteFrame(String(i))),
                            (o
                              .getChildByName("TXTScore")
                              .getComponent(p).color =
                              this.getScoreColorByType(n));
                          var s = o.getChildByName("glow");
                          g.stopAllByTarget(s),
                            (s.active = !1),
                            0 == e &&
                              ((s.active = !0), this._runNewResultAnim(s)),
                            o.setPosition(
                              this.arrItemsHistoryPosition[
                                100 - e - 1
                              ].getPosition()
                            ),
                            this.isSetuped
                              ? (o.getComponent(u).opacity = 255)
                              : this.randomShow(
                                  o.getComponent(u),
                                  0.5 * Math.random(),
                                  0.3
                                );
                        }
                      }
                    else {
                      t = JSON.parse(JSON.stringify(t)).reverse();
                      for (var a = 0; a < t.length; a++) {
                        var r = this._getItemHistoryByIndex(a);
                        if (r) {
                          r.active = !0;
                          var l = t[a].resultType,
                            c = t[a].score;
                          (r.getComponent(u).opacity = 0),
                            (r
                              .getChildByName("background")
                              .getComponent(p).spriteFrame =
                              this.getResultByType(l)),
                            (r
                              .getChildByName("TXTScore")
                              .getComponent(p).spriteFrame =
                              this.numberAtlas.getSpriteFrame(String(c))),
                            (r
                              .getChildByName("TXTScore")
                              .getComponent(p).color =
                              this.getScoreColorByType(l));
                          var h = r.getChildByName("glow");
                          g.stopAllByTarget(h),
                            (h.active = !1),
                            a == t.length - 1 &&
                              ((h.active = !0),
                              this._runNewResultAnim(h),
                              this._resetLastItem()),
                            r.setPosition(
                              this.arrItemsHistoryPosition[a].getPosition()
                            ),
                            this.isSetuped
                              ? (r.getComponent(u).opacity = 255)
                              : this.randomShow(
                                  r.getComponent(u),
                                  0.5 * Math.random(),
                                  0.3
                                );
                        }
                      }
                    }
                  }),
                  (s._getItemsHistory = function () {
                    var t = this;
                    (this.arrItemsHistoryPosition = []),
                      this.bottomConnectPanel.children.forEach(function (e) {
                        t.arrItemsHistoryPosition.push(e),
                          (e.getComponent(u).opacity = 0);
                      });
                  }),
                  (s._initItemsHistory = function () {
                    for (var t = 0; t < 100; t++) {
                      var e = this._getItemHistoryByIndex(t);
                      e &&
                        (e.setPosition(
                          this.arrItemsHistoryPosition[t].position
                        ),
                        (e.getComponent(u).opacity = 0),
                        (e.active = !0));
                    }
                  }),
                  (s._getItemHistoryByIndex = function (t) {
                    if (this.arrItemsHistory.length - 1 > t)
                      return this.arrItemsHistory[t];
                    var e = c(this.iconConnect);
                    return e
                      ? (this.arrItemsHistory.push(e),
                        (e.parent = this.topParent),
                        e)
                      : null;
                  }),
                  (s._resetItemHistory = function () {
                    this.arrItemsHistory.forEach(function (t) {
                      (t.active = !0), P.stopAllActions(t), t.setOpacity(255);
                    });
                  }),
                  (s.getScoreColorByType = function (t) {
                    return y.WHITE;
                  }),
                  (s.randomShow = function (t, e, o) {
                    void 0 === e && (e = 0), void 0 === o && (o = 0.3);
                    var n = t.getComponent(u);
                    g.stopAllByTarget(n),
                      d(n)
                        .delay(e)
                        .to(o, { opacity: 255 }, { easing: "sineOut" })
                        .start();
                  }),
                  (s._runNewResultAnim = function (t) {
                    (t.active = !0),
                      g.stopAllByTarget(t),
                      (t.getComponent(u).opacity = 255);
                    P.popingEffect(t, {
                      dur: 0.4,
                      curSC: 1,
                      maxSC: 1.15,
                      repeat: 1,
                      yoyo: !0,
                      baseEasing: "sineOut",
                    });
                  }),
                  (s._resetLastItem = function () {
                    this.firstTimeLoad
                      ? this.arrItemsHistory.length > 100 &&
                        (this.firstTimeLoad = !1)
                      : this.arrItemsHistory.length > 100 &&
                        (this.arrItemsHistory[
                          this.arrItemsHistory.length - 1
                        ].active = !1);
                  }),
                  e
                );
              })(I)).prototype,
              "topParent",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (v = T))
          ) || v)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DataStore3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTDataStore.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, a;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (n = e.cclegacy), (i = e._decorator);
        },
        null,
        function (e) {
          a = e.BTDataStore;
        },
      ],
      execute: function () {
        var s;
        n._RF.push({}, "5aff7M+XGxKO5G/b4VzNf7F", "DataStore3986", void 0);
        var o = i,
          u = o.ccclass,
          c = (o.property, "_dealerVoice");
        e(
          "DataStore3986",
          u("DataStore3986")(
            (s = (function (e) {
              function n() {
                for (
                  var t, n = arguments.length, i = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  i[a] = arguments[a];
                return (
                  ((t = e.call.apply(e, [this].concat(i)) || this)._gateRates =
                    void 0),
                  (t._maxBet = void 0),
                  (t._isSqueeze = !1),
                  (t._isSqueezeHint = !1),
                  (t._lastSqueezeEnable = !1),
                  t
                );
              }
              t(n, e);
              var i = n.prototype;
              return (
                (i.onLoad = function () {
                  e.prototype.onLoad.call(this),
                    (this.globalData = {
                      MY_PLAYER_EUI: null,
                      SHOULD_UPDATE_WALLET: !0,
                      SHOULD_UPDATE_OTHERS_WALLET: !0,
                    }),
                    this.getDataByKey(
                      this.node.config.KEY_ITEM.NEXT_TABLE_MODE,
                      this.node.config.TABLE_MODE.TOPVIEW
                    ),
                    this.getDataByKey(
                      this.node.config.KEY_ITEM.CURRENT_TABLE_MODE,
                      this.node.config.TABLE_MODE.TOPVIEW
                    );
                }),
                (i.setIsSqueezeHint = function (e) {
                  this._isSqueezeHint = e;
                }),
                (i.getIsSqueezeHint = function () {
                  return this._isSqueezeHint;
                }),
                (i.setCacheGateRates = function (e) {
                  this._gateRates = e;
                }),
                (i.getCacheGateRates = function () {
                  return this._gateRates;
                }),
                (i.setCacheMaxBet = function (e) {
                  this._maxBet = e;
                }),
                (i.getCacheMaxBet = function () {
                  return this._maxBet;
                }),
                (i.setEnableSqueeze = function (e) {}),
                (i.getSqueeze = function () {
                  return this._isSqueeze;
                }),
                (i.setSqueeze = function (e) {
                  this._isSqueeze = e;
                }),
                (i.setLastSqueezeEnable = function (e) {
                  this._lastSqueezeEnable = e;
                }),
                (i.updateCurSqueeze = function (e) {
                  this._isSqueeze = this._lastSqueezeEnable;
                }),
                (i.setActiveDealerVoice = function (e) {
                  this.setDataByKey(c, e);
                }),
                (i.isEnableDealerVoice = function () {
                  return this.getDataByKey(c, !0);
                }),
                (i.getCurrentTableMode = function () {
                  return this.getDataByKey(
                    this.node.config.KEY_ITEM.CURRENT_TABLE_MODE,
                    this.node.config.TABLE_MODE.TOPVIEW
                  );
                }),
                (i.setCurrentTableMode = function (e) {
                  this.setDataByKey(
                    this.node.config.KEY_ITEM.CURRENT_TABLE_MODE,
                    e
                  );
                }),
                n
              );
            })(a))
          ) || s
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Dealer3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./SoundManager3986.ts",
    "./BTEventCode.ts",
    "./BTAnimations.ts",
    "./BTSubscriber.ts",
    "./BTCommons.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, a, l, s, o, h, r, m, b, u, c, A, p, d, B, y, g, E;
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
            (s = t.Node),
            (o = t.sp),
            (h = t._decorator),
            (r = t.Tween),
            (m = t.tween),
            (b = t.UIOpacity),
            (u = t.log),
            (c = t.Label),
            (A = t.v3);
        },
        null,
        function (t) {
          p = t.SoundManager3986;
        },
        function (t) {
          d = t.BTEventCode;
        },
        function (t) {
          B = t.BTAnimations;
        },
        function (t) {
          y = t.BTSubscriber;
        },
        function (t) {
          (g = t.defineOpacity), (E = t.shuffleArray);
        },
      ],
      execute: function () {
        var T, I, f, M, P, S, D, k, C, L, N, R, v, U, X;
        l._RF.push({}, "24ee8HfSFVAIK9fR5GUtQka", "Dealer3986", void 0);
        var x = h,
          w = x.ccclass,
          H = x.property,
          F = _;
        t(
          "Dealer3986",
          ((T = w("Dealer3986")),
          (I = H({ type: s })),
          (f = H({ type: o.Skeleton })),
          (M = H({ type: s })),
          (P = H({ type: s })),
          (S = H({ type: s })),
          (D = H({ type: s })),
          T(
            ((L = e(
              (C = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, l = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    l[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(l)) || this),
                    n(e, "spineNode", L, a(e)),
                    n(e, "bombAnim", N, a(e)),
                    n(e, "rootNode", R, a(e)),
                    n(e, "bubbleTalk", v, a(e)),
                    n(e, "partBubble", U, a(e)),
                    n(e, "lblBubbleTalk", X, a(e)),
                    (e.MAP_CUR_IDX_BUBBLE_TEXT = null),
                    (e.MAP_DEALER_BUBBLE_TEXT = null),
                    (e.mapIdleAnim = null),
                    (e.anim = null),
                    (e.isPlayingAnim = !1),
                    (e.currentAnimName = null),
                    (e.tempIndex = null),
                    (e.canPlayIdle = !0),
                    (e.lastIdleIndex = 0),
                    e
                  );
                }
                i(e, t);
                var l = e.prototype;
                return (
                  (l.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.anim = this.spineNode.getComponent(o.Skeleton)),
                      this.anim.setCompleteListener(
                        this.completeAction.bind(this)
                      ),
                      this.bombAnim.setCompleteListener(
                        this.completeBombAction.bind(this)
                      ),
                      this.anim.setSkin("default"),
                      this.anim.setSlotsToSetupPose(),
                      (this.mapIdleAnim = {
                        0: this.gameConfig.MAP_DEALER_NAME_BY_ID[13],
                        1: this.gameConfig.MAP_DEALER_NAME_BY_ID[14],
                        2: this.gameConfig.MAP_DEALER_NAME_BY_ID[15],
                        3: this.gameConfig.MAP_DEALER_NAME_BY_ID[16],
                      }),
                      this._bindProps(),
                      (this.isPlayingAnim = !1),
                      (this.currentAnimName = null),
                      (this.tempIndex = null),
                      (this.canPlayIdle = !0),
                      this.playRandomIdleAnim(),
                      this.bubbleTalk && (this.bubbleTalk.active = !1),
                      this.partBubble && (this.partBubble.active = !1),
                      (this.MAP_CUR_IDX_BUBBLE_TEXT = {}),
                      (this.MAP_CUR_IDX_BUBBLE_TEXT[
                        this.gameConfig.DEALER_ANIM_NAME.RING_BELL
                      ] = 0),
                      (this.MAP_CUR_IDX_BUBBLE_TEXT[
                        this.gameConfig.DEALER_ANIM_NAME.WAVE_HAND
                      ] = 0),
                      (this.MAP_CUR_IDX_BUBBLE_TEXT[
                        this.gameConfig.DEALER_ANIM_NAME.PHONE_HAND
                      ] = 0),
                      (this.MAP_CUR_IDX_BUBBLE_TEXT[
                        this.gameConfig.DEALER_ANIM_NAME.THUMB_UP
                      ] = 0),
                      (this.MAP_CUR_IDX_BUBBLE_TEXT[
                        this.gameConfig.DEALER_ANIM_NAME.TIME_UP
                      ] = 0),
                      (this.MAP_CUR_IDX_BUBBLE_TEXT[
                        this.gameConfig.DEALER_ANIM_NAME.CLAD_HAND
                      ] = 0),
                      (this.MAP_CUR_IDX_BUBBLE_TEXT[
                        this.gameConfig.DEALER_ANIM_NAME.SAD_FACE
                      ] = 0),
                      (this.MAP_CUR_IDX_BUBBLE_TEXT[
                        this.gameConfig.DEALER_ANIM_NAME.HUG_FACE
                      ] = 0),
                      (this.MAP_CUR_IDX_BUBBLE_TEXT[
                        this.gameConfig.DEALER_ANIM_NAME.STOP_HAND
                      ] = 0),
                      (this.MAP_DEALER_BUBBLE_TEXT = F.cloneDeep(
                        this.gameConfig.MAP_DEALER_BUBBLE_TEXT
                      )),
                      this._shuffleBubbleText(),
                      this.bubbleTalk && g(this.bubbleTalk),
                      this.partBubble && g(this.partBubble),
                      this.registerEvent(
                        d.ON_HIDE_APP,
                        this._onHideApp.bind(this)
                      );
                  }),
                  (l._shuffleBubbleText = function () {
                    for (var t in this.MAP_DEALER_BUBBLE_TEXT) {
                      var e = this.MAP_DEALER_BUBBLE_TEXT[t];
                      E(e);
                    }
                  }),
                  (l._bindProps = function () {
                    this.node.ON_EMITER = {
                      playAnimByIndex: this.playAnimByIndex.bind(this),
                      playRandomIdleAnim: this.playRandomIdleAnim.bind(this),
                      playShakerBoxAnim: this.playShakerBoxAnim.bind(this),
                      playAnimThrowGrenade:
                        this.playAnimThrowGrenade.bind(this),
                      playAnimPushBox: this.playAnimPushBox.bind(this),
                      setCanPlayIdleAnim: this.setCanPlayIdleAnim.bind(this),
                      playStartBetting: this.playStartBetting.bind(this),
                      playAnimStopBetting: this.playAnimStopBetting.bind(this),
                      reset: this.reset.bind(this),
                    };
                  }),
                  (l.playAnimByIndex = function (t, e, i) {
                    var n, a, l, s, o, h, r, m;
                    void 0 === e && (e = !1), void 0 === i && (i = 1);
                    var b = this.gameConfig.MAP_DEALER_NAME_BY_ID[t];
                    if (
                      b &&
                      !this.isPlayingAnim &&
                      (this.currentAnimName != b
                        ? ((this.isPlayingAnim = !0),
                          (this.currentAnimName = b),
                          (this.anim.timeScale = i),
                          this.anim.setAnimation(0, b, e),
                          this._showBubbleText(t))
                        : this.playRandomIdleAnim(),
                      this.gameDataStore.isEnableDealerVoice())
                    )
                      switch (b) {
                        case "Wave_Hand":
                          null == (n = p.getInstance()) || n.helloSFX(!0);
                          break;
                        case "Sad_Face":
                          null == (a = p.getInstance()) || a.ohnoSFX(!0);
                          break;
                        case "Hug_Face":
                          null == (l = p.getInstance()) || l.omgSFX(!0);
                          break;
                        case "Heart_Hand":
                          null == (s = p.getInstance()) || s.supriseSFX(!0);
                          break;
                        case "Thumb_Up":
                          null == (o = p.getInstance()) || o.wowSFX(!0);
                          break;
                        case "Call_Hand":
                          null == (h = p.getInstance()) || h.callSFX(!0);
                          break;
                        case "Clap_Hand":
                          null == (r = p.getInstance()) || r.clapSFX(!0);
                          break;
                        case "Time_Up":
                          null == (m = p.getInstance()) || m.comeonmanSFX(!0);
                      }
                  }),
                  (l.playAnimByName = function (t, e, i) {
                    void 0 === e && (e = !1),
                      void 0 === i && (i = 1),
                      this.currentAnimName != t
                        ? ((this.anim.timeScale = i),
                          this.anim.setAnimation(0, t, e))
                        : this.playRandomIdleAnim();
                  }),
                  (l.playRandomIdleAnim = function () {
                    if (this.canPlayIdle) {
                      var t =
                          Math.floor(3 * Math.random()) +
                          (4 == this.lastIdleIndex
                            ? 0
                            : Math.round(0.6 * Math.random())),
                        e = this.mapIdleAnim[t];
                      (this.lastIdleIndex = t),
                        this.tempIndex == t
                          ? this.playRandomIdleAnim()
                          : ((this.tempIndex = t),
                            this.anim.setAnimation(0, e, !1));
                    }
                  }),
                  (l.playAnimStopBetting = function () {
                    this.anim.setSkin("default"),
                      this.anim.setSlotsToSetupPose(),
                      this.playAnimByIndex(17);
                  }),
                  (l.playAnimPushBox = function () {
                    this.anim.setSkin("default"),
                      this.anim.setSlotsToSetupPose(),
                      this.playAnimByIndex(10),
                      r.stopAllByTarget(this.node),
                      m(this.node)
                        .delay(0.6)
                        .call(function () {
                          var t;
                          null == (t = p.getInstance()) ||
                            t.pushSicboBoxSound(!0, !0);
                        })
                        .start();
                  }),
                  (l.setCanPlayIdleAnim = function (t) {
                    this.canPlayIdle = t;
                  }),
                  (l.playAnimThrowGrenade = function () {
                    var t = this;
                    this.anim.setSkin("default"),
                      this.anim.setSlotsToSetupPose();
                    r.stopAllByTarget(this.node),
                      m(this.node)
                        .delay(1.5)
                        .call(function () {
                          t.playAnimByIndex(12, false, 1.2),
                            (t.bombAnim.node.active = !0),
                            (t.bombAnim.node.getComponent(b).opacity = 255),
                            t.bombAnim.setAnimation(0, "Throw_Bomb", !1);
                        })
                        .delay(1)
                        .call(function () {
                          var e;
                          B.shaking(t.rootNode, {
                            delay: 0,
                            distance: 30,
                            speed: 0.95,
                            callBack: function () {
                              u("stop shaking");
                            },
                          }),
                            t.bombAnim.node.playParticle(),
                            null == (e = p.getInstance()) || e.exploreSound(!0);
                        })
                        .start();
                  }),
                  (l.playShakerBoxAnim = function () {
                    r.stopAllByTarget(this.node),
                      this.anim.setSkin("Box_Show"),
                      this.anim.setSlotsToSetupPose(),
                      (this.anim.timeScale = 1),
                      this.anim.setAnimation(
                        0,
                        this.gameConfig.MAP_DEALER_NAME_BY_ID[11],
                        !1
                      ),
                      m(this.node)
                        .delay(0.6)
                        .call(function () {
                          var t;
                          null == (t = p.getInstance()) || t.shakerSound(!0);
                        })
                        .start();
                  }),
                  (l.playStartBetting = function () {
                    this.anim.setSkin("default"),
                      this.anim.setSlotsToSetupPose(),
                      this.playAnimByIndex(1),
                      r.stopAllByTarget(this.node),
                      m(this.node)
                        .delay(0.6)
                        .call(function () {
                          var t;
                          null == (t = p.getInstance()) || t.ringBellSound(!0);
                        })
                        .start();
                  }),
                  (l.completeAction = function (t) {
                    (this.isPlayingAnim = !1),
                      null != this.currentAnimName
                        ? (this.playAnimByName(this.currentAnimName),
                          (this.currentAnimName = null))
                        : this.playRandomIdleAnim();
                  }),
                  (l.completeBombAction = function (t) {
                    var e = this;
                    switch (t.animation.name) {
                      case "Throw_Bomb":
                        r.stopAllByTarget(this.node),
                          m(this.node)
                            .delay(1)
                            .call(function () {
                              e.bombAnim.setAnimation(0, "Glass_Fade", !1);
                            })
                            .start();
                        break;
                      case "Glass_Fade":
                        this.bombAnim.node.hideParticle(),
                          (this.bombAnim.node.getComponent(b).opacity = 0),
                          (this.bombAnim.node.active = !1);
                    }
                  }),
                  (l.reset = function () {
                    r.stopAllByTarget(this.node),
                      this.bombAnim.node.hideParticle(),
                      (this.bombAnim.node.getComponent(b).opacity = 0),
                      (this.bombAnim.node.active = !1),
                      (this.currentAnimName = null),
                      this.anim.setSkin("default"),
                      this.anim.setSlotsToSetupPose(),
                      this.anim.setAnimation(0, "Idle", !1),
                      (this.tempIndex = null),
                      (this.canPlayIdle = !0),
                      r.stopAllByTarget(this.bubbleTalk),
                      r.stopAllByTarget(this.partBubble),
                      (this.bubbleTalk.active = !1),
                      (this.partBubble.active = !1);
                  }),
                  (l._showBubbleText = function (t) {
                    var e = this,
                      i = this.MAP_DEALER_BUBBLE_TEXT[t];
                    if (i) {
                      var n = this.MAP_CUR_IDX_BUBBLE_TEXT[t];
                      n >= i.length && (n = 0);
                      var a = i[n] ? i[n] : null;
                      if ((n++, (this.MAP_CUR_IDX_BUBBLE_TEXT[t] = n), a)) {
                        this.bubbleTalk && (this.bubbleTalk.active = !0),
                          (this.lblBubbleTalk.getComponent(c).string = a),
                          this.lblBubbleTalk
                            .getComponent(c)
                            .updateRenderData(!0);
                        var l = 0.9;
                        r.stopAllByTarget(this.bubbleTalk),
                          (this.bubbleTalk.angle =
                            20 * (Math.random() - Math.random())),
                          (this.bubbleTalk.getComponent(b).opacity = 0),
                          this.bubbleTalk.setScale(A(l, l, l));
                        var s = 0.35;
                        m(this.bubbleTalk)
                          .to(
                            s,
                            { opacity: 255, angle: 0, scale: A(1, 1, 1) },
                            { easing: "backInOut" }
                          )
                          .delay(2)
                          .to(
                            s,
                            {
                              opacity: 0,
                              angle: 20 * (Math.random() - Math.random()),
                              scale: A(l, l, l),
                            },
                            { easing: "backInOut" }
                          )
                          .call(function () {
                            e.bubbleTalk.active = !1;
                          })
                          .start(),
                          m(this.bubbleTalk.getComponent(b))
                            .to(s, { opacity: 255 }, { easing: "backInOut" })
                            .delay(2)
                            .to(s, { opacity: 0 }, { easing: "backInOut" })
                            .call(function () {
                              e.bubbleTalk.active = !1;
                            })
                            .start(),
                          this.partBubble && (this.partBubble.active = !0),
                          r.stopAllByTarget(this.partBubble),
                          (this.partBubble.angle =
                            20 * (Math.random() - Math.random())),
                          (this.partBubble.getComponent(b).opacity = 0),
                          this.partBubble.setScale(A(l, l, l)),
                          m(this.partBubble)
                            .to(
                              s,
                              { opacity: 255, angle: 0, scale: A(1, 1, 1) },
                              { easing: "backInOut" }
                            )
                            .delay(2)
                            .to(
                              s,
                              {
                                opacity: 0,
                                angle: 20 * (Math.random() - Math.random()),
                                scale: A(l, l, l),
                              },
                              { easing: "backInOut" }
                            )
                            .call(function () {
                              e.partBubble.active = !1;
                            })
                            .start(),
                          m(this.partBubble.getComponent(b))
                            .to(s, { opacity: 255 }, { easing: "backInOut" })
                            .delay(2)
                            .to(s, { opacity: 0 }, { easing: "backInOut" })
                            .start();
                      }
                    }
                  }),
                  (l._onHideApp = function () {
                    this.reset();
                  }),
                  e
                );
              })(y)).prototype,
              "spineNode",
              [I],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (N = e(C.prototype, "bombAnim", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(C.prototype, "rootNode", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = e(C.prototype, "bubbleTalk", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = e(C.prototype, "partBubble", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = e(C.prototype, "lblBubbleTalk", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = C))
          ) || k)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Declaration3986.ts",
  [
    "cc",
    "./BTCommons.ts",
    "./gameCommonUtils.ts",
    "./utils2.ts",
    "./index9.ts",
    "./BTObserver.ts",
    "./BTSubscriber.ts",
    "./UIOpacityNode.ts",
    "./BTUIOpacity.ts",
    "./BTKeyMapping.ts",
    "./DirectTouchInput.ts",
    "./BTBetFail.ts",
    "./BTBetItem.ts",
    "./BTCompoBet.ts",
    "./BTBetRegions.ts",
    "./BTBetInfoGroups.ts",
    "./BT3DClickable.ts",
    "./BTBetItem3D.ts",
    "./BTCompoBet3D.ts",
    "./BTChatDialog.ts",
    "./BTDisableChatToolTip.ts",
    "./BTChipBox.ts",
    "./BTChipBox3D.ts",
    "./BTChipHolder.ts",
    "./BTChipItem.ts",
    "./BTChipItem3D.ts",
    "./BTChipItem_v2.ts",
    "./BTChipManager.ts",
    "./BTChipManager3D.ts",
    "./BTChipSelector.ts",
    "./BTChipSelectItem.ts",
    "./BTChipTableItem.ts",
    "./BTMD5.ts",
    "./BTMD5v2.ts",
    "./BTMD5History.ts",
    "./BTExtendUserItem.ts",
    "./BTPlayerItem.ts",
    "./BTPlayerManager.ts",
    "./BTChartAnalytic.ts",
    "./BTConnectAnalytic.ts",
    "./BTPopupAnalytic.ts",
    "./BTDialogMessage.ts",
    "./BTPopupHelp.ts",
    "./BTPopupHistory.ts",
    "./BTPopupItem.ts",
    "./BTPopupSetting.ts",
    "./BTPopupTopWinner.ts",
    "./BTPopupUserInfo.ts",
    "./BTPopupListUser.ts",
    "./BTPopupListUserV2.ts",
    "./BTDialogNetworkIdle.ts",
    "./BTPopupTopWinnerRankItem.ts",
    "./BTMenuOptions.ts",
    "./BTTimer.ts",
    "./BTPopupPreloader.ts",
    "./BTWinAmount.ts",
    "./BTToastSystem.ts",
    "./BT3DText.ts",
    "./BT3DCharInfo.ts",
    "./BTDropDownList.ts",
    "./BTAnimations.ts",
    "./BTBubbleTalk.ts",
    "./BTFitScreen.ts",
    "./RNGCoolDown.ts",
    "./BTAssetsManager.ts",
    "./BTConfig.ts",
    "./BTDataStore.ts",
    "./BTLocalization.ts",
    "./BTDirector.ts",
    "./BTGameDirector.ts",
    "./BTGameManager.ts",
    "./BTGameWriter.ts",
    "./BTPlayerWriter.ts",
    "./BTBetWriter.ts",
    "./BTPreloader.ts",
    "./BTResize.ts",
    "./BTSoundManager.ts",
    "./BTSoundPlayerAdapter.ts",
    "./BTToast.ts",
    "./BTToastPopup.ts",
    "./BTWaiting.ts",
    "./BTPopupManager.ts",
    "./BTLobby.ts",
    "./BTRoomItem.ts",
    "./BTRoomList.ts",
    "./BTSettingButton.ts",
    "./BTGetLanguageParam.ts",
    "./BTLanguageLabel.ts",
    "./BTLocalizationResources.ts",
    "./EnumLanguage.ts",
    "./BTSoundMode.ts",
    "./BTLanguage.ts",
    "./BTConst.ts",
    "./BTEventCode.ts",
    "./BTGameState.ts",
    "./BTGameStateTable.ts",
    "./bt-betting-gate.ts",
    "./BTBonusGameState.ts",
    "./BTGameStateEvent.ts",
    "./BTLoadingScene.ts",
    "./BTLoadingSceneBundle.ts",
    "./BTStateAction.ts",
    "./State2.ts",
    "./StateMachine.ts",
    "./BTRestAPI.ts",
  ],
  function (t) {
    "use strict";
    var e, n, o;
    return {
      setters: [
        function (t) {
          (e = t.cclegacy), (n = t.UITransform), (o = t.v2);
        },
        function (e) {
          t("BTCommons", e);
          var n = {};
          (n.COMMON_CONFIG = e.COMMON_CONFIG),
            (n.buildMapNodeByName = e.buildMapNodeByName),
            (n.checkDistancePointToRect = e.checkDistancePointToRect),
            (n.convertNumberToDecimal = e.convertNumberToDecimal),
            (n.convertNumberToK = e.convertNumberToK),
            (n.copyTextToClipboard = e.copyTextToClipboard),
            (n.countItemInArray = e.countItemInArray),
            (n.customDateFormat = e.customDateFormat),
            (n.defineOpacity = e.defineOpacity),
            (n.defineProperty = e.defineProperty),
            (n.distanceAB = e.distanceAB),
            (n.fixRedundantDecimal = e.fixRedundantDecimal),
            (n.formatCountDownTime = e.formatCountDownTime),
            (n.formatJackpotNo = e.formatJackpotNo),
            (n.formatNumber = e.formatNumber),
            (n.getLeftTime = e.getLeftTime),
            (n.getMoneyFormat = e.getMoneyFormat),
            (n.getNumInFormat = e.getNumInFormat),
            (n.getOpacityCmp = e.getOpacityCmp),
            (n.getPositionInOtherNode = e.getPositionInOtherNode),
            (n.getPostionInOtherNode = e.getPostionInOtherNode),
            (n.getSumResult = e.getSumResult),
            (n.getTextResult = e.getTextResult),
            (n.loadAvatarFacebook = e.loadAvatarFacebook),
            (n.onUpdateValue = e.onUpdateValue),
            (n.optimizeScrollView = e.optimizeScrollView),
            (n.optimizeScrollViewV2 = e.optimizeScrollViewV2),
            (n.reverseMoney = e.reverseMoney),
            (n.setTargetOpacity = e.setTargetOpacity),
            (n.shortenString = e.shortenString),
            (n.shortenUserName = e.shortenUserName),
            (n.shuffleArray = e.shuffleArray),
            (n.updateCommonsConfig = e.updateCommonsConfig),
            t(n);
        },
        function (e) {
          t("gameCommonUtils", e.default);
        },
        function (e) {
          t("setIndexZ", e.setIndexZ);
        },
        null,
        function (e) {
          t("BTObserver", e.BTObserver);
        },
        function (e) {
          t("BTSubscriber", e.BTSubscriber);
        },
        function (e) {
          t("UIOpacityNode", e.UIOpacityNode);
        },
        function (e) {
          t("BTUIOpacity", e.BTUIOpacity);
        },
        function (e) {
          t("BTKeyMapping", e.BTKeyMapping);
        },
        function (e) {
          t("directTouchInput", e.directTouchInput);
        },
        function (e) {
          t("BTBetFail", e.BTBetFail);
        },
        function (e) {
          t("BTBetItem", e.BTBetItem);
        },
        function (e) {
          t("BTCompoBet", e.BTCompoBet);
        },
        function (e) {
          t("BTBetRegions", e.BTBetRegions);
        },
        function (e) {
          t("BTBetInfoGroups", e.BTBetInfoGroups);
        },
        function (e) {
          t("BT3DClickable", e.BT3DClickable);
        },
        function (e) {
          t("BTBetItem3D", e.BTBetItem3D);
        },
        function (e) {
          t("BTCompoBet3D", e.BTCompoBet3D);
        },
        function (e) {
          t("BTChatDialog", e.BTChatDialog);
        },
        function (e) {
          t("BTDisableChatToolTip", e.BTDisableChatToolTip);
        },
        function (e) {
          t("BTChipBox", e.BTChipBox);
        },
        function (e) {
          t("BTChipBox3D", e.BTChipBox3D);
        },
        function (e) {
          t("BTChipHolder", e.BTChipHolder);
        },
        function (e) {
          t("BTChipItem", e.BTChipItem);
        },
        function (e) {
          t("BTChipItem3D", e.BTChipItem3D);
        },
        function (e) {
          t("BTChipItem_v2", e.BTChipItem_v2);
        },
        function (e) {
          t("BTChipManager", e.BTChipManager);
        },
        function (e) {
          t("BTChipManager3D", e.BTChipManager3D);
        },
        function (e) {
          t("BTChipSelector", e.BTChipSelector);
        },
        function (e) {
          t("BTChipSelectItem", e.BTChipSelectItem);
        },
        function (e) {
          t("BTChipTableItem", e.BTChipTableItem);
        },
        function (e) {
          t("BTMD5", e.BTMD5);
        },
        function (e) {
          t("BTMD5v2", e.BTMD5v2);
        },
        function (e) {
          t("BTMD5History", e.BTMD5History);
        },
        function (e) {
          t("BTExtendUserItem", e.BTExtendUserItem);
        },
        function (e) {
          t("BTPlayerItem", e.BTPlayerItem);
        },
        function (e) {
          t("BTPlayerManager", e.BTPlayerManager);
        },
        function (e) {
          t("BTChartAnalytic", e.BTChartAnalytic);
        },
        function (e) {
          t("BTConnectAnalytic", e.BTConnectAnalytic);
        },
        function (e) {
          t("BTPopupAnalytic", e.BTPopupAnalytic);
        },
        function (e) {
          t("BTDialogMessage", e.BTDialogMessage);
        },
        function (e) {
          t("BTPopupHelp", e.BTPopupHelp);
        },
        function (e) {
          t("BTPopupHistory", e.BTPopupHistory);
        },
        function (e) {
          t("BTPopupItem", e.BTPopupItem);
        },
        function (e) {
          t("BTPopupSetting", e.BTPopupSetting);
        },
        function (e) {
          t("BTPopupTopWinner", e.BTPopupTopWinner);
        },
        function (e) {
          t("BTPopupUserInfo", e.BTPopupUserInfo);
        },
        function (e) {
          t("BTPopupListUser", e.BTPopupListUser);
        },
        function (e) {
          t("BTPopupListUserV2", e.BTPopupListUserV2);
        },
        function (e) {
          t("BTDialogNetworkIdle", e.BTDialogNetworkIdle);
        },
        function (e) {
          t("BTPopupTopWinnerRankItem", e.BTPopupTopWinnerRankItem);
        },
        function (e) {
          t("BTMenuOptions", e.BTMenuOptions);
        },
        function (e) {
          t("BTTimer", e.BTTimer);
        },
        function (e) {
          t("BTPopupPreloader", e.BTPopupPreloader);
        },
        function (e) {
          t("BTWinAmount", e.BTWinAmount);
        },
        function (e) {
          t("BTToastSystem", e.BTToastSystem);
        },
        function (e) {
          t("BT3DText", e.BT3DText);
        },
        function (e) {
          t("BT3DCharInfo", e.BT3DCharInfo);
        },
        function (e) {
          t("BTDropDownList", e.BTDropDownList);
        },
        function (e) {
          t("BTAnimations", e.BTAnimations);
        },
        function (e) {
          t("BTBubbleTalk", e.BTBubbleTalk);
        },
        function (e) {
          t("BTFitScreen", e.BTFitScreen);
        },
        function (e) {
          t("RNGCoolDown", e.RNGCoolDown);
        },
        function (e) {
          var n = {};
          (n.BTAssetsManager = e.BTAssetsManager),
            (n.ChipMaterial = e.ChipMaterial),
            t(n);
        },
        function (e) {
          t("BTConfig", e.BTConfig);
        },
        function (e) {
          t("BTDataStore", e.BTDataStore);
        },
        function (e) {
          t("BTLocalization", e.BTLocalization);
        },
        function (e) {
          t("BTDirector", e.BTDirector);
        },
        function (e) {
          t("BTGameDirector", e.BTGameDirector);
        },
        function (e) {
          t("BTGameManager", e.BTGameManager);
        },
        function (e) {
          t("BTGameWriter", e.BTGameWriter);
        },
        function (e) {
          t("BTPlayerWriter", e.BTPlayerWriter);
        },
        function (e) {
          t("BTBetWriter", e.BTBetWriter);
        },
        function (e) {
          t("BTPreloader", e.BTPreloader);
        },
        function (e) {
          t("BTResize", e.BTResize);
        },
        function (e) {
          t("BTSoundManager", e.BTSoundManager);
        },
        function (e) {
          t("BTSoundPlayerAdapter", e.BTSoundPlayerAdapter);
        },
        function (e) {
          t("BTToast", e.BTToast);
        },
        function (e) {
          t("BTToastPopup", e.BTToastPopup);
        },
        function (e) {
          t("BTWaiting", e.BTWaiting);
        },
        function (e) {
          t("BTPopupManager", e.BTPopupManager);
        },
        function (e) {
          t("BTLobby", e.BTLobby);
        },
        function (e) {
          t("BTRoomItem", e.BTRoomItem);
        },
        function (e) {
          t("BTRoomList", e.BTRoomList);
        },
        function (e) {
          t("BTSettingButton", e.BTSettingButton);
        },
        function (e) {
          t("getLanguageFromParam", e.getLanguageFromParam);
        },
        function (e) {
          t("BTLanguageLabel", e.BTLanguageLabel);
        },
        function (e) {
          t("BTLocalizationResources", e.BTLocalizationResources);
        },
        function (e) {
          t("LanguageKey", e.LanguageKey);
        },
        function (e) {
          t("SOUND_MODE", e.SOUND_MODE);
        },
        function (e) {
          t("BTLanguage", e.BTLanguage);
        },
        function (e) {
          t("CHIP_VALUE", e.CHIP_VALUE);
        },
        function (e) {
          t("BTEventCode", e.BTEventCode);
        },
        function (e) {
          var n = {};
          (n.BTGameState = e.BTGameState),
            (n.MAP_LANGUAGE_BY_TYPE = e.MAP_LANGUAGE_BY_TYPE),
            t(n);
        },
        function (e) {
          t("BTGameStateTable", e.BTGameStateTable);
        },
        function (e) {
          t("BettingGate", e.BettingGate);
        },
        function (e) {
          t("BTBonusGameState", e.BTBonusGameState);
        },
        function (e) {
          t("BTGameStateEvent", e.BTGameStateEvent);
        },
        function (e) {
          t("BTLoadingScene", e.BTLoadingScene);
        },
        function (e) {
          t("BTLoadingSceneBundle", e.BTLoadingSceneBundle);
        },
        function (e) {
          t("BTStateAction", e.BTStateAction);
        },
        function (e) {
          t("State", e.State);
        },
        function (e) {
          t("StateMachine", e.StateMachine);
        },
        function (e) {
          t("BTRestAPI", e.BTRestAPI);
        },
      ],
      execute: function () {
        t("checkItemInMask", function (t, e, i) {
          void 0 === i && (i = !0);
          var T = e.getComponent(n),
            a = T.anchorPoint,
            B = e.getWorldPosition(),
            s = !1;
          if (i) {
            var r = B.y + T.height * (1 - a.y),
              u = B.y - T.height * a.y;
            s = t.isHit(o(B.x, r)) || t.isHit(o(B.x, u));
          } else {
            var c = B.x + T.width * (1 - a.x),
              p = B.x - T.width * a.x;
            s = t.isHit(o(c, B.y)) || t.isHit(o(p, B.y));
          }
          return s;
        }),
          e._RF.push({}, "df477BTlxhLHayx6QUo6j40", "Declaration3986", void 0),
          e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DialogMessage3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTDialogMessage.ts",
  ],
  function (e) {
    "use strict";
    var s, t, o, a;
    return {
      setters: [
        function (e) {
          s = e.inheritsLoose;
        },
        function (e) {
          (t = e.cclegacy), (o = e._decorator);
        },
        null,
        function (e) {
          a = e.BTDialogMessage;
        },
      ],
      execute: function () {
        var i;
        t._RF.push({}, "5854dokVh5AiJD5KaQ5oADF", "DialogMessage3986", void 0);
        var n = o,
          r = n.ccclass;
        n.property,
          e(
            "DialogMessage3986",
            r("DialogMessage3986")(
              (i = (function (e) {
                function t() {
                  return e.apply(this, arguments) || this;
                }
                return s(t, e), t;
              })(a))
            ) || i
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DialogNetworkIdle3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTDialogNetworkIdle.ts",
  ],
  function (e) {
    "use strict";
    var t, o, r, l;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (o = e.cclegacy), (r = e._decorator);
        },
        null,
        function (e) {
          l = e.BTDialogNetworkIdle;
        },
      ],
      execute: function () {
        var i;
        o._RF.push(
          {},
          "1c98dFKaI5MkZ6/7IgLzh1s",
          "DialogNetworkIdle3986",
          void 0
        );
        var n = r.ccclass;
        e(
          "DialogNetworkIdle3986",
          n("DialogNetworkIdle3986")(
            (i = (function (e) {
              function o() {
                return e.apply(this, arguments) || this;
              }
              return t(o, e), o;
            })(l))
          ) || i
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiceShaker3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./EventCode3986.ts",
    "./SoundManager3986.ts",
    "./BTSubscriber.ts",
    "./BTCommons.ts",
  ],
  function (e) {
    "use strict";
    var i,
      t,
      s,
      n,
      a,
      o,
      r,
      c,
      l,
      u,
      h,
      p,
      D,
      f,
      d,
      g,
      S,
      m,
      y,
      C,
      E,
      b,
      A,
      v,
      _;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (s = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (o = e.Node),
            (r = e.SpriteFrame),
            (c = e._decorator),
            (l = e.Sprite),
            (u = e.sys),
            (h = e.v3),
            (p = e.sp),
            (D = e.log),
            (f = e.Tween),
            (d = e.warn),
            (g = e.Label),
            (S = e.tween),
            (m = e.ParticleSystem2D),
            (y = e.UIOpacity),
            (C = e.Vec3),
            (E = e.UITransform);
        },
        null,
        function (e) {
          b = e.default;
        },
        function (e) {
          A = e.SoundManager3986;
        },
        function (e) {
          v = e.BTSubscriber;
        },
        function (e) {
          _ = e.defineOpacity;
        },
      ],
      execute: function () {
        var R,
          P,
          I,
          k,
          L,
          T,
          w,
          O,
          z,
          N,
          B,
          M,
          H,
          F,
          x,
          U,
          q,
          G,
          K,
          X,
          V,
          W,
          Y,
          j,
          Q,
          J,
          Z,
          $,
          ee,
          ie,
          te;
        a._RF.push({}, "b6954SSQ69LLLwXfDbRPSlU", "DiceShaker3986", void 0);
        var se = c,
          ne = se.ccclass,
          ae = se.property;
        e(
          "DiceShaker3986",
          ((R = ne("DiceShaker3986")),
          (P = ae({ displayName: "Dice default", type: o })),
          (I = ae({ displayName: "Dice list", type: o })),
          (k = ae({ displayName: "Shaker Particle", type: o })),
          (L = ae({ displayName: "spDice ground", type: o })),
          (T = ae({ displayName: "spDice cup", type: o })),
          (w = ae({ displayName: "spDice shaker", type: o })),
          (O = ae({ displayName: "Dices sprite frame normal", type: r })),
          (z = ae({ displayName: "Dices sprite frame mobile", type: r })),
          (N = ae({ displayName: "Stand Frames", type: r })),
          (B = ae({ displayName: "Result layer", type: o })),
          (M = ae({ displayName: "Result Bg", type: o })),
          (H = ae({ displayName: "Result text", type: o })),
          (F = ae({ displayName: "Temp Box Sicbo", type: o })),
          (x = ae({ displayName: "Light effect", type: o })),
          R(
            ((G = i(
              (q = (function (e) {
                function i() {
                  for (
                    var i, t = arguments.length, a = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (i = e.call.apply(e, [this].concat(a)) || this),
                    s(i, "diceDefault", G, n(i)),
                    s(i, "diceList", K, n(i)),
                    s(i, "shakerParticle", X, n(i)),
                    s(i, "spDiceGround", V, n(i)),
                    s(i, "spDiceCup", W, n(i)),
                    s(i, "spDiceShaker", Y, n(i)),
                    s(i, "dicesSpriteFrameNormal", j, n(i)),
                    s(i, "dicesSpriteFrameMobile", Q, n(i)),
                    s(i, "standFrames", J, n(i)),
                    s(i, "resultLayer", Z, n(i)),
                    s(i, "resultBg", $, n(i)),
                    s(i, "resultText", ee, n(i)),
                    s(i, "tempBoxSicbo", ie, n(i)),
                    s(i, "lightEffect", te, n(i)),
                    (i.isPlayedGlowEffect = !1),
                    (i.canSqueeze = !1),
                    (i.gameResult = null),
                    (i.dicesSpriteFrame = void 0),
                    (i.animDiceCup = void 0),
                    (i.animDiceShaker = void 0),
                    (i.diceDefaultPos = void 0),
                    (i.diceCupOriginPos = void 0),
                    i
                  );
                }
                t(i, e);
                var a = i.prototype;
                return (
                  (a.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      this._initProps(),
                      this._bindProps(),
                      (this.spDiceGround.getComponent(l).spriteFrame =
                        u.isMobile ? this.standFrames[1] : this.standFrames[0]),
                      (this.dicesSpriteFrame = u.isMobile
                        ? this.dicesSpriteFrameMobile
                        : this.dicesSpriteFrameNormal);
                  }),
                  (a._initProps = function () {
                    (this.diceDefaultPos = this.diceDefault.getPosition()),
                      (this.diceCupOriginPos = h(
                        this.spDiceCup.getPosition().x,
                        this.spDiceCup.getPosition().y,
                        0
                      )),
                      (this.animDiceCup = this.spDiceCup.getComponent(
                        p.Skeleton
                      )),
                      (this.canSqueeze = !1),
                      (this.isPlayedGlowEffect = !1),
                      (this.tempBoxSicbo.active = !1);
                  }),
                  (a._bindProps = function () {
                    var e = this.node;
                    (e.showDiceShaker = this.showDiceShaker.bind(this)),
                      (e.hideDiceShaker = this.hideDiceShaker.bind(this)),
                      (e.showDiceResult = this.showDiceResult.bind(this)),
                      (e.hideDiceResult = this.hideDiceResult.bind(this)),
                      (e.updateDiceResult = this.updateDiceResult.bind(this)),
                      (e.playAnimShaker = this.playAnimShaker.bind(this)),
                      (e.playAnimDiceCupOpen =
                        this.playAnimDiceCupOpen.bind(this)),
                      (e.playAnimShowDiceResult =
                        this.playAnimShowDiceResult.bind(this)),
                      (e.runShakerGlowEffect =
                        this.runShakerGlowEffect.bind(this)),
                      (e.runAnimResultLayer =
                        this.runAnimResultLayer.bind(this)),
                      (e.resetUI = this.resetUI.bind(this)),
                      (e.runAnimCupSqueeze = this.runAnimCupSqueeze.bind(this)),
                      (e.setEnableSqueeze = this.setEnableSqueeze.bind(this));
                  }),
                  (a.setEnableSqueeze = function (e) {
                    (this.canSqueeze = e),
                      e && this.getDataStore().getSqueeze()
                        ? (this.spDiceCup.on(
                            o.EventType.TOUCH_MOVE,
                            this.onDragDiceCup,
                            this
                          ),
                          this.spDiceCup.on(
                            o.EventType.TOUCH_START,
                            this.onStartSqueeze,
                            this
                          ))
                        : (this.spDiceCup.off(
                            o.EventType.TOUCH_MOVE,
                            this.onDragDiceCup,
                            this
                          ),
                          this.spDiceCup.off(
                            o.EventType.TOUCH_START,
                            this.onStartSqueeze,
                            this
                          ));
                  }),
                  (a.hideDiceShaker = function (e) {
                    D("======> DiceShaker hideDiceShaker"),
                      f.stopAllByTarget(this.node),
                      (this.spDiceGround.active = !1),
                      (this.spDiceCup.active = !1),
                      (this.tempBoxSicbo.active = !1);
                  }),
                  (a.showDiceShaker = function (e) {
                    D("======> DiceShaker showDiceShaker"),
                      f.stopAllByTarget(this.node),
                      (this.spDiceGround.active = !0),
                      u.isMobile
                        ? ((this.spDiceCup.active = !1),
                          (this.tempBoxSicbo.active = !0))
                        : (this.spDiceCup.active = !0);
                  }),
                  (a.updateDiceResult = function (e) {
                    if ((D("======> DiceShaker updateDiceResult"), e)) {
                      d("updateDiceResult", e);
                      for (
                        var i = e.dices, t = e.score, s = e.type, n = 0;
                        n < i.length;
                        n++
                      ) {
                        var a =
                            this.dicesSpriteFrame[
                              this.gameConfig.DICE_SHAKER.MAP_DICE_SPRITE_INDEX[
                                i[n]
                              ]
                            ],
                          o = this.diceList[n];
                        (o.active = !0), (o.getComponent(l).spriteFrame = a);
                      }
                      var r = t + " - " + this.gameConfig.TYPE_RESULT[s];
                      (this.gameResult = s),
                        this.resultText &&
                          (this.resultText.getComponent(g).string =
                            String(r).toUpperCase());
                    }
                  }),
                  (a.showDiceResult = function (e) {
                    var i = this;
                    void 0 === e && (e = !0),
                      D("======> DiceShaker showDiceResult"),
                      f.stopAllByTarget(this.node),
                      (this.tempBoxSicbo.active = !1);
                    var t = this.gameConfig.DICE_SHAKER.SHOW_RESULT_DURATION,
                      s = this.gameConfig.DICE_SHAKER.MAX_SCALE,
                      n = this.gameConfig.DICE_SHAKER.MIDDLE_SCALE,
                      a = this.gameConfig.DICE_SHAKER.MIDDLE_POS,
                      o = this.gameConfig.DICE_SHAKER.CENTER_POS;
                    (this.spDiceCup.active = !0),
                      e
                        ? S(this.node)
                            .to(
                              0.5 * t,
                              { position: a, scale: n },
                              { easing: "sineInOut" }
                            )
                            .to(
                              0.5 * t,
                              { position: o, scale: s },
                              { easing: "sineInOut" }
                            )
                            .call(function () {
                              i.node.setScale(s), i.node.setPosition(o);
                            })
                            .start()
                        : (this.node.setScale(s), this.node.setPosition(o));
                  }),
                  (a.hideDiceResult = function (e) {
                    var i = this;
                    void 0 === e && (e = !0),
                      D("======> DiceShaker hideDiceResult"),
                      (this.tempBoxSicbo.active = !1),
                      f.stopAllByTarget(this.node),
                      this._showAllDices(),
                      this.shakerParticle.getComponent(m).stopSystem(),
                      (this.shakerParticle.active = !1),
                      (this.lightEffect.active = !1),
                      (this.resultLayer.active = !1);
                    var t = this.gameConfig.DICE_SHAKER.HIDE_RESULT_DURATION,
                      s = this.gameConfig.DICE_SHAKER.MIN_SCALE,
                      n = this.gameConfig.DICE_SHAKER.MIDDLE_SCALE,
                      a = this.gameConfig.DICE_SHAKER.MIDDLE_POS,
                      o = this.diceDefaultPos;
                    (this.spDiceCup.active = !1),
                      e
                        ? S(this.node)
                            .to(
                              0.5 * t,
                              { position: a, scale: n },
                              { easing: "sineInOut" }
                            )
                            .to(
                              0.5 * t,
                              { position: o, scale: s },
                              { easing: "sineInOut" }
                            )
                            .call(function () {
                              i.node.setScale(s), i.node.setPosition(o);
                            })
                            .start()
                        : (this.node.setScale(s), this.node.setPosition(o));
                  }),
                  (a.playAnimShaker = function (e) {
                    D("======> DiceShaker playAnimShaker"),
                      (this.spDiceGround.active = !1),
                      (this.spDiceCup.active = !1),
                      (this.spDiceShaker.active = !0),
                      f.stopAllByTarget(this.node),
                      this.animDiceShaker &&
                        (this.animDiceShaker.setAnimation(
                          0,
                          this.getConfig().DICE_SHAKER.ANIM_NAME_SHAKED,
                          !1
                        ),
                        S(this.node)
                          .delay(0.1)
                          .call(function () {
                            var e;
                            null == (e = A.getInstance()) ||
                              e.shakerSound(!0, !0);
                          })
                          .start());
                  }),
                  (a.playAnimDiceCupOpen = function (e) {
                    void 0 === e && (e = !0),
                      D("======> DiceShaker playAnimDiceCupOpen"),
                      this._showAllDices(),
                      e
                        ? ((this.spDiceCup.active = !0),
                          this.animDiceCup &&
                            this.animDiceCup.setAnimation(
                              0,
                              this.gameConfig.DICE_SHAKER.ANIM_NAME_CUP_OPEN,
                              !1
                            ))
                        : (this.spDiceCup.active = !1);
                  }),
                  (a.playAnimDiceCupIdle = function () {
                    D("======> DiceShaker playAnimDiceCupIdle"),
                      this._hideAllDices(),
                      this.animDiceCup &&
                        this.animDiceCup.setAnimation(
                          0,
                          this.gameConfig.DICE_SHAKER.ANIM_NAME_IDLE,
                          !1
                        );
                  }),
                  (a.playAnimShowDiceResult = function (e) {
                    void 0 === e && (e = !0),
                      D("======> DiceShaker playAnimShowDiceResult"),
                      this._showAllDices(),
                      (this.spDiceCup.active = !1),
                      (this.spDiceCup.active = !!e);
                  }),
                  (a.runShakerGlowEffect = function (e) {
                    var i = this;
                    void 0 === e && (e = !0),
                      D("======> DiceShaker runShakerGlowEffect");
                    var t,
                      s = {};
                    ((s.zoomIn = { scale: h(1.25, 1.25, 1.25) }),
                    (s.zoomOut = { scale: h(0, 0, 0) }),
                    e && !this.isPlayedGlowEffect) &&
                      ((this.isPlayedGlowEffect = !0),
                      null == (t = A.getInstance()) || t.openBox(!0),
                      (this.lightEffect.active = !0),
                      this.lightEffect.setScale(h(0, 0, 0)),
                      f.stopAllByTarget(this.lightEffect),
                      S(this.lightEffect)
                        .delay(0.25)
                        .to(0.15, s.zoomIn)
                        .delay(0.9)
                        .to(0.15, s.zoomOut)
                        .start(),
                      (this.shakerParticle.active = !0),
                      f.stopAllByTarget(this.shakerParticle),
                      S(this.shakerParticle)
                        .delay(0.5)
                        .call(function () {
                          i.shakerParticle.getComponent(m).resetSystem();
                        })
                        .start());
                  }),
                  (a.update = function (e) {
                    this.lightEffect &&
                      this.lightEffect.active &&
                      (this.lightEffect.angle += 200 * e);
                  }),
                  (a.runAnimResultLayer = function (e) {
                    var i = this;
                    if (
                      (void 0 === e && (e = !0),
                      D("======> DiceShaker runAnimResultLayer"),
                      this.resultLayer)
                    )
                      if ((f.stopAllByTarget(this.resultLayer), e)) {
                        this.resultLayer.setScale(h(2, 2, 2)),
                          (this.resultLayer.getComponent(y).opacity = 0),
                          (this.resultLayer.active = !0);
                        var t,
                          s =
                            this.gameConfig.DICE_SHAKER
                              .RESULT_LAYER_ANIM_DURATION;
                        if (this.gameDataStore.isEnableDealerVoice())
                          if (this.gameResult && 3 == this.gameResult)
                            null == (t = A.getInstance()) || t.resultBig(!0);
                          else if (this.gameResult && 4 == this.gameResult) {
                            var n;
                            null == (n = A.getInstance()) || n.resultSmall(!0);
                          }
                        _(this.resultLayer),
                          S(this.resultLayer)
                            .to(s, { scale: h(1, 1, 1) }, { easing: "backOut" })
                            .call(function () {
                              i.resultLayer.setScale(h(1, 1, 1));
                            })
                            .start(),
                          S(this.resultLayer.getComponent(y))
                            .to(s, { opacity: 255 }, { easing: "backOut" })
                            .call(function () {
                              i.resultLayer.getComponent(y).opacity = 255;
                            })
                            .start();
                      } else
                        this.resultLayer.setScale(h(1, 1, 1)),
                          (this.resultLayer.getComponent(y).opacity = 255);
                  }),
                  (a.onDragDiceCup = function (e) {
                    if (this.canSqueeze) {
                      var i = e.getDelta(),
                        t = this.spDiceCup.getPosition().x,
                        s = this.spDiceCup.getPosition().y;
                      (t += i.x),
                        (s += i.y),
                        this.spDiceCup.setPosition(h(t, s)),
                        C.distance(
                          this.diceCupOriginPos,
                          this.spDiceCup.getPosition()
                        ) >= this.spDiceCup.getComponent(E).width &&
                          this.onStopSqueeze();
                    }
                  }),
                  (a.onStartSqueeze = function () {
                    this.canSqueeze && f.stopAllByTarget(this.spDiceCup);
                  }),
                  (a.runAnimCupSqueeze = function () {
                    f.stopAllByTarget(this.spDiceCup),
                      S(this.spDiceCup)
                        .to(
                          0.5,
                          {
                            position: h(
                              this.diceCupOriginPos.x,
                              this.diceCupOriginPos.y + 30
                            ),
                          },
                          { easing: "sineInOut" }
                        )
                        .to(
                          0.5,
                          {
                            position: h(
                              this.diceCupOriginPos.x,
                              this.diceCupOriginPos.y
                            ),
                          },
                          { easing: "sineInOut" }
                        )
                        .union()
                        .repeatForever()
                        .start();
                  }),
                  (a.onStopSqueeze = function () {
                    f.stopAllByTarget(this.node),
                      f.stopAllByTarget(this.spDiceCup),
                      this.spDiceCup.setPosition(this.diceCupOriginPos),
                      this.fireEvent(b.FORCE_SHOW_GAME_RESULT);
                  }),
                  (a._soundEffect = function (e) {
                    var i, t, s;
                    switch ((void 0 === e && (e = null), Number(e))) {
                      case 3:
                        null == (i = A.getInstance()) || i.bigSFX(!0);
                        break;
                      case 4:
                        null == (t = A.getInstance()) || t.smallSFX(!0);
                        break;
                      default:
                        null == (s = A.getInstance()) || s.openBox(!0);
                    }
                  }),
                  (a.resetUI = function () {
                    f.stopAllByTarget(this.node),
                      this._hideAllDices(),
                      this.playAnimDiceCupIdle(),
                      (this.spDiceCup.active = !0),
                      this.node.setScale(this.gameConfig.DICE_SHAKER.MIN_SCALE),
                      this.node.setPosition(this.diceDefaultPos),
                      (this.isPlayedGlowEffect = !1),
                      this.shakerParticle.getComponent(m).stopSystem(),
                      (this.shakerParticle.active = !1),
                      f.stopAllByTarget(this.lightEffect),
                      (this.lightEffect.active = !1),
                      (this.resultLayer.active = !1),
                      f.stopAllByTarget(this.spDiceCup),
                      this.spDiceCup.setPosition(this.diceCupOriginPos),
                      (this.gameResult = null);
                  }),
                  (a._hideAllDices = function () {
                    this.diceList.forEach(function (e) {
                      e.active = !1;
                    });
                  }),
                  (a._showAllDices = function () {
                    this.diceList.forEach(function (e) {
                      e.active = !0;
                    });
                  }),
                  i
                );
              })(v)).prototype,
              "diceDefault",
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
            (K = i(q.prototype, "diceList", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (X = i(q.prototype, "shakerParticle", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = i(q.prototype, "spDiceGround", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = i(q.prototype, "spDiceCup", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = i(q.prototype, "spDiceShaker", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = i(q.prototype, "dicesSpriteFrameNormal", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Q = i(q.prototype, "dicesSpriteFrameMobile", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (J = i(q.prototype, "standFrames", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Z = i(q.prototype, "resultLayer", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = i(q.prototype, "resultBg", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ee = i(q.prototype, "resultText", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ie = i(q.prototype, "tempBoxSicbo", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (te = i(q.prototype, "lightEffect", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = q))
          ) || U)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Director3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameState3986.ts",
    "./Declaration3986.ts",
    "./BTGameStateEvent.ts",
    "./BTEventCode.ts",
    "./gameCommonUtils.ts",
    "./BTDirector.ts",
  ],
  function (t) {
    "use strict";
    var e, n, o, i, r, a, s, c, u;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (o = t._decorator), (i = t.log);
        },
        function (t) {
          r = t.GameState3986;
        },
        null,
        function (t) {
          a = t.BTGameStateEvent;
        },
        function (t) {
          s = t.BTEventCode;
        },
        function (t) {
          c = t.default;
        },
        function (t) {
          u = t.BTDirector;
        },
      ],
      execute: function () {
        var f;
        n._RF.push({}, "a9a88B6LbNIwqDvujKVOQnw", "Director3986", void 0);
        var l = o.ccclass;
        t(
          "Director3986",
          l("Director3986")(
            (f = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              e(n, t);
              var o = n.prototype;
              return (
                (o.onLoad = function () {
                  t.prototype.onLoad.call(this);
                }),
                (o.start = function () {
                  t.prototype.start.call(this);
                }),
                (o._init = function () {
                  t.prototype._init.call(this),
                    this.getDataStore().setNoLobbyMode(!0);
                }),
                (o.defineGameState = function (t) {
                  var e = t.gameData;
                  return new r({ gameData: e });
                }),
                (o.update = function (e) {
                  t.prototype.update.call(this, e);
                }),
                (o.onLoginSuccess = function () {
                  var e = this;
                  t.prototype.onLoginSuccess.call(this),
                    this.gameStateManager.registerEvent(
                      a.ANIM_EVENT,
                      function (t) {
                        var n = e.game;
                        n.renderAnimEvent && n.renderAnimEvent(t);
                      }
                    );
                }),
                (o.showNetworkDie = function () {
                  var t = this;
                  i("===showNetworkDie===", "background: #222; color: #ff0000"),
                    this.fireEvent(s.HIDE_NETWORK_IDLE_DIALOG);
                  var e = function () {
                    t.handleFlowOutGame(), t.fireEvent(s.SHOW_WAITING, 0.5);
                  };
                  c.checkConditionCloseGameIframe() || (e = null),
                    this.fireEvent(s.SHOW_DIALOG_MSG, {
                      dialogId:
                        this.getConfig().DIALOG_ID.DIALOG_LOST_CONNECTION,
                      message: this.getConfig().MESSAGE.NETWORK_PROBLEM,
                      cancelCb: e,
                      textConfirm: "Đóng",
                    });
                }),
                (o._setupVersion = function () {
                  if (this.version) {
                    var t =
                      this.getConfig().GAME_VERSION +
                      "." +
                      this.getConfig().CODE_VERSION;
                    this.version.string =
                      "(c" + this.getConfig().ENGINE_VERSION + ")" + t;
                  }
                }),
                n
              );
            })(u))
          ) || f
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EndBettingState3986.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./State3986.ts"],
  function (t) {
    "use strict";
    var e, a, i, n;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (a = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          n = t.State3986;
        },
      ],
      execute: function () {
        var s;
        a._RF.push(
          {},
          "f7facPFOJZOLaI23rT/lpPy",
          "EndBettingState3986",
          void 0
        );
        var o = i,
          r = o.ccclass;
        o.property,
          t(
            "EndBettingState3986",
            r("EndBettingState3986")(
              (s = (function (t) {
                function a() {
                  return t.apply(this, arguments) || this;
                }
                e(a, t);
                var i = a.prototype;
                return (
                  (i.onEnterState = function () {
                    t.prototype.onEnterState.call(this);
                    var e = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE;
                    this.gameDataStore.getDataByKey(e) ==
                    this.gameConfig.TABLE_MODE.NORMAL
                      ? this.getStateMachine().bettingBoxes.setDisableAllBets(
                          !0
                        )
                      : this.getStateMachine().bettingBoxesTopView.setDisableAllBets(
                          !0
                        ),
                      (this.getStateMachine().btnReBet.interactable = !1),
                      (this.getStateMachine().btnDoubleBet.interactable = !1),
                      this.getStateMachine().dealer &&
                        (this.getStateMachine().dealer.ON_EMITER.reset(),
                        this.getStateMachine().dealer.ON_EMITER.playAnimStopBetting());
                  }),
                  (i.onExitState = function () {
                    t.prototype.onExitState.call(this),
                      this.getStateMachine().rollBackChips(),
                      this.getDataStore().setEnableSqueeze(!1);
                  }),
                  a
                );
              })(n))
            ) || s
          );
        a._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/EventCode3986.ts", ["cc"], function (e) {
  "use strict";
  var t;
  return {
    setters: [
      function (e) {
        t = e.cclegacy;
      },
    ],
    execute: function () {
      t._RF.push({}, "be0a9SoLcRLWKO5q6WSdrcw", "EventCode3986", void 0);
      e("default", {
        FORCE_SHOW_GAME_RESULT: "FORCE_SHOW_GAME_RESULT",
        SHOW_SQUEEZE_HINT: "SHOW_SQUEEZE_HINT",
      });
      t._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/ExtendUserItem3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./Avatar3986.ts",
    "./BTExtendUserItem.ts",
  ],
  function (t) {
    "use strict";
    var e, r, n, a, i, o, c, s, l;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (r = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (i = t.cclegacy), (o = t.Node), (c = t._decorator);
        },
        null,
        function (t) {
          s = t.Avatar3986;
        },
        function (t) {
          l = t.BTExtendUserItem;
        },
      ],
      execute: function () {
        var u, p, d, f, v, m, y;
        i._RF.push({}, "f7c415197BPBIq2RBrO9D9d", "ExtendUserItem3986", void 0);
        var h = c,
          b = h.ccclass,
          I = h.property;
        t(
          "ExtendUserItem3986",
          ((u = b("ExtendUserItem3986")),
          (p = I({ type: o })),
          (d = I({ type: o })),
          u(
            ((m = e(
              (v = (function (t) {
                function e() {
                  for (
                    var e, r = arguments.length, i = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(i)) || this),
                    n(e, "avatar", m, a(e)),
                    n(e, "mainNode", y, a(e)),
                    e
                  );
                }
                r(e, t);
                var i = e.prototype;
                return (
                  (i._loadAvatar = function (t) {
                    this.avatar
                      .getComponent(s)
                      .updateAvatar(t, this.avaDefault);
                  }),
                  (i.visibleMainNode = function (t) {
                    this.mainNode.active = t;
                  }),
                  e
                );
              })(l)).prototype,
              "avatar",
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
            (y = e(v.prototype, "mainNode", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = v))
          ) || f)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FinishState3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./SoundManager3986.ts",
    "./State3986.ts",
    "./BTStateAction.ts",
    "./BTPlayerManager.ts",
    "./BTEventCode.ts",
  ],
  function (t) {
    "use strict";
    var e, n, a, i, o, r, s, h, c, l, u, g, S;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy),
            (a = t._decorator),
            (i = t.Node),
            (o = t.Tween),
            (r = t.warn),
            (s = t.log),
            (h = t.tween);
        },
        null,
        function (t) {
          c = t.SoundManager3986;
        },
        function (t) {
          l = t.State3986;
        },
        function (t) {
          u = t.BTStateAction;
        },
        function (t) {
          g = t.BTPlayerManager;
        },
        function (t) {
          S = t.BTEventCode;
        },
      ],
      execute: function () {
        var T;
        n._RF.push({}, "987b6OuhuxL5I+U7DgHrtTs", "FinishState3986", void 0);
        var A = a.ccclass;
        t(
          "FinishState3986",
          A("FinishState3986")(
            (T = (function (t) {
              function n() {
                for (
                  var e, n = arguments.length, a = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  a[i] = arguments[i];
                return (
                  ((e = t.call.apply(t, [this].concat(a)) || this).delayNode =
                    void 0),
                  e
                );
              }
              e(n, t);
              var a = n.prototype;
              return (
                (a.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    (this.delayNode = new i()),
                    (this.delayNode.parent = this.node),
                    this.node.on(
                      "_showWinnerResults",
                      this.showWinnerResults,
                      this
                    ),
                    this.node.on(
                      "_showPlayerWinBetBoxes",
                      this.showPlayerWinBetBoxes,
                      this
                    );
                }),
                (a.onEnterState = function () {
                  t.prototype.onEnterState.call(this),
                    this.getStateMachine().dealer &&
                      this.getStateMachine().dealer.ON_EMITER.setCanPlayIdleAnim(
                        !0
                      ),
                    (this.getStateMachine().getDataStore().globalData.SHOULD_UPDATE_WALLET =
                      !1),
                    (this.getStateMachine().getDataStore().globalData.SHOULD_UPDATE_OTHERS_WALLET =
                      !1);
                }),
                (a.onExitState = function () {
                  t.prototype.onExitState.call(this),
                    o.stopAllByTarget(this.delayNode),
                    this.getStateMachine().dealer &&
                      this.getStateMachine().dealer.ON_EMITER.setCanPlayIdleAnim(
                        !1
                      ),
                    (this.getStateMachine().getDataStore().globalData.SHOULD_UPDATE_WALLET =
                      !0),
                    (this.getStateMachine().getDataStore().globalData.SHOULD_UPDATE_OTHERS_WALLET =
                      !0),
                    this.getStateMachine().clearUI();
                }),
                (a.showWinnerResults = function (t) {
                  var e = t.brs,
                    n = t.tbrs,
                    a = t.gateWins,
                    i = t.wonWins,
                    o = t.prd,
                    s = t.tieInfos;
                  if (this.isRunning()) {
                    if (this.gameDataStore.getSqueeze()) return;
                    r("_showWinnerResults", e, n, a, i, o);
                    var h = [],
                      c = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE,
                      l = this.gameDataStore.getDataByKey(c);
                    h.push(this.createActionReturnChipToDealer(a, s, l)),
                      h.push(this.createActionReturnWinChipToBetBox(n, l)),
                      h.push(
                        this.createActionReturnWinChipToPlayerFromWinBox(o, l)
                      ),
                      h.push(this.createActionShowPlayerWonAmount(i, l)),
                      this.runStateActions(h, "show_result");
                  }
                }),
                (a.createActionReturnChipToDealer = function (t, e, n) {
                  var a = this;
                  return new u()
                    .onStartAction(function () {
                      s("==>> createActionReturnChipToDealer", t, e);
                      var i = a.getStateMachine().chipManager;
                      n == a.gameConfig.TABLE_MODE.TOPVIEW &&
                        (i = a.getStateMachine().chipManagerTopView),
                        i.returnLoseChipsToDealer(0.7, t, function () {}),
                        e &&
                          e.forEach(function (t) {
                            var e = t.betId,
                              n = t.refundAmount,
                              a = t.loseAmount;
                            i.returnChipsToDealerFromTieBox(
                              0.7,
                              e,
                              100 * a,
                              100 * n
                            );
                          });
                    })
                    .onDuration(1.2);
                }),
                (a.createActionReturnWinChipToBetBox = function (t, e) {
                  var n = this;
                  return new u()
                    .onStartAction(function () {
                      var a = n.getStateMachine().chipManager;
                      if (
                        (e == n.gameConfig.TABLE_MODE.TOPVIEW &&
                          (a = n.getStateMachine().chipManagerTopView),
                        a.clearAllLoseChipsOnTable(),
                        t)
                      )
                        for (var i = t.split(","), o = 0; o < i.length; o++) {
                          var r = i[o].split(":");
                          a.returnWinChipsToBettingBox(0.5, 100 * r[1], r[0]);
                        }
                    })
                    .onDuration(2);
                }),
                (a.createActionReturnWinChipToPlayerFromWinBox = function (
                  t,
                  e
                ) {
                  var n = this;
                  return new u()
                    .onStartAction(function () {
                      var a = n.getStateMachine().chipManager;
                      if (
                        (e == n.gameConfig.TABLE_MODE.TOPVIEW &&
                          (a = n.getStateMachine().chipManagerTopView),
                        a.clearAllChipsOnTable(),
                        t)
                      )
                        for (var i = t.split(","), o = 0; o < i.length; o++) {
                          var r = i[o].split(":"),
                            s = r[0];
                          if (r[1])
                            for (
                              var h = r[1].split(";"), c = 0;
                              c < h.length;
                              c++
                            ) {
                              var l,
                                u = h[c].split("|"),
                                S = Number(u[0]),
                                T = 100 * Number(u[1]),
                                A =
                                  null == (l = g.getInstance())
                                    ? void 0
                                    : l.getPlayerByExternalID(s),
                                f = A ? A._indexS : n.getConfig().MAX_SEAT;
                              a.returnChipsToPlayerFromWinBox(0.7, S, T, f);
                            }
                        }
                    })
                    .onDuration(1);
                }),
                (a.createActionShowPlayerWonAmount = function (t, e) {
                  var n = this;
                  return new u()
                    .onStartAction(function () {
                      for (var e = 0; e < t.length; e++) {
                        var a = t[e],
                          i = a.player,
                          r = a.wonAmount,
                          s = a.tieAmount;
                        if (i && (r > 0 || s > 0)) {
                          var c;
                          r = s > 0 ? s : r;
                          var l = n.gameDataStore.isEnableDealerVoice();
                          1 === i.seat &&
                            n.getStateMachine().fireEvent(S.STOP_FAIL_ACTION),
                            o.stopAllByTarget(n.delayNode),
                            h(n.delayNode)
                              .delay(0.25)
                              .call(function () {
                                for (var e = 0; e < t.length; e++) {
                                  var a = t[e].player;
                                  a &&
                                    1 === a.seat &&
                                    (n.getDataStore().globalData.SHOULD_UPDATE_WALLET =
                                      !0);
                                }
                              })
                              .start(),
                            (n
                              .getStateMachine()
                              .getDataStore().globalData.SHOULD_UPDATE_OTHERS_WALLET =
                              !0),
                            null == (c = g.getInstance()) ||
                              c.showWonAmountFor(
                                { player: i, wonAmount: r },
                                l,
                                s > 0
                              );
                        }
                      }
                    })
                    .onFinishAction(function () {})
                    .onDuration(0.5);
                }),
                (a.showPlayerWinBetBoxes = function (t) {
                  var e = this,
                    n = t.brs,
                    a = t.arrGateTie;
                  this.getDataStore().getSqueeze() ||
                    (this.isRunning() &&
                      this.runStateActions(
                        [
                          new u()
                            .onStartAction(function () {
                              var t;
                              n.length > 0 &&
                                (null == (t = c.getInstance()) ||
                                  t.winBetSound(!0));
                              var i = e.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE;
                              e.gameDataStore.getDataByKey(i) ==
                              e.gameConfig.TABLE_MODE.NORMAL
                                ? (e
                                    .getStateMachine()
                                    .bettingBoxes.showEffUserBetWin(n),
                                  a.length > 0 &&
                                    e
                                      .getStateMachine()
                                      .bettingBoxes.showTieIcon(a))
                                : (e
                                    .getStateMachine()
                                    .bettingBoxesTopView.showEffUserBetWin(n),
                                  a.length > 0 &&
                                    e
                                      .getStateMachine()
                                      .bettingBoxesTopView.showTieIcon(a));
                            })
                            .onFinishAction(function () {})
                            .onDuration(1.5),
                        ],
                        "show_result"
                      ));
                }),
                n
              );
            })(l))
          ) || T
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GameDirector3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameWriter3986.ts",
    "./Declaration3986.ts",
    "./ChatPopup3986.ts",
    "./MD5_3986.ts",
    "./BTToast.ts",
    "./BTEventCode.ts",
    "./BTChipManager.ts",
    "./BTSoundManager.ts",
    "./BTGameDirector.ts",
    "./BTCommons.ts",
  ],
  function (t) {
    "use strict";
    var e,
      i,
      n,
      a,
      s,
      o,
      r,
      l,
      h,
      u,
      p,
      c,
      g,
      d,
      y,
      b,
      m,
      f,
      T,
      _,
      C,
      B,
      w,
      S,
      M,
      A,
      E,
      D;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized),
            (s = t.createClass);
        },
        function (t) {
          (o = t.cclegacy),
            (r = t.Node),
            (l = t.Button),
            (h = t._decorator),
            (u = t.Vec3),
            (p = t.macro),
            (c = t.v3),
            (g = t.UIOpacity),
            (d = t.view),
            (y = t.log),
            (b = t.Label),
            (m = t.warn),
            (f = t.ParticleSystem2D),
            (T = t.UITransform);
        },
        function (t) {
          _ = t.GameWriter3986;
        },
        null,
        function (t) {
          C = t.ChatPopup3986;
        },
        function (t) {
          B = t.MD5_3986;
        },
        function (t) {
          w = t.BTToast;
        },
        function (t) {
          S = t.BTEventCode;
        },
        function (t) {
          M = t.BTChipManager;
        },
        function (t) {
          A = t.BTSoundManager;
        },
        function (t) {
          E = t.BTGameDirector;
        },
        function (t) {
          D = t.convertNumberToK;
        },
      ],
      execute: function () {
        var v,
          P,
          L,
          R,
          I,
          H,
          V,
          N,
          z,
          O,
          x,
          G,
          U,
          k,
          K,
          W,
          q,
          Z,
          Y,
          F,
          j,
          J,
          X,
          Q,
          $,
          tt,
          et,
          it,
          nt,
          at,
          st,
          ot,
          rt,
          lt,
          ht,
          ut,
          pt,
          ct,
          gt,
          dt,
          yt,
          bt,
          mt,
          ft,
          Tt,
          _t,
          Ct,
          Bt,
          wt,
          St,
          Mt,
          At,
          Et,
          Dt,
          vt,
          Pt,
          Lt,
          Rt,
          It,
          Ht,
          Vt,
          Nt,
          zt,
          Ot,
          xt;
        o._RF.push({}, "1bcf5M9aUVDfJNR8Kxe8a2H", "GameDirector3986", void 0);
        var Gt = h,
          Ut = Gt.ccclass,
          kt = Gt.property;
        t(
          "GameDirector3986",
          ((v = Ut("GameDirector3986")),
          (P = kt({ type: r })),
          (L = kt({ type: r })),
          (R = kt({ displayName: "Player Manager", type: r })),
          (I = kt({ displayName: "Dice shaker", type: r })),
          (H = kt({ displayName: "Chip Manager", type: r })),
          (V = kt({ displayName: "Chip Manager Top View", type: r })),
          (N = kt({ displayName: "Count down timer", type: r })),
          (z = kt(l)),
          (O = kt(l)),
          (x = kt({ displayName: "Table History", type: r })),
          (G = kt({ displayName: "Last Result Panel", type: r })),
          (U = kt({ displayName: "MatchID", type: r })),
          (k = kt({ displayName: "Total Bet", type: r })),
          (K = kt({ displayName: "Center", type: r })),
          (W = kt({ displayName: "btnChat", type: r })),
          (q = kt({ displayName: "popupChat", type: C })),
          (Z = kt({ displayName: "Squeeze holder", type: r })),
          (Y = kt({ displayName: "playerHolder", type: r })),
          (F = kt({ displayName: "bubbleHintSqueeze", type: r })),
          (j = kt({ displayName: "Popup List User", type: r })),
          (J = kt({ displayName: "Button setting", type: r })),
          (X = kt({ displayName: "Button analytic", type: r })),
          (Q = kt({ displayName: "Chat zone", type: r })),
          ($ = kt({ displayName: "List user zone", type: r })),
          (tt = kt({ type: r })),
          (et = kt({ type: r })),
          (it = kt({ type: r })),
          (nt = kt({ type: r })),
          (at = kt(w)),
          (st = kt({ type: r })),
          (ot = kt({ type: r })),
          v(
            ((ht = e(
              (lt = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    n(e, "bettingBoxes", ht, a(e)),
                    n(e, "bettingBoxesTopView", ut, a(e)),
                    n(e, "playerManager", pt, a(e)),
                    n(e, "diceShaker", ct, a(e)),
                    n(e, "chipManager", gt, a(e)),
                    n(e, "chipManagerTopView", dt, a(e)),
                    n(e, "countDown", yt, a(e)),
                    n(e, "btnReBet", bt, a(e)),
                    n(e, "btnDoubleBet", mt, a(e)),
                    n(e, "tableHistory", ft, a(e)),
                    n(e, "lastResultPanel", Tt, a(e)),
                    n(e, "matchID", _t, a(e)),
                    n(e, "totalBet", Ct, a(e)),
                    n(e, "center", Bt, a(e)),
                    n(e, "btnChat", wt, a(e)),
                    n(e, "popupChat", St, a(e)),
                    n(e, "squeezeHolder", Mt, a(e)),
                    n(e, "playerHolder", At, a(e)),
                    n(e, "bubbleHintSqueeze", Et, a(e)),
                    n(e, "popupListUser", Dt, a(e)),
                    n(e, "btnSetting", vt, a(e)),
                    n(e, "btnAnalytic", Pt, a(e)),
                    n(e, "chatZone", Lt, a(e)),
                    n(e, "listUserZone", Rt, a(e)),
                    n(e, "topViewBG", It, a(e)),
                    n(e, "normalViewBG", Ht, a(e)),
                    n(e, "transitionLayer", Vt, a(e)),
                    n(e, "dealer", Nt, a(e)),
                    n(e, "toast", zt, a(e)),
                    n(e, "chipsHolder", Ot, a(e)),
                    n(e, "md5Holder", xt, a(e)),
                    (e.showChat = null),
                    (e.originPosChat = new u()),
                    (e.originPosListUser = new u()),
                    (e.originPosSetting = new u()),
                    (e.originPosAnalytic = new u()),
                    (e.currGameWidth = void 0),
                    (e._lastMultiTouch = null),
                    (e._md5Cmp = null),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this._lastMultiTouch = p.ENABLE_MULTI_TOUCH),
                      (p.ENABLE_MULTI_TOUCH = !1),
                      this.writer.setMaxSeatInTable(this.getConfig().MAX_SEAT),
                      this.defineState(
                        "0",
                        this.node.getComponent("StartState3986")
                      ),
                      this.getStateMachine().defineState(
                        "1",
                        this.node.getComponent("BettingState3986")
                      ),
                      this.getStateMachine().defineState(
                        "2",
                        this.node.getComponent("EndBettingState3986")
                      ),
                      this.getStateMachine().defineState(
                        "3",
                        this.node.getComponent("ShowResultState3986")
                      ),
                      this.getStateMachine().defineState(
                        "4",
                        this.node.getComponent("FinishState3986")
                      ),
                      this.getStateMachine().defineState(
                        "squeezeState",
                        this.node.getComponent("SqueezeShowResultState3986")
                      ),
                      this.node.on("_setupTable", this._setupTable, this),
                      this.node.on("_resumeTable", this._resumeTable, this),
                      this.node.on("_destroyTable", this._destroyTable, this),
                      this.node.on("_addNewPlayers", this._addNewPlayers, this),
                      this.node.on(
                        "_removeLeftPlayers",
                        this._removeLeftPlayers,
                        this
                      ),
                      this.node.on(
                        "_updatePlayersOnTable",
                        this._updatePlayersOnTable,
                        this
                      ),
                      this.node.on(
                        "_refreshPlayersOnTable",
                        this._refreshPlayersOnTable,
                        this
                      ),
                      this.node.on(
                        "_arrangePlayerSeats",
                        this._arrangePlayerSeats,
                        this
                      ),
                      this.node.on(
                        "_refreshPlayerList",
                        this._refreshPlayerList,
                        this
                      ),
                      this.node.on(
                        "_updateTotalPlayer",
                        this._updateTotalPlayer,
                        this
                      ),
                      this.node.on(
                        "_showChatMessage",
                        this._showChatMessage,
                        this
                      ),
                      this.node.on("_showChatEmoji", this._showChatEmoji, this),
                      this.node.on(
                        "_clearPlayingSession",
                        this._clearPlayingSession,
                        this
                      ),
                      this.node.on(
                        "_changeGameState",
                        this._changeGameState,
                        this
                      ),
                      this.node.on(
                        "_updateTableHistory",
                        this._updateTableHistory,
                        this
                      ),
                      this.node.on(
                        "_showAllPlayerList",
                        this._showAllPlayerList,
                        this
                      ),
                      this.node.on(
                        "_updateAnalytis",
                        this._updateAnalytis,
                        this
                      ),
                      this.node.on("_updateHistory", this._updateHistory, this),
                      this.node.on(
                        "_updateLastResult",
                        this._updateLastResult,
                        this
                      ),
                      this.node.on(
                        "_callHistoryChat",
                        this._callHistoryChat,
                        this
                      ),
                      this.node.on(
                        "_updateLastResultPanel",
                        this._updateLastResultPanel,
                        this
                      ),
                      this.node.on(
                        "_showChatHistory",
                        this._showChatHistory,
                        this
                      ),
                      this.node.on(
                        "_showPlayerChatMessage",
                        this._showPlayerChatMessage,
                        this
                      ),
                      this.node.on(
                        "_updateDynamicGateRate",
                        this.updateDynamicGateRate,
                        this
                      ),
                      this.node.on(
                        "_updateDynamicMaxBet",
                        this.updateDynamicMaxBet,
                        this
                      ),
                      this.node.on(
                        "_updateMD5AndKey",
                        this._updateMD5AndKey,
                        this
                      );
                    var e = this.node;
                    (e.renderAllPlayerList =
                      this.renderAllPlayerList.bind(this)),
                      (e.resize = this.resize.bind(this)),
                      (e.renderJoinTable = this.renderJoinTable.bind(this)),
                      (e.renderResume = this.renderResume.bind(this)),
                      (e.renderGameState = this.renderGameState.bind(this)),
                      (e.renderSelfBetting = this.renderSelfBetting.bind(this)),
                      (e.renderOthersBetting =
                        this.renderOthersBetting.bind(this)),
                      (e.renderPlayerList = this.renderPlayerList.bind(this)),
                      (e.renderPlayerState = this.renderPlayerState.bind(this)),
                      (e.renderLeaveTable = this.renderLeaveTable.bind(this)),
                      (e.renderFailBetting = this.renderFailBetting.bind(this)),
                      (e.renderRegisterLeaveTable =
                        this.renderRegisterLeaveTable.bind(this)),
                      (e.renderChatMessage = this.renderChatMessage.bind(this)),
                      (e.renderChatsHistory =
                        this.renderChatsHistory.bind(this)),
                      (e.renderAnimEvent = this.renderAnimEvent.bind(this)),
                      (e.getTableData = this.getTableData.bind(this)),
                      (e.clearUI = this.clearUI.bind(this)),
                      (e.changeTableMode = this.changeTableMode.bind(this)),
                      this.registerEvent(
                        S.SHOW_PANEL_CHAT,
                        this._onShowHideChat.bind(this)
                      ),
                      this.writer.setLimitChat(
                        this.getConfig().LIMIT_CHAT_HISTORY
                      );
                    var i = this.getDataStore().getDataByKey("_toggleChat");
                    (this.showChat = 1 == i || null == i),
                      this._onShowHideChat(this.showChat),
                      this.bubbleHintSqueeze &&
                        (this.bubbleHintSqueeze.setScale(c(0, 0, 1)),
                        (this.bubbleHintSqueeze.isBusy = !1)),
                      (this.originPosChat = this.chatZone.getPosition()),
                      (this.originPosAnalytic = this.btnAnalytic.getPosition()),
                      (this.originPosListUser =
                        this.listUserZone.getPosition()),
                      (this.originPosSetting = this.btnSetting.getPosition()),
                      this._setTableViewUI();
                  }),
                  (o._setTableViewUI = function () {
                    var t = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE;
                    this.gameDataStore.getDataByKey(t) ==
                    this.gameConfig.TABLE_MODE.NORMAL
                      ? ((this.bettingBoxesTopView.getComponent(g).opacity = 0),
                        (this.chipManagerTopView.getComponent(g).opacity = 0),
                        (this.bettingBoxes.active = !0),
                        (this.chipManager.active = !0),
                        (this.bettingBoxes.getComponent(g).opacity = 255),
                        (this.chipManager.getComponent(g).opacity = 255),
                        this.topViewBG &&
                          (this.topViewBG.getComponent(g).opacity = 0),
                        this.normalViewBG &&
                          ((this.normalViewBG.active = !0),
                          (this.normalViewBG.getComponent(g).opacity = 255)))
                      : ((this.bettingBoxesTopView.active = !0),
                        (this.chipManagerTopView.active = !0),
                        (this.bettingBoxesTopView.getComponent(
                          g
                        ).opacity = 255),
                        (this.chipManagerTopView.getComponent(g).opacity = 255),
                        (this.bettingBoxes.getComponent(g).opacity = 0),
                        (this.chipManager.getComponent(g).opacity = 0),
                        this.normalViewBG &&
                          (this.normalViewBG.getComponent(g).opacity = 0),
                        this.topViewBG &&
                          ((this.topViewBG.active = !0),
                          (this.topViewBG.getComponent(g).opacity = 255)));
                  }),
                  (o.updateBtnPos = function () {
                    var t = d.getVisibleSize().width,
                      e = this.getConfig().GAME_CONTENT_SIZE.minWidth;
                    if (this.currGameWidth != t)
                      if (((this.currGameWidth = t), t > e)) {
                        var i = t - 1280;
                        i >= this.getConfig().DeltaPos &&
                          (i = this.getConfig().DeltaPos),
                          this.reRangeBtn(
                            this.btnSetting,
                            this.originPosSetting,
                            i
                          ),
                          this.reRangeBtn(
                            this.btnAnalytic,
                            this.originPosAnalytic,
                            i
                          ),
                          this.reRangeBtn(
                            this.listUserZone,
                            this.originPosListUser,
                            -i
                          ),
                          this.reRangeBtn(
                            this.chatZone,
                            this.originPosChat,
                            -i
                          );
                      } else
                        this.reRangeBtn(
                          this.btnSetting,
                          this.originPosSetting,
                          0
                        ),
                          this.reRangeBtn(
                            this.btnAnalytic,
                            this.originPosAnalytic,
                            0
                          ),
                          this.reRangeBtn(
                            this.listUserZone,
                            this.originPosListUser,
                            0
                          ),
                          this.reRangeBtn(this.chatZone, this.originPosChat, 0);
                  }),
                  (o.reRangeBtn = function (t, e, i) {
                    t.setPosition(c(e.x - i, e.y, e.z));
                  }),
                  (o.start = function () {
                    t.prototype.start.call(this),
                      this._onChangesTopViewMode(),
                      this.changeTableMode(!1);
                  }),
                  (o.update = function (e) {
                    t.prototype.update.call(this, e), this.updateBtnPos();
                  }),
                  (o.getTableData = function () {
                    return this.writer;
                  }),
                  (o.renderLeaveTable = function () {
                    this.writer &&
                      this.executeScripts(this.writer.makeScriptDestroyTable());
                  }),
                  (o.renderRegisterLeaveTable = function (t) {
                    this.playerHolder.registerLeaveForCtxPlayer(t),
                      t
                        ? this.fireEvent(
                            S.SHOW_TOAST_MESSAGE,
                            this.getConfig().NOTIFYID.cannotLeaveTable
                          )
                        : this.fireEvent(
                            S.SHOW_TOAST_MESSAGE,
                            this.getConfig().MESSAGE.UNREGISTER_LEAVE_TABLE
                          );
                  }),
                  (o.renderAnimEvent = function (t) {
                    this.writer &&
                      this.executeScripts(this.writer.makeScriptAnimEvent(t));
                  }),
                  (o.renderAllPlayerList = function (t) {
                    this.writer &&
                      this.executeScripts(
                        this.writer.playerWriter.makeScriptAllPlayerList(t)
                      );
                  }),
                  (o.clearUI = function (t) {
                    void 0 === t && (t = !0),
                      y("------------------ clearUI()---------------------"),
                      this.bettingBoxes.resetAll(),
                      this.chipManager.getComponent(M).clearAllChipsOnTable(),
                      this.bettingBoxesTopView.resetAll(),
                      this.chipManagerTopView
                        .getComponent(M)
                        .clearAllChipsOnTable(),
                      this.dealer &&
                        (this.dealer.ON_EMITER.reset(),
                        this.dealer.ON_EMITER.playRandomIdleAnim()),
                      t && this.diceShaker.resetUI(),
                      this._resetTotalBetAmount();
                  }),
                  (o._resumeTable = function () {}),
                  (o._destroyTable = function () {
                    y(".............................. _destroyTable");
                    var t = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE,
                      e = this.gameDataStore.getDataByKey(t);
                    this.getStateMachine().destroyAllStateActions(),
                      this.playerManager.destroyAllPlayers(),
                      e == this.gameConfig.TABLE_MODE.NORMAL
                        ? (this.chipManager
                            .getComponent(M)
                            .clearAllChipsOnTable(),
                          this.bettingBoxes.resetAll())
                        : (this.bettingBoxesTopView.resetAll(),
                          this.chipManagerTopView
                            .getComponent(M)
                            .clearAllChipsOnTable()),
                      this.dealer &&
                        (this.dealer.ON_EMITER.reset(),
                        this.dealer.ON_EMITER.playRandomIdleAnim()),
                      this.diceShaker.resetUI(),
                      this._resetTotalBetAmount();
                  }),
                  (o._clearPlayingSession = function () {
                    y(".............................. _clearPlayingSession"),
                      this.clearUI(),
                      this.getStateMachine().destroyAllStateActions();
                  }),
                  (o.onClickShowUserPopup = function () {
                    this.popupListUser.show();
                  }),
                  (o.showAnalyticPopup = function () {
                    y(
                      "===open analytic popup===",
                      this.getDataStore().globalData.TABLE_ID
                    ),
                      this.fireEvent(S.SHOW_STATISTIC);
                  }),
                  (o._addNewPlayers = function (t) {
                    for (var e = 0; e < t.length; e++)
                      this.playerManager.addNewPlayer(t[e], !0);
                  }),
                  (o._removeLeftPlayers = function (t) {
                    for (var e = 0; e < t.length; e++)
                      this.playerManager.removePlayer(t[e], !0);
                  }),
                  (o._updatePlayersOnTable = function (t) {
                    for (var e = 0; e < t.length; e++)
                      this.playerManager.updatePlayer(t[e]);
                  }),
                  (o._refreshPlayerList = function () {
                    this.popupListUser.active &&
                      this.popupListUser.refreshPlayerList();
                  }),
                  (o._refreshPlayersOnTable = function (t) {
                    t && this.playerManager.refreshPlayerList(t);
                  }),
                  (o._arrangePlayerSeats = function (t) {
                    this.playerManager.reArrangePlayerList(t);
                  }),
                  (o._updateTotalPlayer = function (t) {
                    this.playerManager.updateNumberPlayerOutTable(t);
                  }),
                  (o._onShowHideChat = function (t) {
                    void 0 === t && (t = !0),
                      (this.showChat = t),
                      this.btnChat && (this.btnChat.active = t);
                  }),
                  (o._showChatMessage = function (t) {
                    this.popupChat.updateListChat(t);
                  }),
                  (o._showPlayerChatMessage = function (t) {
                    var e = t.player,
                      i = t.content;
                    this.showChat &&
                      this.playerHolder.showMessageFor({
                        player: e,
                        content: i,
                      });
                  }),
                  (o._showChatHistory = function (t) {
                    this.popupChat.updateListChatHistory(t);
                  }),
                  (o._showChatEmoji = function (t) {
                    var e = t.player,
                      i = t.content;
                    this.playerHolder.showMessageFor({ player: e, content: i });
                  }),
                  (o._updateTableHistory = function (t) {
                    this.tableHistory.updateTableHistory(t);
                  }),
                  (o._showAllPlayerList = function (t) {
                    var e = t.currPage,
                      i = t.arrPlayerInfo;
                    this.popupListUser.updateUI(e, i);
                  }),
                  (o._updateTotalBetAmount = function (t) {
                    this.totalBet && t
                      ? (this.totalBet.getComponent(b).string = D(t))
                      : this.totalBet &&
                        (this.totalBet.getComponent(b).string = "0");
                  }),
                  (o._resetTotalBetAmount = function () {
                    this.totalBet &&
                      (this.totalBet.getComponent(b).string = "0");
                  }),
                  (o._setupTable = function (t) {
                    var e = t.gn,
                      i = t.resultHistory,
                      n = t.mapPlayer,
                      a = t.totalPlayer,
                      s = t.gateRates,
                      o = t.rangeOfBets,
                      r = t.playerBettingDetails,
                      l = t.tableBettingDetails,
                      h = t.remainsBettingDetails,
                      u = t.gameResults,
                      p = t.totalBetAmount,
                      c = t.er,
                      g = t.lastHistoryResult,
                      d = t.mxaBet,
                      y = t.md5Content,
                      f = t.keyResult;
                    if (
                      (m("_setupTable", e, s, c, d),
                      this._updateTotalBetAmount(p),
                      this._initUI(),
                      this.getDataStore().setCacheMaxBet(d),
                      this.chipsHolder.ON_EMITER.setupBets(o),
                      this.bettingBoxes.setDisableAllBets(!0),
                      this.bettingBoxesTopView.setDisableAllBets(!0),
                      (this.btnReBet.interactable = !1),
                      (this.btnDoubleBet.interactable = !1),
                      this.playerManager.setupPlayerList(n),
                      this.playerManager.updateNumberPlayerOutTable(a),
                      this.bettingBoxes.setupGateRates(s, c),
                      this.bettingBoxesTopView.setupGateRates(s, c),
                      d && this.updateDynamicMaxBet(d),
                      this.matchID &&
                        ((this.matchID.active = !0),
                        (this.matchID.getComponent(b).string = e)),
                      this.tableHistory &&
                        this.tableHistory.setupTableHistory(i),
                      y
                        ? this.md5Cmp.showMD5Content(y, !1)
                        : f && this.md5Cmp.showKeyResult(f, !1),
                      g && this._updateLastResultPanel(g, !1),
                      r)
                    )
                      for (var T = 0; T < r.length; T++) {
                        var _ = r[T],
                          C = _.type,
                          B = _.betAmount;
                        this.bettingBoxes.active &&
                          (this.bettingBoxes.updateBettingDetails({
                            betId: C,
                            myBet: B,
                            totalPlayers: null,
                            totalBet: null,
                          }),
                          this.chipManager.setupChipsByAmount(C, B, 0)),
                          this.bettingBoxesTopView.active &&
                            (this.bettingBoxesTopView.updateBettingDetails({
                              betId: C,
                              myBet: B,
                            }),
                            this.chipManagerTopView.setupChipsByAmount(
                              C,
                              B,
                              0
                            ));
                      }
                    if (l)
                      for (var w = 0; w < l.length; w++) {
                        var S = l[w],
                          A = S.type,
                          E = S.betAmount,
                          D = S.totalPlayers;
                        this.bettingBoxes.active &&
                          this.bettingBoxes.updateBettingDetails({
                            betId: A,
                            totalBet: E,
                            totalPlayers: D,
                            myBet: null,
                          }),
                          this.bettingBoxesTopView.active &&
                            this.bettingBoxesTopView.updateBettingDetails({
                              betId: A,
                              totalBet: E,
                              totalPlayers: D,
                            });
                      }
                    if (h)
                      for (var v = 0; v < h.length; v++) {
                        var P = h[v],
                          L = P.type,
                          R = P.betAmount;
                        this.bettingBoxes.active &&
                          this.chipManager
                            .getComponent(M)
                            .setupChipsByAmount(L, R),
                          this.bettingBoxesTopView.active &&
                            this.chipManagerTopView
                              .getComponent(M)
                              .setupChipsByAmount(L, R);
                      }
                    u
                      ? (this.diceShaker.updateDiceResult(u.diceResult),
                        this.diceShaker.showDiceResult(!1),
                        this.diceShaker.playAnimDiceCupOpen(!1),
                        this.diceShaker.playAnimShowDiceResult(!1),
                        this.diceShaker.hideDiceResult(!1),
                        this.bettingBoxes.active &&
                          this.bettingBoxes.showResult(
                            this.writer.getLastGameWinResult()
                          ),
                        this.bettingBoxesTopView.active &&
                          this.bettingBoxesTopView.showResult(
                            this._writer.getLastGameWinResult()
                          ))
                      : this.diceShaker.showDiceShaker(),
                      this.changeTableMode(!1);
                  }),
                  (o._updateMD5AndKey = function (t) {
                    var e = t.md5Content,
                      i = t.keyResult;
                    e
                      ? this.md5Cmp.showMD5Content(e, !1)
                      : i && this.md5Cmp.showKeyResult(i, !1);
                  }),
                  (o._updateAnalytis = function (t) {
                    void 0 === t && (t = null),
                      this.fireEvent(S.UPDATE_STATISTIC, t);
                  }),
                  (o._updateHistory = function (t) {
                    void 0 === t && (t = null),
                      y("===|_updateHistory|===", t),
                      this.fireEvent(S.UPDATE_HISTORY, t);
                  }),
                  (o._updateLastResult = function (t) {
                    void 0 === t && (t = null),
                      this.fireEvent(S.UPDATE_LAST_RESULT, t);
                  }),
                  (o._callHistoryChat = function () {
                    this.fireEvent(S.CHAT_HISTORY, 20);
                  }),
                  (o._updateLastResultPanel = function (t, e) {
                    void 0 === t && (t = null),
                      void 0 === e && (e = !0),
                      t && this.lastResultPanel.updateResult(t, e);
                  }),
                  (o._changeGameState = function (t) {
                    var e,
                      i,
                      n,
                      a,
                      s = t.gn,
                      o = t.cs,
                      r = t.st,
                      l = t.nt,
                      h = t.svt,
                      u = t.clt;
                    if (
                      (3 === o && this.getDataStore().updateCurSqueeze(),
                      !this.getDataStore().getSqueeze() || (3 !== o && 4 !== o)
                        ? this.getStateMachine().changeState(o)
                        : this.getStateMachine().changeState("squeezeState"),
                      this.getDataStore().setIsSqueezeHint(!1),
                      (3 !== o && 4 !== o) ||
                        this.getDataStore().setIsSqueezeHint(!0),
                      0 != o
                        ? 2 != o &&
                          this.countDown &&
                          this.countDown.startClock(
                            { st: r, nt: l, svt: h, clt: u },
                            1 == o
                          )
                        : (this.countDown && this.countDown.resetClock(),
                          this.fireEvent(S.CALL_UPDATE_TOP_WINNERS)),
                      this.getConfig().TOAST_MESSAGE.GAME_STATE[o])
                    ) {
                      var p = this.getConfig().TOAST_MESSAGE.GAME_STATE[o];
                      this.toast.showWithContent(p);
                    }
                    s &&
                      this.matchID &&
                      ((this.matchID.active = !0),
                      (this.matchID.getComponent(b).string = s));
                    var c = this.getDataStore().isEnableDealerVoice();
                    switch (o) {
                      case 0:
                        null == (e = A.getInstance()) || e.reStartGame(!0);
                        break;
                      case 1:
                        c &&
                          (null == (i = A.getInstance()) ||
                            i.playStartSound(!0));
                        break;
                      case 2:
                        null == (n = A.getInstance()) || n.stopCountDown(!0),
                          c &&
                            (null == (a = A.getInstance()) ||
                              a.stopBettingSound(!0));
                    }
                  }),
                  (o.onEnable = function () {
                    var t = d.getVisibleSize();
                    this.resize(t.width, t.height);
                  }),
                  (o._initUI = function () {
                    this.bettingBoxes.resetAll(),
                      this.bettingBoxesTopView.resetAll(),
                      this.diceShaker.resetUI(),
                      this.squeezeHolder.initBtnUI(),
                      this.diceShaker.setEnableSqueeze(!1),
                      this.transitionLayer &&
                        this.transitionLayer.getComponent(f).stopSystem();
                  }),
                  (o.changeTableMode = function (t) {
                    void 0 === t && (t = !0), t && this.clearUI(!1);
                    var e = this.gameConfig.KEY_ITEM.NEXT_TABLE_MODE,
                      i = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE;
                    this.gameDataStore.setDataByKey(
                      i,
                      this.gameDataStore.getDataByKey(e)
                    ),
                      this.gameDataStore.getDataByKey(i) ==
                      this.gameConfig.TABLE_MODE.NORMAL
                        ? this._onChangesNormalMode()
                        : this._onChangesTopViewMode();
                    var n = d.getVisibleSize();
                    this.resize(n.width, n.height),
                      this.chipsHolder.ON_EMITER &&
                        this.chipsHolder.ON_EMITER.updateChipAtlas &&
                        this.chipsHolder.ON_EMITER.updateChipAtlas();
                  }),
                  (o._onChangesNormalMode = function () {
                    y("_onChangesNormalMode"),
                      this.setActive(this.bettingBoxesTopView, !1),
                      this.setActive(this.topViewBG, !1),
                      this.setActive(this.chipManagerTopView, !1),
                      this.setActive(this.bettingBoxes, !0),
                      this.setActive(this.normalViewBG, !0),
                      this.setActive(this.chipManager, !0),
                      1 == this.getTableData()._currState &&
                        this.bettingBoxes.setDisableAllBets(!1);
                  }),
                  (o._onChangesTopViewMode = function () {
                    y("_onChangesTopViewMode"),
                      this.setActive(this.bettingBoxesTopView, !0),
                      this.setActive(this.topViewBG, !0),
                      this.setActive(this.chipManagerTopView, !0),
                      this.setActive(this.bettingBoxes, !1),
                      this.setActive(this.normalViewBG, !1),
                      this.setActive(this.chipManager, !1),
                      1 == this.getTableData()._currState &&
                        this.bettingBoxesTopView.setDisableAllBets(!1);
                  }),
                  (o.setActive = function (t, e) {
                    t.active = e;
                    var i = e ? 255 : 0;
                    t.getComponent(g) || t.addComponent(g),
                      (t.getComponent(g).opacity = i);
                  }),
                  (o.rollBackChips = function () {
                    var t = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE,
                      e = this.gameDataStore.getDataByKey(t),
                      i =
                        this.getTableData().betWriter.getRollbackBettingDetail(),
                      n = this.chipManager;
                    e == this.gameConfig.TABLE_MODE.TOPVIEW &&
                      (n = this.chipManagerTopView);
                    for (var a = 0; a < i.length; a++) {
                      var s = i[a],
                        o = s.betId,
                        r = s.confirmAmount;
                      n.rollbackChipsByGate(o, r);
                    }
                  }),
                  (o.resize = function (t, e) {
                    var i = this.getConfig().GAME_CONTENT_SIZE.maxWidth,
                      n = this.getConfig().GAME_CONTENT_SIZE.maxHeight;
                    (t = t > i ? i : t),
                      (e = e > n ? n : e),
                      this.center.getComponent(T).setContentSize(t, e);
                  }),
                  (o.updateDynamicGateRate = function (t) {
                    var e = t.gateRates,
                      i = t.er,
                      n = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE;
                    this.gameDataStore.getDataByKey(n) ==
                    this.gameConfig.TABLE_MODE.NORMAL
                      ? this.bettingBoxes.updateDynamicGateRate(e, i)
                      : this.bettingBoxesTopView.updateDynamicGateRate(e, i);
                  }),
                  (o.updateDynamicMaxBet = function (t) {
                    this.getDataStore().setCacheMaxBet(t),
                      this.fireEvent(
                        this.getConfig().EVENT_CODE.UPDATE_MAX_BET,
                        t
                      );
                  }),
                  (o.createGameWriter = function () {
                    return new _();
                  }),
                  (o.onDestroy = function () {
                    null != this._lastMultiTouch &&
                      (p.ENABLE_MULTI_TOUCH = this._lastMultiTouch);
                  }),
                  s(e, [
                    {
                      key: "md5Cmp",
                      get: function () {
                        return (
                          this._md5Cmp ||
                            (this._md5Cmp = this.md5Holder.getComponent(B)),
                          this._md5Cmp
                        );
                      },
                    },
                    {
                      key: "writer",
                      get: function () {
                        return this._writer;
                      },
                    },
                  ]),
                  e
                );
              })(E)).prototype,
              "bettingBoxes",
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
            (ut = e(lt.prototype, "bettingBoxesTopView", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pt = e(lt.prototype, "playerManager", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ct = e(lt.prototype, "diceShaker", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (gt = e(lt.prototype, "chipManager", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (dt = e(lt.prototype, "chipManagerTopView", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (yt = e(lt.prototype, "countDown", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (bt = e(lt.prototype, "btnReBet", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (mt = e(lt.prototype, "btnDoubleBet", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ft = e(lt.prototype, "tableHistory", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Tt = e(lt.prototype, "lastResultPanel", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_t = e(lt.prototype, "matchID", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ct = e(lt.prototype, "totalBet", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Bt = e(lt.prototype, "center", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (wt = e(lt.prototype, "btnChat", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (St = e(lt.prototype, "popupChat", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Mt = e(lt.prototype, "squeezeHolder", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (At = e(lt.prototype, "playerHolder", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Et = e(lt.prototype, "bubbleHintSqueeze", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Dt = e(lt.prototype, "popupListUser", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (vt = e(lt.prototype, "btnSetting", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pt = e(lt.prototype, "btnAnalytic", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Lt = e(lt.prototype, "chatZone", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Rt = e(lt.prototype, "listUserZone", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (It = e(lt.prototype, "topViewBG", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ht = e(lt.prototype, "normalViewBG", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Vt = e(lt.prototype, "transitionLayer", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Nt = e(lt.prototype, "dealer", [nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (zt = e(lt.prototype, "toast", [at], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ot = e(lt.prototype, "chipsHolder", [st], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (xt = e(lt.prototype, "md5Holder", [ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rt = lt))
          ) || rt)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GameState3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./game-network.mjs_cjs=&original=.js",
    "./serviceRest.ts",
    "./loadConfigAsync.ts",
    "./hashmap.mjs_cjs=&original=.js",
    "./BTKeyMapping.ts",
    "./BTGameStateEvent.ts",
    "./hashmap.js",
    "./BTGameState.ts",
    "./game-network.js",
  ],
  function (t) {
    "use strict";
    var e, a, i, n, s, r, o, l, E, g, h;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (a = t.cclegacy), (i = t.log), (n = t.warn);
        },
        null,
        null,
        function (t) {
          s = t.default;
        },
        function (t) {
          r = t.default;
        },
        null,
        function (t) {
          o = t.BTKeyMapping;
        },
        function (t) {
          l = t.BTGameStateEvent;
        },
        function (t) {
          E = t.default;
        },
        function (t) {
          g = t.BTGameState;
        },
        function (t) {
          h = t.default;
        },
      ],
      execute: function () {
        a._RF.push({}, "b6ed86hQVVOJKusaDwNL79A", "GameState3986", void 0);
        var T = globalThis.GameNetwork || h,
          c = T.lib.logger;
        c && c.updateLogger(i, i, n);
        var v,
          u = T.EventManager,
          d = _;
        t({
          GameState3986: (v = (function (t) {
            function a(e) {
              var a,
                i = e.gameData;
              return (
                ((a =
                  t.call(this, { gameData: i }) || this).tableBettingVersion =
                  void 0),
                (a.localEndBettingAt = void 0),
                (a._bettingDetailsByCmdId = void 0),
                (a._mxa =
                  "1:200000000,2:200000000,3:200000000,4:200000000,5:25000000,6:25000000,7:25000000,8:25000000,9:25000000,10:25000000,11:25000000,12:2500000,13:2500000,14:2500000,15:2500000,16:2500000,17:2500000,18:50000000,19:50000000,20:50000000,21:50000000,22:50000000,23:50000000,24:50000000,25:50000000,26:50000000,27:50000000,28:50000000,29:50000000,30:50000000,31:50000000,32:50000000,33:25000000,34:25000000,35:25000000,36:25000000,37:25000000,38:25000000,39:5000000,40:10000000,41:25000000,42:50000000,43:50000000,44:50000000,45:50000000,46:50000000,47:50000000,48:50000000,49:50000000,50:25000000,51:10000000,52:5000000"),
                a
              );
            }
            e(a, t);
            var i = a.prototype;
            return (
              (i.isEnableChatHistory = function () {
                return !1;
              }),
              (i.defineStateTransition = function () {
                return {
                  0: {
                    fsmState: "Start_Table",
                    nextState: [1],
                    transition: "goToStartGame",
                  },
                  1: {
                    fsmState: "Betting",
                    nextState: 2,
                    transition: "goToBetting",
                  },
                  2: {
                    fsmState: "End_Betting",
                    nextState: 3,
                    transition: "goToEndBetting",
                  },
                  3: {
                    fsmState: "Show_Result",
                    nextState: [4],
                    transition: "goToShowResult",
                  },
                  4: {
                    fsmState: "Finish",
                    nextState: 0,
                    transition: "goToFinish",
                  },
                };
              }),
              (i.defineKeyMapping = function () {
                var t = {};
                return (
                  (t[o.CLIENT_JOIN_GAME_RESULT] = "client-join-game-result"),
                  (t[o.CLIENT_JOIN_TABLE_RESULT] = "client-join-table-result"),
                  (t[o.CLIENT_BETTING_RESULT] = "client-betting-result"),
                  (t[o.TABLE_STATE_UPDATED] = "table-state-updated"),
                  (t[o.CLIENT_NO_LOBBY_RESULT] =
                    "client-join-game-no-lobby-result"),
                  (t[o.TABLE_BETTING_RESULT] = "table-betting-result"),
                  (t[o.PLAYER_FINISH_EVENT] = "player-finish-event"),
                  (t[o.MULTI_STATE_PUSHED] = "multi-state-pushed"),
                  (t[o.CLIENT_LEAVE_GAME_RESULT] = "client-leave-game-result"),
                  t
                );
              }),
              (i.onEnterTable = function (e, a, i) {
                (this.bettingGateManager &&
                  this.bettingGateManager.getGameNumber() ===
                    this.tableState.gn) ||
                  this._updateLastWalletBet(),
                  t.prototype.onEnterTable.call(this, e, a, i);
              }),
              (i.onEnterTableState = function () {
                var t = this;
                this._isFirstLoadTable
                  ? (this._isFirstLoadTable = !1)
                  : (this._removeAllRemainingCommandAndEvent(),
                    (this._isFirstLoadTable = !1),
                    this._eventManager.registerEvent(
                      this.getKeyMapping(o.CHAT_MESSAGE),
                      function (e) {
                        t._emitter.emit(l.CHAT_MESSAGE, e.data);
                      }
                    ),
                    this.isEnableChatHistory() &&
                      this._eventManager.registerEvent(
                        this.getKeyMapping(o.CHAT_HISTORY),
                        function (e) {
                          t._emitter.emit(l.CHAT_HISTORY, e.data);
                        }
                      ),
                    this._eventManager.registerEvent("1", function (e) {
                      t._emitter.emit(l.CHAT_SYSTEM, e.data);
                    }),
                    this._eventManager.registerEvent(
                      this.getKeyMapping(o.ERROR_PUSHED),
                      function (e) {
                        var a = e.data,
                          i = a[a.length - 1].code;
                        "0027" === i || "" === i
                          ? (t._removeAllRemainingCommandAndEvent(),
                            t._commandManager.unSubscribe(
                              t.tablePresenceChannel
                            ),
                            t._commandManager.unSubscribe(t.notifyChannel),
                            t._emitter.emit(l.ERROR_EVENT, e.data))
                          : "0099" === i
                          ? t.ftFSM.goToDieMode(l.SERVER_MAINTAIN)
                          : "0033" === i || "0100" === i
                          ? (t._emitter.emit(l.ERROR_EVENT, e.data),
                            t.exitGame())
                          : t._emitter.emit(l.ERROR_EVENT, e.data);
                      }
                    ),
                    this._eventManager.registerEvent(
                      this.getKeyMapping(o.PLAYER_LIST_UPDATE),
                      function (e) {
                        var a = e.channelType,
                          i = e.data;
                        if ("presence" === a) {
                          var n = t._parseTableData(i);
                          t._updatePlayersOnTable(n);
                        }
                      }
                    ),
                    this._eventManager.registerEvent(
                      this.getKeyMapping(o.TABLE_STATE_UPDATED),
                      function (e) {
                        var a = e.channelType,
                          i = e.data;
                        if ("presence" === a) {
                          var n = t._parseTableData(i);
                          t._updatePlayersOnTable(n);
                        }
                      }
                    ),
                    this._eventManager.registerEvent(u.CONNECTED, function () {
                      t._gotoPanicMode();
                    }),
                    this.isJPMode() &&
                      (this._eventManager.registerEvent(
                        this.getKeyMapping(o.JACKPOT_UPDATE),
                        function (e) {
                          (t._lastJp = e.data),
                            t._emitter.emit(l.JACKPOT_UPDATE, e.data);
                        }
                      ),
                      this._eventManager.registerEvent(
                        this.getKeyMapping(o.JACKPOT_WIN),
                        function (e) {
                          var a = e.data.jpInfo;
                          t._emitter.emit(l.JACKPOT_WIN, a);
                        }
                      )),
                    this._eventManager.registerEvent(
                      this.getKeyMapping(o.CLIENT_LEAVE_TABLE_RESULT),
                      function (e) {
                        t._handleLeaveTable(e);
                      }
                    ));
              }),
              (i.onEnterBetting = function (t, e) {
                c.debug("onEnterBetting (with resume: %s)", e),
                  this._checkLeaveTable() ||
                    (e
                      ? this._sendCacheBetting()
                      : this._emitter.emit(l.BETTING_EVENT, this.tableState),
                    this._listenTableBettingResult(),
                    this._listenClientBettingResult(),
                    this._listenShowResultUpdate(),
                    this._listenAnimEvent(),
                    this._handleBettingErrorPushed(),
                    this._waitForSwitchTableState(),
                    (this.localEndBettingAt =
                      this.tableState.nt - this.tableState.svt + Date.now()),
                    (this.tableBettingVersion = null));
              }),
              (i.onEnterEndBetting = function () {
                c.debug("onEnterEndBetting"),
                  this._checkLeaveTable() ||
                    (this.tableState &&
                      this.tableState.le &&
                      this._emitter.emit(
                        l.TABLE_UPDATED_EVENT,
                        this.tableState
                      ),
                    this._emitter.emit(l.END_BETTING_EVENT, this.tableState),
                    this._listenTableBettingResult(),
                    this._listenClientBettingResult(),
                    this._handleBettingErrorPushed(),
                    this._listenShowResultUpdate(),
                    this._waitForSwitchTableState());
              }),
              (i.onEnterShowResult = function () {
                c.debug("onEnterShowResult"),
                  this._checkLeaveTable() ||
                    (this.bettingGateManager.resetProcessing(),
                    this._emitter.emit(l.SHOW_RESULT_EVENT, this.tableState),
                    this._listenTableUpdate(),
                    this._listenShowResultUpdate(),
                    this._waitForFinishingEvent(),
                    this._waitForSwitchTableState());
              }),
              (i._listenTableUpdate = function () {
                var t = this;
                this._eventManager.registerEvent(
                  this.getKeyMapping(o.TABLE_STATE_UPDATED),
                  function (e) {
                    var a = e.data,
                      i = e.svt;
                    if (a) {
                      var n = t._parseTableData(a);
                      if (
                        ((n.svt = i),
                        t.tableState && t.tableState.version >= n.version)
                      )
                        return;
                      t._emitter.emit(l.TABLE_UPDATED_EVENT, n);
                    }
                  }
                );
              }),
              (i._listenShowResultUpdate = function () {
                var t = this;
                this._eventManager.registerEvent(
                  this.getKeyMapping(o.SHOW_RESULT_UPDATE),
                  function (e) {
                    if (e.data) {
                      var a = e.data,
                        i = e.svt,
                        n = t._parseUserData(a);
                      (n.svt = i), t._emitter.emit(l.PLAYER_UPDATED_EVENT, n);
                    }
                  }
                );
              }),
              (i._listenClientBettingResult = function () {
                var t = this;
                this._eventManager.registerEvent(
                  this.getKeyMapping(o.CLIENT_BETTING_RESULT),
                  function (e) {
                    var a = e.svt,
                      i = e.data,
                      n = i.cId;
                    if (
                      t._bettingDetailsByCmdId &&
                      t._bettingDetailsByCmdId[n]
                    ) {
                      var s = t._parseUserData(i);
                      if (s.gn !== t.tableState.gn) return;
                      if (t.playerState && t.playerState.version >= s.version)
                        return;
                      (t.playerState = s),
                        (t.playerState.svt = a),
                        t._updateBettingConfirm(),
                        t._emitter.emit(l.PLAYER_UPDATED_EVENT, t.playerState),
                        delete t._bettingDetailsByCmdId[n];
                    }
                  }
                );
              }),
              (i._listenTableBettingResult = function () {
                var t = this;
                this._eventManager.registerEvent(
                  this.getKeyMapping(o.TABLE_BETTING_RESULT),
                  function (e) {
                    var a = e.data;
                    if (a) {
                      var i = t._parseTableData(a);
                      if (i.gn != t.tableState.gn)
                        return void t._gotoPanicMode();
                      if (
                        t.tableBettingVersion &&
                        i.version - t.tableBettingVersion > 1
                      )
                        return void t._gotoPanicMode();
                      (t.tableBettingVersion = i.version),
                        t._emitter.emit(l.TABLE_UPDATED_EVENT, i);
                    }
                  }
                );
              }),
              (i._waitForFinishingEvent = function () {
                var t = this;
                this._eventManager.registerEvent(
                  this.getKeyMapping(o.PLAYER_FINISH_EVENT),
                  function (e) {
                    var a = e.data,
                      i = e.svt,
                      n = t._parseUserData(a);
                    n.gn === t.tableState.gn &&
                      ((t.playerState && t.playerState.version >= n.version) ||
                        ((t.playerState = n),
                        (t.playerState.svt = i),
                        t._emitter.emit(l.FINISH_EVENT, t.playerState)));
                  }
                );
              }),
              (i._waitForSwitchTableState = function () {
                var t = this,
                  e = this.tableState.cs,
                  a = this.tableState.nt - this.svt + 1e3,
                  i = this.TIMELINE_OF_STATE[this.tableState.cs].nextState;
                c.debug(
                  "_waitForSwitchTableState expect next state = %s in %s ms",
                  i,
                  a
                ),
                  this._eventManager.waitForEvent(
                    a,
                    function (a) {
                      var i = a.event,
                        n = a.channelType,
                        s = a.data;
                      if (
                        i === t.getKeyMapping(o.TABLE_STATE_UPDATED) &&
                        "presence" === n
                      ) {
                        var r = t._parseTableData(s);
                        return t._isValidNextState(e, r.cs);
                      }
                      return !1;
                    },
                    function () {
                      c.debug(
                        "_waitForSwitchTableState timeout, current state = %s, expect next state = %s",
                        e,
                        i
                      ),
                        t._gotoPanicMode();
                    }
                  ),
                  this._eventManager.registerEvent(
                    this.getKeyMapping(o.TABLE_STATE_UPDATED),
                    function (a) {
                      var i = a.svt,
                        n = a.channelType,
                        s = a.data;
                      if ("presence" === n) {
                        var r = t._parseTableData(s);
                        if (t.tableState && t.tableState.version >= r.version)
                          return;
                        if (r.cs !== e) {
                          (t.tableState = r),
                            (t.tableState.svt = i),
                            (t.svt = i);
                          var o = t.TIMELINE_OF_STATE[r.cs].transition;
                          t.tableFSM.can(o) ||
                            (c.debug("[GameState] jumpIntoSubState: " + r.cs),
                            t.tableFSM.goToInit()),
                            t.tableFSM[o]();
                        }
                      }
                    }
                  );
              }),
              (i.onEnterIdleMode = function (t, e) {
                var a = this;
                c.debug("onEnterIdleMode: %j", e);
                try {
                  this.tablePresenceChannel &&
                    this._commandManager.subscribe(this.tablePresenceChannel);
                } catch (t) {
                  c.debug(t);
                }
                this._removeAllRemainingCommandAndEvent(),
                  this._eventManager.registerEvent(u.CONNECTED, function () {
                    a._gotoPanicMode();
                  }),
                  this._eventManager.registerEvent(
                    this.getKeyMapping(o.MULTI_STATE_PUSHED),
                    function () {
                      a._gotoPanicMode();
                    }
                  ),
                  this._eventManager.registerEvent(
                    this.getKeyMapping(o.TABLE_STATE_UPDATED),
                    function () {
                      a._gotoPanicMode();
                    }
                  ),
                  this._eventManager.registerEvent(
                    this.getKeyMapping(o.ANIM_EVENT),
                    function () {
                      a._gotoPanicMode();
                    }
                  ),
                  this._eventManager.registerEvent(
                    this.getKeyMapping(o.CLIENT_BETTING_RESULT),
                    function () {
                      a._gotoPanicMode();
                    }
                  ),
                  this._eventManager.registerEvent(
                    this.getKeyMapping(o.TABLE_BETTING_RESULT),
                    function () {
                      a._gotoPanicMode();
                    }
                  ),
                  this._eventManager.registerEvent(
                    this.getKeyMapping(o.SHOW_RESULT_UPDATE),
                    function () {
                      a._gotoPanicMode();
                    }
                  ),
                  this._eventManager.registerEvent(
                    this.getKeyMapping(o.PLAYER_FINISH_EVENT),
                    function () {
                      a._gotoPanicMode();
                    }
                  ),
                  this._eventManager.registerEvent(u.PONG, function () {
                    a._gotoPanicMode();
                  }),
                  this._eventManager.registerOnce(
                    this.getKeyMapping(o.ERROR_PUSHED),
                    function (t) {
                      var e = t.data,
                        i = e[e.length - 1].code;
                      "0099" === i
                        ? a.ftFSM.goToDieMode(l.SERVER_MAINTAIN)
                        : "0033" === i || "0100" === i
                        ? (a._emitter.emit(l.ERROR_EVENT, t.data), a.exitGame())
                        : a._gotoPanicMode();
                    }
                  ),
                  this.IS_SHOW_IDLE_DIALOG ||
                    this._emitter.emit(l.NETWORK_POOR_EVENT),
                  this._emitter.emit(l.SHOW_WAITING),
                  this._emitter.emit(e);
              }),
              (i._userBetting = function (t) {
                var e = this,
                  a = this.tableState ? this.tableState.gn : null,
                  i = {
                    event: this.getKeyMapping(o.CLIENT_BETTING_REQUEST),
                    data: {
                      serviceId: this.serviceId,
                      bettingDetails: t,
                      token: this.playerInfoStateManager.getToken(),
                      gn: a,
                    },
                  },
                  n = this.executeCommand(i);
                return this._isSuccessSendCommandId(n)
                  ? (this.setPauseWallet(!0),
                    this._eventManager.waitForEvent(
                      3e3,
                      function (t) {
                        var a = !1;
                        if (
                          t.event == e.getKeyMapping(o.CLIENT_BETTING_RESULT) &&
                          "private" == t.channelType
                        ) {
                          var i = t.data;
                          i.cId && (a = i.cId.includes(n));
                        } else
                          t.event == e.getKeyMapping(o.ERROR_PUSHED) &&
                            (a = !0);
                        return a;
                      },
                      function () {
                        e._gotoPanicMode();
                      }
                    ),
                    n)
                  : (c.error("userBetting fail %s %j", n, i), 0);
              }),
              (i.userBetting = function (t) {
                if ("Panic_Mode" !== this.ftFSM.state) {
                  if ("Betting" === this.tableFSM.state) {
                    var e = null;
                    if (this.localEndBettingAt <= Date.now() + 3500)
                      return (
                        (e = [{ code: "fe0030" }]),
                        void this._emitter.emit(l.ERROR_EVENT, e)
                      );
                    this.bettingGateManager.isNewSession(this.tableState.gn) &&
                      this._updateLastWalletBet();
                    var a = this.bettingGateManager.bet(
                      t,
                      this.getUserWallet(),
                      this.tableState.gn
                    );
                    return (
                      a
                        ? ((e = [{ code: a }]),
                          this._emitter.emit(l.ERROR_EVENT, e))
                        : this._emitter.emit(l.PLAYER_BETTING_EVENT, t),
                      this.localEndBettingAt > Date.now() + 5e3
                        ? ((this._bettingTimeCached.lastBetting = Date.now()),
                          this._startDeboundBetting())
                        : this._sendCacheBetting(),
                      e
                    );
                  }
                } else c.debug("on panic mode.....");
              }),
              (i.leaveTable = function () {
                var t = this;
                if ("Panic_Mode" !== this.ftFSM.state) {
                  this._emitter.emit(l.SHOW_WAITING),
                    this._removeAllRemainingCommandAndEvent();
                  var e = {
                      event: this.getKeyMapping(o.CLIENT_LEAVE_TABLE_REQUEST),
                      data: {
                        serviceId: this.serviceId,
                        token: this.playerInfoStateManager.getToken(),
                      },
                    },
                    a = this.executeCommand(e);
                  this._isSuccessSendCommandId(a) ||
                    (c.error("Cannot leave table ......"),
                    this._gotoPanicMode());
                  var i = this.buildEventStrategy(e.event);
                  this._eventManager.waitForEvent(
                    i.timeWaitForEvent,
                    function (e) {
                      return e.event ==
                        t.getKeyMapping(o.CLIENT_LEAVE_TABLE_RESULT) ||
                        e.event == t.getKeyMapping(o.CLIENT_LEAVE_GAME_RESULT)
                        ? e.data.cId == a
                        : e.event == t.getKeyMapping(o.ERROR_PUSHED);
                    },
                    function () {
                      t._gotoPanicMode();
                    }
                  ),
                    this._eventManager.registerEvent(
                      this.getKeyMapping(o.CLIENT_LEAVE_TABLE_RESULT),
                      function (e) {
                        e &&
                          e.data &&
                          e.data.cId == a &&
                          t._handleLeaveTable(e);
                      }
                    ),
                    this._eventManager.registerEvent(
                      this.getKeyMapping(o.CLIENT_LEAVE_GAME_RESULT),
                      function (e) {
                        e &&
                          e.data &&
                          e.data.cId == a &&
                          t._emitter.emit(l.LEAVE_GAME_SUCCESS, e);
                      }
                    ),
                    this._eventManager.registerEvent(
                      this.getKeyMapping(o.ERROR_PUSHED),
                      function (e) {
                        t._emitter.emit(l.ERROR_EVENT, e.data);
                      }
                    );
                } else c.debug("on panic mode.....");
              }),
              (i._parseTableData = function (t) {
                var e = this;
                if (t && this.isNewAPIMode()) {
                  var a = this._convertTableData(t).cs;
                  if (a && a.split) {
                    var i = a.split(":");
                    (t.cs = Number(i[0])),
                      (t.st = Number(i[1])),
                      (t.nt = Number(i[2])),
                      (t.clt = Date.now()),
                      (t.maxBet = null);
                  }
                  if (
                    ((!this.MAX_AMOUNT_BY_GATE && !this.GATE_IDS) ||
                      0 === t.cs) &&
                    (t.mxa || this._mxa)
                  ) {
                    var n = t.mxa ? t.mxa : this._mxa;
                    this.GATE_IDS = [];
                    var s = [],
                      r = new E();
                    n &&
                      (n.split(",").map(function (t) {
                        var a = t.split(":")[0],
                          i = Number(t.split(":")[1]);
                        r.set(a, i),
                          e.GATE_IDS.push("" + a),
                          s.push({ ID: parseInt(a), MaxAmount: i });
                      }),
                      (this.MAX_AMOUNT_BY_GATE = r),
                      (t.maxBet = s));
                  }
                }
                return d.cloneDeep(t);
              }),
              (i.callApiGetPlayerListFrom = function (t, e) {
                var a = e.from,
                  i = e.pageSize;
                c.debug("===callApiGetPlayerList===", t, {
                  from: a,
                  pageSize: i,
                });
                var n = r.getConfig().API_URL;
                s.postWithHeader({
                  url: t,
                  headers: {
                    Authorization: this.playerInfoStateManager.getToken(),
                  },
                  data: {
                    playerId: this.playerInfoStateManager.getUserId(),
                    from: a,
                    pageSize: i,
                  },
                  apiUrl: n,
                  callback: this._onPlayerListGetDataFrom.bind(this),
                  callbackErr: this._onPlayerListErrorFrom.bind(this),
                });
              }),
              (i._onPlayerListGetDataFrom = function (t) {
                this._emitter.emit(l.API_GET_PLAYER_LIST_RESPONSE_FROM, {
                  data: t,
                  errCode: null,
                });
              }),
              (i._onPlayerListErrorFrom = function () {
                this._emitter.emit(l.API_GET_PLAYER_LIST_RESPONSE_FROM, {
                  data: null,
                });
              }),
              (i._parseUserData = function (t) {
                if (t && this.isNewAPIMode()) {
                  var e = t.mn,
                    a = t.pi;
                  null != e && (this._lastWalletWhenBet = e);
                  var i = this._convertPlayerData(t).cs;
                  if (i && i.split) {
                    var n = i.split(":");
                    (t.cs = Number(n[0])),
                      (t.st = Number(n[1])),
                      (t.nt = Number(n[2])),
                      (t.clt = Date.now());
                  }
                  if (a) {
                    var s = a.split(":")[4];
                    (this._uenv = Number(s)),
                      this._emitter.emit(l.NO_LOBBY_MODE, this._uenv);
                  }
                }
                return d.cloneDeep(t);
              }),
              (i._convertProp = function (t, e, a) {
                null != t[a] && ((t[e] = t[a]), delete t[a]);
              }),
              (i._convertTableData = function (t) {
                return (
                  this._convertProp(t, "version", "v"),
                  this._convertProp(t, "tableId", "tId"),
                  this._convertProp(t, "tableId", "tbId"),
                  this._convertProp(t, "tbds", "tbd"),
                  this._convertProp(t, "lbds", "lbd"),
                  this._convertProp(t, "cps", "cp"),
                  this._convertProp(t, "gwrs", "gwr"),
                  t
                );
              }),
              (i._convertPlayerData = function (t) {
                return (
                  this._convertProp(t, "version", "v"),
                  this._convertProp(t, "tbId", "tId"),
                  this._convertProp(t, "pbds", "pbd"),
                  this._convertProp(t, "gwrs", "gwr"),
                  this._convertProp(t, "ttbam", "ttb"),
                  this._convertProp(t, "tbrs", "tbr"),
                  this._convertProp(t, "pwrs", "pwr"),
                  t
                );
              }),
              (i._isBetFailError = function (e) {
                var a = t.prototype._isBetFailError.call(this, e);
                return (
                  a ||
                    (a =
                      "W2005" == e ||
                      "W2006" == e ||
                      "W2007" == e ||
                      "0030" == e),
                  a
                );
              }),
              (i._reCreateBettingGate = function (e) {
                t.prototype._reCreateBettingGate.call(this, e);
                var a = this.GATE_IDS,
                  i = this.MAX_AMOUNT_BY_GATE;
                a && i && this._updateLastWalletBet();
              }),
              (i._updateLastWalletBet = function () {
                this._lastWalletWhenBet = this.getWalletBalance();
              }),
              a
            );
          })(g)),
          default: v,
        });
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GameWriter3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./PlayerWriter3986.ts",
    "./BetWriter3986.ts",
    "./BTGameWriter.ts",
  ],
  function (t) {
    "use strict";
    var e, s, a, r, i, l, n, u, h;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose), (s = t.createClass);
        },
        function (t) {
          (a = t.cclegacy), (r = t._decorator), (i = t.log), (l = t.warn);
        },
        null,
        function (t) {
          n = t.PlayerWriter3986;
        },
        function (t) {
          u = t.BetWriter3986;
        },
        function (t) {
          h = t.BTGameWriter;
        },
      ],
      execute: function () {
        var p;
        a._RF.push({}, "7ca2egIiyRKfZMh4wpsUYfz", "GameWriter3986", void 0);
        var o = r.ccclass,
          c = _;
        t(
          "GameWriter3986",
          o("GameWriter3986")(
            (p = (function (t) {
              function a() {
                var e;
                return (
                  ((e = t.call(this) || this).listChatMessage = []),
                  (e._md5 = null),
                  (e._keyMd5 = null),
                  (e._resultHistory = null),
                  (e._mxa = null),
                  e
                );
              }
              e(a, t);
              var r = a.prototype;
              return (
                (r.getKeyMD5 = function () {
                  return this._md5;
                }),
                (r.getKeyResult = function () {
                  return this._keyMd5;
                }),
                (r.createPlayerWriter = function (t) {
                  return new n(t);
                }),
                (r.createBetWriter = function (t) {
                  return new u(t);
                }),
                (r._resetAll = function () {
                  t.prototype._resetAll.call(this),
                    (this.listChatMessage = []),
                    this.resetPlaySession();
                }),
                (r.resetPlaySession = function () {
                  t.prototype.resetPlaySession.call(this),
                    (this._md5 = null),
                    (this._keyMd5 = null);
                }),
                (r._parseJPWin = function (t) {
                  var e = t.split(":");
                  return (
                    i("isUpdateLSH_RealTime", t),
                    e.length > 0
                      ? {
                          flag: Number(e[0]),
                          gateType: Number(e[1]),
                          player:
                            this.playerWriter.mapPlayerById[
                              this.playerWriter.contextPlayerId
                            ],
                        }
                      : null
                  );
                }),
                (r._parseDiceResult = function (t) {
                  if (t) {
                    var e = t.split(":");
                    if (e.length > 0) {
                      var s = e[0].split(","),
                        a = [];
                      return (
                        s.forEach(function (t) {
                          a.push(t);
                        }),
                        {
                          dices: a,
                          score: e[1] ? e[1] : 0,
                          type: e[2] ? e[2] : 3,
                        }
                      );
                    }
                  }
                  return null;
                }),
                (r._parseLastHistoryResult = function (t) {
                  var e = t.split(":"),
                    s = e[0].split(",");
                  return {
                    data: {
                      d1: s[0],
                      d2: s[1],
                      d3: s[2],
                      sum: e[1],
                      resultType: e[2],
                    },
                    curPlaySessionNum: this._currPlaySessionNum,
                  };
                }),
                (r.makeScriptJoinTable = function (t) {
                  var e = [];
                  t.extendData &&
                    t.extendData &&
                    (this.playerWriter.contextPlayerId = t.extendData.mdu
                      ? t.extendData.mdu.eui
                      : null);
                  var s = t.tableData;
                  if (s) {
                    var a = s.gn;
                    this._currPlaySessionNum = a || "noGameNum";
                    var r = s.rh,
                      i = null;
                    r && ((this._resultHistory = r), (i = r.split(",")));
                    var l = t.playerData;
                    if (l && l.pi) {
                      var n = this.playerWriter._parsePlayerByStr(l.pi);
                      this.playerWriter._setupContextPlayer(n);
                    }
                    var u = this.playerWriter._setupPlayerList(s.ps),
                      h = s.cps;
                    this.playerWriter.totalPlayer = h;
                    var p = [],
                      o = null,
                      c = s.rob,
                      y = s.gr;
                    c && ((p = c.split(",")), (this._rangeOfBets = p)),
                      y && (o = this._parseGateRate(y));
                    var _ = null,
                      d = s.tbds;
                    d && (_ = this.betWriter._parseBettingBoxesAmount(d));
                    var m = null,
                      g = l.dr,
                      f = l.an,
                      S = l.gwrs;
                    g &&
                      S &&
                      ((this._lastGwrs = S.split(",")),
                      (this._lastGameResults = {
                        diceResult: this._parseDiceResult(g),
                        anim: f || null,
                      }),
                      (m = this._lastGameResults));
                    var v = null,
                      W = null,
                      P = null,
                      b = null,
                      k = null;
                    if (l) {
                      var B = l.pbds,
                        R = l.pwrs,
                        C = l.ttbam,
                        M = l.wam,
                        I = l.tam,
                        x = l.jpwin;
                      B &&
                        ((W = this.betWriter._parseBettingBoxesAmount(B)),
                        this.betWriter.updateMapTotalAmountByGateOfCtxPlayer(W),
                        this.betWriter._updateCurBettingDetail()),
                        R && (P = this._parseWinnerResult(R, M, I)),
                        C && (b = C),
                        x && (v = this._parseJPWin(x));
                    }
                    var T = null;
                    if (_) {
                      var w = {};
                      for (var A in (_.forEach(function (t) {
                        w[t.type] || (w[t.type] = 0),
                          (w[t.type] += t.betAmount),
                          W &&
                            W.forEach(function (t) {
                              w[t.type] && (w[t.type] -= t.betAmount);
                            });
                      }),
                      (T = []),
                      w))
                        w[A] && T.push({ type: A, betAmount: w[A] });
                    }
                    var D = s.er,
                      G = s.lhr,
                      H = s.md5,
                      L = s.key,
                      N = s.keyI,
                      O = s.keyR,
                      E = null,
                      U = null;
                    G && (E = this._parseLastHistoryResult(G)),
                      H && !this._md5 && ((this._md5 = H), (U = H)),
                      L &&
                        null != N &&
                        O &&
                        !this._keyMd5 &&
                        ((this._keyMd5 = { key: L, keyI: N, keyR: O }),
                        (k = this._keyMd5));
                    var K = s.mxa,
                      Y = null;
                    K && !this._mxa && ((this._mxa = K), (Y = K.split(","))),
                      e.push({
                        code: "_setupTable",
                        data: {
                          gn: a,
                          resultHistory: i,
                          mapPlayer: u,
                          totalPlayer: h,
                          gateRates: o,
                          rangeOfBets: p,
                          tableBettingDetails: _,
                          playerBettingDetails: W,
                          remainsBettingDetails: T,
                          winnerResults: P,
                          gameResults: m,
                          totalBetAmount: b,
                          er: D,
                          lastHistoryResult: E,
                          jpReward: v,
                          md5Content: U,
                          keyResult: k,
                          mxaBet: Y,
                        },
                      });
                    var j = s.cs,
                      F = s.st,
                      J = s.nt,
                      z = s.svt,
                      Z = s.clt;
                    e = e.concat(
                      this._makeScriptChangeState({
                        cs: j,
                        st: F,
                        nt: J,
                        svt: z,
                        clt: Z,
                        gn: a,
                      })
                    );
                  }
                  return e;
                }),
                (r.makeScriptResume = function (t) {
                  var e = [];
                  i("makeScriptResume", t);
                  var s = t.tableData,
                    a = t.playerData,
                    r = null;
                  if (s) {
                    var l = s.tbds,
                      n = s.ps,
                      u = s.cs,
                      h = s.cps;
                    r = u;
                    var p = null;
                    if (
                      (l &&
                        this.betWriter.predictMapTotalAmountByGates &&
                        (p = c.cloneDeep(
                          this.betWriter.predictMapTotalAmountByGates
                        )),
                      (e = e.concat(this.makeScriptGameState(s))),
                      n &&
                        a &&
                        a.pi &&
                        ((this.playerWriter.mapPlayerById = {}),
                        (this.playerWriter.mapPlayerBySeat = {}),
                        this.playerWriter._setupContextPlayer(
                          this.playerWriter._parsePlayerByStr(a.pi)
                        ),
                        this.playerWriter._setupPlayerList(n),
                        e.push({
                          code: "_refreshPlayersOnTable",
                          data: c.cloneDeep(this.playerWriter.mapPlayerById),
                        })),
                      (e = e.concat(
                        this.playerWriter._makeScriptUpdateTotalPlayer(h, !0)
                      )),
                      this._isExistsCmdInScripts(e, "_clearPlayingSession") &&
                        (p = {}),
                      l)
                    ) {
                      var o = this.betWriter._parseBettingBoxesAmount(l);
                      if (o && p)
                        for (var y = 0; y < o.length; y++) {
                          var _ = o[y],
                            d = _.type,
                            m = _.betAmount;
                          !p[d] && (p[d] = 0);
                          var g = p[d];
                          g < m &&
                            e.push({
                              code: "_setupBettingForBox",
                              data: { betId: d, betAmount: m - g },
                            });
                        }
                    }
                    e = e.concat(this.betWriter.makeScriptOthersBetting(s));
                  }
                  if (a) {
                    var f = a.gn;
                    this._currPlaySessionNum === f &&
                      0 !== r &&
                      (e = e.concat(this.makeScriptPlayerState(a)));
                  }
                  return (
                    this._isExistsCmdInScripts(e, "_clearPlayingSession") &&
                      !this._isExistsCmdInScripts(e, "_updateHistory") &&
                      e.push({ code: "_updateHistory", data: null }),
                    this._isExistsCmdInScripts(e, "_clearPlayingSession") &&
                      !this._isExistsCmdInScripts(e, "_updateLastResult") &&
                      e.push({ code: "_updateLastResult", data: null }),
                    e.push({
                      code: "_updateMD5AndKey",
                      data: {
                        md5Content: this.getKeyMD5(),
                        keyResult: this.getKeyResult(),
                      },
                    }),
                    e
                  );
                }),
                (r.makeScriptGameState = function (t) {
                  var e = [];
                  if (t) {
                    var s = t.gn,
                      a = t.cps;
                    if (s && this._currPlaySessionNum) {
                      var r = s,
                        l = t.cs;
                      r &&
                        ((this._currPlaySessionNum && l < this._currState) ||
                          this._currPlaySessionNum != r) &&
                        ((this._currPlaySessionNum = r),
                        this.resetPlaySession(),
                        e.push({ code: "_clearPlayingSession" }));
                    }
                    var n = t.cs,
                      u = t.st,
                      h = t.nt,
                      p = t.svt,
                      o = t.clt,
                      c = t.tbds,
                      y = t.ps,
                      _ = t.tw,
                      d = t.md5,
                      m = t.key,
                      g = t.keyI,
                      f = t.keyR;
                    d && !this._md5 && (this._md5 = d),
                      m &&
                        null != g &&
                        f &&
                        !this._keyMd5 &&
                        (this._keyMd5 = { key: m, keyI: g, keyR: f }),
                      (e = (e = (e = (e = e.concat(
                        this._makeScriptChangeState({
                          gn: s,
                          cs: n,
                          st: u,
                          nt: h,
                          svt: p,
                          clt: o,
                        })
                      )).concat(
                        this.betWriter._makeScriptUpdateTableBettingBoxes(c)
                      )).concat(
                        this.playerWriter._makeScriptUpdateTotalPlayer(a)
                      )).concat(
                        this.playerWriter._makeScriptUpdatePlayerListInfo(y)
                      )),
                      _ &&
                        (e = e.concat(
                          this.betWriter._makeScriptShowTopUserBet(_)
                        )),
                      0 === n &&
                        (e = e.concat(
                          this.playerWriter._makeScriptArrangePlayersBy(y)
                        )).push({ code: "_refreshPlayerList" });
                    var S = t.rh;
                    !S ||
                      (this._resultHistory && this._resultHistory === S) ||
                      ((this._resultHistory = S),
                      e.push({
                        code: "_updateTableHistory",
                        data: this._resultHistory.split(","),
                      }));
                    var v = t.lhr,
                      W = null;
                    v &&
                      ((W = this._parseLastHistoryResult(v)),
                      e.push({ code: "_updateAnalytis", data: W }),
                      this._isExistsCmdInScripts(e, "_clearPlayingSession") &&
                        e.push({ code: "_updateLastResultPanel", data: W })),
                      this._isExistsCmdInScripts(e, "_clearPlayingSession") &&
                        (e.push({ code: "_updateLastResult", data: null }),
                        i(
                          "this._previoustBettingDetail",
                          this.betWriter.previousBettingDetail
                        ),
                        this.betWriter.previousBettingDetail &&
                          e.push({ code: "_updateHistory", data: null }),
                        e.push({ code: "_onChangeTableMode" }),
                        0 === n && e.push({ code: "_showDiceShaker" }));
                  }
                  return e;
                }),
                (r._makeScriptShowDiceResult = function (t, e, s, a) {
                  var r = [];
                  return (
                    t &&
                      !this._lastGameResults &&
                      ((this._lastGameResults = {
                        diceResult: this._parseDiceResult(t),
                        anim: e || null,
                      }),
                      r.push({
                        code: "_showGameResults",
                        data: { duration: (s - a) / 1e3 },
                      })),
                    r
                  );
                }),
                (r.makeScriptChatMessage = function (t) {
                  var e = t.content,
                    s = e.substring(e.indexOf(":::") + 3),
                    a = e.substring(0, e.indexOf(":::")),
                    r = this.playerWriter.mapPlayerById[a];
                  r && r.seat > this.playerWriter.maxSeat && (r = null),
                    this.listChatMessage &&
                      this.listChatMessage.length >= this.LIMIT_CHAT_HISTORY &&
                      this.listChatMessage.shift(),
                    this.listChatMessage.push(t);
                  var i = [];
                  return (
                    i.push({
                      code: "_showPlayerChatMessage",
                      data: { player: r, content: s },
                    }),
                    i.push({
                      code: "_showChatMessage",
                      data: this.listChatMessage,
                    }),
                    i
                  );
                }),
                (r.makeScriptShowChatsHistory = function (t) {
                  if (t.listMessageChat) {
                    this.listChatMessage = [];
                    for (var e = t.listMessageChat, s = 0; s < e.length; s++)
                      this.listChatMessage.push(e[s]);
                    return (
                      this.listChatMessage.length > this.LIMIT_CHAT_HISTORY &&
                        (this.listChatMessage = this.listChatMessage.slice(
                          this.listChatMessage.length - this.LIMIT_CHAT_HISTORY,
                          this.LIMIT_CHAT_HISTORY
                        )),
                      [{ code: "_showChatHistory", data: this.listChatMessage }]
                    );
                  }
                }),
                (r.makeScriptAnimEvent = function (t) {
                  var e = [];
                  return (
                    t &&
                      1 == this._currState &&
                      e.push({ code: "_playDealerAnim", data: { data: t } }),
                    e
                  );
                }),
                (r.makeScriptPlayerState = function (t) {
                  var e = [],
                    s = t.pbds,
                    a = t.ttbam,
                    r = t.pwrs,
                    i = t.pi,
                    n = t.brs,
                    u = t.gwrs,
                    h = t.wam,
                    p = t.tam,
                    o = t.prd,
                    y = t.tbrs,
                    _ = t.dr,
                    d = t.an,
                    m = t.ti,
                    g = t.key,
                    f = t.keyI,
                    S = t.keyR,
                    v = t.cs,
                    W = t.st,
                    P = t.nt,
                    b = t.svt,
                    k = t.clt,
                    B = t.gn;
                  if (
                    ((e = e.concat(
                      this._makeScriptChangeState({
                        gn: B,
                        cs: v,
                        st: W,
                        nt: P,
                        svt: b,
                        clt: k,
                      })
                    )),
                    i)
                  ) {
                    var R = this.playerWriter._parsePlayerByStr(i),
                      C =
                        this.playerWriter.mapPlayerById[
                          this.playerWriter.contextPlayerId
                        ];
                    C && R && (C.displayMoney = R.displayMoney);
                  }
                  if (!c.isEmpty(s)) {
                    var M = this.betWriter._parseBettingBoxesAmount(s);
                    e.push({ code: "_updatePlayerBettingAmount", data: M }),
                      this.betWriter.updateMapTotalAmountByGateOfCtxPlayer(M),
                      this.betWriter._updateCurBettingDetail(),
                      (this.betWriter.lastBettingDetail = null);
                  }
                  _ &&
                    u &&
                    ((this._lastGwrs = u.split(",")),
                    (e = e.concat(this._makeScriptShowDiceResult(_, d, P, b)))),
                    g &&
                      null != f &&
                      S &&
                      !this._keyMd5 &&
                      (this._keyMd5 = { key: g, keyI: f, keyR: S });
                  var I = [];
                  if (n)
                    for (var x = n.split(","), T = 0; T < x.length; T++) {
                      var w = x[T].split(":"),
                        A = Number(w[0]),
                        D = 100 * Number(w[1]),
                        G = w[2];
                      I.push({ betId: A, betAmount: D, status: G });
                    }
                  if (n && !this._lastBrs) {
                    this._lastBrs = n;
                    for (
                      var H = n.split(","), L = [], N = 0;
                      N < H.length;
                      N++
                    ) {
                      var O = H[N].split(":"),
                        E = Number(O[0]),
                        U = 100 * Number(O[1]),
                        K = O[2];
                      L.push({ betId: E, betAmount: U, status: K });
                    }
                    var Y = [];
                    if (
                      this._lastGameResults &&
                      this._lastGameResults.diceResult &&
                      11 == this._lastGameResults.diceResult.type
                    )
                      for (
                        var j = this.betWriter.mapTotalAmountByGateOfCtxPlayer,
                          F = this.betWriter.mapTotalAmountByGates,
                          J = 0;
                        J < 4;
                        J++
                      )
                        !j[J + 1] && F[J + 1] && Y.push(J + 1);
                    e.push({
                      code: "_showPlayerWinBetBoxes",
                      data: { brs: L, arrGateTie: Y },
                    });
                  }
                  return (
                    4 !== v ||
                      this._lastPwrs ||
                      ((this._lastPwrs = r),
                      e.push({
                        code: "_showWinnerResults",
                        data: {
                          tbrs: y,
                          brs: n,
                          gateWins: this._parseGateWin(u, m),
                          wonWins: this._parseWinnerResult(r, h, p),
                          prd: o,
                          duration: (P - b) / 1e3,
                          tieInfos: this._parseTieInfo(m),
                          playerWonBet: I,
                        },
                      }),
                      l("pwrs", r)),
                    a && e.push({ code: "_updatePlayerTotalBetting", data: a }),
                    e
                  );
                }),
                s(a, [
                  {
                    key: "playerWriter",
                    get: function () {
                      return this._playerWriter;
                    },
                  },
                  {
                    key: "mxa",
                    get: function () {
                      return this._mxa;
                    },
                    set: function (t) {
                      this._mxa = t;
                    },
                  },
                ]),
                a
              );
            })(h))
          ) || p
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GlassParticle3986.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, r, i, n, a, o, c, s, l;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (r = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (c = t.Node),
            (s = t.ParticleSystem2D),
            (l = t.Component);
        },
      ],
      execute: function () {
        var u, p, h, f, d;
        a._RF.push({}, "65c25JzHqFIVqHfmS7kUVrr", "GlassParticle3986", void 0);
        var y = o.ccclass,
          P = o.property;
        t(
          "GlassParticle3986",
          ((u = y("GlassParticle3986")),
          (p = P([c])),
          u(
            ((d = e(
              (f = (function (t) {
                function e() {
                  for (
                    var e, r = arguments.length, a = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "arrNode", d, n(e)),
                    e
                  );
                }
                r(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var t = this.node;
                    (t.playParticle = this.playParticle.bind(this)),
                      (t.hideParticle = this.hideParticle.bind(this));
                  }),
                  (a.playParticle = function () {
                    this.arrNode.forEach(function (t) {
                      t.getComponent(s).resetSystem();
                    });
                  }),
                  (a.hideParticle = function () {
                    this.arrNode.forEach(function (t) {
                      t.getComponent(s).stopSystem();
                    });
                  }),
                  e
                );
              })(l)).prototype,
              "arrNode",
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
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LastResultForAnim3986.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var i, t, r, n, a, s, o, c, l;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (s = e.Sprite),
            (o = e.SpriteFrame),
            (c = e._decorator),
            (l = e.Component);
        },
      ],
      execute: function () {
        var u, p, m, d, h, g, y, f, D, F, b;
        a._RF.push(
          {},
          "ed18cNRQ4VDlJv1+APNVB8X",
          "LastResultForAnim3986",
          void 0
        );
        var v = c,
          R = v.ccclass,
          S = v.property;
        e(
          "LastResultForAnim3986",
          ((u = R("LastResultForAnim3986")),
          (p = S({ displayName: "img Dice 1", type: s })),
          (m = S({ displayName: "img Dice 2", type: s })),
          (d = S({ displayName: "img Dice 3", type: s })),
          (h = S({ displayName: "dices SpriteFrame", type: o })),
          u(
            ((f = i(
              (y = (function (e) {
                function i() {
                  for (
                    var i, t = arguments.length, a = new Array(t), s = 0;
                    s < t;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (i = e.call.apply(e, [this].concat(a)) || this),
                    r(i, "imgDice1", f, n(i)),
                    r(i, "imgDice2", D, n(i)),
                    r(i, "imgDice3", F, n(i)),
                    r(i, "dicesSpriteFrame", b, n(i)),
                    i
                  );
                }
                t(i, e);
                var a = i.prototype;
                return (
                  (a.onLoad = function () {
                    this.node.showResult = this.showResult.bind(this);
                  }),
                  (a.showResult = function (e) {
                    (this.node.active = !1),
                      (this.imgDice1.spriteFrame =
                        this.dicesSpriteFrame[e.data.d1 - 1]),
                      (this.imgDice2.spriteFrame =
                        this.dicesSpriteFrame[e.data.d2 - 1]),
                      (this.imgDice3.spriteFrame =
                        this.dicesSpriteFrame[e.data.d3 - 1]);
                  }),
                  (a.hide = function () {
                    this.node.active = !1;
                  }),
                  i
                );
              })(l)).prototype,
              "imgDice1",
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
            (D = i(y.prototype, "imgDice2", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = i(y.prototype, "imgDice3", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = i(y.prototype, "dicesSpriteFrame", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (g = y))
          ) || g)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LastResultPanel3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTSubscriber.ts",
  ],
  function (i) {
    "use strict";
    var e, t, s, n, r, a, o, c, l, m, u, p, g, h;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (s = i.initializerDefineProperty),
            (n = i.assertThisInitialized);
        },
        function (i) {
          (r = i.cclegacy),
            (a = i.Sprite),
            (o = i.Label),
            (c = i.SpriteFrame),
            (l = i._decorator),
            (m = i.Tween),
            (u = i.tween),
            (p = i.v3),
            (g = i.UITransform);
        },
        null,
        function (i) {
          h = i.BTSubscriber;
        },
      ],
      execute: function () {
        var d, D, b, f, y, v, F, A, P, R, S, w, T, I, z, U, O, _, L, N, M;
        r._RF.push(
          {},
          "e83356GJcJPzbnMJ2t+dQvJ",
          "LastResultPanel3986",
          void 0
        );
        var B = l,
          C = B.ccclass,
          E = B.property;
        i(
          "LastResultPanel3986",
          ((d = C("LastResultPanel3986")),
          (D = E({ displayName: "img Dice 1", type: a })),
          (b = E({ displayName: "img Dice 2", type: a })),
          (f = E({ displayName: "img Dice 3", type: a })),
          (y = E({ displayName: "img Dice Anim 1", type: a })),
          (v = E({ displayName: "img Dice Anim 2", type: a })),
          (F = E({ displayName: "img Dice Anim 3", type: a })),
          (A = E({ displayName: "lbResult", type: o })),
          (P = E({ displayName: "icon SpriteFrame", type: c })),
          (R = E({ displayName: "dices SpriteFrame", type: c })),
          d(
            ((T = e(
              (w = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, r = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = i.call.apply(i, [this].concat(r)) || this),
                    s(e, "imgDice1", T, n(e)),
                    s(e, "imgDice2", I, n(e)),
                    s(e, "imgDice3", z, n(e)),
                    s(e, "imgAnimDice1", U, n(e)),
                    s(e, "imgAnimDice2", O, n(e)),
                    s(e, "imgAnimDice3", _, n(e)),
                    s(e, "lbResult", L, n(e)),
                    s(e, "iconSpriteFrame", N, n(e)),
                    s(e, "dicesSpriteFrame", M, n(e)),
                    (e.listDices = null),
                    (e.listDiceMoveOriginPos = []),
                    e
                  );
                }
                t(e, i);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    this.listDices = [];
                    var i = this.node;
                    (i.updateResult = this.updateResult.bind(this)),
                      (i.updateResultResume =
                        this.updateResultResume.bind(this)),
                      (i.resetUI = this.resetUI.bind(this)),
                      (this.lbResult.string = ""),
                      this.listDiceMoveOriginPos.push(
                        this.imgAnimDice1.node.getPosition()
                      ),
                      this.listDiceMoveOriginPos.push(
                        this.imgAnimDice2.node.getPosition()
                      ),
                      this.listDiceMoveOriginPos.push(
                        this.imgAnimDice3.node.getPosition()
                      ),
                      this.setVisibelUI(!1);
                  }),
                  (r.setUpDiceForAnim = function (i) {
                    (this.imgAnimDice1.spriteFrame =
                      this.dicesSpriteFrame[i.data.d1 - 1]),
                      (this.imgAnimDice2.spriteFrame =
                        this.dicesSpriteFrame[i.data.d2 - 1]),
                      (this.imgAnimDice3.spriteFrame =
                        this.dicesSpriteFrame[i.data.d3 - 1]),
                      this.imgAnimDice1.node.setPosition(
                        this.listDiceMoveOriginPos[0]
                      ),
                      this.imgAnimDice2.node.setPosition(
                        this.listDiceMoveOriginPos[1]
                      ),
                      this.imgAnimDice3.node.setPosition(
                        this.listDiceMoveOriginPos[2]
                      );
                  }),
                  (r.updateResult = function (i, e) {
                    var t = this;
                    void 0 === e && (e = !0),
                      this.resetUI(),
                      this.setVisibelUI(!0),
                      this.setUpDiceForAnim(i),
                      e ||
                        ((this.imgDice1.spriteFrame = null),
                        (this.imgDice2.spriteFrame = null),
                        (this.imgDice3.spriteFrame = null)),
                      this._moveDice(
                        this.imgAnimDice1,
                        this.imgDice1,
                        e ? 0.6 : 0
                      ),
                      this._moveDice(
                        this.imgAnimDice2,
                        this.imgDice2,
                        e ? 0.7 : 0
                      ),
                      this._moveDice(
                        this.imgAnimDice3,
                        this.imgDice3,
                        e ? 0.8 : 0,
                        function () {
                          (t.lbResult.string =
                            i.data.sum +
                            " / " +
                            t.getConfig().TYPE_RESULT[i.data.resultType]),
                            (t.node.active = !0);
                        }
                      );
                  }),
                  (r.updateResultResume = function (i, e) {
                    (this.imgDice1.spriteFrame = e[i.d1 - 1]),
                      (this.imgDice2.spriteFrame = e[i.d2 - 1]),
                      (this.imgDice3.spriteFrame = e[i.d3 - 1]),
                      (this.lbResult.string =
                        i.data.sum +
                        " / " +
                        this.getConfig().TYPE_RESULT[i.data.resultType]),
                      (this.node.active = !0);
                  }),
                  (r._getSpriteFrameFromCode = function (i) {
                    if (Array.isArray(this.iconSpriteFrame))
                      switch (Number(i)) {
                        case 4:
                          return this.iconSpriteFrame[1];
                        case 3:
                          return this.iconSpriteFrame[0];
                        case 11:
                          return this.iconSpriteFrame[2];
                        default:
                          return this.iconSpriteFrame[0];
                      }
                  }),
                  (r.resetUI = function () {
                    this.listDices &&
                      (this.listDices.forEach(function (i) {
                        m.stopAllByTarget(i);
                      }),
                      (this.listDices = []));
                  }),
                  (r._moveDice = function (i, e, t, s) {
                    void 0 === s && (s = null),
                      (this.listDices = this.listDices || []);
                    var n = i.node.getPosition();
                    m.stopAllByTarget(i.node),
                      u(i.node)
                        .to(
                          t,
                          { position: e.node.getPosition() },
                          { easing: "sineInOut" }
                        )
                        .call(function () {
                          (e.spriteFrame = i.spriteFrame),
                            i.node.setPosition(n),
                            m.stopAllByTarget(e),
                            u(e)
                              .to(
                                0.2,
                                { scale: p(1.3, 1.3) },
                                { easing: "sineInOut" }
                              )
                              .to(
                                0.2,
                                { scale: p(1.3, 1) },
                                { easing: "sineInOut" }
                              ),
                            s && s();
                        })
                        .start();
                    var r =
                      e.node.getComponent(g).width / i.getComponent(g).width;
                    u(i.node)
                      .to(t, { scale: p(r, r) }, { easing: "sineInOut" })
                      .start(),
                      this.listDices.push(i);
                  }),
                  (r.setVisibelUI = function (i) {
                    (this.lbResult.node.active = i),
                      (this.imgDice1.node.active = i),
                      (this.imgDice2.node.active = i),
                      (this.imgDice3.node.active = i);
                  }),
                  e
                );
              })(h)).prototype,
              "imgDice1",
              [D],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (I = e(w.prototype, "imgDice2", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(w.prototype, "imgDice3", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = e(w.prototype, "imgAnimDice1", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = e(w.prototype, "imgAnimDice2", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = e(w.prototype, "imgAnimDice3", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(w.prototype, "lbResult", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(w.prototype, "iconSpriteFrame", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (M = e(w.prototype, "dicesSpriteFrame", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = w))
          ) || S)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ListGateMaxBetAmount3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTEventCode.ts",
    "./BTSoundManager.ts",
    "./BTSubscriber.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, a, s, l, r, u, p, c, h, y, f, P;
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
            (s = t.Button),
            (l = t.Node),
            (r = t._decorator),
            (u = t.log),
            (p = t.Tween),
            (c = t.tween),
            (h = t.v3);
        },
        null,
        function (t) {
          y = t.BTEventCode;
        },
        function (t) {
          f = t.BTSoundManager;
        },
        function (t) {
          P = t.BTSubscriber;
        },
      ],
      execute: function () {
        var b, d, v, g, B, m, w, x, S, M, T, C, G, O, X, E, L;
        a._RF.push(
          {},
          "0b722s7RLRNbYCc/g2oqtDJ",
          "ListGateMaxBetAmount3986",
          void 0
        );
        var N = r,
          F = N.ccclass,
          z = N.property;
        t(
          "ListGateMaxBetAmount3986",
          ((b = F("ListGateMaxBetAmount3986")),
          (d = z({ displayName: "btnHide", type: s })),
          (v = z({ displayName: "listGateMaxBetPopup", type: l })),
          (g = z({ displayName: "overlay", type: l })),
          (B = z({ displayName: "isOpenSFX" })),
          (m = z({ displayName: "isCloseSFX" })),
          (w = z({ displayName: "txtMaxBet", type: l })),
          (x = z({ displayName: "scrollView", type: l })),
          b(
            ((T = e(
              (M = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "btnHide", T, o(e)),
                    n(e, "listGateMaxBetPopup", C, o(e)),
                    n(e, "overlay", G, o(e)),
                    n(e, "isOpenSFX", O, o(e)),
                    n(e, "isCloseSFX", X, o(e)),
                    n(e, "txtMaxBet", E, o(e)),
                    n(e, "scrollView", L, o(e)),
                    (e.isShowPanel = null),
                    (e.initXPopup = null),
                    (e.initYPopup = null),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.isShowPanel = !1),
                      this.registerEvent(
                        y.SHOW_MAXBET_POPUP,
                        this.show.bind(this)
                      ),
                      this.overlay.on(
                        l.EventType.TOUCH_END,
                        this.onOutTouch,
                        this
                      ),
                      (this.overlay.active = !1),
                      (this.initXPopup =
                        this.listGateMaxBetPopup.getPosition().x),
                      (this.initYPopup =
                        this.listGateMaxBetPopup.getPosition().y),
                      (this.node.active = !1);
                  }),
                  (a.onOutTouch = function () {
                    this.fireEvent(this.getConfig().EVENT_CODE.CLICK_OVERLAY),
                      this.hidePopup();
                  }),
                  (a.show = function () {
                    var t = this;
                    if (this.isShowPanel) this.hidePopup();
                    else {
                      var e;
                      if (this.isOpenSFX)
                        null == (e = f.getInstance()) || e.openPopup(!0);
                      u("show | list gate max bet amount"),
                        (this.node.active = !0);
                      p.stopAllByTarget(this.listGateMaxBetPopup),
                        c(this.listGateMaxBetPopup)
                          .to(
                            0.3,
                            { position: h(0, this.initYPopup) },
                            { easing: "sineOut" }
                          )
                          .call(function () {
                            (t.overlay.active = !0), (t.isShowPanel = !0);
                          })
                          .start();
                    }
                  }),
                  (a.hidePopup = function () {
                    var t = this;
                    if (this.isShowPanel) {
                      var e;
                      if (((this.isShowPanel = !1), this.isCloseSFX))
                        null == (e = f.getInstance()) || e.closePopup(!0);
                      u("hide | list gate max bet amount"),
                        p.stopAllByTarget(this.listGateMaxBetPopup),
                        c(this.listGateMaxBetPopup)
                          .to(
                            0.3,
                            { position: h(this.initXPopup, this.initYPopup) },
                            { easing: "sineIn" }
                          )
                          .call(function () {
                            (t.overlay.active = !1), (t.node.active = !1);
                          })
                          .start();
                    }
                  }),
                  (a.onClickShowPopup = function () {
                    u("onClickShowPopup | list gate max bet amount"),
                      (this.node.active = !0);
                  }),
                  e
                );
              })(P)).prototype,
              "btnHide",
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
            (C = e(M.prototype, "listGateMaxBetPopup", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = e(M.prototype, "overlay", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = e(M.prototype, "isOpenSFX", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (X = e(M.prototype, "isCloseSFX", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (E = e(M.prototype, "txtMaxBet", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (L = e(M.prototype, "scrollView", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = M))
          ) || S)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MD5_3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTMD5v2.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, s, l, r, o, a, h, g, u, d, y, c, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (r = t._decorator),
            (o = t.Node),
            (a = t.Layout),
            (h = t.UITransform),
            (g = t.Button),
            (u = t.Label),
            (d = t.Mask),
            (y = t.Tween),
            (c = t.tween);
        },
        null,
        function (t) {
          p = t.BTMD5v2;
        },
      ],
      execute: function () {
        var b, v, f, m, K, C, M;
        l._RF.push({}, "9adb6dvI45FJaWTzxq0rRda", "MD5_3986", void 0);
        _;
        var T = r.ccclass,
          D = r.property;
        t(
          "MD5_3986",
          ((b = T("MD5_3986")),
          (v = D({ type: o })),
          (f = D({ type: o })),
          b(
            ((C = e(
              (K = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, l = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    l[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(l)) || this),
                    n(e, "keyResultHolder", C, s(e)),
                    n(e, "lblTitle", M, s(e)),
                    (e._widthMD5Origin = 0),
                    (e._widthKeyOrigin = 0),
                    (e._md5 = null),
                    (e._keyMd5 = null),
                    e
                  );
                }
                i(e, t);
                var l = e.prototype;
                return (
                  (l.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.keyParent.getComponent(a).enabled = !0),
                      this._bindEvent();
                  }),
                  (l._init = function () {
                    t.prototype._init.call(this),
                      this.md5Parent &&
                        (this._widthMD5Origin = this.md5.getComponent(h).width),
                      this.keyResultHolder &&
                        (this._widthKeyOrigin = this.key.getComponent(h).width);
                  }),
                  (l._bindEvent = function () {
                    var t = this;
                    this.btnCopy.off(g.EventType.CLICK),
                      this.btnCopy.on(g.EventType.CLICK, function () {
                        t._onBtnCopy();
                      });
                  }),
                  (l.showMD5Content = function (t, e) {
                    if ((void 0 === e && (e = !0), !e || this._md5 != t)) {
                      (this._md5 = t), this._resetUI();
                      var i = this._shortenString(t, 32, 32, "...", !1, !1, !1);
                      (this.lblTitle.active = !0),
                        this.lblTitle.getComponent(u) &&
                          (this.lblTitle.getComponent(u).string = "MD5:"),
                        (this.labelCopyText.string = this.COPY_TEXT.MD5),
                        (this.md5.active = !0),
                        (this.labelMd5Content.string = i),
                        (this.contentValue = t),
                        this.labelMd5Content.updateRenderData(!0);
                      var n = 0;
                      if (e) {
                        var s;
                        (this.spineEffect.active = !0),
                          (this.spineEffect.opacity = 255);
                        var l = this.getConfig().MD5.ANIM_NAME.MD5;
                        this.anim.timeScale = 1;
                        var r = this.anim.setAnimation(0, l, !1);
                        n =
                          null == r || null == (s = r.animation)
                            ? void 0
                            : s.duration;
                      }
                      this._playAnimTransform(this.md5, n, e);
                    }
                  }),
                  (l.showKeyResult = function (t, e) {
                    if (
                      (void 0 === e && (e = !0),
                      !e || JSON.stringify(this._keyMd5) != JSON.stringify(t))
                    ) {
                      (this._keyMd5 = t),
                        this._resetUI(),
                        (this.lblTitle.active = !0),
                        this.lblTitle.getComponent(u) &&
                          (this.lblTitle.getComponent(u).string = "KEY:"),
                        (this.labelCopyText.string = this.COPY_TEXT.RESULT),
                        (this.key.active = !0),
                        this._mergeKeyResult(t);
                      var i = 0;
                      if (e) {
                        var n;
                        (this.spineEffect.active = !0),
                          (this.spineEffect.opacity = 255);
                        var s = this.getConfig().MD5.ANIM_NAME.KEY;
                        this.anim.timeScale = 1;
                        var l = this.anim.setAnimation(0, s, !1);
                        i =
                          null == l || null == (n = l.animation)
                            ? void 0
                            : n.duration;
                      }
                      this._playAnimTransform(this.key, i, e, !1);
                    }
                  }),
                  (l._playAnimTransform = function (t, e, i, n) {
                    if (
                      (void 0 === e && (e = 0),
                      void 0 === i && (i = !0),
                      void 0 === n && (n = !0),
                      t)
                    ) {
                      var s = t.getComponent(h);
                      s.getComponent(h).width = 0;
                      var l = n ? this._widthMD5Origin : this._widthKeyOrigin,
                        r = t.getComponent(d);
                      if ((r && (r.enabled = !1), y.stopAllByTarget(t), !i))
                        return void (s.getComponent(h).width = l);
                      r && (r.enabled = !0),
                        c(s)
                          .to(e, { width: l })
                          .call(function () {
                            r && (r.enabled = !1);
                          })
                          .start();
                    }
                  }),
                  (l._mergeKeyResult = function (t, e) {
                    void 0 === e && (e = 8);
                    var i = t.keyR,
                      n = t.keyI,
                      s = t.key;
                    if (!isNaN(n)) {
                      var l,
                        r,
                        o,
                        g = s.slice(0, n + 1),
                        u = i,
                        d = s.slice(n + 1);
                      (this.contentValue = g + u + d),
                        (this.labelFirstKey.string = g),
                        (this.labelKeyResult.string = u),
                        (this.labelSecondKey.string = d);
                      for (
                        var y = 0;
                        y < this.contentValue.length &&
                        (this.labelFirstKey.updateRenderData(!0),
                        this.labelKeyResult.updateRenderData(!0),
                        this.labelSecondKey.updateRenderData(!0),
                        this.keyParent.getComponent(a).updateLayout(),
                        !(
                          this.keyParent.getComponent(h).width <=
                          this.keyResultHolder.getComponent(h).width - 20
                        ));
                        y++
                      )
                        (l =
                          this.labelFirstKey.string.length > e
                            ? this.labelFirstKey.string.substring(
                                0,
                                this.labelFirstKey.string.length - 1
                              )
                            : this.labelFirstKey.string),
                          (r =
                            this.labelKeyResult.string.length > e
                              ? this.labelKeyResult.string.substring(
                                  0,
                                  this.labelKeyResult.string.length - 1
                                )
                              : this.labelKeyResult.string),
                          (o =
                            this.labelSecondKey.string.length > e
                              ? this.labelSecondKey.string.substring(1)
                              : this.labelSecondKey.string),
                          (this.labelFirstKey.string = l),
                          (this.labelKeyResult.string = r),
                          (this.labelSecondKey.string = o);
                      (this.labelFirstKey.string = this._shortenString(
                        l,
                        l.length,
                        l.length - 3,
                        "...",
                        !1,
                        !1,
                        g.length > e
                      )),
                        (this.labelKeyResult.string = this._shortenString(
                          r,
                          r.length,
                          r.length - 3,
                          "",
                          !1
                        )),
                        (this.labelSecondKey.string = this._shortenString(
                          o,
                          o.length,
                          o.length - 3,
                          "...",
                          !1,
                          !0,
                          d.length > e
                        ));
                    }
                  }),
                  (l._onBtnCopy = function () {
                    var e;
                    this.fireEvent("ON_HIDE_MENU"),
                      t.prototype._onBtnCopy.call(this),
                      null == (e = this.getSoundManager()) || e.btnSound();
                  }),
                  (l._shortenString = function (t, e, i, n, s, l, r) {
                    return (
                      void 0 === e && (e = 15),
                      void 0 === i && (i = 12),
                      void 0 === n && (n = "..."),
                      void 0 === s && (s = !1),
                      void 0 === l && (l = !1),
                      void 0 === r && (r = !0),
                      t.length > e
                        ? s
                          ? t.substring(0, i) +
                            n +
                            t.substring(t.length - i, t.length)
                          : l
                          ? n + t.substring(t.length - i)
                          : t.substring(0, i) + n
                        : r
                        ? l
                          ? n + t
                          : t + n
                        : t
                    );
                  }),
                  (l._resetUI = function () {
                    t.prototype._resetUI.call(this),
                      (this.lblTitle.active = !1);
                  }),
                  e
                );
              })(p)).prototype,
              "keyResultHolder",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (M = e(K.prototype, "lblTitle", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = K))
          ) || m)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MD5History3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTCommons.ts",
    "./BTMD5History.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, r, l, s, o, a, y, u, h, c, d, p, b;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (s = e._decorator),
            (o = e.Node),
            (a = e.Label),
            (y = e.Layout),
            (u = e.UITransform),
            (h = e.log),
            (c = e.Tween),
            (d = e.UIOpacity);
        },
        null,
        function (e) {
          p = e.copyTextToClipboard;
        },
        function (e) {
          b = e.BTMD5History;
        },
      ],
      execute: function () {
        var g, K, f, m, v, D, C, S, k, F, H, M, P;
        l._RF.push({}, "e9038vZPx9DwZ+P+R0pUNiE", "MD5History3986", void 0);
        var R = s.ccclass,
          w = s.property;
        e(
          "MD5History3986",
          ((g = R("MD5History3986")),
          (K = w({ displayName: "MD5 Parent", type: o })),
          (f = w({ displayName: "Key Holder", type: o })),
          (m = w({ displayName: "Key Parent", type: o })),
          (v = w({ displayName: "First Key", type: o })),
          (D = w({ displayName: "Second Key", type: o })),
          g(
            ((k = t(
              (S = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, l = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    l[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(l)) || this),
                    i(t, "md5Holder", k, r(t)),
                    i(t, "keyHolder", F, r(t)),
                    i(t, "keyParent", H, r(t)),
                    i(t, "firstKey", M, r(t)),
                    i(t, "secondKey", P, r(t)),
                    (t.labelFirstKey = null),
                    (t.labelSecondKey = null),
                    t
                  );
                }
                n(t, e);
                var l = t.prototype;
                return (
                  (l.onLoad = function () {
                    e.prototype.onLoad.call(this), this.bindProps();
                  }),
                  (l.bindProps = function () {
                    this.firstKey &&
                      this.secondKey &&
                      ((this.labelFirstKey = this.firstKey.getComponent(a)),
                      (this.labelSecondKey = this.secondKey.getComponent(a)));
                  }),
                  (l.updateContent = function (e) {
                    var t = e.md5,
                      n = e.key,
                      i = e.keyIndex,
                      r = e.keyR;
                    this.contentMD5 &&
                      ((this.labelMd5.string = t),
                      (this.copyContent = this.labelMd5.string)),
                      this.contentKey &&
                        n &&
                        null != i &&
                        r &&
                        this._mergeKeyResult(e);
                  }),
                  (l._mergeKeyResult = function (e, t, n) {
                    void 0 === n && (n = 9);
                    var i = e.keyR,
                      r = e.keyIndex,
                      l = e.key;
                    if (!isNaN(r)) {
                      var s = l.slice(0, r + 1),
                        o = i,
                        a = l.slice(r + 1);
                      (this.copyContent = s + o + a),
                        (this.labelFirstKey.string = s),
                        (this.labelKey.string = o),
                        (this.labelSecondKey.string = a);
                      var h = s,
                        c = a;
                      this.labelKey.updateRenderData(!0),
                        this.labelFirstKey.updateRenderData(!0),
                        this.labelSecondKey.updateRenderData(!0);
                      for (
                        var d = 0;
                        d < this.copyContent.length &&
                        (this.labelFirstKey.updateRenderData(!0),
                        this.labelSecondKey.updateRenderData(!0),
                        this.keyParent.getComponent(y).updateLayout(),
                        !(
                          this.keyParent.getComponent(u).width <=
                          this.keyHolder.getComponent(u).width - 20
                        ));
                        d++
                      )
                        (h =
                          this.labelFirstKey.string.length > n
                            ? this.labelFirstKey.string.substring(
                                0,
                                this.labelFirstKey.string.length - 1
                              )
                            : this.labelFirstKey.string),
                          (c =
                            this.labelSecondKey.string.length > n
                              ? this.labelSecondKey.string.substring(1)
                              : this.labelSecondKey.string),
                          (this.labelFirstKey.string = h),
                          (this.labelSecondKey.string = c);
                      (this.labelFirstKey.string = this._shortenString(
                        h,
                        h.length,
                        h.length - 3,
                        "...",
                        !1,
                        !1,
                        s.length > n
                      )),
                        (this.labelSecondKey.string = this._shortenString(
                          c,
                          c.length,
                          c.length - 3,
                          "...",
                          !1,
                          !0,
                          a.length > n
                        ));
                    }
                  }),
                  (l._shortenString = function (e, t, n, i, r, l, s) {
                    return (
                      void 0 === t && (t = 15),
                      void 0 === n && (n = 12),
                      void 0 === i && (i = "..."),
                      void 0 === r && (r = !1),
                      void 0 === l && (l = !1),
                      void 0 === s && (s = !0),
                      e.length > t
                        ? r
                          ? e.substring(0, n) +
                            i +
                            e.substring(e.length - n, e.length)
                          : l
                          ? i + e.substring(e.length - n)
                          : e.substring(0, n) + i
                        : s
                        ? l
                          ? i + e
                          : e + i
                        : e
                    );
                  }),
                  (l.onBtnCopy = function () {
                    h("===onBtnCopyMD5===|"), this._showToast();
                    var e = this.copyContent;
                    p(e);
                  }),
                  (l.hideBubble = function () {
                    c.stopAllByTarget(this.bubble);
                    var e = this.bubble.getComponent(d);
                    c.stopAllByTarget(e), (this.bubble.active = !1);
                  }),
                  t
                );
              })(b)).prototype,
              "md5Holder",
              [K],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (F = t(S.prototype, "keyHolder", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = t(S.prototype, "keyParent", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = t(S.prototype, "firstKey", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = t(S.prototype, "secondKey", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = S))
          ) || C)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MenuOptions3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTEventCode.ts",
    "./BTSoundManager.ts",
    "./BTMenuOptions.ts",
  ],
  function (n) {
    "use strict";
    var t, i, o, e, s, c, u, h;
    return {
      setters: [
        function (n) {
          t = n.inheritsLoose;
        },
        function (n) {
          (i = n.cclegacy), (o = n.Widget), (e = n.Node), (s = n._decorator);
        },
        null,
        function (n) {
          c = n.BTEventCode;
        },
        function (n) {
          u = n.BTSoundManager;
        },
        function (n) {
          h = n.BTMenuOptions;
        },
      ],
      execute: function () {
        var a;
        i._RF.push({}, "a37b2zyigJMWKNtQrumLgPk", "MenuOptions3986", void 0);
        var f = s,
          l = f.ccclass;
        f.property,
          n(
            "MenuOptions3986",
            l("MenuOptions3986")(
              (a = (function (n) {
                function i() {
                  return n.apply(this, arguments) || this;
                }
                t(i, n);
                var s = i.prototype;
                return (
                  (s.start = function () {
                    n.prototype.start.call(this), this.updateWidget();
                  }),
                  (s.updateWidget = function () {
                    var n = this.node.getComponent(o);
                    n && (n.alignMode = o.AlignMode.ALWAYS);
                  }),
                  (s._bindProps = function () {
                    var n = this;
                    this.menuOutTouch.on(
                      e.EventType.TOUCH_END,
                      this.onMenuOutTouch,
                      this
                    ),
                      this.btnMenu &&
                        (this.btnMenu.off("click"),
                        this.btnMenu.on("click", function () {
                          n._showMenuOptions();
                        })),
                      this.btnLeaveRoom &&
                        (this.btnLeaveRoom.off("click"),
                        this.btnLeaveRoom.on("click", function () {
                          n._onHandleLeaveRoom();
                        })),
                      this.btnHistory &&
                        (this.btnHistory.off("click"),
                        this.btnHistory.on("click", function () {
                          n._onHandleShowHistory();
                        })),
                      this.btnRanking &&
                        (this.btnRanking.off("click"),
                        this.btnRanking.on("click", function () {
                          n._onHandleShowGameRanking();
                        })),
                      this.btnGameInfo &&
                        (this.btnGameInfo.off("click"),
                        this.btnGameInfo.on("click", function () {
                          n._onHandleShowGameInfo();
                        })),
                      this.btnSetting &&
                        (this.btnSetting.off("click"),
                        this.btnSetting.on("click", function () {
                          n._onHandleShowMenuSetting();
                        })),
                      this.btnHideMenu &&
                        (this.btnHideMenu.off("click"),
                        this.btnHideMenu.on("click", function () {
                          n._hideMenuOptions(!0);
                        })),
                      this.btnMaxBet &&
                        (this.btnMaxBet.off("click"),
                        this.btnMaxBet.on("click", function () {
                          n.fireEvent(c.HIDE_SETTING_VIEW),
                            n.fireEvent(c.SHOW_MAXBET_POPUP);
                        })),
                      this.registerEvent(c.HIDE_SETTING_VIEW, function () {
                        n._hideMenuOptions();
                      });
                  }),
                  (s._hideMenuOptions = function (t) {
                    var i;
                    (void 0 === t && (t = !1), this.isShowing && t) &&
                      (null == (i = u.getInstance()) || i.closePopup());
                    n.prototype._hideMenuOptions.call(this);
                  }),
                  (s.onMenuOutTouch = function () {
                    this.fireEvent(this.getConfig().EVENT_CODE.CLICK_OVERLAY),
                      this._hideMenuOptions(!0);
                  }),
                  (s._showMenuOptions = function () {
                    var t;
                    this.node.active ||
                      null == (t = u.getInstance()) ||
                      t.openPopup();
                    n.prototype._showMenuOptions.call(this);
                  }),
                  i
                );
              })(h))
            ) || a
          );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NodeCollider3986.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, o, i, l, r, a, c, s, d, h, u, p, g, y, f;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (r = e._decorator),
            (a = e.Node),
            (c = e.PolygonCollider2D),
            (s = e.find),
            (d = e.Camera),
            (h = e.v3),
            (u = e.Intersection2D),
            (p = e.v2),
            (g = e.Tween),
            (y = e.tween),
            (f = e.Component);
        },
      ],
      execute: function () {
        var C, v, T, m, S, E, P;
        l._RF.push({}, "556b2UJXEBGpr6YeLhBnvp+", "NodeCollider3986", void 0);
        var b = r.ccclass,
          N = r.property;
        e(
          "NodeCollider3986",
          ((C = b("NodeCollider3986")),
          (v = N({
            type: a,
            tooltip: "delegate should implement onPolygonColliderClicked",
          })),
          (T = N({ displayName: "Scaler On Click" })),
          C(
            ((E = t(
              (S = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, l = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    l[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(l)) || this),
                    o(t, "delegate", E, i(t)),
                    o(t, "scaler", P, i(t)),
                    (t.originScale = null),
                    (t.camera = null),
                    (t.collider = null),
                    t
                  );
                }
                n(t, e);
                var l = t.prototype;
                return (
                  (l.onLoad = function () {
                    var e = this;
                    if (
                      ((this.collider = this.getComponent(c)),
                      this.delegate && this.collider)
                    ) {
                      var t = s("Canvas");
                      (this.camera = null),
                        t && (this.camera = t.getComponentInChildren(d)),
                        (this.originScale = this.node.getScale()),
                        this.node.on(a.EventType.TOUCH_START, function (t) {
                          e.handleTouchStart(t);
                        }),
                        this.node.on(a.EventType.TOUCH_CANCEL, function (t) {
                          e.handleTouchEnd(t);
                        }),
                        this.node.on(a.EventType.TOUCH_END, function (t) {
                          e.handleTouchEnd(t);
                        });
                    }
                  }),
                  (l.handleTouchEnd = function (e) {
                    var t = e.getLocation(),
                      n = h();
                    if (
                      (this.camera.screenToWorld(h(t.x, t.y, 0), n),
                      u.pointInPolygon(p(n.x, n.y), this.collider.worldPoints))
                    ) {
                      var o = this.delegate.onPolygonColliderClicked;
                      o && "function" == typeof o && o();
                    }
                    0 != this.scaler &&
                      (g.stopAllByTarget(this.node),
                      y(this.node)
                        .to(
                          0.06,
                          { scale: this.originScale },
                          { easing: "sineIn" }
                        )
                        .start());
                  }),
                  (l.handleTouchStart = function (e) {
                    var t = e.getLocation(),
                      n = h();
                    if (
                      (this.camera.screenToWorld(h(t.x, t.y, 0), n),
                      u.pointInPolygon(
                        p(n.x, n.y),
                        this.collider.worldPoints
                      ) && 0 != this.scaler)
                    ) {
                      var o = this.originScale.clone();
                      g.stopAllByTarget(this.node),
                        y(this.node)
                          .to(
                            0.06,
                            { scale: o.multiplyScalar(this.scaler) },
                            { easing: "sineOut" }
                          )
                          .start();
                    }
                  }),
                  t
                );
              })(f)).prototype,
              "delegate",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (P = t(S.prototype, "scaler", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1.2;
              },
            })),
            (m = S))
          ) || m)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/OtherPlayerItem3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./Avatar3986.ts",
    "./BTCommons.ts",
    "./BTAnimations.ts",
    "./BTPlayerItem.ts",
  ],
  function (t) {
    "use strict";
    var e, a, n, o, s, i, r, l, u, c, p, h, d;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (a = t.cclegacy),
            (n = t._decorator),
            (o = t.Label),
            (s = t.Tween),
            (i = t.tween),
            (r = t.Vec3),
            (l = t.UIOpacity);
        },
        null,
        function (t) {
          u = t.Avatar3986;
        },
        function (t) {
          (c = t.convertNumberToK), (p = t.shortenUserName);
        },
        function (t) {
          h = t.BTAnimations;
        },
        function (t) {
          d = t.BTPlayerItem;
        },
      ],
      execute: function () {
        var y;
        a._RF.push(
          {},
          "eabe9TI9+VLcLr5N4azF/uQ",
          "OtherPlayerItem3986",
          void 0
        );
        var m = n.ccclass;
        t(
          "OtherPlayerItem3986",
          m("OtherPlayerItem3986")(
            (y = (function (t) {
              function a() {
                return t.apply(this, arguments) || this;
              }
              e(a, t);
              var n = a.prototype;
              return (
                (n.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    (this._runUpdateWalletProcesss = {});
                }),
                (n.start = function () {
                  this.smileySpine.active = !1;
                }),
                (n.updateMoney = function (t) {
                  (this._currMoney = t),
                    (this.lblUserMoney.getComponent(o).string = c(t));
                }),
                (n.updateInfos = function (t) {
                  var e = t.displayName,
                    a = t.avatar,
                    n = t.displayMoney,
                    o = t.seat;
                  p(this.userNameContain, this.lblUserName, e, 5),
                    this._loadAvatar(a),
                    1 != o && this._runUpdateWalletForOthers(n);
                }),
                (n._runUpdateWalletForOthers = function (t) {
                  var e = this;
                  this.gameDataStore.globalData.SHOULD_UPDATE_OTHERS_WALLET
                    ? this.updateMoney(t)
                    : (s.stopAllByTarget(this._runUpdateWalletProcesss),
                      i(this._runUpdateWalletProcesss)
                        .delay(0.1)
                        .call(function () {
                          e.isValid &&
                            e.node.isValid &&
                            e.gameDataStore.globalData
                              .SHOULD_UPDATE_OTHERS_WALLET &&
                            (e.updateMoney(t),
                            s.stopAllByTarget(e._runUpdateWalletProcesss));
                        })
                        .union()
                        .repeatForever()
                        .start());
                }),
                (n.disAppear = function (t, e) {
                  var a = this;
                  return (
                    h.zoomAnim(this.node, 0, t, e, "backIn", function () {
                      s.stopAllByTarget(a._runUpdateWalletProcesss);
                    }),
                    t + e
                  );
                }),
                (n.appear = function (t, e, a) {
                  var n = this;
                  void 0 === a && (a = null);
                  var o = new r();
                  if (null != a) o = a.clone();
                  else {
                    var u = this.origrinalPos.clone(),
                      c = u.x < 0 ? -300 : 300;
                    o = new r(u.x + c, u.y, u.z);
                  }
                  if (this.bubbleTalk && this.bubbleTalk.active) {
                    var p = this.origrinalPos.x > 0 ? -1 : 1;
                    this.bubbleTalk.emit("UPDATE", p);
                  }
                  if (
                    (s.stopAllByTarget(this._runUpdateWalletProcesss),
                    this.gameDataStore.getHideApp())
                  )
                    return (
                      (this.isPaused = !1),
                      this.node.setPosition(this.origrinalPos),
                      void (this.node.getComponent(l).opacity = 255)
                    );
                  this.node.setPosition(o), (this.isPaused = !0);
                  var d = { easing: { easing: "sineOut" } };
                  (d.moveTo = { position: this.origrinalPos }),
                    (d.opacity = { opacity: 255 }),
                    s.stopAllByTarget(this.node),
                    i(this.node)
                      .delay(t)
                      .to(e, d.moveTo, d.easing)
                      .call(function () {
                        n.isPaused = !1;
                      })
                      .start(),
                    h.fadeAnim(this.node, 255, "sineOut", t, e, function () {
                      n.node.getComponent(l).opacity = 255;
                    });
                }),
                (n._loadAvatar = function (t) {
                  this.avatarHolder
                    .getComponent(u)
                    .updateAvatar(t, this.avaDefault);
                }),
                a
              );
            })(d))
          ) || y
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PlayerItem3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./Avatar3986.ts",
    "./BTCommons.ts",
    "./BTAnimations.ts",
    "./BTPlayerItem.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, s, a, o, r, l, h, c, u, f, m, p, d, g;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy),
            (n = t._decorator),
            (s = t.sp),
            (a = t.Label),
            (o = t.Tween),
            (r = t.tween),
            (l = t.v3),
            (h = t.UIOpacity),
            (c = t.Vec3);
        },
        null,
        function (t) {
          u = t.Avatar3986;
        },
        function (t) {
          (f = t.formatNumber),
            (m = t.shortenUserName),
            (p = t.convertNumberToK);
        },
        function (t) {
          d = t.BTAnimations;
        },
        function (t) {
          g = t.BTPlayerItem;
        },
      ],
      execute: function () {
        var A;
        e._RF.push({}, "411fbFfjbtJWaZnnCPvX7h5", "PlayerItem3986", void 0);
        var v = n.ccclass;
        t(
          "PlayerItem3986",
          v("PlayerItem3986")(
            (A = (function (t) {
              function e() {
                for (
                  var i, e = arguments.length, n = new Array(e), s = 0;
                  s < e;
                  s++
                )
                  n[s] = arguments[s];
                return (
                  ((i =
                    t.call.apply(t, [this].concat(n)) || this).winLightAnim =
                    null),
                  (i.isWinEff = !1),
                  i
                );
              }
              i(e, t);
              var n = e.prototype;
              return (
                (n.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    (this.winLightAnim = this.winLightEffect.getComponent(
                      s.Skeleton
                    )),
                    (this.avaDefault = this.getConfig().AVATAR.DEFAULT),
                    (this.avaPrefix = this.getConfig().AVATAR.PREFIX);
                }),
                (n.start = function () {
                  this.smileySpine.active = !1;
                }),
                (n.updateMoney = function (t) {
                  (this._currMoney = t),
                    (this.lblUserMoney.getComponent(a).string = f(t));
                }),
                (n.updateInfos = function (t) {
                  var i = t.displayName,
                    e = t.avatar,
                    n = t.displayMoney,
                    s = t.seat;
                  m(this.userNameContain, this.lblUserName, i, 5),
                    this._loadAvatar(e),
                    1 != s && this._runUpdateWalletForOthers(n);
                }),
                (n._runUpdateWalletForOthers = function (t) {
                  var i = this;
                  this.gameDataStore.globalData.SHOULD_UPDATE_OTHERS_WALLET
                    ? this.updateMoney(t)
                    : (o.stopAllByTarget(this._runUpdateWalletProcesss),
                      r(this._runUpdateWalletProcesss)
                        .delay(0.1)
                        .call(function () {
                          i.isValid &&
                            i.node.isValid &&
                            i.gameDataStore.globalData
                              .SHOULD_UPDATE_OTHERS_WALLET &&
                            (i.updateMoney(t),
                            o.stopAllByTarget(i._runUpdateWalletProcesss));
                        })
                        .union()
                        .repeatForever()
                        .start());
                }),
                (n.disAppear = function (t, i) {
                  var e = this;
                  return (
                    d.zoomAnim(this.node, 0, t, i, "backIn", function () {
                      o.stopAllByTarget(e._runUpdateWalletProcesss);
                    }),
                    t + i
                  );
                }),
                (n.showWinEffect = function (t, i, e) {
                  var n = this;
                  if (
                    (void 0 === i && (i = 0),
                    void 0 === e && (e = 0.3),
                    !this.isWinEff)
                  ) {
                    (this.isWinEff = !0),
                      (this.winAmount
                        .getChildByName("lbWinAmount")
                        .getComponent(a).string = "+" + p(t)),
                      (this.winAmount.active = !0),
                      (this.winLightEffect.active = !0),
                      this.winLightAnim.setAnimation(0, "animation", !0),
                      this.winAmount.setScale(l(0, 0, 0)),
                      o.stopAllByTarget(this.winAmount),
                      o.stopAllByTarget(this.winLightEffect);
                    var s = this.winAmount.initSC;
                    d.zoomAnim(this.winAmount, s, i, e, "backOut", function () {
                      n.hideWinEffect(1.75);
                    }),
                      d.fadeAnim(this.winLightEffect, 255, "backIn", i, e);
                  }
                }),
                (n.hideWinEffect = function (t, i) {
                  var e = this;
                  void 0 === t && (t = 0),
                    void 0 === i && (i = 0.3),
                    this.isWinEff &&
                      ((this.isWinEff = !1),
                      d.zoomAnim(
                        this.winAmount,
                        0,
                        t,
                        i,
                        "backIn",
                        function () {
                          e.reset();
                        }
                      ),
                      d.fadeAnim(this.winLightEffect, 0, "backIn", t, i));
                }),
                (n.reset = function () {
                  (this.winAmount.active = !1),
                    (this.winLightEffect.active = !1),
                    (this.node.getComponent(h).opacity = 255);
                }),
                (n.appear = function (t, i, e) {
                  var n = this;
                  void 0 === e && (e = null);
                  var s = new c();
                  if (null != e) s = e.clone();
                  else {
                    var a = this.origrinalPos.clone(),
                      l = a.x < 0 ? -300 : 300;
                    s = new c(a.x + l, a.y, a.z);
                  }
                  if (this.bubbleTalk && this.bubbleTalk.active) {
                    var u = this.origrinalPos.x > 0 ? -1 : 1;
                    this.bubbleTalk.emit("UPDATE", u);
                  }
                  if (this.gameDataStore.getHideApp())
                    return (
                      (this.isPaused = !1),
                      this.node.setPosition(this.origrinalPos),
                      void (this.node.getComponent(h).opacity = 255)
                    );
                  this.node.setPosition(s), (this.isPaused = !0);
                  var f = { easing: { easing: "sineOut" } };
                  (f.moveTo = { position: this.origrinalPos }),
                    (f.opacity = { opacity: 255 }),
                    o.stopAllByTarget(this.node),
                    r(this.node)
                      .delay(t)
                      .to(i, f.moveTo, f.easing)
                      .call(function () {
                        n.isPaused = !1;
                      })
                      .start(),
                    d.fadeAnim(this.node, 255, "sineOut", t, i, function () {
                      n.node.getComponent(h).opacity = 255;
                    });
                }),
                (n._showSmiley = function (t) {
                  var i = this;
                  this.smileySpine &&
                    t >= 1 &&
                    t <= this.getConfig().TOTAL_SMILEY &&
                    ((this.smileySpine.active = !0),
                    this.smileySpine
                      .getComponent("sp.Skeleton")
                      .setAnimation(0, this.emoPrefix + t, !0),
                    this.smileySpine.setScale(1, 1),
                    r(this.smileySpine)
                      .delay(this.getConfig().CHAT_CONFIG.CHAT_DELAY_IN_SECONDS)
                      .to(0.35, { scale: l(0, 0) }, { easing: "backInOut" })
                      .call(function () {
                        i.smileySpine.active = !1;
                      })
                      .start());
                }),
                (n._loadAvatar = function (t) {
                  this.avatarHolder
                    .getComponent(u)
                    .updateAvatar(t, this.avaDefault);
                }),
                e
              );
            })(g))
          ) || A
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PlayerManager3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTPlayerManager.ts",
  ],
  function (t) {
    "use strict";
    var e, a, i, s, r, l, n;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (a = t.cclegacy),
            (i = t._decorator),
            (s = t.view),
            (r = t.v3),
            (l = t.Tween);
        },
        null,
        function (t) {
          n = t.BTPlayerManager;
        },
      ],
      execute: function () {
        var o;
        a._RF.push({}, "aa9e9tBhw9HSqwgnuZK+/MO", "PlayerManager3986", void 0);
        var u = i.ccclass;
        t(
          "PlayerManager3986",
          u("PlayerManager3986")(
            (o = (function (t) {
              function a() {
                for (
                  var e, a = arguments.length, i = new Array(a), s = 0;
                  s < a;
                  s++
                )
                  i[s] = arguments[s];
                return (
                  ((e =
                    t.call.apply(t, [this].concat(i)) ||
                    this).numberOutTable = 0),
                  e
                );
              }
              e(a, t);
              var i = a.prototype;
              return (
                (i.updateDeltaPos = function () {
                  var t = s.getVisibleSize().width,
                    e = this.getConfig().GAME_CONTENT_SIZE.minWidth;
                  (this.deltaPos = 0),
                    this.currGameWidth != t &&
                      ((this.currGameWidth = t),
                      this.unscheduleAllCallbacks(),
                      this.scheduleOnce(this.updateDeltaPos.bind(this), 0.3),
                      t > e &&
                        ((this.deltaPos = t - 1280),
                        this.deltaPos >= this.getConfig().DeltaPos
                          ? (this.deltaPos = this.getConfig().DeltaPos)
                          : (this.deltaPos = 0)),
                      this.updateSeatPos());
                }),
                (i.updateSeatPos = function () {
                  for (var t = 0; t < this.availableSeats.length; t++) {
                    var e = this.availableSeats[t].getScale(),
                      a = this.availableSeats[t].getPosition();
                    if (
                      (t + 1 != 1 &&
                        (this.mapSeatAttributeByIndex[t + 1] = {
                          scale: e,
                          x: a.x + (t % 2 ? -this.deltaPos : this.deltaPos),
                          y: a.y,
                          z: a.z,
                        }),
                      t >= 1)
                    ) {
                      var i = this.getPlayerByID(t);
                      if (i) {
                        var s = this.mapSeatAttributeByIndex[t + 1];
                        if (s) {
                          var n = s.x,
                            o = s.y,
                            u = s.z;
                          this.gameDataStore.getHideApp()
                            ? (l.stopAllByTarget(i),
                              i.setIsPause(!1),
                              i.setPosition(r(n, o, u)))
                            : i.updatePlayerPos(r(n, o, u));
                        }
                      }
                    }
                  }
                }),
                (i.updateNumberPlayerOutTable = function (e) {
                  var a = 0;
                  for (var i in this.mapPlayerViewById)
                    this.mapPlayerViewById[i] && a++;
                  (this.numberOutTable = e - a),
                    t.prototype.updateNumberPlayerOutTable.call(this, e);
                }),
                (i.getNumberPlayerOutTable = function () {
                  return this.numberOutTable;
                }),
                a
              );
            })(n))
          ) || o
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PlayerWriter3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTPlayerWriter.ts",
  ],
  function (r) {
    "use strict";
    var e, t, i, n;
    return {
      setters: [
        function (r) {
          e = r.inheritsLoose;
        },
        function (r) {
          (t = r.cclegacy), (i = r._decorator);
        },
        null,
        function (r) {
          n = r.BTPlayerWriter;
        },
      ],
      execute: function () {
        var c;
        t._RF.push({}, "04cb6rtaedKAr3j1JgDoRJk", "PlayerWriter3986", void 0);
        var s = i.ccclass;
        r(
          "PlayerWriter3986",
          s("PlayerWriter3986")(
            (c = (function (r) {
              function t() {
                return r.apply(this, arguments) || this;
              }
              return e(t, r), t;
            })(n))
          ) || c
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupAnalytic3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./SoundManager3986.ts",
    "./BTEventCode.ts",
    "./BTAnimations.ts",
    "./BTPopupItem.ts",
  ],
  function (t) {
    "use strict";
    var e,
      i,
      n,
      o,
      a,
      s,
      r,
      l,
      c,
      h,
      u,
      p,
      C,
      g,
      m,
      d,
      f,
      P,
      T,
      y,
      v,
      I,
      b,
      B,
      S,
      D,
      w;
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
            (s = t.Color),
            (r = t.Label),
            (l = t.Node),
            (c = t.Graphics),
            (h = t.SpriteFrame),
            (u = t.Button),
            (p = t.SpriteAtlas),
            (C = t._decorator),
            (g = t.UIOpacity),
            (m = t.v3),
            (d = t.Tween),
            (f = t.Sprite),
            (P = t.log),
            (T = t.instantiate),
            (y = t.UITransform),
            (v = t.tween),
            (I = t.v2),
            (b = t.warn);
        },
        null,
        function (t) {
          B = t.SoundManager3986;
        },
        function (t) {
          S = t.BTEventCode;
        },
        function (t) {
          D = t.BTAnimations;
        },
        function (t) {
          w = t.BTPopupItem;
        },
      ],
      execute: function () {
        var A,
          R,
          E,
          M,
          x,
          L,
          N,
          O,
          U,
          k,
          z,
          F,
          Y,
          H,
          G,
          X,
          K,
          J,
          W,
          j,
          V,
          Z,
          q,
          Q,
          $,
          tt,
          et,
          it,
          nt,
          ot,
          at,
          st,
          rt,
          lt,
          ct,
          ht,
          ut,
          pt,
          Ct,
          gt,
          mt,
          dt,
          ft,
          Pt,
          Tt,
          yt,
          vt,
          It,
          bt;
        a._RF.push({}, "0039cxJ+OVIXYbYdg1UKbJc", "PopupAnalytic3986", void 0);
        var Bt = C,
          St = Bt.ccclass,
          Dt = Bt.property,
          wt = 21,
          At = [new s(199, 160, 69), new s(18, 131, 13), new s(32, 173, 175)],
          Rt = _;
        t(
          "PopupAnalytic3986",
          ((A = St("PopupAnalytic3986")),
          (R = Dt({ type: r })),
          (E = Dt({ type: l })),
          (M = Dt({ type: l })),
          (x = Dt({ type: c })),
          (L = Dt({ type: l })),
          (N = Dt({ type: l })),
          (O = Dt({ type: l })),
          (U = Dt({ type: l })),
          (k = Dt({ type: h })),
          (z = Dt({ type: l })),
          (F = Dt({ type: h })),
          (Y = Dt({ type: l })),
          (H = Dt({ type: l })),
          (G = Dt({ type: l })),
          (X = Dt({ type: l })),
          (K = Dt({ type: l })),
          (J = Dt({ type: u })),
          (W = Dt({ type: u })),
          (j = Dt({ type: h })),
          (V = Dt({ type: l })),
          (Z = Dt({ type: l })),
          (q = Dt({ type: l })),
          (Q = Dt({ type: p })),
          A(
            ((et = e(
              (tt = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "txtMatchId", et, o(e)),
                    n(e, "txtTime", it, o(e)),
                    n(e, "result", nt, o(e)),
                    n(e, "chartPoint", ot, o(e)),
                    n(e, "chartDice", at, o(e)),
                    n(e, "chartDiceItem", st, o(e)),
                    n(e, "preLoader", rt, o(e)),
                    n(e, "resultPoint", lt, o(e)),
                    n(e, "resultSpriteFrames", ct, o(e)),
                    n(e, "resultDice", ht, o(e)),
                    n(e, "diceSpriteFrames", ut, o(e)),
                    n(e, "iconConnect", pt, o(e)),
                    n(e, "TopConnectPanel", Ct, o(e)),
                    n(e, "TopResult", gt, o(e)),
                    n(e, "BottomConnectPanel", mt, o(e)),
                    n(e, "BottomResult", dt, o(e)),
                    n(e, "btnNext", ft, o(e)),
                    n(e, "btnPre", Pt, o(e)),
                    n(e, "btnSpriteFrame", Tt, o(e)),
                    n(e, "statisticChart", yt, o(e)),
                    n(e, "statisticConnect", vt, o(e)),
                    n(e, "toast", It, o(e)),
                    n(e, "numberAtlas", bt, o(e)),
                    (e.listResultPoint = []),
                    (e.listResultDices = []),
                    (e.listIconConnect = []),
                    (e.listBottomConnectPanel = []),
                    (e.arrOriginTopPanelPos = []),
                    (e.isUpdateDataRealtime = null),
                    (e.lastMatchGameNum = null),
                    (e.originBottomPanelPos = null),
                    (e.lastStaticTop = null),
                    (e.lastItemInLastCol = null),
                    (e.originChartPointsPos = null),
                    (e.lastChartPoint = null),
                    (e.originChartDicePos = null),
                    (e.lastChartDice = null),
                    (e.statisticType = null),
                    (e.toastContent = null),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.extendLoad = function () {
                    (this.statisticType =
                      this.getConfig().STATISTIC_TYPE.CHART),
                      (this.isUpdateDataRealtime = !1),
                      this._bindEvents(),
                      this.initDataChart(),
                      this.initDataConnect(),
                      this.initBottomConnectListIcon(),
                      (this.originBottomPanelPos =
                        this.BottomConnectPanel.getPosition()),
                      (this.originChartPointsPos =
                        this.chartPoint.node.getPosition()),
                      (this.originChartDicePos = this.chartDice.getPosition());
                  }),
                  (a.show = function () {
                    if (this.isShowing) {
                      this.hide(null);
                    } else {
                      var t;
                      if (this.isSFX)
                        null == (t = this.getSoundManager()) || t.openPopup();
                      (this.isShowing = !0),
                        (this.node.active = !0),
                        this.overlay && (this.overlay.active = !0),
                        this.main.setScale(0.7, 0.7, 0.7),
                        (this.main.getComponent(g).opacity = 0),
                        this.zoomOut(this.main, 0, 0.5, "backOut", null),
                        this.onShowChart(),
                        this.checkActiveButtons(),
                        this._callApi(1, this.getConfig().STATISTIC_TYPE.CHART),
                        this.txtMatchId && (this.txtMatchId.string = "...");
                    }
                  }),
                  (a.hide = function (e) {
                    t.prototype.hide.call(this, e), this.hideToastDataError(0);
                  }),
                  (a.updateUI = function (t) {
                    this.isShowing &&
                      (this.statisticType ===
                      this.getConfig().STATISTIC_TYPE.CHART
                        ? this.onShowChart()
                        : this.statisticType ===
                            this.getConfig().STATISTIC_TYPE.CONNECT &&
                          this.onShowConnect(),
                      t
                        ? (this.onGetData(t), this.hideToastDataError(0.2))
                        : this.showToastDataError(
                            this.getConfig().MESSAGE.NO_ANALYTIC
                          ));
                  }),
                  (a._bindEvents = function () {
                    this.btnNext &&
                      this.btnNext.node.on("click", this.onClickNext, this),
                      this.btnPre &&
                        this.btnPre.node.on(
                          "click",
                          this.onclickPrevious,
                          this
                        ),
                      this.registerEvent(
                        S.UPDATE_LAST_RESULT,
                        this.updateLastResult.bind(this)
                      ),
                      this.registerEvent(
                        S.API_ERROR,
                        this.showToastDataError.bind(this)
                      ),
                      this.registerEvent(
                        S.ON_GET_LAST_RESULT_SUCCESS,
                        this.updateUI.bind(this)
                      );
                  }),
                  (a.updateLastResult = function () {
                    this.isShowing &&
                      this.node.active &&
                      (this.statisticType ===
                      this.getConfig().STATISTIC_TYPE.CHART
                        ? this.onShowChart()
                        : this.statisticType ===
                            this.getConfig().STATISTIC_TYPE.CONNECT &&
                          this.onShowConnect(),
                      this._callApi(1, this.statisticType, !0));
                  }),
                  (a.showToastDataError = function (t, e) {
                    void 0 === t && (t = ""),
                      "" != t &&
                        (this.hidePreloader(),
                        (this.toastContent =
                          this.toastContent ||
                          this.toast
                            .getChildByName("stateText")
                            .getComponent(r)),
                        (this.toastContent.string = t),
                        (this.toast.active = !0),
                        (this.toast.getComponent(g).opacity = 0),
                        this.toast.setScale(m(0.7, 0.7, 0.7)),
                        d.stopAllByTag(this.toast),
                        this.zoomOut(this.toast, 0, 0.5, this.BACK_OUT, null));
                  }),
                  (a.hideToastDataError = function (t) {
                    var e = this;
                    void 0 === t && (t = 0.3),
                      this.zoomIn(this.toast, 1, t, this.BACK_IN, function () {
                        (e.toast.active = !1), (e.toastContent = "");
                      });
                  }),
                  (a.onClickNext = function () {
                    var t;
                    this.isShowing &&
                      (this.onShowConnect(),
                      this._callApi(1, this.getConfig().STATISTIC_TYPE.CONNECT),
                      null == (t = B.getInstance()) || t.btnSound(!0));
                  }),
                  (a.onclickPrevious = function () {
                    var t;
                    this.isShowing &&
                      (this.onShowChart(),
                      this._callApi(1, this.getConfig().STATISTIC_TYPE.CHART),
                      null == (t = B.getInstance()) || t.btnSound(!0));
                  }),
                  (a.checkActiveButtons = function () {
                    (this.btnNext.interactable =
                      this.statisticType ===
                      this.getConfig().STATISTIC_TYPE.CHART),
                      (this.btnPre.interactable =
                        this.statisticType ===
                        this.getConfig().STATISTIC_TYPE.CONNECT),
                      (this.btnPre.target.getComponent(f).spriteFrame = this
                        .btnPre.interactable
                        ? this.btnSpriteFrame[0]
                        : this.btnSpriteFrame[1]),
                      (this.btnNext.target.getComponent(f).spriteFrame = this
                        .btnNext.interactable
                        ? this.btnSpriteFrame[0]
                        : this.btnSpriteFrame[1]);
                  }),
                  (a.onShowChart = function () {
                    (this.statisticType =
                      this.getConfig().STATISTIC_TYPE.CHART),
                      (this.statisticChart.active = !0),
                      (this.statisticConnect.active = !1);
                  }),
                  (a.onShowConnect = function () {
                    (this.statisticType =
                      this.getConfig().STATISTIC_TYPE.CONNECT),
                      (this.statisticChart.active = !1),
                      (this.statisticConnect.active = !0);
                  }),
                  (a.resetUI = function (t) {
                    void 0 === t && (t = !1),
                      t || (this.resetResultDice(), this.resetResultPoint()),
                      (this.txtMatchId.string = "..."),
                      this.resetContent(t),
                      this.hideToastDataError(0);
                  }),
                  (a.showPreloader = function (t) {
                    void 0 === t && (t = !1);
                    var e = t ? 3 : 0.5;
                    P("debug=", e), this.preLoader && this.preLoader.show(e);
                  }),
                  (a.hidePreloader = function () {
                    this.preLoader && this.preLoader.hide();
                  }),
                  (a.init = function () {
                    (this.node.active = !1), (this.lastMatchGameNum = null);
                  }),
                  (a.initDataChart = function () {
                    for (var t = 0; t < wt; t++) {
                      var e = T(this.resultPoint);
                      (e.getComponent(g).opacity = 0),
                        (e.active = !1),
                        this.chartPoint.node.addChild(e),
                        this.listResultPoint.push(e);
                    }
                    var i = T(this.chartDiceItem);
                    this.chartDice.addChild(i);
                    for (var n = 0; n < 3; n++) {
                      for (var o = [], a = 0; a < wt; a++) {
                        var s = T(this.resultDice);
                        (s.active = !1),
                          (s.getComponent(g).opacity = 0),
                          i.addChild(s),
                          o.push(s);
                      }
                      this.listResultDices.push(o);
                    }
                  }),
                  (a.resetResultPoint = function () {
                    this.listResultPoint.forEach(function (t) {
                      t.setPosition(m(0, 0)),
                        (t.active = !1),
                        (t.getChildByName("glow").active = !1);
                    }),
                      this.chartPoint.clear();
                  }),
                  (a.resetResultDice = function () {
                    this.listResultDices.forEach(function (t) {
                      t.forEach(function (t) {
                        t.setPosition(m(0, 0)), (t.active = !1);
                      });
                    }),
                      this.chartDice.children.forEach(function (t) {
                        t.getComponent(c).clear();
                      });
                  }),
                  (a._callApi = function (t, e, i) {
                    var n = this;
                    void 0 === t && (t = 1),
                      void 0 === i && (i = !1),
                      (this.isUpdateDataRealtime = i),
                      this.resetUI(i),
                      (this.statisticType = e),
                      this.checkActiveButtons(),
                      this.showPreloader(i);
                    var o = this.getConfig().API.URL.LAST_RESULT;
                    P(
                      "===open analytic popup===",
                      this.gameDataStore.globalData.TABLE_ID
                    );
                    var a = {
                      url: o,
                      params: {
                        gameId: "ktrng_" + this.getConfig().GAME_ID,
                        size: this.getConfig().API.PARAM.STATISTIC_SIZE,
                        tableId: this.gameDataStore.globalData.TABLE_ID,
                        curPage: t,
                      },
                      includeToken: !0,
                    };
                    this.fireEvent(S.CALL_API, {
                      data: a,
                      callback: function (t) {
                        n.validateData(t);
                      },
                    });
                  }),
                  (a.validateData = function (t) {
                    void 0 === t && (t = null),
                      this.hidePreloader(),
                      this.resetContent(),
                      Rt.isEmpty(t)
                        ? this.showToastDataError(
                            this.getConfig().MESSAGE.DATA_ERROR,
                            !1
                          )
                        : Rt.isEmpty(t.data) || Rt.isEmpty(t.data.resultList)
                        ? this.showToastDataError(
                            this.getConfig().MESSAGE.NO_ANALYTIC
                          )
                        : this.updateUI(t);
                  }),
                  (a.onGetData = function (t) {
                    this.hidePreloader(),
                      this.statisticType ===
                      this.getConfig().STATISTIC_TYPE.CHART
                        ? this.onParseStatisticChartData(t)
                        : this.statisticType ===
                            this.getConfig().STATISTIC_TYPE.CONNECT &&
                          this.onParseStatisticConnectData(t);
                  }),
                  (a.onParseStatisticChartData = function (t) {
                    for (var e = [], i = [], n = 0; n < 3; n++) {
                      i.push([]);
                    }
                    var o = this.chartPoint.node.getComponent(y).height / 15,
                      a = this.chartPoint.node.getComponent(y).width / 20,
                      s = t.data.resultList,
                      r = Math.min(wt, s.length),
                      l = r - 1,
                      c = 0;
                    r > wt && (c = r - wt);
                    for (var h = 0; h < r; h++, c++) {
                      for (
                        var u = s[c],
                          p = {
                            matchID: u.gameNum,
                            score: u.score,
                            resultType: u.resultType,
                            point: m(l * a, (u.score - 3) * o),
                            facesList: u.facesList,
                          },
                          C = 0;
                        C < 3;
                        C++
                      ) {
                        var g = this.chartPoint.node.getComponent(y).height / 5,
                          d = {
                            matchID: u.gameNum,
                            score: u.facesList[C],
                            point: m(l * a, (u.facesList[C] - 1) * g),
                          };
                        i[C].push(d);
                      }
                      e.push(p), l > 0 && l--;
                    }
                    if (
                      (Array.isArray(e) &&
                        e.length > 0 &&
                        (this.resetResultPoint(),
                        this.updateMatchID(e[0].matchID),
                        this.updateResult(e[0]),
                        this.drawChartPoints(e)),
                      Array.isArray(i) && i.length > 0)
                    ) {
                      this.resetResultDice();
                      var f = this.chartDice.children,
                        P = !1,
                        T = i[0];
                      T.length >= wt &&
                        ((this.lastChartDice &&
                          this.lastChartDice.matchID == T[0].matchID) ||
                          ((P = this.isUpdateDataRealtime),
                          (this.lastChartDice = T[0])));
                      for (var v = 0; v < i.length; v++) {
                        var I = i[v],
                          b = f[0],
                          B = this.listResultDices[v],
                          S = v;
                        this.drawChartDices(b, B, I, S, P);
                      }
                    }
                  }),
                  (a.drawChartPoints = function (t) {
                    for (var e = this, i = 0; i < t.length; i++) {
                      var n = t[i];
                      if (
                        (this.updateResultPoint(this.listResultPoint[i], n),
                        i < t.length - 1)
                      ) {
                        var o = t[i].point,
                          a = t[i + 1].point;
                        this.chartPoint.moveTo(o.x, o.y),
                          this.chartPoint.lineTo(a.x, a.y);
                      }
                    }
                    t.length > 1 &&
                      ((this.chartPoint.strokeColor = new s(105, 203, 78)),
                      this.chartPoint.stroke()),
                      (this.listResultPoint[0].getChildByName("glow").active =
                        !1),
                      d.stopAllByTarget(this.chartPoint.node);
                    var r = !1;
                    if (
                      (t.length >= wt &&
                        ((this.lastChartPoint &&
                          this.lastChartPoint.matchID == t[0].matchID) ||
                          ((r = this.isUpdateDataRealtime),
                          (this.lastChartPoint = t[0]))),
                      r)
                    ) {
                      this.listResultPoint[0].active = !1;
                      var l = this.chartPoint.node.getComponent(y).width / 20,
                        c = m(
                          this.originChartPointsPos.x + l,
                          this.originChartPointsPos.y,
                          0
                        );
                      this.chartPoint.node.setPosition(c),
                        v(this.chartPoint.node)
                          .to(
                            0.35,
                            { position: this.originChartPointsPos },
                            { easing: "sineInOut" }
                          )
                          .call(function () {
                            e.chartPoint.node.setPosition(
                              e.originChartPointsPos
                            ),
                              (e.listResultPoint[0].active = !0);
                          })
                          .start(),
                        this.runNewMatchAnim(this.listResultPoint[0], 0.1);
                    } else
                      (this.listResultPoint[0].active = !0),
                        this.chartPoint.node.setPosition(
                          this.originChartPointsPos
                        ),
                        this.runNewMatchAnim(this.listResultPoint[0], 0.25);
                  }),
                  (a.updateResultPoint = function (t, e) {
                    (t.active = !0),
                      (t.getComponent(g).opacity = this.isUpdateDataRealtime
                        ? 255
                        : 0),
                      t.setPosition(e.point),
                      (t
                        .getChildByName("background")
                        .getComponent(f).spriteFrame = this.getResultByType(
                        e.resultType
                      )),
                      (t
                        .getChildByName("TXTScore")
                        .getComponent(f).spriteFrame =
                        this.numberAtlas.getSpriteFrame(String(e.score))),
                      this.isUpdateDataRealtime ||
                        this.randomShow(t, 0.3 * Math.random(), 0.3);
                  }),
                  (a.randomShow = function (t, e, i) {
                    void 0 === e && (e = 0),
                      void 0 === i && (i = 0.3),
                      (t = t.getComponent(g)),
                      d.stopAllByTarget(t),
                      v(t)
                        .delay(e)
                        .to(i, { opacity: 255 }, { easing: "sineInOut" })
                        .call(function () {})
                        .start();
                  }),
                  (a.drawChartDices = function (t, e, i, n, o) {
                    var a = this;
                    void 0 === o && (o = !1), (t.active = !0);
                    for (var s = t.getComponent(c), r = 0; r < i.length; r++) {
                      var l = i[r];
                      if (
                        (this.updateResultDice(e[r], n, l), r < i.length - 1)
                      ) {
                        var h = i[r].point,
                          u = i[r + 1].point;
                        s.moveTo(h.x, h.y), s.lineTo(u.x, u.y);
                      }
                    }
                    if (
                      (i.length > 1 && ((s.strokeColor = At[n]), s.stroke()),
                      d.stopAllByTarget(this.chartDice),
                      (e[0].active = !0),
                      o)
                    ) {
                      var p = this.chartPoint.node.getComponent(y).width / 20,
                        C = m(
                          this.originChartDicePos.x + p,
                          this.originChartDicePos.y,
                          0
                        );
                      this.chartDice.setPosition(C),
                        v(this.chartDice)
                          .to(
                            0.35,
                            { position: this.originChartDicePos },
                            { easing: "sineInOut" }
                          )
                          .call(function () {
                            a.chartDice.setPosition(a.originChartDicePos);
                          })
                          .start();
                    } else this.chartDice.setPosition(this.originChartDicePos);
                  }),
                  (a.updateResultDice = function (t, e, i) {
                    (t.active = !0),
                      t.setPosition(i.point),
                      (t.getComponent(f).spriteFrame =
                        this.diceSpriteFrames[e]),
                      (t.getComponent(g).opacity = this.isUpdateDataRealtime
                        ? 255
                        : 0),
                      this.isUpdateDataRealtime ||
                        this.randomShow(t, 0.3 * Math.random(), 0.3);
                  }),
                  (a.getResultByType = function (t) {
                    switch (t) {
                      case 3:
                        return this.resultSpriteFrames[0];
                      case 4:
                        return this.resultSpriteFrames[1];
                      case 11:
                        return this.resultSpriteFrames[2];
                    }
                    return this.resultSpriteFrames[0];
                  }),
                  (a.getScoreColorByType = function (t) {
                    switch (t) {
                      case 3:
                      case 4:
                      case 11:
                        return s.WHITE;
                    }
                    return s.WHITE;
                  }),
                  (a.getResultTextByType = function (t) {
                    var e = "";
                    switch (t) {
                      case 3:
                        e = "TÀI";
                        break;
                      case 4:
                        e = "XỈU";
                        break;
                      case 11:
                        e = "BÃO";
                    }
                    return e;
                  }),
                  (a.updateMatchID = function (t) {
                    this.txtMatchId && (this.txtMatchId.string = t);
                  }),
                  (a.updateTime = function (t) {
                    if (this.txtTime) {
                      var e = t.split(" ");
                      (this.txtTime.active = !0),
                        (this.txtTime.string = e[0] + "\n" + e[1]);
                    }
                  }),
                  (a.updateResult = function (t) {
                    if (t && this.result) {
                      this.result.active = !0;
                      var e =
                        this.getResultTextByType(t.resultType) +
                        " (" +
                        String(t.facesList[0]) +
                        "-" +
                        String(t.facesList[1]) +
                        "-" +
                        String(t.facesList[2]) +
                        ")";
                      this.result.getComponent(r).string = e;
                    }
                  }),
                  (a.resetConnectData = function () {
                    Array.isArray(this.listIconConnect) &&
                      this.listIconConnect.length,
                      Array.isArray(this.listBottomConnectPanel) &&
                        this.listBottomConnectPanel.length;
                  }),
                  (a.initDataConnect = function () {
                    for (
                      var t =
                          (this.TopConnectPanel.getComponent(y).getBoundingBox()
                            .height -
                            4 *
                              this.iconConnect.getComponent(y).getBoundingBox()
                                .height) /
                          4,
                        e =
                          (this.TopConnectPanel.getComponent(y).getBoundingBox()
                            .width -
                            19 *
                              this.iconConnect.getComponent(y).getBoundingBox()
                                .width) /
                          19,
                        i = 0,
                        n = 0,
                        o = 1,
                        a = 0;
                      a < 100;
                      a++
                    ) {
                      var s = T(this.iconConnect);
                      s.setPosition(m(i, n)),
                        (s.active = !1),
                        this.TopConnectPanel.addChild(s),
                        this.listIconConnect.push(s),
                        this.arrOriginTopPanelPos.push(m(i, n)),
                        0 != a && (a + 1) % 20 == 0
                          ? ((o *= -1),
                            (n +=
                              s.getComponent(y).getBoundingBox().height + t))
                          : (i +=
                              (s.getComponent(y).getBoundingBox().width + e) *
                              o);
                    }
                  }),
                  (a.initBottomConnectListIcon = function () {
                    for (var t = 0; t < 100; t++) {
                      var e = T(this.iconConnect);
                      (e.active = !1),
                        this.BottomConnectPanel.addChild(e),
                        this.listBottomConnectPanel.push(e);
                    }
                  }),
                  (a.onParseStatisticConnectData = function (t) {
                    var e = [];
                    t.data.resultList.forEach(function (t) {
                      var i = {
                        matchID: t.gameNum,
                        score: t.score,
                        resultType: t.resultType,
                        facesList: t.facesList,
                      };
                      e.push(i);
                    }),
                      Array.isArray(e) &&
                        e.length > 0 &&
                        (this.updateStatisticConnectTop(e),
                        this.updateStatisticConnectBottom(e),
                        this.updateMatchID(e[0].matchID),
                        this.updateResult(e[0]));
                  }),
                  (a.updateStatisticConnectTop = function (t) {
                    var e = this,
                      i = [0, 0, 0];
                    this.listIconConnect.forEach(function (t) {
                      (t.active = !1), (t.getChildByName("glow").active = !1);
                    });
                    for (
                      var n = 0, o = this.listIconConnect.length - 1;
                      n < t.length && o >= 0;
                      n++, o--
                    ) {
                      var a = t[n],
                        s = this.listIconConnect[o];
                      (s.active = !0),
                        (s.getComponent(g).opacity = this.isUpdateDataRealtime
                          ? 255
                          : 0),
                        this.isUpdateDataRealtime ||
                          this.randomShow(s, 0.3 * Math.random(), 0.3),
                        this.updateIconConnectContent(s, a),
                        this.updateResultConnectContent(i, a);
                    }
                    this.showResultConnectContent(this.TopResult, i);
                    var r =
                      this.listIconConnect[this.listIconConnect.length - 1];
                    r.getChildByName("glow").active = !1;
                    var l = !1;
                    if (
                      (t.length >= 100 &&
                        ((this.lastStaticTop &&
                          this.lastStaticTop.matchID == t[0].matchID) ||
                          ((l = this.isUpdateDataRealtime),
                          (this.lastStaticTop = t[0]))),
                      l)
                    ) {
                      this.listIconConnect[
                        this.listIconConnect.length - 1
                      ].active = !1;
                      for (
                        var c = function (t) {
                            var i = e.arrOriginTopPanelPos[t],
                              n = e.arrOriginTopPanelPos[t + 1];
                            e.listIconConnect[t].setPosition(n),
                              v(e.listIconConnect[t])
                                .delay(0.2)
                                .to(
                                  0.5,
                                  { position: i },
                                  { easing: "sineInOut" }
                                )
                                .call(function () {
                                  e.listIconConnect[t].setPosition(i);
                                })
                                .start();
                          },
                          h = 0;
                        h < this.listIconConnect.length - 1;
                        h++
                      )
                        c(h);
                      this.runNewMatchAnim(r, 0.7);
                    } else
                      (this.listIconConnect[
                        this.listIconConnect.length - 1
                      ].getComponent(g).opacity = 255),
                        (this.listIconConnect[
                          this.listIconConnect.length - 1
                        ].active = !0),
                        this.runNewMatchAnim(r, 0.35);
                  }),
                  (a.updateStatisticConnectBottom = function (t) {
                    for (
                      var e = this,
                        i =
                          this.BottomConnectPanel.getComponent(
                            y
                          ).getBoundingBox().height / 5,
                        n =
                          this.BottomConnectPanel.getComponent(
                            y
                          ).getBoundingBox().width / 20,
                        o =
                          this.BottomConnectPanel.getComponent(
                            y
                          ).getBoundingBox().width,
                        a =
                          -this.BottomConnectPanel.getComponent(
                            y
                          ).getBoundingBox().height,
                        s = t.length - 1,
                        r = !1,
                        l = 0.5 * n,
                        c = 0.5 * -i,
                        h = t[s].resultType,
                        u = [],
                        p = [0, 0, 0],
                        C = function () {
                          (l = 0.5 * n),
                            (c = 0.5 * -i),
                            (h = t[s].resultType),
                            (u = []),
                            (r = !0),
                            (p = [0, 0, 0]);
                          for (var C = 0, f = s; f >= 0; f--) {
                            var P = t[f];
                            if (11 !== P.resultType && h !== P.resultType) {
                              if (
                                c != 0.5 * -i &&
                                (C++,
                                (c = 0.5 * -i),
                                (l = C * n + 0.5 * n) >= o)
                              ) {
                                s--, (r = !1);
                                break;
                              }
                            } else if (
                              11 !== P.resultType &&
                              h === P.resultType
                            ) {
                              var y = m(l, c);
                              e.isExistsOnBottomPanel(P.resultType, y, u, n, i)
                                ? ((l += n),
                                  (c += i),
                                  Math.round(c) == Math.round(0.5 * -i) && C++)
                                : c < a && ((c = 0.5 * -i - 4 * i), (l += n));
                            } else
                              11 === P.resultType &&
                                (function () {
                                  var t = !1,
                                    e = m(l, c);
                                  if (
                                    (u.forEach(function (o) {
                                      var a = o.getPosition();
                                      Math.round(a.x) == Math.round(e.x) &&
                                        Math.round(a.y) == Math.round(e.y) &&
                                        ((l += n),
                                        (c += i),
                                        Math.round(c) == Math.round(0.5 * -i) &&
                                          C++,
                                        (t = !0));
                                    }),
                                    !t && c < a)
                                  )
                                    (c = 0.5 * -i - 4 * i), (l += n);
                                  else {
                                    var o = I(l - n, c);
                                    if (o.x > 0)
                                      for (var s = 0; s < u.length; s++) {
                                        var r = u[s],
                                          h = r.getPosition;
                                        if (
                                          11 === r.type &&
                                          Math.round(h.x) === Math.round(o.x) &&
                                          Math.round(h.y) === Math.round(o.y)
                                        ) {
                                          (l += n), (c += i);
                                          break;
                                        }
                                      }
                                  }
                                })();
                            if (l >= o) {
                              s--, (r = !1);
                              break;
                            }
                            11 !== P.resultType && (h = P.resultType);
                            var B = T(e.iconConnect);
                            e.updateIconConnectContent(B, P),
                              e.updateResultConnectContent(p, P),
                              (B.getComponent(g).opacity = 0),
                              B.setPosition(m(l, c)),
                              (B.type = h),
                              (B.data = P),
                              (c -= i),
                              u.push(B);
                          }
                          if (r) {
                            d.stopAllByTarget(e.BottomConnectPanel),
                              e.listBottomConnectPanel.forEach(function (t) {
                                (t.active = !1),
                                  (t.getChildByName("glow").active = !1);
                              });
                            for (var S = 0; S < u.length; S++) {
                              var D = u[S];
                              e.updateIconConnectContent(
                                e.listBottomConnectPanel[S],
                                D.data
                              ),
                                (e.listBottomConnectPanel[S].data = D.data),
                                e.listBottomConnectPanel[S].setPosition(
                                  D.getPosition()
                                ),
                                (e.listBottomConnectPanel[S].active = !0),
                                (e.listBottomConnectPanel[S].getComponent(
                                  g
                                ).opacity = e.isUpdateDataRealtime ? 255 : 0),
                                e.isUpdateDataRealtime ||
                                  e.randomShow(
                                    e.listBottomConnectPanel[S],
                                    0.3 * Math.random(),
                                    0.3
                                  );
                            }
                            var w = u.length - 1;
                            e.listBottomConnectPanel[w].getChildByName(
                              "glow"
                            ).active = !1;
                            var A = !1;
                            if (e.lastItemInLastCol) {
                              if (
                                (b(
                                  "Math.round(this.listBottomConnectPanel[lastIndex].y)",
                                  Math.round(e.listBottomConnectPanel[w].y)
                                ),
                                b(
                                  "Math.round(this.lastItemInLastCol.y",
                                  Math.round(e.lastItemInLastCol.y)
                                ),
                                b(
                                  "Math.round(-paddingHeight * 0.5)",
                                  Math.round(0.5 * -i)
                                ),
                                Math.round(e.listBottomConnectPanel[w].x) ==
                                  Math.round(o - 0.5 * n) &&
                                  e.lastItemInLastCol.data.matchID !==
                                    e.listBottomConnectPanel[w].data.matchID)
                              )
                                if (
                                  11 !==
                                    e.listBottomConnectPanel[w].data
                                      .resultType &&
                                  e.lastItemInLastCol.data.resultType !==
                                    e.listBottomConnectPanel[w].data.resultType
                                )
                                  (e.lastItemInLastCol =
                                    e.listBottomConnectPanel[w]),
                                    (A = e.isUpdateDataRealtime);
                                else if (
                                  11 !==
                                    e.listBottomConnectPanel[w].data
                                      .resultType &&
                                  e.lastItemInLastCol.data.resultType ===
                                    e.listBottomConnectPanel[w].data.resultType
                                )
                                  Math.round(e.listBottomConnectPanel[w].y) ===
                                    Math.round(e.lastItemInLastCol.y) &&
                                    ((e.lastItemInLastCol =
                                      e.listBottomConnectPanel[w]),
                                    (A = e.isUpdateDataRealtime));
                                else if (
                                  11 ===
                                    e.listBottomConnectPanel[w].data
                                      .resultType &&
                                  Math.round(e.listBottomConnectPanel[w].y) ===
                                    Math.round(e.lastItemInLastCol.y)
                                ) {
                                  var R = e.lastItemInLastCol.data.resultType;
                                  (e.lastItemInLastCol =
                                    e.listBottomConnectPanel[w]),
                                    (e.lastItemInLastCol.data.resultType = R),
                                    (A = e.isUpdateDataRealtime);
                                }
                            } else
                              Math.round(e.listBottomConnectPanel[w].x) ==
                                Math.round(o - 0.5 * n) &&
                                (e.lastItemInLastCol =
                                  e.listBottomConnectPanel[w]);
                            if (A) {
                              e.listBottomConnectPanel[w].active = !1;
                              var E = m(
                                e.originBottomPanelPos.x + n,
                                e.originBottomPanelPos.y
                              );
                              e.BottomConnectPanel.setPosition(E),
                                v(e.BottomConnectPanel)
                                  .to(
                                    0.5,
                                    { position: e.originBottomPanelPos },
                                    { easing: "sineInOut" }
                                  )
                                  .call(function () {
                                    e.BottomConnectPanel.setPosition(
                                      e.originBottomPanelPos
                                    ),
                                      (e.listBottomConnectPanel[w].active = !0);
                                  })
                                  .start(),
                                e.runNewMatchAnim(
                                  e.listBottomConnectPanel[w],
                                  0.5
                                );
                            } else
                              (e.lastItemInLastCol =
                                e.listBottomConnectPanel[w]),
                                (e.listBottomConnectPanel[w].active = !0),
                                e.BottomConnectPanel.setPosition(
                                  e.originBottomPanelPos
                                ),
                                e.runNewMatchAnim(
                                  e.listBottomConnectPanel[w],
                                  0.35
                                );
                            return "break";
                          }
                        };
                      ;

                    ) {
                      if ("break" === C()) break;
                    }
                    this.showResultConnectContent(this.BottomResult, p);
                  }),
                  (a.isExistsOnBottomPanel = function (t, e, i, n, o) {
                    var a = !1;
                    return (
                      i.forEach(function (i) {
                        var s = i.getPosition(),
                          r = i.type;
                        Math.round(s.x) == Math.round(e.x)
                          ? ((Math.round(s.y) == Math.round(e.y - o) &&
                              t === r) ||
                              Math.round(s.y) == Math.round(e.y)) &&
                            (a = !0)
                          : Math.round(s.x) == Math.round(e.x - n) &&
                            Math.round(s.y) == Math.round(e.y) &&
                            t === r &&
                            (a = !0);
                      }),
                      a
                    );
                  }),
                  (a.updateIconConnectContent = function (t, e) {
                    (t.active = !0),
                      (t
                        .getChildByName("background")
                        .getComponent(f).spriteFrame = this.getResultByType(
                        e.resultType
                      )),
                      (t
                        .getChildByName("TXTScore")
                        .getComponent(f).spriteFrame =
                        this.numberAtlas.getSpriteFrame(String(e.score)));
                  }),
                  (a.updateResultConnectContent = function (t, e) {
                    switch (e.resultType) {
                      case 3:
                        t[0]++;
                        break;
                      case 4:
                        t[1]++;
                        break;
                      case 11:
                        t[2]++;
                    }
                  }),
                  (a.showResultConnectContent = function (t, e) {
                    t.active = !0;
                    for (var i = 0; i < e.length; i++) {
                      t.children[i].getComponent(r).string = String(e[i]);
                    }
                  }),
                  (a.resetContent = function (t) {
                    void 0 === t && (t = !1),
                      (this.txtMatchId.string = "..."),
                      (this.result.active = !1),
                      t ||
                        (this.BottomConnectPanel.children.forEach(function (t) {
                          t.active = !1;
                        }),
                        this.TopConnectPanel.children.forEach(function (t) {
                          t.active = !1;
                        }),
                        (this.BottomResult.active = !1),
                        (this.TopResult.active = !1));
                  }),
                  (a.runShowAnimation = function (t, e, i, n, o) {
                    void 0 === o && (o = 1), (t.scale = 1);
                    var a = t.scale;
                    D.popingEffect(t, {
                      dur: i,
                      curSC: a,
                      maxSC: a * e,
                      repeat: o,
                      baseEasing: "sineOut",
                    });
                  }),
                  (a.runNewMatchAnim = function (t, e) {
                    void 0 === e && (e = 0);
                    (t.active = !0),
                      (t.getComponent(g).opacity = 0),
                      t.setScale(1.2, 1.2, 1.2);
                    var i = t.getChildByName("glow");
                    v(t.getComponent(g))
                      .delay(e)
                      .call(function () {
                        i.active = !0;
                      })
                      .to(0.35, { opacity: 255 }, { easing: "sineInOut" })
                      .call(function () {
                        t.getComponent(g).opacity = 255;
                      })
                      .start(),
                      v(t)
                        .delay(e)
                        .call(function () {
                          i.active = !0;
                        })
                        .to(
                          0.35,
                          { scale: m(1, 1, 1) },
                          { easing: "sineInOut" }
                        )
                        .call(function () {
                          t.setScale(1, 1, 1);
                        })
                        .start(),
                      d.stopAllByTarget(i);
                    D.popingEffect(i, {
                      dur: 0.4,
                      curSC: 1,
                      maxSC: 1.15,
                      repeat: 1,
                      yoyo: !0,
                      baseEasing: "sineOut",
                    });
                  }),
                  e
                );
              })(w)).prototype,
              "txtMatchId",
              [R],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (it = e(tt.prototype, "txtTime", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nt = e(tt.prototype, "result", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ot = e(tt.prototype, "chartPoint", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (at = e(tt.prototype, "chartDice", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (st = e(tt.prototype, "chartDiceItem", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rt = e(tt.prototype, "preLoader", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (lt = e(tt.prototype, "resultPoint", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ct = e(tt.prototype, "resultSpriteFrames", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (ht = e(tt.prototype, "resultDice", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ut = e(tt.prototype, "diceSpriteFrames", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (pt = e(tt.prototype, "iconConnect", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ct = e(tt.prototype, "TopConnectPanel", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (gt = e(tt.prototype, "TopResult", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (mt = e(tt.prototype, "BottomConnectPanel", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (dt = e(tt.prototype, "BottomResult", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ft = e(tt.prototype, "btnNext", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pt = e(tt.prototype, "btnPre", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Tt = e(tt.prototype, "btnSpriteFrame", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (yt = e(tt.prototype, "statisticChart", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (vt = e(tt.prototype, "statisticConnect", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (It = e(tt.prototype, "toast", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (bt = e(tt.prototype, "numberAtlas", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = tt))
          ) || $)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupHelp3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTPopupHelp.ts",
  ],
  function (e) {
    "use strict";
    var t, o, r, n, i, a, s, c, g, u;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (o = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy),
            (a = e._decorator),
            (s = e.Node),
            (c = e.ScrollView),
            (g = e.sys);
        },
        null,
        function (e) {
          u = e.BTPopupHelp;
        },
      ],
      execute: function () {
        var B, h, p, l, d;
        i._RF.push({}, "835dfgNpTVJ/6q/x3Y/9Uhl", "PopupHelp3986", void 0);
        var f = a.ccclass,
          m = a.property;
        e(
          "PopupHelp3986",
          ((B = f("PopupHelp3986")),
          (h = m({ type: s })),
          B(
            ((d = t(
              (l = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, i = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    i[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    r(t, "btnLink", d, n(t)),
                    t
                  );
                }
                o(t, e);
                var i = t.prototype;
                return (
                  (i.extendLoad = function () {
                    var t = this;
                    e.prototype.extendLoad.call(this),
                      this.btnLink.off("click"),
                      this.btnLink.on("click", function () {
                        t.openWebMD5();
                      });
                  }),
                  (i.getRateByName = function (e, t) {
                    var o = e.NormalRates,
                      r = e.ExtraRates;
                    switch (t) {
                      case "TaiXiu":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("Tai")
                        );
                      case "ChanLe":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("Chan")
                        );
                      case "Doi":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("one-oneDice")
                        );
                      case "CapSo":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("one-twoDice")
                        );
                      case "Bao":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("anyThree")
                        );
                      case "BaoCuThe":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("one-one-oneDice")
                        );
                      case "4_17":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("four")
                        );
                      case "5_16":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("five")
                        );
                      case "6_15":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("six")
                        );
                      case "7_14":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("seven")
                        );
                      case "8_13":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("eight")
                        );
                      case "9_12":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("nine")
                        );
                      case "10_11":
                        return this.getRateFromBetId(
                          o,
                          this.getConfig().getBetIdByBoxName("ten")
                        );
                      case "SoCuThe":
                      case "match1":
                        return r[0];
                      case "match2":
                        return r[1];
                      case "match3":
                        return r[2];
                      default:
                        return "Lỗi";
                    }
                  }),
                  (i.getRateFromBetId = function (e, t) {
                    if (e) {
                      for (var o = 0, r = e.length; o < r; o++)
                        if (e[o].ID == t) return e[o].Rate;
                      return "error";
                    }
                  }),
                  (i.updateMaxBet = function (e) {}),
                  (i.reset = function () {
                    e.prototype.reset.call(this),
                      this.scrollView.getComponent(c).scrollToTop(0);
                  }),
                  (i.openWebMD5 = function () {
                    g.openURL("https://www.md5hashgenerator.com/");
                  }),
                  t
                );
              })(u)).prototype,
              "btnLink",
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
            (p = l))
          ) || p)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupHistory3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SoundManager3986.ts",
    "./Declaration3986.ts",
    "./MD5History3986.ts",
    "./BTCommons.ts",
    "./BTEventCode.ts",
    "./BTPopupHistory.ts",
  ],
  function (t) {
    "use strict";
    var e,
      i,
      n,
      o,
      r,
      a,
      s,
      l,
      c,
      h,
      u,
      p,
      g,
      m,
      d,
      f,
      y,
      b,
      v,
      C,
      P,
      S,
      T,
      B,
      N,
      w,
      D;
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
            (a = t.SpriteFrame),
            (s = t.Node),
            (l = t.ScrollView),
            (c = t._decorator),
            (h = t.v3),
            (u = t.UIOpacity),
            (p = t.Label),
            (g = t.Color),
            (m = t.Tween),
            (d = t.tween),
            (f = t.Vec3),
            (y = t.Sprite),
            (b = t.Button),
            (v = t.log),
            (C = t.rect),
            (P = t.UITransform);
        },
        function (t) {
          S = t.SoundManager3986;
        },
        null,
        function (t) {
          T = t.MD5History3986;
        },
        function (t) {
          (B = t.convertNumberToK), (N = t.customDateFormat);
        },
        function (t) {
          w = t.BTEventCode;
        },
        function (t) {
          D = t.BTPopupHistory;
        },
      ],
      execute: function () {
        var I, E, k, F, R, x, M, _, A, H, z, V, L, O, U;
        r._RF.push({}, "855566XjLtMhYJybs/a7oaE", "PopupHistory3986", void 0);
        var Y = c,
          X = Y.ccclass,
          G = Y.property;
        t(
          "PopupHistory3986",
          ((I = X("PopupHistory3986")),
          (E = G({ displayName: "Result sprite frame", type: a })),
          (k = G({ displayName: "Button sprite frame", type: a })),
          (F = G({ displayName: "Page Number", type: s })),
          (R = G({ type: l })),
          (x = G({ type: l })),
          (M = G({ displayName: "Content Plus", type: s })),
          I(
            ((H = e(
              (A = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "resultSpriteFrame", H, o(e)),
                    n(e, "btnSpriteFrame", z, o(e)),
                    n(e, "pageNumber", V, o(e)),
                    n(e, "leftScroll", L, o(e)),
                    n(e, "rightScroll", O, o(e)),
                    n(e, "contentPlus", U, o(e)),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.reset = function () {
                    this.md5 &&
                      ((this.md5.active = !1),
                      this.md5.getComponent(T).hideBubble()),
                      this.key &&
                        ((this.key.active = !1),
                        this.key.getComponent(T).hideBubble()),
                      (this.isShowing = !1),
                      this.leftPanelContent.children.length > 0 &&
                        this.leftPanelContent.children.forEach(function (t) {
                          t.active = !0;
                        }),
                      this.rightPanelContent.children.length > 0 &&
                        this.rightPanelContent.children.forEach(function (t) {
                          t.active = !0;
                        }),
                      (this.node.active = !1),
                      this.main.setPosition(h(0, 0, 0)),
                      this.overlay && (this.overlay.active = !1);
                  }),
                  (r.show = function () {
                    if (this.isShowing) {
                      this.hide(null);
                    } else {
                      var t;
                      if ((this.reset(), this.isSFX))
                        null == (t = S.getInstance()) || t.openPopup();
                      (this.isShowing = !0),
                        (this.node.active = !0),
                        this.overlay && (this.overlay.active = !0),
                        this.scrollView &&
                          this.scrollView.getComponent(l).scrollToTop(0.1),
                        this.main.setScale(h(0.7, 0.7, 0.7)),
                        (this.main.getComponent(u).opacity = 0),
                        this.zoomOut(this.main, 0, 0.5, "backOut", null),
                        (this.currentPageTemp = 0),
                        (this.toast.active = !1),
                        this.callApiGetPage(1);
                    }
                  }),
                  (r.resetContent = function () {
                    (this.pageNumber.getComponent(p).string = ""),
                      this.md5 &&
                        ((this.md5.active = !1),
                        this.md5.getComponent(T).hideBubble()),
                      this.key &&
                        ((this.key.active = !1),
                        this.key.getComponent(T).hideBubble()),
                      (this.contentPlus.active = !1),
                      t.prototype.resetContent.call(this);
                  }),
                  (r.updateData = function (t, e) {
                    t &&
                      e &&
                      ((t.active = !0),
                      this.updateBet(t, e.code),
                      (t.getChildByName("TXTBetValue").getComponent(p).string =
                        B(e.value)),
                      (t.getChildByName("TXTBetValue").getComponent(p).color =
                        g.WHITE),
                      (t.getChildByName("TXTBetWin").getComponent(p).string =
                        this.convertBetValue(e.gain)),
                      (t.getChildByName("TXTBetWin").getComponent(p).color =
                        e.gain > 0 ? new g(116, 252, 89) : new g(235, 29, 14)),
                      (t.getChildByName("refund").active = !!e.refundAmt));
                  }),
                  (r.updateUIData = function (t) {
                    var e = t.gameNum,
                      i = t.time,
                      n = t.items,
                      o = t.diceResult;
                    (this.txtMatchID.active = !0),
                      (this.txtMatchID.string = e + i),
                      this.updateContent(n),
                      this.updateDiceResult(o[0]),
                      this.fixScrollBar();
                  }),
                  (r.fixScrollBar = function () {
                    var t = this;
                    this.leftScroll.stopAutoScroll(),
                      this.leftScroll.scrollToTop(),
                      this.rightScroll.stopAutoScroll(),
                      this.rightScroll.scrollToTop(),
                      m.stopAllByTarget(this.leftScroll),
                      d(this.leftScroll)
                        .call(function () {
                          t.leftScroll._processDeltaMove(new f(0, -1, 0)),
                            t.leftScroll._processInertiaScroll(),
                            t.rightScroll._processDeltaMove(new f(0, -1, 0)),
                            t.rightScroll._processInertiaScroll();
                        })
                        .start();
                  }),
                  (r.updateBet = function (t, e) {
                    var i = t.getChildByName("Bet");
                    (i.active = !0),
                      (i.getComponent(y).spriteFrame =
                        this.resultSpriteFrame[e - 1]);
                  }),
                  (r._bindEvents = function () {
                    this.btnPre &&
                      this.btnPre.node.on(
                        b.EventType.CLICK,
                        this.onclickPrevious,
                        this
                      ),
                      this.btnNext &&
                        this.btnNext.node.on(
                          b.EventType.CLICK,
                          this.onClickNext,
                          this
                        ),
                      this.registerEvent(
                        w.UPDATE_HISTORY,
                        this.updateHistory.bind(this)
                      ),
                      this.registerEvent(
                        w.ON_GET_HISTORY_SUCCESS,
                        this.updateUI.bind(this)
                      ),
                      this.registerEvent(
                        w.API_ERROR,
                        this.onAPIError.bind(this)
                      );
                  }),
                  (r.updateUI = function (t) {
                    var e = this;
                    v("dataResult ====", JSON.stringify(t)),
                      this.resetContent(),
                      this.hidePreloader(),
                      (this.currentPage = t.data.curPage),
                      (this.totalPage = t.data.totalPage
                        ? t.data.totalPage
                        : 0),
                      (this.pageNumber.getComponent(p).string =
                        "Trang " + this.currentPage),
                      (t.data.resultList ? t.data.resultList : []).forEach(
                        function (t) {
                          var i = new Date(t.timeMilli);
                          i = N(i, " (#DD#/#MM#/#YYYY# - #hhhh#:#mm#)");
                          var n = {
                            gameNum: t.gameNum,
                            time: i,
                            items: t.items,
                            win: t.gain,
                            diceResult: t.result,
                          };
                          e.updateUIData(n),
                            t.result[0].md5Result &&
                              e.md5 &&
                              e.key &&
                              e.updateMD5Result(t.result[0].md5Result);
                        }
                      ),
                      this.pageIndex &&
                        (this.pageIndex.getComponent(p).string =
                          "Trang: " + this.currentPage),
                      this._updatePageNumber(),
                      this.checkActiveButtons(),
                      t ? this.hideToastDataError() : this.showToastDataError(),
                      (this.contentPlus.active = !0);
                  }),
                  (r.onClickNext = function () {
                    var t;
                    this.callApiGetPage(this.currentPage - 1),
                      null == (t = S.getInstance()) || t.btnSound(!0);
                  }),
                  (r.onclickPrevious = function () {
                    var t;
                    this.callApiGetPage(this.currentPage + 1),
                      null == (t = S.getInstance()) || t.btnSound(!0);
                  }),
                  (r.checkActiveButtons = function () {
                    var t = this.currentPage < this.totalPage,
                      e = this.currentPage > 1;
                    (this.btnPre.node.active = !0),
                      (this.btnNext.node.active = !0),
                      (this.btnPre.interactable = t),
                      (this.btnPre.target.getComponent(y).spriteFrame = t
                        ? this.btnSpriteFrame[0]
                        : this.btnSpriteFrame[1]),
                      (this.btnNext.interactable = e),
                      (this.btnNext.target.getComponent(y).spriteFrame = e
                        ? this.btnSpriteFrame[0]
                        : this.btnSpriteFrame[1]);
                  }),
                  (r.update = function (t) {
                    this.optimizeScrollView(this.leftPanelContent),
                      this.optimizeScrollView(this.rightPanelContent);
                  }),
                  (r.optimizeScrollView = function (t) {
                    for (
                      var e = t.parent,
                        i = C(
                          -e.getComponent(P).width / 2,
                          -t.getPosition().y - e.getComponent(P).height,
                          e.getComponent(P).width,
                          e.getComponent(P).height
                        ),
                        n = 0;
                      n < t.children.length;
                      n++
                    ) {
                      var o = t.children[n],
                        r = o.getComponent(u);
                      null === r && (r = o.addComponent(u)),
                        i.intersects(o.getComponent(P).getBoundingBox())
                          ? ((r.opacity = 255),
                            o.children.forEach(function (t) {
                              t.getComponent(y) &&
                                (t.getComponent(y).enabled = !0),
                                t.getComponent(p) &&
                                  (t.getComponent(p).enabled = !0);
                            }))
                          : ((r.opacity = 0),
                            o.children.forEach(function (t) {
                              t.getComponent(y) &&
                                (t.getComponent(y).enabled = !1),
                                t.getComponent(p) &&
                                  (t.getComponent(p).enabled = !1);
                            }));
                    }
                  }),
                  (r.updateMD5Result = function (t) {
                    this.md5 &&
                      ((this.md5.active = !1),
                      t.md5 &&
                        ((this.md5.active = !0),
                        this.md5.getComponent(T).updateContent(t))),
                      this.key &&
                        ((this.key.active = !1),
                        t.key &&
                          ((this.key.active = !0),
                          this.key.getComponent(T).updateContent(t)));
                  }),
                  e
                );
              })(D)).prototype,
              "resultSpriteFrame",
              [E],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (z = e(A.prototype, "btnSpriteFrame", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (V = e(A.prototype, "pageNumber", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(A.prototype, "leftScroll", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = e(A.prototype, "rightScroll", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = e(A.prototype, "contentPlus", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = A))
          ) || _)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupListUser3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./ExtendUserItem3986.ts",
    "./BTPopupListUser.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, r, s, o, p, c, a, u, l, f;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (r = e.assertThisInitialized),
            (s = e.createClass);
        },
        function (e) {
          (o = e.cclegacy), (p = e.Node), (c = e._decorator), (a = e.Mask);
        },
        function (e) {
          u = e.checkItemInMask;
        },
        function (e) {
          l = e.ExtendUserItem3986;
        },
        function (e) {
          f = e.BTPopupListUser;
        },
      ],
      execute: function () {
        var h, m, v, C, d;
        o._RF.push({}, "71becjgbeFCZrQYAK288Bm5", "PopupListUser3986", void 0);
        var y = c,
          E = y.ccclass,
          _ = y.property;
        e(
          "PopupListUser3986",
          ((h = E("PopupListUser3986")),
          (m = _({ type: p })),
          h(
            ((d = t(
              (C = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, s = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    n(t, "view", d, r(t)),
                    (t._maskCmp = null),
                    t
                  );
                }
                i(t, e);
                var o = t.prototype;
                return (
                  (o.bindEvent = function () {
                    var e,
                      t,
                      i = this;
                    this.overlay.on(p.EventType.TOUCH_END, function () {
                      i.fireEvent(i.getConfig().EVENT_CODE.CLICK_OVERLAY),
                        i.hide();
                    }),
                      null == (e = this.btnHide) ||
                        e.off(p.EventType.TOUCH_END),
                      null == (t = this.btnHide) ||
                        t.on(p.EventType.TOUCH_END, function () {
                          i.hide();
                        });
                  }),
                  (o.update = function () {
                    this.optimizeScrollView();
                  }),
                  (o.optimizeScrollView = function () {
                    for (
                      var e = this.viewList.children, t = 0;
                      t < e.length;
                      t++
                    ) {
                      var i = u(this.maskCmp, e[t]);
                      e[t].getComponent(l).visibleMainNode(i);
                    }
                  }),
                  s(t, [
                    {
                      key: "maskCmp",
                      get: function () {
                        return (
                          this._maskCmp ||
                            (this._maskCmp = this.view.getComponent(a)),
                          this._maskCmp
                        );
                      },
                    },
                  ]),
                  t
                );
              })(f)).prototype,
              "view",
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
            (v = C))
          ) || v)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupManager3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./PopupListUser3986.ts",
    "./PopupAnalytic3986.ts",
    "./BTEventCode.ts",
    "./BTPopupManager.ts",
  ],
  function (t) {
    "use strict";
    var o, n, e, i, r, p, s, u;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (e = t.Node), (i = t._decorator);
        },
        null,
        function (t) {
          r = t.PopupListUser3986;
        },
        function (t) {
          p = t.PopupAnalytic3986;
        },
        function (t) {
          s = t.BTEventCode;
        },
        function (t) {
          u = t.BTPopupManager;
        },
      ],
      execute: function () {
        var c;
        n._RF.push({}, "72886lZcGBFDoXMEevVaLuJ", "PopupManager3986", void 0);
        var a = i,
          l = a.ccclass;
        a.property,
          t(
            "PopupManager3986",
            l("PopupManager3986")(
              (c = (function (t) {
                function n() {
                  return t.apply(this, arguments) || this;
                }
                o(n, t);
                var i = n.prototype;
                return (
                  (i.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.registerEvent(
                        s.SHOW_PLAYER_LIST,
                        this.showListUserPopup.bind(this)
                      );
                  }),
                  (i.showAnalyticPopup = function () {
                    this.show(p);
                  }),
                  (i.showListUserPopup = function () {
                    this.show(r);
                  }),
                  (i.bindEvent = function () {
                    var t = this;
                    this.overlay.on(e.EventType.TOUCH_END, function () {
                      t.fireEvent(t.getConfig().EVENT_CODE.CLICK_OVERLAY),
                        t.currentPopup
                          ? t.currentPopup.hide()
                          : (t.overlay.active = !1);
                    });
                  }),
                  n
                );
              })(u))
            ) || c
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupSetting3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTSoundManager.ts",
    "./BTPopupSetting.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, a, l, c, s, r, h, u, g, p, b, f, T, y, d;
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
            (l = t.Node),
            (c = t._decorator),
            (s = t.ScrollView),
            (r = t.v3),
            (h = t.UIOpacity),
            (u = t.Color),
            (g = t.Toggle),
            (p = t.Label),
            (b = t.Button),
            (f = t.Tween),
            (T = t.tween);
        },
        null,
        function (t) {
          y = t.BTSoundManager;
        },
        function (t) {
          d = t.BTPopupSetting;
        },
      ],
      execute: function () {
        var B, v, m, C, w, D, V, S, M, E, _, O, k, x, N, I, L;
        a._RF.push({}, "55f13gEbGBGao19LGq39VwI", "PopupSetting3986", void 0);
        var A = c,
          z = A.ccclass,
          P = A.property;
        t(
          "PopupSetting3986",
          ((B = z("PopupSetting3986")),
          (v = P({ type: l })),
          (m = P({ type: l })),
          (C = P({ type: l })),
          (w = P({ type: l })),
          (D = P({ type: l })),
          (V = P({ type: l })),
          (S = P({ type: l })),
          B(
            ((_ = e(
              (E = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    a[l] = arguments[l];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "topViewTableBtn", _, o(e)),
                    n(e, "normalTableBtn", O, o(e)),
                    n(e, "tipTableMode", k, o(e)),
                    n(e, "txtDung", x, o(e)),
                    n(e, "txtNghieng", N, o(e)),
                    n(e, "tickDung", I, o(e)),
                    n(e, "tickNghieng", L, o(e)),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.extendLoad = function () {
                    t.prototype.extendLoad.call(this),
                      null != this.tipTableMode &&
                        (this.tipTableMode.active = !1);
                  }),
                  (a.show = function () {
                    if (this.isShowing) {
                      this.hide(null);
                    } else {
                      var t;
                      if ((this.reset(), this.isSFX))
                        null == (t = y.getInstance()) || t.openPopup();
                      (this.isShowing = !0),
                        (this.node.active = !0),
                        this.overlay && (this.overlay.active = !0),
                        this.scrollView &&
                          this.scrollView.getComponent(s).scrollToTop(0.1),
                        this.main.setScale(r(0.7, 0.7, 0.7)),
                        (this.main.getComponent(h).opacity = 0),
                        this.zoomOut(this.main, 0, 0.5, "backOut", null);
                    }
                  }),
                  (a.onEnable = function () {
                    this.tipTableMode &&
                      this.hideSuggestBubble(this.tipTableMode);
                  }),
                  (a.init = function () {
                    var e = this;
                    t.prototype.init.call(this);
                    var i = new u(109, 109, 109),
                      n = new u(255, 255, 255);
                    (this.showChat =
                      this.getDataStore().getCurrentActiveChat()),
                      this.ChatCheckBox &&
                        (this.ChatCheckBox.getComponent(g).isChecked =
                          this.showChat),
                      (this.showVoice =
                        this.getDataStore().isEnableDealerVoice()),
                      (this.btnVoiceOn.active = this.showVoice),
                      (this.btnVoiceOff.active = !this.showVoice);
                    var o = this.txtDung.getComponent(p),
                      a = this.txtNghieng.getComponent(p);
                    this.topViewTableBtn &&
                      (this.topViewTableBtn.off("click"),
                      this.topViewTableBtn.on("click", function () {
                        var t;
                        (e.normalTableBtn.active = !0),
                          (e.topViewTableBtn.active = !1),
                          (o.color = i),
                          (a.color = n),
                          (e.txtDung.getComponent(h).opacity = 100),
                          (e.txtNghieng.getComponent(h).opacity = 255),
                          e._handleChangeTableMode(),
                          null == (t = y.getInstance()) || t.btnSound(!0);
                      })),
                      this.normalTableBtn &&
                        (this.normalTableBtn.off("click"),
                        this.normalTableBtn.on("click", function () {
                          var t;
                          (e.topViewTableBtn.active = !0),
                            (e.normalTableBtn.active = !1),
                            (o.color = n),
                            (a.color = i),
                            (e.txtDung.getComponent(h).opacity = 255),
                            (e.txtNghieng.getComponent(h).opacity = 100),
                            e._handleChangeTableMode(),
                            null == (t = y.getInstance()) || t.btnSound(!0);
                        }));
                    var l = this.getConfig().KEY_ITEM.NEXT_TABLE_MODE;
                    this.getDataStore().getDataByKey(l) ==
                    this.getConfig().TABLE_MODE.NORMAL
                      ? ((this.topViewTableBtn.active = !1),
                        (this.normalTableBtn.active = !0),
                        (o.color = i),
                        (a.color = n),
                        (this.txtDung.getComponent(h).opacity = 100),
                        (this.txtNghieng.getComponent(h).opacity = 255))
                      : ((this.topViewTableBtn.active = !0),
                        (this.normalTableBtn.active = !1),
                        (o.color = n),
                        (a.color = i),
                        (this.txtDung.getComponent(h).opacity = 255),
                        (this.txtNghieng.getComponent(h).opacity = 100)),
                      this.updateTickIcon();
                  }),
                  (a._handleChat = function () {
                    var e;
                    t.prototype._handleChat.call(this),
                      null == (e = y.getInstance()) ||
                        e.btnSound(this.showChat);
                  }),
                  (a._handleVoice = function () {
                    t.prototype._handleVoice.call(this),
                      this.btnVoiceOn &&
                        this.btnVoiceOff &&
                        this.getDataStore().setActiveDealerVoice(
                          this.showVoice
                        );
                  }),
                  (a._handleSFX = function () {
                    t.prototype._handleSFX.call(this);
                    var e = y.getInstance();
                    (this.btnVoiceOn.getComponent(b).interactable = !1),
                      (this.btnVoiceOff.getComponent(b).interactable = !1),
                      e.isEnableSFX &&
                        ((this.btnVoiceOn.getComponent(b).interactable = !0),
                        (this.btnVoiceOff.getComponent(b).interactable = !0));
                  }),
                  (a._handleChangeTableMode = function () {
                    var t = this.getConfig().KEY_ITEM.NEXT_TABLE_MODE,
                      e = this.getDataStore().getDataByKey(t);
                    (e =
                      e == this.getConfig().TABLE_MODE.NORMAL
                        ? this.getConfig().TABLE_MODE.TOPVIEW
                        : this.getConfig().TABLE_MODE.NORMAL),
                      this.getDataStore().setDataByKey(t, e),
                      this.tipTableMode &&
                        this.showSuggestBubble(this.tipTableMode),
                      this.updateTickIcon();
                  }),
                  (a.updateTickIcon = function () {
                    (this.tickDung.active = this.topViewTableBtn.active),
                      (this.tickNghieng.active = this.normalTableBtn.active);
                  }),
                  (a.showSuggestBubble = function (t, e) {
                    void 0 === e && (e = 0),
                      f.stopAllByTarget(t),
                      (t.active = !0),
                      (t.scale = r(0, 0, 0)),
                      T(t)
                        .delay(e)
                        .to(0.2, { scale: r(1, 1, 1) }, { easing: "backOut" })
                        .delay(3)
                        .to(0.2, { scale: r(0, 0, 0) }, { easing: "backIn" })
                        .call(function () {
                          t.active = !1;
                        })
                        .start();
                  }),
                  (a.hideSuggestBubble = function (t) {
                    f.stopAllByTarget(t), (t.active = !1);
                  }),
                  (a._setEnableBGButton = function () {}),
                  e
                );
              })(d)).prototype,
              "topViewTableBtn",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (O = e(E.prototype, "normalTableBtn", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = e(E.prototype, "tipTableMode", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = e(E.prototype, "txtDung", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(E.prototype, "txtNghieng", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(E.prototype, "tickDung", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(E.prototype, "tickNghieng", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = E))
          ) || M)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupTopWiner3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTToastPopup.ts",
    "./BTCommons.ts",
    "./BTPopupTopWinner.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, a, r, p, s, u, c, l, m, h;
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
            (r = t.SpriteFrame),
            (p = t.Font),
            (s = t._decorator),
            (u = t.Label),
            (c = t.Sprite);
        },
        null,
        function (t) {
          l = t.BTToastPopup;
        },
        function (t) {
          m = t.convertNumberToK;
        },
        function (t) {
          h = t.BTPopupTopWinner;
        },
      ],
      execute: function () {
        var g, d, v, y, f, k, T;
        a._RF.push({}, "52defjY3rVAZIjrTKHyHwrB", "PopupTopWiner3986", void 0);
        var B = s,
          C = B.ccclass,
          N = B.property;
        t(
          "PopupTopWinner3986",
          ((g = C("PopupTopWinner3986")),
          (d = N({ displayName: "List Sprite Rank", type: r })),
          (v = N({ displayName: "List Font Rank", type: p })),
          g(
            ((k = e(
              (f = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "listSpriteRank", k, o(e)),
                    i(e, "listFontRank", T, o(e)),
                    e
                  );
                }
                n(e, t);
                var a = e.prototype;
                return (
                  (a.show = function () {
                    var e;
                    t.prototype.show.call(this),
                      null == (e = this.toast.getComponent(l)) ||
                        e.hideToast(0, 0);
                  }),
                  (a._updateRank = function (t, e) {
                    var n = t.getChildByName("Rank"),
                      i = n.getChildByName("LBLRank"),
                      o = n.getChildByName("SpriteRank");
                    (i.active = !1),
                      (o.active = !1),
                      (i.getComponent(u).string = String(e.rank)),
                      Number(e.rank) <= 3
                        ? ((i.active = !1),
                          (o.active = !0),
                          (o.getComponent(c).spriteFrame =
                            this.listSpriteRank[e.rank - 1]))
                        : (i.active = !0),
                      (i.getComponent(u).string = String(e.rank));
                  }),
                  (a._updateUserName = function (t, e) {
                    var n = t
                      .getChildByName("UserName")
                      .getChildByName("LBLUserName_0");
                    (n.active = !1),
                      (n.active = !0),
                      (n.getComponent(u).string = String(e.displayName));
                  }),
                  (a._updateWinAmount = function (t, e) {
                    var n = t
                      .getChildByName("WinAmount")
                      .getChildByName("LBLWinAmount_0");
                    (n.active = !0),
                      (n.getComponent(u).string = m(e.winAmount));
                  }),
                  (a._updateRankItemUI = function (t, e) {
                    t &&
                      ((t.active = !0),
                      this._updateRank(t, e),
                      this._updateUserName(t, e),
                      this._updateWinAmount(t, e));
                  }),
                  (a.showToastDataError = function (t) {
                    var e;
                    (void 0 === t && (t = ""), "" != t) &&
                      (this.hideIconLoading(),
                      this.toast &&
                        ((this.toast.active = !0),
                        null == (e = this.toast.getComponent(l)) ||
                          e.showWithContent(t, 0, 0.5, !1)));
                  }),
                  e
                );
              })(h)).prototype,
              "listSpriteRank",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (T = e(f.prototype, "listFontRank", [v], {
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
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupUserInfo3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTPopupUserInfo.ts",
    "./BTCommons.ts",
  ],
  function (t) {
    "use strict";
    var o, n, s, e, i, r;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (s = t._decorator), (e = t.v3);
        },
        null,
        function (t) {
          i = t.BTPopupUserInfo;
        },
        function (t) {
          r = t.formatNumber;
        },
      ],
      execute: function () {
        var u;
        n._RF.push({}, "3ef73EmPI5HE4thRV1fLg8Y", "PopupUserInfo3986", void 0);
        var c = s.ccclass;
        s.property,
          t(
            "PopupUserInfo3986",
            c("PopupUserInfo3986")(
              (u = (function (t) {
                function n() {
                  return t.apply(this, arguments) || this;
                }
                o(n, t);
                var s = n.prototype;
                return (
                  (s.setMoney = function (t) {
                    this.lbMoney.string = r(t);
                  }),
                  (s.show = function () {
                    t.prototype.show.call(this),
                      this.main.setPosition(e(0, 0, 0));
                  }),
                  (s.reset = function () {
                    (this.isShowing = !1),
                      this.main.setPosition(e(1e4, 0, 0)),
                      this.overlay && (this.overlay.active = !1);
                  }),
                  n
                );
              })(i))
            ) || u
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PoupupPreloader3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTPopupPreloader.ts",
  ],
  function (o) {
    "use strict";
    var r, e, s, t, n;
    return {
      setters: [
        function (o) {
          r = o.inheritsLoose;
        },
        function (o) {
          (e = o.cclegacy), (s = o.ProgressBar), (t = o._decorator);
        },
        null,
        function (o) {
          n = o.BTPopupPreloader;
        },
      ],
      execute: function () {
        var p;
        e._RF.push(
          {},
          "5afe03wPUZNwq8BkdCICTJU",
          "PoupupPreloader3986",
          void 0
        );
        var c = t,
          i = c.ccclass;
        c.property,
          o(
            "PoupupPreloader3986",
            i("PoupupPreloader3986")(
              (p = (function (o) {
                function e() {
                  for (
                    var r, e = arguments.length, s = new Array(e), t = 0;
                    t < e;
                    t++
                  )
                    s[t] = arguments[t];
                  return (
                    ((r =
                      o.call.apply(o, [this].concat(s)) || this).progressIcon =
                      void 0),
                    r
                  );
                }
                r(e, o);
                var t = e.prototype;
                return (
                  (t.onLoad = function () {
                    o.prototype.onLoad.call(this),
                      (this.progressIcon = this.icon.getComponent(s));
                  }),
                  (t.show = function () {
                    o.prototype.show.call(this),
                      this.icon && (this.progressIcon.progress = 0);
                  }),
                  (t.update = function (o) {
                    this.node.active &&
                      ((this.progressIcon.progress += 2 * o),
                      this.progressIcon.progress >= 1 &&
                        (this.progressIcon.progress = 0));
                  }),
                  e
                );
              })(n))
            ) || p
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Preloader3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTPreloader.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, r, a, s, c, l, u, p, h, d;
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
            (a = t.ProgressBar),
            (s = t.Node),
            (c = t._decorator),
            (l = t.UIOpacity),
            (u = t.Tween),
            (p = t.tween),
            (h = t.v3);
        },
        null,
        function (t) {
          d = t.BTPreloader;
        },
      ],
      execute: function () {
        var f, y, g, m, v, P, b, A, I;
        r._RF.push({}, "8c55feZ3SFBnaN/qWx61cd1", "Preloader3986", void 0);
        var _ = c,
          w = _.ccclass,
          B = _.property;
        t(
          "Preloader3986",
          ((f = w("Preloader3986")),
          (y = B({ type: a, override: !0 })),
          (g = B({ displayName: "rotate Icon", type: s })),
          (m = B({ displayName: "speed" })),
          f(
            ((b = e(
              (P = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    i(e, "icon", b, o(e)),
                    i(e, "rotateIcon", A, o(e)),
                    i(e, "speed", I, o(e)),
                    e
                  );
                }
                n(e, t);
                var r = e.prototype;
                return (
                  (r.show = function () {
                    (this.node.active = !0),
                      (this.node.getComponent(l).opacity = 255),
                      this.icon && (this.icon.progress = 0),
                      this.rotateIcon &&
                        (u.stopAllByTarget(this.rotateIcon),
                        this.runPreloaderAnim());
                  }),
                  (r._init = function () {
                    (this.node.active = !1),
                      (this.node.getComponent(l).opacity = 255);
                  }),
                  (r.hide = function () {
                    t.prototype.hide.call(this),
                      this.rotateIcon && u.stopAllByTarget(this.rotateIcon);
                  }),
                  (r.runPreloaderAnim = function () {
                    this._runRotateAnim(), this._runPopingAnim();
                  }),
                  (r._runRotateAnim = function () {
                    var t = this;
                    p(this.rotateIcon)
                      .by(this.speed, { angle: 360 })
                      .call(function () {
                        t._runRotateAnim();
                      })
                      .start();
                  }),
                  (r._runPopingAnim = function () {
                    var t = this;
                    p(this.rotateIcon)
                      .to(this.speed / 4, { scale: h(1.05, 1.05, 1.05) })
                      .to(this.speed / 4, { scale: h(1, 1, 1) })
                      .call(function () {
                        t._runPopingAnim();
                      })
                      .start();
                  }),
                  (r.update = function (t) {
                    this.node.active &&
                      this.icon &&
                      ((this.icon.progress += 2 * t),
                      this.icon.progress >= 1 && (this.icon.progress = 0));
                  }),
                  e
                );
              })(d)).prototype,
              "icon",
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
            (A = e(P.prototype, "rotateIcon", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(P.prototype, "speed", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 2;
              },
            })),
            (v = P))
          ) || v)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ResizeSettingPopup3986.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, i, n, r, o, p, a, s, u;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (p = e._decorator),
            (a = e.Node),
            (s = e.UITransform),
            (u = e.Component);
        },
      ],
      execute: function () {
        var l, c, d, g, b, h, y;
        o._RF.push(
          {},
          "b56b1cNRHtIOYmyDbDmXxlG",
          "ResizeSettingPopup3986",
          void 0
        );
        var f = p.ccclass,
          N = p.property;
        e(
          "ResizeSettingPopup3986",
          ((l = f("ResizeSettingPopup3986")),
          (c = N({ displayName: "parentNode", type: a })),
          (d = N({ displayName: "bgNode", type: a })),
          l(
            ((h = t(
              (b = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, o = new Array(i), p = 0;
                    p < i;
                    p++
                  )
                    o[p] = arguments[p];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    n(t, "parentNode", h, r(t)),
                    n(t, "bgNode", y, r(t)),
                    t
                  );
                }
                return (
                  i(t, e),
                  (t.prototype.update = function () {
                    this.parentNode &&
                      this.bgNode &&
                      (this.parentNode.getComponent(s).height =
                        this.bgNode.height);
                  }),
                  t
                );
              })(u)).prototype,
              "parentNode",
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
            (y = t(b.prototype, "bgNode", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = b))
          ) || g)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ShowResultState3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./State3986.ts",
    "./SoundManager3986.ts",
    "./BTStateAction.ts",
  ],
  function (e) {
    "use strict";
    var t, i, a, n, o, s, h;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (i = e.cclegacy), (a = e._decorator), (n = e.log);
        },
        null,
        function (e) {
          o = e.State3986;
        },
        function (e) {
          s = e.SoundManager3986;
        },
        function (e) {
          h = e.BTStateAction;
        },
      ],
      execute: function () {
        var c;
        i._RF.push(
          {},
          "f85a5DcQjBC7a+Q6dkj34Kx",
          "ShowResultState3986",
          void 0
        );
        var u = a.ccclass;
        e(
          "ShowResultState3986",
          u("ShowResultState3986")(
            (c = (function (e) {
              function i() {
                for (
                  var t, i = arguments.length, a = new Array(i), n = 0;
                  n < i;
                  n++
                )
                  a[n] = arguments[n];
                return (
                  ((t =
                    e.call.apply(e, [this].concat(a)) || this).isShowKeyResult =
                    void 0),
                  (t.isShowGameWinResult = !1),
                  t
                );
              }
              t(i, e);
              var a = i.prototype;
              return (
                (a.onEnterState = function () {
                  e.prototype.onEnterState.call(this),
                    (this.isShowGameWinResult = !1),
                    (this.isShowKeyResult = !1),
                    this.node.on(
                      "_showGameResults",
                      this._showGameResults,
                      this
                    );
                }),
                (a.onExitState = function () {
                  e.prototype.onExitState.call(this),
                    (this.isShowKeyResult = !1),
                    (this.isShowGameWinResult = !1);
                }),
                (a._showGameResults = function (e) {
                  var t = e.duration;
                  if (!this.getStateMachine().getDataStore().getSqueeze()) {
                    n("duration", t);
                    var i = this.getStateMachine()
                        .getTableData()
                        .getLastGameResult().diceResult,
                      a = this.getStateMachine()
                        .getTableData()
                        .getLastGameWinResult();
                    if (
                      (this.getStateMachine().diceShaker.updateDiceResult(i),
                      this.isRunning())
                    )
                      this._onShowGameResult();
                    else {
                      (this.isShowGameWinResult = !0),
                        this.getStateMachine().diceShaker.showDiceResult(!1),
                        this.getStateMachine().diceShaker.playAnimDiceCupOpen(
                          !1
                        ),
                        this.getStateMachine().diceShaker.playAnimShowDiceResult(
                          !1
                        ),
                        this.getStateMachine().diceShaker.runShakerGlowEffect(
                          !1
                        ),
                        this.getStateMachine().diceShaker.hideDiceResult(!1),
                        this.gameDataStore.getCurrentTableMode() ==
                        this.gameConfig.TABLE_MODE.NORMAL
                          ? this.isShowGameWinResult &&
                            this.getStateMachine().bettingBoxes.showResult(a)
                          : this.isShowGameWinResult &&
                            this.getStateMachine().bettingBoxesTopView.showResult(
                              a
                            );
                      var o = this.getStateMachine()
                        .getTableData()
                        .getKeyResult();
                      o && this.getStateMachine().md5Cmp.showKeyResult(o, !1);
                    }
                  }
                }),
                (a._onShowGameResult = function () {
                  var e = this,
                    t = [];
                  t.push(
                    new h()
                      .onStartAction(function () {
                        e.getStateMachine().dealer &&
                          e
                            .getStateMachine()
                            .dealer.ON_EMITER.playAnimPushBox();
                      })
                      .onFinishAction(function () {})
                      .onDuration(
                        this.getConfig().DICE_SHAKER.SHOW_RESULT_DURATION
                      )
                  ),
                    t.push(
                      new h()
                        .onStartAction(function () {
                          e.getStateMachine().diceShaker.showDiceResult();
                        })
                        .onFinishAction(function () {
                          e.getStateMachine().diceShaker.showDiceResult(!1);
                        })
                        .onDuration(
                          this.gameConfig.DICE_SHAKER.SHOW_RESULT_DURATION + 0.2
                        )
                    );
                  var i = this.getStateMachine()
                      .getTableData()
                      .getLastGameResult(),
                    a = i.anim,
                    n = i.diceResult;
                  t.push(
                    new h()
                      .onStartAction(function () {
                        e.getStateMachine().diceShaker.playAnimDiceCupOpen(),
                          e
                            .getStateMachine()
                            .diceShaker.playAnimShowDiceResult(),
                          e.getStateMachine().diceShaker.runShakerGlowEffect(),
                          e.getStateMachine().dealer &&
                            11 == n.type &&
                            (e.dealerAnimThrowBomb(),
                            a ||
                              e
                                .getStateMachine()
                                .dealer.ON_EMITER.setCanPlayIdleAnim(!0));
                      })
                      .onFinishAction(function () {
                        e.getStateMachine().dealer &&
                          !a &&
                          11 != n.type &&
                          (e
                            .getStateMachine()
                            .dealer.ON_EMITER.setCanPlayIdleAnim(!0),
                          e
                            .getStateMachine()
                            .dealer.ON_EMITER.playRandomIdleAnim()),
                          e
                            .getStateMachine()
                            .diceShaker.playAnimDiceCupOpen(!1),
                          e
                            .getStateMachine()
                            .diceShaker.playAnimShowDiceResult(!1);
                      })
                      .onDuration(0.6)
                  ),
                    t.push(
                      new h()
                        .onStartAction(function () {
                          e.getStateMachine().diceShaker.runAnimResultLayer();
                          var t = e
                            .getStateMachine()
                            .getTableData()
                            .getKeyResult();
                          t && e.getStateMachine().md5Cmp.showKeyResult(t),
                            (e.isShowKeyResult = !0);
                        })
                        .onFinishAction(function () {
                          if (
                            (e
                              .getStateMachine()
                              .diceShaker.runAnimResultLayer(!1),
                            !e.isShowKeyResult)
                          ) {
                            var t = e
                              .getStateMachine()
                              .getTableData()
                              .getKeyResult();
                            t &&
                              e.getStateMachine().md5Cmp.showKeyResult(t, !1);
                          }
                        })
                        .onDuration(
                          this.gameConfig.DICE_SHAKER
                            .RESULT_LAYER_ANIM_DURATION +
                            this.gameConfig.DICE_SHAKER
                              .DELAY_SHOW_RESULT_DURATION
                        )
                    ),
                    t.push(
                      new h()
                        .onStartAction(function () {
                          e.getStateMachine().diceShaker.hideDiceResult();
                        })
                        .onFinishAction(function () {
                          e.getStateMachine().diceShaker.hideDiceResult(!1);
                        })
                        .onDuration(
                          this.gameConfig.DICE_SHAKER.HIDE_RESULT_DURATION
                        )
                    ),
                    t.push(this._showTableWinBetBoxesAction()),
                    a && t.push(this._dealerAnimEmojAction(a)),
                    this.runStateActions(t, "show_result");
                }),
                (a._dealerAnimEmojAction = function (e) {
                  var t = this;
                  return new h()
                    .onStartAction(function () {
                      t.getStateMachine().dealer &&
                        (t
                          .getStateMachine()
                          .dealer.ON_EMITER.setCanPlayIdleAnim(!0),
                        t
                          .getStateMachine()
                          .dealer.ON_EMITER.playAnimByIndex(e));
                    })
                    .onFinishAction(function () {})
                    .onDuration(
                      this.gameConfig.DICE_SHAKER.DEALER_WIN_EMOJI_DURATION
                    );
                }),
                (a.dealerAnimThrowBomb = function () {
                  this.getStateMachine().dealer &&
                    this.getStateMachine().dealer.ON_EMITER.playAnimThrowGrenade();
                }),
                (a._showTableWinBetBoxesAction = function () {
                  var e = this,
                    t = this.getStateMachine()
                      .getTableData()
                      .getLastGameWinResult(),
                    i = this.gameDataStore.getCurrentTableMode();
                  return new h()
                    .onStartAction(function () {
                      (e.isShowGameWinResult = !0),
                        i == e.gameConfig.TABLE_MODE.NORMAL
                          ? e
                              .getStateMachine()
                              .bettingBoxes.showResult(t, function (t) {
                                e._playSoundEff(t);
                              })
                          : e
                              .getStateMachine()
                              .bettingBoxesTopView.showResult(t, function (t) {
                                e._playSoundEff(t);
                              });
                    })
                    .onFinishAction(function () {
                      i == e.gameConfig.TABLE_MODE.NORMAL
                        ? !e.isShowGameWinResult &&
                          e
                            .getStateMachine()
                            .bettingBoxes.showResult(t, function (t) {
                              e._playSoundEff(t);
                            })
                        : !e.isShowGameWinResult &&
                          e
                            .getStateMachine()
                            .bettingBoxesTopView.showResult(t, function (t) {
                              e._playSoundEff(t);
                            });
                    })
                    .onDuration(0.01);
                }),
                (a._playSoundEff = function (e) {
                  var t, i;
                  if (this.gameDataStore.isEnableDealerVoice())
                    for (var a = 0; a < e.length; a++) {
                      switch (parseInt(e[a])) {
                        case 3:
                          null == (t = s.getInstance()) || t.resultBig(!0);
                          break;
                        case 4:
                          null == (i = s.getInstance()) || i.resultSmall(!0);
                      }
                    }
                }),
                i
              );
            })(o))
          ) || c
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlideBets3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTSubscriber.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, o, s, r, l, d, a, c, h;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (r = e.Node),
            (l = e._decorator),
            (d = e.log),
            (a = e.Label),
            (c = e.Vec3);
        },
        null,
        function (e) {
          h = e.BTSubscriber;
        },
      ],
      execute: function () {
        var u, p, b, S, f, v, B, g, y;
        s._RF.push({}, "af48atiEBZGkYrIW/robOns", "SlideBets3986", void 0);
        var m = l,
          P = m.ccclass,
          _ = m.property;
        e(
          "SlideBets3986",
          ((u = P("SlideBets3986")),
          (p = _({ displayName: "Slider", type: r })),
          (b = _({ displayName: "Content", type: r })),
          (S = _({ displayName: "Bet Selected Amount", type: r })),
          u(
            ((B = t(
              (v = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, s = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    n(t, "betSlider", B, o(t)),
                    n(t, "content", g, o(t)),
                    n(t, "betSelected", y, o(t)),
                    (t.maxBet = 0),
                    (t.originPos = void 0),
                    t
                  );
                }
                i(t, e);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      this._init(),
                      this._bindProps();
                  }),
                  (s.start = function () {}),
                  (s._init = function () {
                    (this.node.active = !1),
                      (this.originPos = this.betSlider.getPosition());
                  }),
                  (s._bindProps = function () {
                    (this.node.showSlideBet = this.showSlideBet.bind(this)),
                      (this.node.hideSlideBet = this.hideSlideBet.bind(this)),
                      (this.node.resetUI = this.resetUI.bind(this)),
                      this.betSlider &&
                        this.betSlider.on("slide", this.onSlide.bind(this));
                  }),
                  (s.onSlide = function (e) {
                    d("Progress", e.progress);
                    var t = Math.floor(e.progress * this.maxBet);
                    this.betSelected.getComponent(a).string = t;
                  }),
                  (s.showSlideBet = function (e) {
                    void 0 === e && (e = 0),
                      this.node.active
                        ? this.hideSlideBet()
                        : ((this.maxBet = e),
                          (this.node.active = !0),
                          this.moveTo(
                            this.betSlider,
                            c.ZERO,
                            0.35,
                            0,
                            this.SINE_OUT,
                            function () {}
                          ));
                  }),
                  (s.hideSlideBet = function () {
                    var e = this;
                    this.node.active &&
                      this.moveTo(
                        this.betSlider,
                        this.originPos,
                        0.35,
                        0,
                        this.SINE_IN,
                        function () {
                          e.node.active = !1;
                        }
                      );
                  }),
                  (s.resetUI = function () {
                    (this.node.active = !1),
                      this.betSlider.setPosition(this.originPos);
                  }),
                  t
                );
              })(h)).prototype,
              "betSlider",
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
            (g = t(v.prototype, "content", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = t(v.prototype, "betSelected", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = v))
          ) || f)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SoundManager3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTSoundManager.ts",
  ],
  function (o) {
    "use strict";
    var i, n, t, a;
    return {
      setters: [
        function (o) {
          i = o.inheritsLoose;
        },
        function (o) {
          (n = o.cclegacy), (t = o._decorator);
        },
        null,
        function (o) {
          a = o.BTSoundManager;
        },
      ],
      execute: function () {
        var e, s;
        n._RF.push({}, "6b512BTEe1LpoU3H6hAoaSz", "SoundManager3986", void 0);
        var u = t.ccclass;
        t.property,
          o(
            "SoundManager3986",
            u("SoundManager3986")(
              (((s = (function (o) {
                function n() {
                  return o.apply(this, arguments) || this;
                }
                i(n, o);
                var t = n.prototype;
                return (
                  (t.onLoad = function () {
                    o.prototype.onLoad.call(this), (n._instance = this);
                  }),
                  (n.getInstance = function () {
                    return this._instance;
                  }),
                  (t.resultBig = function (o, i) {
                    void 0 === o && (o = !0),
                      void 0 === i && (i = !0),
                      this.playSFXName("bigSound", o, i);
                  }),
                  (t.resultSmall = function (o, i) {
                    void 0 === o && (o = !0),
                      void 0 === i && (i = !0),
                      this.playSFXName("smallSound", o, i);
                  }),
                  (t.GotJPWinSound = function (o, i) {
                    void 0 === o && (o = !0),
                      void 0 === i && (i = !0),
                      this.playSFXName("GotJPWin", o, i);
                  }),
                  (t.exploreSound = function (o, i) {
                    void 0 === o && (o = !0),
                      void 0 === i && (i = !0),
                      this.playSFXName("explore", o, i);
                  }),
                  (t.winBetSound = function (o, i) {
                    void 0 === o && (o = !0),
                      void 0 === i && (i = !0),
                      this.playSFXName("winBet", o, i);
                  }),
                  (t.shakerSound = function (o, i) {
                    void 0 === o && (o = !0),
                      void 0 === i && (i = !0),
                      this.playSFXName("shaker", o, i);
                  }),
                  (t.bigSFX = function (o, i) {}),
                  (t.smallSFX = function (o, i) {}),
                  (t.openBox = function (o, i) {
                    void 0 === o && (o = !0),
                      void 0 === i && (i = !0),
                      this.playSFXName("xiu", o, i);
                  }),
                  (t.pushSicboBoxSound = function (o, i) {
                    void 0 === o && (o = !0),
                      void 0 === i && (i = !0),
                      this.playSFXName("pushSicboBox", o, i);
                  }),
                  (t.helloSFX = function (o, i) {
                    void 0 === o && (o = !0), void 0 === i && (i = !0);
                    var n = "sfx_hello" + Math.ceil(3 * Math.random());
                    this.playSFXName(n, o, i);
                  }),
                  (t.ohnoSFX = function (o, i) {
                    void 0 === o && (o = !0), void 0 === i && (i = !0);
                    var n = "sfx_ohno" + Math.ceil(3 * Math.random());
                    this.playSFXName(n, o, i);
                  }),
                  (t.omgSFX = function (o, i) {
                    void 0 === o && (o = !0), void 0 === i && (i = !0);
                    var n = "sfx_omg" + Math.ceil(3 * Math.random());
                    this.playSFXName(n, o, i);
                  }),
                  (t.supriseSFX = function (o, i) {
                    void 0 === o && (o = !0), void 0 === i && (i = !0);
                    var n = "sfx_suprise" + Math.ceil(3 * Math.random());
                    this.playSFXName(n, o, i);
                  }),
                  (t.wowSFX = function (o, i) {
                    void 0 === o && (o = !0), void 0 === i && (i = !0);
                    var n = "sfx_wow" + Math.ceil(3 * Math.random());
                    this.playSFXName(n, o, i);
                  }),
                  (t.callSFX = function (o, i) {
                    void 0 === o && (o = !0), void 0 === i && (i = !0);
                    var n = "sfx_phone" + Math.ceil(3 * Math.random());
                    this.playSFXName(n, o, i);
                  }),
                  (t.clapSFX = function (o, i) {
                    void 0 === o && (o = !0), void 0 === i && (i = !0);
                    var n = "sfx_yes" + Math.ceil(3 * Math.random());
                    this.playSFXName(n, o, i);
                  }),
                  (t.comeonmanSFX = function (o, i) {
                    void 0 === o && (o = !0), void 0 === i && (i = !0);
                    var n = "sfx_comeon" + Math.ceil(3 * Math.random());
                    this.playSFXName(n, o, i);
                  }),
                  (t.notifySFX = function (o, i) {
                    void 0 === o && (o = !0),
                      void 0 === i && (i = !0),
                      this.playSFXName("sfx_notify", o, i);
                  }),
                  (t.openPopup = function (o, i) {
                    void 0 === o && (o = !0),
                      void 0 === i && (i = !0),
                      this.playSFXName("sfx_openpopup", o, i);
                  }),
                  (t.ringBellSound = function (o, i) {
                    void 0 === o && (o = !0),
                      void 0 === i && (i = !0),
                      this.playSFXName("sfx_bell", o, i);
                  }),
                  (t.closePopup = function (o, i) {
                    void 0 === o && (o = !0),
                      void 0 === i && (i = !0),
                      this.playSFXName("sfx_closepopup", o, i);
                  }),
                  (t.highlightWinBet = function () {
                    this.playSFXName("sfx_highlight");
                  }),
                  (t.countDownEnd = function () {}),
                  n
                );
              })(a))._instance = void 0),
              (e = s))
            ) || e
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SqueezeButton3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTSoundManager.ts",
    "./BTSubscriber.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, u, s, o, a, l, b, c, r, S, z, h, q;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (u = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (o = e.Node),
            (a = e._decorator),
            (l = e.v3),
            (b = e.Button),
            (c = e.Label),
            (r = e.UIOpacity),
            (S = e.Tween),
            (z = e.tween);
        },
        null,
        function (e) {
          h = e.BTSoundManager;
        },
        function (e) {
          q = e.BTSubscriber;
        },
      ],
      execute: function () {
        var p, B, y, d, g, f, H, v, T;
        s._RF.push({}, "9dce8XfV8dMgqFlsq6zTrXI", "SqueezeButton3986", void 0);
        var m = a,
          A = m.ccclass,
          _ = m.property;
        e(
          "SqueezeButton3986",
          ((p = A("SqueezeButton3986")),
          (B = _({ displayName: "Squeeze btn", type: o })),
          (y = _({ displayName: "No squeeze btn", type: o })),
          (d = _({ displayName: "Bubble hint squeeze", type: o })),
          p(
            ((H = t(
              (f = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, s = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    n(t, "squeezeBtn", H, u(t)),
                    n(t, "noSqueezeBtn", v, u(t)),
                    n(t, "bubbleHintSqueeze", T, u(t)),
                    t
                  );
                }
                i(t, e);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      this._bindProb(),
                      this.bubbleHintSqueeze &&
                        (this.bubbleHintSqueeze.setScale(l(0, 0, 1)),
                        (this.bubbleHintSqueeze.isBusy = !1),
                        (this.bubbleHintSqueeze.isShowed = !1));
                  }),
                  (s._bindProb = function () {
                    var e = this;
                    this.squeezeBtn &&
                      (this.squeezeBtn.off("click"),
                      this.squeezeBtn.on("click", function () {
                        var t;
                        null == (t = h.getInstance()) || t.btnSound(),
                          e.setActiveSqueezeBtn(!1),
                          e.getDataStore().setLastSqueezeEnable(!1);
                      })),
                      this.noSqueezeBtn &&
                        (this.noSqueezeBtn.off("click"),
                        this.noSqueezeBtn.on("click", function () {
                          var t;
                          null == (t = h.getInstance()) || t.btnSound(),
                            e.setActiveSqueezeBtn(!0),
                            e.getDataStore().setLastSqueezeEnable(!0);
                        }));
                    var t = this.node;
                    (t.setInteractable = this.setInteractable.bind(this)),
                      (t.initBtnUI = this.initBtnUI.bind(this)),
                      (t.hideToolTipSqueezeHint =
                        this._hideToolTipSqueezeHint.bind(this));
                  }),
                  (s.initBtnUI = function () {
                    this.getDataStore().getSqueeze()
                      ? this.setActiveSqueezeBtn(!0)
                      : this.setActiveSqueezeBtn(!1);
                  }),
                  (s.setActiveSqueezeBtn = function (e) {
                    (this.squeezeBtn.active = e),
                      (this.noSqueezeBtn.active = !e);
                  }),
                  (s.setInteractable = function (e) {
                    this.squeezeBtn.active &&
                      (this.squeezeBtn.getComponent(b).interactable = e),
                      this.noSqueezeBtn.active &&
                        (this.noSqueezeBtn.getComponent(b).interactable = e);
                  }),
                  (s._showToolTipSqueezeHint = function (e) {
                    var t = this;
                    void 0 === e && (e = "");
                    var i = 0.25;
                    if (
                      ((this.bubbleHintSqueeze
                        .getChildByName("txt")
                        .getComponent(c).string = e),
                      this.bubbleHintSqueeze.isBusy)
                    )
                      this._hideToolTipSqueezeHint(i);
                    else if (!this.bubbleHintSqueeze.isShowed) {
                      (this.bubbleHintSqueeze.isShowed = !0),
                        (this.bubbleHintSqueeze.active = !0),
                        this.bubbleHintSqueeze.setScale(l(0.5, 0.5, 1));
                      var n = this.bubbleHintSqueeze.getComponent(r),
                        u = { opacity: { opacity: 255 } };
                      (u.scaleTo = { scale: l(1, 1) }),
                        (u.easingOut = { easing: this.BACK_OUT }),
                        S.stopAllByTarget(this.bubbleHintSqueeze),
                        S.stopAllByTarget(n),
                        z(this.bubbleHintSqueeze)
                          .call(function () {
                            t.bubbleHintSqueeze.isBusy = !0;
                          })
                          .to(i, u.scaleTo, u.easingOut)
                          .call(function () {
                            (t.bubbleHintSqueeze.isBusy = !0),
                              t._hideToolTipSqueezeHint(i);
                          })
                          .start(),
                        z(n).to(i, u.opacity, u.easingOut).start();
                    }
                  }),
                  (s._hideToolTipSqueezeHint = function (e) {
                    var t = this;
                    void 0 === e && (e = 0.25);
                    var i = this.bubbleHintSqueeze.getComponent(r),
                      n = { opacity: { opacity: 0 } };
                    (n.scaleTo = { scale: l(0.5, 0.5) }),
                      (n.easingOut = { easing: this.BACK_OUT }),
                      0 != e
                        ? (S.stopAllByTarget(this.bubbleHintSqueeze),
                          S.stopAllByTarget(i),
                          z(this.bubbleHintSqueeze)
                            .delay(3)
                            .to(e, n.scaleTo, n.easingOut)
                            .call(function () {
                              S.stopAllByTarget(t.bubbleHintSqueeze),
                                (t.bubbleHintSqueeze.isBusy = !1),
                                (t.bubbleHintSqueeze.active = !1),
                                (t.bubbleHintSqueeze.isShowed = !1);
                            })
                            .start(),
                          z(i).delay(3).to(e, n.opacity, n.easingOut).start())
                        : ((i = 0),
                          (this.bubbleHintSqueeze.isBusy = !1),
                          (this.bubbleHintSqueeze.active = !1),
                          (this.bubbleHintSqueeze.isShowed = !1));
                  }),
                  t
                );
              })(q)).prototype,
              "squeezeBtn",
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
            (v = t(f.prototype, "noSqueezeBtn", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = t(f.prototype, "bubbleHintSqueeze", [d], {
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
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SqueezeShowResultState3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./EventCode3986.ts",
    "./State3986.ts",
    "./SoundManager3986.ts",
    "./BTEventCode.ts",
    "./BTStateAction.ts",
    "./BTPlayerManager.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, a, s, o, h, r, c, u, l, S, g, A;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (i = e.cclegacy),
            (n = e._decorator),
            (a = e.Node),
            (s = e.Tween),
            (o = e.warn),
            (h = e.log),
            (r = e.tween);
        },
        null,
        function (e) {
          c = e.default;
        },
        function (e) {
          u = e.State3986;
        },
        function (e) {
          l = e.SoundManager3986;
        },
        function (e) {
          S = e.BTEventCode;
        },
        function (e) {
          g = e.BTStateAction;
        },
        function (e) {
          A = e.BTPlayerManager;
        },
      ],
      execute: function () {
        var _;
        i._RF.push(
          {},
          "95521Z11h5BCYJB8onwu5C2",
          "SqueezeShowResultState3986",
          void 0
        );
        var M = n.ccclass,
          R = "RETURN_LOSE_CHIP",
          d = "RETURN_WIN_CHIP_TO_BET_BOX",
          p = "RETURN_CHIP_TO_PLAYER",
          E = "SHOW_WON_AMOUNT",
          f = "PLAYER_WIN_BET_BOXED";
        e(
          "SqueezeShowResultState3986",
          M("SqueezeShowResultState3986")(
            (_ = (function (e) {
              function i() {
                for (
                  var t, i = arguments.length, n = new Array(i), a = 0;
                  a < i;
                  a++
                )
                  n[a] = arguments[a];
                return (
                  ((t =
                    e.call.apply(e, [this].concat(n)) ||
                    this)._mapFinishAction = void 0),
                  (t._isShowGameFinish = void 0),
                  (t.isShowGameWinResult = void 0),
                  (t.isReturnChip = void 0),
                  (t.isShowKeyResult = void 0),
                  (t.delayNode = void 0),
                  t
                );
              }
              t(i, e);
              var n = i.prototype;
              return (
                (n.onLoad = function () {
                  e.prototype.onLoad.call(this),
                    this.node.on(
                      "_showGameResults",
                      this._showGameResults,
                      this
                    ),
                    this.node.on(
                      "_showWinnerResults",
                      this._showWinnerResults,
                      this
                    ),
                    this.node.on(
                      "_showPlayerWinBetBoxes",
                      this._showPlayerWinBetBoxes,
                      this
                    ),
                    (this.delayNode = new a()),
                    (this.delayNode.parent = this.node),
                    this.registerEvent(
                      c.FORCE_SHOW_GAME_RESULT,
                      this._forceShowGameResult.bind(this)
                    ),
                    this.registerEvent(
                      S.ON_HIDE_APP,
                      this._onHideApp.bind(this)
                    ),
                    this.registerEvent(
                      S.ON_SHOW_APP,
                      this._onShowApp.bind(this)
                    );
                }),
                (n.onEnterState = function () {
                  (this._mapFinishAction = {}),
                    (this._isShowGameFinish = !1),
                    (this.isShowKeyResult = !1),
                    (this.isShowGameWinResult = !1),
                    (this.isReturnChip = !1),
                    this.getStateMachine().diceShaker.setEnableSqueeze(!0),
                    this.getStateMachine().dealer &&
                      this.getStateMachine().dealer.ON_EMITER.setCanPlayIdleAnim(
                        !0
                      ),
                    (this.getStateMachine().getDataStore().globalData.SHOULD_UPDATE_WALLET =
                      !1);
                }),
                (n.onExitState = function () {
                  s.stopAllByTarget(this.delayNode),
                    this.getStateMachine().diceShaker.setEnableSqueeze(!1),
                    (this._mapFinishAction = {}),
                    (this.isShowKeyResult = !1),
                    (this._isShowGameFinish = !1),
                    (this.isReturnChip = !1),
                    this.getStateMachine().dealer &&
                      this.getStateMachine().dealer.ON_EMITER.setCanPlayIdleAnim(
                        !1
                      ),
                    (this.getStateMachine().getDataStore().globalData.SHOULD_UPDATE_WALLET =
                      !0),
                    this.getStateMachine().clearUI();
                }),
                (n._showGameResults = function (e) {
                  var t = e.duration;
                  if (this.gameDataStore.getSqueeze()) {
                    var i = t + this.gameConfig.DICE_SHAKER.TIME_QUEEZE_OVER,
                      n = this.getStateMachine()
                        .getTableData()
                        .getLastGameResult().diceResult,
                      a = this.getStateMachine()
                        .getTableData()
                        .getLastGameWinResult();
                    if (
                      (this.getStateMachine().diceShaker.updateDiceResult(n),
                      this.isRunning())
                    )
                      this._onShowGameResultWithSqueeze(i);
                    else {
                      this.getStateMachine().diceShaker.showDiceResult(!1),
                        this.getStateMachine().diceShaker.playAnimDiceCupOpen(
                          !1
                        ),
                        this.getStateMachine().diceShaker.playAnimShowDiceResult(
                          !1
                        ),
                        this.getStateMachine().diceShaker.runShakerGlowEffect(
                          !1
                        ),
                        this.getStateMachine().diceShaker.hideDiceResult(!1);
                      var s = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE;
                      this.gameDataStore.getDataByKey(s) ==
                      this.gameConfig.TABLE_MODE.NORMAL
                        ? this.isShowGameWinResult &&
                          this.getStateMachine().bettingBoxes.showResult(a)
                        : this.isShowGameWinResult &&
                          this.getStateMachine().bettingBoxesTopView.showResult(
                            a
                          );
                      var o = this.getStateMachine()
                        .getTableData()
                        .getKeyResult();
                      o && this.getStateMachine().md5Cmp.showKeyResult(o, !1);
                    }
                  }
                }),
                (n._onShowGameResultWithSqueeze = function (e) {
                  var t = this,
                    i = [];
                  i.push(
                    new g()
                      .onStartAction(function () {
                        t.getStateMachine().dealer &&
                          t
                            .getStateMachine()
                            .dealer.ON_EMITER.playAnimPushBox();
                      })
                      .onFinishAction(function () {})
                      .onDuration(0.6)
                  ),
                    i.push(
                      new g()
                        .onStartAction(function () {
                          t.getStateMachine().diceShaker.showDiceResult();
                        })
                        .onFinishAction(function () {
                          t.getStateMachine().diceShaker.showDiceResult(!1);
                        })
                        .onDuration(
                          this.gameConfig.DICE_SHAKER.SHOW_RESULT_DURATION + 0.2
                        )
                    );
                  var n =
                    e -
                    this.gameConfig.DICE_SHAKER.SHOW_RESULT_DURATION -
                    0.2 -
                    this.gameConfig.DICE_SHAKER.MIN_TIME_SQUEEZE;
                  i.push(
                    new g()
                      .onStartAction(function () {
                        t.getStateMachine().diceShaker.runAnimCupSqueeze();
                      })
                      .onFinishAction(function () {})
                      .onDuration(n)
                  );
                  var a = this.getStateMachine()
                    .getTableData()
                    .getLastGameResult().anim;
                  i.push(this._squeezeAnimResultLayerAction(a)),
                    i.push(this._squeezeHideDiceResultAction()),
                    i.push(this._showTableWinBetBoxesAction()),
                    a && i.push(this._dealerAnimEmojAction(a)),
                    this.runStateActions(i, "show_result");
                }),
                (n._forceShowGameResult = function () {
                  this.destroyStateAction();
                  var e,
                    t = [],
                    i = this.getStateMachine()
                      .getTableData()
                      .getLastGameResult().anim;
                  (t.push(this._squeezeAnimResultLayerAction(i)),
                  t.push(this._squeezeHideDiceResultAction()),
                  t.push(this._showTableWinBetBoxesAction()),
                  i && t.push(this._dealerAnimEmojAction(i)),
                  this._isShowGameFinish) &&
                    (null == (e = this._mapFinishAction[f]) ||
                      e._runFinishAction(),
                    t.push(this._mapFinishAction[d]),
                    t.push(this._mapFinishAction[p]),
                    t.push(this._mapFinishAction[E]));
                  this.runStateActions(t, "show_result");
                }),
                (n._squeezeAnimResultLayerAction = function (e) {
                  var t = this;
                  void 0 === e && (e = !1);
                  var i = this.getStateMachine()
                    .getTableData()
                    .getLastGameResult().diceResult;
                  return new g()
                    .onStartAction(function () {
                      s.stopAllByTarget(t.node),
                        t.getStateMachine().diceShaker.setEnableSqueeze(!1),
                        t.getStateMachine().diceShaker.showDiceResult(!1),
                        t.getStateMachine().diceShaker.playAnimDiceCupOpen(!1),
                        t
                          .getStateMachine()
                          .diceShaker.playAnimShowDiceResult(!1),
                        t.getStateMachine().diceShaker.runShakerGlowEffect(),
                        t.getStateMachine().diceShaker.runAnimResultLayer();
                      var n = t.getStateMachine().getTableData().getKeyResult();
                      n && t.getStateMachine().md5Cmp.showKeyResult(n),
                        (t.isShowKeyResult = !0),
                        t.getStateMachine().dealer &&
                          11 == i.type &&
                          (t.dealerAnimThrowBomb(),
                          e ||
                            t
                              .getStateMachine()
                              .dealer.ON_EMITER.setCanPlayIdleAnim(!0));
                    })
                    .onFinishAction(function () {
                      if (
                        (t.getStateMachine().dealer &&
                          !e &&
                          11 != i.type &&
                          (t
                            .getStateMachine()
                            .dealer.ON_EMITER.setCanPlayIdleAnim(!0),
                          t
                            .getStateMachine()
                            .dealer.ON_EMITER.playRandomIdleAnim()),
                        t.getStateMachine().diceShaker.runShakerGlowEffect(!1),
                        t.getStateMachine().diceShaker.runAnimResultLayer(!1),
                        t.getStateMachine().diceShaker.setEnableSqueeze(!1),
                        !t.isShowKeyResult)
                      ) {
                        var n = t
                          .getStateMachine()
                          .getTableData()
                          .getKeyResult();
                        n && t.getStateMachine().md5Cmp.showKeyResult(n, !1);
                      }
                    })
                    .onDuration(
                      this.gameConfig.DICE_SHAKER.RESULT_LAYER_ANIM_DURATION +
                        this.gameConfig.DICE_SHAKER.DELAY_SHOW_RESULT_DURATION +
                        0.25
                    );
                }),
                (n._squeezeHideDiceResultAction = function () {
                  var e = this;
                  return new g()
                    .onStartAction(function () {
                      e.getStateMachine().diceShaker.hideDiceResult();
                    })
                    .onFinishAction(function () {
                      e.getStateMachine().diceShaker.hideDiceResult(!1);
                    })
                    .onDuration(
                      this.gameConfig.DICE_SHAKER.HIDE_RESULT_DURATION
                    );
                }),
                (n.dealerAnimThrowBomb = function () {
                  this.getStateMachine().dealer &&
                    this.getStateMachine().dealer.ON_EMITER.playAnimThrowGrenade();
                }),
                (n._dealerAnimEmojAction = function (e) {
                  var t = this;
                  return new g()
                    .onStartAction(function () {
                      t.getStateMachine().dealer &&
                        (t
                          .getStateMachine()
                          .dealer.ON_EMITER.setCanPlayIdleAnim(!0),
                        t
                          .getStateMachine()
                          .dealer.ON_EMITER.playAnimByIndex(e));
                    })
                    .onFinishAction(function () {})
                    .onDuration(
                      this.gameConfig.DICE_SHAKER.DEALER_WIN_EMOJI_DURATION
                    );
                }),
                (n._onHideApp = function () {
                  this.isRunning() &&
                    this.gameDataStore.getSqueeze() &&
                    (this.stopStateActions("show_result"),
                    s.stopAllByTarget(this.node),
                    this.getStateMachine().diceShaker.showDiceResult(!1),
                    this.getStateMachine().diceShaker.playAnimDiceCupOpen(!1),
                    this.getStateMachine().diceShaker.playAnimShowDiceResult(
                      !1
                    ),
                    this.getStateMachine().diceShaker.runShakerGlowEffect(!1),
                    this.getStateMachine().diceShaker.runAnimResultLayer(!1),
                    this.getStateMachine().diceShaker.hideDiceResult(!1),
                    this.getStateMachine().diceShaker.setEnableSqueeze(!1),
                    this.getStateMachine().dealer.ON_EMITER.reset(),
                    this.getStateMachine().dealer.ON_EMITER.setCanPlayIdleAnim(
                      !0
                    ));
                }),
                (n._onShowApp = function () {
                  if (
                    this.isRunning() &&
                    this.gameDataStore.getSqueeze() &&
                    this._isShowGameFinish
                  ) {
                    this.stopStateActions("show_result"),
                      s.stopAllByTarget(this.node),
                      this.getStateMachine().diceShaker.showDiceResult(!1),
                      this.getStateMachine().diceShaker.playAnimDiceCupOpen(!1),
                      this.getStateMachine().diceShaker.playAnimShowDiceResult(
                        !1
                      ),
                      this.getStateMachine().diceShaker.runShakerGlowEffect(!1),
                      this.getStateMachine().diceShaker.runAnimResultLayer(!1),
                      this.getStateMachine().diceShaker.hideDiceResult(!1),
                      this.getStateMachine().diceShaker.setEnableSqueeze(!1),
                      this.getStateMachine().dealer.ON_EMITER.reset(),
                      this.getStateMachine().dealer.ON_EMITER.setCanPlayIdleAnim(
                        !0
                      );
                    var e = this.getStateMachine()
                      .getTableData()
                      .getKeyResult();
                    e && this.getStateMachine().md5Cmp.showKeyResult(e, !1);
                  }
                }),
                (n._showTableWinBetBoxesAction = function () {
                  var e = this,
                    t = this.getStateMachine()
                      .getTableData()
                      .getLastGameWinResult(),
                    i = this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE,
                    n = this.gameDataStore.getDataByKey(i);
                  return new g()
                    .onStartAction(function () {
                      (e.isShowGameWinResult = !0),
                        n == e.gameConfig.TABLE_MODE.NORMAL
                          ? e
                              .getStateMachine()
                              .bettingBoxes.showResult(t, function (t) {
                                e._playSoundEff(t);
                              })
                          : e
                              .getStateMachine()
                              .bettingBoxesTopView.showResult(t, function (t) {
                                e._playSoundEff(t);
                              });
                    })
                    .onFinishAction(function () {
                      n == e.gameConfig.TABLE_MODE.NORMAL
                        ? !e.isShowGameWinResult &&
                          e
                            .getStateMachine()
                            .bettingBoxes.showResult(t, function (t) {
                              e._playSoundEff(t);
                            })
                        : !e.isShowGameWinResult &&
                          e
                            .getStateMachine()
                            .bettingBoxesTopView.showResult(t, function (t) {
                              e._playSoundEff(t);
                            });
                    })
                    .onDuration(0.01);
                }),
                (n._showWinnerResults = function (e) {
                  var t = e.brs,
                    i = e.tbrs,
                    n = e.gateWins,
                    a = e.wonWins,
                    s = e.prd,
                    h = e.tieInfos;
                  if (this.gameDataStore.getSqueeze()) {
                    (this._isShowGameFinish = !0),
                      o("_showWinnerResults", t, i, n, a, s);
                    var r = a,
                      c = [];
                    c.push(this._getActionReturnLoseChip(n, h)),
                      c.push(this._getActionReturnWinChipToBettingBox(i, n, h)),
                      c.push(this._getActionReturnChipToPlayer(s)),
                      c.push(this._getActionShowWonAmount(r)),
                      (this._mapFinishAction[R] = this._getActionReturnLoseChip(
                        n,
                        h
                      )),
                      (this._mapFinishAction[d] =
                        this._getActionReturnWinChipToBettingBox(i, n, h)),
                      (this._mapFinishAction[p] =
                        this._getActionReturnChipToPlayer(s)),
                      (this._mapFinishAction[E] =
                        this._getActionShowWonAmount(r)),
                      this.runStateActions(c, "show_result");
                  }
                }),
                (n._getActionReturnLoseChip = function (e, t) {
                  var i = this,
                    n = this.gameDataStore.getCurrentTableMode();
                  return new g()
                    .onStartAction(function () {
                      (i.isReturnChip = !0),
                        h("_showWinnerResults | gateWins=", e);
                      var a = i.getStateMachine().chipManager;
                      n == i.gameConfig.TABLE_MODE.TOPVIEW &&
                        (a = i.getStateMachine().chipManagerTopView),
                        a.returnLoseChipsToDealer(0.7, e, function () {}),
                        t &&
                          t.forEach(function (e) {
                            var t = e.betId,
                              i = e.refundAmount,
                              n = e.loseAmount;
                            a.returnChipsToDealerFromTieBox(
                              0.7,
                              t,
                              100 * n,
                              100 * i
                            );
                          });
                    })
                    .onFinishAction(function () {})
                    .onDuration(1.2);
                }),
                (n._getActionReturnWinChipToBettingBox = function (e, t, i) {
                  var n = this,
                    a = this.gameDataStore.getCurrentTableMode();
                  return new g()
                    .onStartAction(function () {
                      var s = n.getStateMachine().chipManager;
                      if (
                        (a == n.gameConfig.TABLE_MODE.TOPVIEW &&
                          (s = n.getStateMachine().chipManagerTopView),
                        n.isReturnChip ||
                          ((n.isReturnChip = !0),
                          s.returnLoseChipsToDealer(0, t, function () {}),
                          i &&
                            i.forEach(function (e) {
                              var t = e.betId,
                                i = e.refundAmount,
                                n = e.loseAmount;
                              s.returnChipsToDealerFromTieBox(
                                0,
                                t,
                                100 * n,
                                100 * i
                              );
                            })),
                        s.clearAllLoseChipsOnTable(),
                        e)
                      )
                        for (var o = e.split(","), h = 0; h < o.length; h++) {
                          var r = o[h].split(":");
                          s.returnWinChipsToBettingBox(0.5, 100 * r[1], r[0]);
                        }
                      return 2;
                    })
                    .onFinishAction(function () {
                      var t = n.getStateMachine().chipManager;
                      if (
                        (a == n.gameConfig.TABLE_MODE.TOPVIEW &&
                          (t = n.getStateMachine().chipManagerTopView),
                        t.clearAllLoseChipsOnTable(),
                        e)
                      )
                        for (var i = e.split(","), s = 0; s < i.length; s++) {
                          var o = i[s].split(":");
                          t.returnWinChipsToBettingBox(0, 100 * o[1], o[0]);
                        }
                    })
                    .onDuration(2);
                }),
                (n._getActionReturnChipToPlayer = function (e) {
                  var t = this,
                    i = this.gameDataStore.getCurrentTableMode();
                  return new g()
                    .onStartAction(function () {
                      var n = t.getStateMachine().chipManager;
                      if (
                        (i !== t.gameConfig.TABLE_MODE.NORMAL &&
                          (n = t.getStateMachine().chipManagerTopView),
                        n.clearAllChipsOnTable(),
                        e)
                      ) {
                        var a = e.split(",");
                        h("prd=", e);
                        for (var s = 0; s < a.length; s++) {
                          var o = a[s].split(":"),
                            r = o[0];
                          if (o[1])
                            for (
                              var c = o[1].split(";"), u = 0;
                              u < c.length;
                              u++
                            ) {
                              var l,
                                S = c[u].split("|"),
                                g = Number(S[0]),
                                _ = 100 * Number(S[1]),
                                M =
                                  null == (l = A.getInstance())
                                    ? void 0
                                    : l.getPlayerByExternalID(r),
                                R = M ? M._indexS : t.gameConfig.MAX_SEAT;
                              n.returnChipsToPlayerFromWinBox(0.7, g, _, R);
                            }
                        }
                      }
                      return 1.2;
                    })
                    .onFinishAction(function () {
                      i == t.gameConfig.TABLE_MODE.NORMAL
                        ? t.getStateMachine().chipManager.clearAllChipsOnTable()
                        : t
                            .getStateMachine()
                            .chipManagerTopView.clearAllChipsOnTable();
                    })
                    .onDuration(1.2);
                }),
                (n._getActionShowWonAmount = function (e) {
                  var t = this;
                  return new g()
                    .onStartAction(function () {
                      for (var i = 0; i < e.length; i++) {
                        var n = e[i],
                          a = n.player,
                          o = n.wonAmount,
                          h = n.tieAmount;
                        if (a && (o > 0 || h > 0)) {
                          var c;
                          (o = h > 0 ? h : o),
                            s.stopAllByTarget(t.delayNode),
                            r(t.delayNode)
                              .delay(0.15)
                              .call(function () {
                                for (var i = 0; i < e.length; i++) {
                                  var n = e[i].player;
                                  n &&
                                    1 === n.seat &&
                                    (t.getDataStore().globalData.SHOULD_UPDATE_WALLET =
                                      !0);
                                }
                              })
                              .start();
                          var u = t.getDataStore().isEnableDealerVoice();
                          null == (c = A.getInstance()) ||
                            c.showWonAmountFor(
                              { player: a, wonAmount: o },
                              u,
                              h > 0
                            );
                        }
                      }
                    })
                    .onFinishAction(function () {})
                    .onDuration(0.5);
                }),
                (n._getActionPlayerWinBetBoxes = function (e) {
                  var t = this,
                    i = e.brs,
                    n = e.arrGateTie;
                  return new g()
                    .onStartAction(function () {
                      var e;
                      i.length > 0 &&
                        (null == (e = l.getInstance()) || e.winBetSound(!0));
                      t.gameDataStore.getCurrentTableMode() ==
                      t.gameConfig.TABLE_MODE.NORMAL
                        ? (t
                            .getStateMachine()
                            .bettingBoxes.showEffUserBetWin(i),
                          n.length > 0 &&
                            t.getStateMachine().bettingBoxes.showTieIcon(n))
                        : (t
                            .getStateMachine()
                            .bettingBoxesTopView.showEffUserBetWin(i),
                          n.length > 0 &&
                            t
                              .getStateMachine()
                              .bettingBoxesTopView.showTieIcon(n));
                    })
                    .onFinishAction(function () {})
                    .onDuration(1);
                }),
                (n._playSoundEff = function (e) {
                  var t, i;
                  if (this.gameDataStore.isEnableDealerVoice())
                    for (var n = 0; n < e.length; n++) {
                      switch (parseInt(e[n])) {
                        case 3:
                          null == (t = l.getInstance()) || t.resultBig(!0);
                          break;
                        case 4:
                          null == (i = l.getInstance()) || i.resultSmall(!0);
                      }
                    }
                }),
                (n._showPlayerWinBetBoxes = function (e) {
                  var t = e.brs,
                    i = e.arrGateTie;
                  this.gameDataStore.getSqueeze() &&
                    ((this._mapFinishAction[f] =
                      this._getActionPlayerWinBetBoxes({
                        brs: t,
                        arrGateTie: i,
                      })),
                    this.runStateActions(
                      [
                        this._getActionPlayerWinBetBoxes({
                          brs: t,
                          arrGateTie: i,
                        }),
                      ],
                      "show_result"
                    ));
                }),
                i
              );
            })(u))
          ) || _
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/StartState3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./State3986.ts",
    "./BTStateAction.ts",
    "./BTEventCode.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, a, o, h, c;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (i = t._decorator), (a = t.ParticleSystem2D);
        },
        null,
        function (t) {
          o = t.State3986;
        },
        function (t) {
          h = t.BTStateAction;
        },
        function (t) {
          c = t.BTEventCode;
        },
      ],
      execute: function () {
        var s;
        n._RF.push({}, "3f8bdwSzv1Eeqo6Nj2s9+DP", "StartState3986", void 0);
        var r = i.ccclass;
        t(
          "StartState3986",
          r("StartState3986")(
            (s = (function (t) {
              function n() {
                for (
                  var e, n = arguments.length, i = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  i[a] = arguments[a];
                return (
                  ((e = t.call.apply(t, [this].concat(i)) || this).isShowMD5 =
                    void 0),
                  (e._createAction = void 0),
                  e
                );
              }
              e(n, t);
              var i = n.prototype;
              return (
                (i.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    this.node.on("_showDiceShaker", this._showDiceShaker, this),
                    this.node.on(
                      "_onChangeTableMode",
                      this._onChangeTableMode,
                      this
                    );
                }),
                (i.onEnterState = function () {
                  t.prototype.onEnterState.call(this), (this.isShowMD5 = !1);
                }),
                (i.onExitState = function () {
                  t.prototype.onExitState.call(this),
                    this.getStateMachine().transitionLayer &&
                      this.getStateMachine()
                        .transitionLayer.getComponent(a)
                        .stopSystem(),
                    (this.isShowMD5 = !1);
                }),
                (i._showDiceShaker = function () {
                  var t = this;
                  if (this.isRunning()) {
                    var e = [],
                      n = this.gameDataStore.getDataByKey(
                        this.gameConfig.KEY_ITEM.CURRENT_TABLE_MODE
                      ),
                      i = this.gameDataStore.getDataByKey(
                        this.gameConfig.KEY_ITEM.NEXT_TABLE_MODE
                      );
                    e.push(
                      new h()
                        .onStartAction(function () {
                          t.getStateMachine().diceShaker.hideDiceShaker();
                        })
                        .onFinishAction(function () {
                          t.getStateMachine().diceShaker.hideDiceShaker(!1);
                        })
                        .onDuration(0.1)
                    ),
                      n != i &&
                        e.push(
                          new h()
                            .onStartAction(function () {
                              t.getStateMachine().transitionLayer &&
                                t
                                  .getStateMachine()
                                  .transitionLayer.getComponent(a)
                                  .resetSystem();
                            })
                            .onFinishAction(function () {
                              t.fireEvent(
                                c.SHOW_TOAST_MESSAGE,
                                t.gameConfig.TRANSITION_TABLE_VIEW[0]
                              ),
                                t.getStateMachine().changeTableMode();
                            })
                            .onDuration(0.8)
                        ),
                      e.push(
                        new h()
                          .onStartAction(function () {
                            t.getStateMachine().dealer &&
                              t
                                .getStateMachine()
                                .dealer.ON_EMITER.playShakerBoxAnim();
                          })
                          .onFinishAction(function () {})
                          .onDuration(1.75)
                      ),
                      e.push(
                        new h()
                          .onStartAction(function () {
                            t.getStateMachine().diceShaker.showDiceShaker();
                          })
                          .onFinishAction(function () {
                            t.getStateMachine().diceShaker.showDiceShaker(!1);
                          })
                          .onDuration(this.gameConfig.DICE_SHAKER.HIDE_DURATION)
                      );
                    var o = this.getStateMachine().getTableData().getKeyMD5();
                    e.push(
                      new h()
                        .onStartAction(function () {
                          o && t.getStateMachine().md5Cmp.showMD5Content(o),
                            (t.isShowMD5 = !0);
                        })
                        .onFinishAction(function () {
                          t.isShowMD5 ||
                            (o &&
                              t.getStateMachine().md5Cmp.showMD5Content(o, !1));
                        })
                        .onDuration(1)
                    ),
                      this.runStateActions(e, "start_table");
                  } else
                    this.getStateMachine().transitionLayer &&
                      this.getStateMachine()
                        .transitionLayer.getComponent(a)
                        .stopSystem(),
                      this.getStateMachine().changeTableMode();
                }),
                (i._onChangeTableMode = function () {
                  this.isRunning() || this.getStateMachine().changeTableMode();
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
  "chunks:///_virtual/State3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./GameDirector3986.ts",
    "./State2.ts",
  ],
  function (t) {
    "use strict";
    var e, n, o, r, c;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (o = t._decorator);
        },
        null,
        function (t) {
          r = t.GameDirector3986;
        },
        function (t) {
          c = t.State;
        },
      ],
      execute: function () {
        var i;
        n._RF.push({}, "1fb18pNQrtCEa1lXi9xskio", "State3986", void 0);
        var a = o.ccclass;
        t(
          "State3986",
          a("State3986")(
            (i = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              e(n, t);
              var o = n.prototype;
              return (
                (o.onLoad = function () {
                  t.prototype.onLoad.call(this);
                }),
                (o.getStateMachine = function () {
                  return this.node.getComponent(r);
                }),
                n
              );
            })(c))
          ) || i
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TableHistory3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTEventCode.ts",
    "./BTAnimations.ts",
    "./BTSubscriber.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, r, a, o, l, c, s, u, p, h, m, y, f, d, g, v;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t.Node),
            (l = t.SpriteFrame),
            (c = t._decorator),
            (s = t.log),
            (u = t.instantiate),
            (p = t.Sprite),
            (h = t.tween),
            (m = t.UIOpacity),
            (y = t.v3),
            (f = t.Tween);
        },
        null,
        function (t) {
          d = t.BTEventCode;
        },
        function (t) {
          g = t.BTAnimations;
        },
        function (t) {
          v = t.BTSubscriber;
        },
      ],
      execute: function () {
        var b, S, C, T, _, A, B, N, w, F, I;
        a._RF.push({}, "c3199H9tA1KCp4yCvtTtm+E", "TableHistory3986", void 0);
        var H = c,
          E = H.ccclass,
          D = H.property;
        t(
          "TableHistory3986",
          ((b = E("TableHistory3986")),
          (S = D({ displayName: "Result Item", type: o })),
          (C = D({ displayName: "Content", type: o })),
          (T = D({ displayName: "item SpriteFrame", type: l })),
          (_ = D({ displayName: "Btn Statistic", type: o })),
          b(
            ((N = e(
              (B = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "resultItem", N, r(e)),
                    n(e, "content", w, r(e)),
                    n(e, "itemSpriteFrame", F, r(e)),
                    n(e, "btnStatistic", I, r(e)),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var e = this;
                    t.prototype.onLoad.call(this);
                    var i = this.node;
                    (i.setupTableHistory = this.setupTableHistory.bind(this)),
                      (i.updateTableHistory =
                        this.updateTableHistory.bind(this)),
                      this.btnStatistic.off("click"),
                      this.btnStatistic.on(
                        "click",
                        function () {
                          s(
                            "===open analytic popup===",
                            e.getDataStore().globalData.TABLE_ID
                          ),
                            e.fireEvent(d.SHOW_STATISTIC);
                        },
                        this
                      );
                  }),
                  (a.setupTableHistory = function (t) {
                    this._initUI(t), this._runSetupAnim();
                  }),
                  (a.updateTableHistory = function (t) {
                    this._initUI(t), this._runUpdateAnim();
                  }),
                  (a._verifyData = function (t) {
                    return (
                      t &&
                        (t = (t = t.filter(function (t) {
                          return 0 !== Number(t);
                        })).reverse()),
                      t
                    );
                  }),
                  (a._initUI = function (t) {
                    if ((this.content.removeAllChildren(), t))
                      for (var e = t.length - 1; e >= 0; e--) {
                        var i = t[e];
                        if (i) {
                          var n = u(this.resultItem),
                            r = n.getChildByName("icon");
                          this._updateResultItem(r, i),
                            (n.active = !0),
                            this.content.addChild(n);
                        }
                      }
                  }),
                  (a._updateResultItem = function (t, e) {
                    t &&
                      (t.getComponent(p).spriteFrame =
                        this._getSpriteFrameFromCode(Number(e)));
                  }),
                  (a._runSetupAnim = function () {
                    var t = this;
                    if (this.content && !(this.content.children.length <= 0)) {
                      for (
                        var e = 0,
                          i = this.content.children,
                          n = i.length,
                          r = function (n) {
                            var r = i[n],
                              a = r.getChildByName("icon");
                            r.getChildByName("glow").active = !1;
                            var o = h().delay(0.1 * e),
                              l = h().call(function () {
                                t._runShowAnimation(a, 1.5, 0.1);
                              });
                            h(t.node).then(o).then(l).start(), e++;
                          },
                          a = 0;
                        a < n - 1;
                        a++
                      )
                        r(a);
                      var o = h().delay(0.1 * (n + 1)),
                        l = h().call(function () {
                          var e = i[n - 1];
                          (e
                            .getChildByName("icon")
                            .getComponent(m).opacity = 255),
                            (e.getChildByName("glow").active = !0),
                            t._runNewResultAnim(e);
                        });
                      h(this.node).then(o).then(l).start();
                    }
                  }),
                  (a._runUpdateAnim = function () {
                    var t = this;
                    if (this.content && !(this.content.children.length <= 0)) {
                      var e = 0.35,
                        i = this.content.children,
                        n = i.length;
                      if (n > 16);
                      else
                        for (var r = 0; r < n - 1; r++) {
                          var a = i[r];
                          (a
                            .getChildByName("icon")
                            .getComponent(m).opacity = 255),
                            (a.active = !0);
                        }
                      var o = h().delay(e),
                        l = i[n - 1],
                        c = l.getChildByName("icon"),
                        s = l.getChildByName("glow"),
                        u = h().call(function () {
                          (l.active = !0),
                            (c.scale = y(2.5, 2.5, 2.5)),
                            (c.getComponent(m).opacity = 0),
                            (s.active = !1),
                            h(c.getComponent(m))
                              .parallel(
                                h().to(
                                  e,
                                  { opacity: 255 },
                                  { easing: "backIn" }
                                ),
                                h().call(function () {})
                              )
                              .start(),
                            h(c)
                              .parallel(
                                h().to(
                                  e,
                                  { scale: y(1, 1, 1) },
                                  { easing: "backIn" }
                                ),
                                h().call(function () {})
                              )
                              .start();
                        }),
                        p = h().call(function () {
                          (s.active = !0), t._runNewResultAnim(l);
                        });
                      h(this.node).then(o).then(u).then(o).then(p).start();
                    }
                  }),
                  (a._getSpriteFrameFromCode = function (t) {
                    if (Array.isArray(this.itemSpriteFrame))
                      switch (t) {
                        case 4:
                          return this.itemSpriteFrame[1];
                        case 3:
                          return this.itemSpriteFrame[0];
                        case 11:
                          return this.itemSpriteFrame[2];
                        default:
                          return this.itemSpriteFrame[0];
                      }
                  }),
                  (a._runShowAnimation = function (t, e, i, n) {
                    void 0 === n && (n = 1),
                      (t.active = !0),
                      f.stopAllByTarget(t),
                      (t.getComponent(m).opacity = 255);
                    g.popingEffect(t, {
                      dur: i,
                      curSC: 1,
                      maxSC: 1 * e,
                      repeat: n,
                      yoyo: !1,
                      baseEasing: "sineOut",
                    });
                  }),
                  (a._runNewResultAnim = function (t) {
                    (t.active = !0),
                      f.stopAllByTarget(t),
                      (t.getComponent(m).opacity = 255);
                    g.popingEffect(t, {
                      dur: 0.4,
                      curSC: 1,
                      maxSC: 1.15,
                      repeat: 1,
                      yoyo: !0,
                      baseEasing: "sineOut",
                    });
                  }),
                  e
                );
              })(v)).prototype,
              "resultItem",
              [S],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (w = e(B.prototype, "content", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = e(B.prototype, "itemSpriteFrame", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (I = e(B.prototype, "btnStatistic", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = B))
          ) || A)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Timer3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./index9.ts",
    "./BTSoundManager.ts",
    "./BTAnimations.ts",
    "./BTTimer.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, s, o, r;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (n = t._decorator);
        },
        null,
        null,
        function (t) {
          s = t.BTSoundManager;
        },
        function (t) {
          o = t.BTAnimations;
        },
        function (t) {
          r = t.BTTimer;
        },
      ],
      execute: function () {
        var a;
        e._RF.push({}, "4ef88n4NcBDc7cQVYpU1r55", "Timer3986", void 0);
        var u = n.ccclass;
        n.property,
          t(
            "Timer3986",
            u("Timer3986")(
              (a = (function (t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                return (
                  i(e, t),
                  (e.prototype.update = function () {
                    if (!this._enableHideTimeMode) {
                      var t =
                          Date.now() -
                          this._msStartClock +
                          this._elapsedDurationInMs,
                        i = this._totalDurutionInMs - t,
                        e = Math.floor(i / 1e3);
                      if (
                        ((e = e < 0 ? 0 : e),
                        this.progressTimer && this._updateProgressTimer(i),
                        this.counting)
                      ) {
                        var n;
                        if (
                          (e && (this.clockTxt.string = e > 9 ? e : "0" + e),
                          e <= 0)
                        )
                          return (
                            this.isSoundEff &&
                              (null == (n = s.getInstance()) ||
                                n.countDownEnd(!0)),
                            void this.finishCountDown()
                          );
                        if (this.lastTimeRemained != e)
                          if (
                            ((this.lastTimeRemained = e),
                            e <= 10 && this.isSoundEff)
                          ) {
                            var r;
                            if (((this.rotaSpeed = 5), e <= 5))
                              (this.rotaSpeed = 10),
                                null == (r = s.getInstance()) ||
                                  r.countDown(!0);
                            this.txtTimer.setScale(1.3, 1.3),
                              o.zoomAnim(this.txtTimer, 1, 0, 0.5, "backIn");
                          } else
                            (this.rotaSpeed = 1), this.txtTimer.setScale(1, 1);
                        this.rotationEff &&
                          (this.rotationEff.angle -= this.rotaSpeed);
                      }
                    }
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
  "chunks:///_virtual/Toast3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTToast.ts",
  ],
  function (t) {
    "use strict";
    var o, n, e, s, i, a, c, r;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy),
            (e = t.Label),
            (s = t.v3),
            (i = t.UIOpacity),
            (a = t.Tween),
            (c = t._decorator);
        },
        null,
        function (t) {
          r = t.BTToast;
        },
      ],
      execute: function () {
        var l;
        n._RF.push({}, "ec1d8qm/B5GYrkc6cfwq0tn", "Toast3986", void 0);
        var h = c,
          u = h.ccclass;
        h.property,
          t(
            "Toast3986",
            u("Toast3986")(
              (l = (function (t) {
                function n() {
                  for (
                    var o, n = arguments.length, e = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    e[s] = arguments[s];
                  return (
                    ((o =
                      t.call.apply(t, [this].concat(e)) ||
                      this)._lastDataContent = ""),
                    o
                  );
                }
                o(n, t);
                var c = n.prototype;
                return (
                  (c.showWithContent = function (t, o) {
                    var n = this;
                    if ((void 0 === o && (o = 0), t && "null" != t)) {
                      if (this._lastDataContent == t) return;
                      (this._lastDataContent = t),
                        (this.lblText.getComponent(e).string = t.toUpperCase()),
                        (this.node.active = !0),
                        this.node.setScale(s(0.7, 0.7, 0.7)),
                        (this.node.getComponent(i).opacity = 0),
                        this.zoomOut(
                          this.node,
                          o,
                          0.3,
                          this.BACK_OUT,
                          function () {
                            n.zoomIn(n.node, 1, 0.3, n.BACK_IN, function () {
                              n.stopShow();
                            });
                          }
                        );
                    } else this.stopShow();
                  }),
                  (c.stopShow = function () {
                    (this.isShow = !1),
                      a.stopAllByTarget(this.node),
                      (this.node.active = !1),
                      (this._lastDataContent = "");
                  }),
                  n
                );
              })(r))
            ) || l
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ToastChat3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTToast.ts",
  ],
  function (t) {
    "use strict";
    var o, n, s, i;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (s = t._decorator);
        },
        null,
        function (t) {
          i = t.BTToast;
        },
      ],
      execute: function () {
        var e;
        n._RF.push({}, "14e56ewqj1NwaNvK0K1hsng", "ToastChat3986", void 0);
        var h = s,
          r = h.ccclass;
        h.property,
          t(
            "ToastChat3986",
            r("ToastChat3986")(
              (e = (function (t) {
                function n() {
                  return t.apply(this, arguments) || this;
                }
                o(n, t);
                var s = n.prototype;
                return (
                  (s._bindProps = function () {
                    (this.node.showWithContent =
                      this.showWithContent.bind(this)),
                      (this.node.stopShow = this.stopShow.bind(this));
                  }),
                  (s.showWithContent = function (o, n) {
                    void 0 === n && (n = 0),
                      o != this.getConfig().MESSAGE.NETWORK_POOR &&
                        t.prototype.showWithContent.call(this, o, n);
                  }),
                  n
                );
              })(i))
            ) || e
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TopUserBet3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTAnimations.ts",
    "./BTSubscriber.ts",
  ],
  function (t) {
    "use strict";
    var e, i, r, o, s, n, a, p, h, l, c, u, g, f;
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
            (n = t.Node),
            (a = t._decorator),
            (p = t.instantiate),
            (h = t.UIOpacity),
            (l = t.v3),
            (c = t.Tween),
            (u = t.tween);
        },
        null,
        function (t) {
          g = t.BTAnimations;
        },
        function (t) {
          f = t.BTSubscriber;
        },
      ],
      execute: function () {
        var m, d, I, T, U, v, b, y, _, A, w;
        s._RF.push({}, "616faSYL+ZKr7JOjNneVu0x", "TopUserBet3986", void 0);
        var k = a,
          N = k.ccclass,
          B = k.property;
        t(
          "TopUserBet3986",
          ((m = N("TopUserBet3986")),
          (d = B({ displayName: "Background", type: n })),
          (I = B({ displayName: "Top users", type: n })),
          (T = B({ displayName: "Scale item" })),
          (U = B({ displayName: "isHorizontal" })),
          m(
            ((y = e(
              (b = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    s[n] = arguments[n];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    r(e, "background", y, o(e)),
                    r(e, "topUsers", _, o(e)),
                    r(e, "scaleItem", A, o(e)),
                    r(e, "isHorizontal", w, o(e)),
                    (e.arrTopUserItem = []),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this._bindProps(),
                      this._init();
                  }),
                  (s._bindProps = function () {
                    (this.node.resetUI = this.resetUI.bind(this)),
                      (this.node.updateTopUserBet =
                        this.updateTopUserBet.bind(this)),
                      (this.node.playShowAnim = this.playShowAnim.bind(this));
                  }),
                  (s._init = function () {
                    if (this.topUsers) {
                      this.arrTopUserItem = [];
                      for (
                        var t = this.getAssetManager().topUserItemPrefab, e = 0;
                        e < this.getConfig().NUM_TOP_USER_ITEM;
                        e++
                      ) {
                        var i = p(t);
                        this.isHorizontal
                          ? (i.position = this.getConfig().arrPosHorizontal[e])
                          : (i.position = this.getConfig().arrPosVertical[e]),
                          this.topUsers.addChild(i),
                          this.arrTopUserItem.push(i);
                      }
                      this.topUsers.setScale(this.scaleItem, this.scaleItem),
                        this.resetUI();
                    }
                  }),
                  (s.updateTopUserBet = function (t) {
                    if (Array.isArray(t)) {
                      for (var e = 0; e < t.length; e++) {
                        var i = t[e],
                          r = this.arrTopUserItem[e];
                        (r.active = !0), this._updateTopUserItem(r, i);
                      }
                      for (var o = 0; o < this.arrTopUserItem.length; o++) {
                        var s = this.arrTopUserItem[o];
                        0 == s.active && s.resetItem();
                      }
                      t.length > 0 &&
                        (this.background && 0 == this.background.active
                          ? ((this.background.active = !0), this.playShowAnim())
                          : 1 == this.background.active &&
                            this.playNewItemAnim());
                    }
                  }),
                  (s._updateTopUserItem = function (t, e) {
                    var i = e.rank,
                      r = e.betAmount;
                    t && t.updateBetRank(i), t && t.updateBetAmount(r);
                  }),
                  (s.resetUI = function (t) {
                    void 0 === t && (t = null),
                      (this.node.getComponent(h).opacity = 255);
                    for (var e = 0; e < this.arrTopUserItem.length; e++) {
                      this.arrTopUserItem[e].active = !1;
                    }
                    if (null == t || t.length <= 0)
                      this.background && (this.background.active = !1);
                    else
                      for (var i = 0; i < t.length; i++)
                        for (
                          var r = t[i].rank, o = 0;
                          o < this.arrTopUserItem.length;
                          o++
                        ) {
                          if (r == this.arrTopUserItem[o].getRank()) {
                            this.arrTopUserItem[i].setIsNew(!1);
                            break;
                          }
                          this.arrTopUserItem[i].setIsNew(!0);
                        }
                  }),
                  (s.playShowAnim = function () {
                    1 == this.background.active &&
                      ((this.background.getComponent(h).opacity = 0),
                      g.fadeAnim(
                        this.background,
                        255,
                        this.SINE_OUT,
                        0,
                        this.getConfig().FADEIN_TIME
                      ));
                    for (var t = 0; t < this.arrTopUserItem.length; t++) {
                      var e = this.arrTopUserItem[t];
                      1 == e.active &&
                        ((e.opacity = 0),
                        this.isHorizontal
                          ? (e.position = this.getConfig().arrPosHorizontal[t])
                          : (e.position = this.getConfig().arrPosVertical[t]),
                        this._showItem(
                          e,
                          !1,
                          0.2 * t,
                          this.getConfig().FADEIN_TIME,
                          this.getConfig().MOVE_OFFSET
                        ));
                    }
                  }),
                  (s.playNewItemAnim = function () {
                    for (var t = 0; t < this.arrTopUserItem.length; t++) {
                      var e = this.arrTopUserItem[t];
                      1 == e.active &&
                        e.getIsNew() &&
                        this._showItem(
                          e,
                          !0,
                          0,
                          this.getConfig().FADEIN_TIME,
                          this.getConfig().MOVE_OFFSET
                        );
                    }
                  }),
                  (s._showItem = function (t, e, i, r, o) {
                    if (
                      (void 0 === i && (i = 0),
                      void 0 === r && (r = 0.2),
                      void 0 === o && (o = 10),
                      (t.getComponent(h).opacity = 0),
                      e)
                    ) {
                      var s = t.getPosition();
                      t.setPosition(
                        l(t.getPosition().x, t.getPosition().y + o, 0)
                      ),
                        c.stopAllByTarget(t),
                        g.fadeAnim(t, 255, this.SINE_OUT, i, r),
                        u(t)
                          .delay(i)
                          .to(r, { position: s }, { easing: "sineOut" })
                          .call(function () {
                            t.setPosition(s);
                          })
                          .start();
                    } else
                      c.stopAllByTarget(t),
                        g.fadeAnim(t, 255, this.SINE_OUT, i, r);
                  }),
                  e
                );
              })(f)).prototype,
              "background",
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
            (_ = e(b.prototype, "topUsers", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = e(b.prototype, "scaleItem", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1;
              },
            })),
            (w = e(b.prototype, "isHorizontal", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (v = b))
          ) || v)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TopUserItem3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTSubscriber.ts",
    "./BTCommons.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, s, o, r, a, u, h, c, l, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (r = t.Node),
            (a = t._decorator),
            (u = t.Sprite),
            (h = t.Label);
        },
        null,
        function (t) {
          c = t.BTSubscriber;
        },
        function (t) {
          (l = t.formatNumber), (p = t.convertNumberToK);
        },
      ],
      execute: function () {
        var b, d, g, m, f, k, B, y, N;
        o._RF.push({}, "325e0GZWv1AB5GomB5+3/cB", "TopUserItem3986", void 0);
        var R = a,
          w = R.ccclass,
          I = R.property;
        t(
          "TopUserItem3986",
          ((b = w("TopUserItem3986")),
          (d = I({ displayName: "BG", type: r })),
          (g = I({ displayName: "Bet rank", type: r })),
          (m = I({ displayName: "Bet amount", type: r })),
          b(
            ((B = e(
              (k = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, o = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    i(e, "bg", B, s(e)),
                    i(e, "betRank", y, s(e)),
                    i(e, "betAmount", N, s(e)),
                    (e.isNew = !1),
                    (e.rank = 0),
                    e
                  );
                }
                n(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this), this._bindProps();
                  }),
                  (o._bindProps = function () {
                    (this.node.changeBG = this.changeBG.bind(this)),
                      (this.node.updateBetRank = this.updateBetRank.bind(this)),
                      (this.node.updateBetAmount =
                        this.updateBetAmount.bind(this)),
                      (this.node.getIsNew = this.getIsNew.bind(this)),
                      (this.node.setIsNew = this.setIsNew.bind(this)),
                      (this.node.getRank = this.getRank.bind(this)),
                      (this.node.resetItem = this.resetItem.bind(this));
                  }),
                  (o.getRank = function () {
                    return this.rank;
                  }),
                  (o.getIsNew = function () {
                    return this.isNew;
                  }),
                  (o.setIsNew = function (t) {
                    this.isNew = t;
                  }),
                  (o.changeBG = function (t) {
                    this.bg && (this.bg.getComponent(u).spriteFrame = t);
                  }),
                  (o.updateBetRank = function (t) {
                    this.betRank &&
                      ((this.rank = l(t)),
                      (this.betRank.getComponent(h).string = this.rank),
                      this.rank <= 3
                        ? (this.betRank.color = this.getConfig().getColorByRank(
                            this.rank
                          ))
                        : (this.betRank.color =
                            this.getConfig().getColorByRank(4)),
                      this.getIsNew());
                  }),
                  (o.updateBetAmount = function (t) {
                    this.betAmount &&
                      (this.betAmount.getComponent(h).string = p(t));
                  }),
                  (o.resetItem = function () {
                    (this.rank = 0), (this.isNew = !1);
                  }),
                  e
                );
              })(c)).prototype,
              "bg",
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
            (y = e(k.prototype, "betRank", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(k.prototype, "betAmount", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = k))
          ) || f)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Waiting3986.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Declaration3986.ts",
    "./BTEventCode.ts",
    "./BTSubscriber.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, o, r, s, a, c, u, l, p, h, d, f;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (s = t.Node),
            (a = t.ProgressBar),
            (c = t._decorator),
            (u = t.UIOpacity),
            (l = t.Tween),
            (p = t.tween),
            (h = t.v3);
        },
        null,
        function (t) {
          d = t.BTEventCode;
        },
        function (t) {
          f = t.BTSubscriber;
        },
      ],
      execute: function () {
        var y, g, v, b, m, I, _, A, P, w, T;
        r._RF.push({}, "3ad12/fSUVB7oaM1ywPSJ7u", "Waiting3986", void 0);
        var B = c,
          L = B.ccclass,
          W = B.property;
        t(
          "Waiting3986",
          ((y = L("Waiting3986")),
          (g = W({ type: s })),
          (v = W({ type: a, override: !0 })),
          (b = W({ displayName: "rotate Icon", type: s })),
          (m = W({ displayName: "speed" })),
          y(
            ((A = i(
              (_ = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, r = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(r)) || this),
                    n(i, "overLay", A, o(i)),
                    n(i, "icon", P, o(i)),
                    n(i, "rotateIcon", w, o(i)),
                    n(i, "speed", T, o(i)),
                    i
                  );
                }
                e(i, t);
                var r = i.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this._bindProps(),
                      this._init();
                  }),
                  (r._init = function () {
                    (this.node.active = !1),
                      (this.node.getComponent(u).opacity = 255);
                  }),
                  (r._bindProps = function () {
                    this.registerEvent(d.SHOW_WAITING, this.show.bind(this)),
                      this.registerEvent(d.HIDE_WAITING, this.hide.bind(this));
                  }),
                  (r.show = function () {
                    (this.node.active = !0),
                      (this.node.getComponent(u).opacity = 255),
                      this.icon && (this.icon.progress = 0),
                      this.rotateIcon &&
                        (l.stopAllByTarget(this.rotateIcon),
                        this.runPreloaderAnim());
                  }),
                  (r.hide = function () {
                    (this.node.active = !1),
                      this.overLay && (this.overLay.active = !1),
                      this.rotateIcon && l.stopAllByTarget(this.rotateIcon);
                  }),
                  (r.runPreloaderAnim = function () {
                    this._runRotateAnim(), this._runPopingAnim();
                  }),
                  (r._runRotateAnim = function () {
                    var t = this;
                    p(this.rotateIcon)
                      .by(this.speed, { angle: 360 })
                      .call(function () {
                        t._runRotateAnim();
                      })
                      .start();
                  }),
                  (r._runPopingAnim = function () {
                    var t = this;
                    p(this.rotateIcon)
                      .to(this.speed / 4, { scale: h(1.05, 1.05, 1.05) })
                      .to(this.speed / 4, { scale: h(1, 1, 1) })
                      .call(function () {
                        t._runPopingAnim();
                      })
                      .start();
                  }),
                  (r.update = function (t) {
                    this.node.active &&
                      this.icon &&
                      ((this.icon.progress += 2 * t),
                      this.icon.progress >= 1 && (this.icon.progress = 0));
                  }),
                  i
                );
              })(f)).prototype,
              "overLay",
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
            (P = i(_.prototype, "icon", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = i(_.prototype, "rotateIcon", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(_.prototype, "speed", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 2;
              },
            })),
            (I = _))
          ) || I)
        );
        r._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/cc30-sicbo-dp-3986",
    "chunks:///_virtual/cc30-sicbo-dp-3986"
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
