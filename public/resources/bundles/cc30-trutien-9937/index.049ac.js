System.register(
  "chunks:///_virtual/AnimController9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var e, i, n, a, r, s, o, f, l, c, h, m, d;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (s = t._decorator),
            (o = t.Node),
            (f = t.SpriteFrame),
            (l = t.sp),
            (c = t.Sprite),
            (h = t.tween),
            (m = t.sys);
        },
        function (t) {
          d = t.GameObject;
        },
      ],
      execute: function () {
        var u, p, y, E, v, C, A, _, w, O, b, F, S;
        r._RF.push({}, "cbf213rsZFB8KeUUNn+2NoF", "AnimController9937", void 0);
        var L = s.ccclass,
          x = s.property,
          g = [1, 2, 3, 5],
          k = [3, 6, 9, 20],
          T = [
            "main_idle",
            "main_active1",
            "main_active2",
            "main_active3",
            "main_transform_dark",
          ],
          V = [
            "dark_idle",
            "dark_active1",
            "dark_active2",
            "dark_active3",
            "dark_transform_main",
          ];
        t(
          "AnimController9937",
          ((u = L("AnimController9937")),
          (p = x(o)),
          (y = x(o)),
          (E = x(f)),
          (v = x(o)),
          (C = x(o)),
          u(
            ((w = e(
              (_ = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "vfxChar", w, a(e)),
                    n(e, "spineChar", O, a(e)),
                    n(e, "effectFrameList", b, a(e)),
                    n(e, "oldEffect", F, a(e)),
                    n(e, "newEffect", S, a(e)),
                    (e.animVfx = void 0),
                    (e.animChar = void 0),
                    (e.mulArray = void 0),
                    (e.tweenOldEffect = void 0),
                    (e.lastMul = 0),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "PLAY_EFFECT_CHAR_ACTIVE",
                        this.playEffectCharActive,
                        this
                      ),
                      this.node.on("PLAY_EFFECT_VFX", this.playEffectVfx, this),
                      this.node.on(
                        "PLAY_ANIM_TRANSFORM",
                        this.playAnimTransform,
                        this
                      ),
                      this.node.on("RESET_ALL", this.resetAll, this),
                      (this.animVfx = this.vfxChar.getComponent(l.Skeleton)),
                      (this.animChar = this.spineChar.getComponent(l.Skeleton)),
                      this.animChar.addAnimation(0, "main_idle", !0),
                      this.animVfx.addAnimation(0, "ef_1", !0);
                  }),
                  (r.playEffectCharActive = function (t, e, i) {
                    void 0 === t && (t = !1);
                    var n = this.dataStore.playSession.payLines;
                    this.mulArray = t ? k : g;
                    var a = t ? "DarkSkill" : "Skill";
                    if (i) {
                      var r = this.mulArray.indexOf(i),
                        s = t || this.lastMul >= 3 ? V : T,
                        o = t || r >= 3 ? V[0] : T[0],
                        f = s[r];
                      switch (
                        ((this.animChar.timeScale = e ? 1.2 : 1),
                        (n || this.lastMul <= 2) &&
                          (this.animChar.setAnimation(0, f, !1),
                          this.animChar.addAnimation(0, o, !0)),
                        r)
                      ) {
                        case 1:
                          this.soundPlayer.playSfx(a + "1");
                          break;
                        case 2:
                          this.soundPlayer.playSfx(a + "2");
                          break;
                        case 3:
                          (n || this.lastMul <= 2) &&
                            this.soundPlayer.playSfx(a + "3");
                      }
                      this.lastMul = r;
                    }
                  }),
                  (r.playEffectVfx = function (t, e) {
                    var i = this;
                    if (
                      (void 0 === e && (e = !1), (this.mulArray = e ? k : g), t)
                    ) {
                      var n = this.mulArray.indexOf(t),
                        a = n + 1;
                      this.setOpacity(this.newEffect, 1),
                        (this.newEffect.getComponent(c).spriteFrame =
                          this.effectFrameList[n]),
                        this.fadeTo(this.newEffect, 0.4, 255),
                        this.fadeTo(this.oldEffect, 0.4, 1),
                        this.tweenOldEffect && this.tweenOldEffect.stop(),
                        (this.tweenOldEffect = h(this.oldEffect)
                          .delay(0.4)
                          .call(function () {
                            (i.oldEffect.getComponent(c).spriteFrame =
                              i.effectFrameList[n]),
                              i.setOpacity(i.oldEffect, 255),
                              i.setOpacity(i.newEffect, 1),
                              (i.tweenOldEffect = null);
                          })
                          .start());
                      var r = "ef_" + a;
                      this.animVfx.setAnimation(0, r, !0);
                    }
                  }),
                  (r.resetAll = function (t) {
                    var e = this;
                    if (
                      !t &&
                      ("dark_idle" == this.animChar.animation ||
                        "ef_4" == this.animVfx.animation)
                    ) {
                      var i = V[4];
                      this.animChar.setAnimation(0, i, !1);
                    }
                    (this.lastMul = 0),
                      this.animVfx.setAnimation(0, "ef_1", !0);
                    (this.newEffect.getComponent(c).spriteFrame =
                      this.effectFrameList[0]),
                      this.fadeIn(this.newEffect, 0.5),
                      this.fadeTo(this.oldEffect, 0.5, 1),
                      this.tweenOldEffect && this.tweenOldEffect.stop(),
                      (this.tweenOldEffect = h(this.oldEffect)
                        .delay(0.5)
                        .call(function () {
                          (e.oldEffect.getComponent(c).spriteFrame =
                            e.effectFrameList[0]),
                            e.setOpacity(e.oldEffect, 255),
                            e.setOpacity(e.newEffect, 1),
                            (e.tweenOldEffect = null);
                        })
                        .start());
                  }),
                  (r.playAnimTransform = function (t, e) {
                    var i = this;
                    void 0 === t && (t = !1), void 0 === e && (e = null);
                    var n = V[4],
                      a = T[0];
                    if (
                      (t && ((n = T[4]), (a = V[0])),
                      this.animChar.setAnimation(0, n, !1),
                      e && m.os == m.OS.IOS)
                    ) {
                      var r = this.animChar.findAnimation(n),
                        s = r ? r.duration : 1.3;
                      this.scheduleOnce(e, s);
                    }
                    this.animChar.setCompleteListener(function () {
                      i.animChar.setCompleteListener(function () {}),
                        e && m.os != m.OS.IOS && e && e(),
                        i.animChar.addAnimation(0, a, !0);
                    });
                  }),
                  e
                );
              })(d)).prototype,
              "vfxChar",
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
            (O = e(_.prototype, "spineChar", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = e(_.prototype, "effectFrameList", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (F = e(_.prototype, "oldEffect", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = e(_.prototype, "newEffect", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = _))
          ) || A)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/AutoSpinPanel9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./CustomType.ts",
    "./CustomEnum.ts",
    "./AutoSpinPanelController.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, s, r, a, h, u, c, l, p, v, m, g, S;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (r = t._decorator),
            (a = t.Node),
            (h = t.Vec3),
            (u = t.Button),
            (c = t.tween),
            (l = t.Sprite);
        },
        function (t) {
          p = t.setOpacity;
        },
        function (t) {
          v = t.CustomEvent;
        },
        function (t) {
          (m = t.TutorialTriggerType), (g = t.SlotSceneType);
        },
        function (t) {
          S = t.AutoSpinPanelController;
        },
      ],
      execute: function () {
        var d, f, y, w, P, b;
        s._RF.push({}, "c2345vMhaRA0ozM3jZkmxIb", "AutoSpinPanel9937", void 0);
        var A = r.ccclass,
          C = r.property;
        t(
          "AutoSpinPanel9937",
          ((d = A("AutoSpinPanel9937")),
          (f = C(a)),
          d(
            ((P = e(
              (w = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, s = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    i(e, "container", P, o(e)),
                    i(e, "moveDuration", b, o(e)),
                    (e.tweenMove = null),
                    (e.showPos = void 0),
                    (e.hidePos = void 0),
                    e
                  );
                }
                n(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("SHOW", this.show, this),
                      this.node.on("HIDE", this.hide, this),
                      (this.showPos = this.container.getPosition()),
                      (this.hidePos = new h(0, this.showPos.y - 700, 0));
                  }),
                  (s.start = function () {
                    this.init(), (this.spinNumber = 0);
                  }),
                  (s.init = function () {
                    this.container.setPosition(this.hidePos),
                      (this.overlay.active = !1),
                      (this.container.active = !1);
                  }),
                  (s.show = function () {
                    var t = this;
                    this.node.isShowing ||
                      (this.resetButtonStatus(),
                      this.container.setPosition(this.hidePos),
                      this.tweenMove && this.tweenMove.stop(),
                      (this.overlay.active = !0),
                      (this.overlay.getComponent(u).interactable = !1),
                      (this.container.active = !0),
                      (this.node.isShowing = !0),
                      (this.tweenMove = c(this.container)
                        .to(
                          this.moveDuration,
                          { position: this.showPos },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          t.guiMgr.onIngameEvent(
                            m.AnyAction,
                            "FINISH_SHOW_AUTO_SPIN_PANEL"
                          ),
                            (t.tweenMove = null),
                            (t.overlay.getComponent(u).interactable = !0);
                        })),
                      this.tweenMove.start());
                  }),
                  (s.hide = function () {
                    var t = this;
                    this.node.isShowing &&
                      ((this.overlay.getComponent(u).interactable = !1),
                      this.tweenMove && this.tweenMove.stop(),
                      (this.tweenMove = c(this.container)
                        .to(
                          this.moveDuration,
                          { position: this.hidePos },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          (t.overlay.active = !1),
                            (t.container.active = !1),
                            (t.node.isShowing = !1),
                            (t.tweenMove = null);
                        })),
                      this.tweenMove.start());
                  }),
                  (s.startAutoSpinning = function () {
                    var t = this;
                    this.guiMgr.isShowingCutScene(g.BigWin) ||
                      (this.soundPlayer && this.soundPlayer.playSFXClick(),
                      (this.setAutoSpinEvent = new v(
                        "SET_AUTO_SPIN_EVENT",
                        !0,
                        { spinNumber: this.spinNumber }
                      )),
                      this.node.dispatchEvent(this.setAutoSpinEvent),
                      this.node.emit("HIDE", 0, function () {
                        t.resetButtonStatus(), p(t.node, 1);
                      }),
                      (this.overlay.active = !1));
                  }),
                  (s.getSpinNumber = function (t, e) {
                    var n = this;
                    t &&
                      e &&
                      (this.soundPlayer && this.soundPlayer.playSFXClick(),
                      (this.spinNumber = e),
                      this.numberButtons.forEach(function (t) {
                        t.getComponent(l).spriteFrame = n.normalFrame;
                      }),
                      (t.target.getComponent(l).spriteFrame =
                        this.selectedFrame),
                      (this.autoSpinButton.getComponent(u).interactable = !0),
                      this.guiMgr.onIngameEvent(
                        m.AnyAction,
                        "SELECT_SPIN_TIME"
                      ));
                  }),
                  (s.setBottomValue = function () {
                    var t = this;
                    this.resetButtonStatus(),
                      (this.spinNumber = 100),
                      this.numberButtons.forEach(function (e) {
                        e.getComponent(l).spriteFrame = t.normalFrame;
                      }),
                      (this.numberButtons[4].getComponent(l).spriteFrame =
                        this.selectedFrame),
                      (this.autoSpinButton.getComponent(u).interactable = !0);
                  }),
                  e
                );
              })(S)).prototype,
              "container",
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
            (b = e(w.prototype, "moveDuration", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.3;
              },
            })),
            (y = w))
          ) || y)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BackgroundController9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
  ],
  function (t) {
    "use strict";
    var e, r, i, l, o, n, a, s, u;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (r = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (l = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy), (n = t._decorator), (a = t.Node);
        },
        function (t) {
          s = t.setOpacity;
        },
        function (t) {
          u = t.GameObject;
        },
      ],
      execute: function () {
        var h, c, f, E, p, C, M, m, _, L, d, A, F;
        o._RF.push(
          {},
          "ff1caphC1hBoKPbbOIkRFWT",
          "BackgroundController9937",
          void 0
        );
        var T = n.ccclass,
          R = n.property,
          y = [1, 2, 3, 5],
          v = [3, 6, 9, 20];
        t(
          "BackgroundController9937",
          ((h = T("BackgroundController9937")),
          (c = R(a)),
          (f = R(a)),
          (E = R(a)),
          (p = R(a)),
          (C = R(a)),
          h(
            ((_ = e(
              (m = (function (t) {
                function e() {
                  for (
                    var e, r = arguments.length, o = new Array(r), n = 0;
                    n < r;
                    n++
                  )
                    o[n] = arguments[n];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    i(e, "normalBG", _, l(e)),
                    i(e, "freeBG", L, l(e)),
                    i(e, "characterController", d, l(e)),
                    i(e, "normalMultiplierController", A, l(e)),
                    i(e, "freeMultiplierController", F, l(e)),
                    (e.normalMul = 1),
                    (e.freeMul = 3),
                    e
                  );
                }
                r(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "CLASSIFY_MULTIPLIER",
                        this.classifyMultiplier,
                        this
                      ),
                      this.node.on(
                        "PLAY_EFFECT_EXPLODE",
                        this.playEffectExplode,
                        this
                      ),
                      this.node.on(
                        "RESET_MULTIPLIER",
                        this.resetMultiplier,
                        this
                      ),
                      this.node.on(
                        "PLAY_EFFECT_CHAR_ACTIVE",
                        this.playEffectCharActive,
                        this
                      ),
                      this.node.on("PLAY_EFFECT_VFX", this.playEffectVfx, this),
                      this.node.on(
                        "RESET_CHARACTER",
                        this.resetCharacter,
                        this
                      ),
                      this.node.on(
                        "PLAY_ANIM_TRANSFORM",
                        this.playAnimTransform,
                        this
                      ),
                      this.node.on(
                        "PLAY_EFFECT_CHANGE_MULTIPLIER",
                        this.playEffectChangeMultiplier,
                        this
                      ),
                      this.node.on(
                        "HIDE_CURRENT_GAME_MODE_MULTIPLIER",
                        this.hideCurrentGameModeMultiplier,
                        this
                      ),
                      this.node.on("RESET_ALL", this.resetAll, this),
                      this.node.on(
                        "RESUME_EFFECT_FROM_NORMAL",
                        this.resumeEffectFromNormal,
                        this
                      ),
                      this.node.on(
                        "RESUME_MULTIPLY",
                        this.resumeMultiply,
                        this
                      );
                  }),
                  (o.start = function () {
                    (this.freeBG.active = !0),
                      (this.normalBG.active = !0),
                      this.setOpacity(this.freeBG, 1),
                      this.setOpacity(this.normalBG, 255);
                  }),
                  (o.classifyMultiplier = function (t, e) {
                    void 0 === e && (e = !1),
                      e
                        ? ((this.freeMul = t),
                          this.freeMultiplierController.emit(
                            "CLASSIFY_MULTIPLIER",
                            t,
                            e
                          ))
                        : ((this.normalMul = t),
                          this.normalMultiplierController.emit(
                            "CLASSIFY_MULTIPLIER",
                            t,
                            e
                          ));
                  }),
                  (o.playEffectExplode = function (t, e, r) {
                    void 0 === e && (e = !1),
                      void 0 === r && (r = null),
                      e
                        ? this.freeMultiplierController.emit(
                            "PLAY_EFFECT_EXPLODE",
                            t,
                            e,
                            r
                          )
                        : this.normalMultiplierController.emit(
                            "PLAY_EFFECT_EXPLODE",
                            t,
                            e,
                            r
                          );
                  }),
                  (o.resetMultiplier = function (t) {
                    void 0 === t && (t = !1),
                      t
                        ? this.freeMultiplierController.emit("RESET_ALL")
                        : this.normalMultiplierController.emit("RESET_ALL");
                  }),
                  (o.playEffectCharActive = function (t) {
                    var e = t.isFreeGame,
                      r = t.multiplier,
                      i = this.dataStore.modeTurbo;
                    this.characterController.emit(
                      "PLAY_EFFECT_CHAR_ACTIVE",
                      e,
                      i,
                      r
                    );
                  }),
                  (o.playEffectVfx = function (t, e) {
                    void 0 === e && (e = !1),
                      this.characterController.emit("PLAY_EFFECT_VFX", t, e);
                  }),
                  (o.resetCharacter = function () {
                    this.characterController.emit("RESET_ALL");
                  }),
                  (o.playAnimTransform = function (t, e) {
                    void 0 === t && (t = !1), void 0 === e && (e = null);
                    var r = t ? 255 : 1;
                    this.fadeTo(this.freeBG, 0.5, r);
                    var i = t ? 3 : this.normalMul;
                    this.characterController.emit("PLAY_ANIM_TRANSFORM", t, e),
                      this.characterController.emit("PLAY_EFFECT_VFX", i, t);
                  }),
                  (o.resetAll = function (t) {
                    t
                      ? this.freeMultiplierController.emit("RESET_ALL")
                      : this.normalMultiplierController.emit("RESET_ALL"),
                      this.characterController.emit("RESET_ALL", t);
                  }),
                  (o.playEffectChangeMultiplier = function (t, e, r) {
                    void 0 === t && (t = !0),
                      void 0 === e && (e = !1),
                      void 0 === r && (r = null),
                      this.freeMultiplierController.emit(
                        "PLAY_EFFECT_CHANGE_MULTIPLIER",
                        t,
                        e,
                        r
                      );
                  }),
                  (o.hideCurrentGameModeMultiplier = function (t) {
                    s(this.normalMultiplierController, t ? 1 : 255),
                      s(this.freeMultiplierController, t ? 255 : 1),
                      t
                        ? ((this.normalMultiplierController.active = !1),
                          (this.freeMultiplierController.active = !0))
                        : ((this.normalMultiplierController.active = !0),
                          (this.freeMultiplierController.active = !1)),
                      (this.normalMultiplierController._uiProps.colorDirty =
                        !0),
                      (this.freeMultiplierController._uiProps.colorDirty = !0);
                  }),
                  (o.resumeEffectFromNormal = function () {
                    if (this.freeMul !== this.normalMul) {
                      var t = this.getFreeMultiplier();
                      this.characterController.emit("PLAY_EFFECT_VFX", t, !0);
                    }
                  }),
                  (o.getFreeMultiplier = function () {
                    var t = y.indexOf(this.normalMul);
                    return v[t];
                  }),
                  (o.resumeMultiply = function (t, e) {
                    this.freeMultiplierController.emit("RESUME_MULTIPLY", t, e);
                  }),
                  e
                );
              })(u)).prototype,
              "normalBG",
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
            (L = e(m.prototype, "freeBG", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = e(m.prototype, "characterController", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = e(m.prototype, "normalMultiplierController", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = e(m.prototype, "freeMultiplierController", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = m))
          ) || M)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BackToLobby9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gameCommonUtils.ts",
    "./loadConfigAsync.ts",
    "./BackToLobby.ts",
  ],
  function (t) {
    "use strict";
    var o, n, e, c, i, a, r;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (e = t._decorator), (c = t.Button);
        },
        function (t) {
          i = t.default;
        },
        function (t) {
          a = t.default;
        },
        function (t) {
          r = t.BackToLobby;
        },
      ],
      execute: function () {
        var s;
        n._RF.push({}, "4c2dfqda4xLyJRFhTMbSIRx", "BackToLobby9937", void 0);
        var u = e.ccclass;
        t(
          "BackToLobby9937",
          u("BackToLobby9937")(
            (s = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              o(n, t);
              var e = n.prototype;
              return (
                (e.onLoad = function () {
                  if (
                    (t.prototype.onLoad.call(this),
                    a.getConfig().LOGIN_IFRAME) &&
                    !i.checkConditionCloseGameIframe()
                  ) {
                    var o = this.node.getChildByName("Button");
                    return void (
                      o &&
                      ((o.active = !0), (o.getComponent(c).interactable = !1))
                    );
                  }
                }),
                (e.trigger = function () {
                  t.prototype.trigger.call(this);
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
  "chunks:///_virtual/Bet9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./Bet.ts", "./CustomEnum.ts"],
  function (t) {
    "use strict";
    var e, i, s, n, r, o, a, h, u, p, B;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (s = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (o = t._decorator),
            (a = t.SpriteFrame),
            (h = t.tween),
            (u = t.v3);
        },
        function (t) {
          p = t.Bet;
        },
        function (t) {
          B = t.TutorialTriggerType;
        },
      ],
      execute: function () {
        var c, l, d, f, S;
        r._RF.push({}, "283ac2YUhlDuY3DVmvGiZkG", "Bet9937", void 0);
        var y = o.ccclass,
          g = o.property,
          v = 0,
          b = 1,
          m = 2,
          T = 3;
        t(
          "Bet9937",
          ((c = y("Bet9937")),
          (l = g({ type: a })),
          c(
            ((S = e(
              (f = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    s(e, "spriteButtons", S, n(e)),
                    (e.isResetSprite = !1),
                    (e.tweenTotalBet = void 0),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.updateBet = function (e) {
                    t.prototype.updateBet.call(this, e),
                      this.resetButtonSprite();
                    var i = this.betData.mainBets,
                      s = Object.keys(i),
                      n = s.indexOf(e);
                    0 === n &&
                      this.changeButtonSprite(
                        this.reduceBetBtn,
                        this.spriteButtons[T]
                      ),
                      n === s.length - 1 &&
                        this.changeButtonSprite(
                          this.increaseBetBtn,
                          this.spriteButtons[b]
                        );
                  }),
                  (r.increaseBet = function () {
                    this.betUpSoundId &&
                      this.soundPlayer &&
                      this.soundPlayer.playSfx(this.betUpSoundId);
                    var t = this.betData,
                      e = t.betKey,
                      i = t.mainBets,
                      s = Object.keys(i),
                      n = s.indexOf(e);
                    if ((this.resetButtonSprite(), n === s.length - 1))
                      this.guiMgr.node.emit("SHOW_SMALL_TOOL_TIP", 3),
                        this.changeButtonSprite(
                          this.increaseBetBtn,
                          this.spriteButtons[b]
                        );
                    else {
                      var r = this._getNextKey(e, i);
                      this.updateBet(r),
                        this.guiMgr.onIngameEvent(
                          B.IncreaseBet,
                          "BET_INCREASE"
                        ),
                        this.playEffectChangeBet();
                    }
                  }),
                  (r.reduceBet = function () {
                    this.betDownSoundId &&
                      this.soundPlayer &&
                      this.soundPlayer.playSfx(this.betDownSoundId);
                    var t = this.betData,
                      e = t.betKey,
                      i = t.mainBets,
                      s = Object.keys(i).indexOf(e);
                    if ((this.resetButtonSprite(), 0 === s))
                      this.guiMgr.node.emit("SHOW_SMALL_TOOL_TIP", 2),
                        this.changeButtonSprite(
                          this.reduceBetBtn,
                          this.spriteButtons[T]
                        );
                    else {
                      var n = this._getPrevKey(e, i);
                      this.updateBet(n), this.playEffectChangeBet();
                    }
                  }),
                  (r.playEffectChangeBet = function () {
                    var t = this;
                    this.tweenTotalBet && this.tweenTotalBet.stop(),
                      (this.tweenTotalBet = h(this.totalLabel.node)
                        .to(0.1, { scale: u(1.2, 1.2, 1.2) })
                        .to(0.1, { scale: u(1, 1, 1) })
                        .call(function () {
                          t.tweenTotalBet = null;
                        })),
                      this.tweenTotalBet.start();
                  }),
                  (r.changeButtonSprite = function (t, e) {
                    (t.normalSprite = e),
                      (t.hoverSprite = e),
                      (this.isResetSprite = !1);
                  }),
                  (r.resetButtonSprite = function () {
                    this.isResetSprite ||
                      ((this.increaseBetBtn.normalSprite =
                        this.spriteButtons[v]),
                      (this.increaseBetBtn.hoverSprite = this.spriteButtons[v]),
                      (this.reduceBetBtn.normalSprite = this.spriteButtons[m]),
                      (this.reduceBetBtn.hoverSprite = this.spriteButtons[m]),
                      (this.isResetSprite = !0));
                  }),
                  e
                );
              })(p)).prototype,
              "spriteButtons",
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
            (d = f))
          ) || d)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetCellPaylineHistory9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, r, a, o, s, l, u, p, y, c, m;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (s = t.Node),
            (l = t.SpriteFrame),
            (u = t.Sprite),
            (p = t.Label);
        },
        function (t) {
          (y = t.convertAssetArrayToObject), (c = t.formatMoney);
        },
        function (t) {
          m = t.GameObject;
        },
      ],
      execute: function () {
        var h, b, f, d, g, v, D, w, A, F, P, z, S, H, j;
        a._RF.push(
          {},
          "5c019Y4oH9AmJYjoEvUsah8",
          "BetCellPaylineHistory9937",
          void 0
        );
        var B = o.ccclass,
          C = o.property;
        t(
          "BetCellPaylineHistory9937",
          ((h = B("BetCellPaylineHistory9937")),
          (b = C({ type: s })),
          (f = C({ type: l })),
          (d = C({ type: u })),
          (g = C({ type: p })),
          (v = C({ type: p })),
          (D = C({ type: p })),
          h(
            ((F = i(
              (A = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, a = new Array(e), o = 0;
                    o < e;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (i = t.call.apply(t, [this].concat(a)) || this),
                    n(i, "paylineNode", F, r(i)),
                    n(i, "symbols", P, r(i)),
                    n(i, "symbolSprite", z, r(i)),
                    n(i, "info", S, r(i)),
                    n(i, "winAmount", H, r(i)),
                    n(i, "multiply", j, r(i)),
                    (i.assets = void 0),
                    i
                  );
                }
                e(i, t);
                var a = i.prototype;
                return (
                  (a.onLoad = function () {
                    (this.updateData = this.updateData.bind(this)),
                      (this.updateDataJP = this.updateDataJP.bind(this)),
                      (this.updateDataFree = this.updateDataFree.bind(this)),
                      (this.assets = y(this.symbols));
                  }),
                  (a.updateData = function (t, i) {
                    var e = t.symbolID,
                      n = t.combination,
                      r = t.symbolCount,
                      a = t.winAmount;
                    (this.symbolSprite.spriteFrame = this.assets[e]),
                      (this.info.string = "Thắng tổ hợp " + r + " x " + n),
                      (this.winAmount.string = c(a)),
                      (this.multiply.node.active = !0);
                    var o = a / i;
                    this.multiply.string = c(o) + " X " + i;
                  }),
                  (a.updateDataJP = function (t) {
                    var i = t.symbolID,
                      e = t.payLineWinAmount;
                    (this.symbolSprite.spriteFrame = this.assets[i]),
                      (this.info.string = "x3 - Nổ hũ"),
                      (this.winAmount.string = c(e)),
                      (this.multiply.node.active = !1);
                  }),
                  (a.updateDataFree = function () {
                    (this.symbolSprite.spriteFrame = this.assets.A),
                      (this.info.string = "x3"),
                      (this.winAmount.string = "10 lượt quay miễn phí"),
                      (this.multiply.node.active = !1);
                  }),
                  i
                );
              })(m)).prototype,
              "paylineNode",
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
            (P = i(A.prototype, "symbols", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (z = i(A.prototype, "symbolSprite", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(A.prototype, "info", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = i(A.prototype, "winAmount", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = i(A.prototype, "multiply", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = A))
          ) || w)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetHistoryDetailPage9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
    "./SlotTableHistory9937.ts",
  ],
  function (e) {
    "use strict";
    var t, i, r, n, a, l, o, u, s, p, c, b, y, f;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (l = e._decorator),
            (o = e.Label),
            (u = e.Sprite),
            (s = e.SpriteFrame),
            (p = e.Node),
            (c = e.UIOpacity);
        },
        function (e) {
          b = e.formatMoney;
        },
        function (e) {
          y = e.GameObject;
        },
        function (e) {
          f = e.SlotTableHistory9937;
        },
      ],
      execute: function () {
        var h,
          m,
          g,
          d,
          F,
          w,
          P,
          A,
          v,
          z,
          L,
          D,
          M,
          H,
          S,
          I,
          O,
          R,
          B,
          k,
          N,
          j,
          J,
          T,
          _,
          C,
          G,
          V,
          W,
          x,
          E,
          U,
          q,
          K,
          Q,
          X,
          Y,
          Z,
          $;
        a._RF.push(
          {},
          "cabe7pqM/1Cn6ECzeJfdPo2",
          "BetHistoryDetailPage9937",
          void 0
        );
        var ee = l.ccclass,
          te = l.property,
          ie = [1, 2, 3, 5],
          re = [3, 6, 9, 20];
        e(
          "BetHistoryDetailPage9937",
          ((h = ee("BetHistoryDetailPage9937")),
          (m = te({ type: o })),
          (g = te({ type: o })),
          (d = te({ type: o })),
          (F = te({ type: f })),
          (w = te({ type: o })),
          (P = te({ type: u })),
          (A = te({ type: s })),
          (v = te({ type: s })),
          (z = te({ type: p })),
          (L = te({ type: p })),
          (D = te({ type: p })),
          (M = te({ type: p })),
          (H = te({ type: p })),
          (S = te({ type: p })),
          (I = te({ type: p })),
          (O = te({ type: u })),
          (R = te({ type: s })),
          (B = te({ type: s })),
          h(
            ((j = t(
              (N = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, a = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    a[l] = arguments[l];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    r(t, "sessionLabel", j, n(t)),
                    r(t, "betAmountLabel", J, n(t)),
                    r(t, "winAmountLabel", T, n(t)),
                    r(t, "table", _, n(t)),
                    r(t, "pageLabel", C, n(t)),
                    r(t, "iconFeature", G, n(t)),
                    r(t, "featureSpriteFrames", V, n(t)),
                    r(t, "activedFeatureSpriteFrames", W, n(t)),
                    r(t, "progressBarFeature", x, n(t)),
                    r(t, "progressFeatureValue", E, n(t)),
                    r(t, "betHistoryPaylines", U, n(t)),
                    r(t, "featureGroup", q, n(t)),
                    r(t, "spriteActivedFeature", K, n(t)),
                    r(t, "descriptionActivedFeature", Q, n(t)),
                    r(t, "orbMul", X, n(t)),
                    r(t, "mulNode", Y, n(t)),
                    r(t, "freeMulFrame", Z, n(t)),
                    r(t, "normalMulFrame", $, n(t)),
                    (t.currentRound = 0),
                    (t.currentPage = void 0),
                    t
                  );
                }
                i(t, e);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    (this.updateData = this.updateData.bind(this)),
                      (this.hideInfoDetailPage =
                        this.hideInfoDetailPage.bind(this)),
                      (this.currentRound = 0);
                  }),
                  (a.hideInfoDetailPage = function () {
                    this.setOpacity(this.table, 0),
                      this.setOpacity(this.mulNode, 0),
                      this.setOpacity(this.orbMul, 0),
                      (this.betAmountLabel.string = ""),
                      (this.winAmountLabel.string = ""),
                      (this.pageLabel.string = ""),
                      (this.betHistoryPaylines.active = !1),
                      (this.currentRound = 1);
                  }),
                  (a.updateData = function (e, t, i) {
                    var r = e.latestWinJackpotInfo && e.latestWinJackpotInfo[0],
                      n = i.currentPage,
                      a = e.multiplier,
                      l = e.result,
                      o = e.remainingFreeSpins,
                      u = e.latestWinJackpotInfo,
                      s = e.round,
                      p = e.turn,
                      y = l.subState;
                    (this.betAmountLabel.string = b(e.totalBetAmount)),
                      (this.winAmountLabel.string = b(
                        r ? r.jackpotAmount + e.winAmount : e.winAmount
                      ));
                    var f = 41 == y || 1 == y ? ie : re,
                      h =
                        41 == y || 1 == y
                          ? this.normalMulFrame
                          : this.freeMulFrame,
                      m = f.indexOf(a);
                    0 == m
                      ? ((this.currentRound = 1), (this.currentPage = n))
                      : n >= this.currentPage
                      ? (this.currentRound++, (this.currentPage = n))
                      : n < this.currentPage &&
                        (this.currentRound--, (this.currentPage = n)),
                      (this.pageLabel.string =
                        1 == y || 41 == y
                          ? "Vòng " + s
                          : "Lượt " + p + " - Vòng " + s),
                      (this.mulNode.spriteFrame = h[m]),
                      this.setOpacity(this.mulNode, 255),
                      this.setOpacity(this.orbMul, 255),
                      this.table.renderResult(e),
                      (this.betHistoryPaylines.active = !0);
                    var g = (function (e) {
                        for (
                          var t = [],
                            i = e.replace("[", "").replace("]", "").split(" "),
                            r = 0;
                          r < i.length;
                          r++
                        ) {
                          var n = i[r].split(";");
                          if (n.length < 4) break;
                          var a = n[0],
                            l = n[1],
                            o = n[2],
                            u = n[3];
                          t.push({
                            symbolID: a,
                            winAmount: l,
                            symbolCount: o,
                            combination: u,
                          });
                        }
                        return t;
                      })(e.paylines),
                      d = !!u,
                      F = o >= 10 && (41 == y || 1 == y);
                    g && g.length > 0
                      ? this.table.highlightPaylines(g)
                      : this.table.highlightPaylines([], d, F),
                      r &&
                        g.push({
                          symbolID: "JP",
                          payLineWinAmount: r.jackpotAmount,
                        }),
                      this.betHistoryPaylines.emit("UPDATE_DATA", g, a, d, F),
                      (this.table.node.getComponent(c).opacity = 255),
                      this.setOpacity(this.node, 255);
                  }),
                  t
                );
              })(y)).prototype,
              "sessionLabel",
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
            (J = t(N.prototype, "betAmountLabel", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = t(N.prototype, "winAmountLabel", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = t(N.prototype, "table", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = t(N.prototype, "pageLabel", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = t(N.prototype, "iconFeature", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = t(N.prototype, "featureSpriteFrames", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (W = t(N.prototype, "activedFeatureSpriteFrames", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (x = t(N.prototype, "progressBarFeature", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = t(N.prototype, "progressFeatureValue", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = t(N.prototype, "betHistoryPaylines", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = t(N.prototype, "featureGroup", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = t(N.prototype, "spriteActivedFeature", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = t(N.prototype, "descriptionActivedFeature", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = t(N.prototype, "orbMul", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = t(N.prototype, "mulNode", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = t(N.prototype, "freeMulFrame", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            ($ = t(N.prototype, "normalMulFrame", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (k = N))
          ) || k)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetHistoryMgr9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var e, n, s, i, o, r, a, l, c, h;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (s = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (r = t._decorator),
            (a = t.Prefab),
            (l = t.instantiate),
            (c = t.warn);
        },
        function (t) {
          h = t.GameObject;
        },
      ],
      execute: function () {
        var p, u, y, b, d;
        o._RF.push({}, "3faadSXByBJDpSbUbELDURm", "BetHistoryMgr9937", void 0);
        var g = r.ccclass,
          I = r.property;
        t(
          "BetHistoryMgr9937",
          ((p = g("BetHistoryMgr9937")),
          (u = I({ type: a })),
          p(
            ((d = e(
              (b = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, o = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    s(e, "betHistoryPrefab", d, i(e)),
                    (e.playSession = null),
                    (e.token = null),
                    (e.tokenType = null),
                    (e.userId = null),
                    (e.betInstance = null),
                    (e.betHistory = null),
                    (e.gameId = null),
                    e
                  );
                }
                return (
                  n(e, t),
                  (e.prototype.onLoad = function () {
                    t.prototype.onLoad.call(this);
                    var e = window.location.search,
                      n = new URLSearchParams(e);
                    (this.playSession = n.get("psId")),
                      (this.token = n.get("token")),
                      (this.tokenType = n.get("tokenType")),
                      (this.userId = n.get("userId")),
                      this.betHistoryPrefab && this.playSession
                        ? ((this.betInstance = l(this.betHistoryPrefab)),
                          (this.betInstance.parent = this.node),
                          (this.betInstance.active = !0),
                          this.betInstance.setPosition(0, 0),
                          this.betInstance.getComponent("SlotUIScene").show(),
                          (this.betHistory =
                            this.betInstance.getComponent(
                              "SlotBetHistory9937"
                            )),
                          this.betInstance
                            .getComponentInChildren("SlotBetHistoryDetail9937")
                            .setToken(this.token, this.tokenType, this.userId),
                          this.betHistory.openBetDetail({
                            userData: { sessionId: this.playSession },
                          }),
                          this.betInstance
                            .getComponentInChildren("SlotBetHistoryDetail9937")
                            .disableCloseDetail())
                        : c("Cant get history prefab for game " + this.gameId);
                  }),
                  e
                );
              })(h)).prototype,
              "betHistoryPrefab",
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
            (y = b))
          ) || y)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetHistoryPaylines9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameObject.ts",
    "./BetCellPaylineHistory9937.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, o, a, r, s, l, c;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy), (r = e._decorator), (s = e.Node);
        },
        function (e) {
          l = e.GameObject;
        },
        function (e) {
          c = e.BetCellPaylineHistory9937;
        },
      ],
      execute: function () {
        var u, f, p, y, h, P, v;
        a._RF.push(
          {},
          "da328QISchL+YYI5xsv07C6",
          "BetHistoryPaylines9937",
          void 0
        );
        var d = r.ccclass,
          C = r.property;
        e(
          "BetHistoryPaylines9937",
          ((u = d("BetHistoryPaylines9937")),
          (f = C({ type: s })),
          (p = C({ type: s })),
          u(
            ((P = t(
              (h = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, a = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    n(t, "infoPLCells", P, o(t)),
                    n(t, "noPaylines", v, o(t)),
                    t
                  );
                }
                i(t, e);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      this.node.on("UPDATE_DATA", this.updateData, this);
                  }),
                  (a.updateData = function (e, t, i, n) {
                    if (
                      (void 0 === i && (i = !1),
                      void 0 === n && (n = !1),
                      this.reset(),
                      i)
                    )
                      return (
                        (this.infoPLCells[0].active = !0),
                        void this.infoPLCells[0]
                          .getComponent(c)
                          .updateDataJP(e[0])
                      );
                    if (n)
                      return (
                        (this.infoPLCells[0].active = !0),
                        void this.infoPLCells[0]
                          .getComponent(c)
                          .updateDataFree()
                      );
                    if (!e || e.length <= 0) this.noPaylines.active = !0;
                    else
                      for (var o = 0; o < e.length; o++)
                        (this.infoPLCells[o].active = !0),
                          this.infoPLCells[o]
                            .getComponent(c)
                            .updateData(e[o], t);
                  }),
                  (a.reset = function () {
                    for (var e = 0; e < this.infoPLCells.length; e++)
                      this.infoPLCells[e].active = !1;
                    this.noPaylines.active = !1;
                  }),
                  t
                );
              })(l)).prototype,
              "infoPLCells",
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
            (v = t(h.prototype, "noPaylines", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = h))
          ) || y)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetOptionScrollView9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BetOptionScrollView.ts"],
  function (t) {
    "use strict";
    var e, o, i, n, s;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (i = t._decorator), (n = t.tween);
        },
        function (t) {
          s = t.BetOptionScrollView;
        },
      ],
      execute: function () {
        var c;
        o._RF.push(
          {},
          "4bcd0Z5OKlBJ4ZD7JurCNdL",
          "BetOptionScrollView9937",
          void 0
        );
        var l = i.ccclass;
        i.property,
          t(
            "BetOptionScrollView9937",
            l("BetOptionScrollView9937")(
              (c = (function (t) {
                function o() {
                  return t.apply(this, arguments) || this;
                }
                e(o, t);
                var i = o.prototype;
                return (
                  (i.mouseWheel = function () {
                    var t = this,
                      e = this.content.getPosition().y;
                    e <= this.limitTop ||
                      e >= this.limitBottom ||
                      (this.countWheel || (this.countWheel = 0),
                      this.content.prevPos ||
                        (this.content.prevPos = this.content.getPosition()),
                      this.countWheel >= 3 &&
                        ((this.scrollDirection =
                          e - this.content.prevPos.y > 0 ? 1 : -1),
                        (e = this.getCorrectPositionY(
                          e + 25 * this.scrollDirection
                        )),
                        (this.countWheel = 0)),
                      (this.isTouchUp = !1),
                      this.node.tweenNode && this.node.tweenNode.stop(),
                      (this.node.tweenNode = n(this.node)
                        .delay(0.101)
                        .call(function () {
                          t.calculateScroll();
                        })
                        .start()),
                      (this.content.prevPos = this.content.getPosition()),
                      this.countWheel++);
                  }),
                  (i.scrollEnded = function () {
                    this.calculateScroll(0.15);
                  }),
                  o
                );
              })(s))
            ) || c
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetSelectionMgr9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (e) {
    "use strict";
    var t, i, n, o, s, l, a, r, c, h, u;
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
            (l = e._decorator),
            (a = e.Node),
            (r = e.Vec3),
            (c = e.Button),
            (h = e.tween);
        },
        function (e) {
          u = e.GameObject;
        },
      ],
      execute: function () {
        var v, p, w, b, d, P, y, f;
        s._RF.push(
          {},
          "3751ebUePhBUp8xI6kool+s",
          "BetSelectionMgr9937",
          void 0
        );
        var g = l.ccclass,
          S = l.property;
        e(
          "BetSelectionMgr9937",
          ((v = g("BetSelectionMgr9937")),
          (p = S(a)),
          (w = S(a)),
          v(
            ((P = t(
              (d = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, s = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    s[l] = arguments[l];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    n(t, "overlay", P, o(t)),
                    n(t, "betSelectionPanel", y, o(t)),
                    n(t, "moveDuration", f, o(t)),
                    (t.selectedBet = 0),
                    (t.selectBetEvent = null),
                    (t.tweenMove = null),
                    (t.showPos = void 0),
                    (t.hidePos = void 0),
                    t
                  );
                }
                i(t, e);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      this.node.on("SHOW", this.show, this),
                      this.node.on("HIDE", this.hide, this),
                      (this.showPos = this.betSelectionPanel.getPosition()),
                      (this.hidePos = new r(
                        this.showPos.x,
                        this.showPos.y - 1e3,
                        0
                      ));
                  }),
                  (s.show = function () {
                    var e = this;
                    this.node.isShowing ||
                      ((this.node.isShowing = !0),
                      this.betSelectionPanel.setPosition(this.hidePos),
                      this.tweenMove && this.tweenMove.stop(),
                      (this.overlay.active = !0),
                      (this.overlay.getComponent(c).interactable = !1),
                      (this.betSelectionPanel.active = !0),
                      this.betSelectionPanel.emit("UPDATE_VALUE"),
                      (this.tweenMove = h(this.betSelectionPanel)
                        .call(function () {
                          e.setOpacity(e.overlay, 0),
                            e.fadeTo(e.overlay, 0.1, 120, { easing: "sineIn" });
                        })
                        .to(
                          this.moveDuration,
                          { position: this.showPos },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          (e.tweenMove = null),
                            (e.overlay.getComponent(c).interactable = !0);
                        })),
                      this.tweenMove.start());
                  }),
                  (s.hide = function () {
                    var e = this;
                    this.node.isShowing &&
                      ((this.overlay.getComponent(c).interactable = !1),
                      this.fadeOut(this.overlay, 0.1, { easing: "sineIn" }),
                      this.tweenMove && this.tweenMove.stop(),
                      (this.tweenMove = h(this.betSelectionPanel)
                        .to(
                          this.moveDuration,
                          { position: this.hidePos },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          e.betSelectionPanel.emit("CLEAR_ALL_BET"),
                            (e.overlay.active = !1),
                            (e.betSelectionPanel.active = !1),
                            (e.node.isShowing = !1),
                            (e.tweenMove = null);
                        })),
                      this.tweenMove.start());
                  }),
                  t
                );
              })(u)).prototype,
              "overlay",
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
            (y = t(d.prototype, "betSelectionPanel", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = t(d.prototype, "moveDuration", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.3;
              },
            })),
            (b = d))
          ) || b)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetSelectionPanel9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./CustomType.ts",
    "./GameObject.ts",
  ],
  function (t) {
    "use strict";
    var e, n, o, l, i, r, a, c, u, s, b, p, h, f;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (l = t.assertThisInitialized);
        },
        function (t) {
          (i = t.cclegacy),
            (r = t._decorator),
            (a = t.Node),
            (c = t.Color),
            (u = t.Button),
            (s = t.Label);
        },
        function (t) {
          (b = t.formatMoney), (p = t.findKeyByValue);
        },
        function (t) {
          h = t.CustomEvent;
        },
        function (t) {
          f = t.GameObject;
        },
      ],
      execute: function () {
        var d,
          m,
          g,
          C,
          B,
          S,
          y,
          E,
          M,
          v,
          w,
          x,
          A,
          L,
          T,
          _,
          z,
          P,
          W,
          D,
          V,
          U,
          O,
          j,
          k,
          R;
        i._RF.push(
          {},
          "3ce16/tpZ1Ps4VpLQPwGpij",
          "BetSelectionPanel9937",
          void 0
        );
        var F = r.ccclass,
          G = r.property;
        t(
          "BetSelectionPanel9937",
          ((d = F("BetSelectionPanel9937")),
          (m = G(a)),
          (g = G(a)),
          (C = G(a)),
          (B = G(a)),
          (S = G(a)),
          (y = G(a)),
          (E = G(a)),
          (M = G(a)),
          (v = G(c)),
          (w = G(c)),
          (x = G(c)),
          d(
            ((T = e(
              (L = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, i = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    i[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(i)) || this),
                    o(e, "btnConfirm", T, l(e)),
                    o(e, "btnClose", _, l(e)),
                    o(e, "btnMaxBet", z, l(e)),
                    o(e, "betOption", P, l(e)),
                    o(e, "lblWinAmount", W, l(e)),
                    o(e, "lblWallet", D, l(e)),
                    o(e, "lblCurrentBet", V, l(e)),
                    o(e, "lblMax", U, l(e)),
                    o(e, "colorSelectedConfirm", O, l(e)),
                    o(e, "colorSelectedMaxbet", j, l(e)),
                    o(e, "colorUnSelected", k, l(e)),
                    o(e, "selectedValue", R, l(e)),
                    (e.selectedBet = 0),
                    (e.selectBetEvent = null),
                    e
                  );
                }
                n(e, t);
                var i = e.prototype;
                return (
                  (i.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("UPDATE_VALUE", this.updateValue, this),
                      this.node.on("CLEAR_ALL_BET", this.clearAllBets, this);
                  }),
                  (i.updateValue = function () {
                    var t = this.dataStore.betData.getTotalBet();
                    this.selectedBet = t;
                    var e = this.dataStore.betData.mainBets,
                      n = Object.keys(e)
                        .map(function (t) {
                          return e[t];
                        })
                        .sort(function (t, e) {
                          return e - t;
                        });
                    this.betOption.emit("UPDATE_DATA", n, t, this);
                    var o = n[0] == t;
                    (this.btnMaxBet.getComponent(u).interactable = !o),
                      this.unSetSelectColorButtons(o),
                      this.updateBottomLabelValue();
                  }),
                  (i.updateBottomLabelValue = function () {
                    var t = this.dataStore.betData.getTotalBet(),
                      e = this.dataStore.getCurrentWallet(),
                      n = this.dataStore.playSession.winAmountPS,
                      o = b(void 0 === n ? 0 : n);
                    this.lblWinAmount &&
                      (this.lblWinAmount.getComponent(s).string = o),
                      this.lblCurrentBet &&
                        (this.lblCurrentBet.getComponent(s).string = b(t)),
                      this.dataStore.isTrialMode
                        ? this.lblWallet &&
                          (this.lblWallet.getComponent(s).string = b(
                            this.dataStore.getCurrentWallet
                          ))
                        : this.lblWallet &&
                          (this.lblWallet.getComponent(s).string = b(e));
                  }),
                  (i.setSelectedBet = function (t, e) {
                    void 0 === e && (e = !1),
                      (this.selectedBet = t),
                      (this.btnMaxBet.getComponent(u).interactable = !e);
                  }),
                  (i.setSelectColorButtons = function () {
                    (this.btnMaxBet.getComponent(u).target.color =
                      this.colorSelectedMaxbet),
                      (this.btnConfirm.getComponent(u).target.color =
                        this.colorSelectedConfirm),
                      (this.btnClose.getComponent(u).target.color =
                        this.colorSelectedConfirm),
                      (this.lblMax.color = this.colorSelectedMaxbet);
                  }),
                  (i.unSetSelectColorButtons = function (t) {
                    void 0 === t && (t = !1),
                      t
                        ? ((this.btnMaxBet.getComponent(u).target.color =
                            this.colorUnSelected),
                          (this.lblMax.color = this.colorSelectedMaxbet))
                        : ((this.btnMaxBet.getComponent(u).target.color =
                            this.colorUnSelected),
                          (this.lblMax.color = this.colorUnSelected)),
                      (this.btnConfirm.getComponent(u).target.color =
                        this.colorUnSelected),
                      (this.btnClose.getComponent(u).target.color =
                        this.colorUnSelected);
                  }),
                  (i.clickBtnConfirm = function () {
                    var t = this.dataStore.betData.mainBets,
                      e = p(t, this.selectedBet);
                    (this.selectBetEvent = new h("SELECT_BET_EVENT", !0, {
                      betValue: e,
                    })),
                      this.node.dispatchEvent(this.selectBetEvent),
                      this.guiMgr.node.emit("HIDE_BET_SELECTION", !0);
                  }),
                  (i.onClickMaxBet = function () {
                    this.soundPlayer && this.soundPlayer.playSFXClick(),
                      this.betOption.emit("SELECT_MAX_BET");
                  }),
                  (i.clearAllBets = function () {
                    this.betOption.emit("CLEAR_ALL_BET");
                  }),
                  e
                );
              })(f)).prototype,
              "btnConfirm",
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
            (_ = e(L.prototype, "btnClose", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(L.prototype, "btnMaxBet", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = e(L.prototype, "betOption", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = e(L.prototype, "lblWinAmount", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(L.prototype, "lblWallet", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = e(L.prototype, "lblCurrentBet", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = e(L.prototype, "lblMax", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = e(L.prototype, "colorSelectedConfirm", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new c();
              },
            })),
            (j = e(L.prototype, "colorSelectedMaxbet", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new c();
              },
            })),
            (k = e(L.prototype, "colorUnSelected", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new c();
              },
            })),
            (R = e(L.prototype, "selectedValue", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return -1;
              },
            })),
            (A = L))
          ) || A)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetTableHistory9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotBaseTableHistory.ts",
    "./SlotBetCellHistory9937.ts",
  ],
  function (t) {
    "use strict";
    var e, o, r, i, n;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (r = t._decorator);
        },
        function (t) {
          i = t.SlotBaseTableHistory;
        },
        function (t) {
          n = t.SlotBetCellHistory9937;
        },
      ],
      execute: function () {
        var s;
        o._RF.push(
          {},
          "b4473BhBSlAcbmAd8mCI5QS",
          "BetTableHistory9937",
          void 0
        );
        var l = r.ccclass;
        r.property,
          t(
            "BetTableHistory9937",
            l("BetTableHistory9937")(
              (s = (function (t) {
                function o() {
                  return t.apply(this, arguments) || this;
                }
                return (
                  e(o, t),
                  (o.prototype.updateData = function (t) {
                    this.node.children.forEach(function (e, o) {
                      o < t.length
                        ? ((e.active = !0),
                          e.getComponent(n).updateData(t[o], null),
                          (e._uiProps.colorDirty = !0))
                        : (e.active = !1);
                    });
                  }),
                  o
                );
              })(i))
            ) || s
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/cc30-trutien-9937",
  [
    "./Bet9937.ts",
    "./BetOptionScrollView9937.ts",
    "./Config9937.ts",
    "./CustomToggle9937.ts",
    "./DataStore9937.ts",
    "./Director9937.ts",
    "./IconSpin9937.ts",
    "./SlotButton9937.ts",
    "./SpinTimes9937.ts",
    "./WinAmount9937.ts",
    "./FakeFreeSymbol9937.ts",
    "./Info9937.ts",
    "./IntroFree9937.ts",
    "./IntroJackpot9937.ts",
    "./IntroLoading9937.ts",
    "./IntroResumeFree9937.ts",
    "./JackpotWin9937.ts",
    "./SlotJackpotHistory9937.ts",
    "./TotalWinPanel9937.ts",
    "./WinEffect9937.ts",
    "./FreeDirector9937.ts",
    "./FreeWriter9937.ts",
    "./MainDirector9937.ts",
    "./MainWriter9937.ts",
    "./AnimController9937.ts",
    "./AutoSpinPanel9937.ts",
    "./BackToLobby9937.ts",
    "./BackgroundController9937.ts",
    "./BetSelectionMgr9937.ts",
    "./BetSelectionPanel9937.ts",
    "./CompareColor9937.ts",
    "./EarthQuakeAnim9937.ts",
    "./FreeSlotButton9937.ts",
    "./InfoPayableSymbol9937.ts",
    "./IntroTurbo9937.ts",
    "./JackpotPopup9937.ts",
    "./MenuBar9937.ts",
    "./SlotSoundPlayer9937.ts",
    "./SmallToolTip9937.ts",
    "./ToolTipWinInfo9937.ts",
    "./Turbo9937.ts",
    "./UIManager9937.ts",
    "./BetCellPaylineHistory9937.ts",
    "./BetHistoryDetailPage9937.ts",
    "./BetHistoryMgr9937.ts",
    "./BetHistoryPaylines9937.ts",
    "./BetTableHistory9937.ts",
    "./SlotBetCellHistory9937.ts",
    "./SlotBetHistory9937.ts",
    "./SlotBetHistoryDetail9937.ts",
    "./SlotJackpotCellHistory9937.ts",
    "./SlotSymbolHistory9937.ts",
    "./SlotTableHistory9937.ts",
    "./FakeJPSymbol9937.ts",
    "./MultiplierController9937.ts",
    "./PayLineInfoMini9937.ts",
    "./SlotReel9937.ts",
    "./SlotSymbol9937.ts",
    "./SlotSymbolPayline9937.ts",
    "./SlotTable9937.ts",
    "./SlotTableMoney9937.ts",
    "./SlotTableNearwinEffect9937.ts",
    "./SlotTablePayLine9937.ts",
    "./SlotTableSoundEffect9937.ts",
    "./SlotTableTouchSymbol9937.ts",
    "./TouchPayableSymbol9937.ts",
    "./WinLineEffect9937.ts",
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
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/CompareColor9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (r) {
    "use strict";
    var t, e, o, i, n, c, a, l, p;
    return {
      setters: [
        function (r) {
          (t = r.applyDecoratedDescriptor),
            (e = r.inheritsLoose),
            (o = r.initializerDefineProperty),
            (i = r.assertThisInitialized);
        },
        function (r) {
          (n = r.cclegacy),
            (c = r._decorator),
            (a = r.Label),
            (l = r.Sprite),
            (p = r.Component);
        },
      ],
      execute: function () {
        var u, s, f, g, h, y, S;
        n._RF.push({}, "332c7HBjpZA26LkRzLpLg03", "CompareColor9937", void 0);
        var C = c.ccclass,
          b = c.property;
        r(
          "CompareColor9937",
          ((u = C("CompareColor9937")),
          (s = b(a)),
          (f = b(l)),
          u(
            ((y = t(
              (h = (function (r) {
                function t() {
                  for (
                    var t, e = arguments.length, n = new Array(e), c = 0;
                    c < e;
                    c++
                  )
                    n[c] = arguments[c];
                  return (
                    (t = r.call.apply(r, [this].concat(n)) || this),
                    o(t, "currentSprite", y, i(t)),
                    o(t, "targetSprite", S, i(t)),
                    t
                  );
                }
                return (
                  e(t, r),
                  (t.prototype.update = function () {
                    this.currentSprite.color != this.targetSprite.color &&
                      (this.currentSprite.color = this.targetSprite.color);
                  }),
                  t
                );
              })(p)).prototype,
              "currentSprite",
              [s],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (S = t(h.prototype, "targetSprite", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = h))
          ) || g)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Config9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gameCommonUtils.ts"],
  function (_) {
    "use strict";
    var A, I, E, T, N;
    return {
      setters: [
        function (_) {
          A = _.inheritsLoose;
        },
        function (_) {
          (I = _.cclegacy), (E = _._decorator), (T = _.Component);
        },
        function (_) {
          N = _.default;
        },
      ],
      execute: function () {
        var L;
        I._RF.push({}, "6379eeBLYlIkoqoC9U9DU3v", "Config9937", void 0);
        var O = E.ccclass;
        _(
          "Config9937",
          O("Config9937")(
            (L = (function (_) {
              function I() {
                return _.apply(this, arguments) || this;
              }
              return (
                A(I, _),
                (I.prototype.onLoad = function () {
                  this.node.config = {
                    GAME_ID: "9957",
                    JP_PREFIX_EVENT: "9957_",
                    JP_NAMES: ["GRAND"],
                    DEFAULT_BET: "1",
                    BETS: { 1: 500, 2: 1e3, 3: 5e3, 4: 1e4, 5: 5e4, 6: 5e5 },
                    DEFAULT_EXTRA_BET: "0",
                    EXTRA_BETS: { 0: 1 },
                    TOTAL_BET_CREDIT: 25,
                    TREASURE_VALUE_1: ["1", "2", "3", "4"],
                    DEFAULT_TRIAL_JACKPOT: {
                      "9965_1_GRAND": 25e4,
                      "9965_2_GRAND": 5e5,
                      "9965_3_GRAND": 25e5,
                      "9965_4_GRAND": 5e6,
                      "9965_5_GRAND": 25e6,
                      "9965_6_GRAND": 25e7,
                    },
                    DEFAULT_TRIAL_WALLET: 2e8,
                    TRIAL_BET: "5",
                    TRIAL_EXTRA_BET: "0",
                    MESSAGE_DIALOG: N.getMessageSlot(),
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
                    NORMAL_TABLE_FORMAT: [4, 4, 4, 4, 4],
                    FREE_TABLE_FORMAT: [4, 4, 4, 4, 4],
                    TOPUP_TABLE_FORMAT: [4, 4, 4, 4, 4],
                    BONUS_TABLE_FORMAT: [4, 4, 4, 4, 4],
                    TABLE_BUFFER: { TOP: 1, BOT: 1 },
                    ACCEL: 1200,
                    MIN_SPEED: 2e3,
                    MAX_SPEED: 2800,
                    SUPER_SPEED: 3500,
                    SUPER_TURBO: 0.04,
                    TABLE_NORMAL: {
                      TIME: 0.046,
                      BACKWARD_TIME: 0.2,
                      RUNNING_TIME: 0.04,
                      FALLING_TIME: 0.5,
                      DELAY_START: 0.25,
                      DELAY_STOP: 0.3,
                      REEL_DELAY_FALL: 0,
                      EASING_DISTANCE: 45,
                      EASING_TIME: 0.046,
                      TOTAL_CIRCULAR: 8,
                      STEP_STOP: 16,
                      RATE: 1,
                      IS_TURBO: !1,
                      BLINKS: 2,
                      BLINK_DURATION: 0.5,
                      ANIMATION_DURATION: 1.5,
                      EXPECT_PAYLINE_TIME: 2,
                      EXPECT_PAYLINE_ALLWAYS_TIME: 2,
                      MIN_TIME_EACH_PAYLINE: 0,
                      NEAR_WIN_DELAY: 0.6,
                      NEAR_WIN_DELAY_LAST_REEL: 1,
                      SCATTER_DURATION: 2,
                    },
                    TABLE_TURBO: {
                      TIME: 0.03,
                      BACKWARD_TIME: 0,
                      RUNNING_TIME: 0.03,
                      FALLING_TIME: 0.16,
                      DELAY_START: 0,
                      DELAY_STOP: 0,
                      REEL_DELAY_FALL: 0,
                      EASING_DISTANCE: 45,
                      EASING_TIME: 0.08,
                      TOTAL_CIRCULAR: 8,
                      STEP_STOP: 6,
                      RATE: 1,
                      IS_TURBO: !0,
                      BLINKS: 1,
                      BLINK_DURATION: 0.5,
                      ANIMATION_DURATION: 0.83,
                      EXPECT_PAYLINE_TIME: 1,
                      EXPECT_PAYLINE_ALLWAYS_TIME: 2,
                      MIN_TIME_EACH_PAYLINE: 0,
                      NEAR_WIN_DELAY: 0.3,
                      NEAR_WIN_DELAY_LAST_REEL: 0.5,
                      SCATTER_DURATION: 2,
                    },
                    NORMAL_SYMBOLS: [
                      ["2", "3", "4", "5", "6", "7", "8", "A"],
                      ["2", "3", "4", "5", "6", "7", "8", "K"],
                      ["2", "3", "4", "5", "6", "7", "8", "K", "A"],
                      ["2", "3", "4", "5", "6", "7", "8", "K"],
                      ["2", "3", "4", "5", "6", "7", "8"],
                      "A",
                    ],
                    FREE_SYMBOLS: [
                      ["2", "3", "4", "5", "6", "7", "8", "JP"],
                      ["2", "3", "4", "5", "6", "7", "8", "K"],
                      ["2", "3", "4", "5", "6", "7", "8", "K", "JP"],
                      ["2", "3", "4", "5", "6", "7", "8", "K"],
                      ["2", "3", "4", "5", "6", "7", "8", "JP"],
                    ],
                    EXCEPTION_SYMBOLS: ["A", "R", "K", "K1", "K2"],
                    WILD_SYMBOL: "K",
                    SYMBOL_SMALL_NAME_LIST: ["2", "3", "4", "5", "6", "7", "8"],
                    BEAUTY_MATRIX: [
                      ["4", "7", "A", "5"],
                      ["8", "2", "4", "8"],
                      ["A", "6", "K", "4"],
                      ["8", "3", "4", "8"],
                      ["4", "7", "A", "5"],
                    ],
                    SYMBOL_WIDTH: 139,
                    SYMBOL_HEIGHT: 139,
                    SYMBOL_MARGIN_RIGHT: 26,
                    SYMBOL_WIDTH_HISTORY: 152,
                    SYMBOL_HEIGHT_HISTORY: 125,
                    SYMBOL_PADDING_HISTORY: 4,
                    PAY_LINE_LENGTH: 20,
                    PAY_LINE_ALLWAYS: !0,
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
                    HAS_GAME_EVENT: !1,
                    SERVER_VERSION: "",
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
                    },
                  };
                }),
                I
              );
            })(T))
          ) || L
        );
        I._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CustomToggle9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CustomToggle.ts"],
  function (t) {
    "use strict";
    var o, e, s, u;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (s = t._decorator);
        },
        function (t) {
          u = t.CustomToggle;
        },
      ],
      execute: function () {
        var r;
        e._RF.push({}, "03384M90J1CArDnimgbaWzy", "CustomToggle9937", void 0);
        var n = s.ccclass;
        s.property,
          t(
            "CustomToggle9937",
            n("CustomToggle9937")(
              (r = (function (t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                return o(e, t), e;
              })(u))
            ) || r
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DataStore9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./DataStore.ts",
  ],
  function (e) {
    "use strict";
    var t, a, r, n, i, s;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (a = e.cclegacy), (r = e._decorator), (n = e.warn);
        },
        function (e) {
          i = e.StateGameMode;
        },
        function (e) {
          s = e.DataStore;
        },
      ],
      execute: function () {
        var o;
        a._RF.push({}, "275d2X/ioZJvLm2esrJUbxg", "DataStore9937", void 0);
        var l = r.ccclass;
        e(
          "DataStore9937",
          l("DataStore9937")(
            (o = (function (e) {
              function a() {
                return e.apply(this, arguments) || this;
              }
              t(a, e);
              var r = a.prototype;
              return (
                (r.formatData = function (e) {
                  var t = this._mapNewKeys(e),
                    a = t.matrix,
                    r = t.state,
                    s = t.subState,
                    o = t.payLines,
                    l = t.normalGamePaylines,
                    c = t.freeGamePaylines,
                    m = t.freeGameRemain,
                    u = t.normalGameMatrix,
                    h = t.freeGameMatrix,
                    y = t.lastNormalMatrix,
                    f = t.lastPaylinesMatrix,
                    p = this.config,
                    M = p.NORMAL_TABLE_FORMAT,
                    x = p.FREE_TABLE_FORMAT,
                    v = M;
                  return (
                    r == i.FreeGame && (v = x),
                    u && (t.normalGameMatrix = this.convertMatrix(u, v)),
                    y && (t.lastNormalMatrix = this.convertMatrix(y, v)),
                    h && (t.freeGameMatrix = this.convertMatrix(h, v)),
                    a && (t.matrix = this.convertMatrix(a, v)),
                    f &&
                      f.length > 0 &&
                      (t.lastPaylinesMatrix = this.convertPayLine(f)),
                    l &&
                      l.length > 0 &&
                      (t.normalGamePaylines = this.convertPayLine(l)),
                    c &&
                      c.length > 0 &&
                      (t.freeGamePaylines = this.convertPayLine(c)),
                    o && o.length > 0 && (t.payLines = this.convertPayLine(o)),
                    (t.isReSpinNormal = !1),
                    (t.isEnterFreeGame = !1),
                    (t.isReSpinFreeGame = !1),
                    1 == r || 41 == s
                      ? (f || o) && (t.isReSpinNormal = !0)
                      : 2 == r &&
                        m > 0 &&
                        ((c && c.length > 0) || (o && o.length > 0)) &&
                        (t.isReSpinFreeGame = !0),
                    m > 0 && (t.isEnterFreeGame = !0),
                    (this.playSession = t),
                    n("%c run data-update ", "color: red", this.playSession),
                    t
                  );
                }),
                (r._mapNewKeys = function (e) {
                  var t = {
                    ss: "subState",
                    cfa: "totalFreeSpinWinAmount",
                    cfRe: "trueFreeGameRemain",
                    lnMx: "lastNormalMatrix",
                    lnLn: "lastPaylinesMatrix",
                  };
                  return (
                    Object.keys(e).forEach(function (a) {
                      t[a] && (e[t[a]] = e[a]);
                    }),
                    e
                  );
                }),
                a
              );
            })(s))
          ) || o
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Director9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./gameCommonUtils.ts",
    "./CustomEnum.ts",
    "./Director.ts",
  ],
  function (e) {
    "use strict";
    var t, i, o, n, r, a, c, s, u, l, h, m;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (a = e._decorator),
            (c = e.Node),
            (s = e.macro),
            (u = e.warn);
        },
        function (e) {
          l = e.default;
        },
        function (e) {
          h = e.SlotGameMode;
        },
        function (e) {
          m = e.Director;
        },
      ],
      execute: function () {
        var p, T, d, g, _, f, E, B, b;
        r._RF.push({}, "0813fUkkIpP56Mcvcc8N9Hb", "Director9937", void 0);
        var I = a.ccclass,
          S = a.property;
        e(
          "Director9937",
          ((p = I("Director9937")),
          (T = S(c)),
          (d = S(c)),
          (g = S(c)),
          p(
            ((E = t(
              (f = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    o(t, "bgController", E, n(t)),
                    o(t, "resumeBlockTouch", B, n(t)),
                    o(t, "menuBar", b, n(t)),
                    t
                  );
                }
                i(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      this.node.on(
                        "SET_AUTO_SPIN_EVENT",
                        this.setAutoSpin,
                        this
                      ),
                      this.node.on(
                        "SELECT_BET_EVENT",
                        this.selectBetEvent,
                        this
                      ),
                      (this.backUpTouch = s.ENABLE_MULTI_TOUCH),
                      (s.ENABLE_MULTI_TOUCH = !1);
                  }),
                  (r.extendJoinGame = function (t) {
                    var i = this;
                    e.prototype.extendJoinGame.call(this, t);
                    var o = !0;
                    t.dataResume
                      ? ((o = !1),
                        this.scheduleOnce(function () {
                          i.resumeBlockTouch &&
                            (i.resumeBlockTouch.active = !1);
                        }, 2))
                      : this.resumeBlockTouch &&
                        (this.resumeBlockTouch.active = !1),
                      this.gameModes[h.NormalGame].emit("START_LOADING", o),
                      this.dataStore && (this.dataStore.countF2R = 0),
                      this.bgController &&
                        this.bgController.emit("CLASSIFY_MULTIPLIER", 1),
                      this.menuBar && (this.menuBar.active = !0),
                      this.menuBar &&
                        this.menuBar.emit(
                          "ADD_TOGGLE_SWITCH_NETWORK",
                          this.gameStateManager
                        ),
                      this.scheduleOnce(
                        function () {
                          i.guiMgr.node.emit("SHOW_TOOL_TIP_FIST_TIME", !1);
                        },
                        o ? 3 : 0
                      );
                  }),
                  (r.setAutoSpin = function (e) {
                    if (e) {
                      e.propagationStopped = !0;
                      var t = e.details,
                        i = parseInt(t.spinNumber);
                      i
                        ? (this.guiMgr.node.emit("DISABLE_BOTTOM_BUTTON"),
                          this.guiMgr.disableBet(),
                          this.currentGameMode.emit("AUTO_SPIN_EVENT", i))
                        : u("Invalid number or no spin times received:");
                    }
                  }),
                  (r.selectBetEvent = function (e) {
                    (e.propagationStopped = !0),
                      e.details &&
                        this.guiMgr.bet.emit("UPDATE_BET", e.details.betValue);
                  }),
                  (r._jackpotWinAnnounce = function (t, i) {
                    e.prototype._jackpotWinAnnounce.call(this, t, i),
                      i || this.guiMgr.node.emit("SHOW_JACKPOT_POPUP", t);
                  }),
                  (r.onBackEndError = function (e) {
                    var t = this.getMessageError(e),
                      i = null;
                    l.isLoginIframe() &&
                      l.checkConditionCloseGameIframe() &&
                      (i = l.handleCloseGameIframe);
                    this.guiMgr.showDialog(t, i);
                  }),
                  (r.onDestroy = function () {
                    (s.ENABLE_MULTI_TOUCH = this.backUpTouch),
                      e.prototype.onDestroy.call(this);
                  }),
                  t
                );
              })(m)).prototype,
              "bgController",
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
            (B = t(f.prototype, "resumeBlockTouch", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = t(f.prototype, "menuBar", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = f))
          ) || _)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EarthQuakeAnim9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var a, e, i, r, o, n, h, s, u, l, c, k;
    return {
      setters: [
        function (t) {
          (a = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (n = t._decorator),
            (h = t.Node),
            (s = t.Vec3),
            (u = t.Tween),
            (l = t.tween),
            (c = t.v3);
        },
        function (t) {
          k = t.GameObject;
        },
      ],
      execute: function () {
        var E, Q, p, f, g, d, T;
        o._RF.push({}, "c4b3ehdKGJPf7NgsCMpnIj6", "EarthQuakeAnim9937", void 0);
        var m = n.ccclass,
          P = n.property;
        t(
          "EarthQuakeAnim9937",
          ((E = m("EarthQuakeAnim9937")),
          (Q = P(h)),
          (p = P(h)),
          E(
            ((d = a(
              (g = (function (t) {
                function a() {
                  for (
                    var a, e = arguments.length, o = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    o[n] = arguments[n];
                  return (
                    (a = t.call.apply(t, [this].concat(o)) || this),
                    i(a, "earthQuakeTarget", d, r(a)),
                    i(a, "group", T, r(a)),
                    (a.initPos = void 0),
                    (a.doingEarthQuake = void 0),
                    (a.callbackEarthQuake = void 0),
                    (a.timeDoEarthQuake = void 0),
                    (a.currentEarthTime = void 0),
                    (a.totalEarthQuakeTime = void 0),
                    a
                  );
                }
                e(a, t);
                var o = a.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "PLAY_EARTH_QUAKE",
                        this.playEarthQuake.bind(this)
                      ),
                      this.node.on(
                        "STOP_EARTH_QUAKE",
                        this.stopEarthQuake.bind(this)
                      ),
                      (this.initPos = this.earthQuakeTarget.getPosition()),
                      this.group.forEach(function (t) {
                        t.initPos = t.getPosition();
                      });
                  }),
                  (o.lateUpdate = function (t) {
                    if (this.doingEarthQuake) {
                      if (
                        ((this.currentEarthTime += t),
                        (this.timeDoEarthQuake -= t),
                        this.timeDoEarthQuake <= 0)
                      )
                        return (
                          this.callbackEarthQuake && this.callbackEarthQuake(),
                          (this.callbackEarthQuake = null),
                          void this.stopEarthQuake()
                        );
                      this.makeGroupFollowEarthQuakeTarget(),
                        this.currentEarthTime >= this.totalEarthQuakeTime &&
                          this.calculateNewEarthQuakePos();
                    }
                  }),
                  (o.makeGroupFollowEarthQuakeTarget = function () {
                    if (this.group) {
                      var t = this.earthQuakeTarget.getPosition();
                      this.group.forEach(function (a) {
                        var e = Math.ceil(a.initPos.x + t.x),
                          i = Math.ceil(a.initPos.y + t.y);
                        a.setPosition(new s(e, i, 0));
                      });
                    }
                  }),
                  (o.calculateNewEarthQuakePos = function () {
                    var t = Math.floor(16 * Math.random()) - 8,
                      a = Math.floor(16 * Math.random()) - 8;
                    (this.currentEarthTime = 0),
                      (this.totalEarthQuakeTime = 0.08),
                      u.stopAllByTarget(this.earthQuakeTarget),
                      l(this.earthQuakeTarget)
                        .to(this.totalEarthQuakeTime / 2, {
                          position: c(t, a, 0),
                        })
                        .to(this.totalEarthQuakeTime / 2, {
                          position: c(-t, -a, 0),
                        })
                        .start();
                  }),
                  (o.playEarthQuake = function (t) {
                    void 0 === t && (t = null),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("TransitionFree"),
                      (this.doingEarthQuake = !0),
                      this.calculateNewEarthQuakePos(),
                      (this.timeDoEarthQuake = 3),
                      (this.callbackEarthQuake = t);
                  }),
                  (o.stopEarthQuake = function () {
                    (this.doingEarthQuake = !1),
                      this.group.forEach(function (t) {
                        t.setPosition(t.initPos);
                      }),
                      u.stopAllByTarget(this.earthQuakeTarget),
                      this.earthQuakeTarget.setPosition(this.initPos);
                  }),
                  a
                );
              })(k)).prototype,
              "earthQuakeTarget",
              [Q],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (T = a(g.prototype, "group", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (f = g))
          ) || f)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FakeFreeSymbol9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (e) {
    "use strict";
    var t, n, i, a, o, r, c, l, s, f;
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
            (c = e.sp),
            (l = e.tween),
            (s = e.Tween);
        },
        function (e) {
          f = e.GameObject;
        },
      ],
      execute: function () {
        var u, m, p, y, h, d, b;
        o._RF.push({}, "8f6d2Yb3MdOG7rRrhmcRf2d", "FakeFreeSymbol9937", void 0);
        var S = r.ccclass,
          v = r.property;
        e(
          "FakeFreeSymbol9937",
          ((u = S("FakeFreeSymbol9937")),
          (m = v(c.Skeleton)),
          (p = v(c.Skeleton)),
          u(
            ((d = t(
              (h = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    i(t, "animSymbol", d, a(t)),
                    i(t, "animEffect", b, a(t)),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      this.node.on("PLAY_EFFECT", this.playEffect, this),
                      this.node.on("RESET", this.reset, this),
                      (this.animEffect.node.active = !1);
                  }),
                  (o.playEffect = function (e) {
                    var t = this;
                    (this.animSymbol.node.active = !0),
                      this.animSymbol.setAnimation(0, "Active", !1),
                      l(this.node)
                        .delay(e)
                        .call(function () {
                          t.soundPlayer &&
                            t.soundPlayer.playSfxOneShot("ScatterDisappear"),
                            t.animSymbol.setAnimation(0, "Disappear", !1),
                            (t.animEffect.node.active = !0),
                            t.animEffect.setAnimation(0, "Fade_Out", !1);
                        })
                        .start();
                  }),
                  (o.reset = function () {
                    s.stopAllByTarget(this.node),
                      (this.animEffect.node.active = !1),
                      (this.animSymbol.node.active = !1);
                  }),
                  t
                );
              })(f)).prototype,
              "animSymbol",
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
            (b = t(h.prototype, "animEffect", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = h))
          ) || y)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FakeJPSymbol9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (e) {
    "use strict";
    var t, i, n, o, s, c, l, a, p, r, f;
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
            (c = e._decorator),
            (l = e.Node),
            (a = e.v3),
            (p = e.sp),
            (r = e.tween);
        },
        function (e) {
          f = e.GameObject;
        },
      ],
      execute: function () {
        var u, h, y, v, d, J, b, m, P;
        s._RF.push({}, "8cb85ykOFVOQ6ZLgaC55d1q", "FakeJPSymbol9937", void 0);
        var S = c.ccclass,
          k = c.property;
        e(
          "FakeJPSymbol9937",
          ((u = S("FakeJPSymbol9937")),
          (h = k({ type: l })),
          (y = k({ type: l })),
          (v = k({ type: l })),
          u(
            ((b = t(
              (J = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, s = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    s[c] = arguments[c];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    n(t, "spineSymbolJP", b, o(t)),
                    n(t, "spineVFXJP", m, o(t)),
                    n(t, "spineWinline", P, o(t)),
                    (t.tweenEffectJackpot = null),
                    (t.tweenMoveNode = null),
                    t
                  );
                }
                i(t, e);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    (this.node.init = this.init.bind(this)),
                      (this.node.playEffectActive =
                        this.playEffectActive.bind(this));
                  }),
                  (s.init = function () {
                    (this.node.scale = a(1, 1, 1)),
                      (this.spineSymbolJP.active = !0),
                      (this.spineVFXJP.active = !0),
                      (this.spineWinline.active = !0),
                      (this.spineSymbolJP.active = !1),
                      (this.spineVFXJP.active = !1),
                      (this.spineWinline.active = !1);
                  }),
                  (s.playEffectActive = function (e, t, i, n, o) {
                    var s = this;
                    void 0 === e && (e = !0),
                      void 0 === n && (n = 0.2),
                      void 0 === o && (o = null),
                      (this.node.scale = a(1, 1, 1)),
                      (this.spineSymbolJP.active = !0),
                      this.setOpacity(this.spineSymbolJP, 255),
                      (this.spineWinline.active = !0),
                      this.setOpacity(this.spineWinline, 255),
                      this.spineWinline
                        .getComponent(p.Skeleton)
                        .setAnimation(0, "idle", !0),
                      this.tweenEffectJackpot && this.tweenEffectJackpot.stop(),
                      (this.tweenEffectJackpot = r(this.node)),
                      this.scheduleOnce(function () {
                        s.setOpacity(s.spineWinline, 0),
                          (s.spineWinline.active = !0),
                          (s.spineVFXJP.active = !0),
                          s.setOpacity(s.spineVFXJP, 255),
                          s.spineVFXJP
                            .getComponent(p.Skeleton)
                            .setAnimation(0, "animation", !0),
                          s.playEffectWinLine(),
                          e && s.playEffectMove(t, i, n, o);
                      }, 1);
                  }),
                  (s.playEffectWinLine = function () {
                    this.spineSymbolJP
                      .getComponent(p.Skeleton)
                      .setAnimation(0, "Active", !1),
                      this.spineSymbolJP
                        .getComponent(p.Skeleton)
                        .addAnimation(0, "Idle", !0);
                  }),
                  (s.playEffectMove = function (e, t, i, n) {
                    var o = this;
                    void 0 === i && (i = 0.2),
                      void 0 === n && (n = null),
                      this.tweenMoveNode && this.tweenMoveNode.stop(),
                      (this.tweenMoveNode = r(this.node)
                        .to(2, { scale: a(i, i, i), position: a(e, t, 0) })
                        .call(function () {
                          n && n(),
                            (o.spineVFXJP.opacity = 0),
                            (o.spineVFXJP.active = !1),
                            (o.spineSymbolJP.opacity = 0),
                            (o.spineSymbolJP.active = !1),
                            (o.tweenMoveNode = null);
                        })
                        .start());
                  }),
                  (s.onDestroy = function () {
                    this.tweenEffectJackpot && this.tweenEffectJackpot.stop(),
                      (this.tweenEffectJackpot = null);
                  }),
                  t
                );
              })(f)).prototype,
              "spineSymbolJP",
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
            (m = t(J.prototype, "spineVFXJP", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = t(J.prototype, "spineWinline", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = J))
          ) || d)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeDirector9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./MainDirector9937.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, s, o, r;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (n = t._decorator);
        },
        function (t) {
          (s = t.TutorialTriggerType), (o = t.SlotGameMode);
        },
        function (t) {
          r = t.MainDirector9937;
        },
      ],
      execute: function () {
        var u;
        i._RF.push({}, "f5d4aEF2QdIQ4JW7Iury8Ry", "FreeDirector9937", void 0);
        var a = n.ccclass;
        t(
          "FreeDirector9937",
          a("FreeDirector9937")(
            (u = (function (t) {
              function i() {
                return t.apply(this, arguments) || this;
              }
              e(i, t);
              var n = i.prototype;
              return (
                (n.ready = function (t) {
                  var e = this,
                    i = t.matrix,
                    n = t.isResume,
                    r = this.dataStore.playSession,
                    u = r.freeGameMatrix,
                    a = r.freeGamePaylines,
                    c = r.isReSpinFreeGame,
                    h = r.freeGameRemain,
                    m = r.multiplier,
                    l = u || i;
                  l &&
                    (this.table.emit("CHANGE_MATRIX", { matrix: l }),
                    this.table.emit("CLEAR_PAYLINES")),
                    (this.slotButton.active = !0),
                    this.slotButton.emit("SPIN_SHOW"),
                    this.slotButton.emit("SPIN_ENABLE"),
                    this.slotButton.emit("STOP_AUTO_SPIN_HIDE"),
                    n &&
                      this.bgController &&
                      this.bgController.emit("RESUME_MULTIPLY", m, !0),
                    n ||
                      this._updateWinningAmount(null, {
                        winAmount: 0,
                        time: 100,
                      }),
                    this.spinTimes.emit("UPDATE_SPINTIMES", c ? h - 1 : h),
                    this.guiMgr.node.emit("SHOW_TOOL_TIP_FIST_TIME", !0),
                    this.scheduleOnce(function () {
                      n && a && a.length > 0
                        ? e.runAction("Resume")
                        : (e.isAlwaysAutoSpin
                            ? e.runAction("SpinByTimes", 999999)
                            : e.slotButton.emit("FAST_TO_RESULT_HIDE"),
                          e.slotButton.emit("PLAY_ANIM_TAP"),
                          e.bgController &&
                            e.bgController.emit("CLASSIFY_MULTIPLIER", 3, !0));
                    }, 1.8);
                  var _ = s.ResumeNormalGame;
                  this.currentGameMode === o.FreeGame
                    ? (_ = s.EnterFreeGame)
                    : this.currentGameMode === o.BonusGame
                    ? (_ = s.EnterBonusGame)
                    : this.currentGameMode === o.TopUpGame &&
                      (_ = s.EnterTopupGame),
                    this.guiMgr.setQuestPosition(this.questDummy),
                    this.soundPlayer &&
                      (this.soundPlayer.setMusicVolume(
                        this.config.MUSIC_VOLUME
                      ),
                      this.soundPlayer.playMainBGM(o.FreeGame)),
                    this.guiMgr.onIngameEvent(_, "ENTER_GAME_MODE");
                }),
                (n._hideFreeSlotButton = function (t) {
                  (this.slotButton.active = !1), this.executeNextScript(t);
                }),
                (n._updateSpinTimes = function (t, e) {
                  this.spinTimes.emit("UPDATE_SPINTIMES", e),
                    this.executeNextScript(t);
                }),
                (n._playAnimTap = function (t) {
                  this.slotButton.emit("PLAY_ANIM_TAP"),
                    this.executeNextScript(t);
                }),
                (n._resumeMultiply = function (t, e) {
                  this.executeNextScript(t);
                }),
                (n._playAnimTotalWin = function (t, e) {
                  var i = this;
                  this.guiMgr &&
                    this.guiMgr.node.emit(
                      "PLAY_ANIM_TOTAL_WIN",
                      e,
                      function () {
                        i.executeNextScript(t);
                      }
                    );
                }),
                (n._updateValueJP = function (t, e) {
                  var i = e.value,
                    n = e.typeJP;
                  this.guiMgr.jackpot.emit("UPDATE_VALUE_JACKPOT", n, i),
                    this.executeNextScript(t);
                }),
                (n._showJackpotPayLine_2 = function (t) {
                  this.hasPayline
                    ? (this.table.emit("SHOW_JACKPOT_PAYLINE"),
                      this.guiMgr.onIngameEvent(
                        s.FinishJackpotPayline,
                        "ON_FINISH_JACKPOT_PAYLINE"
                      ),
                      this.executeNextScript(t))
                    : this.executeNextScript(t);
                }),
                (n._showJackpotPayLine = function (t) {
                  this.hasPayline
                    ? (this.table.emit("SHOW_JACKPOT_PAYLINE"),
                      this.guiMgr.onIngameEvent(
                        s.FinishJackpotPayline,
                        "ON_FINISH_JACKPOT_PAYLINE"
                      ),
                      this.executeNextScript(t))
                    : this.executeNextScript(t);
                }),
                i
              );
            })(r))
          ) || u
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeSlotButton9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotButton.ts"],
  function (t) {
    "use strict";
    var i, n, e, o, s, l;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (e = t._decorator), (o = t.tween), (s = t.log);
        },
        function (t) {
          l = t.SlotButton;
        },
      ],
      execute: function () {
        var c;
        n._RF.push({}, "fade42hu69B6JI3U3ts/XE3", "FreeSlotButton9937", void 0);
        var a = e.ccclass;
        e.property,
          t(
            "FreeSlotButton9937",
            a("FreeSlotButton9937")(
              (c = (function (t) {
                function n() {
                  for (
                    var i, n = arguments.length, e = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    e[o] = arguments[o];
                  return (
                    ((i = t.call.apply(t, [this].concat(e)) || this).tweenWait =
                      null),
                    (i.isF2RClicked = !1),
                    (i.canClickF2R = !1),
                    (i.selectionAutoSpin = void 0),
                    i
                  );
                }
                i(n, t);
                var e = n.prototype;
                return (
                  (e.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "PLAY_ANIM_TAP",
                        this.playAnimTap.bind(this)
                      );
                  }),
                  (e.playAnimTap = function (t) {
                    var i = this;
                    void 0 === t && (t = 0),
                      this.spineBtnSpin &&
                        (this.soundPlayer && this.soundPlayer.playSfx("Spin"),
                        this.tweenWait && this.tweenWait.stop(),
                        (this.tweenWait = o(this.node)
                          .delay(t)
                          .call(function () {
                            i.spineBtnSpin.setAnimation(0, i.animPressed, !1),
                              (i.tweenWait = null);
                          })
                          .start())),
                      (this.isF2RClicked = !1),
                      (this.canClickF2R = !1);
                    var n = 0;
                    if (!this.dataStore.modeTurbo) {
                      var e = this.config;
                      n =
                        e.TABLE_NORMAL.DELAY_START *
                        (e.NORMAL_TABLE_FORMAT.length - 1);
                    }
                    this.scheduleOnce(function () {
                      (i.canClickF2R = !0),
                        i.isF2RClicked &&
                          ((i.canClickF2R = !0),
                          i.fastToResultClick(),
                          (i.canClickF2R = !1));
                    }, n);
                  }),
                  (e.fastToResultClick = function () {
                    this.isF2RClicked || (this.isF2RClicked = !0),
                      this.canClickF2R &&
                        (this.soundPlayer &&
                          !this.removeSoundClick &&
                          this.soundPlayer.playSFXClick(),
                        this.node.emit("FAST_TO_RESULT_CLICK"),
                        this.isDebug && s("SlotButton: fastToResultClick"));
                  }),
                  n
                );
              })(l))
            ) || c
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeWriter9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./MainWriter9937.ts",
  ],
  function (a) {
    "use strict";
    var e, t, n, m, i;
    return {
      setters: [
        function (a) {
          e = a.inheritsLoose;
        },
        function (a) {
          (t = a.cclegacy), (n = a._decorator);
        },
        function (a) {
          m = a.SlotSceneType;
        },
        function (a) {
          i = a.MainWriter9937;
        },
      ],
      execute: function () {
        var o;
        t._RF.push({}, "293622lqgBE+JJsyAtcNZQj", "FreeWriter9937", void 0);
        var s = n.ccclass,
          p = [3, 6, 9, 20],
          u = p[0];
        a(
          "FreeWriter9937",
          s("FreeWriter9937")(
            (o = (function (a) {
              function t() {
                return a.apply(this, arguments) || this;
              }
              e(t, a);
              var n = t.prototype;
              return (
                (n.makeScriptResume = function () {
                  var a = this.node.dataStore.playSession,
                    e = a.freeGamePaylines,
                    t = a.freeGameMatrix,
                    n = a.multiplier,
                    m = a.winAmount,
                    i = [],
                    o = !0;
                  return (
                    i.push({
                      command: "_resumeMultiply",
                      data: { multiplier: n, isFreeGame: o },
                    }),
                    i.push({
                      command: "_setUpPaylines",
                      data: { matrix: t, payLines: e, multiplier: n },
                    }),
                    i.push({
                      command: "_playEffectVfx",
                      data: { multiplier: n, isFreeGame: o },
                    }),
                    i.push({
                      command: "_playEffectCharActive",
                      data: { multiplier: n, isFreeGame: o },
                    }),
                    e && e.length > 0
                      ? (i.push({ command: "_showNormalPayline" }),
                        i.push({
                          command: "_playEffectCurrentMultiplier",
                          data: { multiplier: n, isFreeGame: o },
                        }),
                        i.push({
                          command: "_updateWinInfo",
                          data: { winAmount: m, multiplier: n },
                        }),
                        i.push({
                          command: "_setDropSymbols",
                          data: { isDropSymbols: !0 },
                        }),
                        i.push({ command: "_respinGame" }))
                      : i.push({ command: "_gameRestart" }),
                    i
                  );
                }),
                (n.makeScriptShowResults = function () {
                  var a = this.node.dataStore,
                    e = a.playSession,
                    t = e.winAmountPS,
                    n = e.matrix,
                    i = e.winAmount,
                    o = e.freeGameRemain,
                    s = e.freeGameMatrix,
                    p = e.payLines,
                    u = e.isReSpinFreeGame,
                    r = e.multiplier,
                    l = e.jackpotInfo,
                    c = e.totalFreeSpinWinAmount,
                    d = e.trueFreeGameRemain,
                    h = a.normalWinAmount,
                    _ = a.betData.getTotalBet(),
                    y = c && c >= 10 * _,
                    f = [];
                  f.push({
                    command: "_setUpPaylines",
                    data: { matrix: n || s, payLines: p, multiplier: r },
                  });
                  var S = t - h;
                  if (
                    (p &&
                      p.length > 0 &&
                      (f.push({
                        command: "_playEffectCurrentMultiplier",
                        data: { multiplier: r, isFreeGame: !0 },
                      }),
                      u && f.push({ command: "_respinGame" }),
                      f.push({ command: "_showNormalPayline" }),
                      f.push({
                        command: "_updateWinInfo",
                        data: { winAmount: i, multiplier: r },
                      })),
                    !u)
                  ) {
                    var w = c;
                    if (
                      (y &&
                        (f.push({ command: "_showStaticSymbol", data: !0 }),
                        f.push({ command: "_delayTimeScript", data: 0.05 }),
                        f.push({
                          command: "_showCutscene",
                          data: {
                            name: m.BigWin,
                            content: { winAmount: w, currentBetData: _ },
                          },
                        }),
                        f.push({ command: "_showStaticSymbol", data: !1 })),
                      l)
                    ) {
                      var A = l[l.length - 1].split(";"),
                        g = 0;
                      A && A.length >= 2 && ((g = Number(A[1])), A[2]),
                        f.push({ command: "_showStaticSymbol", data: !0 }),
                        f.push({ command: "_showJackpotPayLine" }),
                        f.push({
                          command: "_showUnskippedCutscene",
                          data: {
                            name: m.IntroJackpotGame,
                            content: { matrix: n },
                          },
                        }),
                        f.push({ command: "_resetSymbolPayline" }),
                        (w += g),
                        f.push({
                          command: "_showUnskippedCutscene",
                          data: {
                            name: m.JackpotWin,
                            content: { jpInfoArr: A, winAmount: g },
                          },
                        }),
                        f.push({ command: "_showStaticSymbol", data: !1 }),
                        f.push({ command: "_resumeUpdateJP" }),
                        f.push({
                          command: "_playAnimTotalWin",
                          data: { winAmount: w, playEffectCount: !1 },
                        }),
                        f.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: S, time: 800 },
                        });
                    }
                    var v = !l && !y;
                    c && c > 0
                      ? f.push({
                          command: "_playAnimTotalWin",
                          data: { winAmount: w, playEffectCount: v },
                        })
                      : f.push({ command: "_showToolTip" }),
                      o > 0 && f.push({ command: "_updateSpinTimes", data: d }),
                      !o || o <= 0
                        ? (f.push({ command: "_delayTimeScript", data: 0.5 }),
                          f.push({ command: "_showStaticSymbol", data: !0 }),
                          f.push({ command: "_clearPaylines" }),
                          f.push({
                            command: "_showUnskippedCutscene",
                            data: {
                              name: m.TotalWinPanel,
                              content: { winAmount: S },
                            },
                          }),
                          f.push({
                            command: "_playAnimTotalWin",
                            data: { winAmount: t, playEffectCount: !1 },
                          }),
                          f.push({ command: "_hideFreeSlotButton" }),
                          f.push({ command: "_gameExit" }))
                        : (f.push({ command: "_clearPaylines" }),
                          f.push({ command: "_gameRestart" }));
                  }
                  return (
                    i &&
                      i > 0 &&
                      p &&
                      p.length > 0 &&
                      f.push({
                        command: "_updateWinningAmount",
                        data: { winAmount: S, time: 800 },
                      }),
                    f
                  );
                }),
                (n.makeScriptGameRestart = function () {
                  var a = this.node.dataStore.playSession.freeGameRemain,
                    e = [];
                  return (
                    this.scriptUpdateWinAmount(e),
                    e.push({ command: "_clearWaitingShowPaylines" }),
                    e.push({
                      command: "_setDropSymbols",
                      data: { isDropSymbols: !1 },
                    }),
                    a && a > 0 && e.push({ command: "_runAutoSpin" }),
                    e.push({
                      command: "_resetCharacter",
                      data: { isFreeGame: !0 },
                    }),
                    e.push({
                      command: "_playEffectNextMultiplier",
                      data: { multiplier: u, isFreeGame: !0 },
                    }),
                    e.push({ command: "_hideWinInfo" }),
                    e.push({ command: "_playAnimTap" }),
                    e
                  );
                }),
                (n.makeScriptResultReceive = function () {
                  var a = this.node.dataStore.playSession,
                    e = a.normalGameMatrix,
                    t = a.matrix,
                    n = a.subState,
                    m = a.isFinished,
                    i = a.payLines,
                    o = a.jackpotInfo,
                    s = a.multiplier,
                    p = !0,
                    u = [];
                  if (o) {
                    var r = o[0].split(";"),
                      l = Math.floor(Number(r[1])),
                      c = r[0].split("_")[2];
                    u.push({ command: "_pauseUpdateJP" }),
                      u.push({
                        command: "_updateValueJP",
                        data: { typeJP: c, value: l },
                      });
                  }
                  return (
                    u.push({ command: "_waitingCompletedShowPaylines" }),
                    42 == n &&
                      (u.push({
                        command: "_playEffectNextMultiplier",
                        data: { multiplier: s, isFreeGame: p },
                      }),
                      u.push({
                        command: "_playEffectVfx",
                        data: { multiplier: s, isFreeGame: p },
                      }),
                      u.push({
                        command: "_playEffectCharActive",
                        data: { multiplier: s, isFreeGame: p },
                      })),
                    u.push({
                      command: "_checkPlaySoundSpecialSymbols",
                      data: t,
                    }),
                    u.push({
                      command: "_resultReceive",
                      data: {
                        matrix: t || e,
                        isDropSymbols:
                          41 == n || 42 == n || (i && i.length > 0),
                        isFinished: m,
                      },
                    }),
                    u.push({
                      command: "_disableSpinButton",
                      data: { isReelStop: !0 },
                    }),
                    u.push({ command: "_showResult" }),
                    u
                  );
                }),
                (n.getNextMultiply = function (a) {
                  void 0 === a && (a = 1);
                  var e = p.indexOf(a);
                  return e < 0
                    ? 0
                    : e < p.length - 1
                    ? p[e + 1]
                    : p[p.length - 1];
                }),
                t
              );
            })(i))
          ) || o
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IconSpin9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var e, i, n, o, r, a, s, h, c, l, p, u;
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
            (s = t.Node),
            (h = t.CCInteger),
            (c = t.SpriteFrame),
            (l = t.Sprite),
            (p = t.tween);
        },
        function (t) {
          u = t.GameObject;
        },
      ],
      execute: function () {
        var d, m, b, f, _, F, I, R, S, w, g, y, N, O, T;
        r._RF.push({}, "90c81P57ZhLfJFPLMEbrPZT", "IconSpin9937", void 0);
        var E = a.ccclass,
          v = a.property;
        t(
          "IconSpin9937",
          ((d = E("IconSpin9937")),
          (m = v({ type: s })),
          (b = v({ type: h })),
          (f = v({ type: c })),
          (_ = v({ type: c })),
          (F = v({ type: c })),
          (I = v({ type: c })),
          d(
            ((w = e(
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
                    n(e, "targetNode", w, o(e)),
                    n(e, "direction", g, o(e)),
                    n(e, "normalFrame", y, o(e)),
                    n(e, "disableFrame", N, o(e)),
                    n(e, "normalBlurFrame", O, o(e)),
                    n(e, "disableBlurFrame", T, o(e)),
                    (e._tweenRotate = void 0),
                    (e.isReSpin = !1),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    this.targetNode &&
                      (this.targetNode.on(
                        "BUTTON_SPIN_SHOW",
                        this.showIcon,
                        this
                      ),
                      this.targetNode.on(
                        "BUTTON_SPIN_HIDE",
                        this.hideIcon,
                        this
                      )),
                      this.node.on("STOP_ROTATE", this.stopRotate.bind(this)),
                      this.node.on(
                        "ROTATE_FASTER_SPEED",
                        this.rotateFaster.bind(this)
                      ),
                      this.node.on(
                        "ROTATE_NORMAL_SPEED",
                        this.rotateNormal.bind(this)
                      ),
                      this.node.on("HIDE_ICON", this.hideIcon.bind(this)),
                      this.node.on("SHOW_ICON", this.showIcon.bind(this)),
                      this.node.on(
                        "SHOW_ICON_NORMAL",
                        this.showIconNormal.bind(this)
                      ),
                      this.node.on(
                        "CHANGE_ICON_SPIN_FRAME",
                        this.changeIconSpinFrame,
                        this
                      ),
                      this.node.on("RESPIN_STATE", this.respinState.bind(this));
                  }),
                  (r.start = function () {
                    this.rotateIcon(3.2);
                  }),
                  (r.showIcon = function () {
                    this.setOpacity(this.node, 255);
                  }),
                  (r.showIconNormal = function () {
                    this.node.getComponent(l).spriteFrame = this.normalFrame;
                  }),
                  (r.showIconDisable = function () {
                    this.node.getComponent(l).spriteFrame = this.disableFrame;
                  }),
                  (r.rotateIcon = function (t) {
                    void 0 === t && (t = 1.5),
                      this._tweenRotate && this._tweenRotate.stop(),
                      (this._tweenRotate = p(this.node)
                        .by(t, { angle: -360 * this.direction })
                        .repeatForever()),
                      this._tweenRotate.start();
                  }),
                  (r.rotateFaster = function (t) {
                    void 0 === t && (t = !1),
                      1 != this.isReSpin &&
                        (this.rotateIcon(0.45),
                        (this.node.getComponent(l).spriteFrame = t
                          ? this.disableBlurFrame
                          : this.normalBlurFrame));
                  }),
                  (r.rotateNormal = function () {
                    1 != this.isReSpin &&
                      ((this.node.getComponent(l).spriteFrame =
                        this.normalFrame),
                      this.rotateIcon(3.2));
                  }),
                  (r.respinState = function (t) {
                    void 0 === t && (t = !1), (this.isReSpin = t);
                  }),
                  (r.stopRotate = function () {
                    this._tweenRotate &&
                      (this._tweenRotate.stop(), (this._tweenRotate = null)),
                      (this.node.getComponent(l).spriteFrame =
                        this.disableFrame);
                  }),
                  (r.hideIcon = function () {
                    this.setOpacity(this.node, 0);
                  }),
                  (r.onDestroy = function () {
                    this._tweenRotate &&
                      (this._tweenRotate.stop(), (this._tweenRotate = null));
                  }),
                  (r.changeIconSpinFrame = function (t, e) {
                    switch ((void 0 === e && (e = 1), e)) {
                      case 0:
                        this.stopRotate();
                        break;
                      case 1:
                        this.rotateNormal();
                        break;
                      case 2:
                        this.rotateFaster();
                    }
                  }),
                  e
                );
              })(u)).prototype,
              "targetNode",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (g = e(S.prototype, "direction", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1;
              },
            })),
            (y = e(S.prototype, "normalFrame", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(S.prototype, "disableFrame", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = e(S.prototype, "normalBlurFrame", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(S.prototype, "disableBlurFrame", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = S))
          ) || R)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Info9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotUIScene.ts"],
  function (t) {
    "use strict";
    var e, i, o, n, s, r, l, a, c, h, u;
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
            (r = t._decorator),
            (l = t.Node),
            (a = t.ScrollView),
            (c = t.Vec3),
            (h = t.tween);
        },
        function (t) {
          u = t.SlotUIScene;
        },
      ],
      execute: function () {
        var p, w, v, f, d, b, y, g, I, P, M;
        s._RF.push({}, "d2bb3G5kHVDd57rVX6GFAkg", "Info9937", void 0);
        var m = r.ccclass,
          S = r.property;
        t(
          "Info9937",
          ((p = m("Info9937")),
          (w = S(l)),
          (v = S(l)),
          (f = S({ type: a })),
          (d = S({ displayName: "moveDuration", visible: !0 })),
          p(
            ((g = e(
              (y = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    o(e, "blockInput", g, n(e)),
                    o(e, "container", I, n(e)),
                    o(e, "scrollView", P, n(e)),
                    o(e, "moveDuration", M, n(e)),
                    (e.tweenMove = null),
                    (e.showPos = void 0),
                    (e.hidePos = void 0),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.showPos = this.container.getPosition()),
                      (this.hidePos = new c(
                        this.showPos.x,
                        this.showPos.y - 1560,
                        0
                      ));
                  }),
                  (s.show = function () {
                    var e = this;
                    this.node.isShowing ||
                      ((this.node.isShowing = !0),
                      t.prototype.show.call(this),
                      (this.blockInput.active = !0),
                      (this.container.active = !0),
                      this.container.setPosition(this.hidePos),
                      this.scrollView && this.scrollView.scrollToTop(),
                      this.tweenMove && this.tweenMove.stop(),
                      (this.tweenMove = h(this.container)
                        .to(
                          this.moveDuration,
                          { position: this.showPos },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          e.tweenMove = null;
                        })),
                      this.tweenMove.start());
                  }),
                  (s.exit = function (e) {
                    var i = this;
                    void 0 === e && (e = null),
                      this.node.isShowing &&
                        (this.tweenMove && this.tweenMove.stop(),
                        (this.tweenMove = h(this.container)
                          .to(
                            this.moveDuration,
                            { position: this.hidePos },
                            { easing: "sineIn" }
                          )
                          .call(function () {
                            (i.node.isShowing = !1),
                              t.prototype.exit.call(i, e),
                              (i.blockInput.active = !1),
                              (i.container.active = !1),
                              (i.tweenMove = null);
                          })),
                        this.tweenMove.start());
                  }),
                  e
                );
              })(u)).prototype,
              "blockInput",
              [w],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (I = e(y.prototype, "container", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = e(y.prototype, "scrollView", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = e(y.prototype, "moveDuration", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1;
              },
            })),
            (b = y))
          ) || b)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/InfoPayableSymbol9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./CustomType.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, a, o, r, s, l, u, p, c, y, b, h, m, f;
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
            (s = t.Layout),
            (l = t.Node),
            (u = t.Sprite),
            (p = t.SpriteFrame),
            (c = t.sp),
            (y = t.UITransform),
            (b = t.Component);
        },
        function (t) {
          (h = t.convertAssetArrayToObject), (m = t.setOpacity);
        },
        function (t) {
          f = t.SlotCustomDataType;
        },
      ],
      execute: function () {
        var d, g, D, v, S, L, P, T, _, z, w, A, G, C, k, F, I, N, x;
        o._RF.push(
          {},
          "5737cIGt8xPY4UexNzP7kf8",
          "InfoPayableSymbol9937",
          void 0
        );
        var O = r.ccclass,
          B = r.property;
        t(
          "InfoPayableSymbol9937",
          ((d = O("InfoPayableSymbol9937")),
          (g = B({ type: f })),
          (D = B({ type: s })),
          (v = B({ type: l })),
          (S = B({ type: l })),
          (L = B({ type: l })),
          (P = B({ type: u })),
          (T = B({ type: p })),
          (_ = B({ type: p })),
          d(
            ((A = e(
              (w = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "spineDataList", A, a(e)),
                    n(e, "layout", G, a(e)),
                    n(e, "payable", C, a(e)),
                    n(e, "staticSymbol", k, a(e)),
                    n(e, "spineNode", F, a(e)),
                    n(e, "backGround", I, a(e)),
                    n(e, "listPaytable", N, a(e)),
                    n(e, "listBG", x, a(e)),
                    (e.assets = []),
                    (e._animation = null),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    this.node.on("UPDATE_LAYOUT", this.updateLayout, this),
                      this.node.on("UPDATE_DATA", this.updateData, this),
                      (this.assets = h(this.listPaytable)),
                      (this._animation = this.spineNode.getComponent(
                        c.Skeleton
                      ));
                  }),
                  (o.updateLayout = function (t, e, i, n) {
                    var a = this;
                    m(this.node, 1);
                    var o = this.backGround.getComponent(y).width,
                      r = 0;
                    "A" === i || "K" === i
                      ? ((r =
                          t === s.HorizontalDirection.LEFT_TO_RIGHT
                            ? e.x + 0.312 * o
                            : e.x - 0.312 * o),
                        (this.node.getComponent(y).width = o - 18))
                      : ((r =
                          t === s.HorizontalDirection.LEFT_TO_RIGHT
                            ? e.x + 0.22 * o
                            : e.x - 0.22 * o),
                        (this.node.getComponent(y).width = 2 * n + 18)),
                      this.node.setPosition(r, e.y, 0),
                      (this.layout.horizontalDirection = t),
                      this.layout.updateLayout(),
                      this.scheduleOnce(function () {
                        m(a.node, 255);
                      }, 0.03);
                  }),
                  (o.updateData = function (t) {
                    if ((void 0 === t && (t = null), t)) {
                      m(this.node, 1),
                        (this.staticSymbol.active = !1),
                        (this.spineNode.active = !1),
                        (this.backGround.getComponent(u).spriteFrame =
                          this.listBG[0]),
                        ("A" !== t && "K" !== t) ||
                          (this.backGround.getComponent(u).spriteFrame =
                            this.listBG[1]);
                      var e = "Paytable_" + t,
                        i = this.getSpineData(t),
                        n = this.assets[t],
                        a = this.assets[e];
                      i
                        ? ((this.spineNode.active = !0),
                          (this._animation.skeletonData = i),
                          this._animation.setAnimation(0, "Active", !0))
                        : (n &&
                            (this.staticSymbol.getComponent(u).spriteFrame = n),
                          (this.staticSymbol.active = !0)),
                        a && (this.payable.getComponent(u).spriteFrame = a);
                    }
                  }),
                  (o.getSpineData = function (t) {
                    for (var e = 0; e < this.spineDataList.length; e++)
                      if (this.spineDataList[e].spineName === t)
                        return this.spineDataList[e].spineData;
                    return null;
                  }),
                  e
                );
              })(b)).prototype,
              "spineDataList",
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
            (G = e(w.prototype, "layout", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = e(w.prototype, "payable", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = e(w.prototype, "staticSymbol", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = e(w.prototype, "spineNode", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(w.prototype, "backGround", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(w.prototype, "listPaytable", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (x = e(w.prototype, "listBG", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (z = w))
          ) || z)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroFree9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotUIScene.ts"],
  function (e) {
    "use strict";
    var t, i, r, o, n, a, s, l, c, h, f, p, u;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (n = e.cclegacy),
            (a = e._decorator),
            (s = e.Node),
            (l = e.sp),
            (c = e.tween),
            (h = e.Vec3),
            (f = e.v3),
            (p = e.Tween);
        },
        function (e) {
          u = e.SlotUIScene;
        },
      ],
      execute: function () {
        var F, y, d, m, S, g, v;
        n._RF.push({}, "a72f2gVAulDn4UMkmuQ3g9z", "IntroFree9937", void 0);
        var w = a.ccclass,
          L = a.property;
        e(
          "IntroFree9937",
          ((F = w("IntroFree9937")),
          (y = L(s)),
          (d = L(s)),
          F(
            ((g = t(
              (S = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    n[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    r(t, "scatterHolder", g, o(t)),
                    r(t, "spineFreeGame", v, o(t)),
                    (t.poolFactory = null),
                    (t.fakeFreeList = void 0),
                    (t.matrix = void 0),
                    (t.listSword = void 0),
                    (t.animFreeGame = void 0),
                    (t.tweenBigSword = void 0),
                    t
                  );
                }
                i(t, e);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      (this.animFreeGame = this.spineFreeGame.getComponent(
                        l.Skeleton
                      )),
                      (this.spineFreeGame.active = !1);
                  }),
                  (n.enter = function () {
                    var e = this;
                    (this.matrix = this.content.matrix),
                      this.poolFactory ||
                        (this.poolFactory = this.mainDirector.poolFactory),
                      this.initFakeFreeList(),
                      this.playEffectScatter(),
                      c(this.node)
                        .delay(1.2)
                        .call(function () {
                          e.playEffectFlyingSword();
                        })
                        .delay(0.8)
                        .call(function () {
                          for (var t = 0; t < e.fakeFreeList.length; t++) {
                            var i = e.fakeFreeList[t];
                            i.emit("RESET"), e.poolFactory.removeObject(i);
                          }
                          e.fakeFreeList = [];
                        })
                        .start();
                  }),
                  (n.initFakeFreeList = function () {
                    this.fakeFreeList = [];
                    for (var e = 0; e < this.matrix.length; e++)
                      for (var t = this.matrix[e], i = 0; i < t.length; i++)
                        if ("A" == this.matrix[e][i]) {
                          var r = -i * this.config.SYMBOL_HEIGHT + 92;
                          this.createFakeFreeSymbols(e, r);
                        }
                  }),
                  (n.playEffectScatter = function () {
                    if (this.fakeFreeList && !(this.fakeFreeList.length < 1)) {
                      this.fakeFreeList.forEach(function (e, t) {
                        e.emit("PLAY_EFFECT", 0.3 * t + 1);
                      });
                    }
                  }),
                  (n.playEffectFlyingSword = function () {
                    var e = this;
                    this.soundPlayer &&
                      this.soundPlayer.playMusic("BGM_TRANSITION_FREE");
                    (this.spineFreeGame.active = !0),
                      this.setOpacity(this.spineFreeGame, 1);
                    var t = this.config.NORMAL_TABLE_FORMAT;
                    this.listSword = [];
                    for (var i = 0, r = 0; r < t.length; r++)
                      for (var o = 1; o < t[r]; o++) {
                        if ("A" == this.matrix[r][o]) {
                          var n = this.poolFactory.getObject("SwordScatter"),
                            a = this.getXPosition(r),
                            s = (1.5 - o) * this.config.SYMBOL_HEIGHT - 110;
                          (n.active = !0),
                            (n.parent = this.scatterHolder),
                            n.setScale(0, 0, 0),
                            n.setPosition(a, s),
                            this.listSword.push(n),
                            c(n)
                              .delay(0.3 * i)
                              .to(0.6, { scale: h.ONE })
                              .call(function () {
                                e.soundPlayer &&
                                  e.soundPlayer.playSfxOneShot("ScatterFlying");
                              })
                              .to(0.4, { scale: h.ONE })
                              .to(0.5, { position: f(a, 2e3, 0) })
                              .start(),
                            i++;
                        }
                      }
                    var l = 0.3 * i + 0.5 + 1;
                    this.animFreeGame &&
                      this.animFreeGame.findAnimation("animation") &&
                      (this.tweenBigSword && this.tweenBigSword.stop(),
                      (this.tweenBigSword = c(this.node)
                        .delay(l)
                        .call(function () {
                          e.mainDirector.node.emit("PLAY_EARTH_QUAKE");
                        })
                        .delay(0.1)
                        .call(function () {
                          e.soundPlayer &&
                            e.soundPlayer.playSfx("TransitionFree"),
                            e.setOpacity(e.spineFreeGame, 255),
                            e.animFreeGame.setAnimation(0, "animation", !1);
                        })
                        .delay(7.5)
                        .call(function () {
                          e.soundPlayer &&
                            e.soundPlayer.stopSfx("TransitionFree"),
                            (e.tweenBigSword = null),
                            e.exit(),
                            (e.spineFreeGame.active = !1);
                        })
                        .start()));
                  }),
                  (n.createFakeFreeSymbols = function (e, t) {
                    var i = this.getXPosition(e),
                      r = this.poolFactory.getObject("FakeFreeSymbol9937");
                    (r.active = !0),
                      (r.parent = this.scatterHolder),
                      r.setPosition(new h(i, t, 0)),
                      this.fakeFreeList.push(r);
                  }),
                  (n.getXPosition = function (e) {
                    return (
                      -(this.config.NORMAL_TABLE_FORMAT.length / 2 - 0.5) *
                        this.config.SYMBOL_WIDTH +
                      this.config.SYMBOL_WIDTH * e
                    );
                  }),
                  (n.exit = function () {
                    if (this.listSword)
                      for (; this.listSword.length > 0; ) {
                        var t = this.listSword.pop();
                        p.stopAllByTarget(t), this.poolFactory.removeObject(t);
                      }
                    e.prototype.exit.call(this);
                  }),
                  t
                );
              })(u)).prototype,
              "scatterHolder",
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
            (v = t(S.prototype, "spineFreeGame", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = S))
          ) || m)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroJackpot9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotUIScene.ts"],
  function (t) {
    "use strict";
    var e, i, n, o, r, s, a, c, p, l, h;
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
            (c = t.sp),
            (p = t.Vec3),
            (l = t.warn);
        },
        function (t) {
          h = t.SlotUIScene;
        },
      ],
      execute: function () {
        var f, u, y, J, P, m, v;
        r._RF.push({}, "85f2aMsfqJIqKVo0Nimo7Hg", "IntroJackpot9937", void 0);
        var g = s.ccclass,
          b = s.property;
        t(
          "IntroJackpot9937",
          ((f = g("IntroJackpot9937")),
          (u = b({ type: a })),
          (y = b({ type: a })),
          f(
            ((m = e(
              (P = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "spineJP", m, o(e)),
                    n(e, "jpSymbolHolder", v, o(e)),
                    (e.poolFactory = null),
                    (e.matrix = void 0),
                    (e.fakeJPList = []),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.enter = function () {
                    var t = this;
                    (this.spineJP.active = !0),
                      this.setOpacity(this.spineJP, 1),
                      (this.spineJP.active = !1),
                      (this.poolFactory = this.mainDirector.poolFactory),
                      (this.matrix = this.content.matrix),
                      (this.fakeJPList = []);
                    for (var e = 0; e < this.matrix.length; e++)
                      for (var i = this.matrix[e], n = 0; n < i.length; n++)
                        if ("JP" == this.matrix[e][n]) {
                          var o = -n * this.config.SYMBOL_HEIGHT + 92;
                          this.createFakeJPSymbols(e, o);
                        }
                    for (var r = 0; r < this.fakeJPList.length; r++)
                      this.fakeJPList[r].playEffectActive(!0, 0, 450, 0.2);
                    this.scheduleOnce(function () {
                      (t.spineJP.active = !0), t.setOpacity(t.spineJP, 255);
                      var e = t.spineJP.getComponent(c.Skeleton);
                      e.setAnimation(0, "Merge_jp", !1),
                        e.setCompleteListener(function () {
                          e.setCompleteListener(function () {}),
                            t.exit(),
                            t.setOpacity(t.spineJP, 1),
                            (t.spineJP.active = !1);
                        });
                    }, 3);
                  }),
                  (r.getXPosition = function (t) {
                    return (
                      -(this.config.FREE_TABLE_FORMAT.length / 2 - 0.5) *
                        this.config.SYMBOL_WIDTH +
                      this.config.SYMBOL_WIDTH * t
                    );
                  }),
                  (r.createFakeJPSymbols = function (t, e) {
                    var i;
                    (i = this.poolFactory.getObject("FakeJPSymbol9937"))
                      ? ((i.active = !0),
                        (i.parent = this.jpSymbolHolder),
                        (i.position = new p(this.getXPosition(t), e, 0)),
                        (i.opacity = 255),
                        i.init(),
                        this.fakeJPList.push(i))
                      : l("no jp prefab");
                  }),
                  e
                );
              })(h)).prototype,
              "spineJP",
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
            (v = e(P.prototype, "jpSymbolHolder", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = P))
          ) || J)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroLoading9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var n, i, e, o, r, a, c, l, s;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy), (a = t._decorator), (c = t.Node), (l = t.sp);
        },
        function (t) {
          s = t.GameObject;
        },
      ],
      execute: function () {
        var u, p, d, g, h, f, b, v, y;
        r._RF.push({}, "d8336OiUApG3rvc0Fb74FAP", "IntroLoading9937", void 0);
        var L = a.ccclass,
          m = a.property;
        t(
          "IntroLoading9937",
          ((u = L("IntroLoading9937")),
          (p = m(c)),
          (d = m(c)),
          (g = m(c)),
          u(
            ((b = n(
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
                    e(n, "loading", b, o(n)),
                    e(n, "static", v, o(n)),
                    e(n, "backGround", y, o(n)),
                    (n.loadingSpine = void 0),
                    (n.isCutSceneClose = !1),
                    n
                  );
                }
                i(n, t);
                var r = n.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "PLAY_INTRO_LOADING",
                        this.playIntroLoading,
                        this
                      ),
                      this.node.on("ACTIVE_BG", this.active, this),
                      (this.loadingSpine = this.loading.getComponent(
                        l.Skeleton
                      )),
                      this.loadingSpine.setAnimation(0, "Idle", !0);
                  }),
                  (r.active = function (t) {
                    this.backGround.active = t;
                  }),
                  (r.playIntroLoading = function () {
                    var t = this;
                    this.isCutSceneClose ||
                      ((this.isCutSceneClose = !0),
                      this.loadingSpine.setAnimation(0, "Enter", !1),
                      this.loadingSpine.setCompleteListener(function () {
                        t.loadingSpine.setCompleteListener(function () {}),
                          (t.node.active = !1),
                          (t.backGround.active = !1);
                      }));
                  }),
                  n
                );
              })(s)).prototype,
              "loading",
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
            (v = n(f.prototype, "static", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = n(f.prototype, "backGround", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (h = f))
          ) || h)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroResumeFree9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotUIScene.ts"],
  function (e) {
    "use strict";
    var t, n, r, i, o, a, c, s, l, u;
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
            (c = e.Node),
            (s = e.Label),
            (l = e.tween);
        },
        function (e) {
          u = e.SlotUIScene;
        },
      ],
      execute: function () {
        var p, f, h, d, y;
        o._RF.push(
          {},
          "e5e0adc2OROb7zwqk/DTSY0",
          "IntroResumeFree9937",
          void 0
        );
        var m = a.ccclass,
          R = a.property;
        e(
          "IntroResumeFree9937",
          ((p = m("IntroResumeFree9937")),
          (f = R(c)),
          p(
            ((y = t(
              (d = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "freeSpinRemain", y, i(t)),
                    t
                  );
                }
                return (
                  n(t, e),
                  (t.prototype.enter = function () {
                    var e = this;
                    this.setOpacity(this.node, 255),
                      (this.freeSpinRemain.getComponent(s).string =
                        "Bạn còn " +
                        this.content.freeSpinRemain +
                        " lượt quay miễn phí."),
                      l(this.node)
                        .delay(2)
                        .call(function () {
                          e.fadeOut(e.node, 1);
                        })
                        .delay(1)
                        .call(function () {
                          e.exit();
                        })
                        .start();
                  }),
                  t
                );
              })(u)).prototype,
              "freeSpinRemain",
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
            (h = d))
          ) || h)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroTurbo9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotUIScene.ts"],
  function (t) {
    "use strict";
    var o, i, r, e;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (r = t._decorator);
        },
        function (t) {
          e = t.SlotUIScene;
        },
      ],
      execute: function () {
        var n;
        i._RF.push({}, "eb64bXzpXpI9rcqjdMS7BQM", "IntroTurbo9937", void 0);
        var s = r.ccclass;
        r.property,
          t(
            "IntroTurbo9937",
            s("IntroTurbo9937")(
              (n = (function (t) {
                function i() {
                  return t.apply(this, arguments) || this;
                }
                o(i, t);
                var r = i.prototype;
                return (
                  (r.show = function () {
                    t.prototype.show.call(this),
                      (this.dataStore.isShowingTurboPopup = !0);
                  }),
                  (r.clickLater = function () {
                    this.soundPlayer && this.soundPlayer.playSFXClick(),
                      this.mainDirector.currentGameMode.emit(
                        "CLICK_BUTTON_SPIN"
                      ),
                      this.exit();
                  }),
                  (r.clickTurnOn = function () {
                    this.soundPlayer && this.soundPlayer.playSFXClick(),
                      this.guiMgr.turbo.emit("TURN_ON"),
                      this.guiMgr.turbo.emit("ENABLE_TURBO"),
                      this.mainDirector.currentGameMode.emit(
                        "CLICK_BUTTON_SPIN"
                      ),
                      this.exit();
                  }),
                  (r.exit = function () {
                    t.prototype.exit.call(this),
                      (this.dataStore.isShowingTurboPopup = !1);
                  }),
                  i
                );
              })(e))
            ) || n
          );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotPopup9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, o, a, s, r, l, p, c, u, h, d, f, m, b, v;
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
            (r = t.Node),
            (l = t.Label),
            (p = t.sp),
            (c = t.find),
            (u = t.UITransform),
            (h = t.Vec3),
            (d = t.tween),
            (f = t.v3);
        },
        function (t) {
          (m = t.changeParent), (b = t.formatMoney);
        },
        function (t) {
          v = t.GameObject;
        },
      ],
      execute: function () {
        var y, g, w, G, O, P, N, A, j, k, I;
        a._RF.push({}, "3bd5dPyDGFG4ZmvGIO5A/AK", "JackpotPopup9937", void 0);
        var L = s.ccclass,
          M = s.property;
        t(
          "JackpotPopup9937",
          ((y = L("JackpotPopup9937")),
          (g = M(r)),
          (w = M(r)),
          (G = M(l)),
          (O = M(l)),
          y(
            ((A = i(
              (N = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, a = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(a)) || this),
                    n(i, "animNode", A, o(i)),
                    n(i, "labelGroup", j, o(i)),
                    n(i, "jackpotAmount", k, o(i)),
                    n(i, "winUser", I, o(i)),
                    (i.animation = void 0),
                    (i.tweenMove = void 0),
                    i
                  );
                }
                e(i, t);
                var a = i.prototype;
                return (
                  (a.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("SHOW", this.show, this),
                      (this.animation = this.animNode.getComponent(p.Skeleton)),
                      (this.animNode.initPosY = this.getOffsetScreen()),
                      this.setOpacity(this.labelGroup, 1),
                      this.setOpacity(this.node, 1),
                      (this.node.active = !1);
                  }),
                  (a.getOffsetScreen = function () {
                    return (c("Canvas").getComponent(u).height - 1280) / 2;
                  }),
                  (a.show = function (t) {
                    var i = this;
                    this.initValue(t),
                      (this.node.active = !0),
                      this.setOpacity(this.node, 255),
                      (this.animNode.active = !0),
                      this.setOpacity(this.animNode, 255),
                      this.animNode.setPosition(h.ZERO),
                      this.setOpacity(this.labelGroup, 1),
                      m(this.labelGroup, this.node),
                      this.labelGroup.setPosition(h.ZERO),
                      this.animation.setAnimation(0, "Appear", !1),
                      this.animation.addAnimation(0, "Loop", !0),
                      this.animation.setMix("Appear", "Loop", 0.1),
                      this.tweenMove && this.tweenMove.stop(),
                      (this.tweenMove = d(this.animNode)
                        .to(0.3, { position: f(0, 0, 0) })
                        .delay(2)
                        .call(function () {
                          (i.labelGroup.parent = i.animNode),
                            i.labelGroup.setPosition(0, 0);
                        })
                        .to(0.3, { position: f(0, this.animNode.initPosY, 0) })
                        .call(function () {
                          i.setOpacity(i.node, 1), (i.node.active = !1);
                        })
                        .start()),
                      this.fadeIn(this.labelGroup, 1);
                  }),
                  (a.initValue = function (t) {
                    if (t && t.jpInfo && t.jpInfo.length > 0) {
                      var i = t.jpInfo[0],
                        e = i.amt,
                        n = i.dn;
                      (n = n || ""), (this.jackpotAmount.string = b(e));
                      var o = n.trim();
                      o.length > 20 && (o = o.substring(0, 15) + "..."),
                        (this.winUser.string = o);
                    }
                  }),
                  i
                );
              })(v)).prototype,
              "animNode",
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
            (j = i(N.prototype, "labelGroup", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = i(N.prototype, "jackpotAmount", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = i(N.prototype, "winUser", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = N))
          ) || P)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotWin9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./JackpotWin.ts",
  ],
  function (t) {
    "use strict";
    var n, i, a, e, o, s, c, r, l, u, p, h, d, f, m;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (a = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (s = t._decorator),
            (c = t.Node),
            (r = t.sp),
            (l = t.Vec3),
            (u = t.Mask),
            (p = t.tween),
            (h = t.UIOpacity);
        },
        function (t) {
          (d = t.formatMoney), (f = t.fadeTo);
        },
        function (t) {
          m = t.JackpotWin;
        },
      ],
      execute: function () {
        var y, k, g, S, A, w, J;
        o._RF.push({}, "2c5d2DWWfxFTrA4X0N02HFB", "JackpotWin9937", void 0);
        var b = s.ccclass,
          v = s.property,
          M = "Idle",
          P = "Appear_jp",
          T = "Loop_jp";
        t(
          "JackpotWin9937",
          ((y = b("JackpotWin9937")),
          (k = v({ type: c })),
          (g = v({ type: c })),
          y(
            ((w = n(
              (A = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, o = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (n = t.call.apply(t, [this].concat(o)) || this),
                    a(n, "background", w, e(n)),
                    a(n, "animJackpot", J, e(n)),
                    (n.timeUpdateMoney = 0),
                    (n.isSetupSpineData = !1),
                    (n.listAnim = []),
                    (n.canClose = !1),
                    (n.tweenJackpot = null),
                    (n.tweenBackGround = null),
                    (n.animation = null),
                    n
                  );
                }
                i(n, t);
                var o = n.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.animation = this.animJackpot.getComponent(
                        r.Skeleton
                      ));
                  }),
                  (o.initValue = function () {
                    (this.winInfo.scale = new l(1, 1, 1)),
                      (this.currentValue = 0),
                      (this.currentTitle = 0),
                      (this.label.string = ""),
                      (this.timeUpdateMoney = 0),
                      (this.isUpdating = !1),
                      (this.speedUp = !1),
                      this.bindQuickShow();
                  }),
                  (o.setupSpineData = function () {
                    if (!this.isSetupSpineData) {
                      (this.isSetupSpineData = !0),
                        (this.animation.skeletonData =
                          this.findSpineData("UI_Jackpot")),
                        this.animation.setAnimationCacheMode(
                          r.Skeleton.AnimationCacheMode.REALTIME
                        ),
                        this.animation.setAnimation(0, M, !0);
                      var t =
                        this.animation.skeletonData._skeletonJson.animations;
                      t && (this.listAnim = Object.keys(t));
                    }
                  }),
                  (o.enter = function () {
                    var t = this;
                    this.soundPlayer && this.soundPlayer.stopAllAudio(),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("BGM_JACKPOT", !0),
                      this.initValue(),
                      this.setupSpineData(),
                      (this.label.node.active = !1),
                      (this.animJackpot.active = !0);
                    var n = this.findDurationAnimation(P),
                      i = this.findDurationAnimation(M);
                    this.animation.setMix("Merge_jp", M, 0.1),
                      this.animation.setMix(M, P, 0.1),
                      this.animation.setMix(P, T, 0.1),
                      this.node.addComponent(u),
                      (this.animJackpot.opacity = 255),
                      (this.winInfo.opacity = 0),
                      (this.canClose = !1),
                      this.setOpacity(this.background, 0),
                      this.fadeTo(this.background, 0.5, 255),
                      this.setOpacity(this.animJackpot, 1),
                      this.animation.setAnimation(0, M, !0),
                      this.tweenJackpot && this.tweenJackpot.stop(),
                      (this.tweenJackpot = p(this.animJackpot)
                        .call(function () {
                          t.fadeTo(t.animJackpot, 0.5, 255),
                            t.animation.setAnimation(0, M, !1),
                            t.animation.addAnimation(0, P, !1),
                            t.animation.addAnimation(0, T, !0),
                            (t.canClose = !0);
                        })
                        .delay(i)
                        .call(function () {
                          t.soundPlayer.playSfxOneShot("JackpotFighting");
                        })
                        .delay(n)
                        .call(function () {
                          t.soundPlayer.playSfx("JackpotCongrats"),
                            t.soundPlayer.playSfx("JackpotMoneyCouting"),
                            t.setOpacity(t.winInfo, 255),
                            (t.label.node.active = !0),
                            (t.isUpdating = !0),
                            t.startUpdateWinAmount();
                        })),
                      this.tweenJackpot.start();
                  }),
                  (o.findDurationAnimation = function (t) {
                    var n = this.listAnim.find(function (n) {
                      return n === t;
                    });
                    return n ? this.animation.findAnimation(n).duration : 0;
                  }),
                  (o.startDebugAnim = function () {
                    var t = this;
                    (this.node.active = !0),
                      (this.node.getComponent(h).opacity = 255),
                      (this.label.node.active = !1),
                      p(this.node)
                        .delay(1)
                        .call(function () {
                          t.enter();
                        });
                  }),
                  (o.startParticle = function () {}),
                  (o.stopParticle = function () {}),
                  (o.playSoundStart = function () {}),
                  (o.playSoundEnd = function () {
                    this.soundPlayer.stopSfx("JackpotMoneyCouting");
                  }),
                  (o.update = function () {
                    this.isUpdating &&
                      this.currentValue > 0 &&
                      (this.label.string = d(this.currentValue));
                  }),
                  (o.startUpdateWinAmount = function () {
                    var t = this;
                    this.currentTween && this.currentTween.stop(),
                      (this.currentTween = p(this)),
                      this.currentTween
                        .to(7, { currentValue: Number(this.content.winAmount) })
                        .delay(0.05)
                        .call(function () {
                          t.playSoundEnd(), (t.isUpdating = !1);
                        })
                        .delay(3.5)
                        .call(function () {
                          (t.skippable = !1),
                            t.finish(),
                            (t.currentTween = null);
                        }),
                      this.currentTween.start();
                  }),
                  (o.finish = function () {
                    var t = this;
                    (this.isUpdating = !1),
                      (this.label.string = d(this.content.winAmount)),
                      this.stopTweenWinAmount(),
                      this.stopParticle(),
                      p(this)
                        .delay(this.delayShowTime)
                        .call(function () {
                          f(t.node, 0.5, 0);
                        })
                        .delay(0.5)
                        .call(function () {
                          t.soundPlayer.stopSfx("BGM_JACKPOT"),
                            t.soundPlayer.playMainBGM(),
                            (t.label.string = ""),
                            t.exit();
                        })
                        .start();
                  }),
                  (o.onClick = function () {
                    var t = this;
                    this.isUpdating &&
                      this.canClose &&
                      ((this.canClose = !1),
                      this.currentTween && this.currentTween.stop(),
                      (this.currentTween = null),
                      (this.isUpdating = !1),
                      this.playSoundEnd(),
                      (this.label.string = d(this.content.winAmount)),
                      p(this.node)
                        .delay(3.5)
                        .call(function () {
                          t.finish();
                        })
                        .start());
                  }),
                  (o.exit = function () {
                    t.prototype.exit.call(this),
                      this.node.removeComponent(u),
                      (this.animJackpot.active = !1),
                      (this.label.node.active = !1),
                      this.soundPlayer.stopSfx("BGM_JACKPOT"),
                      this.soundPlayer && this.soundPlayer.playMainBGM();
                  }),
                  (o.findSpineData = function (t) {
                    return this.mainDirector.spineSkeletonDatabase.getSpineSkeletonData(
                      t
                    );
                  }),
                  n
                );
              })(m)).prototype,
              "background",
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
            (J = n(A.prototype, "animJackpot", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = A))
          ) || S)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MainDirector9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./EventNames.ts",
    "./SlotDirector.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, s, o, r, a, u, c, l, h;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy), (r = t._decorator), (a = t.Node);
        },
        function (t) {
          (u = t.TutorialTriggerType), (c = t.SlotGameMode);
        },
        function (t) {
          l = t.default;
        },
        function (t) {
          h = t.SlotDirector;
        },
      ],
      execute: function () {
        var S, _, p, T, m, N, E;
        o._RF.push({}, "ce12dnvjrZKBpHPaim68gWm", "MainDirector9937", void 0);
        var A = r.ccclass,
          I = r.property;
        t(
          "MainDirector9937",
          ((S = A("MainDirector9937")),
          (_ = I(a)),
          (p = I(a)),
          S(
            ((N = i(
              (m = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    n(i, "introLoading", N, s(i)),
                    n(i, "bgController", E, s(i)),
                    (i.callbackCompletedShowPayLines = void 0),
                    (i.isF2RClick = void 0),
                    i
                  );
                }
                e(i, t);
                var o = i.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "SKIP_ALL_EFFECT",
                        this.skipAllEffects,
                        this
                      ),
                      this.node.on("START_LOADING", this.startLoading, this),
                      this.node.on(
                        "AUTO_SPIN_EVENT",
                        this.startAutoSpinningByTimes,
                        this
                      ),
                      this.node.on(
                        "CLICK_BUTTON_SPIN",
                        this.clickButtonSpin,
                        this
                      );
                  }),
                  (o.ready = function (i) {
                    var e = null;
                    i && (e = i.matrix), t.prototype.ready.call(this, e);
                  }),
                  (o.startLoading = function (t) {
                    var i = this;
                    void 0 === t && (t = !0),
                      this.introLoading &&
                        ((this.introLoading.active = t),
                        this.introLoading.emit("ACTIVE_BG", t),
                        this.scheduleOnce(function () {
                          t && i.introLoading.emit("PLAY_INTRO_LOADING"),
                            i.soundPlayer && i.soundPlayer.playMainBGM();
                        }, 0.5));
                  }),
                  (o._disableSpinButton = function (t, i) {
                    var e = i;
                    (this.dataStore.isReelStop = !!e),
                      this.slotButton.emit("SPIN_DISABLE", !0),
                      this.executeNextScript(t);
                  }),
                  (o._allowTouchSymbol = function (t, i) {
                    this.table.emit("ALLOW_TOUCH_SYMBOL", i),
                      this.executeNextScript(t);
                  }),
                  (o._resetSpeedIconSpin = function (t) {
                    (this.dataStore.isReelStop = !1),
                      this.slotButton.emit("SET_RESPIN_STATE", !1),
                      this.slotButton.emit("RESET_SPIN_BUTTON"),
                      this.executeNextScript(t);
                  }),
                  (o._updateWinInfo = function (t, i) {
                    var e = this;
                    this.guiMgr.node.emit("UPDATE_WIN_INFO", i, function () {
                      e.executeNextScript(t);
                    });
                  }),
                  (o._showToolTip = function (t) {
                    this.guiMgr.node.emit("SHOW_TOOL_TIP"),
                      this.executeNextScript(t);
                  }),
                  (o._respinGame = function (t, i) {
                    var e = this;
                    if (
                      (this.fsm.can("gameRestart") && this.fsm.gameRestart(),
                      this.fsm.can("actionTrigger"))
                    ) {
                      this.fsm.actionTrigger(),
                        this._setTurboMode(),
                        this.updateReelConfig();
                      var n = function () {
                        e.runAction("ReSpinClick", i),
                          e.executeNextScript(t),
                          (n = null);
                      };
                      this.scheduleOnce(n, 0.02);
                    }
                  }),
                  (o._spinClick = function (t) {
                    var i = this.dataStore.playSession,
                      e = i.isReSpinNormal,
                      n = i.isReSpinFreeGame;
                    (e || n) &&
                      (this.table.emit("SHOW_WAITING_EFFECT"),
                      this.slotButton.emit("SET_RESPIN_STATE", !0)),
                      this.fsm.can("actionTrigger") &&
                        (this.fsm.actionTrigger(),
                        this._setTurboMode(),
                        this.resetGameSpeed(),
                        this._showTrialButtons(null, !1),
                        this.slotButton.emit("SPIN_DISABLE"),
                        this.slotButton.emit("SPIN_HIDE"),
                        this.slotButton.emit("FAST_TO_RESULT_DISABLE"),
                        this.slotButton.emit("DISABLE_PROMOTION_STOP_SPIN"),
                        this.slotButton.emit("FAST_TO_RESULT_SHOW"),
                        this.hasTable
                          ? (this.slotButton.emit("SET_RESPIN_STATE", !1),
                            this.table.emit("START_SPINNING"),
                            (this.isSpinning = !0),
                            this.guiMgr.onIngameEvent(
                              u.SpinClicked,
                              "SPIN_CLICK"
                            ),
                            this.executeNextScript(t))
                          : this.executeNextScript(t));
                  }),
                  (o._playEffectCurrentMultiplier = function (t, i) {
                    var e = this,
                      n = this.dataStore.modeTurbo,
                      s = i.multiplier,
                      o = i.isFreeGame,
                      r = n ? 1.7 / 6 : 0.5;
                    this.scheduleOnce(function () {
                      e.bgController.emit("PLAY_EFFECT_EXPLODE", s, o);
                    }, r),
                      this.executeNextScript(t);
                  }),
                  (o._playEffectNextMultiplier = function (t, i) {
                    var e = this,
                      n = i.multiplier,
                      s = i.isFreeGame;
                    this.bgController.emit("CLASSIFY_MULTIPLIER", n, s),
                      this.scheduleOnce(function () {
                        e.executeNextScript(t);
                      }, 1 / 6);
                  }),
                  (o._playEffectCharActive = function (t, i) {
                    this.bgController.emit("PLAY_EFFECT_CHAR_ACTIVE", i),
                      this.executeNextScript(t);
                  }),
                  (o._playEffectVfx = function (t, i) {
                    var e = i.multiplier,
                      n = i.isFreeGame;
                    this.bgController.emit("PLAY_EFFECT_VFX", e, n),
                      this.executeNextScript(t);
                  }),
                  (o._updateWinningAmount = function (t, i) {
                    var e = i.winAmount,
                      n = i.time;
                    this.guiMgr.updateWinAmount(e, n / 1e3),
                      this.executeNextScript(t);
                  }),
                  (o._resetCharacter = function (t, i) {
                    var e = i.isFreeGame;
                    this.bgController.emit("RESET_ALL", e),
                      this.executeNextScript(t);
                  }),
                  (o._setDropSymbols = function (t, i) {
                    this.table.emit("SET_DROP_SYMBOLS", i),
                      this.executeNextScript(t);
                  }),
                  (o._playAnimTotalWin = function (t, i) {
                    this.guiMgr.node.emit(
                      "PLAY_ANIM_TOTAL_WIN",
                      i,
                      function () {}
                    ),
                      this.executeNextScript(t);
                  }),
                  (o._hideWinInfo = function (t) {
                    this.guiMgr.node.emit("HIDE_WIN_INFO"),
                      this.executeNextScript(t);
                  }),
                  (o._playAnimTransform = function (t, i) {
                    var e = this,
                      n = i.isFreeGame;
                    this.bgController.emit(
                      "PLAY_ANIM_TRANSFORM",
                      n,
                      function () {
                        e.executeNextScript(t);
                      }
                    );
                  }),
                  (o._playEffectChangeMultiplier = function (t, i) {
                    var e = this,
                      n = i.isFreeGame,
                      s = i.isResume;
                    this.bgController.emit(
                      "HIDE_CURRENT_GAME_MODE_MULTIPLIER",
                      n
                    ),
                      this.bgController.emit(
                        "PLAY_EFFECT_CHANGE_MULTIPLIER",
                        n,
                        s,
                        function () {
                          e.executeNextScript(t);
                        }
                      );
                  }),
                  (o._hideCurrentGameModeMultiplier = function (t, i) {
                    var e = i.isFreeGame;
                    this.bgController.emit(
                      "HIDE_CURRENT_GAME_MODE_MULTIPLIER",
                      e
                    ),
                      this.executeNextScript(t);
                  }),
                  (o.skipAllEffects = function () {
                    t.prototype.skipAllEffects.call(this),
                      this.resetAsyncScript();
                  }),
                  (o._waitingCompletedShowPaylines = function (t) {
                    var i = this;
                    this.table.emit(
                      "CHECK_WAITING_SHOW_PAYLINES",
                      function (e) {
                        e
                          ? (i.callbackCompletedShowPayLines &&
                              (i.table.off(
                                "SHOW_PAYLINES_COMPLETE",
                                i.callbackCompletedShowPayLines,
                                i
                              ),
                              (i.callbackCompletedShowPayLines = null)),
                            (i.callbackCompletedShowPayLines = function () {
                              i.executeNextScript(t);
                            }),
                            i.table.on(
                              "SHOW_PAYLINES_COMPLETE",
                              i.callbackCompletedShowPayLines,
                              i
                            ))
                          : i.executeNextScript(t);
                      }
                    );
                  }),
                  (o._clearWaitingShowPaylines = function (t) {
                    this.table.emit("CLEAR_WAITING_PAYLINES"),
                      this.executeNextScript(t);
                  }),
                  (o._changeIconSpinFrame = function (t, i) {
                    var e = i.isGray,
                      n = i.spinSpeed;
                    this.slotButton.emit("CHANGE_ICON_SPIN_FRAME", e, n),
                      this.executeNextScript(t);
                  }),
                  (o._playEffectTransitionSlotButton = function (t, i) {
                    var e = this,
                      n = i.isFreeGame;
                    n
                      ? (this.guiMgr.node.emit("FADE_BUTTONS", !1),
                        this.slotButton.emit(
                          "PLAY_EFFECT_TRANSITION_BUTTON",
                          n,
                          function () {
                            e.executeNextScript(t);
                          }
                        ))
                      : (this.guiMgr.node.emit("FADE_BUTTONS", !0),
                        this.slotButton.emit(
                          "PLAY_EFFECT_TRANSITION_BUTTON",
                          n,
                          null
                        ),
                        this.executeNextScript(t));
                  }),
                  (o.startAutoSpinningByTimes = function (t) {
                    this.mainDirector.showTrialButtons(!1),
                      this.guiMgr.onIngameEvent(
                        u.AutoSpinClicked,
                        "AUTO_SPIN_CLICK"
                      ),
                      this.runAction("SpinByTimes", t),
                      (this._autoSpin = !0);
                  }),
                  (o.clickButtonSpin = function () {
                    this.slotButton.emit("TRIGGER_BUTTON_SPIN");
                  }),
                  (o._showScatterPayLine_2 = function (t) {
                    var i = this;
                    this.hasPayline
                      ? this.table.emit("SHOW_SCATTER_PAYLINE", function () {
                          i.guiMgr.onIngameEvent(
                            u.FinishScatterPayline,
                            "ON_FINISH_SCATTER_PAYLINE"
                          ),
                            i.executeNextScript(t);
                        })
                      : this.executeNextScript(t);
                  }),
                  (o._updateSpinTimes = function (t, i) {
                    this.dataStore.isAutoSpin &&
                      (this.spinTimes.emit("UPDATE_SPINTIMES", i),
                      this.slotButton.emit("PLAY_ANIM_TAP")),
                      (this.isAlwaysAutoSpin || this.dataStore.isAutoSpin) &&
                        i > 0 &&
                        this.slotButton.emit("HIDE_ICON"),
                      this.executeNextScript(t);
                  }),
                  (o._showSpinTimes = function (t, i) {
                    var e = i.spinTimes;
                    this.slotButton.emit("HIDE_ICON"),
                      this.spinTimes.emit("UPDATE_SPINTIMES", e),
                      this.executeNextScript(t);
                  }),
                  (o._resumeEffectFromNormal = function (t) {
                    this.bgController.emit("RESUME_EFFECT_FROM_NORMAL"),
                      this.executeNextScript(t);
                  }),
                  (o._runAutoSpin = function (t) {
                    var i = this;
                    if (this._checkPauseTutorial("pauseFreeGame"))
                      (this.storeCurrentScripts = "_runAutoSpin"),
                        (this.storeNextScripts = { script: t, data: {} });
                    else {
                      var e = this.dataStore.spinTimes;
                      !this.isAlwaysAutoSpin &&
                        this.dataStore.isAutoSpin &&
                        (this.slotButton.emit("STOP_AUTO_SPIN_SHOW"),
                        this.slotButton.emit("HIDE_ICON"),
                        this.spinTimes.emit("UPDATE_SPINTIMES", e)),
                        !this.isAlwaysAutoSpin &&
                          this.dataStore.isAutoSpin &&
                          this.slotButton &&
                          this.slotButton.emit("STOP_AUTO_SPIN_SHOW"),
                        this._allowTouchSymbol(null, !1),
                        this._showTrialButtons(null, !1),
                        (this._callBackAutoSpin = function () {
                          i.runAction("SpinClick"),
                            i.executeNextScript(t),
                            (i._callBackAutoSpin = null);
                        }),
                        (this._autoSpin = !0),
                        this.scheduleOnce(this._callBackAutoSpin, 1);
                    }
                  }),
                  (o._disableBet = function (t) {
                    this.guiMgr.disableBet(),
                      this.guiMgr.enableSwitchWallet(!1),
                      this.guiMgr.node.emit("DISABLE_BOTTOM_BUTTON"),
                      (this.dataStore.isIconGray = !0),
                      this.executeNextScript(t);
                  }),
                  (o._disableMenu = function (t) {
                    this.guiMgr.node.emit("DISABLE_BOTTOM_BUTTON"),
                      this.executeNextScript(t);
                  }),
                  (o._enableBet = function (t) {
                    this.guiMgr.enableBet(),
                      this.guiMgr.enableSwitchWallet(!0),
                      this.guiMgr.node.emit("ENABLE_BOTTOM_BUTTON"),
                      (this.dataStore.isIconGray = !1),
                      this.executeNextScript(t);
                  }),
                  (o._resumeGameMode = function (i, e) {
                    var n = e.name,
                      s = e.data;
                    t.prototype._resumeGameMode.call(this, i, {
                      name: n,
                      data: s,
                    }),
                      this.dataStore.currentGameMode == c.NormalGame &&
                        (this.soundPlayer.playMainBGM(),
                        this.table.emit("RESET_SYMBOL_PAYLINE"));
                  }),
                  (o.fastToResultClick = function () {
                    t.prototype.fastToResultClick.call(this),
                      this.slotButton.emit("CHANGE_ICON_SPIN_FRAME", !0, 0),
                      (this.isF2RClick = !0),
                      "showingResult" === this.fsm.state &&
                        (this.dataStore.modeTurbo || this.dataStore.countF2R++,
                        this.slotButton.emit("FAST_TO_RESULT_DISABLE"));
                  }),
                  (o._resetF2RClick = function (t) {
                    this.isF2RClick || (this.dataStore.countF2R = 0),
                      (this.isF2RClick = !1),
                      this.executeNextScript(t);
                  }),
                  (o.updateReelConfig = function () {
                    this.table.emit("UPDATE_REEL_CONFIG");
                  }),
                  (o.spinClick = function () {
                    if (
                      !this.dataStore.modeTurbo &&
                      5 === this.dataStore.countF2R &&
                      !this.dataStore.isDoneIntroTurbo
                    )
                      return (
                        this.slotButton.emit("CHANGE_ICON_SPIN_FRAME", !1, 1),
                        (this.dataStore.isDoneIntroTurbo = !0),
                        void this.runAction("ShowTurbo")
                      );
                    this.node &&
                      this.fsm &&
                      this.fsm.can("actionTrigger") &&
                      (this.skipAllEffects(),
                      this.resetAsyncScript(),
                      this.eventManager.emit(l.SPIN_CLICK_ACTION),
                      this.runAction("SpinClick"),
                      this.guiMgr.node.emit("HIDE_INTRO"),
                      this.table.emit("HIDE_ANIM_INTRO"));
                  }),
                  (o._showMessageNoMoney = function (i, e) {
                    this.slotButton.emit("SHOW_ICON"),
                      (this.dataStore.isReelStop = !1),
                      this.slotButton.emit("SET_RESPIN_STATE", !1),
                      this.slotButton.emit("RESET_SPIN_BUTTON"),
                      this.table.emit("ALLOW_TOUCH_SYMBOL", !0),
                      t.prototype._showMessageNoMoney.call(this, i, e);
                  }),
                  (o._showIconSpin = function (t) {
                    this.slotButton.emit("SHOW_ICON"),
                      this.executeNextScript(t);
                  }),
                  (o.stopAutoSpinClick = function () {
                    if (
                      (this.slotButton &&
                        this.slotButton.emit("STOP_AUTO_SPIN_HIDE"),
                      this.runAction("DisableAutoSpin"),
                      (this._autoSpin = !1),
                      (this.dataStore.isAutoSpin = !1),
                      this.spinTimes && this.spinTimes.emit("RESET_SPINTIMES"),
                      this._callBackAutoSpin)
                    ) {
                      this.currentGameMode === c.NormalGame &&
                        this.guiMgr.enableSwitchWallet(!0),
                        this.unschedule(this._callBackAutoSpin);
                      var t = this.dataStore.playSession.isFinished;
                      (void 0 !== t && !0 !== t) ||
                        (this._resetSpinButton(),
                        this._resetSpeedIconSpin(null),
                        this._allowTouchSymbol(null, !0),
                        this._showTrialButtons(null, !0),
                        this.guiMgr.enableBet(),
                        this.guiMgr.node.emit("ENABLE_BOTTOM_BUTTON"));
                    }
                    this.slotButton.emit("SHOW_ICON");
                  }),
                  (o._setUpPaylines = function (t, i) {
                    var e = i.matrix,
                      n = i.payLines,
                      s = i.multiplier;
                    (this.hasPayline = !0),
                      this.table.emit("SETUP_PAYLINES", e, n, s),
                      this.executeNextScript(t);
                  }),
                  (o._resetSymbolPayline = function (t) {
                    this.table.emit("RESET_SYMBOL_PAYLINE"),
                      this.executeNextScript(t);
                  }),
                  (o.onSpacePressed = function () {
                    !this.guiMgr.isSpinVisible() ||
                      this.guiMgr.isDisplayDialog() ||
                      this.guiMgr.isTutorialShowing() ||
                      this.isAlwaysAutoSpin ||
                      (this.slotButton.emit("PLAY_ANIM_TAP"),
                      this.slotButton.emit("CHANGE_ICON_SPIN_FRAME", !1, 2),
                      this.spinClick());
                  }),
                  (o._hideNormalSpinTimes = function (t) {
                    (this.spinTimes.active = !1), this.executeNextScript(t);
                  }),
                  (o.onTouchStartSpinButton = function () {
                    this.guiMgr.node.emit("DISABLE_BOTTOM_BUTTON"),
                      t.prototype.onTouchStartSpinButton.call(this);
                  }),
                  (o.onTouchCancelSpinButton = function () {
                    this.dataStore &&
                      !1 !== this.dataStore.playSession.isFinished &&
                      (this._showTrialButtons(null, !0),
                      this.guiMgr.enableBet(),
                      this.guiMgr.node.emit("ENABLE_BOTTOM_BUTTON"));
                  }),
                  (o._playEffectDimColorSymbols = function (t, i) {
                    var e = i.isDim;
                    this.table.emit("PLAY_EFFECT_DIM_COLOR_SYMBOLS", e),
                      this.executeNextScript(t);
                  }),
                  (o._clearWinAmount = function (t) {
                    this.guiMgr.winAmount.emit("UPDATE_WIN_AMOUNT", {
                      value: 0,
                      time: 0,
                    }),
                      this.executeNextScript(t);
                  }),
                  (o._checkPlaySoundSpecialSymbols = function (t, i) {
                    this.table.emit("CHECK_PLAY_SOUND_SPECIAL_SYMBOLS", i),
                      this.executeNextScript(t);
                  }),
                  (o._updateLastedWinningAmount = function (t) {
                    var i = this.dataStore.playSession.winAmountPS;
                    this.guiMgr.winAmount.emit("UPDATE_WIN_AMOUNT", {
                      value: i,
                      time: 50,
                    }),
                      this.executeNextScript(t);
                  }),
                  (o._sendFreeSpinToNetwork = function (t) {
                    this.mainDirector.gameStateManager.triggerFreeSpinRequest(),
                      this.executeNextScript(t);
                  }),
                  (o._showStaticSymbol = function (t, i) {
                    this.table.emit("SHOW_STATIC_SYMBOL", i),
                      this.executeNextScript(t);
                  }),
                  i
                );
              })(h)).prototype,
              "introLoading",
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
            (E = i(m.prototype, "bgController", [p], {
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
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MainWriter9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotGameWriter.ts",
  ],
  function (a) {
    "use strict";
    var e, n, m, t, i, o;
    return {
      setters: [
        function (a) {
          e = a.inheritsLoose;
        },
        function (a) {
          (n = a.cclegacy), (m = a._decorator);
        },
        function (a) {
          (t = a.SlotSceneType), (i = a.SlotGameMode);
        },
        function (a) {
          o = a.SlotGameWriter;
        },
      ],
      execute: function () {
        var s;
        n._RF.push({}, "5c87ctxjupF+rw5uCiX4A/+", "MainWriter9937", void 0);
        var p = m.ccclass,
          u = [1, 2, 3, 5];
        a(
          "MainWriter9937",
          p("MainWriter9937")(
            (s = (function (a) {
              function n() {
                for (
                  var e, n = arguments.length, m = new Array(n), t = 0;
                  t < n;
                  t++
                )
                  m[t] = arguments[t];
                return (
                  ((e =
                    a.call.apply(a, [this].concat(m)) ||
                    this).isAlwaysAutoSpin = void 0),
                  e
                );
              }
              e(n, a);
              var m = n.prototype;
              return (
                (m.makeScriptResume = function () {
                  var a = [],
                    e = this.node.dataStore,
                    n = e.playSession,
                    m = n.freeGameRemain,
                    o = n.winAmountPS,
                    s = n.betId,
                    p = n.walletType,
                    r = n.normalGameMatrix,
                    d = n.normalGamePaylines,
                    c = n.freeGamePaylines,
                    l = n.normalGameWinAmount,
                    h = n.isReSpinFreeGame,
                    _ = n.freeGameWinAmount,
                    S = n.matrix,
                    f = n.isReSpinNormal,
                    y = n.isEnterFreeGame,
                    G = n.multiplier,
                    w = n.subState,
                    A = n.winAmount,
                    T = n.lastNormalMatrix,
                    g = n.lastPaylinesMatrix;
                  e.normalWinAmount = l || 0;
                  var F = this.getNextMultiply(G);
                  if (
                    (a.push({
                      command: "_disableSpinButton",
                      data: { isReelStop: !0 },
                    }),
                    a.push({ command: "_showTrialButtons", data: !1 }),
                    a.push({ command: "_updateBetId", data: s }),
                    a.push({ command: "_loadWallet", data: p }),
                    a.push({ command: "_disableBet" }),
                    a.push({ command: "_showTrialButtons", data: !1 }),
                    a.push({ command: "_delayTimeScript", data: 0.1 }),
                    a.push({
                      command: "_updateMatrix",
                      data: { matrix: T || S || r },
                    }),
                    f)
                  ) {
                    a.push({ command: "_disableMenu" }),
                      a.push({ command: "_allowTouchSymbol", data: !1 }),
                      a.push({
                        command: "_changeIconSpinFrame",
                        data: { isGray: !0, spinSpeed: 0 },
                      }),
                      a.push({
                        command: "_playEffectNextMultiplier",
                        data: { multiplier: G, isFreeGame: !1 },
                      }),
                      o &&
                        o > 0 &&
                        A &&
                        A > 0 &&
                        o - A > 0 &&
                        a.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: o - A, time: 50 },
                        });
                    var M = !1;
                    T && g && g.length > 0 && (M = !0);
                    var W = !1;
                    r && d && d.length > 0 && !T && (W = !0),
                      (M || W) &&
                        (M
                          ? a.push({
                              command: "_setUpPaylines",
                              data: { matrix: T, payLines: g, multiplier: G },
                            })
                          : W &&
                            a.push({
                              command: "_setUpPaylines",
                              data: {
                                matrix: r || S,
                                payLines: d,
                                multiplier: G,
                              },
                            }),
                        a.push({ command: "_disableSpinButton" }),
                        a.push({
                          command: "_playEffectCharActive",
                          data: {
                            multiplier: G,
                            isFreeGame: !1,
                            canPlaySound: !1,
                          },
                        }),
                        a.push({
                          command: "_playEffectVfx",
                          data: { multiplier: F, isFreeGame: !1 },
                        }),
                        a.push({ command: "_showNormalPayline" }),
                        G > u[0] &&
                          a.push({
                            command: "_playEffectCurrentMultiplier",
                            data: { multiplier: G, isFreeGame: !1 },
                          }),
                        a.push({
                          command: "_updateWinInfo",
                          data: { winAmount: A, multiplier: G },
                        }),
                        a.push({
                          command: "_playEffectNextMultiplier",
                          data: { multiplier: F, isFreeGame: !1 },
                        })),
                      o &&
                        o > 0 &&
                        a.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: o - (_ || 0), time: 300 },
                        }),
                      a.push({
                        command: "_setDropSymbols",
                        data: { isDropSymbols: !0 },
                      }),
                      a.push({ command: "_respinGame" });
                  } else if (y) {
                    if (o && o > 0) {
                      var v = l || 0;
                      a.push({
                        command: "_updateWinningAmount",
                        data: { winAmount: v, time: 300 },
                      });
                    }
                    a.push({ command: "_allowTouchSymbol", data: !1 }),
                      a.push({
                        command: "_showCutscene",
                        data: {
                          name: t.IntroFreeResume,
                          content: { freeSpinRemain: h ? m - 1 : m },
                        },
                      }),
                      a.push({
                        command: "_showSpinTimes",
                        data: { spinTimes: h ? m - 1 : m },
                      }),
                      a.push({
                        command: "_playEffectTransitionSlotButton",
                        data: { isFreeGame: !0 },
                      }),
                      a.push({
                        command: "_playAnimTransform",
                        data: { isFreeGame: !0 },
                      });
                    var b = o - (l || 0);
                    a.push({
                      command: "_updateWinningAmount",
                      data: { winAmount: b, time: 300 },
                    }),
                      a.push({
                        command: "_playEffectChangeMultiplier",
                        data: { isFreeGame: !0, isResume: !0 },
                      }),
                      a.push({ command: "_hideNormalSpinTimes" }),
                      a.push({
                        command: "_newGameMode",
                        data: {
                          name: i.FreeGame,
                          data: {
                            matrix: S,
                            isResume: !0,
                            isDropSymbols: 42 == w || (c && c.length > 0),
                          },
                        },
                      }),
                      a.push({
                        command: "_resumeGameMode",
                        data: { name: i.NormalGame },
                      }),
                      a.push({
                        command: "_showSpinTimes",
                        data: { spinTimes: 0 },
                      }),
                      a.push({ command: "_updateLastedWinningAmount" }),
                      a.push({
                        command: "_playEffectTransitionSlotButton",
                        data: { isFreeGame: !1 },
                      }),
                      a.push({
                        command: "_playAnimTransform",
                        data: { isFreeGame: !1 },
                      }),
                      a.push({
                        command: "_hideCurrentGameModeMultiplier",
                        data: { isFreeGame: !1 },
                      }),
                      a.push({ command: "_clearPaylines" }),
                      a.push({ command: "_updateWallet" }),
                      a.push({ command: "_gameRestart" });
                  }
                  return a;
                }),
                (m.makeScriptResultReceive = function () {
                  var a = [],
                    e = this.node.dataStore.playSession,
                    n = e.normalGameMatrix,
                    m = e.matrix,
                    t = e.subState,
                    i = e.isFinished,
                    o = e.payLines,
                    s = e.multiplier,
                    p = !1;
                  return (
                    a.push({ command: "_waitingCompletedShowPaylines" }),
                    41 == t &&
                      (a.push({
                        command: "_playEffectVfx",
                        data: { multiplier: s, isFreeGame: p },
                      }),
                      a.push({
                        command: "_playEffectCharActive",
                        data: { multiplier: s, isFreeGame: p },
                      }),
                      a.push({
                        command: "_playEffectNextMultiplier",
                        data: { multiplier: s, isFreeGame: p },
                      })),
                    a.push({
                      command: "_checkPlaySoundSpecialSymbols",
                      data: m,
                    }),
                    a.push({
                      command: "_resultReceive",
                      data: {
                        matrix: m || n,
                        isDropSymbols:
                          41 == t || 42 == t || (o && o.length > 0),
                        isFinished: i,
                      },
                    }),
                    a.push({
                      command: "_disableSpinButton",
                      data: { isReelStop: !0 },
                    }),
                    a.push({ command: "_showResult" }),
                    a
                  );
                }),
                (m.makeScriptShowResults = function () {
                  var a = [],
                    e = this.node.dataStore,
                    n = e.playSession,
                    m = n.winAmount,
                    o = n.isFinished,
                    s = n.winAmountPS,
                    p = n.isEnterFreeGame,
                    r = n.isReSpinNormal,
                    d = n.normalGameMatrix,
                    c = n.payLines,
                    l = n.matrix,
                    h = n.multiplier,
                    _ = e.spinTimes,
                    S = e.betData.getTotalBet(),
                    f = s && s >= 10 * S;
                  if (
                    (a.push({
                      command: "_changeIconSpinFrame",
                      data: { isGray: !0, spinSpeed: 0 },
                    }),
                    a.push({
                      command: "_setUpPaylines",
                      data: { matrix: l || d, payLines: c, multiplier: h },
                    }),
                    c &&
                      c.length > 0 &&
                      (a.push({ command: "_disableSpinButton" }),
                      r && a.push({ command: "_respinGame" }),
                      a.push({ command: "_showNormalPayline" }),
                      h > u[0] &&
                        a.push({
                          command: "_playEffectCurrentMultiplier",
                          data: { multiplier: h, isFreeGame: !1 },
                        }),
                      a.push({
                        command: "_updateWinInfo",
                        data: { winAmount: m, multiplier: h },
                      })),
                    m > 0 &&
                      c &&
                      c.length > 0 &&
                      a.push({
                        command: "_updateWinningAmount",
                        data: { winAmount: s, time: 800 },
                      }),
                    s &&
                      s > 0 &&
                      !0 === e.isTrialMode &&
                      o &&
                      a.push({ command: "_updateTrialWallet", data: s }),
                    r)
                  )
                    return (
                      a.push({
                        command: "_setDropSymbols",
                        data: { isDropSymbols: !0 },
                      }),
                      a
                    );
                  if (p) {
                    (e.normalWinAmount = s || 0),
                      f &&
                        (a.push({ command: "_delayTimeScript", data: 0.05 }),
                        a.push({
                          command: "_showUnskippedCutscene",
                          data: {
                            name: t.BigWin,
                            content: { winAmount: s, currentBetData: S },
                          },
                        })),
                      s
                        ? (a.push({
                            command: "_playAnimTotalWin",
                            data: { winAmount: s, playEffectCount: !1 },
                          }),
                          a.push({
                            command: "_updateWinningAmount",
                            data: { winAmount: s, time: 300 },
                          }))
                        : a.push({ command: "_showToolTip" });
                    var y = this.changeNormalMatrixForDisplaying(l || d);
                    a.push({ command: "_showScatterPayLine" }),
                      a.push({
                        command: "_showUnskippedCutscene",
                        data: { name: t.IntroFreeGame, content: { matrix: l } },
                      }),
                      a.push({
                        command: "_showSpinTimes",
                        data: { spinTimes: 10 },
                      }),
                      a.push({
                        command: "_playEffectTransitionSlotButton",
                        data: { isFreeGame: !0 },
                      }),
                      a.push({
                        command: "_playAnimTransform",
                        data: { isFreeGame: !0 },
                      }),
                      a.push({
                        command: "_playEffectChangeMultiplier",
                        data: { isFreeGame: !0, isResume: !1 },
                      }),
                      a.push({ command: "_hideNormalSpinTimes" }),
                      a.push({
                        command: "_newGameMode",
                        data: {
                          name: i.FreeGame,
                          data: { matrix: y, isResume: !1 },
                        },
                      }),
                      a.push({
                        command: "_resumeGameMode",
                        data: { name: i.NormalGame },
                      }),
                      a.push({
                        command: "_showSpinTimes",
                        data: { spinTimes: 0 },
                      }),
                      a.push({ command: "_updateLastedWinningAmount" }),
                      a.push({
                        command: "_playEffectTransitionSlotButton",
                        data: { isFreeGame: !1 },
                      }),
                      a.push({ command: "_resumeEffectFromNormal" }),
                      a.push({
                        command: "_playAnimTransform",
                        data: { isFreeGame: !1 },
                      }),
                      a.push({
                        command: "_hideCurrentGameModeMultiplier",
                        data: { isFreeGame: !1 },
                      }),
                      _ &&
                        _ > 0 &&
                        a.push({ command: "_resumeSpinTime", data: _ });
                  } else
                    f &&
                      (a.push({ command: "_showStaticSymbol", data: !0 }),
                      a.push({ command: "_delayTimeScript", data: 0.05 }),
                      a.push({
                        command: "_showUnskippedCutscene",
                        data: {
                          name: t.BigWin,
                          content: { winAmount: s, currentBetData: S },
                        },
                      }),
                      a.push({ command: "_showStaticSymbol", data: !1 })),
                      h > 1 &&
                        a.push({
                          command: "_playAnimTotalWin",
                          data: { winAmount: s, playEffectCount: !0 },
                        }),
                      _ && _ > 0
                        ? a.push({ command: "_resumeSpinTime", data: _ })
                        : a.push({ command: "_resetSpinButton" });
                  return (
                    a.push({ command: "_gameFinish" }),
                    a.push({ command: "_gameRestart" }),
                    a
                  );
                }),
                (m.makeScriptSpinClick = function () {
                  var a,
                    e,
                    n = [],
                    m = this.node.dataStore,
                    t = m.betData.betId,
                    o = m.spinTimes,
                    s = m.isAutoSpin,
                    p = m.promotion,
                    u = m.currentGameMode,
                    r = m.playSession,
                    d = r.freeGameRemain,
                    c = r.freeGame,
                    l = 0;
                  p && ((a = p.promotionRemain), (e = p.promotionBetId)),
                    d && d > 0
                      ? (l = d - 1)
                      : p && a > 0
                      ? ((l = a - 1),
                        n.push({ command: "_updatePromotionRemain", data: l }))
                      : s
                      ? o && o > 0 && (l = o - 1)
                      : (l = 0),
                    (m.spinTimes = l);
                  var h = m.getWalletAfterSpin() >= 0;
                  n.push({ command: "_showTrialButtons", data: !1 }),
                    h || d > 0 || c > 0 || p
                      ? (n.push({ command: "_disableBet" }),
                        n.push({ command: "_clearPaylines" }),
                        u === i.NormalGame &&
                          n.push({ command: "_clearWinAmount" }),
                        n.push({ command: "_updateSpinTimes", data: l }),
                        u !== i.NormalGame ||
                          p ||
                          n.push({ command: "_updateWalletAfterClickSpin" }),
                        n.push({ command: "_pauseWallets" }),
                        n.push({ command: "_pauseTopPlayer" }),
                        !p || d || c
                          ? n.push({
                              command: "_sendSpinToNetwork",
                              data: { currentBetData: t },
                            })
                          : n.push({
                              command: "_sendSpinToNetwork",
                              data: { currentBetData: e },
                            }),
                        n.push({ command: "_spinClick" }))
                      : ((m.spinTimes = 0),
                        (m.isAutoSpin = !1),
                        (n = [
                          { command: "_enableBet" },
                          { command: "_resetSpinButton" },
                          { command: "_showTrialButtons", data: !0 },
                          { command: "_showMessageNoMoney" },
                        ]));
                  var _ = u == i.FreeGame,
                    S = _ ? 3 : 1;
                  return (
                    n.push({ command: "_allowTouchSymbol", data: !1 }),
                    _ ||
                      (n.push({ command: "_hideWinInfo" }),
                      n.push({
                        command: "_resetCharacter",
                        data: { isFreeGame: _ },
                      }),
                      n.push({
                        command: "_playEffectNextMultiplier",
                        data: { multiplier: S, isFreeGame: _ },
                      }),
                      n.push({ command: "_delayTimeScript", data: 0.7 }),
                      n.push({ command: "_resetF2RClick" }),
                      n.push({
                        command: "_updateWinningAmount",
                        data: { winAmount: 0, time: 0 },
                      })),
                    n
                  );
                }),
                (m.makeScriptReSpinClick = function () {
                  var a = [];
                  return (
                    a.push({ command: "_sendFreeSpinToNetwork" }),
                    a.push({ command: "_spinClick" }),
                    a
                  );
                }),
                (m.makeScriptGameRestart = function () {
                  var a = [],
                    e = this.node.dataStore,
                    n = e.playSession,
                    m = n.freeGameRemain,
                    t = n.freeGame,
                    i = n.isReSpinNormal,
                    o = n.isEnterFreeGame,
                    s = n.winAmountPS,
                    p = e.spinTimes,
                    u = e.promotion,
                    r = e.promotionRemain,
                    d = e.betData.getTotalBet();
                  if (
                    (this.scriptUpdateWinAmount(a),
                    a.push({ command: "_clearWaitingShowPaylines" }),
                    a.push({
                      command: "_setDropSymbols",
                      data: { isDropSymbols: !1 },
                    }),
                    a.push({
                      command: "_changeIconSpinFrame",
                      data: { isGray: !0, spinSpeed: 1 },
                    }),
                    u &&
                      u > 0 &&
                      (a.push({ command: "_showTrialButtons", data: !1 }),
                      a.push({ command: "_resetPromotionButtons" })),
                    p && p > 0)
                  ) {
                    if ((m && m > 0) || !u) {
                      if (!i && !o) {
                        var c = s / d;
                        c > 5 &&
                          c <= 10 &&
                          a.push({ command: "_delayTimeScript", data: 2 });
                      }
                      a.push({ command: "_runAutoSpin" });
                    }
                  } else
                    (!r || r <= 0) &&
                      (a.push({ command: "_enableBet" }),
                      a.push({ command: "_exitPromotionMode" }),
                      a.push({ command: "_showTrialButtons", data: !0 }),
                      a.push({ command: "_resetSpinButton" }));
                  return (
                    (!e.isAutoSpin || p <= 0) &&
                      (a.push({ command: "_allowTouchSymbol", data: !0 }),
                      t || a.push({ command: "_resetSpeedIconSpin" }),
                      a.push({ command: "_showIconSpin" })),
                    a.push({ command: "_runAsyncScript" }),
                    a
                  );
                }),
                (m.scriptUpdateWinAmount = function (a) {
                  var e = this.node.dataStore,
                    n = e.playSession,
                    m = n.winAmountPS,
                    t = n.isFinished;
                  e.currentGameMode != i.FreeGame &&
                    (m && m > 0
                      ? a.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: m, time: 800 },
                        })
                      : a.push({ command: "_showToolTip" })),
                    t && a.push({ command: "_resumeWallets" });
                }),
                (m.getNextMultiply = function (a) {
                  void 0 === a && (a = 1);
                  var e = u.indexOf(a);
                  return e < 0
                    ? 0
                    : e < u.length - 1
                    ? u[e + 1]
                    : u[u.length - 1];
                }),
                (m.makeScriptShowTurbo = function () {
                  var a = [],
                    e = this.node.dataStore,
                    n = e.freeGame,
                    m = e.winAmount,
                    i = e.betData.getTotalBet(),
                    o = m && m >= 10 * i;
                  return (
                    this.isAlwaysAutoSpin ||
                      n ||
                      o ||
                      (a.push({
                        command: "_showUnskippedCutscene",
                        data: { name: t.Other },
                      }),
                      (e.isDoneIntroTurbo = !0)),
                    a
                  );
                }),
                (m.changeNormalMatrixForDisplaying = function (a) {
                  for (
                    var e = ["2", "3", "4", "5", "6", "7", "8"], n = [];
                    n.length < 3;

                  ) {
                    var m = e[Math.floor(Math.random() * e.length)];
                    m != a[1][1] && m != a[1][2] && m != a[1][3] && n.push(m);
                  }
                  for (var t = 0, i = [], o = 0; o < a.length; o++) {
                    for (var s = [], p = 0; p < a[o].length; p++) {
                      var u = a[o][p];
                      "A" == u
                        ? (s.push(n[t]), (t = (t + 1) % n.length))
                        : s.push(u);
                    }
                    i.push(s);
                  }
                  return i;
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
  "chunks:///_virtual/MenuBar9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./loadConfigAsync.ts",
    "./CustomType.ts",
    "./utils2.ts",
    "./GameObject.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, o, s, a, r, u, c, l, h, f, b, d, p, v;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (a = t._decorator),
            (r = t.Node),
            (u = t.Vec3),
            (c = t.Button),
            (l = t.tween),
            (h = t.Label),
            (f = t.Toggle);
        },
        function (t) {
          b = t.default;
        },
        function (t) {
          d = t.CustomEvent;
        },
        function (t) {
          p = t.fadeTo;
        },
        function (t) {
          v = t.GameObject;
        },
      ],
      execute: function () {
        var g, w, y, m, P, M, S, O, C, k, I, B, _, E, D, z, T, N, F, U;
        s._RF.push({}, "98b28qnR15JxoTq5I/AbIqP", "MenuBar9937", void 0);
        var L = a.ccclass,
          R = a.property;
        t(
          "MenuBar9937",
          ((g = L("MenuBar9937")),
          (w = R(r)),
          (y = R(r)),
          (m = R(r)),
          (P = R(r)),
          (M = R(r)),
          (S = R(r)),
          (O = R(r)),
          (C = R(r)),
          g(
            ((B = n(
              (I = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, s = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (n = t.call.apply(t, [this].concat(s)) || this),
                    i(n, "btnSoundOn", B, o(n)),
                    i(n, "btnSoundOff", _, o(n)),
                    i(n, "btnMusicOn", E, o(n)),
                    i(n, "btnMusicOff", D, o(n)),
                    i(n, "blockInput", z, o(n)),
                    i(n, "container", T, o(n)),
                    i(n, "moveDuration", N, o(n)),
                    i(n, "bottomUI", F, o(n)),
                    i(n, "toggleNode", U, o(n)),
                    (n.tweenMove = null),
                    (n.showPos = void 0),
                    (n.hidePos = void 0),
                    (n.currentPos = void 0),
                    n
                  );
                }
                e(n, t);
                var s = n.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("SHOW", this.show, this),
                      this.node.on("HIDE", this.hide, this),
                      (this.showPos = this.container.getPosition()),
                      (this.hidePos = new u(
                        this.showPos.x,
                        this.showPos.y - 700,
                        0
                      )),
                      this.addToggleSlowNetWork();
                  }),
                  (s.start = function () {
                    this.init();
                  }),
                  (s.init = function () {
                    var t = this.soundPlayer && this.soundPlayer.isEnableBGM,
                      n = this.soundPlayer && this.soundPlayer.isEnableSFX;
                    this._activeButtonMusic(t),
                      this._activeButtonSound(n),
                      this.container.setPosition(this.hidePos),
                      (this.blockInput.active = !1),
                      (this.container.active = !1);
                  }),
                  (s.show = function () {
                    var t = this;
                    this.node.isShowing ||
                      ((this.node.isShowing = !0),
                      this.container.setPosition(this.hidePos),
                      this.tweenMove && this.tweenMove.stop(),
                      (this.blockInput.active = !0),
                      (this.blockInput.getComponent(c).interactable = !1),
                      (this.container.active = !0),
                      (this.tweenMove = l(this.container)
                        .call(function () {
                          p(t.bottomUI, t.moveDuration, 0);
                        })
                        .to(
                          this.moveDuration,
                          { position: this.showPos },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          (t.bottomUI.active = !1),
                            (t.tweenMove = null),
                            (t.blockInput.getComponent(c).interactable = !0);
                        })),
                      this.tweenMove.start());
                  }),
                  (s.hide = function () {
                    var t = this;
                    this.node.isShowing &&
                      ((this.blockInput.getComponent(c).interactable = !1),
                      (this.bottomUI.active = !0),
                      this.tweenMove && this.tweenMove.stop(),
                      (this.tweenMove = l(this.container)
                        .call(function () {
                          p(t.bottomUI, t.moveDuration, 255);
                        })
                        .to(
                          this.moveDuration,
                          { position: this.hidePos },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          (t.blockInput.active = !1),
                            (t.container.active = !1),
                            (t.node.isShowing = !1),
                            (t.tweenMove = null);
                        })),
                      this.tweenMove.start());
                  }),
                  (s.clickSoundOn = function () {
                    this._activeButtonSound(!1),
                      this.soundPlayer.setEffectEnable(!1),
                      this.soundPlayer.playSFXClick();
                  }),
                  (s.clickSoundOff = function () {
                    this._activeButtonSound(!0),
                      this.soundPlayer.setEffectEnable(!0),
                      this.soundPlayer.playSFXClick();
                  }),
                  (s.clickMusicOn = function () {
                    this._activeButtonMusic(!1),
                      this.soundPlayer.setBgmEnable(!1),
                      this.soundPlayer.playSFXClick();
                  }),
                  (s.clickMusicOff = function () {
                    this._activeButtonMusic(!0),
                      this.soundPlayer.setBgmEnable(!0),
                      this.soundPlayer.playSFXClick();
                  }),
                  (s._activeButtonMusic = function (t) {
                    (this.btnMusicOff.active = !t),
                      (this.btnMusicOn.active = t);
                  }),
                  (s._activeButtonSound = function (t) {
                    (this.btnSoundOff.active = !t),
                      (this.btnSoundOn.active = t);
                  }),
                  (s.addToggleSlowNetWork = function () {
                    var t = this;
                    if (!b.getConfig().IS_PRODUCTION && globalThis.CC_DEBUG) {
                      var n = new r();
                      n.addComponent(h),
                        (n.getComponent(h).fontSize = 18),
                        n.setParent(this.toggleNode),
                        (n.getComponent(h).string = "");
                      var e = this.toggleNode.getComponent(f);
                      (e.isChecked = !1),
                        this.toggleNode.on(
                          "toggle",
                          function () {
                            var i = e.isChecked ? "SLOW NETWORK" : "";
                            n.getComponent(h).string = i;
                            var o = new d("FORCE_NETWORK_GLT", !0);
                            (o.userData = { isForced: e.isChecked }),
                              t.node.dispatchEvent(o);
                          },
                          this
                        );
                    }
                  }),
                  n
                );
              })(v)).prototype,
              "btnSoundOn",
              [w],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (_ = n(I.prototype, "btnSoundOff", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = n(I.prototype, "btnMusicOn", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = n(I.prototype, "btnMusicOff", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = n(I.prototype, "blockInput", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = n(I.prototype, "container", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = n(I.prototype, "moveDuration", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.3;
              },
            })),
            (F = n(I.prototype, "bottomUI", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = n(I.prototype, "toggleNode", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = I))
          ) || k)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MultiplierController9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var i, e, n, a, r, s, o, l, c, u, h, f, m;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (s = t._decorator),
            (o = t.sp),
            (l = t.SpriteFrame),
            (c = t.Node),
            (u = t.Sprite),
            (h = t.tween),
            (f = t.v3);
        },
        function (t) {
          m = t.GameObject;
        },
      ],
      execute: function () {
        var p, d, y, v, b, E, M, L, x, O, A, F, g, S;
        r._RF.push(
          {},
          "b2a50NhbE1Lbaxaun8/euaQ",
          "MultiplierController9937",
          void 0
        );
        var _ = s.ccclass,
          I = s.property,
          C = ["orb_", "text_"],
          w = ["_static", "_in", "_appear", "grey"],
          N = [1, 2, 3, 5],
          T = [3, 6, 9, 20];
        t(
          "MultiplierController9937",
          ((p = _("MultiplierController9937")),
          (d = I(o.Skeleton)),
          (y = I(o.Skeleton)),
          (v = I(l)),
          (b = I(l)),
          (E = I(c)),
          p(
            ((x = i(
              (L = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, r = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(r)) || this),
                    n(i, "isFreeMode", x, a(i)),
                    n(i, "animOrbs", O, a(i)),
                    n(i, "animExplodes", A, a(i)),
                    n(i, "frameMulNormalList", F, a(i)),
                    n(i, "frameMulGrayList", g, a(i)),
                    n(i, "spriteMulList", S, a(i)),
                    (i.isFirstLoad = !0),
                    (i.fullyLoaded = !0),
                    (i.mulArray = void 0),
                    (i.mulIndex = void 0),
                    (i.isFreeGame = void 0),
                    (i.tweenEffectOrb = void 0),
                    i
                  );
                }
                e(i, t);
                var r = i.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "CLASSIFY_MULTIPLIER",
                        this.classifyMultiplier,
                        this
                      ),
                      this.node.on(
                        "ACTIVE_MULTIPLIER",
                        this.activeMultiplier,
                        this
                      ),
                      this.node.on(
                        "PLAY_EFFECT_EXPLODE",
                        this.playEffectExplode,
                        this
                      ),
                      this.node.on(
                        "PLAY_EFFECT_CHANGE_MULTIPLIER",
                        this.playEffectChangeMultiplier,
                        this
                      ),
                      this.node.on("RESET_ALL", this.reset, this),
                      this.node.on(
                        "RESUME_MULTIPLY",
                        this.resumeMultiply,
                        this
                      ),
                      this.hideExplodeNode(),
                      this.reset(),
                      this.isFreeMode ? this.hide() : this.show();
                  }),
                  (r.hide = function () {
                    this.node.active = !1;
                  }),
                  (r.show = function () {
                    this.node.active = !0;
                  }),
                  (r.reset = function () {
                    var t = this,
                      i = C[0] + w[3];
                    this.animOrbs.forEach(function (e) {
                      t.setOpacity(e.node, 255), e.setAnimation(0, i, !0);
                    }),
                      this.spriteMulList.forEach(function (i, e) {
                        t.setOpacity(i, 255),
                          (i.getComponent(u).spriteFrame =
                            t.frameMulGrayList[e]);
                      });
                  }),
                  (r.hideExplodeNode = function () {
                    var t = this;
                    this.animExplodes.forEach(function (i) {
                      t.setOpacity(i.node, 0), (i.node.active = !1);
                    });
                  }),
                  (r.classifyMultiplier = function (t, i) {
                    if ((void 0 === i && (i = !1), t)) {
                      this.mulArray = i ? T : N;
                      var e = this.mulArray.indexOf(t),
                        n = e + 1;
                      if (this.mulIndex && n == this.mulIndex) {
                        var a = C[0] + "x" + n;
                        return (
                          (this.spriteMulList[e].getComponent(u).spriteFrame =
                            this.frameMulNormalList[e]),
                          void (
                            (1 != n && 4 != n) ||
                            this.animOrbs[e].setAnimation(0, a, !0)
                          )
                        );
                      }
                      if (((this.mulIndex = n), this.isFirstLoad && !i)) {
                        this.isFirstLoad = !1;
                        var r = C[0] + "x" + n;
                        this.animOrbs[0].setAnimation(0, r, !0),
                          this.changeFrame(0, !1);
                      } else this.activeMultiplier(this.mulIndex);
                    }
                  }),
                  (r.activeMultiplier = function (t) {
                    if (t) {
                      this.reset();
                      var i = t - 1;
                      this.playAnimMul(t, this.animOrbs[i]),
                        this.changeFrame(i, !1),
                        this.playEffectScale(i, null, 2 / 3);
                    }
                  }),
                  (r.playAnimMul = function (t, i) {
                    var e = C[0] + "x" + t + w[1],
                      n = C[0] + "x" + t + w[2],
                      a = C[0] + "x" + t,
                      r = this.dataStore.modeTurbo;
                    (i.timeScale = r ? 1.2 : 1),
                      i.setAnimation(0, n, !1),
                      i.addAnimation(0, e, !1),
                      i.addAnimation(0, a, !0);
                  }),
                  (r.playEffectScale = function (t, i, e) {
                    void 0 === i && (i = null),
                      void 0 === e && (e = 4 / 9),
                      (e = this.dataStore.modeTurbo ? 0.3 : e),
                      h(this.spriteMulList[t])
                        .to(e / 2, { scale: f(1.5, 1.5, 1.5) })
                        .to(e / 2, { scale: f(1, 1, 1) })
                        .call(function () {
                          i && i();
                        })
                        .start();
                  }),
                  (r.playEffectExplode = function (t, i, e) {
                    var n = this;
                    if ((void 0 === e && (e = null), t)) {
                      this.mulArray = i ? T : N;
                      var a = this.mulArray.indexOf(t),
                        r = this.animExplodes[a].node;
                      (r.active = !0),
                        this.setOpacity(r, 255),
                        this.animExplodes[a].setAnimation(0, "text_appear", !1),
                        this.playEffectScale(a),
                        this.scheduleOnce(function () {
                          n.hideExplodeNode(), e && e();
                        }, 0.75);
                    } else e && e();
                  }),
                  (r.playEffectChangeMultiplier = function (t, i, e) {
                    var n = this;
                    if (
                      (void 0 === t && (t = !0),
                      void 0 === i && (i = !1),
                      void 0 === e && (e = null),
                      this.setOpacity(this.node, 255),
                      i)
                    )
                      return this.reset(), void (e && e());
                    this.isFreeGame = t;
                    var a = C[0] + w[3],
                      r = C[0] + "x1";
                    this.tweenEffectOrb && this.tweenEffectOrb.stop(),
                      (this.tweenEffectOrb = h(this.node)
                        .call(function () {
                          n.changeFrame(0, !1),
                            n.playEffectScale(0, function () {
                              n.changeFrame(0, !1);
                            });
                          var t = C[0] + "x1" + w[1],
                            i = C[0] + "x1" + w[2],
                            e = n.animOrbs[0];
                          n.setOpacity(e.node, 255),
                            e.setMix(i, t, 0.1),
                            e.setAnimation(0, i, !1),
                            e.addAnimation(0, r, !0);
                        })
                        .delay(0.1)
                        .call(function () {
                          n.changeFrame(1, !1),
                            n.playEffectScale(1, function () {});
                          var t = C[0] + "x2" + w[2],
                            i = n.animOrbs[1];
                          n.setOpacity(i.node, 255), i.setAnimation(0, t, !1);
                        })
                        .delay(0.1)
                        .call(function () {
                          n.changeFrame(2, !1),
                            n.playEffectScale(2, function () {});
                          var t = C[0] + "x3" + w[2],
                            i = n.animOrbs[2];
                          n.setOpacity(i.node, 255), i.setAnimation(0, t, !1);
                        })
                        .delay(0.1)
                        .call(function () {
                          n.changeFrame(3, !1),
                            n.playEffectScale(3, function () {});
                          var t = C[0] + "x4" + w[2],
                            i = n.animOrbs[3];
                          n.setOpacity(i.node, 255), i.setAnimation(0, t, !1);
                        })
                        .delay(5 / 9)
                        .call(function () {
                          e && e();
                        })
                        .delay(2 / 9)
                        .call(function () {
                          n.changeFrame(3, !0),
                            n.animOrbs[3].setAnimation(0, a, !0);
                        })
                        .delay(0.1)
                        .call(function () {
                          n.changeFrame(2, !0),
                            n.animOrbs[2].setAnimation(0, a, !0);
                        })
                        .delay(0.1)
                        .call(function () {
                          n.changeFrame(1, !0),
                            n.animOrbs[1].setAnimation(0, a, !0);
                        })
                        .start());
                  }),
                  (r.changeFrame = function (t, i) {
                    var e = i ? this.frameMulGrayList : this.frameMulNormalList;
                    (this.spriteMulList[t].getComponent(u).spriteFrame = e[t]),
                      this.setOpacity(this.spriteMulList[t], 255);
                  }),
                  (r.resumeMultiply = function (t, i) {
                    this.reset(), (this.mulArray = i ? T : N);
                    var e = this.mulArray.indexOf(t),
                      n = e + 1;
                    if (((this.mulIndex = n), -1 != e)) {
                      var a = C[0] + "x" + this.mulIndex;
                      (this.spriteMulList[e].getComponent(u).spriteFrame =
                        this.frameMulNormalList[e]),
                        this.animOrbs[e].setAnimation(0, a, !0);
                    }
                  }),
                  i
                );
              })(m)).prototype,
              "isFreeMode",
              [I],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              }
            )),
            (O = i(L.prototype, "animOrbs", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (A = i(L.prototype, "animExplodes", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (F = i(L.prototype, "frameMulNormalList", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (g = i(L.prototype, "frameMulGrayList", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = i(L.prototype, "spriteMulList", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (M = L))
          ) || M)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PayLineInfoMini9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
  ],
  function (i) {
    "use strict";
    var t, n, e, o, a, r, s, c, u;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (n = i.inheritsLoose),
            (e = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (a = i.cclegacy), (r = i._decorator), (s = i.Label);
        },
        function (i) {
          c = i.formatWalletMoney;
        },
        function (i) {
          u = i.GameObject;
        },
      ],
      execute: function () {
        var l, h, p, f, y;
        a._RF.push(
          {},
          "64b496CiwJF2677Yf7zaH9V",
          "PayLineInfoMini9937",
          void 0
        );
        var d = r.ccclass,
          L = r.property;
        i(
          "PayLineInfoMini9937",
          ((l = d("PayLineInfoMini9937")),
          (h = L(s)),
          l(
            ((y = t(
              (f = (function (i) {
                function t() {
                  for (
                    var t, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (t = i.call.apply(i, [this].concat(a)) || this),
                    e(t, "winMoneyLbL", y, o(t)),
                    t
                  );
                }
                n(t, i);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on("UPDATE_DATA", this.updateData.bind(this)),
                      this.node.on("SHOW", this.show.bind(this)),
                      this.node.on("HIDE", this.hide.bind(this));
                  }),
                  (a.updateData = function (i) {
                    this.winMoneyLbL.string = c(i);
                  }),
                  (a.show = function () {
                    this.setOpacity(this.node, 255);
                  }),
                  (a.hide = function () {
                    this.setOpacity(this.node, 1);
                  }),
                  t
                );
              })(u)).prototype,
              "winMoneyLbL",
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
            (p = f))
          ) || p)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetCellHistory9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotBetCellHistory.ts"],
  function (t) {
    "use strict";
    var e, r, o, i, n, a, l, u, s;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (r = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy), (a = t._decorator), (l = t.Node), (u = t.Label);
        },
        function (t) {
          s = t.SlotBetCellHistory;
        },
      ],
      execute: function () {
        var c, p, h, m, f, y, g;
        n._RF.push(
          {},
          "54c17dxQBhItrJr6AmfP+ua",
          "SlotBetCellHistory9937",
          void 0
        );
        var d = a.ccclass,
          S = a.property;
        function H(t) {
          return t < 10 && (t = "0" + t), t;
        }
        t(
          "SlotBetCellHistory9937",
          ((c = d("SlotBetCellHistory9937")),
          (p = S({ type: l })),
          (h = S({ displayName: "hourFormat", visible: !0 })),
          c(
            ((y = e(
              (f = (function (t) {
                function e() {
                  for (
                    var e, r = arguments.length, n = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    n[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(n)) || this),
                    o(e, "hour", y, i(e)),
                    o(e, "hourFormat", g, i(e)),
                    e
                  );
                }
                r(e, t);
                var n = e.prototype;
                return (
                  (n.updateData = function (e, r) {
                    t.prototype.updateData.call(this, e, r),
                      (this.hour.getComponent(u).string = this.formatHourStamp(
                        parseInt(e.time)
                      ));
                  }),
                  (n.formatHourStamp = function (t) {
                    var e = new Date(t),
                      r = H(e.getHours()),
                      o = H(e.getMinutes()),
                      i = H(e.getSeconds());
                    return this.hourFormat
                      ? this.hourFormat
                          .replace("hh", r)
                          .replace("mm", o)
                          .replace("ss", i)
                      : r + ":" + o + ":" + i;
                  }),
                  (n.formatTimeStamp = function (t) {
                    var e = new Date(t);
                    H(e.getHours()), H(e.getMinutes()), H(e.getSeconds());
                    return H(e.getDate()) + "/" + H(e.getMonth() + 1);
                  }),
                  e
                );
              })(s)).prototype,
              "hour",
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
            (g = e(f.prototype, "hourFormat", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "hh:mm:ss";
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
  "chunks:///_virtual/SlotBetHistory9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotBetHistory.ts"],
  function (t) {
    "use strict";
    var e, i, o, n, s, a, r, l, h, c, u;
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
            (a = t._decorator),
            (r = t.Node),
            (l = t.Vec3),
            (h = t.tween),
            (c = t.Label);
        },
        function (t) {
          u = t.SlotBetHistory;
        },
      ],
      execute: function () {
        var p, y, v, d, f, P, w, b, D;
        s._RF.push({}, "0d565ZxTLpGqayjlx+UfCQO", "SlotBetHistory9937", void 0);
        var g = a.ccclass,
          T = a.property;
        t(
          "SlotBetHistory9937",
          ((p = g("SlotBetHistory9937")),
          (y = T(r)),
          (v = T(r)),
          (d = T({ displayName: "moveDuration", visible: !0 })),
          p(
            ((w = e(
              (P = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    o(e, "blockInput", w, n(e)),
                    o(e, "container", b, n(e)),
                    o(e, "moveDuration", D, n(e)),
                    (e.tweenMove = null),
                    (e.showPos = void 0),
                    (e.hidePos = void 0),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.showPos = this.container.getPosition()),
                      (this.hidePos = new l(
                        this.showPos.x,
                        this.showPos.y - 1560,
                        0
                      )),
                      this.container.setPosition(this.hidePos);
                  }),
                  (s.openPanel = function () {
                    var e = this;
                    t.prototype.openPanel.call(this),
                      this.updatePageIndex(),
                      (this.blockInput.active = !0),
                      (this.container.active = !0),
                      this.tweenMove && this.tweenMove.stop(),
                      (this.tweenMove = h(this.container)
                        .to(
                          this.moveDuration,
                          { position: this.showPos },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          e.tweenMove = null;
                        })),
                      this.tweenMove.start();
                  }),
                  (s.hidePanel = function () {
                    var t = this;
                    this.tweenMove && this.tweenMove.stop(),
                      (this.tweenMove = h(this.container)
                        .to(
                          this.moveDuration,
                          { position: this.hidePos },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          (t.node.active = !1),
                            t.node.emit("HIDE"),
                            (t.blockInput.active = !1),
                            (t.container.active = !1),
                            (t.tweenMove = null);
                        })),
                      this.tweenMove.start();
                  }),
                  (s.onHideBetDetail = function () {
                    this.historyTable && (this.historyTable.active = !0),
                      this.historyDetail &&
                        (this.historyDetail.setPosition(new l(720)),
                        (this.historyDetail.active = !1),
                        this.historyDetail.emit("RESET_UI")),
                      this.historyTableTitle &&
                        this.historyDetailTitle &&
                        (this.historyTableTitle.active = !0),
                      this.historyTableTitle &&
                        this.historyDetailTitle &&
                        (this.historyDetailTitle.active = !1);
                  }),
                  (s.updatePageIndex = function () {
                    this.totalPage &&
                      (this.pageIndexView.getComponent(c).string =
                        this.currentPage + "/" + this.totalPage);
                  }),
                  (s.openBetDetail = function (t) {
                    this.historyTable && (this.historyTable.active = !1),
                      this.historyDetail &&
                        ((this.historyDetail.active = !0),
                        this.historyDetail.emit("OPEN_BET_DETAIL", t.userData)),
                      (t.propagationStopped = !0);
                  }),
                  (s.onRequestResponse = function (e) {
                    t.prototype.onRequestResponse.call(this, e),
                      this.updatePageIndex();
                  }),
                  (s.onRequestBetResponse = function (e) {
                    t.prototype.onRequestBetResponse.call(this, e),
                      this.updatePageIndex();
                  }),
                  e
                );
              })(u)).prototype,
              "blockInput",
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
            (b = e(P.prototype, "container", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(P.prototype, "moveDuration", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1;
              },
            })),
            (f = P))
          ) || f)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetHistoryDetail9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./globalNetwork.ts",
    "./CustomTypeShare.ts",
    "./loadConfigAsync.ts",
    "./serviceRest.ts",
    "./GameObject.ts",
    "./BetHistoryDetailPage9937.ts",
  ],
  function (t) {
    "use strict";
    var e, i, s, a, n, r, o, l, h, c, u, g, d, p, P, D, v, f, m, b, y, B;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (s = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy),
            (r = t._decorator),
            (o = t.Label),
            (l = t.Node),
            (h = t.CCFloat),
            (c = t.find),
            (u = t.Camera),
            (g = t.Button),
            (d = t.tween),
            (p = t.v3),
            (P = t.Vec3),
            (D = t.Vec2);
        },
        function (t) {
          v = t.default;
        },
        function (t) {
          f = t.CustomEvent;
        },
        function (t) {
          m = t.default;
        },
        function (t) {
          b = t.default;
        },
        function (t) {
          y = t.GameObject;
        },
        function (t) {
          B = t.BetHistoryDetailPage9937;
        },
      ],
      execute: function () {
        var T,
          k,
          w,
          I,
          C,
          S,
          x,
          M,
          L,
          E,
          _,
          R,
          z,
          q,
          A,
          F,
          N,
          U,
          H,
          O,
          V,
          W,
          Y,
          G,
          j,
          Q,
          K,
          X,
          Z;
        n._RF.push(
          {},
          "6c3a2ElAqxLqpHL4XfafhZI",
          "SlotBetHistoryDetail9937",
          void 0
        );
        var J = r.ccclass,
          $ = r.property,
          tt = 720,
          et = "Quay Thường",
          it = "Quay Miễn Phí";
        function st(t) {
          return t < 10 && (t = "0" + t), t;
        }
        t(
          "SlotBetHistoryDetail9937",
          ((T = J("SlotBetHistoryDetail9937")),
          (k = $({ type: o })),
          (w = $({ type: o })),
          (I = $({ type: l })),
          (C = $({ type: l })),
          (S = $({ type: l })),
          (x = $({ type: l })),
          (M = $({ type: l })),
          (L = $({ type: l })),
          (E = $({ type: B })),
          (_ = $({ type: h })),
          (R = $({ type: o })),
          (z = $({ type: l })),
          (q = $({ type: l })),
          T(
            ((N = e(
              (F = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(n)) || this),
                    s(e, "title", N, a(e)),
                    s(e, "time", U, a(e)),
                    s(e, "backBtn", H, a(e)),
                    s(e, "nextBtn", O, a(e)),
                    s(e, "loading", V, a(e)),
                    s(e, "errorMessage", W, a(e)),
                    s(e, "noBetDetail", Y, a(e)),
                    s(e, "closeButton", G, a(e)),
                    s(e, "detailPages", j, a(e)),
                    s(e, "durationTransition", Q, a(e)),
                    s(e, "sessionID", K, a(e)),
                    s(e, "touchView", X, a(e)),
                    s(e, "serverMessage", Z, a(e)),
                    (e.lastDetailPage = void 0),
                    (e.currentDetailPage = void 0),
                    (e.currentPage = void 0),
                    (e.lastPage = void 0),
                    (e.itemPerPage = void 0),
                    (e.totalPages = void 0),
                    (e.timeFormat = void 0),
                    (e.indexUsedPage = void 0),
                    (e.listResultData = void 0),
                    (e.token = void 0),
                    (e.tokenType = void 0),
                    (e.userId = void 0),
                    (e._closeTween = void 0),
                    (e.sessionData = void 0),
                    (e.sessionId = void 0),
                    (e.isLoadDetailPage = void 0),
                    (e.canvas = void 0),
                    (e.camera = void 0),
                    (e.round = void 0),
                    (e.turn = void 0),
                    (e.curPoint = void 0),
                    (e.pointerClick = void 0),
                    (e.pointerMove = void 0),
                    (e.touchStartPoint = void 0),
                    (e.blockShortTime = void 0),
                    (e.timeBlock = void 0),
                    e
                  );
                }
                i(e, t);
                var n = e.prototype;
                return (
                  (n.onEnable = function () {
                    this.serverMessage && (this.serverMessage.active = !1);
                  }),
                  (n.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.canvas = c("Canvas")),
                      this.canvas &&
                        (this.camera = this.canvas.getComponentInChildren(u)),
                      this.node.on("OPEN_BET_DETAIL", this.openBetDetail, this),
                      this.node.on(
                        "DISABLE_CLOSE",
                        this.disableClose.bind(this)
                      ),
                      this.node.on("CLOSE_NOTICE", this.closeNotice, this),
                      this.node.on("SET_TOKEN", this.setToken, this),
                      (this.setToken = this.setToken.bind(this)),
                      this.assignVariable();
                  }),
                  (n.assignVariable = function () {
                    (this.lastDetailPage = null),
                      (this.currentDetailPage = null),
                      (this.currentPage = -1),
                      (this.lastPage = -1),
                      (this.itemPerPage = 5),
                      (this.totalPages = 0),
                      (this.timeFormat = "DD/MM hh:mm:ss"),
                      (this.indexUsedPage = 0),
                      (this.listResultData = new Map());
                  }),
                  (n.setToken = function (t, e, i) {
                    (this.token = t), (this.tokenType = e), (this.userId = i);
                  }),
                  (n.openLastBetDetail = function () {
                    0 == this.currentPage
                      ? this.openBetDetail(this.sessionData, null)
                      : (this.closeNotice(),
                        this.setOpacity(this.node, 255),
                        1 == this.totalPages
                          ? ((this.nextBtn.active = !1),
                            (this.backBtn.active = !1))
                          : this.currentPage == this.totalPages - 1
                          ? ((this.nextBtn.getComponent(g).interactable = !1),
                            (this.nextBtn.active = !1),
                            (this.backBtn.active = !0),
                            (this.backBtn.getComponent(g).interactable = !0))
                          : 0 == this.currentPage
                          ? ((this.backBtn.getComponent(g).interactable = !1),
                            (this.backBtn.active = !1),
                            (this.nextBtn.active = !0),
                            (this.nextBtn.getComponent(g).interactable = !0))
                          : ((this.backBtn.active = !0),
                            (this.nextBtn.active = !0),
                            (this.nextBtn.getComponent(g).interactable = !0),
                            (this.backBtn.getComponent(g).interactable = !0)));
                  }),
                  (n.openBetDetail = function (t, e) {
                    void 0 === e && (e = null),
                      (this.nextBtn.getComponent(g).interactable = !1),
                      (this.backBtn.getComponent(g).interactable = !1),
                      (this.sessionData = t),
                      this.resetTitleInfo(),
                      this.setOpacity(this.node, 255),
                      this._closeTween &&
                        (this._closeTween.stop(), (this._closeTween = null)),
                      this.resetBoard(),
                      this.resetDetailPages(),
                      this.requestTotalPage(),
                      this.renderFirstDetailPage(e),
                      (this.round = 1),
                      (this.turn = 1);
                  }),
                  (n.resetTitleInfo = function () {
                    (this.time.string = ""),
                      (this.title.string = ""),
                      (this.sessionID.string = "");
                  }),
                  (n.resetBoard = function () {
                    (this.currentPage = -1),
                      (this.lastPage = -1),
                      (this.totalPages = 0),
                      (this.indexUsedPage = 0),
                      (this.listResultData = new Map());
                  }),
                  (n.requestTotalPage = function () {
                    var t = this.token || v.getToken(),
                      e = m.getConfig().API_URL,
                      i = { Authorization: t, "token-type": "user" };
                    this.tokenType && (i["token-type"] = this.tokenType),
                      this.userId && (i["user-id"] = this.userId);
                    var s = {
                      serviceId: this.config.GAME_ID,
                      psId: this.sessionData.sessionId,
                    };
                    b.getWithHeader({
                      url: "history/getHistoryUserSpinSummary",
                      params: s,
                      callback: this.onTotalDetailResponse.bind(this),
                      callbackErr: this.requestErr.bind(this),
                      headers: i,
                      apiUrl: e,
                    }),
                      (this.sessionId = this.sessionData.sessionId);
                  }),
                  (n.onTotalDetailResponse = function (t) {
                    if (t.error && t.error.msg)
                      this.loading && (this.loading.active = !1),
                        (this.serverMessage.active = !0),
                        (this.serverMessage.getComponentInChildren(o).string =
                          t.error.msg);
                    else if (
                      t.data &&
                      t.data.resultList &&
                      t.data.resultList.length > 0
                    )
                      (this.sessionData.summaryData = t.data.resultList[0]),
                        (this.sessionData.scroll = t.data.scroll),
                        (this.sessionData.summaryData.sessionId =
                          this.sessionData.sessionId),
                        this.renderDetailPage();
                    else {
                      if (this.sessionData)
                        throw new Error(
                          "Null summary data: " + this.sessionData.sessionId
                        );
                      this.requestErr();
                    }
                  }),
                  (n.renderTotalPage = function () {}),
                  (n.renderFirstDetailPage = function (t) {
                    void 0 === t && (t = null),
                      (this.currentPage = 0),
                      (this.nextBtn.active = !1),
                      (this.backBtn.active = !1),
                      this.requestDetail(this.sessionId, this.currentPage),
                      this.setOpacity(this.node, 255),
                      d(this.node)
                        .to(this.durationTransition, { position: p(0, 0) })
                        .call(function () {
                          t && t();
                        })
                        .start();
                  }),
                  (n.onNextDetailPage = function () {
                    this.blockShortTime ||
                      ((this.blockShortTime = !0),
                      (this.timeBlock = 0.3),
                      this.currentPage < this.totalPages - 1 &&
                        (this.currentPage++,
                        this.requestDetail(this.sessionId, this.currentPage)));
                  }),
                  (n.onPreviousDetailPage = function () {
                    this.blockShortTime ||
                      ((this.blockShortTime = !0),
                      (this.timeBlock = 0.3),
                      this.currentPage > 0 &&
                        (this.currentPage--,
                        this.requestDetail(this.sessionId, this.currentPage)));
                  }),
                  (n.requestDetail = function (t, e, i) {
                    void 0 === i && (i = "history/getHistoryUserSpinDetails"),
                      this.playLoading(),
                      (this.nextBtn.getComponent(g).interactable = !1),
                      (this.backBtn.getComponent(g).interactable = !1);
                    var s = m.getConfig().API_URL;
                    if (this.listResultData && this.listResultData.has(e))
                      return (
                        this.loading && (this.loading.active = !1),
                        void this.renderDetailPage()
                      );
                    this.sessionId = t;
                    var a = e,
                      n = {
                        Authorization: this.token || v.getToken(),
                        "token-type": "user",
                      };
                    this.tokenType && (n["token-type"] = this.tokenType),
                      this.userId && (n["user-id"] = this.userId);
                    var r = {
                      serviceId: this.config.GAME_ID,
                      from: a,
                      size: this.itemPerPage,
                      psId: t,
                      scroll: !0,
                    };
                    b.getWithHeader({
                      url: i,
                      params: r,
                      callback: this.onRequestDetailResponse.bind(this),
                      callbackErr: this.requestErr.bind(this),
                      headers: n,
                      apiUrl: s,
                    });
                  }),
                  (n.lateUpdate = function (t) {
                    this.blockShortTime &&
                      ((this.timeBlock -= t),
                      this.timeBlock < 0 && (this.blockShortTime = !1));
                  }),
                  (n.onRequestDetailResponse = function (t) {
                    if (
                      (this.loading && (this.loading.active = !1),
                      t.error && t.error.msg)
                    )
                      return (
                        (this.serverMessage.active = !0),
                        void (this.serverMessage.getComponentInChildren(
                          o
                        ).string = t.error.msg)
                      );
                    if (t.error || !t.data || t.data.resultList.length <= 0)
                      this.noBetDetail.active = !0;
                    else {
                      (this.noBetDetail.active = !1),
                        (this.totalPages = t.data.total),
                        (this.currentPage = t.data.from);
                      for (
                        var e = t.data.from, i = 0;
                        i < t.data.resultList.length;
                        i++
                      ) {
                        if (!this.listResultData.has(e)) {
                          var s = t.data.resultList[i],
                            a = s.remainingFreeSpins,
                            n = s.winAmount,
                            r = s.result.subState;
                          1 == r ? (this.round = 1) : 41 == r && this.round++;
                          var l = n && n > 0 ? 11 : 10;
                          2 == r
                            ? ((this.round = 1),
                              (this.turn = a > 0 ? l - a : 10))
                            : 42 == r && this.round++,
                            (s.round = this.round),
                            (s.turn = this.turn),
                            this.listResultData.set(e, s);
                        }
                        e++;
                      }
                      this.renderDetailPage();
                    }
                  }),
                  (n.resetDetailPages = function () {
                    for (var t = 0; t < this.detailPages.length; t++)
                      (this.detailPages[t].node.position = p(t * tt, 0, 0)),
                        this.detailPages[t].hideInfoDetailPage();
                    (this.currentDetailPage = null),
                      (this.lastPage = this.currentPage = -1);
                  }),
                  (n.requestErr = function () {
                    console.log("err"),
                      this.loading && (this.loading.active = !1),
                      this.errorMessage && (this.errorMessage.active = !0);
                  }),
                  (n.renderDetailPage = function () {
                    var t = this;
                    if (
                      this.listResultData &&
                      (!this.listResultData || 0 != this.listResultData.size) &&
                      this.sessionData &&
                      this.sessionData.summaryData &&
                      !this.isLoadDetailPage
                    ) {
                      var e = this.listResultData.get(this.currentPage);
                      if (e) {
                        var i,
                          s,
                          a = e.timestamp,
                          n = e.result.subState,
                          r = this.sessionData.summaryData.sessionId;
                        n && (this.title.string = 1 == n || 41 == n ? et : it),
                          a && (this.time.string = this.formatTimeStamp(a)),
                          r && (this.sessionID.string = "Phiên: " + r);
                        var o = this.listResultData.get(this.currentPage - 1);
                        o &&
                          ((i = o.result.totalWinSymbol),
                          (s = o.result.numberWinFeatures));
                        var l = {
                          lastedNumberWinFeatures: s,
                          lastedWonSymbol: i,
                          currentPage: this.currentPage,
                          totalPages: this.totalPages,
                        };
                        if (this.currentDetailPage) {
                          if (
                            ((this.lastDetailPage = this.currentDetailPage),
                            (this.indexUsedPage =
                              (this.indexUsedPage + 1) %
                              this.detailPages.length),
                            (this.currentDetailPage =
                              this.detailPages[this.indexUsedPage]),
                            this.currentDetailPage.hideInfoDetailPage(),
                            this.currentDetailPage.updateData(
                              e,
                              this.sessionData.summaryData,
                              l
                            ),
                            this.lastPage > this.currentPage)
                          ) {
                            var h = new P(tt, 0);
                            d(this.lastDetailPage.node)
                              .to(this.durationTransition, { position: h })
                              .call(function () {
                                t.lastDetailPage.hideInfoDetailPage(),
                                  (t.lastDetailPage.node.opacity = 1);
                              })
                              .start(),
                              (this.currentDetailPage.node.position = new P(
                                -720,
                                0
                              )),
                              (this.currentDetailPage.node.opacity = 255);
                            var c = new P(0, 0);
                            d(this.currentDetailPage.node)
                              .to(this.durationTransition, { position: c })
                              .start();
                          } else {
                            var u = new P(-720, 0);
                            d(this.lastDetailPage.node)
                              .to(this.durationTransition, { position: u })
                              .call(function () {
                                t.lastDetailPage.hideInfoDetailPage(),
                                  (t.lastDetailPage.node.opacity = 1);
                              })
                              .start(),
                              (this.currentDetailPage.node.position = new P(
                                tt,
                                0
                              )),
                              (this.currentDetailPage.node.opacity = 255);
                            var p = new P(0, 0);
                            d(this.currentDetailPage.node)
                              .to(this.durationTransition, { position: p })
                              .start();
                          }
                          this.lastPage = this.currentPage;
                        } else
                          (this.indexUsedPage = 0),
                            (this.currentDetailPage = this.detailPages[0]),
                            this.currentDetailPage.hideInfoDetailPage(),
                            this.currentDetailPage.updateData(
                              e,
                              this.sessionData.summaryData,
                              l
                            ),
                            (this.currentDetailPage.node.opacity = 255),
                            (this.lastPage = this.currentPage),
                            (this.lastDetailPage = this.currentDetailPage);
                        d(this.node)
                          .delay(this.durationTransition)
                          .call(function () {
                            1 == t.totalPages
                              ? ((t.nextBtn.active = !1),
                                (t.backBtn.active = !1))
                              : t.currentPage == t.totalPages - 1
                              ? ((t.nextBtn.getComponent(g).interactable = !1),
                                (t.nextBtn.active = !1),
                                (t.backBtn.active = !0),
                                (t.backBtn.getComponent(g).interactable = !0))
                              : 0 == t.currentPage
                              ? ((t.backBtn.getComponent(g).interactable = !1),
                                (t.backBtn.active = !1),
                                (t.nextBtn.active = !0),
                                (t.nextBtn.getComponent(g).interactable = !0))
                              : ((t.backBtn.active = !0),
                                (t.nextBtn.active = !0),
                                (t.nextBtn.getComponent(g).interactable = !0),
                                (t.backBtn.getComponent(g).interactable = !0));
                          })
                          .start();
                      } else console.warn("check logic renderDetailPage");
                    }
                  }),
                  (n.disableClose = function () {
                    this.closeButton && (this.closeButton.active = !1);
                  }),
                  (n.closeNotice = function () {
                    this.errorMessage && (this.errorMessage.active = !1);
                  }),
                  (n.playLoading = function () {
                    this.errorMessage && (this.errorMessage.active = !1),
                      this.noBetDetail && (this.noBetDetail.active = !1),
                      this.loading && (this.loading.active = !0),
                      (this.serverMessage.active = !1);
                  }),
                  (n.formatTimeStamp = function (t) {
                    var e = new Date(t),
                      i = e.getFullYear(),
                      s = st(e.getMonth() + 1),
                      a = st(e.getDate()),
                      n = st(e.getHours()),
                      r = st(e.getMinutes()),
                      o = st(e.getSeconds());
                    return this.timeFormat
                      ? this.timeFormat
                          .replace("YYYY", i + "")
                          .replace("MM", s)
                          .replace("DD", a)
                          .replace("hh", n)
                          .replace("mm", r)
                          .replace("ss", o)
                      : a + "/" + s + "/" + i + " " + n + ":" + r + ":" + o;
                  }),
                  (n.onClose = function () {
                    var t = this;
                    this.resetBoard();
                    var e = new f("ON_BET_DETAIL_CLOSED", !0);
                    this.node.dispatchEvent(e),
                      this._closeTween &&
                        (this._closeTween.stop(), (this._closeTween = null)),
                      (this._closeTween = d(this.node)
                        .to(this.durationTransition, { position: p(tt, 0, 0) })
                        .call(function () {
                          t.setOpacity(t.node, 1), (t._closeTween = null);
                        })),
                      this._closeTween.start();
                  }),
                  (n.onTouchViewStart = function (t) {
                    var e = new D(0, 0);
                    this.camera.getScreenToWorldPoint(t.getLocation(), e);
                    var i = this.touchView.getBoundingBox();
                    (this.curPoint =
                      this.touchView.parent.convertToNodeSpaceAR(e)),
                      i.contains(this.curPoint) &&
                        ((this.pointerClick = !0),
                        (this.pointerMove = !0),
                        (this.touchStartPoint = this.curPoint));
                  }),
                  (n.onTouchViewEnd = function (t) {
                    var e = new D(0, 0);
                    this.camera.getScreenToWorldPoint(t.getLocation(), e);
                    var i = this.touchView.getBoundingBox();
                    if (
                      ((this.curPoint =
                        this.touchView.parent.convertToNodeSpaceAR(e)),
                      i.contains(this.curPoint))
                    ) {
                      if (this.pointerClick) {
                        this.pointerClick = !1;
                        var s = this.curPoint.x - this.touchStartPoint.x;
                        if (Math.abs(s) > 30) {
                          var a = s > 0 ? 1 : -1;
                          this.changeDetailPageByFingerTouch(a);
                        }
                      }
                      this.pointerMove = !1;
                    }
                  }),
                  (n.changeDetailPageByFingerTouch = function (t) {
                    void 0 === t && (t = 0),
                      t > 0
                        ? this.currentPage > 0 &&
                          (this.currentPage--,
                          this.requestDetail(this.sessionId, this.currentPage))
                        : t < 0 &&
                          this.currentPage < this.totalPages - 1 &&
                          (this.currentPage++,
                          this.requestDetail(this.sessionId, this.currentPage));
                  }),
                  e
                );
              })(y)).prototype,
              "title",
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
            (U = e(F.prototype, "time", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = e(F.prototype, "backBtn", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = e(F.prototype, "nextBtn", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = e(F.prototype, "loading", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = e(F.prototype, "errorMessage", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = e(F.prototype, "noBetDetail", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = e(F.prototype, "closeButton", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = e(F.prototype, "detailPages", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Q = e(F.prototype, "durationTransition", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.3;
              },
            })),
            (K = e(F.prototype, "sessionID", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = e(F.prototype, "touchView", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = e(F.prototype, "serverMessage", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = F))
          ) || A)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotButton9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotButton.ts"],
  function (t) {
    "use strict";
    var i, n, e, o, s, a, c, l, r, h, u, p;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (a = t._decorator),
            (c = t.Node),
            (l = t.tween),
            (r = t.Button),
            (h = t.v3),
            (u = t.log);
        },
        function (t) {
          p = t.SlotButton;
        },
      ],
      execute: function () {
        var S, d, T, f, _, C, R, y, A, E, F;
        s._RF.push({}, "6104cAmGApEd4mbVA7EYGJM", "SlotButton9937", void 0);
        var I = a.ccclass,
          b = a.property;
        t(
          "SlotButton9937",
          ((S = I("SlotButton9937")),
          (d = b({ type: c })),
          (T = b({ type: c })),
          (f = b({ type: c })),
          (_ = b({ type: c })),
          S(
            ((y = i(
              (R = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, s = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    e(i, "textCon", y, o(i)),
                    e(i, "textLuot", A, o(i)),
                    e(i, "f2rBtn", E, o(i)),
                    e(i, "iconSpin", F, o(i)),
                    (i.tweenWait = null),
                    (i.isF2RClicked = !1),
                    (i.canClickF2R = !1),
                    (i.selectionAutoSpin = void 0),
                    i
                  );
                }
                n(i, t);
                var s = i.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("PLAY_ANIM_TAP", this.playAnimTap, this),
                      this.node.on(
                        "RESET_SPIN_BUTTON",
                        this.resetSpinButton,
                        this
                      ),
                      this.node.on(
                        "CHANGE_ICON_SPIN_FRAME",
                        this.changeIconSpinFrame,
                        this
                      ),
                      this.node.on(
                        "PLAY_EFFECT_TRANSITION_BUTTON",
                        this.playEffectTransitionSlotButton,
                        this
                      ),
                      this.node.on("HIDE_ICON", this.hideIconSpin, this),
                      this.node.on("SHOW_ICON", this.showIconSpin, this),
                      this.node.on(
                        "SET_RESPIN_STATE",
                        this.setRespinState,
                        this
                      ),
                      this.node.on("TRIGGER_BUTTON_SPIN", this.spinClick, this);
                  }),
                  (s.playAnimTap = function (t) {
                    var i = this;
                    void 0 === t && (t = 0),
                      this.spineBtnSpin &&
                        (this.playStartSound(),
                        this.tweenWait && this.tweenWait.stop(),
                        (this.tweenWait = l(this.node)
                          .delay(t)
                          .call(function () {
                            i.spineBtnSpin.setAnimation(0, i.animPressed, !1),
                              (i.tweenWait = null);
                          })
                          .start())),
                      (this.isF2RClicked = !1),
                      (this.canClickF2R = !1);
                    var n = 0;
                    if (!this.dataStore.modeTurbo) {
                      var e = this.config;
                      n =
                        e.TABLE_NORMAL.DELAY_START *
                        (e.NORMAL_TABLE_FORMAT.length - 1);
                    }
                    this.scheduleOnce(function () {
                      (i.canClickF2R = !0),
                        i.isF2RClicked &&
                          ((i.canClickF2R = !0),
                          i.fastToResultClick(),
                          (i.canClickF2R = !1));
                    }, n);
                  }),
                  (s.playStartSound = function () {
                    this.soundPlayer && this.soundPlayer.playSfx("Spin");
                  }),
                  (s.disableFastToResult = function () {
                    (this.btnFastStop.getComponent(r).interactable = !1),
                      (this.f2rBtn.active = !1);
                  }),
                  (s.enableFastToResult = function () {
                    var t = this.dataStore.playSession.subState;
                    (this.btnFastStop.getComponent(r).interactable = !0),
                      (this.f2rBtn.active = !0),
                      41 == t && (this.f2rBtn.active = !1);
                  }),
                  (s.resetSpinButton = function () {
                    (this.f2rBtn.active = !1),
                      this.iconSpin.emit("ROTATE_NORMAL_SPEED"),
                      this.changeIconSpinFrame();
                  }),
                  (s.changeIconSpinFrame = function (t, i) {
                    void 0 === t && (t = !1),
                      void 0 === i && (i = 1),
                      this.iconSpin.emit("CHANGE_ICON_SPIN_FRAME", t, i);
                  }),
                  (s.playEffectTransitionSlotButton = function (t, i) {
                    var n = this;
                    if (
                      (void 0 === i && (i = null),
                      this.textCon && this.textLuot)
                    ) {
                      this.setOpacity(this.textLuot, 255),
                        this.setOpacity(this.textCon, 255);
                      var e = t ? 1 : 0,
                        o = -115 * e,
                        s = 115 * e;
                      l(this.textCon)
                        .to(0.5, { position: h(o, 0, 0) })
                        .start(),
                        l(this.textLuot)
                          .to(0.5, { position: h(s, 0, 0) })
                          .start(),
                        this.scheduleOnce(function () {
                          i && i(),
                            t ||
                              (n.setOpacity(n.textLuot, 0),
                              n.setOpacity(n.textCon, 0));
                        }, 0.5);
                    } else i && i();
                  }),
                  (s.hideIconSpin = function () {
                    this.iconSpin.emit("HIDE_ICON");
                  }),
                  (s.showIconSpin = function () {
                    this.iconSpin.emit("SHOW_ICON");
                  }),
                  (s.spinClick = function () {
                    var t = this.dataStore.betData,
                      i = this.dataStore.getCurrentWallet(),
                      n = t.getTotalBet(),
                      e = this.dataStore,
                      o = e.countF2R,
                      s = e.isDoneIntroTurbo;
                    e.isShowingTurboPopup ||
                      (this.node.emit("SPIN_CLICK"),
                      n <= i &&
                        (o < 5 || s) &&
                        (this.playAnimTap(),
                        this.iconSpin.emit("ROTATE_FASTER_SPEED")));
                  }),
                  (s.setRespinState = function (t) {
                    void 0 === t && (t = !1),
                      this.iconSpin && this.iconSpin.emit("RESPIN_STATE", t),
                      (this.f2rBtn.active = !1);
                  }),
                  (s.onTouchStart = function () {
                    (this.selectionAutoSpin = !1),
                      this.node.emit("ON_TOUCH_START"),
                      (this.isTouched = !0),
                      this.isDebug && u("onTouchStart");
                  }),
                  (s.fastToResultClick = function () {
                    this.isF2RClicked || (this.isF2RClicked = !0);
                    var t = this.dataStore.playSession,
                      i = t.subState,
                      n = t.isFinished;
                    41 != i &&
                      n &&
                      this.iconSpin.emit("ROTATE_FASTER_SPEED", !0),
                      this.canClickF2R &&
                        (this.soundPlayer &&
                          !this.removeSoundClick &&
                          this.soundPlayer.playSFXClick(),
                        this.node.emit("FAST_TO_RESULT_CLICK"),
                        this.isDebug && u("SlotButton: fastToResultClick"));
                  }),
                  (s.stopAutoSpinClick = function () {
                    t.prototype.stopAutoSpinClick.call(this);
                    this.dataStore.isIconGray;
                  }),
                  (s.enableSpin = function () {
                    t.prototype.enableSpin.call(this),
                      (this.f2rBtn.active = !1),
                      this.iconSpin.emit("ROTATE_NORMAL_SPEED");
                  }),
                  i
                );
              })(p)).prototype,
              "textCon",
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
            (A = i(R.prototype, "textLuot", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = i(R.prototype, "f2rBtn", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = i(R.prototype, "iconSpin", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = R))
          ) || C)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotJackpotCellHistory9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotJackpotCellHistory.ts"],
  function (t) {
    "use strict";
    var e, r, o, i, n, a, l, s, u;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (r = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy), (a = t._decorator), (l = t.Node), (s = t.Label);
        },
        function (t) {
          u = t.SlotJackpotCellHistory;
        },
      ],
      execute: function () {
        var c, p, m, h, g, f, y;
        n._RF.push(
          {},
          "5dc86vLcydPR5mLU/YozLjz",
          "SlotJackpotCellHistory9937",
          void 0
        );
        var d = a.ccclass,
          S = a.property;
        function v(t) {
          return t < 10 && (t = "0" + t), t;
        }
        t(
          "SlotJackpotCellHistory9937",
          ((c = d("SlotJackpotCellHistory9937")),
          (p = S({ type: l })),
          (m = S({ displayName: "hourFormat", visible: !0 })),
          c(
            ((f = e(
              (g = (function (t) {
                function e() {
                  for (
                    var e, r = arguments.length, n = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    n[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(n)) || this),
                    o(e, "hour", f, i(e)),
                    o(e, "hourFormat", y, i(e)),
                    e
                  );
                }
                r(e, t);
                var n = e.prototype;
                return (
                  (n.updateData = function (e) {
                    t.prototype.updateData.call(this, e),
                      (this.time.getComponent(s).string = this.formatTimeStamp(
                        e.time
                      )),
                      (this.hour.getComponent(s).string = this.formatHourStamp(
                        parseInt(e.time)
                      ));
                    var r = e.dn.trim();
                    r.length > 20 && (r = r.substring(0, 20) + "..."),
                      (this.account.getComponent(s).string = r);
                  }),
                  (n.formatHourStamp = function (t) {
                    var e = new Date(t),
                      r = v(e.getHours()),
                      o = v(e.getMinutes()),
                      i = v(e.getSeconds());
                    return this.hourFormat
                      ? this.hourFormat
                          .replace("hh", r)
                          .replace("mm", o)
                          .replace("ss", i)
                      : r + ":" + o + ":" + i;
                  }),
                  (n.formatTimeStamp = function (t, e) {
                    var r = new Date(t);
                    v(r.getHours()), v(r.getMinutes()), v(r.getSeconds());
                    return (
                      v(r.getDate()) +
                      "/" +
                      v(r.getMonth() + 1) +
                      (e ? "/" + r.getFullYear() : "")
                    );
                  }),
                  e
                );
              })(u)).prototype,
              "hour",
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
            (y = e(g.prototype, "hourFormat", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "hh:mm:ss";
              },
            })),
            (h = g))
          ) || h)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotJackpotHistory9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./globalNetwork.ts",
    "./SlotJackpotHistory.ts",
  ],
  function (t) {
    "use strict";
    var e, i, o, n, s, a, r, c, h, l, u, p, g;
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
            (a = t._decorator),
            (r = t.Node),
            (c = t.Vec3),
            (h = t.tween),
            (l = t.Label),
            (u = t.Button);
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          g = t.SlotJackpotHistory;
        },
      ],
      execute: function () {
        var d, v, P, f, b, w, y, m, k;
        s._RF.push(
          {},
          "69dcbcZ68FCkpftGe3h+fgu",
          "SlotJackpotHistory9937",
          void 0
        );
        var I = a.ccclass,
          M = a.property;
        t(
          "SlotJackpotHistory9937",
          ((d = I("SlotJackpotHistory9937")),
          (v = M(r)),
          (P = M(r)),
          (f = M({ displayName: "moveDuration", visible: !0 })),
          d(
            ((y = e(
              (w = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    o(e, "blockInput", y, n(e)),
                    o(e, "container", m, n(e)),
                    o(e, "moveDuration", k, n(e)),
                    (e.tweenMove = null),
                    (e.showPos = void 0),
                    (e.hidePos = void 0),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.showPos = this.container.getPosition()),
                      (this.hidePos = new c(
                        this.showPos.x,
                        this.showPos.y - 1560,
                        0
                      ));
                  }),
                  (s.openPanel = function () {
                    var e = this;
                    (this.blockInput.active = !0),
                      (this.container.active = !0),
                      this.table.emit("CLEAR_DATA"),
                      this.pagination && (this.pagination.active = !0),
                      (this.token = p.getToken()),
                      t.prototype.openPanel.call(this),
                      this.hideJackpotDetail(),
                      this.updatePageIndex(),
                      this.container.setPosition(this.hidePos),
                      this.tweenMove && this.tweenMove.stop(),
                      (this.tweenMove = h(this.container)
                        .to(
                          this.moveDuration,
                          { position: this.showPos },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          e.tweenMove = null;
                        })),
                      this.tweenMove.start();
                  }),
                  (s.hidePanel = function () {
                    var t = this;
                    this.tweenMove && this.tweenMove.stop(),
                      (this.blockInput.active = !1),
                      (this.tweenMove = h(this.container)
                        .to(
                          this.moveDuration / 2,
                          { position: this.hidePos },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          (t.node.active = !1),
                            t.node.emit("HIDE"),
                            (t.container.active = !1),
                            (t.tweenMove = null);
                        })),
                      this.tweenMove.start();
                  }),
                  (s.updatePageIndex = function () {
                    this.totalPage &&
                      (this.pageIndexView.getComponent(l).string =
                        this.currentPage + "/" + this.totalPage);
                  }),
                  (s.openLastPage = function () {
                    this.table.emit("CLEAR_DATA"),
                      this.errorMessage && (this.errorMessage.active = !1),
                      (this.node.active = !0),
                      this.setOpacity(this.node, 255),
                      this.table && (this.table.opacity = 0),
                      1 == this.currentPage &&
                        ((this.backBtn.getComponent(u).interactable = !1),
                        (this.nextBtn.getComponent(u).interactable = !1)),
                      this.updatePageIndexView(this.currentPage),
                      this.playLoading(),
                      this.requestDataPage(
                        this.currentPage,
                        this.itemPerPage,
                        this.onRequestResponse.bind(this),
                        this.requestErr.bind(this)
                      );
                  }),
                  (s.updatePageIndexView = function (t) {
                    this.totalPage && (t = t + "/" + this.totalPage),
                      (this.pageIndexView.getComponent(l).string = t);
                  }),
                  (s.onRequestResponse = function (e) {
                    t.prototype.onRequestResponse.call(this, e),
                      this.updatePageIndex();
                  }),
                  (s.onRequestBetResponse = function (e) {
                    t.prototype.onRequestBetResponse.call(this, e),
                      this.updatePageIndex();
                  }),
                  e
                );
              })(g)).prototype,
              "blockInput",
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
            (m = e(w.prototype, "container", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = e(w.prototype, "moveDuration", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1;
              },
            })),
            (b = w))
          ) || b)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotReel9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./SlotReelv2.ts",
  ],
  function (i) {
    "use strict";
    var t, s, o, n, e, l, h, a, r, S;
    return {
      setters: [
        function (i) {
          t = i.inheritsLoose;
        },
        function (i) {
          (s = i.cclegacy),
            (o = i._decorator),
            (n = i.instantiate),
            (e = i.tween),
            (l = i.Vec3),
            (h = i.Tween),
            (a = i.warn);
        },
        function (i) {
          r = i.setOpacity;
        },
        function (i) {
          S = i.SlotReelv2;
        },
      ],
      execute: function () {
        var y;
        s._RF.push({}, "2136eBfPbNILpOsH73jt+Lq", "SlotReel9937", void 0);
        var c = o.ccclass,
          m = { 0: 45, 1: 45, 2: 45, 3: 45, 4: 45 };
        i(
          "SlotReel9937",
          c("SlotReel9937")(
            (y = (function (i) {
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
                    this).symbolStartShowY = void 0),
                  (t.countFakeSpecialSymbol = void 0),
                  (t.payLineRows = void 0),
                  (t.payLines = void 0),
                  (t._newMatrix = void 0),
                  (t._fallingCallback = void 0),
                  (t._toHideSymbols = void 0),
                  (t._fallingSymbols = void 0),
                  (t._addedSymbols = void 0),
                  (t.tweenFallingAnimation = void 0),
                  t
                );
              }
              t(s, i);
              var o = s.prototype;
              return (
                (o.onLoad = function () {
                  i.prototype.onLoad.call(this),
                    this.node.on(
                      "SET_SYMBOL_SIBLING_INDEX",
                      this.setSymbolSiblingIndex,
                      this
                    ),
                    this.node.on(
                      "START_FALLING_SYMBOLS",
                      this.startFallingSymbols,
                      this
                    ),
                    this.node.on("SET_UP_PAY_LINES", this.setupPayLines, this),
                    this.node.on(
                      "STOP_SPINNING_WITH_DELAY",
                      this.stopSpinningWithDelayTime,
                      this
                    ),
                    this.node.on(
                      "IS_REEL_REALLY_FALLING",
                      this.isReelReallyFalling,
                      this
                    ),
                    this.node.on("UPDATE_REEL_CONFIG", this.updateConfig, this);
                }),
                (o.init = function (i, t, s, o, e) {
                  void 0 === i && (i = []),
                    void 0 === t && (t = {}),
                    void 0 === s && (s = 0),
                    void 0 === o && (o = null),
                    void 0 === e && (e = !1),
                    (this.config = t);
                  var l = t,
                    h = l.NORMAL_SYMBOLS,
                    a = l.FREE_SYMBOLS,
                    r = l.TABLE_BUFFER,
                    S = l.SYMBOL_HEIGHT,
                    y = l.SYMBOL_HEIGHT_FREE_GAME,
                    c = l.EXCEPTION_SYMBOLS;
                  (this.symbolHeight = e && y ? y : S),
                    (this.reelIndex = s),
                    (this.symbolList = e ? a[s] : h[s]),
                    (this.isFreeMode = e),
                    (this.showNumber = i[s]),
                    (this.totalSymbols = this.showNumber + r.TOP + r.BOT),
                    (this.symbolStartY =
                      -(this.showNumber / 2 + r.BOT - 0.5) * this.symbolHeight),
                    (this.showSymbols = []),
                    (this.currentIndex = 0);
                  for (var m = 0; m < this.totalSymbols; m++) {
                    var u = n(o);
                    u.setPosition(0, this.symbolStartY + m * this.symbolHeight),
                      this.node.addChild(u),
                      u.emit("SET_SYMBOL_MODE", e);
                    var b = this.getRandomSymbolNameWithExceptions(
                      c || ["A", "R", "K"]
                    );
                    u.emit("CHANGE_TO_SYMBOL", b),
                      u.emit("PLAY_ANIM_IDLE"),
                      this.symbols.push(u),
                      this.symbolPos.push(u.position.y),
                      m >= r.BOT &&
                        m < this.totalSymbols - r.TOP &&
                        this.showSymbols.unshift(u);
                  }
                  (this.symbolStartShowY =
                    (this.showNumber / 2 - 0.5) * this.config.SYMBOL_HEIGHT),
                    (this.countFakeSpecialSymbol = 0),
                    this.showSymbols &&
                      this.showSymbols.length > 0 &&
                      this.showSymbols.sort(function (i, t) {
                        return t.position.y - i.position.y;
                      }),
                    this.reset();
                }),
                (o.setupPayLines = function (i) {
                  var t = this;
                  i &&
                    ((this.payLineRows = []),
                    (this.payLines = [].concat(i)),
                    this.payLines.forEach(function (i) {
                      for (
                        var s = i.symbolName, o = i.symbolCount, n = 0;
                        n < t.showSymbols.length && t.reelIndex < o;
                        ++n
                      ) {
                        var e = t.showSymbols[n];
                        0 == n ||
                          (e.symbol !== s && "K" != e.symbol) ||
                          -1 != t.payLineRows.indexOf(n) ||
                          t.payLineRows.push(n);
                      }
                    }));
                }),
                (o.onReelStop = function () {
                  i.prototype.onReelStop.call(this),
                    this.setSymbolSiblingIndex(!0);
                }),
                (o.playAppearSpecialSymbol = function () {
                  this.symbols.forEach(function (i) {
                    ("A" != i.symbol && "JP" != i.symbol) ||
                      i.emit("PLAY_ANIM_ACTIVE_IDLE", !0);
                  });
                }),
                (o.startSpinning = function (i, t) {
                  var s = this;
                  void 0 === t && (t = {}),
                    (this.step = this.MAX_STEP - 1),
                    (this.reelConfig = t),
                    (this.reelIndex = i),
                    this.setUpConfig();
                  var o = this.reelConfig,
                    n = o.BACKWARD_TIME,
                    h = o.IS_TURBO,
                    a = m[this.reelIndex],
                    r = i * n;
                  h && (r = 0),
                    e(this.node)
                      .delay(r)
                      .by(0.75 * n, { position: new l(0, a) })
                      .call(function () {
                        s.symbols.forEach(function (i) {
                          (i.isPayline = !1),
                            i.emit("CHANGE_TO_BLUR_SYMBOL", i.symbol);
                        });
                      })
                      .by(0.25 * n, { position: new l(0, -a) })
                      .call(function () {
                        s.runSpinning();
                      })
                      .start();
                }),
                (o.setSymbolSiblingIndex = function (i) {
                  if ((void 0 === i && (i = !0), i)) {
                    this.symbols.sort(function (i, t) {
                      return i.position.y - t.position.y;
                    });
                    var t = 1;
                    this.showSymbols.forEach(function (i) {
                      "A" == i.symbol || "JP" == i.symbol || "2" == i.symbol
                        ? (i.setSiblingIndex(t), t++)
                        : i.setSiblingIndex(0);
                    });
                  }
                }),
                (o.circulateSymbols = function () {
                  var i = this.symbols[this.currentIndex % this.totalSymbols],
                    t = this.getRandomSymbolName(),
                    s = this.reelConfig.IS_TURBO;
                  if (this.isShowingResult) {
                    if (this.stop < this.totalSymbols) {
                      var o = this._isRealSymbol();
                      (t = this.result[this.stop]),
                        (this.step =
                          this.totalSymbols +
                          this.showNumber -
                          (this.stop + this.config.TABLE_BUFFER.BOT)),
                        o
                          ? (i.emit("CHANGE_TO_SYMBOL", t),
                            this.showSymbols.unshift(i))
                          : i.emit("CHANGE_TO_BLUR_SYMBOL", t),
                        this.stop++,
                        4 == this.reelIndex &&
                          this.isNearWin &&
                          !s &&
                          i.emit("CHANGE_TO_SYMBOL", t);
                    }
                  } else
                    this.countFakeSpecialSymbol++,
                      ("A" != t && "JP" != t) ||
                        (this.countFakeSpecialSymbol <= 3 &&
                          (t = this.getRandomSymbolNameWithExceptions([
                            "A",
                            "JP",
                          ]))),
                      this.countFakeSpecialSymbol >= 3 &&
                        (this.countFakeSpecialSymbol = 0),
                      4 == this.reelIndex && this.isNearWin && !s
                        ? i.emit("CHANGE_TO_SYMBOL", t)
                        : i.emit("CHANGE_TO_BLUR_SYMBOL", t);
                  var n = i.position.y;
                  (n += this.symbolHeight * this.totalSymbols),
                    i.setPosition(new l(i.position.x, n, 0)),
                    this.currentIndex++;
                }),
                (o.stopSpinningWithDelayTime = function (i, t, s, o) {
                  void 0 === o && (o = !1),
                    (this.showSymbols = []),
                    (this.callbackStop = s),
                    (this.result = [].concat(t)),
                    (this.isNearWin = o);
                  var n = i * this.reelConfig.DELAY_STOP;
                  this.unschedule(this.setStepToStop),
                    this.scheduleOnce(this.setStepToStop, n),
                    this.result.unshift(
                      this.getRandomSymbolNameWithExceptions(["A", "JP"])
                    ),
                    this.config.TABLE_BUFFER.BOT > 0 &&
                      this.result.push(
                        this.getRandomSymbolNameWithExceptions(["A", "JP"])
                      );
                }),
                (o.getHeightBounce = function () {
                  return this.payLineRows && this.payLineRows.length > 0
                    ? 1 == this.payLineRows.length
                      ? 20
                      : 2 == this.payLineRows.length
                      ? 40
                      : 60
                    : 0;
                }),
                (o.isReelReallyFalling = function () {
                  this.node.isReelReallyFalling =
                    this.payLineRows && this.payLineRows.length > 0;
                }),
                (o.startFallingSymbols = function (i, t, s, o) {
                  var n = this;
                  void 0 === i && (i = 0.5),
                    void 0 === t && (t = []),
                    (this._newMatrix = [].concat(t)),
                    (this._fallingCallback = s);
                  var a = this.reelConfig,
                    S = a.IS_TURBO,
                    y = a.FALLING_TIME;
                  this.setUpHideSymbols(),
                    this.fadeOutWinSymbols(),
                    this._toHideSymbols.length > 0
                      ? this._fallingSymbols.forEach(function (t, s) {
                          (t._showY = n._getSymbolShowY(s)),
                            (t.isPayline = !1),
                            h.stopAllByTarget(t);
                          var a = e(t)
                            .delay(i)
                            .call(function () {
                              r(t, 255);
                            });
                          S
                            ? a
                                .to(
                                  1 * y,
                                  { position: new l(t.position.x, t._showY) },
                                  { easing: "quintIn" }
                                )
                                .call(function () {
                                  o && o();
                                })
                            : a
                                .to(0.26 * y, {
                                  position: new l(t.position.x, t._showY),
                                })
                                .call(function () {
                                  o && o();
                                })
                                .to(0.26 * y, {
                                  position: new l(
                                    t.position.x,
                                    Number(t._showY) + n.getHeightBounce()
                                  ),
                                })
                                .delay(0.21 * y)
                                .to(0.26 * y, {
                                  position: new l(t.position.x, t._showY),
                                }),
                            a
                              .call(function () {
                                s == n._fallingSymbols.length - 1 &&
                                  (n.showSymbols.sort(function (i, t) {
                                    return t.position.y - i.position.y;
                                  }),
                                  n._arrangeSymbols(),
                                  (n.payLineRows = []),
                                  n.setSymbolSiblingIndex(!0));
                              })
                              .delay(
                                s == n._fallingSymbols.length - 1 ? 0.02 : 0
                              )
                              .call(function () {
                                s == n._fallingSymbols.length - 1 &&
                                  (n._fallingCallback && n._fallingCallback(),
                                  (n._fallingCallback = null));
                              }),
                            a.start();
                        })
                      : (this.tweenFallingAnimation &&
                          this.tweenFallingAnimation.stop(),
                        (this.tweenFallingAnimation = e(this.node)
                          .delay(i + (this._toHideSymbols.length > 0 ? 1 : 0))
                          .call(function () {
                            (n.payLineRows = []),
                              n._fallingCallback && n._fallingCallback(),
                              (n._fallingCallback = null),
                              (n.tweenFallingAnimation = null),
                              n.setSymbolSiblingIndex(!0);
                          })),
                        this.tweenFallingAnimation.start()),
                    this.setSymbolSiblingIndex(!0);
                }),
                (o.fastStopSpinning = function () {
                  var i = this;
                  !this.result ||
                    this.result.length <= 4 ||
                    (this.step !== this.MAX_STEP &&
                      (this.isFastToResult ||
                        ((this.isFastToResult = !0),
                        this.unschedule(this.setStepToStop),
                        (this.isShowingResult = !0),
                        (this.currentSpeed = this.currentSpeed / 3),
                        h.stopAllByTarget(this.node),
                        (this.showSymbols = []),
                        (this.symbols = []),
                        this.node.setPosition(this.node.position.x, 0),
                        this.node.children.forEach(function (t, s) {
                          var o = i.result[s];
                          h.stopAllByTarget(t),
                            t.setPosition(
                              new l(
                                t.position.x,
                                i.symbolStartY + s * i.config.SYMBOL_HEIGHT,
                                0
                              )
                            ),
                            t.emit("CHANGE_TO_BLUR_SYMBOL", o),
                            s >= i.config.TABLE_BUFFER.TOP &&
                              s < i.showNumber + i.config.TABLE_BUFFER.TOP &&
                              i.showSymbols.unshift(t),
                            i.symbols.push(t);
                        }),
                        this._arrangeSymbols(),
                        this.runStopAnimation(
                          0,
                          this.reelConfig.REEL_EASING_TIME
                        ))));
                }),
                (o._arrangeSymbols = function () {
                  if (
                    (this.symbols.sort(function (i, t) {
                      return i.position.y - t.position.y;
                    }),
                    (this.currentIndex = 0),
                    this.symbolStartY)
                  )
                    for (var i = 0; i < this.symbols.length; i++) {
                      var t = this.symbols[i],
                        s = this.symbolStartY + i * this.config.SYMBOL_HEIGHT;
                      Math.abs(t.position.y - s) > 5 &&
                        (a("something wrong: " + t.position.y + " - " + s),
                        t.setPosition(
                          0,
                          this.symbolStartY + i * this.config.SYMBOL_HEIGHT
                        ));
                    }
                }),
                (o._getSymbolShowY = function (i) {
                  return this.symbolStartShowY - i * this.config.SYMBOL_HEIGHT;
                }),
                (o._getFallingTime = function (i) {
                  var t = this.reelConfig.IS_TURBO ? 0.3 : 0.5,
                    s = this.reelConfig.FALLING_TIME;
                  return (i / this.config.SYMBOL_HEIGHT) * s * t;
                }),
                (o.runSpinningAnimation = function (i) {
                  var t = this,
                    s = this.currentSpeed,
                    o = this.reelConfig.IS_TURBO;
                  4 == this.reelIndex &&
                    this.isNearWin &&
                    !o &&
                    (s = this.currentSpeed + this.currentSpeed * this.stop * 3),
                    e(this.node)
                      .by(s, {
                        position: new l(0, -1 * this.config.SYMBOL_HEIGHT, 0),
                      })
                      .call(function () {
                        t.circulateSymbols(), i && i();
                      })
                      .start();
                }),
                (o.setUpHideSymbols = function () {
                  var i = this;
                  this._toHideSymbols = [];
                  var t = [],
                    s = [];
                  (this._fallingSymbols = []), (this._addedSymbols = []);
                  var o = 0;
                  if (this.payLineRows && this.payLineRows.length > 0) {
                    var n = Math.max.apply(null, this.payLineRows);
                    this.showSymbols.forEach(function (e, l) {
                      i.payLineRows.indexOf(l) > -1
                        ? (o++,
                          (e._hideY =
                            i.symbolStartShowY + o * i.config.SYMBOL_HEIGHT),
                          i._toHideSymbols.unshift(e))
                        : l < n
                        ? ((e._hideY = e.position.y), t.push(e))
                        : s.push(e);
                    }),
                      (this.showSymbols = this._toHideSymbols
                        .concat(t)
                        .concat(s)),
                      (this._fallingSymbols = this._toHideSymbols.concat(t));
                    var e = this.showSymbols.length - o;
                    (this._addedSymbols = this._newMatrix.slice(e)),
                      this._addedSymbols.reverse();
                  }
                  this.showSymbols.forEach(function (i) {
                    i.isPayline || i.emit("ENABLE_HIGHLIGHT");
                  });
                }),
                (o.fadeOutWinSymbols = function () {
                  var i = this;
                  this._toHideSymbols.forEach(function (t, s) {
                    var o = i._addedSymbols[s];
                    r(t, 1),
                      t.setPosition(new l(t.position.x, t._hideY, 0)),
                      t.setScale(1, 1, 1),
                      (t.isPayline = !1),
                      t.emit("RESET"),
                      t.emit("CHANGE_TO_SYMBOL", o || i.getRandomSymbolName());
                  });
                }),
                (o.updateConfig = function (i) {
                  void 0 === i && (i = {}),
                    (this.reelConfig = i),
                    this.setUpConfig();
                }),
                (o.getYPosition = function (i) {
                  return (
                    (this.showNumber / 2 - i - 0.5) * this.config.SYMBOL_HEIGHT
                  );
                }),
                (o.runStopAnimation = function (i, t) {
                  var s = this,
                    o = t || this.reelConfig.TIME;
                  this.onReelStop();
                  var n = e(this.node),
                    h = this.reelConfig.IS_TURBO;
                  (this.isNearWin && 4 == this.reelIndex && !h) ||
                    h ||
                    n
                      .by(o, { position: new l(0, -i) })
                      .by(o, { position: new l(0, i) }),
                    n
                      .call(function () {
                        s.reset(),
                          s.callbackStop(),
                          s.playAppearSpecialSymbol(),
                          s.unschedule(s.setStepToStop),
                          (s.currentSpeed = s.reelConfig.TIME);
                      })
                      .start();
                }),
                (o.checkPlaySound = function () {
                  for (var i = 2; i < 4; i++)
                    if ("JP" == this.result[i]) return !0;
                  return !1;
                }),
                s
              );
            })(S))
          ) || y
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSoundPlayer9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotSoundPlayer.ts"],
  function (t) {
    "use strict";
    var o, e, r, n;
    return {
      setters: [
        function (t) {
          o = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (r = t._decorator);
        },
        function (t) {
          n = t.SlotSoundPlayer;
        },
      ],
      execute: function () {
        var u;
        e._RF.push(
          {},
          "9f82fQqzytGBKmga9gey2AI",
          "SlotSoundPlayer9937",
          void 0
        );
        var l = r.ccclass;
        r.property,
          t(
            "SlotSoundPlayer9937",
            l("SlotSoundPlayer9937")(
              (u = (function (t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                return o(e, t), e;
              })(n))
            ) || u
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSymbol9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, o, a, s, l, h, r, m, c, d, u, y, S, b;
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
            (l = t.Node),
            (h = t.SpriteFrame),
            (r = t.SpriteComponent),
            (m = t.sp),
            (c = t.Sprite),
            (d = t.tween),
            (u = t.Color);
        },
        function (t) {
          (y = t.convertAssetArrayToObject), (S = t.setOpacity);
        },
        function (t) {
          b = t.GameObject;
        },
      ],
      execute: function () {
        var p, f, v, A, w, N, g, I, _, P, D, C, k, F, L;
        a._RF.push({}, "c146erxKwNOOILUiYZS9pGh", "SlotSymbol9937", void 0);
        var T = s.ccclass,
          E = s.property;
        t(
          "SlotSymbol9937",
          ((p = T("SlotSymbol9937")),
          (f = E({ type: l })),
          (v = E({ type: h })),
          (A = E({ type: h })),
          (w = E({ type: l })),
          p(
            ((I = i(
              (g = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, a = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(a)) || this),
                    n(i, "staticSymbol", I, o(i)),
                    n(i, "bigWildScaleFactor", _, o(i)),
                    n(i, "listSymbols", P, o(i)),
                    n(i, "listBlurSymbols", D, o(i)),
                    n(i, "blurNamePrefix", C, o(i)),
                    n(i, "dimColor", k, o(i)),
                    n(i, "defaultColor", F, o(i)),
                    n(i, "animNode", L, o(i)),
                    (i.assets = []),
                    (i.blurAssets = []),
                    (i.symbolSpriteFrame = null),
                    (i.zoomTween = null),
                    (i._staticPaylineHolder = null),
                    (i._poolFactoryNode = null),
                    (i._isPlayAnim = !1),
                    (i._isAnimated = !1),
                    (i._isBigWild = !1),
                    (i.animation = void 0),
                    (i.curSkeletonData = void 0),
                    (i.tweenRotate = void 0),
                    (i.tweenForever = void 0),
                    (i.tweenAction = void 0),
                    (i._isPlaying = !1),
                    (i.tweenPlayExPloSymbol = void 0),
                    (i.tweenColorStatic = void 0),
                    (i.tweenColorAnim = void 0),
                    i
                  );
                }
                e(i, t);
                var a = i.prototype;
                return (
                  (a.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "EFFECT_DIM_SYMBOLS",
                        this.playEffectDimColorSymbols,
                        this
                      ),
                      this.node.on("SHOW_PAY_LINE", this.showPayLines, this),
                      this.node.on(
                        "CHANGE_TO_BLUR_SYMBOL",
                        this.changeToBlurSymbol,
                        this
                      ),
                      this.node.on(
                        "BLINK_HIGHLIGHT",
                        this.blinkHighlight,
                        this
                      ),
                      this.node.on(
                        "ENABLE_HIGHLIGHT",
                        this.enableHighlight,
                        this
                      ),
                      this.node.on(
                        "DISABLE_HIGHLIGHT",
                        this.disableHighlight,
                        this
                      ),
                      this.node.on("PLAY_ANIM_WAIT", this.playAnimWait, this),
                      this.node.on("STOP_ANIM_WAIT", this.stopAnimWait, this),
                      this.node.on(
                        "PLAY_ANIM_ACTIVE_IDLE",
                        this.playAnimActiveIdle,
                        this
                      ),
                      this.node.on("PLAY_ANIM_IDLE", this.playAnimIdle, this),
                      this.node.on(
                        "CHANGE_TO_SYMBOL",
                        this.changeToSymbol,
                        this
                      ),
                      this.node.on("PLAY_ANIMATION", this.playAnimation, this),
                      this.node.on("STOP_ANIMATION", this.stopAnimation, this),
                      this.node.on("SHOW_STATIC", this.showStatic, this),
                      this.node.on("RESET", this.reset, this),
                      (this.assets = y(this.listSymbols)),
                      (this.blurAssets = y(this.listBlurSymbols)),
                      (this.symbolSpriteFrame =
                        this.staticSymbol.getComponent(r)),
                      (this.animation = this.animNode.getComponent(m.Skeleton));
                  }),
                  (a.updateSpineName = function (t) {
                    var i = this.findSpineData(t);
                    (this.curSkeletonData = i), (this.node.symbol = t);
                  }),
                  (a.changeToSymbol = function (t) {
                    (this.staticSymbol.active = !0),
                      (this.animNode.active = !0);
                    var i = this.assets[t];
                    i && (this.staticSymbol.getComponent(c).spriteFrame = i),
                      this.updateSpineName(t),
                      (this.animation.skeletonData = this.curSkeletonData),
                      this.isIdleSymbol() && this.curSkeletonData
                        ? ((this.animNode.active = !0),
                          this.setAnimationName("Idle", !0),
                          (this.staticSymbol.active = !1))
                        : (this.animNode.active = !1);
                  }),
                  (a.setAnimationName = function (t, i) {
                    void 0 === i && (i = !1),
                      this.animation.findAnimation(t) &&
                        this.animation.setAnimation(0, t, i);
                  }),
                  (a.isIdleSymbol = function () {
                    return (
                      ["2", "3", "A", "K", "JP"].indexOf(this.node.symbol) > -1
                    );
                  }),
                  (a.changeToBlurSymbol = function (t) {
                    var i = this.blurAssets[this.blurNamePrefix + t];
                    i && (this.staticSymbol.getComponent(c).spriteFrame = i),
                      this.updateSpineName(t),
                      (this.staticSymbol.active = !0),
                      (this.animNode.active = !1);
                  }),
                  (a.playAnimAppear = function () {
                    this.animation && (this.animation.timeScale = 1),
                      this.setAnimationName("Disappear", !1);
                  }),
                  (a.playAnimIdle = function () {
                    this.isIdleSymbol()
                      ? ((this.staticSymbol.active = !1),
                        (this.animNode.active = !0),
                        (this.animation.skeletonData = this.curSkeletonData),
                        (this.animation.timeScale = 1),
                        this.setAnimationName("Idle", !0))
                      : this.animNode.active &&
                        ((this.staticSymbol.active = !0),
                        (this.animNode.active = !1));
                  }),
                  (a.playAnimWait = function () {
                    this.node.isPayline ||
                      (this.tweenRotate && this.tweenRotate.stop(),
                      (this.tweenRotate = d(this.node)
                        .to(0.4, { angle: 1 })
                        .to(0.4, { angle: -1 })
                        .start()),
                      this.tweenForever && this.tweenForever.stop(),
                      (this.tweenForever = d(this.node)
                        .repeatForever(this.tweenRotate)
                        .start()));
                  }),
                  (a.stopAnimWait = function () {
                    this.node.isPayline ||
                      (this.tweenForever && this.tweenForever.stop(),
                      this.tweenRotate && this.tweenRotate.stop(),
                      (this.tweenRotate = null),
                      (this.tweenForever = null),
                      (this.node.angle = 0),
                      this.checkShowIdleSymbol());
                  }),
                  (a.checkShowIdleSymbol = function () {
                    this.isIdleSymbol()
                      ? ((this.staticSymbol.active = !1),
                        (this.animNode.active = !0))
                      : ((this.staticSymbol.active = !0),
                        (this.animNode.active = !1));
                  }),
                  (a.findDurationAnimation = function (t) {
                    var i = this.animation.skeletonData.skeletonJson.animations,
                      e = Object.keys(i).find(function (i) {
                        return i === t;
                      });
                    return e ? this.animation.findAnimation(e).duration : 0;
                  }),
                  (a._playMixAnimation = function (t, i, e, n, o, a) {
                    var s = this;
                    void 0 === e && (e = 0), void 0 === o && (o = !1);
                    var l =
                      this.findDurationAnimation(t) +
                      this.findDurationAnimation(i);
                    n || (n = l),
                      this.tweenAction && this.tweenAction.stop(),
                      (this.tweenAction = d(this.node)
                        .delay(e)
                        .call(function () {
                          (s.animNode.active = !0),
                            (s._isPlaying && !o) ||
                              ((s._isPlaying = !0),
                              s.animation.findAnimation(t) &&
                                s.animation.findAnimation(i) &&
                                (s.animation.setAnimation(0, t, !1),
                                s.animation.setMix(t, i, 0.1),
                                s.animation.addAnimation(0, i, !1),
                                (s.animation.timeScale = l / n)));
                        })
                        .delay(n)
                        .call(function () {
                          a && a();
                        })
                        .start());
                  }),
                  (a.stopAnimation = function () {
                    (this.staticSymbol.active = !0),
                      (this.animNode.active = !1);
                  }),
                  (a.blinkHighlight = function () {
                    S(this.node, 255), (this.staticSymbol.active = !0);
                  }),
                  (a.findSpineData = function (t) {
                    return this.mainDirector.spineSkeletonDatabase.getSpineSkeletonData(
                      t
                    );
                  }),
                  (a.showPayLines = function (t) {
                    var i = this;
                    if ((void 0 === t && (t = !1), "A" != this.node.symbol)) {
                      (this.staticSymbol.active = !1),
                        (this.animNode.active = !0),
                        (this.animation.skeletonData = this.curSkeletonData),
                        this._isPlaying ||
                          ((this._isPlaying = !0),
                          this.animation.setAnimation(0, "Active", !1),
                          (this.animation.timeScale = 1 == t ? 1.6 : 1));
                      var e = 1 == t ? 2 / 6 : 4 / 6;
                      this.tweenPlayExPloSymbol &&
                        this.tweenPlayExPloSymbol.stop(),
                        (this.tweenPlayExPloSymbol = d(this.node)
                          .delay(e)
                          .call(function () {
                            i.animation.setAnimation(0, "Disappear", !1),
                              (i.tweenPlayExPloSymbol = null);
                          })),
                        this.tweenPlayExPloSymbol.start();
                    }
                  }),
                  (a.playAnimActiveIdle = function (t) {
                    if ((void 0 === t && (t = !1), this.isIdleSymbol())) {
                      (this.staticSymbol.active = !1),
                        (this.animNode.active = !0),
                        (this.animation.skeletonData = this.curSkeletonData),
                        (this.animation.timeScale = 1);
                      var i = this.node.symbol;
                      ("A" != i && "JP" != i) || 1 != t
                        ? this.animation.setAnimation(0, "Idle", !0)
                        : (this.animation.setAnimation(0, "Active", !1),
                          this.animation.setMix("Active", "Idle", 0.1),
                          this.animation.addAnimation(0, "Idle", !0));
                    } else
                      this.animNode.active &&
                        ((this.staticSymbol.active = !0),
                        (this.animNode.active = !1));
                  }),
                  (a.hideForShowingPayLine = function (t, i) {
                    void 0 === t && (t = 0),
                      void 0 === i && (i = 0.1),
                      "A" != this.node.symbol &&
                        ((this.staticSymbol.active = !1),
                        (this.animNode.active = !0),
                        (this.animation.skeletonData = this.curSkeletonData),
                        this._playMixAnimation(
                          "Active",
                          "Disappear",
                          t,
                          i,
                          !1,
                          function () {}
                        ));
                  }),
                  (a.enableHighlight = function () {
                    S(this.node, 255),
                      (this.animation.color = this.defaultColor),
                      (this.symbolSpriteFrame.color = this.defaultColor);
                  }),
                  (a.disableHighlight = function () {
                    (this.animation.color = this.dimColor),
                      (this.symbolSpriteFrame.color = this.dimColor);
                  }),
                  (a.playEffectDimColorSymbols = function (t, i) {
                    var e = this;
                    void 0 === i && (i = !1);
                    var n = t ? this.dimColor : this.defaultColor;
                    S(this.node, 255);
                    var o = i ? 5 / 60 : 1 / 6;
                    this.staticSymbol &&
                      (this.tweenColorStatic && this.tweenColorStatic.stop(),
                      (this.tweenColorStatic = d(this.symbolSpriteFrame)
                        .delay(o)
                        .call(function () {
                          e.symbolSpriteFrame.color = n;
                        })
                        .start())),
                      this.animNode &&
                        (this.tweenColorAnim && this.tweenColorAnim.stop(),
                        (this.tweenColorAnim = d(this.animation)
                          .delay(o)
                          .call(function () {
                            e.animation.color = n;
                          })
                          .start()));
                  }),
                  (a.reset = function () {
                    (this.node.isPayline = !1),
                      (this._isPlaying = !1),
                      this.checkShowIdleSymbol(),
                      S(this.node, 255),
                      this.isIdleSymbol() &&
                        this.curSkeletonData &&
                        ((this.animNode.active = !0),
                        this.setAnimationName("Idle", !0),
                        (this.staticSymbol.active = !1));
                  }),
                  (a.playAnimation = function () {}),
                  (a.showStatic = function (t) {
                    this.isIdleSymbol() &&
                      ((this.animNode.active = !t),
                      (this.staticSymbol.active = t));
                  }),
                  i
                );
              })(b)).prototype,
              "staticSymbol",
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
            (_ = i(g.prototype, "bigWildScaleFactor", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1;
              },
            })),
            (P = i(g.prototype, "listSymbols", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (D = i(g.prototype, "listBlurSymbols", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (C = i(g.prototype, "blurNamePrefix", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "blur_";
              },
            })),
            (k = i(g.prototype, "dimColor", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new u();
              },
            })),
            (F = i(g.prototype, "defaultColor", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new u();
              },
            })),
            (L = i(g.prototype, "animNode", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = g))
          ) || N)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSymbolHistory9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
  ],
  function (t) {
    "use strict";
    var i, o, e, s, n, l, r, a, c, h, b, m;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy),
            (l = t._decorator),
            (r = t.Color),
            (a = t.Node),
            (c = t.SpriteFrame),
            (h = t.Sprite);
        },
        function (t) {
          b = t.convertAssetArrayToObject;
        },
        function (t) {
          m = t.GameObject;
        },
      ],
      execute: function () {
        var y, u, p, d, g, S, f;
        n._RF.push(
          {},
          "4a434r8+StBML9wX+LUZvzf",
          "SlotSymbolHistory9937",
          void 0
        );
        var v = l.ccclass,
          H = l.property,
          F = new r().fromHEX("#787878"),
          N = new r().fromHEX("#FFFFFF");
        t(
          "SlotSymbolHistory9937",
          ((y = v("SlotSymbolHistory9937")),
          (u = H({ type: a })),
          (p = H({ type: c })),
          y(
            ((S = i(
              (g = (function (t) {
                function i() {
                  for (
                    var i, o = arguments.length, n = new Array(o), l = 0;
                    l < o;
                    l++
                  )
                    n[l] = arguments[l];
                  return (
                    (i = t.call.apply(t, [this].concat(n)) || this),
                    e(i, "staticSymbol", S, s(i)),
                    e(i, "symbols", f, s(i)),
                    (i.assets = void 0),
                    (i.animNode = void 0),
                    (i.symbolName = void 0),
                    i
                  );
                }
                o(i, t);
                var n = i.prototype;
                return (
                  (n.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.assets = b(this.symbols)),
                      (this.enableHighlight = this.enableHighlight.bind(this)),
                      (this.disableHighlight =
                        this.disableHighlight.bind(this)),
                      (this.changeToSymbol = this.changeToSymbol.bind(this));
                  }),
                  (n.enableHighlight = function () {
                    this.setOpacity(this.node, 255),
                      this.staticSymbol &&
                        (this.staticSymbol.getComponent(h).color = N),
                      this.animNode && (this.animNode.color = N);
                  }),
                  (n.disableHighlight = function () {
                    this.staticSymbol &&
                      (this.staticSymbol.getComponent(h).color = F),
                      this.animNode && (this.animNode.color = F);
                  }),
                  (n.changeToSymbol = function (t) {
                    this.staticSymbol.active = !0;
                    var i = this.assets[t];
                    i && (this.staticSymbol.getComponent(h).spriteFrame = i),
                      (this.node.symbol = this.symbolName = t);
                  }),
                  i
                );
              })(m)).prototype,
              "staticSymbol",
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
            (f = i(g.prototype, "symbols", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (d = g))
          ) || d)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSymbolPayline9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./SlotSymbolPayline.ts",
  ],
  function (t) {
    "use strict";
    var i, n, o, e, s;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          e = t.fadeOut;
        },
        function (t) {
          s = t.SlotSymbolPayline;
        },
      ],
      execute: function () {
        var a;
        n._RF.push(
          {},
          "b497b473h5Ema0hvPabJrEs",
          "SlotSymbolPayline9937",
          void 0
        );
        var l = o.ccclass;
        o.property,
          t(
            "SlotSymbolPayline9937",
            l("SlotSymbolPayline9937")(
              (a = (function (t) {
                function n() {
                  return t.apply(this, arguments) || this;
                }
                i(n, t);
                var o = n.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "PLAY_ANIM_DISAPPEAR",
                        this.playDisappearAnimation,
                        this
                      );
                  }),
                  (o.playDisappearAnimation = function () {
                    var t = this;
                    this._isPlaying ||
                      ((this._isPlaying = !0),
                      (this.spineNode.active = !0),
                      this._animation.setAnimation(0, "Active", !1),
                      this.scheduleOnce(function () {
                        e(t.spineNode, 1);
                      }, 0.5));
                  }),
                  n
                );
              })(s))
            ) || a
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTable9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./EventNames.ts",
    "./SlotTable.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, o, s, l;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (n = t._decorator), (o = t.tween);
        },
        function (t) {
          s = t.default;
        },
        function (t) {
          l = t.SlotTable;
        },
      ],
      execute: function () {
        var a;
        e._RF.push({}, "ad392Vp1pRNZ4cOb+hZQLyz", "SlotTable9937", void 0);
        var c = n.ccclass;
        t(
          "SlotTable9937",
          c("SlotTable9937")(
            (a = (function (t) {
              function e() {
                for (
                  var i, e = arguments.length, n = new Array(e), o = 0;
                  o < e;
                  o++
                )
                  n[o] = arguments[o];
                return (
                  ((i =
                    t.call.apply(t, [this].concat(n)) || this).isDropSymbols =
                    void 0),
                  (i.isNearWin = void 0),
                  (i.columnsHaveSpecialSymbol = void 0),
                  (i.tweenWaitEffect = void 0),
                  i
                );
              }
              i(e, t);
              var n = e.prototype;
              return (
                (n.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    this.node.on("SET_DROP_SYMBOLS", this.setDropSymbols, this),
                    this.node.on(
                      "SHOW_WAITING_EFFECT",
                      this.showSymbolWaitingEffect,
                      this
                    ),
                    this.node.on(
                      "STOP_WAITING_EFFECT",
                      this.stopSymbolWaitingEffect,
                      this
                    ),
                    this.node.on(
                      "UPDATE_REEL_CONFIG",
                      this.updateReelConfig,
                      this
                    ),
                    this.node.on(
                      "CHECK_PLAY_SOUND_SPECIAL_SYMBOLS",
                      this.checkPlaySoundSpecialSymbols,
                      this
                    ),
                    this.node.on(
                      "SHOW_STATIC_SYMBOL",
                      this.showStaticSymbol,
                      this
                    );
                }),
                (n.init = function () {
                  var i = this;
                  t.prototype.init.call(this),
                    this.reels.forEach(function (t) {
                      t.children.forEach(function (t) {
                        (t.position.y >= 300 || t.position.y <= -300) &&
                          i.setOpacity(t, 1);
                      }),
                        t.emit("SET_SYMBOL_SIBLING_INDEX", !0);
                    });
                  var e = this.config.BEAUTY_MATRIX;
                  this.isFreeMode || this.changeMatrix({ matrix: e });
                }),
                (n.startSpinning = function () {
                  (this._isSpinning = !0),
                    (this.isTurbo =
                      (this.dataStore && this.dataStore.modeTurbo) || !1),
                    (this.isFastToResult = !1);
                  var t =
                    this.config[this.isTurbo ? "TABLE_TURBO" : "TABLE_NORMAL"];
                  this.eventManager.emit(s.TABLE_START_SPIN),
                    this.isDropSymbols ||
                      (this.reels.forEach(function (i, e) {
                        i.children.forEach(function (t) {
                          t.emit("RESET");
                        }),
                          i.emit("START_SPIN", e, t);
                      }),
                      this.node.emit("TABLE_START_SOUND"),
                      this.node.emit("RESET_NEAR_WIN"));
                }),
                (n.stopSpinning = function (t, i) {
                  var e = this,
                    n = this.dataStore.playSession,
                    o = n.state,
                    s = n.subState,
                    l = t.matrix,
                    a = t.isDropSymbols,
                    c = t.isFinished;
                  (this.matrix = l),
                    (this.isNearWin = !1),
                    (this._tableStopCB = i),
                    (this.stopSpinningCallbackCount = 0),
                    this.node.emit("TABLE_RESET_SOUND"),
                    this.isDropSymbols ||
                      (this.isNearWin = this.checkNearWin(this.matrix)),
                    this.isDropSymbols && a && this.stopSymbolWaitingEffect(),
                    this.reels.forEach(function (t, i) {
                      var n = [].concat(l[i]).reverse();
                      if (e.isDropSymbols && a)
                        t.emit("IS_REEL_REALLY_FALLING"),
                          t.emit(
                            "START_FALLING_SYMBOLS",
                            0,
                            n,
                            e.checkReelStopFalling.bind(e, c),
                            e.checkReelCollisionGround.bind(
                              e,
                              n,
                              t.isReelReallyFalling
                            )
                          );
                      else {
                        var o =
                          e.config[e.isTurbo ? "TABLE_TURBO" : "TABLE_NORMAL"];
                        t.emit(
                          "STOP_SPINNING_WITH_DELAY",
                          i + i * o.TIME * 2.5,
                          n,
                          e.checkStopSpinningCallback_2.bind(e, l, c),
                          e.isNearWin
                        );
                      }
                    }),
                    (1 != o && 2 != s) ||
                      (this.node.emit("REEL_ABOUT_TO_STOP_EFFECT", {
                        reels: this.reels,
                        matrix: l,
                        context: this,
                      }),
                      this.node.emit("REEL_ABOUT_TO_STOP_MISC", {
                        reels: this.reels,
                        matrix: l,
                        context: this,
                      }),
                      this.node.emit("REEL_DELAY_NEAR_WIN", {
                        reels: this.reels,
                        matrix: l,
                        context: this,
                      }),
                      this.node.emit("REEL_ABOUT_TO_STOP_SOUND", {
                        reels: this.reels,
                        matrix: l,
                        context: this,
                      })),
                    (this.isDropSymbols = a && !c);
                }),
                (n.stopReelWithRandomMatrix = function (t) {
                  void 0 === t && (t = null);
                  for (var i = [], e = 0; e < this.tableFormat.length; ++e) {
                    i[e] = [];
                    for (var n = this.tableFormat[e] - 1; n >= 0; --n) {
                      var o = this.reels[e].getComponent("SlotReel9937");
                      i[e][n] = o
                        ? o.getRandomSymbolNameWithExceptions(["A", "R", "K"])
                        : "3";
                    }
                  }
                  this.stopSpinning({ matrix: i }, t);
                }),
                (n.checkNearWin = function (t) {
                  if (!t) return !1;
                  for (
                    var i = 0, e = 0, n = 0;
                    n < this.tableFormat.length;
                    ++n
                  )
                    for (var o = this.matrix[n], s = o.length - 1; s > 0; --s) {
                      var l = o[s];
                      "A" != l || (0 != n && 2 != n) || i++,
                        "JP" != l || (0 != n && 2 != n) || e++;
                    }
                  return i >= 2 || e >= 2;
                }),
                (n.checkReelCollisionGround = function (t, i) {
                  var e = this.stopSpinningCallbackCount;
                  this.node.emit("REEL_STOP_NEARWIN", {
                    matrix: t,
                    count: e,
                    context: this,
                    isReelFalling: !0,
                    isReelReallyFalling: i,
                  }),
                    this.node.emit("REEL_STOP_SOUND", {
                      matrix: t,
                      count: e,
                      context: this,
                      isReelFalling: !0,
                      isReelReallyFalling: i,
                    }),
                    this.node.emit("REEL_STOP_EFFECT", {
                      matrix: t,
                      count: e,
                      context: this,
                      isReelFalling: !0,
                      isReelReallyFalling: i,
                    }),
                    this.node.emit("REEL_STOP_MISC", {
                      matrix: t,
                      count: e,
                      context: this,
                      isReelFalling: !0,
                      isReelReallyFalling: i,
                    });
                }),
                (n.checkStopSpinningCallback_2 = function (t, i) {
                  this.stopSpinningCallbackCount++;
                  var e = this.stopSpinningCallbackCount;
                  this.node.emit("REEL_STOP_NEARWIN", {
                    matrix: t,
                    count: e,
                    context: this,
                    isReelFalling: !1,
                    isReelReallyFalling: !1,
                  }),
                    this.node.emit("REEL_STOP_SOUND", {
                      matrix: t,
                      count: e,
                      context: this,
                      isReelFalling: !1,
                      isReelReallyFalling: !1,
                    }),
                    this.node.emit("REEL_STOP_EFFECT", {
                      matrix: t,
                      count: e,
                      context: this,
                      isReelFalling: !1,
                      isReelReallyFalling: !1,
                    }),
                    this.node.emit("REEL_STOP_MISC", {
                      matrix: t,
                      count: e,
                      context: this,
                      isReelFalling: !1,
                      isReelReallyFalling: !1,
                    }),
                    this.checkReelStopping(i);
                  var n = this.dataStore.playSession.state;
                  if (this.columnsHaveSpecialSymbol) {
                    var o = this.stopSpinningCallbackCount - 1;
                    this.columnsHaveSpecialSymbol[o] &&
                      (0 == o ||
                        (this.columnsHaveSpecialSymbol[o - 2] &&
                          this.columnsHaveSpecialSymbol[0])) &&
                      (1 == n
                        ? this.soundPlayer &&
                          this.soundPlayer.playSfxOneShot("ScatterAppear")
                        : 2 == n &&
                          this.soundPlayer &&
                          this.soundPlayer.playSfxOneShot(
                            "JackpotSymbolAppear"
                          ));
                  }
                }),
                (n.checkReelStopping = function (t) {
                  var i = this,
                    e = this.stopSpinningCallbackCount;
                  e >= this.reels.length &&
                    this._tableStopCB &&
                    "function" == typeof this._tableStopCB &&
                    (t &&
                      this.reels.forEach(function (t) {
                        t.children.forEach(function (t) {
                          t.emit("RESET");
                        });
                      }),
                    this.reels.forEach(function (t) {
                      t.children.forEach(function (t) {
                        (t.position.y >= 300 || t.position.y <= -300) &&
                          i.setOpacity(t, 1);
                      });
                    }),
                    this.scheduleOnce(
                      function () {
                        i._tableStopCB &&
                          (i._tableStopCB(), (i._tableStopCB = null));
                      },
                      this.isNearWin ? 0.2 : 0.048
                    )),
                    this.reels[e - 1].children.forEach(function (t) {
                      "A" != t.symbol || t.emit("PLAY_ANIM_ACTIVE_IDLE");
                    });
                }),
                (n.checkReelStopFalling = function (t) {
                  this.stopSpinningCallbackCount++, this.checkReelStopping(t);
                }),
                (n.setDropSymbols = function (t) {
                  var i = t.isDropSymbols;
                  this.isDropSymbols = i;
                }),
                (n.showSymbolWaitingEffect = function () {
                  var t = this;
                  this.tweenWaitEffect && this.tweenWaitEffect.stop(),
                    (this.tweenWaitEffect = o(this.node)
                      .delay(2)
                      .call(function () {
                        t.reels.forEach(function (t) {
                          t.children.forEach(function (t) {
                            t.emit("PLAY_ANIM_WAIT");
                          });
                        }),
                          (t.tweenWaitEffect = null);
                      })),
                    this.tweenWaitEffect.start();
                }),
                (n.stopSymbolWaitingEffect = function () {
                  this.tweenWaitEffect &&
                    (this.tweenWaitEffect.stop(),
                    (this.tweenWaitEffect = null)),
                    this.reels.forEach(function (t) {
                      t.children.forEach(function (t) {
                        t.emit("STOP_ANIM_WAIT");
                      });
                    });
                }),
                (n.updateReelConfig = function () {
                  var t =
                    this.config[this.isTurbo ? "TABLE_TURBO" : "TABLE_NORMAL"];
                  this.reels.forEach(function (i) {
                    i.emit("UPDATE_REEL_CONFIG", t);
                  });
                }),
                (n.changeMatrix = function (i) {
                  var e = i.matrix;
                  t.prototype.changeMatrix.call(this, { matrix: e }),
                    this.reels.forEach(function (t) {
                      t.emit("SET_SYMBOL_SIBLING_INDEX", !0);
                    });
                }),
                (n.checkPlaySoundSpecialSymbols = function (t) {
                  this.columnsHaveSpecialSymbol = [];
                  for (var i = 0; i < t.length; i++) {
                    this.columnsHaveSpecialSymbol[i] = !1;
                    for (var e = 1; e < 4; e++)
                      ("JP" != t[i][e] && "A" != t[i][e]) ||
                        (this.columnsHaveSpecialSymbol[i] = !0);
                  }
                }),
                (n.showStaticSymbol = function (t) {
                  void 0 === t && (t = !1),
                    this.reels.forEach(function (i) {
                      i.children.forEach(function (i) {
                        "JP" !== i.symbol && i.emit("SHOW_STATIC", t);
                      });
                    });
                }),
                e
              );
            })(l))
          ) || a
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableHistory9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
    "./SlotSymbolHistory9937.ts",
  ],
  function (e) {
    "use strict";
    var t, i, o, n, s, a, r, l, h, c, u, b, m, y, p;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (a = e._decorator),
            (r = e.Node),
            (l = e.Prefab),
            (h = e.CCInteger),
            (c = e.NodePool),
            (u = e.v3),
            (b = e.instantiate);
        },
        function (e) {
          m = e.formatWalletMoney;
        },
        function (e) {
          y = e.GameObject;
        },
        function (e) {
          p = e.SlotSymbolHistory9937;
        },
      ],
      execute: function () {
        var f,
          d,
          g,
          v,
          P,
          S,
          G,
          H,
          T,
          w,
          x,
          I,
          R,
          N,
          D,
          M,
          B,
          F,
          L,
          E,
          _,
          z,
          C,
          O;
        s._RF.push(
          {},
          "07d90vPFKRF3ZfhtSLSh9BU",
          "SlotTableHistory9937",
          void 0
        );
        var Y = a.ccclass,
          W = a.property;
        e(
          "SlotTableHistory9937",
          ((f = Y("SlotTableHistory9937")),
          (d = W({ type: r })),
          (g = W({ type: r })),
          (v = W({ type: r })),
          (P = W({ type: r })),
          (S = W({ type: r })),
          (G = W({ type: l })),
          (H = W({ type: l })),
          (T = W({ type: h })),
          (w = W({ type: r })),
          (x = W({ type: r })),
          f(
            ((N = t(
              (R = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, s = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    o(t, "freeGame", N, n(t)),
                    o(t, "normalGame", D, n(t)),
                    o(t, "bonusGame", M, n(t)),
                    o(t, "topupGame", B, n(t)),
                    o(t, "symbolNode", F, n(t)),
                    o(t, "symbolPrefab", L, n(t)),
                    o(t, "symbolBonus", E, n(t)),
                    o(t, "scaleRate", _, n(t)),
                    o(t, "scaleNode", z, n(t)),
                    o(t, "paylineInfo", C, n(t)),
                    o(t, "isFormatMatrix", O, n(t)),
                    (t.symbolPool = void 0),
                    (t.bonusPool = void 0),
                    (t.bonusPositions = void 0),
                    (t.currentFree = void 0),
                    (t.paylineTime = void 0),
                    (t.betDenom = void 0),
                    (t.currentMode = void 0),
                    (t.martrixFormat = void 0),
                    (t.showingPayline = void 0),
                    (t.listSymbols = void 0),
                    (t.matrix = void 0),
                    t
                  );
                }
                i(t, e);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      (this.symbolPool = new c("SymbolPool")),
                      (this.bonusPool = new c("BonusPool")),
                      (this.bonusPositions = this.bonusGame
                        ? this.bonusGame.getChildByName("Position")
                        : null),
                      (this.currentFree = 0),
                      (this.paylineTime = 2),
                      (this.show = this.show.bind(this)),
                      (this.hide = this.hide.bind(this));
                  }),
                  (s.setFreePage = function (e) {
                    this.currentFree = e;
                  }),
                  (s.renderResult = function (e) {
                    switch (
                      ((this.normalGame.active = !1),
                      (this.freeGame.active = !1),
                      this.bonusGame && (this.bonusGame.active = !1),
                      this.topupGame && (this.topupGame.active = !1),
                      this.clearTable(),
                      (this.betDenom = e.betDenom),
                      (this.currentMode = e.mode),
                      (this.martrixFormat = e.matrixFormat),
                      e.mode)
                    ) {
                      case "normal":
                        (this.normalGame.active = !0),
                          this.renderGameTable(e.matrixResult, e.matrixFormat),
                          this.renderExtendData(e),
                          (this.scaleNode.scale = u(
                            this.scaleRate,
                            this.scaleRate,
                            this.scaleRate
                          ));
                        break;
                      case "free":
                        (this.freeGame.active = !0),
                          this.renderGameTable(e.matrixResult, e.matrixFormat),
                          this.renderExtendData(e),
                          (this.scaleNode.scale = u(
                            this.scaleRate,
                            this.scaleRate,
                            this.scaleRate
                          ));
                        break;
                      case "bonus":
                        (this.bonusGame.active = !0),
                          this.renderBonusTable(
                            e.matrixResult,
                            e.matrixFormat,
                            e.betDenom,
                            e.bettingLines
                          ),
                          this.renderExtendBonusData(e),
                          (this.scaleNode.scale = u(
                            this.scaleRate,
                            this.scaleRate,
                            this.scaleRate
                          ));
                        break;
                      case "topup":
                        this.topupGame &&
                          ((this.topupGame.active = !0),
                          this.renderGameTable(e.matrixResult, e.matrixFormat),
                          this.renderExtendData(e),
                          (this.scaleNode.scale = u(
                            this.scaleRate,
                            this.scaleRate,
                            this.scaleRate
                          )));
                    }
                    this.node.opacity = 255;
                  }),
                  (s.renderGameTable = function (e, t) {
                    (this.listSymbols = []), (this.matrix = [[]]);
                    for (
                      var i = (t[0] / 2 - 0.5) * this.config.SYMBOL_HEIGHT,
                        o = (-t.length / 2 + 0.5) * this.config.SYMBOL_WIDTH,
                        n = t[0],
                        s = 0;
                      s < e.length;
                      s++
                    ) {
                      var a = Math.floor(s / n),
                        r = Math.floor(s % n);
                      if (0 != r) {
                        var l = this.getSymbol(this.currentMode);
                        l.val = e[s];
                        var h = o + a * this.config.SYMBOL_WIDTH,
                          c = i - r * this.config.SYMBOL_HEIGHT;
                        (l.parent = this.symbolNode),
                          l.setPosition(h, c),
                          l.getComponent(p).changeToSymbol(e[s]),
                          l.getComponent(p).enableHighlight(),
                          (l.col = a),
                          (l.row = r),
                          this.listSymbols.push(l);
                      }
                    }
                  }),
                  (s.renderExtendData = function (e) {}),
                  (s.renderExtendBonusData = function (e) {}),
                  (s.renderBonusTable = function (e, t, i, o) {
                    for (
                      var n = (-t.length / 2 + 0.5) * this.config.SYMBOL_WIDTH,
                        s = 0,
                        a = 0;
                      a < t.length;
                      a++
                    )
                      for (
                        var r = (t[a] / 2 - 0.5) * this.config.SYMBOL_HEIGHT,
                          l = 0;
                        l < t[a];
                        l++
                      ) {
                        var h = this.getSymbol(this.currentMode);
                        (h.parent = this.symbolNode),
                          h.setPosition(
                            n + a * this.config.SYMBOL_WIDTH,
                            r - l * this.config.SYMBOL_HEIGHT
                          ),
                          h.unOpen();
                        var c = parseInt(e[s]) * parseInt(i) * parseInt(o);
                        c >= 0 && h.setScore(m(c)),
                          this.bonusPositions &&
                            this.bonusPositions.children[s] &&
                            h.setPosition(
                              this.bonusPositions.children[s].position
                            ),
                          s++;
                      }
                  }),
                  (s.showPaylinePerline = function (e) {
                    var t = e.payLineID,
                      i = e.payLineWinNumbers,
                      o = this.config.PAY_LINE_MATRIX[t],
                      n = 0;
                    this.symbolNode.children.forEach(function (e) {
                      e.opacity = 100;
                    });
                    for (var s = 0; s < i; s++) {
                      var a = this.symbolNode.children[n + o[s]];
                      a && (a.opacity = 255), (n += this.martrixFormat[s]);
                    }
                  }),
                  (s.highlightPaylines = function (e, t, i) {
                    void 0 === t && (t = !1), void 0 === i && (i = !1);
                    for (var o = 0; o < this.listSymbols.length; o++)
                      this.listSymbols[o].getComponent(p).disableHighlight();
                    if (e && e.length > 0 && this.listSymbols)
                      for (var n = 0; n < e.length; n++)
                        for (
                          var s = e[n],
                            a = s.symbolID,
                            r = s.symbolCount,
                            l = 0;
                          l < this.listSymbols.length;
                          l++
                        ) {
                          var h = this.listSymbols[l];
                          (h.symbol == a || "K" == h.symbol) &&
                            h.col < r &&
                            h.getComponent(p).enableHighlight();
                        }
                    else if (t)
                      for (var c = 0; c < this.listSymbols.length; c++) {
                        var u = this.listSymbols[c];
                        "JP" == u.symbol
                          ? u.getComponent(p).enableHighlight()
                          : u.getComponent(p).disableHighlight();
                      }
                    else if (i)
                      for (var b = 0; b < this.listSymbols.length; b++) {
                        var m = this.listSymbols[b];
                        "A" == m.symbol
                          ? m.getComponent(p).enableHighlight()
                          : m.getComponent(p).disableHighlight();
                      }
                  }),
                  (s.showPaylineAllWay = function (e) {
                    var t = e.symbolId,
                      i = e.symbolCount;
                    this.symbolNode.children.forEach(function (e) {
                      e.val == t && e.col < i
                        ? (e.opacity = 255)
                        : (e.opacity = 100);
                    });
                  }),
                  (s.clearPayline = function () {
                    this.symbolNode.children.forEach(function (e) {
                      return (e.opacity = 255);
                    });
                  }),
                  (s.clearTable = function () {
                    var e = this.symbolPool;
                    for (
                      "bonus" == this.currentMode && (e = this.bonusPool),
                        this.showingPayline = !1;
                      this.symbolNode.children.length > 0;

                    )
                      e.put(this.symbolNode.children[0]);
                    this.paylineInfo.emit("HIDE_PAYLINE");
                  }),
                  (s.getSymbol = function (e) {
                    var t = this.symbolPool,
                      i = this.symbolPrefab;
                    "bonus" == e &&
                      ((t = this.bonusPool), (i = this.symbolBonus));
                    var o = t.get();
                    return o || (o = b(i)), o;
                  }),
                  (s.show = function () {
                    (this.node.active = !0), (this.node.opacity = 255);
                  }),
                  (s.hide = function () {
                    (this.node.opacity = 0), (this.node.active = !1);
                  }),
                  t
                );
              })(y)).prototype,
              "freeGame",
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
            (D = t(R.prototype, "normalGame", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = t(R.prototype, "bonusGame", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = t(R.prototype, "topupGame", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = t(R.prototype, "symbolNode", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = t(R.prototype, "symbolPrefab", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = t(R.prototype, "symbolBonus", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = t(R.prototype, "scaleRate", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1;
              },
            })),
            (z = t(R.prototype, "scaleNode", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (C = t(R.prototype, "paylineInfo", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (O = t(R.prototype, "isFormatMatrix", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (I = R))
          ) || I)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableMoney9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var n, i, o, e, r, s, a, c, l;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy), (s = t._decorator), (a = t.Node), (c = t.Vec3);
        },
        function (t) {
          l = t.GameObject;
        },
      ],
      execute: function () {
        var h, u, f, p, y;
        r._RF.push({}, "a21a9y5eX9DUanBRPE5wnXT", "SlotTableMoney9937", void 0);
        var d = s.ccclass,
          I = s.property;
        t(
          "SlotTableMoney9937",
          ((h = d("SlotTableMoney9937")),
          (u = I(a)),
          h(
            ((y = n(
              (p = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, r = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (n = t.call.apply(t, [this].concat(r)) || this),
                    o(n, "moneyHolder", y, e(n)),
                    (n.usingObjs = []),
                    (n.poolFactory = void 0),
                    (n.matrix = void 0),
                    n
                  );
                }
                i(n, t);
                var r = n.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "SETUP_PAYLINES",
                        this.setupPayLinesInfoMini,
                        this
                      ),
                      this.node.on(
                        "SHOW_WIN_INFO_MINI",
                        this.showWinInfoMini,
                        this
                      ),
                      this.node.on(
                        "HIDE_WIN_INFO_MINI",
                        this.hideWinInfoMini,
                        this
                      ),
                      this.node.on(
                        "CLEAN_MONEY_TABLE",
                        this.cleanObjects,
                        this
                      ),
                      (this.poolFactory = this.mainDirector.poolFactory);
                  }),
                  (r.setupPayLinesInfoMini = function (t, n, i) {
                    var o = this;
                    (this.matrix = [].concat(t)),
                      n &&
                        n.forEach(function (t) {
                          var n = t.symbolName,
                            e = t.symbolCount,
                            r = t.totalWinAmount,
                            s = o.getColAppear(n, e, o.matrix),
                            a = s.colAppear,
                            c = s.rowAppear,
                            l = Number(Number(r) / i),
                            h = o.createMoneyPayLineInfo(
                              o.moneyHolder,
                              a,
                              c,
                              l
                            );
                          o.usingObjs.push(h);
                        });
                  }),
                  (r.getColAppear = function (t, n, i) {
                    var o = 1;
                    (4 != n && 5 != n) || (o = 2);
                    var e = this.findColInLeft(t, o, i);
                    -1 == e && (e = this.findColInRight(t, o, i));
                    var r = i[(o = e)];
                    return {
                      rowAppear: r[2] == t ? 2 : r[1] == t ? 1 : 3,
                      colAppear: o,
                    };
                  }),
                  (r.findColInRight = function (t, n, i) {
                    for (
                      var o = -1, e = n;
                      e < i.length && this.checkOnlyWildInCol(t, e, i);
                      e++
                    )
                      o = e;
                    return -1 != o ? (o + 1 < i.length ? o + 1 : o) : n;
                  }),
                  (r.findColInLeft = function (t, n, i) {
                    for (
                      var o = -1, e = n;
                      e >= 0 && this.checkOnlyWildInCol(t, e, i);
                      e--
                    )
                      o = e;
                    return -1 != o ? o - 1 : n;
                  }),
                  (r.checkOnlyWildInCol = function (t, n, i) {
                    for (var o = i[n], e = 0; e < o.length; e++)
                      if (0 != e && o[e] == t) return !1;
                    for (var r = 0; r < o.length; r++)
                      if (0 != r && "K" == o[r]) return !0;
                    return !1;
                  }),
                  (r.getXPosition = function (t) {
                    return (
                      -(this.node.tableFormat.length / 2 - 0.5) *
                        this.config.SYMBOL_WIDTH +
                      this.config.SYMBOL_WIDTH * t
                    );
                  }),
                  (r.getYPosition = function (t) {
                    return (
                      (this.node.tableFormat[2] / 2 - t - 0.5) *
                      this.config.SYMBOL_HEIGHT
                    );
                  }),
                  (r.createMoneyPayLineInfo = function (t, n, i, o) {
                    var e = this.poolFactory.getObject(
                        "PayLineWinInfoMini9937"
                      ),
                      r = this.getXPosition(n),
                      s = this.getYPosition(i) - 45;
                    return (
                      (e.active = !0),
                      (e.parent = t),
                      e.setPosition(new c(r, s, 0)),
                      this.setOpacity(e, 1),
                      e.emit("UPDATE_DATA", o),
                      e
                    );
                  }),
                  (r.showWinInfoMini = function (t) {
                    var n = this;
                    void 0 === t && (t = 0),
                      this.setOpacity(this.moneyHolder, 255),
                      this.usingObjs.forEach(function (t) {
                        n.setOpacity(t, 255);
                      }),
                      this.scheduleOnce(function () {
                        n.fadeOut(n.moneyHolder, 0.05);
                      }, t);
                  }),
                  (r.hideWinInfoMini = function () {
                    var t = this;
                    this.usingObjs.forEach(function (n) {
                      t.setOpacity(n, 1);
                    });
                  }),
                  (r.cleanObjects = function () {
                    var t = this;
                    this.usingObjs.forEach(function (n) {
                      t.poolFactory.removeObject(n);
                    }),
                      (this.usingObjs = []);
                  }),
                  n
                );
              })(l)).prototype,
              "moneyHolder",
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
            (f = p))
          ) || f)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableNearwinEffect9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotTableNearWinEffect.ts"],
  function (t) {
    "use strict";
    var i, e, s, a;
    return {
      setters: [
        function (t) {
          i = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (s = t._decorator);
        },
        function (t) {
          a = t.SlotTableNearWinEffect;
        },
      ],
      execute: function () {
        var n;
        e._RF.push(
          {},
          "2faccl5ImhLBLz90BBRPMe8",
          "SlotTableNearwinEffect9937",
          void 0
        );
        var r = s.ccclass;
        s.property,
          t(
            "SlotTableNearwinEffect9937",
            r("SlotTableNearwinEffect9937")(
              (n = (function (t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.adjustReelDelay = function (t) {
                    var i = t.reels,
                      e = t.matrix,
                      s = 0,
                      a = 0,
                      n = !1;
                    if (((this.nearWinList = []), e))
                      for (
                        var r = this.dataStore.playSession,
                          o = r.state,
                          c = r.subState,
                          h =
                            this.isSkipNearWinTurbo &&
                            this.dataStore &&
                            this.dataStore.modeTurbo,
                          l = 0;
                        l < e.length;
                        l++
                      ) {
                        for (
                          var u =
                              s >= this.startAtScatterCount &&
                              s < this.stopAtScatterCount &&
                              !h,
                            W = a >= this.startAtJackpotCount && !h,
                            S = u || W,
                            f = 0;
                          f < e[l].length;
                          ++f
                        ) {
                          var N = e[l][f];
                          N === this.scatterSymbol && 0 != f
                            ? s++
                            : N === this.jackpotSymbol && 0 != f && a++;
                        }
                        (S = S || W),
                          !(n = n || S) ||
                            4 != l ||
                            (1 != o && 2 != c) ||
                            ((this.nearWinList[l] = {
                              isNearWinScatter: u,
                              isNearWinJackpot: W,
                              isNearWin: S,
                            }),
                            i[l].emit("EXTEND_TIME_STOP", S));
                      }
                  }),
                  (s.reelStopNearWin = function (t) {
                    var i = t.count,
                      e = t.context,
                      s = this.node.reels;
                    e.isFastToResult ||
                      this.runAnimationNearWin(this.scatterSymbol, i);
                    var a = this.dataStore.playSession.state;
                    if (
                      this.nearWinList &&
                      this.nearWinList[i] &&
                      this.nearWinList[i].isNearWin &&
                      !e.isFastToResult
                    ) {
                      ((1 == a && this.nearWinList[i].isNearWinScatter) ||
                        this.nearWinList[i].isNearWinJackpot) &&
                        this.showAnimNearWin(4);
                      for (var n = i; n < s.length; n++)
                        this.nearWinList[n] &&
                          this.nearWinList[n].isNearWin &&
                          s[n].emit("UPDATE_NEAR_WIN_SPEED");
                      this.nearWinList[i].isNearWinScatter &&
                        this.runAnimationNearWin(this.scatterSymbol, i),
                        this.nearWinList[i].isNearWinJackpot &&
                          this.runAnimationNearWin(this.jackpotSymbol, i);
                    } else this.stopSoundNearWin();
                    i >= s.length &&
                      (this.clearSymbolPaylines(),
                      this.hideAnimNearWin(),
                      this.stopSoundNearWin());
                  }),
                  e
                );
              })(a))
            ) || n
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTablePayLine9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./CustomEnum.ts",
    "./SlotTablePayline.ts",
  ],
  function (i) {
    "use strict";
    var e, t, o, l, n, a, s;
    return {
      setters: [
        function (i) {
          e = i.inheritsLoose;
        },
        function (i) {
          (t = i.cclegacy), (o = i._decorator), (l = i.tween);
        },
        function (i) {
          n = i.setOpacity;
        },
        function (i) {
          a = i.PerformanceLevel;
        },
        function (i) {
          s = i.SlotTablePayline;
        },
      ],
      execute: function () {
        var r;
        t._RF.push(
          {},
          "fc1af4NVk5BvZK+Y3lMrw14",
          "SlotTablePayLine9937",
          void 0
        );
        var h = o.ccclass;
        o.property,
          i(
            "SlotTablePayLine9937",
            h("SlotTablePayLine9937")(
              (r = (function (i) {
                function t() {
                  for (
                    var e, t = arguments.length, o = new Array(t), l = 0;
                    l < t;
                    l++
                  )
                    o[l] = arguments[l];
                  return (
                    ((e =
                      i.call.apply(i, [this].concat(o)) ||
                      this).tweenWaitingShowPaylines = void 0),
                    (e.tweenDimColorAllSymbolPaylines = void 0),
                    e
                  );
                }
                e(t, i);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on(
                        "CLEAR_WAITING_PAYLINES",
                        this.clearWaitingPaylines,
                        this
                      ),
                      this.node.on(
                        "CHECK_WAITING_SHOW_PAYLINES",
                        this.checkWaitingShowPaylines,
                        this
                      ),
                      this.node.on(
                        "RESET_SYMBOL_PAYLINE",
                        this.resetSymbolPaylines,
                        this
                      );
                  }),
                  (o.setupPaylines = function (e, t) {
                    void 0 === e && (e = []),
                      void 0 === t && (t = []),
                      i.prototype.setupPaylines.call(this, e, t);
                    var o = this.node.tableFormat;
                    if (t && t.length > 0)
                      for (var l = 0; l < o.length; ++l)
                        this.node.reels[l].emit("SET_UP_PAY_LINES", t);
                  }),
                  (o.createPaylineObject = function (i, e) {
                    var t = this.node.reels[i].getShowSymbols()[e];
                    if (t && 0 != e) {
                      this.poolFactory ||
                        (this.poolFactory = this.mainDirector.poolFactory);
                      var o = this.checkHasPayline(t, this.payLineNormals),
                        l = this.getSymbolSpineData(t.symbol),
                        n =
                          this.animationLevel >= Number(a.Medium) && null != l;
                      t.emit(
                        "INIT_FOR_PAYLINE",
                        this.staticPaylineHolder,
                        this.poolFactory.node,
                        n
                      );
                      var s = {
                        symbol: t,
                        winLineFrame: o ? this.createWinLineFrame(i, e) : null,
                        isShowing: !0,
                      };
                      return (
                        (this.paylinesMatrix[i][e] = s),
                        "A" == t.symbol
                          ? this.scatterHolderNode.push(s)
                          : "R" == t.symbol
                          ? this.bonusHolderNode.push(s)
                          : "K" == t.symbol && this.wildHolderNode.push(s),
                        t.symbol == this.jackpotSymbol &&
                          this.jackpotHolderNode.push(s),
                        s
                      );
                    }
                  }),
                  (o.checkHasPayline = function (i, e) {
                    void 0 === e && (e = []);
                    var t = !1;
                    return (
                      e.forEach(function (e) {
                        (e.symbolName != i.symbol && "K" != i.symbol) ||
                          (t = !0);
                      }),
                      t
                    );
                  }),
                  (o.showNormalPaylineAllLine = function (i) {
                    for (
                      var e = i.symbolName,
                        t = i.symbolCount,
                        o = this.dataStore.modeTurbo,
                        l = 0;
                      l < t;
                      l++
                    )
                      for (var n = 1; n < this.paylinesMatrix[l].length; n++) {
                        var a = this.paylinesMatrix[l][n],
                          s = a.symbol,
                          r = a.winLineFrame;
                        s &&
                          r &&
                          ((s.isPayline = !1),
                          0 == n ||
                            (s.symbol != e && "K" != s.symbol) ||
                            ((s.isPayline = !0),
                            r &&
                              s &&
                              ((r.active = !0),
                              r.emit("PLAY_ANIMATION", o),
                              s.emit("ENABLE_HIGHLIGHT"),
                              s.emit("SHOW_PAY_LINE", o))));
                      }
                  }),
                  (o.showAllNormalPayLines = function (i, e) {
                    var t = this;
                    if ((void 0 === e && (e = 0), this.payLineNormals)) {
                      i && i(),
                        (this.paylineIndex = e),
                        (this.showingPayline = !0),
                        (this.paylineType = "normal");
                      var o = this.curentConfig.ANIMATION_DURATION;
                      if (
                        (this.disableHighlightNormalPaylines(),
                        n(this.paylineHolder, 255),
                        this.payLineNormals)
                      ) {
                        for (var a = 0; a < this.payLineNormals.length; a++) {
                          var s = this.payLineNormals[a];
                          this.showNormalPayline(s);
                        }
                        this.payLineNormals.length > 0 &&
                          this.soundPlayer &&
                          this.soundPlayer.playSfx("WIN_LINE");
                      }
                      this.node.emit("SHOW_WIN_INFO_MINI", 0.77 * o),
                        this.tweenWaitingShowPaylines &&
                          this.tweenWaitingShowPaylines.stop(),
                        (this.tweenWaitingShowPaylines = l(this.node)
                          .delay(o)
                          .call(function () {
                            t.playEffectDimColorSymbols(!1),
                              (t.tweenWaitingShowPaylines = null);
                          })),
                        this.tweenWaitingShowPaylines.start();
                    } else i && i();
                  }),
                  (o.disableHighlightNormalPaylines = function () {
                    for (var i = 0; i < this.paylinesMatrix.length; ++i)
                      for (
                        var e = this.paylinesMatrix[i].length - 1;
                        e >= 1;
                        --e
                      ) {
                        var t = this.paylinesMatrix[i][e].symbol;
                        t && t.emit("DISABLE_HIGHLIGHT");
                      }
                  }),
                  (o.resetSymbolPaylines = function () {
                    for (var i = 0; i < this.paylinesMatrix.length; ++i)
                      for (var e = 1; e < this.paylinesMatrix[i].length; ++e) {
                        var t = this.paylinesMatrix[i][e].symbol;
                        t &&
                          ((t.active = !0),
                          t.emit("ENABLE_HIGHLIGHT"),
                          t.emit("RESET"),
                          t.emit("PLAY_ANIM_ACTIVE_IDLE"));
                      }
                  }),
                  (o.checkWaitingShowPaylines = function (i) {
                    void 0 === i && (i = null);
                    var e = this.showingPayline;
                    i && i(e);
                  }),
                  (o.clearWaitingPaylines = function () {
                    this.showingPayline = !1;
                  }),
                  (o.showScatterPayLine = function (i) {
                    i && i(), this.disableHighlightNormalPaylines();
                    for (var e = 0; e < this.scatterHolderNode.length; e++)
                      this.scatterHolderNode[e].symbol.active = !1;
                  }),
                  (o.showJackpotPayLine = function (i) {
                    var e = this;
                    this.showSpecialPayline(this.jackpotHolderNode, i),
                      this.scheduleOnce(function () {
                        for (var i = 0; i < e.jackpotHolderNode.length; i++)
                          e.jackpotHolderNode[i].symbol.active = !1;
                      }, 1),
                      this.scheduleOnce(function () {
                        for (var i = 0; i < e.jackpotHolderNode.length; i++)
                          e.jackpotHolderNode[i].symbol.active = !0;
                      }, 5);
                  }),
                  (o.showSpecialPayline = function (i, e) {
                    this.hideShowingPayline(),
                      this.setOpacity(this.paylineHolder, 255),
                      this.disableHighlightNormalPaylines(),
                      i.forEach(function (i) {
                        var e = i.symbol,
                          t = i.paylineSymbol;
                        e && e.emit("ENABLE_HIGHLIGHT"),
                          t &&
                            (t.emit("PLAY_ANIMATION"),
                            t.emit("ENABLE_HIGHLIGHT"));
                      }),
                      (this._callbackSpecialPayline = function () {
                        e && "function" == typeof e && e();
                      }),
                      this.scheduleOnce(
                        this._callbackSpecialPayline,
                        this.curentConfig.ANIMATION_DURATION
                      );
                  }),
                  (o.playEffectDimColorSymbols = function (i) {
                    for (
                      var e = this, t = this.dataStore.modeTurbo, o = 0;
                      o < this.paylinesMatrix.length;
                      ++o
                    )
                      for (
                        var n = this.paylinesMatrix[o].length - 1;
                        n >= 1;
                        --n
                      ) {
                        var a = this.paylinesMatrix[o][n].symbol;
                        a && a.emit("EFFECT_DIM_SYMBOLS", i, t);
                      }
                    var s = t ? 0.5 / 6 : 10 / 60;
                    this.tweenDimColorAllSymbolPaylines &&
                      this.tweenDimColorAllSymbolPaylines.stop(),
                      (this.tweenDimColorAllSymbolPaylines = l(this.node)
                        .delay(s)
                        .call(function () {
                          (e.showingPayline = !1),
                            e.node.emit("CLEAN_MONEY_TABLE"),
                            e.node.emit("SHOW_PAYLINES_COMPLETE"),
                            (e.tweenDimColorAllSymbolPaylines = null);
                        })),
                      this.tweenDimColorAllSymbolPaylines.start();
                  }),
                  t
                );
              })(s))
            ) || r
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableSoundEffect9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (e) {
    "use strict";
    var t, i, l, n;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (i = e.cclegacy), (l = e._decorator);
        },
        function (e) {
          n = e.GameObject;
        },
      ],
      execute: function () {
        var o;
        i._RF.push(
          {},
          "6ae54k7dt1N9Zd3Tw9nFAsd",
          "SlotTableSoundEffect9937",
          void 0
        );
        var s = l.ccclass;
        l.property,
          e(
            "SlotTableSoundEffect9937",
            s("SlotTableSoundEffect9937")(
              (o = (function (e) {
                function i() {
                  for (
                    var t, i = arguments.length, l = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    l[n] = arguments[n];
                  return (
                    ((t =
                      e.call.apply(e, [this].concat(l)) ||
                      this).countReelFalling = void 0),
                    (t.isOnceTimeScrolling = void 0),
                    (t.countReelScrolling = void 0),
                    (t.isOnceTimeFalling = void 0),
                    t
                  );
                }
                t(i, e);
                var l = i.prototype;
                return (
                  (l.onLoad = function () {
                    this.node.on("REEL_STOP_SOUND", this.reelStopSound, this),
                      this.node.on("TABLE_RESET_SOUND", this.resetSound, this),
                      this.resetValues();
                  }),
                  (l.resetValues = function () {
                    (this.countReelFalling = 0),
                      (this.countReelScrolling = 0),
                      (this.isOnceTimeScrolling = !1),
                      (this.isOnceTimeFalling = !1);
                  }),
                  (l.resetSound = function () {
                    this.resetValues();
                  }),
                  (l.reelStopSound = function (e) {
                    var t = e.isReelFalling,
                      i = e.isReelReallyFalling;
                    t
                      ? i && this.countReelFalling++
                      : this.dataStore.modeTurbo
                      ? this.countReelScrolling++
                      : this.soundPlayer.playSfx("DropSymbols"),
                      1 != this.countReelFalling || this.isOnceTimeFalling
                        ? this.dataStore.modeTurbo &&
                          1 == this.countReelScrolling &&
                          !this.isOnceTimeScrolling &&
                          (this.soundPlayer.playSfx("DropSymbols"),
                          (this.isOnceTimeScrolling = !0))
                        : (this.soundPlayer.playSfx("DropSymbols"),
                          (this.isOnceTimeFalling = !0));
                  }),
                  i
                );
              })(n))
            ) || o
          );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableTouchSymbol9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var n, o, e, i, s, r, l, a, h, c;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy),
            (e = t._decorator),
            (i = t.find),
            (s = t.Camera),
            (r = t.Node),
            (l = t.Vec3),
            (a = t.UITransform),
            (h = t.Rect);
        },
        function (t) {
          c = t.GameObject;
        },
      ],
      execute: function () {
        var u;
        o._RF.push(
          {},
          "990b5hkOGpJRof3aeIsuSG9",
          "SlotTableTouchSymbol9937",
          void 0
        );
        var g = e.ccclass;
        e.property,
          t(
            "SlotTableTouchSymbol9937",
            g("SlotTableTouchSymbol9937")(
              (u = (function (t) {
                function o() {
                  for (
                    var n, o = arguments.length, e = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    e[i] = arguments[i];
                  return (
                    ((n =
                      t.call.apply(t, [this].concat(e)) ||
                      this).eventListenterManager = null),
                    (n.isAllowTouchSymbol = !0),
                    (n.canvas = null),
                    (n.camera = null),
                    (n.allSymbols = []),
                    (n.curPoint = null),
                    (n.matrix = []),
                    n
                  );
                }
                n(o, t);
                var e = o.prototype;
                return (
                  (e.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.init(),
                      this.node.on(
                        "ALLOW_TOUCH_SYMBOL",
                        this.allowTouchSymbol,
                        this
                      ),
                      this.node.on("START_SPINNING", this.startSpinning, this),
                      this.eventListenterManager ||
                        (this.eventListenterManager =
                          this.mainDirector.eventManager),
                      this.registerEvent();
                  }),
                  (e.startSpinning = function () {
                    this.guiMgr && this.guiMgr.node.emit("HIDE_INFO_SYMBOL");
                  }),
                  (e.registerEvent = function () {
                    this.eventListenterManager &&
                      this.eventListenterManager.on(
                        "ON_SHOW_SYMBOL_INFO",
                        this.onShowSymbolInfo,
                        this
                      );
                  }),
                  (e.unRegisterAll = function () {
                    this.eventListenterManager &&
                      this.eventListenterManager.targetOff(this);
                  }),
                  (e.allowTouchSymbol = function (t) {
                    void 0 === t && (t = !1),
                      (this.isAllowTouchSymbol = t),
                      this.guiMgr && this.guiMgr.node.emit("HIDE_INFO_SYMBOL");
                  }),
                  (e.init = function () {
                    (this.canvas = i("Canvas")),
                      this.canvas &&
                        (this.camera = this.canvas.getComponentInChildren(s)),
                      this.camera &&
                        this.node.on(
                          r.EventType.TOUCH_END,
                          this.onTouchEnd,
                          this
                        );
                  }),
                  (e.onTouchEnd = function (t) {
                    var n = new l(0, 0, 0),
                      o = new l(t.getLocation().x, t.getLocation().y, 0);
                    if (
                      (this.camera.screenToWorld(o, n),
                      0 != this.isAllowTouchSymbol)
                    ) {
                      this.allSymbols = this.getAllSymbol();
                      for (var e = 0; e < this.allSymbols.length; e++) {
                        var i = this.allSymbols[e],
                          s = this.config.SYMBOL_WIDTH,
                          r = this.config.SYMBOL_HEIGHT;
                        (this.curPoint = i.parent
                          .getComponent(a)
                          .convertToNodeSpaceAR(n)),
                          new h(
                            i.getPosition().x - s / 2,
                            i.getPosition().y - r / 2,
                            s,
                            r
                          ).contains(this.curPoint) &&
                            i.row > 1 &&
                            i.row < 5 &&
                            this.guiMgr &&
                            this.guiMgr.node.emit("SHOW_INFO_SYMBOL", i);
                      }
                    }
                  }),
                  (e.onShowSymbolInfo = function (t) {
                    this.allSymbols = this.getAllSymbol();
                  }),
                  (e.getAllSymbol = function () {
                    for (
                      var t = [], n = this.node.reels, o = 0;
                      o < n.length;
                      o++
                    ) {
                      var e = n[o];
                      if (e && e.children.length > 0) {
                        var i = [].concat(e.children);
                        i.sort(function (t, n) {
                          return n.getPosition().y - t.getPosition().y;
                        });
                        for (var s = 0; s < i.length; s++) {
                          var r = i[s];
                          r && t.push(r),
                            (r.col = o),
                            (r.row = s),
                            (r.isLeftBorder = 0 === o || 1 == o);
                        }
                      }
                    }
                    return t;
                  }),
                  (e.onDestroy = function () {
                    this.unRegisterAll();
                  }),
                  o
                );
              })(c))
            ) || u
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SmallToolTip9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var e, i, o, n, r, s, a, l, c, p, u;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (s = t._decorator),
            (a = t.Sprite),
            (l = t.SpriteFrame),
            (c = t.Vec3),
            (p = t.tween);
        },
        function (t) {
          u = t.GameObject;
        },
      ],
      execute: function () {
        var h, b, y, d, f, T, m, w, v, S, g;
        r._RF.push({}, "3570barukpB74wMXqHqumxY", "SmallToolTip9937", void 0);
        var I = s.ccclass,
          L = s.property;
        t(
          "SmallToolTip9937",
          ((h = I("SmallToolTip9937")),
          (b = L({ type: a })),
          (y = L({ type: a })),
          (d = L({ type: l })),
          (f = L({ type: l })),
          h(
            ((w = e(
              (m = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    o(e, "content", w, n(e)),
                    o(e, "turboIcon", v, n(e)),
                    o(e, "sprites", S, n(e)),
                    o(e, "spritesTurbo", g, n(e)),
                    (e.tween = void 0),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "SHOW_SMALL_TOOL_TIP",
                        this.showSmallToolTip.bind(this)
                      ),
                      this.setOpacity(this.node, 0);
                  }),
                  (r.showSmallToolTip = function (t) {
                    var e = this;
                    this.setOpacity(this.node, 255),
                      (this.turboIcon.node.active = !1),
                      (this.content.spriteFrame = this.sprites[t]),
                      (this.node.scale = new c(1, 1, 1)),
                      this.tween && this.tween.stop(),
                      t < 2 &&
                        ((this.turboIcon.node.active = !0),
                        (this.turboIcon.spriteFrame = this.spritesTurbo[t])),
                      (this.tween = p(this.node)
                        .to(0.1, { scale: new c(1.2, 1.2, 1.2) })
                        .to(0.1, { scale: new c(1, 1, 1) })
                        .delay(1)
                        .call(function () {
                          e.fadeTo(e.node, 0.5, 1);
                        })
                        .start());
                  }),
                  e
                );
              })(u)).prototype,
              "content",
              [b],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (v = e(m.prototype, "turboIcon", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (S = e(m.prototype, "sprites", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (g = e(m.prototype, "spritesTurbo", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (T = m))
          ) || T)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SpinTimes9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpinTimes.ts"],
  function (i) {
    "use strict";
    var e, n, t, s;
    return {
      setters: [
        function (i) {
          e = i.inheritsLoose;
        },
        function (i) {
          (n = i.cclegacy), (t = i._decorator);
        },
        function (i) {
          s = i.SpinTimes;
        },
      ],
      execute: function () {
        var c;
        n._RF.push({}, "c87fdFJY9BObIRz7FKcThDK", "SpinTimes9937", void 0);
        var r = t.ccclass;
        t.property,
          i(
            "SpinTimes9937",
            r("SpinTimes9937")(
              (c = (function (i) {
                function n() {
                  return i.apply(this, arguments) || this;
                }
                return e(n, i), n;
              })(s))
            ) || c
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ToolTipWinInfo9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
    "./CustomEnum.ts",
  ],
  function (i) {
    "use strict";
    var t, n, e, o, l, s, a, r, u, h, p, T, c, f, m, d, w;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (n = i.inheritsLoose),
            (e = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (l = i.cclegacy),
            (s = i._decorator),
            (a = i.Node),
            (r = i.Label),
            (u = i.Sprite),
            (h = i.SpriteFrame),
            (p = i.sp),
            (T = i.tween),
            (c = i.v3),
            (f = i.Tween);
        },
        function (i) {
          m = i.formatMoney;
        },
        function (i) {
          d = i.GameObject;
        },
        function (i) {
          w = i.SlotGameMode;
        },
      ],
      execute: function () {
        var W, y, b, v, g, I, S, A, O, _, M, x, F, C, P, L, z;
        l._RF.push({}, "edceaIc3ZJMmJbb4tWcQEx4", "ToolTipWinInfo9937", void 0);
        var E = s.ccclass,
          G = s.property,
          j = "^ ",
          D = "# ",
          N = [2, 3, 5, 6, 9, 20];
        i(
          "ToolTipWinInfo9937",
          ((W = E("ToolTipWinInfo9937")),
          (y = G({ type: a })),
          (b = G({ type: a })),
          (v = G({ type: r })),
          (g = G(u)),
          (I = G(u)),
          (S = G(h)),
          (A = G(h)),
          W(
            ((M = t(
              (_ = (function (i) {
                function t() {
                  for (
                    var t, n = arguments.length, l = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    l[s] = arguments[s];
                  return (
                    (t = i.call.apply(i, [this].concat(l)) || this),
                    e(t, "animWin", M, o(t)),
                    e(t, "winInfo", x, o(t)),
                    e(t, "labelWinAmt", F, o(t)),
                    e(t, "toolTip", C, o(t)),
                    e(t, "multiply", P, o(t)),
                    e(t, "textTooltips", L, o(t)),
                    e(t, "multiplyFrames", z, o(t)),
                    (t._tweenValue = void 0),
                    (t._tweenToolTip = void 0),
                    (t.__tweenMoveToolTip = void 0),
                    (t.isShowingToolTip = !1),
                    (t.isShowingWinInfo = !1),
                    (t.indexTip = 0),
                    (t.isFreeGame = !1),
                    (t.animTotalWin = void 0),
                    (t.tweenMulSprite = void 0),
                    (t.isCounting = void 0),
                    (t.finalWinAmount = void 0),
                    (t.tweenTotalWin = void 0),
                    (t.tweenObj = { currentValue: 0 }),
                    t
                  );
                }
                n(t, i);
                var l = t.prototype;
                return (
                  (l.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on("UPDATE_WIN_INFO", this.updateWinInfo, this),
                      this.node.on("HIDE_WIN_INFO", this.hideWinInfo, this),
                      this.node.on(
                        "PLAY_ANIM_TOTAL_WIN",
                        this.playAnimTotalWin,
                        this
                      ),
                      this.node.on("SHOW_TOOL_TIP", this.showToolTip, this),
                      this.node.on(
                        "SHOW_TOOL_TIP_GAME_MODE",
                        this.showToolTipGameMode,
                        this
                      ),
                      (this.animTotalWin = this.animWin.getComponent(
                        p.Skeleton
                      ));
                  }),
                  (l.updateWinInfo = function (i, t) {
                    var n = this;
                    void 0 === t && (t = null);
                    var e = this.dataStore.modeTurbo,
                      o = i.multiplier,
                      l = i.winAmount,
                      s = void 0 === l ? 0 : l,
                      a = e ? 1.7 / 6 : 0.5;
                    if (
                      ((this.isShowingToolTip = !1),
                      (this.isShowingWinInfo = !0),
                      this.resetWinInfo(),
                      this.setOpacity(this.winInfo, 255),
                      this.soundPlayer && this.soundPlayer.playSfx("MoneyWin"),
                      (this.animWin.active = !0),
                      (this.animTotalWin.timeScale = 1),
                      this.animTotalWin.setAnimation(0, "Win", !1),
                      o > 1)
                    ) {
                      var r = s / o;
                      (this.labelWinAmt.string = m(r)),
                        this.scheduleOnce(function () {
                          n.playEffectMulWinInfo(s, o, t);
                        }, a);
                    } else
                      (this.labelWinAmt.string = D + m(s)),
                        this.animTotalWin.setCompleteListener(function () {
                          n.animTotalWin.setCompleteListener(function () {}),
                            t && t();
                        });
                  }),
                  (l.playAnimTotalWin = function (i, t) {
                    var n = this;
                    void 0 === t && (t = null);
                    var e = i.winAmount,
                      o = void 0 === e ? 0 : e,
                      l = i.playEffectCount;
                    (this.finalWinAmount = o),
                      (this.isShowingToolTip = !1),
                      (this.isShowingWinInfo = !0),
                      this.resetWinInfo(),
                      this.setOpacity(this.winInfo, 255),
                      (this.animTotalWin.timeScale = 1);
                    var s = this.dataStore.betData.getTotalBet(),
                      a = o / s;
                    a > 5 && a <= 10 && l
                      ? ((this.isCounting = !0),
                        (this.tweenObj.currentValue = 0),
                        this.soundPlayer &&
                          this.soundPlayer.playSfx("MoneyFinalCount"),
                        this.tweenTotalWin && this.tweenTotalWin.stop(),
                        (this.tweenTotalWin = T(this.tweenObj)
                          .to(1.5, { currentValue: o })
                          .call(function () {
                            (n.isCounting = !1),
                              (n.labelWinAmt.string = j + m(o)),
                              (n.tweenObj.currentValue = 0),
                              (n.animWin.active = !0),
                              n.setOpacity(n.animTotalWin.node, 255),
                              n.animTotalWin.setAnimation(0, "Total_win", !1),
                              t && t(),
                              (n.tweenTotalWin = null);
                          })
                          .start()))
                      : (t && t(),
                        (this.labelWinAmt.string = j + m(o)),
                        (this.animWin.active = !0),
                        this.soundPlayer &&
                          this.soundPlayer.playSfx("MoneyFinal"),
                        this.animTotalWin.setAnimation(0, "Total_win", !1));
                  }),
                  (l.playEffectMulWinInfo = function (i, t, n) {
                    var e = this;
                    void 0 === i && (i = 0), void 0 === n && (n = null);
                    var o = this.dataStore.modeTurbo,
                      l = o ? 0.3 : 2 / 3,
                      s = o ? 0.416 : 0.66;
                    this.animTotalWin.timeScale = 1;
                    var a = N.indexOf(t);
                    (this.multiply.getComponent(u).spriteFrame =
                      this.multiplyFrames[a]),
                      this.setOpacity(this.multiply.node, 255),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("MultiplyAppear"),
                      this.tweenMulSprite && this.tweenMulSprite.stop(),
                      (this.tweenMulSprite = T(this.multiply.node)
                        .to(l / 3, { scale: c(1.2, 1.2, 1.2) })
                        .to(l / 3, { scale: c(1, 1, 1) })
                        .call(function () {
                          e.fadeOut(e.multiply.node, l / 3);
                        })
                        .delay(l / 3)
                        .call(function () {
                          e.setOpacity(e.multiply.node, 1),
                            (e.labelWinAmt.string = D + m(i)),
                            e.animTotalWin.setAnimation(0, "Win", !1),
                            e.animTotalWin.setCompleteListener(function () {
                              e.animTotalWin.setCompleteListener(
                                function () {}
                              ),
                                (e.animWin.active = !1);
                            });
                        })
                        .delay(s)
                        .call(function () {
                          n && n(), (e.tweenMulSprite = null);
                        })
                        .start());
                  }),
                  (l.hideWinInfo = function () {
                    this.soundPlayer &&
                      this.soundPlayer.stopSfx("MoneyFinalCount"),
                      f.stopAllByTarget(this.winInfo),
                      this.fadeOut(this.winInfo, 0.7),
                      this.isCounting &&
                        ((this.isCounting = !1),
                        (this.labelWinAmt.string = j + m(this.finalWinAmount)));
                  }),
                  (l.lateUpdate = function () {
                    this.isCounting &&
                      (this.labelWinAmt.string =
                        j + m(this.tweenObj.currentValue));
                  }),
                  (l.showToolTip = function () {
                    var i = this;
                    if (!this.isShowingToolTip) {
                      var t = this.dataStore.currentGameMode == w.FreeGame;
                      (this.isShowingToolTip = !0), this.resetWinInfo();
                      var n = this.textTooltips[this.indexTip];
                      (this.toolTip.node.active = !0),
                        (this.toolTip.spriteFrame = n),
                        this.setOpacity(this.toolTip.node, 255),
                        (this._tweenToolTip = T(this.toolTip.node)
                          .delay(8)
                          .call(function () {
                            (i.isShowingToolTip = !1),
                              i.indexTip++,
                              i.indexTip == i.textTooltips.length &&
                                (i.indexTip = t ? 2 : 0),
                              i.showToolTip();
                          })
                          .start());
                    }
                  }),
                  (l.showToolTipGameMode = function (i) {
                    void 0 === i && (i = !1),
                      (this.indexTip = i ? 2 : 0),
                      (this.isShowingToolTip = !1),
                      this.showToolTip();
                  }),
                  (l.resetWinInfo = function () {
                    this.stopAllTween(),
                      (this.labelWinAmt.string = ""),
                      (this.animWin.active = !1),
                      (this.toolTip.node.active = !1),
                      this.winInfo.tweenFade && this.winInfo.tweenFade.stop(),
                      (this.winInfo.tweenFade = null),
                      this.setOpacity(this.winInfo, 1);
                  }),
                  (l.stopAllTween = function () {
                    this._tweenToolTip && this._tweenToolTip.stop(),
                      (this._tweenToolTip = null),
                      this.tweenTotalWin && this.tweenTotalWin.stop(),
                      (this.tweenTotalWin = null),
                      this.tweenMulSprite && this.tweenMulSprite.stop(),
                      (this.tweenMulSprite = null);
                  }),
                  t
                );
              })(d)).prototype,
              "animWin",
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
            (x = t(_.prototype, "winInfo", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = t(_.prototype, "labelWinAmt", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = t(_.prototype, "toolTip", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = t(_.prototype, "multiply", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = t(_.prototype, "textTooltips", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (z = t(_.prototype, "multiplyFrames", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (O = _))
          ) || O)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TotalWinPanel9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./CustomEnum.ts",
    "./TotalWinPanel.ts",
  ],
  function (t) {
    "use strict";
    var n, i, e, o, a, l, s, r, u, c, h, p, d, T, W, m;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (l = t._decorator),
            (s = t.Node),
            (r = t.Label),
            (u = t.tween),
            (c = t.Button),
            (h = t.sp);
        },
        function (t) {
          (p = t.setOpacity), (d = t.fadeIn), (T = t.formatMoney);
        },
        function (t) {
          W = t.TutorialTriggerType;
        },
        function (t) {
          m = t.TotalWinPanel;
        },
      ],
      execute: function () {
        var f, y, g, b, v, w, P;
        a._RF.push({}, "4c66bkA+WRD67JvaKR9T2r5", "TotalWinPanel9937", void 0);
        var A = l.ccclass,
          C = l.property,
          O = "Appear_win",
          S = "Win_loop";
        t(
          "TotalWinPanel9937",
          ((f = A("TotalWinPanel9937")),
          (y = C({ type: s })),
          (g = C({ type: s })),
          f(
            ((w = n(
              (v = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, a = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    a[l] = arguments[l];
                  return (
                    (n = t.call.apply(t, [this].concat(a)) || this),
                    e(n, "spineTotalWinPanel", w, o(n)),
                    e(n, "bgOverlay", P, o(n)),
                    (n.currentValue = void 0),
                    (n.labelWinAmount = void 0),
                    (n.isUpdating = void 0),
                    (n.tweenTotalWin = void 0),
                    (n.animTotalWin = void 0),
                    n
                  );
                }
                i(n, t);
                var a = n.prototype;
                return (
                  (a.show = function () {
                    p(this.node, 1), (this.node.active = !0), d(this.node, 0.2);
                  }),
                  (a.enter = function () {
                    var t = this;
                    this.content.winAmount || (this.content.winAmount = 0),
                      (this.currentValue = 0),
                      (this.labelWinAmount = this.winAmount.getComponent(r)),
                      (this.canClose = !1),
                      (this.isUpdating = !1),
                      (this.labelWinAmount.string = ""),
                      this.tweenTotalWin && this.tweenTotalWin.stop();
                    var n = Number(this.content.winAmount);
                    this.tweenTotalWin && this.tweenTotalWin.stop(),
                      this.playSoundTotalWin(),
                      (this.tweenTotalWin = u(this)),
                      this.tweenTotalWin
                        .delay(0.5)
                        .call(function () {
                          (t.closeBtn.getComponent(c).interactable = !0),
                            (t.isUpdating = !0),
                            (t.canClose = !0),
                            (t.bgOverlay._uiProps.colorDirty = !0);
                        })
                        .to(6.5, { currentValue: n })
                        .delay(2.5)
                        .call(function () {
                          t.exit(), (t.tweenTotalWin = null);
                        }),
                      this.tweenTotalWin.start(),
                      (this.spineTotalWinPanel.active = !0),
                      (this.spineTotalWinPanel.opacity = 255),
                      (this.animTotalWin = this.spineTotalWinPanel.getComponent(
                        h.Skeleton
                      )),
                      this.animTotalWin &&
                        this.animTotalWin.findAnimation(O) &&
                        this.animTotalWin.findAnimation(S) &&
                        (this.animTotalWin.setMix(O, S, 0.1),
                        this.animTotalWin.setAnimation(0, O, !1),
                        this.animTotalWin.addAnimation(0, S, !0));
                  }),
                  (a.update = function () {
                    this.isUpdating &&
                      (this.labelWinAmount.string = T(this.currentValue));
                  }),
                  (a.close = function () {
                    var t = this;
                    this.canClose &&
                      ((this.canClose = !1),
                      (this.isUpdating = !1),
                      (this.closeBtn.getComponent(c).interactable = !1),
                      this.tweenTotalWin &&
                        (this.tweenTotalWin.stop(),
                        (this.tweenTotalWin = null)),
                      (this.labelWinAmount.string = T(this.content.winAmount)),
                      this.scheduleOnce(function () {
                        t.exit();
                      }, 2.5));
                  }),
                  (a.exit = function () {
                    var t = this;
                    (this.closeBtn.getComponent(c).interactable = !1),
                      this.mainDirector &&
                        this.guiMgr.onIngameEvent(W.OnCutsceneClose),
                      this.stopSoundTotalWin(),
                      u(this)
                        .call(function () {
                          t.fadeOut(t.node, 0.3);
                        })
                        .delay(0.3)
                        .call(function () {
                          t.callback && t.callback(),
                            (t.callback = null),
                            t.node.emit("STOP"),
                            p(t.node, 1),
                            (t.node.active = !1);
                        })
                        .start();
                  }),
                  (a.playSoundTotalWin = function () {
                    this.soundPlayer.stopAllAudio(),
                      this.soundPlayer && this.soundPlayer.playSfx("TOTAL_WIN");
                  }),
                  (a.stopSoundTotalWin = function () {
                    this.soundPlayer && this.soundPlayer.stopSfx("TOTAL_WIN"),
                      this.soundPlayer && this.soundPlayer.playMainBGM();
                  }),
                  n
                );
              })(m)).prototype,
              "spineTotalWinPanel",
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
            (P = n(v.prototype, "bgOverlay", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = v))
          ) || b)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TouchPayableSymbol9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (e) {
    "use strict";
    var t, n, i, o, s, r, a, l, c, h, f;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (r = e._decorator),
            (a = e.Node),
            (l = e.tween),
            (c = e.UITransform),
            (h = e.Layout);
        },
        function (e) {
          f = e.GameObject;
        },
      ],
      execute: function () {
        var u, y, d, v, S, b, m;
        s._RF.push(
          {},
          "f9685DCeg9AyJ+bdKhLijlx",
          "TouchPayableSymbol9937",
          void 0
        );
        var p = r.ccclass,
          L = r.property;
        e(
          "TouchPayableSymbol9937",
          ((u = p("TouchPayableSymbol9937")),
          (y = L({ type: a })),
          (d = L({ type: a })),
          u(
            ((b = t(
              (S = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, s = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    i(t, "infoSymbol", b, o(t)),
                    i(t, "listBlockNode", m, o(t)),
                    (t.eventListenerManager = null),
                    (t.tweenFadeIn = null),
                    (t.isClickInfo = !1),
                    t
                  );
                }
                n(t, e);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    var t = this;
                    e.prototype.onLoad.call(this),
                      this.node.on(
                        "SHOW_INFO_SYMBOL",
                        this.showInfoSymbol,
                        this
                      ),
                      this.node.on(
                        "HIDE_INFO_SYMBOL",
                        this.hideInfoSymbol,
                        this
                      ),
                      this.infoSymbol.on(
                        a.EventType.TOUCH_END,
                        this.hideInfoSymbol,
                        this
                      ),
                      this.eventListenerManager ||
                        (this.eventListenerManager =
                          this.mainDirector.eventManager),
                      this.registerEvent(),
                      (this.node.active = !1),
                      this.listBlockNode.forEach(function (e) {
                        e.on(a.EventType.TOUCH_START, t.onBlockTouchStarted, t);
                      });
                  }),
                  (s.registerEvent = function () {
                    this.eventListenerManager &&
                      (this.eventListenerManager.on(
                        "SHOW_SYMBOL_PAYTABLE_INFO",
                        this.showInfoSymbol,
                        this
                      ),
                      this.eventListenerManager.on(
                        "HIDE_SYMBOL_PAYTABLE_INFO",
                        this.hideInfoSymbol,
                        this
                      ));
                  }),
                  (s.unRegisterAll = function () {
                    this.eventListenerManager &&
                      this.eventListenerManager.targetOff(this);
                  }),
                  (s.showInfoSymbol = function (e) {
                    var t = this;
                    0 == this.node.active &&
                      ((this.node.active = !0),
                      (this.infoSymbol.active = !0),
                      this.setOpacity(this.node, 0),
                      this.fadeTo(this.node, 0.03, 255),
                      this.tweenFadeIn && this.tweenFadeIn.stop(),
                      (this.tweenFadeIn = l(this.node)
                        .delay(0.03)
                        .call(function () {
                          (t.tweenFadeIn = null),
                            t.eventListenerManager &&
                              t.eventListenerManager.emit(
                                "ON_SHOW_SYMBOL_INFO",
                                !0
                              ),
                            t.listBlockNode.forEach(function (e) {
                              e.active = !0;
                            });
                        })
                        .start())),
                      e && this.soundPlayer && this.soundPlayer.playSFXClick();
                    var n = e.symbol,
                      i = e.config.SYMBOL_WIDTH;
                    this.infoSymbol.emit("UPDATE_DATA", n);
                    var o = e.parent
                        .getComponent(c)
                        .convertToWorldSpaceAR(e.getPosition()),
                      s = this.infoSymbol.parent
                        .getComponent(c)
                        .convertToNodeSpaceAR(o);
                    e.isLeftBorder
                      ? this.infoSymbol.emit(
                          "UPDATE_LAYOUT",
                          h.HorizontalDirection.LEFT_TO_RIGHT,
                          s,
                          n,
                          i
                        )
                      : this.infoSymbol.emit(
                          "UPDATE_LAYOUT",
                          h.HorizontalDirection.RIGHT_TO_LEFT,
                          s,
                          n,
                          i
                        );
                  }),
                  (s.hideInfoSymbol = function (e) {
                    void 0 === e && (e = !0),
                      this.eventListenerManager &&
                        this.eventListenerManager.emit(
                          "ON_SHOW_SYMBOL_INFO",
                          !1
                        ),
                      (this.infoSymbol.active = !1),
                      (this.node.active = !1),
                      (this.isClickInfo = e);
                  }),
                  (s.onBlockTouchStarted = function (e) {
                    this.listBlockNode.forEach(function (e) {
                      e.active = !1;
                    }),
                      this.hideInfoSymbol(!1);
                  }),
                  (s.onDestroy = function () {
                    this.unRegisterAll();
                  }),
                  t
                );
              })(f)).prototype,
              "infoSymbol",
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
            (m = t(S.prototype, "listBlockNode", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (v = S))
          ) || v)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Turbo9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./Turbo.ts",
    "./EventNames.ts",
  ],
  function (t) {
    "use strict";
    var e, n, o, i, r, a, u, s, c, l, b, f;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (a = t._decorator),
            (u = t.Node),
            (s = t.sys),
            (c = t.Button);
        },
        function (t) {
          l = t.TutorialTriggerType;
        },
        function (t) {
          b = t.Turbo;
        },
        function (t) {
          f = t.default;
        },
      ],
      execute: function () {
        var h, p, T, g, d, v, O;
        r._RF.push({}, "9a115vaIyFFv5xg34D3SW4S", "Turbo9937", void 0);
        var S = a.ccclass,
          y = a.property;
        t(
          "Turbo9937",
          ((h = S("Turbo9937")),
          (p = y(u)),
          (T = y(u)),
          h(
            ((v = e(
              (d = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    o(e, "btnOn", v, i(e)),
                    o(e, "btnOff", O, i(e)),
                    e
                  );
                }
                n(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("ENABLE_TURBO", this.enableTurbo, this);
                  }),
                  (r.loadTurboConfig = function () {
                    var t = this.config.GAME_ID,
                      e =
                        JSON.parse(
                          s.localStorage.getItem("turboValueWithGame") || "{}"
                        )[t] || !1;
                    this.dataStore.setTurbo(e), this.updateStateButton();
                  }),
                  (r.saveTurboConfig = function (e) {
                    t.prototype.saveTurboConfig.call(this, e),
                      this.updateStateButton();
                  }),
                  (r.turboToggle = function () {
                    this.soundPlayer && this.soundPlayer.playSFXClick();
                    var t = !this.btnOn.active;
                    this.dataStore.setTurbo(t),
                      this.saveTurboConfig(t),
                      this.showToolTip(t),
                      this.guiMgr.onIngameEvent(l.TurboClick, "TURBO_CLICK"),
                      (this.dataStore.countF2R = 0);
                  }),
                  (r.turnOffTurbo = function () {
                    this.dataStore.setTurbo(!1),
                      this.eventManager.emit(f.TURBO_OFF),
                      this.updateStateButton();
                  }),
                  (r.turnOnTurbo = function () {
                    this.dataStore.setTurbo(!0),
                      this.eventManager.emit(f.TURBO_ON),
                      this.updateStateButton();
                  }),
                  (r.updateStateButton = function () {
                    var t = this.dataStore.modeTurbo;
                    (this.btnOn.active = t), (this.btnOff.active = !t);
                  }),
                  (r.enableTurbo = function () {
                    (this.btnOn.getComponent(c).interactable = !0),
                      (this.btnOff.getComponent(c).interactable = !0);
                  }),
                  (r.showToolTip = function (t) {
                    var e = t ? 0 : 1;
                    this.guiMgr.node.emit("SHOW_SMALL_TOOL_TIP", e);
                  }),
                  e
                );
              })(b)).prototype,
              "btnOn",
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
            (O = e(d.prototype, "btnOff", [T], {
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
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UIManager9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./UIManager.ts"],
  function (t) {
    "use strict";
    var o, i, n, e, a, l, s, u, r, h;
    return {
      setters: [
        function (t) {
          (o = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (l = t._decorator),
            (s = t.Node),
            (u = t.Button),
            (r = t.tween);
        },
        function (t) {
          h = t.UIManager;
        },
      ],
      execute: function () {
        var c,
          p,
          f,
          I,
          m,
          b,
          B,
          T,
          _,
          d,
          y,
          O,
          S,
          P,
          w,
          H,
          k,
          N,
          W,
          L,
          g,
          A,
          E,
          M,
          v;
        a._RF.push({}, "21024NmFkdPbYAazmm76Znc", "UIManager9937", void 0);
        var D = l.ccclass,
          F = l.property;
        t(
          "UIManager9937",
          ((c = D("UIManager9937")),
          (p = F(s)),
          (f = F(s)),
          (I = F(s)),
          (m = F(s)),
          (b = F(s)),
          (B = F(s)),
          (T = F(s)),
          (_ = F(s)),
          (d = F(s)),
          (y = F(s)),
          (O = F(u)),
          c(
            ((w = o(
              (P = (function (t) {
                function o() {
                  for (
                    var o, i = arguments.length, a = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    a[l] = arguments[l];
                  return (
                    (o = t.call.apply(t, [this].concat(a)) || this),
                    n(o, "menuBar", w, e(o)),
                    n(o, "autoSpinPanel", H, e(o)),
                    n(o, "touchPayable", k, e(o)),
                    n(o, "betSelection", N, e(o)),
                    n(o, "labelHolder", W, e(o)),
                    n(o, "blockInput", L, e(o)),
                    n(o, "menuBtn", g, e(o)),
                    n(o, "smallToolTip", A, e(o)),
                    n(o, "jackpotPopup", E, e(o)),
                    n(o, "autoBtn", M, e(o)),
                    n(o, "bottomButtons", v, e(o)),
                    o
                  );
                }
                i(o, t);
                var a = o.prototype;
                return (
                  (a.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "SHOW_INFO_SYMBOL",
                        this.showSymbolInfo,
                        this
                      ),
                      this.node.on(
                        "HIDE_INFO_SYMBOL",
                        this.hideInfoSymbol,
                        this
                      ),
                      this.node.on("UPDATE_WIN_INFO", this.updateWinInfo, this),
                      this.node.on("HIDE_WIN_INFO", this.hideWinInfo, this),
                      this.node.on("SHOW_TOOL_TIP", this.showToolTip, this),
                      this.node.on("HIDE_JACKPOT", this.hideJackpot, this),
                      this.node.on("SHOW_JACKPOT", this.showJackpot, this),
                      this.node.on("CAN_BLOCK_INPUT", this.canBlockInput, this),
                      this.node.on(
                        "PLAY_ANIM_TOTAL_WIN",
                        this.playAnimTotalWin,
                        this
                      ),
                      this.node.on(
                        "SHOW_TOOL_TIP_FIST_TIME",
                        this.showToolTipFistTime,
                        this
                      ),
                      this.node.on(
                        "HIDE_BET_SELECTION",
                        this.hideBetSelectionPanel,
                        this
                      ),
                      this.node.on(
                        "SHOW_SMALL_TOOL_TIP",
                        this.showSmallToolTip,
                        this
                      ),
                      this.node.on(
                        "SHOW_JACKPOT_POPUP",
                        this.showJackpotPopup,
                        this
                      ),
                      this.node.on("FADE_BUTTONS", this.fadeButtons, this),
                      this.node.on(
                        "DISABLE_BOTTOM_BUTTON",
                        this.disableBottomButtons,
                        this
                      ),
                      this.node.on(
                        "ENABLE_BOTTOM_BUTTON",
                        this.enableBottomButtons,
                        this
                      );
                  }),
                  (a.showSymbolInfo = function (t) {
                    this.touchPayable.emit("SHOW_INFO_SYMBOL", t);
                  }),
                  (a.hideInfoSymbol = function () {
                    this.touchPayable.emit("HIDE_INFO_SYMBOL");
                  }),
                  (a.showAutoSpinPanel = function () {
                    this.soundPlayer && this.soundPlayer.playSFXClick(),
                      this.autoSpinPanel.emit("SHOW");
                  }),
                  (a.hideAutoSpinPanel = function () {
                    this.autoSpinPanel.emit("HIDE");
                  }),
                  (a.showBetHistory = function () {
                    this.temporaryBlockBottomButtons(),
                      t.prototype.showBetHistory.call(this);
                  }),
                  (a.updateWinInfo = function (t, o) {
                    void 0 === o && (o = null),
                      this.paylineInfo.emit("UPDATE_WIN_INFO", t, o);
                  }),
                  (a.hideWinInfo = function () {
                    this.paylineInfo.emit("HIDE_WIN_INFO");
                  }),
                  (a.hideJackpot = function () {
                    this.topUI && (this.topUI.active = !1);
                  }),
                  (a.showJackpot = function () {
                    this.topUI && (this.topUI.active = !0);
                  }),
                  (a.canBlockInput = function (t) {
                    this.blockInput && (this.blockInput.active = t);
                  }),
                  (a.showMenuBar = function () {
                    this.soundPlayer && this.soundPlayer.playSFXClick(),
                      this.menuBar && this.menuBar.emit("SHOW"),
                      this.temporaryBlockBottomButtons();
                  }),
                  (a.hideMenuBar = function () {
                    this.menuBar && this.menuBar.emit("HIDE");
                  }),
                  (a.showJackpotHistory = function () {
                    this.temporaryBlockBottomButtons(),
                      t.prototype.showJackpotHistory.call(this);
                  }),
                  (a.switchToTrialMode = function () {
                    this.paylineInfo.emit("HIDE_WIN_INFO"),
                      t.prototype.switchToTrialMode.call(this);
                  }),
                  (a.playAnimTotalWin = function (t, o) {
                    void 0 === o && (o = null),
                      this.paylineInfo.emit("PLAY_ANIM_TOTAL_WIN", t, o);
                  }),
                  (a.showToolTip = function () {
                    this.paylineInfo.emit("SHOW_TOOL_TIP");
                  }),
                  (a.showToolTipFistTime = function (t) {
                    this.paylineInfo.emit("SHOW_TOOL_TIP_GAME_MODE", t);
                  }),
                  (a.temporaryBlockBottomButtons = function () {
                    var t = this;
                    (this.blockInput.active = !0),
                      this.scheduleOnce(function () {
                        t.blockInput.active = !1;
                      }, 0.5);
                  }),
                  (a.hideBetSelectionPanel = function () {
                    this.betSelection.emit("HIDE");
                  }),
                  (a.showBetSelectionPanel = function () {
                    this.hideInfoSymbol(),
                      this.betSelection.emit("SHOW"),
                      this.temporaryBlockBottomButtons();
                  }),
                  (a.showSmallToolTip = function (t) {
                    this.smallToolTip.emit("SHOW_SMALL_TOOL_TIP", t);
                  }),
                  (a.showJackpotPopup = function (t) {
                    this.jackpotPopup.emit("SHOW", t);
                  }),
                  (a.fadeButtons = function (t) {
                    var o = this;
                    void 0 === t && (t = !1);
                    var i = t ? 255 : 0,
                      n = t ? 0.5 : 0;
                    r(this.node)
                      .delay(n)
                      .call(function () {
                        o.fadeTo(o.bet, 0.5, i), o.fadeTo(o.autoBtn, 0.5, i);
                      })
                      .start();
                  }),
                  (a.extraSpinCheck = function () {
                    return !(
                      this.betSelection.isShowing ||
                      this.autoSpinPanel.isShowing ||
                      this.menuBar.isShowing
                    );
                  }),
                  (a.disableBottomButtons = function () {
                    this.bottomButtons.forEach(function (t) {
                      t.interactable = !1;
                    });
                  }),
                  (a.enableBottomButtons = function () {
                    this.bottomButtons.forEach(function (t) {
                      t.interactable = !0;
                    });
                  }),
                  o
                );
              })(h)).prototype,
              "menuBar",
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
            (H = o(P.prototype, "autoSpinPanel", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = o(P.prototype, "touchPayable", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = o(P.prototype, "betSelection", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = o(P.prototype, "labelHolder", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = o(P.prototype, "blockInput", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = o(P.prototype, "menuBtn", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = o(P.prototype, "smallToolTip", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = o(P.prototype, "jackpotPopup", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = o(P.prototype, "autoBtn", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = o(P.prototype, "bottomButtons", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
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
  "chunks:///_virtual/WinAmount9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts", "./WinAmount.ts"],
  function (t) {
    "use strict";
    var n, o, i, u, e;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          u = t.formatMoney;
        },
        function (t) {
          e = t.WinAmount;
        },
      ],
      execute: function () {
        var r;
        o._RF.push({}, "198ffTa7wJJBJwJTx0wVDKf", "WinAmount9937", void 0);
        var s = i.ccclass;
        i.property,
          t(
            "WinAmount9937",
            s("WinAmount9937")(
              (r = (function (t) {
                function o() {
                  return t.apply(this, arguments) || this;
                }
                n(o, t);
                var i = o.prototype;
                return (
                  (i.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.labelWinAmount.string = "0");
                  }),
                  (i._updateLabelWinAmount = function () {
                    this.labelWinAmount.string =
                      this.currentValue > 0 ? "" + u(this._currentValue) : "0";
                  }),
                  o
                );
              })(e))
            ) || r
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WinEffect9937.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./CustomEnum.ts",
    "./EventNames.ts",
    "./WinEffectv2.ts",
  ],
  function (t) {
    "use strict";
    var i, n, e, s, o, a, r, h, u, l, c, p, m, f, d;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (r = t.Node),
            (h = t.sp),
            (u = t.Sprite),
            (l = t.tween),
            (c = t.Vec3);
        },
        function (t) {
          p = t.formatMoney;
        },
        function (t) {
          m = t.WinEffectLevel;
        },
        function (t) {
          f = t.default;
        },
        function (t) {
          d = t.WinEffectv2;
        },
      ],
      execute: function () {
        var A, g, W, w, y, S, v;
        o._RF.push({}, "37e4eQw/nBIwoTPmKvhAPUL", "WinEffect9937", void 0);
        var b = a.ccclass,
          B = a.property;
        t(
          "WinEffect9937",
          ((A = b("WinEffect9937")),
          (g = B({ type: r })),
          (W = B({ type: r })),
          A(
            ((S = i(
              (y = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    e(i, "coinEffect", S, s(i)),
                    e(i, "boardEffect", v, s(i)),
                    (i.coinSpine = void 0),
                    (i.boardSpine = void 0),
                    (i.targetAmount = void 0),
                    (i.bigWinAmount = void 0),
                    (i.listActionBigWin = void 0),
                    i
                  );
                }
                n(i, t);
                var o = i.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.coinSpine = this.coinEffect.getComponent(
                        h.Skeleton
                      )),
                      (this.boardSpine = this.boardEffect.getComponent(
                        h.Skeleton
                      ));
                  }),
                  (o.initValue = function () {
                    (this.canFinish = !1),
                      this.winInfo.setScale(1, 1, 1),
                      (this.currentValue = 0),
                      (this.currentTitle = 0),
                      (this.label.string = ""),
                      this.title &&
                        (this.title.getComponent(u).spriteFrame =
                          this.titleFrame[0]);
                    var t = this.content,
                      i = t.currentBetData,
                      n = t.bigWinConfig,
                      e = [];
                    n &&
                      ((e = n.split(",")),
                      (this.megaRate = e[m.MEGA] || this.megaRate),
                      (this.superRate = e[m.SUPER] || this.superRate)),
                      (this.bigWinAmount = 10 * i),
                      (this.megaWinAmount = i * Number(this.megaRate)),
                      (this.superWinAmount = i * Number(this.superRate)),
                      (this.listActionBigWin = []),
                      this.listActionBigWin.push("BIG_WIN"),
                      this.content.winAmount > this.megaWinAmount &&
                        this.listActionBigWin.push("MEGA_WIN"),
                      this.content.winAmount > this.superWinAmount &&
                        this.listActionBigWin.push("SUPER_WIN"),
                      this.listActionBigWin.push("END"),
                      (this.isUpdating = !0),
                      (this.speedUp = !1),
                      (this.skippable = !0),
                      (this.isSkipEffect =
                        this.content.winAmount >= 2 * this.superWinAmount);
                  }),
                  (o.startUpdateWinAmount = function (t) {
                    var i = this;
                    this.targetAmount = this.content.winAmount;
                    var n = 0;
                    if (!this.canFinish) {
                      if ((this.soundPlayer.stopAllEffects(), "BIG_WIN" === t))
                        (n = this.bigWinDur),
                          this.megaWinAmount < this.targetAmount &&
                            (this.targetAmount = this.megaWinAmount),
                          this.soundPlayer.playSfx("BigWin1");
                      else if ("MEGA_WIN" === t)
                        (n = this.megaWinDur),
                          this.superWinAmount < this.targetAmount &&
                            (this.targetAmount = this.superWinAmount),
                          this.soundPlayer.stopSfx("BigWin1"),
                          this.soundPlayer.playSfx("BigWin2");
                      else {
                        if ("SUPER_WIN" !== t)
                          return (
                            this.soundPlayer.stopSfx("BigWin3"),
                            this.soundPlayer.playSfx("BigWinEnd"),
                            void this.finish()
                          );
                        (n = this.superWinDur),
                          this.soundPlayer.stopSfx("BigWin2"),
                          this.soundPlayer.playSfx("BigWin3");
                      }
                      this.nodeTween && this.nodeTween.stop(),
                        (this.nodeTween = l(this)),
                        this.nodeTween
                          .to(n, { currentValue: this.targetAmount })
                          .call(function () {
                            i.displayBigWin();
                          }),
                        this.nodeTween.start();
                    }
                  }),
                  (o.update = function () {
                    this.isUpdating &&
                      (this.label.string = p(this.currentValue));
                  }),
                  (o.displayBigWin = function () {
                    if (
                      this.listActionBigWin &&
                      this.listActionBigWin.length > 0
                    ) {
                      var t = this.listActionBigWin.shift();
                      t &&
                        ("END" != t &&
                          (2 == this.currentTitle
                            ? this.setAnimation(
                                this.superWinAnimStart,
                                this.superWinAnimIdle
                              )
                            : 1 == this.currentTitle &&
                              this.setAnimation(
                                this.megaWinAnimStart,
                                this.megaWinAnimIdle
                              )),
                        this.currentTitle++,
                        this.changeTitle(this.currentTitle),
                        this.startUpdateWinAmount(t));
                    }
                  }),
                  (o.showEffectWin = function () {
                    var t = this;
                    this.overlayNode && (this.overlayNode.active = !0),
                      (this.winAmountTween = l(this.winAmount)
                        .repeatForever(
                          l()
                            .to(0.2, { scale: new c(1.2, 1.2, 1.2) })
                            .to(0.2, { scale: new c(1, 1, 1) })
                        )
                        .start()),
                      this.initValue(),
                      this.playSoundStart(),
                      this.boardSpine &&
                        (this.boardSpine.setAnimation(0, "Appear_Board", !1),
                        this.boardSpine.addAnimation(0, "Static_Board", !0)),
                      l(this.node)
                        .call(function () {
                          t.startParticle(),
                            t.playCoinSound(),
                            t.displayBigWin(),
                            t.setAnimation(t.bigWinAnimStart, t.bigWinAnimIdle);
                        })
                        .start();
                  }),
                  (o.onClick = function () {
                    if (
                      this.isUpdating &&
                      !this.speedUp &&
                      !this.canFinish &&
                      this.skippable
                    ) {
                      this.winAmountTween.stop(),
                        (this.currentValue = this.targetAmount);
                      l(this.winAmount)
                        .repeatForever(
                          l()
                            .to(0.13, { scale: new c(1.2, 1.2, 1.2) })
                            .to(0.13, { scale: new c(1, 1, 1) })
                        )
                        .start(),
                        this.displayBigWin();
                    }
                  }),
                  (o.setAnimation = function (t, i) {
                    var n = this;
                    t &&
                      i &&
                      this.winAnimSkeleton &&
                      this.coinSpine &&
                      (this.winAnimSkeleton.setAnimation(0, t, !1),
                      this.winAnimSkeleton.setCompleteListener(function (e) {
                        n.winAnimSkeleton.setCompleteListener(function () {}),
                          e.animation.name === t &&
                            n.winAnimSkeleton.setAnimation(0, i, !0);
                      }),
                      this.coinSpine.setAnimation(0, t, !1),
                      this.coinSpine.setCompleteListener(function (e) {
                        n.coinSpine.setCompleteListener(function () {}),
                          e.animation.name === t &&
                            n.coinSpine.setAnimation(0, i, !0);
                      }));
                  }),
                  (o.finish = function () {
                    var t = this;
                    (this.isUpdating = !1),
                      (this.label.string = p(this.content.winAmount)),
                      this.winAmountTween && this.winAmountTween.stop(),
                      this.titleTween && this.titleTween.stop(),
                      this.nodeTween && this.nodeTween.stop(),
                      this.stopParticle(),
                      l(this.winInfo)
                        .delay(this.hideTime)
                        .call(function () {
                          (t.label.string = ""),
                            t.eventManager.emit(f.BIGWIN_END),
                            t.exit(),
                            t.soundPlayer && t.soundPlayer.stopAllAudio(),
                            t.soundPlayer && t.soundPlayer.playMainBGM();
                        })
                        .start();
                  }),
                  i
                );
              })(d)).prototype,
              "coinEffect",
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
            (v = i(y.prototype, "boardEffect", [W], {
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
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WinLineEffect9937.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (i) {
    "use strict";
    var t, n, e, o, a, s, c, r, l, h, u;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (n = i.inheritsLoose),
            (e = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (a = i.cclegacy),
            (s = i._decorator),
            (c = i.Node),
            (r = i.sp),
            (l = i.tween),
            (h = i.Color);
        },
        function (i) {
          u = i.GameObject;
        },
      ],
      execute: function () {
        var d, f, p, w, m;
        a._RF.push({}, "1db1eckFrdA4KM90DbkYSbE", "WinLineEffect9937", void 0);
        var L = s.ccclass,
          v = s.property;
        i(
          "WinLineEffect9937",
          ((d = L("WinLineEffect9937")),
          (f = v(c)),
          d(
            ((m = t(
              (w = (function (i) {
                function t() {
                  for (
                    var t, n = arguments.length, a = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (t = i.call.apply(i, [this].concat(a)) || this),
                    e(t, "winLineNode", m, o(t)),
                    (t.animation = void 0),
                    (t.tweenShow = void 0),
                    t
                  );
                }
                n(t, i);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on("PLAY_ANIMATION", this.playAnimation, this),
                      this.node.on("STOP_ANIMATION", this.stopAnimation, this),
                      this.node.on(
                        "ENABLE_HIGHLIGHT",
                        this.enableHighlight,
                        this
                      ),
                      this.node.on(
                        "DISABLE_HIGHLIGHT",
                        this.disableHighlight,
                        this
                      ),
                      this.node.on("RESET", this.reset, this),
                      (this.animation = this.winLineNode.getComponent(
                        r.Skeleton
                      ));
                  }),
                  (a.playAnimation = function (i) {
                    var t = this;
                    void 0 === i && (i = !1);
                    var n = 4 / 6,
                      e = 5 / 6;
                    i && ((n = 2 / 6), (e = 0.6)),
                      (this.winLineNode.active = !0),
                      (this.animation.timeScale = 1 == i ? 1.6 : 1),
                      this.tweenShow && this.tweenShow.stop(),
                      (this.tweenShow = l(this.winLineNode)
                        .call(function () {
                          t.animation.setAnimation(0, "idle", !1);
                        })
                        .delay(n)
                        .call(function () {
                          t.animation.setAnimation(0, "fade_out", !1);
                        })
                        .delay(e)
                        .call(function () {
                          (t.tweenShow = null), (t.node.active = !1);
                        })
                        .start());
                  }),
                  (a.stopAnimation = function () {
                    this.winLineNode.active = !1;
                  }),
                  (a.enableHighlight = function () {
                    this.animation.color = new h(255, 255, 255, 255);
                  }),
                  (a.disableHighlight = function () {
                    this.animation.color = new h(255, 255, 255, 0);
                  }),
                  (a.reset = function () {
                    this.animation.color = new h(255, 255, 255, 255);
                  }),
                  t
                );
              })(u)).prototype,
              "winLineNode",
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
            (p = w))
          ) || p)
        );
        a._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/cc30-trutien-9937",
    "chunks:///_virtual/cc30-trutien-9937"
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
