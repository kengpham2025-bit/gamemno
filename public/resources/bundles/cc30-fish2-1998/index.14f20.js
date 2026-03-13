System.register(
  "chunks:///_virtual/AssetBundle1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfAssetBundle.ts"],
  function (t) {
    "use strict";
    var e, n, s, i;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose), (n = t.assertThisInitialized);
        },
        function (t) {
          s = t.cclegacy;
        },
        function (t) {
          i = t.default;
        },
      ],
      execute: function () {
        s._RF.push({}, "b2253aLvgpD66pnyDm+PK0S", "AssetBundle1998", void 0),
          (t(
            "default",
            (function (t) {
              function s() {
                var e;
                return (e = t.call(this) || this), (s.instance = n(e)), e;
              }
              return (
                e(s, t),
                (s.prototype.destroy = function () {
                  t.prototype.destroy.call(this), (s.instance = null);
                }),
                s
              );
            })(i)
          ).instance = null),
          s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BackgroundController1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEventEmitter.ts",
    "./gfBackgroundController.ts",
    "./gfBaseEvents.ts",
    "./gfDataStore.ts",
  ],
  function (n) {
    "use strict";
    var o, t, r, e, c, u, a, d, i, l;
    return {
      setters: [
        function (n) {
          o = n.inheritsLoose;
        },
        function (n) {
          (t = n.cclegacy),
            (r = n._decorator),
            (e = n.tween),
            (c = n.Sprite),
            (u = n.Color);
        },
        function (n) {
          a = n.default;
        },
        function (n) {
          d = n.GfBackgroundController;
        },
        function (n) {
          i = n.default;
        },
        function (n) {
          l = n.default;
        },
      ],
      execute: function () {
        var s;
        t._RF.push(
          {},
          "3d1ddtbgBdMdYB/ZLNgdHF3",
          "BackgroundController1998",
          void 0
        );
        var g = r.ccclass;
        n(
          "BackgroundController1998",
          g("BackgroundController1998")(
            (s = (function (n) {
              function t() {
                return n.apply(this, arguments) || this;
              }
              return (
                o(t, n),
                (t.prototype.onChangeRound = function (n) {
                  var o = this,
                    t = n.SceneKind,
                    r = n.isFishGroupToNormal;
                  this._curBackgroundID != t &&
                    ((this._curBackgroundID = t),
                    e(this.background1.node)
                      .delay(1)
                      .to(1.5, null, {
                        onUpdate: function (n, t) {
                          o.background1.node.getComponent(c).color = new u(
                            255,
                            255,
                            255,
                            -255 * t
                          );
                        },
                      })
                      .call(function () {
                        o.background1.spriteFrame =
                          o.arrDataBackground[o._curBackgroundID];
                      })
                      .to(0, null, {
                        onUpdate: function (n, t) {
                          o.background1.node.getComponent(c).color = new u(
                            255,
                            255,
                            255,
                            255 * t
                          );
                        },
                      })
                      .start(),
                    e(this.background2.node)
                      .to(0, null, {
                        onUpdate: function (n, t) {
                          o.background2.node.getComponent(c).color = new u(
                            255,
                            255,
                            255,
                            0 * t
                          );
                        },
                      })
                      .call(function () {
                        o.background2.spriteFrame =
                          o.arrDataBackground[o._curBackgroundID];
                      })
                      .delay(1)
                      .to(1.5, null, {
                        onUpdate: function (n, t) {
                          o.background2.node.getComponent(c).color = new u(
                            255,
                            255,
                            255,
                            255 * t
                          );
                        },
                      })
                      .start(),
                    r ||
                      (this._curBackgroundID > 2
                        ? a.instance.emit(i.EFFECT_LAYER.PLAY_WAVE_TRANSITION)
                        : a.instance.emit(
                            i.EFFECT_LAYER.PLAY_FISH_GROUP_TRANSITION,
                            !!(l.instance.getSelfDeskStation() > 1)
                          ),
                      a.instance.emit(
                        i.GAME_LAYER.CHANGE_BUBBLE,
                        this._curBackgroundID
                      )));
                }),
                t
              );
            })(d))
          ) || s
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BaseFish1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfBaseFish.ts",
    "./gfEventEmitter.ts",
    "./gfBaseEvents.ts",
  ],
  function (e) {
    "use strict";
    var t, i, s, o, c, n, h;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (i = e.cclegacy), (s = e._decorator), (o = e.tween);
        },
        function (e) {
          c = e.gfBaseFish;
        },
        function (e) {
          n = e.default;
        },
        function (e) {
          h = e.default;
        },
      ],
      execute: function () {
        var r;
        i._RF.push({}, "6adc2AXw+RJ5LXd6fk0p9aL", "BaseFish1998", void 0);
        var f = s.ccclass;
        e(
          "BaseFish1998",
          f("BaseFish1998")(
            (r = (function (e) {
              function i() {
                for (
                  var t, i = arguments.length, s = new Array(i), o = 0;
                  o < i;
                  o++
                )
                  s[o] = arguments[o];
                return (
                  ((t = e.call.apply(e, [this].concat(s)) || this).compFreeze =
                    null),
                  (t.compLuckyFish = null),
                  t
                );
              }
              t(i, e);
              var s = i.prototype;
              return (
                (s.initFishData = function (t) {
                  e.prototype.initFishData.call(this, t),
                    this.compLuckyFish ||
                      (this.compLuckyFish =
                        this.node.getComponent("GfLuckyFish")),
                    this.compFreeze ||
                      (this.compFreeze = this.node
                        .getChildByName("FishFreezeEffect")
                        .getComponent("gfFishFreezeEffect")),
                    this.compLuckyFish.initLuckyEffect(t),
                    this.compLuckyFish.luckyEffect.setPosition(
                      this._targetPoint.x,
                      this._targetPoint.y,
                      1
                    );
                }),
                (s.setCompFreeze = function (e) {
                  this.compFreeze = e.getComponent("gfFreezeIceEffect");
                }),
                (s.onHit = function (e) {
                  var t = this;
                  e && this.triggerHit(e),
                    (this.compFreeze && this.compFreeze.getIsFreezed()) ||
                      (this.setColor(this.HIT_COLOR),
                      o(this.node)
                        .delay(0.1)
                        .call(function () {
                          (t.compFreeze && t.compFreeze.getIsFreezed()) ||
                            t.resetColor();
                        })
                        .start());
                }),
                (s.onPlayEffectWinInCatchFish = function (e) {
                  if (this.compLuckyFish.getMultiplier() > 1)
                    return (
                      (e.fishKind = this._FishKind),
                      (e.fishPos = this.getLockPositionByWorldSpace()),
                      void this.compLuckyFish.onPlayEffectWinLuckfyFishInCatchFish(
                        e
                      )
                    );
                  (e.fishKind = this._FishKind),
                    (e.fishPos = this.getLockPositionByWorldSpace()),
                    n.instance.emit(h.EFFECT_LAYER.PLAY_REWARD_EFFECT, e, !0);
                }),
                (s.unuse = function () {
                  e.prototype.unuse.call(this),
                    this.compFreeze && this.compFreeze.resetIced();
                }),
                i
              );
            })(c))
          ) || r
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BoxItem1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./EventsCode1998.ts",
    "./EventController1998.ts",
    "./gfEventEmitter.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, s, a, o, l, c, h, u, d, r, p, m;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (l = t.sp),
            (c = t.tween),
            (h = t.Tween),
            (u = t.Component);
        },
        function (t) {
          d = t.getRandomInt;
        },
        function (t) {
          r = t.default;
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          m = t.default;
        },
      ],
      execute: function () {
        var f, A, _, y, v;
        a._RF.push({}, "d2fc1UiwxtHJqOs+IjBLObj", "BoxItem1998", void 0);
        var k = "idle",
          B = "idle_anim",
          g = "hit1",
          C = "hit1_loop",
          T = "hit2",
          x = "hit2_loop",
          b = "hit3",
          S = "hit3_loop",
          R = "miss",
          E = "open",
          L = "open_gold",
          w = "open_gold_loop",
          O = "open_nieuvang",
          D = "open_nieuvang_loop",
          I = "x2",
          P = "x2_loop",
          V = 1,
          M = 2,
          N = 3,
          X = 4,
          F = o.ccclass,
          U = o.property;
        t(
          "BoxItem1998",
          ((f = F("BoxItem1998")),
          (A = U(l.Skeleton)),
          f(
            ((v = i(
              (y = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, a = new Array(e), o = 0;
                    o < e;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (i = t.call.apply(t, [this].concat(a)) || this),
                    n(i, "spAnim", v, s(i)),
                    (i._state = V),
                    (i._isLocked = !1),
                    (i._callback = null),
                    (i.onClickedCallBack = null),
                    (i.index = 0),
                    (i._value = 0),
                    (i._hammerType = void 0),
                    i
                  );
                }
                e(i, t);
                var a = i.prototype;
                return (
                  (a.onLoad = function () {
                    (this.node.show = this.show.bind(this)),
                      (this.node.onClick = this.onClick.bind(this)),
                      (this.node.init = this.init.bind(this)),
                      (this.node.isLocked = this.isLocked.bind(this)),
                      (this.node.getBoxPosition =
                        this.getBoxPosition.bind(this)),
                      (this.node.isClose = this.isClose.bind(this)),
                      (this.node.open = this.open.bind(this)),
                      (this.node.showResultFail =
                        this.showResultFail.bind(this)),
                      (this.node.fastToResult = this.fastToResult.bind(this)),
                      (this.node.reset = this.reset.bind(this));
                  }),
                  (a.updateState = function (t) {
                    void 0 === t && (t = V), (this._state = t);
                  }),
                  (a.getBoxPosition = function () {
                    return this.node.getPosition();
                  }),
                  (a.init = function (t) {
                    var i = t.index,
                      e = t.onClickedCallBack;
                    (this.onClickedCallBack = e), (this.index = i);
                  }),
                  (a.isLocked = function (t) {
                    void 0 === t && (t = !0), (this._isLocked = t);
                  }),
                  (a.isClose = function () {
                    return V === this._state;
                  }),
                  (a.show = function (t, i) {
                    var e = this;
                    void 0 === t && (t = 0), this.reset();
                    var n = p.instance.getConfigBoxValue().X2_REWARD;
                    if (
                      ((this._hammerType = i),
                      this.spAnim.setAnimation(0, k, !1),
                      t)
                    )
                      if ((this.updateState(X), t === n))
                        this.spAnim.setAnimation(0, P, !1);
                      else {
                        var s = p.instance.getRewardKeyMapByType(
                            this._hammerType
                          ),
                          a = "";
                        for (var o in s)
                          if (s[o] === t) {
                            a = p.instance.checkBoxType(o, "Small")
                              ? C
                              : p.instance.checkBoxType(o, "Big")
                              ? x
                              : S;
                            break;
                          }
                        this.spAnim.setAnimation(0, a, !0);
                      }
                    else
                      this.updateState(V),
                        c(this.node)
                          .delay(Math.random())
                          .call(function () {
                            e.spAnim.setAnimation(0, B, !1);
                          })
                          .delay(this.spAnim.findAnimation(B).duration)
                          .call(function () {
                            e.schedule(function () {
                              e.spAnim.setAnimation(0, B, !1);
                            }, d(40, 100) / 10);
                          })
                          .start();
                  }),
                  (a.getAnimByValue = function (t) {
                    var i = g,
                      e = C,
                      n = p.instance.getConfigBoxValue().X2_REWARD,
                      s = p.instance.getRewardKeyMapByType(this._hammerType),
                      a = 0;
                    if (n === t) (i = I), (e = P), (a = -1);
                    else if (t) {
                      for (var o in s)
                        if (s[o] === t) {
                          p.instance.checkBoxType(o, "Small")
                            ? ((i = g), (e = C), (a = -0))
                            : p.instance.checkBoxType(o, "Big")
                            ? ((i = T), (e = x), (a = -0.9))
                            : ((i = b), (e = S), (a = -0.4));
                          break;
                        }
                    } else (i = R), (e = null), (a = 1);
                    return { aminStart: i, aminIdle: e, durMinus: a };
                  }),
                  (a.open = function (t, i) {
                    var e = this,
                      n = t.rewardValue,
                      s = t.durHammerFX;
                    (this._value = n), this.unscheduleAllCallbacks();
                    var a = p.instance.getConfigBoxValue().X2_REWARD;
                    this.updateState(N),
                      h.stopAllByTarget(this.node),
                      (this._callback = i);
                    var o = this.getAnimByValue(this._value),
                      l = o.aminStart,
                      u = o.aminIdle,
                      d = o.durMinus,
                      f = this.spAnim.findAnimation(l).duration;
                    this.scheduleOnce(function () {
                      i(), e.updateState(X);
                    }, s + f + d),
                      c(this.node)
                        .delay(s)
                        .call(function () {
                          if (
                            (e.spAnim.setAnimation(0, l, !1),
                            u && e.spAnim.addAnimation(0, u, !0),
                            m.instance.emit(r.SOUND.CLAY_POT_BROKEN),
                            a === e._value)
                          )
                            m.instance.emit(r.SOUND.EVENT_CLAY_POT_BREAK);
                          else if (e._value) {
                            var t = p.instance.getRewardKeyMapByType(
                              e._hammerType
                            );
                            for (var i in t)
                              t[i] === e._value &&
                                m.instance.emit({
                                  type: r.SOUND.SHOW_BOX_VALUE,
                                  data: i,
                                });
                          }
                        })
                        .delay(0.2)
                        .call(function () {
                          e._value || m.instance.emit(r.SOUND.CLAY_POT_MISSED);
                        })
                        .start();
                  }),
                  (a.fastToResult = function () {
                    if (this._state === N) {
                      this.updateState(X), this.unscheduleAllCallbacks();
                      var t = this.getAnimByValue(this._value),
                        i = t.aminIdle,
                        e = t.aminStart;
                      if (
                        (i && this.spAnim.setAnimation(0, i, !1),
                        h.stopAllByTarget(this.node),
                        e === R)
                      ) {
                        this.spAnim.setAnimation(0, e, !1);
                        var n = this.spAnim.findAnimation(e).duration;
                        this.spAnim.updateAnimation(n);
                      }
                      this._callback(!0);
                    }
                  }),
                  (a.onClick = function () {
                    if (this._state === V && !this._isLocked) {
                      this.updateState(M),
                        this.unscheduleAllCallbacks(),
                        this.onClickedCallBack &&
                          this.onClickedCallBack(this.index);
                      var t = { type: this._hammerType, index: this.index };
                      m.instance.emit(r.EVENT.SEND_OPEN_BOX, t);
                    }
                  }),
                  (a.showResultFail = function (t, i) {
                    var e = this;
                    this.updateState(X), this.unscheduleAllCallbacks();
                    var n = null;
                    p.instance.checkBoxType(t, "Mega") ||
                    p.instance.checkBoxType(t, "X2")
                      ? ((n = L),
                        c(this.node)
                          .call(function () {
                            p.instance.checkBoxType(t, "X2")
                              ? (e.spAnim.setAnimation(0, O, !1),
                                e.spAnim.addAnimation(0, D, !0))
                              : (e.spAnim.setAnimation(0, n, !1),
                                e.spAnim.addAnimation(0, w, !0));
                          })
                          .delay(0.8)
                          .call(function () {
                            i();
                          })
                          .start())
                      : ((n = E),
                        c(this.node)
                          .delay(1)
                          .call(function () {
                            e.spAnim.setAnimation(0, n, !1);
                          })
                          .delay(0.8)
                          .call(function () {
                            i();
                          })
                          .start());
                  }),
                  (a.reset = function () {
                    this.updateState(V),
                      this.isLocked(!1),
                      this.spAnim.setCompleteListener(function () {}),
                      this.unscheduleAllCallbacks(),
                      h.stopAllByTarget(this.node),
                      (this._value = null),
                      (this._callback = null);
                  }),
                  i
                );
              })(u)).prototype,
              "spAnim",
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
            (_ = y))
          ) || _)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BulletLayer1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfBulletLayer.ts"],
  function (t) {
    "use strict";
    var e, r, l, u;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (r = t.cclegacy), (l = t._decorator);
        },
        function (t) {
          u = t.gfBulletLayer;
        },
      ],
      execute: function () {
        var o;
        r._RF.push({}, "55328LmSMZAuaNFbx9TO30V", "BulletLayer1998", void 0);
        var c = l.ccclass;
        l.property,
          t(
            "BulletLayer1998",
            c("BulletLayer1998")(
              (o = (function (t) {
                function r() {
                  return t.apply(this, arguments) || this;
                }
                return (
                  e(r, t),
                  (r.prototype.createBulletPool = function (e) {
                    t.prototype.createBulletPool.call(this, e);
                  }),
                  r
                );
              })(u))
            ) || o
          );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/cc30-fish2-1998",
  [
    "./Dragon1998.ts",
    "./DragonAssetManager1998.ts",
    "./DragonConfig1998.ts",
    "./DragonExtraSound1998.ts",
    "./AssetBundle1998.ts",
    "./Config1998.ts",
    "./DataStore1998.ts",
    "./DragonBall1998.ts",
    "./EffectDragon1998.ts",
    "./EffectLockFish1998.ts",
    "./EventsCode1998.ts",
    "./FishManager1998.ts",
    "./FreezeConfig1998.ts",
    "./GeneralInitialization1998.ts",
    "./HUDController1998.ts",
    "./LoadingScene1998.ts",
    "./MainController1998.ts",
    "./NodePoolAssets1998.ts",
    "./NodePoolConfig1998.ts",
    "./PoolManager1998.ts",
    "./ReferenceManager1998.ts",
    "./SideMenu1998.ts",
    "./BackgroundController1998.ts",
    "./BaseFish1998.ts",
    "./BulletLayer1998.ts",
    "./DropSpecialGun1998.ts",
    "./EffectLayer1998.ts",
    "./FishGroup021998.ts",
    "./FishGroup031998.ts",
    "./FishGroup041998.ts",
    "./FishGroup051998.ts",
    "./FishGroup17Extend1998.ts",
    "./FishGroupMgr1998.ts",
    "./FreezeGun1998.ts",
    "./FreezeManager1998.ts",
    "./FreezeSkill1998.ts",
    "./GunSkill1998.ts",
    "./JackpotInfo1998.ts",
    "./JackpotStarFX1998.ts",
    "./JackpotWinPopup1998.ts",
    "./LobbyLayer1998.ts",
    "./LuckyEffect1998.ts",
    "./NetFX1998.ts",
    "./NotifyJackpot1998.ts",
    "./NotifyMessage1998.ts",
    "./Player1998.ts",
    "./SoundController1998.ts",
    "./SpineFish1998.ts",
    "./SpriteFish1998.ts",
    "./WaitingLayer1998.ts",
    "./Wheel1998.ts",
    "./JackpotCellHistory1998.ts",
    "./JackpotHistory1998.ts",
    "./PopupJackpotHistory1998.ts",
    "./PopupController1998.ts",
    "./PopupInfo1998.ts",
    "./PopupPromotion1998.ts",
    "./PopupPrompt1998.ts",
    "./PopupSetting1998.ts",
    "./EventButton1998.ts",
    "./NetworkGameEvent1998.ts",
    "./NetworkKeyMap1998.ts",
    "./NetworkParser1998.ts",
    "./EventController1998.ts",
    "./CutSceneLayer1998.ts",
    "./CutSceneWinEvent1998.ts",
    "./EffectEvent1998.ts",
    "./EventItemEffect1998.ts",
    "./EventTray1998.ts",
    "./EventTrayController1998.ts",
    "./EventWinWheel1998.ts",
    "./HammerFX1998.ts",
    "./NetFXEvent1998.ts",
    "./BoxItem1998.ts",
    "./EventCellHistory1998.ts",
    "./EventHistory1998.ts",
    "./MainPUController1998.ts",
    "./PlayingMode1998.ts",
    "./PopupEvent1998.ts",
    "./PrepareMode1998.ts",
    "./RewardItem1998.ts",
    "./ToolTipEvent1998.ts",
    "./gfButtonFreeze.ts",
    "./gfEffectFreeze.ts",
    "./gfFreezeConfig.ts",
    "./gfFreezeGun.ts",
    "./gfFreezeIceEffect.ts",
    "./gfFreezeManager.ts",
    "./gfFreezeSkill.ts",
    "./gfItemFreezeEffect.ts",
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
  "chunks:///_virtual/Config1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfBaseConfig.ts"],
  function (e) {
    "use strict";
    var n, t, i, o, a;
    return {
      setters: [
        function (e) {
          (n = e.inheritsLoose), (t = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy), (o = e.Vec2);
        },
        function (e) {
          a = e.default;
        },
      ],
      execute: function () {
        i._RF.push({}, "0cb6ajeUd5DAqowqm+Ivgzd", "Config1998", void 0),
          (e(
            "default",
            (function (e) {
              function i() {
                var n, a;
                return (
                  ((a = e.call(this) || this).BOSS_PREFAB_NAME = {
                    DRAGON: "Dragon1998",
                  }),
                  (a.SceneName = {
                    Lobby: "ktfLobby1998",
                    Game1: "ktfGame1998_1",
                    Game3: "ktfGame1998_2",
                  }),
                  (a.Skill = {
                    TIMEOUT: 30,
                    ID: {
                      LASER: 1,
                      BOOM: 3,
                      FISH_BOMB: 5,
                      DRILL: 7,
                      FIRE_STORM: 8,
                    },
                    IsGunSkill: function (e) {
                      return (
                        e == a.Skill.ID.LASER ||
                        e == a.Skill.ID.DRILL ||
                        e == a.Skill.ID.FIRE_STORM
                      );
                    },
                  }),
                  (i.instance = t(a)),
                  (a.GameId = "1998"),
                  (a.GameVersion = ""),
                  (a.IPMasterName = "IPMaster2"),
                  (a.RoomVersion = "10"),
                  (a.ProdVersion = "7"),
                  (a.ClientType = "1"),
                  (a.HasCode = "|1"),
                  (a.BundleName = "bundle1998"),
                  (a.LoadGameByPrefab = !0),
                  (a.IsNewLogin = !1),
                  (a.RoomKind = { Normal: "1", VIP: "3" }),
                  (a.NOTIFY_MESSAGE = {
                    position:
                      ((n = {}),
                      (n[a.SceneName.Game1] = new o(0, 99999)),
                      (n[a.SceneName.Game3] = new o(0, 99999)),
                      (n[a.SceneName.Lobby] = new o(0, 320)),
                      n),
                    limited_stack_size: 10,
                  }),
                  a
                );
              }
              return (
                n(i, e),
                (i.prototype.destroy = function () {
                  e.prototype.destroy.call(this), (i.instance = null);
                }),
                i
              );
            })(a)
          ).instance = null),
          i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CutSceneLayer1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfCutSceneLayer.ts",
    "./gfUtilities.ts",
    "./gfBaseEvents.ts",
  ],
  function (t) {
    "use strict";
    var e, n, s, i, o, r, c, u;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (s = t._decorator), (i = t.director);
        },
        function (t) {
          o = t.gfCutSceneLayer;
        },
        function (t) {
          (r = t.registerEvent), (c = t.removeEvents);
        },
        function (t) {
          u = t.default;
        },
      ],
      execute: function () {
        var a;
        n._RF.push({}, "96b4dKQ7i1ESZfsV+IMp4KW", "CutSceneLayer1998", void 0);
        var f = s.ccclass;
        t(
          "default",
          f("CutSceneLayer1998")(
            (a = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              e(n, t);
              var s = n.prototype;
              return (
                (s.onLoad = function () {
                  i.addPersistRootNode(this.node),
                    t.prototype.onLoad.call(this);
                }),
                (s.initEvents = function () {
                  t.prototype.initEvents,
                    r(u.COMMON.REMOVE_PERSIST_NODE, this.refreshPage, this),
                    r(u.GAME_LAYER.ON_ENTER_GAME_ROOM, this.resetOnExit, this);
                }),
                (s.refreshPage = function () {
                  c(this),
                    this.unscheduleAllCallbacks(),
                    i.removePersistRootNode(this.node);
                }),
                n
              );
            })(o))
          ) || a
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CutSceneWinEvent1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfCutSceneItem.ts",
    "./utils2.ts",
    "./gfEventEmitter.ts",
    "./EventsCode1998.ts",
    "./gfBaseEvents.ts",
    "./gfActionHelper.ts",
    "./animateNumberLabel.ts",
    "./gf3DParticle.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, o, a, c, s, l, r, u, p, C, f, _, h, d, E, I, N, m, S, g, O, v;
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
            (c = t._decorator),
            (s = t.UIOpacity),
            (l = t.Node),
            (r = t.sp),
            (u = t.tween),
            (p = t.Label),
            (C = t.Button);
        },
        function (t) {
          f = t.gfCutSceneItem;
        },
        function (t) {
          _ = t.formatMoney;
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          d = t.default;
        },
        function (t) {
          E = t.default;
        },
        function (t) {
          (I = t.call),
            (N = t.scaleTo),
            (m = t.delay),
            (S = t.stopAllActions),
            (g = t.fadeOut);
        },
        function (t) {
          O = t.AnimateNumberLabel;
        },
        function (t) {
          v = t.gf3DParticle;
        },
      ],
      execute: function () {
        var T, B, U, b, y, W, V, k, w, x, A;
        a._RF.push(
          {},
          "fef3eXYFs9L7LppV5lbcAMK",
          "CutSceneWinEvent1998",
          void 0
        );
        var G = c.ccclass,
          M = c.property;
        t(
          "default",
          ((T = G("CutSceneWinEvent1998")),
          (B = M(s)),
          (U = M(l)),
          (b = M(r.Skeleton)),
          (y = M(v)),
          T(
            ((k = n(
              (V = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, a = new Array(e), c = 0;
                    c < e;
                    c++
                  )
                    a[c] = arguments[c];
                  return (
                    (n = t.call.apply(t, [this].concat(a)) || this),
                    i(n, "overlay", k, o(n)),
                    i(n, "txtCoin", w, o(n)),
                    i(n, "spBigWin", x, o(n)),
                    i(n, "particleCoin", A, o(n)),
                    (n.CONFIG_TIME = void 0),
                    (n.winValue = void 0),
                    (n.isQuickShow = void 0),
                    (n.callBackBigWin = void 0),
                    (n._data = void 0),
                    n
                  );
                }
                e(n, t);
                var a = n.prototype;
                return (
                  (a.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.CONFIG_TIME = { BIG_WIN_X2: 8, BIG_WIN: 4 });
                  }),
                  (a.extendShow = function (t) {
                    var n = this;
                    this.resetCutScene(), (this._data = t);
                    var e = t.GoldReward,
                      i = t.posX2,
                      o = t.callback;
                    (this.callBackBigWin = o),
                      (this.winValue = e),
                      (this.txtCoin.active = !0),
                      (this.particleCoin.node.active = !0),
                      this.particleCoin.startAnimation(),
                      u(this.node)
                        .sequence(
                          I(function () {
                            (n.spBigWin.node.active = !0),
                              n.spBigWin.setAnimation(0, "animation", !0),
                              h.instance.emit(
                                d.SOUND.SET_ACTIVE_MUSIC_VOLUME,
                                !1
                              ),
                              h.instance.emit(d.SOUND.BIG_WIN_EVENT),
                              u(n.spBigWin.node).then(N(0.4, 1, 1)).start(),
                              u(n.txtCoin).then(N(0.4, 1, 1)).start(),
                              u(n.txtCoin)
                                .sequence(
                                  N(0.4, 1, 1),
                                  I(function () {
                                    i
                                      ? ((n.txtCoin.getComponent(
                                          O
                                        ).currentValue = e / 2),
                                        (n.txtCoin.getComponent(p).string = _(
                                          e / 2
                                        )),
                                        h.instance.emit(
                                          d.SOUND.EVENT_COUNT_COIN
                                        ),
                                        n.txtCoin
                                          .getComponent(O)
                                          .onUpdateValue(
                                            e,
                                            1e3 * n.CONFIG_TIME.BIG_WIN_X2
                                          ))
                                      : n.txtCoin
                                          .getComponent(O)
                                          .onUpdateValue(
                                            e,
                                            1e3 * n.CONFIG_TIME.BIG_WIN
                                          );
                                  })
                                )
                                .start(),
                              u(n.overlay.node)
                                .sequence(
                                  m(0.4),
                                  I(function () {
                                    n.overlay.getComponent(C).interactable = !0;
                                  })
                                )
                                .start();
                          }),
                          m(
                            i
                              ? this.CONFIG_TIME.BIG_WIN_X2
                              : this.CONFIG_TIME.BIG_WIN
                          ),
                          I(function () {
                            h.instance.emit(d.SOUND.EVENT_STOP_COUNT_COIN);
                          }),
                          m(2),
                          I(function () {
                            n.animEnd();
                          })
                        )
                        .start();
                  }),
                  (a.animEnd = function () {
                    var t = this;
                    (this.overlay.getComponent(C).interactable = !1),
                      this.particleCoin.stopAnimation(),
                      S(this.node),
                      u(this.node)
                        .sequence(
                          g(1),
                          I(function () {
                            t.callBackBigWin &&
                              "function" == typeof t.callBackBigWin &&
                              t.callBackBigWin(t._data),
                              t.callbackFunc &&
                                "function" == typeof t.callbackFunc &&
                                t.callbackFunc(),
                              h.instance.emit(d.SOUND.STOP_BIG_WIN_EVENT),
                              h.instance.emit(
                                d.SOUND.SET_ACTIVE_MUSIC_VOLUME,
                                !0
                              ),
                              h.instance.emit(
                                d.POPUP.SHOW_POPUP_EVENT_AFTER_WIN
                              ),
                              h.instance.emit(E.EFFECT_LAYER.CHECK_QUEUE_ANIM),
                              t.node.destroy();
                          })
                        )
                        .start();
                  }),
                  (a.resetCutScene = function () {
                    (this.isQuickShow = !1),
                      (this.particleCoin.node.active = !1),
                      (this.overlay.getComponent(C).interactable = !1),
                      this.txtCoin.getComponent(O).resetValue(),
                      (this.txtCoin.active = !1),
                      S(this.node),
                      (this.spBigWin.node.active = !1),
                      this.spBigWin.node.setScale(0, 0, 0),
                      S(this.txtCoin),
                      this.txtCoin.setScale(0, 0, 0);
                  }),
                  (a.quickShow = function () {
                    var t = this;
                    this.isQuickShow ||
                      ((this.isQuickShow = !0),
                      S(this.node),
                      u(this.node)
                        .sequence(
                          I(function () {
                            t.txtCoin
                              .getComponent(O)
                              .onUpdateValue(t.winValue, 500);
                          }),
                          m(0.5),
                          I(function () {
                            h.instance.emit(d.SOUND.EVENT_STOP_COUNT_COIN);
                          }),
                          m(1),
                          I(function () {
                            t.animEnd();
                          })
                        )
                        .start());
                  }),
                  (a.hide = function () {
                    h.instance.emit(d.SOUND.EVENT_STOP_COUNT_COIN),
                      h.instance.emit(d.SOUND.STOP_BIG_WIN_EVENT),
                      h.instance.emit(d.SOUND.SET_ACTIVE_MUSIC_VOLUME, !0),
                      this.particleCoin.stopAnimation(),
                      t.prototype.hide.call(this);
                  }),
                  n
                );
              })(f)).prototype,
              "overlay",
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
            (w = n(V.prototype, "txtCoin", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = n(V.prototype, "spBigWin", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = n(V.prototype, "particleCoin", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (W = V))
          ) || W)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DataStore1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfDataStore.ts"],
  function (t) {
    "use strict";
    var e, a, n, l, r;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose), (a = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy), (l = t._decorator);
        },
        function (t) {
          r = t.default;
        },
      ],
      execute: function () {
        var o, i;
        n._RF.push({}, "1777a4CfaVE5Lxw6Bf0rkSd", "DataStore1998", void 0);
        var s = l.ccclass;
        t(
          "default",
          s("DataStore1998")(
            (((i = (function (t) {
              function n() {
                var e;
                return (
                  ((e = t.call(this) || this).lobbyWallet = null),
                  (n.instance = a(e)),
                  e
                );
              }
              e(n, t);
              var l = n.prototype;
              return (
                (l.setLobbyWallet = function (t) {
                  this.lobbyWallet = t;
                }),
                (l.getLobbyWallet = function () {
                  return this.lobbyWallet;
                }),
                n
              );
            })(r)).instance = null),
            (o = i))
          ) || o
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Dragon1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfDragon.ts"],
  function (n) {
    "use strict";
    var r, o, t, c;
    return {
      setters: [
        function (n) {
          r = n.inheritsLoose;
        },
        function (n) {
          (o = n.cclegacy), (t = n._decorator);
        },
        function (n) {
          c = n.gfDragon;
        },
      ],
      execute: function () {
        var e;
        o._RF.push({}, "d5047MlCA1Bkru45hpxgUGa", "Dragon1998", void 0);
        var i = t.ccclass;
        t.property,
          n(
            "Dragon1998",
            i("Dragon1998")(
              (e = (function (n) {
                function o() {
                  for (
                    var r, o = arguments.length, t = new Array(o), c = 0;
                    c < o;
                    c++
                  )
                    t[c] = arguments[c];
                  return (
                    ((r = n.call.apply(n, [this].concat(t)) || this).ANIMATION =
                      {
                        In: "Swim In",
                        Loop: "Swim Loop",
                        Out: "Swim Out",
                        In_L: "Swim In",
                        In_R: "Swim In",
                      }),
                    r
                  );
                }
                return r(o, n), o;
              })(c))
            ) || e
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonAssetManager1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfDragonAssetsManager.ts",
    "./DragonConfig1998.ts",
  ],
  function (n) {
    "use strict";
    var e, s, t, r, o;
    return {
      setters: [
        function (n) {
          e = n.inheritsLoose;
        },
        function (n) {
          (s = n.cclegacy), (t = n._decorator);
        },
        function (n) {
          r = n.gfDragonAssetsManager;
        },
        function (n) {
          o = n.default;
        },
      ],
      execute: function () {
        var a;
        s._RF.push(
          {},
          "d44159+bnlLNoheFbdx7GZb",
          "DragonAssetManager1998",
          void 0
        );
        var i = t.ccclass;
        t.property,
          n(
            "DragonAssetManager1998",
            i("DragonAssetManager1998")(
              (a = (function (n) {
                function s() {
                  return n.apply(this, arguments) || this;
                }
                return (
                  e(s, n),
                  (s.prototype.mergeConfig = function () {
                    new o(),
                      (o.instance.bossKind = this.bossData.bossKind),
                      o.instance.mergeToBaseConfig();
                  }),
                  s
                );
              })(r))
            ) || a
          );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonBall1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./gfActionHelper.ts",
    "./gfEventEmitter.ts",
    "./gfUtilities.ts",
    "./gfDragonBall.ts",
    "./gfDragonEvent.ts",
  ],
  function (t) {
    "use strict";
    var e, a, n, r, o, f, i, s, l, c, u, p, h, d, g, E, v, y;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (a = t.cclegacy),
            (n = t._decorator),
            (r = t.UITransform),
            (o = t.v3),
            (f = t.Vec3),
            (i = t.tween);
        },
        function (t) {
          (s = t.setOpacity), (l = t.getRandomInt);
        },
        function (t) {
          (c = t.fadeIn),
            (u = t.fadeOut),
            (p = t.rotateBy),
            (h = t.moveTo),
            (d = t.scaleTo);
        },
        function (t) {
          g = t.default;
        },
        function (t) {
          E = t.autoEnum;
        },
        function (t) {
          v = t.gfDragonBall;
        },
        function (t) {
          y = t.default;
        },
      ],
      execute: function () {
        var D;
        a._RF.push({}, "9677aHGykZCb4Kxh3dSSGOy", "DragonBall1998", void 0);
        var b = n.ccclass,
          S = E(["Invalid", "Dropping", "InTray", "InJackpotStar"]);
        t(
          "DragonBall1998",
          b("DragonBall1998")(
            (D = (function (t) {
              function a() {
                return t.apply(this, arguments) || this;
              }
              return (
                e(a, t),
                (a.prototype.dropToPlayer = function (t, e, a) {
                  var n = this,
                    E = this.node.parent
                      .getComponent(r)
                      .convertToNodeSpaceAR(
                        e.getComponent(r).convertToWorldSpaceAR(o(0, 0))
                      );
                  s(this.ballSprite.node, 0),
                    s(this.ballSpark, 0),
                    s(this.hitGlow, 0),
                    s(this.hitLight, 0),
                    s(this.frontEff, 0),
                    (this._state = S.Dropping);
                  var v = 0.25,
                    D = l(-200, 200),
                    b = l(-150, 150),
                    k = new f(D, b, 0);
                  this.node.setPosition(t),
                    i(this.ballSpark).then(c(v)).then(u(v)).start(),
                    i(this.node)
                      .delay(v)
                      .call(function () {
                        (n.frontEff.active = !0),
                          (n.backEff.active = !0),
                          s(n.frontEff, 255),
                          s(n.backEff, 255),
                          n.frontEff.scale.set(o(0, 0, 0)),
                          n.backEff.scale.set(o(0, 0, 0)),
                          i(n.frontEff)
                            .to(1, { scale: o(1, 1, 1) })
                            .start(),
                          i(n.frontEff)
                            .to(1, { scale: o(1, 1, 1) })
                            .start(),
                          i(n.backEff).repeatForever(p(1, 360)).start(),
                          n.fireEfx.scale.set(o(0, 0, 0)),
                          s(n.fireEfx, 255),
                          (n.fireEfx.active = !0),
                          i(n.fireEfx)
                            .to(1, { scale: o(2.5, 2.5, 1) })
                            .start(),
                          i(n.fireEfx).repeatForever(p(1, 360)).start();
                      })
                      .delay(1)
                      .parallel(
                        h(0.5, k.x, k.y),
                        i().call(function () {
                          i(n.frontEff).then(u(0.1)).start(),
                            i(n.ballSprite).then(c(0.1)).start();
                        })
                      )
                      .delay(0.5)
                      .parallel(h(0.5, E.x, E.y), d(0.5, this.baseScale))
                      .call(function () {
                        n.addToPlayer(e),
                          (n._state = S.InTray),
                          g.instance.emit(y.DRAGON.DONE_BALL_DROP, a);
                      })
                      .start();
                }),
                a
              );
            })(v))
          ) || D
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonConfig1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfDragonConfig.ts"],
  function (n) {
    "use strict";
    var t, i, e, o, r;
    return {
      setters: [
        function (n) {
          (t = n.inheritsLoose), (i = n.assertThisInitialized);
        },
        function (n) {
          (e = n.cclegacy), (o = n._decorator);
        },
        function (n) {
          r = n.default;
        },
      ],
      execute: function () {
        var a, s;
        e._RF.push({}, "f2ab6qVquhIp4mriey1P6Fw", "DragonConfig1998", void 0);
        var c = o.ccclass;
        (n(
          "default",
          c("DragonConfig1998")(
            (((s = (function (n) {
              function e() {
                var t;
                return (
                  ((t = n.call(this) || this).SOUND_BACKGROUND_CONFIG = void 0),
                  (t.ASSET_NAME = void 0),
                  (t.POOL_TYPE_NAME = { DRAGON_BALL: "DragonBall1998" }),
                  (e.instance = i(t)),
                  t
                );
              }
              return t(e, n), e;
            })(r)).instance = null),
            (a = s))
          ) || a
        ).instance = null),
          e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonExtraSound1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfDragonExtraSound.ts",
    "./gfUtilities.ts",
    "./gfBaseEvents.ts",
  ],
  function (t) {
    "use strict";
    var n, o, s, r, e, a;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (s = t._decorator);
        },
        function (t) {
          r = t.gfDragonExtraSound;
        },
        function (t) {
          e = t.registerEvent;
        },
        function (t) {
          a = t.default;
        },
      ],
      execute: function () {
        var i;
        o._RF.push(
          {},
          "4195cT21WFMSb4/wd0r1fCK",
          "DragonExtraSound1998",
          void 0
        );
        var c = s.ccclass;
        s.property,
          t(
            "DragonExtraSound1998",
            c("DragonExtraSound1998")(
              (i = (function (t) {
                function o() {
                  return t.apply(this, arguments) || this;
                }
                n(o, t);
                var s = o.prototype;
                return (
                  (s.initExtraEvents = function () {
                    t.prototype.initExtraEvents.call(this),
                      e(
                        a.SOUND.PLAY_SOUND_BACKGROUND,
                        this.unscheduleSoundDragonScream,
                        this
                      ),
                      e(
                        a.SOUND.STOP_EFFECT_JACKPOT_COIN,
                        this.stopSfxJackpotCoin,
                        this
                      ),
                      e(
                        a.SOUND.RESUME_SOUND_BACKGROUND,
                        this.unscheduleSoundDragonScream,
                        this
                      );
                  }),
                  (s.playBossBackGroundMusic = function () {
                    this.schedule(this.playSfxDragonScream.bind(this), 6),
                      t.prototype.playBossBackGroundMusic.call(this);
                  }),
                  (s.stopSfxJackpotCoin = function () {
                    this.unscheduleAllCallbacks(),
                      t.prototype.stopSfxJackpotCoin.call(this);
                  }),
                  (s.unscheduleSoundDragonScream = function (t) {
                    "bgmDragon" != t && this.unscheduleAllCallbacks();
                  }),
                  (s.removeExtraEvents = function () {
                    t.prototype.removeExtraEvents.call(this),
                      this.unscheduleAllCallbacks();
                  }),
                  o
                );
              })(r))
            ) || i
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DropSpecialGun1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfDropSpecialGunFX.ts"],
  function (n) {
    "use strict";
    var o, e, t, r, i;
    return {
      setters: [
        function (n) {
          o = n.inheritsLoose;
        },
        function (n) {
          (e = n.cclegacy), (t = n._decorator), (r = n.tween);
        },
        function (n) {
          i = n.gfDropSpecialGunFX;
        },
      ],
      execute: function () {
        var c;
        e._RF.push({}, "9b72ejUQoVKEL34NUgr5VSh", "DropSpecialGun1998", void 0);
        var u = t.ccclass;
        n(
          "DropSpecialGun1998",
          u("DropSpecialGun1998")(
            (c = (function (n) {
              function e() {
                return n.apply(this, arguments) || this;
              }
              o(e, n);
              var t = e.prototype;
              return (
                (t.onDrop = function () {
                  return (
                    (this.node.angle = this.node.angle - 90), r().delay(0.85)
                  );
                }),
                (t.onFly = function () {
                  return r().to(1, { position: this.endPosition });
                }),
                (t.onFinish = function () {
                  var n = this;
                  return r()
                    .delay(0.85)
                    .call(function () {
                      n.node.removeFromParent(),
                        n.node.destroy(),
                        "function" == typeof n.callBack && n.callBack(n);
                    });
                }),
                e
              );
            })(i))
          ) || c
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EffectDragon1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEventEmitter.ts",
    "./gfBaseEvents.ts",
    "./gfDragonEffectLayer.ts",
    "./gfDragonEvent.ts",
  ],
  function (t) {
    "use strict";
    var n, e, o, r, c, a, f;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          r = t.default;
        },
        function (t) {
          c = t.default;
        },
        function (t) {
          a = t.gfDragonEffectLayer;
        },
        function (t) {
          f = t.default;
        },
      ],
      execute: function () {
        var i;
        e._RF.push({}, "ffe90OxwpdHZbpdtdbVQk/E", "EffectDragon1998", void 0);
        var s = o.ccclass;
        o.property,
          t(
            "EffectDragon1998",
            s("EffectDragon1998")(
              (i = (function (t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                n(e, t);
                var o = e.prototype;
                return (
                  (o.showJackpotWinAmountPopup = function () {
                    r.instance.emit(
                      c.CUT_SCENE.SHOW_CUT_SCENE,
                      "JackpotWinPopup1998",
                      this.endData
                    );
                  }),
                  (o.onDragonBallDropped = function (n) {
                    r.instance.emit(f.SOUND.DRAGON_DROP_BALL),
                      t.prototype.onDragonBallDropped.call(this, n);
                  }),
                  e
                );
              })(a))
            ) || i
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EffectEvent1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEffectEvent.ts",
    "./gfUtilities.ts",
    "./Config1998.ts",
    "./EventsCode1998.ts",
    "./ReferenceManager1998.ts",
    "./gfEventEmitter.ts",
    "./FishManager1998.ts",
    "./EventController1998.ts",
    "./gfBaseEvents.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, s, a, o, E, u, c, r, f, l, v, h, _;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy),
            (i = t._decorator),
            (s = t.instantiate),
            (a = t.UITransform);
        },
        function (t) {
          o = t.gfEffectEvent;
        },
        function (t) {
          (E = t.SetZIndex), (u = t.registerEvent);
        },
        function (t) {
          c = t.default;
        },
        function (t) {
          r = t.default;
        },
        function (t) {
          f = t.default;
        },
        function (t) {
          l = t.default;
        },
        function (t) {
          v = t.default;
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          _ = t.default;
        },
      ],
      execute: function () {
        var d;
        n._RF.push({}, "395366c37xNjbcNBKAIUQj/", "EffectEvent1998", void 0);
        var p = i.ccclass;
        t(
          "default",
          p("EffectEvent1998")(
            (d = (function (t) {
              function n() {
                for (
                  var e, n = arguments.length, i = new Array(n), s = 0;
                  s < n;
                  s++
                )
                  i[s] = arguments[s];
                return (
                  ((e =
                    t.call.apply(t, [this].concat(i)) || this)._queueItemEvent =
                    []),
                  (e._playingQueueItemEvent = !1),
                  e
                );
              }
              e(n, t);
              var i = n.prototype;
              return (
                (i.onLoad = function () {
                  t.prototype.onLoad.call(this);
                  for (var e = 0; e < this.eventWinWheels.length; e++) {
                    var n = this.eventWinWheels[e];
                    (n.node.active = !1),
                      E(n.node.parent, c.instance.TOP_Z_INDEX.BIGWIN + 1);
                  }
                }),
                (i.initEvents = function () {
                  t.prototype.initEvents.call(this),
                    u(
                      r.EFFECT_LAYER.PLAY_EFFECT_EVENT_TRAY,
                      this.playAnimTray,
                      this
                    ),
                    u(
                      r.EFFECT_LAYER.ADD_ANIM_TO_QUEUE_ITEM_EVENT,
                      this.addAnimToQueueItemEvent,
                      this
                    ),
                    u(
                      r.EFFECT_LAYER.CHECK_QUEUE_ITEM_EVENT,
                      this.checkQueueItemEvent,
                      this
                    ),
                    u(
                      r.EVENT.OTHER_USER_WIN_MINI_GAME,
                      this.otherUserWinEvent,
                      this
                    );
                }),
                (i.otherUserWinEvent = function (t) {
                  var e = f.instance.getPlayerByDeskStation(t.DeskStation);
                  e &&
                    !e.isMe &&
                    t.Wallet &&
                    (e.updateWallet(t.Wallet),
                    this.eventWinWheels[e.index].playAnimation(
                      t,
                      function () {}
                    ));
                }),
                (i.playEventTrayFX = function (t) {
                  var e = v.instance.getFishById(t.FishID),
                    n = f.instance.getPlayerByDeskStation(t.DeskStation),
                    i = f.instance.getEventTrayByDeskStation(t.DeskStation);
                  if (e && n) {
                    var o = s(this.eventItemFX);
                    if (!o) return;
                    var E = e.getLockPositionByNodeSpace(this.node),
                      u = this.node.getComponent(a),
                      c = {
                        startPos: E,
                        endPos: i
                          ? u.convertToNodeSpaceAR(
                              i.getPositionEndPosItem(n.isMe)
                            )
                          : this.node
                              .getComponent(a)
                              .convertToNodeSpaceAR(
                                n.node
                                  .getComponent(a)
                                  .convertToWorldSpaceAR(
                                    n.node
                                      .getChildByName("EndPos")
                                      .getPosition()
                                  )
                              ),
                        data: t,
                        isMe: n.isMe,
                      };
                    if (
                      (this.node.addChild(o),
                      this._listFXItem[n.index].push(o),
                      o.playAnimation(c, function () {
                        n.isMe &&
                          l.instance.emit(
                            r.EFFECT_LAYER.ADD_ANIM_TO_QUEUE_ITEM_EVENT,
                            "ITEM_EVENT",
                            t
                          );
                      }),
                      n.isMe)
                    ) {
                      var _,
                        d = t.CountType1,
                        p = t.CountType2;
                      void 0 !== d ? (_ = d) : void 0 !== p && (_ = p),
                        h.instance.updateCurrentHammerInRoom(_);
                    }
                  }
                }),
                (i.playAnimTray = function (t) {
                  var e = f.instance.getPlayerByDeskStation(t.DeskStation);
                  f.instance
                    .getEventTrayByDeskStation(t.DeskStation)
                    .updateQuantity(t, function () {
                      e.isMe &&
                        l.instance.emit(r.EFFECT_LAYER.CHECK_QUEUE_ITEM_EVENT);
                    });
                }),
                (i.playEffectEventWin = function (t) {
                  l.instance.emit(
                    _.CUT_SCENE.SHOW_CUT_SCENE,
                    this.cutSceneJPEventPrefab,
                    t
                  );
                }),
                (i.addAnimToQueueItemEvent = function (t, e) {
                  var n = { name: t, dataInfo: e };
                  0 != this._queueItemEvent.length ||
                  this._playingQueueItemEvent
                    ? this._queueItemEvent.push(n)
                    : this.playQueueItemEvent(n);
                }),
                (i.checkQueueItemEvent = function () {
                  if (this._queueItemEvent.length > 0) {
                    var t = this._queueItemEvent.shift();
                    this.playQueueItemEvent(t);
                  } else this._playingQueueItemEvent = !1;
                }),
                (i.playQueueItemEvent = function (t) {
                  switch (((this._playingQueueItemEvent = !0), t.name)) {
                    case "ITEM_EVENT":
                      l.instance.emit(
                        r.EFFECT_LAYER.PLAY_EFFECT_EVENT_TRAY,
                        t.dataInfo
                      );
                  }
                }),
                (i.resetOnExit = function () {
                  t.prototype.resetOnExit.call(this),
                    (this._queueItemEvent.length = 0),
                    (this._playingQueueItemEvent = !1);
                }),
                n
              );
            })(o))
          ) || d
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EffectLayer1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEffectLayer.ts",
    "./gfBaseEvents.ts",
    "./gfPoolManager.ts",
    "./gfUtilities.ts",
  ],
  function (t) {
    "use strict";
    var e, n, c, f, i, o, s;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (c = t._decorator);
        },
        function (t) {
          f = t.gfEffectLayer;
        },
        function (t) {
          i = t.default;
        },
        function (t) {
          o = t.default;
        },
        function (t) {
          s = t.registerEvent;
        },
      ],
      execute: function () {
        var r;
        n._RF.push({}, "2bf5cHTBslGcakoYCJ5ngto", "EffectLayer1998", void 0);
        var a = c.ccclass;
        t(
          "EffectLayer1998",
          a("EffectLayer1998")(
            (r = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              e(n, t);
              var c = n.prototype;
              return (
                (c.initEvents = function () {
                  t.prototype.initEvents.call(this),
                    s(
                      i.EFFECT_LAYER.LUCKY_EFFECT_FISH,
                      this.playLuckyEffect,
                      this
                    ),
                    s(
                      i.EFFECT_LAYER.PLAY_LUCKY_EFFECT_DONE,
                      this.onPlayLuckyEffectDone,
                      this
                    );
                }),
                (c.onPlayLuckyEffectDone = function (t) {
                  this.playRewardEffect(t);
                }),
                (c.playLuckyEffect = function (t) {
                  var e = o.instance.getLuckyEffectWithData(t);
                  e &&
                    (e.node.setParent(this.node),
                    (e.node.worldPosition = t.fishPos));
                }),
                n
              );
            })(f))
          ) || r
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EffectLockFish1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfEffectLockFish.ts"],
  function (t) {
    "use strict";
    var c, e, o, s;
    return {
      setters: [
        function (t) {
          c = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          s = t.gfEffectLockFish;
        },
      ],
      execute: function () {
        var i;
        e._RF.push({}, "216b819ly1B2b0QA+jnbCe5", "EffectLockFish1998", void 0);
        var f = o.ccclass;
        o.property,
          t(
            "EffectLockFish1998",
            f("EffectLockFish1998")(
              (i = (function (t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                return (
                  c(e, t),
                  (e.prototype.update = function () {
                    t.prototype.update.call(this), (this._canPlayEffect = !1);
                  }),
                  e
                );
              })(s))
            ) || i
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EventButton1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfEventButton.ts"],
  function (t) {
    "use strict";
    var n, e, o, u;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          u = t.gfEventButton;
        },
      ],
      execute: function () {
        var r;
        e._RF.push({}, "c8652x+5NFKbaltW1EQjtQZ", "EventButton1998", void 0);
        var c = o.ccclass;
        o.property,
          t(
            "EventButton1998",
            c("EventButton1998")(
              (r = (function (t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                return n(e, t), e;
              })(u))
            ) || r
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EventCellHistory1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfBaseCellHistory.ts",
    "./gfUtilities.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, r, o, s, a, l, u, p, c, m, f, y;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (s = t._decorator),
            (a = t.Node),
            (l = t.SpriteFrame),
            (u = t.Label),
            (p = t.Sprite);
        },
        function (t) {
          c = t.GfBaseCellHistory;
        },
        function (t) {
          (m = t.formatTimeStamp), (f = t.formatUserName);
        },
        function (t) {
          y = t.formatMoney;
        },
      ],
      execute: function () {
        var g, h, b, C, v, d, S, w, H;
        o._RF.push(
          {},
          "31a37k8auFAWpWL8W4K5dkB",
          "EventCellHistory1998",
          void 0
        );
        var D = s.ccclass,
          T = s.property;
        t(
          "EventCellHistory1998",
          ((g = D("EventCellHistory1998")),
          (h = T(a)),
          (b = T(a)),
          (C = T([l])),
          g(
            ((S = e(
              (d = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "roomType", S, r(e)),
                    n(e, "amount", w, r(e)),
                    n(e, "listSprite", H, r(e)),
                    e
                  );
                }
                return (
                  i(e, t),
                  (e.prototype.updateData = function (t) {
                    t &&
                      ((this.time.getComponent(u).string = m(
                        parseInt(t.time),
                        "#DD#/#MM#\n#hhhh#:#mm#:#ss#"
                      )),
                      (this.account.getComponent(u).string = f(t.dn)),
                      (this.amount.getComponent(u).string = t.wCount),
                      (this.roomType.getComponent(p).spriteFrame =
                        "normal" === t.tbT
                          ? this.listSprite[0]
                          : this.listSprite[1]),
                      (this.winAmount.getComponent(u).string = y(t.wAmt)));
                  }),
                  e
                );
              })(c)).prototype,
              "roomType",
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
            (w = e(d.prototype, "amount", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = e(d.prototype, "listSprite", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (v = d))
          ) || v)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EventController1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEventController.ts",
    "./ReferenceManager1998.ts",
    "./DataStore1998.ts",
    "./Config1998.ts",
    "./gfEventEmitter.ts",
    "./EventsCode1998.ts",
    "./gfBaseEvents.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, a, r, o, s, m, u, E;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose), (n = t.assertThisInitialized);
        },
        function (t) {
          i = t.cclegacy;
        },
        function (t) {
          a = t.gfEventController;
        },
        function (t) {
          r = t.default;
        },
        function (t) {
          o = t.default;
        },
        function (t) {
          s = t.default;
        },
        function (t) {
          m = t.default;
        },
        function (t) {
          u = t.default;
        },
        function (t) {
          E = t.default;
        },
      ],
      execute: function () {
        i._RF.push(
          {},
          "49ed8ke/rBNmLduk8V1GebF",
          "EventController1998",
          void 0
        );
        t(
          "default",
          (function (t) {
            function i() {
              var e;
              return (
                ((e = t.call(this) || this).CONFIG_EVENT = void 0),
                (e._currentHammerInRoom = void 0),
                (e._miniGameMatrix = void 0),
                (e._rewardKeyMap = void 0),
                (e._hammerCount = void 0),
                (i.instance = n(e)),
                (e.CONFIG_EVENT = {
                  MODE: {
                    PLAYING_VIP: "PLAYING_VIP",
                    PLAYING_NORMAL: "PLAYING_NORMAL",
                    CHOOSE_HAMMER: "CHOOSE_HAMMER",
                  },
                  BOX_VALUE: { X2_REWARD: 2, X2_REWARD_INDEX: 13 },
                  BIG_WIN_RATIO: { WIN_NORMAL: 3e5, WIN_VIP: 2e6 },
                  CONFIG_BOX: {
                    SMALL: [1, 2, 3, 4, 5],
                    BIG: [6, 7, 8, 9],
                    MEGA: [10, 11, 12],
                    X2: [13],
                    FAIL: [14],
                    NORMAL: [0],
                  },
                }),
                (e._currentHammerInRoom = 0),
                e.setHammerCount(0, 0),
                e
              );
            }
            e(i, t);
            var a = i.prototype;
            return (
              (a.updateListPlayer = function (t) {
                if (
                  (m.instance.emit(E.CUT_SCENE.HIDE_ALL_CUT_SCENE),
                  this.isEventPlaying())
                )
                  for (var e = 0; e < t.length; e++) {
                    var n = t[e],
                      i = r.instance.getEventTrayByDeskStation(n.DeskStation),
                      a = o.instance.getSelfDeskStation();
                    if (i && n.EventDetail)
                      if (a === n.DeskStation) {
                        i.updateTray(n.EventDetail);
                        var s = n.EventDetail,
                          u = s.CountType1,
                          h = s.CountType2,
                          c = s.arr1,
                          _ = s.arr2;
                        this.setHammerCount(u, h), this.setMiniGameMatrix(c, _);
                      } else i.hide();
                  }
              }),
              (a.getConfigBigWinRatioByType = function (t) {
                if (m && m.instance) {
                  var e = s.instance.RoomKind.VIP,
                    n = this.CONFIG_EVENT.BIG_WIN_RATIO,
                    i = n.WIN_NORMAL,
                    a = n.WIN_VIP;
                  return t === e ? a : i;
                }
              }),
              (a.getConfigModeName = function () {
                return this.CONFIG_EVENT.MODE;
              }),
              (a.checkBoxType = function (t, e) {
                var n = this.CONFIG_EVENT.CONFIG_BOX,
                  i = n.SMALL,
                  a = n.BIG,
                  r = n.MEGA,
                  o = n.X2,
                  s = n.NORMAL,
                  m = n.FAIL;
                return (
                  ("Small" === e && i.indexOf(+t) > -1) ||
                  ("Big" === e && a.indexOf(+t) > -1) ||
                  ("Mega" === e && r.indexOf(+t) > -1) ||
                  ("X2" === e && o.indexOf(+t) > -1) ||
                  ("NORMAL" === e && s.indexOf(+t) > -1) ||
                  ("FAIL" === e && m.indexOf(+t) > -1)
                );
              }),
              (a.getConfigBoxValue = function () {
                return this.CONFIG_EVENT.BOX_VALUE;
              }),
              (a.getCurrentMode = function () {
                var t = this.CONFIG_EVENT.MODE,
                  e = t.PLAYING_VIP,
                  n = t.PLAYING_NORMAL,
                  i = t.CHOOSE_HAMMER,
                  a = s.instance.RoomKind,
                  r = a.VIP,
                  o = a.Normal;
                return this._miniGameMatrix
                  ? this._miniGameMatrix[r].length > 0
                    ? e
                    : this._miniGameMatrix[o].length > 0
                    ? n
                    : i
                  : null;
              }),
              (a.setMiniGameMatrix = function (t, e) {
                var n,
                  i = s.instance.RoomKind,
                  a = i.VIP,
                  r = i.Normal;
                this._miniGameMatrix = (((n = {})[r] = t), (n[a] = e), n);
              }),
              (a.setMiniGameMatrixByType = function (t, e) {
                this._miniGameMatrix[t] = e;
              }),
              (a.getMiniGameMatrixByType = function (t) {
                return this._miniGameMatrix[t];
              }),
              (a.setRewardKeyMap = function (t, e) {
                var n,
                  i = s.instance.RoomKind,
                  a = i.VIP,
                  r = i.Normal;
                this._rewardKeyMap = (((n = {})[r] = t), (n[a] = e), n);
              }),
              (a.getRewardKeyMapByType = function (t) {
                return this._rewardKeyMap[t];
              }),
              (a.onPlaying = function () {
                if (
                  (m.instance.emit(E.EVENT.EVENT_PLAYING, this.eventData),
                  this.eventData && this.eventData.EventDetail)
                ) {
                  var t = this.eventData.EventDetail,
                    e = t.CountType1,
                    n = t.CountType2,
                    i = t.arr1,
                    a = t.arr2;
                  this.setHammerCount(e, n), this.setMiniGameMatrix(i, a);
                }
              }),
              (a.onEnd = function () {
                if (
                  (m.instance.emit(E.EVENT.EVENT_END, this.eventData),
                  this.eventData && this.eventData.EventDetail)
                ) {
                  var t = this.eventData.EventDetail,
                    e = t.arr1,
                    n = t.arr2;
                  this.setHammerCount(0, 0), this.setMiniGameMatrix(e, n);
                }
              }),
              (a.setHammerCount = function (t, e) {
                var n;
                (null === t && void 0 === t) ||
                  (null === e && void 0 === e) ||
                  ((this._hammerCount =
                    (((n = {})[s.instance.RoomKind.Normal] = t || 0),
                    (n[s.instance.RoomKind.VIP] = e || 0),
                    n)),
                  m.instance.emit(
                    u.EVENT.UPDATE_HAMMER_COUNT,
                    this._hammerCount
                  ),
                  o.instance.getCurrentRoom() === s.instance.RoomKind.Normal
                    ? this.updateCurrentHammerInRoom(
                        this._hammerCount[s.instance.RoomKind.Normal]
                      )
                    : this.updateCurrentHammerInRoom(
                        this._hammerCount[s.instance.RoomKind.VIP]
                      ));
              }),
              (a.getHammerCount = function () {
                return this._hammerCount;
              }),
              (a.updateHammerCount = function (t, e) {
                void 0 === e && (e = 0),
                  (this._hammerCount[t] = this._hammerCount[t] + e),
                  m.instance.emit(
                    u.EVENT.UPDATE_HAMMER_COUNT,
                    this._hammerCount
                  ),
                  t === o.instance.getCurrentRoom() &&
                    this.updateCurrentHammerInRoom(this._hammerCount[t]);
              }),
              (a.updateCurrentHammerInRoom = function (t) {
                this._currentHammerInRoom = t;
              }),
              (a.isHaveHammerCount = function () {
                if (
                  this.isEventPlaying() &&
                  this._hammerCount &&
                  (this._hammerCount[s.instance.RoomKind.Normal] > 0 ||
                    this._hammerCount[s.instance.RoomKind.VIP] > 0)
                )
                  return !0;
                var t = o.instance.getSelfDeskStation(),
                  e = r.instance.getEventTrayByDeskStation(t);
                return (
                  !!(this.isEventPlaying() && e && e.isMergeHammer()) ||
                  !!(this.isEventPlaying() && this._currentHammerInRoom > 0)
                );
              }),
              i
            );
          })(a)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EventHistory1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfBaseHistory.ts",
    "./gfActionHelper.ts",
    "./gfUtilities.ts",
    "./gfBaseCellHistory.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, a, s, r, c, l, u;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (n = t._decorator), (o = t.sys), (a = t.Animation);
        },
        function (t) {
          s = t.GfBaseHistory;
        },
        function (t) {
          r = t.v3f;
        },
        function (t) {
          c = t.checkTablet;
        },
        function (t) {
          l = t.GfBaseCellHistory;
        },
        function (t) {
          u = t.setOpacity;
        },
      ],
      execute: function () {
        var f;
        i._RF.push({}, "dc078YtazVJU6VLd7QgbZ2F", "EventHistory1998", void 0);
        var p = n.ccclass;
        t(
          "default",
          p("EventHistory1998")(
            (f = (function (t) {
              function i() {
                return t.apply(this, arguments) || this;
              }
              e(i, t);
              var n = i.prototype;
              return (
                (n.openPanel = function (e) {
                  this.clearTableData(), t.prototype.openPanel.call(this, e);
                  var i = 1;
                  (c() || o.platform === o.Platform.DESKTOP_BROWSER) &&
                    (i = 0.7),
                    (this.loading.scale = r(i));
                }),
                (n.playLoading = function () {
                  (this.noHistoryText.active = !1), (this.loading.active = !0);
                  var t = this.loading.getComponent(a);
                  t.play("WaittingAnim1998"),
                    (t.getState("WaittingAnim1998").wrapMode = 2);
                }),
                (n.stopLoading = function () {
                  (this.loading.active = !1),
                    this.loading.getComponent(a).stop();
                }),
                (n.requestDataPage = function (t, e, i, n) {
                  var o = { from: (t - 1) * e, size: e };
                  this.errorMessage && (this.errorMessage.active = !1),
                    this.requestHistory(o, i, n);
                }),
                (n.updateTableData = function (t) {
                  this.table.children.forEach(function (e, i) {
                    i < t.length
                      ? (e.getComponent(l).updateData(t[i]),
                        (e.active = !0),
                        u(e, 255))
                      : (e.active = !1);
                  });
                }),
                i
              );
            })(s))
          ) || f
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EventItemEffect1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEventItemEffect.ts",
    "./gfEventEmitter.ts",
    "./Config1998.ts",
    "./DataStore1998.ts",
    "./utils2.ts",
    "./EventsCode1998.ts",
    "./gfActionHelper.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, a, r, o, c, s, l, u, f, p, m, d, S, v, y, h, E, g, b, I, R, D;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (o = t._decorator),
            (c = t.SpriteFrame),
            (s = t.Sprite),
            (l = t.sp),
            (u = t.tween);
        },
        function (t) {
          f = t.gfEventItemEffect;
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          m = t.default;
        },
        function (t) {
          d = t.default;
        },
        function (t) {
          (S = t.getRandomInt), (v = t.setOpacity);
        },
        function (t) {
          y = t.default;
        },
        function (t) {
          (h = t.call),
            (E = t.scaleTo),
            (g = t.fadeIn),
            (b = t.delay),
            (I = t.moveTo),
            (R = t.rotateBy),
            (D = t.fadeOut);
        },
      ],
      execute: function () {
        var F, P, T, _, k, A, w, x, z;
        r._RF.push(
          {},
          "1a05eEk1TtKo4RDcXxXRUrQ",
          "EventItemEffect1998",
          void 0
        );
        var C = o.ccclass,
          M = o.property;
        t(
          "default",
          ((F = C("EventItemEffect1998")),
          (P = M(c)),
          (T = M(s)),
          (_ = M(l.Skeleton)),
          F(
            ((w = e(
              (A = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, r = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    i(e, "listSprite", w, a(e)),
                    i(e, "mainSprite", x, a(e)),
                    i(e, "mainSpine", z, a(e)),
                    e
                  );
                }
                n(e, t);
                var r = e.prototype;
                return (
                  (r.playAnimation = function (e, n) {
                    t.prototype.playAnimation.call(this, e, n);
                    var i = e.startPos,
                      a = e.isMe,
                      r = i.x + 10 * S(-3, 3),
                      o = i.y + 10 * S(-3, 3);
                    this.node.setPosition(r, o, 1),
                      (this.mainSpine.node.active = a);
                    var c = a ? 0.8 : 0.6;
                    this.mainSprite.node.setScale(c, c, 1);
                  }),
                  (r.onStart = function (t) {
                    var e = this;
                    this.node.setScale(0, 0, 1),
                      (this.mainSprite.spriteFrame =
                        d.instance.getCurrentRoom() === m.instance.RoomKind.VIP
                          ? this.listSprite[1]
                          : this.listSprite[0]);
                    var n = t.endPos.x > 0 ? -1 : 1;
                    return (
                      v(this.node, 0),
                      u().sequence(
                        u().parallel(
                          h(function () {
                            p.instance.emit(y.SOUND.ITEM_EVENT_DROP);
                          }),
                          E(0.85, 1.2 * n, 1.2),
                          g(0.85),
                          u().sequence(
                            b(0),
                            h(function () {
                              e.mainSpine.setAnimation(0, "animation", !1);
                            })
                          )
                        ),
                        b(0.85)
                      )
                    );
                  }),
                  (r.onFly = function (t) {
                    var e = t.endPos,
                      n = t.isMe,
                      i = e.x > 0 ? -1 : 1,
                      a = n ? 1 : 0.5;
                    return u().sequence(
                      u().parallel(
                        I(0.75, e),
                        R(0.75, 310 * i),
                        E(0.75, a * i, a),
                        u().sequence(b(0.65), D(0.5))
                      ),
                      b(0.2)
                    );
                  }),
                  (r.onFinish = function (t) {
                    var e = this,
                      n = t.isMe,
                      i = t.data;
                    return u().call(function () {
                      e.callbackFunc &&
                        "function" == typeof e.callbackFunc &&
                        e.callbackFunc(),
                        n &&
                          i.itemCount &&
                          p.instance.emit(y.SOUND.PART_INSERTED, i.itemCount),
                        e.node.destroy();
                    });
                  }),
                  e
                );
              })(f)).prototype,
              "listSprite",
              [P],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (x = e(A.prototype, "mainSprite", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(A.prototype, "mainSpine", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = A))
          ) || k)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EventsCode1998.ts",
  ["cc", "./gfBaseEvents.ts", "./gfUtilities.ts"],
  function (_) {
    "use strict";
    var E, T, O;
    return {
      setters: [
        function (_) {
          E = _.cclegacy;
        },
        function (_) {
          T = _.default;
        },
        function (_) {
          O = _.mergeTwoObject;
        },
      ],
      execute: function () {
        E._RF.push({}, "29609zbJsFI/a24p2S5TQ2g", "EventsCode1998", void 0);
        var P = {
          EFFECT_LAYER: {
            SHOW_TOOLTIP_MESSAGE: "SHOW_TOOLTIP_MESSAGE",
            HIDE_TOOPTIP_MESSAGE: "HIDE_TOOPTIP_MESSAGE",
            PLAY_EFFECT_EVENT_TRAY: "PLAY_EFFECT_EVENT_TRAY",
            ADD_ANIM_TO_QUEUE_ITEM_EVENT: "ADD_ANIM_TO_QUEUE_ITEM_EVENT",
            CHECK_QUEUE_ITEM_EVENT: "CHECK_QUEUE_ITEM_EVENT",
          },
          SOUND: {
            ACTIVE_FREEZE: "ACTIVE_FREEZE",
            ADD_ITEM: "ADD_ITEM",
            ITEM_EVENT_DROP: "ITEM_EVENT_DROP",
            PART_INSERTED: "PART_INSERTED",
            HAMMER_CREATED: "HAMMER_CREATED",
            EVENT_POPUP_APPEAR: "EVENT_POPUP_APPEAR",
            NOTIFY_APPEAR: "NOTIFY_APPEAR",
            EVENT_TRAY_CLICK: "EVENT_TRAY_CLICK",
            EVENT_START_CLICK: "EVENT_START_CLICK",
            CLAY_POT_APPEAR: "CLAY_POT_APPEAR",
            STOP_CLAY_POT_APPEAR: "STOP_CLAY_POT_APPEAR",
            CLAY_POT_BROKEN: "CLAY_POT_BROKEN",
            CLAY_POT_AWARDED: "CLAY_POT_AWARDED",
            CLAY_POT_X2: "CLAY_POT_X2",
            CLAY_POT_MISSED: "CLAY_POT_MISSED",
            BIG_WIN_EVENT: "BIG_WIN_EVENT",
            STOP_BIG_WIN_EVENT: "STOP_BIG_WIN_EVENT",
            SHOW_BOX_VALUE: "SHOW_BOX_VALUE",
            SHOW_BOX_MISS: "SHOW_BOX_MISS",
            EVENT_COUNT_COIN: "EVENT_COUNT_COIN",
            EVENT_STOP_COUNT_COIN: "EVENT_STOP_COUNT_COIN",
            EVENT_COIN_FLY: "EVENT_COIN_FLY",
            STOP_EVENT_COIN_FLY: "STOP_EVENT_COIN_FLY",
            X2_BOARD: "X2_BOARD",
            EVENT_EXPLODE: "EVENT_EXPLODE",
            SET_ACTIVE_MUSIC_VOLUME: "SET_ACTIVE_MUSIC_VOLUME",
            EVENT_CLAY_POT_BREAK: "EVENT_CLAY_POT_BREAK",
            EVENT_STOP_CLAY_POT_BREAK: "EVENT_STOP_CLAY_POT_BREAK",
            EVENT_CLAY_POT_COUNT_UP: "EVENT_CLAY_POT_COUNT_UP",
            EVENT_STOP_CLAY_POT_COUNT_UP: "EVENT_STOP_CLAY_POT_COUNT_UP",
          },
          EVENT: {
            SEND_OPEN_BOX: "SEND_OPEN_BOX",
            OTHER_USER_WIN_MINI_GAME: "OTHER_USER_WIN_MINI_GAME",
            UPDATE_HAMMER_COUNT: "UPDATE_HAMMER_COUNT",
            ON_OPEN_BOX: "ON_OPEN_BOX",
            CHANGE_FROM_PLAYING_TO_PREPARE: "CHANGE_FROM_PLAYING_TO_PREPARE",
            ENABLE_POPUP_BUTTONS: "ENABLE_POPUP_BUTTONS",
          },
          POPUP: {
            HIDE_POPUP_EVENT: "HIDE_POPUP_EVENT",
            CHECK_SHOW_POPUP_EVENT: "CHECK_SHOW_POPUP_EVENT",
            SHOW_POPUP_EVENT_AFTER_WIN: "SHOW_POPUP_EVENT_AFTER_WIN",
          },
          CUT_SCENE: { SHOW_CUT_SCENE_ON_LOBBY: "SHOW_CUT_SCENE_ON_LOBBY" },
        };
        P = O(T, P);
        _("default", P);
        E._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EventTray1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEventTray.ts",
    "./Config1998.ts",
    "./EventsCode1998.ts",
    "./gfBaseEvents.ts",
    "./gfEventEmitter.ts",
    "./gfUtilities.ts",
    "./DataStore1998.ts",
    "./EventController1998.ts",
    "./gfActionHelper.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var e,
      i,
      n,
      a,
      o,
      r,
      s,
      l,
      c,
      u,
      h,
      m,
      p,
      d,
      f,
      A,
      v,
      b,
      y,
      g,
      N,
      T,
      C,
      P,
      S,
      B,
      E,
      _,
      R,
      I,
      H,
      F;
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
            (r = t._decorator),
            (s = t.ProgressBar),
            (l = t.sp),
            (c = t.Node),
            (u = t.Label),
            (h = t.Sprite),
            (m = t.SpriteFrame),
            (p = t.Material),
            (d = t.macro),
            (f = t.tween),
            (A = t.UITransform);
        },
        function (t) {
          v = t.gfEventTray;
        },
        function (t) {
          b = t.default;
        },
        function (t) {
          y = t.default;
        },
        function (t) {
          g = t.default;
        },
        function (t) {
          N = t.default;
        },
        function (t) {
          (T = t.registerEvent), (C = t.removeEvents);
        },
        function (t) {
          P = t.default;
        },
        function (t) {
          S = t.default;
        },
        function (t) {
          (B = t.stopAllActions),
            (E = t.fadeIn),
            (_ = t.fadeOut),
            (R = t.scaleTo),
            (I = t.delay),
            (H = t.call);
        },
        function (t) {
          F = t.setOpacity;
        },
      ],
      execute: function () {
        var U,
          w,
          z,
          D,
          M,
          V,
          O,
          G,
          L,
          k,
          K,
          Q,
          Y,
          q,
          W,
          x,
          j,
          X,
          J,
          Z,
          $,
          tt,
          et,
          it,
          nt,
          at,
          ot,
          rt,
          st,
          lt,
          ct;
        o._RF.push({}, "e2f82Q9B5lLto8sUQYbe4D5", "EventTray1998", void 0);
        var ut = r.ccclass,
          ht = r.property;
        t(
          "default",
          ((U = ut("EventTray1998")),
          (w = ht([s])),
          (z = ht([s])),
          (D = ht(l.Skeleton)),
          (M = ht(l.Skeleton)),
          (V = ht(l.Skeleton)),
          (O = ht(c)),
          (G = ht(c)),
          (L = ht(c)),
          (k = ht(c)),
          (K = ht(u)),
          (Q = ht([h])),
          (Y = ht(h)),
          (q = ht([m])),
          (W = ht(p)),
          U(
            ((X = e(
              (j = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "processBarGold", X, a(e)),
                    n(e, "processBarSilver", J, a(e)),
                    n(e, "mainSpineAnimation", Z, a(e)),
                    n(e, "hammerFireAnimation", $, a(e)),
                    n(e, "callToActionAnimation", tt, a(e)),
                    n(e, "hammerGold", et, a(e)),
                    n(e, "hammerSilver", it, a(e)),
                    n(e, "iconPause", nt, a(e)),
                    n(e, "numNode", at, a(e)),
                    n(e, "lblNumber", ot, a(e)),
                    n(e, "listSprite", rt, a(e)),
                    n(e, "trayNode", st, a(e)),
                    n(e, "listTray", lt, a(e)),
                    n(e, "materialItem", ct, a(e)),
                    (e.hammerContainer = null),
                    (e.processBar = void 0),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    (this.node.updateQuantity = this.updateQuantity.bind(this)),
                      this.hide(),
                      this.initEvent(),
                      this._setUpUIByRoomKind(),
                      this.handleHideNumNode(0);
                  }),
                  (o.resetProcessBar = function () {
                    for (var t = 0; t < this.processBar.length; t++)
                      this.processBar[t].node.processData = 0;
                  }),
                  (o.updateMaterial = function () {
                    for (var t = 0; t < this.listSprite.length; t++) {
                      var e = new p();
                      e.initialize({
                        effectAsset: this.materialItem.effectAsset,
                        defines: this.materialItem._defines,
                      }),
                        this.listSprite[t].setMaterial(e, 0);
                    }
                  }),
                  (o.onClick = function () {
                    N.instance.emit(y.SOUND.EVENT_TRAY_CLICK),
                      N.instance.emit(g.POPUP.SHOW_POPUP_EVENT_INFO);
                  }),
                  (o.initEvent = function () {
                    T(
                      y.EVENT.UPDATE_HAMMER_COUNT,
                      this._updateHammerCount,
                      this
                    );
                  }),
                  (o.updateTray = function (t) {
                    if (t && null !== t) {
                      (this.node.active = !0), this.resetData();
                      var e = t.CountType1,
                        i = t.CountType2,
                        n = t.itemCount,
                        a = this._isVipRoom() ? i : e;
                      this.updateTrayUI(a, n),
                        this.handleHideNumNode(a, !0),
                        this.schedule(
                          this.handleTransferNode,
                          8,
                          d.REPEAT_FOREVER
                        ),
                        this.schedule(
                          this.playCallToAction,
                          13,
                          d.REPEAT_FOREVER
                        );
                    } else this.node.active = !1;
                  }),
                  (o._updateHammerCount = function (t) {
                    this._updateValueCount(t[P.instance.getCurrentRoom()]);
                  }),
                  (o._updateValueCount = function (t) {
                    0 == t && this.handleTransferNode(),
                      (this.lblNumber.string = "X" + t);
                  }),
                  (o._setUpUIByRoomKind = function () {
                    (this.hammerGold.active = !1),
                      (this.hammerSilver.active = !1),
                      this._isVipRoom()
                        ? ((this.hammerContainer = this.hammerGold),
                          (this.processBar = this.processBarGold))
                        : ((this.hammerContainer = this.hammerSilver),
                          (this.processBar = this.processBarSilver)),
                      (this.hammerContainer.active = !0),
                      (this.trayNode.spriteFrame = this._isVipRoom()
                        ? this.listTray[1]
                        : this.listTray[0]),
                      this.resetProcessBar();
                  }),
                  (o.updateTrayUI = function (t, e) {
                    this._updateValueCount(t);
                    for (var i = 0; i < e; i++)
                      (this.processBar[i].progress = 0),
                        f(this.processBar[i]).to(0, { progress: 1 }).start();
                  }),
                  (o.updateQuantity = function (t, e) {
                    var i = this,
                      n = t.CountType1,
                      a = t.CountType2,
                      o = t.itemCount,
                      r = this._isVipRoom() ? a : n;
                    B(this.processBar[o - 1].node),
                      (this.hammerFireAnimation.node.active = !0),
                      B(this.hammerFireAnimation.node),
                      f(this.hammerFireAnimation.node).then(E(0.25)).start(),
                      this.hammerFireAnimation.setAnimation(0, "animation", !0),
                      f(this.processBar[o - 1])
                        .to(1, { progress: 1 })
                        .repeat(
                          4,
                          f()
                            .to(0.125, { opacity: 255 })
                            .call(function () {
                              i.processBar[o - 1].barSprite
                                .getMaterial(0)
                                .setProperty("brightness", 0.2);
                            })
                            .to(0.125, { opacity: 255 })
                            .call(function () {
                              i.processBar[o - 1].barSprite
                                .getMaterial(0)
                                .setProperty("brightness", 0);
                            })
                        )
                        .call(function () {
                          o - 1 == 4 && N.instance.emit(y.SOUND.HAMMER_CREATED);
                        })
                        .delay(0.1)
                        .call(function () {
                          F(i.hammerFireAnimation.node, 255),
                            B(i.hammerFireAnimation.node),
                            f(i.hammerFireAnimation.node)
                              .then(_(0.25))
                              .call(function () {
                                i.hammerFireAnimation.node.active = !1;
                              })
                              .start(),
                            o - 1 == 4
                              ? i._playAnim(r, e)
                              : e && "function" == typeof e && e();
                        })
                        .start();
                  }),
                  (o._playAnim = function (t, e) {
                    var i = this;
                    this.stopHandleTransferNode(),
                      this.stopCallToAction(),
                      this.handleHideNumNode(t, !1),
                      (this.mainSpineAnimation.node.active = !0),
                      this.mainSpineAnimation.setAnimation(0, "animation", !1);
                    var n = this.mainSpineAnimation.findAnimation("animation")
                      ? this.mainSpineAnimation.findAnimation("animation")
                          .duration
                      : 0;
                    f(this.node)
                      .delay(n / 2)
                      .call(function () {
                        f(i.hammerContainer)
                          .then(_(0.2))
                          .call(function () {
                            i._resetAnim(),
                              e && "function" == typeof e && e(),
                              S.instance.updateHammerCount(
                                P.instance.getCurrentRoom(),
                                1
                              );
                          })
                          .then(E(0.05))
                          .start();
                      })
                      .delay(n / 2)
                      .call(function () {
                        i.mainSpineAnimation.node.active = !1;
                      })
                      .start();
                  }),
                  (o._resetAnim = function () {
                    for (var t = 0; t < this.processBar.length; t++)
                      (this.processBar[t].processData = this.processBar[
                        t
                      ].progress =
                        0),
                        f(this.processBar[t]).to(0, { progress: 0 }).start();
                  }),
                  (o._isVipRoom = function () {
                    return (
                      parseInt(P.instance.getCurrentRoom()) ===
                      parseInt(b.instance.RoomKind.VIP)
                    );
                  }),
                  (o.hide = function () {
                    (this.node.active = !1),
                      this.stopHandleTransferNode(),
                      this.stopCallToAction(),
                      this.unschedule(this.handleTransferNode),
                      this.unschedule(this.playCallToAction),
                      this.reset();
                  }),
                  (o.getPositionEndPosItem = function (t) {
                    return t
                      ? this.node
                          .getComponent(A)
                          .convertToWorldSpaceAR(
                            this.node.getChildByName("item").position
                          )
                      : this.node
                          .getComponent(A)
                          .convertToWorldSpaceAR(
                            this.node.getChildByName("EndPosOtherUser").position
                          );
                  }),
                  (o.reset = function () {
                    t.prototype.reset.call(this),
                      (this.node.active = !1),
                      this.stopHandleTransferNode(),
                      this.stopCallToAction(),
                      this.unschedule(this.handleTransferNode),
                      this.unschedule(this.playCallToAction),
                      this.resetData();
                  }),
                  (o.resetData = function () {
                    this._setUpUIByRoomKind(),
                      this.updateMaterial(),
                      this._resetAnim(),
                      B(this.node),
                      B(this.hammerFireAnimation.node),
                      (this.hammerFireAnimation.node.active = !1),
                      F(this.hammerFireAnimation.node, 0),
                      (this.mainSpineAnimation.node.active = !1),
                      B(this.hammerContainer),
                      F(this.hammerContainer, 255);
                    for (var t = 0; t < this.processBar.length; t++)
                      B(this.processBar[t]),
                        f(this.processBar[t]).to(0, { progress: 0 }).start(),
                        (this.processBar[t].processData = this.processBar[
                          t
                        ].progress =
                          0),
                        F(this.processBar[t].node, 255),
                        this.listSprite[t]
                          .getMaterial(0)
                          .setProperty("brightness", 0);
                  }),
                  (o.onDestroy = function () {
                    C(this);
                  }),
                  (o.playCallToAction = function () {
                    var t = this;
                    this.stopCallToAction(),
                      (this.callToActionAnimation.node.active = !0);
                    var e =
                        0 ==
                        S.instance.getHammerCount()[
                          P.instance.getCurrentRoom()
                        ],
                      i = this.mainSpineAnimation.node.active;
                    e ||
                      i ||
                      this.iconPause.isPlaying ||
                      f(this.callToActionAnimation.node)
                        .parallel(
                          f().sequence(
                            f().parallel(
                              f().call(function () {
                                t.callToActionAnimation.setAnimation(
                                  0,
                                  "CTA",
                                  !0
                                );
                              }),
                              E(0.5),
                              R(0.5, 1, 1, "backIn")
                            ),
                            I(2),
                            f().parallel(_(0.5), R(0.5, 1.2, 1)),
                            H(function () {
                              t.callToActionAnimation.node.active = !1;
                            })
                          ),
                          f.call(function () {
                            f(t.lblNumber.node)
                              .sequence(R(0.25, 0.8), R(0.25, 1.1))
                              .repeat(6)
                              .start();
                          })
                        )
                        .start();
                  }),
                  (o.handleTransferNode = function () {
                    var t = this;
                    this.stopHandleTransferNode();
                    var e =
                        S.instance.getHammerCount()[
                          P.instance.getCurrentRoom()
                        ],
                      i = S.instance.getCurrentMode(),
                      n = 0 == e,
                      a = "PLAYING_NORMAL" == i || "PLAYING_VIP" == i,
                      o = this.mainSpineAnimation.node.active,
                      r = this.callToActionAnimation.node.active;
                    n && !a
                      ? this.handleHideNumNode(e, !1)
                      : n && a
                      ? ((this.lblNumber.node.active = !1),
                        (this.iconPause.active = !0),
                        (this.iconPause.isPlaying = !0),
                        this.numNode.setScale(-1, 1, 1),
                        this.handleHideNumNode(e, !1))
                      : !n && a
                      ? o ||
                        r ||
                        ((this.iconPause.isPlaying = !0),
                        f(this.numNode)
                          .sequence(
                            H(function () {
                              t.flipTransferNode(t.lblNumber.node, t.iconPause);
                            }),
                            I(2),
                            H(function () {
                              t.flipTransferNode(t.iconPause, t.lblNumber.node);
                            }),
                            I(0.5),
                            H(function () {
                              t.iconPause.isPlaying = !1;
                            })
                          )
                          .start())
                      : ((this.lblNumber.node.active = !0),
                        (this.iconPause.active = !1));
                  }),
                  (o.flipTransferNode = function (t, e) {
                    var i = this.numNode.getScale().x;
                    f(this.numNode)
                      .parallel(
                        R(0.25, 0, 1, "backIn"),
                        f().call(function () {
                          (t.active = !1), (e.active = !0);
                        }),
                        R(0.25, -1 * i, 1, "backOut")
                      )
                      .start();
                  }),
                  (o.stopHandleTransferNode = function () {
                    B(this.numNode),
                      this.numNode.setScale(1, 1, 1),
                      (this.lblNumber.node.active = !0),
                      (this.iconPause.active = !1),
                      (this.iconPause.isPlaying = !1);
                  }),
                  (o.stopCallToAction = function () {
                    B(this.callToActionAnimation.node),
                      B(this.lblNumber.node),
                      (this.callToActionAnimation.node.active = !1),
                      this.callToActionAnimation.node.setScale(0, 0, 0),
                      F(this.callToActionAnimation.node, 0),
                      this.lblNumber.node.setScale(1, 1, 1);
                  }),
                  (o.isMergeHammer = function () {
                    return (
                      this.node.active && this.mainSpineAnimation.node.active
                    );
                  }),
                  (o.handleHideNumNode = function (t, e) {
                    void 0 === e && (e = !1), (this.numNode.active = !0);
                    var i = this.mainSpineAnimation.node.active;
                    0 != t || this.iconPause.isPlaying || i
                      ? e
                        ? f(this.numNode).then(E(0)).start()
                        : f(this.numNode).then(E(0.5)).start()
                      : f(this.numNode).then(_(0)).start();
                  }),
                  e
                );
              })(v)).prototype,
              "processBarGold",
              [w],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (J = e(j.prototype, "processBarSilver", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Z = e(j.prototype, "mainSpineAnimation", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = e(j.prototype, "hammerFireAnimation", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tt = e(j.prototype, "callToActionAnimation", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (et = e(j.prototype, "hammerGold", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (it = e(j.prototype, "hammerSilver", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nt = e(j.prototype, "iconPause", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (at = e(j.prototype, "numNode", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ot = e(j.prototype, "lblNumber", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rt = e(j.prototype, "listSprite", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (st = e(j.prototype, "trayNode", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (lt = e(j.prototype, "listTray", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (ct = e(j.prototype, "materialItem", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = j))
          ) || x)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EventTrayController1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEventTrayController.ts",
    "./ReferenceManager1998.ts",
    "./DataStore1998.ts",
  ],
  function (t) {
    "use strict";
    var e, n, r, o, a, l;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (r = t._decorator);
        },
        function (t) {
          o = t.gfEventTrayController;
        },
        function (t) {
          a = t.default;
        },
        function (t) {
          l = t.default;
        },
      ],
      execute: function () {
        var i;
        n._RF.push(
          {},
          "a12a8ZndWNFRqMIIvxHyECZ",
          "EventTrayController1998",
          void 0
        );
        var s = r.ccclass;
        t(
          "default",
          s("EventTrayController1998")(
            (i = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              return (
                e(n, t),
                (n.prototype.onEventPlaying = function () {
                  this.unscheduleAllCallbacks(),
                    this.listEventTray.forEach(function (t, e) {
                      var n = a.instance.getPlayerByIndex(e);
                      if (n && n.isActive() && n.isMe) {
                        var r = l.instance.getSelfInfo();
                        t.reset(), t.updateTray(r.EventInfo.EventDetail);
                      } else t.hide();
                    });
                }),
                n
              );
            })(o))
          ) || i
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EventWinWheel1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEventWinWheel.ts",
    "./utils2.ts",
    "./EventController1998.ts",
    "./Config1998.ts",
    "./gfActionHelper.ts",
  ],
  function (i) {
    "use strict";
    var t, n, e, o, s, a, r, l, c, h, u, p, f, y, d, C, g;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (n = i.inheritsLoose),
            (e = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (s = i.cclegacy),
            (a = i._decorator),
            (r = i.sp),
            (l = i.Node),
            (c = i.sys),
            (h = i.tween);
        },
        function (i) {
          u = i.gfEventWinWheel;
        },
        function (i) {
          p = i.setOpacity;
        },
        function (i) {
          f = i.default;
        },
        function (i) {
          y = i.default;
        },
        function (i) {
          (d = i.stopAllActions), (C = i.fadeOut), (g = i.call);
        },
      ],
      execute: function () {
        var m, v, W, _, b, A, I, M, E;
        s._RF.push({}, "c44adunkQ1HjbmEwvFsIfey", "EventWinWheel1998", void 0);
        var w = "bigwin",
          O = "win",
          R = a.ccclass,
          P = a.property;
        i(
          "default",
          ((m = R("EventWinWheel1998")),
          (v = P(r.Skeleton)),
          (W = P(l)),
          (_ = P(l)),
          m(
            ((I = t(
              (A = (function (i) {
                function t() {
                  for (
                    var t, n = arguments.length, s = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (t = i.call.apply(i, [this].concat(s)) || this),
                    e(t, "spAnim", I, o(t)),
                    e(t, "CoinIsMe", M, o(t)),
                    e(t, "CoinOther", E, o(t)),
                    (t._bigWinRatio = 0),
                    (t._typeWin = ""),
                    (t._isMe = !1),
                    t
                  );
                }
                n(t, i);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      (this.CONFIG_TIME = { START: 0.4, IDLE: 5, END: 0.2 }),
                      (this.txtCoin = this.CoinIsMe);
                  }),
                  (s.playAnimation = function (t, n) {
                    (this._isMe = t.isMe),
                      i.prototype.playAnimation.call(this, t, n),
                      p(this.node, 255);
                    var e = this.node.position;
                    this._isMe && this.node.setPosition(e.x, -135),
                      1 == t.type
                        ? (this._bigWinRatio =
                            f.instance.getConfigBigWinRatioByType(
                              y.instance.RoomKind.Normal
                            ))
                        : (this._bigWinRatio =
                            f.instance.getConfigBigWinRatioByType(
                              y.instance.RoomKind.VIP
                            ));
                  }),
                  (s.animStart = function () {
                    (this.CoinIsMe.active = !1),
                      (this.CoinOther.active = !1),
                      this._isMe
                        ? (this.txtCoin = this.CoinIsMe)
                        : (this.txtCoin = this.CoinOther),
                      this.winValue > this._bigWinRatio
                        ? ((this._typeWin = w),
                          this.CoinIsMe.setPosition(2, -50),
                          this.CoinOther.setPosition(2, -45))
                        : ((this._typeWin = O),
                          this.CoinIsMe.setPosition(0, -49),
                          this.CoinOther.setPosition(0, -45)),
                      (this.txtCoin.active = !1),
                      this.spAnim.setSkin(this._typeWin),
                      c.isNative && this.spAnim.setToSetupPose(),
                      this.spAnim.setAnimation(0, "win_appear", !1),
                      this.spAnim.addAnimation(0, "win_loop", !0);
                  }),
                  (s.animEnd = function () {
                    var i = this;
                    d(this.node),
                      h(this.node)
                        .sequence(
                          C(this.CONFIG_TIME.END),
                          g(function () {
                            i.callbackFunc &&
                              "function" == typeof i.callbackFunc &&
                              i.callbackFunc(),
                              i.resetOnExit();
                          })
                        )
                        .start();
                  }),
                  t
                );
              })(u)).prototype,
              "spAnim",
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
            (M = t(A.prototype, "CoinIsMe", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = t(A.prototype, "CoinOther", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = A))
          ) || b)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FishGroup021998.ts",
  [
    "cc",
    "./gfBaseConfig.ts",
    "./gfFishGroupHelper.ts",
    "./gfFishGroupData.ts",
    "./gfFishMoveActions.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, o, a, c, r, s;
    return {
      setters: [
        function (e) {
          (t = e.cclegacy), (i = e._decorator), (n = e.v2);
        },
        function (e) {
          o = e.default;
        },
        function (e) {
          a = e.default;
        },
        function (e) {
          c = e.default;
        },
        function (e) {
          (r = e.FishMoveActions), (s = e.FISH_ACTION);
        },
      ],
      execute: function () {
        var p;
        t._RF.push({}, "2d58av5EP5E8KJMGilC5n4M", "FishGroup021998", void 0);
        var u = i.ccclass;
        i.property,
          e(
            "default",
            u("FishGroup021998")(
              (p = (function () {
                function e() {}
                return (
                  (e.createGroup2SmallFish = function (e) {
                    for (
                      var t = e.count,
                        i = e.moveUp,
                        p = 185,
                        u = c.isFlipped(),
                        h = o.instance.realSize.Width / t,
                        f = o.instance.AppSize.Height,
                        v = (i = u ? i : !i) ? f - p : p,
                        l = i ? -185 : f + p,
                        F = 0;
                      F < t;
                      ++F
                    ) {
                      var d = c.getNextFishData();
                      if (d) {
                        var m = u ? t - F : F,
                          g = 10 + o.instance.SceneBox.Left + m * h,
                          A = i
                            ? f + 100 * Math.random()
                            : 100 * Math.random() * -1;
                        (d.moveAction = new r(n(g, A), l > A ? 90 : -90)),
                          d.moveAction.appendAction(s.MoveTo, {
                            time: 2,
                            x: g,
                            y: v,
                          }),
                          d.moveAction.appendAction(s.Delay, { time: 40 }),
                          d.moveAction.appendAction(s.MoveTo, {
                            time: 4,
                            x: g,
                            y: l,
                          }),
                          a.createFishWithDelay(d);
                      }
                    }
                  }),
                  (e.createGroup2BigFish = function (e) {
                    for (
                      var t = e.count,
                        i = e.upperLine,
                        p = e.startX,
                        u = e.endX,
                        h = (i = c.isFlipped() ? !i : i)
                          ? 255
                          : o.instance.AppSize.Height - 255,
                        f = 0;
                      f < t;
                      ++f
                    ) {
                      var v = c.getNextFishData();
                      if (v) {
                        var l = 5 * f,
                          F = new r(n(p, h));
                        F.appendAction(s.Delay, { time: l }),
                          F.appendAction(s.MoveTo, { time: 17, x: u, y: h }),
                          (v.moveAction = F),
                          a.createFishWithDelay(v);
                      }
                    }
                  }),
                  (e.create = function () {
                    var e = o.instance.SceneBox.Left - 300,
                      t = o.instance.SceneBox.Right + 300;
                    this.createGroup2SmallFish({ count: 60, moveUp: !1 }),
                      this.createGroup2SmallFish({ count: 60, moveUp: !0 }),
                      this.createGroup2BigFish({
                        count: 7,
                        upperLine: !1,
                        startX: t,
                        endX: e,
                      }),
                      this.createGroup2BigFish({
                        count: 7,
                        upperLine: !0,
                        startX: e,
                        endX: t,
                      });
                  }),
                  e
                );
              })())
            ) || p
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FishGroup031998.ts",
  [
    "cc",
    "./gfBaseConfig.ts",
    "./gfFishGroupHelper.ts",
    "./gfFishGroupData.ts",
    "./gfFishMoveActions.ts",
  ],
  function (e) {
    "use strict";
    var i, t, o, s, r, c, a, u;
    return {
      setters: [
        function (e) {
          (i = e.cclegacy), (t = e._decorator), (o = e.v2);
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          r = e.default;
        },
        function (e) {
          c = e.default;
        },
        function (e) {
          (a = e.FishMoveActions), (u = e.FISH_ACTION);
        },
      ],
      execute: function () {
        var n;
        i._RF.push({}, "7e575gGqepKPK3nDhwqMNuo", "FishGroup031998", void 0);
        var h = t.ccclass;
        t.property,
          e(
            "default",
            h("FishGroup031998")(
              (n = (function () {
                function e() {}
                return (
                  (e.createCircleFishGroup = function (e) {
                    for (
                      var i = e.moveTime,
                        t = e.moveScale,
                        n = e.count,
                        h = e.startPos,
                        v = e.radius,
                        p = e.isMoveRight,
                        l =
                          (void 0 !== p && p ? c.flipCoord : -c.flipCoord) *
                          t *
                          (s.instance.AppSize.Width + 150),
                        m = 360 / n,
                        f = 0;
                      f < n;
                      ++f
                    ) {
                      var d = c.getNextFishData();
                      if (d) {
                        var F = o(
                          h.x +
                            Math.cos((f * m * Math.PI) / 180) * v * c.flipCoord,
                          h.y +
                            Math.sin((f * m * Math.PI) / 180) * v * c.flipCoord
                        );
                        (d.moveAction = new a(F)),
                          d.moveAction.appendAction(u.MoveBy, {
                            time: i,
                            x: l,
                            y: 0,
                          }),
                          r.createFishWithDelay(d);
                      }
                    }
                  }),
                  (e.create = function () {
                    var e = s.instance.AppSize.Height / 2,
                      i = -280,
                      t = s.instance.AppSize.Width - i;
                    if (c.isFlipped()) {
                      var r = [t, i];
                      (i = r[0]), (t = r[1]);
                    }
                    this.createCircleFishGroup({
                      moveTime: 47,
                      moveScale: 2,
                      count: 40,
                      startPos: o(t, e),
                      radius: 235,
                    }),
                      this.createCircleFishGroup({
                        moveTime: 47,
                        moveScale: 2,
                        count: 30,
                        startPos: o(t, e),
                        radius: 180,
                      }),
                      this.createCircleFishGroup({
                        moveTime: 47,
                        moveScale: 2,
                        count: 20,
                        startPos: o(t, e),
                        radius: 135,
                      }),
                      this.createCircleFishGroup({
                        moveTime: 47,
                        moveScale: 2,
                        count: 1,
                        startPos: o(t, e),
                        radius: 0,
                      }),
                      this.createCircleFishGroup({
                        moveTime: 47,
                        moveScale: 2,
                        count: 40,
                        startPos: o(i, e),
                        radius: 235,
                        isMoveRight: !0,
                      }),
                      this.createCircleFishGroup({
                        moveTime: 47,
                        moveScale: 2,
                        count: 30,
                        startPos: o(i, e),
                        radius: 180,
                        isMoveRight: !0,
                      }),
                      this.createCircleFishGroup({
                        moveTime: 47,
                        moveScale: 2,
                        count: 20,
                        startPos: o(i, e),
                        radius: 135,
                        isMoveRight: !0,
                      }),
                      this.createCircleFishGroup({
                        moveTime: 47,
                        moveScale: 2,
                        count: 1,
                        startPos: o(i, e),
                        radius: 0,
                        isMoveRight: !0,
                      });
                  }),
                  e
                );
              })())
            ) || n
          );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FishGroup041998.ts",
  [
    "cc",
    "./gfBaseConfig.ts",
    "./gfFishGroupHelper.ts",
    "./gfFishGroupData.ts",
    "./gfFishMoveActions.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, c, s, r, a;
    return {
      setters: [
        function (t) {
          (e = t.cclegacy), (i = t._decorator), (n = t.v2);
        },
        function (t) {
          o = t.default;
        },
        function (t) {
          c = t.default;
        },
        function (t) {
          s = t.default;
        },
        function (t) {
          (r = t.FishMoveActions), (a = t.FISH_ACTION);
        },
      ],
      execute: function () {
        var u;
        e._RF.push({}, "c2a82XzUcJAyrK+xXOE9C+7", "FishGroup041998", void 0);
        var p = i.ccclass;
        i.property,
          t(
            "default",
            p("FishGroup041998")(
              (u = (function () {
                function t() {}
                return (
                  (t.create = function () {
                    for (
                      var t = o.instance.AppSize.Width,
                        e = o.instance.AppSize.Height,
                        i = 150,
                        u = [n(-300, -150), n(t, e + i)],
                        p = [n(0, -150), n(t + 300, e + i)],
                        f = [n(t, -150), n(-300, e + i)],
                        v = [n(t + 300, -150), n(0, e + i)],
                        h = s.isFlipped() ? 1 : 0,
                        F = s.isFlipped() ? 0 : 1,
                        l = [
                          [u[h], u[F]],
                          [p[h], p[F]],
                          [f[h], f[F]],
                          [v[h], v[F]],
                          [p[F], p[h]],
                          [u[F], u[h]],
                          [v[F], v[h]],
                          [f[F], f[h]],
                        ],
                        d = 0;
                      d < 8;
                      d++
                    )
                      for (var A = 0; A < 8; ++A) {
                        var g = s.getNextFishData();
                        g &&
                          ((g.moveAction = new r(n(l[d][0].x, l[d][0].y))),
                          g.moveAction.appendAction(a.Delay, { time: 2.5 * A }),
                          g.moveAction.appendAction(a.MoveTo, {
                            time: 20,
                            x: l[d][1].x,
                            y: l[d][1].y,
                          }),
                          c.createFishWithDelay(g));
                      }
                  }),
                  t
                );
              })())
            ) || u
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FishGroup051998.ts",
  [
    "cc",
    "./gfBaseConfig.ts",
    "./gfFishGroupHelper.ts",
    "./gfFishGroupData.ts",
    "./gfFishMoveActions.ts",
  ],
  function (i) {
    "use strict";
    var c, t, e, a, s, n, r, l, o;
    return {
      setters: [
        function (i) {
          (c = i.cclegacy), (t = i._decorator), (e = i.v2), (a = i.misc);
        },
        function (i) {
          s = i.default;
        },
        function (i) {
          n = i.default;
        },
        function (i) {
          r = i.default;
        },
        function (i) {
          (l = i.FishMoveActions), (o = i.FISH_ACTION);
        },
      ],
      execute: function () {
        var h;
        c._RF.push({}, "b257axbGw5F2L4v/0ZmrUvK", "FishGroup051998", void 0);
        var p = t.ccclass;
        t.property,
          i(
            "default",
            p("FishGroup051998")(
              (h = (function () {
                function i() {}
                return (
                  (i.create = function () {
                    var i = s.instance.AppSize.Width / 2,
                      c = s.instance.AppSize.Height / 2,
                      t = 321.6 * r.flipCoord,
                      a = 360 * 0.67;
                    this.circleCallback(30, e(i - t, c), a, 16, 720),
                      this.circleCallback(30, e(i + t, c), a, 18, 810),
                      this.circleCallback(30, e(i - t, c), a - 34.5, 20, 900),
                      this.circleCallback(30, e(i + t, c), a - 36, 21, 945),
                      this.circleCallback(
                        18,
                        e(i - t, c),
                        a - 36 - 56,
                        22,
                        990
                      ),
                      this.circleCallback(
                        18,
                        e(i + t, c),
                        148.20000000000002,
                        22.66,
                        1020
                      ),
                      this.circleCallback(
                        8,
                        e(i - t, c),
                        83.70000000000002,
                        23.33,
                        1050
                      ),
                      this.circleCallback(
                        8,
                        e(i + t, c),
                        81.20000000000002,
                        24,
                        1080
                      ),
                      this.circleCallback(1, e(i - t, c), 0, 24.66, -90),
                      this.circleCallback(1, e(i + t, c), 0, 25.33, -90);
                  }),
                  (i.circleCallback = function (i, c, t, h, p) {
                    for (
                      var u = s.instance.AppSize,
                        f = 360 / i,
                        v = r.isFlipped() ? 180 : 0,
                        d = 0;
                      d < i;
                      ++d
                    ) {
                      var F = r.getNextFishData();
                      if (F) {
                        var C = ((d * f + v) * Math.PI) / 180,
                          k = c.x + Math.cos(C) * t,
                          b = c.y + Math.sin(C) * t,
                          g = r.timeSkipped - F.TimeFreeze;
                        (F.moveAction = new l(
                          e(k, b),
                          a.radiansToDegrees(Math.atan2(b - c.y, k - c.x)),
                          g
                        )),
                          F.moveAction.appendAction(o.CircleBy, {
                            time: h,
                            center: c,
                            radius: t,
                            angle: p,
                          }),
                          F.moveAction.appendAction(o.MoveByDistance, {
                            time: u.Width / 180,
                            distance: u.Width,
                          }),
                          (F.skipFlipY = !0),
                          n.createFishWithDelay(F);
                      }
                    }
                  }),
                  i
                );
              })())
            ) || h
          );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FishGroup17Extend1998.ts",
  [
    "cc",
    "./Config1998.ts",
    "./gfFishGroupHelper.ts",
    "./gfFishGroupData.ts",
    "./gfFishMoveActions.ts",
  ],
  function (e) {
    "use strict";
    var t, i, o, r, s, c, a, n;
    return {
      setters: [
        function (e) {
          (t = e.cclegacy), (i = e._decorator), (o = e.v2);
        },
        function (e) {
          r = e.default;
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          c = e.default;
        },
        function (e) {
          (a = e.FishMoveActions), (n = e.FISH_ACTION);
        },
      ],
      execute: function () {
        var u;
        t._RF.push(
          {},
          "8357c6mq7ZJAJ74gtJmRDH6",
          "FishGroup17Extend1998",
          void 0
        );
        var h = i.ccclass;
        i.property,
          e(
            "default",
            h("FishGroup17Extend1998")(
              (u = (function () {
                function e() {}
                return (
                  (e.create = function () {
                    var e = r.instance.AppSize.Height / 2,
                      t = -600,
                      i = 410,
                      s = 48,
                      a = r.instance.AppSize.Width - t;
                    if (c.isFlipped()) {
                      var n = [a, t];
                      (t = n[0]), (a = n[1]), (i = -i), (s = -s);
                    }
                    this.createCircleFishGroup({
                      moveTime: 61,
                      moveScale: 2,
                      count: 80,
                      startPos: o(a, e),
                      radius: 250,
                    }),
                      this.createCircleFishGroup({
                        moveTime: 61,
                        moveScale: 2,
                        count: 30,
                        startPos: o(a, e),
                        radius: 180,
                      }),
                      this.createCircleFishGroup({
                        moveTime: 61,
                        moveScale: 2,
                        count: 16,
                        startPos: o(a - i, e),
                        radius: 100,
                      }),
                      this.createCircleFishGroup({
                        moveTime: 61,
                        moveScale: 2,
                        count: 16,
                        startPos: o(a + i, e),
                        radius: 100,
                      }),
                      this.createCircleFishGroup({
                        moveTime: 61,
                        moveScale: 2,
                        count: 1,
                        startPos: o(a + s, e),
                        radius: 0,
                      });
                  }),
                  (e.createCircleFishGroup = function (e) {
                    for (
                      var t = e.moveTime,
                        i = e.moveScale,
                        u = e.count,
                        h = e.startPos,
                        p = e.radius,
                        v = -c.flipCoord * i * (r.instance.AppSize.Width + 150),
                        f = 360 / u,
                        l = 0;
                      l < u;
                      ++l
                    ) {
                      var m = c.getNextFishData();
                      if (m) {
                        var d = o(
                          h.x +
                            Math.cos((l * f * Math.PI) / 180) * p * c.flipCoord,
                          h.y +
                            Math.sin((l * f * Math.PI) / 180) * p * c.flipCoord
                        );
                        (m.moveAction = new a(d)),
                          m.moveAction.appendAction(n.MoveBy, {
                            time: t,
                            x: v,
                            y: 0,
                          }),
                          s.createFishWithDelay(m);
                      }
                    }
                  }),
                  e
                );
              })())
            ) || u
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FishGroupMgr1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfFishGroupHelper.ts",
    "./gfFishGroupMgr.ts",
    "./FishGroup17Extend1998.ts",
    "./FishGroup021998.ts",
    "./FishGroup031998.ts",
    "./FishGroup041998.ts",
    "./FishGroup051998.ts",
  ],
  function (e) {
    "use strict";
    var r, t, i, u, s, o, c, a, n, h, p;
    return {
      setters: [
        function (e) {
          r = e.inheritsLoose;
        },
        function (e) {
          (t = e.cclegacy), (i = e._decorator), (u = e.error);
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          o = e.default;
        },
        function (e) {
          c = e.default;
        },
        function (e) {
          a = e.default;
        },
        function (e) {
          n = e.default;
        },
        function (e) {
          h = e.default;
        },
        function (e) {
          p = e.default;
        },
      ],
      execute: function () {
        var f;
        t._RF.push({}, "65892UZcghGpblh/v9h5P+v", "FishGroupMgr1998", void 0);
        var F = i.ccclass;
        e(
          "FishGroupMgr1998",
          F("FishGroupMgr1998")(
            (f = (function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              r(t, e);
              var i = t.prototype;
              return (
                (i.createFishGroup = function (e) {
                  switch (
                    (s.initFishGroupData(e),
                    console.warn("createFishGroup", e.ParadeKind),
                    e.ParadeKind)
                  ) {
                    case 0:
                      this.createFishGroup1();
                      break;
                    case 1:
                      this.createFishGroup2();
                      break;
                    case 2:
                      this.createFishGroup3();
                      break;
                    case 3:
                      this.createFishGroup4();
                      break;
                    case 4:
                      this.createFishGroup5();
                      break;
                    default:
                      u("WRONG PARADE KIND: " + e.ParadeKind);
                  }
                }),
                (i.createFishGroup1 = function () {
                  c.create();
                }),
                (i.createFishGroup2 = function () {
                  a.create();
                }),
                (i.createFishGroup3 = function () {
                  n.create();
                }),
                (i.createFishGroup4 = function () {
                  h.create();
                }),
                (i.createFishGroup5 = function () {
                  p.create();
                }),
                t
              );
            })(o))
          ) || f
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FishManager1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfFishManager.ts",
    "./gfUtilities.ts",
    "./DataStore1998.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, s, o, r, c;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose), (i = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy), (s = t.Intersection2D);
        },
        function (t) {
          o = t.default;
        },
        function (t) {
          r = t.removeEvents;
        },
        function (t) {
          c = t.default;
        },
      ],
      execute: function () {
        n._RF.push({}, "ce3b8x/p7VJUoc3vcUfCkmZ", "FishManager1998", void 0),
          (t(
            "default",
            (function (t) {
              function n() {
                var e;
                return (e = t.call(this) || this), (n.instance = i(e)), e;
              }
              e(n, t);
              var o = n.prototype;
              return (
                (o.GetFishByPoint = function (t) {
                  for (
                    var e = null, i = c.instance.getSelfInfo(), n = 0;
                    n < this.listFish.length;
                    ++n
                  ) {
                    var o = this.listFish[n];
                    if (
                      o &&
                      o.isAvailable() &&
                      (!i.LockFish ||
                        (i.LockFish && i.LockFish.getId() !== o.getId()))
                    ) {
                      var r = o.getListBox();
                      if (r)
                        for (var a = 0; a < r.length; ++a)
                          r[a].worldPoints &&
                            s.pointInPolygon(t, r[a].worldPoints) &&
                            (!e || (e && o.getZIndex() > e.getZIndex())) &&
                            (e = o);
                    }
                  }
                  return e;
                }),
                (o.destroy = function () {
                  r(this), t.prototype.destroy.call(this);
                }),
                n
              );
            })(o)
          ).instance = null),
          n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreezeConfig1998.ts",
  ["cc", "./gfNodePoolConfig.ts", "./gfFreezeConfig.ts"],
  function (e) {
    "use strict";
    var n, t, i;
    return {
      setters: [
        function (e) {
          n = e.cclegacy;
        },
        function (e) {
          t = e.default;
        },
        function (e) {
          i = e.default;
        },
      ],
      execute: function () {
        n._RF.push({}, "e0faauFiaJJ2L9qRJXJuJlu", "FreezeConfig1998", void 0);
        var o = globalThis._;
        e("default", function () {
          var e;
          i();
          var n = {
            NET_FX_CONFIG:
              ((e = {}),
              (e[2] = { MyUser: "NoBang", OtherUser: "NoBang", zIndex: 91 }),
              e),
          };
          o.merge(t.instance, t.instance, n);
        });
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreezeGun1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfFreezeGun.ts",
    "./gfPlayer.ts",
  ],
  function (e) {
    "use strict";
    var t, n, r, o, s, i;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (n = e.cclegacy), (r = e._decorator), (o = e.v3);
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          i = e.gfPlayer;
        },
      ],
      execute: function () {
        var u;
        n._RF.push({}, "64e6f8mDsxAhrzkJy1RYki0", "FreezeGun1998", void 0);
        var c = r.ccclass;
        r.property,
          e(
            "FreezeGun1998",
            c("FreezeGun1998")(
              (u = (function (e) {
                function n() {
                  return e.apply(this, arguments) || this;
                }
                return (
                  t(n, e),
                  (n.prototype.setupFreezeGun = function () {
                    var e = o(0, 100, 0);
                    this.node.parent.getPosition().y > 0 && (e = o(0, -100, 0)),
                      this.node.setPosition(e);
                    var t = this.node.parent.getComponent(i).gun;
                    (this.freezeGunFx.node.parent = t),
                      this.freezeGunFx.node.setPosition(o(150, 0, 0));
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
  "chunks:///_virtual/FreezeManager1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfFreezeManager.ts",
    "./FreezeConfig1998.ts",
    "./gfBaseEvents.ts",
    "./gfEventEmitter.ts",
  ],
  function (e) {
    "use strict";
    var t, n, r, s, a, i, u;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (n = e.cclegacy), (r = e._decorator);
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          a = e.default;
        },
        function (e) {
          i = e.default;
        },
        function (e) {
          u = e.default;
        },
      ],
      execute: function () {
        var o;
        n._RF.push({}, "877f0ap+o9Eb7YlOMBs2GgO", "FreezeManager1998", void 0);
        var c = r.ccclass;
        r.property,
          e(
            "FreezeManager1998",
            c("FreezeManager1998")(
              (o = (function (e) {
                function n() {
                  return e.apply(this, arguments) || this;
                }
                return (
                  t(n, e),
                  (n.prototype._mergeData = function () {
                    a();
                    var e = this.splitSound(),
                      t = e.listMusic,
                      n = e.listSfx;
                    u.instance.emit(i.SOUND.ASSIGN_SOUND_MODULE, t, n);
                  }),
                  n
                );
              })(s))
            ) || o
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreezeSkill1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfFreezeSkill.ts"],
  function (e) {
    "use strict";
    var t, r, i, n, a, o, l, c, s;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy), (o = e._decorator), (l = e.Node), (c = e.Sprite);
        },
        function (e) {
          s = e.gfFreezeSkill;
        },
      ],
      execute: function () {
        var u, p, f, g, h;
        a._RF.push({}, "bb140DE+AdD8rmYv/1B+V/l", "FreezeSkill1998", void 0);
        var z = o.ccclass,
          y = o.property;
        e(
          "FreezeSkill1998",
          ((u = z("FreezeSkill1998")),
          (p = y(l)),
          u(
            ((h = t(
              (g = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, a = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    i(t, "imageGray", h, n(t)),
                    t
                  );
                }
                r(t, e);
                var a = t.prototype;
                return (
                  (a.updateCooldownProgress = function () {
                    this.imageGray.active = !0;
                  }),
                  (a.updateFreezeButtonStatus = function () {
                    this.imageGray.active = !this.btnFreeze.interactable;
                  }),
                  (a.updateFreezeItem = function () {
                    e.prototype.updateFreezeItem.call(this),
                      (this.imageGray.active = !this.btnFreeze.interactable);
                  }),
                  (a.unlockFreezeSkill = function () {
                    e.prototype.unlockFreezeSkill.call(this),
                      (this.imageGray.active = !this.btnFreeze.interactable);
                  }),
                  (a.lockButton = function () {
                    e.prototype.lockButton.call(this),
                      (this.imageGray.active = !0);
                  }),
                  (a.getProgressValue = function () {
                    return 1 - this.frzCDPrgss.getComponent(c).fillRange;
                  }),
                  (a.setProgressValue = function (e) {
                    this.frzCDPrgss.getComponent(c).fillRange = 1 - e;
                  }),
                  (a.updateFreezeButton = function (t) {
                    e.prototype.updateFreezeButton.call(this, t),
                      (this.imageGray.active = !this.btnFreeze.interactable);
                  }),
                  t
                );
              })(s)).prototype,
              "imageGray",
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
            (f = g))
          ) || f)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GeneralInitialization1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEventEmitter.ts",
    "./Config1998.ts",
    "./DataStore1998.ts",
    "./gfMainFSM.ts",
    "./MainController1998.ts",
    "./ReferenceManager1998.ts",
    "./gfLocalize.ts",
    "./FishManager1998.ts",
    "./PoolManager1998.ts",
    "./NodePoolConfig1998.ts",
    "./gfAutoFireController.ts",
    "./NetworkParser1998.ts",
    "./EventController1998.ts",
    "./gfCurrencyCalculator.ts",
  ],
  function (e) {
    "use strict";
    var n, t, i, o, a, r, s, l, c, u, f, b, p, g, d, w, m, z, P, h, y, j, v;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (r = e._decorator),
            (s = e.JsonAsset),
            (l = e.Prefab),
            (c = e.Component);
        },
        function (e) {
          u = e.default;
        },
        function (e) {
          f = e.default;
        },
        function (e) {
          b = e.default;
        },
        function (e) {
          p = e.default;
        },
        function (e) {
          g = e.default;
        },
        function (e) {
          d = e.default;
        },
        function (e) {
          w = e.default;
        },
        function (e) {
          m = e.default;
        },
        function (e) {
          z = e.default;
        },
        function (e) {
          P = e.default;
        },
        function (e) {
          h = e.gfAutoFireController;
        },
        function (e) {
          y = e.default;
        },
        function (e) {
          j = e.default;
        },
        function (e) {
          v = e.default;
        },
      ],
      execute: function () {
        var C, G, I, L, A, M, D, F, S, V, N;
        a._RF.push(
          {},
          "ceef4iHQalD3pv2CeIYBIZY",
          "GeneralInitialization1998",
          void 0
        );
        var _ = r.ccclass,
          k = r.property;
        e(
          "GeneralInitialization1998",
          ((C = _("GeneralInitialization1998")),
          (G = k(s)),
          (I = k(s)),
          (L = k(l)),
          (A = k(l)),
          C(
            ((F = n(
              (D = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, a = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (n = e.call.apply(e, [this].concat(a)) || this),
                    i(n, "jsonGameVersion", F, o(n)),
                    i(n, "jsonLocalize", S, o(n)),
                    i(n, "gameObjectPrefabs", V, o(n)),
                    i(n, "nodePoolAssetPrefab", N, o(n)),
                    n
                  );
                }
                t(n, e);
                var a = n.prototype;
                return (
                  (a.onLoad = function () {
                    this.initInstances(),
                      this.jsonGameVersion &&
                        (f.instance.GameVersion =
                          this.jsonGameVersion.json.version);
                  }),
                  (a.initInstances = function () {
                    new w(),
                      w.instance.initLocalizeConfig(this.jsonLocalize.json),
                      new u(),
                      new y(),
                      f.instance || new f(),
                      new b(),
                      new d(),
                      new p(),
                      new g(),
                      new m(),
                      new z(this.gameObjectPrefabs),
                      new P(this.nodePoolAssetPrefab),
                      new h(),
                      new j(),
                      new v();
                  }),
                  (a.loginGame = function () {
                    g.instance.initToken(),
                      b.instance.setDataStore({
                        currentSceneName: f.instance.SceneName.Lobby,
                      });
                  }),
                  n
                );
              })(c)).prototype,
              "jsonGameVersion",
              [G],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (S = n(D.prototype, "jsonLocalize", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = n(D.prototype, "gameObjectPrefabs", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (N = n(D.prototype, "nodePoolAssetPrefab", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (M = D))
          ) || M)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/gfButtonFreeze.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfBaseEvents.ts",
    "./gfEventEmitter.ts",
  ],
  function (e) {
    "use strict";
    var t, n, r, i, o, a, c, u, s, l;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (a = e._decorator),
            (c = e.Button),
            (u = e.Component);
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          l = e.default;
        },
      ],
      execute: function () {
        var f, p, b, z, F;
        o._RF.push({}, "32878aQaiNMaZyUVp5r3oqI", "gfButtonFreeze", void 0);
        var g = a.ccclass,
          h = a.property;
        e(
          "gfButtonFreeze",
          ((f = g("gfButtonFreeze")),
          (p = h(c)),
          f(
            ((F = t(
              (z = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "btnFreeze", F, i(t)),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.onClickFreezeBtn = function () {
                    l.instance.emit(s.SOUND.CLICK),
                      l.instance.emit(s.GAME_LAYER.SEND_ACTIVE_FREEZE_GUN);
                  }),
                  (o.disableTouch = function () {
                    this.btnFreeze.interactable = !1;
                  }),
                  (o.enableTouch = function () {
                    this.btnFreeze.interactable = !0;
                  }),
                  t
                );
              })(u)).prototype,
              "btnFreeze",
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
            (b = z))
          ) || b)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/gfEffectFreeze.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfBaseEvents.ts",
    "./gfEventEmitter.ts",
    "./gfDataStore.ts",
    "./gfBaseConfig.ts",
    "./gfReferenceManager.ts",
    "./gfUtilities.ts",
    "./gfFreezeManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, s, r, a, c, f, l, u, E, g, p, S, _, h, d;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy),
            (i = t._decorator),
            (o = t.UITransform),
            (s = t.warn),
            (r = t.v3),
            (a = t.tween),
            (c = t.Component);
        },
        function (t) {
          f = t.default;
        },
        function (t) {
          l = t.default;
        },
        function (t) {
          u = t.default;
        },
        function (t) {
          E = t.default;
        },
        function (t) {
          g = t.default;
        },
        function (t) {
          (p = t.registerEvent),
            (S = t.getPositionInOtherNode),
            (_ = t.randomBetween),
            (h = t.removeEvents);
        },
        function (t) {
          d = t.default;
        },
      ],
      execute: function () {
        var F;
        n._RF.push({}, "0c004qny5ZAYLuJesNbpvtp", "gfEffectFreeze", void 0);
        var v = i.ccclass;
        i.property,
          t(
            "gfEffectFreeze",
            v("gfEffectFreeze")(
              (F = (function (t) {
                function n() {
                  for (
                    var e, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    ((e =
                      t.call.apply(t, [this].concat(i)) ||
                      this)._flyingSkill = 0),
                    e
                  );
                }
                e(n, t);
                var i = n.prototype;
                return (
                  (i.onLoad = function () {
                    (this._flyingSkill = 0), this.initEvents();
                  }),
                  (i.initEvents = function () {
                    p(
                      f.GAME_LAYER.PROCESS_ITEM_SKILLS,
                      this.effectItemFreeze,
                      this
                    ),
                      p(
                        f.GAME_LAYER.ON_ENTER_GAME_ROOM,
                        this.resetOnExit,
                        this
                      ),
                      p(f.COMMON.EXIT_GAME_ROOM, this.resetOnExit, this);
                  }),
                  (i.resetOnExit = function () {
                    this._flyingSkill = 0;
                  }),
                  (i.effectItemFreeze = function (t) {
                    var e = this,
                      n = t.listItem.find(function (t) {
                        return (
                          t.ID === E.instance.FREEZE_CONFIG.SKILL_ITEM_FREEZE
                        );
                      });
                    if (n) {
                      t.isMe && u.instance.setListItemSkillByData(n);
                      var i,
                        c = { DeskStation: t.DeskStation, Fish: t.Fish },
                        p = g.instance.getPlayerByDeskStation(c.DeskStation),
                        _ = p.isMe ? d.instance.getBtnFreeze() : p.node;
                      (i = c.Fish
                        ? this.node
                            .getComponent(o)
                            .convertToNodeSpaceAR(
                              c.Fish.getLockPositionByWorldSpace()
                            )
                        : this.getRandomPositionOutScreen()),
                        l.instance.emit(
                          f.SOUND.PLAY_SOUND_BY_NAME,
                          E.instance.FREEZE_CONFIG.SOUND.SFX_FREEZE_ITEM
                        );
                      var h = S(this.node, _),
                        F = d.instance.getFreezeFX();
                      if (F) {
                        var v = F.item,
                          y = F.cfg,
                          R = v;
                        R.setParent(this.node),
                          (R.scale = r(0, 0, 0)),
                          (R.active = !0),
                          R.setPosition(i),
                          R.initAssets(y);
                        p.isMe && this._flyingSkill++,
                          a(R)
                            .to(0.175, {
                              position: r(R.position.x, R.position.y + 60, 1),
                            })
                            .to(0.175, {
                              position: r(R.position.x, R.position.y + 60, 1),
                            })
                            .to(
                              0.5,
                              {
                                position: r(R.position.x, R.position.y - 60, 1),
                              },
                              { easing: "bounceOut" }
                            )
                            .delay(0.7)
                            .to(0.4, { position: h })
                            .delay(0.235)
                            .call(function () {
                              u.instance.getSelfDeskStation() ===
                                c.DeskStation &&
                                (e._flyingSkill > 0 && e._flyingSkill--,
                                l.instance.emit(
                                  f.GAME_LAYER.FREEZE_ADD_ITEM,
                                  e._flyingSkill
                                )),
                                R.returnPool();
                            })
                            .start();
                      } else s("FreezeItem not exists, please setup it");
                    }
                  }),
                  (i.getRandomPositionOutScreen = function () {
                    var t = E.instance.SceneBox,
                      e = [t.Left, t.Right][_(0, 1)],
                      n = _(t.Bottom + 100, t.Top - 100);
                    return this.node
                      .getComponent(o)
                      .convertToNodeSpaceAR(
                        g.instance
                          .getNodeFishLayer()
                          .convertToWorldSpaceAR(r(e, n, 0))
                      );
                  }),
                  (i.onDestroy = function () {
                    h(this);
                  }),
                  n
                );
              })(c))
            ) || F
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/gfFreezeConfig.ts",
  [
    "cc",
    "./gfBaseConfig.ts",
    "./gfPoolManager.ts",
    "./gfNodePoolConfig.ts",
    "./gfBaseEvents.ts",
  ],
  function (e) {
    "use strict";
    var E, _, t, n, I, F, r;
    return {
      setters: [
        function (e) {
          (E = e.Color), (_ = e.rect), (t = e.cclegacy);
        },
        function (e) {
          n = e.default;
        },
        function (e) {
          I = e.default;
        },
        function (e) {
          F = e.default;
        },
        function (e) {
          r = e.default;
        },
      ],
      execute: function () {
        t._RF.push({}, "d1604DMpgROEpUW9HGYzSHD", "gfFreezeConfig", void 0);
        var i = globalThis._;
        e("default", function () {
          var e,
            t = {
              FREEZE_CONFIG: {
                SKILL_ITEM_FREEZE: 1,
                TIME_COUNTDOWN_ITEM_FREEZE: 1e4,
                MAX_NUM_FREESKILL: 9,
                SOUND: {
                  SFX_FREEZE_ITEM: "sfx_freeze_item",
                  SFX_FREEZE: "sfx_freeze_skill",
                },
                ROUND_DISABLE_GUN: [1],
                FISH_KIND_HIDE_ICE: [33, 32],
                ITEM_FREEZE_ASSETS: "itemFreezeAssets",
                GUN_ANIM: {
                  ANIM_GUN_FX_APPEAR: "1XuatHien",
                  ANIM_GUN_FX_IDLE: "IdleSungBang",
                  ANIM_FROZEN_FX: "IdleSungBang",
                },
                BULLET_KIND_ID: [7, 7, 7, 7, 8, 8, 9],
                ICE_COLOR: new E(0, 175, 255, 255),
                FREEZE_ICE_ITEM: "freezeIceItem",
              },
              NetFx: { IceNet: 2 },
            },
            o = {
              NET_FX_CONFIG:
                ((e = {}),
                (e[2] = {
                  MyUser: "animation",
                  OtherUser: "animation",
                  zIndex: 91,
                }),
                e),
              BULLET_CONFIG: {
                7: { BoxCollider: _(0, 0, 20, 36) },
                8: { BoxCollider: _(0, 0, 20, 77) },
                9: { BoxCollider: _(0, 0, 20, 101) },
              },
            };
          i.merge(n.instance, n.instance, t),
            i.merge(r, r, {
              GAME_LAYER: {
                FREEZE_EFFECT: "FREEZE_EFFECT",
                FREEZE_ADD_ITEM: "FREEZE_ADD_ITEM",
                SEND_ACTIVE_FREEZE_GUN: "SEND_ACTIVE_FREEZE_GUN",
              },
            }),
            i.merge(F.instance, F.instance, o);
          var s = { ItemFreeze: 0, ItemIce: 0 },
            a = I.instance.getPoolsType(),
            f = Object.keys(a).length;
          for (var N in s) s.hasOwnProperty(N) && (s[N] = f++);
          i.merge(a, a, s);
        });
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/gfFreezeGun.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfBaseConfig.ts",
    "./EventsCode1998.ts",
    "./gfEventEmitter.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, r, s, o, u, c, f, F, a;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy), (o = e._decorator), (u = e.sp), (c = e.Component);
        },
        function (e) {
          f = e.default;
        },
        function (e) {
          F = e.default;
        },
        function (e) {
          a = e.default;
        },
      ],
      execute: function () {
        var z, l, h, p, G, d, v;
        s._RF.push({}, "ec2e62CTiBLL7qp0jVArQus", "gfFreezeGun", void 0);
        var E = o.ccclass,
          _ = o.property;
        e(
          "default",
          ((z = E("gfFreezeGun")),
          (l = _(u.Skeleton)),
          (h = _(u.Skeleton)),
          z(
            ((d = t(
              (G = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, s = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    i(t, "freezeGunFx", d, r(t)),
                    i(t, "frozenFx", v, r(t)),
                    (t.isFreezed = !1),
                    t
                  );
                }
                n(t, e);
                var s = t.prototype;
                return (
                  (s.bindingFuncs = function () {
                    (this.node.activeFreezeEffect =
                      this.activeFreezeEffect.bind(this)),
                      (this.node.stopFreezeGun = this.stopFreezeGun.bind(this)),
                      (this.node.isFreezeGunActive =
                        this.isFreezeGunActive.bind(this)),
                      this.stopFreezeGun(),
                      this.setupFreezeGun();
                  }),
                  (s.setupFreezeGun = function () {}),
                  (s.activeFreezeEffect = function (e) {
                    var t = this;
                    this.isFreezeGunActive() ||
                      (e && a.instance.emit(F.SOUND.ACTIVE_FREEZE),
                      (this.freezeGunFx.node.active = !0),
                      (this.isFreezed = !0),
                      this.freezeGunFx.setAnimation(
                        0,
                        f.instance.FREEZE_CONFIG.GUN_ANIM.ANIM_GUN_FX_APPEAR,
                        !1
                      ),
                      this.freezeGunFx.setCompleteListener(function () {
                        t.freezeGunFx.setAnimation(
                          0,
                          f.instance.FREEZE_CONFIG.GUN_ANIM.ANIM_GUN_FX_IDLE,
                          !0
                        ),
                          t.freezeGunFx.setCompleteListener(function () {});
                      }),
                      (this.frozenFx.node.active = !0),
                      this.frozenFx.setAnimation(
                        0,
                        f.instance.FREEZE_CONFIG.GUN_ANIM.ANIM_FROZEN_FX,
                        !1
                      ),
                      this.frozenFx.setCompleteListener(function () {
                        t.frozenFx.node.active = !1;
                      }));
                  }),
                  (s.isFreezeGunActive = function () {
                    return this.isFreezed;
                  }),
                  (s.stopFreezeGun = function () {
                    (this.freezeGunFx.node.active = !1),
                      (this.frozenFx.node.active = !1),
                      (this.isFreezed = !1);
                  }),
                  t
                );
              })(c)).prototype,
              "freezeGunFx",
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
            (v = t(G.prototype, "frozenFx", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (p = G))
          ) || p)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/gfFreezeIceEffect.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfNode.ts",
    "./gfDataStore.ts",
    "./gfBaseConfig.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, s, o, r, c, f, a, d, h, u;
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
            (r = e._decorator),
            (c = e.Node),
            (f = e.BoxCollider2D),
            (a = e.v3);
        },
        function (e) {
          d = e.default;
        },
        function (e) {
          h = e.default;
        },
        function (e) {
          u = e.default;
        },
      ],
      execute: function () {
        var l, p, z, F, g;
        o._RF.push({}, "39d0cfc2aJLDK3p5LpVd+hN", "gfFreezeIceEffect", void 0);
        var m = r.ccclass,
          v = r.property,
          I = "gfBaseFish";
        e(
          "gfFreezeIceEffect",
          ((l = m("gfFreezeIceEffect")),
          (p = v(c)),
          l(
            ((g = t(
              (F = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, o = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    n(t, "iceEffect", g, s(t)),
                    (t._isFreezed = !1),
                    (t._TimeRemainFreeze = 0),
                    (t.freezedTime = 0),
                    t
                  );
                }
                i(t, e);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    (this._isFreezed = !1), this.bindingFuncs();
                  }),
                  (o.bindingFuncs = function () {
                    (this.node.resetIced = this.resetIced.bind(this)),
                      (this.node.getIsFreezed = this.getIsFreezed.bind(this)),
                      (this.node.setPoolManager =
                        this.setPoolManager.bind(this)),
                      (this.node.initIceEffect = this.initIceEffect.bind(this)),
                      (this.node.onFreezed = this.onFreezed.bind(this));
                  }),
                  (o.initIceEffect = function (e) {
                    if (
                      ((this.node.layer = this.node.parent.layer),
                      (this.iceEffect.layer = this.node.layer),
                      this.iceEffect)
                    ) {
                      (this.iceEffect.active = e && e > 0),
                        this.iceEffect.active && this.onFreezed(e);
                      var t = Math.min(
                        1.5,
                        this.node.parent.getComponent(f).size.height / 50
                      );
                      this.iceEffect.setScale(a(t, t, 1));
                    }
                  }),
                  (o.onFreezed = function (e) {
                    void 0 === e && (e = 3e3),
                      (this.freezedTime = h.instance.getTime());
                    var t = this.node.parent.getComponent(I);
                    this._isFreezed ||
                      ((this._isFreezed = !0),
                      t.setIsFreezed(!0),
                      t.moveAction && t.moveAction.setSpeed(0.5),
                      (this._TimeRemainFreeze = e),
                      (this.iceEffect.active = !0),
                      t.changeAnimationSpeed(0.5),
                      this.applyIcedColor());
                  }),
                  (o.applyIcedColor = function () {
                    this.node.parent
                      .getComponent(I)
                      .setColor(u.instance.FREEZE_CONFIG.ICE_COLOR);
                  }),
                  (o.update = function () {
                    this._isFreezed &&
                      h.instance.getTime() - this.freezedTime >=
                        this._TimeRemainFreeze &&
                      this.onFreezeStop();
                  }),
                  (o.onFreezeStop = function () {
                    var e = this.node.parent.getComponent(I);
                    e.moveAction && e.moveAction.setSpeed(1),
                      e.setIsFreezed(!1),
                      e.changeAnimationSpeed(2),
                      e.resetColor(),
                      this.resetIced(!1);
                  }),
                  (o.resetIced = function (e) {
                    void 0 === e && (e = !0),
                      (this._isFreezed = !1),
                      (this.iceEffect.active = !1),
                      e && this.returnPool();
                  }),
                  (o.getIsFreezed = function () {
                    return this._isFreezed;
                  }),
                  t
                );
              })(d)).prototype,
              "iceEffect",
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
            (z = F))
          ) || z)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/gfFreezeManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomTypeShare.ts",
    "./gfBaseEvents.ts",
    "./gfEventEmitter.ts",
    "./gfDataStore.ts",
    "./gfBaseConfig.ts",
    "./gfUtilities.ts",
    "./gfPoolManager.ts",
    "./gfNetworkParser.ts",
    "./gfNetworkGameEvent.ts",
    "./gfReferenceManager.ts",
    "./gfNodePoolConfig.ts",
    "./gfFishManager.ts",
    "./gfExtraNodePoolAssets.ts",
    "./gfFreezeGun.ts",
    "./gfFreezeConfig.ts",
  ],
  function (e) {
    "use strict";
    var t,
      n,
      i,
      s,
      r,
      o,
      a,
      u,
      c,
      f,
      l,
      E,
      F,
      h,
      d,
      _,
      g,
      z,
      v,
      G,
      A,
      I,
      S,
      p,
      R,
      m,
      N,
      O,
      C,
      y,
      D;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (s = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (o = e._decorator),
            (a = e.Prefab),
            (u = e.Node),
            (c = e.log),
            (f = e.v3),
            (l = e.Vec3),
            (E = e.instantiate),
            (F = e.warn),
            (h = e.Component);
        },
        function (e) {
          d = e.CustomAudioClip;
        },
        function (e) {
          _ = e.default;
        },
        function (e) {
          g = e.default;
        },
        function (e) {
          z = e.default;
        },
        function (e) {
          v = e.default;
        },
        function (e) {
          (G = e.registerEvent), (A = e.SetZIndex), (I = e.removeEvents);
        },
        function (e) {
          S = e.default;
        },
        function (e) {
          p = e.default;
        },
        function (e) {
          R = e.default;
        },
        function (e) {
          m = e.default;
        },
        function (e) {
          N = e.default;
        },
        function (e) {
          O = e.default;
        },
        function (e) {
          C = e.default;
        },
        function (e) {
          y = e.default;
        },
        function (e) {
          D = e.default;
        },
      ],
      execute: function () {
        var M, P, L, T, U, x, b, k, B, Y, Z, H, w, X;
        r._RF.push({}, "f07250i0P9HTKtWFjMloNh5", "gfFreezeManager", void 0);
        var K = o.ccclass,
          V = o.property;
        e(
          "default",
          ((M = K("FreezeManager")),
          (P = V(a)),
          (L = V(u)),
          (T = V(u)),
          (U = V({ type: d })),
          (x = V(C)),
          M(
            (((X = (function (e) {
              function t() {
                for (
                  var t, n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return (
                  (t = e.call.apply(e, [this].concat(r)) || this),
                  i(t, "gunFreeze", B, s(t)),
                  i(t, "btnFreeze", Y, s(t)),
                  i(t, "freezeSkillNode", Z, s(t)),
                  i(t, "listSounds", H, s(t)),
                  i(t, "extraNodePoolAssets", w, s(t)),
                  (t._listGunUsers = void 0),
                  (t._freezeItemFxConfig = void 0),
                  t
                );
              }
              n(t, e);
              var r = t.prototype;
              return (
                (r.onLoad = function () {
                  (t.instance = this),
                    (this._listGunUsers = []),
                    (this._freezeItemFxConfig = {}),
                    this._mergeData(),
                    this._initFreezeGunUsers(),
                    this.bindingFuncs(),
                    this.initEvents(),
                    this.extraNodePoolAssets.addAllExtraPool(),
                    c("FreezeSkill module init");
                }),
                (r._mergeData = function () {
                  D();
                  var e = this.splitSound(),
                    t = e.listMusic,
                    n = e.listSfx;
                  g.instance.emit(_.SOUND.ASSIGN_SOUND_MODULE, t, n);
                }),
                (r.splitSound = function () {
                  for (
                    var e = [], t = [], n = 0;
                    n < this.listSounds.length;
                    n++
                  ) {
                    var i = this.listSounds[n];
                    i.isEffect ? t.push(i) : e.push(i);
                  }
                  return { listMusic: e, listSfx: t };
                }),
                (r.getBtnFreeze = function () {
                  return this.btnFreeze;
                }),
                (r.bindingFuncs = function () {
                  (this._onFishFreeze = this.freezeFish.bind(this)),
                    (this._onActiveFreezeGun =
                      this.onActiveFreezeGun.bind(this)),
                    (this._onStopFreezeGun =
                      this.onStopFreezeGunEffect.bind(this));
                }),
                (r.initEvents = function () {
                  p.instance.registerEvent(
                    R.GAME_FISH_FREEZE,
                    this._onFishFreeze
                  ),
                    p.instance.registerEvent(
                      R.GAME_ACTIVE_FREEZE_GUN,
                      this._onActiveFreezeGun
                    ),
                    p.instance.registerEvent(
                      R.GAME_STOP_FREEZE_GUN,
                      this._onStopFreezeGun
                    ),
                    G(
                      _.GAME_LAYER.SEND_ACTIVE_FREEZE_GUN,
                      this.sendActiveFreezeGun,
                      this
                    ),
                    G(
                      _.PLAYER_LAYER.UPDATE_LIST_PLAYER,
                      this.updateListPlayer,
                      this
                    ),
                    G(
                      _.PLAYER_LAYER.PLAYER_JOIN_BOARD,
                      this.playerJoinBoard,
                      this
                    ),
                    G(
                      _.GAME_LAYER.FREEZE_EFFECT,
                      this.showGunFreezeEffect,
                      this
                    ),
                    G(
                      _.GAME_LAYER.UPDATE_ROOM_DATA,
                      this.onUpdateRoomData,
                      this
                    ),
                    G(_.GAME_LAYER.GAME_CHANGE_ROUND, this.onChangeRound, this),
                    G(
                      _.GAME_LAYER.CREATE_FISH_GROUP,
                      this.moveOutAllFishes,
                      this
                    ),
                    G(
                      _.GAME_LAYER.MOVE_OUT_ALL_FISHES,
                      this.moveOutAllFishes,
                      this
                    ),
                    G(
                      _.GAME_LAYER.REMOVE_EXTRA_EFFECT_ON_FISH,
                      this.removeFish,
                      this
                    ),
                    G(_.GAME_LAYER.CREATE_ONE_FISH, this.createOneFish, this),
                    G(
                      _.GAME_LAYER.CREATE_ONE_BULLET,
                      this.createOneBullet,
                      this
                    ),
                    G(
                      _.EFFECT_LAYER.CREATE_ONE_NETFX,
                      this.createOneNetFx,
                      this
                    ),
                    G(_.COMMON.GAME_HIDE, this.onGameHide, this),
                    G(
                      _.PLAYER_LAYER.PLAYER_LEAVE_BOARD,
                      this.playerLeaveBoard,
                      this
                    ),
                    G(_.COMMON.EXIT_GAME, this.onExitGame, this);
                }),
                (r.onActiveFreezeGun = function (e) {
                  this.freezeSkillNode.activeFreezeGun(e);
                }),
                (r.sendActiveFreezeGun = function () {
                  p.instance.sendActiveFreezeGun();
                }),
                (r.createOneNetFx = function (e) {
                  var t = e.netFX,
                    n = e.data;
                  if (n.bullet.isFreezed) {
                    var i = v.instance.NetFx.IceNet,
                      s = N.instance.getNetFXConfig(i);
                    s && ((s.kind = i), (s.isMe = n.isMe), t.initAssets(s));
                  }
                }),
                (r.createOneBullet = function (e) {
                  var t = e.bullet,
                    n = e.data,
                    i = t._DeskStation,
                    s = m.instance.getPlayerByDeskStation(i);
                  if (((t.isFreezed = s.isFreezed), t.isFreezed)) {
                    var r = z.instance.getBulletIndex(n.BulletMultiple);
                    r = v.instance.FREEZE_CONFIG.BULLET_KIND_ID[r];
                    var o = N.instance.getBulletConfig(r);
                    o && t.setSpriteFrame(o.asset);
                  }
                }),
                (r.getFreezeIceFromFish = function (e) {
                  return e.node.getChildByName(
                    v.instance.FREEZE_CONFIG.FREEZE_ICE_ITEM
                  );
                }),
                (r.removeFish = function (e) {
                  var t = this.getFreezeIceFromFish(e);
                  t && t.resetIced();
                }),
                (r.moveOutAllFishes = function () {
                  for (
                    var e = O.instance.getListFish(), t = e.length - 1;
                    t >= 0;
                    --t
                  ) {
                    var n = e[t],
                      i = this.getFreezeIceFromFish(n);
                    i && !i.getIsFreezed() && n.resetColor();
                  }
                }),
                (r.createOneFish = function (e) {
                  var t = e.fish,
                    n = e.fishData;
                  if (
                    v.instance.FREEZE_CONFIG.FISH_KIND_HIDE_ICE.indexOf(
                      n.FishKind
                    ) < 0
                  ) {
                    var i = S.instance.getPoolsType().ItemIce,
                      s = S.instance.getObjectByType(i);
                    s.parent = t.node;
                    var r = t.getTargetPoint(),
                      o = r ? f(r.x, r.y, 0) : l.ZERO;
                    s.setPosition(o),
                      (s.name = v.instance.FREEZE_CONFIG.FREEZE_ICE_ITEM),
                      s.setPoolManager(S.instance.getListPool()[i]),
                      t.setCompFreeze(s),
                      s.initIceEffect(n.TimeRemainFreeze);
                  }
                }),
                (r.freezeFish = function (e) {
                  if (
                    !(
                      v.instance.FREEZE_CONFIG.FISH_KIND_HIDE_ICE.indexOf(
                        e.FishKind
                      ) > -1
                    )
                  ) {
                    var t = O.instance.getFishById(e.fishId);
                    if (t) {
                      var n = this.getFreezeIceFromFish(t);
                      n && n.onFreezed();
                    }
                  }
                }),
                (r.updateListPlayer = function (e) {
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t],
                      i = n.DeskStation === z.instance.getSelfDeskStation(),
                      s = m.instance.getPlayerByDeskStation(n.DeskStation);
                    if (s) {
                      var r = this._listGunUsers[s.index];
                      r &&
                        (n.IceTimeRemain
                          ? ((s.isFreezed = !0),
                            r.activeFreezeEffect(i),
                            i && this.freezeSkillNode.resumeFreezeGun(n))
                          : (r.isFreezeGunActive() || 0 === n.IceTimeRemain) &&
                            ((s.isFreezed = !1),
                            r.stopFreezeGun(),
                            i &&
                              !z.instance.isHoldingGunSkill() &&
                              this.freezeSkillNode.stopFreezeGun(n)));
                    }
                  }
                }),
                (r.playerJoinBoard = function (e) {
                  var t = m.instance.getPlayerByDeskStation(e.DeskStation);
                  if (t) {
                    var n = this._listGunUsers[t.index];
                    n &&
                      (e.IceTimeRemain
                        ? ((t.isFreezed = !0), n.activeFreezeEffect(t.isMe))
                        : (n.isFreezeGunActive() || 0 === e.IceTimeRemain) &&
                          ((t.isFreezed = !1), n.stopFreezeGun()));
                  }
                }),
                (r.onChangeRound = function (e) {
                  v.instance.FREEZE_CONFIG.ROUND_DISABLE_GUN.indexOf(
                    e.SceneKind
                  ) > -1 &&
                    this._listGunUsers.forEach(function (e) {
                      e.isFreezeGunActive() && e.stopFreezeGun();
                    }),
                    this.freezeSkillNode.onChangeRound(e);
                }),
                (r.onUpdateRoomData = function (e) {
                  v.instance.FREEZE_CONFIG.ROUND_DISABLE_GUN.indexOf(
                    e.SceneKind
                  ) > -1 &&
                    this._listGunUsers.forEach(function (e) {
                      e.isFreezeGunActive() && e.stopFreezeGun();
                    }),
                    this.freezeSkillNode.onUpdateRoomData(e);
                }),
                (r.showGunFreezeEffect = function (e) {
                  var t = m.instance.getPlayerByDeskStation(e);
                  if (t) {
                    t.isFreezed = !0;
                    var n = this._listGunUsers[t.index];
                    n && n.activeFreezeEffect(t.isMe);
                  }
                }),
                (r.onStopFreezeGunEffect = function (e) {
                  var t = m.instance.getPlayerByDeskStation(e.DeskStation);
                  if (t) {
                    t.isFreezed = !1;
                    var n = this._listGunUsers[t.index];
                    n && n.stopFreezeGun();
                  }
                  this.freezeSkillNode.stopFreezeGun(e);
                }),
                (r._initFreezeGunUsers = function () {
                  var e = m.instance.getPlayerLayer();
                  if (e)
                    for (var t = 0; t < 4; t++) {
                      var n = e.getPlayerByIndex(t),
                        i = E(this.gunFreeze);
                      i.setPosition(f(0, 0, 0)),
                        (i.parent = n.node),
                        A(i, 2),
                        (i.active = !0),
                        i.getComponent(y).bindingFuncs(),
                        (this._listGunUsers[t] = i);
                    }
                }),
                (r.getFreezeFX = function (e) {
                  void 0 === e && (e = 0);
                  var t = this.getFreezeItemFXConfig(e);
                  if (!t) return null;
                  var n = S.instance.getPoolsType().ItemFreeze,
                    i = S.instance.getObjectByType(n);
                  return (
                    i.getComponent("gfItemFreezeEffect").bindingFuncs(),
                    i.setPoolManager(S.instance.getListPool()[n]),
                    { item: i, cfg: t }
                  );
                }),
                (r.getFreezeItemFXConfig = function (e) {
                  var t = {
                      assetName: v.instance.FREEZE_CONFIG.ITEM_FREEZE_ASSETS,
                      kind: e,
                      keyName: "animation",
                    },
                    n = S.instance.getConfigData(t);
                  if (!this._freezeItemFxConfig[e]) {
                    if (!n)
                      return (
                        F("FreezeItemFx kind config not found: " + e),
                        0 != e ? this.getFreezeItemFXConfig(0) : null
                      );
                    this._freezeItemFxConfig[e] = {};
                  }
                  var i = this._freezeItemFxConfig[e];
                  return (i.asset = n), i;
                }),
                (r.onExitGame = function () {
                  var e = this.splitSound(),
                    t = e.listMusic,
                    n = e.listSfx;
                  g.instance.emit(_.PERSIST_ROOM.REMOVE_EXTRA_SOUND, t, n);
                }),
                (r.onDestroy = function () {
                  I(this), (t.instance = null);
                }),
                (r.onGameHide = function () {
                  this._listGunUsers.forEach(function (e) {
                    e.isFreezeGunActive() && e.stopFreezeGun();
                  });
                }),
                (r.playerLeaveBoard = function (e) {
                  var t = m.instance.getPlayerByDeskStation(e.DeskStation);
                  if (t) {
                    var n = this._listGunUsers[t.index];
                    n && n.isFreezeGunActive() && n.stopFreezeGun();
                  }
                }),
                t
              );
            })(h)).instance = null),
            (B = t((k = X).prototype, "gunFreeze", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = t(k.prototype, "btnFreeze", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = t(k.prototype, "freezeSkillNode", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = t(k.prototype, "listSounds", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (w = t(k.prototype, "extraNodePoolAssets", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = k))
          ) || b)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/gfFreezeSkill.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfBaseEvents.ts",
    "./gfEventEmitter.ts",
    "./gfDataStore.ts",
    "./gfBaseConfig.ts",
    "./gfReferenceManager.ts",
    "./gfUtilities.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, s, r, o, a, u, l, c, h, E, F, f, d, z, g, m, p;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (s = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (o = e._decorator),
            (a = e.Label),
            (u = e.Node),
            (l = e.Button),
            (c = e.ProgressBar),
            (h = e.Component);
        },
        function (e) {
          E = e.default;
        },
        function (e) {
          F = e.default;
        },
        function (e) {
          f = e.default;
        },
        function (e) {
          d = e.default;
        },
        function (e) {
          z = e.default;
        },
        function (e) {
          (g = e.registerEvent), (m = e.isEmpty), (p = e.removeEvents);
        },
      ],
      execute: function () {
        var _, k, I, S, T, L, R, C, D, b, G;
        r._RF.push({}, "7f440OuHfpMk4mknrSXWI+V", "gfFreezeSkill", void 0);
        var N = o.ccclass,
          v = o.property;
        e(
          "gfFreezeSkill",
          ((_ = N("gfFreezeSkill")),
          (k = v(a)),
          (I = v(a)),
          (S = v(u)),
          (T = v(l)),
          _(
            ((C = t(
              (R = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    n(t, "txtFreeze", C, s(t)),
                    n(t, "textFreezeCountdown", D, s(t)),
                    n(t, "frzCDPrgss", b, s(t)),
                    n(t, "btnFreeze", G, s(t)),
                    (t._isLockByFishParade = !1),
                    (t._lastNumSkill = 0),
                    (t.freezeTime = 0),
                    (t.isLock = !1),
                    (t.progress = 0),
                    t
                  );
                }
                i(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    (this._isLockByFishParade = !1),
                      (this._lastNumSkill = 0),
                      this.bindingFuncs(),
                      this.initEvents();
                  }),
                  (r.bindingFuncs = function () {
                    (this.node.onUpdateRoomData =
                      this.onUpdateRoomData.bind(this)),
                      (this.node.onChangeRound = this.onChangeRound.bind(this)),
                      (this.node.stopFreezeGun = this.stopFreezeGun.bind(this)),
                      (this.node.resumeFreezeGun =
                        this.resumeFreezeGun.bind(this)),
                      (this.node.activeFreezeGun =
                        this.activeFreezeGun.bind(this));
                  }),
                  (r.initEvents = function () {
                    g(E.GAME_LAYER.FREEZE_ADD_ITEM, this.addFreezeItem, this),
                      g(
                        E.GAME_LAYER.UPDATE_LIST_ITEM,
                        this.updateTotalFreeze,
                        this
                      ),
                      g(E.GAME_LAYER.DROP_GUN_SKILL, this.onDropGunSkill, this),
                      g(
                        E.GAME_LAYER.INTERACTABLE_HUD,
                        this.interactableFreezeSkill,
                        this
                      ),
                      g(
                        E.GAME_LAYER.COMPLETED_GUN_SKILL,
                        this.completedGunSkill,
                        this
                      );
                  }),
                  (r.update = function () {
                    this.updateFreezeCooldown();
                  }),
                  (r.updateFreezeCooldown = function () {
                    if (
                      this.freezeTime &&
                      this.isLock &&
                      1 !== this.getProgressValue() &&
                      null !== f.instance
                    ) {
                      var e = f.instance.getTime() - this.freezeTime,
                        t =
                          e /
                          d.instance.FREEZE_CONFIG.TIME_COUNTDOWN_ITEM_FREEZE;
                      this.setProgressValue(Math.max(0, Math.min(1, t)));
                      var i = Math.ceil(
                        (d.instance.FREEZE_CONFIG.TIME_COUNTDOWN_ITEM_FREEZE -
                          e) /
                          1e3
                      );
                      this.textFreezeCountdown.string =
                        i > 0 ? i.toString() : "";
                    }
                  }),
                  (r.getProgressValue = function () {
                    return this.frzCDPrgss.getComponent(c).progress;
                  }),
                  (r.setProgressValue = function (e) {
                    this.frzCDPrgss.getComponent(c).progress = e;
                  }),
                  (r.addFreezeItem = function (e) {
                    var t = f.instance.getItemSkillById(
                      d.instance.FREEZE_CONFIG.SKILL_ITEM_FREEZE
                    );
                    if (t) {
                      var i = t.amount;
                      (this._lastNumSkill = i - e), this.updateFreezeItem();
                    }
                  }),
                  (r.updateTotalFreeze = function () {
                    var e = f.instance.getItemSkillById(
                      d.instance.FREEZE_CONFIG.SKILL_ITEM_FREEZE
                    );
                    e &&
                      ((this._lastNumSkill = e.amount),
                      this.updateFreezeItem());
                  }),
                  (r.updateFreezeItem = function () {
                    (this.txtFreeze.string =
                      this._lastNumSkill +
                      "/" +
                      d.instance.FREEZE_CONFIG.MAX_NUM_FREESKILL),
                      (this.btnFreeze.interactable =
                        this._lastNumSkill > 0 &&
                        !this.isLock &&
                        !this._isLockByFishParade);
                  }),
                  (r.unlockFreezeSkill = function () {
                    (this.isLock = !1),
                      (this.frzCDPrgss.active = !1),
                      (this.btnFreeze.interactable =
                        this._lastNumSkill > 0 && !this._isLockByFishParade),
                      (this.textFreezeCountdown.string = "");
                  }),
                  (r.activeFreezeGun = function (e) {
                    F.instance.emit(E.GAME_LAYER.FREEZE_EFFECT, e.DeskStation),
                      e.DeskStation === f.instance.getSelfDeskStation() &&
                        (this.lockButton(), this.updateFreezeItem());
                  }),
                  (r.stopFreezeGun = function (e) {
                    e.DeskStation === f.instance.getSelfDeskStation() &&
                      this.unlockFreezeSkill();
                  }),
                  (r.onChangeRound = function (e) {
                    (e.isFishGroupToNormal = !(
                      !m(e.ParadeKind) && e.ParadeKind >= 0
                    )),
                      (this._isLockByFishParade =
                        !m(e.isFishGroupToNormal) && !e.isFishGroupToNormal),
                      this.updateFreezeItem();
                  }),
                  (r.lockButton = function () {
                    (this.isLock = !0),
                      (this.btnFreeze.interactable = !1),
                      (this.frzCDPrgss.active = !0),
                      this.setProgressValue(0),
                      (this.freezeTime = f.instance.getTime());
                  }),
                  (r.interactableFreezeSkill = function (e) {
                    void 0 === e && (e = !0),
                      (this.isLock = !e),
                      this.updateFreezeItem();
                  }),
                  (r.completedGunSkill = function () {
                    (this.isLock = !1), this.updateFreezeItem();
                  }),
                  (r.resumeFreezeGun = function (e) {
                    e.IceTimeRemain > 0 &&
                      this.updateFreezeButton(e.IceTimeRemain);
                  }),
                  (r.updateFreezeButton = function (e) {
                    (this.isLock = !0),
                      (this.btnFreeze.interactable = !1),
                      (this.frzCDPrgss.active = !0);
                    var t =
                      d.instance.FREEZE_CONFIG.TIME_COUNTDOWN_ITEM_FREEZE - e;
                    this.setProgressValue(
                      t / d.instance.FREEZE_CONFIG.TIME_COUNTDOWN_ITEM_FREEZEP
                    ),
                      (this.freezeTime = f.instance.getTime() - t);
                  }),
                  (r.onUpdateRoomData = function (e) {
                    this.updateFreezeItem(), this.onChangeRound(e);
                  }),
                  (r.onDropGunSkill = function (e) {
                    var t = e.DeskStation;
                    z.instance.getPlayerByDeskStation(t).isMe &&
                      ((this.isLock = !0), this.updateFreezeItem());
                  }),
                  (r.onDestroy = function () {
                    p(this);
                  }),
                  t
                );
              })(h)).prototype,
              "txtFreeze",
              [k],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (D = t(R.prototype, "textFreezeCountdown", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = t(R.prototype, "frzCDPrgss", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = t(R.prototype, "btnFreeze", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = R))
          ) || L)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/gfItemFreezeEffect.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfNode.ts"],
  function (e) {
    "use strict";
    var t, i, n, r, s, o, c, f;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy), (o = e._decorator), (c = e.Animation);
        },
        function (e) {
          f = e.default;
        },
      ],
      execute: function () {
        var a, l, u, h, m;
        s._RF.push({}, "40982OqYQNDALODMbS4RBEh", "gfItemFreezeEffect", void 0);
        var p = o.ccclass,
          d = o.property;
        e(
          "gfItemFreezeEffect",
          ((a = p("gfItemFreezeEffect")),
          (l = d(c)),
          a(
            ((m = t(
              (h = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, s = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    n(t, "freezeItemAnim", m, r(t)),
                    t
                  );
                }
                i(t, e);
                var s = t.prototype;
                return (
                  (s.bindingFuncs = function () {
                    (this.node.initAssets = this.initAssets.bind(this)),
                      (this.node.returnPool = this.returnPool.bind(this)),
                      (this.node.setPoolManager =
                        this.setPoolManager.bind(this));
                  }),
                  (s.initAssets = function (e) {
                    for (; this.freezeItemAnim.clips.length > 0; )
                      this.freezeItemAnim.removeClip(
                        this.freezeItemAnim.clips[0],
                        !0
                      );
                    this.freezeItemAnim.addClip(e.asset),
                      this.freezeItemAnim.play(e.asset.name);
                  }),
                  t
                );
              })(f)).prototype,
              "freezeItemAnim",
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
            (u = h))
          ) || u)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GunSkill1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfActionHelper.ts",
    "./gfLaserGun.ts",
  ],
  function (t) {
    "use strict";
    var e, n, s, i, o, r, c, l;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy),
            (s = t._decorator),
            (i = t.Tween),
            (o = t.tween),
            (r = t.v3);
        },
        function (t) {
          c = t.scaleTo;
        },
        function (t) {
          l = t.gfLaserGun;
        },
      ],
      execute: function () {
        var u;
        n._RF.push({}, "79052QClrhKw7wgXSPA2/C0", "GunSkill1998", void 0);
        var a = s.ccclass;
        t(
          "GunSkill1998",
          a("GunSkill1998")(
            (u = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              return (
                e(n, t),
                (n.prototype.showSkillTitle = function () {
                  var t = this;
                  (this.nodeEffect.parent = this.node.parent.parent),
                    (this.nodeEffect.active = !0),
                    i.stopAllByTarget(this.nodeEffect),
                    o(this.nodeEffect)
                      .to(0.2, { scale: r(0, 0, 0) })
                      .to(0.7, { scale: r(1, 1, 1) })
                      .call(function () {
                        o(t.nodeEffect)
                          .repeatForever(
                            o()
                              .then(c(0.4, 0.9, 0.9, "sineIn"))
                              .then(c(0.4, 1.1, 1.1))
                          )
                          .start();
                      })
                      .start();
                }),
                n
              );
            })(l))
          ) || u
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/HammerFX1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfActionHelper.ts",
    "./EventController1998.ts",
    "./Config1998.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, r, a, s, l, p, c, u, m, h, f, d, y;
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
            (s = t.SpriteFrame),
            (l = t.Node),
            (p = t.sp),
            (c = t.Sprite),
            (u = t.Animation),
            (m = t.tween),
            (h = t.Component);
        },
        function (t) {
          f = t.stopAllActions;
        },
        function (t) {
          d = t.default;
        },
        function (t) {
          y = t.default;
        },
      ],
      execute: function () {
        var v, g, x, A, b, F, S, T, _;
        r._RF.push({}, "c31cdVp/zpAsIukeDHi9drK", "HammerFX1998", void 0);
        var k = a.ccclass,
          w = a.property;
        t(
          "default",
          ((v = k("HammerFX1998")),
          (g = w(s)),
          (x = w(l)),
          (A = w(p.Skeleton)),
          v(
            ((S = e(
              (F = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "listSprite", S, o(e)),
                    n(e, "hammer", T, o(e)),
                    n(e, "spExplosion", _, o(e)),
                    (e._hammerType = null),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    this.stopAnimation();
                  }),
                  (r.playAnimation = function (t) {
                    var e = this,
                      i = t.pos,
                      n = t.hammerType,
                      o = t.rewardIndex,
                      r = t.countBox;
                    this.stopAnimation(),
                      (this.node.active = !0),
                      this.node.setPosition(i),
                      n != this._hammerType &&
                        ((this._hammerType = n),
                        (this.hammer.getComponent(c).spriteFrame =
                          n === y.instance.RoomKind.Normal
                            ? this.listSprite[0]
                            : this.listSprite[1]));
                    var a = 0,
                      s = null,
                      l = r > 7 ? "hammer2FX1998" : "hammerFX1998",
                      p = this.hammer.getComponent(u);
                    p.play(l);
                    var h = p.getState(l);
                    return (
                      (a = h.duration - 0.11),
                      d.instance.checkBoxType(o, "Mega")
                        ? ((s = "hit3"), (a += 0.2))
                        : d.instance.checkBoxType(o, "Big")
                        ? ((s = "hit2"), (a += 0.1))
                        : (d.instance.checkBoxType(o, "X2"),
                          (s = "hit1"),
                          (a += 0)),
                      m(this.node)
                        .delay(h.duration - 0.11)
                        .call(function () {
                          (e.spExplosion.node.active = !0),
                            e.spExplosion.setAnimation(0, s, !1);
                        })
                        .start(),
                      a
                    );
                  }),
                  (r.stopAnimation = function () {
                    f(this.node),
                      (this.node.active = !1),
                      (this.spExplosion.node.active = !1);
                  }),
                  e
                );
              })(h)).prototype,
              "listSprite",
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
            (T = e(F.prototype, "hammer", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = e(F.prototype, "spExplosion", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = F))
          ) || b)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/HUDController1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEventEmitter.ts",
    "./Config1998.ts",
    "./gfBaseEvents.ts",
    "./gfActionHelper.ts",
    "./gfHUDController.ts",
    "./gfAutoFireController.ts",
    "./ReferenceManager1998.ts",
  ],
  function (t) {
    "use strict";
    var e, i, o, n, s, l, r, a, c, u, h, p, A, f, d, g, v, _, m, F;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (l = t._decorator),
            (r = t.Node),
            (a = t.Button),
            (c = t.SpriteFrame),
            (u = t.Vec3),
            (h = t.Sprite),
            (p = t.tween),
            (A = t.v3);
        },
        function (t) {
          f = t.default;
        },
        function (t) {
          d = t.default;
        },
        function (t) {
          g = t.default;
        },
        function (t) {
          v = t.stopAllActions;
        },
        function (t) {
          _ = t.gfHUDController;
        },
        function (t) {
          m = t.gfAutoFireController;
        },
        function (t) {
          F = t.default;
        },
      ],
      execute: function () {
        var S, T, E, b, w, N, y, C, B, R, L, I, H;
        s._RF.push({}, "8e87e7FCLtFkJRd+M65eKPL", "HUDController1998", void 0);
        var D = 0,
          U = 1,
          O = 2,
          P = 0,
          k = 1,
          x = l.ccclass,
          G = l.property;
        t(
          "HUDController1998",
          ((S = x("HUDController1998")),
          (T = G(r)),
          (E = G(r)),
          (b = G(a)),
          (w = G(c)),
          (N = G(r)),
          S(
            ((B = e(
              (C = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    s[l] = arguments[l];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    o(e, "panelExpand", B, n(e)),
                    o(e, "nodeAuto", R, n(e)),
                    o(e, "btnAuto", L, n(e)),
                    o(e, "listSpriteFrame", I, n(e)),
                    o(e, "listNodeAuto", H, n(e)),
                    (e._isShow = !1),
                    (e._posButton = void 0),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this._scaleFactor = 1.1),
                      (this._posButton = [
                        new u(-114, -230, 1),
                        new u(24, -230, 1),
                        new u(-44, -158, 1),
                        new u(-44, -307, 1),
                      ]),
                      this.stopTarget();
                  }),
                  (s.updateLockFishImg = function (e) {
                    void 0 === e && (e = 0);
                    var i = d.instance.FISH_KIND;
                    e === i.BOMB
                      ? (this._scaleFactor = 0.9)
                      : e === i.LASER_CRAB
                      ? (this._scaleFactor = 0.8)
                      : (this._scaleFactor = 1),
                      (this.listNodeAuto[U].getComponents(a)[0].getComponent(
                        h
                      ).spriteFrame = this.listSpriteFrame[k]),
                      t.prototype.updateLockFishImg.call(this, e);
                  }),
                  (s.onButtonAutoClick = function () {
                    this.stopAllNodeActions(),
                      f.instance.emit(g.SOUND.CLICK),
                      this._isShow ? this.onAnimHide() : this.onAnimShow();
                  }),
                  (s.onAnimShow = function () {
                    var t = this;
                    if (!this._isShow) {
                      (this._isShow = !0),
                        (this.nodeAuto.active = !0),
                        (this.fxActive.active = !1),
                        (this.listNodeAuto[1]
                          .getComponents(a)[0]
                          .getComponent(h).spriteFrame =
                          this.listSpriteFrame[P]),
                        this.stopAllNodeActions();
                      for (
                        var e = function (e) {
                            var i = t.listNodeAuto[e],
                              o = i.getComponents(a)[0];
                            (i.active = !0),
                              i.setScale(new u(0.82, 0.82, 0.82)),
                              p(i)
                                .call(function () {
                                  (o.interactable = !1),
                                    (t.btnAuto.getComponent(a).interactable =
                                      !1);
                                })
                                .to(0.15, { position: t._posButton[e] })
                                .call(function () {
                                  (o.interactable = !0),
                                    (t.btnAuto.getComponent(a).interactable =
                                      !0);
                                })
                                .start();
                          },
                          i = 0;
                        i < this.listNodeAuto.length;
                        ++i
                      )
                        e(i);
                      p(this.panelExpand)
                        .to(0.15, { scale: A(1, 1, 1) })
                        .call(function () {
                          t.btnAuto.enabled = !0;
                        })
                        .start();
                    }
                  }),
                  (s.onAnimHide = function (t) {
                    void 0 === t && (t = m.STATE.IDLE);
                    var e = m.FIRE_TYPE_MAPPING[t];
                    if (this._isShow) {
                      if (
                        (this.stopAllNodeActions(),
                        e == m.FIRE_TYPE_MAPPING.idle)
                      )
                        for (var i = 0; i < this.listNodeAuto.length; ++i) {
                          var o = this.listNodeAuto[i];
                          (o.getComponents(a)[0].interactable = !1),
                            (this.fxActive.active = !1),
                            (o.position =
                              this._posButton[this._posButton.length - 1]),
                            (o.active = !1);
                        }
                      else {
                        (this.btnAuto.enabled = !1),
                          (this.nodeAuto.active = !1),
                          (this.fxActive.active = !0),
                          this.fxActive.setPosition(
                            this.nodeAuto.getPosition()
                          );
                        for (var n = 0; n < this.listNodeAuto.length; ++n) {
                          var s = this.listNodeAuto[n],
                            l = +e == n + 1;
                          (s.getComponents(a)[0].interactable = l),
                            (s.position =
                              this._posButton[this._posButton.length - 1]),
                            (s.active = l),
                            l && s.setScale(new u(1, 1, 1));
                        }
                      }
                      (this._isShow = !1),
                        this.panelExpand.setScale(new u(0, 0, 0));
                    }
                  }),
                  (s.onToggleIdle = function () {
                    t.prototype.onToggleIdle.call(this);
                    var e = F.instance.getSelfPlayer();
                    e && e.checkUpdateGunByWallet() && this.onAnimShow();
                  }),
                  (s.onTogglePress = function (t, e) {
                    ((this.fishNotifyImg.active = !1), t.isChecked) &&
                      this.isWalletValid() &&
                      (this._isShow && this.onAnimHide(e),
                      f.instance.emit(
                        g.AUTO_FIRE_CONTROLLER.CHANGE_AUTO_FIRE_BY_STATE,
                        e
                      ));
                  }),
                  (s.changeStatusGroupButton = function (t) {
                    void 0 === t && (t = m.STATE.IDLE),
                      f.instance.emit(
                        g.AUTO_FIRE_CONTROLLER.CHANGE_AUTO_FIRE_BY_STATE,
                        t
                      );
                  }),
                  (s.stopAllNodeActions = function () {
                    v(this.panelExpand);
                    for (var t = 0; t < this.listNodeAuto.length; t++)
                      v(this.listNodeAuto[t]);
                  }),
                  (s.toggleHUD = function (e) {
                    void 0 === e && (e = !0),
                      t.prototype.toggleHUD.call(this, e),
                      (this.btnAuto.interactable = e);
                  }),
                  (s.stopTarget = function () {
                    t.prototype.stopTarget.call(this), this.onResetListButton();
                  }),
                  (s.showFXActiveTargetOne = function () {
                    this._isShow && this.onAnimHide(m.STATE.TARGET_ONE),
                      t.prototype.showFXActiveTargetOne.call(this),
                      this.playResumeBeforeFireSkill(U);
                  }),
                  (s.showFXActiveTargetAll = function () {
                    this._isShow && this.onAnimHide(m.STATE.TARGET_ALL),
                      t.prototype.showFXActiveTargetAll.call(this),
                      this.playResumeBeforeFireSkill(O);
                  }),
                  (s.showFXActiveAutoFire = function () {
                    this._isShow && this.onAnimHide(m.STATE.AUTO_FIRE),
                      t.prototype.showFXActiveAutoFire.call(this),
                      this.playResumeBeforeFireSkill(D);
                  }),
                  (s.stopLockFish = function () {
                    t.prototype.stopLockFish.call(this),
                      this.onResetListButton();
                  }),
                  (s.playResumeBeforeFireSkill = function (t) {
                    (this.nodeAuto.active = !1),
                      (this.listNodeAuto[t].active = !0);
                  }),
                  (s.onResetListButton = function () {
                    this.stopAllNodeActions();
                    for (var t = 0; t < this.listNodeAuto.length; ++t)
                      v(this.listNodeAuto[t]),
                        this.listNodeAuto[t].setPosition(
                          this._posButton[this._posButton.length - 1]
                        ),
                        (this.listNodeAuto[t].active = !1);
                    (this._isShow = !1),
                      (this.nodeAuto.active = !0),
                      (this.btnAuto.enabled = !0),
                      this.panelExpand.setScale(A(1, 0, 1));
                  }),
                  e
                );
              })(_)).prototype,
              "panelExpand",
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
            (R = e(C.prototype, "nodeAuto", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(C.prototype, "btnAuto", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(C.prototype, "listSpriteFrame", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (H = e(C.prototype, "listNodeAuto", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (y = C))
          ) || y)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotCellHistory1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfUtilities.ts",
    "./gfBaseCellHistory.ts",
  ],
  function (t) {
    "use strict";
    var e, o, s, i, r, a;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (s = t._decorator), (i = t.Label);
        },
        function (t) {
          r = t.formatTimeStamp;
        },
        function (t) {
          a = t.GfBaseCellHistory;
        },
      ],
      execute: function () {
        var n;
        o._RF.push(
          {},
          "fa4efAsfWhFkbPfQ+agBzmq",
          "JackpotCellHistory1998",
          void 0
        );
        var c = s.ccclass;
        t(
          "JackpotCellHistory1998",
          c("JackpotCellHistory1998")(
            (n = (function (t) {
              function o() {
                return t.apply(this, arguments) || this;
              }
              return (
                e(o, t),
                (o.prototype.updateData = function (e) {
                  t.prototype.updateData.call(this, e),
                    (this.time.getComponent(i).string = r(
                      e.time,
                      " #DD#/#MM# #hhhh#:#mm#:#ss#"
                    ));
                }),
                o
              );
            })(a))
          ) || n
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotHistory1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfBaseHistory.ts"],
  function (t) {
    "use strict";
    var o, r, s, c;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (r = t.cclegacy), (s = t._decorator);
        },
        function (t) {
          c = t.GfBaseHistory;
        },
      ],
      execute: function () {
        var e;
        r._RF.push({}, "d88f4FrtSFKn5deRhHIFtBj", "JackpotHistory1998", void 0);
        var i = s.ccclass;
        t(
          "JackpotHistory1998",
          i("JackpotHistory1998")(
            (e = (function (t) {
              function r() {
                return t.apply(this, arguments) || this;
              }
              return o(r, t), r;
            })(c))
          ) || e
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotInfo1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfActionHelper.ts",
    "./gfEventEmitter.ts",
    "./gfBaseEvents.ts",
    "./gfJackpotDragonInfo.ts",
    "./gfDragonEvent.ts",
    "./gfUtilities.ts",
  ],
  function (t) {
    "use strict";
    var n, e, o, a, i, r, c, s, l, u, f, p, g, d, h, v;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (i = t.cclegacy),
            (r = t._decorator),
            (c = t.Node),
            (s = t.Animation),
            (l = t.tween),
            (u = t.Label);
        },
        function (t) {
          f = t.stopAllActions;
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          g = t.default;
        },
        function (t) {
          d = t.gfJackpotDragonInfo;
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          v = t.formatMoney;
        },
      ],
      execute: function () {
        var D, m, y, E, A;
        i._RF.push({}, "7593aL72sBKMbaHuT/6hOD9", "JackpotInfo1998", void 0);
        var k = r.ccclass,
          w = r.property;
        t(
          "JackpotInfo1998",
          ((D = k("JackpotInfo1998")),
          (m = w(c)),
          D(
            ((A = n(
              (E = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, i = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    i[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(i)) || this),
                    o(n, "waringDragon", A, a(n)),
                    n
                  );
                }
                e(n, t);
                var i = n.prototype;
                return (
                  (i.onBossWarning = function () {
                    var t = this,
                      n = this.waringDragon.getComponent(s);
                    f(this.txtValue),
                      l(this.txtValue)
                        .call(function () {
                          p.instance.emit(h.SOUND.DRAGON_APPEAR),
                            p.instance.emit(g.COMMON.SHAKE_SCREEN, {
                              timeOneStep: 0.1,
                              amplitude: 10,
                            }),
                            (t.waringDragon.active = !0),
                            n.play();
                        })
                        .delay(2)
                        .call(function () {
                          (t.waringDragon.active = !1),
                            p.instance.emit(g.SOUND.RESET_VOLUME);
                        })
                        .start();
                  }),
                  (i.onUpdateRoomJackpot = function (t, n) {
                    void 0 === n && (n = 3e3),
                      t &&
                        this.node.active &&
                        (this.txtValue.onUpdateValue
                          ? this.txtValue.onUpdateValue(+t, n)
                          : (this.txtValue.getComponent(u).string = v(t)));
                  }),
                  n
                );
              })(d)).prototype,
              "waringDragon",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (y = E))
          ) || y)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotStarFX1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfUtilities.ts",
    "./gfBaseConfig.ts",
    "./utils2.ts",
    "./gfActionHelper.ts",
    "./gfEventEmitter.ts",
    "./gfJackpotStarFX.ts",
    "./gfDragonEvent.ts",
  ],
  function (t) {
    "use strict";
    var n, e, o, a, i, c, r, l, f, s, u, d, p, y, g, h, S, v;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy),
            (o = t._decorator),
            (a = t.v3),
            (i = t.isValid),
            (c = t.tween),
            (r = t.UITransform);
        },
        function (t) {
          (l = t.SetZIndex), (f = t.getPositionInOtherNode);
        },
        function (t) {
          s = t.default;
        },
        function (t) {
          u = t.setOpacity;
        },
        function (t) {
          (d = t.rotateBy), (p = t.fadeIn), (y = t.scaleTo), (g = t.fadeOut);
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          S = t.gfJackpotStarFX;
        },
        function (t) {
          v = t.default;
        },
      ],
      execute: function () {
        var O;
        e._RF.push({}, "352b8NDHDFF0qTrCQ0NXev0", "JackpotStarFX1998", void 0);
        var m = o.ccclass,
          A =
            (o.property,
            [
              a(4, 242),
              a(202, 139),
              a(246, -69),
              a(114, -234),
              a(-105, -236),
              a(-244, -71),
              a(-201, 139),
            ]);
        t(
          "JackpotStarFX1998",
          m("JackpotStarFX1998")(
            (O = (function (t) {
              function e() {
                return t.apply(this, arguments) || this;
              }
              n(e, t);
              var o = e.prototype;
              return (
                (o.onLoad = function () {
                  l(this.node, s.instance.PERSIST_Z_INDEX.POPUP);
                }),
                (o.playAnimation = function (t) {
                  var n = this,
                    e = [].concat(t),
                    o = 0.15;
                  u(this.image, 0),
                    e.forEach(function (t, e) {
                      if (i(t.node)) {
                        var o = f(n.node, t.node);
                        o &&
                          ((t.node.position = o),
                          (t.node.parent = n.node),
                          t.moveToJackpotStar({
                            delay: 0.15 * e,
                            position: A[e],
                          }));
                      }
                    }),
                    c(this.node)
                      .delay(2.05)
                      .parallel(
                        d(3.55, 720),
                        c().then(
                          c()
                            .delay(0.5)
                            .call(function () {
                              c(n.image).then(p(0.5)).start();
                            })
                            .delay(1.65)
                            .call(function () {
                              e.forEach(function (t) {
                                i(t.node) && t.playGlowEffect();
                              });
                            })
                            .delay(o)
                            .parallel(
                              y(1.25, 0.4),
                              c()
                                .delay(1)
                                .call(function () {
                                  h.instance.emit(
                                    v.DRAGON.BIG_EXPLOSION,
                                    n.node
                                      .getComponent(r)
                                      .convertToWorldSpaceAR(a(0, 0))
                                  );
                                })
                                .delay(0.3)
                            )
                            .call(function () {
                              e.forEach(function (t) {
                                i(t.node) && t.flyAway(0.2);
                              }),
                                c(n.image).then(g(0.5)).start();
                            })
                            .delay(o)
                            .call(function () {
                              h.instance.emit(v.DRAGON.SHOW_JACKPOT_WINAMOUNT);
                            })
                            .delay(0.75)
                            .call(function () {
                              h.instance.emit(v.DRAGON.DONE_JACKPOT_STAR);
                            })
                            .removeSelf()
                        )
                      )
                      .start();
                }),
                e
              );
            })(S))
          ) || O
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotWinPopup1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEventEmitter.ts",
    "./gfActionHelper.ts",
    "./gfBaseEvents.ts",
    "./gf3DParticle.ts",
    "./gfDragonEvent.ts",
    "./gfDragonJackpotWinPopup.ts",
  ],
  function (t) {
    "use strict";
    var i, n, e, o, a, s, c, u, r, l, p, h;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy),
            (e = t._decorator),
            (o = t.v3),
            (a = t.tween),
            (s = t.Button);
        },
        function (t) {
          c = t.default;
        },
        function (t) {
          u = t.stopAllActions;
        },
        function (t) {
          r = t.default;
        },
        function (t) {
          l = t.gf3DParticle;
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          h = t.gfDragonJackpotWinPopup;
        },
      ],
      execute: function () {
        var f;
        n._RF.push(
          {},
          "3b797TzuYxNxqEWJvIIfN5M",
          "JackpotWinPopup1998",
          void 0
        );
        var g = e.ccclass;
        e.property,
          t(
            "JackpotWinPopup1998",
            g("jackpotWinPopup1998")(
              (f = (function (t) {
                function n() {
                  for (
                    var i, n = arguments.length, e = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    e[o] = arguments[o];
                  return (
                    ((i = t.call.apply(t, [this].concat(e)) || this)._isSkip =
                      !1),
                    i
                  );
                }
                i(n, t);
                var e = n.prototype;
                return (
                  (e.start = function () {
                    var t = this;
                    (this.txtCoin.string = "0"),
                      (this.winFrame.active = !1),
                      (this.animNode.scale = o(0, 0, 0)),
                      (this._isSkip = !1),
                      c.instance.emit(r.SOUND.STOP_ALL_AUDIO),
                      c.instance.emit(r.SOUND.BOSS_BIG_WIN),
                      c.instance.emit(p.SOUND.PLAY_EFFECT_JACKPOT_COIN),
                      (this.particleCoin.active = !0),
                      u(this.particleCoin),
                      this.particleCoin.getComponent(l).startAnimation(),
                      (this.winFrame.active = !0),
                      this.winFrame.scale.set(1, 0.2),
                      a(this.winFrame)
                        .to(0.1, { scale: o(1, 1, 1) })
                        .start(),
                      a(this.animNode)
                        .to(0.25, { scale: o(0.75, 0.75, 0.75) })
                        .start(),
                      this.scheduleOnce(function () {
                        t.blackLayer.getComponent(s).interactable = !0;
                      }, 0.65),
                      this._tweenCoin();
                  }),
                  (e._tweenCoin = function () {
                    var t = this,
                      i = 0.75 * this.winValue,
                      n = 0.5 * this.winValue;
                    (this.tweenCoin = a(this)
                      .to(this._duration / 3, null, {
                        onUpdate: function (i, e) {
                          t.coinValue = e * n;
                        },
                        easing: "sineInOut",
                      })
                      .to(this._duration / 3, null, {
                        onUpdate: function (i, e) {
                          t.coinValue = n + e * t.winValue * 0.25;
                        },
                        easing: "sineInOut",
                      })
                      .to(this._duration / 3, null, {
                        onUpdate: function (n, e) {
                          t.coinValue = i + e * t.winValue * 0.25;
                        },
                        easing: "sineInOut",
                      })
                      .call(function () {
                        t._isSkip = !0;
                      })),
                      this.tweenCoin.start();
                  }),
                  (e.quickShow = function () {
                    var t = this;
                    if (this.coinValue === this.winValue)
                      return (
                        (this.blackLayer.getComponent(s).interactable = !1),
                        void this.hide()
                      );
                    this._isSkip ||
                      ((this._isSkip = !0),
                      this.tweenCoin.stop(),
                      u(this),
                      (this.tweenCoin = a(this)
                        .to(1, null, {
                          onUpdate: function (i, n) {
                            t.coinValue =
                              t.coinValue + (t.winValue - t.coinValue) * n;
                          },
                        })
                        .delay(1)
                        .call(function () {
                          (t.winValue = 0), t.hide();
                        })
                        .start()));
                  }),
                  n
                );
              })(h))
            ) || f
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LoadingScene1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfLoadingScene.ts",
    "./Config1998.ts",
    "./AssetBundle1998.ts",
  ],
  function (e) {
    "use strict";
    var n, t, i, c, s, a;
    return {
      setters: [
        function (e) {
          n = e.inheritsLoose;
        },
        function (e) {
          (t = e.cclegacy), (i = e._decorator);
        },
        function (e) {
          c = e.gfLoadingScene;
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          a = e.default;
        },
      ],
      execute: function () {
        var o;
        t._RF.push({}, "6be6eseWuFI/6BYeKJFk81V", "LoadingScene1998", void 0);
        var r = i.ccclass;
        e(
          "LoadingScene1998",
          r("LoadingScene1998")(
            (o = (function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              n(t, e);
              var i = t.prototype;
              return (
                (i.initAssetBundle = function () {
                  a.instance || new a();
                }),
                (i.initGameConfig = function () {
                  s.instance || new s();
                }),
                (i.setGameAndLobbyPrefab = function (e, n, t, i) {
                  this.initGameConfig(),
                    (s.instance.ScenePrefabs[s.instance.SceneName.Game1] = e),
                    (s.instance.ScenePrefabs[s.instance.SceneName.Game3] = n),
                    (s.instance.ScenePrefabs[s.instance.SceneName.Lobby] = t),
                    (this.persistNodePrefab = i),
                    (this.isLoadByPrefab = !0);
                }),
                t
              );
            })(c))
          ) || o
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LobbyLayer1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfLobbyLayer.ts",
    "./utils2.ts",
    "./gfUtilities.ts",
    "./gfEventEmitter.ts",
    "./gfBaseEvents.ts",
    "./gfWallet.ts",
    "./DataStore1998.ts",
    "./EventsCode1998.ts",
  ],
  function (t) {
    "use strict";
    var e, n, a, i, o, r, l, s, c, u, f, p, y, v, b, E, h, d, L, S;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (a = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (r = t._decorator),
            (l = t.Prefab),
            (s = t.input),
            (c = t.Input),
            (u = t.KeyCode);
        },
        function (t) {
          f = t.gfLobbyLayer;
        },
        function (t) {
          (p = t.formatMoney), (y = t.loadAvatarFacebook);
        },
        function (t) {
          (v = t.registerEvent), (b = t.formatUserName);
        },
        function (t) {
          E = t.default;
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          d = t.gfWallet;
        },
        function (t) {
          L = t.default;
        },
        function (t) {
          S = t.default;
        },
      ],
      execute: function () {
        var g, _, A, C, U, w, m;
        o._RF.push({}, "0982dkOFPxGzYpEp2Jyt0wj", "LobbyLayer1998", void 0);
        var W = r.ccclass,
          P = r.property;
        t(
          "LobbyLayer1998",
          ((g = W("LobbyLayer1998")),
          (_ = P(d)),
          (A = P(l)),
          g(
            ((w = e(
              (U = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, o = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    a(e, "wallet", w, i(e)),
                    a(e, "cutSceneJPEventPrefab", m, i(e)),
                    e
                  );
                }
                n(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      L.instance.setLobbyWallet(this.wallet);
                  }),
                  (o.initEvents = function () {
                    t.prototype.initEvents.call(this),
                      s.on(c.EventType.KEY_DOWN, this.onKeyDown, this),
                      v(
                        S.CUT_SCENE.SHOW_CUT_SCENE_ON_LOBBY,
                        this.onShowCutSceneEvent,
                        this
                      );
                  }),
                  (o.onKeyDown = function (t) {
                    t.keyCode == u.BACKSPACE &&
                      this.node &&
                      !0 === this.node.active &&
                      this.onBtnBackClick();
                  }),
                  (o.onUpdateInfo = function () {
                    var t = L.instance.getSelfInfo();
                    t.Version &&
                      E.instance.emit(h.COMMON.UPDATE_GAME_VERSION, t.Version),
                      (this.txtUserName.string = b(t.Username)),
                      (this.txtWallet.string = p(t.Wallet)),
                      this.avatarAtlas &&
                        y &&
                        (t.Avatar &&
                          0 === t.Avatar.indexOf("Avatar") &&
                          (t.Avatar = t.Avatar.replace("Avatar", "")),
                        y(
                          this.avatarSprite,
                          t.Avatar,
                          this.avatarAtlas,
                          "avatar_",
                          2
                        )),
                      t &&
                        t.EventInfo &&
                        E.instance.emit(
                          S.EVENT.UPDATE_EVENT_STATUS,
                          t.EventInfo
                        );
                  }),
                  (o.onShowCutSceneEvent = function (t) {
                    E.instance.emit(
                      S.CUT_SCENE.SHOW_CUT_SCENE,
                      this.cutSceneJPEventPrefab,
                      t
                    );
                  }),
                  (o.onUpdateLobbyWallet = function (e) {
                    (L.instance.getSelfInfo().Wallet = e),
                      this.wallet
                        ? this.wallet.updateWallet(e)
                        : t.prototype.onUpdateLobbyWallet.call(this, e);
                  }),
                  (o.onUpdateLobbyResume = function (e) {
                    this.wallet
                      ? this.wallet.forceUpdateWallet(e.Wallet)
                      : t.prototype.onUpdateLobbyResume.call(this, e);
                  }),
                  e
                );
              })(f)).prototype,
              "wallet",
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
            (m = e(U.prototype, "cutSceneJPEventPrefab", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = U))
          ) || C)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LuckyEffect1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfBaseEvents.ts",
    "./gfEventEmitter.ts",
    "./gfActionHelper.ts",
    "./utils2.ts",
    "./gfLuckyEffect.ts",
  ],
  function (t) {
    "use strict";
    var e, c, n, i, o, s, u, a, r, l, f;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (c = t.cclegacy), (n = t._decorator), (i = t.tween), (o = t.v3);
        },
        function (t) {
          s = t.default;
        },
        function (t) {
          u = t.default;
        },
        function (t) {
          (a = t.fadeIn), (r = t.rotateBy);
        },
        function (t) {
          l = t.setOpacity;
        },
        function (t) {
          f = t.default;
        },
      ],
      execute: function () {
        var h;
        c._RF.push({}, "9c0877wShdOE6L3Q5t7Vm+y", "LuckyEffect1998", void 0);
        var d = n.ccclass;
        t(
          "LuckyEffect1998",
          d("LuckyEffect1998")(
            (h = (function (t) {
              function c() {
                return t.apply(this, arguments) || this;
              }
              return (
                e(c, t),
                (c.prototype.playEffect = function (t) {
                  var e = this,
                    c = t.Multiplier - 2,
                    n = 0.5;
                  (this.iconGlow.active = !0),
                    l(this.iconGlow, 0),
                    (this.numberNode.angle = 90 * c),
                    i(this.iconGlow).then(a(2, "cubicOut")).start(),
                    i(this.numberNode)
                      .parallel(
                        i().then(r(this.rotateTime, -1080, "cubicOut")),
                        i().then(a(this.rotateTime, "cubicOut"))
                      )
                      .start(),
                    i(this.pinNode).then(a(0.5)).start(),
                    i(this.node)
                      .to(n, { scale: o(1, 1, 1) })
                      .delay(this.rotateTime - n)
                      .call(function () {
                        i(e.multiNode[c])
                          .delay(0.2)
                          .to(n, { scale: o(1.5, 1.5, 1) })
                          .call(function () {
                            i(e.node)
                              .to(0.7, { scale: o(0, 0, 1) })
                              .call(function () {
                                u.instance.emit(
                                  s.EFFECT_LAYER.PLAY_LUCKY_EFFECT_DONE,
                                  t
                                ),
                                  e.returnPool();
                              })
                              .start();
                          })
                          .start();
                      })
                      .start();
                }),
                c
              );
            })(f))
          ) || h
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MainController1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfMainController.ts",
    "./gfNetworkGameEvent.ts",
    "./loadConfigAsync.ts",
    "./gfMainFSM.ts",
    "./gfEventEmitter.ts",
    "./DataStore1998.ts",
    "./gfBaseEvents.ts",
    "./Config1998.ts",
    "./EventsCode1998.ts",
    "./gfNetworkParser.ts",
    "./NetworkParser1998.ts",
    "./gfUtilities.ts",
    "./EventController1998.ts",
    "./gameCommonUtils.ts",
    "./NetworkGameEvent1998.ts",
  ],
  function (e) {
    "use strict";
    var n, t, a, i, s, o, c, r, E, O, f, l, u, N, _, m, d, I, P, R;
    return {
      setters: [
        function (e) {
          (n = e.inheritsLoose), (t = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy), (i = e.warn), (s = e.error);
        },
        function (e) {
          o = e.default;
        },
        function (e) {
          c = e.default;
        },
        function (e) {
          r = e.default;
        },
        function (e) {
          E = e.default;
        },
        function (e) {
          O = e.default;
        },
        function (e) {
          f = e.default;
        },
        function (e) {
          l = e.default;
        },
        function (e) {
          u = e.default;
        },
        function (e) {
          N = e.default;
        },
        function (e) {
          _ = e.default;
        },
        function (e) {
          m = e.default;
        },
        function (e) {
          d = e.registerEvent;
        },
        function (e) {
          I = e.default;
        },
        function (e) {
          P = e.default;
        },
        function (e) {
          R = e.default;
        },
      ],
      execute: function () {
        a._RF.push({}, "860c9kQ7alFAYbGNDjdfitE", "MainController1998", void 0),
          (e(
            "default",
            (function (e) {
              function a() {
                var n;
                return (
                  ((n = e.call(this) || this)._onOpenBox = null),
                  (n._onUserWinMiniGame = null),
                  (a.instance = t(n)),
                  (n._onOpenBox = n.onOpenBox.bind(t(n))),
                  (n._onUserWinMiniGame = n.onUserWinMiniGame.bind(t(n))),
                  _.instance.registerEvent(R.LOBBY_OPEN_BOX, n._onOpenBox),
                  _.instance.registerEvent(R.GAME_OPEN_BOX, n._onOpenBox),
                  _.instance.registerEvent(
                    R.USER_WIN_MINI_GAME,
                    n._onUserWinMiniGame
                  ),
                  d(N.EVENT.SEND_OPEN_BOX, n.sendOpenBox, t(n)),
                  n
                );
              }
              n(a, e);
              var o = a.prototype;
              return (
                (o.sendOpenBox = function (e) {
                  var n = e.type,
                    t = e.index,
                    a = n === u.instance.RoomKind.Normal ? 1 : 2;
                  f.instance.getCurrentSceneName() ===
                  u.instance.SceneName.Lobby
                    ? m.instance.sendOpenBoxLobby(a, t)
                    : this._isInGame()
                    ? m.instance.sendOpenBoxGame(a, t)
                    : i("Invalid scene");
                }),
                (o._isInGame = function () {
                  var e = f.instance.getCurrentSceneName();
                  return (
                    e === u.instance.SceneName.Game1 ||
                    e === u.instance.SceneName.Game3
                  );
                }),
                (o.onOpenBox = function (e) {
                  if (e && !e.err && e.data) {
                    var n = e.data,
                      t = n.arr1,
                      a = n.arr2,
                      i = n.GoldReward,
                      o = u.instance.RoomKind,
                      c = o.VIP,
                      r = o.Normal,
                      E = t ? r : c;
                    I.instance.setMiniGameMatrixByType(E, E === r ? t : a),
                      O.instance.emit(N.EVENT.ON_OPEN_BOX, e.data),
                      i > 0 && I.instance.setMiniGameMatrixByType(E, []);
                  } else s("Data Fail", e);
                }),
                (o.onUserWinMiniGame = function (e) {
                  O.instance.emit(N.EVENT.OTHER_USER_WIN_MINI_GAME, e);
                }),
                (o.onLoginLobby = function (n) {
                  e.prototype.onLoginLobby.call(this, n),
                    n &&
                      n.EventInfo &&
                      n.EventInfo.RewardKeymap1 &&
                      n.EventInfo.RewardKeymap2 &&
                      I.instance.setRewardKeyMap(
                        n.EventInfo.RewardKeymap1,
                        n.EventInfo.RewardKeymap2
                      );
                }),
                (o.onNetworkState = function (e) {
                  (f.instance && O.instance) ||
                    i("game already destroyed or either not initialized");
                  var n = r.getConfig().LOGIN_IFRAME,
                    t = e.EventID,
                    a = e.EventData,
                    s = f.instance.getSelfInfo(),
                    o = { customMsg: t, code: a.code };
                  switch (
                    (O.instance.emit(l.COMMON.NETWORK_STATUS_INFO, e),
                    e.EventID)
                  ) {
                    case c.PINGPONG:
                      O.instance.emit(l.COMMON.UPDATE_PING, e.EventData.data);
                      break;
                    case c.NETWORK_CONNECT:
                      if (
                        E.instance.isStateLoginGameRoom() ||
                        E.instance.isStateGameRoom()
                      )
                        _.instance.sendJoinDesk(s.DeskId);
                      else if (u.instance.IsNewLogin) {
                        var N = this.getLoginLobbyData();
                        _.instance.sendLoginLobby(N);
                      } else this.onLoginLobbyFurther();
                      break;
                    case c.NETWORK_WAITING:
                      O.instance.emit(l.COMMON.SHOW_WAITING);
                      break;
                    case c.NETWORK_ERROR:
                      O.instance.emit(l.POPUP.POPUP_PROMPT, c.NETWORK_ERROR);
                      break;
                    case c.NETWORK_CLOSE:
                      break;
                    case c.NETWORK_POOR:
                      O.instance.emit(l.COMMON.SHOW_WAITING),
                        O.instance.emit(l.COMMON.PAUSE_AUTO_FIRE);
                      break;
                    case c.NETWORK_DIE:
                      O.instance.emit(l.COMMON.PAUSE_AUTO_FIRE),
                        n
                          ? O.instance.emit(l.POPUP.POPUP_PROMPT, o)
                          : this.handleBackGame();
                      break;
                    case c.AUTHEN_FAIL:
                    case c.LOGIN_IN_OTHER_DEVICE:
                      n
                        ? O.instance.emit(l.POPUP.POPUP_PROMPT, o)
                        : this.handleBackGame();
                      break;
                    case c.NETWORK_RECONNECT:
                      this.onReconnect();
                      break;
                    case c.SERVER_MAINTAIN:
                      (o.customMsg = c.MSG_CODE.SERVER_MAINTAIN),
                        O.instance.emit(l.POPUP.POPUP_PROMPT, o);
                  }
                }),
                (o.handleBackGame = function () {
                  O.instance.emit(l.COMMON.REFRESH_PAGE), P.handleBackToLobby();
                }),
                (o.onCatchFish = function (e) {
                  u.instance.IsNewLogin ||
                    (e.isDie = e.FishID > 0 && 32e4 !== e.FishID),
                    e.skillInfo &&
                      !Array.isArray(e.skillInfo) &&
                      (e.skillInfo = [e.skillInfo]),
                    O.instance.emit(l.GAME_LAYER.CATCH_FISH, e);
                }),
                a
              );
            })(o)
          ).instance = null),
          a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MainPUController1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Config1998.ts",
    "./gfEventEmitter.ts",
    "./EventsCode1998.ts",
    "./PlayingMode1998.ts",
    "./gfActionHelper.ts",
    "./PrepareMode1998.ts",
    "./utils2.ts",
    "./EventController1998.ts",
  ],
  function (e) {
    "use strict";
    var t, n, o, i, a, r, s, l, c, d, p, u, h, g, M, f, y, P, v;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (r = e._decorator),
            (s = e.Node),
            (l = e.tween),
            (c = e.v3),
            (d = e.Tween),
            (p = e.Component);
        },
        function (e) {
          u = e.default;
        },
        function (e) {
          h = e.default;
        },
        function (e) {
          g = e.default;
        },
        function (e) {
          M = e.default;
        },
        function (e) {
          f = e.v3f;
        },
        function (e) {
          y = e.default;
        },
        function (e) {
          P = e.setOpacity;
        },
        function (e) {
          v = e.default;
        },
      ],
      execute: function () {
        var T, E, _, O, m, C, b, N, U;
        a._RF.push(
          {},
          "88fd1hBbT5IjboYyYFdI1DE",
          "MainPUController1998",
          void 0
        );
        var S = r.ccclass,
          A = r.property;
        e(
          "default",
          ((T = S("MainPUController1998")),
          (E = A(y)),
          (_ = A(M)),
          (O = A(s)),
          T(
            ((b = t(
              (C = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    o(t, "prepareMode", b, i(t)),
                    o(t, "playingMode", N, i(t)),
                    o(t, "decorText", U, i(t)),
                    t
                  );
                }
                n(t, e);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    (this.prepareMode.changePlayingMode =
                      this.changePlayingMode.bind(this)),
                      this.reset();
                  }),
                  (a.onEnableDecor = function (e) {
                    this.decorText.active = e;
                  }),
                  (a.show = function () {
                    this.node.active = !0;
                    var e = u.instance.RoomKind,
                      t = e.VIP,
                      n = e.Normal,
                      o = v.instance.getConfigModeName(),
                      i = o.PLAYING_VIP,
                      a = o.PLAYING_NORMAL,
                      r = o.CHOOSE_HAMMER,
                      s = v.instance.getCurrentMode();
                    switch (
                      ((this.playingMode.node.active = !1),
                      (this.prepareMode.node.active = !1),
                      h.instance.emit(g.EVENT.ENABLE_POPUP_BUTTONS, !0),
                      s)
                    ) {
                      case i:
                        this.playingMode.show(t, !1), this.onEnableDecor(!1);
                        break;
                      case a:
                        this.playingMode.show(n, !1), this.onEnableDecor(!1);
                        break;
                      case r:
                      default:
                        this.onEnableDecor(!0), this.prepareMode.show();
                    }
                  }),
                  (a.changePlayingMode = function (e) {
                    this.playingMode.updateAutoTrigger(!1, !0),
                      this.playingMode.show(e),
                      this.onEnableDecor(!1);
                  }),
                  (a.changePrepareMode = function (e) {
                    var t = this;
                    (this.playingMode.node.active = !0),
                      this.playingMode.node.setScale(f(1)),
                      l(this.playingMode.node)
                        .to(0.2, { scale: f(0) })
                        .call(function () {
                          (t.playingMode.node.active = !1),
                            (t.playingMode.node.scale = f(1));
                        })
                        .start(),
                      this.prepareMode.node.setScale(c(0, 0, 1)),
                      l(this.prepareMode.node)
                        .delay(0.1)
                        .to(0.2, { scale: f(1) })
                        .call(function () {
                          P(t.playingMode.boxContainer, 255),
                            "function" == typeof e && e();
                        })
                        .start();
                  }),
                  (a.onChangeFromPlayingToPrepare = function (e) {
                    this.node.active &&
                      this.playingMode.node.active &&
                      this.playingMode.onChangeToPrepareMode &&
                      this.playingMode.onChangeToPrepareMode(e);
                  }),
                  (a.reset = function (e) {
                    void 0 === e && (e = !1),
                      e && this.playingMode.reset(),
                      this.playingMode.updateAutoTrigger &&
                        this.playingMode.updateAutoTrigger(!1, !0),
                      d.stopAllByTarget(this.prepareMode.node),
                      d.stopAllByTarget(this.playingMode.node),
                      this.prepareMode.node.setScale(f(1)),
                      this.playingMode.node.setScale(f(1)),
                      this.onEnableDecor(!0),
                      h &&
                        h.instance &&
                        (h.instance.emit(g.SOUND.STOP_CLAY_POT_APPEAR),
                        h.instance.emit(g.SOUND.STOP_EVENT_COIN_FLY),
                        h.instance.emit(g.SOUND.EVENT_STOP_COUNT_COIN),
                        h.instance.emit(g.SOUND.EVENT_STOP_CLAY_POT_BREAK),
                        h.instance.emit(g.SOUND.EVENT_STOP_CLAY_POT_COUNT_UP));
                  }),
                  (a.onResume = function () {
                    this.playingMode.onResume(), this.show();
                  }),
                  (a.onOpenBox = function (e) {
                    this.node.active &&
                      this.playingMode.node.active &&
                      this.playingMode.onOpenBox(e);
                  }),
                  (a.onUpdateHammerCount = function () {
                    this.node.active &&
                      (this.prepareMode.node.active &&
                        this.prepareMode.onUpdateHammerCount(),
                      this.playingMode.node.active &&
                        this.playingMode.onUpdateHammerCount());
                  }),
                  (a.onEventUpdateStatus = function () {
                    this.node.active &&
                      this.prepareMode.node.active &&
                      this.prepareMode.onEventUpdateStatus();
                  }),
                  (a.checkUpdateWallet = function () {
                    this.playingMode.checkUpdateWallet &&
                      this.playingMode.checkUpdateWallet();
                  }),
                  t
                );
              })(p)).prototype,
              "prepareMode",
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
            (N = t(C.prototype, "playingMode", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = t(C.prototype, "decorText", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = C))
          ) || m)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NetFX1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfNetFX.ts"],
  function (t) {
    "use strict";
    var e, n, s, i;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (s = t._decorator);
        },
        function (t) {
          i = t.gfNetFX;
        },
      ],
      execute: function () {
        var r;
        n._RF.push({}, "2f9544eqphMQ5FlG5oqZE5+", "NetFX1998", void 0);
        var o = s.ccclass;
        s.property,
          t(
            "NetFX1998",
            o("NetFX1998")(
              (r = (function (t) {
                function n() {
                  return t.apply(this, arguments) || this;
                }
                return (
                  e(n, t),
                  (n.prototype.playSpineAnim = function (t) {
                    var e = this;
                    this.spine.skeletonData = t.asset;
                    var n = t.MyUser ? t.MyUser : this._animationName;
                    this.spine.setAnimation(0, n, !1),
                      this.spine.setCompleteListener(function () {
                        e.returnPool();
                      });
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
  "chunks:///_virtual/NetFXEvent1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfNetFX.ts",
    "./gfActionHelper.ts",
    "./gfUtilities.ts",
    "./Config1998.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, s, r, a, c, l, u, h, f;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy),
            (i = t.color),
            (o = t._decorator),
            (s = t.Sprite),
            (r = t.Color);
        },
        function (t) {
          a = t.gfNetFX;
        },
        function (t) {
          c = t.v3f;
        },
        function (t) {
          l = t.SetZIndex;
        },
        function (t) {
          u = t.default;
        },
        function (t) {
          (h = t.setOpacity), (f = t.getRandomInt);
        },
      ],
      execute: function () {
        var d;
        n._RF.push({}, "8253de0pX9PioR4LUg1+R8h", "NetFXEvent1998", void 0);
        var p = [
            i(180, 30, 30, 255),
            i(30, 180, 30, 255),
            i(30, 30, 180, 255),
            i(30, 180, 180, 255),
            i(180, 30, 180, 255),
            i(180, 180, 30, 255),
          ],
          g = o.ccclass;
        o.property,
          t(
            "default",
            g("NetFXEvent1998")(
              (d = (function (t) {
                function n() {
                  for (
                    var e, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    ((e =
                      t.call.apply(t, [this].concat(i)) || this)._HIT_COLOR =
                      new r(180, 30, 30, 255)),
                    e
                  );
                }
                e(n, t);
                var i = n.prototype;
                return (
                  (i.initAssets = function (t) {
                    var e = this;
                    if (((this.spine.skeletonData = t.asset), 2 == t.kind))
                      (this._animationName = "NoBang"),
                        l(this.node, u.instance.TOP_Z_INDEX.NETFX_ICE),
                        t.isMe ||
                          (h(this.node, 204), (this.node.scale = c(0.7)));
                    else if (
                      ((this.node.scale = this.getRandomArbitrary(0.65, 0.75)),
                      t.isMe || h(this.node, 140),
                      (this._animationName = "animation"),
                      l(this.node, u.instance.TOP_Z_INDEX.NETFX),
                      t.isMe)
                    ) {
                      this.node.scale = this.getRandomArbitrary(0.85, 0.95);
                      var n = f(0, p.length - 1);
                      this.node.getComponent(s).color = p[n];
                    }
                    this.spine.setAnimation(0, this._animationName, !1),
                      this.spine.setCompleteListener(function () {
                        e.returnPool();
                      });
                  }),
                  (i.returnPool = function () {
                    (this.node.scale = c(1)),
                      (this.node.getComponent(s).color = r.WHITE),
                      t.prototype.returnPool.call(this);
                  }),
                  (i.getRandomArbitrary = function (t, e) {
                    return Math.random() * (e - t) + t;
                  }),
                  n
                );
              })(a))
            ) || d
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NetworkGameEvent1998.ts",
  ["cc", "./gfNetworkGameEvent.ts", "./gfUtilities.ts"],
  function (t) {
    "use strict";
    var e, n, c;
    return {
      setters: [
        function (t) {
          e = t.cclegacy;
        },
        function (t) {
          n = t.default;
        },
        function (t) {
          c = t.mergeTwoObject;
        },
      ],
      execute: function () {
        e._RF.push(
          {},
          "597f3YBfGVB7b6fPzzzXniQ",
          "NetworkGameEvent1998",
          void 0
        );
        var i = {
          LOBBY_OPEN_BOX: 1012,
          GAME_OPEN_BOX: 2056,
          USER_WIN_MINI_GAME: 2057,
        };
        i = c(n, i);
        t("default", i);
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NetworkKeyMap1998.ts",
  ["cc", "./gfNetworkKeyMap.ts", "./gfUtilities.ts"],
  function (e) {
    "use strict";
    var t, c, r;
    return {
      setters: [
        function (e) {
          t = e.cclegacy;
        },
        function (e) {
          c = e.default;
        },
        function (e) {
          r = e.mergeTwoObject;
        },
      ],
      execute: function () {
        t._RF.push({}, "5c15f1DOJNISLXNMyD1L4Hx", "NetworkKeyMap1998", void 0);
        var n = e("default", {
          ct1: "CountType1",
          ct2: "CountType2",
          rwkm1: "RewardKeymap1",
          rwkm2: "RewardKeymap2",
        });
        r(n, c), Object.assign(c, n), t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NetworkParser1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfNetworkParser.ts",
    "./NetworkGameEvent1998.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, s, r;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose), (n = t.assertThisInitialized);
        },
        function (t) {
          i = t.cclegacy;
        },
        function (t) {
          s = t.default;
        },
        function (t) {
          r = t.default;
        },
      ],
      execute: function () {
        i._RF.push({}, "8771bmyrjVCLKSrYgHqXM0G", "NetworkParser1998", void 0),
          (t(
            "default",
            (function (t) {
              function i() {
                var e;
                return (e = t.call(this) || this), (i.instance = n(e)), e;
              }
              e(i, t);
              var s = i.prototype;
              return (
                (s.sendOpenBoxLobby = function (t, e) {
                  var n = { itt: t, iid: e },
                    i = this._buildMessage(r.LOBBY_OPEN_BOX, n);
                  this.executeCommand(i);
                }),
                (s.sendOpenBoxGame = function (t, e) {
                  var n = { itt: t, iid: e },
                    i = this._buildMessage(r.GAME_OPEN_BOX, n);
                  this.executeCommand(i);
                }),
                i
              );
            })(s)
          ).instance = null),
          i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NodePoolAssets1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfCustomDataType.ts",
    "./gfNodePoolAssets.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var e, s, n, o, i, r, a, u, l;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (s = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (i = t.cclegacy), (r = t._decorator);
        },
        function (t) {
          a = t.gfGunSkeletonData;
        },
        function (t) {
          u = t.gfNodePoolAssets;
        },
        function (t) {
          l = t.convertAssetArrayToObject;
        },
      ],
      execute: function () {
        var c, p, f, g, A;
        i._RF.push({}, "369a9fAZONAkqG0rO/H7+sd", "NodePoolAssets1998", void 0);
        var h = r.ccclass,
          d = r.property;
        t(
          "NodePoolAssets1998",
          ((c = h("NodePoolAssets1998")),
          (p = d(a)),
          c(
            ((A = e(
              (g = (function (t) {
                function e() {
                  for (
                    var e, s = arguments.length, i = new Array(s), r = 0;
                    r < s;
                    r++
                  )
                    i[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(i)) || this),
                    n(e, "gunSkeletonData", A, o(e)),
                    (e.gunAssets = null),
                    e
                  );
                }
                s(e, t);
                var i = e.prototype;
                return (
                  (i.initMapAssets = function () {
                    t.prototype.initMapAssets.call(this),
                      (this.gunAssets = l(this.gunSkeletonData));
                  }),
                  (i.getGunSkeletonData = function (t) {
                    return this.gunAssets[t] && this.gunAssets[t].animation
                      ? this.gunAssets[t].animation
                      : null;
                  }),
                  e
                );
              })(u)).prototype,
              "gunSkeletonData",
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
            (f = g))
          ) || f)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NodePoolConfig1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfNodePoolConfig.ts",
    "./NodePoolAssets1998.ts",
    "./Config1998.ts",
  ],
  function (e) {
    "use strict";
    var i, n, o, t, l, a, m, d, s, p;
    return {
      setters: [
        function (e) {
          (i = e.inheritsLoose), (n = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (t = e._decorator),
            (l = e.v2),
            (a = e.Rect),
            (m = e.instantiate);
        },
        function (e) {
          d = e.default;
        },
        function (e) {
          s = e.NodePoolAssets1998;
        },
        function (e) {
          p = e.default;
        },
      ],
      execute: function () {
        var r, u;
        o._RF.push({}, "3f218ixxcpIhItnH5EEnOf0", "NodePoolConfig1998", void 0);
        var x = t.ccclass;
        e(
          "default",
          x("NodePoolConfig1998")(
            (((u = (function (e) {
              function o(i) {
                var t;
                return (t = e.call(this, i) || this), (o.instance = n(t)), t;
              }
              i(o, e);
              var t = o.prototype;
              return (
                (t.initDefaultConfig = function () {
                  (this.FISH_CONFIG = {
                    0: {
                      speed: 100.5,
                      FishMultiple: -1,
                      zIndex: 502,
                      AnimationName: ["animation"],
                      visibleSize: l(40, 50),
                      targetPoint: l(0, 0),
                      BoxCollider: [new a(-1, 0, 40, 15), new a(5, 0, 10, 40)],
                      premiumAlphaMode: !0,
                    },
                    1: {
                      speed: 100.5,
                      FishMultiple: -1,
                      zIndex: 503,
                      AnimationName: ["animation"],
                      visibleSize: l(60, 20),
                      targetPoint: l(4, 0),
                      BoxCollider: new a(4, 0, 55, 18),
                      premiumAlphaMode: !0,
                    },
                    2: {
                      speed: 80.4,
                      FishMultiple: -1,
                      zIndex: 504,
                      AnimationName: ["animation"],
                      visibleSize: l(65, 55),
                      targetPoint: l(3, -2),
                      BoxCollider: new a(5, 0, 50, 30),
                      premiumAlphaMode: !0,
                    },
                    3: {
                      speed: 80.4,
                      FishMultiple: -1,
                      zIndex: 505,
                      AnimationName: ["animation"],
                      visibleSize: l(120, 50),
                      targetPoint: l(-5, 0),
                      BoxCollider: [
                        new a(-5, 3, 60, 20),
                        new a(-18, 15, 40, 10),
                      ],
                      premiumAlphaMode: !0,
                    },
                    4: {
                      speed: 40.2,
                      FishMultiple: -1,
                      zIndex: 10,
                      AnimationName: ["animation"],
                      visibleSize: l(105, 65),
                      targetPoint: l(10, 1),
                      BoxCollider: [new a(4, 0, 65, 25), new a(37, 0, 15, 60)],
                      premiumAlphaMode: !0,
                    },
                    5: {
                      speed: 80.4,
                      FishMultiple: -1,
                      zIndex: 504,
                      AnimationName: ["animation"],
                      visibleSize: l(75, 90),
                      targetPoint: l(5, 2),
                      BoxCollider: [new a(0, 0, 60, 15), new a(15, 0, 20, 40)],
                      premiumAlphaMode: !0,
                    },
                    6: {
                      speed: 80.4,
                      FishMultiple: -1,
                      zIndex: 101,
                      AnimationName: ["animation"],
                      visibleSize: l(75, 60),
                      targetPoint: l(10, 2),
                      BoxCollider: new a(5, 0, 65, 25),
                      premiumAlphaMode: !0,
                    },
                    7: {
                      speed: 60.3,
                      FishMultiple: -1,
                      zIndex: 401,
                      AnimationName: ["animation"],
                      visibleSize: l(120, 90),
                      targetPoint: l(20, 0),
                      BoxCollider: [new a(27, 3, 33, 60), new a(5, 3, 100, 10)],
                      premiumAlphaMode: !0,
                    },
                    8: {
                      speed: 60.3,
                      FishMultiple: -1,
                      zIndex: 201,
                      AnimationName: ["animation"],
                      visibleSize: l(75, 100),
                      targetPoint: l(0, 2),
                      BoxCollider: [new a(0, 0, 65, 15), new a(5, 0, 30, 60)],
                      premiumAlphaMode: !0,
                    },
                    9: {
                      speed: 60.3,
                      FishMultiple: -1,
                      zIndex: 202,
                      AnimationName: ["animation"],
                      visibleSize: l(105, 50),
                      targetPoint: l(10, 0),
                      BoxCollider: new a(10, 0, 80, 30),
                      premiumAlphaMode: !0,
                    },
                    10: {
                      speed: 60.3,
                      FishMultiple: -1,
                      zIndex: 203,
                      AnimationName: ["animation"],
                      visibleSize: l(100, 100),
                      targetPoint: l(10, 0),
                      BoxCollider: new a(10, 0, 70, 80),
                      premiumAlphaMode: !0,
                    },
                    11: {
                      speed: 60.3,
                      FishMultiple: -1,
                      zIndex: 204,
                      AnimationName: ["animation"],
                      visibleSize: l(125, 105),
                      targetPoint: l(25, 0),
                      BoxCollider: [new a(25, 0, 50, 65), new a(-20, 0, 50, 8)],
                      premiumAlphaMode: !0,
                    },
                    12: {
                      speed: 60.3,
                      FishMultiple: -1,
                      zIndex: 205,
                      AnimationName: ["animation"],
                      visibleSize: l(110, 100),
                      targetPoint: l(10, 3),
                      BoxCollider: [new a(10, 0, 75, 30), new a(10, 0, 33, 65)],
                      premiumAlphaMode: !0,
                    },
                    13: {
                      speed: 20.1,
                      FishMultiple: -1,
                      zIndex: 505,
                      AnimationName: ["animation"],
                      visibleSize: l(125, 95),
                      targetPoint: l(-5, 5),
                      BoxCollider: [new a(10, 0, 90, 40), new a(-5, 0, 45, 60)],
                      premiumAlphaMode: !0,
                    },
                    14: {
                      speed: 40.2,
                      FishMultiple: -1,
                      zIndex: 312,
                      AnimationName: ["animation"],
                      visibleSize: l(170, 120),
                      targetPoint: l(10, 0),
                      BoxCollider: [new a(10, 0, 65, 40), new a(10, 0, 35, 70)],
                      premiumAlphaMode: !0,
                    },
                    15: {
                      speed: 40.2,
                      FishMultiple: -1,
                      zIndex: 302,
                      AnimationName: ["animation"],
                      visibleSize: l(170, 120),
                      targetPoint: l(10, 0),
                      BoxCollider: [new a(10, 0, 65, 40), new a(10, 0, 35, 70)],
                      premiumAlphaMode: !0,
                    },
                    16: {
                      speed: 60.3,
                      FishMultiple: -1,
                      zIndex: 311,
                      AnimationName: ["animation"],
                      visibleSize: l(215, 75),
                      targetPoint: l(20, 0),
                      BoxCollider: [
                        new a(20, 0, 60, 30),
                        new a(15, 0, 190, 10),
                      ],
                      premiumAlphaMode: !0,
                    },
                    17: {
                      speed: 40.2,
                      FishMultiple: -1,
                      zIndex: 304,
                      AnimationName: ["animation"],
                      visibleSize: l(305, 170),
                      targetPoint: l(0, 0),
                      BoxCollider: [
                        new a(-10, 0, 50, 70),
                        new a(-35, 0, 130, 10),
                      ],
                      premiumAlphaMode: !0,
                    },
                    18: {
                      speed: 40.2,
                      FishMultiple: -1,
                      zIndex: 315,
                      AnimationName: ["animation"],
                      visibleSize: l(305, 170),
                      targetPoint: l(0, 0),
                      BoxCollider: [
                        new a(-10, 0, 50, 70),
                        new a(-35, 0, 130, 10),
                      ],
                      premiumAlphaMode: !0,
                    },
                    19: {
                      speed: 40.2,
                      FishMultiple: -1,
                      zIndex: 306,
                      AnimationName: ["animation"],
                      visibleSize: l(245, 85),
                      targetPoint: l(-20, 0),
                      BoxCollider: [
                        new a(-20, 0, 90, 35),
                        new a(5, 0, 210, 10),
                      ],
                      premiumAlphaMode: !0,
                    },
                    20: {
                      speed: 40.2,
                      FishMultiple: -1,
                      zIndex: 349,
                      AnimationName: ["animation"],
                      visibleSize: l(215, 75),
                      targetPoint: l(20, -3),
                      BoxCollider: [new a(20, 0, 70, 28), new a(20, 0, 160, 8)],
                      premiumAlphaMode: !0,
                    },
                    21: {
                      speed: 40.2,
                      FishMultiple: -1,
                      zIndex: 308,
                      AnimationName: ["animation"],
                      visibleSize: l(250, 130),
                      targetPoint: l(40, 0),
                      BoxCollider: [
                        new a(20, 0, 140, 40),
                        new a(35, 0, 10, 80),
                      ],
                      premiumAlphaMode: !0,
                    },
                    22: {
                      speed: 20.1,
                      FishMultiple: -1,
                      zIndex: 313,
                      AnimationName: ["animation"],
                      visibleSize: l(270, 120),
                      targetPoint: l(40, 0),
                      BoxCollider: [
                        new a(40, 0, 150, 40),
                        new a(-75, 0, 100, 10),
                        new a(50, 0, 15, 100),
                      ],
                      premiumAlphaMode: !0,
                    },
                    23: {
                      speed: 20.1,
                      FishMultiple: -1,
                      zIndex: 310,
                      AnimationName: ["animation"],
                      visibleSize: l(300, 130),
                      targetPoint: l(70, 0),
                      BoxCollider: [
                        new a(65, 0, 150, 40),
                        new a(-35, 0, 80, 17),
                        new a(70, 0, 15, 100),
                      ],
                      premiumAlphaMode: !0,
                    },
                    24: {
                      speed: 20.1,
                      FishMultiple: -1,
                      zIndex: 313,
                      AnimationName: ["animation"],
                      visibleSize: l(300, 130),
                      targetPoint: l(50, 0),
                      BoxCollider: [
                        new a(45, 0, 160, 55),
                        new a(120, 0, 20, 100),
                        new a(-60, 0, 90, 10),
                      ],
                      premiumAlphaMode: !0,
                    },
                    25: {
                      speed: 20.1,
                      FishMultiple: -1,
                      zIndex: 312,
                      AnimationName: ["animation"],
                      visibleSize: l(300, 130),
                      targetPoint: l(50, 0),
                      BoxCollider: [
                        new a(45, 0, 160, 55),
                        new a(120, 0, 20, 100),
                        new a(-60, 0, 90, 10),
                      ],
                      premiumAlphaMode: !0,
                    },
                    27: {
                      speed: 20.1,
                      FishMultiple: -1,
                      zIndex: 102,
                      AnimationName: ["animation"],
                      visibleSize: l(160, 110),
                      targetPoint: l(0, -5),
                      BoxCollider: [new a(0, -5, 72, 42), new a(0, 40, 80, 25)],
                      premiumAlphaMode: !0,
                    },
                    30: {
                      speed: 20.1,
                      FishMultiple: -1,
                      zIndex: 501,
                      AnimationName: ["animation"],
                      visibleSize: l(410, 180),
                      targetPoint: l(10, 0),
                      BoxCollider: [
                        new a(20, 0, 140, 80),
                        new a(-10, 0, 260, 35),
                      ],
                      premiumAlphaMode: !0,
                    },
                    31: {
                      speed: 20.1,
                      FishMultiple: -1,
                      zIndex: 501,
                      AnimationName: ["animation"],
                      visibleSize: l(185, 230),
                      targetPoint: l(65, 20),
                      BoxCollider: [
                        new a(60, 20, 55, 66),
                        new a(0, -40, 70, 49),
                        new a(60, -20, 30, 30),
                      ],
                      premiumAlphaMode: !0,
                    },
                    43: {
                      speed: 20.1,
                      FishMultiple: -1,
                      zIndex: 206,
                      AnimationName: ["animation"],
                      visibleSize: l(130, 210),
                      targetPoint: l(17, -10),
                      BoxCollider: new a(10, -10, 70, 70),
                      skipRotate: !0,
                      premiumAlphaMode: !0,
                    },
                  }),
                    (this.SPRITE_FISH_KIND = [
                      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                    ]),
                    (this.BULLET_CONFIG = {
                      0: { BoxCollider: new a(5, 0, 40, 20) },
                      1: { BoxCollider: new a(5, 0, 45, 15) },
                      2: { BoxCollider: new a(8, 1, 45, 20) },
                      3: { BoxCollider: new a(15, 0, 40, 20) },
                      4: { BoxCollider: new a(10, 0, 50, 55) },
                      5: { BoxCollider: new a(5, 0, 60, 70) },
                      6: { BoxCollider: new a(5, 0, 60, 70) },
                      7: { BoxCollider: new a(0, 0, 20, 36) },
                      8: { BoxCollider: new a(0, 0, 20, 77) },
                      9: { BoxCollider: new a(0, 0, 20, 101) },
                      gunskill99: {
                        BoxCollider: new a(0, 0, 60, 80),
                        SkillID: p.instance.SKILL_CONFIG.PROMOTION_GUN.SkillID,
                      },
                    });
                }),
                (t.initNodePoolAssets = function (e) {
                  (this.assetHolder = m(e).getComponent(s)),
                    this.assetHolder.initMapAssets();
                }),
                (t.getGunSkeletonData = function (e) {
                  return this.assetHolder.getGunSkeletonData(e);
                }),
                o
              );
            })(d)).instance = null),
            (r = u))
          ) || r
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NotifyJackpot1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEventEmitter.ts",
    "./gfNotifyJackpot.ts",
    "./gfActionHelper.ts",
    "./Config1998.ts",
    "./EventsCode1998.ts",
  ],
  function (t) {
    "use strict";
    var n, i, o, e, a, s, c, p, d, f, l, r;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (o = t._decorator), (e = t.Layout), (a = t.tween);
        },
        function (t) {
          s = t.default;
        },
        function (t) {
          c = t.GfNotifyJackpot;
        },
        function (t) {
          (p = t.gfSetOpacityAll), (d = t.gfFadeInAll), (f = t.fadeOut);
        },
        function (t) {
          l = t.default;
        },
        function (t) {
          r = t.default;
        },
      ],
      execute: function () {
        var u;
        i._RF.push({}, "6eb45SvFIlFO7oUY6ycfgIB", "NotifyJackpot1998", void 0);
        var m = o.ccclass;
        t(
          "NotifyJackpot1998",
          m("NotifyJackpot1998")(
            (u = (function (t) {
              function i() {
                return t.apply(this, arguments) || this;
              }
              n(i, t);
              var o = i.prototype;
              return (
                (o.play = function (n) {
                  var i = n.type;
                  t.prototype.play.call(this, n),
                    p(this.node, 255),
                    p(this.contentNode, 0),
                    i === l.instance.NOTIFY_TYPE.MESSAGE_EVENT
                      ? (this.mainAnim.node.setPosition(118, 5),
                        this.contentNode.setPosition(80, 9),
                        (this.contentNode.getComponent(e).paddingTop = 5),
                        (this.contentNode.getComponent(e).paddingBottom = 10),
                        (this.mainAnim.premultipliedAlpha = !1))
                      : (this.mainAnim.node.setPosition(121.302, 0),
                        this.contentNode.setPosition(91.225, 3),
                        (this.contentNode.getComponent(e).paddingTop = 5),
                        (this.contentNode.getComponent(e).paddingBottom = 10));
                }),
                (o.playAnimation = function (t) {
                  var n = this,
                    i = this.findConfigByType(t);
                  if (i) {
                    var o = l.instance.NOTIFY_TYPE,
                      e = a(this.contentNode).then(d(0.15));
                    t === o.MESSAGE_EVENT
                      ? (this.mainAnim.setAnimation(0, i.animAppear, !1),
                        this.mainAnim.addAnimation(1, i.animIdle, !0))
                      : this.mainAnim.setAnimation(0, i.animIdle, !0),
                      a(this.node)
                        .delay(0.8)
                        .call(function () {
                          e.start();
                        })
                        .delay(3)
                        .call(function () {
                          n.mainAnim.clearTrack(0);
                        })
                        .then(f(0.5))
                        .call(function () {
                          n.onStackMessage();
                        })
                        .start(),
                      s.instance.emit(r.SOUND.EVENT_EXPLODE);
                  }
                }),
                i
              );
            })(c))
          ) || u
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NotifyMessage1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfNotifyMessage.ts",
    "./gfBaseConfig.ts",
    "./DataStore1998.ts",
  ],
  function (e) {
    "use strict";
    var t, s, n, o, i, a;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (s = e.cclegacy), (n = e._decorator);
        },
        function (e) {
          o = e.GfNotifyMessage;
        },
        function (e) {
          i = e.default;
        },
        function (e) {
          a = e.default;
        },
      ],
      execute: function () {
        var c;
        s._RF.push({}, "1db4aJWSkFOO7WXJezigUVA", "NotifyMessage1998", void 0);
        var r = n.ccclass;
        n.property,
          e(
            "NotifyMessage1998",
            r("NotifyMessage1998")(
              (c = (function (e) {
                function s() {
                  return e.apply(this, arguments) || this;
                }
                t(s, e);
                var n = s.prototype;
                return (
                  (n.onBeforeSceneChange = function () {
                    (this._lstMessage = []),
                      this.hide(),
                      e.prototype.onBeforeSceneChange.call(this);
                  }),
                  (n.onStackMessage = function () {
                    var t =
                      i.instance.NOTIFY_MESSAGE.position[
                        a.instance.getCurrentSceneName()
                      ];
                    this.node.setPosition(t.x, t.y),
                      e.prototype.onStackMessage.call(this);
                  }),
                  s
                );
              })(o))
            ) || c
          );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Player1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfPlayer.ts",
    "./DataStore1998.ts",
    "./utils2.ts",
    "./gfActionHelper.ts",
  ],
  function (t) {
    "use strict";
    var e, n, a, i, s, r, o, l, u, c, h, f, g, p, b, y, d, v, G, M, m;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (a = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (r = t._decorator),
            (o = t.SpriteFrame),
            (l = t.Sprite),
            (u = t.Tween),
            (c = t.tween),
            (h = t.Button),
            (f = t.v3);
        },
        function (t) {
          g = t.gfPlayer;
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          (b = t.setOpacity), (y = t.formatMoney), (d = t.loadAvatarFacebook);
        },
        function (t) {
          (v = t.scaleTo), (G = t.delay), (M = t.call), (m = t.stopAllActions);
        },
      ],
      execute: function () {
        var P, A, k, x, C, _, w;
        s._RF.push({}, "985e2soiIlHAZjWkOtJszlk", "Player1998", void 0);
        var S = r.ccclass,
          F = r.property;
        t(
          "Player1998",
          ((P = S("Player1998")),
          (A = F(o)),
          (k = F(l)),
          P(
            ((_ = e(
              (C = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, s = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    a(e, "backgroundGunFrame", _, i(e)),
                    a(e, "backgroundGun", w, i(e)),
                    e
                  );
                }
                n(e, t);
                var s = e.prototype;
                return (
                  (s.initObj = function (e) {
                    if (
                      (t.prototype.initObj.call(this, e), this.backgroundGun)
                    ) {
                      var n = this.isMe ? 1 : 0;
                      this.backgroundGun.spriteFrame =
                        this.backgroundGunFrame[n];
                    }
                    this.isMe &&
                      this.effectIsMe.setPosition(this.node.getPosition());
                  }),
                  (s._checkMaxGun = function () {
                    var t = this;
                    if (
                      p.instance.getGunValue()[this.getGunIndex()] >
                      this.wallet.getDisplayWallet()
                    ) {
                      (this.effectMaxGun.active = !0),
                        u.stopAllByTarget(this.effectMaxGun),
                        b(this.effectMaxGun, 255),
                        this.effectMaxGun.setScale(0, 0, 0);
                      var e = c(this.effectMaxGun);
                      return (
                        e.then(v(0.2, 1, 1)),
                        e.then(G(1.8)),
                        e.then(v(0.2, 0, 0)),
                        e.then(
                          M(function () {
                            t.effectMaxGun.setScale(0, 0, 0),
                              (t.effectMaxGun.active = !1);
                          })
                        ),
                        e.start(),
                        !1
                      );
                    }
                    return !0;
                  }),
                  (s._updateGun = function () {
                    this.btnMinus &&
                      ((this.btnMinus.getComponent(h).interactable = !(
                        0 === this.getGunIndex()
                      )),
                      (this.btnMinus.getComponent(l).grayscale =
                        !this.btnMinus.getComponent(h).interactable)),
                      this.btnPlus &&
                        ((this.btnPlus.getComponent(h).interactable = !(
                          this.getGunIndex() ===
                          p.instance.getTotalGun() - 1
                        )),
                        (this.btnPlus.getComponent(l).grayscale =
                          !this.btnPlus.getComponent(h).interactable)),
                      (this._gunValue =
                        p.instance.getGunValue()[this.getGunIndex()]),
                      (this.txtBet.string = y(this._gunValue)),
                      this._playEffectChangeGun(),
                      this.isMe &&
                        p.instance.getSelfInfo().skillLock &&
                        (this.btnPlus &&
                          ((this.btnPlus.getComponent(h).interactable = !1),
                          (this.btnPlus.getComponent(l).grayscale = !0)),
                        this.btnMinus &&
                          ((this.btnMinus.getComponent(h).interactable = !1),
                          (this.btnMinus.getComponent(l).grayscale = !0)));
                  }),
                  (s.lockBet = function (t) {
                    void 0 === t && (t = !1),
                      t
                        ? (this.btnPlus &&
                            ((this.btnPlus.getComponent(h).interactable = !1),
                            (this.btnPlus.getComponent(l).grayscale = !0)),
                          this.btnMinus &&
                            ((this.btnMinus.getComponent(h).interactable = !1),
                            (this.btnMinus.getComponent(l).grayscale = !0)))
                        : this._updateGun();
                  }),
                  (s.updateAvatar = function (t) {
                    this.avatarAtlas &&
                      this.avatarAtlas &&
                      d &&
                      (t.Avatar &&
                        0 === t.Avatar.indexOf("Avatar") &&
                        (t.Avatar = t.Avatar.replace("Avatar", "")),
                      d(this.avatar, t.Avatar, this.avatarAtlas, "avatar_", 2));
                  }),
                  (s.playerEffectScale = function () {
                    this.wallet.node.setScale(1, 1, 1),
                      m(this.wallet.node),
                      c(this.wallet.node)
                        .to(0.02, { scale: f(1.1, 1.1, 1.1) })
                        .to(0.02, { scale: f(1, 1, 1) })
                        .start();
                  }),
                  e
                );
              })(g)).prototype,
              "backgroundGunFrame",
              [A],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (w = e(C.prototype, "backgroundGun", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = C))
          ) || x)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PlayingMode1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./HammerFX1998.ts",
    "./utils2.ts",
    "./Config1998.ts",
    "./EventController1998.ts",
    "./gfUtilities.ts",
    "./gfActionHelper.ts",
    "./ToolTipEvent1998.ts",
    "./ReferenceManager1998.ts",
    "./DataStore1998.ts",
    "./gfEventEmitter.ts",
    "./EventsCode1998.ts",
    "./gfBaseEvents.ts",
    "./animateNumberLabel.ts",
    "./BoxItem1998.ts",
    "./MainPUController1998.ts",
  ],
  function (t) {
    "use strict";
    var e,
      n,
      i,
      o,
      a,
      r,
      l,
      s,
      u,
      c,
      d,
      h,
      f,
      m,
      p,
      g,
      x,
      b,
      _,
      C,
      y,
      T,
      v,
      S,
      w,
      B,
      E,
      R,
      A,
      I,
      W,
      N,
      O,
      P,
      X,
      G,
      k,
      D,
      M,
      V,
      L,
      H,
      U,
      z,
      F,
      q,
      K,
      Y,
      Q,
      Z,
      j,
      J,
      $,
      tt,
      et,
      nt;
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
            (r = t.v3),
            (l = t._decorator),
            (s = t.Node),
            (u = t.Font),
            (c = t.sp),
            (d = t.Prefab),
            (h = t.Label),
            (f = t.game),
            (m = t.Game),
            (p = t.UITransform),
            (g = t.tween),
            (x = t.Layout),
            (b = t.Animation),
            (_ = t.Button),
            (C = t.v2),
            (y = t.instantiate),
            (T = t.MotionStreak),
            (v = t.isValid),
            (S = t.Component);
        },
        function (t) {
          w = t.default;
        },
        function (t) {
          (B = t.setOpacity),
            (E = t.formatMoney),
            (R = t.changeParent),
            (A = t.setOpacityDeep),
            (I = t.fadeInDeep),
            (W = t.getRandomInt),
            (N = t.setIndexZ);
        },
        function (t) {
          O = t.default;
        },
        function (t) {
          P = t.default;
        },
        function (t) {
          (X = t.SetZIndex), (G = t.v2Distance);
        },
        function (t) {
          (k = t.v3f),
            (D = t.fadeIn),
            (M = t.moveBy),
            (V = t.scaleTo),
            (L = t.stopAllActions),
            (H = t.moveTo),
            (U = t.delay),
            (z = t.call),
            (F = t.fadeTo),
            (q = t.fadeOut),
            (K = t.bezierTo);
        },
        function (t) {
          Y = t.default;
        },
        function (t) {
          Q = t.default;
        },
        function (t) {
          Z = t.default;
        },
        function (t) {
          j = t.default;
        },
        function (t) {
          J = t.default;
        },
        function (t) {
          $ = t.default;
        },
        function (t) {
          tt = t.AnimateNumberLabel;
        },
        function (t) {
          et = t.BoxItem1998;
        },
        function (t) {
          nt = t.default;
        },
      ],
      execute: function () {
        var it,
          ot,
          at,
          rt,
          lt,
          st,
          ut,
          ct,
          dt,
          ht,
          ft,
          mt,
          pt,
          gt,
          xt,
          bt,
          _t,
          Ct,
          yt,
          Tt,
          vt,
          St,
          wt,
          Bt,
          Et,
          Rt,
          At,
          It,
          Wt,
          Nt,
          Ot,
          Pt,
          Xt,
          Gt,
          kt,
          Dt,
          Mt,
          Vt,
          Lt,
          Ht,
          Ut,
          zt,
          Ft,
          qt,
          Kt,
          Yt,
          Qt,
          Zt,
          jt,
          Jt,
          $t;
        a._RF.push({}, "e69d3sgQe5Kra3lV+mhSeCI", "PlayingMode1998", void 0);
        var te = 1,
          ee = 2,
          ne = { SHOW: r(12, 0, 1) },
          ie = { APPEAR: r(-310, -94, 1), IDLE: r(-320, -144, 1) },
          oe = 1e6,
          ae = {
            14: {
              Big: { count: 6, boxIndex: [10, 11, 12] },
              Small: { count: 8, boxIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
            },
            13: {
              Big: { count: 5, boxIndex: [10, 11, 12] },
              Small: { count: 8, boxIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
            },
            12: {
              Big: { count: 4, boxIndex: [10, 11, 12] },
              Small: { count: 8, boxIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
            },
            11: {
              Big: { count: 4, boxIndex: [10, 11, 12] },
              Small: { count: 7, boxIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
            },
            10: {
              Big: { count: 4, boxIndex: [10, 11, 12] },
              Small: { count: 6, boxIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
            },
            9: {
              Big: { count: 4, boxIndex: [10, 11, 12] },
              Small: { count: 5, boxIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
            },
            8: {
              Big: { count: 4, boxIndex: [10, 11, 12] },
              Small: { count: 4, boxIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
            },
            7: {
              Big: { count: 3, boxIndex: [10, 11, 12] },
              Small: { count: 4, boxIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
            },
            6: {
              Big: { count: 3, boxIndex: [10, 11, 12] },
              Small: { count: 3, boxIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
            },
            5: {
              Big: { count: 3, boxIndex: [10, 11, 12] },
              Small: { count: 2, boxIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
            },
            4: {
              Big: { count: 3, boxIndex: [10, 11, 12] },
              Small: { count: 1, boxIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
            },
            3: {
              Big: { count: 2, boxIndex: [10, 11, 12] },
              Small: { count: 1, boxIndex: [6, 7, 8, 9] },
            },
            2: {
              Big: { count: 2, boxIndex: [10, 11, 12] },
              Small: { count: 0, boxIndex: [6, 7, 8, 9] },
            },
            1: {
              Big: { count: 1, boxIndex: [10, 11, 12] },
              Small: { count: 0, boxIndex: [6, 7, 8, 9] },
            },
            0: {
              Big: { count: 0, boxIndex: [10, 11, 12] },
              Small: { count: 0, boxIndex: [6, 7, 8, 9] },
            },
          },
          re = l.ccclass,
          le = l.property;
        t(
          "default",
          ((it = re("PlayingMode1998")),
          (ot = le(s)),
          (at = le(s)),
          (rt = le(et)),
          (lt = le(s)),
          (st = le(s)),
          (ut = le(s)),
          (ct = le(s)),
          (dt = le(s)),
          (ht = le(s)),
          (ft = le(u)),
          (mt = le(s)),
          (pt = le(s)),
          (gt = le(c.Skeleton)),
          (xt = le(c.Skeleton)),
          (bt = le(s)),
          (_t = le(w)),
          (Ct = le(d)),
          (yt = le(d)),
          (Tt = le(s)),
          (vt = le(c.Skeleton)),
          (St = le(h)),
          (wt = le(Y)),
          (Bt = le(s)),
          (Et = le(s)),
          it(
            ((It = e(
              (At = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "mainContainer", It, o(e)),
                    i(e, "boxContainer", Wt, o(e)),
                    i(e, "listBox", Nt, o(e)),
                    i(e, "txtValuePrefab", Ot, o(e)),
                    i(e, "buttonAuto", Pt, o(e)),
                    i(e, "buttonStop", Xt, o(e)),
                    i(e, "fastToResultLayer", Gt, o(e)),
                    i(e, "rewardX2", kt, o(e)),
                    i(e, "listTxt", Dt, o(e)),
                    i(e, "fontCoin", Mt, o(e)),
                    i(e, "totalWinContainer", Vt, o(e)),
                    i(e, "totalWin", Lt, o(e)),
                    i(e, "spX2", Ht, o(e)),
                    i(e, "frameTotalWin", Ut, o(e)),
                    i(e, "toastMessage", zt, o(e)),
                    i(e, "hammerFX", Ft, o(e)),
                    i(e, "effectEarnComboPrefab", qt, o(e)),
                    i(e, "effectCoinFlyPrefab", Kt, o(e)),
                    i(e, "overlay", Yt, o(e)),
                    i(e, "shelf", Qt, o(e)),
                    i(e, "toolTipCount", Zt, o(e)),
                    i(e, "toolTip", jt, o(e)),
                    i(e, "blockTouch", Jt, o(e)),
                    i(e, "containerNode", $t, o(e)),
                    (e._currentBoxOpen = null),
                    (e._isAutoTrigger = !1),
                    (e._state = te),
                    (e._valueCoin = 0),
                    (e._countBoxOpen = 0),
                    (e._isRequesting = !1),
                    (e._hammerCount = 0),
                    (e._listCoinFly = []),
                    (e._hammerType = void 0),
                    (e._GoldReward = void 0),
                    (e._x2RewardScale = k(1)),
                    (e._originalTotalWidth = 0),
                    (e._isGameHide = void 0),
                    (e._onHideGameBinding = void 0),
                    (e._onShowGameBinding = void 0),
                    e
                  );
                }
                n(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    (this._onHideGameBinding = this.onHideGame.bind(this)),
                      (this._onShowGameBinding = this.onShowGame.bind(this)),
                      f.on(m.EVENT_HIDE, this._onHideGameBinding),
                      f.on(m.EVENT_SHOW, this._onShowGameBinding),
                      this.updateAutoTrigger(!1),
                      B(this.node, 255),
                      (this.rewardX2.active = !1),
                      (this._x2RewardScale = this.rewardX2.getScale()),
                      (this._originalTotalWidth =
                        this.totalWin.getComponent(p).width);
                  }),
                  (a.onShowGame = function () {
                    this._isGameHide = !1;
                  }),
                  (a.onHideGame = function () {
                    (this._isGameHide = !0),
                      this.node.active && this.onResume();
                  }),
                  (a.start = function () {
                    var t = this;
                    this.listBox.forEach(function (e, n) {
                      e.init({
                        index: n + 1,
                        onClickedCallBack: t.miniGameClick.bind(t),
                      });
                    });
                  }),
                  (a.updateState = function (t) {
                    void 0 === t && (t = te), (this._state = t);
                  }),
                  (a.onUpdateHammerCount = function () {
                    if (this._hammerType) {
                      var t = P.instance.getHammerCount(),
                        e = t ? t[this._hammerType] : 0;
                      (this._hammerCount = e),
                        (this.toolTipCount.string = (
                          this._hammerCount <= 0 ? 0 : this._hammerCount
                        ).toString()),
                        B(this.toolTipCount.node, 255);
                    }
                  }),
                  (a.show = function (t, e) {
                    var n = this;
                    void 0 === t && (t = O.instance.RoomKind.Normal),
                      void 0 === e && (e = !0),
                      this.onShowGame(),
                      this.reset(),
                      e
                        ? this.playTransition()
                        : ((this.node.active = !0),
                          this.shelf.setAnimation(0, "static", !1));
                    var i = P.instance.getConfigBoxValue().X2_REWARD,
                      o = P.instance.getHammerCount(),
                      a = o ? o[t] : 0;
                    (this._hammerCount = a),
                      (this._hammerType = t),
                      this.updateState(te);
                    var l = P.instance.getMiniGameMatrixByType(
                      this._hammerType
                    );
                    l.length > 0
                      ? l.forEach(function (t, e) {
                          var o = n.getRewardValueByIndex(t);
                          if (
                            (n.listBox[e].show(o, n._hammerType),
                            o > 0 && o !== i)
                          ) {
                            n._countBoxOpen++;
                            var a = n.listTxt[e],
                              l = n.listBox[e].getBoxPosition();
                            a.setPosition(l),
                              a.translate(r(0, 20, 1)),
                              (a.active = !0),
                              (a.getComponent(tt).currentValue = o),
                              (a.getComponent(h).string = E(o)),
                              n._updateTotalWin(o, 0);
                          } else o === i && (n._countBoxOpen++, (n.rewardX2.active = !0), (n.containerNode.active = !0), R(n.rewardX2, n.containerNode), n.rewardX2.setPosition(ne.SHOW), n.frameTotalWin.setSkin("expand"), n.frameTotalWin.setAnimation(0, "khung_transform", !0), X(n.rewardX2, 1));
                        })
                      : (this.listBox.forEach(function (t) {
                          t.show(0, n._hammerType);
                        }),
                        A(this.totalWinContainer, 0),
                        I(this.totalWinContainer, 0.4)),
                      this.checkAutoTrigger();
                    var s =
                      this._hammerCount <= 0
                        ? "0"
                        : this._hammerCount.toString();
                    (this.toolTipCount.string = s),
                      B(this.toolTipCount.node, 255),
                      this.toolTip.setToolTip(0, l);
                  }),
                  (a.playTransition = function () {
                    var t = this,
                      e = this.shelf.findAnimation("animation").duration;
                    this.shelf.setAnimation(0, "animation", !1),
                      (this.node.active = !0),
                      A(this.boxContainer, 0),
                      B(this.buttonAuto, 0),
                      B(this.buttonStop, 0),
                      B(this.toolTipCount.node, 0),
                      this.boxContainer.setPosition(ie.APPEAR),
                      g(this.node)
                        .delay(e - 0.5)
                        .call(function () {
                          (t.boxContainer.active = !0),
                            I(t.boxContainer, 0.2),
                            g(t.boxContainer)
                              .to(0.3, { position: ie.IDLE })
                              .start(),
                            g(t.buttonAuto).then(D(0.3)).start(),
                            g(t.buttonStop).then(D(0.3)).start(),
                            g(t.toolTipCount.node).then(D(0.3)).start();
                        })
                        .start();
                  }),
                  (a.onOpenBox = function (t) {
                    var e = this,
                      n = P.instance.getConfigBoxValue(),
                      i = n.X2_REWARD,
                      o = n.X2_REWARD_INDEX,
                      a = t.arr1 ? t.arr1 : t.arr2,
                      r = t.ItemID - 1,
                      l = this.getRewardValueByIndex(a[r]);
                    1 ===
                      a.filter(function (t) {
                        return t > 0;
                      }).length &&
                      P.instance.updateHammerCount(this._hammerType, -1);
                    var s = this.listBox[r];
                    if (
                      ((this._currentBoxOpen = s),
                      (this.fastToResultLayer.active = !0),
                      this._countBoxOpen++,
                      (this._isRequesting = !1),
                      !l && t.GoldReward > 0)
                    ) {
                      P.instance.setMiniGameMatrixByType(this._hammerType, []),
                        this.updateState(te);
                      var u = Q.instance.getPlayerByDeskStation(
                        Z.instance.getSelfDeskStation()
                      );
                      if (u && u.isActive()) u.addGoldReward(t.GoldReward);
                      else
                        Z.instance.getLobbyWallet().addGoldReward(t.GoldReward);
                      this._GoldReward = t.GoldReward;
                    }
                    var c = {
                        pos: s.getBoxPosition(),
                        hammerType: this._hammerType,
                        rewardIndex: a[r],
                        countBox: this.listBox.filter(function (t) {
                          return !t.isClose();
                        }).length,
                      },
                      d = this.hammerFX.playAnimation(c);
                    s.open({ rewardValue: l, durHammerFX: d }, function (n) {
                      (e._currentBoxOpen = null),
                        (e.fastToResultLayer.active = !1);
                      var s = P.instance.getConfigBigWinRatioByType(
                        e._hammerType
                      );
                      if (!l && t.GoldReward > 0) {
                        var u = a.find(function (t) {
                          return t === o;
                        });
                        e.toolTip.setToolTip(a[r], a),
                          e.showResultEvent(a, function () {
                            t.GoldReward < s
                              ? (X(e.totalWinContainer, 1),
                                e._checkPlayAnimationX2(a, function () {
                                  g(e.node)
                                    .call(function () {
                                      u && e._updateTotalWin(e._valueCoin, 3);
                                    })
                                    .delay(u ? 5 : 4)
                                    .call(function () {
                                      var n = Q.instance.getPlayerByDeskStation(
                                        Z.instance.getSelfDeskStation()
                                      );
                                      n && n.isActive()
                                        ? n.addToDisplayWallet(t.GoldReward)
                                        : Z.instance
                                            .getLobbyWallet()
                                            .addToDisplay(t.GoldReward);
                                      j.instance.emit(
                                        J.EVENT.CHANGE_FROM_PLAYING_TO_PREPARE
                                      ),
                                        (e.blockTouch.active = !1);
                                    })
                                    .start();
                                }))
                              : ((e.overlay.active = !0),
                                B(e.overlay, 150),
                                X(e.boxContainer, 2),
                                R(e.totalWinContainer, e.boxContainer),
                                X(e.totalWinContainer, 30),
                                e._checkPlayAnimationX2(a, function () {
                                  e.overlay.active = !1;
                                  var n = {
                                    GoldReward: t.GoldReward,
                                    bigWinRatio: s,
                                    posX2: a.find(function (t) {
                                      return t === o;
                                    })
                                      ? e.getBoxPositionByWorldSpace(e.rewardX2)
                                      : null,
                                    callback: function () {
                                      var e = Q.instance.getPlayerByDeskStation(
                                        Z.instance.getSelfDeskStation()
                                      );
                                      e && e.isActive()
                                        ? e.addToDisplayWallet(t.GoldReward)
                                        : Z.instance
                                            .getLobbyWallet()
                                            .addToDisplay(t.GoldReward);
                                    },
                                  };
                                  j.instance.emit(J.POPUP.HIDE_POPUP_EVENT);
                                  var i = Z.instance.getCurrentSceneName();
                                  i === O.instance.SceneName.Lobby
                                    ? j.instance.emit(
                                        J.CUT_SCENE.SHOW_CUT_SCENE_ON_LOBBY,
                                        n
                                      )
                                    : (i !== O.instance.SceneName.Game1 &&
                                        i !== O.instance.SceneName.Game3) ||
                                      j.instance.emit(
                                        $.EFFECT_LAYER.ADD_ANIM_TO_QUEUE_ANIM,
                                        "EVENT",
                                        n
                                      );
                                })),
                              (e._GoldReward = null);
                          });
                      } else if (l !== i) {
                        var c = {
                          f2r: n,
                          boxIndex: r,
                          rewardValue: l,
                          miniGameMatrix: a,
                        };
                        e.updateTxtRewardByIndex(c);
                      } else {
                        var d = {
                          f2r: n,
                          boxIndex: r,
                          rewardValue: l,
                          miniGameMatrix: a,
                        };
                        e.updateTxtX2(d);
                      }
                    });
                  }),
                  (a.updateTxtRewardByIndex = function (t) {
                    var e = this,
                      n = t.f2r,
                      i = t.boxIndex,
                      o = t.rewardValue,
                      a = t.miniGameMatrix,
                      l = this.listBox[i];
                    this.lockedAllBox(!1),
                      this.updateState(te),
                      this.checkAutoTrigger();
                    var s = this.listTxt[i],
                      u = s.getComponent(tt);
                    if (
                      (s.setPosition(l.getBoxPosition()),
                      (s.active = !0),
                      (u.currentValue = o),
                      n)
                    ) {
                      var c = this.listTxt[i];
                      c.setPosition(l.getBoxPosition()),
                        (c.active = !0),
                        c.translate(r(0, 20, 1)),
                        L(c),
                        u.resetValue(),
                        u.onUpdateValue(o, 0, !1),
                        this._updateTotalWin(o, 0.5),
                        this.toolTip.setToolTip(a[i], a);
                    } else {
                      var d = 0;
                      P.instance.checkBoxType(a[i], "Mega")
                        ? (u.resetValue(),
                          u.onUpdateValue(o, 1500, !1),
                          j.instance.emit(J.SOUND.EVENT_CLAY_POT_COUNT_UP),
                          g(this.totalWin)
                            .delay(1.5)
                            .call(function () {
                              j.instance.emit(
                                J.SOUND.EVENT_STOP_CLAY_POT_COUNT_UP
                              );
                            })
                            .start(),
                          (d = 2))
                        : ((s.getComponent(h).string = E(o)), (d = 0.5)),
                        g(s)
                          .then(M(0.2, 0, 20))
                          .delay(d)
                          .call(function () {
                            e.playAminCoinFX(t), e.toolTip.setToolTip(a[i], a);
                          })
                          .delay(0.7)
                          .call(function () {
                            e._updateTotalWin(o, 0.5),
                              g(e.totalWin)
                                .sequence(V(0.3, 1.1), V(0.2, 1))
                                .start();
                          })
                          .start();
                    }
                  }),
                  (a.updateTxtX2 = function (t) {
                    var e = this,
                      n = t.f2r,
                      i = t.boxIndex,
                      o = t.miniGameMatrix,
                      a = this.listBox[i],
                      r =
                        (this.totalWin.getComponent(p).width +
                          this.containerNode.parent.getComponent(x).spacingX) /
                        2;
                    this.containerNode.setPosition(
                      r,
                      this.containerNode.getPosition().y,
                      1
                    );
                    var l = this.rewardX2.parent
                      .getComponent(p)
                      .convertToNodeSpaceAR(
                        this.containerNode
                          .getComponent(p)
                          .convertToWorldSpaceAR(ne.SHOW)
                      );
                    if (
                      (this.updateState(te),
                      this.lockedAllBox(!1),
                      this.checkAutoTrigger(),
                      n)
                    )
                      L(this.node),
                        L(this.rewardX2),
                        (this.containerNode.active = !0),
                        R(this.rewardX2, this.containerNode),
                        j.instance.emit(J.SOUND.EVENT_STOP_CLAY_POT_BREAK),
                        this.toolTip.setToolTip(o[i], o),
                        (this.rewardX2.active = !0),
                        this.rewardX2.setPosition(ne.SHOW),
                        X(this.rewardX2, 1),
                        this.rewardX2.setScale(this._x2RewardScale),
                        this.frameTotalWin.setSkin("expand"),
                        this.frameTotalWin.setAnimation(
                          0,
                          "khung_transform",
                          !0
                        );
                    else {
                      (this.rewardX2.active = !0),
                        (this.rewardX2.position = a.getBoxPosition());
                      var s = O.instance.SHAKE_SCREEN_STYLE;
                      j.instance.emit($.COMMON.SHAKE_SCREEN, {
                        timeOneStep: 0.05,
                        amplitude: 2,
                        shakeStyle: s.CROSS_1,
                      }),
                        g(this.node)
                          .delay(1)
                          .call(function () {
                            g(e.rewardX2)
                              .parallel(
                                M(0.6, 0, 40),
                                V(0.6, 0.75, 0.75),
                                g()
                                  .delay(0.3)
                                  .call(function () {
                                    X(e.rewardX2, 1);
                                  })
                              )
                              .delay(0.3)
                              .parallel(
                                H(0.4, l.x, l.y, l.z),
                                V(0.4, e._x2RewardScale.x, e._x2RewardScale.y)
                              )
                              .call(function () {
                                (e.containerNode.active = !0),
                                  e.frameTotalWin.setSkin("expand"),
                                  e.frameTotalWin.setAnimation(0, "trans", !1),
                                  e.frameTotalWin.addAnimation(
                                    0,
                                    "khung_transform",
                                    !0
                                  );
                              })
                              .delay(0.1)
                              .call(function () {
                                R(e.rewardX2, e.containerNode);
                              })
                              .start();
                          })
                          .delay(1.3)
                          .call(function () {
                            e.toolTip.setToolTip(o[i], o);
                          })
                          .start();
                    }
                  }),
                  (a.showResultEvent = function (t, e) {
                    var n = this;
                    this.updateAutoTrigger(!1, !1),
                      this.disableAllBtn(),
                      (this.blockTouch.active = !0);
                    var i = P.instance.getConfigBoxValue().X2_REWARD,
                      o = [].concat(t);
                    o = this._getListBoxRandomReward(o);
                    var a = !1,
                      l = !1;
                    g(this.node)
                      .call(function () {
                        (n.toastMessage.active = !0),
                          n.toastMessage.getComponent(b).play();
                      })
                      .delay(1.1)
                      .call(function () {
                        n.listBox.forEach(function (t, e) {
                          if (t.isClose()) {
                            var s = o[e],
                              u = n.getRewardValueByIndex(o[e]);
                            P.instance.checkBoxType(s, "Mega") ||
                            P.instance.checkBoxType(s, "X2")
                              ? (a = !0)
                              : (l = !0),
                              t.showResultFail(s, function () {
                                var o = n.listTxt[e];
                                o.setPosition(t.getBoxPosition()),
                                  o.translate(r(0, 20, 1)),
                                  (o.active = !0),
                                  (o.getComponent(tt).currentValue = u),
                                  (o.getComponent(h).font = n.fontCoin[1]),
                                  u === i
                                    ? ((o.getComponent(h).string = ""),
                                      (o.getComponent(h).fontSize = 28))
                                    : ((o.getComponent(h).string = E(u)),
                                      (o.getComponent(h).fontSize = 14)),
                                  o.setScale(r(0, 0, 1)),
                                  g(o)
                                    .parallel(M(0.2, 0, 20), V(0.2, 1))
                                    .start();
                              });
                          } else {
                            var c = n.listTxt[e];
                            g(c)
                              .delay(Math.random())
                              .call(function () {
                                g(c)
                                  .sequence(V(0.4, 1.2), V(0.3, 1))
                                  .repeatForever()
                                  .start();
                              })
                              .start();
                          }
                        });
                      })
                      .call(function () {
                        a && j.instance.emit(J.SOUND.SHOW_BOX_MISS);
                      })
                      .delay(1.3)
                      .call(function () {
                        l && j.instance.emit(J.SOUND.SHOW_BOX_MISS);
                      })
                      .delay(2.5)
                      .call(function () {
                        e();
                      })
                      .start();
                  }),
                  (a.onChangeToPrepareMode = function (t) {
                    var e = this;
                    this.mainContainer.getComponent(nt).show(),
                      this.mainContainer
                        .getComponent(nt)
                        .changePrepareMode(function () {
                          B(e.boxContainer, 255), "function" == typeof t && t();
                        });
                  }),
                  (a.miniGameClick = function () {
                    this.lockedAllBox(!0),
                      this.updateState(ee),
                      (this._isRequesting = !0);
                  }),
                  (a.checkUpdateWallet = function () {
                    if (this._GoldReward) {
                      var t = Q.instance.getPlayerByDeskStation(
                        Z.instance.getSelfDeskStation()
                      );
                      if (t && t.isActive())
                        t.addToDisplayWallet(this._GoldReward);
                      else
                        Z.instance
                          .getLobbyWallet()
                          .addToDisplay(this._GoldReward);
                      this._GoldReward = null;
                    }
                  }),
                  (a.reset = function () {
                    var t = this;
                    (this._valueCoin = 0),
                      this._updateTotalWin(0, 0),
                      this.toolTip.reset(),
                      this.totalWin.getComponent(tt).resetValue(),
                      L(this.totalWin),
                      L(this.node),
                      this.node.setScale(k(1)),
                      L(this.boxContainer),
                      this.totalWin.setScale(k(1)),
                      (this.totalWin.getComponent(h).overflow =
                        h.Overflow.CLAMP),
                      (this.totalWin.getComponent(p).width =
                        this._originalTotalWidth),
                      B(this.toolTipCount.node, 255),
                      A(this.boxContainer, 255),
                      this.boxContainer.setPosition(ie.IDLE),
                      this.unscheduleAllCallbacks(),
                      this.listTxt.forEach(function (e) {
                        L(e),
                          (e.active = !1),
                          (e.getComponent(tt).currentValue = 0),
                          e.setScale(k(1)),
                          (e.getComponent(h).font = t.fontCoin[0]),
                          (e.getComponent(h).fontSize = 16);
                      }),
                      (this._currentBoxOpen = null),
                      (this.fastToResultLayer.active = !1),
                      (this.spX2.node.active = !1),
                      (this.rewardX2.active = !1),
                      R(this.rewardX2, this.boxContainer),
                      (this.containerNode.active = !1),
                      L(this.rewardX2),
                      B(this.rewardX2, 255),
                      X(this.rewardX2, -1),
                      this.rewardX2.setScale(this._x2RewardScale),
                      this.frameTotalWin.setSkin("normal"),
                      this.frameTotalWin.setAnimation(0, "khung_statics", !1),
                      (this.overlay.active = !1),
                      L(this.totalWinContainer),
                      R(this.totalWinContainer, this.node),
                      A(this.totalWinContainer, 255),
                      X(this.totalWinContainer, -1),
                      X(this.boxContainer, 2),
                      X(this.toastMessage, 3),
                      X(this.fastToResultLayer, 4),
                      (this.toastMessage.active = !1),
                      this.hammerFX.stopAnimation(),
                      (this._GoldReward = null),
                      (this._countBoxOpen = 0),
                      (this._hammerCount = 0),
                      (this.blockTouch.active = !1),
                      this.listBox.forEach(function (t) {
                        return t.reset();
                      }),
                      this.stopAnimCoinFly();
                  }),
                  (a.lockedAllBox = function (t) {
                    void 0 === t && (t = !0),
                      this.listBox.forEach(function (e) {
                        e.isLocked(t);
                      });
                  }),
                  (a.fastToResult = function () {
                    this._currentBoxOpen &&
                      (this.hammerFX.stopAnimation(),
                      this._currentBoxOpen.fastToResult());
                  }),
                  (a.getRewardValueByIndex = function (t) {
                    return P.instance.getRewardKeyMapByType(this._hammerType)[
                      t
                    ];
                  }),
                  (a.getBoxPositionByWorldSpace = function (t) {
                    return t.getComponent(p).convertToWorldSpaceAR(r(0, 0, 1));
                  }),
                  (a.onAutoTriggerClick = function () {
                    j.instance.emit($.SOUND.CLICK),
                      this.updateAutoTrigger(!0),
                      this._state === te && this.randomOpenBox();
                  }),
                  (a.onStopAutoTriggerClick = function () {
                    j.instance.emit($.SOUND.CLICK), this.updateAutoTrigger(!1);
                  }),
                  (a.updateAutoTrigger = function (t, e) {
                    void 0 === t && (t = !0),
                      void 0 === e && (e = !0),
                      t
                        ? ((this._isAutoTrigger = !0),
                          (this.buttonAuto.active = !1),
                          (this.buttonStop.active = !0))
                        : ((this._isAutoTrigger = !1),
                          (this.buttonAuto.active = !0),
                          (this.buttonStop.active = !1)),
                      (this.buttonAuto.getComponent(_).interactable = e),
                      (this.buttonStop.getComponent(_).interactable = e);
                  }),
                  (a.disableAllBtn = function () {
                    (this.buttonAuto.active = !1),
                      (this.buttonStop.active = !1),
                      j.instance.emit(J.EVENT.ENABLE_POPUP_BUTTONS, !1);
                  }),
                  (a.checkAutoTrigger = function () {
                    this._isAutoTrigger &&
                      this._state === te &&
                      !1 === this._isRequesting &&
                      this.randomOpenBox();
                  }),
                  (a.randomOpenBox = function () {
                    if (!this._isGameHide) {
                      var t = P.instance.getMiniGameMatrixByType(
                          this._hammerType
                        ),
                        e = null;
                      if (0 === t.length) e = W(1, 15);
                      else {
                        var n = [];
                        t.forEach(function (t, e) {
                          t || n.push(e + 1);
                        }),
                          (e = n[W(0, n.length - 1)]);
                      }
                      this.listBox[e - 1].onClick &&
                        this.listBox[e - 1].onClick();
                    }
                  }),
                  (a._checkPlayAnimationX2 = function (t, e) {
                    var n = this,
                      i = P.instance.getConfigBoxValue().X2_REWARD_INDEX;
                    if (
                      !t.find(function (t) {
                        return t === i;
                      })
                    ) {
                      var o = P.instance.getConfigBigWinRatioByType(
                        this._hammerType
                      );
                      return (
                        this._GoldReward &&
                          this._GoldReward > o &&
                          (this._GoldReward = null),
                        void e()
                      );
                    }
                    var a = C(320, 320),
                      r = G(this.rewardX2.position, a) / 1400;
                    R(this.rewardX2, this.boxContainer),
                      (this.containerNode.active = !1),
                      N(this.boxContainer, 2),
                      j.instance.emit(J.SOUND.X2_BOARD),
                      g(this.rewardX2)
                        .parallel(H(0.5, 320, 100), V(0.5, 1, 1))
                        .delay(0.5)
                        .parallel(
                          H(r, 320, 320, 0, "backIn"),
                          V(r, 0.5),
                          g(this.node).sequence(
                            U(0.85 * r),
                            z(function () {
                              (n.spX2.node.active = !0),
                                n.spX2.setAnimation(0, "fx_frame", !1),
                                j.instance.emit($.COMMON.SHAKE_SCREEN, {
                                  timeOneStep: 0.05,
                                  amplitude: 4,
                                }),
                                g(n.totalWin)
                                  .sequence(V(0.2, 1.3), V(0.2, 1))
                                  .start();
                            })
                          )
                        )
                        .then(F(0.2 * r, 0))
                        .delay(this.spX2.findAnimation("fx_frame").duration / 2)
                        .call(function () {
                          e();
                        })
                        .start();
                  }),
                  (a._updateTotalWin = function (t, e) {
                    var n = this;
                    void 0 === e && (e = 1),
                      (this._valueCoin += t),
                      e > 0
                        ? (this.totalWin
                            .getComponent(tt)
                            .onUpdateValue(this._valueCoin, 1e3 * e),
                          j.instance.emit(J.SOUND.EVENT_COUNT_COIN),
                          g(this.totalWin)
                            .delay(e)
                            .call(function () {
                              n._valueCoin >= oe &&
                                (n.totalWin.getComponent(h).overflow =
                                  h.Overflow.NONE),
                                j.instance.emit(J.SOUND.EVENT_STOP_COUNT_COIN);
                            })
                            .start())
                        : ((this.totalWin.getComponent(tt).currentValue =
                            this._valueCoin),
                          (this.totalWin.getComponent(h).string = E(
                            this._valueCoin
                          )),
                          this._valueCoin >= oe &&
                            (this.totalWin.getComponent(h).overflow =
                              h.Overflow.NONE));
                  }),
                  (a._getListBoxRandomReward = function (t) {
                    var e = [],
                      n = !1,
                      i = P.instance.getConfigBoxValue().X2_REWARD_INDEX;
                    t.forEach(function (t, o) {
                      0 === t && e.push(o), i === t && (n = !0);
                    }),
                      e.sort(function () {
                        return 0.5 - Math.random();
                      });
                    for (
                      var o = e.length,
                        a = ae[o],
                        r = a.Big,
                        l = a.Small,
                        s = 0;
                      s < r.count;
                      s++
                    )
                      n
                        ? (t[e[s]] = r.boxIndex[W(0, r.boxIndex.length - 1)])
                        : ((t[e[s]] = 13), (n = !0));
                    for (var u = r.count; u < o; u++)
                      t[e[u]] = l.boxIndex[W(0, l.boxIndex.length - 1)];
                    return t;
                  }),
                  (a.playAminCoinFX = function (t) {
                    var e = this,
                      n = t.f2r,
                      i = t.boxIndex,
                      o = t.miniGameMatrix,
                      a = this.listBox[i].getBoxPosition(),
                      r = C(323, 320),
                      l = y(this.effectEarnComboPrefab),
                      s = l.getComponentInChildren(T);
                    (l.parent = this.boxContainer),
                      (l.position = a),
                      l
                        .getComponent(c.Skeleton)
                        .setAnimation(0, "animation", !1),
                      (l.active = !1),
                      this._listCoinFly.push(l);
                    var u = Math.random() > 0.5 ? 1 : -1,
                      d = 4;
                    if (
                      (P.instance.checkBoxType(o[i], "Big")
                        ? (d = 7)
                        : P.instance.checkBoxType(o[i], "Mega") && (d = 10),
                      !n)
                    )
                      for (
                        var h = function (t) {
                            var n = y(e.effectCoinFlyPrefab);
                            (n.parent = e.boxContainer),
                              (n.position = a),
                              B(n, 0),
                              n.setScale(k(0.7)),
                              e._listCoinFly.push(n);
                            var i = C(a.x, a.y - 100),
                              o = C(a.x + 100 * u, a.y + 100);
                            a.x < r.x
                              ? ((i = C(a.x + 0.3 * (r.x - a.x), a.y)),
                                (o = C(r.x, r.y + 0.8 * (a.y - r.y))))
                              : a.x > r.x &&
                                ((i = C(a.x - 0.3 * (a.x - r.x), a.y)),
                                (o = C(r.x, r.y + 0.8 * (a.y - r.y))));
                            var c = [i, o, r];
                            g(n)
                              .call(function () {
                                (l.active = !0),
                                  0 == t &&
                                    j.instance.emit(J.SOUND.EVENT_COIN_FLY);
                              })
                              .delay(0.07 * t)
                              .parallel(
                                D(0.15),
                                g().parallel(
                                  g().call(function () {
                                    d - 1 == t &&
                                      g(l)
                                        .then(q(0.3))
                                        .call(function () {
                                          (l.active = !1), l.destroy();
                                        })
                                        .start(),
                                      s &&
                                        v(s) &&
                                        g(s.node)
                                          .delay(0.55)
                                          .then(q(0.1))
                                          .start();
                                  }),
                                  g().sequence(V(0.65, 0.5), V(0.05, 0.1)),
                                  K(0.7, c, "sineOut")
                                )
                              )
                              .call(function () {
                                return (n.active = !1);
                              })
                              .delay(0.1)
                              .call(function () {
                                return n.destroy();
                              })
                              .start();
                          },
                          f = 0;
                        f < d;
                        f++
                      )
                        h(f);
                  }),
                  (a.stopAnimCoinFly = function () {
                    var t;
                    null == (t = j.instance) ||
                      t.emit(J.SOUND.STOP_EVENT_COIN_FLY),
                      this._listCoinFly.forEach(function (t) {
                        v(t) && (L(t), t.destroy());
                      }),
                      (this._listCoinFly.length = 0);
                  }),
                  (a.onResume = function () {
                    (this._GoldReward = null),
                      L(this.rewardX2),
                      L(this.totalWin),
                      L(this.node),
                      L(this.boxContainer),
                      this.listBox.forEach(function (t) {
                        t.reset();
                      });
                  }),
                  (a.onDestroy = function () {
                    f.off(m.EVENT_HIDE, this._onHideGameBinding),
                      f.off(m.EVENT_SHOW, this._onShowGameBinding);
                  }),
                  e
                );
              })(S)).prototype,
              "mainContainer",
              [ot],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (Wt = e(At.prototype, "boxContainer", [at], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Nt = e(At.prototype, "listBox", [rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ot = e(At.prototype, "txtValuePrefab", [lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pt = e(At.prototype, "buttonAuto", [st], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Xt = e(At.prototype, "buttonStop", [ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Gt = e(At.prototype, "fastToResultLayer", [ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (kt = e(At.prototype, "rewardX2", [dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Dt = e(At.prototype, "listTxt", [ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Mt = e(At.prototype, "fontCoin", [ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Vt = e(At.prototype, "totalWinContainer", [mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Lt = e(At.prototype, "totalWin", [pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ht = e(At.prototype, "spX2", [gt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ut = e(At.prototype, "frameTotalWin", [xt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (zt = e(At.prototype, "toastMessage", [bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ft = e(At.prototype, "hammerFX", [_t], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (qt = e(At.prototype, "effectEarnComboPrefab", [Ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Kt = e(At.prototype, "effectCoinFlyPrefab", [yt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Yt = e(At.prototype, "overlay", [Tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Qt = e(At.prototype, "shelf", [vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Zt = e(At.prototype, "toolTipCount", [St], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (jt = e(At.prototype, "toolTip", [wt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Jt = e(At.prototype, "blockTouch", [Bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($t = e(At.prototype, "containerNode", [Et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Rt = At))
          ) || Rt)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PoolManager1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfPoolManager.ts",
    "./NodePoolConfig1998.ts",
    "./Config1998.ts",
  ],
  function (i) {
    "use strict";
    var t, n, o, l, e, s, u;
    return {
      setters: [
        function (i) {
          (t = i.inheritsLoose), (n = i.assertThisInitialized);
        },
        function (i) {
          o = i.cclegacy;
        },
        function (i) {
          (l = i.POOL_TYPE), (e = i.default);
        },
        function (i) {
          s = i.default;
        },
        function (i) {
          u = i.default;
        },
      ],
      execute: function () {
        o._RF.push({}, "a9368a4evpPIbSsNC49cfny", "PoolManager1998", void 0),
          (i(
            "default",
            (function (i) {
              function o(t) {
                var l;
                return (l = i.call(this, t) || this), (o.instance = n(l)), l;
              }
              t(o, i);
              var e = o.prototype;
              return (
                (e.initPools = function () {
                  (this.pools = []),
                    this.initPool(
                      l.SpineFish,
                      "SpineFish1998",
                      "SpineFish1998",
                      25
                    ),
                    this.initPool(
                      l.SpriteFish,
                      "SpriteFish1998",
                      "SpriteFish1998",
                      25
                    ),
                    this.initPool(l.Coin, "Coin1998", "gfCoinFX", 10),
                    this.initPool(l.Bullet, "Bullet1998", "gfBullet", 10),
                    this.initPool(l.NetFX, "NetFX1998", "gfNetFX", 5),
                    this.initPool(
                      l.LuckyEffect,
                      "LuckyEffect",
                      "LuckyEffect1998",
                      1
                    ),
                    this.initPool(
                      l.LabelCoin,
                      "LabelCoin1998",
                      "gfCoinLabel",
                      5
                    ),
                    this.initPool(
                      l.SmallExplosion,
                      "SmallExplosion1998",
                      "gfExplosionSpine",
                      50
                    ),
                    this.initPool(
                      l.BigExplosion,
                      "SmallExplosion1998",
                      "gfExplosionSpine",
                      20
                    ),
                    (this.listPrefab = null);
                }),
                (e.getNetFXConfig = function (i) {
                  i.BulletMultiple;
                  var t = i.SkillID,
                    n = null,
                    o = null;
                  return (
                    t &&
                      t != u.instance.SKILL_CONFIG.PROMOTION_GUN.SkillID &&
                      ((n = 1), (o = s.instance.getNetFXConfig(n))),
                    o || ((n = 0), (o = s.instance.getNetFXConfig(n))),
                    o
                  );
                }),
                o
              );
            })(e)
          ).instance = null),
          o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupController1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfPopupController.ts",
    "./gfUtilities.ts",
    "./EventsCode1998.ts",
    "./gfEventEmitter.ts",
    "./gfNetworkGameEvent.ts",
    "./EventController1998.ts",
    "./gfLocalize.ts",
    "./Config1998.ts",
    "./gfBaseEvents.ts",
    "./gfAutoFireController.ts",
    "./PopupEvent1998.ts",
  ],
  function (t) {
    "use strict";
    var n, e, o, i, s, u, p, c, E, r, a, P, f, l, _;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          i = t.default;
        },
        function (t) {
          (s = t.SetZIndex), (u = t.registerEvent);
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          c = t.default;
        },
        function (t) {
          E = t.default;
        },
        function (t) {
          r = t.default;
        },
        function (t) {
          a = t.default;
        },
        function (t) {
          P = t.default;
        },
        function (t) {
          f = t.default;
        },
        function (t) {
          l = t.gfAutoFireController;
        },
        function (t) {
          _ = t.PopupEvent1998;
        },
      ],
      execute: function () {
        var h;
        e._RF.push(
          {},
          "65b5bkG00ZPs6N3tcfG4oIY",
          "PopupController1998",
          void 0
        );
        var v = o.ccclass,
          O = (o.property, o.executeInEditMode);
        t(
          "PopupController1998",
          v("PopupController1998")(
            (h =
              O(
                (h = (function (t) {
                  function e() {
                    return t.apply(this, arguments) || this;
                  }
                  n(e, t);
                  var o = e.prototype;
                  return (
                    (o.onLoad = function () {
                      t.prototype.onLoad.call(this),
                        s(this.node, P.instance.PERSIST_Z_INDEX.POPUP);
                    }),
                    (o.initEvents = function () {
                      t.prototype.initEvents.call(this),
                        u(p.POPUP.HIDE_POPUP_EVENT, this.closePopupEvent, this),
                        u(
                          p.POPUP.CHECK_SHOW_POPUP_EVENT,
                          this.isShowPopupEvent,
                          this
                        ),
                        u(
                          p.POPUP.SHOW_POPUP_EVENT_AFTER_WIN,
                          this.checkShowEventInfo,
                          this
                        ),
                        u(f.COMMON.REFRESH_PAGE, this.resetOnExit, this);
                    }),
                    (o.closePopupEvent = function () {
                      this.popupEventInfo &&
                        this.popupEventInfo.active &&
                        this.closePopupByName(this.popupEventInfo.name);
                    }),
                    (o.checkShowPopupEvent = function () {
                      r &&
                        r.instance &&
                        ((!r.instance.isEventPlaying() &&
                          !r.instance.isEventComing()) ||
                          r.instance.isHaveHammerCount() ||
                          t.prototype.checkShowPopupEvent.call(this));
                    }),
                    (o.showEventInfo = function (n) {
                      t.prototype.showEventInfo.call(this, n),
                        c.instance.emit(p.SOUND.EVENT_POPUP_APPEAR);
                    }),
                    (o.isShowPopupEvent = function (t) {
                      t && t(this.popupEventInfo.active);
                    }),
                    (o.checkShowEventInfo = function (t) {
                      if (this._popupQueue.length > 0) {
                        var n =
                          this._popupQueue[
                            this._popupQueue.length - 1
                          ].getComponent("PopupPrompt1998");
                        if (n && !n._lastData) return;
                        if (n && n._lastData.eventCode == E.NETWORK_DIE) return;
                      } else this.showEventInfo(t);
                    }),
                    (o.isAutoPaused = function () {
                      return (
                        l.instance.getTargetState() ===
                        l.FIRE_TYPE_MAPPING.pause
                      );
                    }),
                    (o.showPrompt = function (t) {
                      var n = null;
                      if (
                        (t == E.MSG_CODE.NO_MONEY_IN_GAME ||
                          t == E.MSG_CODE.NO_MONEY_LOBBY) &&
                        r.instance.isEventPlaying()
                      ) {
                        var e = r.instance.getCurrentMode(),
                          o = r.instance.isHaveHammerCount();
                        (e !== r.instance.CONFIG_EVENT.MODE.CHOOSE_HAMMER ||
                          o) &&
                          (this.isAutoPaused() ||
                            (c.instance.emit(f.GAME_LAYER.OFF_ALL_TARGET),
                            c.instance.emit(
                              f.COMMON.RESET_TOUCH_LISTENER_NO_MONEY
                            )),
                          (n = {
                            customMsg: a.instance.TXT_OUT_OF_MONEY_EVENT,
                            customType:
                              P.instance.POPUP_PROMPT.JUST_CONFIRM_BUTTON,
                            customCallbacks: function () {},
                            code: t,
                          }));
                      }
                      (n = n || t), this._showPopup(this.popupPrompt, n);
                    }),
                    (o.resetOnExit = function () {
                      this.popupEventInfo.getComponent(_).resetOnExit();
                    }),
                    e
                  );
                })(i))
              ) || h)
          ) || h
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupEvent1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfPopupEventInfo.ts",
    "./gfUtilities.ts",
    "./gfBaseEvents.ts",
    "./EventsCode1998.ts",
    "./DataStore1998.ts",
    "./Config1998.ts",
    "./gfActionHelper.ts",
    "./MainPUController1998.ts",
    "./gfEventEmitter.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, a, s, o, h, p, u, c, r, l, E, g, d, f, v, m, M, _, S;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (a = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (o = e._decorator),
            (h = e.ScrollView),
            (p = e.v2),
            (u = e.Tween),
            (c = e.tween);
        },
        function (e) {
          r = e.gfPopupEventInfo;
        },
        function (e) {
          (l = e.registerEvent), (E = e.removeEvents);
        },
        function (e) {
          g = e.default;
        },
        function (e) {
          d = e.default;
        },
        function (e) {
          f = e.default;
        },
        function (e) {
          v = e.default;
        },
        function (e) {
          (m = e.moveTo), (M = e.stopAllActions);
        },
        function (e) {
          _ = e.default;
        },
        function (e) {
          S = e.default;
        },
      ],
      execute: function () {
        var T, N, P, C, O;
        s._RF.push({}, "1b6aeDaDaxHo4GVHZg0XAbr", "PopupEvent1998", void 0);
        var A = o.ccclass,
          y = o.property,
          L = 0,
          U = 1,
          b = 2;
        e(
          "PopupEvent1998",
          ((T = A("PopupEvent1998")),
          (N = y(_)),
          T(
            ((O = t(
              (C = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, s = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    i(t, "pageMain", O, a(t)),
                    t
                  );
                }
                n(t, e);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      l(
                        g.GAME_LAYER.ON_ENTER_GAME_ROOM,
                        this.resumeFormInGame,
                        this
                      ),
                      l(
                        g.LOBBY_LAYER.UPDATE_LOBBY_ON_SHOW,
                        this.resumeFormLobby,
                        this
                      ),
                      l(d.EVENT.ON_OPEN_BOX, this.onOpenBox, this),
                      l(
                        d.EVENT.UPDATE_HAMMER_COUNT,
                        this.onUpdateHammerCount,
                        this
                      ),
                      l(
                        d.EVENT.CHANGE_FROM_PLAYING_TO_PREPARE,
                        this.onChangeFromPlayingToPrepare,
                        this
                      ),
                      l(
                        d.EVENT.ENABLE_POPUP_BUTTONS,
                        this.handleStatusBtn,
                        this
                      ),
                      l(g.EVENT.EVENT_COMING, this.onEventUpdateStatus, this),
                      l(g.EVENT.EVENT_PLAYING, this.onEventUpdateStatus, this),
                      l(g.EVENT.EVENT_END, this.onEventUpdateStatus, this),
                      l(g.COMMON.SHAKE_SCREEN, this.shakeScreen, this);
                  }),
                  (s.updatePage = function (e) {
                    switch (
                      ((this.pageHistory.active = !1),
                      (this.pageInfo.active = !1),
                      (this.pageMain.node.active = !1),
                      this.pageMain.reset(),
                      this.pageMain.checkUpdateWallet &&
                        this.pageMain.checkUpdateWallet(),
                      this.toggleContainer.toggleItems.forEach(function (e) {
                        e.interactable = !e.isChecked;
                      }),
                      parseInt(e))
                    ) {
                      case L:
                        this.pageInfo
                          .getComponent(h)
                          .scrollToOffset(p(0, 340), 0),
                          (this.pageInfo.active = !0);
                        break;
                      case U:
                        this.pageMain.show();
                        break;
                      case b:
                        (this.pageHistory.active = !0),
                          this._initialized && this.loadEventHistory(),
                          this.pageMain.checkUpdateWallet();
                    }
                  }),
                  (s.onClick = function () {
                    S.instance.emit(g.SOUND.CLICK);
                  }),
                  (s.onTogglePress = function (e, t) {
                    this._initialized &&
                      ((this._choiceIndex = parseInt(t)), this.updatePage(t));
                  }),
                  (s.resumeFormInGame = function () {
                    this.node.active &&
                      this.pageMain.node.active &&
                      this.pageMain.onResume();
                  }),
                  (s.resumeFormLobby = function () {
                    this.node.active &&
                      this.pageMain.node.active &&
                      f.instance.getCurrentSceneName() ==
                        v.instance.SceneName.Lobby &&
                      this.pageMain.onResume();
                  }),
                  (s.onOpenBox = function (e) {
                    this.node.active &&
                      this.pageMain.node.active &&
                      this.pageMain.onOpenBox(e);
                  }),
                  (s.onUpdateHammerCount = function () {
                    this.node.active &&
                      this.pageMain.node.active &&
                      this.pageMain.onUpdateHammerCount();
                  }),
                  (s.onEventUpdateStatus = function () {
                    this.node.active &&
                      this.pageMain.node.active &&
                      this.pageMain.onEventUpdateStatus();
                  }),
                  (s.onChangeFromPlayingToPrepare = function () {
                    var e = this;
                    this.node.active &&
                      this.pageMain.node.active &&
                      this.pageMain.onChangeFromPlayingToPrepare &&
                      this.pageMain.onChangeFromPlayingToPrepare(function () {
                        e.pageMain.reset();
                      });
                  }),
                  (s.onDestroy = function () {
                    E(this);
                  }),
                  (s.handleStatusBtn = function (e) {
                    void 0 === e && (e = !0),
                      (this.btnClose.active = e),
                      (this.toggleContainer.node.active = e);
                  }),
                  (s.hide = function (t) {
                    e.prototype.hide.call(this, t),
                      this.pageMain.checkUpdateWallet(),
                      this.pageMain.reset();
                  }),
                  (s.shakeScreen = function (e) {
                    var t,
                      n = e.timeOneStep,
                      i = e.amplitude,
                      a = e.countStep,
                      s = void 0 === a ? 4 : a,
                      o = e.shakeStyle,
                      h =
                        void 0 === o
                          ? v.instance.SHAKE_SCREEN_STYLE.VERTICAL
                          : o;
                    this.node.setPosition(0, 0), u.stopAllByTarget(this.node);
                    for (var p = [], r = 0; r < s; r++) {
                      var l = this.setupAnimShake(n, i, h);
                      p = p.concat(l);
                    }
                    p.push(m(n, 0, 0)),
                      (t = c(this.node)).sequence.apply(t, p).start();
                  }),
                  (s.setupAnimShake = function (e, t, n) {
                    var i = v.instance.SHAKE_SCREEN_STYLE,
                      a = [];
                    switch (n) {
                      case i.VERTICAL:
                        a.push(m(e, 0, t)),
                          a.push(m(e, 0, 0)),
                          a.push(m(e, 0, -t));
                        break;
                      case i.HORIZONTAL:
                        a.push(m(e, t, 0)),
                          a.push(m(e, 0, 0)),
                          a.push(m(e, -t, 0));
                        break;
                      case i.CROSS_1:
                        a.push(m(e / 2, t, 0)),
                          a.push(m(e / 2, 0, 0)),
                          a.push(m(e / 2, -t, 0)),
                          a.push(m(e / 2, 0, 0)),
                          a.push(m(e / 2, 0, t)),
                          a.push(m(e / 2, 0, 0)),
                          a.push(m(e / 2, 0, -t));
                        break;
                      case i.CROSS_2:
                        a.push(m(e / 2, t, t)),
                          a.push(m(e / 2, 0, 0)),
                          a.push(m(e / 2, -t, -t)),
                          a.push(m(e / 2, 0, 0)),
                          a.push(m(e / 2, -t, t)),
                          a.push(m(e / 2, 0, 0)),
                          a.push(m(e / 2, t, -t));
                        break;
                      case i.FULL:
                        a.push(m(e / 4, t, t)),
                          a.push(m(e / 4, 0, 0)),
                          a.push(m(e / 4, -t, -t)),
                          a.push(m(e / 4, 0, 0)),
                          a.push(m(e / 4, -t, t)),
                          a.push(m(e / 4, 0, 0)),
                          a.push(m(e / 4, t, -t)),
                          a.push(m(e / 4, t, 0)),
                          a.push(m(e / 4, 0, 0)),
                          a.push(m(e / 4, -t, 0)),
                          a.push(m(e / 4, 0, 0)),
                          a.push(m(e / 4, 0, t)),
                          a.push(m(e / 4, 0, 0)),
                          a.push(m(e / 4, 0, -t));
                    }
                    return a;
                  }),
                  (s.resetOnExit = function () {
                    M(this.node), this.pageMain.reset(!0);
                  }),
                  t
                );
              })(r)).prototype,
              "pageMain",
              [N],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (P = C))
          ) || P)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupInfo1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfEventEmitter.ts",
    "./gfUtilities.ts",
    "./gfLocalize.ts",
    "./Config1998.ts",
    "./gfPopupInfo.ts",
    "./gfBaseEvents.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, a, r, u, s, l, c, p, f, h, d, b, g, y;
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
            (r = t._decorator),
            (u = t.Button),
            (s = t.Node),
            (l = t.ScrollView),
            (c = t.Vec3),
            (p = t.sys);
        },
        function (t) {
          f = t.default;
        },
        function (t) {
          h = t.checkTablet;
        },
        function (t) {
          d = t.default;
        },
        function (t) {
          b = t.default;
        },
        function (t) {
          g = t.GfPopupInfo;
        },
        function (t) {
          y = t.default;
        },
      ],
      execute: function () {
        var m, v, T, B, I, C, w, S, P, z, k, D, F, E, L;
        a._RF.push({}, "f99f1jqkjNLToN5Eoh7HLi6", "PopupInfo1998", void 0);
        var N = r.ccclass,
          _ = r.property;
        t(
          "PopupInfo1998",
          ((m = N("PopupInfo1998")),
          (v = _(u)),
          (T = _(u)),
          (B = _(u)),
          (I = _(s)),
          (C = _(s)),
          (w = _(s)),
          m(
            ((z = e(
              (P = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "buttonFish", z, o(e)),
                    n(e, "buttonFeature", k, o(e)),
                    n(e, "buttonDragon", D, o(e)),
                    n(e, "fish", F, o(e)),
                    n(e, "feature", E, o(e)),
                    n(e, "dragon", L, o(e)),
                    (e._currentTabId = 0),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.initLanguage = function () {
                    this.popupTitle = d.instance.popupTitle.info;
                  }),
                  (a.show = function () {
                    t.prototype.show.call(this),
                      this.setInitialized(!0),
                      this.dragon.getComponent(l).scrollToTop(0),
                      this.feature.getComponent(l).scrollToTop(0),
                      this.onClickButton(null, 0);
                  }),
                  (a.onClickButton = function (t, e) {
                    var i = parseInt(e);
                    if (this._currentTabId !== i)
                      switch (
                        (t && f.instance.emit(y.SOUND.CLICK),
                        (this._currentTabId = i),
                        this.hideAllButton(),
                        i)
                      ) {
                        case 0:
                          this.updateStateButton(this.buttonFish, !0),
                            (this.fish.active = !0);
                          break;
                        case 1:
                          this.updateStateButton(this.buttonFeature, !0),
                            (this.feature.active = !0),
                            this.feature.getComponent(l).scrollToTop(0);
                          break;
                        case 2:
                          this.updateStateButton(this.buttonDragon, !0),
                            (this.dragon.active = !0),
                            this.dragon.getComponent(l).scrollToTop(0);
                      }
                  }),
                  (a.showWithEffect = function () {
                    t.prototype.showWithEffect.call(this);
                    var e = new c(1, 1, 1);
                    (h() || p.platform === p.Platform.DESKTOP_BROWSER) &&
                      (e = new c(0.7, 0.7, 1)),
                      this.contents.setScale(e);
                  }),
                  (a.hideAllButton = function () {
                    this.updateStateButton(this.buttonFish, !1),
                      this.updateStateButton(this.buttonFeature, !1),
                      this.updateStateButton(this.buttonDragon, !1),
                      (this.fish.active = !1),
                      (this.feature.active = !1),
                      (this.dragon.active = !1);
                  }),
                  (a.updateStateButton = function (t, e) {
                    (t.node.getChildByName("checkmark").active = e),
                      (t.node.getChildByName("Background").y = e ? 0 : 1.1);
                  }),
                  (a.onClick = function () {
                    this.getInitialized && f.instance.emit(y.SOUND.CLICK);
                  }),
                  (a.hide = function (e) {
                    void 0 === e && (e = b.instance.POPUP_ANIMATION.DEFAULT),
                      t.prototype.hide.call(this, e),
                      this.setInitialized(!1);
                  }),
                  (a.onClose = function () {
                    t.prototype.onClose.call(this);
                  }),
                  e
                );
              })(g)).prototype,
              "buttonFish",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (k = e(P.prototype, "buttonFeature", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (D = e(P.prototype, "buttonDragon", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (F = e(P.prototype, "fish", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = e(P.prototype, "feature", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(P.prototype, "dragon", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = P))
          ) || S)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupJackpotHistory1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfUtilities.ts",
    "./gfPopupJackpotHistory.ts",
  ],
  function (t) {
    "use strict";
    var o, c, s, e, i, n, p;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (c = t.cclegacy), (s = t._decorator), (e = t.Vec3), (i = t.sys);
        },
        function (t) {
          n = t.checkTablet;
        },
        function (t) {
          p = t.GfPopupJackpotHistory;
        },
      ],
      execute: function () {
        var r;
        c._RF.push(
          {},
          "0cc4eJ9k0dM35l1tJ+wFSnH",
          "PopupJackpotHistory1998",
          void 0
        );
        var u = s.ccclass;
        s.property,
          t(
            "PopupJackpotHistory1998",
            u("PopupJackpotHistory1998")(
              (r = (function (t) {
                function c() {
                  return t.apply(this, arguments) || this;
                }
                return (
                  o(c, t),
                  (c.prototype.showWithEffect = function () {
                    this.contents.setPosition(0, 14, 0),
                      t.prototype.showWithEffect.call(this);
                    var o = new e(1, 1, 1);
                    (n() || i.platform === i.Platform.DESKTOP_BROWSER) &&
                      (o = new e(0.7, 0.7, 1)),
                      this.contents.setScale(o);
                  }),
                  c
                );
              })(p))
            ) || r
          );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupPromotion1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfPopupPromotion.ts",
    "./gfEventEmitter.ts",
    "./gfBaseEvents.ts",
    "./utils2.ts",
    "./gfPopupBase.ts",
  ],
  function (t) {
    "use strict";
    var o, n, e, i, s, u, r, c;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (e = t._decorator);
        },
        function (t) {
          i = t.gfPopupPromotion;
        },
        function (t) {
          s = t.default;
        },
        function (t) {
          u = t.default;
        },
        function (t) {
          r = t.formatMoney;
        },
        function (t) {
          c = t.GfPopupBase;
        },
      ],
      execute: function () {
        var p;
        n._RF.push({}, "ea604iRnnJEfYXkvdiITO+8", "PopupPromotion1998", void 0);
        var l = e.ccclass;
        t(
          "PopupPromotion1998",
          l("PopupPromotion1998")(
            (p = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              return (
                o(n, t),
                (n.prototype.show = function (t) {
                  this.onResetState(),
                    this.unscheduleAllCallbacks(),
                    s.instance.emit(u.SOUND.SHOW_PROMOTION_POPUP);
                  var o = t.BulletMultiple,
                    n = t.BulletRemain,
                    e = t.RoomKind;
                  (this._roomKind = e),
                    (this.txtBulletRemain.string = n),
                    (this.txtMessage.string = r(o)),
                    c.prototype.show.call(this);
                }),
                n
              );
            })(i))
          ) || p
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupPrompt1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfPopupPrompt.ts",
    "./gfUtilities.ts",
  ],
  function (t) {
    "use strict";
    var o, e, p, r, c, s, n;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (p = t._decorator), (r = t.Vec3), (c = t.sys);
        },
        function (t) {
          s = t.GfPopupPrompt;
        },
        function (t) {
          n = t.checkTablet;
        },
      ],
      execute: function () {
        var i;
        e._RF.push({}, "39d1eao14xD5Ij3/EVseHYP", "PopupPrompt1998", void 0);
        var u = p.ccclass;
        t(
          "PopupPrompt1998",
          u("PopupPrompt1998")(
            (i = (function (t) {
              function e() {
                return t.apply(this, arguments) || this;
              }
              return (
                o(e, t),
                (e.prototype.showWithEffect = function () {
                  t.prototype.showWithEffect.call(this);
                  var o = new r(1, 1, 1);
                  (n() || c.platform === c.Platform.DESKTOP_BROWSER) &&
                    (o = new r(0.7, 0.7, 1)),
                    this.contents.setScale(o);
                }),
                e
              );
            })(s))
          ) || i
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PopupSetting1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfPopupSetting.ts",
    "./gfUtilities.ts",
  ],
  function (t) {
    "use strict";
    var e, n, o, i, c, s, r;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (o = t._decorator), (i = t.Vec3), (c = t.sys);
        },
        function (t) {
          s = t.GfPopupSetting;
        },
        function (t) {
          r = t.checkTablet;
        },
      ],
      execute: function () {
        var p;
        n._RF.push({}, "cb47d6jlzRNjr8lPFfDWn+Q", "PopupSetting1998", void 0);
        var u = o.ccclass;
        o.property,
          t(
            "PopupSetting1998",
            u("PopupSetting1998")(
              (p = (function (t) {
                function n() {
                  return t.apply(this, arguments) || this;
                }
                return (
                  e(n, t),
                  (n.prototype.showWithEffect = function () {
                    t.prototype.showWithEffect.call(this);
                    var e = new i(1, 1, 1);
                    (r() || c.platform === c.Platform.DESKTOP_BROWSER) &&
                      (e = new i(0.7, 0.7, 1)),
                      this.contents.setScale(e);
                  }),
                  n
                );
              })(s))
            ) || p
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PrepareMode1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./Config1998.ts",
    "./EventController1998.ts",
    "./gfEventEmitter.ts",
    "./EventsCode1998.ts",
    "./gfActionHelper.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, o, a, r, s, l, c, u, p, h, f, m, g, d, b, v, N, y, V, T, A;
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
            (r = t._decorator),
            (s = t.Label),
            (l = t.Node),
            (c = t.Button),
            (u = t.sp),
            (p = t.Color),
            (h = t.tween),
            (f = t.v3),
            (m = t.UITransform),
            (g = t.Component);
        },
        function (t) {
          (d = t.setOpacity), (b = t.getOpacity);
        },
        function (t) {
          v = t.default;
        },
        function (t) {
          N = t.default;
        },
        function (t) {
          y = t.default;
        },
        function (t) {
          V = t.default;
        },
        function (t) {
          (T = t.fadeOut), (A = t.stopAllActions);
        },
      ],
      execute: function () {
        var C,
          P,
          w,
          I,
          S,
          E,
          L,
          R,
          z,
          F,
          H,
          k,
          U,
          x,
          K,
          _,
          O,
          D,
          M,
          B,
          X,
          Y,
          j,
          G,
          q,
          J,
          Q;
        a._RF.push({}, "f3555ULDOdBlIw4Kcn++pyA", "PrepareMode1998", void 0);
        var W = r.ccclass,
          Z = r.property;
        t(
          "default",
          ((C = W("PrepareMode1998")),
          (P = Z(s)),
          (w = Z(l)),
          (I = Z(l)),
          (S = Z(s)),
          (E = Z(c)),
          (L = Z(c)),
          (R = Z(s)),
          (z = Z(l)),
          (F = Z(l)),
          (H = Z(l)),
          (k = Z(l)),
          (U = Z(l)),
          C(
            ((_ = i(
              (K = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, a = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (i = t.call.apply(t, [this].concat(a)) || this),
                    n(i, "countVip", _, o(i)),
                    n(i, "frameInfoNormal", O, o(i)),
                    n(i, "frameInfoVip", D, o(i)),
                    n(i, "countNormal", M, o(i)),
                    n(i, "btnVip", B, o(i)),
                    n(i, "btnNormal", X, o(i)),
                    n(i, "txtStatus", Y, o(i)),
                    n(i, "spVip", j, o(i)),
                    n(i, "spNormal", G, o(i)),
                    n(i, "gateLeft", q, o(i)),
                    n(i, "gateRight", J, o(i)),
                    n(i, "blockTouch", Q, o(i)),
                    (i.canPlayVip = void 0),
                    (i.canPlayNormal = void 0),
                    (i.changePlayingMode = null),
                    i
                  );
                }
                e(i, t);
                var a = i.prototype;
                return (
                  (a.onLoad = function () {
                    d(this.node, 255);
                  }),
                  (a.show = function () {
                    (this.node.active = !0),
                      d(this.node, 255),
                      this.resetTransition(),
                      this.updateUI();
                  }),
                  (a.onUpdateHammerCount = function () {
                    this.updateUI();
                  }),
                  (a.onEventUpdateStatus = function () {
                    this.updateTxtStatus();
                  }),
                  (a.updateUI = function () {
                    var t = v.instance.RoomKind,
                      i = t.VIP,
                      e = t.Normal,
                      n = N.instance.getHammerCount(),
                      o = n ? n[i] : 0,
                      a = n ? n[e] : 0;
                    o > 0
                      ? ((this.canPlayVip = !0),
                        (this.countVip.string = o > 99 ? "99+" : o),
                        this.setActiveVip(!0))
                      : ((this.canPlayVip = !1),
                        (this.countVip.string = "0"),
                        this.setActiveVip(!1)),
                      a > 0
                        ? ((this.canPlayNormal = !0),
                          (this.countNormal.string = a > 99 ? "99+" : a),
                          this.setActiveNormal(!0))
                        : ((this.canPlayNormal = !1),
                          (this.countNormal.string = "0"),
                          this.setActiveNormal(!1)),
                      this.updateTxtStatus();
                  }),
                  (a.updateTxtStatus = function () {
                    var t = v.instance.RoomKind,
                      i = t.VIP,
                      e = t.Normal,
                      n = N.instance.getHammerCount();
                    N.instance.isEventPlaying()
                      ? 0 == n[e] && 0 == n[i]
                        ? (this.txtStatus.string =
                            "BẮN CÁ ĐỂ TÍCH LŨY LƯỢT CHƠI")
                        : (this.txtStatus.string = "CHỌN GẬY ĐỂ BẮT ĐẦU")
                      : N.instance.isEventComing()
                      ? ((this.txtStatus.string = "SỰ KIỆN CHƯA BẮT ĐẦU"),
                        this.setActiveVip(!1),
                        this.setActiveNormal(!1))
                      : ((this.txtStatus.string = "SỰ KIỆN ĐÃ KẾT THÚC"),
                        this.setActiveVip(!1),
                        this.setActiveNormal(!1));
                  }),
                  (a.setActiveVip = function (t) {
                    void 0 === t && (t = !1),
                      (this.btnVip.interactable = t),
                      (this.spVip.getComponent(u.Skeleton).color = t
                        ? new p().fromHEX("#FFFFFF")
                        : new p().fromHEX("#7A7171"));
                  }),
                  (a.setActiveNormal = function (t) {
                    void 0 === t && (t = !1),
                      (this.btnNormal.interactable = t),
                      (this.spNormal.getComponent(u.Skeleton).color = t
                        ? new p().fromHEX("#FFFFFF")
                        : new p().fromHEX("#7A7171"));
                  }),
                  (a.onVipClick = function () {
                    var t = this;
                    if (this.canPlayVip && this.checkActive()) {
                      this.playTransition(function () {
                        y.instance.emit(V.SOUND.EVENT_START_CLICK);
                        var i = v.instance.RoomKind.VIP;
                        t.changePlayingMode(i);
                      });
                    }
                  }),
                  (a.onNormalClick = function () {
                    var t = this;
                    if (this.canPlayNormal && this.checkActive()) {
                      this.playTransition(function () {
                        y.instance.emit(V.SOUND.EVENT_START_CLICK);
                        var i = v.instance.RoomKind.Normal;
                        t.changePlayingMode(i);
                      });
                    }
                  }),
                  (a.playTransition = function (t) {
                    var i = this;
                    this.resetTransition(),
                      (this.blockTouch.active = !0),
                      (this.txtStatus.string = ""),
                      (this.countNormal.string = ""),
                      (this.countVip.string = ""),
                      (this.frameInfoNormal.active = !1),
                      (this.frameInfoVip.active = !1),
                      y.instance.emit(V.SOUND.CLAY_POT_APPEAR),
                      h(this.node)
                        .parallel(
                          h().call(function () {
                            h(i.gateLeft)
                              .to(1, {
                                position: f(
                                  -i.gateLeft.getComponent(m).width,
                                  0,
                                  1
                                ),
                              })
                              .start(),
                              h(i.spNormal).then(T(0.7)).start();
                          }),
                          h().call(function () {
                            h(i.gateRight)
                              .to(1, {
                                position: f(
                                  i.gateRight.getComponent(m).width,
                                  0,
                                  1
                                ),
                              })
                              .start(),
                              h(i.spVip).then(T(0.7)).start();
                          })
                        )
                        .delay(0.5)
                        .call(function () {
                          t();
                        })
                        .delay(0.5)
                        .call(function () {
                          return i.hide();
                        })
                        .start();
                  }),
                  (a.resetTransition = function () {
                    A(this.node),
                      this.node.setScale(f(1, 1, 1)),
                      A(this.gateLeft),
                      A(this.gateRight),
                      A(this.spNormal),
                      A(this.spVip),
                      this.gateLeft.setPosition(f(0, 0, 1)),
                      this.gateRight.setPosition(f(0, 0, 1)),
                      d(this.spVip, 255),
                      d(this.spNormal, 255),
                      (this.blockTouch.active = !1),
                      (this.frameInfoNormal.active = !0),
                      (this.frameInfoVip.active = !0);
                  }),
                  (a.checkActive = function () {
                    return this.node.active && 255 === b(this.node);
                  }),
                  (a.hide = function () {
                    (this.node.active = !1),
                      (this.blockTouch.active = !1),
                      this.setActiveVip(!1),
                      this.setActiveNormal(!1);
                  }),
                  i
                );
              })(g)).prototype,
              "countVip",
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
            (O = i(K.prototype, "frameInfoNormal", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = i(K.prototype, "frameInfoVip", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = i(K.prototype, "countNormal", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = i(K.prototype, "btnVip", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = i(K.prototype, "btnNormal", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = i(K.prototype, "txtStatus", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = i(K.prototype, "spVip", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = i(K.prototype, "spNormal", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = i(K.prototype, "gateLeft", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = i(K.prototype, "gateRight", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = i(K.prototype, "blockTouch", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = K))
          ) || x)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ReferenceManager1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfReferenceManager.ts"],
  function (e) {
    "use strict";
    var t, n, r, a, i;
    return {
      setters: [
        function (e) {
          (t = e.inheritsLoose), (n = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy), (a = e._decorator);
        },
        function (e) {
          i = e.default;
        },
      ],
      execute: function () {
        var s, c;
        r._RF.push(
          {},
          "78fd2OVQgtEdph9BLLSKbZQ",
          "ReferenceManager1998",
          void 0
        );
        var o = a.ccclass;
        e(
          "default",
          o("ReferenceManager1998")(
            (((c = (function (e) {
              function r() {
                var t;
                return (t = e.call(this) || this), (r.instance = n(t)), t;
              }
              t(r, e);
              var a = r.prototype;
              return (
                (a.getEventTrayByDeskStation = function (e) {
                  var t = this.getEventTrayLayer();
                  return t && t.getEventTrayByDeskStation(e);
                }),
                (a.getPlayerByDeskStation = function (e) {
                  var t = this.getPlayerLayer();
                  return t
                    ? t.getComponent("gfPlayerLayer").getPlayerByDeskStation(e)
                    : null;
                }),
                (a.destroy = function () {
                  r.instance = null;
                }),
                r
              );
            })(i)).instance = null),
            (s = c))
          ) || s
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/RewardItem1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts"],
  function (t) {
    "use strict";
    var e, i, r, n, o, a, l, u, c;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (l = t.Label),
            (u = t.Component);
        },
        function (t) {
          c = t.formatMoney;
        },
      ],
      execute: function () {
        var s, h, p, f, g, d, v, x, y;
        o._RF.push({}, "c592fWxWZNGFZF+Zheumth8", "RewardItem1998", void 0);
        var b = a.ccclass,
          m = a.property;
        t(
          "default",
          ((s = b("RewardItem1998")),
          (h = m(l)),
          (p = m(l)),
          (f = m(l)),
          s(
            ((v = e(
              (d = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    r(e, "txtValue", v, n(e)),
                    r(e, "highlightNode", x, n(e)),
                    r(e, "txtMul", y, n(e)),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    this.reset();
                  }),
                  (o.updateValue = function (t) {
                    this.activeReward(!1, 0),
                      (this.txtValue.string = 2 === t ? "x2 THƯỞNG" : c(t));
                  }),
                  (o.activeReward = function (t, e) {
                    void 0 === e && (e = 0),
                      (this.highlightNode.active = t),
                      (this.txtMul.string = e > 1 ? "x" + e : "");
                  }),
                  (o.reset = function () {
                    (this.txtValue.string = ""),
                      (this.highlightNode.active = !1),
                      (this.txtMul.string = "");
                  }),
                  e
                );
              })(u)).prototype,
              "txtValue",
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
            (x = e(d.prototype, "highlightNode", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = e(d.prototype, "txtMul", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = d))
          ) || g)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SideMenu1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfSideMenu.ts"],
  function (e) {
    "use strict";
    var t, i, n, s, o, c, d, u, h;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (i = e.cclegacy),
            (n = e._decorator),
            (s = e.Widget),
            (o = e.Vec3),
            (c = e.UIOpacity),
            (d = e.Tween),
            (u = e.tween);
        },
        function (e) {
          h = e.GfSideMenu;
        },
      ],
      execute: function () {
        var a;
        i._RF.push({}, "4a4a2fxWq1MBLrxdi+iDr8y", "SideMenu1998", void 0);
        var r = n.ccclass;
        e(
          "SideMenu1998",
          r("SideMenu1998")(
            (a = (function (e) {
              function i() {
                return e.apply(this, arguments) || this;
              }
              t(i, e);
              var n = i.prototype;
              return (
                (n.updateSceneSize = function () {
                  this.node.getComponent(s) &&
                    this.node.getComponent(s).updateAlignment();
                }),
                (n.hideSideBar = function () {
                  var e = this;
                  if (this.isActionDone) {
                    this.unschedule(this.scheduleHide),
                      (this.isActionDone = !1);
                    var t = new o(-this.frameWidth, 0, 1);
                    (this.isHide = !this.isHide),
                      this.iconHide.setScale(
                        -this.iconHide.scale.x,
                        this.iconHide.scale.y
                      ),
                      this.isHide
                        ? ((t = new o(0, 0, 1)),
                          (this.node.getComponent(c).opacity = 255))
                        : ((this.node.getComponent(c).opacity = 255),
                          this.scheduleOnce(this.scheduleHide, 3));
                    var i = this.isHide ? "sineIn" : "sineOut";
                    d.stopAllByTarget(this.nodeMove),
                      u(this.nodeMove)
                        .to(0.3, { position: t }, { easing: i })
                        .call(function () {
                          e.isActionDone = !0;
                        })
                        .start();
                  }
                }),
                (n.resetSideMenu = function () {
                  e.prototype.resetSideMenu.call(this),
                    this.iconHide.setScale(new o(1, 1, 1)),
                    (this.node.getComponent(c).opacity = 255),
                    this.node.getComponent(s) &&
                      this.node.getComponent(s).updateAlignment();
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
  "chunks:///_virtual/SoundController1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfSoundController.ts",
    "./gfUtilities.ts",
    "./gfBossController.ts",
    "./gfBaseConfig.ts",
    "./EventController1998.ts",
    "./DragonConfig1998.ts",
    "./DataStore1998.ts",
    "./EventsCode1998.ts",
  ],
  function (t) {
    "use strict";
    var i, n, s, o, a, p, e, l, h, _, y, S;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (s = t._decorator);
        },
        function (t) {
          o = t.GfSoundController;
        },
        function (t) {
          (a = t.registerEvent), (p = t.removeEvents);
        },
        function (t) {
          e = t.default;
        },
        function (t) {
          l = t.default;
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          _ = t.default;
        },
        function (t) {
          y = t.default;
        },
        function (t) {
          S = t.default;
        },
      ],
      execute: function () {
        var c;
        n._RF.push(
          {},
          "58cd8xv5iJMtb0cyUtW/b2e",
          "SoundController1998",
          void 0
        );
        var u = s.ccclass;
        t(
          "SoundController1998",
          u("SoundController1998")(
            (c = (function (t) {
              function n() {
                for (
                  var i, n = arguments.length, s = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  s[o] = arguments[o];
                return (
                  ((i = t.call.apply(t, [this].concat(s)) || this)._countCoin =
                    void 0),
                  (i._claypotAppear = void 0),
                  (i._bigWinEvent = void 0),
                  (i._coinFly = void 0),
                  (i._claypotCountUp = void 0),
                  (i._claypotBreak = void 0),
                  i
                );
              }
              i(n, t);
              var s = n.prototype;
              return (
                (s.initEvents = function () {
                  t.prototype.initEvents.call(this),
                    a(S.SOUND.ACTIVE_FREEZE, this.playSfxFreeze, this),
                    a(S.SOUND.ADD_ITEM, this.playSfxAddItem, this),
                    a(S.SOUND.ITEM_EVENT_DROP, this.playSfxPartDrop, this),
                    a(S.SOUND.PART_INSERTED, this.playSfxPartInserted, this),
                    a(S.SOUND.HAMMER_CREATED, this.playSfxHammerCreated, this),
                    a(
                      S.SOUND.EVENT_POPUP_APPEAR,
                      this.playSfxPopupAppear,
                      this
                    ),
                    a(S.SOUND.EVENT_TRAY_CLICK, this.playSfxEventClick, this),
                    a(
                      S.SOUND.EVENT_START_CLICK,
                      this.playSfxEventStartClick,
                      this
                    ),
                    a(
                      S.SOUND.CLAY_POT_APPEAR,
                      this.playSfxEventClaypotAppear,
                      this
                    ),
                    a(
                      S.SOUND.STOP_CLAY_POT_APPEAR,
                      this.stopSfxEventClaypotAppear,
                      this
                    ),
                    a(
                      S.SOUND.CLAY_POT_BROKEN,
                      this.playSfxEventClaypotBroken,
                      this
                    ),
                    a(
                      S.SOUND.CLAY_POT_AWARDED,
                      this.playSfxEventClaypotAwarded,
                      this
                    ),
                    a(S.SOUND.CLAY_POT_X2, this.playSfxEventClaypotX2, this),
                    a(
                      S.SOUND.CLAY_POT_MISSED,
                      this.playSfxEventClaypotMissed,
                      this
                    ),
                    a(S.SOUND.BIG_WIN_EVENT, this.playSfxEventBigWin, this),
                    a(
                      S.SOUND.STOP_BIG_WIN_EVENT,
                      this.stopSfxEventBigWin,
                      this
                    ),
                    a(
                      S.SOUND.EVENT_CLAY_POT_BREAK,
                      this.playClaypotBreak,
                      this
                    ),
                    a(
                      S.SOUND.EVENT_STOP_CLAY_POT_BREAK,
                      this.stopClaypotBreak,
                      this
                    ),
                    a(S.SOUND.SHOW_BOX_VALUE, this.playShowBoxValue, this),
                    a(S.SOUND.SHOW_BOX_MISS, this.playShowBoxMiss, this),
                    a(S.SOUND.EVENT_COUNT_COIN, this.playEventCountCoin, this),
                    a(S.SOUND.EVENT_STOP_COUNT_COIN, this.stopCountCoin, this),
                    a(
                      S.SOUND.EVENT_CLAY_POT_COUNT_UP,
                      this.playClaypotCountUp,
                      this
                    ),
                    a(
                      S.SOUND.EVENT_STOP_CLAY_POT_COUNT_UP,
                      this.stopClaypotCountUp,
                      this
                    ),
                    a(S.SOUND.EVENT_COIN_FLY, this.playEventCoinFly, this),
                    a(S.SOUND.STOP_EVENT_COIN_FLY, this.stopEventCoinFly, this),
                    a(S.SOUND.X2_BOARD, this.playEventX2Board, this),
                    a(S.SOUND.EVENT_EXPLODE, this.playEventExplode, this),
                    a(
                      S.SOUND.SET_ACTIVE_MUSIC_VOLUME,
                      this.setActiveMusicVolume,
                      this
                    );
                }),
                (s.resumeSoundBackground = function () {
                  var t;
                  e.instance.getBossByKind(
                    null == (t = _.instance) ? void 0 : t.bossKind
                  )
                    ? this.playBackGroundMusic(
                        _.instance.SOUND_BACKGROUND_CONFIG
                      )
                    : this.playBackGroundMusic(
                        l.instance.SOUND_BACKGROUND_CONFIG.IN_GAME
                      );
                }),
                (s.setActiveMusicVolume = function (t) {
                  this.setMusicVolume(t ? y.instance.getCurrentBGMVolume() : 0);
                }),
                (s.playSfxAddItem = function () {
                  this.playFishSFX("sfxAddItem");
                }),
                (s.playSfxFreeze = function () {
                  this.playFishSFX("sfxFreeze");
                }),
                (s.playSfxRoundSwitch = function () {}),
                (s.playShowBoxValue = function (t) {
                  h.instance.checkBoxType(t, "Small")
                    ? this.playFishSFX("sfx_small_result")
                    : h.instance.checkBoxType(t, "Big")
                    ? this.playFishSFX("sfx_medium_result")
                    : this.playFishSFX("sfx_big_result");
                }),
                (s.playShowBoxMiss = function () {
                  this.playFishSFX("sfx_clay_open");
                }),
                (s.playEventCountCoin = function () {
                  this.stopCountCoin(),
                    (this._countCoin = this.playFishSFX("sfx_count_result"));
                }),
                (s.stopCountCoin = function () {
                  this._countCoin && this.stopSound(this._countCoin);
                }),
                (s.playSfxAnnoucement = function () {
                  this.playFishSFX("sfx_annoucement");
                }),
                (s.playSfxClaypotAppear = function () {
                  this.playFishSFX("sfx_claypot_appear");
                }),
                (s.playSfxPartDrop = function () {
                  this.playFishSFX("sfx_part_drop");
                }),
                (s.playSfxPartInserted = function (t) {
                  this.playFishSFX("sfx_part_inserted" + t);
                }),
                (s.playSfxHammerCreated = function () {
                  this.playFishSFX("sfx_hammer_created");
                }),
                (s.playSfxPopupAppear = function () {
                  this.playFishSFX("sfx_popup_appear");
                }),
                (s.playSfxEventClick = function () {
                  this.playFishSFX("sfx_event_click");
                }),
                (s.playSfxEventStartClick = function () {
                  this.playFishSFX("sfx_start_event");
                }),
                (s.playSfxEventClaypotAppear = function () {
                  this._claypotAppear = this.playFishSFX("sfx_claypot_appear");
                }),
                (s.stopSfxEventClaypotAppear = function () {
                  this._claypotAppear && this.stopSound(this._claypotAppear);
                }),
                (s.playSfxEventClaypotBroken = function () {
                  this.playFishSFX("sfx_claypot_broken");
                }),
                (s.playSfxEventClaypotAwarded = function () {
                  this.playFishSFX("sfx_claypot_awarded");
                }),
                (s.playSfxEventClaypotX2 = function () {
                  this.playFishSFX("sfx_claypot_x2");
                }),
                (s.playSfxEventClaypotMissed = function () {
                  this.playFishSFX("sfx_claypot_missed");
                }),
                (s.playSfxEventBigWin = function () {
                  this._bigWinEvent = this.playFishSFX("sfx_bigwin_event");
                }),
                (s.playEventCoinFly = function () {
                  this._coinFly = this.playFishSFX("sfx_coin_fly");
                }),
                (s.playEventX2Board = function () {
                  this.playFishSFX("sfx_x2_inserted");
                }),
                (s.playEventExplode = function () {
                  this.playFishSFX("sfx_explode");
                }),
                (s.playClaypotCountUp = function () {
                  this._claypotCountUp = this.playFishSFX("sfx_count");
                }),
                (s.playClaypotBreak = function () {
                  this._claypotBreak = this.playFishSFX("sfx_boink");
                }),
                (s.stopClaypotCountUp = function () {
                  this.stopSound(this._claypotCountUp),
                    (this._claypotCountUp = null);
                }),
                (s.stopClaypotBreak = function () {
                  this.stopSound(this._claypotBreak),
                    (this._claypotBreak = null);
                }),
                (s.stopSfxEventBigWin = function () {
                  this.stopSound(this._bigWinEvent), (this._bigWinEvent = null);
                }),
                (s.stopEventCoinFly = function () {
                  this.stopSound(this._coinFly), (this._coinFly = null);
                }),
                (s.onDestroy = function () {
                  t.prototype.onDestroy.call(this), p(this);
                }),
                n
              );
            })(o))
          ) || c
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SpineFish1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseFish1998.ts"],
  function (i) {
    "use strict";
    var n, e, t, s, o, a, h, c, r, m;
    return {
      setters: [
        function (i) {
          (n = i.applyDecoratedDescriptor),
            (e = i.inheritsLoose),
            (t = i.initializerDefineProperty),
            (s = i.assertThisInitialized);
        },
        function (i) {
          (o = i.cclegacy),
            (a = i._decorator),
            (h = i.sp),
            (c = i.sys),
            (r = i.v3);
        },
        function (i) {
          m = i.BaseFish1998;
        },
      ],
      execute: function () {
        var l, f, A, u, p;
        o._RF.push({}, "f0f46q9W0lERqaCCfFLeOPC", "SpineFish1998", void 0);
        var d = a.ccclass,
          C = a.property;
        i(
          "SpineFish1998",
          ((l = d("SpineFish1998")),
          (f = C(h.Skeleton)),
          l(
            ((p = n(
              (u = (function (i) {
                function n() {
                  for (
                    var n, e = arguments.length, o = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (n = i.call.apply(i, [this].concat(o)) || this),
                    t(n, "fishAnim", p, s(n)),
                    n
                  );
                }
                e(n, i);
                var o = n.prototype;
                return (
                  (o.initAssets = function (n) {
                    if (!this.fishAnim) {
                      var e = this.node.getChildByName("mainSpine");
                      this.fishAnim = e.getComponent(h.Skeleton);
                    }
                    i.prototype.initAssets.call(this, n),
                      (this.fishAnim.skeletonData &&
                        this.fishAnim.skeletonData.name == n.asset.name) ||
                        (this.fishAnim.skeletonData = n.asset),
                      this.initAnimationCacheMode(n.cacheMode),
                      this.fishAnim.setAnimation(
                        0,
                        n.AnimationName ? n.AnimationName[0] : "animation",
                        !0
                      ),
                      this.fishAnim &&
                        n.customAnimProp &&
                        Object.assign(this.fishAnim.node, n.customAnimProp),
                      (this.fishAnim.premultipliedAlpha = n.premiumAlphaMode);
                  }),
                  (o.initAnimationCacheMode = function (i) {
                    c.isNative
                      ? this.fishAnim.setAnimationCacheMode(
                          h.Skeleton.AnimationCacheMode.REALTIME
                        )
                      : this.fishAnim.setAnimationCacheMode(
                          null != i
                            ? i
                            : h.Skeleton.AnimationCacheMode.SHARED_CACHE
                        );
                  }),
                  (o.playEffectDie = function () {
                    this.fishAnim.timeScale = 2;
                  }),
                  (o.resetColor = function () {
                    this.fishAnim.color = this.NORMAL_COLOR;
                  }),
                  (o.setColor = function (i) {
                    this.fishAnim.color = i;
                  }),
                  (o.changeAnimationSpeed = function (i) {
                    void 0 === i && (i = 0.5), (this.fishAnim.timeScale *= i);
                  }),
                  (o.resetAnimationSpeed = function () {
                    this.fishAnim.timeScale = 1;
                  }),
                  (o.unuse = function () {
                    i.prototype.unuse.call(this),
                      (this.fishAnim.node.angle = 0),
                      (this.fishAnim.node.scale = r(1, 1, 1));
                  }),
                  n
                );
              })(m)).prototype,
              "fishAnim",
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
            (A = u))
          ) || A)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SpriteFish1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseFish1998.ts"],
  function (i) {
    "use strict";
    var e, t, s, n, o, h, a, r, c;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (s = i.initializerDefineProperty),
            (n = i.assertThisInitialized);
        },
        function (i) {
          (o = i.cclegacy),
            (h = i._decorator),
            (a = i.Animation),
            (r = i.Sprite);
        },
        function (i) {
          c = i.BaseFish1998;
        },
      ],
      execute: function () {
        var p, l, f, m, u;
        o._RF.push({}, "aaccdODR7VDuIvEc4lR4zOz", "SpriteFish1998", void 0);
        var A = h.ccclass,
          d = h.property;
        i(
          "SpriteFish1998",
          ((p = A("SpriteFish1998")),
          (l = d(a)),
          p(
            ((u = e(
              (m = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, o = new Array(t), h = 0;
                    h < t;
                    h++
                  )
                    o[h] = arguments[h];
                  return (
                    (e = i.call.apply(i, [this].concat(o)) || this),
                    s(e, "fishAnim", u, n(e)),
                    (e._clipName = void 0),
                    (e._baseSpeed = void 0),
                    e
                  );
                }
                t(e, i);
                var o = e.prototype;
                return (
                  (o.initAssets = function (e) {
                    this.fishAnim ||
                      (this.fishAnim = this.node
                        .getChildByName("mainFish")
                        .getComponent(a)),
                      i.prototype.initAssets.call(this, e);
                    for (var t = 0; t < this.fishAnim.clips.length; t++)
                      this.fishAnim.removeState(this.fishAnim.clips[0].name);
                    (this.fishAnim.clips = [e.asset]),
                      this.fishAnim.play(e.asset.name),
                      (this._clipName = this.fishAnim.clips[0].name),
                      (this._baseSpeed = e.asset.speed);
                  }),
                  (o.changeAnimationSpeed = function (i) {
                    void 0 === i && (i = 0.5),
                      (this.fishAnim.getState(this._clipName).speed *= i);
                  }),
                  (o.resetAnimationSpeed = function () {
                    this.fishAnim.clips.length > 0 &&
                      (this.fishAnim.getState(this._clipName).speed =
                        this._baseSpeed);
                  }),
                  (o.playEffectDie = function () {
                    this.fishAnim.getState(this._clipName).speed =
                      2 * this._baseSpeed;
                  }),
                  (o.resetColor = function () {
                    this.fishAnim.getComponent(r).color = this.NORMAL_COLOR;
                  }),
                  (o.setColor = function (i) {
                    this.fishAnim.getComponent(r).color = i;
                  }),
                  e
                );
              })(c)).prototype,
              "fishAnim",
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
            (f = m))
          ) || f)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ToolTipEvent1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfLocalize.ts",
    "./utils2.ts",
    "./EventController1998.ts",
    "./gfActionHelper.ts",
  ],
  function (e) {
    "use strict";
    var t, i, o, n, l, T, s, a, c, r, h, p, u, d, _, f, E, L, v;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (T = e._decorator),
            (s = e.Node),
            (a = e.Label),
            (c = e.tween),
            (r = e.UITransform),
            (h = e.Component);
        },
        function (e) {
          p = e.default;
        },
        function (e) {
          (u = e.setOpacity), (d = e.getRandomInt);
        },
        function (e) {
          _ = e.default;
        },
        function (e) {
          (f = e.stopAllActions),
            (E = e.fadeOut),
            (L = e.fadeIn),
            (v = e.fadeTo);
        },
      ],
      execute: function () {
        var y, g, x, V, m;
        l._RF.push({}, "9141dD0g/VA8qmvArC0c8H3", "ToolTipEvent1998", void 0);
        var I = "Small",
          O = "Big",
          X = "Mega",
          A = "X2",
          B = "NORMAL",
          R = "FAIL",
          w = 0.5,
          N = 0.7,
          k = T.ccclass,
          C = T.property;
        e(
          "default",
          ((y = k("ToolTipEvent1998")),
          (g = C(s)),
          y(
            ((m = t(
              (V = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, l = new Array(i), T = 0;
                    T < i;
                    T++
                  )
                    l[T] = arguments[T];
                  return (
                    (t = e.call.apply(e, [this].concat(l)) || this),
                    o(t, "layoutToolTip", m, n(t)),
                    (t.LEVEL = {}),
                    (t._indexToolTip = -1),
                    (t._levelToolTip = -1),
                    (t._X2Reward = !1),
                    t
                  );
                }
                i(t, e);
                var l = t.prototype;
                return (
                  (l.onLoad = function () {
                    this.LEVEL = {
                      0: p.instance.TXT_TOOL_TIP_EVENT.RANDOM,
                      1: p.instance.TXT_TOOL_TIP_EVENT.SMALL,
                      2: p.instance.TXT_TOOL_TIP_EVENT.MID,
                      3: p.instance.TXT_TOOL_TIP_EVENT.BIG,
                      4: p.instance.TXT_TOOL_TIP_EVENT.X2,
                      5: p.instance.TXT_TOOL_TIP_EVENT.FAIL,
                    };
                  }),
                  (l.reset = function () {
                    f(this.node),
                      f(this.layoutToolTip),
                      u(this.node, 255),
                      u(this.layoutToolTip, 0),
                      (this.node.getComponent(a).string = ""),
                      (this._indexToolTip = -1),
                      (this._levelToolTip = -1),
                      (this._X2Reward = !1);
                  }),
                  (l.setToolTip = function (e, t) {
                    var i = this;
                    t.forEach(function (e) {
                      _.instance.checkBoxType(e, A) && (i._X2Reward = !0);
                    }),
                      this.randomIndex(e);
                  }),
                  (l.playAnimToolTip = function () {
                    var e = this;
                    c(this.node)
                      .then(E(0.1))
                      .call(function () {
                        e.node.getComponent(a).string =
                          e.LEVEL[e._levelToolTip][e._indexToolTip];
                      })
                      .then(L(0.6))
                      .start(),
                      c(this.layoutToolTip)
                        .then(E(0.1))
                        .call(function () {
                          e.node.getComponent(a).updateRenderData(!0),
                            (e.layoutToolTip.getComponent(r).width =
                              e.node.getComponent(r).width + 40);
                        })
                        .then(v(0.6, 200))
                        .start();
                  }),
                  (l._getLevelTextByValue = function (e) {
                    return _.instance.checkBoxType(e, B)
                      ? 0
                      : _.instance.checkBoxType(e, I)
                      ? 1
                      : _.instance.checkBoxType(e, O)
                      ? 2
                      : _.instance.checkBoxType(e, X)
                      ? 3
                      : _.instance.checkBoxType(e, A)
                      ? 4
                      : _.instance.checkBoxType(e, R)
                      ? 5
                      : void 0;
                  }),
                  (l.randomIndex = function (e) {
                    var t = this,
                      i = this._getLevelTextByValue(e),
                      o = !0;
                    if (i === this._levelToolTip)
                      if (Math.random() < w) {
                        var n = [];
                        3 === i && this._X2Reward
                          ? this.LEVEL[i].forEach(function (e, i) {
                              2 !== i && i !== t._indexToolTip && n.push(i);
                            })
                          : this.LEVEL[this._levelToolTip].forEach(function (
                              e,
                              i
                            ) {
                              i !== t._indexToolTip && n.push(i);
                            }),
                          (this._indexToolTip = n[d(0, n.length - 1)]);
                      } else o = !1;
                    else if (i > this._levelToolTip && 2 === i) {
                      Math.random() < N
                        ? (this._indexToolTip = d(0, this.LEVEL[i].length - 1))
                        : (o = !1);
                    } else if (i > this._levelToolTip && 3 === i)
                      if (this._X2Reward) {
                        var l = [];
                        this.LEVEL[i].forEach(function (e, i) {
                          2 !== i && i !== t._indexToolTip && l.push(i);
                        }),
                          (this._indexToolTip = l[d(0, l.length - 1)]);
                      } else
                        this._indexToolTip = d(0, this.LEVEL[i].length - 1);
                    else if (this._X2Reward && 3 === i) {
                      var T = [];
                      this.LEVEL[i].forEach(function (e, i) {
                        2 !== i && i !== t._indexToolTip && T.push(i);
                      }),
                        (this._indexToolTip = T[d(0, T.length - 1)]);
                    } else this._indexToolTip = d(0, this.LEVEL[i].length - 1);
                    (this._levelToolTip = i), o && this.playAnimToolTip();
                  }),
                  t
                );
              })(h)).prototype,
              "layoutToolTip",
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
            (x = V))
          ) || x)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WaitingLayer1998.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gfWaitingLayer.ts",
    "./gfUtilities.ts",
  ],
  function (t) {
    "use strict";
    var i, n, e, o, a, r, c;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (e = t._decorator), (o = t.sys), (a = t.v3);
        },
        function (t) {
          r = t.gfWaitingLayer;
        },
        function (t) {
          c = t.checkTablet;
        },
      ],
      execute: function () {
        var s;
        n._RF.push({}, "81c01dWBAFGlYwKGGIugzKn", "WaitingLayer1998", void 0);
        var u = e.ccclass;
        t(
          "WaitingLayer1998",
          u("WaitingLayer1998")(
            (s = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              return (
                i(n, t),
                (n.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    c() || o.platform === o.Platform.DESKTOP_BROWSER
                      ? (this.node.scale = a(0.7, 0.7, 0.7))
                      : (this.node.scale = a(1, 1, 1));
                }),
                n
              );
            })(r))
          ) || s
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Wheel1998.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gfWheel.ts"],
  function (i) {
    "use strict";
    var e, n, r, t, a, p;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (n = i.inheritsLoose),
            (r = i.initializerDefineProperty);
        },
        function (i) {
          (t = i.cclegacy), (a = i._decorator);
        },
        function (i) {
          p = i.gfWheel;
        },
      ],
      execute: function () {
        var o, l, u, s, c, h, b, f, m, g, A, y, S, d, w;
        t._RF.push({}, "8c8ec0gJ9ZDtK6sxG2YFLrG", "Wheel1998", void 0);
        var W = a.ccclass,
          N = a.property,
          z = i(
            "SkinConfig1998",
            W("SkinConfig1998")(
              ((u = e(
                (l = function () {
                  r(this, "win", u, this),
                    r(this, "bigWin", s, this),
                    r(this, "superWin", c, this),
                    r(this, "megaWin", h, this);
                }).prototype,
                "win",
                [N],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return "Thang";
                  },
                }
              )),
              (s = e(l.prototype, "bigWin", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "Thang Lon";
                },
              })),
              (c = e(l.prototype, "superWin", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "Thang Sieu Lon";
                },
              })),
              (h = e(l.prototype, "megaWin", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "Thang Cuc Lon";
                },
              })),
              (o = l))
            ) || o
          ),
          k = i(
            "AnimConfig1998",
            W("AnimConfig1998")(
              ((m = e(
                (f = function () {
                  r(this, "appear", m, this),
                    r(this, "idle", g, this),
                    r(this, "hide", A, this),
                    r(this, "ribbonAppear", y, this),
                    r(this, "SpinnerAppear", S, this),
                    r(this, "SpinnerIdle", d, this);
                }).prototype,
                "appear",
                [N],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return "AllAppear";
                  },
                }
              )),
              (g = e(f.prototype, "idle", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "AllIdle";
                },
              })),
              (A = e(f.prototype, "hide", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "AllDisappear";
                },
              })),
              (y = e(f.prototype, "ribbonAppear", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "RibbonAppear";
                },
              })),
              (S = e(f.prototype, "SpinnerAppear", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "SpinnerAppear";
                },
              })),
              (d = e(f.prototype, "SpinnerIdle", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "SpinnerIdle";
                },
              })),
              (b = f))
            ) || b
          );
        i(
          "Wheel1998",
          W("Wheel1998")(
            (w = (function (i) {
              function e() {
                for (
                  var e, n = arguments.length, r = new Array(n), t = 0;
                  t < n;
                  t++
                )
                  r[t] = arguments[t];
                return (
                  ((e = i.call.apply(i, [this].concat(r)) || this).skinName =
                    new z()),
                  (e.animName = new k()),
                  e
                );
              }
              n(e, i);
              var r = e.prototype;
              return (
                (r.start = function () {}),
                (r.setupAnimSpine = function () {
                  (this.animName.appear = "AllAppear"),
                    (this.animName.idle = "AllIdle"),
                    (this.animName.hide = "AllDisappear"),
                    (this.animName.ribbonAppear = "RibbonAppear"),
                    (this.animName.SpinnerAppear = "SpinnerAppear"),
                    (this.animName.SpinnerIdle = "SpinnerIdle");
                }),
                (r.setupSkinSpine = function () {
                  (this.skinName.win = "Thang"),
                    (this.skinName.bigWin = "Thang Lon"),
                    (this.skinName.superWin = "Thang Sieu Lon"),
                    (this.skinName.megaWin = "Thang Cuc Lon");
                }),
                e
              );
            })(p))
          ) || w
        );
        t._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/cc30-fish2-1998",
    "chunks:///_virtual/cc30-fish2-1998"
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
